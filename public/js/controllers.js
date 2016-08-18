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
app.controller('ListCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.name = '姜德奇';
    $http.post('/findUser','')
        .success(function(data){
            $scope.list = data;
        });
}]);

//new
app.controller('NewCtrl', ['$scope',function($scope) {
    $scope.name = '网仓三号。。';
}]);

//item
app.controller('ItemCtrl', ['$scope',function($scope) {
    $scope.name = '习近平';

}]);
