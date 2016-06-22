/**
 * Created by Neeraj on 6/21/2016.
 */

'use strict';

angular
    .module('myApp', ['ui.router'])
    .config(configure);

configure.$inject = ['$stateProvider', '$urlRouterProvider',]

function configure($stateProvider, $urlRouterProvider){

    $stateProvider.state('userList', {
        url : '/user-list',
        templateUrl : 'partial-partial-user-list.html',
        controller : 'userController',
        controllerAs : 'userVm'
    });

    $stateProvider.state('user', {
        url : '/user',
        templateUrl : 'partial-user.html',
        controller : 'userController',
        controllerAs : 'userVm'
    });

    $stateProvider.state('create-user', {
        url : '/create',
        templateUrl : 'partial-create-user.html',
        controller : 'userController',
        controllerAs : 'userVm'
    });

    $stateProvider.state('menu-drawer', {
        url : '/menu',
        templateUrl : 'partial-menu-drawer.html',
        controller : 'menuController',
        controllerAs : 'menuVm'
    });

    $urlRouterProvider.otherwise('user');
}

