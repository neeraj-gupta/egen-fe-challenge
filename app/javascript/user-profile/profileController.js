/**
 * Created by Neeraj on 6/22/16.
 */

angular
  .module('myTestApp')
  .controller('profileController', profileController);

profileController.$inject = ['$state','profileService', 'userProfileProvider'];

function profileController($state, profileService, userProfileProvider) {
  var profileVm = this;

  profileVm.userProfile = userProfileProvider.data;
  profileVm.toggleBack = function() {
    $state.go('user-list');
  }
  profileVm.deleteUser = function() {
    profileService.deleteUser(profileVm.userProfile.id);
  }
}