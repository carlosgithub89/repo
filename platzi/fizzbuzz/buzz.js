var numeros = 100;

for (var i = 1; i <= numeros; i ++) {
  let fizz = false;
  let buzz = false;

  if (i % 3 == 0) fizz = true;
  if (i % 5 == 0) buzz = true;

  if (fizz) document.write("FIZZ");
  if (buzz) document.write("BUZZ");
  if (!fizz && !buzz) document.write(i);
  document.write("<br>");
}
