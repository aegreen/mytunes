// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on( 'add'     , this.onAdd   );
    this.on( 'ended'   , this.dequeue );
    this.on( 'dequeue' , this.dequeue );
    this.on( 'unqueue' , this.unqueue );
  },

  playFirst: function() {   
    this.at(0).play();
  },

  onAdd: function() {
    this.length < 2 && this.playFirst();
  },

  dequeue: function() {
    this.remove(this.at(0));
    this.length > 0 && this.playFirst();
  },

  unqueue: function(song) {
    if (this.at(0) === song && this.length > 1) {
      this.remove(song);
      this.playFirst();
    } else {
      this.remove(song);
    }
  }

});