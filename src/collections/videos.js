var Videos = Backbone.Collection.extend({

  model: Video,

  trigger: function() {
    var collection = new Videos();
    var vlView = new VideoListView({ collection });
    vlView.render();
  },

  select: function() {
    this.trigger('select', this);
  },

  search: function(query) {
    // var query = $('.form-control').val();
    Backbone.ajax({
      url:  'https://www.googleapis.com/auth/youtube',
      type: 'GET',
      dataType: 'json',
      data: {q: query},
      contentType: 'application/json',
      success: function (data) { console.log('success'); },
      error: function (error) { console.log('failed'); }
    });
  },

  parse: function(data) {
    // var response = collection.parse({ items: fakeVideoData });
    // expect(response).to.be.equal(fakeVideoData);
    return data.items;
  }

});
