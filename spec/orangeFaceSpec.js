describe("orange face", function() {
  describe("starting", function() {
    it("orange face pieces", function() {
      expect(oraHold.pieces[0].colorClass).toEqual('OY');
      expect(oraHold.pieces[1].colorClass).toEqual('BO');
      expect(oraHold.pieces[2].colorClass).toEqual('OW');
      expect(oraHold.pieces[3].colorClass).toEqual('GO');
    });

    it("touching faces pieces", function() {
      expect(yelHold.pieces[0].colorClass).toEqual('OY');
      expect(blueHold.pieces[3].colorClass).toEqual('BO');
      expect(whiHold.pieces[0].colorClass).toEqual('OW');
      expect(greHold.pieces[1].colorClass).toEqual('GO');
    });

    it ('correct piece locations', function() {
      expect(OY.xDegree).toEqual(0);
      expect(OY.yDegree).toEqual(180);
      expect(OY.zDegree).toEqual(0);

      expect(BO.xDegree).toEqual(0);
      expect(BO.yDegree).toEqual(180);
      expect(BO.zDegree).toEqual(-90);

      expect(OW.xDegree).toEqual(0);
      expect(OW.yDegree).toEqual(180);
      expect(OW.zDegree).toEqual(180);

      expect(GO.xDegree).toEqual(0);
      expect(GO.yDegree).toEqual(180);
      expect(GO.zDegree).toEqual(90);
    });
  });

  describe("one twist", function() {
    it("orange face pieces", function() {
      rotateFace(oraHold);

      expect(oraHold.pieces[0].colorClass).toEqual('GO');
      expect(oraHold.pieces[1].colorClass).toEqual('OY');
      expect(oraHold.pieces[2].colorClass).toEqual('BO');
      expect(oraHold.pieces[3].colorClass).toEqual('OW');
    });

    it("touching faces pieces", function() {
      expect(yelHold.pieces[0].colorClass).toEqual('GO');
      expect(blueHold.pieces[3].colorClass).toEqual('OY');
      expect(whiHold.pieces[0].colorClass).toEqual('BO');
      expect(greHold.pieces[1].colorClass).toEqual('OW');
    });
  });

  describe("two twist", function() {
    it("orange face pieces", function() {
      rotateFace(oraHold);

      expect(oraHold.pieces[0].colorClass).toEqual('OW');
      expect(oraHold.pieces[1].colorClass).toEqual('GO');
      expect(oraHold.pieces[2].colorClass).toEqual('OY');
      expect(oraHold.pieces[3].colorClass).toEqual('BO');
    });

    it("touching faces pieces", function() {
      expect(yelHold.pieces[0].colorClass).toEqual('OW');
      expect(blueHold.pieces[3].colorClass).toEqual('GO');
      expect(whiHold.pieces[0].colorClass).toEqual('OY');
      expect(greHold.pieces[1].colorClass).toEqual('BO');
    });
  });

  describe("three twist", function() {
    it("orange face pieces", function() {
      rotateFace(oraHold);

      expect(oraHold.pieces[0].colorClass).toEqual('BO');
      expect(oraHold.pieces[1].colorClass).toEqual('OW');
      expect(oraHold.pieces[2].colorClass).toEqual('GO');
      expect(oraHold.pieces[3].colorClass).toEqual('OY');
    });

    it("touching faces pieces", function() {
      expect(yelHold.pieces[0].colorClass).toEqual('BO');
      expect(blueHold.pieces[3].colorClass).toEqual('OW');
      expect(whiHold.pieces[0].colorClass).toEqual('GO');
      expect(greHold.pieces[1].colorClass).toEqual('OY');
    });
  });

  describe("four twist", function() {
    it("orange face pieces", function() {
      rotateFace(oraHold);

      expect(oraHold.pieces[0].colorClass).toEqual('OY');
      expect(oraHold.pieces[1].colorClass).toEqual('BO');
      expect(oraHold.pieces[2].colorClass).toEqual('OW');
      expect(oraHold.pieces[3].colorClass).toEqual('GO');
    });

    it("touching faces pieces", function() {
      expect(yelHold.pieces[0].colorClass).toEqual('OY');
      expect(blueHold.pieces[3].colorClass).toEqual('BO');
      expect(whiHold.pieces[0].colorClass).toEqual('OW');
      expect(greHold.pieces[1].colorClass).toEqual('GO');
    });
  });
});
