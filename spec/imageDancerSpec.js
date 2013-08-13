describe("imageDancer", function() {

  var imageDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    window.dancers = [];
    imageDancer = new ImageDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(imageDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node rotate", function() {
    sinon.spy(imageDancer.$node, 'css');
    imageDancer.step();
    expect(imageDancer.$node.css.called).to.be.true;
  });
  
  it("should have a lineUp function that makes its node line up", function() {
    sinon.spy(imageDancer.$node, 'animate');
    imageDancer.lineUp();
    expect(imageDancer.$node.animate.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(imageDancer, "step");
      expect(imageDancer.step.callCount).to.be.equal(0)
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(imageDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(imageDancer.step.callCount).to.be.equal(2);
    });
  });
});
