
var Car = function(wheels, seats, engines) {
  this.wheels = wheels;
  this.engines = engines;
  this.seats = seats;
};

var MotorBike = function() {
    this.wheels = 2;
    this.engines = 1;
    this.seats = 2;
};

var myCar = new Car(2, 2, 1);
myCar.nickname = "meuCarro";
console.log(myCar);
