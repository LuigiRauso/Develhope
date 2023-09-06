function repeatHello(callback) {
  setInterval(() => {
    callback();
  }, 1000);
}

const callback = () => {
  console.log("Hello");
};

repeatHello(callback);

// Q: The callback function must be an arrow function, can you also explain why?
// A: Per la funzione di callback viene utilizzato l'arrow function perché risulta più facile scrivere e leggere il codice.
