import Backbone from 'backbone';
import Order from '../models/order';

const OrderView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;

    // Listen to changes in the model and call render when they occur.
    this.listenTo(this.model, "change", this.render);
  },
  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click button.btn-cancel': 'cancelOrder',
  },
  cancelOrder: function(event) {
    console.log('Cancel Button Clicked');
    event.preventDefault();
    this.remove(); // remove orderView instance from ordersList
    this.model.destroy(); // destroy order model instance
  },
});

export default OrderView;
