var ImageDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  var oldStep = Dancer.prototype.step;
  window.dancers.push(this);
  this.$node.addClass("imagey");

  this.$node.css({
    'border': 'none'
  });
  var images = ['lib/dancing_banana.gif','lib/cabinetinfomercial.gif','lib/marcus.gif'];
  this.$node.append("<img class='imageDancer' src="+images[Math.floor(Math.random()*images.length)]+">");

};

ImageDancer.prototype = new Dancer();
ImageDancer.prototype.constructor = ImageDancer;
ImageDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  rotation = (Math.ceil(Math.random()*360));
  this.$node.css({
    "-webkit-transform": "rotate("+rotation+"deg)"
  });
};
ImageDancer.prototype.lineUp = function() {
  this.$node.animate({top: "500px"}, 1500);
};