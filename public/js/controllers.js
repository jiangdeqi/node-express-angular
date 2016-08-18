<<<<<<< HEAD
<<<<<<< HEAD

 // Managing the poll list
app.controller('PollListCtrl',function($scope) {
    $scope.polls = [];
    $scope.usname = '看看好是不';
});
 // Voting / viewing poll results
app.controller('PollItemCtrl',function($scope, $routeParams) {
    $scope.poll = {};
     $scope.vote = function() {};
});

 // Creating a new poll
app.controller('PollNewCtrl',function($scope) {
     $scope.poll = {
         question: '',
         choices: [{
             text: ''
         }, {
             text: ''
         }, {
             text: ''
         }]
     };
     $scope.addChoice = function() {
         $scope.poll.choices.push({
             text: ''
         });
     };
     $scope.createPoll = function() {};
});


=======
=======
>>>>>>> 64073badafd8fc66994dc0c2834853bf2541e93a
//index控制器
app.controller('PollListCtrl', ['$scope',function($scope) {
    $scope.alert = '欢迎光临，杭州';
}]);


app.controller('indexCtrl', ['$scope','$http',function($scope,$http) {
    $scope.name = '大奇山森林公园';
    $scope.add = function(){
        var myData = {userid: $scope.userid ,password: $scope.password};
        
       $http.post('/addUser',myData)
        .success(function(data){
            console.log(data);
            alert('添加成功');
        });
    }

    $scope.tests = [  
        {  
        name: 'test1'  
        }, {  
        name: 'test2'  
        }, {  
        name: 'test3'  
        }  
    ];

}]);

//list
app.controller('ListCtrl', ['$scope',function($scope) {
    $scope.name = '姜德奇';
}]);

//new
app.controller('NewCtrl', ['$scope',function($scope) {
    $scope.name = '网仓三号。。';
}]);

//item
app.controller('ItemCtrl', ['$scope',function($scope) {
    $scope.name = '习近平';
<<<<<<< HEAD
}]);
>>>>>>> 64073badafd8fc66994dc0c2834853bf2541e93a
=======
}]);
>>>>>>> 64073badafd8fc66994dc0c2834853bf2541e93a
