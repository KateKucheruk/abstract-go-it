const user = {
  name: `Luis`,
  age: 30,

  showThis: function () {
    console.log(`This--->`, this);
  },
  showName: function () {
    console.log(this.name);
  },
};

const someFunction = (callback) => {
  //let calllback = function () {console.log(`This--->`, this)};
  callback();
};
someFunction(user.showThis);
