const firstLetterCap = (str) => {
  str = str.split(" ");
  let res = [];
  for (let word of str) {
    word = word.split("");
    word[0] = word[0].toUpperCase();
    res.push(word.join(""));
  }
  return res.join(" ");
};

firstLetterCap("we are neoGrammers");
