/**
 * Created by Neeraj on 6/22/16.
 */

angular
  .module('myTestApp')
  .factory('profileService', profileService);

profileService.$inject = ['$state', '$http'];

function profileService($state, $http) {
  var userProfileObject = {
    user: {}
  };

  userProfileObject.getUser = getUser;
  userProfileObject.deleteUser = deleteUser;

  function getUser(id) {
    return $http.get('http://mocker.egen.io/users/' + id, getUserResponse);
  }

  function getUserResponse(response) {
    if(response.status === 200) {
      angular.copy(response.data, userProfileObject.user);
    }

    return response;
  }

  function deleteUser(id) {
    $http.delete('http://mocker.egen.io/users/' + id).then(function() {
      $state.go('user-list');
    });
  }

  return userProfileObject;
}