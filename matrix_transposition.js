const transpose = function(array) {
  let matrix = [];

  for (let column = 0; column < array[0].length; column++) {
    let newRow = [];
    for (let row = 0; row < array.length; row++) {
      newRow.push(array[row][column]);
    }
    matrix.push(newRow);

  }
  return matrix;

};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));