// Задача №2 Выборка объекта

const workers = [
  { "name": "John", "salary": 500 },
  { "name": "Mike", "salary": 1300 },
  { "name": "Bob", "salary": 2300 },
  { "name": "Anna", "salary": 300 },
  { "name": "Bill", "salary": 900 },
  { "name": "Linda", "salary": 1500 }];

function getWorthyWorkers(workers) {
  var result = [];
  for (i = 0; i < workers.length; i++) {
    if (workers[i].salary > 1000) {
      result[i] = workers[i].name;
    }
    result = result.filter(function (x) {
      return x !== undefined
    });
  }
  return result;
}
console.log(getWorthyWorkers(workers));