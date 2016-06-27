var items = [4, 2, 6, 5, 3, 9];

//swap function
function swap(arr, firstInd, secondInd) {
  //store initial value for swapping
  var hold = arr[firstInd];
  //change first value to second
  arr[firstInd] = arr[secondInd];
  //change second to first
  arr[secondInd] = hold;
}

function partition(arr, left, right) {
  var pivot = arr[Math.floor((right + left) / 2)];
  var i = left;
  var j = right;

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }

    while (arr[j] > pivot) {
      j--
    }

    if (i <= j) {
      swap(arr,i, j);
      i++;
      j--;
    }
  }

  return i;
}
function quick_sort(arr, left, right) {
  var index;

  if(arr.length > 1) {

    index = partition(arr, left, right);

    if (left < index - 1) {
      quick_sort(arr, left, index - 1);
    }

    if(index < right) {
      quick_sort(arr, index, right);
    }
  }

  return arr;
}

console.log(quick_sort(items, 0, items.length - 1));
