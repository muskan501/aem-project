
// Stylesheets
import "./main.scss";

// Javascript or Typescript
import "./**/*.js";
import "./**/*.ts";
import '../components/**/*.js';

var themeDiv = document.querySelector(".customTheme");
var theme = themeDiv.getAttribute("themeAttribute");
var themeElement =  document.documentElement;

if(theme=="orange"){
     themeElement.style.setProperty('--primaryColor', 'black');
     themeElement.style.setProperty('--secondaryColor', '#fc4a1a');
     themeElement.style.setProperty('--tertiaryColor', '#232424f2');
}

else{
     themeElement.style.setProperty('--primaryColor', '#13294b');
     themeElement.style.setProperty('--secondaryColor', '#47d7ac');
     themeElement.style.setProperty('--tertiaryColor', '#163059');
}
