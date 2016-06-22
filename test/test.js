/**
 * Created by Neeraj on 6/22/2016.
 */
describe('userListController', function() {
    var scope, controller;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('MyCtrl', {
            $scope: scope
        });
    }));

    it('has correct initial values', function() {
        expect(scope.value).toBe(0);
        expect(scope.maxValue).toBe(3);
    });

    it('increments correctly', function() {
        scope.incrementValue();
        expect(scope.value).toBe(1);
        scope.incrementValue();
        expect(scope.value).toBe(2);
        scope.incrementValue();
        expect(scope.value).toBe(3);
        scope.incrementValue();
        expect(scope.value).toBe(0);
    });
});