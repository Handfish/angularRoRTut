//Posts factory
angular.module("zoeticLinks")
.factory('posts', ['$http', function($http){
  var output = {
    posts: []
  };

  output.getAll = function() {
    return $http.get('/posts.json').success(function(data){
      angular.copy(data, output.posts);
    });
  };

  output.create = function(post) {
    return $http.post('/posts.json', post).success(function(data){
      o.posts.push(data);
    });
  };

  return output;
}])
