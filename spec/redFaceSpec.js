describe("red face", function() {

  describe("starting", function(){
    it("red face pieces", function() {
      expect(redHold.pieces[0].colorClass).toEqual('RY');
      expect(redHold.pieces[1].colorClass).toEqual('RG');
      expect(redHold.pieces[2].colorClass).toEqual('RW');
      expect(redHold.pieces[3].colorClass).toEqual('RB');
    });


    it("touching faces pieces", function() {
      expect(yelHold.pieces[2].colorClass).toEqual('RY');
      expect(greHold.pieces[3].colorClass).toEqual('RG');
      expect(whiHold.pieces[2].colorClass).toEqual('RW');
      expect(blueHold.pieces[1].colorClass).toEqual('RB');
    });

    it ('correct piece locations', function() {
      expect(RY.xDegree).toEqual(0);
      expect(RY.yDegree).toEqual(0);
      expect(RY.zDegree).toEqual(0);

      expect(RG.xDegree).toEqual(0);
      expect(RG.yDegree).toEqual(0);
      expect(RG.zDegree).toEqual(-90);

      expect(RW.xDegree).toEqual(0);
      expect(RW.yDegree).toEqual(0);
      expect(RW.zDegree).toEqual(180);

      expect(RB.xDegree).toEqual(0);
      expect(RB.yDegree).toEqual(0);
      expect(RB.zDegree).toEqual(90);
    });
  });

  describe("one twist", function() {
    it("red face pieces", function() {
      rotateFace(redHold);

      expect(redHold.pieces[0].colorClass).toEqual('RB');
      expect(redHold.pieces[1].colorClass).toEqual('RY');
      expect(redHold.pieces[2].colorClass).toEqual('RG');
      expect(redHold.pieces[3].colorClass).toEqual('RW');
    });

    it("touching faces pieces", function() {
      expect(yelHold.pieces[2].colorClass).toEqual('RB');
      expect(greHold.pieces[3].colorClass).toEqual('RY');
      expect(whiHold.pieces[2].colorClass).toEqual('RG');
      expect(blueHold.pieces[1].colorClass).toEqual('RW');
    });

    it ('correct piece locations', function() {
      expect(RB.xDegree).toEqual(0);
      expect(RB.yDegree).toEqual(0);
      expect(RB.zDegree).toEqual(0);

      expect(RY.xDegree).toEqual(0);
      expect(RY.yDegree).toEqual(0);
      expect(RY.zDegree).toEqual(-90);

      expect(RG.xDegree).toEqual(0);
      expect(RG.yDegree).toEqual(0);
      expect(RG.zDegree).toEqual(-180);

      expect(RW.xDegree).toEqual(0);
      expect(RW.yDegree).toEqual(0);
      expect(RW.zDegree).toEqual(90);
    });
  });

  describe("two twist", function() {
    it("red face pieces", function() {
      rotateFace(redHold);

      expect(redHold.pieces[0].colorClass).toEqual('RW');
      expect(redHold.pieces[1].colorClass).toEqual('RB');
      expect(redHold.pieces[2].colorClass).toEqual('RY');
      expect(redHold.pieces[3].colorClass).toEqual('RG');
    });

    it("touching faces pieces", function() {
      expect(yelHold.pieces[2].colorClass).toEqual('RW');
      expect(greHold.pieces[3].colorClass).toEqual('RB');
      expect(whiHold.pieces[2].colorClass).toEqual('RY');
      expect(blueHold.pieces[1].colorClass).toEqual('RG');
    });

    it ('correct piece locations', function() {
      expect(RW.xDegree).toEqual(0);
      expect(RW.yDegree).toEqual(0);
      expect(RW.zDegree).toEqual(0);

      expect(RB.xDegree).toEqual(0);
      expect(RB.yDegree).toEqual(0);
      expect(RB.zDegree).toEqual(-90);

      expect(RY.xDegree).toEqual(0);
      expect(RY.yDegree).toEqual(0);
      expect(RY.zDegree).toEqual(-180);

      expect(RG.xDegree).toEqual(0);
      expect(RG.yDegree).toEqual(0);
      expect(RG.zDegree).toEqual(-270);
    });
  });

  describe("three twist", function() {
    it("red face pieces", function() {
      rotateFace(redHold);

      expect(redHold.pieces[0].colorClass).toEqual('RG');
      expect(redHold.pieces[1].colorClass).toEqual('RW');
      expect(redHold.pieces[2].colorClass).toEqual('RB');
      expect(redHold.pieces[3].colorClass).toEqual('RY');
    });

    it("touching faces pieces", function() {
      expect(yelHold.pieces[2].colorClass).toEqual('RG');
      expect(greHold.pieces[3].colorClass).toEqual('RW');
      expect(whiHold.pieces[2].colorClass).toEqual('RB');
      expect(blueHold.pieces[1].colorClass).toEqual('RY');
    });

    it ('correct piece locations', function() {
      expect(RG.xDegree).toEqual(0);
      expect(RG.yDegree).toEqual(0);
      expect(RG.zDegree).toEqual(-360);

      expect(RW.xDegree).toEqual(0);
      expect(RW.yDegree).toEqual(0);
      expect(RW.zDegree).toEqual(-90);

      expect(RB.xDegree).toEqual(0);
      expect(RB.yDegree).toEqual(0);
      expect(RB.zDegree).toEqual(-180);

      expect(RY.xDegree).toEqual(0);
      expect(RY.yDegree).toEqual(0);
      expect(RY.zDegree).toEqual(-270);
    });
  });

  describe("four twist", function() {
    it("red face pieces", function() {
      rotateFace(redHold);

      expect(redHold.pieces[0].colorClass).toEqual('RY');
      expect(redHold.pieces[1].colorClass).toEqual('RG');
      expect(redHold.pieces[2].colorClass).toEqual('RW');
      expect(redHold.pieces[3].colorClass).toEqual('RB');
    });

    it("touching faces pieces", function() {
      expect(yelHold.pieces[2].colorClass).toEqual('RY');
      expect(greHold.pieces[3].colorClass).toEqual('RG');
      expect(whiHold.pieces[2].colorClass).toEqual('RW');
      expect(blueHold.pieces[1].colorClass).toEqual('RB');
    });

    it ('correct piece locations', function() {
      expect(RY.xDegree).toEqual(0);
      expect(RY.yDegree).toEqual(0);
      expect(RY.zDegree).toEqual(-360);

      expect(RG.xDegree).toEqual(0);
      expect(RG.yDegree).toEqual(0);
      expect(RG.zDegree).toEqual(-450);

      expect(RW.xDegree).toEqual(0);
      expect(RW.yDegree).toEqual(0);
      expect(RW.zDegree).toEqual(-180);

      expect(RB.xDegree).toEqual(0);
      expect(RB.yDegree).toEqual(0);
      expect(RB.zDegree).toEqual(-270);
    });
  });
});