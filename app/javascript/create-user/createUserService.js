/**
 * Created by sumitvalecha on 6/22/16.
 */

angular
  .module('myTestApp')
  .factory('createUserService', CreateUserService);

CreateUserService.$inject = ['$http'];

function CreateUserService($http) {
  var createUserObject = {

  };

  createUserObject.addUser = addUser;

  function addUser(user) {
    return $http({
      method: 'post',
      url: 'http://mocker.egen.io/users',
      data: user
    });
  }

  return createUserObject;
}