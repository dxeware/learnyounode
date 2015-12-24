var arr = process.argv;
var sum=0;

for (var i = 2, count=arr.length; i < count; i++) {
  sum += Number(arr[i]);
};
console.log(sum);