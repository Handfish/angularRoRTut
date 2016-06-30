// Posts factory
angular.module("zoeticLinks")
.factory('posts', [
 '$http', 

 function($http){

  var o = {
    posts: [{title:"Yo.", upvotes:100}]
  };


  o.getAll = function() {
    return $http.get('/posts.json')
      .then(function (response){
          angular.copy(response.data, o.posts);
       },
       function (data){
          o = {
            posts: [{title:"No.", upvotes:-100}]
          };
       })
    };

/*
      .success(function(data){
        angular.copy(data, o.posts);
      });
  };
*/

  o.create = function(post) {
    return $http.post('/posts.json', post).success(function(data){
      o.posts.push(data);
    });
  };

  return o;
}])
