// Задача №4 Фильтрация массива

const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];
const isEven = num => !(num % 2);

function filterArray(mixedArray, isEven) {
  var result = [];
  for (i = 0; i < mixedArray.length; i++) {
    if (isEven(mixedArray[i]) == true) {
      result[i] = mixedArray[i];
    }
    result = result.filter(function (x) {
      return x !== undefined
    });
  }
  return result;

}
console.log(filterArray(mixedArray, isEven));