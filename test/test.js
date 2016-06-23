/**
 * Created by Neeraj on 6/22/2016.
 */
describe('userListControl', function() {
    var scope, controller;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('userListControl', {
            $scope: scope
        });
    }));



    it('Should give user list', function() {

    });
});