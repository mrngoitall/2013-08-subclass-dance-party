// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // 'this' is Object.create(Dancer.prototype);
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  this._timeBetweenSteps = timeBetweenSteps;
  this.step(); //Should refer to the blinkyDancer
  this._top = top;
  this._left = left;
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var that = this;
  setTimeout(function() {
    that.step(); // Without using var that = this, 'this' runs in the new Dancer instance
    // the first time it is run, but it changes to global scope once setTimeout runs
    // it (in the wrong context). This means it'll just stops running altogether.
  }, this._timeBetweenSteps);
};

Dancer.prototype.findDistance = function(node) {
  return Math.sqrt((Math.pow(node.style.top.substring(0,5),2)+Math.pow(this.$node[0].style.top.substring(0,5),2)));
};

Dancer.prototype.setPosition = function(top, left){
  /* Use css top and left properties to position our <span> tag
   * where it belongs on the page. See http://api.jquery.com/css/
   */
  this.$node.css({
    top: top,
    left: left
  });
};