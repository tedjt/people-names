
module.exports.looseCompare = function validateName(source, input) {
  // check to make sure input name isn't too different from existing
  if (!source.name) return true;
  if (!input.name) return false;
  if (input.name.replace(/ /g, '').toUpperCase() === source.name.replace(/ /g, '').toUpperCase()) return true;
  // names are different - need to parse
  var sLastName = source.lastName.replace(/[ .]/g, '').toUpperCase();
  var sFirstName = source.firstName.replace(/[ .]/g, '').toUpperCase();
  var iFirstName = (input.firstName || input.name.split(' ')[0]).replace(/[ .]/g, '').toUpperCase();
  var iLastName = (input.lastName || input.name.split(' ').slice(-1)[0]).replace(/[ .]/g, '').toUpperCase();
  if (sLastName.length < 2 && sFirstName === iFirstName && iLastName[0] === sLastName[0]) return true;
  return false;
};