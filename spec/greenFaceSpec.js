describe("green face", function() {
  describe("starting", function() {
    it("green face pieces", function() {
      expect(greHold[0].colorClass).toEqual('GY');
      expect(greHold[1].colorClass).toEqual('GO');
      expect(greHold[2].colorClass).toEqual('GW');
      expect(greHold[3].colorClass).toEqual('RG');
    });

    it("touching faces pieces", function() {
      expect(yelHold[1].colorClass).toEqual('GY');
      expect(oraHold[3].colorClass).toEqual('GO');
      expect(whiHold[3].colorClass).toEqual('GW');
      expect(redHold[1].colorClass).toEqual('RG');
    });
  });

  describe("one twist", function() {
    it("green face pieces", function() {
      rotateFace(greHold);

      expect(greHold[0].colorClass).toEqual('RG');
      expect(greHold[1].colorClass).toEqual('GY');
      expect(greHold[2].colorClass).toEqual('GO');
      expect(greHold[3].colorClass).toEqual('GW');
    });

    it("touching faces pieces", function() {
      expect(yelHold[1].colorClass).toEqual('RG');
      expect(oraHold[3].colorClass).toEqual('GY');
      expect(whiHold[3].colorClass).toEqual('GO');
      expect(redHold[1].colorClass).toEqual('GW');
    });
  });

  describe("two twist", function() {
    it("green face pieces", function() {
      rotateFace(greHold);

      expect(greHold[0].colorClass).toEqual('GW');
      expect(greHold[1].colorClass).toEqual('RG');
      expect(greHold[2].colorClass).toEqual('GY');
      expect(greHold[3].colorClass).toEqual('GO');
    });

    it("touching faces pieces", function() {
      expect(yelHold[1].colorClass).toEqual('GW');
      expect(oraHold[3].colorClass).toEqual('RG');
      expect(whiHold[3].colorClass).toEqual('GY');
      expect(redHold[1].colorClass).toEqual('GO');
    });
  });

  describe("three twist", function() {
    it("green face pieces", function() {
      rotateFace(greHold);

      expect(greHold[0].colorClass).toEqual('GO');
      expect(greHold[1].colorClass).toEqual('GW');
      expect(greHold[2].colorClass).toEqual('RG');
      expect(greHold[3].colorClass).toEqual('GY');
    });

    it("touching faces pieces", function() {
      expect(yelHold[1].colorClass).toEqual('GO');
      expect(oraHold[3].colorClass).toEqual('GW');
      expect(whiHold[3].colorClass).toEqual('RG');
      expect(redHold[1].colorClass).toEqual('GY');
    });
  });

  describe("four twist", function() {
    it("green face pieces", function() {
      rotateFace(greHold);

      expect(greHold[0].colorClass).toEqual('GY');
      expect(greHold[1].colorClass).toEqual('GO');
      expect(greHold[2].colorClass).toEqual('GW');
      expect(greHold[3].colorClass).toEqual('RG');
    });

    it("touching faces pieces", function() {
      expect(yelHold[1].colorClass).toEqual('GY');
      expect(oraHold[3].colorClass).toEqual('GO');
      expect(whiHold[3].colorClass).toEqual('GW');
      expect(redHold[1].colorClass).toEqual('RG');
    });
  });
});
