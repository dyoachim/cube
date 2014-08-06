describe("yellow face", function() {
  describe("starting", function() {
    it("yellow face pieces", function() {
      expect(yelHold.pieces[0].colorClass).toEqual('OY');
      expect(yelHold.pieces[1].colorClass).toEqual('GY');
      expect(yelHold.pieces[2].colorClass).toEqual('RY');
      expect(yelHold.pieces[3].colorClass).toEqual('BY');
    });

    it("touching faces pieces", function() {
      expect(oraHold.pieces[0].colorClass).toEqual('OY');
      expect(greHold.pieces[0].colorClass).toEqual('GY');
      expect(redHold.pieces[0].colorClass).toEqual('RY');
      expect(blueHold.pieces[0].colorClass).toEqual('BY');
    });
  });

  describe("one twist", function() {
    it("yellow face pieces", function() {
      rotateFace(yelHold);

      expect(yelHold.pieces[0].colorClass).toEqual('BY');
      expect(yelHold.pieces[1].colorClass).toEqual('OY');
      expect(yelHold.pieces[2].colorClass).toEqual('GY');
      expect(yelHold.pieces[3].colorClass).toEqual('RY');
    });

    it("touching faces pieces", function() {
      expect(oraHold.pieces[0].colorClass).toEqual('BY');
      expect(greHold.pieces[0].colorClass).toEqual('OY');
      expect(redHold.pieces[0].colorClass).toEqual('GY');
      expect(blueHold.pieces[0].colorClass).toEqual('RY');
    });
  });

  describe("two twist", function() {
    it("yellow face pieces", function() {
      rotateFace(yelHold);

      expect(yelHold.pieces[0].colorClass).toEqual('RY');
      expect(yelHold.pieces[1].colorClass).toEqual('BY');
      expect(yelHold.pieces[2].colorClass).toEqual('OY');
      expect(yelHold.pieces[3].colorClass).toEqual('GY');
    });

    it("touching faces pieces", function() {
      expect(oraHold.pieces[0].colorClass).toEqual('RY');
      expect(greHold.pieces[0].colorClass).toEqual('BY');
      expect(redHold.pieces[0].colorClass).toEqual('OY');
      expect(blueHold.pieces[0].colorClass).toEqual('GY');
    });
  });

  describe("three twist", function() {
    it("yellow face pieces", function() {
      rotateFace(yelHold);

      expect(yelHold.pieces[0].colorClass).toEqual('GY');
      expect(yelHold.pieces[1].colorClass).toEqual('RY');
      expect(yelHold.pieces[2].colorClass).toEqual('BY');
      expect(yelHold.pieces[3].colorClass).toEqual('OY');
    });

    it("touching faces pieces", function() {
      expect(oraHold.pieces[0].colorClass).toEqual('GY');
      expect(greHold.pieces[0].colorClass).toEqual('RY');
      expect(redHold.pieces[0].colorClass).toEqual('BY');
      expect(blueHold.pieces[0].colorClass).toEqual('OY');
    });
  });

  describe("four twist", function() {
    it("yellow pieces", function() {
      rotateFace(yelHold);

      expect(yelHold.pieces[0].colorClass).toEqual('OY');
      expect(yelHold.pieces[1].colorClass).toEqual('GY');
      expect(yelHold.pieces[2].colorClass).toEqual('RY');
      expect(yelHold.pieces[3].colorClass).toEqual('BY');
    });

    it("touching faces pieces", function() {
      expect(oraHold.pieces[0].colorClass).toEqual('OY');
      expect(greHold.pieces[0].colorClass).toEqual('GY');
      expect(redHold.pieces[0].colorClass).toEqual('RY');
      expect(blueHold.pieces[0].colorClass).toEqual('BY');
    });
  });
});
