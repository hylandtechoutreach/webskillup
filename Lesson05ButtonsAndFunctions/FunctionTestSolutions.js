function ageCalculator(a) {
  return 2023-a;
}

function tempConvert(a) {
  return 32 + ((9/5) * a);
}

function filmDisplay(title, year, director) {
  return `${director} - ${title.toUpperCase()} (${year})`;
}

function stringMixUp(a, b) {
  return b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2);
}

function reverseNum(a) {
  return String(a).split("").reverse().join("");
}
