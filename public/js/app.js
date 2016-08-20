var app = angular.module('polls', [
	'pollServices',
	'ui.router',
	'oc.lazyLoad'
	])
app.run(['$rootScope', '$state', '$stateParams',
	function($rootScope, $state, $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	}
]);
app.config(
	function($urlRouterProvider,$stateProvider ,$locationProvider) {
		$urlRouterProvider
                .otherwise('index');
            $stateProvider
			.state('index', {
				url: '/index',
  				templateUrl: '/public/partials/index.html',
				controller:'indexCtrl'
			})
			.state('list', {
				url: '/list',
  				templateUrl: '/public/partials/list.html',
				controller:'ListCtrl'
			})
			.state('item', {
				url: '/item',
  				templateUrl: '/public/partials/item.html',
				controller:'ItemCtrl'
			})
			.state('new', {
				url: '/new',
  				templateUrl: '/public/partials/new.html',
				controller:'NewCtrl'
			})
			.state('charts', {
				url: '/charts',
  				templateUrl: '/public/partials/charts.html',
				controller:'chartsCtrl',
				resolve: {
					deps: ['$ocLazyLoad',
						function($ocLazyLoad) {
							return $ocLazyLoad.load([
								'/public/js/echarts/echarts-all.js'
							]);
						}
					]
				}
			});
        //$locationProvider.html5Mode(true); 
	}
);
	