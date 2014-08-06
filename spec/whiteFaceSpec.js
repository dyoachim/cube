describe("white face", function() {
  describe("starting", function() {
    it("white face pieces", function() {
      expect(whiHold.pieces[0].colorClass).toEqual('OW');
      expect(whiHold.pieces[1].colorClass).toEqual('BW');
      expect(whiHold.pieces[2].colorClass).toEqual('RW');
      expect(whiHold.pieces[3].colorClass).toEqual('GW');
    });

    it("touching faces pieces", function() {
      expect(oraHold.pieces[2].colorClass).toEqual('OW');
      expect(blueHold.pieces[2].colorClass).toEqual('BW');
      expect(redHold.pieces[2].colorClass).toEqual('RW');
      expect(greHold.pieces[2].colorClass).toEqual('GW');
    });
  });

  describe("one twist", function() {
    it("white face pieces", function() {
      rotateFace(whiHold);

      expect(whiHold.pieces[0].colorClass).toEqual('GW');
      expect(whiHold.pieces[1].colorClass).toEqual('OW');
      expect(whiHold.pieces[2].colorClass).toEqual('BW');
      expect(whiHold.pieces[3].colorClass).toEqual('RW');
    });

    it("touching faces pieces", function() {
      expect(oraHold.pieces[2].colorClass).toEqual('GW');
      expect(blueHold.pieces[2].colorClass).toEqual('OW');
      expect(redHold.pieces[2].colorClass).toEqual('BW');
      expect(greHold.pieces[2].colorClass).toEqual('RW');
    });
  });

  describe("two twist", function() {
    it("white face pieces", function() {
      rotateFace(whiHold);

      expect(whiHold.pieces[0].colorClass).toEqual('RW');
      expect(whiHold.pieces[1].colorClass).toEqual('GW');
      expect(whiHold.pieces[2].colorClass).toEqual('OW');
      expect(whiHold.pieces[3].colorClass).toEqual('BW');
    });

    it("touching faces pieces", function() {
      expect(oraHold.pieces[2].colorClass).toEqual('RW');
      expect(blueHold.pieces[2].colorClass).toEqual('GW');
      expect(redHold.pieces[2].colorClass).toEqual('OW');
      expect(greHold.pieces[2].colorClass).toEqual('BW');
    });
  });

  describe("three twist", function() {
    it("white face pieces", function() {
      rotateFace(whiHold);

      expect(whiHold.pieces[0].colorClass).toEqual('BW');
      expect(whiHold.pieces[1].colorClass).toEqual('RW');
      expect(whiHold.pieces[2].colorClass).toEqual('GW');
      expect(whiHold.pieces[3].colorClass).toEqual('OW');
    });

    it("touching faces pieces", function() {
      expect(oraHold.pieces[2].colorClass).toEqual('BW');
      expect(blueHold.pieces[2].colorClass).toEqual('RW');
      expect(redHold.pieces[2].colorClass).toEqual('GW');
      expect(greHold.pieces[2].colorClass).toEqual('OW');
    });
  });

  describe("four twist", function() {
    it("white face pieces", function() {
      rotateFace(whiHold);

      expect(whiHold.pieces[0].colorClass).toEqual('OW');
      expect(whiHold.pieces[1].colorClass).toEqual('BW');
      expect(whiHold.pieces[2].colorClass).toEqual('RW');
      expect(whiHold.pieces[3].colorClass).toEqual('GW');
    });

    it("touching faces pieces", function() {
      expect(oraHold.pieces[2].colorClass).toEqual('OW');
      expect(blueHold.pieces[2].colorClass).toEqual('BW');
      expect(redHold.pieces[2].colorClass).toEqual('RW');
      expect(greHold.pieces[2].colorClass).toEqual('GW');
    });
  });
});
