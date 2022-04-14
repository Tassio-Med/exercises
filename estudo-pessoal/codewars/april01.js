/* Complete the method/function so that it converts dash/underscore delimited words into camel casing.
The first word within the output should be capitalized only if the original word was capitalized
(known as Upper Camel Case, also often referred to as Pascal case).

Examples:
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior" */

function toCamelCase(str){
  str = str.split('');
  return str.map(function(el, i){
    if(el == '-' || el == '_'){
      el = str[i+1].toUpperCase();
      str.splice(i+1, 1); // O splice remove 1 elemento a partir do índice "i+1" e pode adicionar
                          // outros elementos se quiser;
    }
    return el;
  }).join('');
}

//Outras soluções possíveis:
//1.
function toCamelCase(str){
  return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
}
//O método charAt() retorna o caractere especificado a partir de uma string.

//2.
function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

//3.
let toCamelCase = s => s.replace(/[-_](.)/g, (m, v) => v.toUpperCase());