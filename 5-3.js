//Write a function that is thousands seprator for large numbers

function insertComma(num) {
  //Validation
  if (isNaN(num)) return "invalid input";

  internationalNumberFormat = new Intl.NumberFormat("en-US");
  return internationalNumberFormat.format(num);
}

console.log(insertComma(1234231354231233423));

//add or remove to a number when it length is changing?
