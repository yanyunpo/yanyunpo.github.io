var c = document.getElementById("c"),
    ctx = c.getContext("2d"),
    maskCanvas = document.createElement("canvas"),
    maskCtx = maskCanvas.getContext("2d"),
    orb = new Image(300, 300),
    img = new Image(2048, 1368),
    cw = (maskCanvas.width = c.width = img.width),
    ch = (maskCanvas.height = c.height = img.height),
    ratio = ch/cw,
    mainTL = new TimelineMax({paused:true}),
    particles = [],
    Particle = function(index,x,y) {
      
      this.x = x;
      this.y = y;
		  
      this.draw = function() {
        maskCtx.translate( this.x, this.y );
        // maskCtx.globalAlpha = this.progress;
        maskCtx.drawImage(orb, -this.size/2, -this.size/2, this.size, this.size);
        // maskCtx.globalAlpha = 1;
        maskCtx.translate( -this.x, -this.y );
      }
      
      mainTL.add(new TimelineMax()
        .fromTo(this, rand(1.1, 2.8), {
          progress:0,
          size:500,
          x:"+="+rand(-50,50),
          y:"+="+rand(-50,50)    
        },{
          x:"+="+rand(cw/2,cw),
          size:0,
          progress:1,              
          ease:Power4.easeIn//ease:Power0.easeNone
        }), 0);      
	  };

// populate particles
var pI, pX, pY;
for (pX=pI=0; pX<cw; pX+=100) {
  for (pY=0; pY<ch; pY+=100) {
    pI++;
    particles.push( new Particle(pI,pX,pY) );
  }
}

TweenMax.ticker.addEventListener('tick', updateStage); // redraw canvas upon each 'tick'
// c.addEventListener('click', function(e){
  mainTL.play();
  TweenMax.delayedCall(3, function(){ TweenMax.ticker.removeEventListener('tick', updateStage); }); // ...and stop 'tick' updates
// });

function updateStage(){ console.log('ticking...')
  //update mask
  maskCtx.clearRect(0, 0, cw, ch);  
  for (var i=0; i<particles.length; i++) particles[i].draw();
  //update visible canvas
  ctx.globalCompositeOperation = "source-over";
  ctx.clearRect(0, 0, cw, ch);
  ctx.drawImage(img, 0, 0, cw, ch);  
  ctx.globalCompositeOperation = "destination-in";
  ctx.drawImage(maskCanvas, 0, 0);
}


function doResize() {
  //proportional scale
  if (window.innerHeight / window.innerWidth < ratio) TweenMax.set(c, {transformOrigin:'0 0', scale:(window.innerWidth*ratio)/img.height});
  else TweenMax.set(c, {transformOrigin:'0 0', scale:(window.innerHeight/ratio)/img.width});

  //center positioning
  var data = c.getBoundingClientRect();
  TweenMax.set(c, { x:window.innerWidth/2-data.width/2,  y:window.innerHeight/2-data.height/2 });
}

window.addEventListener('resize', doResize);
doResize(); //also called when #container fades in...


function rand(min, max) {
  (min) ? min=min : min=0;
  (max) ? max=max : max=1;
  return min + (max-min)*Math.random();
}

img.src = "img/bridge.jpg";
orb.src = "img/orb.png";