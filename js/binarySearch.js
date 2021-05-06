function binarySearch(targetNum, arr){
  arr.sort()
  let indexTracker = Math.floor((arr.length) / 2)
  // console.log(
    //   `targetNum: ${targetNum}
    //   referanceNum: ${referanceNum}`
    //   )
  return search()
    
  function search () {
    let halfwayIndex = Math.floor((arr.length) / 2) 
    let referanceNum = arr[halfwayIndex]

//     console.log(`
// referanceNum: ${referanceNum}
// halfwayIndex: ${halfwayIndex} of [${arr}]
// indexTracker: ${indexTracker}
//       `)

    if (arr.length <= 1 && targetNum !== referanceNum) {
      return -1
    }
    else if (targetNum === referanceNum) {
      return indexTracker
    }
    else if (targetNum < referanceNum) {
      arr = arr.slice(0, halfwayIndex)
      if (Math.floor((arr.length) / 2) === 0) {
        indexTracker -= 1
      } else {
        indexTracker -= Math.floor((arr.length) / 2)
      }
      return search(targetNum, arr)
    }
    else if (targetNum > referanceNum) {
      arr = arr.slice(halfwayIndex)
      indexTracker += Math.floor((arr.length) / 2)
      return search(targetNum, arr)
    }
    else {return -1}
  }
}


var smallArray = [1,2,3,4,5]
var largeArray = [1,5,7,2,3,8,4,9]


console.log(binarySearch(1, smallArray), 'should be 0');
console.log(binarySearch(2, smallArray), 'should be 1');
console.log(binarySearch(3, smallArray), 'should be 2');
console.log(binarySearch(4, smallArray), 'should be 3');
console.log(binarySearch(5, smallArray), 'should be 4');
console.log(binarySearch(7, largeArray), 'should be 5');
console.log(binarySearch(1, largeArray), 'should be 0');
console.log(binarySearch(9, largeArray), 'should be 7');
