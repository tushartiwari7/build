const typeOfTriangle = (a, b, c) =>
  a === b && b === c
    ? `It's a Equilateral Triaangle`
    : a !== b && a !== c && b !== c
    ? `It's a Scalene Triangle`
    : `It's a equilateral Triangle`;

typeOfTriangle(4, 5, 6);
