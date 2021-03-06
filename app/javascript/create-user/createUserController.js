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
  createUserVM.toggleBack = toggleBack;

  function toggleBack() {
    $state.go('user-list');
  };

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
        name: '',
        website: ''
      }
    };

    user.firstName = createUserVM.firstName;
    user.lastName = createUserVM.lastName;
    user.email = createUserVM.email;
    user.address.street = createUserVM.street;
    user.address.city = createUserVM.city;
    user.company.name = createUserVM.company;
    user.company.website = createUserVM.website;

    createUserService.addUser(user).then(function(response) {
      if(response.status === 200) {
        $state.go('user-profile', {data: response.data.id});
      }
    });

  }
}