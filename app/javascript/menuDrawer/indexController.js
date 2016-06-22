/**
 * Created by Neeraj on 6/22/16.
 */

angular
  .module('myTestApp')
  .controller('indexController', IndexController);

IndexController.$inject = ['$state', '$mdSidenav'];

function IndexController($state, $mdSidenav) {
  var indexVM = this;

  indexVM.toggleRight = buildToggler('right');
  indexVM.isOpenRight = isOpenRight;
  indexVM.close = close;
  indexVM.goToUsers = goToUsers;
  indexVM.goToAddUser = goToAddUser;

  function isOpenRight(){
    return $mdSidenav('right').isOpen();
  }

  function buildToggler(navID) {
    return function() {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav(navID)
        .toggle()
        .then(function () {
          $log.debug("toggle " + navID + " is done");
        });
    }
  }

  function close() {
    $mdSidenav('right').close()
      .then(function () {
        console.log("close RIGHT is done");
      });
  }

  function goToUsers() {
    $state.go('user-list');
  }

  function goToAddUser() {
    $state.go('create-user');
  }
}