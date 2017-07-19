var VideoListEntryView = Backbone.View.extend({

  // initialize: function() {
  //   this.$('.video-list-entry-title').on('change', this.model.select(), this);
  // },

  events: {
    // 'click': function() {
    //   console.log('hi');
    //   this.model.select()
    // }
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function() {
    console.log('hi');
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
