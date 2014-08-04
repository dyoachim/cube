describe("red face", function() {

  describe("starting", function(){
    it("red face pieces", function() {
      expect(redHold[0].colorClass).toEqual('.RY');
      expect(redHold[1].colorClass).toEqual('.RG');
      expect(redHold[2].colorClass).toEqual('.RW');
      expect(redHold[3].colorClass).toEqual('.RB');
    });

    it("touching faces pieces", function() {
      expect(yelHold[2].colorClass).toEqual('.RY');
      expect(greHold[3].colorClass).toEqual('.RG');
      expect(whiHold[2].colorClass).toEqual('.RW');
      expect(blueHold[1].colorClass).toEqual('.RB');
    });
  });

  describe("one twist", function() {
    it("red face pieces", function() {
      rotateFace(redHold);

      expect(redHold[0].colorClass).toEqual('.RB');
      expect(redHold[1].colorClass).toEqual('.RY');
      expect(redHold[2].colorClass).toEqual('.RG');
      expect(redHold[3].colorClass).toEqual('.RW');
    });

    it("touching faces pieces", function() {
      expect(yelHold[2].colorClass).toEqual('.RB');
      expect(greHold[3].colorClass).toEqual('.RY');
      expect(whiHold[2].colorClass).toEqual('.RG');
      expect(blueHold[1].colorClass).toEqual('.RW');
    });
  });

  describe("two twist", function() {
    it("red face pieces", function() {
      rotateFace(redHold);

      expect(redHold[0].colorClass).toEqual('.RW');
      expect(redHold[1].colorClass).toEqual('.RB');
      expect(redHold[2].colorClass).toEqual('.RY');
      expect(redHold[3].colorClass).toEqual('.RG');
    });

    it("touching faces pieces", function() {
      expect(yelHold[2].colorClass).toEqual('.RW');
      expect(greHold[3].colorClass).toEqual('.RB');
      expect(whiHold[2].colorClass).toEqual('.RY');
      expect(blueHold[1].colorClass).toEqual('.RG');
    });
  });

  describe("three twist", function() {
    it("red face pieces", function() {
      rotateFace(redHold);

      expect(redHold[0].colorClass).toEqual('.RG');
      expect(redHold[1].colorClass).toEqual('.RW');
      expect(redHold[2].colorClass).toEqual('.RB');
      expect(redHold[3].colorClass).toEqual('.RY');
    });

    it("touching faces pieces", function() {
      expect(yelHold[2].colorClass).toEqual('.RG');
      expect(greHold[3].colorClass).toEqual('.RW');
      expect(whiHold[2].colorClass).toEqual('.RB');
      expect(blueHold[1].colorClass).toEqual('.RY');
    });
  });

  describe("four twist", function() {
    it("red face pieces", function() {
      rotateFace(redHold);

      expect(redHold[0].colorClass).toEqual('.RY');
      expect(redHold[1].colorClass).toEqual('.RG');
      expect(redHold[2].colorClass).toEqual('.RW');
      expect(redHold[3].colorClass).toEqual('.RB');
    });

    it("touching faces pieces", function() {
      expect(yelHold[2].colorClass).toEqual('.RY');
      expect(greHold[3].colorClass).toEqual('.RG');
      expect(whiHold[2].colorClass).toEqual('.RW');
      expect(blueHold[1].colorClass).toEqual('.RB');
    });
  });
});