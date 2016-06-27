var testArr = [4,2,1,6,9,8,12,3,5,99];
function merge(left, right) {
  var combined = [];

  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      combined.push(left.shift());
    } else {
      combined.push(right.shift());
    }
  }
  while(left.length) {
    combined.push(left.shift());
  }
  while(right.length) {
    combined.push(right.shift());
  }

  return combined;
}

function mergeSort(arr) {
  if(arr.length < 2) return arr;

  var middle = Math.floor(arr.length / 2);
  var left = arr.slice(0, middle)
  var right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(testArr));
