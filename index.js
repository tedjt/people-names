
module.exports.looseCompare = function validateName(source, input) {
  // check to make sure input name isn't too different from existing
  if (!source.name) return true;
  if (!input.name) return false;
  if (input.name.replace(/ /g, '').toUpperCase() === source.name.replace(/ /g, '').toUpperCase()) return true;
  // names are different - need to parse
  var pLastName = source.lastName.replace(/[ .]/g, '').toUpperCase();
  var pFirstName = source.firstName.replace(/[ .]/g, '').toUpperCase();
  var fcFirstName = (input.firstName || '').replace(/[ .]/g, '').toUpperCase();
  var fcLastName = (input.lastName || '').replace(/[ .]/g, '').toUpperCase();
  if (pLastName.length < 2 && pFirstName === fcFirstName && fcLastName[0] === pLastName[0]) return true;
  return false;
};