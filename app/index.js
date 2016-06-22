/**
 * Created by Neeraj on 6/21/2016.
 */
(function(){
'use strict';

angular
    .module('myTestApp', ['ui.router', 'ngMaterial'])
    .config(configure);

configure.$inject = ['$stateProvider', '$urlRouterProvider'];

function configure($stateProvider, $urlRouterProvider){

    $stateProvider.state('user-list', {
        url : '/user-list',
        templateUrl : 'views/partial-user-list.html',
        controller : 'userListController',
        controllerAs : 'userListVm',
        resolve: {
            userListProvider: getUsers
        }
    });

    $stateProvider.state('user-profile', {
        url : '/user-profile',
        templateUrl : 'views/partial-user.html',
        controller : 'profileController',
        controllerAs : 'profileVm',
        params: {'data': null},
        resolve: {
            userProfileProvider: getUserProfile
        }
    });

    $stateProvider.state('create-user', {
        url : '/create',
        templateUrl : 'views/partial-create-user.html',
        controller : 'createUserController',
        controllerAs : 'createUserVm'
    });

    $stateProvider.state('index', {
        url : '/index',
        templateUrl : 'index.html',
        controller : 'indexController',
        controllerAs : 'indexVm'
    });

    $stateProvider.state('menu-drawer', {
        url : '/menu',
        templateUrl : 'views/partial-menu-drawer.html',
        controller : 'menuController',
        controllerAs : 'menuVm'
    });

    $urlRouterProvider.otherwise('user-list');
}
})();

getUsers.$inject = ['userListService'];
function getUsers(userListService) {
    return userListService.getUsers();
}

getUserProfile.$inject = ['$stateParams', 'profileService'];
function getUserProfile($stateParams, profileService) {
    return profileService.getUser($stateParams.data);
}