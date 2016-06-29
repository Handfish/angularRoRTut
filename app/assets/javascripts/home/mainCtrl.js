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
