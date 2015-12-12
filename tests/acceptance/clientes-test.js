import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'spinnerbank-ember/tests/helpers/start-app';

module('Acceptance | clientes', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /clientes', function(assert) {
  visit('/clientes');

  andThen(function() {
    assert.equal(currentURL(), '/clientes');
  });
});

test('should be 1 input', function(assert){
visit('/clientes');
andThen(function() {
    var input = find('input');
    assert.equal(input.length, 1);
  }); 
});
test('should be 1 button', function(assert){
visit('/clientes');
andThen(function() {
    var button = find('button');
    assert.equal(button.length, 2);
  });
});

test('should be 1 select', function(assert){
visit('/clientes');
andThen(function() {
    var select = find('select');
    assert.equal(select.length, 1);
  });
});