// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
  },

  setSong: function(song){
    if (this.model !== song) {
      this.model = song;
      this.render();
    }
  },

  render: function(){
    this.$el.attr( 'src', this.model ? this.model.get('url') : '') ;
    this.$el.on( 'ended', this.model.ended.bind(this.model) );
    return this.$el;
  }

});
