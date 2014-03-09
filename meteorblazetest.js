if (Meteor.isClient) {
  Template.comments.helpers({
    comments: function() {
      return Comments.find().fetch();
    }
  });

  Template.comments.events({
    'click input': function () {
      Meteor.call("insertComment", {body:""});
    }
  });

  Template.comment.rendered = function(){
    //This should only fire once.
    foo();
  }
}

var foo = function(){
  console.log("rendered");
}

// Collections
Comments = new Meteor.Collection('comments');

// Methods
Meteor.methods({
  insertComment: function(commentAttributes) {
    var comment = _.extend(commentAttributes, {
      body: "Test comment",
      submitted: new Date().getTime()
    });

    return Comments.insert(comment);
  }
});
