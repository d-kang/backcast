var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('change', this.render(), this);
    //what robin did: this.listenTo(this.collection, 'select', function(selection) {
    // this.mode = selection;
    // this.render();
    //})
    this.listenTo(this.collection, 'select', function(selection) {
      this.mode = selection;
      this.render();
    });
  },

  render: function() {
    //if !this.model
    if (!this.model) {
      this.$el.html('<div class="loading">Please wait...</div>');
    } else {
      this.$el.html(this.template(this.model.attributes));
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
