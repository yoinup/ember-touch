
/**
@module ember
@submodule ember-touch
*/

/**
   An instance of this class is injected in the Application namespace
   to registry `GestureDelegate` instances in an application.

   Whenever a `Gesture` setups its `delegateName` property, it
   assigns its `gestureDelegate` instance calling the `find` method of the
   `GestureDelegates` instance.

  @class GestureDelegates
  @namespace Ember
  @extends Em.Object
  @private
*/

Em.GestureDelegates = Em.Object.extend({

  /**
    @method _delegates
    @private
  */
  _delegates: {},

  /**
    @method add
  */
  add: function(delegate) {
    this._delegates[ delegate.get('name') ] = delegate;
  },

  /**
    @method find
  */
  find: function( name ) {
    return this._delegates[name];
  },

  /**
    @method clear
  */
  clear: function() {
    this._delegates = {};
  }


});
