/**
 * Created by Neeraj on 6/22/2016.
 */
describe('Person', function () {

    var Person;
    beforeEach(module('myTestApp'));
    beforeEach(inject(function (_Person_) {
        Person = _Person_;
    }));

    describe('Constructor', function () {
        it('assigns a name', function () {
            expect(new get('Ben')).to.have.property('name', 'Ben');
        });

    });

});