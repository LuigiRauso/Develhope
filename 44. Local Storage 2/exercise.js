const user = {
  id: 1,
  name: "John",
  age: 25,
};

const getLocalStorageData = (key) => {
  try {
    const storedData = localStorage.getItem(key);
    const parsedData = JSON.parse(storedData);

    console.log(parsedData);
  } catch (error) {
    console.error(error);
  }
};

getLocalStorageData("user");
