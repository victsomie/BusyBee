        /*Your Custom Javascript file goes here.*/
var canvas, c, w, h,
  twoPI = Math.PI * 2,
  mX, mY,
  resize = true,
  mousemove = true,
  per = {
    x: 0,
    y: 0
  },
  mtn, trackmouse = false;

window.onload = function() {
  canvas = document.createElement('canvas')
  w = canvas.width = window.innerWidth - 40;
  h = canvas.height = window.innerHeight - 40;
  c = canvas.getContext('2d');
  document.body.appendChild(canvas);

  !resize || window.addEventListener('resize', function(e) {
    w = canvas.width = window.innerWidth - 40;
    h = canvas.height = window.innerHeight - 40;
  });
  !mousemove || canvas.addEventListener('mousemove', function(e) {
    trackmouse = true;
    mX = e.pageX - 20;
    mY = e.pageY - 20;
    per = {
      x: mX,
      y: mY
    };
  });

  mX = w / 2;
  mY = w / 2;

  per = {
    x: w / 2,
    y: h / 2,
    step: 1
  }
  mtn = new Mountains(300, "10");
  window.setInterval(animate, 17);
}

