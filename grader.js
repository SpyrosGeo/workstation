function average(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return (Math.round(sum/arr.length));
}

console.log("Average Score")
var scores = [90, 98, 89, 100, 100, 86,94];
console.log(average(scores));
//
// function average(arr) {
//   var sum = 0;
//   arr.forEach((function(arrs)) {
//     sum += arrs;
//   });
//
//   console.log(Math.round(sum/arr.length));
// }
