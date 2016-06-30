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
      .then(function successCallback(data){
          console.log(2);
          angular.copy(data, o.posts);
       },
       function errorCallback(data){
          var o = {
            posts: [{title:"No.", upvotes:-100}]
          };
       })
    };
  

  o.create = function(post) {
    return $http.post('/posts.json', post).success(function(data){
      o.posts.push(data);
    });
  };

  return o;
}])
