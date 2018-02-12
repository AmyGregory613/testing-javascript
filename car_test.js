var expect = chai.expect;

describe("Car", function() {
  describe("constructor", function() {
    it("should have a default year if not provided", function() {
      var car = new Car("Subaru", "Forester");
      expect(car.year).to.equal("2018");
    });

    it("should set car's year if provided", function() {
      var car = new Car("Subaru", "Forester", "2012");
      expect(car.year).to.equal("2012");
    });
  
  it("should set car's make if provided", function() {
      var car = new Car("Subaru", "Forester", "2012");
      expect(car.make).to.equal("Subaru");
    });

  it("should set car's model if provided", function() {
      var car = new Car("Subaru", "Forester", "2012");
      expect(car.model).to.equal("Forester");
    });
  it("should begin with mileage of 0", function() {
      var car = new Car("Subaru", "Forester", "2012");
      expect(car.mileage).to.equal(0);
    });
});
  describe("#drive", function() {
    it("should throw if no mileage is passed in", function() {
      expect(function() {
        (new Car("Subaru", "Forester", "2012")).drive();
      }).to.throw(Error);
    });
    it("should throw if mileage passed in = 0", function() {
      expect(function() {
        (new Car("Subaru", "Forester", "2012")).drive(0);
      }).to.throw(Error);
    });
    it("should throw if mileage passed in < 0", function() {
      expect(function() {
        (new Car("Subaru", "Forester", "2012")).drive(-1);
      }).to.throw(Error);
    });

    it("should drive X number of miles", function() {
      var car = new Car("Subaru", "Forester", "2012");
      car.drive(50);
      expect(car.mileage).to.equal(50);
    });

  });

});
// Drive For Some Given Time Tests:
//     Verify that no seconds throws an Error
describe("#driveForSomeTime", function() {
    it("should throw if no time is passed in", function() {
      expect(function() {
        (new Car("Subaru", "Forester", "2012")).driveForSomeTime();
      }).to.throw(Error);
    });
    //     Verify that zero seconds throws an Error
    it("should throw if mileage passed in = 0", function() {
      expect(function() {
        (new Car("Subaru", "Forester", "2012")).driveForSomeTime(0);
      }).to.throw(Error);
    });
    //     Verify that negative seconds throws an Error
    it("should throw if mileage passed in < 0", function() {
      expect(function() {
        (new Car("Subaru", "Forester", "2012")).driveForSomeTime(-1);
      }).to.throw(Error);
    });

//     Verify that no miles/second throws an Error
    it("should throw if no time is passed in", function() {
      expect(function() {
        (new Car("Subaru", "Forester", "2012")).drive().driveForSomeTime();
      }).to.throw(Error);
    });
    //     Verify that zero miles/second throws an Error
    it("should throw if mileage passed in = 0", function() {
      expect(function() {
        (new Car("Subaru", "Forester", "2012")).drive(0).driveForSomeTime(0);
      }).to.throw(Error);
    });
    //     Verify that negative miles/second throws an Error
    it("should throw if mileage passed in < 0", function() {
      expect(function() {
        (new Car("Subaru", "Forester", "2012")).drive(-1).driveForSomeTime(-1);
      }).to.throw(Error);
    });
//     Verify that positive miles/second then the car drives the appropriate amount of miles.
    it("should drive X number of miles/second", function() {
      var car = new Car("Subaru", "Forester", "2012");
      car.milesPerSecond(50);
      expect(car.milesPerSecond).to.equal(50);
    });

  });





