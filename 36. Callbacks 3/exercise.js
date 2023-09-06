const repeatHello = (callback) => {
  const callbackInterval = setInterval(callback, 1000);

  setTimeout(() => {
    clearInterval(callbackInterval);
  }, 5000);
};

const callback = () => {
  console.log("Hello");
};

repeatHello(callback);
