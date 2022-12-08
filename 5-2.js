//Write an alternative function of .flat() for flatting arrays

function arrayLengthFinder(array) {
  //Validation
  if (!Array.isArray(array)) return "invalid input";

  //Captering an array to string with its []s and ,s then reconvert it to array
  let splitedArray = JSON.stringify(array).split("");

  //Saving non-bruckets of above array in a string and reconvert it to the array
  let nonBrucketStr = splitedArray
    .filter(function (item) {
      return !(item === "[" || item === "]");
    })
    .join("")
    .split(",");

  return nonBrucketStr;
}

console.log(arrayLengthFinder([10, [25, 13], [14, [55]], -2]));
