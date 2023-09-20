function firstSum(arr, total) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let k = 1 + i; k < arr.length; k += 1) {
      if (arr[i] + arr[k] === total) return [arr[i], arr[k]];
    }
  }

  return [];
}

export default firstSum;