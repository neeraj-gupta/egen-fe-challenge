/**
 * Created by Neeraj on 6/21/16.
 */

angular
  .module('myTestApp')
  .controller('userListController', UserListController);

UserListController.$inject = ['userListProvider', '$state'];

function UserListController(userListProvider, $state) {
  var userListVM = this;

  userListVM.usersList = userListProvider.data;

  userListVM.getUser = function(id) {
    $state.go('user-profile', {data: id});
  }
}