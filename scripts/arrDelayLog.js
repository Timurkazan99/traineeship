function arrDelayLog(arr) {
  arr.forEach((el, i) => {
    setTimeout(() => {
      console.log('value:', el, 'index:', i);
    }, 3000);
  });
}

export default arrDelayLog;