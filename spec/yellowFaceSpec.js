describe("yellow face", function() {
  describe("starting", function() {
    it("yellow face pieces", function() {
      expect(yelHold[0].colorClass).toEqual('OY');
      expect(yelHold[1].colorClass).toEqual('GY');
      expect(yelHold[2].colorClass).toEqual('RY');
      expect(yelHold[3].colorClass).toEqual('BY');
    });

    it("touching faces pieces", function() {
      expect(oraHold[0].colorClass).toEqual('OY');
      expect(greHold[0].colorClass).toEqual('GY');
      expect(redHold[0].colorClass).toEqual('RY');
      expect(blueHold[0].colorClass).toEqual('BY');
    });
  });

  describe("one twist", function() {
    it("yellow face pieces", function() {
      rotateFace(yelHold);

      expect(yelHold[0].colorClass).toEqual('BY');
      expect(yelHold[1].colorClass).toEqual('OY');
      expect(yelHold[2].colorClass).toEqual('GY');
      expect(yelHold[3].colorClass).toEqual('RY');
    });

    it("touching faces pieces", function() {
      expect(oraHold[0].colorClass).toEqual('BY');
      expect(greHold[0].colorClass).toEqual('OY');
      expect(redHold[0].colorClass).toEqual('GY');
      expect(blueHold[0].colorClass).toEqual('RY');
    });
  });

  describe("two twist", function() {
    it("yellow face pieces", function() {
      rotateFace(yelHold);

      expect(yelHold[0].colorClass).toEqual('RY');
      expect(yelHold[1].colorClass).toEqual('BY');
      expect(yelHold[2].colorClass).toEqual('OY');
      expect(yelHold[3].colorClass).toEqual('GY');
    });

    it("touching faces pieces", function() {
      expect(oraHold[0].colorClass).toEqual('RY');
      expect(greHold[0].colorClass).toEqual('BY');
      expect(redHold[0].colorClass).toEqual('OY');
      expect(blueHold[0].colorClass).toEqual('GY');
    });
  });

  describe("three twist", function() {
    it("yellow face pieces", function() {
      rotateFace(yelHold);

      expect(yelHold[0].colorClass).toEqual('GY');
      expect(yelHold[1].colorClass).toEqual('RY');
      expect(yelHold[2].colorClass).toEqual('BY');
      expect(yelHold[3].colorClass).toEqual('OY');
    });

    it("touching faces pieces", function() {
      expect(oraHold[0].colorClass).toEqual('GY');
      expect(greHold[0].colorClass).toEqual('RY');
      expect(redHold[0].colorClass).toEqual('BY');
      expect(blueHold[0].colorClass).toEqual('OY');
    });
  });

  describe("four twist", function() {
    it("yellow pieces", function() {
      rotateFace(yelHold);

      expect(yelHold[0].colorClass).toEqual('OY');
      expect(yelHold[1].colorClass).toEqual('GY');
      expect(yelHold[2].colorClass).toEqual('RY');
      expect(yelHold[3].colorClass).toEqual('BY');
    });

    it("touching faces pieces", function() {
      expect(oraHold[0].colorClass).toEqual('OY');
      expect(greHold[0].colorClass).toEqual('GY');
      expect(redHold[0].colorClass).toEqual('RY');
      expect(blueHold[0].colorClass).toEqual('BY');
    });
  });
});
