function createCounter(n) {
  return function() {
    return n++
  }
}

// const counter = createCounter(10)
// counter()

function expect(val) {
  function toBe(value) {
    if (value === val) return true
    throw new Error("Not Equal")
  }
  function notToBe(value) {
    if (value !== val) return true
    throw new Error("Equal")
  }
  return {
    toBe, notToBe
  }
}

// console.log(expect(5).notToBe(5))

function createCounterII(init) {
  let updatedValue = init;
  function increment(){
    let newIncreValue = updatedValue + 1
    updatedValue = newIncreValue
    return updatedValue
  }
  function decrement(){
    let newDecreValue = updatedValue - 1
    updatedValue = newDecreValue
    return updatedValue
  }
  function reset() {
    updatedValue = init
    return updatedValue
  }
  return {
    increment,
    decrement,
    reset
  }
}

// const counter = createCounterII(5)
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.reset());

function map(arr, fn) {
  let transformedArray = []
  for (let i = 0; i < arr.length; i++) {
    let transformedElement = fn(arr[i], i);
    if (transformedElement !== undefined) {
      transformedArray.push(transformedElement)
    }
  }
  return transformedArray
}

// console.log(map([1,2,3], function constant() { return 42; }))

function filter(arr, fn) {
  let filteredArray = []
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i]
    let filteredElement = fn(arr[i], i);
    console.log(filteredElement);
    
    if (filteredElement) {
      filteredArray.push(element)
    }
    
  }
  return filteredArray
}

console.log(filter([-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }));

