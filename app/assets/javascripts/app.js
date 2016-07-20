angular.module('zoeticLinks', ['ui.router', 'templates'])
.config([
'$stateProvider', 
'$urlRouterProvider', 
function($stateProvider, $urlRouterProvider) {

      $stateProvider
         .state('home', {
            url: '/home',
            templateUrl: 'home/_home.html',
            controller: 'MainCtrl',
            resolve: {
              postPromise: ['posts', function(posts) {
                return posts.getAll();
              }]
            }
         })

         .state('posts', {
            url: '/posts/{id}',
            templateUrl: 'posts/_posts.html',
            controller: 'PostsCtrl',
            resolve: {
              post: ['$stateParams', 'posts', function($stateParams, posts) {
                return posts.get($stateParams.id);
              }]
            }
         });

      $urlRouterProvider.otherwise('home');
   }
]);




//Declaring posts in a method.
/*
$scope.posts = [
   {title: 'post 1', upvotes: 1},
   {title: 'post 2', upvotes: 9},
   {title: 'post 3', upvotes: 5},
   {title: 'post 4', upvotes: 6},
   {title: 'post 5', upvotes: 0},
];
            resolve: {
              post: ['$stateParams', 'posts', function($stateParams, posts) {
                return posts.get($stateParams.id);
              }]
            }
*/
