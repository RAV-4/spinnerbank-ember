import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'spinnerbank-ember/tests/helpers/start-app';

module('Acceptance | login', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('should be 2 input', function(assert){
visit('/login');
andThen(function() {
    var input = find('input');
    assert.equal(input.length, 2);
  });
});

test('should be 1 button', function(assert){
visit('/login');
andThen(function() {
    var button = find('button');
    assert.equal(button.length, 2);
  });
});

