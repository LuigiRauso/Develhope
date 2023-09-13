const user = {
  id: 1,
  name: "John",
  age: 25,
};

const setLocalStorageData = (keyName, data) => {
  try {
    const userInfo = JSON.stringify(data);
    localStorage.setItem(keyName, userInfo);
  } catch (error) {
    console.error(error);
  }
};

setLocalStorageData("user", user);
