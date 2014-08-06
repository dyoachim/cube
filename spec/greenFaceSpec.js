describe("green face", function() {
  describe("starting", function() {
    it("green face pieces", function() {
      expect(greHold.pieces[0].colorClass).toEqual('GY');
      expect(greHold.pieces[1].colorClass).toEqual('GO');
      expect(greHold.pieces[2].colorClass).toEqual('GW');
      expect(greHold.pieces[3].colorClass).toEqual('RG');
    });

    it("touching faces pieces", function() {
      expect(yelHold.pieces[1].colorClass).toEqual('GY');
      expect(oraHold.pieces[3].colorClass).toEqual('GO');
      expect(whiHold.pieces[3].colorClass).toEqual('GW');
      expect(redHold.pieces[1].colorClass).toEqual('RG');
    });
  });

  describe("one twist", function() {
    it("green face pieces", function() {
      rotateFace(greHold);

      expect(greHold.pieces[0].colorClass).toEqual('RG');
      expect(greHold.pieces[1].colorClass).toEqual('GY');
      expect(greHold.pieces[2].colorClass).toEqual('GO');
      expect(greHold.pieces[3].colorClass).toEqual('GW');
    });

    it("touching faces pieces", function() {
      expect(yelHold.pieces[1].colorClass).toEqual('RG');
      expect(oraHold.pieces[3].colorClass).toEqual('GY');
      expect(whiHold.pieces[3].colorClass).toEqual('GO');
      expect(redHold.pieces[1].colorClass).toEqual('GW');
    });
  });

  describe("two twist", function() {
    it("green face pieces", function() {
      rotateFace(greHold);

      expect(greHold.pieces[0].colorClass).toEqual('GW');
      expect(greHold.pieces[1].colorClass).toEqual('RG');
      expect(greHold.pieces[2].colorClass).toEqual('GY');
      expect(greHold.pieces[3].colorClass).toEqual('GO');
    });

    it("touching faces pieces", function() {
      expect(yelHold.pieces[1].colorClass).toEqual('GW');
      expect(oraHold.pieces[3].colorClass).toEqual('RG');
      expect(whiHold.pieces[3].colorClass).toEqual('GY');
      expect(redHold.pieces[1].colorClass).toEqual('GO');
    });
  });

  describe("three twist", function() {
    it("green face pieces", function() {
      rotateFace(greHold);

      expect(greHold.pieces[0].colorClass).toEqual('GO');
      expect(greHold.pieces[1].colorClass).toEqual('GW');
      expect(greHold.pieces[2].colorClass).toEqual('RG');
      expect(greHold.pieces[3].colorClass).toEqual('GY');
    });

    it("touching faces pieces", function() {
      expect(yelHold.pieces[1].colorClass).toEqual('GO');
      expect(oraHold.pieces[3].colorClass).toEqual('GW');
      expect(whiHold.pieces[3].colorClass).toEqual('RG');
      expect(redHold.pieces[1].colorClass).toEqual('GY');
    });
  });

  describe("four twist", function() {
    it("green face pieces", function() {
      rotateFace(greHold);

      expect(greHold.pieces[0].colorClass).toEqual('GY');
      expect(greHold.pieces[1].colorClass).toEqual('GO');
      expect(greHold.pieces[2].colorClass).toEqual('GW');
      expect(greHold.pieces[3].colorClass).toEqual('RG');
    });

    it("touching faces pieces", function() {
      expect(yelHold.pieces[1].colorClass).toEqual('GY');
      expect(oraHold.pieces[3].colorClass).toEqual('GO');
      expect(whiHold.pieces[3].colorClass).toEqual('GW');
      expect(redHold.pieces[1].colorClass).toEqual('RG');
    });
  });
});
