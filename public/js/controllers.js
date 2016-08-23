//index控制器
app.controller('PollListCtrl', ['$scope', function($scope) {
    $scope.alert = '欢迎光临，杭州';
}]);


app.controller('indexCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.name = '大奇山森林公园';
    $scope.add = function() {
        if($scope.userid !== undefined && $scope.password !== undefined){
            var myData = {
                userid: $scope.userid,
                password: $scope.password
            };
            $http.post('/addUser', myData).success(function(data) {
                console.log("添加成功");
            });
        }
    }
}]);

//list
app.controller('ListCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.name = '姜德奇';
    $http.post('/findUser', '').success(function(data) {
            $scope.list = data;
    });

    $scope.del = function(item) {
        var myid = {
            userid: item.userid
        }
        $http.post('/delete', myid).success(function(data) {
            console.log("删除成功");
            location.reload(true);
        });
    }
}]);

//new
app.controller('NewCtrl', ['$scope','$http', function($scope, $http) {
    $scope.name = '网仓三号。。';

    $http.post('/books', '').success(function(data) {
        $scope.list = data;
    });

}]);

//item
app.controller('ItemCtrl', ['$scope', function($scope) {
    $scope.name = '习平';

}]);



//charts
app.controller('chartsCtrl', ['$scope', '$interval', '$timeout', function($scope, $interval, $timeout) {

    var myChart = echarts.init(document.getElementById('main'));
    var xAxisData = [];
    var data1 = [];
    var data2 = [];
    for (var i = 0; i < 100; i++) {
        xAxisData.push('类目' + i);
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    option = {
        title: {
            text: '柱状图动画延迟'
        },
        legend: {
            data: ['bar', 'bar2'],
            align: 'left'
        },
        toolbox: {
            // y: 'bottom',
            feature: {
                magicType: {
                    type: ['stack', 'tiled']
                },
                dataView: {},
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        tooltip: {},
        xAxis: {
            data: xAxisData,
            silent: false,
            splitLine: {
                show: false
            }
        },
        yAxis: {},
        series: [{
            name: 'bar',
            type: 'bar',
            data: data1,
            animationDelay: function(idx) {
                return idx * 10;
            }
        }, {
            name: 'bar2',
            type: 'bar',
            data: data2,
            animationDelay: function(idx) {
                return idx * 10 + 100;
            }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function(idx) {
            return idx * 5;
        }
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

}]);