"use strict";!function(){if("false"!=document.getElementById("canvas_nest").getAttribute("mobile")||!/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){var u,l,e,n,t,i=document.createElement("canvas"),m={l:n=(e=b("script")).length,z:g(t=e[n-1],"zIndex",-1),o:g(t,"opacity",.5),c:g(t,"color","0,0,0"),n:g(t,"count",99)},o="c_n"+m.l,r=i.getContext("2d"),s=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/45)},a=Math.random,x={x:null,y:null,max:2e4};i.id=o,i.style.cssText="position:fixed;top:0;left:0;z-index:"+m.z+";opacity:"+m.o,b("body")[0].appendChild(i),v(),window.onresize=v,window.onmousemove=function(e){e=e||window.event,x.x=e.clientX,x.y=e.clientY},window.onmouseout=function(){x.x=null,x.y=null};for(var w=[],c=0;m.n>c;c++){var d=a()*u,y=a()*l,f=2*a()-1,h=2*a()-1;w.push({x:d,y:y,xa:f,ya:h,max:6e3})}setTimeout(function(){p()},100)}function g(e,n,t){return e.getAttribute(n)||t}function b(e){return document.getElementsByTagName(e)}function v(){u=i.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,l=i.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function p(){r.clearRect(0,0,u,l);var n,t,i,o,a,c,d=[x].concat(w);w.forEach(function(e){for(e.x+=e.xa,e.y+=e.ya,e.xa*=e.x>u||e.x<0?-1:1,e.ya*=e.y>l||e.y<0?-1:1,r.fillRect(e.x-.5,e.y-.5,1,1),t=0;t<d.length;t++)e!==(n=d[t])&&null!==n.x&&null!==n.y&&(o=e.x-n.x,a=e.y-n.y,(c=o*o+a*a)<n.max&&(n===x&&c>=n.max/2&&(e.x-=.03*o,e.y-=.03*a),i=(n.max-c)/n.max,r.beginPath(),r.lineWidth=i/2,r.strokeStyle="rgba("+m.c+","+(.2+i)+")",r.moveTo(e.x,e.y),r.lineTo(n.x,n.y),r.stroke()));d.splice(d.indexOf(e),1)}),s(p)}}();