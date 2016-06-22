/**
 * Created by Neeraj on 6/22/16.
 */

angular
  .module('myTestApp')
  .controller('profileController', profileController);

profileController.$inject = ['profileService', 'userProfileProvider'];

function profileController(profileService, userProfileProvider) {
  var profileVm = this;

  profileVm.userProfile = userProfileProvider.data;

  profileVm.deleteUser = function() {
    profileService.deleteUser(profileVm.userProfile.id);
  }
}