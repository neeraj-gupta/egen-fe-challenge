/**
 * Created by Neeraj on 6/21/2016.
 */

'use strict';

angular
    .module('myTestApp', ['ui.router'])
    .config(configure);

configure.$inject = ['$stateProvider', '$urlRouterProvider'];

function configure($stateProvider, $urlRouterProvider){

    $stateProvider.state('user-list', {
        url : '/user-list',
        templateUrl : 'views/partial-user-list.html'
    });

    $stateProvider.state('user', {
        url : '/user',
        templateUrl : 'views/partial-user.html',
        controller : 'userController',
        controllerAs : 'userVm'
    });

    $stateProvider.state('create-user', {
        url : '/create',
        templateUrl : 'views/partial-create-user.html',
        controller : 'userController',
        controllerAs : 'userVm'
    });

    $stateProvider.state('menu-drawer', {
        url : '/menu',
        templateUrl : 'views/partial-menu-drawer.html',
        controller : 'menuController',
        controllerAs : 'menuVm'
    });

    $urlRouterProvider.otherwise('user-list');
}

