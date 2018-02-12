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
        throw new Error("mileage error");
    	this.mileage += milesCarShouldDrive;
    	return this.mileage;
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

		// Increment seconds counter by 1
		// call drive (remember, while you're in the interval function "self" 
		// is an alias for "this" so use it instead of "this"
		
     

    this.driveForSomeTime = function (secondsToDriveFor, milesPerSecond) {
     // Make sure secondsToDriveFor and milesPerSecond are valid. 
     // Create variable to keep track of how many seconds have elapsed.
      setInterval(function(self) {
          if (!secondsToDriveFor || secondsToDriveFor <= 0)
        throw new Error("Time Value Error");
        
        if (!milesPerSecond || milesPerSecond <= 0)
        throw new Error("Speed Value Error");
        }
        var timeDriven = 0;
        timeDriven += 1000;

        // If the requested number of seconds have elapsed, stop interval
      }, 1000, this);
    
    }
  }
  exports.Car = Car;
})(this);
