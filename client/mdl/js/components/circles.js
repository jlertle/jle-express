'use strict';
var m = require('mithril');

var mCircles = {};
var aCircles = [];
// inspired by http://vegibit.com/mithril-javascript-tutorial/#high-performance-rendering

mCircles.controller = function(options) {
  var ctrl = this;
  ctrl.running = true;
  ctrl.run = function() {
    ctrl.running = true;
  };
  ctrl.stop = function() {
    ctrl.running = false;
  };
  ctrl.canvas = null;

  ctrl.update = function() {
    if (!ctrl.running) {
      return;
    }

    var canvas = ctrl.canvas;

    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.ctx.fillStyle = '#FFFFFF';
    canvas.ctx.fillRect(0, 0, canvas.width, canvas.height);

    aCircles.map(function(cil) {
      cil.angle += cil.incrementer;
      cil.currentX = cil.initialX + cil.rotationRadius * Math.cos(cil.angle);
      cil.currentY = cil.initialY + cil.rotationRadius * Math.sin(cil.angle);
      if (cil.angle >= (Math.PI * 2)) {
        cil.angle = 0;
        cil.incrementer = 0.01 + Math.random() * 0.1;
      }

      renderm(canvas.ctx, cil);
    });

    requestAnimationFrame(ctrl.update);
  };

  ctrl.canvasConfig = function(el, initialized) {
    if (!initialized) {
      ctrl.canvas = {
        el: el,
        ctx: el.getContext('2d'),
        width: el.width,
        height: el.height
      };

      mcreateCircles(ctrl.canvas.width, ctrl.canvas.height);
    }

    ctrl.update();
  };
};

function mCircle(angle, sign, radius, rotationRadius, initialX, initialY) {
  var _this = this;
  _this.angle = angle;
  _this.sign = sign;
  _this.radius = radius;
  _this.rotationRadius = rotationRadius;
  _this.initialX = initialX;
  _this.initialY = initialY;
  _this.incrementer = 0.01 + Math.random() * 0.1;
}

function mcreateCircles(canvasWidth, canvasHeight) {
  // change the range of this loop to adjust the number of circles that you see
  for (var i = 0; i < 10; i++) {
    var radius = 5 + Math.random() * 40;
    var initialX = canvasWidth / 2;
    var initialY = canvasHeight / 2;
    // var initialX = canvasWidth / Math.floor(1 + Math.random() * 6);
    // var initialY = canvasHeight / Math.floor(1 + Math.random() * 6);
    var rotationRadius = 1 + Math.random() * 30;
    var angle = Math.random() * 2 * Math.PI;

    var signHelper = Math.floor(Math.random() * 2);
    var sign;

    // Randomly rotating clockwise or counterclockwise
    if (signHelper === 1) {
      sign = -1;
    } else {
      sign = 1;
    }

    // create the Circle object
    var mcircle = new mCircle(angle, sign, radius, rotationRadius, initialX, initialY);
    aCircles.push(mcircle);
  }
}

function renderm(context, coords) {
  context.beginPath();
  context.arc(coords.currentX, coords.currentY, coords.radius, 0, Math.PI * 2, false);
  context.closePath();
  context.fillStyle = 'rgba(177, 0, 129, 0.2)';
  //context.fillStyle = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ', 0.5)';
  context.fill();
}

mCircles.view = function(ctrl) {
  // return m('canvas#mCanvas', {
  //   config: ctrl.canvasConfig,
  //   style: {
  //     width: '100%',
  //     height: '100%'
  //   }
  // });
  return m('.test', [
    m('h3', 'Mithril rAF Redaw Testing'),
    m('h5', 'Running: ' + ctrl.running),
    m('button', {
      onclick: ctrl.run
    }, 'Faster'),
    m('button', {
      onclick: ctrl.stop
    }, 'Stop'),
    m('br'),
    m('canvas#mCanvas', {
      config: ctrl.canvasConfig,
      style: {
        width: '100%',
        height: '100%'
      }
    })
  ]);
};

module.exports = mCircles;
