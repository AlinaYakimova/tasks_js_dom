// Задача №1 Фильтрация строки

const string = "я отфильтровала гласные буквы!";
function getVowels(string) {
  var vowels = "аеёиоуыэюя";
  var result = "";
  for (var i = 0; i < string.length; i++)
    for (var j = 0; j < vowels.length; j++) {
      if (string[i] == vowels[j]) {
        result = result + string[i];
      }
    }
  return result;
}
console.log(getVowels(string));