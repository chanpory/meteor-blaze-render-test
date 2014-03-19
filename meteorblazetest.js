if (Meteor.isClient) {
  Template.comments.helpers({
    comments: function() {
      //Why does this fire twice?
      console.log(this);
      return Comments.find().fetch();
    }
  });

  Template.comments.events({
    'click input': function () {
      var replyId = new Meteor.Collection.ObjectID()._str;
       Comments.insert({_id: replyId, body:"Test comment"})
    }
  });
}

// Collections
Comments = new Meteor.Collection('comments');

