//index控制器
app.controller('PollListCtrl', ['$scope', function($scope) {
    $scope.alert = '欢迎光临，杭州';
}]);

//用户添加index
app.controller('indexCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.name = '大奇山森林公园';
    $scope.add = function() {
        if ($scope.userid !== undefined && $scope.password !== undefined) {
            var myData = {
                userid: $scope.userid,
                password: $scope.password
            };
            $http.post('/addUser', myData).success(function(data) {
                if (data == 'success') {
                    console.log("添加成功");
                } else {
                    console.log("添加失败");
                }
            });
        }
    }
}]);

//用户列表list
app.controller('ListCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.name = '列表展示，删除功能';
    $http.post('/findUser', '').success(function(data) {
        $scope.list = data;
    });

    $scope.del = function(item) {
        var myid = {
            userid: item.userid
        }
        $http.post('/delete', myid).success(function(data) {
            if (data == 'success') {
                console.log("删除成功");
                location.reload(true);
            }
        });
    }
}]);

//书籍列表new
app.controller('NewCtrl', ['$scope', '$http', 'dialog', function($scope, $http, dialog) {
    $scope.name = '书籍列表。。';

    $http.post('/books', '').success(function(data) {
        $scope.list = data;
    });

    $scope.edit = function(item) {
        dialog.show('public/partials/new-edit.html', 'newEdit', 'lg', {
            item: function() {
                return item;
            }
        }, function(data) {
            if (data == "save") {

            }
            return false;
        })
    }

}]);

//newEdit
app.controller('newEdit', ['$scope', '$compile', '$uibModalInstance', 'item', '$http',
    function($scope, $compile, $uibModalInstance, item, $http) {
        $scope.query = item;

        $scope.close = function() {
            $uibModalInstance.close('save');
        }

        $scope.save = function() {

            $scope.item = {}
            $scope.item.title = $scope.query.title;
            $scope.item.type = $scope.query.type;
            $scope.item.visitedCount = $scope.query.visitedCount;
            $scope.item.commentCount = $scope.query.commentCount;
            $scope.item.createdOn = parseInt($scope.query.createdOn);
            $scope.item.author = $scope.query.author;

            $http.post('/upDataBooks', $scope.item).success(function(data) {
                if (data == 'success') {
                    console.log("添加成功");
                    $uibModalInstance.close('save');
                } else {
                    console.log(data.errmsg);
                    console.log(data.message);
                    console.log("添加失败");
                }
            });
        }
    }
]);



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