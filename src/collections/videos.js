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
      data: {q: query},
      // url: "https://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&include_rts=true&screen_name=twitterapi&count=25",
      // data: "",
      // dataType: "json",
      // contentType: JSON.stringify(data)
      success: function success() { console.log('success') },
      error: function (error) { console.log('failed') }
    });
  },

  parse: function(data) {
    // var response = collection.parse({ items: fakeVideoData });
    // expect(response).to.be.equal(fakeVideoData);
    return data.items;
  }

});
