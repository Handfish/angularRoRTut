//Main controller.
.controller('MainCtrl', '$scope','posts', function($scope, posts){

      $scope.posts = [
         {title: 'post 1', upvotes: 1},
         {title: 'post 2', upvotes: 9},
         {title: 'post 3', upvotes: 5},
         {title: 'post 4', upvotes: 6},
         {title: 'post 5', upvotes: 0},
      ];
      
      //$scope.posts = posts.posts;

      resolve: {
        postPromise: ['posts', function(posts) {
          return posts.getAll();
        }]
      };

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
