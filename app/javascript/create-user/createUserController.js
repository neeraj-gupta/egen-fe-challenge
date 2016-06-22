/**
 * Created by Neeraj on 6/22/16.
 */
angular
  .module('myTestApp')
  .controller('createUserController', CreateUserController);

CreateUserController.$inject = ['$state', 'createUserService'];

function CreateUserController($state, createUserService) {
  var createUserVM = this;

  createUserVM.addUser = addUser;

  function addUser() {
    var user = {
      firstName: '',
      lastName: '',
      email: '',

      address: {
        street: '',
        city: ''
      },

      company: {
        name: ''
      }
    };

    user.firstName = createUserVM.firstName;
    user.lastName = createUserVM.lastName;
    user.email = createUserVM.email;
    user.address.street = createUserVM.street;
    user.address.city = createUserVM.city;
    user.company.name = createUserVM.company;

    createUserService.addUser(user).then(function(response) {
      if(response.status === 200) {
        $state.go('user-profile', {data: response.data.id});
      }
    });

  }
}