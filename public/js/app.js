<<<<<<< HEAD
<<<<<<< HEAD
var app = angular.module('app', ["ngRoute"]);


app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/polls', {
            templateUrl: 'partials/list.html',
            controller: 'PollListCtrl'
        }).when('/poll', {
            templateUrl: 'partials/item.html',
            controller: 'PollItemCtrl'
        }).when('/new', {
            templateUrl: 'partials/new.html',
            controller: 'PollNewCtrl'
        }).otherwise({
            redirectTo: '/polls'
        });
    }]);
=======
=======
>>>>>>> 64073badafd8fc66994dc0c2834853bf2541e93a
var app = angular.module('polls', [
	'pollServices',
	'ui.router'
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
  				templateUrl: 'public/partials/index.html',
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
			});
        //$locationProvider.html5Mode(true); 
	}
);
	
<<<<<<< HEAD
>>>>>>> 64073badafd8fc66994dc0c2834853bf2541e93a
=======
>>>>>>> 64073badafd8fc66994dc0c2834853bf2541e93a
