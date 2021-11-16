var moveZeros = function (arr) {
  
  let newArr = arr.filter( e => e !== 0)
  let diff = arr.length - newArr.length;
  
  for (let i = 0; i < diff; i++) {
    newArr.push(0)
  }
  
  return newArr
}


// A cleaner approach:

var moveZeros = function (arr) {
  
  let newArr = arr.filter( e => e !== 0)
  let z = arr.filter( e => e === 0)
  
  return newArr.concat(z)
}
