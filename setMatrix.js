//set matrix leetcode73
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

const setZero = (r, c, matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][c] = 0;
  }
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[r][i] = 0;
  }
};

const setZeroes = (matrix) => {
  const zerosArr = [];
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) {
        zerosArr.push([r, c]);
      }
    }
  }

  for (let k of zerosArr) {
    let rows = k[0];
    let cols = k[1];
    setZero(rows, cols, matrix);
  }
  return matrix;
};

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
