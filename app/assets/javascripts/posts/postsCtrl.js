angular.module('zoeticLinks')
.controller('PostsCtrl', ['$scope', '$stateParans', 'posts', function($scope, $stateParams, posts){
      $scope.posts = posts.posts[$stateParams.id];
      
      //Function to add comments.
      $scope.addComment = function(){
         //Catch empty or no comment.
         if(!$scope.body || $scope.body === '') { return; }

         $scope.posts.comments.push({
            body: $scope.body, 
            author: 'user',
            upvotes: 0
         });

         $scope.body = '';
      };


      $scope.incrementUpvotes = function(comment){
         //Catch empty or no comment.
         comment.upvotes += 1; 
      };

}]);
