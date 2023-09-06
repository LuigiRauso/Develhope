const isLogged = true;

function loginCheck(isLogged) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isLogged === true) {
        return resolve(Math.random());
      } else {
        return reject(new Error("The user is not logged in."));
      }
    }, 500);
  });
}

function userDetails(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number > 0.5) {
        return resolve({ name: "John", age: 24 });
      } else {
        return reject(new Error("This user does not exist."));
      }
    }, 500);
  });
}

loginCheck(isLogged)
  .then((result) => userDetails(result))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));