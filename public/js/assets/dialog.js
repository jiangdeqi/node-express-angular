//弹出框控件
app.factory('dialog',['$http','$uibModal','$window',function($http,$uibModal,$window){
     var obj = {
        show: function(tplUrl, ctrl, size, param, fun) {
            var modal = $uibModal.open({
                templateUrl: tplUrl,
                controller: ctrl,
                backdrop: "static",
                size: size,
                resolve: param
            });
            window.modal = modal;
            modal.result.then(function(result) {
                if (fun) fun(result);
            });
        }
    };
    return obj;
}]);

//弹出层面板
app.directive("panel", [function() {
        return {
            restrict: "E",
            replace: true,
            scope: false,
            template: function(e, a) {
                var html = $('<div class="panel panel-default"></div>');
                if (e.attr('style')) {
                    html.attr('style', e.attr('style'));
                }
                if (a.add || a.Edit) {
                    html.css("margin-right", 5);
                }

                if ($("phead", e).length > 0) {
                    var head = $('<div class="panel-heading font-bold"><span>' + $("phead:eq(0)", e).html() + '</span></div>').appendTo(html);
                    if (a.dialog === "") {
                        $('<div style="float:right;cursor:pointer;" ng-click="event.Close()"><i class="icon-gt-delete"></i></div>').appendTo(head);
                    }
                    //是否聚合按钮
                    if (a.record === "") {
                        $('<div style="float:right;cursor:pointer;" ng-click="event.Record(Model, $event)"><i class="icon-gt-record" style="color:#929292;"></i></div>').appendTo(head);
                    }
                    if (a.edit) {
                        var editName = a.edit === "" ? "EditElse" : a.edit;
                        $('<div style="float:right;cursor:pointer;" ng-click="event.' + editName + '(Model, $event)"><i class="Btn btn-edit" style="color:#929292;">编辑</i></div>').appendTo(head);
                    }
                    if (a.add) {
                        var addName = a.add === "" ? "AddElse" : a.add;
                        $('<div style="float:right;cursor:pointer;" ng-click="event.' + addName + '(Model, $event)"><a class="btn-link"><span class="btn-add"></span>保存</a></div>').appendTo(head);
                    }
                    if (a.expand === "") {
                        head.attr("ng-click", "PanelEvent.ToggleBody()").css("cursor", "pointer");
                    }
                    if (a.selectuser) {
                        $('<div style="float:right;cursor:pointer;" ng-transclude> <selectuser button="true"></selectuser></div>').appendTo(head);
                    }
                }
                if ($("pbody", e).length > 0) {
                    var body = $('<div class="panel-body"></div>').appendTo(html);
                    if (a.expand === "") {
                        $(body).attr("ng-hide", "HideBody");
                    }
                    body.html($("pbody", e).html());
                    if ($("pbody", e).attr("style")) {
                        body.attr("style", $("pbody", e).attr("style"));
                    }
                }
                if ($("pfoot", e).length > 0) {
                    html.append('<div class="panel-footer">' + $("pfoot", e).html() + '</div>');
                }
                return html[0].outerHTML;
            },
            link: function($scope, element, attr, ngModel) {
                $scope.HideBody = false;
                if (attr.hidebody === "") {
                    $scope.HideBody = true;
                }
                $scope.PanelEvent = {
                    ToggleBody: function() {
                        $scope.HideBody = !$scope.HideBody;
                    }
                };
            }
        };
    }]);