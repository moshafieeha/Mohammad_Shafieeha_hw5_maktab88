//Write a function that shows levels of an array

function arrayLengthFinder(array) {
  //Validation
  if (!Array.isArray(array)) return "invalid input";

  //Captering an array to string with its []s and ,s then reconvert it to array
  let splitedArray = JSON.stringify(array).split("");

  //Saving only bruckets of above array in a string
  let onlyBrucketStr = splitedArray
    .filter(function (item) {
      return item === "[" || item === "]";
    })
    .join("");

  // In every iteration we remove []s that means a level in depth.
  // In the case of [[],[]] , firstly, we remove two inner []s and finaly the main [].
  // In the case of [[[]],[]] , firstly, we remove the inner []s, then two []s and finaly the main [].
  let level = 0;
  while (onlyBrucketStr.length > 0) {
    onlyBrucketStr = onlyBrucketStr.replace("[]", "");
    level += 1;
  }

  return level;
}

console.log(arrayLengthFinder([["665"], 9, "hjhjh"]));
