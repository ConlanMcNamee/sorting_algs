var testArr = [4,2,1,6,9,8];

var insertionSort = function(arr) {
  for (var i = 0; i < arr.length; i++) {

    var hold = arr[i];
    console.log(hold);

    for(var j = i; j > 0 && hold < arr[j-1]; j--) {
      console.log('arr at j before: ' + arr[j]);
      arr[j] = arr[j-1];
      console.log('arr at j after: ' + arr[j]);
    }
    arr[j] = hold;
  }
  return arr;
}

console.log(insertionSort(testArr));
