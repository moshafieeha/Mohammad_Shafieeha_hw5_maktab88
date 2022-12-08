//Write a function that checks including a word in a sentence

function wordFinder(sentence, word) {
  //Validation
  if (typeof sentence !== "string" || typeof word !== "string")
    return "invalid input";

  //Prepration
  word = word.toLowerCase();
  sentence = sentence.toLowerCase();

  return sentence.includes(word);
}

console.log(wordFinder("safs FAafa FAafa FAafa", "FlAafa"));
