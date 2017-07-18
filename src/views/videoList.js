var VideoListView = Backbone.View.extend({

  //in initialize run this.listenTo(this.collection, 'sync', this)
  render: function() {
    // console.log('videoList render ran');

    this.$el.children().detach();
    this.$el.html(this.template());

    this.$('.video-list').append(this.collection.map(function(video) {
      return new VideoListEntryView({ model: video }).render().el;
    }));

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
