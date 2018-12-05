// function quicksort(arr)
// {
// if (arr.length === 0) {
// return [];
// }
//   let count = [];
//   var left = [];
//   var right = [];
//   var pivot = arr[0];

//   //go through each element in ratings
// 	for (var i = 1; i < arr.length; i++) {    [3,1,2,4] [4,3,2,1]
	
//       if (arr[i] < pivot) {
// 				 right.push(arr[i]);
// 				 count.push(1)
				
//       } else {
// 				 left.push(arr[i]);
// 				 count.push(1)
// 			}
	
// 	}
// 	console.log(count, 'count')
// 	return quicksort(left).concat(pivot, quicksort(right));
	
// }
// // console.log(quicksort([5,8,2,9,1]))

// // function minimumSwaps(ratings) {
// // 	var swaps = 0;
// // 	for(var i = ratings.length - 1; i >= 0; i--) {
// // 			for(var j = ratings.length - i; j >= 0; j--) {
// // 					if (ratings[i] < ratings[j]) {
// // 							var temp = ratings[i];
// // 							ratings[i] = ratings[j];
// // 							ratings[j] = temp;
// // 							swaps++;
// // 							console.log(swaps)
// 					}
// 			}
// 	}
// 	return swaps
// }

// var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var array = [3,1,2]
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function minimumSwaps(array) {
	let count = 0
  for(var i = 0; i < array.length; i++) {
    var min = i;
    for(var j = i + 1; j < array.length; j++) {
      if(array[j] < array[min]) {
        min = j;
      }
    }
    if(i !== min) {
      swap(array, i, min);
    }
		count++
	}
	console.log(count)
  return count;
}

// console.log(minimumSwaps(array));