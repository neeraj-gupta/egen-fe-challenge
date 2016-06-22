/**
 * Created by Neeraj on 6/21/16.
 */

angular
  .module('myTestApp')
  .factory('userListService', UserListService);

UserListService.$inject = ['$http'];

function UserListService($http) {
  var userListObject = {
    users: []
  };

  userListObject.getUsers = getUsers;

  function getUsers() {
    return $http.get('http://mocker.egen.io/users', getUsersResponse);
  }

  function getUsersResponse(response) {
    if(response.status === 200) {
      angular.copy(response.data, userListObject.users);
    }

    return response;
  }

  return userListObject;
}