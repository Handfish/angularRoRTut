//Posts factory
.factory('posts', ['$http', function($http){
  var output = {
    posts: []
  };

  output.getAll = function() {
    return $http.get('/posts.json').success(function(data){
      angular.copy(data, output.posts);
    });
  };

  return output;
}])
