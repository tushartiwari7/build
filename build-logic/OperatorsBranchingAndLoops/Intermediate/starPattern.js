// Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *
const starPattern = (n) => {
  for (let row = 1; row <= n; row++) {
    let line = "";
    for (let col = 1; col <= row; col++) {
      line += "* ";
    }
    console.log(line);
  }
};
starPattern(5);
export default starPattern;
