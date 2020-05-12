
var canvas = document.querySelector("#canvas"),
    ctx = canvas.getContext("2d"),
    link = document.createElement('link');
    particles = [],
    amount = 0,
    mouse = { x: -9999, y: -9999 },
    radius = 1,
    colors = [
      "rgba(255,79,21,0.85)",  //RGB(231,186,254)   rgb(255,79,21)
      "rgba(255,75,16,0,0.75)",   //RGB(220,255,0)  RGB(194,1,56) RGB(255,75,16)
      "rgba(255,79,21,0.85)",   //RGB(RGB(184,191,0)) RGB(173,1,50) RGB(130,1,38) RGB(255,79,21)
      "rgba(255,127,84,0.85)",    //RGB(255,213,0) RGB(173,44,81) RGB(255,127,84)
      "rgba(204,63,17,0.75)"    //RGB(245,255,0) RGB(153,0,51) RGB(204,63,17)
    ],
    headline = document.querySelector("#headline"),
    ww = window.innerWidth,
    wh = window.innerHeight;



function Particle(x, y) {

  this.x = Math.random() * ww;
  this.y = Math.random() * wh;
  this.dest = { x: x, y: y };
  this.r = Math.random() * 2 * Math.PI;
  this.vx = (Math.random() - 0.5) * 25;
  this.vy = (Math.random() - 0.5) * 25;
  this.accX = 0;
  this.accY = 0;
  this.friction = Math.random() * 0.025 + 0.94;
  this.color = colors[Math.floor(Math.random() * 4.75)];
}

Particle.prototype.render = function() {

  this.accX = (this.dest.x - this.x) / 1000;
  this.accY = (this.dest.y - this.y) / 1000;
  this.vx += this.accX;
  this.vy += this.accY;
  this.vx *= this.friction;
  this.vy *= this.friction;
  this.x += this.vx;
  this.y += this.vy;

  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
  ctx.fill();

  var a = this.x - mouse.x;
  var b = this.y - mouse.y;

  var distance = Math.sqrt(a * a + b * b);
  if (distance < (radius * 75)) {

    this.accX = (this.x - mouse.x) / 100;
    this.accY = (this.y - mouse.y) / 100;
    this.vx += this.accX;
    this.vy += this.accY;
  }
}


function onMouseMove(e) {

  mouse.x = e.clientX;
  mouse.y = e.clientY;
  }

  function onTouchMove(e) {

  if (e.touches.length > 0) {

    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
  }
}

function onTouchEnd(e) {

  mouse.x = -9999;
  mouse.y = -9999;
}

function initScene() {

  ww = canvas.width = window.innerWidth;
  wh = canvas.height = window.innerHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  document.getElementsByTagName('head')[0].appendChild(link);

  ctx.font = 'bold 12vw "Abril Fatface"';
  ctx.textAlign = "center";
  ctx.fillText(headline.innerHTML, ww / 2, wh / 1.6);

  var data = ctx.getImageData(0, 0, ww, wh).data;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "screen";

  particles = [];
  for (var i = 0; i < ww; i += Math.round(ww / 250)) {
    for (var j = 0; j < wh; j += Math.round(ww / 250)) {
      if (data[((i + j * ww) * 4) + 3] > 200) {
      
        particles.push(new Particle(i, j));
      }
    }
  }
  amount = particles.length;
}

function render(a) {

  requestAnimationFrame(render);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < amount; i++) {

    particles[i].render();
  }
}

setTimeout(function(){
  canvas.style.display = "none";
  canvas.style.transition = "all .5s";
  headline.style.display = "none";

},15000)

headline.addEventListener("keyup", initScene);
window.addEventListener("resize", initScene);
window.addEventListener("mousemove", onMouseMove);
window.addEventListener("touchmove", onTouchMove);
window.addEventListener("touchend", onTouchEnd);
initScene();
requestAnimationFrame(render);