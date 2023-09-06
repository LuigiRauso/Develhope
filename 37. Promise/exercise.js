const number = 15;

const myPromise = new Promise((resolve, reject) => {
  if (number > 10) {
    return resolve("Promise resolved");
  } else {
    return reject("Promise rejected");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
