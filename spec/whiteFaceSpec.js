describe("white face", function() {
  describe("starting", function() {
    it("white face pieces", function() {
      expect(whiHold[0].colorClass).toEqual('.OW');
      expect(whiHold[1].colorClass).toEqual('.BW');
      expect(whiHold[2].colorClass).toEqual('.RW');
      expect(whiHold[3].colorClass).toEqual('.GW');
    });

    it("touching faces pieces", function() {
      expect(oraHold[2].colorClass).toEqual('.OW');
      expect(blueHold[2].colorClass).toEqual('.BW');
      expect(redHold[2].colorClass).toEqual('.RW');
      expect(greHold[2].colorClass).toEqual('.GW');
    });
  });

  describe("one twist", function() {
    it("white face pieces", function() {
      rotateFace(whiHold);

      expect(whiHold[0].colorClass).toEqual('.GW');
      expect(whiHold[1].colorClass).toEqual('.OW');
      expect(whiHold[2].colorClass).toEqual('.BW');
      expect(whiHold[3].colorClass).toEqual('.RW');
    });

    it("touching faces pieces", function() {
      expect(oraHold[2].colorClass).toEqual('.GW');
      expect(blueHold[2].colorClass).toEqual('.OW');
      expect(redHold[2].colorClass).toEqual('.BW');
      expect(greHold[2].colorClass).toEqual('.RW');
    });
  });

  describe("two twist", function() {
    it("white face pieces", function() {
      rotateFace(whiHold);

      expect(whiHold[0].colorClass).toEqual('.RW');
      expect(whiHold[1].colorClass).toEqual('.GW');
      expect(whiHold[2].colorClass).toEqual('.OW');
      expect(whiHold[3].colorClass).toEqual('.BW');
    });

    it("touching faces pieces", function() {
      expect(oraHold[2].colorClass).toEqual('.RW');
      expect(blueHold[2].colorClass).toEqual('.GW');
      expect(redHold[2].colorClass).toEqual('.OW');
      expect(greHold[2].colorClass).toEqual('.BW');
    });
  });

  describe("three twist", function() {
    it("white face pieces", function() {
      rotateFace(whiHold);

      expect(whiHold[0].colorClass).toEqual('.BW');
      expect(whiHold[1].colorClass).toEqual('.RW');
      expect(whiHold[2].colorClass).toEqual('.GW');
      expect(whiHold[3].colorClass).toEqual('.OW');
    });

    it("touching faces pieces", function() {
      expect(oraHold[2].colorClass).toEqual('.BW');
      expect(blueHold[2].colorClass).toEqual('.RW');
      expect(redHold[2].colorClass).toEqual('.GW');
      expect(greHold[2].colorClass).toEqual('.OW');
    });
  });

  describe("four twist", function() {
    it("white face pieces", function() {
      rotateFace(whiHold);

      expect(whiHold[0].colorClass).toEqual('.OW');
      expect(whiHold[1].colorClass).toEqual('.BW');
      expect(whiHold[2].colorClass).toEqual('.RW');
      expect(whiHold[3].colorClass).toEqual('.GW');
    });

    it("touching faces pieces", function() {
      expect(oraHold[2].colorClass).toEqual('.OW');
      expect(blueHold[2].colorClass).toEqual('.BW');
      expect(redHold[2].colorClass).toEqual('.RW');
      expect(greHold[2].colorClass).toEqual('.GW');
    });
  });
});
