const sortDates = (d1, d2) => {
  const d1Arr = d1.split("/").map((el) => parseInt(el, 10));
  const d2Arr = d2.split("/").map((el) => parseInt(el, 10));

  const [d1dd, d1mm, d1yy, d2dd, d2mm, d2yy] = [...d1Arr, ...d2Arr];

  return d1yy < d2yy
    ? d1
    : d1yy > d2yy
    ? d2
    : d1mm < d2mm
    ? d1
    : d1mm > d2mm
    ? d2
    : d1dd < d2dd
    ? d1
    : d1dd > d2dd
    ? d2
    : "Both are Same Dates";
};

sortDates("02/01/2021", "02/01/2021");
