var Videos = Backbone.Collection.extend({

  model: Video,

  trigger: function() {
    var collection = new Videos();
    var vlView = new VideoListView({ collection });
    vlView.render();
  },

  select: function() {
    // console.log('this', this);
    // var view = new VideoPlayerView( {collection: this} )
    this.trigger('select', this);
    // view.render();
  }

});
