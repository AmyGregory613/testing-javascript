var expect = chai.expect;

describe("Car", function() {
  describe("constructor", function() {
    it("should have a default year if not provided", function() {
      var car = new Car();
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
      var car = new Car();
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
