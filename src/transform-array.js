module.exports = function transform(arr) {
  // throw 'Not implemented';
  // remove line with error and write your code here
  // console.log(arr);
  if (arr instanceof Array) {
    if (arr.length === 0) {
      return arr;
    }
    let count = 0;
    arr.forEach(item => {
      if (
        item === "--discard-next" ||
        item === "--discard-prev" ||
        item === "--double-next" ||
        item === "--double-prev"
      ) {
        count += 1;
      }
    });
    if (count === 0) {
      return arr;
    }
    let solution;
    for (let j = 1; j <= count; j++) {
      for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
          case "--discard-next":
            solution = discardNext(arr, i);
            break;
          case "--discard-prev":
            solution = discardPrev(arr, i);
            break;
          case "--double-next":
            solution = doubleNext(arr, i);
            break;
          case "--double-prev":
            solution = doublePrev(arr, i);
            break;
        }
      }
    }

    return solution;
  } else {
    throw "throw";
  }
};
function discardNext(arr, i) {
  if (
    arr[i + 1] ||
    arr[i + 1] === false ||
    arr[i + 1] === NaN ||
    arr[i + 1] === null
  ) {
    arr.splice(i, 2);
    return arr;
  }

  arr.pop();

  return arr;
}
function discardPrev(arr, i) {
  if (
    arr[i - 1] ||
    arr[i - 1] === false ||
    arr[i - 1] === NaN ||
    arr[i - 1] === null
  ) {
    arr.splice(i - 1, 2);
    return arr;
  }
  arr.shift();

  return arr;
}
function doubleNext(arr, i) {
  if (
    arr[i + 1] ||
    arr[i + 1] === false ||
    arr[i + 1] === NaN ||
    arr[i + 1] === null
  ) {
    arr[i] = arr[i + 1];
    return arr;
  }
  arr.pop();
  return arr;
}
function doublePrev(arr, i) {
  if (
    arr[i - 1] ||
    arr[i - 1] === false ||
    arr[i - 1] === NaN ||
    arr[i - 1] === null
  ) {
    arr[i] = arr[i - 1];
    return arr;
  }

  arr.shift();
  return arr;
}
