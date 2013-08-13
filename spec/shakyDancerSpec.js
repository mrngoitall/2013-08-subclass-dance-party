describe("shakyDancer", function() {

  var shakyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    window.dancers = [];
    shakyDancer = new ShakyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(shakyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node shake", function() {
    sinon.spy(shakyDancer.$node, 'css');
    shakyDancer.step();
    expect(shakyDancer.$node.css.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(shakyDancer, "step");
      expect(shakyDancer.step.callCount).to.be.equal(0)
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(shakyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(shakyDancer.step.callCount).to.be.equal(2);
    });
  });
});
