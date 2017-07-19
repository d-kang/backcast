var Videos = Backbone.Collection.extend({

  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',

  // trigger: function() {
  //   var collection = new Videos();
  //   var vlView = new VideoListView({ collection });
  //   vlView.render();
  // },
  //
  // select: function() {
  //   this.trigger('select', this);
  // },

  search: function(query) {
    this.fetch({
      data: {
        part: 'snippet',
        q: query,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: true
      }
    });
  },

  parse: function(data) {
    return data.items;
  }

});
