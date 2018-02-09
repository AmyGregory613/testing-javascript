//car.js
(function(exports) {
  "use strict";

function Car (make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year || 2018;
	this.mileage = 0;
	this.drive = function(milesCarShouldDrive) {
      if (!milesCarShouldDrive || milesCarShouldDrive <= 0)
        throw new Error("missing mileage");
    	this.mileage += milesCarShouldDrive;
    }
}

// Add a driveForSomeTime function that takes the amount 
// of seconds to drive for and a number representing the speed 
// to drive at in miles per second (yeah I know, that's fast).
//   -If seconds is negative, zero or no value, an Error is thrown.
//   - If Miles Per Second is negative, zero or no value, 
// an error is thrown.

// The function should increment the mileage by the given 
// amount every second until the given amount of time has elapsed.


    this.drive = function(driveForSomeTime) {
      setTimeout(function(self) {
        try {
          if (!driveForSomeTime || driveForSomeTime <= 0)
        throw new Error("Time Value Error");
        }
      }, 1000, this);
    }
  }
  exports.Car = Car;
})(this);
