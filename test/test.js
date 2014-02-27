
describe('people-names', function () {

  var expect  = require('expect.js')
    , assert = require('assert')
    , names = require('..');

  describe('.looseCompare()', function () {
    it('should loose compare', function () {
      var input= {
        name: 'Paul Gullas',
        firstName: 'Paul',
        lastName: 'Gullas'
      };
      var source = {
        name: 'Paul Graham',
        firstName: 'Paul',
        lastName: 'Graham'
      };
      assert(!names.looseCompare(source, input));

      source.lastName = 'G. ';
      assert(names.looseCompare(source, input));

      input = {
        name: 'Ted Jacob Tomlinson',
        firstName: 'Ted',
        lastName: 'Tomlinson'
      };
      source = {
        name: 'Ted T.',
        firstName: 'Ted',
        lastName: 'T.  '
      };
      assert(names.looseCompare(source, input));

      input = {
        name: 'Ted Jacob Tomlinson',
      };
      assert(names.looseCompare(source, input));
    });
  });

});
