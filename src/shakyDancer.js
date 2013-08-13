var ShakyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  var oldStep = Dancer.prototype.step;
  this.addTop = false;
  this.addLeft = true;
  this.newTop = top || 0;
  this.newLeft = left || 0;
  window.dancers.push(this);

};

ShakyDancer.prototype = new Dancer();
ShakyDancer.prototype.constructor = ShakyDancer;
ShakyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
   // 0-255, 0-255, 0-255
  this.addTop ? this.newTop = this.newTop + (10 * Math.random()) : this.newTop = this.newTop - (10 * Math.random());
  this.addLeft ? this.newLeft = this.newLeft + (10 * Math.random()) : this.newLeft = this.newLeft - (10 * Math.random());
  this.addTop ? this.addTop = false : this.addTop = true;
  this.addLeft ? this.addLeft = false : this.addLeft = true;
  var styleSettings = {
    top: this.newTop,
    left: this.newLeft
  };
  this.$node.css(styleSettings);
};

ShakyDancer.prototype.lineUp = function() {
  this.$node.animate({top: "200px"}, 500);
  this.newTop = 200;
};