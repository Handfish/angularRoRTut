angular.module('zoeticLinks')
.controller('MainCtrl', [
    '$scope',
    'posts',
    function($scope, posts){

      $scope.posts = posts.posts;
      //Function to add posts.
      $scope.addPost = function(){
         //Catch empty or no title.
         if(!$scope.title || $scope.title === '') { return; }

         posts.create({
           title: $scope.title,
           link: $scope.link,
         });

         $scope.title = '';
         $scope.link = '';
      };


      $scope.incrementUpvotes = function(post){
         //Catch empty or no title.
         post.upvotes += 1; 
      };
      
}]);

/*
$scope.posts = [
   {title: 'post 1', upvotes: 1},
   {title: 'post 2', upvotes: 9},
   {title: 'post 3', upvotes: 5},
   {title: 'post 4', upvotes: 6},
   {title: 'post 5', upvotes: 0},
];
*/
