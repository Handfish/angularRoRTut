angular.module('zoeticLinks', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function('$stateProvider', '$urlRouterProvider') {
      $stateProvider

         .state('home', {
            url: '/home',
            templateUrl: '/home.html',
            controller: 'MainCtrl
         })

         .state('posts', {
            url: '/posts/{id}',
            templateUrl: '/posts.html',
            controller: 'PostsCtrl
         });

      $urlRouterProvider.otherwise('home');
   }
])


//Posts factory
.factory('posts', [function(){
   var output = {
      posts: []
   };

   return output;
}])

//Main controller.
.controller('MainCtrl', '$scope','posts', function($scope, posts){
      $scope.posts = posts.posts;

      //Function to add posts.
      $scope.addPost = function(){
         //Catch empty or no title.
         if(!$scope.title || $scope.title === '') { return; }

         $scope.posts.push({
            title: $scope.title, 
            link: $scope.link,
            upvotes: 0
            comments: [
               {author: 'Joe', body: 'Noiceeee post dude!', upvotes: 0},
               {author: 'Bob', body: 'Great idea but its actually a terrible idea.', upvotes: 0}
            ]
         });

         $scope.title = '';
         $scope.link = '';
      };


      $scope.incrementUpvotes = function(post){
         //Catch empty or no title.
         post.upvotes += 1; 
      };
      
}]);

//Posts controller.
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


//Declaring posts in a method.
$scope.posts = [
   {title: 'post 1', upvotes: 1},
   {title: 'post 2', upvotes: 9},
   {title: 'post 3', upvotes: 5},
   {title: 'post 4', upvotes: 6},
   {title: 'post 5', upvotes: 0},
];


