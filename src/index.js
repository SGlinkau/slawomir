// change light/dark mode of site
function changeTheme() {
  var htmlTag = document.getElementsByTagName('html')[0];
  var currentTheme = htmlTag.getAttribute('data-bs-theme');

  if (currentTheme === 'dark') {
    htmlTag.setAttribute('data-bs-theme', 'light');
  } else {
    htmlTag.setAttribute('data-bs-theme', 'dark');
  }
}

document.getElementById('themeButton').onclick = changeTheme;
