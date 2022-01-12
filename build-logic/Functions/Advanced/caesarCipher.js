const algorithm = (str, key) => {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    const newCharCode = str.charCodeAt(i) + key;
    //  console.log(newCharCode);
    res += String.fromCharCode(
      newCharCode <= 122 ? newCharCode : newCharCode - 122 + 96
    );
    console.log(res);
  }
  return res;
};
algorithm("lazy", 2);
