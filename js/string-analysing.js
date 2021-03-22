// Задача №3 Анализ строки

const path = "/users/download/index.html"

function isHtml(path) {
  const extension = ".html"
  if (path.slice(-5) == extension) {
    return true
  } else {
    return false
  };
}
console.log(isHtml(path));