if (Meteor.isClient) {
  Template.comments.helpers({
    comments: function() {
      console.log(this);
      return Comments.find().fetch();
    }
  });

  Template.comments.rendered = function(){
    // Why is this null now?
    console.log(this);
  };

  Template.comments.events({
    'click input': function () {
      var replyId = new Meteor.Collection.ObjectID()._str;
       Comments.insert({_id: replyId, body:"Test comment"})
    }
  });
}

// Collections
Comments = new Meteor.Collection('comments');

