describe("orange face", function() {
  describe("starting", function() {
    it("orange face pieces", function() {
      expect(oraHold[0].colorClass).toEqual('OY');
      expect(oraHold[1].colorClass).toEqual('BO');
      expect(oraHold[2].colorClass).toEqual('OW');
      expect(oraHold[3].colorClass).toEqual('GO');
    });

    it("touching faces pieces", function() {
      expect(yelHold[0].colorClass).toEqual('OY');
      expect(blueHold[3].colorClass).toEqual('BO');
      expect(whiHold[0].colorClass).toEqual('OW');
      expect(greHold[1].colorClass).toEqual('GO');
    });
  });

  describe("one twist", function() {
    it("orange face pieces", function() {
      rotateFace(oraHold);

      expect(oraHold[0].colorClass).toEqual('GO');
      expect(oraHold[1].colorClass).toEqual('OY');
      expect(oraHold[2].colorClass).toEqual('BO');
      expect(oraHold[3].colorClass).toEqual('OW');
    });

    it("touching faces pieces", function() {
      expect(yelHold[0].colorClass).toEqual('GO');
      expect(blueHold[3].colorClass).toEqual('OY');
      expect(whiHold[0].colorClass).toEqual('BO');
      expect(greHold[1].colorClass).toEqual('OW');
    });
  });

  describe("two twist", function() {
    it("orange face pieces", function() {
      rotateFace(oraHold);

      expect(oraHold[0].colorClass).toEqual('OW');
      expect(oraHold[1].colorClass).toEqual('GO');
      expect(oraHold[2].colorClass).toEqual('OY');
      expect(oraHold[3].colorClass).toEqual('BO');
    });

    it("touching faces pieces", function() {
      expect(yelHold[0].colorClass).toEqual('OW');
      expect(blueHold[3].colorClass).toEqual('GO');
      expect(whiHold[0].colorClass).toEqual('OY');
      expect(greHold[1].colorClass).toEqual('BO');
    });
  });

  describe("three twist", function() {
    it("orange face pieces", function() {
      rotateFace(oraHold);

      expect(oraHold[0].colorClass).toEqual('BO');
      expect(oraHold[1].colorClass).toEqual('OW');
      expect(oraHold[2].colorClass).toEqual('GO');
      expect(oraHold[3].colorClass).toEqual('OY');
    });

    it("touching faces pieces", function() {
      expect(yelHold[0].colorClass).toEqual('BO');
      expect(blueHold[3].colorClass).toEqual('OW');
      expect(whiHold[0].colorClass).toEqual('GO');
      expect(greHold[1].colorClass).toEqual('OY');
    });
  });

  describe("four twist", function() {
    it("orange face pieces", function() {
      rotateFace(oraHold);

      expect(oraHold[0].colorClass).toEqual('OY');
      expect(oraHold[1].colorClass).toEqual('BO');
      expect(oraHold[2].colorClass).toEqual('OW');
      expect(oraHold[3].colorClass).toEqual('GO');
    });

    it("touching faces pieces", function() {
      expect(yelHold[0].colorClass).toEqual('OY');
      expect(blueHold[3].colorClass).toEqual('BO');
      expect(whiHold[0].colorClass).toEqual('OW');
      expect(greHold[1].colorClass).toEqual('GO');
    });
  });
});
