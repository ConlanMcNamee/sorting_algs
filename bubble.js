var testArr = [4,2,1,6,9,8];

function bubble(arr) {
  var swapped;
  do {
    swapped = false;
    for(var i=0; i < arr.length -1; i++ ) {
      if(arr[i] > arr[i+1]) {
        var hold = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = hold;
        swapped = true;
      }
    }
  } while (swapped);
}

console.log(testArr);
bubble(testArr);
console.log(testArr);
