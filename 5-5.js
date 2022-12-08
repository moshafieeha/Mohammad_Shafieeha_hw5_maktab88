//Write a function regroup elements of an arraye

function getSort(array) {
  //Validation
  if (!Array.isArray(array)) return "false values";

  //Prepration
  var final = [[], [], [], []];
  let removed = array.map((element) => {
    return element.replaceAll("-", "");
  });


  for (let i = 0; i < 4; i++) {
    removed.forEach(function (value) {
      if (!final[i].includes(value[i])) final[i].push(value[i]);
    });
  }

  return final;
}

console.log(getSort(["a-b-c-d", "a-b-f-g", "m-n-l-k", "m-o-p-j", "v-q-w-e", "x-z-p-j"]));

