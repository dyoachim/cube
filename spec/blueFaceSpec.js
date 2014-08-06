describe("blue face", function() {
  describe("starting", function() {
    it("blue face pieces", function() {
      expect(blueHold.pieces[0].colorClass).toEqual('BY');
      expect(blueHold.pieces[1].colorClass).toEqual('RB');
      expect(blueHold.pieces[2].colorClass).toEqual('BW');
      expect(blueHold.pieces[3].colorClass).toEqual('BO');
    });

    it("touching faces pieces", function() {
      expect(yelHold.pieces[3].colorClass).toEqual('BY');
      expect(redHold.pieces[3].colorClass).toEqual('RB');
      expect(whiHold.pieces[1].colorClass).toEqual('BW');
      expect(oraHold.pieces[1].colorClass).toEqual('BO');
    });
  });

  describe("one twist", function() {
    it("blue face pieces", function() {
      rotateFace(blueHold);

      expect(blueHold.pieces[0].colorClass).toEqual('BO');
      expect(blueHold.pieces[1].colorClass).toEqual('BY');
      expect(blueHold.pieces[2].colorClass).toEqual('RB');
      expect(blueHold.pieces[3].colorClass).toEqual('BW');
    });

    it("touching faces pieces", function() {
      expect(yelHold.pieces[3].colorClass).toEqual('BO');
      expect(redHold.pieces[3].colorClass).toEqual('BY');
      expect(whiHold.pieces[1].colorClass).toEqual('RB');
      expect(oraHold.pieces[1].colorClass).toEqual('BW');
    });
  });

  describe("two twist", function() {
    it("blue face pieces", function() {
      rotateFace(blueHold);

      expect(blueHold.pieces[0].colorClass).toEqual('BW');
      expect(blueHold.pieces[1].colorClass).toEqual('BO');
      expect(blueHold.pieces[2].colorClass).toEqual('BY');
      expect(blueHold.pieces[3].colorClass).toEqual('RB');
    });

    it("touching faces pieces", function() {
      expect(yelHold.pieces[3].colorClass).toEqual('BW');
      expect(redHold.pieces[3].colorClass).toEqual('BO');
      expect(whiHold.pieces[1].colorClass).toEqual('BY');
      expect(oraHold.pieces[1].colorClass).toEqual('RB');
    });
  });

  describe("three twist", function() {
    it("blue face pieces", function() {
      rotateFace(blueHold);

      expect(blueHold.pieces[0].colorClass).toEqual('RB');
      expect(blueHold.pieces[1].colorClass).toEqual('BW');
      expect(blueHold.pieces[2].colorClass).toEqual('BO');
      expect(blueHold.pieces[3].colorClass).toEqual('BY');
    });

    it("touching faces pieces", function() {
      expect(yelHold.pieces[3].colorClass).toEqual('RB');
      expect(redHold.pieces[3].colorClass).toEqual('BW');
      expect(whiHold.pieces[1].colorClass).toEqual('BO');
      expect(oraHold.pieces[1].colorClass).toEqual('BY');
    });
  });

  describe("four twist", function() {
    it("blue face pieces", function() {
      rotateFace(blueHold);

      expect(blueHold.pieces[0].colorClass).toEqual('BY');
      expect(blueHold.pieces[1].colorClass).toEqual('RB');
      expect(blueHold.pieces[2].colorClass).toEqual('BW');
      expect(blueHold.pieces[3].colorClass).toEqual('BO');
    });

    it("touching faces pieces", function() {
      expect(yelHold.pieces[3].colorClass).toEqual('BY');
      expect(redHold.pieces[3].colorClass).toEqual('RB');
      expect(whiHold.pieces[1].colorClass).toEqual('BW');
      expect(oraHold.pieces[1].colorClass).toEqual('BO');
    });
  });
});
