// ex1
const ex1 = () => {
  const arr1 = [1, 2, 4, 5, 6];
  const arr2 = [1, 6, 8, 9, 0];
  return arr1.filter((a) => arr2.includes(a));
}

// ex2
const ex2 = () => {
  const arr = [1, 54, 6, 7];
  return arr.map((a) => (a += 5));
}

// ex3
const ex3 = () => {
  const a = [1, 2, 4, 5, 6, 7];
  const b = [3, 5, 675, 8, 96];

  return a.concat(b).filter((c) => ![1, 8, 10, 96, 7].includes(c));
}