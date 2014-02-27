
module.exports.looseCompare = function validateName(source, input) {
  // check to make sure input name isn't too different from existing
  if (!source.name) return true;
  if (!input.name) return false;
  if (clean(input.name) === clean(source.name)) return true;
  // names are different - need to parse
  var sLastName = lastClean(source);
  var sFirstName = firstClean(input);
  var iFirstName = firstClean(input);
  var iLastName = lastClean(input);
  console.log('comparing names: %s %s %s %s', sFirstName, sLastName, iFirstName, iLastName);
  if (sFirstName === iFirstName && iLastName === sLastName) return true;
  if (sLastName.length < 2 && sFirstName === iFirstName && iLastName[0] === sLastName[0]) return true;
  return false;
};

function firstClean(input) {
  return clean(input.firstName || input.name.split(' ')[0]);
}

function lastClean(input) {
  return clean(input.lastName || input.name.split(' ').slice(-1)[0]);
}

function clean(inputS) {
  return inputS.replace(/[ .]/g, '').toUpperCase();
}
