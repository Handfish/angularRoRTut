angular.module('flapperNews', [])

//Main controller.
.controller('MainCtrl', [
      '$scope',

      function($scope){
         $scope.test = 'Hello world!';
      }
      
      ]);

//Declaring posts in a method.
$scope.posts = [
   {title: 'post 1', upvotes: 1},
   {title: 'post 2', upvotes: 9},
   {title: 'post 3', upvotes: 5},
   {title: 'post 4', upvotes: 6},
   {title: 'post 5', upvotes: 0},
];

//Function to add posts.
$scope.addPost = function(){
   $scope.posts.push({title: 'A new post!', upvotes: 0});
};
