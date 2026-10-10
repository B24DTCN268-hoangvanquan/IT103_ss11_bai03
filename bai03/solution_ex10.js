
console.log("1. Function Declaration");

sayHello();

function sayHello() {
    console.log("Hello Smart Home");
}

console.log("2. Function Expression");

const sayHi = function () {
    console.log("Hello IoT");
};

sayHi();

console.log("3. Arrow Function");

const sayWelcome = () => {
    console.log("Welcome Smart Home");
};

sayWelcome();

// Vi du ve this
const device = {
    name: "Dieu hoa",
    showName: function () {
        console.log(this.name);
    }
};

device.showName();
