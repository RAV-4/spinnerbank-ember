App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.model = ['red', 'yellow', 'blue'];
App.set('model',['red','yellow','blue','green']);
/*App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});*/
