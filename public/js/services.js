// Angular service module for connecting to JSON APIs
angular.module('pollServices', ['ngResource']).
	factory('Poll', function($resource) {
		return $resource('polls/:pollId', {}, {
			// Use this method for getting a list of polls
			query: { method: 'GET', params: { pollId: 'polls' }, isArray: true }
		})
	})