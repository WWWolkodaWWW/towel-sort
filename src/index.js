
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = [];

  if (!matrix) {
    return [];
  }

  else { 
    for (let i = 0; i < matrix.length; i++) { 
      
      if (i % 2 === 0) {
        result.push(matrix[i])
      }

      else { 
        result.push(matrix[i].sort((e, j) => j - e));
      }
    }
  }

  return result.flat(1);
}
