//index控制器
app.controller('PollListCtrl', ['$scope', function($scope) {
    $scope.alert = '欢迎光临，杭州';
}]);


app.controller('indexCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.name = '大奇山森林公园';
    $scope.add = function() {
        var myData = {
            userid: $scope.userid,
            password: $scope.password
        };
        $http.post('/addUser', myData)
            .success(function(data) {
                alert('添加成功');
            });
    }

}]);

//list
app.controller('ListCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.name = '姜德奇';
    $http.post('/findUser', '')
        .success(function(data) {
            $scope.list = data;
        });
}]);

//new
app.controller('NewCtrl', ['$scope', function($scope) {
    $scope.name = '网仓三号。。';
}]);

//item
app.controller('ItemCtrl', ['$scope', function($scope) {
    $scope.name = '习平';

}]);



//charts
app.controller('chartsCtrl', ['$scope','$interval','$timeout', function($scope ,$interval ,$timeout) {

    var myChart = echarts.init(document.getElementById('main'));
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
        
}]);



