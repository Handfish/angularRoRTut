angular.module('zoeticLinks', ['ui.router'])

//Posts factory
.factory('posts', [function(){
   var output = {
      posts: []
   };

   return output;
}])

//Main controller.
.controller('MainCtrl', [
      '$scope',
      'posts',


      function($scope, posts){
         $scope.test = 'Hello world!';
         $scope.posts = posts.posts;
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
   //Catch empty or no title.
   if(!$scope.title || $scope.title === '') { return; }

   $scope.posts.push({
      title: $scope.title, 
      link: $scope.link,
      upvotes: 0
   });

   $scope.title = '';
   $scope.link = '';
};


$scope.incrementUpvotes = function(post){
   //Catch empty or no title.
   post.upvotes += 1; 
};
