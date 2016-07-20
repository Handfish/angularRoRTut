// Posts factory
angular.module("zoeticLinks")
.factory('posts', [
 '$http', 

 function($http){

  var o = {
    posts: [{title:"Yo.", upvotes:100}]
  };

  // Get all posts
  //.success is deprecated. Using .then
  o.getAll = function() {
    return $http.get('/posts.json')
      .then(function (response){
         angular.copy(response.data, o.posts);
       },
       function (response){
         console.log("Get all failed.");
       })
    };

  // Create Function
  o.create = function(post) {
    return $http.post('/posts.json', post)
      .then(function(response){
        o.posts.push(response.data);
      },
      function (response){
         console.log("Failed to create new post.");
      })
    };
  
  // Upvote Function
  o.upvote = function(post) {
    return $http.put('/posts/' + post.id + '/upvote.json')
      .then(function(response){
        post.upvotes += 1;
      },
      function (response) {
        console.log ("Failed to upvote post.");
      })
  };

  // Get single post
  o.get = function(id) {
    return $http.get('/posts/' + id + '.json')
      .then(function(response){
        return response.data;
      },
      function (response) {
        console.log ("Failed to get post.")
      })
  };

  // Comment on posts
  o.addComment = function(id, comment) {
    return $http.post('/posts/' + id + '/comments.json', comment);
  };
  
  // Upvoting Comment.
  o.upvoteComment = function(post, comment) {
    return $http.put('/posts/' + post.id + '/comments/' + comment.id + '/upvote.json')
      .then(function (response){
        comment.upvotes += 1;
      },
      function (response){
        console.log("Failed to upvote comment.")
      })
  };

  return o;
}])
