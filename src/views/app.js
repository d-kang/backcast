var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    var collection = new Videos();
    var vpView = new VideoPlayerView({ collection });
    var searchView = new SearchView();
    searchView.render();
    this.videos.search();


    //this.model.select();
    // this.videos.select();
    //collection.select();
    //this.videos.on('change', this.collection.select(), this);
  },


  render: function() {
    this.$el.html(this.template());

    //call new videoListView with el: this.$('.list') .render()
    new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    }).render();

    new VideoPlayerView({
      model: this.videos.at(0),
      collection: this.videos,
      el: this.$('.player')
    }).render()
    return this;
  },

  template: templateURL('src/templates/app.html')

});
