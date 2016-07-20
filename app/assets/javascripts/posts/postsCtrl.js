angular.module('zoeticLinks')
.controller('PostsCtrl', [
    '$scope', 
    'posts',
    'post', 
    function($scope, posts, post){
      $scope.post = post;

      //Function to add comments.
      $scope.addComment = function(){
         //Catch empty or no comment.
         if(!$scope.body || $scope.body === '') { return; }

         posts.addComment(post.id, {
            body: $scope.body, 
            author: 'user',
            upvotes: 0
         }).then(function (comment) {
           $scope.post.comments.push(comment);
         });

         $scope.body = '';
      };


      $scope.incrementUpvotes = function(comment){
        posts.upvoteComment(post, comment);
      };

}]);
