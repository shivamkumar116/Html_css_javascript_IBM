document.write("<h1>Hello world from javascript</h1>");

// function sayHello(name) {
//   for (let index = 0; index < 10; index++) {
//     document.write("Hello " + name + "<br/>");
//   }
document.write("<h1>Arrays in javascript</h1>");
var numbers = [1, 2, 3, 4, 5];
for (var index in numbers) {
  document.write("<strong>" + numbers[index] + "</strong>");
}

var man = {
  hands: 2,
  fingers: 10,
  head: 1,
};

document.write("<h1>Object in javascript</h1>");
for (i in man) {
  document.write(man[i]);
}
