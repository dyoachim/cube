describe("blue face", function() {
  describe("starting", function() {
    it("blue face pieces", function() {
      expect(blueHold[0].colorClass).toEqual('BY');
      expect(blueHold[1].colorClass).toEqual('RB');
      expect(blueHold[2].colorClass).toEqual('BW');
      expect(blueHold[3].colorClass).toEqual('BO');
    });

    it("touching faces pieces", function() {
      expect(yelHold[3].colorClass).toEqual('BY');
      expect(redHold[3].colorClass).toEqual('RB');
      expect(whiHold[1].colorClass).toEqual('BW');
      expect(oraHold[1].colorClass).toEqual('BO');
    });
  });

  describe("one twist", function() {
    it("blue face pieces", function() {
      rotateFace(blueHold);

      expect(blueHold[0].colorClass).toEqual('BO');
      expect(blueHold[1].colorClass).toEqual('BY');
      expect(blueHold[2].colorClass).toEqual('RB');
      expect(blueHold[3].colorClass).toEqual('BW');
    });

    it("touching faces pieces", function() {
      expect(yelHold[3].colorClass).toEqual('BO');
      expect(redHold[3].colorClass).toEqual('BY');
      expect(whiHold[1].colorClass).toEqual('RB');
      expect(oraHold[1].colorClass).toEqual('BW');
    });
  });

  describe("two twist", function() {
    it("blue face pieces", function() {
      rotateFace(blueHold);

      expect(blueHold[0].colorClass).toEqual('BW');
      expect(blueHold[1].colorClass).toEqual('BO');
      expect(blueHold[2].colorClass).toEqual('BY');
      expect(blueHold[3].colorClass).toEqual('RB');
    });

    it("touching faces pieces", function() {
      expect(yelHold[3].colorClass).toEqual('BW');
      expect(redHold[3].colorClass).toEqual('BO');
      expect(whiHold[1].colorClass).toEqual('BY');
      expect(oraHold[1].colorClass).toEqual('RB');
    });
  });

  describe("three twist", function() {
    it("blue face pieces", function() {
      rotateFace(blueHold);

      expect(blueHold[0].colorClass).toEqual('RB');
      expect(blueHold[1].colorClass).toEqual('BW');
      expect(blueHold[2].colorClass).toEqual('BO');
      expect(blueHold[3].colorClass).toEqual('BY');
    });

    it("touching faces pieces", function() {
      expect(yelHold[3].colorClass).toEqual('RB');
      expect(redHold[3].colorClass).toEqual('BW');
      expect(whiHold[1].colorClass).toEqual('BO');
      expect(oraHold[1].colorClass).toEqual('BY');
    });
  });

  describe("four twist", function() {
    it("blue face pieces", function() {
      rotateFace(blueHold);

      expect(blueHold[0].colorClass).toEqual('BY');
      expect(blueHold[1].colorClass).toEqual('RB');
      expect(blueHold[2].colorClass).toEqual('BW');
      expect(blueHold[3].colorClass).toEqual('BO');
    });

    it("touching faces pieces", function() {
      expect(yelHold[3].colorClass).toEqual('BY');
      expect(redHold[3].colorClass).toEqual('RB');
      expect(whiHold[1].colorClass).toEqual('BW');
      expect(oraHold[1].colorClass).toEqual('BO');
    });
  });
});
