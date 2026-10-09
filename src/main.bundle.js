var hp=Object.defineProperty;var ut=(e,t)=>()=>(e&&(t=e(e=0)),t);var cp=(e,t)=>{for(var i in t)hp(e,i,{get:t[i],enumerable:!0})};function Wp(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function jp(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function yn(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Xp(){let e=yn("canvas");return e.style.display="block",e}function _n(...e){let t="THREE."+e.shift();xr?xr("log",t,...e):console.log(t,...e)}function Kc(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function We(...e){e=Kc(e);let t="THREE."+e.shift();if(xr)xr("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Ve(...e){e=Kc(e);let t="THREE."+e.shift();if(xr)xr("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function gr(...e){let t=e.join(" ");t in wh||(wh[t]=!0,We(...e))}function qp(e,t,i){return new Promise(function(s,r){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(a,i);break;default:s()}}setTimeout(a,i)})}function Wi(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Jt[e&255]+Jt[e>>8&255]+Jt[e>>16&255]+Jt[e>>24&255]+"-"+Jt[t&255]+Jt[t>>8&255]+"-"+Jt[t>>16&15|64]+Jt[t>>24&255]+"-"+Jt[i&63|128]+Jt[i>>8&255]+"-"+Jt[i>>16&255]+Jt[i>>24&255]+Jt[s&255]+Jt[s>>8&255]+Jt[s>>16&255]+Jt[s>>24&255]).toLowerCase()}function it(e,t,i){return Math.max(t,Math.min(i,e))}function Bl(e,t){return(e%t+t)%t}function Zp(e,t,i,s,r){return s+(e-t)*(r-s)/(i-t)}function Jp(e,t,i){return e!==t?(i-e)/(t-e):0}function ta(e,t,i){return(1-i)*e+i*t}function $p(e,t,i,s){return ta(e,t,1-Math.exp(-i*s))}function Kp(e,t=1){return t-Math.abs(Bl(e,t*2)-t)}function Qp(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function ef(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function tf(e,t){return e+Math.floor(Math.random()*(t-e+1))}function sf(e,t){return e+Math.random()*(t-e)}function rf(e){return e*(.5-Math.random())}function af(e){e!==void 0&&(Ah=e);let t=Ah+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nf(e){return e*vr}function of(e){return e*la}function lf(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function hf(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function cf(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function uf(e,t,i,s,r){let a=Math.cos,n=Math.sin,o=a(i/2),l=n(i/2),h=a((t+s)/2),c=n((t+s)/2),d=a((t-s)/2),u=n((t-s)/2),p=a((s-t)/2),_=n((s-t)/2);switch(r){case"XYX":e.set(o*c,l*d,l*u,o*h);break;case"YZY":e.set(l*u,o*c,l*d,o*h);break;case"ZXZ":e.set(l*d,l*u,o*c,o*h);break;case"XZX":e.set(o*c,l*_,l*p,o*h);break;case"YXY":e.set(l*p,o*c,l*_,o*h);break;case"ZYZ":e.set(l*_,l*p,o*c,o*h);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ti(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function df(){let e={enabled:!0,workingColorSpace:gn,spaces:{},convert:function(r,a,n){return this.enabled===!1||a===n||!a||!n||(this.spaces[a].transfer===gt&&(r.r=ss(r.r),r.g=ss(r.g),r.b=ss(r.b)),this.spaces[a].primaries!==this.spaces[n].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===gt&&(r.r=yr(r.r),r.g=yr(r.g),r.b=yr(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ys?vn:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,n){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return gr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return gr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(r,a)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return e.define({[gn]:{primaries:t,whitePoint:s,transfer:vn,toXYZ:Ch,fromXYZ:Ph,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:t,whitePoint:s,transfer:gt,toXYZ:Ch,fromXYZ:Ph,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),e}function ss(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function yr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}function ao(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?pf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}function ho(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}function yo(e,t,i,s,r){for(let a=0,n=e.length-3;a<=n;a+=3){As.fromArray(e,a);let o=r.x*Math.abs(As.x)+r.y*Math.abs(As.y)+r.z*Math.abs(As.z),l=t.dot(As),h=i.dot(As),c=s.dot(As);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}function Ef(){let e=new ArrayBuffer(4),t=new Float32Array(e),i=new Uint32Array(e),s=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(s[l]=0,s[l|256]=32768,r[l]=24,r[l|256]=24):h<-14?(s[l]=1024>>-h-14,s[l|256]=1024>>-h-14|32768,r[l]=-h-1,r[l|256]=-h-1):h<=15?(s[l]=h+15<<10,s[l|256]=h+15<<10|32768,r[l]=13,r[l|256]=13):h<128?(s[l]=31744,s[l|256]=64512,r[l]=24,r[l|256]=24):(s[l]=31744,s[l|256]=64512,r[l]=13,r[l|256]=13)}let a=new Uint32Array(2048),n=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,c=0;for(;!(h&8388608);)h<<=1,c-=8388608;h&=-8388609,c+=947912704,a[l]=h|c}for(let l=1024;l<2048;++l)a[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)n[l]=l<<23;n[31]=1199570944,n[32]=2147483648;for(let l=33;l<63;++l)n[l]=2147483648+(l-32<<23);n[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:i,baseTable:s,shiftTable:r,mantissaTable:a,exponentTable:n,offsetTable:o}}function Ba(e,t,i,s,r,a){nr.subVectors(e,i).addScalar(.5).multiply(s),r!==void 0?(jr.x=a*nr.x-r*nr.y,jr.y=r*nr.x+a*nr.y):jr.copy(nr),e.copy(t),e.x+=jr.x,e.y+=jr.y,e.applyMatrix4(lu)}function Nf(e,t,i,s,r,a,n,o){let l;if(t.side===Qt?l=s.intersectTriangle(n,a,r,!0,o):l=s.intersectTriangle(r,a,n,t.side===rs,o),l===null)return null;ja.copy(o),ja.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(ja);return h<i.near||h>i.far?null:{distance:h,point:ja.clone(),object:e}}function Xa(e,t,i,s,r,a,n,o,l,h){e.getVertexPosition(o,Ha),e.getVertexPosition(l,Ga),e.getVertexPosition(h,Va);let c=Nf(e,t,i,s,Ha,Ga,Va,Wh);if(c){let d=new I;Is.getBarycoord(Wh,Ha,Ga,Va,d),r&&(c.uv=Is.getInterpolatedAttribute(r,o,l,h,d,new pe)),a&&(c.uv1=Is.getInterpolatedAttribute(a,o,l,h,d,new pe)),n&&(c.normal=Is.getInterpolatedAttribute(n,o,l,h,d,new I),c.normal.dot(s.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new I,materialIndex:0};Is.getNormal(Ha,Ga,Va,u.normal),c.face=u,c.barycoord=d}return c}function qh(e,t,i,s,r,a,n){let o=bl.distanceSqToPoint(e);if(o<i){let l=new I;bl.closestPointToPoint(e,l),l.applyMatrix4(s);let h=r.ray.origin.distanceTo(l);if(h<r.near||h>r.far)return;a.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:n})}}function Gl(){let e=0,t=0,i=0,s=0;function r(a,n,o,l){e=a,t=o,i=-3*a+3*n-2*o-l,s=2*a-2*n+o+l}return{initCatmullRom:function(a,n,o,l,h){r(n,o,h*(o-a),h*(l-n))},initNonuniformCatmullRom:function(a,n,o,l,h,c,d){let u=(n-a)/h-(o-a)/(h+c)+(o-n)/c,p=(o-n)/c-(l-n)/(c+d)+(l-o)/d;u*=c,p*=c,r(n,o,u,p)},calc:function(a){let n=a*a,o=n*a;return e+t*a+i*n+s*o}}}function Jh(e,t,i,s,r){let a=(s-t)*.5,n=(r-i)*.5,o=e*e,l=e*o;return(2*i-2*s+a+n)*l+(-3*i+3*s-2*a-n)*o+a*e+i}function Wf(e,t){let i=1-e;return i*i*t}function jf(e,t){return 2*(1-e)*e*t}function Xf(e,t){return e*e*t}function ia(e,t,i,s){return Wf(e,t)+jf(e,i)+Xf(e,s)}function qf(e,t){let i=1-e;return i*i*i*t}function Yf(e,t){let i=1-e;return 3*i*i*e*t}function Zf(e,t){return 3*(1-e)*e*e*t}function Jf(e,t){return e*e*e*t}function sa(e,t,i,s,r){return qf(e,t)+Yf(e,i)+Zf(e,s)+Jf(e,r)}function em(e,t,i=2){let s=t&&t.length,r=s?t[0]*i:e.length,a=Tu(e,0,r,i,!0),n=[];if(!a||a.next===a.prev)return n;let o,l,h;if(s&&(a=am(e,t,a,i)),e.length>80*i){o=e[0],l=e[1];let c=o,d=l;for(let u=i;u<r;u+=i){let p=e[u],_=e[u+1];p<o&&(o=p),_<l&&(l=_),p>c&&(c=p),_>d&&(d=_)}h=Math.max(c-o,d-l),h=h!==0?32767/h:0}return ca(a,n,i,o,l,h,0),n}function Tu(e,t,i,s,r){let a;if(r===gm(e,t,i,s)>0)for(let n=t;n<i;n+=s)a=Kh(n/s|0,e[n],e[n+1],a);else for(let n=i-s;n>=t;n-=s)a=Kh(n/s|0,e[n],e[n+1],a);return a&&br(a,a.next)&&(da(a),a=a.next),a}function Bs(e,t){if(!e)return e;t||(t=e);let i=e,s;do if(s=!1,!i.steiner&&(br(i,i.next)||wt(i.prev,i,i.next)===0)){if(da(i),i=t=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==t);return t}function ca(e,t,i,s,r,a,n){if(!e)return;!n&&a&&cm(e,s,r,a);let o=e;for(;e.prev!==e.next;){let l=e.prev,h=e.next;if(a?im(e,s,r,a):tm(e)){t.push(l.i,e.i,h.i),da(e),e=h.next,o=h.next;continue}if(e=h,e===o){n?n===1?(e=sm(Bs(e),t),ca(e,t,i,s,r,a,2)):n===2&&rm(e,t,i,s,r,a):ca(Bs(e),t,i,s,r,a,1);break}}}function tm(e){let t=e.prev,i=e,s=e.next;if(wt(t,i,s)>=0)return!1;let r=t.x,a=i.x,n=s.x,o=t.y,l=i.y,h=s.y,c=Math.min(r,a,n),d=Math.min(o,l,h),u=Math.max(r,a,n),p=Math.max(o,l,h),_=s.next;for(;_!==t;){if(_.x>=c&&_.x<=u&&_.y>=d&&_.y<=p&&Kr(r,o,a,l,n,h,_.x,_.y)&&wt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function im(e,t,i,s){let r=e.prev,a=e,n=e.next;if(wt(r,a,n)>=0)return!1;let o=r.x,l=a.x,h=n.x,c=r.y,d=a.y,u=n.y,p=Math.min(o,l,h),_=Math.min(c,d,u),x=Math.max(o,l,h),m=Math.max(c,d,u),f=Tl(p,_,t,i,s),y=Tl(x,m,t,i,s),b=e.prevZ,g=e.nextZ;for(;b&&b.z>=f&&g&&g.z<=y;){if(b.x>=p&&b.x<=x&&b.y>=_&&b.y<=m&&b!==r&&b!==n&&Kr(o,c,l,d,h,u,b.x,b.y)&&wt(b.prev,b,b.next)>=0||(b=b.prevZ,g.x>=p&&g.x<=x&&g.y>=_&&g.y<=m&&g!==r&&g!==n&&Kr(o,c,l,d,h,u,g.x,g.y)&&wt(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;b&&b.z>=f;){if(b.x>=p&&b.x<=x&&b.y>=_&&b.y<=m&&b!==r&&b!==n&&Kr(o,c,l,d,h,u,b.x,b.y)&&wt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;g&&g.z<=y;){if(g.x>=p&&g.x<=x&&g.y>=_&&g.y<=m&&g!==r&&g!==n&&Kr(o,c,l,d,h,u,g.x,g.y)&&wt(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function sm(e,t){let i=e;do{let s=i.prev,r=i.next.next;!br(s,r)&&wu(s,i,i.next,r)&&ua(s,r)&&ua(r,s)&&(t.push(s.i,i.i,r.i),da(i),da(i.next),i=e=r),i=i.next}while(i!==e);return Bs(i)}function rm(e,t,i,s,r,a){let n=e;do{let o=n.next.next;for(;o!==n.prev;){if(n.i!==o.i&&pm(n,o)){let l=Au(n,o);n=Bs(n,n.next),l=Bs(l,l.next),ca(n,t,i,s,r,a,0),ca(l,t,i,s,r,a,0);return}o=o.next}n=n.next}while(n!==e)}function am(e,t,i,s){let r=[];for(let a=0,n=t.length;a<n;a++){let o=t[a]*s,l=a<n-1?t[a+1]*s:e.length,h=Tu(e,o,l,s,!1);h===h.next&&(h.steiner=!0),r.push(dm(h))}r.sort(nm);for(let a=0;a<r.length;a++)i=om(r[a],i);return i}function nm(e,t){let i=e.x-t.x;if(i===0&&(i=e.y-t.y,i===0)){let s=(e.next.y-e.y)/(e.next.x-e.x),r=(t.next.y-t.y)/(t.next.x-t.x);i=s-r}return i}function om(e,t){let i=lm(e,t);if(!i)return t;let s=Au(i,e);return Bs(s,s.next),Bs(i,i.next)}function lm(e,t){let i=t,s=e.x,r=e.y,a=-1/0,n;if(br(e,i))return i;do{if(br(e,i.next))return i.next;if(r<=i.y&&r>=i.next.y&&i.next.y!==i.y){let d=i.x+(r-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=s&&d>a&&(a=d,n=i.x<i.next.x?i:i.next,d===s))return n}i=i.next}while(i!==t);if(!n)return null;let o=n,l=n.x,h=n.y,c=1/0;i=n;do{if(s>=i.x&&i.x>=l&&s!==i.x&&Eu(r<h?s:a,r,l,h,r<h?a:s,r,i.x,i.y)){let d=Math.abs(r-i.y)/(s-i.x);ua(i,e)&&(d<c||d===c&&(i.x>n.x||i.x===n.x&&hm(n,i)))&&(n=i,c=d)}i=i.next}while(i!==o);return n}function hm(e,t){return wt(e.prev,e,t.prev)<0&&wt(t.next,e,e.next)<0}function cm(e,t,i,s){let r=e;do r.z===0&&(r.z=Tl(r.x,r.y,t,i,s)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,um(r)}function um(e){let t,i=1;do{let s=e,r;e=null;let a=null;for(t=0;s;){t++;let n=s,o=0;for(let h=0;h<i&&(o++,n=n.nextZ,!!n);h++);let l=i;for(;o>0||l>0&&n;)o!==0&&(l===0||!n||s.z<=n.z)?(r=s,s=s.nextZ,o--):(r=n,n=n.nextZ,l--),a?a.nextZ=r:e=r,r.prevZ=a,a=r;s=n}a.nextZ=null,i*=2}while(t>1);return e}function Tl(e,t,i,s,r){return e=(e-i)*r|0,t=(t-s)*r|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function dm(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function Eu(e,t,i,s,r,a,n,o){return(r-n)*(t-o)>=(e-n)*(a-o)&&(e-n)*(s-o)>=(i-n)*(t-o)&&(i-n)*(a-o)>=(r-n)*(s-o)}function Kr(e,t,i,s,r,a,n,o){return!(e===n&&t===o)&&Eu(e,t,i,s,r,a,n,o)}function pm(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!fm(e,t)&&(ua(e,t)&&ua(t,e)&&mm(e,t)&&(wt(e.prev,e,t.prev)||wt(e,t.prev,t))||br(e,t)&&wt(e.prev,e,e.next)>0&&wt(t.prev,t,t.next)>0)}function wt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function br(e,t){return e.x===t.x&&e.y===t.y}function wu(e,t,i,s){let r=en(wt(e,t,i)),a=en(wt(e,t,s)),n=en(wt(i,s,e)),o=en(wt(i,s,t));return!!(r!==a&&n!==o||r===0&&Qa(e,i,t)||a===0&&Qa(e,s,t)||n===0&&Qa(i,e,s)||o===0&&Qa(i,t,s))}function Qa(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function en(e){return e>0?1:e<0?-1:0}function fm(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&wu(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function ua(e,t){return wt(e.prev,e,e.next)<0?wt(e,t,e.next)>=0&&wt(e,e.prev,t)>=0:wt(e,t,e.prev)<0||wt(e,e.next,t)<0}function mm(e,t){let i=e,s=!1,r=(e.x+t.x)/2,a=(e.y+t.y)/2;do i.y>a!=i.next.y>a&&i.next.y!==i.y&&r<(i.next.x-i.x)*(a-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==e);return s}function Au(e,t){let i=El(e.i,e.x,e.y),s=El(t.i,t.x,t.y),r=e.next,a=t.prev;return e.next=t,t.prev=e,i.next=r,r.prev=i,s.next=i,i.prev=s,a.next=s,s.prev=a,s}function Kh(e,t,i,s){let r=El(e,t,i);return s?(r.next=s.next,r.prev=s,s.next.prev=r,s.next=r):(r.prev=r,r.next=r),r}function da(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function El(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function gm(e,t,i,s){let r=0;for(let a=t,n=i-s;a<i;a+=s)r+=(e[n]-e[a])*(e[a+1]+e[n+1]),n=a;return r}function Qh(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function ec(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}function _m(e,t,i){if(i.shapes=[],Array.isArray(e))for(let s=0,r=e.length;s<r;s++){let a=e[s];i.shapes.push(a.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}function Mm(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,s=e.length;i<s;i++){let r=e[i];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}function tc(e,t,i){let s=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return i.has(s)===!0||i.has(r)===!0?!1:(i.add(s),i.add(r),!0)}function Tr(e){let t={};for(let i in e){t[i]={};for(let s in e[i]){let r=e[i][s];if(ic(r))r.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=r.clone();else if(Array.isArray(r))if(ic(r[0])){let a=[];for(let n=0,o=r.length;n<o;n++)a[n]=r[n].clone();t[i][s]=a}else t[i][s]=r.slice();else t[i][s]=r}}return t}function ri(e){let t={};for(let i=0;i<e.length;i++){let s=Tr(e[i]);for(let r in s)t[r]=s[r]}return t}function ic(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Am(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Hu(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ot.workingColorSpace}function or(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Co(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function Gu(e,t,i,s,r){let a=1-e;return a*a*a*t+3*a*a*e*i+3*a*e*e*s+e*e*e*r}function Fm(e,t,i,s,r){let a=1-e;return 3*a*a*(i-t)+6*a*e*(s-i)+3*e*e*(r-s)}function zm(e,t,i,s,r){let a=(e-t)/(r-t);for(let n=0;n<8;n++){let o=Gu(a,t,i,s,r)-e;if(Math.abs(o)<1e-10)break;let l=Fm(a,t,i,s,r);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}function sc(e,t){for(let i=0,s=e.length;i!==s;i+=2)e[i]*=t}function cc(e,t){return e.distance-t.distance}function wl(e,t,i,s){let r=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(r=!1),r===!0&&s===!0){let a=e.children;for(let n=0,o=a.length;n<o;n++)wl(a[n],t,i,!0)}}function uc(e,t,i,s){let r=ng(s);switch(i){case Yc:return e*t;case Jc:return e*t/r.components*r.byteLength;case Ll:return e*t/r.components*r.byteLength;case Os:return e*t*2/r.components*r.byteLength;case Nl:return e*t*2/r.components*r.byteLength;case Zc:return e*t*3/r.components*r.byteLength;case Ei:return e*t*4/r.components*r.byteLength;case Ul:return e*t*4/r.components*r.byteLength;case nn:case on:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ln:case hn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Xo:case Yo:return Math.max(e,16)*Math.max(t,8)/4;case jo:case qo:return Math.max(e,8)*Math.max(t,8)/2;case Zo:case Jo:case Ko:case Qo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case $o:case pn:case el:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case il:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case sl:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case rl:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case al:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case nl:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ol:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ll:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case hl:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case cl:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ul:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case dl:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case pl:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case fl:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ml:case gl:case vl:return Math.ceil(e/4)*Math.ceil(t/4)*16;case yl:case _l:return Math.ceil(e/4)*Math.ceil(t/4)*8;case fn:case xl:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ng(e){switch(e){case pi:case Wc:return{byteLength:1,components:1};case aa:case jc:case Xi:return{byteLength:2,components:1};case Pl:case Il:return{byteLength:2,components:4};case ji:case Cl:case Hi:return{byteLength:4,components:1};case Xc:case qc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}function ju(){let e=null,t=!1,i=null,s=null;function r(a,n){s=e.requestAnimationFrame(r),i(a,n)}return{start:function(){t!==!0&&i!==null&&e!==null&&(s=e.requestAnimationFrame(r),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(a){i=a},setContext:function(a){e=a}}}function og(e){let t=new WeakMap;function i(o,l){let h=o.array,c=o.usage,d=h.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,h,c),o.onUploadCallback();let p;if(h instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=e.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=e.SHORT;else if(h instanceof Uint32Array)p=e.UNSIGNED_INT;else if(h instanceof Int32Array)p=e.INT;else if(h instanceof Int8Array)p=e.BYTE;else if(h instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function s(o,l,h){let c=l.array,d=l.updateRanges;if(e.bindBuffer(h,o),d.length===0)e.bufferSubData(h,0,c);else{d.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<d.length;p++){let _=d[u],x=d[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++u,d[u]=x)}d.length=u+1;for(let p=0,_=d.length;p<_;p++){let x=d[p];e.bufferSubData(h,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function n(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,o,l),h.version=o.version}}return{get:r,remove:a,update:n}}function Vv(e,t,i,s,r,a){let n=new qe(0),o=r===!0?0:1,l,h,c=null,d=0,u=null;function p(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let g=y.backgroundBlurriness>0;b=t.get(b,g)}return b}function _(y){let b=!1,g=p(y);g===null?m(n,o):g&&g.isColor&&(m(g,1),b=!0);let S=e.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(e.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function x(y,b){let g=p(b);g&&(g.isCubeTexture||g.mapping===Sn)?(h===void 0&&(h=new ht(new Ms(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Tr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gv.makeRotationFromEuler(b.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Xu),h.material.toneMapped=ot.getTransfer(g.colorSpace)!==gt,(c!==g||d!==g.version||u!==e.toneMapping)&&(h.material.needsUpdate=!0,c=g,d=g.version,u=e.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new ht(new bs(2,2),new li({name:"BackgroundMaterial",uniforms:Tr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ot.getTransfer(g.colorSpace)!==gt,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(c!==g||d!==g.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,c=g,d=g.version,u=e.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,b){y.getRGB(rn,Hu(e)),i.buffers.color.setClear(rn.r,rn.g,rn.b,b,a)}function f(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return n},setClearColor:function(y,b=1){n.set(y),o=b,m(n,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(n,o)},render:_,addToRenderList:x,dispose:f}}function Wv(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),s={},r=u(null),a=r,n=!1;function o(R,N,j,D,X){let K=!1,Z=d(R,D,j,N);a!==Z&&(a=Z,h(a.object)),K=p(R,D,j,X),K&&_(R,D,j,X),X!==null&&t.update(X,e.ELEMENT_ARRAY_BUFFER),(K||n)&&(n=!1,g(R,N,j,D),X!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return e.createVertexArray()}function h(R){return e.bindVertexArray(R)}function c(R){return e.deleteVertexArray(R)}function d(R,N,j,D){let X=D.wireframe===!0,K=s[N.id];K===void 0&&(K={},s[N.id]=K);let Z=R.isInstancedMesh===!0?R.id:0,ye=K[Z];ye===void 0&&(ye={},K[Z]=ye);let Q=ye[j.id];Q===void 0&&(Q={},ye[j.id]=Q);let ie=Q[X];return ie===void 0&&(ie=u(l()),Q[X]=ie),ie}function u(R){let N=[],j=[],D=[];for(let X=0;X<i;X++)N[X]=0,j[X]=0,D[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:j,attributeDivisors:D,object:R,attributes:{},index:null}}function p(R,N,j,D){let X=a.attributes,K=N.attributes,Z=0,ye=j.getAttributes();for(let Q in ye)if(ye[Q].location>=0){let ie=X[Q],ue=K[Q];if(ue===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),ie===void 0||ie.attribute!==ue||ue&&ie.data!==ue.data)return!0;Z++}return a.attributesNum!==Z||a.index!==D}function _(R,N,j,D){let X={},K=N.attributes,Z=0,ye=j.getAttributes();for(let Q in ye)if(ye[Q].location>=0){let ie=K[Q];ie===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor));let ue={};ue.attribute=ie,ie&&ie.data&&(ue.data=ie.data),X[Q]=ue,Z++}a.attributes=X,a.attributesNum=Z,a.index=D}function x(){let R=a.newAttributes;for(let N=0,j=R.length;N<j;N++)R[N]=0}function m(R){f(R,0)}function f(R,N){let j=a.newAttributes,D=a.enabledAttributes,X=a.attributeDivisors;j[R]=1,D[R]===0&&(e.enableVertexAttribArray(R),D[R]=1),X[R]!==N&&(e.vertexAttribDivisor(R,N),X[R]=N)}function y(){let R=a.newAttributes,N=a.enabledAttributes;for(let j=0,D=N.length;j<D;j++)N[j]!==R[j]&&(e.disableVertexAttribArray(j),N[j]=0)}function b(R,N,j,D,X,K,Z){Z===!0?e.vertexAttribIPointer(R,N,j,X,K):e.vertexAttribPointer(R,N,j,D,X,K)}function g(R,N,j,D){x();let X=D.attributes,K=j.getAttributes(),Z=N.defaultAttributeValues;for(let ye in K){let Q=K[ye];if(Q.location>=0){let ie=X[ye];if(ie===void 0&&(ye==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),ye==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor)),ie!==void 0){let ue=ie.normalized,He=ie.itemSize,Ne=t.get(ie);if(Ne===void 0)continue;let pt=Ne.buffer,Ze=Ne.type,ee=Ne.bytesPerElement,he=Ze===e.INT||Ze===e.UNSIGNED_INT||ie.gpuType===Cl;if(ie.isInterleavedBufferAttribute){let me=ie.data,Be=me.stride,Ce=ie.offset;if(me.isInstancedInterleavedBuffer){for(let Se=0;Se<Q.locationSize;Se++)f(Q.location+Se,me.meshPerAttribute);R.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Se=0;Se<Q.locationSize;Se++)m(Q.location+Se);e.bindBuffer(e.ARRAY_BUFFER,pt);for(let Se=0;Se<Q.locationSize;Se++)b(Q.location+Se,He/Q.locationSize,Ze,ue,Be*ee,(Ce+He/Q.locationSize*Se)*ee,he)}else{if(ie.isInstancedBufferAttribute){for(let me=0;me<Q.locationSize;me++)f(Q.location+me,ie.meshPerAttribute);R.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let me=0;me<Q.locationSize;me++)m(Q.location+me);e.bindBuffer(e.ARRAY_BUFFER,pt);for(let me=0;me<Q.locationSize;me++)b(Q.location+me,He/Q.locationSize,Ze,ue,He*ee,He/Q.locationSize*me*ee,he)}}else if(Z!==void 0){let ue=Z[ye];if(ue!==void 0)switch(ue.length){case 2:e.vertexAttrib2fv(Q.location,ue);break;case 3:e.vertexAttrib3fv(Q.location,ue);break;case 4:e.vertexAttrib4fv(Q.location,ue);break;default:e.vertexAttrib1fv(Q.location,ue)}}}}y()}function S(){M();for(let R in s){let N=s[R];for(let j in N){let D=N[j];for(let X in D){let K=D[X];for(let Z in K)c(K[Z].object),delete K[Z];delete D[X]}}delete s[R]}}function E(R){if(s[R.id]===void 0)return;let N=s[R.id];for(let j in N){let D=N[j];for(let X in D){let K=D[X];for(let Z in K)c(K[Z].object),delete K[Z];delete D[X]}}delete s[R.id]}function A(R){for(let N in s){let j=s[N];for(let D in j){let X=j[D];if(X[R.id]===void 0)continue;let K=X[R.id];for(let Z in K)c(K[Z].object),delete K[Z];delete X[R.id]}}}function v(R){for(let N in s){let j=s[N],D=R.isInstancedMesh===!0?R.id:0,X=j[D];if(X!==void 0){for(let K in X){let Z=X[K];for(let ye in Z)c(Z[ye].object),delete Z[ye];delete X[K]}delete j[D],Object.keys(j).length===0&&delete s[N]}}}function M(){U(),n=!0,a!==r&&(a=r,h(a.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:M,resetDefaultState:U,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function jv(e,t,i){let s;function r(l){s=l}function a(l,h){e.drawArrays(s,l,h),i.update(h,s,1)}function n(l,h,c){c!==0&&(e.drawArraysInstanced(s,l,h,c),i.update(h,s,c))}function o(l,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,l,0,h,0,c);let d=0;for(let u=0;u<c;u++)d+=h[u];i.update(d,s,1)}this.setMode=r,this.render=a,this.renderInstances=n,this.renderMultiDraw=o}function Xv(e,t,i,s){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function n(A){return!(A!==Ei&&s.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let v=A===Xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==pi&&A!==Hi&&!v&&s.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",c=l(h);c!==h&&(We("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let d=i.logarithmicDepthBuffer===!0,u=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&u===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),g=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),S=e.getParameter(e.MAX_SAMPLES),E=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:n,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:g,maxSamples:S,samples:E}}function qv(e){let t=this,i=null,s=0,r=!1,a=!1,n=new vs,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||s!==0||r;return r=u,s=d.length,p},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){i=c(d,u,0)},this.setState=function(d,u,p){let _=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=e.get(d);if(!r||_===null||_.length===0||a&&!m)a?c(null):h();else{let y=a?0:s,b=y*4,g=f.clippingState||null;l.value=g,g=c(_,u,b,p);for(let S=0;S!==b;++S)g[S]=i[S];f.clippingState=g,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function c(d,u,p,_){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,_!==!0||m===null){let f=p+x*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,g=p;b!==x;++b,g+=4)n.copy(d[b]).applyMatrix4(y,o),n.normal.toArray(m,g),m[g+3]=n.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Kv(e){let t=[],i=[],s=e,r=e-fr+1+Yv;for(let a=0;a<r;a++){let n=Math.pow(2,s);t.push(n);let o=1/(n-2),l=-o,h=1+o,c=[l,l,h,l,h,h,l,l,h,h,l,h],d=6,u=6,p=3,_=new Float32Array(p*u*d),x=new Float32Array(p*u*d);for(let f=0;f<d;f++){let y=f%3*2/3-1,b=f>2?0:-1,g=[y,b,0,y+2/3,b,0,y+2/3,b+1,0,y,b,0,y+2/3,b+1,0,y,b+1,0];_.set(g,p*u*f);for(let S=0;S<u;S++){let E=c[S*2]*2-1,A=c[S*2+1]*2-1;f===0?Ps.set(1,A,E):f===1?Ps.set(-E,1,-A):f===2?Ps.set(-E,A,1):f===3?Ps.set(-1,A,-E):f===4?Ps.set(-E,-1,A):Ps.set(E,A,-1),Ps.toArray(x,(f*u+S)*p)}}let m=new dt;m.setAttribute("position",new Xt(_,p)),m.setAttribute("outputDirection",new Xt(x,p)),i.push(new ht(m,null)),s>fr&&s--}return{lodMeshes:i,sizeLods:t}}function fc(e,t,i){let s=new Ai(e,t,i);return s.texture.mapping=Sn,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function cr(e,t,i,s,r){e.viewport.set(t,i,s,r),e.scissor.set(t,i,s,r)}function Qv(e,t,i){return new li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wn(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function ey(e,t,i){return new li({name:"SphericalGaussianBlur",defines:{SAMPLES:Zv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wn(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function mc(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function gc(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function wn(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function ty(e){let t=new WeakMap,i=new WeakMap,s=null;function r(u,p=!1){return u==null?null:p?n(u):a(u)}function a(u){if(u&&u.isTexture){let p=u.mapping;if(p===Kn||p===Qn)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let x=new qu(_.height);return x.fromEquirectangularTexture(e,u),t.set(u,x),u.addEventListener("dispose",h),o(x.texture,u.mapping)}else return null}}return u}function n(u){if(u&&u.isTexture){let p=u.mapping,_=p===Kn||p===Qn,x=p===Ds||p===_r;if(_||x){let m=i.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return s===null&&(s=new pc(e)),m=_?s.fromEquirectangular(u,m):s.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return _&&y&&y.height>0||x&&y&&l(y)?(s===null&&(s=new pc(e)),m=_?s.fromEquirectangular(u):s.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),u.addEventListener("dispose",c),m.texture):null}}}return u}function o(u,p){return p===Kn?u.mapping=Ds:p===Qn&&(u.mapping=_r),u}function l(u){let p=0,_=6;for(let x=0;x<_;x++)u[x]!==void 0&&p++;return p===_}function h(u){let p=u.target;p.removeEventListener("dispose",h);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function c(u){let p=u.target;p.removeEventListener("dispose",c);let _=i.get(p);_!==void 0&&(i.delete(p),_.dispose())}function d(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:r,dispose:d}}function iy(e){let t={};function i(s){if(t[s]!==void 0)return t[s];let r=e.getExtension(s);return t[s]=r,r}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){let r=i(s);return r===null&&gr("WebGLRenderer: "+s+" extension not supported."),r}}}function sy(e,t,i,s){let r={},a=new WeakMap;function n(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",n),delete r[u.id];let p=a.get(u);p&&(t.remove(p),a.delete(u)),s.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,i.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",n),r[u.id]=!0,i.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)t.update(u[p],e.ARRAY_BUFFER)}function h(d){let u=[],p=d.index,_=d.attributes.position,x=0;if(_===void 0)return;if(p!==null){let y=p.array;x=p.version;for(let b=0,g=y.length;b<g;b+=3){let S=y[b+0],E=y[b+1],A=y[b+2];u.push(S,E,E,A,A,S)}}else{let y=_.array;x=_.version;for(let b=0,g=y.length/3-1;b<g;b+=3){let S=b+0,E=b+1,A=b+2;u.push(S,E,E,A,A,S)}}let m=new(_.count>=65535?au:ru)(u,1);m.version=x;let f=a.get(d);f&&t.remove(f),a.set(d,m)}function c(d){let u=a.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&h(d)}else h(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function ry(e,t,i){let s;function r(d){s=d}let a,n;function o(d){a=d.type,n=d.bytesPerElement}function l(d,u){e.drawElements(s,u,a,d*n),i.update(u,s,1)}function h(d,u,p){p!==0&&(e.drawElementsInstanced(s,u,a,d*n,p),i.update(u,s,p))}function c(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,u,0,a,d,0,p);let _=0;for(let x=0;x<p;x++)_+=u[x];i.update(_,s,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function ay(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(a,n,o){switch(i.calls++,n){case e.TRIANGLES:i.triangles+=o*(a/3);break;case e.LINES:i.lines+=o*(a/2);break;case e.LINE_STRIP:i.lines+=o*(a-1);break;case e.LINE_LOOP:i.lines+=o*a;break;case e.POINTS:i.points+=o*a;break;default:Ve("WebGLInfo: Unknown draw mode:",n);break}}function r(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:r,update:s}}function ny(e,t,i){let s=new WeakMap,r=new Et;function a(n,o,l){let h=n.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0,u=s.get(o);if(u===void 0||u.count!==d){let p=function(){v.dispose(),s.delete(o),o.removeEventListener("dispose",p)};u!==void 0&&u.texture.dispose();let _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],g=0;_===!0&&(g=1),x===!0&&(g=2),m===!0&&(g=3);let S=o.attributes.position.count*g,E=1;S>t.maxTextureSize&&(E=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let A=new Float32Array(S*E*4*d),v=new Qc(A,S,E,d);v.type=Hi,v.needsUpdate=!0;let M=g*4;for(let U=0;U<d;U++){let R=f[U],N=y[U],j=b[U],D=S*E*4*U;for(let X=0;X<R.count;X++){let K=X*M;_===!0&&(r.fromBufferAttribute(R,X),A[D+K+0]=r.x,A[D+K+1]=r.y,A[D+K+2]=r.z,A[D+K+3]=0),x===!0&&(r.fromBufferAttribute(N,X),A[D+K+4]=r.x,A[D+K+5]=r.y,A[D+K+6]=r.z,A[D+K+7]=0),m===!0&&(r.fromBufferAttribute(j,X),A[D+K+8]=r.x,A[D+K+9]=r.y,A[D+K+10]=r.z,A[D+K+11]=j.itemSize===4?r.w:1)}}u={count:d,texture:v,size:new pe(S,E)},s.set(o,u),o.addEventListener("dispose",p)}if(n.isInstancedMesh===!0&&n.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",n.morphTexture,i);else{let p=0;for(let x=0;x<h.length;x++)p+=h[x];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function oy(e,t,i,s,r){let a=new WeakMap;function n(h){let c=r.render.frame,d=h.geometry,u=t.get(h,d);if(a.get(u)!==c&&(t.update(u),a.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),a.get(h)!==c&&(i.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,e.ARRAY_BUFFER),a.set(h,c))),h.isSkinnedMesh){let p=h.skeleton;a.get(p)!==c&&(p.update(),a.set(p,c))}return u}function o(){a=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),s.releaseStatesOfObject(c),i.remove(c.instanceMatrix),c.instanceColor!==null&&i.remove(c.instanceColor)}return{update:n,dispose:o}}function hy(e,t,i,s,r,a){let n=new Ai(t,i,{type:e,depthBuffer:r,stencilBuffer:a,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=new dt;h.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new je([0,2,0,0,2,0],2));let c=new Im({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ht(h,c),u=new Yl(-1,1,1,-1,0,1),p=null,_=null,x=!1,m,f=null,y=[],b=!1;this.setSize=function(g,S){n.setSize(g,S),o!==null&&o.setSize(g,S),l!==null&&l.setSize(g,S);for(let E=0;E<y.length;E++){let A=y[E];A.setSize&&A.setSize(g,S)}},this.setEffects=function(g){y=g,b=y.length>0&&y[0].isRenderPass===!0;let S=n.width,E=n.height;y.length>0&&o===null&&(o=new Ai(S,E,{type:Xi,depthBuffer:!1,stencilBuffer:!1}),l=new Ai(S,E,{type:Xi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let v=y[A];v.setSize&&v.setSize(S,E)}},this.begin=function(g,S){if(x||g.toneMapping===Vi&&y.length===0)return!1;if(f=S,S!==null){let E=S.width,A=S.height;(n.width!==E||n.height!==A)&&this.setSize(E,A)}return b===!1&&g.setRenderTarget(n),m=g.toneMapping,g.toneMapping=Vi,!0},this.hasRenderPass=function(){return b},this.end=function(g,S){g.toneMapping=m,x=!0;let E=n,A=o;for(let v=0;v<y.length;v++){let M=y[v];M.enabled!==!1&&(M.render(g,A,E,S),M.needsSwap!==!1&&(E=A,A=A===o?l:o))}if(p!==g.outputColorSpace||_!==g.toneMapping){p=g.outputColorSpace,_=g.toneMapping,c.defines={},ot.getTransfer(p)===gt&&(c.defines.SRGB_TRANSFER="");let v=ly[_];v&&(c.defines[v]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,g.setRenderTarget(f),g.render(d,u),f=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){n.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),c.dispose()}}function Pr(e,t,i){let s=e[0];if(s<=0||s>0)return e;let r=t*i,a=vc[r];if(a===void 0&&(a=new Float32Array(r),vc[r]=a),t!==0){s.toArray(a,0);for(let n=1,o=0;n!==t;++n)o+=i,e[n].toArray(a,o)}return a}function Bt(e,t){if(e.length!==t.length)return!1;for(let i=0,s=e.length;i<s;i++)if(e[i]!==t[i])return!1;return!0}function Ft(e,t){for(let i=0,s=t.length;i<s;i++)e[i]=t[i]}function An(e,t){let i=yc[t];i===void 0&&(i=new Int32Array(t),yc[t]=i);for(let s=0;s!==t;++s)i[s]=e.allocateTextureUnit();return i}function cy(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function uy(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Bt(i,t))return;e.uniform2fv(this.addr,t),Ft(i,t)}}function dy(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Bt(i,t))return;e.uniform3fv(this.addr,t),Ft(i,t)}}function py(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Bt(i,t))return;e.uniform4fv(this.addr,t),Ft(i,t)}}function fy(e,t){let i=this.cache,s=t.elements;if(s===void 0){if(Bt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ft(i,t)}else{if(Bt(i,s))return;Sc.set(s),e.uniformMatrix2fv(this.addr,!1,Sc),Ft(i,s)}}function my(e,t){let i=this.cache,s=t.elements;if(s===void 0){if(Bt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ft(i,t)}else{if(Bt(i,s))return;xc.set(s),e.uniformMatrix3fv(this.addr,!1,xc),Ft(i,s)}}function gy(e,t){let i=this.cache,s=t.elements;if(s===void 0){if(Bt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ft(i,t)}else{if(Bt(i,s))return;_c.set(s),e.uniformMatrix4fv(this.addr,!1,_c),Ft(i,s)}}function vy(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function yy(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Bt(i,t))return;e.uniform2iv(this.addr,t),Ft(i,t)}}function _y(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Bt(i,t))return;e.uniform3iv(this.addr,t),Ft(i,t)}}function xy(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Bt(i,t))return;e.uniform4iv(this.addr,t),Ft(i,t)}}function Sy(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function My(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Bt(i,t))return;e.uniform2uiv(this.addr,t),Ft(i,t)}}function by(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Bt(i,t))return;e.uniform3uiv(this.addr,t),Ft(i,t)}}function Ty(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Bt(i,t))return;e.uniform4uiv(this.addr,t),Ft(i,t)}}function Ey(e,t,i){let s=this.cache,r=i.allocateTextureUnit();s[0]!==r&&(e.uniform1i(this.addr,r),s[0]=r);let a;this.type===e.SAMPLER_2D_SHADOW?(Al.compareFunction=i.isReversedDepthBuffer()?Ol:Dl,a=Al):a=Yu,i.setTexture2D(t||a,r)}function wy(e,t,i){let s=this.cache,r=i.allocateTextureUnit();s[0]!==r&&(e.uniform1i(this.addr,r),s[0]=r),i.setTexture3D(t||Ju,r)}function Ay(e,t,i){let s=this.cache,r=i.allocateTextureUnit();s[0]!==r&&(e.uniform1i(this.addr,r),s[0]=r),i.setTextureCube(t||$u,r)}function Ry(e,t,i){let s=this.cache,r=i.allocateTextureUnit();s[0]!==r&&(e.uniform1i(this.addr,r),s[0]=r),i.setTexture2DArray(t||Zu,r)}function Cy(e){switch(e){case 5126:return cy;case 35664:return uy;case 35665:return dy;case 35666:return py;case 35674:return fy;case 35675:return my;case 35676:return gy;case 5124:case 35670:return vy;case 35667:case 35671:return yy;case 35668:case 35672:return _y;case 35669:case 35673:return xy;case 5125:return Sy;case 36294:return My;case 36295:return by;case 36296:return Ty;case 35678:case 36198:case 36298:case 36306:case 35682:return Ey;case 35679:case 36299:case 36307:return wy;case 35680:case 36300:case 36308:case 36293:return Ay;case 36289:case 36303:case 36311:case 36292:return Ry}}function Py(e,t){e.uniform1fv(this.addr,t)}function Iy(e,t){let i=Pr(t,this.size,2);e.uniform2fv(this.addr,i)}function Ly(e,t){let i=Pr(t,this.size,3);e.uniform3fv(this.addr,i)}function Ny(e,t){let i=Pr(t,this.size,4);e.uniform4fv(this.addr,i)}function Uy(e,t){let i=Pr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Dy(e,t){let i=Pr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Oy(e,t){let i=Pr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function By(e,t){e.uniform1iv(this.addr,t)}function Fy(e,t){e.uniform2iv(this.addr,t)}function zy(e,t){e.uniform3iv(this.addr,t)}function ky(e,t){e.uniform4iv(this.addr,t)}function Hy(e,t){e.uniform1uiv(this.addr,t)}function Gy(e,t){e.uniform2uiv(this.addr,t)}function Vy(e,t){e.uniform3uiv(this.addr,t)}function Wy(e,t){e.uniform4uiv(this.addr,t)}function jy(e,t,i){let s=this.cache,r=t.length,a=An(i,r);Bt(s,a)||(e.uniform1iv(this.addr,a),Ft(s,a));let n;this.type===e.SAMPLER_2D_SHADOW?n=Al:n=Yu;for(let o=0;o!==r;++o)i.setTexture2D(t[o]||n,a[o])}function Xy(e,t,i){let s=this.cache,r=t.length,a=An(i,r);Bt(s,a)||(e.uniform1iv(this.addr,a),Ft(s,a));for(let n=0;n!==r;++n)i.setTexture3D(t[n]||Ju,a[n])}function qy(e,t,i){let s=this.cache,r=t.length,a=An(i,r);Bt(s,a)||(e.uniform1iv(this.addr,a),Ft(s,a));for(let n=0;n!==r;++n)i.setTextureCube(t[n]||$u,a[n])}function Yy(e,t,i){let s=this.cache,r=t.length,a=An(i,r);Bt(s,a)||(e.uniform1iv(this.addr,a),Ft(s,a));for(let n=0;n!==r;++n)i.setTexture2DArray(t[n]||Zu,a[n])}function Zy(e){switch(e){case 5126:return Py;case 35664:return Iy;case 35665:return Ly;case 35666:return Ny;case 35674:return Uy;case 35675:return Dy;case 35676:return Oy;case 5124:case 35670:return By;case 35667:case 35671:return Fy;case 35668:case 35672:return zy;case 35669:case 35673:return ky;case 5125:return Hy;case 36294:return Gy;case 36295:return Vy;case 36296:return Wy;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return Xy;case 35680:case 36300:case 36308:case 36293:return qy;case 36289:case 36303:case 36311:case 36292:return Yy}}function Mc(e,t){e.seq.push(t),e.map[t.id]=t}function Qy(e,t,i){let s=e.name,r=s.length;for(Do.lastIndex=0;;){let a=Do.exec(s),n=Do.lastIndex,o=a[1],l=a[2]==="]",h=a[3];if(l&&(o=o|0),h===void 0||h==="["&&n+2===r){Mc(i,h===void 0?new Jy(o,e,t):new $y(o,e,t));break}else{let c=i.map[o];c===void 0&&(c=new Ky(o),Mc(i,c)),i=c}}}function bc(e,t,i){let s=e.createShader(t);return e.shaderSource(s,i),e.compileShader(s),s}function i_(e,t){let i=e.split(`
`),s=[],r=Math.max(t-6,0),a=Math.min(t+6,i.length);for(let n=r;n<a;n++){let o=n+1;s.push(`${o===t?">":" "} ${o}: ${i[n]}`)}return s.join(`
`)}function s_(e){ot._getMatrix(Tc,ot.workingColorSpace,e);let t=`mat3( ${Tc.elements.map(i=>i.toFixed(4))} )`;switch(ot.getTransfer(e)){case vn:return[t,"LinearTransferOETF"];case gt:return[t,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Ec(e,t,i){let s=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(s&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let n=parseInt(a[1]);return i.toUpperCase()+`

`+r+`

`+i_(e.getShaderSource(t),n)}else return r}function r_(e,t){let i=s_(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function n_(e,t){let i=a_[t];return i===void 0?(We("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function o_(){ot.getLuminanceCoefficients(an);let e=an.x.toFixed(4),t=an.y.toFixed(4),i=an.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l_(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function h_(e){let t=[];for(let i in e){let s=e[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function c_(e,t){let i={},s=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<s;r++){let a=e.getActiveAttrib(t,r),n=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),i[n]={type:a.type,location:e.getAttribLocation(t,n),locationSize:o}}return i}function Qr(e){return e!==""}function wc(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ac(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Rl(e){return e.replace(u_,p_)}function p_(e,t){let i=et[t];if(i===void 0){let s=d_.get(t);if(s!==void 0)i=et[s],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Rl(i)}function Rc(e){return e.replace(f_,m_)}function m_(e,t,i,s){let r="";for(let a=parseInt(t);a<parseInt(i);a++)r+=s.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Cc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function v_(e){return g_[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function __(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":y_[e.envMapMode]||"ENVMAP_TYPE_CUBE"}function S_(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":x_[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}function b_(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":M_[e.combine]||"ENVMAP_BLENDING_NONE"}function T_(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function E_(e,t,i,s){let r=e.getContext(),a=i.defines,n=i.vertexShader,o=i.fragmentShader,l=v_(i),h=__(i),c=S_(i),d=b_(i),u=T_(i),p=l_(i),_=h_(a),x=r.createProgram(),m,f,y=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_].filter(Qr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_].filter(Qr).join(`
`),f.length>0&&(f+=`
`)):(m=[Cc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),f=[Cc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+c:"",i.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Vi?"#define TONE_MAPPING":"",i.toneMapping!==Vi?et.tonemapping_pars_fragment:"",i.toneMapping!==Vi?n_("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,r_("linearToOutputTexel",i.outputColorSpace),o_(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Qr).join(`
`)),n=Rl(n),n=wc(n,i),n=Ac(n,i),o=Rl(o),o=wc(o,i),o=Ac(o,i),n=Rc(n),o=Rc(o),i.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",i.glslVersion===Eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=y+m+n,g=y+f+o,S=bc(r,r.VERTEX_SHADER,b),E=bc(r,r.FRAGMENT_SHADER,g);r.attachShader(x,S),r.attachShader(x,E),i.index0AttributeName!==void 0?r.bindAttribLocation(x,0,i.index0AttributeName):i.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(R){if(e.debug.checkShaderErrors){let N=r.getProgramInfoLog(x)||"",j=r.getShaderInfoLog(S)||"",D=r.getShaderInfoLog(E)||"",X=N.trim(),K=j.trim(),Z=D.trim(),ye=!0,Q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ye=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,x,S,E);else{let ie=Ec(r,S,"vertex"),ue=Ec(r,E,"fragment");Ve("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+X+`
`+ie+`
`+ue)}else X!==""?We("WebGLProgram: Program Info Log:",X):(K===""||Z==="")&&(Q=!1);Q&&(R.diagnostics={runnable:ye,programLog:X,vertexShader:{log:K,prefix:m},fragmentShader:{log:Z,prefix:f}})}r.deleteShader(S),r.deleteShader(E),v=new dn(r,x),M=c_(r,x)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(x,e_)),U},this.destroy=function(){s.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=t_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=E,this}function C_(e){return e===Os||e===pn||e===fn}function P_(e,t,i,s,r,a){let n=new zl,o=new A_,l=new Set,h=[],c=new Map,d=s.logarithmicDepthBuffer,u=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,M,U,R,N,j){let D=R.fog,X=N.geometry,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,Z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ye=t.get(v.envMap||K,Z),Q=ye&&ye.mapping===Sn?ye.image.height:null,ie=p[v.type];v.precision!==null&&(u=s.getMaxPrecision(v.precision),u!==v.precision&&We("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let ue=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,He=ue!==void 0?ue.length:0,Ne=0;X.morphAttributes.position!==void 0&&(Ne=1),X.morphAttributes.normal!==void 0&&(Ne=2),X.morphAttributes.color!==void 0&&(Ne=3);let pt,Ze,ee,he;if(ie){let St=ki[ie];pt=St.vertexShader,Ze=St.fragmentShader}else{pt=v.vertexShader,Ze=v.fragmentShader;let St=o.getVertexShaderStage(v),rt=o.getFragmentShaderStage(v);o.update(v,St,rt),ee=St.id,he=rt.id}let me=e.getRenderTarget(),Be=e.state.buffers.depth.getReversed(),Ce=N.isInstancedMesh===!0,Se=N.isBatchedMesh===!0,Qe=!!v.map,le=!!v.matcap,oe=!!ye,fe=!!v.aoMap,we=!!v.lightMap,Re=!!v.bumpMap&&v.wireframe===!1,Le=!!v.normalMap,ze=!!v.displacementMap,Xe=!!v.emissiveMap,Je=!!v.metalnessMap,z=!!v.roughnessMap,ft=v.anisotropy>0,Ke=v.clearcoat>0,tt=v.dispersion>0,P=v.retroreflectivity>0,T=v.iridescence>0,H=v.sheen>0,J=v.transmission>0,L=ft&&!!v.anisotropyMap,O=Ke&&!!v.clearcoatMap,B=Ke&&!!v.clearcoatNormalMap,C=Ke&&!!v.clearcoatRoughnessMap,G=T&&!!v.iridescenceMap,ce=T&&!!v.iridescenceThicknessMap,ge=H&&!!v.sheenColorMap,se=H&&!!v.sheenRoughnessMap,ve=!!v.specularMap,Me=!!v.specularColorMap,Pe=!!v.specularIntensityMap,ke=J&&!!v.transmissionMap,F=J&&!!v.thicknessMap,te=!!v.gradientMap,ne=!!v.alphaMap,be=v.alphaTest>0,de=!!v.alphaHash,ae=!!v.extensions,_e=Vi;v.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(_e=e.toneMapping);let Ue={shaderID:ie,shaderType:v.type,shaderName:v.name,vertexShader:pt,fragmentShader:Ze,defines:v.defines,customVertexShaderID:ee,customFragmentShaderID:he,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Se,batchingColor:Se&&N._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&N.instanceColor!==null,instancingMorph:Ce&&N.morphTexture!==null,outputColorSpace:me===null?e.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Qe,matcap:le,envMap:oe,envMapMode:oe&&ye.mapping,envMapCubeUVHeight:Q,aoMap:fe,lightMap:we,bumpMap:Re,normalMap:Le,displacementMap:ze,emissiveMap:Xe,normalMapObjectSpace:Le&&v.normalMapType===Op,normalMapTangentSpace:Le&&v.normalMapType===Ml,packedNormalMap:Le&&v.normalMapType===Ml&&C_(v.normalMap.format),metalnessMap:Je,roughnessMap:z,anisotropy:ft,anisotropyMap:L,clearcoat:Ke,clearcoatMap:O,clearcoatNormalMap:B,clearcoatRoughnessMap:C,dispersion:tt,retroreflection:P,iridescence:T,iridescenceMap:G,iridescenceThicknessMap:ce,sheen:H,sheenColorMap:ge,sheenRoughnessMap:se,specularMap:ve,specularColorMap:Me,specularIntensityMap:Pe,transmission:J,transmissionMap:ke,thicknessMap:F,gradientMap:te,opaque:v.transparent===!1&&v.blending===ea&&v.alphaToCoverage===!1,alphaMap:ne,alphaTest:be,alphaHash:de,combine:v.combine,mapUv:Qe&&_(v.map.channel),aoMapUv:fe&&_(v.aoMap.channel),lightMapUv:we&&_(v.lightMap.channel),bumpMapUv:Re&&_(v.bumpMap.channel),normalMapUv:Le&&_(v.normalMap.channel),displacementMapUv:ze&&_(v.displacementMap.channel),emissiveMapUv:Xe&&_(v.emissiveMap.channel),metalnessMapUv:Je&&_(v.metalnessMap.channel),roughnessMapUv:z&&_(v.roughnessMap.channel),anisotropyMapUv:L&&_(v.anisotropyMap.channel),clearcoatMapUv:O&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:B&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:C&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:G&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:se&&_(v.sheenRoughnessMap.channel),specularMapUv:ve&&_(v.specularMap.channel),specularColorMapUv:Me&&_(v.specularColorMap.channel),specularIntensityMapUv:Pe&&_(v.specularIntensityMap.channel),transmissionMapUv:ke&&_(v.transmissionMap.channel),thicknessMapUv:F&&_(v.thicknessMap.channel),alphaMapUv:ne&&_(v.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Le||ft),vertexNormals:!!X.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!X.attributes.uv&&(Qe||ne),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||X.attributes.normal===void 0&&Le===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Be,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:He,morphTextureStride:Ne,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:_e,decodeVideoTexture:Qe&&v.map.isVideoTexture===!0&&ot.getTransfer(v.map.colorSpace)===gt,decodeVideoTextureEmissive:Xe&&v.emissiveMap.isVideoTexture===!0&&ot.getTransfer(v.emissiveMap.colorSpace)===gt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===vi,flipSided:v.side===Qt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ae&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&v.extensions.multiDraw===!0||Se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function m(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let U in v.defines)M.push(U),M.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(f(M,v),y(M,v),M.push(e.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function f(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numSunLights),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numSunLightShadows),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function y(v,M){n.disableAll(),M.instancing&&n.enable(0),M.instancingColor&&n.enable(1),M.instancingMorph&&n.enable(2),M.matcap&&n.enable(3),M.envMap&&n.enable(4),M.normalMapObjectSpace&&n.enable(5),M.normalMapTangentSpace&&n.enable(6),M.clearcoat&&n.enable(7),M.iridescence&&n.enable(8),M.alphaTest&&n.enable(9),M.vertexColors&&n.enable(10),M.vertexAlphas&&n.enable(11),M.vertexUv1s&&n.enable(12),M.vertexUv2s&&n.enable(13),M.vertexUv3s&&n.enable(14),M.vertexTangents&&n.enable(15),M.anisotropy&&n.enable(16),M.alphaHash&&n.enable(17),M.batching&&n.enable(18),M.dispersion&&n.enable(19),M.retroreflection&&n.enable(24),M.batchingColor&&n.enable(20),M.gradientMap&&n.enable(21),M.packedNormalMap&&n.enable(22),M.vertexNormals&&n.enable(23),v.push(n.mask),n.disableAll(),M.fog&&n.enable(0),M.useFog&&n.enable(1),M.flatShading&&n.enable(2),M.logarithmicDepthBuffer&&n.enable(3),M.reversedDepthBuffer&&n.enable(4),M.skinning&&n.enable(5),M.morphTargets&&n.enable(6),M.morphNormals&&n.enable(7),M.morphColors&&n.enable(8),M.premultipliedAlpha&&n.enable(9),M.shadowMapEnabled&&n.enable(10),M.doubleSided&&n.enable(11),M.flipSided&&n.enable(12),M.useDepthPacking&&n.enable(13),M.dithering&&n.enable(14),M.transmission&&n.enable(15),M.sheen&&n.enable(16),M.opaque&&n.enable(17),M.pointsUvs&&n.enable(18),M.decodeVideoTexture&&n.enable(19),M.decodeVideoTextureEmissive&&n.enable(20),M.alphaToCoverage&&n.enable(21),M.numLightProbeGrids>0&&n.enable(22),M.hasPositionAttribute&&n.enable(23),v.push(n.mask)}function b(v){let M=p[v.type],U;if(M){let R=ki[M];U=Rm.clone(R.uniforms)}else U=v.uniforms;return U}function g(v,M){let U=c.get(M);return U!==void 0?++U.usedTimes:(U=new E_(e,M,v,r),h.push(U),c.set(M,U)),U}function S(v){if(--v.usedTimes===0){let M=h.indexOf(v);h[M]=h[h.length-1],h.pop(),c.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:b,acquireProgram:g,releaseProgram:S,releaseShaderCache:E,programs:h,dispose:A}}function I_(){let e=new WeakMap;function t(n){return e.has(n)}function i(n){let o=e.get(n);return o===void 0&&(o={},e.set(n,o)),o}function s(n){e.delete(n)}function r(n,o,l){e.get(n)[o]=l}function a(){e=new WeakMap}return{has:t,get:i,remove:s,update:r,dispose:a}}function L_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Pc(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Ic(){let e=[],t=0,i=[],s=[],r=[];function a(){t=0,i.length=0,s.length=0,r.length=0}function n(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,x,m,f){let y=e[t];return y===void 0?(y={id:u.id,object:u,geometry:p,material:_,materialVariant:n(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:f},e[t]=y):(y.id=u.id,y.object=u,y.geometry=p,y.material=_,y.materialVariant=n(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=m,y.group=f),t++,y}function l(u,p,_,x,m,f,y){y.reversedDepth===!0&&(m=-m);let b=o(u,p,_,x,m,f);_.transmission>0?s.push(b):_.transparent===!0?r.push(b):i.push(b)}function h(u,p,_,x,m,f){let y=o(u,p,_,x,m,f);_.transmission>0?s.unshift(y):_.transparent===!0?r.unshift(y):i.unshift(y)}function c(u,p){i.length>1&&i.sort(u||L_),s.length>1&&s.sort(p||Pc),r.length>1&&r.sort(p||Pc)}function d(){for(let u=t,p=e.length;u<p;u++){let _=e[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:i,transmissive:s,transparent:r,init:a,push:l,unshift:h,finish:d,sort:c}}function N_(){let e=new WeakMap;function t(s,r){let a=e.get(s),n;return a===void 0?(n=new Ic,e.set(s,[n])):r>=a.length?(n=new Ic,a.push(n)):n=a[r],n}function i(){e=new WeakMap}return{get:t,dispose:i}}function U_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new I,color:new qe};break;case"SpotLight":i={position:new I,direction:new I,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new I,color:new qe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new I,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":i={color:new qe,position:new I,halfWidth:new I,halfHeight:new I};break}return e[t.id]=i,i}}}function D_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}function B_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function F_(e){let t=new U_,i=D_(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);let r=new I,a=new st,n=new st;function o(h){let c=0,d=0,u=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let p=0,_=0,x=0,m=0,f=0,y=0,b=0,g=0,S=0,E=0,A=0,v=0,M=0,U=0;h.sort(B_);for(let N=0,j=h.length;N<j;N++){let D=h[N],X=D.color,K=D.intensity,Z=D.distance,ye=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Os?ye=D.shadow.map.texture:ye=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)c+=X.r*K,d+=X.g*K,u+=X.b*K;else if(D.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(D.sh.coefficients[Q],K);U++}else if(D.isSunLight){let Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ie=D.shadow,ue=i.get(D);ue.shadowIntensity=ie.intensity,ue.shadowBias=ie.bias,ue.shadowNormalBias=ie.normalBias,ue.shadowRadius=ie.radius,ue.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),s.sunShadow[_]=ue,s.sunShadowMap[_]=ye;let He=ie.getViewportCount();for(let Ne=0;Ne<He;Ne++)s.sunShadowMatrix[x+Ne]=ie.getMatrix(Ne),s.sunShadowCascade[x+Ne]=ie._cascadeData[Ne];x+=He,_++}s.sun[p]=Q,p++}else if(D.isDirectionalLight){let Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ie=D.shadow,ue=i.get(D);ue.shadowIntensity=ie.intensity,ue.shadowBias=ie.bias,ue.shadowNormalBias=ie.normalBias,ue.shadowRadius=ie.radius,ue.shadowMapSize=ie.mapSize,s.directionalShadow[m]=ue,s.directionalShadowMap[m]=ye,s.directionalShadowMatrix[m]=D.shadow.matrix,S++}s.directional[m]=Q,m++}else if(D.isSpotLight){let Q=t.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(X).multiplyScalar(K),Q.distance=Z,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,s.spot[y]=Q;let ie=D.shadow;if(D.map&&(s.spotLightMap[v]=D.map,v++,ie.updateMatrices(D),D.castShadow&&M++),s.spotLightMatrix[y]=ie.matrix,D.castShadow){let ue=i.get(D);ue.shadowIntensity=ie.intensity,ue.shadowBias=ie.bias,ue.shadowNormalBias=ie.normalBias,ue.shadowRadius=ie.radius,ue.shadowMapSize=ie.mapSize,s.spotShadow[y]=ue,s.spotShadowMap[y]=ye,A++}y++}else if(D.isRectAreaLight){let Q=t.get(D);Q.color.copy(X).multiplyScalar(K),Q.halfWidth.set(D.width*.5,0,0),Q.halfHeight.set(0,D.height*.5,0),s.rectArea[b]=Q,b++}else if(D.isPointLight){let Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){let ie=D.shadow,ue=i.get(D);ue.shadowIntensity=ie.intensity,ue.shadowBias=ie.bias,ue.shadowNormalBias=ie.normalBias,ue.shadowRadius=ie.radius,ue.shadowMapSize=ie.mapSize,ue.shadowCameraNear=ie.camera.near,ue.shadowCameraFar=ie.camera.far,s.pointShadow[f]=ue,s.pointShadowMap[f]=ye,s.pointShadowMatrix[f]=D.shadow.matrix,E++}s.point[f]=Q,f++}else if(D.isHemisphereLight){let Q=t.get(D);Q.skyColor.copy(D.color).multiplyScalar(K),Q.groundColor.copy(D.groundColor).multiplyScalar(K),s.hemi[g]=Q,g++}}b>0&&(e.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_FLOAT_1,s.rectAreaLTC2=Te.LTC_FLOAT_2):(s.rectAreaLTC1=Te.LTC_HALF_1,s.rectAreaLTC2=Te.LTC_HALF_2)),s.ambient[0]=c,s.ambient[1]=d,s.ambient[2]=u;let R=s.hash;(R.sunLength!==p||R.directionalLength!==m||R.pointLength!==f||R.spotLength!==y||R.rectAreaLength!==b||R.hemiLength!==g||R.numSunShadows!==_||R.numDirectionalShadows!==S||R.numPointShadows!==E||R.numSpotShadows!==A||R.numSpotMaps!==v||R.numLightProbes!==U)&&(s.sun.length=p,s.directional.length=m,s.spot.length=y,s.rectArea.length=b,s.point.length=f,s.hemi.length=g,s.sunShadow.length=_,s.sunShadowMap.length=_,s.sunShadowMatrix.length=x,s.sunShadowCascade.length=x,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.directionalShadowMatrix.length=S,s.pointShadow.length=E,s.pointShadowMap.length=E,s.pointShadowMatrix.length=E,s.spotShadow.length=A,s.spotShadowMap.length=A,s.spotLightMatrix.length=A+v-M,s.spotLightMap.length=v,s.numSpotLightShadowsWithMaps=M,s.numLightProbes=U,R.sunLength=p,R.directionalLength=m,R.pointLength=f,R.spotLength=y,R.rectAreaLength=b,R.hemiLength=g,R.numSunShadows=_,R.numDirectionalShadows=S,R.numPointShadows=E,R.numSpotShadows=A,R.numSpotMaps=v,R.numLightProbes=U,s.version=O_++)}function l(h,c){let d=0,u=0,p=0,_=0,x=0,m=0,f=c.matrixWorldInverse;for(let y=0,b=h.length;y<b;y++){let g=h[y];if(g.isSunLight){let S=s.sun[d];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(f),d++}else if(g.isDirectionalLight){let S=s.directional[u];S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),u++}else if(g.isSpotLight){let S=s.spot[_];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),_++}else if(g.isRectAreaLight){let S=s.rectArea[x];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(f),n.identity(),a.copy(g.matrixWorld),a.premultiply(f),n.extractRotation(a),S.halfWidth.set(g.width*.5,0,0),S.halfHeight.set(0,g.height*.5,0),S.halfWidth.applyMatrix4(n),S.halfHeight.applyMatrix4(n),x++}else if(g.isPointLight){let S=s.point[p];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(f),p++}else if(g.isHemisphereLight){let S=s.hemi[m];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:s}}function Lc(e){let t=new F_(e),i=[],s=[],r=[];function a(u){d.camera=u,i.length=0,s.length=0,r.length=0}function n(u){i.push(u)}function o(u){s.push(u)}function l(u){r.push(u)}function h(){t.setup(i)}function c(u){t.setupView(i,u)}let d={lightsArray:i,shadowsArray:s,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:h,setupLightsView:c,pushLight:n,pushShadow:o,pushLightProbeGrid:l}}function z_(e){let t=new WeakMap;function i(r,a=0){let n=t.get(r),o;return n===void 0?(o=new Lc(e),t.set(r,[o])):a>=n.length?(o=new Lc(e),n.push(o)):o=n[a],o}function s(){t=new WeakMap}return{get:i,dispose:s}}function W_(e,t,i){let s=new Mr,r=new pe,a=new pe,n=new Et,o=new Lm,l=new Nm,h={},c=i.maxTextureSize,d={[rs]:Qt,[Qt]:rs,[vi]:vi},u=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:k_,fragmentShader:H_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let _=new dt;_.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ht(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mr;let f=this.type;this.render=function(E,A,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===pp&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=mr);let M=e.getRenderTarget(),U=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),N=e.state;N.setBlending(is),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let j=f!==this.type;j&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(X=>X.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,X=E.length;D<X;D++){let K=E[D],Z=K.shadow;if(Z===void 0){We("WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);let ye=Z.getFrameExtents();r.multiply(ye),a.copy(Z.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(a.x=Math.floor(c/ye.x),r.x=a.x*ye.x,Z.mapSize.x=a.x),r.y>c&&(a.y=Math.floor(c/ye.y),r.y=a.y*ye.y,Z.mapSize.y=a.y));let Q=e.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=Q,Z.map===null||j===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===$r){if(K.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Ai(r.x,r.y,{format:Os,type:Xi,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),Z.map.texture.name=K.name+".shadowMap",Z.map.depthTexture=new ha(r.x,r.y,Hi),Z.map.depthTexture.name=K.name+".shadowMapDepth",Z.map.depthTexture.format=as,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Zt,Z.map.depthTexture.magFilter=Zt}else K.isPointLight?(Z.map=new qu(r.x),Z.map.depthTexture=new Ff(r.x,ji)):(Z.map=new Ai(r.x,r.y),Z.map.depthTexture=new ha(r.x,r.y,ji)),Z.map.depthTexture.name=K.name+".shadowMap",Z.map.depthTexture.format=as,this.type===mr?(Z.map.depthTexture.compareFunction=Q?Ol:Dl,Z.map.depthTexture.minFilter=Kt,Z.map.depthTexture.magFilter=Kt):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Zt,Z.map.depthTexture.magFilter=Zt);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==r.x||Z.map.height!==r.y)&&Z.map.setSize(r.x,r.y);let ie=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();K.isPointLight!==!0&&Z.updateMatrices(K,v);for(let ue=0;ue<ie;ue++){let He=Z.getCamera(ue);if(K.isPointLight){let Ne=Z.camera,pt=Z.matrix,Ze=K.distance||Ne.far;Ze!==Ne.far&&(Ne.far=Ze,Ne.updateProjectionMatrix()),Jr.setFromMatrixPosition(K.matrixWorld),Ne.position.copy(Jr),Oo.copy(Ne.position),Oo.add(G_[ue]),Ne.up.copy(V_[ue]),Ne.lookAt(Oo),Ne.updateMatrixWorld(),pt.makeTranslation(-Jr.x,-Jr.y,-Jr.z),Nc.multiplyMatrices(Ne.projectionMatrix,Ne.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Nc,Ne.coordinateSystem,Ne.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)e.setRenderTarget(Z.map,ue),e.clear();else{ue===0&&(e.setRenderTarget(Z.map),e.clear());let Ne=Z.getViewport(ue);n.set(a.x*Ne.x,a.y*Ne.y,a.x*Ne.z,a.y*Ne.w),N.viewport(n)}s=Z.getFrustum(ue),g(A,v,He,K,this.type)}Z.isPointLightShadow!==!0&&this.type===$r&&y(Z,v),Z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(M,U,R)};function y(E,A){let v=t.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ai(r.x,r.y,{format:Os,type:Xi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,e.setRenderTarget(E.mapPass),e.clear(),e.renderBufferDirect(A,null,v,u,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,e.setRenderTarget(E.map),e.clear(),e.renderBufferDirect(A,null,v,p,x,null)}function b(E,A,v,M){let U=null,R=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)U=R;else if(U=v.isPointLight===!0?l:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=U.uuid,j=A.uuid,D=h[N];D===void 0&&(D={},h[N]=D);let X=D[j];X===void 0&&(X=U.clone(),D[j]=X,A.addEventListener("dispose",S)),U=X}if(U.visible=A.visible,U.wireframe=A.wireframe,M===$r?U.side=A.shadowSide!==null?A.shadowSide:A.side:U.side=A.shadowSide!==null?A.shadowSide:d[A.side],U.alphaMap=A.alphaMap,U.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,U.map=A.map,U.clipShadows=A.clipShadows,U.clippingPlanes=A.clippingPlanes,U.clipIntersection=A.clipIntersection,U.displacementMap=A.displacementMap,U.displacementScale=A.displacementScale,U.displacementBias=A.displacementBias,U.wireframeLinewidth=A.wireframeLinewidth,U.linewidth=A.linewidth,v.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let N=e.properties.get(U);N.light=v}return U}function g(E,A,v,M,U){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&U===$r)&&(!E.frustumCulled||E.intersectsFrustum(s))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);let N=t.update(E),j=E.material;if(Array.isArray(j)){let D=N.groups;for(let X=0,K=D.length;X<K;X++){let Z=D[X],ye=j[Z.materialIndex];if(ye&&ye.visible){let Q=b(E,ye,M,U);E.onBeforeShadow(e,E,A,v,N,Q,Z),e.renderBufferDirect(v,null,N,Q,E,Z),E.onAfterShadow(e,E,A,v,N,Q,Z)}}}else if(j.visible){let D=b(E,j,M,U);E.onBeforeShadow(e,E,A,v,N,D,null),e.renderBufferDirect(v,null,N,D,E,null),E.onAfterShadow(e,E,A,v,N,D,null)}}let R=E.children;for(let N=0,j=R.length;N<j;N++)g(R[N],A,v,M,U)}function S(E){E.target.removeEventListener("dispose",S);for(let A in h){let v=h[A],M=E.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}function j_(e,t){function i(){let F=!1,te=new Et,ne=null,be=new Et(0,0,0,0);return{setMask:function(de){ne!==de&&!F&&(e.colorMask(de,de,de,de),ne=de)},setLocked:function(de){F=de},setClear:function(de,ae,_e,Ue,St){St===!0&&(de*=Ue,ae*=Ue,_e*=Ue),te.set(de,ae,_e,Ue),be.equals(te)===!1&&(e.clearColor(de,ae,_e,Ue),be.copy(te))},reset:function(){F=!1,ne=null,be.set(-1,0,0,0)}}}function s(){let F=!1,te=!1,ne=null,be=null,de=null;return{setReversed:function(ae){if(te!==ae){let _e=t.get("EXT_clip_control");ae?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),te=ae;let Ue=de;de=null,this.setClear(Ue)}},getReversed:function(){return te},setTest:function(ae){ae?me(e.DEPTH_TEST):Be(e.DEPTH_TEST)},setMask:function(ae){ne!==ae&&!F&&(e.depthMask(ae),ne=ae)},setFunc:function(ae){if(te&&(ae=Yp[ae]),be!==ae){switch(ae){case Bo:e.depthFunc(e.NEVER);break;case Fo:e.depthFunc(e.ALWAYS);break;case zo:e.depthFunc(e.LESS);break;case ra:e.depthFunc(e.LEQUAL);break;case ko:e.depthFunc(e.EQUAL);break;case Ho:e.depthFunc(e.GEQUAL);break;case Go:e.depthFunc(e.GREATER);break;case Vo:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}be=ae}},setLocked:function(ae){F=ae},setClear:function(ae){de!==ae&&(de=ae,te&&(ae=1-ae),e.clearDepth(ae))},reset:function(){F=!1,ne=null,be=null,de=null,te=!1}}}function r(){let F=!1,te=null,ne=null,be=null,de=null,ae=null,_e=null,Ue=null,St=null;return{setTest:function(rt){F||(rt?me(e.STENCIL_TEST):Be(e.STENCIL_TEST))},setMask:function(rt){te!==rt&&!F&&(e.stencilMask(rt),te=rt)},setFunc:function(rt,fi,_i){(ne!==rt||be!==fi||de!==_i)&&(e.stencilFunc(rt,fi,_i),ne=rt,be=fi,de=_i)},setOp:function(rt,fi,_i){(ae!==rt||_e!==fi||Ue!==_i)&&(e.stencilOp(rt,fi,_i),ae=rt,_e=fi,Ue=_i)},setLocked:function(rt){F=rt},setClear:function(rt){St!==rt&&(e.clearStencil(rt),St=rt)},reset:function(){F=!1,te=null,ne=null,be=null,de=null,ae=null,_e=null,Ue=null,St=null}}}let a=new i,n=new s,o=new r,l=new WeakMap,h=new WeakMap,c={},d={},u={},p=new WeakMap,_=[],x=null,m=!1,f=null,y=null,b=null,g=null,S=null,E=null,A=null,v=new qe(0,0,0),M=0,U=!1,R=null,N=null,j=null,D=null,X=null,K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,ye=0,Q=e.getParameter(e.VERSION);Q.indexOf("WebGL")!==-1?(ye=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Z=ye>=1):Q.indexOf("OpenGL ES")!==-1&&(ye=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Z=ye>=2);let ie=null,ue={},He=e.getParameter(e.SCISSOR_BOX),Ne=e.getParameter(e.VIEWPORT),pt=new Et().fromArray(He),Ze=new Et().fromArray(Ne);function ee(F,te,ne,be){let de=new Uint8Array(4),ae=e.createTexture();e.bindTexture(F,ae),e.texParameteri(F,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(F,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let _e=0;_e<ne;_e++)F===e.TEXTURE_3D||F===e.TEXTURE_2D_ARRAY?e.texImage3D(te,0,e.RGBA,1,1,be,0,e.RGBA,e.UNSIGNED_BYTE,de):e.texImage2D(te+_e,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,de);return ae}let he={};he[e.TEXTURE_2D]=ee(e.TEXTURE_2D,e.TEXTURE_2D,1),he[e.TEXTURE_CUBE_MAP]=ee(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[e.TEXTURE_2D_ARRAY]=ee(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),he[e.TEXTURE_3D]=ee(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),n.setClear(1),o.setClear(0),me(e.DEPTH_TEST),n.setFunc(ra),Re(!1),Le(yh),me(e.CULL_FACE),fe(is);function me(F){c[F]!==!0&&(e.enable(F),c[F]=!0)}function Be(F){c[F]!==!1&&(e.disable(F),c[F]=!1)}function Ce(F,te){return u[F]!==te?(e.bindFramebuffer(F,te),u[F]=te,F===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=te),F===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=te),!0):!1}function Se(F,te){let ne=_,be=!1;if(F){ne=p.get(te),ne===void 0&&(ne=[],p.set(te,ne));let de=F.textures;if(ne.length!==de.length||ne[0]!==e.COLOR_ATTACHMENT0){for(let ae=0,_e=de.length;ae<_e;ae++)ne[ae]=e.COLOR_ATTACHMENT0+ae;ne.length=de.length,be=!0}}else ne[0]!==e.BACK&&(ne[0]=e.BACK,be=!0);be&&e.drawBuffers(ne)}function Qe(F){return x!==F?(e.useProgram(F),x=F,!0):!1}let le={[ur]:e.FUNC_ADD,[mp]:e.FUNC_SUBTRACT,[gp]:e.FUNC_REVERSE_SUBTRACT};le[vp]=e.MIN,le[yp]=e.MAX;let oe={[_p]:e.ZERO,[xp]:e.ONE,[Sp]:e.SRC_COLOR,[Uc]:e.SRC_ALPHA,[Ap]:e.SRC_ALPHA_SATURATE,[Ep]:e.DST_COLOR,[bp]:e.DST_ALPHA,[Mp]:e.ONE_MINUS_SRC_COLOR,[Dc]:e.ONE_MINUS_SRC_ALPHA,[wp]:e.ONE_MINUS_DST_COLOR,[Tp]:e.ONE_MINUS_DST_ALPHA,[Rp]:e.CONSTANT_COLOR,[Cp]:e.ONE_MINUS_CONSTANT_COLOR,[Pp]:e.CONSTANT_ALPHA,[Ip]:e.ONE_MINUS_CONSTANT_ALPHA};function fe(F,te,ne,be,de,ae,_e,Ue,St,rt){if(F===is){m===!0&&(Be(e.BLEND),m=!1);return}if(m===!1&&(me(e.BLEND),m=!0),F!==fp){if(F!==f||rt!==U){if((y!==ur||S!==ur)&&(e.blendEquation(e.FUNC_ADD),y=ur,S=ur),rt)switch(F){case ea:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ot:e.blendFunc(e.ONE,e.ONE);break;case _h:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case xh:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ve("WebGLState: Invalid blending: ",F);break}else switch(F){case ea:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ot:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case _h:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xh:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",F);break}b=null,g=null,E=null,A=null,v.set(0,0,0),M=0,f=F,U=rt}return}de=de||te,ae=ae||ne,_e=_e||be,(te!==y||de!==S)&&(e.blendEquationSeparate(le[te],le[de]),y=te,S=de),(ne!==b||be!==g||ae!==E||_e!==A)&&(e.blendFuncSeparate(oe[ne],oe[be],oe[ae],oe[_e]),b=ne,g=be,E=ae,A=_e),(Ue.equals(v)===!1||St!==M)&&(e.blendColor(Ue.r,Ue.g,Ue.b,St),v.copy(Ue),M=St),f=F,U=!1}function we(F,te){F.side===vi?Be(e.CULL_FACE):me(e.CULL_FACE);let ne=F.side===Qt;te&&(ne=!ne),Re(ne),F.blending===ea&&F.transparent===!1?fe(is):fe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),n.setFunc(F.depthFunc),n.setTest(F.depthTest),n.setMask(F.depthWrite),a.setMask(F.colorWrite);let be=F.stencilWrite;o.setTest(be),be&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Xe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?me(e.SAMPLE_ALPHA_TO_COVERAGE):Be(e.SAMPLE_ALPHA_TO_COVERAGE)}function Re(F){R!==F&&(F?e.frontFace(e.CW):e.frontFace(e.CCW),R=F)}function Le(F){F!==up?(me(e.CULL_FACE),F!==N&&(F===yh?e.cullFace(e.BACK):F===dp?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Be(e.CULL_FACE),N=F}function ze(F){F!==j&&(Z&&e.lineWidth(F),j=F)}function Xe(F,te,ne){F?(me(e.POLYGON_OFFSET_FILL),(D!==te||X!==ne)&&(D=te,X=ne,n.getReversed()&&(te=-te),e.polygonOffset(te,ne))):Be(e.POLYGON_OFFSET_FILL)}function Je(F){F?me(e.SCISSOR_TEST):Be(e.SCISSOR_TEST)}function z(F){F===void 0&&(F=e.TEXTURE0+K-1),ie!==F&&(e.activeTexture(F),ie=F)}function ft(F,te,ne){ne===void 0&&(ie===null?ne=e.TEXTURE0+K-1:ne=ie);let be=ue[ne];be===void 0&&(be={type:void 0,texture:void 0},ue[ne]=be),(be.type!==F||be.texture!==te)&&(ie!==ne&&(e.activeTexture(ne),ie=ne),e.bindTexture(F,te||he[F]),be.type=F,be.texture=te)}function Ke(){let F=ue[ie];F!==void 0&&F.type!==void 0&&(e.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function tt(){try{e.compressedTexImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function P(){try{e.compressedTexImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function T(){try{e.texSubImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function H(){try{e.texSubImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function J(){try{e.compressedTexSubImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function L(){try{e.compressedTexSubImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function O(){try{e.texStorage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function B(){try{e.texStorage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function C(){try{e.texImage2D(...arguments)}catch(F){Ve("WebGLState:",F)}}function G(){try{e.texImage3D(...arguments)}catch(F){Ve("WebGLState:",F)}}function ce(F){return d[F]!==void 0?d[F]:e.getParameter(F)}function ge(F,te){d[F]!==te&&(e.pixelStorei(F,te),d[F]=te)}function se(F){pt.equals(F)===!1&&(e.scissor(F.x,F.y,F.z,F.w),pt.copy(F))}function ve(F){Ze.equals(F)===!1&&(e.viewport(F.x,F.y,F.z,F.w),Ze.copy(F))}function Me(F,te){let ne=h.get(te);ne===void 0&&(ne=new WeakMap,h.set(te,ne));let be=ne.get(F);be===void 0&&(be=e.getUniformBlockIndex(te,F.name),ne.set(F,be))}function Pe(F,te){let ne=h.get(te).get(F);l.get(te)!==ne&&(e.uniformBlockBinding(te,ne,F.__bindingPointIndex),l.set(te,ne))}function ke(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),n.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),c={},d={},ie=null,ue={},u={},p=new WeakMap,_=[],x=null,m=!1,f=null,y=null,b=null,g=null,S=null,E=null,A=null,v=new qe(0,0,0),M=0,U=!1,R=null,N=null,j=null,D=null,X=null,pt.set(0,0,e.canvas.width,e.canvas.height),Ze.set(0,0,e.canvas.width,e.canvas.height),a.reset(),n.reset(),o.reset()}return{buffers:{color:a,depth:n,stencil:o},enable:me,disable:Be,bindFramebuffer:Ce,drawBuffers:Se,useProgram:Qe,setBlending:fe,setMaterial:we,setFlipSided:Re,setCullFace:Le,setLineWidth:ze,setPolygonOffset:Xe,setScissorTest:Je,activeTexture:z,bindTexture:ft,unbindTexture:Ke,compressedTexImage2D:tt,compressedTexImage3D:P,texImage2D:C,texImage3D:G,pixelStorei:ge,getParameter:ce,updateUBOMapping:Me,uniformBlockBinding:Pe,texStorage2D:O,texStorage3D:B,texSubImage2D:T,texSubImage3D:H,compressedTexSubImage2D:J,compressedTexSubImage3D:L,scissor:se,viewport:ve,reset:ke}}function X_(e,t,i,s,r,a,n){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new pe,c=new WeakMap,d=new Set,u,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,T){return _?new OffscreenCanvas(P,T):yn("canvas")}function m(P,T,H){let J=1,L=tt(P);if((L.width>H||L.height>H)&&(J=H/Math.max(L.width,L.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let O=Math.floor(J*L.width),B=Math.floor(J*L.height);u===void 0&&(u=x(O,B));let C=T?x(O,B):u;return C.width=O,C.height=B,C.getContext("2d").drawImage(P,0,0,O,B),We("WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+O+"x"+B+")."),C}else return"data"in P&&We("WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),P;return P}function f(P){return P.generateMipmaps}function y(P){e.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?e.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function g(P,T,H,J,L,O=!1){if(P!==null){if(e[P]!==void 0)return e[P];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let B;J&&(B=t.get("EXT_texture_norm16"),B||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let C=T;if(T===e.RED&&(H===e.FLOAT&&(C=e.R32F),H===e.HALF_FLOAT&&(C=e.R16F),H===e.UNSIGNED_BYTE&&(C=e.R8),H===e.UNSIGNED_SHORT&&B&&(C=B.R16_EXT),H===e.SHORT&&B&&(C=B.R16_SNORM_EXT)),T===e.RED_INTEGER&&(H===e.UNSIGNED_BYTE&&(C=e.R8UI),H===e.UNSIGNED_SHORT&&(C=e.R16UI),H===e.UNSIGNED_INT&&(C=e.R32UI),H===e.BYTE&&(C=e.R8I),H===e.SHORT&&(C=e.R16I),H===e.INT&&(C=e.R32I)),T===e.RG&&(H===e.FLOAT&&(C=e.RG32F),H===e.HALF_FLOAT&&(C=e.RG16F),H===e.UNSIGNED_BYTE&&(C=e.RG8),H===e.UNSIGNED_SHORT&&B&&(C=B.RG16_EXT),H===e.SHORT&&B&&(C=B.RG16_SNORM_EXT)),T===e.RG_INTEGER&&(H===e.UNSIGNED_BYTE&&(C=e.RG8UI),H===e.UNSIGNED_SHORT&&(C=e.RG16UI),H===e.UNSIGNED_INT&&(C=e.RG32UI),H===e.BYTE&&(C=e.RG8I),H===e.SHORT&&(C=e.RG16I),H===e.INT&&(C=e.RG32I)),T===e.RGB_INTEGER&&(H===e.UNSIGNED_BYTE&&(C=e.RGB8UI),H===e.UNSIGNED_SHORT&&(C=e.RGB16UI),H===e.UNSIGNED_INT&&(C=e.RGB32UI),H===e.BYTE&&(C=e.RGB8I),H===e.SHORT&&(C=e.RGB16I),H===e.INT&&(C=e.RGB32I)),T===e.RGBA_INTEGER&&(H===e.UNSIGNED_BYTE&&(C=e.RGBA8UI),H===e.UNSIGNED_SHORT&&(C=e.RGBA16UI),H===e.UNSIGNED_INT&&(C=e.RGBA32UI),H===e.BYTE&&(C=e.RGBA8I),H===e.SHORT&&(C=e.RGBA16I),H===e.INT&&(C=e.RGBA32I)),T===e.RGB&&(H===e.UNSIGNED_SHORT&&B&&(C=B.RGB16_EXT),H===e.SHORT&&B&&(C=B.RGB16_SNORM_EXT),H===e.UNSIGNED_INT_5_9_9_9_REV&&(C=e.RGB9_E5),H===e.UNSIGNED_INT_10F_11F_11F_REV&&(C=e.R11F_G11F_B10F)),T===e.RGBA){let G=O?vn:ot.getTransfer(L);H===e.FLOAT&&(C=e.RGBA32F),H===e.HALF_FLOAT&&(C=e.RGBA16F),H===e.UNSIGNED_BYTE&&(C=G===gt?e.SRGB8_ALPHA8:e.RGBA8),H===e.UNSIGNED_SHORT&&B&&(C=B.RGBA16_EXT),H===e.SHORT&&B&&(C=B.RGBA16_SNORM_EXT),H===e.UNSIGNED_SHORT_4_4_4_4&&(C=e.RGBA4),H===e.UNSIGNED_SHORT_5_5_5_1&&(C=e.RGB5_A1)}return(C===e.R16F||C===e.R32F||C===e.RG16F||C===e.RG32F||C===e.RGBA16F||C===e.RGBA32F)&&t.get("EXT_color_buffer_float"),C}function S(P,T){let H;return P?T===null||T===ji||T===na?H=e.DEPTH24_STENCIL8:T===Hi?H=e.DEPTH32F_STENCIL8:T===aa&&(H=e.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ji||T===na?H=e.DEPTH_COMPONENT24:T===Hi?H=e.DEPTH_COMPONENT32F:T===aa&&(H=e.DEPTH_COMPONENT16),H}function E(P,T){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==Zt&&P.minFilter!==Kt?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function A(P){let T=P.target;T.removeEventListener("dispose",A),M(T),T.isVideoTexture&&c.delete(T),T.isHTMLTexture&&d.delete(T)}function v(P){let T=P.target;T.removeEventListener("dispose",v),R(T)}function M(P){let T=s.get(P);if(T.__webglInit===void 0)return;let H=P.source,J=p.get(H);if(J){let L=J[T.__cacheKey];L.usedTimes--,L.usedTimes===0&&U(P),Object.keys(J).length===0&&p.delete(H)}s.remove(P)}function U(P){let T=s.get(P);e.deleteTexture(T.__webglTexture);let H=P.source,J=p.get(H);delete J[T.__cacheKey],n.memory.textures--}function R(P){let T=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let L=0;L<T.__webglFramebuffer[J].length;L++)e.deleteFramebuffer(T.__webglFramebuffer[J][L]);else e.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&e.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)e.deleteFramebuffer(T.__webglFramebuffer[J]);else e.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&e.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&e.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&e.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&e.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let H=P.textures;for(let J=0,L=H.length;J<L;J++){let O=s.get(H[J]);O.__webglTexture&&(e.deleteTexture(O.__webglTexture),n.memory.textures--),s.remove(H[J])}s.remove(P)}let N=0;function j(){N=0}function D(){return N}function X(P){N=P}function K(){let P=N;return P>=r.maxTextures&&We("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),N+=1,P}function Z(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function ye(P,T){let H=s.get(P);if(P.isVideoTexture&&ft(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){let J=P.image;if(J===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(H,P,T);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,H.__webglTexture,e.TEXTURE0+T)}function Q(P,T){let H=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){Be(H,P,T);return}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,H.__webglTexture,e.TEXTURE0+T)}function ie(P,T){let H=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){Be(H,P,T);return}i.bindTexture(e.TEXTURE_3D,H.__webglTexture,e.TEXTURE0+T)}function ue(P,T){let H=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&H.__version!==P.version){Ce(H,P,T);return}i.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture,e.TEXTURE0+T)}let He={[Ri]:e.REPEAT,[ts]:e.CLAMP_TO_EDGE,[Wo]:e.MIRRORED_REPEAT},Ne={[Zt]:e.NEAREST,[Up]:e.NEAREST_MIPMAP_NEAREST,[Aa]:e.NEAREST_MIPMAP_LINEAR,[Kt]:e.LINEAR,[eo]:e.LINEAR_MIPMAP_NEAREST,[Ls]:e.LINEAR_MIPMAP_LINEAR},pt={[Fp]:e.NEVER,[Vp]:e.ALWAYS,[zp]:e.LESS,[Dl]:e.LEQUAL,[kp]:e.EQUAL,[Ol]:e.GEQUAL,[Hp]:e.GREATER,[Gp]:e.NOTEQUAL};function Ze(P,T){if(T.type===Hi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Kt||T.magFilter===eo||T.magFilter===Aa||T.magFilter===Ls||T.minFilter===Kt||T.minFilter===eo||T.minFilter===Aa||T.minFilter===Ls)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(P,e.TEXTURE_WRAP_S,He[T.wrapS]),e.texParameteri(P,e.TEXTURE_WRAP_T,He[T.wrapT]),(P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY)&&e.texParameteri(P,e.TEXTURE_WRAP_R,He[T.wrapR]),e.texParameteri(P,e.TEXTURE_MAG_FILTER,Ne[T.magFilter]),e.texParameteri(P,e.TEXTURE_MIN_FILTER,Ne[T.minFilter]),T.compareFunction&&(e.texParameteri(P,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(P,e.TEXTURE_COMPARE_FUNC,pt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Zt||T.minFilter!==Aa&&T.minFilter!==Ls||T.type===Hi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");e.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function ee(P,T){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",A));let J=T.source,L=p.get(J);L===void 0&&(L={},p.set(J,L));let O=Z(T);if(O!==P.__cacheKey){L[O]===void 0&&(L[O]={texture:e.createTexture(),usedTimes:0},n.memory.textures++,H=!0),L[O].usedTimes++;let B=L[P.__cacheKey];B!==void 0&&(L[P.__cacheKey].usedTimes--,B.usedTimes===0&&U(T)),P.__cacheKey=O,P.__webglTexture=L[O].texture}return H}function he(P,T,H){return Math.floor(Math.floor(P/H)/T)}function me(P,T,H,J){let L=P.updateRanges;if(L.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,T.width,T.height,H,J,T.data);else{L.sort((ce,ge)=>ce.start-ge.start);let O=0;for(let ce=1;ce<L.length;ce++){let ge=L[O],se=L[ce],ve=ge.start+ge.count,Me=he(se.start,T.width,4),Pe=he(ge.start,T.width,4);se.start<=ve+1&&Me===Pe&&he(se.start+se.count-1,T.width,4)===Me?ge.count=Math.max(ge.count,se.start+se.count-ge.start):(++O,L[O]=se)}L.length=O+1;let B=i.getParameter(e.UNPACK_ROW_LENGTH),C=i.getParameter(e.UNPACK_SKIP_PIXELS),G=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,T.width);for(let ce=0,ge=L.length;ce<ge;ce++){let se=L[ce],ve=Math.floor(se.start/4),Me=Math.ceil(se.count/4),Pe=ve%T.width,ke=Math.floor(ve/T.width),F=Me;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Pe),i.pixelStorei(e.UNPACK_SKIP_ROWS,ke),i.texSubImage2D(e.TEXTURE_2D,0,Pe,ke,F,1,H,J,T.data)}P.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,B),i.pixelStorei(e.UNPACK_SKIP_PIXELS,C),i.pixelStorei(e.UNPACK_SKIP_ROWS,G)}}function Be(P,T,H){let J=e.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=e.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=e.TEXTURE_3D);let L=ee(P,T),O=T.source;i.bindTexture(J,P.__webglTexture,e.TEXTURE0+H);let B=s.get(O);if(O.version!==B.__version||L===!0){if(i.activeTexture(e.TEXTURE0+H),!(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)){let te=ot.getPrimaries(ot.workingColorSpace),ne=T.colorSpace===ys?null:ot.getPrimaries(T.colorSpace),be=T.colorSpace===ys||te===ne?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}i.pixelStorei(e.UNPACK_ALIGNMENT,T.unpackAlignment);let C=m(T.image,!1,r.maxTextureSize);C=Ke(T,C);let G=a.convert(T.format,T.colorSpace),ce=a.convert(T.type),ge=g(T.internalFormat,G,ce,T.normalized,T.colorSpace,T.isVideoTexture);Ze(J,T);let se,ve=T.mipmaps,Me=T.isVideoTexture!==!0,Pe=B.__version===void 0||L===!0,ke=O.dataReady,F=E(T,C);if(T.isDepthTexture)ge=S(T.format===Ns,T.type),Pe&&(Me?i.texStorage2D(e.TEXTURE_2D,1,ge,C.width,C.height):i.texImage2D(e.TEXTURE_2D,0,ge,C.width,C.height,0,G,ce,null));else if(T.isDataTexture)if(ve.length>0){Me&&Pe&&i.texStorage2D(e.TEXTURE_2D,F,ge,ve[0].width,ve[0].height);for(let te=0,ne=ve.length;te<ne;te++)se=ve[te],Me?ke&&i.texSubImage2D(e.TEXTURE_2D,te,0,0,se.width,se.height,G,ce,se.data):i.texImage2D(e.TEXTURE_2D,te,ge,se.width,se.height,0,G,ce,se.data);T.generateMipmaps=!1}else Me?(Pe&&i.texStorage2D(e.TEXTURE_2D,F,ge,C.width,C.height),ke&&me(T,C,G,ce)):i.texImage2D(e.TEXTURE_2D,0,ge,C.width,C.height,0,G,ce,C.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Me&&Pe&&i.texStorage3D(e.TEXTURE_2D_ARRAY,F,ge,ve[0].width,ve[0].height,C.depth);for(let te=0,ne=ve.length;te<ne;te++)if(se=ve[te],T.format!==Ei)if(G!==null)if(Me){if(ke)if(T.layerUpdates.size>0){let be=uc(se.width,se.height,T.format,T.type);for(let de of T.layerUpdates){let ae=se.data.subarray(de*be/se.data.BYTES_PER_ELEMENT,(de+1)*be/se.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,te,0,0,de,se.width,se.height,1,G,ae)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,te,0,0,0,se.width,se.height,C.depth,G,se.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,te,ge,se.width,se.height,C.depth,0,se.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?ke&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,te,0,0,0,se.width,se.height,C.depth,G,ce,se.data):i.texImage3D(e.TEXTURE_2D_ARRAY,te,ge,se.width,se.height,C.depth,0,G,ce,se.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Me&&Pe&&i.texStorage2D(e.TEXTURE_2D,F,ge,ve[0].width,ve[0].height);for(let te=0,ne=ve.length;te<ne;te++)se=ve[te],T.format!==Ei?G!==null?Me?ke&&i.compressedTexSubImage2D(e.TEXTURE_2D,te,0,0,se.width,se.height,G,se.data):i.compressedTexImage2D(e.TEXTURE_2D,te,ge,se.width,se.height,0,se.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?ke&&i.texSubImage2D(e.TEXTURE_2D,te,0,0,se.width,se.height,G,ce,se.data):i.texImage2D(e.TEXTURE_2D,te,ge,se.width,se.height,0,G,ce,se.data)}else if(T.isDataArrayTexture)if(Me){if(Pe&&i.texStorage3D(e.TEXTURE_2D_ARRAY,F,ge,C.width,C.height,C.depth),ke)if(T.layerUpdates.size>0){let te=uc(C.width,C.height,T.format,T.type);for(let ne of T.layerUpdates){let be=C.data.subarray(ne*te/C.data.BYTES_PER_ELEMENT,(ne+1)*te/C.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ne,C.width,C.height,1,G,ce,be)}T.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,C.width,C.height,C.depth,G,ce,C.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,ge,C.width,C.height,C.depth,0,G,ce,C.data);else if(T.isData3DTexture)Me?(Pe&&i.texStorage3D(e.TEXTURE_3D,F,ge,C.width,C.height,C.depth),ke&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,C.width,C.height,C.depth,G,ce,C.data)):i.texImage3D(e.TEXTURE_3D,0,ge,C.width,C.height,C.depth,0,G,ce,C.data);else if(T.isFramebufferTexture){if(Pe)if(Me)i.texStorage2D(e.TEXTURE_2D,F,ge,C.width,C.height);else{let te=C.width,ne=C.height;for(let be=0;be<F;be++)i.texImage2D(e.TEXTURE_2D,be,ge,te,ne,0,G,ce,null),te>>=1,ne>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in e){let te=e.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),C.parentNode!==te){te.appendChild(C),d.add(T),te.onpaint=ne=>{let be=ne.changedElements;for(let de of d)be.includes(de.image)&&(de.needsUpdate=!0)},te.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,C);else{let ne=e.RGBA,be=e.RGBA,de=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,ne,be,de,C)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(ve.length>0){if(Me&&Pe){let te=tt(ve[0]);i.texStorage2D(e.TEXTURE_2D,F,ge,te.width,te.height)}for(let te=0,ne=ve.length;te<ne;te++)se=ve[te],Me?ke&&i.texSubImage2D(e.TEXTURE_2D,te,0,0,G,ce,se):i.texImage2D(e.TEXTURE_2D,te,ge,G,ce,se);T.generateMipmaps=!1}else if(Me){if(Pe){let te=tt(C);i.texStorage2D(e.TEXTURE_2D,F,ge,te.width,te.height)}ke&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,G,ce,C)}else i.texImage2D(e.TEXTURE_2D,0,ge,G,ce,C);f(T)&&y(J),B.__version=O.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Ce(P,T,H){if(T.image.length!==6)return;let J=ee(P,T),L=T.source;i.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+H);let O=s.get(L);if(L.version!==O.__version||J===!0){i.activeTexture(e.TEXTURE0+H);let B=ot.getPrimaries(ot.workingColorSpace),C=T.colorSpace===ys?null:ot.getPrimaries(T.colorSpace),G=T.colorSpace===ys||B===C?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,G);let ce=T.isCompressedTexture||T.image[0].isCompressedTexture,ge=T.image[0]&&T.image[0].isDataTexture,se=[];for(let ae=0;ae<6;ae++)!ce&&!ge?se[ae]=m(T.image[ae],!0,r.maxCubemapSize):se[ae]=ge?T.image[ae].image:T.image[ae],se[ae]=Ke(T,se[ae]);let ve=se[0],Me=a.convert(T.format,T.colorSpace),Pe=a.convert(T.type),ke=g(T.internalFormat,Me,Pe,T.normalized,T.colorSpace),F=T.isVideoTexture!==!0,te=O.__version===void 0||J===!0,ne=L.dataReady,be=E(T,ve);Ze(e.TEXTURE_CUBE_MAP,T);let de;if(ce){F&&te&&i.texStorage2D(e.TEXTURE_CUBE_MAP,be,ke,ve.width,ve.height);for(let ae=0;ae<6;ae++){de=se[ae].mipmaps;for(let _e=0;_e<de.length;_e++){let Ue=de[_e];T.format!==Ei?Me!==null?F?ne&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e,0,0,Ue.width,Ue.height,Me,Ue.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e,ke,Ue.width,Ue.height,0,Ue.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ne&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e,0,0,Ue.width,Ue.height,Me,Pe,Ue.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e,ke,Ue.width,Ue.height,0,Me,Pe,Ue.data)}}}else{if(de=T.mipmaps,F&&te){de.length>0&&be++;let ae=tt(se[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,be,ke,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(ge){F?ne&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,se[ae].width,se[ae].height,Me,Pe,se[ae].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ke,se[ae].width,se[ae].height,0,Me,Pe,se[ae].data);for(let _e=0;_e<de.length;_e++){let Ue=de[_e].image[ae].image;F?ne&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e+1,0,0,Ue.width,Ue.height,Me,Pe,Ue.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e+1,ke,Ue.width,Ue.height,0,Me,Pe,Ue.data)}}else{F?ne&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Me,Pe,se[ae]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ke,Me,Pe,se[ae]);for(let _e=0;_e<de.length;_e++){let Ue=de[_e];F?ne&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e+1,0,0,Me,Pe,Ue.image[ae]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,_e+1,ke,Me,Pe,Ue.image[ae])}}}f(T)&&y(e.TEXTURE_CUBE_MAP),O.__version=L.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Se(P,T,H,J,L,O){let B=a.convert(H.format,H.colorSpace),C=a.convert(H.type),G=g(H.internalFormat,B,C,H.normalized,H.colorSpace),ce=s.get(T),ge=s.get(H);if(ge.__renderTarget=T,!ce.__hasExternalTextures){let se=Math.max(1,T.width>>O),ve=Math.max(1,T.height>>O);L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?i.texImage3D(L,O,G,se,ve,T.depth,0,B,C,null):i.texImage2D(L,O,G,se,ve,0,B,C,null)}i.bindFramebuffer(e.FRAMEBUFFER,P),z(T)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,L,ge.__webglTexture,0,Je(T)):(L===e.TEXTURE_2D||L>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,J,L,ge.__webglTexture,O),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Qe(P,T,H){if(e.bindRenderbuffer(e.RENDERBUFFER,P),T.depthBuffer){let J=T.depthTexture,L=J&&J.isDepthTexture?J.type:null,O=S(T.stencilBuffer,L),B=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;z(T)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Je(T),O,T.width,T.height):H?e.renderbufferStorageMultisample(e.RENDERBUFFER,Je(T),O,T.width,T.height):e.renderbufferStorage(e.RENDERBUFFER,O,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,B,e.RENDERBUFFER,P)}else{let J=T.textures;for(let L=0;L<J.length;L++){let O=J[L],B=a.convert(O.format,O.colorSpace),C=a.convert(O.type),G=g(O.internalFormat,B,C,O.normalized,O.colorSpace);z(T)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Je(T),G,T.width,T.height):H?e.renderbufferStorageMultisample(e.RENDERBUFFER,Je(T),G,T.width,T.height):e.renderbufferStorage(e.RENDERBUFFER,G,T.width,T.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function le(P,T,H){let J=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let L=s.get(T.depthTexture);if(L.__renderTarget=T,(!L.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),J){if(L.__webglInit===void 0&&(L.__webglInit=!0,T.depthTexture.addEventListener("dispose",A)),L.__webglTexture===void 0){L.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,L.__webglTexture),Ze(e.TEXTURE_CUBE_MAP,T.depthTexture);let ce=a.convert(T.depthTexture.format),ge=a.convert(T.depthTexture.type),se;T.depthTexture.format===as?se=e.DEPTH_COMPONENT24:T.depthTexture.format===Ns&&(se=e.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,se,T.width,T.height,0,ce,ge,null)}}else ye(T.depthTexture,0);let O=L.__webglTexture,B=Je(T),C=J?e.TEXTURE_CUBE_MAP_POSITIVE_X+H:e.TEXTURE_2D,G=T.depthTexture.format===Ns?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(T.depthTexture.format===as)z(T)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,G,C,O,0,B):e.framebufferTexture2D(e.FRAMEBUFFER,G,C,O,0);else if(T.depthTexture.format===Ns)z(T)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,G,C,O,0,B):e.framebufferTexture2D(e.FRAMEBUFFER,G,C,O,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(P){let T=s.get(P),H=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let J=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),J){let L=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,J.removeEventListener("dispose",L)};J.addEventListener("dispose",L),T.__depthDisposeCallback=L}T.__boundDepthTexture=J}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(H)for(let J=0;J<6;J++)le(T.__webglFramebuffer[J],P,J);else{let J=P.texture.mipmaps;J&&J.length>0?le(T.__webglFramebuffer[0],P,0):le(T.__webglFramebuffer,P,0)}else if(H){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(i.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]===void 0)T.__webglDepthbuffer[J]=e.createRenderbuffer(),Qe(T.__webglDepthbuffer[J],P,!1);else{let L=P.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,O=T.__webglDepthbuffer[J];e.bindRenderbuffer(e.RENDERBUFFER,O),e.framebufferRenderbuffer(e.FRAMEBUFFER,L,e.RENDERBUFFER,O)}}else{let J=P.texture.mipmaps;if(J&&J.length>0?i.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=e.createRenderbuffer(),Qe(T.__webglDepthbuffer,P,!1);else{let L=P.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,O=T.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,O),e.framebufferRenderbuffer(e.FRAMEBUFFER,L,e.RENDERBUFFER,O)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function fe(P,T,H){let J=s.get(P);T!==void 0&&Se(J.__webglFramebuffer,P,P.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),H!==void 0&&oe(P)}function we(P){let T=P.texture,H=s.get(P),J=s.get(T);P.addEventListener("dispose",v);let L=P.textures,O=P.isWebGLCubeRenderTarget===!0,B=L.length>1;if(B||(J.__webglTexture===void 0&&(J.__webglTexture=e.createTexture()),J.__version=T.version,n.memory.textures++),O){H.__webglFramebuffer=[];for(let C=0;C<6;C++)if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[C]=[];for(let G=0;G<T.mipmaps.length;G++)H.__webglFramebuffer[C][G]=e.createFramebuffer()}else H.__webglFramebuffer[C]=e.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let C=0;C<T.mipmaps.length;C++)H.__webglFramebuffer[C]=e.createFramebuffer()}else H.__webglFramebuffer=e.createFramebuffer();if(B)for(let C=0,G=L.length;C<G;C++){let ce=s.get(L[C]);ce.__webglTexture===void 0&&(ce.__webglTexture=e.createTexture(),n.memory.textures++)}if(P.samples>0&&z(P)===!1){H.__webglMultisampledFramebuffer=e.createFramebuffer(),H.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let C=0;C<L.length;C++){let G=L[C];H.__webglColorRenderbuffer[C]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,H.__webglColorRenderbuffer[C]);let ce=a.convert(G.format,G.colorSpace),ge=a.convert(G.type),se=g(G.internalFormat,ce,ge,G.normalized,G.colorSpace,P.isXRRenderTarget===!0),ve=Je(P);e.renderbufferStorageMultisample(e.RENDERBUFFER,ve,se,P.width,P.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+C,e.RENDERBUFFER,H.__webglColorRenderbuffer[C])}e.bindRenderbuffer(e.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=e.createRenderbuffer(),Qe(H.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(O){i.bindTexture(e.TEXTURE_CUBE_MAP,J.__webglTexture),Ze(e.TEXTURE_CUBE_MAP,T);for(let C=0;C<6;C++)if(T.mipmaps&&T.mipmaps.length>0)for(let G=0;G<T.mipmaps.length;G++)Se(H.__webglFramebuffer[C][G],P,T,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+C,G);else Se(H.__webglFramebuffer[C],P,T,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+C,0);f(T)&&y(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(B){for(let C=0,G=L.length;C<G;C++){let ce=L[C],ge=s.get(ce),se=e.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(se=P.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(se,ge.__webglTexture),Ze(se,ce),Se(H.__webglFramebuffer,P,ce,e.COLOR_ATTACHMENT0+C,se,0),f(ce)&&y(se)}i.unbindTexture()}else{let C=e.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(C=P.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(C,J.__webglTexture),Ze(C,T),T.mipmaps&&T.mipmaps.length>0)for(let G=0;G<T.mipmaps.length;G++)Se(H.__webglFramebuffer[G],P,T,e.COLOR_ATTACHMENT0,C,G);else Se(H.__webglFramebuffer,P,T,e.COLOR_ATTACHMENT0,C,0);f(T)&&y(C),i.unbindTexture()}P.depthBuffer&&oe(P)}function Re(P){let T=P.textures;for(let H=0,J=T.length;H<J;H++){let L=T[H];if(f(L)){let O=b(P),B=s.get(L).__webglTexture;i.bindTexture(O,B),y(O),i.unbindTexture()}}}let Le=[],ze=[];function Xe(P){if(P.samples>0){if(z(P)===!1){let T=P.textures,H=P.width,J=P.height,L=e.COLOR_BUFFER_BIT,O=P.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,B=s.get(P),C=T.length>1;if(C)for(let ce=0;ce<T.length;ce++)i.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,B.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,B.__webglMultisampledFramebuffer);let G=P.texture.mipmaps;G&&G.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,B.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,B.__webglFramebuffer);for(let ce=0;ce<T.length;ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(L|=e.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(L|=e.STENCIL_BUFFER_BIT)),C){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);let ge=s.get(T[ce]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ge,0)}e.blitFramebuffer(0,0,H,J,0,0,H,J,L,e.NEAREST),l===!0&&(Le.length=0,ze.length=0,Le.push(e.COLOR_ATTACHMENT0+ce),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(Le.push(O),ze.push(O),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ze)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Le))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),C)for(let ce=0;ce<T.length;ce++){i.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);let ge=s.get(T[ce]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,B.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ce,e.TEXTURE_2D,ge,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,B.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let T=P.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[T])}}}function Je(P){return Math.min(r.maxSamples,P.samples)}function z(P){let T=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ft(P){let T=n.render.frame;c.get(P)!==T&&(c.set(P,T),P.update())}function Ke(P,T){let H=P.colorSpace,J=P.format,L=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==gn&&H!==ys&&(ot.getTransfer(H)===gt?(J!==Ei||L!==pi)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",H)),T}function tt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=K,this.resetTextureUnits=j,this.getTextureUnits=D,this.setTextureUnits=X,this.setTexture2D=ye,this.setTexture2DArray=Q,this.setTexture3D=ie,this.setTextureCube=ue,this.rebindTextures=fe,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=z,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function q_(e,t){function i(s,r=ys){let a,n=ot.getTransfer(r);if(s===pi)return e.UNSIGNED_BYTE;if(s===Pl)return e.UNSIGNED_SHORT_4_4_4_4;if(s===Il)return e.UNSIGNED_SHORT_5_5_5_1;if(s===Xc)return e.UNSIGNED_INT_5_9_9_9_REV;if(s===qc)return e.UNSIGNED_INT_10F_11F_11F_REV;if(s===Wc)return e.BYTE;if(s===jc)return e.SHORT;if(s===aa)return e.UNSIGNED_SHORT;if(s===Cl)return e.INT;if(s===ji)return e.UNSIGNED_INT;if(s===Hi)return e.FLOAT;if(s===Xi)return e.HALF_FLOAT;if(s===Yc)return e.ALPHA;if(s===Zc)return e.RGB;if(s===Ei)return e.RGBA;if(s===as)return e.DEPTH_COMPONENT;if(s===Ns)return e.DEPTH_STENCIL;if(s===Jc)return e.RED;if(s===Ll)return e.RED_INTEGER;if(s===Os)return e.RG;if(s===Nl)return e.RG_INTEGER;if(s===Ul)return e.RGBA_INTEGER;if(s===nn||s===on||s===ln||s===hn)if(n===gt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===nn)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===on)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ln)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===nn)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===on)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ln)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hn)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jo||s===Xo||s===qo||s===Yo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===jo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===qo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Zo||s===Jo||s===$o||s===Ko||s===Qo||s===pn||s===el)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Zo||s===Jo)return n===gt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===$o)return n===gt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(s===Ko)return a.COMPRESSED_R11_EAC;if(s===Qo)return a.COMPRESSED_SIGNED_R11_EAC;if(s===pn)return a.COMPRESSED_RG11_EAC;if(s===el)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===tl||s===il||s===sl||s===rl||s===al||s===nl||s===ol||s===ll||s===hl||s===cl||s===ul||s===dl||s===pl||s===fl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===tl)return n===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===il)return n===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sl)return n===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rl)return n===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===al)return n===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===nl)return n===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ol)return n===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ll)return n===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hl)return n===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cl)return n===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ul)return n===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dl)return n===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pl)return n===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fl)return n===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ml||s===gl||s===vl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===ml)return n===gt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===gl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===vl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===yl||s===_l||s===fn||s===xl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===yl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===_l)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fn)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===na?e.UNSIGNED_INT_24_8:e[s]!==void 0?e[s]:null}return{convert:i}}function Q_(e,t){function i(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function s(m,f){f.color.getRGB(m.fogColor.value,Hu(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,y,b,g){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?a(m,f):f.isMeshLambertMaterial?(a(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(a(m,f),d(m,f)):f.isMeshPhongMaterial?(a(m,f),c(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(a(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,g)):f.isMeshMatcapMaterial?(a(m,f),_(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),x(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(n(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,b):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,i(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Qt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,i(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Qt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,i(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,i(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=t.get(f),b=y.envMap,g=y.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(K_.makeRotationFromEuler(g)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ku),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,m.aoMapTransform))}function n(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=b*.5,f.map&&(m.map.value=f.map,i(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Qt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:r}}function ex(e,t,i,s){let r={},a={},n=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,S){let E=S.program;s.uniformBlockBinding(g,E)}function h(g,S){let E=r[g.id];E===void 0&&(m(g),E=c(g),r[g.id]=E,g.addEventListener("dispose",y));let A=S.program;s.updateUBOMapping(g,A);let v=t.render.frame;a[g.id]!==v&&(u(g),a[g.id]=v)}function c(g){let S=d();g.__bindingPointIndex=S;let E=e.createBuffer(),A=g.__size,v=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,A,v),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,S,E),E}function d(){for(let g=0;g<o;g++)if(n.indexOf(g)===-1)return n.push(g),g;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(g){let S=r[g.id],E=g.uniforms,A=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,S);for(let v=0,M=E.length;v<M;v++){let U=E[v];if(Array.isArray(U))for(let R=0,N=U.length;R<N;R++)p(U[R],v,R,A);else p(U,v,0,A)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(g,S,E,A){if(x(g,S,E,A)===!0){let v=g.__offset,M=g.value;if(Array.isArray(M)){let U=0;for(let R=0;R<M.length;R++){let N=M[R],j=f(N);_(N,g.__data,U),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(U+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(M,g.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,v,g.__data)}}function _(g,S,E){typeof g=="number"||typeof g=="boolean"?S[0]=g:g.isMatrix3?(S[0]=g.elements[0],S[1]=g.elements[1],S[2]=g.elements[2],S[3]=0,S[4]=g.elements[3],S[5]=g.elements[4],S[6]=g.elements[5],S[7]=0,S[8]=g.elements[6],S[9]=g.elements[7],S[10]=g.elements[8],S[11]=0):ArrayBuffer.isView(g)?S.set(new g.constructor(g.buffer,g.byteOffset,S.length)):g.toArray(S,E)}function x(g,S,E,A){let v=g.value,M=S+"_"+E;if(A[M]===void 0)return typeof v=="number"||typeof v=="boolean"?A[M]=v:ArrayBuffer.isView(v)?A[M]=v.slice():A[M]=v.clone(),!0;{let U=A[M];if(typeof v=="number"||typeof v=="boolean"){if(U!==v)return A[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(U.equals(v)===!1)return U.copy(v),!0}}return!1}function m(g){let S=g.uniforms,E=0,A=16;for(let M=0,U=S.length;M<U;M++){let R=Array.isArray(S[M])?S[M]:[S[M]];for(let N=0,j=R.length;N<j;N++){let D=R[N],X=Array.isArray(D.value)?D.value:[D.value];for(let K=0,Z=X.length;K<Z;K++){let ye=X[K],Q=f(ye),ie=E%A,ue=ie%Q.boundary,He=ie+ue;E+=ue,He!==0&&A-He<Q.storage&&(E+=A-He),D.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=Q.storage}}}let v=E%A;return v>0&&(E+=A-v),g.__size=E,g.__cache={},this}function f(g){let S={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(S.boundary=4,S.storage=4):g.isVector2?(S.boundary=8,S.storage=8):g.isVector3||g.isColor?(S.boundary=16,S.storage=12):g.isVector4?(S.boundary=16,S.storage=16):g.isMatrix3?(S.boundary=48,S.storage=48):g.isMatrix4?(S.boundary=64,S.storage=64):g.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(S.boundary=16,S.storage=g.byteLength):We("WebGLRenderer: Unsupported uniform value type.",g),S}function y(g){let S=g.target;S.removeEventListener("dispose",y);let E=n.indexOf(S.__bindingPointIndex);n.splice(E,1),e.deleteBuffer(r[S.id]),delete r[S.id],delete a[S.id]}function b(){for(let g in r)e.deleteBuffer(r[g]);n=[],r={},a={}}return{bind:l,update:h,dispose:b}}function ix(){return zi===null&&(zi=new Uf(tx,16,16,Os,Xi),zi.name="DFG_LUT",zi.minFilter=Kt,zi.magFilter=Kt,zi.wrapS=ts,zi.wrapT=ts,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}var qn,Yn,Zn,Jn,wa,$n,up,yh,dp,mr,pp,$r,rs,Qt,vi,is,ea,Ot,_h,xh,fp,ur,mp,gp,vp,yp,_p,xp,Sp,Mp,Uc,Dc,bp,Tp,Ep,wp,Ap,Rp,Cp,Pp,Ip,Bo,Fo,zo,ra,ko,Ho,Go,Vo,Oc,Lp,Np,Vi,Bc,Fc,zc,Er,kc,Hc,Gc,Vc,Ds,_r,Kn,Qn,Sn,Ri,ts,Wo,Zt,Up,Aa,Kt,eo,Ls,pi,Wc,jc,aa,Cl,ji,Hi,Xi,Pl,Il,na,Xc,qc,Yc,Zc,Ei,as,Ns,Jc,Ll,Os,Nl,Ul,nn,on,ln,hn,jo,Xo,qo,Yo,Zo,Jo,$o,Ko,Qo,pn,el,tl,il,sl,rl,al,nl,ol,ll,hl,cl,ul,dl,pl,fl,ml,gl,vl,yl,_l,fn,xl,mn,Sl,to,Sh,Mh,bh,Th,Dp,Ml,Op,ys,jt,gn,vn,gt,io,Bp,Fp,zp,kp,Dl,Hp,Gp,Ol,Vp,$c,Eh,wi,oa,wh,xr,Yp,Fs,Jt,Ah,vr,la,Tt,pe,ns,I,so,Rh,$e,ro,Ch,Ph,ot,qs,pf,ff,Fl,mf,no,yi,Et,gf,Ai,Qc,vf,st,Ys,Si,yf,_f,ds,Ra,ui,Ih,Lh,Sr,zl,xf,Nh,Zs,Ji,Ca,kr,Sf,Mf,Uh,Dh,Oh,Bh,bf,Js,oo,ai,nt,Tf,lo,tu,ps,Pa,qe,$t,iu,Mn,Mi,$i,co,Ki,$s,Ks,Fh,uo,po,fo,mo,go,vo,Is,_s,Qi,bi,Ia,Qs,er,tr,fs,ms,ws,Hr,La,Na,As,_x,Ut,Ua,wf,Xt,ru,au,je,Af,Gr,_o,xs,Rf,gi,xo,ir,di,Vr,Wt,dt,Cf,si,zh,So,Pf,If,vs,Lf,zs,Ci,sr,Wr,rr,ar,nr,jr,lu,Da,Xr,Oa,kh,Mo,Hh,qi,xx,Sx,es,bo,Fa,za,pa,Pi,Gh,Rs,ka,Vh,Ha,Ga,Va,To,Wa,Wh,ja,ht,Mx,bx,Tx,Ex,wx,Ax,Rx,Cx,Px,Uf,Ix,Lx,Nx,Ux,Dx,Ox,Bx,Fx,Cs,Df,qa,Mr,jh,Of,Bf,zx,kx,Hx,Gx,Vx,Wx,jx,Xx,qx,Yx,Zx,Jx,$x,Kx,Qx,e1,t1,i1,s1,r1,ks,Xh,bl,Ya,Za,wr,cu,Ss,ha,Ff,uu,Ms,kl,zf,Ar,fa,ma,kf,Ja,$a,Eo,Ka,Hf,Yi,Hl,Gf,Yh,Zh,wo,Ao,Ro,Vf,_u,$f,xu,Kf,Su,Mu,bu,xn,Qf,$h,Rr,vm,Us,ga,ym,Vl,Wl,xm,bs,bn,Sm,qt,bm,jl,Tm,Em,wm,a1,Rm,Cm,Pm,li,Im,Ct,Lm,Nm,va,Um,Dm,Om,Bm,Gi,qr,km,Hm,Gm,rc,Yr,Vm,Wm,jm,Xm,Xl,Tn,Po,ac,nc,Vu,tn,sn,Fi,ql,gs,oc,lc,Yt,qm,Cr,Yl,Ym,En,n1,o1,l1,lr,hr,Zm,Jm,h1,c1,u1,d1,p1,f1,m1,g1,v1,Zl,$m,Jl,Km,Qm,eg,tg,ig,sg,rg,ag,Rt,y1,hc,Wu,_1,x1,S1,M1,b1,T1,E1,w1,A1,R1,C1,P1,I1,L1,N1,U1,D1,O1,B1,F1,z1,k1,H1,lg,hg,cg,ug,dg,pg,fg,mg,gg,vg,yg,_g,xg,Sg,Mg,bg,Tg,Eg,wg,Ag,Rg,Cg,Pg,Ig,Lg,Ng,Ug,Dg,Og,Bg,Fg,zg,kg,Hg,Gg,Vg,Wg,jg,Xg,qg,Yg,Zg,Jg,$g,Kg,Qg,e0,t0,i0,s0,r0,a0,n0,o0,l0,h0,c0,u0,d0,p0,f0,m0,g0,v0,y0,_0,x0,S0,M0,b0,T0,E0,w0,A0,R0,C0,P0,I0,L0,N0,U0,D0,O0,B0,F0,z0,k0,H0,G0,V0,W0,j0,X0,q0,Y0,Z0,J0,$0,K0,Q0,ev,tv,iv,sv,rv,av,nv,ov,lv,hv,cv,uv,dv,pv,fv,mv,gv,vv,yv,_v,xv,Sv,Mv,bv,Tv,Ev,wv,Av,Rv,Cv,Pv,Iv,Lv,Nv,Uv,Dv,Ov,Bv,Fv,zv,kv,Hv,et,Te,ki,rn,Gv,Xu,fr,Yv,Zv,Jv,Zr,dc,Io,Lo,No,Uo,$v,Ps,pc,qu,ly,Yu,Al,Zu,Ju,$u,vc,yc,_c,xc,Sc,Jy,$y,Ky,Do,dn,e_,t_,Tc,a_,an,u_,d_,f_,g_,y_,x_,M_,w_,A_,R_,O_,k_,H_,G_,V_,Nc,Jr,Oo,Y_,Z_,J_,$_,K_,Ku,tx,zi,Rn,Lt=ut(()=>{up=0,yh=1,dp=2,mr=1,pp=2,$r=3,rs=0,Qt=1,vi=2,is=0,ea=1,Ot=2,_h=3,xh=4,fp=5,ur=100,mp=101,gp=102,vp=103,yp=104,_p=200,xp=201,Sp=202,Mp=203,Uc=204,Dc=205,bp=206,Tp=207,Ep=208,wp=209,Ap=210,Rp=211,Cp=212,Pp=213,Ip=214,Bo=0,Fo=1,zo=2,ra=3,ko=4,Ho=5,Go=6,Vo=7,Oc=0,Lp=1,Np=2,Vi=0,Bc=1,Fc=2,zc=3,Er=4,kc=5,Hc=6,Gc=7,Vc=300,Ds=301,_r=302,Kn=303,Qn=304,Sn=306,Ri=1e3,ts=1001,Wo=1002,Zt=1003,Up=1004,Aa=1005,Kt=1006,eo=1007,Ls=1008,pi=1009,Wc=1010,jc=1011,aa=1012,Cl=1013,ji=1014,Hi=1015,Xi=1016,Pl=1017,Il=1018,na=1020,Xc=35902,qc=35899,Yc=1021,Zc=1022,Ei=1023,as=1026,Ns=1027,Jc=1028,Ll=1029,Os=1030,Nl=1031,Ul=1033,nn=33776,on=33777,ln=33778,hn=33779,jo=35840,Xo=35841,qo=35842,Yo=35843,Zo=36196,Jo=37492,$o=37496,Ko=37488,Qo=37489,pn=37490,el=37491,tl=37808,il=37809,sl=37810,rl=37811,al=37812,nl=37813,ol=37814,ll=37815,hl=37816,cl=37817,ul=37818,dl=37819,pl=37820,fl=37821,ml=36492,gl=36494,vl=36495,yl=36283,_l=36284,fn=36285,xl=36286,mn=2300,Sl=2301,to=2302,Sh=2303,Mh=2400,bh=2401,Th=2402,Dp=3200,Ml=0,Op=1,ys="",jt="srgb",gn="srgb-linear",vn="linear",gt="srgb",io=7680,Bp=519,Fp=512,zp=513,kp=514,Dl=515,Hp=516,Gp=517,Ol=518,Vp=519,$c=35044,Eh="300 es",wi=2e3,oa=2001;wh={},xr=null;Yp={[Bo]:Fo,[zo]:Go,[ko]:Vo,[ra]:Ho,[Fo]:Bo,[Go]:zo,[Vo]:ko,[Ho]:ra},Fs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ah=1234567,vr=Math.PI/180,la=180/Math.PI;Tt={DEG2RAD:vr,RAD2DEG:la,generateUUID:Wi,clamp:it,euclideanModulo:Bl,mapLinear:Zp,inverseLerp:Jp,lerp:ta,damp:$p,pingpong:Kp,smoothstep:Qp,smootherstep:ef,randInt:tf,randFloat:sf,randFloatSpread:rf,seededRandom:af,degToRad:nf,radToDeg:of,isPowerOfTwo:lf,ceilPowerOfTwo:hf,floorPowerOfTwo:cf,setQuaternionFromProperEuler:uf,normalize:vt,denormalize:Ti},pe=(qn=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qn.prototype.isVector2=!0,qn),ns=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,n){let o=i[s+0],l=i[s+1],h=i[s+2],c=i[s+3],d=r[a+0],u=r[a+1],p=r[a+2],_=r[a+3];if(c!==_||o!==d||l!==u||h!==p){let x=o*d+l*u+h*p+c*_;x<0&&(d=-d,u=-u,p=-p,_=-_,x=-x);let m=1-n;if(x<.9995){let f=Math.acos(x),y=Math.sin(f);m=Math.sin(m*f)/y,n=Math.sin(n*f)/y,o=o*m+d*n,l=l*m+u*n,h=h*m+p*n,c=c*m+_*n}else{o=o*m+d*n,l=l*m+u*n,h=h*m+p*n,c=c*m+_*n;let f=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=f,l*=f,h*=f,c*=f}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,s,r,a){let n=i[s],o=i[s+1],l=i[s+2],h=i[s+3],c=r[a],d=r[a+1],u=r[a+2],p=r[a+3];return e[t]=n*p+h*c+o*u-l*d,e[t+1]=o*p+h*d+l*c-n*u,e[t+2]=l*p+h*u+n*d-o*c,e[t+3]=h*p-n*c-o*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,n=Math.cos,o=Math.sin,l=n(i/2),h=n(s/2),c=n(r/2),d=o(i/2),u=o(s/2),p=o(r/2);switch(a){case"XYZ":this._x=d*h*c+l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c-d*u*p;break;case"YXZ":this._x=d*h*c+l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c+d*u*p;break;case"ZXY":this._x=d*h*c-l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c-d*u*p;break;case"ZYX":this._x=d*h*c-l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c+d*u*p;break;case"YZX":this._x=d*h*c+l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c-d*u*p;break;case"XZY":this._x=d*h*c-l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c+d*u*p;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],n=t[5],o=t[9],l=t[2],h=t[6],c=t[10],d=i+n+c;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-o)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(i>n&&i>c){let u=2*Math.sqrt(1+i-n-c);this._w=(h-o)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(n>c){let u=2*Math.sqrt(1+n-i-c);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(o+h)/u}else{let u=2*Math.sqrt(1+c-i-n);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(o+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,n=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+a*n+s*l-r*o,this._y=s*h+a*o+r*n-i*l,this._z=r*h+a*l+i*o-s*n,this._w=a*h-i*n-s*o-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,n=this.dot(e);n<0&&(i=-i,s=-s,r=-r,a=-a,n=-n);let o=1-t;if(n<.9995){let l=Math.acos(n),h=Math.sin(l);o=Math.sin(o*l)/h,t=Math.sin(t*l)/h,this._x=this._x*o+i*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=(Yn=class{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,n=e.z,o=e.w,l=2*(a*s-n*i),h=2*(n*t-r*s),c=2*(r*i-a*t);return this.x=t+o*l+a*c-n*h,this.y=i+o*h+n*l-r*c,this.z=s+o*c+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,n=t.y,o=t.z;return this.x=s*o-r*n,this.y=r*a-i*o,this.z=i*n-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return so.copy(this).projectOnVector(e),this.sub(so)}reflect(e){return this.sub(so.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yn.prototype.isVector3=!0,Yn),so=new I,Rh=new ns,$e=(Zn=class{constructor(e,t,i,s,r,a,n,o,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,n,o,l)}set(e,t,i,s,r,a,n,o,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=n,h[3]=t,h[4]=r,h[5]=o,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],n=i[3],o=i[6],l=i[1],h=i[4],c=i[7],d=i[2],u=i[5],p=i[8],_=s[0],x=s[3],m=s[6],f=s[1],y=s[4],b=s[7],g=s[2],S=s[5],E=s[8];return r[0]=a*_+n*f+o*g,r[3]=a*x+n*y+o*S,r[6]=a*m+n*b+o*E,r[1]=l*_+h*f+c*g,r[4]=l*x+h*y+c*S,r[7]=l*m+h*b+c*E,r[2]=d*_+u*f+p*g,r[5]=d*x+u*y+p*S,r[8]=d*m+u*b+p*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],n=e[5],o=e[6],l=e[7],h=e[8];return t*a*h-t*n*l-i*r*h+i*n*o+s*r*l-s*a*o}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],n=e[5],o=e[6],l=e[7],h=e[8],c=h*a-n*l,d=n*o-h*r,u=l*r-a*o,p=t*c+i*d+s*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=c*_,e[1]=(s*l-h*i)*_,e[2]=(n*i-s*a)*_,e[3]=d*_,e[4]=(h*t-s*o)*_,e[5]=(s*r-n*t)*_,e[6]=u*_,e[7]=(i*o-l*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,n){let o=Math.cos(r),l=Math.sin(r);return this.set(i*o,i*l,-i*(o*a+l*n)+a+e,-s*l,s*o,-s*(-l*a+o*n)+n+t,0,0,1),this}scale(e,t){return gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ro.makeScale(e,t)),this}rotate(e){return gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ro.makeRotation(-e)),this}translate(e,t){return gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Zn.prototype.isMatrix3=!0,Zn),ro=new $e,Ch=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ph=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot=df();pf=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qs===void 0&&(qs=yn("canvas")),qs.width=e.width,qs.height=e.height;let s=qs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=qs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yn("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ss(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ss(t[i]/255)*255):t[i]=ss(t[i]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ff=0,Fl=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Wi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,n=s.length;a<n;a++)s[a].isDataTexture?r.push(ao(s[a].image)):r.push(ao(s[a]))}else r=ao(s);i.url=r}return t||(e.images[this.uuid]=i),i}};mf=0,no=new I,yi=class cn extends Fs{constructor(t=cn.DEFAULT_IMAGE,i=cn.DEFAULT_MAPPING,s=ts,r=ts,a=Kt,n=Ls,o=Ei,l=pi,h=cn.DEFAULT_ANISOTROPY,c=ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Wi(),this.name="",this.source=new Fl(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=r,this.magFilter=a,this.minFilter=n,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(no).x}get height(){return this.source.getSize(no).y}get depth(){return this.source.getSize(no).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let s=t[i];if(s===void 0){We(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let r=this[i];if(r===void 0){We(`Texture.setValues(): property '${i}' does not exist.`);continue}r&&s&&r.isVector2&&s.isVector2||r&&s&&r.isVector3&&s.isVector3||r&&s&&r.isMatrix3&&s.isMatrix3?r.copy(s):this[i]=s}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ri:t.x=t.x-Math.floor(t.x);break;case ts:t.x=t.x<0?0:1;break;case Wo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ri:t.y=t.y-Math.floor(t.y);break;case ts:t.y=t.y<0?0:1;break;case Wo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};yi.DEFAULT_IMAGE=null,yi.DEFAULT_MAPPING=Vc,yi.DEFAULT_ANISOTROPY=1;Et=(Jn=class{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,a=e.elements,n=a[0],o=a[4],l=a[8],h=a[1],c=a[5],d=a[9],u=a[2],p=a[6],_=a[10];if(Math.abs(o-h)<.01&&Math.abs(l-u)<.01&&Math.abs(d-p)<.01){if(Math.abs(o+h)<.1&&Math.abs(l+u)<.1&&Math.abs(d+p)<.1&&Math.abs(n+c+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let m=(n+1)/2,f=(c+1)/2,y=(_+1)/2,b=(o+h)/4,g=(l+u)/4,S=(d+p)/4;return m>f&&m>y?m<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(m),s=b/i,r=g/i):f>y?f<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(f),i=b/s,r=S/s):y<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),i=g/r,s=S/r),this.set(i,s,r,t),this}let x=Math.sqrt((p-d)*(p-d)+(l-u)*(l-u)+(h-o)*(h-o));return Math.abs(x)<.001&&(x=1),this.x=(p-d)/x,this.y=(l-u)/x,this.z=(h-o)/x,this.w=Math.acos((n+c+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jn.prototype.isVector4=!0,Jn),gf=class extends Fs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new yi(s),a=i.count;for(let n=0;n<a;n++)this.textures[n]=r.clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fl(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ai=class extends gf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Qc=class extends yi{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},vf=class extends yi{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},st=(wa=class{constructor(e,t,i,s,r,a,n,o,l,h,c,d,u,p,_,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,n,o,l,h,c,d,u,p,_,x)}set(e,t,i,s,r,a,n,o,l,h,c,d,u,p,_,x){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=n,m[13]=o,m[2]=l,m[6]=h,m[10]=c,m[14]=d,m[3]=u,m[7]=p,m[11]=_,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wa().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ys.setFromMatrixColumn(e,0).length(),r=1/Ys.setFromMatrixColumn(e,1).length(),a=1/Ys.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),n=Math.sin(i),o=Math.cos(s),l=Math.sin(s),h=Math.cos(r),c=Math.sin(r);if(e.order==="XYZ"){let d=a*h,u=a*c,p=n*h,_=n*c;t[0]=o*h,t[4]=-o*c,t[8]=l,t[1]=u+p*l,t[5]=d-_*l,t[9]=-n*o,t[2]=_-d*l,t[6]=p+u*l,t[10]=a*o}else if(e.order==="YXZ"){let d=o*h,u=o*c,p=l*h,_=l*c;t[0]=d+_*n,t[4]=p*n-u,t[8]=a*l,t[1]=a*c,t[5]=a*h,t[9]=-n,t[2]=u*n-p,t[6]=_+d*n,t[10]=a*o}else if(e.order==="ZXY"){let d=o*h,u=o*c,p=l*h,_=l*c;t[0]=d-_*n,t[4]=-a*c,t[8]=p+u*n,t[1]=u+p*n,t[5]=a*h,t[9]=_-d*n,t[2]=-a*l,t[6]=n,t[10]=a*o}else if(e.order==="ZYX"){let d=a*h,u=a*c,p=n*h,_=n*c;t[0]=o*h,t[4]=p*l-u,t[8]=d*l+_,t[1]=o*c,t[5]=_*l+d,t[9]=u*l-p,t[2]=-l,t[6]=n*o,t[10]=a*o}else if(e.order==="YZX"){let d=a*o,u=a*l,p=n*o,_=n*l;t[0]=o*h,t[4]=_-d*c,t[8]=p*c+u,t[1]=c,t[5]=a*h,t[9]=-n*h,t[2]=-l*h,t[6]=u*c+p,t[10]=d-_*c}else if(e.order==="XZY"){let d=a*o,u=a*l,p=n*o,_=n*l;t[0]=o*h,t[4]=-c,t[8]=l*h,t[1]=d*c+_,t[5]=a*h,t[9]=u*c-p,t[2]=p*c-u,t[6]=n*h,t[10]=_*c+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yf,e,_f)}lookAt(e,t,i){let s=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),ds.crossVectors(i,ui),ds.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),ds.crossVectors(i,ui)),ds.normalize(),Ra.crossVectors(ui,ds),s[0]=ds.x,s[4]=Ra.x,s[8]=ui.x,s[1]=ds.y,s[5]=Ra.y,s[9]=ui.y,s[2]=ds.z,s[6]=Ra.z,s[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],n=i[4],o=i[8],l=i[12],h=i[1],c=i[5],d=i[9],u=i[13],p=i[2],_=i[6],x=i[10],m=i[14],f=i[3],y=i[7],b=i[11],g=i[15],S=s[0],E=s[4],A=s[8],v=s[12],M=s[1],U=s[5],R=s[9],N=s[13],j=s[2],D=s[6],X=s[10],K=s[14],Z=s[3],ye=s[7],Q=s[11],ie=s[15];return r[0]=a*S+n*M+o*j+l*Z,r[4]=a*E+n*U+o*D+l*ye,r[8]=a*A+n*R+o*X+l*Q,r[12]=a*v+n*N+o*K+l*ie,r[1]=h*S+c*M+d*j+u*Z,r[5]=h*E+c*U+d*D+u*ye,r[9]=h*A+c*R+d*X+u*Q,r[13]=h*v+c*N+d*K+u*ie,r[2]=p*S+_*M+x*j+m*Z,r[6]=p*E+_*U+x*D+m*ye,r[10]=p*A+_*R+x*X+m*Q,r[14]=p*v+_*N+x*K+m*ie,r[3]=f*S+y*M+b*j+g*Z,r[7]=f*E+y*U+b*D+g*ye,r[11]=f*A+y*R+b*X+g*Q,r[15]=f*v+y*N+b*K+g*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],n=e[5],o=e[9],l=e[13],h=e[2],c=e[6],d=e[10],u=e[14],p=e[3],_=e[7],x=e[11],m=e[15],f=o*u-l*d,y=n*u-l*c,b=n*d-o*c,g=a*u-l*h,S=a*d-o*h,E=a*c-n*h;return t*(_*f-x*y+m*b)-i*(p*f-x*g+m*S)+s*(p*y-_*g+m*E)-r*(p*b-_*S+x*E)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],n=e[9],o=e[2],l=e[6],h=e[10];return t*(a*h-n*l)-i*(r*h-n*o)+s*(r*l-a*o)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],n=e[5],o=e[6],l=e[7],h=e[8],c=e[9],d=e[10],u=e[11],p=e[12],_=e[13],x=e[14],m=e[15],f=t*n-i*a,y=t*o-s*a,b=t*l-r*a,g=i*o-s*n,S=i*l-r*n,E=s*l-r*o,A=h*_-c*p,v=h*x-d*p,M=h*m-u*p,U=c*x-d*_,R=c*m-u*_,N=d*m-u*x,j=f*N-y*R+b*U+g*M-S*v+E*A;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/j;return e[0]=(n*N-o*R+l*U)*D,e[1]=(s*R-i*N-r*U)*D,e[2]=(_*E-x*S+m*g)*D,e[3]=(d*S-c*E-u*g)*D,e[4]=(o*M-a*N-l*v)*D,e[5]=(t*N-s*M+r*v)*D,e[6]=(x*b-p*E-m*y)*D,e[7]=(h*E-d*b+u*y)*D,e[8]=(a*R-n*M+l*A)*D,e[9]=(i*M-t*R-r*A)*D,e[10]=(p*S-_*b+m*f)*D,e[11]=(c*b-h*S-u*f)*D,e[12]=(n*v-a*U-o*A)*D,e[13]=(t*U-i*v+s*A)*D,e[14]=(_*y-p*g-x*f)*D,e[15]=(h*g-c*y+d*f)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,n=e.y,o=e.z,l=r*a,h=r*n;return this.set(l*a+i,l*n-s*o,l*o+s*n,0,l*n+s*o,h*n+i,h*o-s*a,0,l*o-s*n,h*o+s*a,r*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,n=t._z,o=t._w,l=r+r,h=a+a,c=n+n,d=r*l,u=r*h,p=r*c,_=a*h,x=a*c,m=n*c,f=o*l,y=o*h,b=o*c,g=i.x,S=i.y,E=i.z;return s[0]=(1-(_+m))*g,s[1]=(u+b)*g,s[2]=(p-y)*g,s[3]=0,s[4]=(u-b)*S,s[5]=(1-(d+m))*S,s[6]=(x+f)*S,s[7]=0,s[8]=(p+y)*E,s[9]=(x-f)*E,s[10]=(1-(d+_))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Ys.set(s[0],s[1],s[2]).length(),n=Ys.set(s[4],s[5],s[6]).length(),o=Ys.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Si.copy(this);let l=1/a,h=1/n,c=1/o;return Si.elements[0]*=l,Si.elements[1]*=l,Si.elements[2]*=l,Si.elements[4]*=h,Si.elements[5]*=h,Si.elements[6]*=h,Si.elements[8]*=c,Si.elements[9]*=c,Si.elements[10]*=c,t.setFromRotationMatrix(Si),i.x=a,i.y=n,i.z=o,this}makePerspective(e,t,i,s,r,a,n=wi,o=!1){let l=this.elements,h=2*r/(t-e),c=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s),p,_;if(o)p=r/(a-r),_=a*r/(a-r);else if(n===wi)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(n===oa)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+n);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,n=wi,o=!1){let l=this.elements,h=2/(t-e),c=2/(i-s),d=-(t+e)/(t-e),u=-(i+s)/(i-s),p,_;if(o)p=1/(a-r),_=a/(a-r);else if(n===wi)p=-2/(a-r),_=-(a+r)/(a-r);else if(n===oa)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+n);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=c,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},wa.prototype.isMatrix4=!0,wa),Ys=new I,Si=new st,yf=new I(0,0,0),_f=new I(1,1,1),ds=new I,Ra=new I,ui=new I,Ih=new st,Lh=new ns,Sr=class eu{constructor(t=0,i=0,s=0,r=eu.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,r=this._order){return this._x=t,this._y=i,this._z=s,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){let r=t.elements,a=r[0],n=r[4],o=r[8],l=r[1],h=r[5],c=r[9],d=r[2],u=r[6],p=r[10];switch(i){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-n,a)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-it(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-n,h)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-n,h));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-it(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-c,p),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ih,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sr.DEFAULT_ORDER="XYZ";zl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},xf=0,Nh=new I,Zs=new ns,Ji=new st,Ca=new I,kr=new I,Sf=new I,Mf=new ns,Uh=new I(1,0,0),Dh=new I(0,1,0),Oh=new I(0,0,1),Bh={type:"added"},bf={type:"removed"},Js={type:"childadded",child:null},oo={type:"childremoved",child:null},ai=class un extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();let t=new I,i=new Sr,s=new ns,r=new I(1,1,1);function a(){s.setFromEuler(i,!1)}function n(){i.setFromQuaternion(s,void 0,!1)}i._onChange(a),s._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new $e}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Zs.setFromAxisAngle(t,i),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(t,i){return Zs.setFromAxisAngle(t,i),this.quaternion.premultiply(Zs),this}rotateX(t){return this.rotateOnAxis(Uh,t)}rotateY(t){return this.rotateOnAxis(Dh,t)}rotateZ(t){return this.rotateOnAxis(Oh,t)}translateOnAxis(t,i){return Nh.copy(t).applyQuaternion(this.quaternion),this.position.add(Nh.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Uh,t)}translateY(t){return this.translateOnAxis(Dh,t)}translateZ(t){return this.translateOnAxis(Oh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Ca.copy(t):Ca.set(t,i,s);let r=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(kr,Ca,this.up):Ji.lookAt(Ca,kr,this.up),this.quaternion.setFromRotationMatrix(Ji),r&&(Ji.extractRotation(r.matrixWorld),Zs.setFromRotationMatrix(Ji),this.quaternion.premultiply(Zs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ve("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bh),Js.child=t,this.dispatchEvent(Js),Js.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(bf),oo.child=t,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bh),Js.child=t,this.dispatchEvent(Js),Js.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,r=this.children.length;s<r;s++){let a=this.children[s].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);let r=this.children;for(let a=0,n=r.length;a<n;a++)r[a].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,t,Sf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,Mf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,s=t.y,r=t.z,a=this.matrix.elements;a[12]+=i-a[0]*i-a[4]*s-a[8]*r,a[13]+=s-a[1]*i-a[5]*s-a[9]*r,a[14]+=r-a[2]*i-a[6]*s-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){let a=this.children;for(let n=0,o=a.length;n<o;n++)a[n].updateWorldMatrix(!1,!0,s)}}toJSON(t){let i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let d=l[h];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(a(t.materials,this.material[l]));r.material=o}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(a(t.animations,l))}}if(i){let o=n(t.geometries),l=n(t.materials),h=n(t.textures),c=n(t.images),d=n(t.shapes),u=n(t.skeletons),p=n(t.animations),_=n(t.nodes);o.length>0&&(s.geometries=o),l.length>0&&(s.materials=l),h.length>0&&(s.textures=h),c.length>0&&(s.images=c),d.length>0&&(s.shapes=d),u.length>0&&(s.skeletons=u),p.length>0&&(s.animations=p),_.length>0&&(s.nodes=_)}return s.object=r,s;function n(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){let r=t.children[s];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ai.DEFAULT_UP=new I(0,1,0),ai.DEFAULT_MATRIX_AUTO_UPDATE=!0,ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;nt=class extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tf={type:"move"},lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,n=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let x=t.getJointPose(_,i),m=this._getHandJoint(l,_);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],d=h.position.distanceTo(c.position),u=.02,p=.005;l.inputState.pinching&&d>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));n!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(n.matrix.fromArray(s.transform.matrix),n.matrix.decompose(n.position,n.rotation,n.scale),n.matrixWorldNeedsUpdate=!0,s.linearVelocity?(n.hasLinearVelocity=!0,n.linearVelocity.copy(s.linearVelocity)):n.hasLinearVelocity=!1,s.angularVelocity?(n.hasAngularVelocity=!0,n.angularVelocity.copy(s.angularVelocity)):n.hasAngularVelocity=!1,this.dispatchEvent(Tf)))}return n!==null&&(n.visible=s!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new nt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},Pa={h:0,s:0,l:0};qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ot.workingColorSpace){if(e=Bl(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=ho(a,r,e+1/3),this.g=ho(a,r,e),this.b=ho(a,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=jt){function i(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],n=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){let i=tu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return ot.workingToColorSpace($t.copy(this),e),Math.round(it($t.r*255,0,255))*65536+Math.round(it($t.g*255,0,255))*256+Math.round(it($t.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace($t.copy(this),t);let i=$t.r,s=$t.g,r=$t.b,a=Math.max(i,s,r),n=Math.min(i,s,r),o,l,h=(n+a)/2;if(n===a)o=0,l=0;else{let c=a-n;switch(l=h<=.5?c/(a+n):c/(2-a-n),a){case i:o=(s-r)/c+(s<r?6:0);break;case s:o=(r-i)/c+2;break;case r:o=(i-s)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=jt){ot.workingToColorSpace($t.copy(this),e);let t=$t.r,i=$t.g,s=$t.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+t,ps.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ps),e.getHSL(Pa);let i=ta(ps.h,Pa.h,t),s=ta(ps.s,Pa.s,t),r=ta(ps.l,Pa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new qe;qe.NAMES=tu;iu=class su{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new qe(t),this.density=i}clone(){return new su(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Mn=class extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sr,this.environmentIntensity=1,this.environmentRotation=new Sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Mi=new I,$i=new I,co=new I,Ki=new I,$s=new I,Ks=new I,Fh=new I,uo=new I,po=new I,fo=new I,mo=new Et,go=new Et,vo=new Et,Is=class dr{constructor(t=new I,i=new I,s=new I){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,r){r.subVectors(s,i),Mi.subVectors(t,i),r.cross(Mi);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(t,i,s,r,a){Mi.subVectors(r,i),$i.subVectors(s,i),co.subVectors(t,i);let n=Mi.dot(Mi),o=Mi.dot($i),l=Mi.dot(co),h=$i.dot($i),c=$i.dot(co),d=n*h-o*o;if(d===0)return a.set(0,0,0),null;let u=1/d,p=(h*l-o*c)*u,_=(n*c-o*l)*u;return a.set(1-p-_,_,p)}static containsPoint(t,i,s,r){return this.getBarycoord(t,i,s,r,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(t,i,s,r,a,n,o,l){return this.getBarycoord(t,i,s,r,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ki.x),l.addScaledVector(n,Ki.y),l.addScaledVector(o,Ki.z),l)}static getInterpolatedAttribute(t,i,s,r,a,n){return mo.setScalar(0),go.setScalar(0),vo.setScalar(0),mo.fromBufferAttribute(t,i),go.fromBufferAttribute(t,s),vo.fromBufferAttribute(t,r),n.setScalar(0),n.addScaledVector(mo,a.x),n.addScaledVector(go,a.y),n.addScaledVector(vo,a.z),n}static isFrontFacing(t,i,s,r){return Mi.subVectors(s,i),$i.subVectors(t,i),Mi.cross($i).dot(r)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,r){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,i,s,r){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),Mi.cross($i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return dr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,r,a){return dr.getInterpolation(t,this.a,this.b,this.c,i,s,r,a)}containsPoint(t){return dr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let s=this.a,r=this.b,a=this.c,n,o;$s.subVectors(r,s),Ks.subVectors(a,s),uo.subVectors(t,s);let l=$s.dot(uo),h=Ks.dot(uo);if(l<=0&&h<=0)return i.copy(s);po.subVectors(t,r);let c=$s.dot(po),d=Ks.dot(po);if(c>=0&&d<=c)return i.copy(r);let u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return n=l/(l-c),i.copy(s).addScaledVector($s,n);fo.subVectors(t,a);let p=$s.dot(fo),_=Ks.dot(fo);if(_>=0&&p<=_)return i.copy(a);let x=p*h-l*_;if(x<=0&&h>=0&&_<=0)return o=h/(h-_),i.copy(s).addScaledVector(Ks,o);let m=c*_-p*d;if(m<=0&&d-c>=0&&p-_>=0)return Fh.subVectors(a,r),o=(d-c)/(d-c+(p-_)),i.copy(r).addScaledVector(Fh,o);let f=1/(m+x+u);return n=x*f,o=u*f,i.copy(s).addScaledVector($s,n).addScaledVector(Ks,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_s=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,n=r.count;a<n;a++)e.isMesh===!0?e.getVertexPosition(a,bi):bi.fromBufferAttribute(r,a),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ia.copy(i.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),La.subVectors(this.max,Hr),Qs.subVectors(e.a,Hr),er.subVectors(e.b,Hr),tr.subVectors(e.c,Hr),fs.subVectors(er,Qs),ms.subVectors(tr,er),ws.subVectors(Qs,tr);let t=[0,-fs.z,fs.y,0,-ms.z,ms.y,0,-ws.z,ws.y,fs.z,0,-fs.x,ms.z,0,-ms.x,ws.z,0,-ws.x,-fs.y,fs.x,0,-ms.y,ms.x,0,-ws.y,ws.x,0];return!yo(t,Qs,er,tr,La)||(t=[1,0,0,0,1,0,0,0,1],!yo(t,Qs,er,tr,La))?!1:(Na.crossVectors(fs,ms),t=[Na.x,Na.y,Na.z],yo(t,Qs,er,tr,La))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Qi=[new I,new I,new I,new I,new I,new I,new I,new I],bi=new I,Ia=new _s,Qs=new I,er=new I,tr=new I,fs=new I,ms=new I,ws=new I,Hr=new I,La=new I,Na=new I,As=new I;_x=Ef();Ut=new I,Ua=new pe,wf=0,Xt=class extends Fs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$c,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ua.fromBufferAttribute(this,t),Ua.applyMatrix3(e),this.setXY(t,Ua.x,Ua.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},ru=class extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}},au=class extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},je=class extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Af=new _s,Gr=new I,_o=new I,xs=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Af.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);let t=Gr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Gr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(_o)),this.expandByPoint(Gr.copy(e.center).sub(_o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Rf=0,gi=new st,xo=new ai,ir=new I,di=new _s,Vr=new _s,Wt=new I,dt=class nu extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wp(t)?au:ru)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let s=this.attributes.normal;if(s!==void 0){let a=new $e().getNormalMatrix(t);s.applyNormalMatrix(a),s.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,i,s){return gi.makeTranslation(t,i,s),this.applyMatrix4(gi),this}scale(t,i,s){return gi.makeScale(t,i,s),this.applyMatrix4(gi),this}lookAt(t){return xo.lookAt(t),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let s=[];for(let r=0,a=t.length;r<a;r++){let n=t[r];s.push(n.x,n.y,n.z||0)}this.setAttribute("position",new je(s,3))}else{let s=Math.min(t.length,i.count);for(let r=0;r<s;r++){let a=t[r];i.setXYZ(r,a.x,a.y,a.z||0)}t.length>i.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _s);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,r=i.length;s<r;s++){let a=i[s];di.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let s=this.boundingSphere.center;if(di.setFromBufferAttribute(t),i)for(let a=0,n=i.length;a<n;a++){let o=i[a];Vr.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(di.min,Vr.min),di.expandByPoint(Wt),Wt.addVectors(di.max,Vr.max),di.expandByPoint(Wt)):(di.expandByPoint(Vr.min),di.expandByPoint(Vr.max))}di.getCenter(s);let r=0;for(let a=0,n=t.count;a<n;a++)Wt.fromBufferAttribute(t,a),r=Math.max(r,s.distanceToSquared(Wt));if(i)for(let a=0,n=i.length;a<n;a++){let o=i[a],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Wt.fromBufferAttribute(o,h),l&&(ir.fromBufferAttribute(t,h),Wt.add(ir)),r=Math.max(r,s.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let s=i.position,r=i.normal,a=i.uv,n=this.getAttribute("tangent");(n===void 0||n.count!==s.count)&&(n=new Xt(new Float32Array(4*s.count),4),this.setAttribute("tangent",n));let o=[],l=[];for(let v=0;v<s.count;v++)o[v]=new I,l[v]=new I;let h=new I,c=new I,d=new I,u=new pe,p=new pe,_=new pe,x=new I,m=new I;function f(v,M,U){h.fromBufferAttribute(s,v),c.fromBufferAttribute(s,M),d.fromBufferAttribute(s,U),u.fromBufferAttribute(a,v),p.fromBufferAttribute(a,M),_.fromBufferAttribute(a,U),c.sub(h),d.sub(h),p.sub(u),_.sub(u);let R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(x.copy(c).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(R),o[v].add(x),o[M].add(x),o[U].add(x),l[v].add(m),l[M].add(m),l[U].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,M=y.length;v<M;++v){let U=y[v],R=U.start,N=U.count;for(let j=R,D=R+N;j<D;j+=3)f(t.getX(j+0),t.getX(j+1),t.getX(j+2))}let b=new I,g=new I,S=new I,E=new I;function A(v){S.fromBufferAttribute(r,v),E.copy(S);let M=o[v];b.copy(M),b.sub(S.multiplyScalar(S.dot(M))).normalize(),g.crossVectors(E,M);let U=g.dot(l[v])<0?-1:1;n.setXYZW(v,b.x,b.y,b.z,U)}for(let v=0,M=y.length;v<M;++v){let U=y[v],R=U.start,N=U.count;for(let j=R,D=R+N;j<D;j+=3)A(t.getX(j+0)),A(t.getX(j+1)),A(t.getX(j+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Xt(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let u=0,p=s.count;u<p;u++)s.setXYZ(u,0,0,0);let r=new I,a=new I,n=new I,o=new I,l=new I,h=new I,c=new I,d=new I;if(t)for(let u=0,p=t.count;u<p;u+=3){let _=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);r.fromBufferAttribute(i,_),a.fromBufferAttribute(i,x),n.fromBufferAttribute(i,m),c.subVectors(n,a),d.subVectors(r,a),c.cross(d),o.fromBufferAttribute(s,_),l.fromBufferAttribute(s,x),h.fromBufferAttribute(s,m),o.add(c),l.add(c),h.add(c),s.setXYZ(_,o.x,o.y,o.z),s.setXYZ(x,l.x,l.y,l.z),s.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,p=i.count;u<p;u+=3)r.fromBufferAttribute(i,u+0),a.fromBufferAttribute(i,u+1),n.fromBufferAttribute(i,u+2),c.subVectors(n,a),d.subVectors(r,a),c.cross(d),s.setXYZ(u+0,c.x,c.y,c.z),s.setXYZ(u+1,c.x,c.y,c.z),s.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Wt.fromBufferAttribute(t,i),Wt.normalize(),t.setXYZ(i,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,d=o.normalized,u=new h.constructor(l.length*c),p=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*c;for(let f=0;f<c;f++)u[_++]=h[p++]}return new Xt(u,c,d)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new nu,s=this.index.array,r=this.attributes;for(let o in r){let l=r[o],h=t(l,s);i.setAttribute(o,h)}let a=this.morphAttributes;for(let o in a){let l=[],h=a[o];for(let c=0,d=h.length;c<d;c++){let u=h[c],p=t(u,s);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let n=this.groups;for(let o=0,l=n.length;o<l;o++){let h=n[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let s=this.attributes;for(let l in s){let h=s[l];t.data.attributes[l]=h.toJSON(t.data)}let r={},a=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){let p=h[d];c.push(p.toJSON(t.data))}c.length>0&&(r[l]=c,a=!0)}a&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let n=this.groups;n.length>0&&(t.data.groups=JSON.parse(JSON.stringify(n)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let s=t.index;s!==null&&this.setIndex(s.clone());let r=t.attributes;for(let h in r){let c=r[h];this.setAttribute(h,c.clone(i))}let a=t.morphAttributes;for(let h in a){let c=[],d=a[h];for(let u=0,p=d.length;u<p;u++)c.push(d[u].clone(i));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let n=t.groups;for(let h=0,c=n.length;h<c;h++){let d=n[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cf=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$c,this.updateRanges=[],this.version=0,this.uuid=Wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},si=new I,zh=class ou{constructor(t,i,s,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)si.fromBufferAttribute(this,i),si.applyMatrix4(t),this.setXYZ(i,si.x,si.y,si.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)si.fromBufferAttribute(this,i),si.applyNormalMatrix(t),this.setXYZ(i,si.x,si.y,si.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)si.fromBufferAttribute(this,i),si.transformDirection(t),this.setXYZ(i,si.x,si.y,si.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Ti(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=vt(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ti(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ti(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ti(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ti(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=vt(i,this.array),s=vt(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=r,this}setXYZW(t,i,s,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array),a=vt(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=r,this.data.array[t+3]=a,this}clone(t){if(t===void 0){_n("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let s=0;s<this.count;s++){let r=s*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)i.push(this.data.array[r+a])}return new Xt(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ou(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){_n("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let s=0;s<this.count;s++){let r=s*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)i.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},So=new I,Pf=new I,If=new $e,vs=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=So.subVectors(i,t).cross(Pf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(So),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||If.getNormalMatrix(e),s=this.coplanarPoint(So).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Lf=0,zs=class extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=ea,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=Dc,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=io,this.stencilZFail=io,this.stencilZPass=io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let n in r){let o=r[n];delete o.metadata,a.push(o)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new vs().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new pe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ci=class extends zs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wr=new I,rr=new I,ar=new I,nr=new pe,jr=new pe,lu=new st,Da=new I,Xr=new I,Oa=new I,kh=new pe,Mo=new pe,Hh=new pe,qi=class extends ai{constructor(e=new Ci){if(super(),this.isSprite=!0,this.type="Sprite",sr===void 0){sr=new dt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Cf(t,5);sr.setIndex([0,1,2,0,2,3]),sr.setAttribute("position",new zh(i,3,0,!1)),sr.setAttribute("uv",new zh(i,2,3,!1))}this.geometry=sr,this.material=e,this.center=new pe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rr.setFromMatrixScale(this.matrixWorld),lu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ar.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rr.multiplyScalar(-ar.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Ba(Da.set(-.5,-.5,0),ar,a,rr,s,r),Ba(Xr.set(.5,-.5,0),ar,a,rr,s,r),Ba(Oa.set(.5,.5,0),ar,a,rr,s,r),kh.set(0,0),Mo.set(1,0),Hh.set(1,1);let n=e.ray.intersectTriangle(Da,Xr,Oa,!1,Wr);if(n===null&&(Ba(Xr.set(-.5,.5,0),ar,a,rr,s,r),Mo.set(0,1),n=e.ray.intersectTriangle(Da,Oa,Xr,!1,Wr),n===null))return;let o=e.ray.origin.distanceTo(Wr);o<e.near||o>e.far||t.push({distance:o,point:Wr.clone(),uv:Is.getInterpolation(Wr,Da,Xr,Oa,kh,Mo,Hh,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};xx=new I,Sx=new I,es=new I,bo=new I,Fa=new I,za=new I,pa=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,es)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=es.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(es.copy(this.origin).addScaledVector(this.direction,t),es.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){bo.copy(e).add(t).multiplyScalar(.5),Fa.copy(t).sub(e).normalize(),za.copy(this.origin).sub(bo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Fa),n=za.dot(this.direction),o=-za.dot(Fa),l=za.lengthSq(),h=Math.abs(1-a*a),c,d,u,p;if(h>0)if(c=a*o-n,d=a*n-o,p=r*h,c>=0)if(d>=-p)if(d<=p){let _=1/h;c*=_,d*=_,u=c*(c+a*d+2*n)+d*(a*c+d+2*o)+l}else d=r,c=Math.max(0,-(a*d+n)),u=-c*c+d*(d+2*o)+l;else d=-r,c=Math.max(0,-(a*d+n)),u=-c*c+d*(d+2*o)+l;else d<=-p?(c=Math.max(0,-(-a*r+n)),d=c>0?-r:Math.min(Math.max(-r,-o),r),u=-c*c+d*(d+2*o)+l):d<=p?(c=0,d=Math.min(Math.max(-r,-o),r),u=d*(d+2*o)+l):(c=Math.max(0,-(a*r+n)),d=c>0?r:Math.min(Math.max(-r,-o),r),u=-c*c+d*(d+2*o)+l);else d=a>0?-r:r,c=Math.max(0,-(a*d+n)),u=-c*c+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),s&&s.copy(bo).addScaledVector(Fa,d),u}intersectSphere(e,t){if(e.radius<0)return null;es.subVectors(e.center,this.origin);let i=es.dot(this.direction),s=es.dot(es)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),n=i-a,o=i+a;return o<0?null:n<0?this.at(o,t):this.at(n,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,n,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),c>=0?(n=(e.min.z-d.z)*c,o=(e.max.z-d.z)*c):(n=(e.max.z-d.z)*c,o=(e.min.z-d.z)*c),i>o||n>s)||((n>i||i!==i)&&(i=n),(o<s||s!==s)&&(s=o),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,es)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,n=this.direction,o=n.x,l=n.y,h=n.z,c=e.x-a.x,d=e.y-a.y,u=e.z-a.z,p=t.x-a.x,_=t.y-a.y,x=t.z-a.z,m=i.x-a.x,f=i.y-a.y,y=i.z-a.z,b=Math.abs(o),g=Math.abs(l),S=Math.abs(h),E,A,v,M,U,R,N,j,D,X,K,Z;if(b>=g&&b>=S?(v=o,R=c,D=p,Z=m,o>=0?(E=l,A=h,M=d,U=u,N=_,j=x,X=f,K=y):(E=h,A=l,M=u,U=d,N=x,j=_,X=y,K=f)):g>=S?(v=l,R=d,D=_,Z=f,l>=0?(E=h,A=o,M=u,U=c,N=x,j=p,X=y,K=m):(E=o,A=h,M=c,U=u,N=p,j=x,X=m,K=y)):(v=h,R=u,D=x,Z=y,h>=0?(E=o,A=l,M=c,U=d,N=p,j=_,X=m,K=f):(E=l,A=o,M=d,U=c,N=_,j=p,X=f,K=m)),v===0)return null;let ye=E/v,Q=A/v,ie=1/v,ue=M-ye*R,He=U-Q*R,Ne=N-ye*D,pt=j-Q*D,Ze=X-ye*Z,ee=K-Q*Z,he=Ze*pt-ee*Ne,me=ue*ee-He*Ze,Be=Ne*He-pt*ue;if(s){if(he<0||me<0||Be<0)return null}else if((he<0||me<0||Be<0)&&(he>0||me>0||Be>0))return null;let Ce=he+me+Be;if(Ce===0)return null;let Se=ie*(he*R+me*D+Be*Z);return(Ce>0?Se<0:Se>0)?null:this.at(Se/Ce,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pi=class extends zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gh=new st,Rs=new pa,ka=new xs,Vh=new I,Ha=new I,Ga=new I,Va=new I,To=new I,Wa=new I,Wh=new I,ja=new I,ht=class extends ai{constructor(e=new dt,t=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let n=this.morphTargetInfluences;if(r&&n){Wa.set(0,0,0);for(let o=0,l=r.length;o<l;o++){let h=n[o],c=r[o];h!==0&&(To.fromBufferAttribute(c,e),a?Wa.addScaledVector(To,h):Wa.addScaledVector(To.sub(t),h))}t.add(Wa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(r),Rs.copy(e.ray).recast(e.near),!(ka.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(ka,Vh)===null||Rs.origin.distanceToSquared(Vh)>(e.far-e.near)**2))&&(Gh.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(Gh),!(i.boundingBox!==null&&Rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,n=r.index,o=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,c=r.attributes.normal,d=r.groups,u=r.drawRange;if(n!==null)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){let x=d[p],m=a[x.materialIndex],f=Math.max(x.start,u.start),y=Math.min(n.count,Math.min(x.start+x.count,u.start+u.count));for(let b=f,g=y;b<g;b+=3){let S=n.getX(b),E=n.getX(b+1),A=n.getX(b+2);s=Xa(this,m,e,i,l,h,c,S,E,A),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),_=Math.min(n.count,u.start+u.count);for(let x=p,m=_;x<m;x+=3){let f=n.getX(x),y=n.getX(x+1),b=n.getX(x+2);s=Xa(this,a,e,i,l,h,c,f,y,b),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){let x=d[p],m=a[x.materialIndex],f=Math.max(x.start,u.start),y=Math.min(o.count,Math.min(x.start+x.count,u.start+u.count));for(let b=f,g=y;b<g;b+=3){let S=b,E=b+1,A=b+2;s=Xa(this,m,e,i,l,h,c,S,E,A),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let x=p,m=_;x<m;x+=3){let f=x,y=x+1,b=x+2;s=Xa(this,a,e,i,l,h,c,f,y,b),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};Mx=new Et,bx=new Et,Tx=new Et,Ex=new Et,wx=new st,Ax=new I,Rx=new xs,Cx=new st,Px=new pa,Uf=class extends yi{constructor(e=null,t=1,i=1,s,r,a,n,o,l=Zt,h=Zt,c,d){super(null,a,n,o,l,h,s,r,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ix=new st,Lx=new st,Nx=new st,Ux=new st,Dx=new _s,Ox=new st,Bx=new ht,Fx=new xs,Cs=new xs,Df=new pe(.5,.5),qa=new I,Mr=class{constructor(e=new vs,t=new vs,i=new vs,s=new vs,r=new vs,a=new vs){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let n=this.planes;return n[0].copy(e),n[1].copy(t),n[2].copy(i),n[3].copy(s),n[4].copy(r),n[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wi,i=!1){let s=this.planes,r=e.elements,a=r[0],n=r[1],o=r[2],l=r[3],h=r[4],c=r[5],d=r[6],u=r[7],p=r[8],_=r[9],x=r[10],m=r[11],f=r[12],y=r[13],b=r[14],g=r[15];if(s[0].setComponents(l-a,u-h,m-p,g-f).normalize(),s[1].setComponents(l+a,u+h,m+p,g+f).normalize(),s[2].setComponents(l+n,u+c,m+_,g+y).normalize(),s[3].setComponents(l-n,u-c,m-_,g-y).normalize(),i)s[4].setComponents(o,d,x,b).normalize(),s[5].setComponents(l-o,u-d,m-x,g-b).normalize();else if(s[4].setComponents(l-o,u-d,m-x,g-b).normalize(),t===wi)s[5].setComponents(l+o,u+d,m+x,g+b).normalize();else if(t===oa)s[5].setComponents(o,d,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){Cs.center.set(0,0,0);let t=Df.distanceTo(e.center);return Cs.radius=.7071067811865476+t,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(qa.x=s.normal.x>0?e.max.x:e.min.x,qa.y=s.normal.y>0?e.max.y:e.min.y,qa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},jh=new st,Of=class hu{constructor(){this.coordinateSystem=wi,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,s=this._frustums;for(let r=0;r<i.length;r++){let a=i[r];jh.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),s[r]===void 0&&(s[r]=new Mr),s[r].setFromProjectionMatrix(jh,a.coordinateSystem,a.reversedDepth)}return this._count=i.length,this}intersectsObject(t){let i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,s=t._frustums;for(let r=0;r<t._count;r++)i[r]===void 0&&(i[r]=new Mr),i[r].copy(s[r]);return this._count=t._count,this}clone(){return new hu().copy(this)}},Bf=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,s){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let n=r[this.index];a.push(n),this.index++,n.start=e,n.count=t,n.z=i,n.index=s}reset(){this.list.length=0,this.index=0}},zx=new st,kx=new qe(1,1,1),Hx=new Mr,Gx=new Of,Vx=new _s,Wx=new xs,jx=new I,Xx=new I,qx=new I,Yx=new Bf,Zx=new ht,Jx=new I,$x=new I,Kx=new st,Qx=new pa,e1=new xs,t1=new I,i1=new I,s1=new I,r1=new I,ks=class extends zs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xh=new st,bl=new pa,Ya=new xs,Za=new I,wr=class extends ai{constructor(e=new dt,t=new ks){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(s),Ya.radius+=r,e.ray.intersectsSphere(Ya)===!1)return;Xh.copy(s).invert(),bl.copy(e.ray).applyMatrix4(Xh);let n=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=n*n,l=i.index,h=i.attributes.position;if(l!==null){let c=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let u=c,p=d;u<p;u++){let _=l.getX(u);Za.fromBufferAttribute(h,_),qh(Za,_,o,s,e,t,this)}}else{let c=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let u=c,p=d;u<p;u++)Za.fromBufferAttribute(h,u),qh(Za,u,o,s,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};cu=class extends yi{constructor(e=[],t=Ds,i,s,r,a,n,o,l,h){super(e,t,i,s,r,a,n,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ss=class extends yi{constructor(e,t,i,s,r,a,n,o,l){super(e,t,i,s,r,a,n,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ha=class extends yi{constructor(e,t,i=ji,s,r,a,n=Zt,o=Zt,l,h=as,c=1){if(h!==as&&h!==Ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:c};super(d,s,r,a,n,o,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ff=class extends ha{constructor(e,t=ji,i=Ds,s,r,a=Zt,n=Zt,o,l=as){let h={width:e,height:e,depth:1},c=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,n,o,l),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},uu=class extends yi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ms=class du extends dt{constructor(t=1,i=1,s=1,r=1,a=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:r,heightSegments:a,depthSegments:n};let o=this;r=Math.floor(r),a=Math.floor(a),n=Math.floor(n);let l=[],h=[],c=[],d=[],u=0,p=0;_("z","y","x",-1,-1,s,i,t,n,a,0),_("z","y","x",1,-1,s,i,-t,n,a,1),_("x","z","y",1,1,t,s,i,r,n,2),_("x","z","y",1,-1,t,s,-i,r,n,3),_("x","y","z",1,-1,t,i,s,r,a,4),_("x","y","z",-1,-1,t,i,-s,r,a,5),this.setIndex(l),this.setAttribute("position",new je(h,3)),this.setAttribute("normal",new je(c,3)),this.setAttribute("uv",new je(d,2));function _(x,m,f,y,b,g,S,E,A,v,M){let U=g/A,R=S/v,N=g/2,j=S/2,D=E/2,X=A+1,K=v+1,Z=0,ye=0,Q=new I;for(let ie=0;ie<K;ie++){let ue=ie*R-j;for(let He=0;He<X;He++){let Ne=He*U-N;Q[x]=Ne*y,Q[m]=ue*b,Q[f]=D,h.push(Q.x,Q.y,Q.z),Q[x]=0,Q[m]=0,Q[f]=E>0?1:-1,c.push(Q.x,Q.y,Q.z),d.push(He/A),d.push(1-ie/v),Z+=1}}for(let ie=0;ie<v;ie++)for(let ue=0;ue<A;ue++){let He=u+ue+X*ie,Ne=u+ue+X*(ie+1),pt=u+(ue+1)+X*(ie+1),Ze=u+(ue+1)+X*ie;l.push(He,Ne,Ze),l.push(Ne,pt,Ze),ye+=6}o.addGroup(p,ye,M),p+=ye,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new du(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},kl=class pu extends dt{constructor(t=1,i=1,s=4,r=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:s,radialSegments:r,heightSegments:a},i=Math.max(0,i),s=Math.max(1,Math.floor(s)),r=Math.max(3,Math.floor(r)),a=Math.max(1,Math.floor(a));let n=[],o=[],l=[],h=[],c=i/2,d=Math.PI/2*t,u=i,p=2*d+u,_=s*2+a,x=r+1,m=new I,f=new I;for(let y=0;y<=_;y++){let b=0,g=0,S=0,E=0;if(y<=s){let M=y/s,U=M*Math.PI/2;g=-c-t*Math.cos(U),S=t*Math.sin(U),E=-t*Math.cos(U),b=M*d}else if(y<=s+a){let M=(y-s)/a;g=-c+M*i,S=t,E=0,b=d+M*u}else{let M=(y-s-a)/s,U=M*Math.PI/2;g=c+t*Math.sin(U),S=t*Math.cos(U),E=t*Math.sin(U),b=d+u+M*d}let A=Math.max(0,Math.min(1,b/p)),v=0;y===0?v=.5/r:y===_&&(v=-.5/r);for(let M=0;M<=r;M++){let U=M/r,R=U*Math.PI*2,N=Math.sin(R),j=Math.cos(R);f.x=-S*j,f.y=g,f.z=S*N,o.push(f.x,f.y,f.z),m.set(-S*j,E,S*N),m.normalize(),l.push(m.x,m.y,m.z),h.push(U+v,A)}if(y>0){let M=(y-1)*x;for(let U=0;U<r;U++){let R=M+U,N=M+U+1,j=y*x+U,D=y*x+U+1;n.push(R,N,j),n.push(N,D,j)}}}this.setIndex(n),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pu(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},zf=class fu extends dt{constructor(t=1,i=32,s=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:s,thetaLength:r},i=Math.max(3,i);let a=[],n=[],o=[],l=[],h=new I,c=new pe;n.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=i;d++,u+=3){let p=s+d/i*r;h.x=t*Math.cos(p),h.y=t*Math.sin(p),n.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(n[u]/t+1)/2,c.y=(n[u+1]/t+1)/2,l.push(c.x,c.y)}for(let d=1;d<=i;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new je(n,3)),this.setAttribute("normal",new je(o,3)),this.setAttribute("uv",new je(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fu(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ar=class mu extends dt{constructor(t=1,i=1,s=1,r=32,a=1,n=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:o,thetaLength:l};let h=this;r=Math.floor(r),a=Math.floor(a);let c=[],d=[],u=[],p=[],_=0,x=[],m=s/2,f=0;y(),n===!1&&(t>0&&b(!0),i>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new je(d,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(p,2));function y(){let g=new I,S=new I,E=0,A=(i-t)/s;for(let v=0;v<=a;v++){let M=[],U=v/a,R=U*(i-t)+t;for(let N=0;N<=r;N++){let j=N/r,D=j*l+o,X=Math.sin(D),K=Math.cos(D);S.x=R*X,S.y=-U*s+m,S.z=R*K,d.push(S.x,S.y,S.z),g.set(X,A,K).normalize(),u.push(g.x,g.y,g.z),p.push(j,1-U),M.push(_++)}x.push(M)}for(let v=0;v<r;v++)for(let M=0;M<a;M++){let U=x[M][v],R=x[M+1][v],N=x[M+1][v+1],j=x[M][v+1];(t>0||M!==0)&&(c.push(U,R,j),E+=3),(i>0||M!==a-1)&&(c.push(R,N,j),E+=3)}h.addGroup(f,E,0),f+=E}function b(g){let S=_,E=new pe,A=new I,v=0,M=g===!0?t:i,U=g===!0?1:-1;for(let N=1;N<=r;N++)d.push(0,m*U,0),u.push(0,U,0),p.push(.5,.5),_++;let R=_;for(let N=0;N<=r;N++){let j=N/r*l+o,D=Math.cos(j),X=Math.sin(j);A.x=M*X,A.y=m*U,A.z=M*D,d.push(A.x,A.y,A.z),u.push(0,U,0),E.x=D*.5+.5,E.y=X*.5*U+.5,p.push(E.x,E.y),_++}for(let N=0;N<r;N++){let j=S+N,D=R+N;g===!0?c.push(D,D+1,j):c.push(D+1,D,j),v+=3}h.addGroup(f,v,g===!0?1:2),f+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fa=class gu extends Ar{constructor(t=1,i=1,s=32,r=1,a=!1,n=0,o=Math.PI*2){super(0,t,i,s,r,a,n,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:n,thetaLength:o}}static fromJSON(t){return new gu(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ma=class vu extends dt{constructor(t=[],i=[],s=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:r};let a=[],n=[];o(r),h(s),c(),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(a.slice(),3)),this.setAttribute("uv",new je(n,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let b=new I,g=new I,S=new I;for(let E=0;E<i.length;E+=3)p(i[E+0],b),p(i[E+1],g),p(i[E+2],S),l(b,g,S,y)}function l(y,b,g,S){let E=S+1,A=[];for(let v=0;v<=E;v++){A[v]=[];let M=y.clone().lerp(g,v/E),U=b.clone().lerp(g,v/E),R=E-v;for(let N=0;N<=R;N++)N===0&&v===E?A[v][N]=M:A[v][N]=M.clone().lerp(U,N/R)}for(let v=0;v<E;v++)for(let M=0;M<2*(E-v)-1;M++){let U=Math.floor(M/2);M%2===0?(u(A[v][U+1]),u(A[v+1][U]),u(A[v][U])):(u(A[v][U+1]),u(A[v+1][U+1]),u(A[v+1][U]))}}function h(y){let b=new I;for(let g=0;g<a.length;g+=3)b.x=a[g+0],b.y=a[g+1],b.z=a[g+2],b.normalize().multiplyScalar(y),a[g+0]=b.x,a[g+1]=b.y,a[g+2]=b.z}function c(){let y=new I;for(let b=0;b<a.length;b+=3){y.x=a[b+0],y.y=a[b+1],y.z=a[b+2];let g=m(y)/2/Math.PI+.5,S=f(y)/Math.PI+.5;n.push(g,1-S)}_(),d()}function d(){for(let y=0;y<n.length;y+=6){let b=n[y+0],g=n[y+2],S=n[y+4],E=Math.max(b,g,S),A=Math.min(b,g,S);E>.9&&A<.1&&(b<.2&&(n[y+0]+=1),g<.2&&(n[y+2]+=1),S<.2&&(n[y+4]+=1))}}function u(y){a.push(y.x,y.y,y.z)}function p(y,b){let g=y*3;b.x=t[g+0],b.y=t[g+1],b.z=t[g+2]}function _(){let y=new I,b=new I,g=new I,S=new I,E=new pe,A=new pe,v=new pe;for(let M=0,U=0;M<a.length;M+=9,U+=6){y.set(a[M+0],a[M+1],a[M+2]),b.set(a[M+3],a[M+4],a[M+5]),g.set(a[M+6],a[M+7],a[M+8]),E.set(n[U+0],n[U+1]),A.set(n[U+2],n[U+3]),v.set(n[U+4],n[U+5]),S.copy(y).add(b).add(g).divideScalar(3);let R=m(S);x(E,U+0,y,R),x(A,U+2,b,R),x(v,U+4,g,R)}}function x(y,b,g,S){S<0&&y.x===1&&(n[b]=y.x-1),g.x===0&&g.z===0&&(n[b]=S/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vu(t.vertices,t.indices,t.radius,t.detail)}},kf=class yu extends ma{constructor(t=1,i=0){let s=(1+Math.sqrt(5))/2,r=1/s,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-s,0,-r,s,0,r,-s,0,r,s,-r,-s,0,-r,s,0,r,-s,0,r,s,0,-s,0,-r,s,0,-r,-s,0,r,s,0,r],n=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,n,t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new yu(t.radius,t.detail)}},Ja=new I,$a=new I,Eo=new I,Ka=new Is,Hf=class extends dt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(vr*t),r=e.getIndex(),a=e.getAttribute("position"),n=r?r.count:a.count,o=[0,0,0],l=["a","b","c"],h=new Array(3),c={},d=[];for(let u=0;u<n;u+=3){r?(o[0]=r.getX(u),o[1]=r.getX(u+1),o[2]=r.getX(u+2)):(o[0]=u,o[1]=u+1,o[2]=u+2);let{a:p,b:_,c:x}=Ka;if(p.fromBufferAttribute(a,o[0]),_.fromBufferAttribute(a,o[1]),x.fromBufferAttribute(a,o[2]),Ka.getNormal(Eo),h[0]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[1]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[2]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let m=0;m<3;m++){let f=(m+1)%3,y=h[m],b=h[f],g=Ka[l[m]],S=Ka[l[f]],E=`${y}_${b}`,A=`${b}_${y}`;A in c&&c[A]?(Eo.dot(c[A].normal)<=s&&(d.push(g.x,g.y,g.z),d.push(S.x,S.y,S.z)),c[A]=null):E in c||(c[E]={index0:o[m],index1:o[f],normal:Eo.clone()})}}for(let u in c)if(c[u]){let{index0:p,index1:_}=c[u];Ja.fromBufferAttribute(a,p),$a.fromBufferAttribute(a,_),d.push(Ja.x,Ja.y,Ja.z),d.push($a.x,$a.y,$a.z)}this.setAttribute("position",new je(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Yi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let n=0,o=r-1,l;for(;n<=o;)if(s=Math.floor(n+(o-n)/2),l=i[s]-a,l<0)n=s+1;else if(l>0)o=s-1;else{o=s;break}if(s=o,i[s]===a)return s/(r-1);let h=i[s],c=i[s+1]-h,d=(a-h)/c;return(s+d)/(r-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let r=this.getPoint(i),a=this.getPoint(s),n=t||(r.isVector2?new pe:new I);return n.copy(a).sub(r).normalize(),n}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new I,s=[],r=[],a=[],n=new I,o=new st;for(let u=0;u<=e;u++){let p=u/e;s[u]=this.getTangentAt(p,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),c=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),d<=l&&i.set(0,0,1),n.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],n),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),n.crossVectors(s[u-1],s[u]),n.length()>Number.EPSILON){n.normalize();let p=Math.acos(it(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(o.makeRotationAxis(n,p))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(it(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(n.crossVectors(r[0],r[e]))>0&&(u=-u);for(let p=1;p<=e;p++)r[p].applyMatrix4(o.makeRotationAxis(s[p],u*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Hl=class extends Yi{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,n=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=n,this.aRotation=o}getPoint(e,t=new pe){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let n=this.aStartAngle+e*r,o=this.aX+this.xRadius*Math.cos(n),l=this.aY+this.yRadius*Math.sin(n);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*h-u*c+this.aX,l=d*c+u*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Gf=class extends Hl{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};Yh=new I,Zh=new I,wo=new Gl,Ao=new Gl,Ro=new Gl,Vf=class extends Yi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,n=Math.floor(a),o=a-n;this.closed?n+=n>0?0:(Math.floor(Math.abs(n)/r)+1)*r:o===0&&n===r-1&&(n=r-2,o=1);let l,h;this.closed||n>0?l=s[(n-1)%r]:(Zh.subVectors(s[0],s[1]).add(s[0]),l=Zh);let c=s[n%r],d=s[(n+1)%r];if(this.closed||n+2<r?h=s[(n+2)%r]:(Yh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yh),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(c),u),_=Math.pow(c.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(h),u);_<1e-4&&(_=1),p<1e-4&&(p=_),x<1e-4&&(x=_),wo.initNonuniformCatmullRom(l.x,c.x,d.x,h.x,p,_,x),Ao.initNonuniformCatmullRom(l.y,c.y,d.y,h.y,p,_,x),Ro.initNonuniformCatmullRom(l.z,c.z,d.z,h.z,p,_,x)}else this.curveType==="catmullrom"&&(wo.initCatmullRom(l.x,c.x,d.x,h.x,this.tension),Ao.initCatmullRom(l.y,c.y,d.y,h.y,this.tension),Ro.initCatmullRom(l.z,c.z,d.z,h.z,this.tension));return i.set(wo.calc(o),Ao.calc(o),Ro.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};_u=class extends Yi{constructor(e=new pe,t=new pe,i=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new pe){let i=t,s=this.v0,r=this.v1,a=this.v2,n=this.v3;return i.set(sa(e,s.x,r.x,a.x,n.x),sa(e,s.y,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$f=class extends Yi{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,a=this.v2,n=this.v3;return i.set(sa(e,s.x,r.x,a.x,n.x),sa(e,s.y,r.y,a.y,n.y),sa(e,s.z,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xu=class extends Yi{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kf=class extends Yi{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Su=class extends Yi{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(ia(e,s.x,r.x,a.x),ia(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mu=class extends Yi{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(ia(e,s.x,r.x,a.x),ia(e,s.y,r.y,a.y),ia(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bu=class extends Yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),n=r-a,o=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],c=s[a>s.length-3?s.length-1:a+2];return i.set(Jh(n,o.x,l.x,h.x,c.x),Jh(n,o.y,l.y,h.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new pe().fromArray(s))}return this}},xn=Object.freeze({__proto__:null,ArcCurve:Gf,CatmullRomCurve3:Vf,CubicBezierCurve:_u,CubicBezierCurve3:$f,EllipseCurve:Hl,LineCurve:xu,LineCurve3:Kf,QuadraticBezierCurve:Su,QuadraticBezierCurve3:Mu,SplineCurve:bu}),Qf=class extends Yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xn[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,n=this.curves[r],o=n.getLength(),l=o===0?0:1-a/o;return n.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],n=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,o=a.getPoints(n);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new xn[s.type]().fromJSON(s))}return this}},$h=class extends Qf{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new xu(this.currentPoint.clone(),new pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Su(this.currentPoint.clone(),new pe(e,t),new pe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let n=new _u(this.currentPoint.clone(),new pe(e,t),new pe(i,s),new pe(r,a));return this.curves.push(n),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new bu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let n=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+n,t+o,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,n,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,a,n,o),this}absellipse(e,t,i,s,r,a,n,o){let l=new Hl(e,t,i,s,r,a,n,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Rr=class extends $h{constructor(e){super(e),this.uuid=Wi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new $h().fromJSON(s))}return this}};vm=class{static triangulate(e,t,i=2){return em(e,t,i)}},Us=class Ru{static area(t){let i=t.length,s=0;for(let r=i-1,a=0;a<i;r=a++)s+=t[r].x*t[a].y-t[a].x*t[r].y;return s*.5}static isClockWise(t){return Ru.area(t)<0}static triangulateShape(t,i){let s=[],r=[],a=[];Qh(t),ec(s,t);let n=t.length;i.forEach(Qh);for(let l=0;l<i.length;l++)r.push(n),n+=i[l].length,ec(s,i[l]);let o=vm.triangulate(s,r);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};ga=class Cu extends dt{constructor(t=new Rr([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let s=this,r=[],a=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];n(h)}this.setAttribute("position",new je(r,3)),this.setAttribute("uv",new je(a,2)),this.computeVertexNormals();function n(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,c=i.steps!==void 0?i.steps:1,d=i.depth!==void 0?i.depth:1,u=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:.2,_=i.bevelSize!==void 0?i.bevelSize:p-.1,x=i.bevelOffset!==void 0?i.bevelOffset:0,m=i.bevelSegments!==void 0?i.bevelSegments:3,f=i.extrudePath,y=i.UVGenerator!==void 0?i.UVGenerator:ym,b,g=!1,S,E,A,v;if(f){b=f.getSpacedPoints(c),g=!0,u=!1;let le=f.isCatmullRomCurve3?f.closed:!1;S=f.computeFrenetFrames(c,le),E=new I,A=new I,v=new I}u||(m=0,p=0,_=0,x=0);let M=o.extractPoints(h),U=M.shape,R=M.holes;if(!Us.isClockWise(U)){U=U.reverse();for(let le=0,oe=R.length;le<oe;le++){let fe=R[le];Us.isClockWise(fe)&&(R[le]=fe.reverse())}}function N(le){let oe=10000000000000001e-36,fe=le[0];for(let we=1;we<=le.length;we++){let Re=we%le.length,Le=le[Re],ze=Le.x-fe.x,Xe=Le.y-fe.y,Je=ze*ze+Xe*Xe,z=Math.max(Math.abs(Le.x),Math.abs(Le.y),Math.abs(fe.x),Math.abs(fe.y)),ft=oe*z*z;if(Je<=ft){le.splice(Re,1),we--;continue}fe=Le}}N(U),R.forEach(N);let j=R.length,D=U;for(let le=0;le<j;le++){let oe=R[le];U=U.concat(oe)}function X(le,oe,fe){return oe||Ve("ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(oe,fe)}let K=U.length;function Z(le,oe,fe){let we,Re,Le,ze=le.x-oe.x,Xe=le.y-oe.y,Je=fe.x-le.x,z=fe.y-le.y,ft=ze*ze+Xe*Xe,Ke=ze*z-Xe*Je;if(Math.abs(Ke)>Number.EPSILON){let tt=Math.sqrt(ft),P=Math.sqrt(Je*Je+z*z),T=oe.x-Xe/tt,H=oe.y+ze/tt,J=fe.x-z/P,L=fe.y+Je/P,O=((J-T)*z-(L-H)*Je)/(ze*z-Xe*Je);we=T+ze*O-le.x,Re=H+Xe*O-le.y;let B=we*we+Re*Re;if(B<=2)return new pe(we,Re);Le=Math.sqrt(B/2)}else{let tt=!1;ze>Number.EPSILON?Je>Number.EPSILON&&(tt=!0):ze<-Number.EPSILON?Je<-Number.EPSILON&&(tt=!0):Math.sign(Xe)===Math.sign(z)&&(tt=!0),tt?(we=-Xe,Re=ze,Le=Math.sqrt(ft)):(we=ze,Re=Xe,Le=Math.sqrt(ft/2))}return new pe(we/Le,Re/Le)}let ye=[];for(let le=0,oe=D.length,fe=oe-1,we=le+1;le<oe;le++,fe++,we++)fe===oe&&(fe=0),we===oe&&(we=0),ye[le]=Z(D[le],D[fe],D[we]);let Q=[],ie,ue=ye.concat();for(let le=0,oe=j;le<oe;le++){let fe=R[le];ie=[];for(let we=0,Re=fe.length,Le=Re-1,ze=we+1;we<Re;we++,Le++,ze++)Le===Re&&(Le=0),ze===Re&&(ze=0),ie[we]=Z(fe[we],fe[Le],fe[ze]);Q.push(ie),ue=ue.concat(ie)}let He;if(m===0)He=Us.triangulateShape(D,R);else{let le=[],oe=[];for(let fe=0;fe<m;fe++){let we=fe/m,Re=p*Math.cos(we*Math.PI/2),Le=_*Math.sin(we*Math.PI/2)+x;for(let ze=0,Xe=D.length;ze<Xe;ze++){let Je=X(D[ze],ye[ze],Le);me(Je.x,Je.y,-Re),we===0&&le.push(Je)}for(let ze=0,Xe=j;ze<Xe;ze++){let Je=R[ze];ie=Q[ze];let z=[];for(let ft=0,Ke=Je.length;ft<Ke;ft++){let tt=X(Je[ft],ie[ft],Le);me(tt.x,tt.y,-Re),we===0&&z.push(tt)}we===0&&oe.push(z)}}He=Us.triangulateShape(le,oe)}let Ne=He.length,pt=_+x;for(let le=0;le<K;le++){let oe=u?X(U[le],ue[le],pt):U[le];g?(A.copy(S.normals[0]).multiplyScalar(oe.x),E.copy(S.binormals[0]).multiplyScalar(oe.y),v.copy(b[0]).add(A).add(E),me(v.x,v.y,v.z)):me(oe.x,oe.y,0)}for(let le=1;le<=c;le++)for(let oe=0;oe<K;oe++){let fe=u?X(U[oe],ue[oe],pt):U[oe];g?(A.copy(S.normals[le]).multiplyScalar(fe.x),E.copy(S.binormals[le]).multiplyScalar(fe.y),v.copy(b[le]).add(A).add(E),me(v.x,v.y,v.z)):me(fe.x,fe.y,d/c*le)}for(let le=m-1;le>=0;le--){let oe=le/m,fe=p*Math.cos(oe*Math.PI/2),we=_*Math.sin(oe*Math.PI/2)+x;for(let Re=0,Le=D.length;Re<Le;Re++){let ze=X(D[Re],ye[Re],we);me(ze.x,ze.y,d+fe)}for(let Re=0,Le=R.length;Re<Le;Re++){let ze=R[Re];ie=Q[Re];for(let Xe=0,Je=ze.length;Xe<Je;Xe++){let z=X(ze[Xe],ie[Xe],we);g?me(z.x,z.y+b[c-1].y,b[c-1].x+fe):me(z.x,z.y,d+fe)}}}Ze(),ee();function Ze(){let le=r.length/3;if(u){let oe=0,fe=K*oe;for(let we=0;we<Ne;we++){let Re=He[we];Be(Re[2]+fe,Re[1]+fe,Re[0]+fe)}oe=c+m*2,fe=K*oe;for(let we=0;we<Ne;we++){let Re=He[we];Be(Re[0]+fe,Re[1]+fe,Re[2]+fe)}}else{for(let oe=0;oe<Ne;oe++){let fe=He[oe];Be(fe[2],fe[1],fe[0])}for(let oe=0;oe<Ne;oe++){let fe=He[oe];Be(fe[0]+K*c,fe[1]+K*c,fe[2]+K*c)}}s.addGroup(le,r.length/3-le,0)}function ee(){let le=r.length/3,oe=0;he(D,oe),oe+=D.length;for(let fe=0,we=R.length;fe<we;fe++){let Re=R[fe];he(Re,oe),oe+=Re.length}s.addGroup(le,r.length/3-le,1)}function he(le,oe){let fe=le.length;for(;--fe>=0;){let we=fe,Re=fe-1;Re<0&&(Re=le.length-1);for(let Le=0,ze=c+m*2;Le<ze;Le++){let Xe=K*Le,Je=K*(Le+1),z=oe+we+Xe,ft=oe+Re+Xe,Ke=oe+Re+Je,tt=oe+we+Je;Ce(z,ft,Ke,tt)}}}function me(le,oe,fe){l.push(le),l.push(oe),l.push(fe)}function Be(le,oe,fe){Se(le),Se(oe),Se(fe);let we=r.length/3,Re=y.generateTopUV(s,r,we-3,we-2,we-1);Qe(Re[0]),Qe(Re[1]),Qe(Re[2])}function Ce(le,oe,fe,we){Se(le),Se(oe),Se(we),Se(oe),Se(fe),Se(we);let Re=r.length/3,Le=y.generateSideWallUV(s,r,Re-6,Re-3,Re-2,Re-1);Qe(Le[0]),Qe(Le[1]),Qe(Le[3]),Qe(Le[1]),Qe(Le[2]),Qe(Le[3])}function Se(le){r.push(l[le*3+0]),r.push(l[le*3+1]),r.push(l[le*3+2])}function Qe(le){a.push(le.x),a.push(le.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,s=this.parameters.options;return _m(i,s,t)}static fromJSON(t,i){let s=[];for(let a=0,n=t.shapes.length;a<n;a++){let o=i[t.shapes[a]];s.push(o)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new xn[r.type]().fromJSON(r)),new Cu(s,t.options)}},ym={generateTopUV:function(e,t,i,s,r){let a=t[i*3],n=t[i*3+1],o=t[s*3],l=t[s*3+1],h=t[r*3],c=t[r*3+1];return[new pe(a,n),new pe(o,l),new pe(h,c)]},generateSideWallUV:function(e,t,i,s,r,a){let n=t[i*3],o=t[i*3+1],l=t[i*3+2],h=t[s*3],c=t[s*3+1],d=t[s*3+2],u=t[r*3],p=t[r*3+1],_=t[r*3+2],x=t[a*3],m=t[a*3+1],f=t[a*3+2];return Math.abs(o-c)<Math.abs(n-h)?[new pe(n,1-l),new pe(h,1-d),new pe(u,1-_),new pe(x,1-f)]:[new pe(o,1-l),new pe(c,1-d),new pe(p,1-_),new pe(m,1-f)]}};Vl=class Pu extends ma{constructor(t=1,i=0){let s=(1+Math.sqrt(5))/2,r=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,a,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Pu(t.radius,t.detail)}},Wl=class Iu extends dt{constructor(t=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],i=12,s=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:s,phiLength:r},i=Math.floor(i),r=it(r,0,Math.PI*2);let a=[],n=[],o=[],l=[],h=[],c=1/i,d=new I,u=new pe,p=new I,_=new I,x=new I,m=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(_)}for(let y=0;y<=i;y++){let b=s+y*c*r,g=Math.sin(b),S=Math.cos(b);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*g,d.y=t[E].y,d.z=t[E].x*S,n.push(d.x,d.y,d.z),u.x=y/i,u.y=E/(t.length-1),o.push(u.x,u.y);let A=l[3*E+0]*g,v=l[3*E+1],M=l[3*E+0]*S;h.push(A,v,M)}}for(let y=0;y<i;y++)for(let b=0;b<t.length-1;b++){let g=b+y*t.length,S=g,E=g+t.length,A=g+t.length+1,v=g+1;a.push(S,E,v),a.push(A,v,E)}this.setIndex(a),this.setAttribute("position",new je(n,3)),this.setAttribute("uv",new je(o,2)),this.setAttribute("normal",new je(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Iu(t.points,t.segments,t.phiStart,t.phiLength)}},xm=class Lu extends ma{constructor(t=1,i=0){let s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,r,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Lu(t.radius,t.detail)}},bs=class Nu extends dt{constructor(t=1,i=1,s=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:r};let a=t/2,n=i/2,o=Math.floor(s),l=Math.floor(r),h=o+1,c=l+1,d=t/o,u=i/l,p=[],_=[],x=[],m=[];for(let f=0;f<c;f++){let y=f*u-n;for(let b=0;b<h;b++){let g=b*d-a;_.push(g,-y,0),x.push(0,0,1),m.push(b/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){let b=y+h*f,g=y+h*(f+1),S=y+1+h*(f+1),E=y+1+h*f;p.push(b,g,E),p.push(g,S,E)}this.setIndex(p),this.setAttribute("position",new je(_,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nu(t.width,t.height,t.widthSegments,t.heightSegments)}},bn=class Uu extends dt{constructor(t=.5,i=1,s=32,r=1,a=0,n=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:r,thetaStart:a,thetaLength:n},s=Math.max(3,s),r=Math.max(1,r);let o=[],l=[],h=[],c=[],d=t,u=(i-t)/r,p=new I,_=new pe;for(let x=0;x<=r;x++){for(let m=0;m<=s;m++){let f=a+m/s*n;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),h.push(0,0,1),_.x=(p.x/i+1)/2,_.y=(p.y/i+1)/2,c.push(_.x,_.y)}d+=u}for(let x=0;x<r;x++){let m=x*(s+1);for(let f=0;f<s;f++){let y=f+m,b=y,g=y+s+1,S=y+s+2,E=y+1;o.push(b,g,E),o.push(g,S,E)}}this.setIndex(o),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Sm=class Du extends dt{constructor(t=new Rr([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let s=[],r=[],a=[],n=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(s),this.setAttribute("position",new je(r,3)),this.setAttribute("normal",new je(a,3)),this.setAttribute("uv",new je(n,2));function h(c){let d=r.length/3,u=c.extractPoints(i),p=u.shape,_=u.holes;Us.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=_.length;m<f;m++){let y=_[m];Us.isClockWise(y)===!0&&(_[m]=y.reverse())}let x=Us.triangulateShape(p,_);for(let m=0,f=_.length;m<f;m++){let y=_[m];p=p.concat(y)}for(let m=0,f=p.length;m<f;m++){let y=p[m];r.push(y.x,y.y,0),a.push(0,0,1),n.push(y.x,y.y)}for(let m=0,f=x.length;m<f;m++){let y=x[m],b=y[0]+d,g=y[1]+d,S=y[2]+d;s.push(b,g,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return Mm(i,t)}static fromJSON(t,i){let s=[];for(let r=0,a=t.shapes.length;r<a;r++){let n=i[t.shapes[r]];s.push(n)}return new Du(s,t.curveSegments)}};qt=class Ou extends dt{constructor(t=1,i=32,s=16,r=0,a=Math.PI*2,n=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:r,phiLength:a,thetaStart:n,thetaLength:o},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));let l=Math.min(n+o,Math.PI),h=0,c=[],d=new I,u=new I,p=[],_=[],x=[],m=[];for(let f=0;f<=s;f++){let y=[],b=f/s,g=n+b*o,S=t*Math.cos(g),E=Math.sqrt(t*t-S*S),A=0;f===0&&n===0?A=.5/i:f===s&&l===Math.PI&&(A=-.5/i);for(let v=0;v<=i;v++){let M=v/i,U=r+M*a;d.x=-E*Math.cos(U),d.y=S,d.z=E*Math.sin(U),_.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(M+A,1-b),y.push(h++)}c.push(y)}for(let f=0;f<s;f++)for(let y=0;y<i;y++){let b=c[f][y+1],g=c[f][y],S=c[f+1][y],E=c[f+1][y+1];(f!==0||n>0)&&p.push(b,g,E),(f!==s-1||l<Math.PI)&&p.push(g,S,E)}this.setIndex(p),this.setAttribute("position",new je(_,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ou(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},bm=class Bu extends ma{constructor(t=1,i=0){let s=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(s,r,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Bu(t.radius,t.detail)}},jl=class Fu extends dt{constructor(t=1,i=.4,s=12,r=48,a=Math.PI*2,n=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:r,arc:a,thetaStart:n,thetaLength:o},s=Math.floor(s),r=Math.floor(r);let l=[],h=[],c=[],d=[],u=new I,p=new I,_=new I;for(let x=0;x<=s;x++){let m=n+x/s*o;for(let f=0;f<=r;f++){let y=f/r*a;p.x=(t+i*Math.cos(m))*Math.cos(y),p.y=(t+i*Math.cos(m))*Math.sin(y),p.z=i*Math.sin(m),h.push(p.x,p.y,p.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),_.subVectors(p,u).normalize(),c.push(_.x,_.y,_.z),d.push(f/r),d.push(x/s)}}for(let x=1;x<=s;x++)for(let m=1;m<=r;m++){let f=(r+1)*x+m-1,y=(r+1)*(x-1)+m-1,b=(r+1)*(x-1)+m,g=(r+1)*x+m;l.push(f,y,g),l.push(y,b,g)}this.setIndex(l),this.setAttribute("position",new je(h,3)),this.setAttribute("normal",new je(c,3)),this.setAttribute("uv",new je(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Tm=class zu extends dt{constructor(t=1,i=.4,s=64,r=8,a=2,n=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:s,radialSegments:r,p:a,q:n},s=Math.floor(s),r=Math.floor(r);let o=[],l=[],h=[],c=[],d=new I,u=new I,p=new I,_=new I,x=new I,m=new I,f=new I;for(let b=0;b<=s;++b){let g=b/s*a*Math.PI*2;y(g,a,n,t,p),y(g+.01,a,n,t,_),m.subVectors(_,p),f.addVectors(_,p),x.crossVectors(m,f),f.crossVectors(x,m),x.normalize(),f.normalize();for(let S=0;S<=r;++S){let E=S/r*Math.PI*2,A=-i*Math.cos(E),v=i*Math.sin(E);d.x=p.x+(A*f.x+v*x.x),d.y=p.y+(A*f.y+v*x.y),d.z=p.z+(A*f.z+v*x.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),h.push(u.x,u.y,u.z),c.push(b/s),c.push(S/r)}}for(let b=1;b<=s;b++)for(let g=1;g<=r;g++){let S=(r+1)*(b-1)+(g-1),E=(r+1)*b+(g-1),A=(r+1)*b+g,v=(r+1)*(b-1)+g;o.push(S,E,v),o.push(E,A,v)}this.setIndex(o),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(c,2));function y(b,g,S,E,A){let v=Math.cos(b),M=Math.sin(b),U=S/g*b,R=Math.cos(U);A.x=E*(2+R)*.5*v,A.y=E*(2+R)*M*.5,A.z=E*Math.sin(U)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zu(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Em=class ku extends dt{constructor(t=new Mu(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),i=64,s=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:r,closed:a};let n=t.computeFrenetFrames(i,a);this.tangents=n.tangents,this.normals=n.normals,this.binormals=n.binormals;let o=new I,l=new I,h=new pe,c=new I,d=[],u=[],p=[],_=[];x(),this.setIndex(_),this.setAttribute("position",new je(d,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(p,2));function x(){for(let b=0;b<i;b++)m(b);m(a===!1?i:0),y(),f()}function m(b){c=t.getPointAt(b/i,c);let g=n.normals[b],S=n.binormals[b];for(let E=0;E<=r;E++){let A=E/r*Math.PI*2,v=Math.sin(A),M=-Math.cos(A);l.x=M*g.x+v*S.x,l.y=M*g.y+v*S.y,l.z=M*g.z+v*S.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=c.x+s*l.x,o.y=c.y+s*l.y,o.z=c.z+s*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let b=1;b<=i;b++)for(let g=1;g<=r;g++){let S=(r+1)*(b-1)+(g-1),E=(r+1)*b+(g-1),A=(r+1)*b+g,v=(r+1)*(b-1)+g;_.push(S,E,v),_.push(E,A,v)}}function y(){for(let b=0;b<=i;b++)for(let g=0;g<=r;g++)h.x=b/i,h.y=g/r,p.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ku(new xn[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},wm=class extends dt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new I,r=new I;if(e.index!==null){let a=e.attributes.position,n=e.index,o=e.groups;o.length===0&&(o=[{start:0,count:n.count,materialIndex:0}]);for(let l=0,h=o.length;l<h;++l){let c=o[l],d=c.start,u=c.count;for(let p=d,_=d+u;p<_;p+=3)for(let x=0;x<3;x++){let m=n.getX(p+x),f=n.getX(p+(x+1)%3);s.fromBufferAttribute(a,m),r.fromBufferAttribute(a,f),tc(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let n=0,o=a.count/3;n<o;n++)for(let l=0;l<3;l++){let h=3*n+l,c=3*n+(l+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,c),tc(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new je(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};a1=Object.freeze({__proto__:null,BoxGeometry:Ms,CapsuleGeometry:kl,CircleGeometry:zf,ConeGeometry:fa,CylinderGeometry:Ar,DodecahedronGeometry:kf,EdgesGeometry:Hf,ExtrudeGeometry:ga,IcosahedronGeometry:Vl,LatheGeometry:Wl,OctahedronGeometry:xm,PlaneGeometry:bs,PolyhedronGeometry:ma,RingGeometry:bn,ShapeGeometry:Sm,SphereGeometry:qt,TetrahedronGeometry:bm,TorusGeometry:jl,TorusKnotGeometry:Tm,TubeGeometry:Em,WireframeGeometry:wm});Rm={clone:Tr,merge:ri},Cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,li=class extends zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cm,this.fragmentShader=Pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=Am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(s.value);break;case"v2":this.uniforms[i].value=new pe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(s.value);break;case"m3":this.uniforms[i].value=new $e().fromArray(s.value);break;case"m4":this.uniforms[i].value=new st().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Im=class extends li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ct=class extends zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Lm=class extends zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Nm=class extends zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};va=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];i:{e:{let a;t:{s:if(!(e<s)){for(let n=i+2;;){if(s===void 0){if(e<r)break s;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===n)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let n=t[1];e<n&&(i=2,r=n);for(let o=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){let n=i+a>>>1;e<t[n]?a=n:i=n+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Um=class extends va{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mh,endingEnd:Mh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,n=s[r],o=s[a];if(n===void 0)switch(this.getSettings_().endingStart){case bh:r=e,n=2*t-i;break;case Th:r=s.length-2,n=t+s[r]-s[r+1];break;default:r=e,n=i}if(o===void 0)switch(this.getSettings_().endingEnd){case bh:a=e,o=2*i-t;break;case Th:a=1,o=i+s[1]-s[0];break;default:a=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-n),this._weightNext=l/(o-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(i-t)/(s-t),_=p*p,x=_*p,m=-d*x+2*d*_-d*p,f=(1+d)*x+(-1.5-2*d)*_+(-.5+d)*p+1,y=(-1-u)*x+(1.5+u)*_+.5*p,b=u*x-u*_;for(let g=0;g!==n;++g)r[g]=m*a[h+g]+f*a[l+g]+y*a[o+g]+b*a[c+g];return r}},Dm=class extends va{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=(i-t)/(s-t),c=1-h;for(let d=0;d!==n;++d)r[d]=a[l+d]*c+a[o+d]*h;return r}},Om=class extends va{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Bm=class extends va{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=this.inTangents,c=this.outTangents;if(!h||!c){let p=(i-t)/(s-t),_=1-p;for(let x=0;x!==n;++x)r[x]=a[l+x]*_+a[o+x]*p;return r}let d=n*2,u=e-1;for(let p=0;p!==n;++p){let _=a[l+p],x=a[o+p],m=u*d+p*2,f=c[m],y=c[m+1],b=e*d+p*2,g=h[b],S=h[b+1],E=zm(i,t,f,g,s);r[p]=Gu(E,_,y,S,x)}return r}};Gi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=or(t,this.TimeBufferType),this.values=or(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:or(e.times,Array),values:or(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Co(e.settings)&&(i.settings={inTangents:or(e.settings.inTangents,Array),outTangents:or(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Om(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Dm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Um(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Bm(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case mn:t=this.InterpolantFactoryMethodDiscrete;break;case Sl:t=this.InterpolantFactoryMethodLinear;break;case to:t=this.InterpolantFactoryMethodSmooth;break;case Sh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return We("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mn;case this.InterpolantFactoryMethodLinear:return Sl;case this.InterpolantFactoryMethodSmooth:return to;case this.InterpolantFactoryMethodBezier:return Sh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Co(this.settings)&&(sc(this.settings.inTangents,e),sc(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let n=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*n,a*n)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let n=0;n!==r;n++){let o=i[n];if(typeof o=="number"&&isNaN(o)){Ve("KeyframeTrack: Time is not a valid number.",this,n,o),e=!1;break}if(a!==null&&a>o){Ve("KeyframeTrack: Out of order keys.",this,n,o,a),e=!1;break}a=o}if(s!==void 0&&jp(s))for(let n=0,o=s.length;n!==o;++n){let l=s[n];if(isNaN(l)){Ve("KeyframeTrack: Value is not a valid number.",this,n,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===to,r=e.length-1,a=1;for(let n=1;n<r;++n){let o=!1,l=e[n],h=e[n+1];if(l!==h&&(n!==1||l!==e[0]))if(s)o=!0;else{let c=n*i,d=c-i,u=c+i;for(let p=0;p!==i;++p){let _=t[c+p];if(_!==t[d+p]||_!==t[u+p]){o=!0;break}}}if(o){if(n!==a){e[a]=e[n];let c=n*i,d=a*i;for(let u=0;u!==i;++u)t[d+u]=t[c+u]}++a}}if(r>0){e[a]=e[r];for(let n=r*i,o=a*i,l=0;l!==i;++l)t[o+l]=t[n+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Co(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};Gi.prototype.ValueTypeName="",Gi.prototype.TimeBufferType=Float32Array,Gi.prototype.ValueBufferType=Float32Array,Gi.prototype.DefaultInterpolation=Sl;qr=class extends Gi{constructor(e,t,i){super(e,t,i)}};qr.prototype.ValueTypeName="bool",qr.prototype.ValueBufferType=Array,qr.prototype.DefaultInterpolation=mn,qr.prototype.InterpolantFactoryMethodLinear=void 0,qr.prototype.InterpolantFactoryMethodSmooth=void 0;km=class extends Gi{constructor(e,t,i,s){super(e,t,i,s)}};km.prototype.ValueTypeName="color";Hm=class extends Gi{constructor(e,t,i,s){super(e,t,i,s)}};Hm.prototype.ValueTypeName="number";Gm=class extends va{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,n=this.valueSize,o=(i-t)/(s-t),l=e*n;for(let h=l+n;l!==h;l+=4)ns.slerpFlat(r,0,a,l-n,a,l,o);return r}},rc=class extends Gi{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Gm(this.times,this.values,this.getValueSize(),e)}};rc.prototype.ValueTypeName="quaternion",rc.prototype.InterpolantFactoryMethodSmooth=void 0;Yr=class extends Gi{constructor(e,t,i){super(e,t,i)}};Yr.prototype.ValueTypeName="string",Yr.prototype.ValueBufferType=Array,Yr.prototype.DefaultInterpolation=mn,Yr.prototype.InterpolantFactoryMethodLinear=void 0,Yr.prototype.InterpolantFactoryMethodSmooth=void 0;Vm=class extends Gi{constructor(e,t,i,s){super(e,t,i,s)}};Vm.prototype.ValueTypeName="vector";Wm=class{constructor(e,t,i){let s=this,r=!1,a=0,n=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){n++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,n),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,n),a===n&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,d=l.length;c<d;c+=2){let u=l[c],p=l[c+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jm=new Wm,Xm=class{constructor(e){this.manager=e!==void 0?e:jm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Xm.DEFAULT_MATERIAL_NAME="__DEFAULT";Xl=class extends ai{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Tn=class extends Xl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ai.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Po=new st,ac=new I,nc=new I,Vu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ac.setFromMatrixPosition(e.matrixWorld),t.position.copy(ac),nc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Po.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Po,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,n=s?s.w/r.y:1,o=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===oa||e.reversedDepth?t.set(.5*a,0,0,.5*a+o,0,.5*n,0,.5*n+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+o,0,.5*n,0,.5*n+l,0,0,.5,.5,0,0,0,1),t.multiply(Po)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},tn=new I,sn=new ns,Fi=new I,ql=class extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tn,sn,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tn,sn,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(tn,sn,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tn,sn,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gs=new I,oc=new pe,lc=new pe,Yt=class extends ql{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=la*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return la*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,t){return this.getViewBounds(e,oc,lc),t.subVectors(lc,oc)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let o=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/o,t-=a.offsetY*i/l,s*=a.width/o,i*=a.height/l}let n=this.filmOffset;n!==0&&(r+=e*n/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qm=class extends Vu{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}},Cr=class extends Xl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new qm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Yl=class extends ql{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,n=s+t,o=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,n-=h*this.view.offsetY,o=n-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,n,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ym=class extends Vu{constructor(){super(new Yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},En=class extends Xl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ai.DEFAULT_UP),this.updateMatrix(),this.target=new ai,this.shadow=new Ym}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},n1=new st,o1=new st,l1=new st,lr=-90,hr=1,Zm=class extends ai{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Yt(lr,hr,e,t);s.layers=this.layers,this.add(s);let r=new Yt(lr,hr,e,t);r.layers=this.layers,this.add(r);let a=new Yt(lr,hr,e,t);a.layers=this.layers,this.add(a);let n=new Yt(lr,hr,e,t);n.layers=this.layers,this.add(n);let o=new Yt(lr,hr,e,t);o.layers=this.layers,this.add(o);let l=new Yt(lr,hr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,n,o]=t;for(let l of t)this.remove(l);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),n.up.set(0,1,0),n.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),n.up.set(0,-1,0),n.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,n,o,l,h]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(c,d,u),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Jm=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},h1=new I,c1=new ns,u1=new I,d1=new I,p1=new I,f1=new I,m1=new ns,g1=new I,v1=new I,Zl="\\[\\]\\.:\\/",$m=new RegExp("["+Zl+"]","g"),Jl="[^"+Zl+"]",Km="[^"+Zl.replace("\\.","")+"]",Qm=/((?:WC+[\/:])*)/.source.replace("WC",Jl),eg=/(WCOD+)?/.source.replace("WCOD",Km),tg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),ig=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),sg=new RegExp("^"+Qm+eg+tg+ig+"$"),rg=["material","materials","bones","map"],ag=class{constructor(e,t,i){let s=i||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Rt=class pr{constructor(t,i,s){this.path=i,this.parsedPath=s||pr.parseTrackName(i),this.node=pr.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,s){return t&&t.isAnimationObjectGroup?new pr.Composite(t,i,s):new pr(t,i,s)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($m,"")}static parseTrackName(t){let i=sg.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let s={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},r=s.nodeName&&s.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=s.nodeName.substring(r+1);rg.indexOf(a)!==-1&&(s.nodeName=s.nodeName.substring(0,r),s.objectName=a)}if(s.propertyName===null||s.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return s}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let s=t.skeleton.getBoneByName(i);if(s!==void 0)return s}if(t.children){let s=function(a){for(let n=0;n<a.length;n++){let o=a[n];if(o.name===i||o.uuid===i)return o;let l=s(o.children);if(l)return l}return null},r=s(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let s=this.resolvedProperty;for(let r=0,a=s.length;r!==a;++r)t[i++]=s[r]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let s=this.resolvedProperty;for(let r=0,a=s.length;r!==a;++r)s[r]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let s=this.resolvedProperty;for(let r=0,a=s.length;r!==a;++r)s[r]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let s=this.resolvedProperty;for(let r=0,a=s.length;r!==a;++r)s[r]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,s=i.objectName,r=i.propertyName,a=i.propertyIndex;if(t||(t=pr.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(s){let h=i.objectIndex;switch(s){case"materials":if(!t.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[s]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[s]}if(h!==void 0){if(t[h]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let n=t[r];if(n===void 0){let h=i.nodeName;Ve("PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=n,this.propertyIndex=a}else n.fromArray!==void 0&&n.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=n):Array.isArray(n)?(l=this.BindingType.EntireArray,this.resolvedProperty=n):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=ag,Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray],Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];y1=new Float32Array(1),hc=new st,Wu=class{constructor(e,t,i=0,s=1/0){this.ray=new pa(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new zl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hc),this}intersectObject(e,t=!0,i=[]){return wl(e,this,i,t),i.sort(cc),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)wl(e[s],this,i,t);return i.sort(cc),i}};_1=($n=class{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}},$n.prototype.isMatrix2=!0,$n),x1=new pe,S1=new I,M1=new I,b1=new I,T1=new I,E1=new I,w1=new I,A1=new I,R1=new I,C1=new I,P1=new st,I1=new st,L1=new I,N1=new qe,U1=new qe,D1=new I,O1=new I,B1=new I,F1=new I,z1=new ql,k1=new _s,H1=new I;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}})),typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");lg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ug=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,vg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ig=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ng=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ug=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Og=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",zg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Hg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,e0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,t0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,n0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,o0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,l0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,h0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,u0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,y0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,E0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,A0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,I0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,L0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,F0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,X0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,q0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Y0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,J0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,K0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ev=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ov=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ev=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Av=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:lg,alphahash_pars_fragment:hg,alphamap_fragment:cg,alphamap_pars_fragment:ug,alphatest_fragment:dg,alphatest_pars_fragment:pg,aomap_fragment:fg,aomap_pars_fragment:mg,batching_pars_vertex:gg,batching_vertex:vg,begin_vertex:yg,beginnormal_vertex:_g,bsdfs:xg,iridescence_fragment:Sg,bumpmap_pars_fragment:Mg,clipping_planes_fragment:bg,clipping_planes_pars_fragment:Tg,clipping_planes_pars_vertex:Eg,clipping_planes_vertex:wg,color_fragment:Ag,color_pars_fragment:Rg,color_pars_vertex:Cg,color_vertex:Pg,common:Ig,cube_uv_reflection_fragment:Lg,defaultnormal_vertex:Ng,displacementmap_pars_vertex:Ug,displacementmap_vertex:Dg,emissivemap_fragment:Og,emissivemap_pars_fragment:Bg,colorspace_fragment:Fg,colorspace_pars_fragment:zg,envmap_fragment:kg,envmap_common_pars_fragment:Hg,envmap_pars_fragment:Gg,envmap_pars_vertex:Vg,envmap_physical_pars_fragment:e0,envmap_vertex:Wg,fog_vertex:jg,fog_pars_vertex:Xg,fog_fragment:qg,fog_pars_fragment:Yg,gradientmap_pars_fragment:Zg,lightmap_pars_fragment:Jg,lights_lambert_fragment:$g,lights_lambert_pars_fragment:Kg,lights_pars_begin:Qg,lights_toon_fragment:t0,lights_toon_pars_fragment:i0,lights_phong_fragment:s0,lights_phong_pars_fragment:r0,lights_physical_fragment:a0,lights_physical_pars_fragment:n0,lights_fragment_begin:o0,lights_fragment_maps:l0,lights_fragment_end:h0,lightprobes_pars_fragment:c0,logdepthbuf_fragment:u0,logdepthbuf_pars_fragment:d0,logdepthbuf_pars_vertex:p0,logdepthbuf_vertex:f0,map_fragment:m0,map_pars_fragment:g0,map_particle_fragment:v0,map_particle_pars_fragment:y0,metalnessmap_fragment:_0,metalnessmap_pars_fragment:x0,morphinstance_vertex:S0,morphcolor_vertex:M0,morphnormal_vertex:b0,morphtarget_pars_vertex:T0,morphtarget_vertex:E0,normal_fragment_begin:w0,normal_fragment_maps:A0,normal_pars_fragment:R0,normal_pars_vertex:C0,normal_vertex:P0,normalmap_pars_fragment:I0,clearcoat_normal_fragment_begin:L0,clearcoat_normal_fragment_maps:N0,clearcoat_pars_fragment:U0,iridescence_pars_fragment:D0,opaque_fragment:O0,packing:B0,premultiplied_alpha_fragment:F0,project_vertex:z0,dithering_fragment:k0,dithering_pars_fragment:H0,roughnessmap_fragment:G0,roughnessmap_pars_fragment:V0,shadowmap_pars_fragment:W0,shadowmap_pars_vertex:j0,shadowmap_vertex:X0,shadowmask_pars_fragment:q0,skinbase_vertex:Y0,skinning_pars_vertex:Z0,skinning_vertex:J0,skinnormal_vertex:$0,specularmap_fragment:K0,specularmap_pars_fragment:Q0,tonemapping_fragment:ev,tonemapping_pars_fragment:tv,transmission_fragment:iv,transmission_pars_fragment:sv,uv_pars_fragment:rv,uv_pars_vertex:av,uv_vertex:nv,worldpos_vertex:ov,background_vert:lv,background_frag:hv,backgroundCube_vert:cv,backgroundCube_frag:uv,cube_vert:dv,cube_frag:pv,depth_vert:fv,depth_frag:mv,distance_vert:gv,distance_frag:vv,equirect_vert:yv,equirect_frag:_v,linedashed_vert:xv,linedashed_frag:Sv,meshbasic_vert:Mv,meshbasic_frag:bv,meshlambert_vert:Tv,meshlambert_frag:Ev,meshmatcap_vert:wv,meshmatcap_frag:Av,meshnormal_vert:Rv,meshnormal_frag:Cv,meshphong_vert:Pv,meshphong_frag:Iv,meshphysical_vert:Lv,meshphysical_frag:Nv,meshtoon_vert:Uv,meshtoon_frag:Dv,points_vert:Ov,points_frag:Bv,shadow_vert:Fv,shadow_frag:zv,sprite_vert:kv,sprite_frag:Hv},Te={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ki={basic:{uniforms:ri([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:ri([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:ri([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:ri([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:ri([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new qe(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:ri([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:ri([Te.points,Te.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:ri([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:ri([Te.common,Te.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:ri([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:ri([Te.sprite,Te.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:ri([Te.common,Te.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:ri([Te.lights,Te.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ki.physical={uniforms:ri([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};rn={r:0,b:0,g:0},Gv=new st,Xu=new $e;Xu.set(-1,0,0,0,1,0,0,0,1);fr=4,Yv=6,Zv=20,Jv=256,Zr=new Yl,dc=new qe,Io=null,Lo=0,No=0,Uo=!1,$v=new I,Ps=new I,pc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:n=$v}=r;Io=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o,n),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Io,Lo,No),this._renderer.xr.enabled=Uo,e.scissorTest=!1,cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Io=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Xi,format:Ei,colorSpace:gn,depthBuffer:!1},s=fc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fc(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Kv(r)),this._blurMaterial=ey(r,e,t),this._ggxMaterial=Qv(r,e,t)}return s}_compileMaterial(e){let t=new ht(new dt,e);this._renderer.compile(t,Zr)}_sceneToCubeUV(e,t,i,s,r){let a=new Yt(90,1,t,i),n=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(dc),l.toneMapping=Vi,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(s),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ht(new Ms,new Pi({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,u=d.material,p=!1,_=e.background;_?_.isColor&&(u.color.copy(_),e.background=null,p=!0):(u.color.copy(dc),p=!0);for(let x=0;x<6;x++){let m=x%3;m===0?(a.up.set(0,n[x],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x+o[x],r.y,r.z)):m===1?(a.up.set(0,0,n[x]),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y+o[x],r.z)):(a.up.set(0,n[x],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y,r.z+o[x]));let f=this._cubeSize;cr(s,m*f,x>2?f:0,f,f),l.setRenderTarget(s),p&&l.render(d,a),l.render(e,a)}l.toneMapping=c,l.autoClear=h,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ds||e.mapping===_r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let n=r.uniforms;n.envMap.value=e;let o=this._cubeSize;cr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Zr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,n=this._lodMeshes[i];n.material=a;let o=a.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),c=Math.sqrt(l*l-h*h),d=l*1.25,u=c*d,{_lodMax:p}=this,_=this._sizeLods[i],x=3*_*(i>p-fr?i-p+fr:0),m=4*(this._cubeSize-_);o.envMap.value=e.texture,o.roughness.value=u,o.mipInt.value=p-t,cr(r,x,m,3*_,2*_),s.setRenderTarget(r),s.render(n,Zr),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=p-i,cr(e,x,m,3*_,2*_),s.setRenderTarget(e),s.render(n,Zr)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,n=this._blurMaterial,o=this._lodMeshes[s];o.material=n;let l=n.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],c=3*h*(s>this._lodMax-fr?s-this._lodMax+fr:0),d=4*(this._cubeSize-h);cr(t,c,d,3*h,2*h),a.setRenderTarget(t),a.render(o,Zr)}};qu=class extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new cu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ms(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:is});r.uniforms.tEquirect.value=t;let a=new ht(s,r),n=t.minFilter;return t.minFilter===Ls&&(t.minFilter=Kt),new Zm(1,10,this).update(e,a),t.minFilter=n,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};ly={[Bc]:"LINEAR_TONE_MAPPING",[Fc]:"REINHARD_TONE_MAPPING",[zc]:"CINEON_TONE_MAPPING",[Er]:"ACES_FILMIC_TONE_MAPPING",[Hc]:"AGX_TONE_MAPPING",[Gc]:"NEUTRAL_TONE_MAPPING",[kc]:"CUSTOM_TONE_MAPPING"};Yu=new yi,Al=new ha(1,1),Zu=new Qc,Ju=new vf,$u=new cu,vc=[],yc=[],_c=new Float32Array(16),xc=new Float32Array(9),Sc=new Float32Array(4);Jy=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Cy(t.type)}},$y=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zy(t.type)}},Ky=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let n=s[r];n.setValue(e,t[n.id],i)}}},Do=/(\w+)(\])?(\[|\.)?/g;dn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let n=e.getActiveUniform(t,a),o=e.getUniformLocation(t,n.name);Qy(n,o,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let n=t[r],o=i[n.id];o.needsUpdate!==!1&&n.setValue(e,o.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};e_=37297,t_=0;Tc=new $e;a_={[Bc]:"Linear",[Fc]:"Reinhard",[zc]:"Cineon",[Er]:"ACESFilmic",[Hc]:"AgX",[Gc]:"Neutral",[kc]:"Custom"};an=new I;u_=/^[ \t]*#include +<([\w\d./]+)>/gm;d_=new Map;f_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;g_={[mr]:"SHADOWMAP_TYPE_PCF",[$r]:"SHADOWMAP_TYPE_VSM"};y_={[Ds]:"ENVMAP_TYPE_CUBE",[_r]:"ENVMAP_TYPE_CUBE",[Sn]:"ENVMAP_TYPE_CUBE_UV"};x_={[_r]:"ENVMAP_MODE_REFRACTION"};M_={[Oc]:"ENVMAP_BLENDING_MULTIPLY",[Lp]:"ENVMAP_BLENDING_MIX",[Np]:"ENVMAP_BLENDING_ADD"};w_=0,A_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new R_(e),t.set(e,i)),i}},R_=class{constructor(e){this.id=w_++,this.code=e,this.usedTimes=0}};O_=0;k_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,G_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],V_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Nc=new st,Jr=new I,Oo=new I;Y_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,J_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new uu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new li({vertexShader:Y_,fragmentShader:Z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new bs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$_=class extends Fs{constructor(e,t){super();let i=this,s=null,r=1,a=null,n="local-floor",o=1,l=null,h=null,c=null,d=null,u=null,p=null,_=typeof XRWebGLBinding<"u",x=new J_,m={},f=t.getContextAttributes(),y=null,b=null,g=[],S=[],E=new pe,A=null,v=null,M=new Yt;M.viewport=new Et;let U=new Yt;U.viewport=new Et;let R=[M,U],N=new Jm,j=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let he=g[ee];return he===void 0&&(he=new lo,g[ee]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ee){let he=g[ee];return he===void 0&&(he=new lo,g[ee]=he),he.getGripSpace()},this.getHand=function(ee){let he=g[ee];return he===void 0&&(he=new lo,g[ee]=he),he.getHandSpace()};function X(ee){let he=S.indexOf(ee.inputSource);if(he===-1)return;let me=g[he];me!==void 0&&(me.update(ee.inputSource,ee.frame,l||a),me.dispatchEvent({type:ee.type,data:ee.inputSource}))}function K(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",Z);for(let ee=0;ee<g.length;ee++){let he=S[ee];he!==null&&(S[ee]=null,g[ee].disconnect(he))}j=null,D=null,x.reset();for(let ee in m)delete m[ee];if(e.setRenderTarget(y),u=null,d=null,c=null,s=null,b=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(E.width,E.height,!1),v!==null){let ee=v.camera;ee.fov=v.fov,ee.zoom=v.zoom,ee.updateProjectionMatrix(),v=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){n=ee,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return c===null&&_&&(c=new XRWebGLBinding(s,t)),c},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",K),s.addEventListener("inputsourceschange",Z),f.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,me=null,Be=null;f.depth&&(Be=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=f.stencil?Ns:as,me=f.stencil?na:ji);let Ce={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:r};c=this.getBinding(),d=c.createProjectionLayer(Ce),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Ai(d.textureWidth,d.textureHeight,{format:Ei,type:pi,depthTexture:new ha(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let he={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new Ai(u.framebufferWidth,u.framebufferHeight,{format:Ei,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(o),l=null,a=await s.requestReferenceSpace(n),Ze.setContext(s),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(ee){for(let he=0;he<ee.removed.length;he++){let me=ee.removed[he],Be=S.indexOf(me);Be>=0&&(S[Be]=null,g[Be].disconnect(me))}for(let he=0;he<ee.added.length;he++){let me=ee.added[he],Be=S.indexOf(me);if(Be===-1){for(let Se=0;Se<g.length;Se++)if(Se>=S.length){S.push(me),Be=Se;break}else if(S[Se]===null){S[Se]=me,Be=Se;break}if(Be===-1)break}let Ce=g[Be];Ce&&Ce.connect(me)}}let ye=new I,Q=new I;function ie(ee,he,me){ye.setFromMatrixPosition(he.matrixWorld),Q.setFromMatrixPosition(me.matrixWorld);let Be=ye.distanceTo(Q),Ce=he.projectionMatrix.elements,Se=me.projectionMatrix.elements,Qe=Ce[14]/(Ce[10]-1),le=Ce[14]/(Ce[10]+1),oe=(Ce[9]+1)/Ce[5],fe=(Ce[9]-1)/Ce[5],we=(Ce[8]-1)/Ce[0],Re=(Se[8]+1)/Se[0],Le=Qe*we,ze=Qe*Re,Xe=Be/(-we+Re),Je=Xe*-we;if(he.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Je),ee.translateZ(Xe),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ce[10]===-1)ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{let z=Qe+Xe,ft=le+Xe,Ke=Le-Je,tt=ze+(Be-Je),P=oe*le/ft*z,T=fe*le/ft*z;ee.projectionMatrix.makePerspective(Ke,tt,P,T,z,ft),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ue(ee,he){he===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(he.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let he=ee.near,me=ee.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(me=x.depthFar)),N.near=U.near=M.near=he,N.far=U.far=M.far=me,(j!==N.near||D!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),j=N.near,D=N.far),N.layers.mask=ee.layers.mask|6,M.layers.mask=N.layers.mask&-5,U.layers.mask=N.layers.mask&-3;let Be=ee.parent,Ce=N.cameras;ue(N,Be);for(let Se=0;Se<Ce.length;Se++)ue(Ce[Se],Be);Ce.length===2?ie(N,M,U):N.projectionMatrix.copy(M.projectionMatrix),v===null&&ee.isPerspectiveCamera&&(v={camera:ee,fov:ee.fov,zoom:ee.zoom}),He(ee,N,Be)};function He(ee,he,me){me===null?ee.matrix.copy(he.matrixWorld):(ee.matrix.copy(me.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(he.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=la*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&u===null))return o},this.setFoveation=function(ee){o=ee,d!==null&&(d.fixedFoveation=ee),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(N)},this.getCameraTexture=function(ee){return m[ee]};let Ne=null;function pt(ee,he){if(h=he.getViewerPose(l||a),p=he,h!==null){let me=h.views;u!==null&&(e.setRenderTargetFramebuffer(b,u.framebuffer),e.setRenderTarget(b));let Be=!1;me.length!==N.cameras.length&&(N.cameras.length=0,Be=!0);for(let Se=0;Se<me.length;Se++){let Qe=me[Se],le=null;if(u!==null)le=u.getViewport(Qe);else{let fe=c.getViewSubImage(d,Qe);le=fe.viewport,Se===0&&(e.setRenderTargetTextures(b,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(b))}let oe=R[Se];oe===void 0&&(oe=new Yt,oe.layers.enable(Se),oe.viewport=new Et,R[Se]=oe),oe.matrix.fromArray(Qe.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Qe.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(le.x,le.y,le.width,le.height),Se===0&&(N.matrix.copy(oe.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Be===!0&&N.cameras.push(oe)}let Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){c=i.getBinding();let Se=c.getDepthInformation(me[0]);Se&&Se.isValid&&Se.texture&&x.init(Se,s.renderState)}if(Ce&&Ce.includes("camera-access")&&_){e.state.unbindTexture(),c=i.getBinding();for(let Se=0;Se<me.length;Se++){let Qe=me[Se].camera;if(Qe){let le=m[Qe];le||(le=new uu,m[Qe]=le);let oe=c.getCameraImage(Qe);le.sourceTexture=oe}}}}for(let me=0;me<g.length;me++){let Be=S[me],Ce=g[me];Be!==null&&Ce!==void 0&&Ce.update(Be,he,l||a)}Ne&&Ne(ee,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),p=null}let Ze=new ju;Ze.setAnimationLoop(pt),this.setAnimationLoop=function(ee){Ne=ee},this.dispose=function(){}}},K_=new st,Ku=new $e;Ku.set(-1,0,0,0,1,0,0,0,1);tx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zi=null;Rn=class{constructor(e={}){let{canvas:t=Xp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:n=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:d=!1,outputBufferType:u=pi}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let _=u,x=new Set([Ul,Nl,Ll]),m=new Set([pi,ji,aa,na,Pl,Il]),f=new Uint32Array(4),y=new Int32Array(4),b=new I,g=null,S=null,E=[],A=[],v=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,U=!1,R=null,N=null,j=null,D=null;this._outputColorSpace=jt;let X=0,K=0,Z=null,ye=-1,Q=null,ie=new Et,ue=new Et,He=null,Ne=new qe(0),pt=0,Ze=t.width,ee=t.height,he=1,me=null,Be=null,Ce=new Et(0,0,Ze,ee),Se=new Et(0,0,Ze,ee),Qe=!1,le=new Mr,oe=!1,fe=!1,we=new st,Re=new I,Le=new Et,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function Je(){return Z===null?he:1}let z=i;function ft(w,V){return t.getContext(w,V)}let Ke,tt,P,T,H,J,L,O,B,C,G,ce,ge,se,ve,Me,Pe,ke,F,te,ne,be,de;try{let w={alpha:!0,depth:s,stencil:r,antialias:n,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",St,!1),t.addEventListener("webglcontextcreationerror",rt,!1),z===null){let V="webgl2";if(z=ft(V,w),z===null)throw ft(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ae()}catch(w){throw t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",rt,!1),Ve("WebGLRenderer: "+w.message),w}function ae(){Ke=new iy(z),Ke.init(),ne=new q_(z,Ke),tt=new Xv(z,Ke,e,ne),P=new j_(z,Ke),tt.reversedDepthBuffer&&d&&P.buffers.depth.setReversed(!0),N=z.createFramebuffer(),j=z.createFramebuffer(),D=z.createFramebuffer(),T=new ay(z),H=new I_,J=new X_(z,Ke,P,H,tt,ne,T),L=new ty(M),O=new og(z),be=new Wv(z,O),B=new sy(z,O,T,be),C=new oy(z,B,O,be,T),ke=new ny(z,tt,J),ve=new qv(H),G=new P_(M,L,Ke,tt,be,ve),ce=new Q_(M,H),ge=new N_,se=new z_(Ke),Pe=new Vv(M,L,P,C,p,o),Me=new W_(M,C,tt),de=new ex(z,T,tt,P),F=new jv(z,Ke,T),te=new ry(z,Ke,T),T.programs=G.programs,M.capabilities=tt,M.extensions=Ke,M.properties=H,M.renderLists=ge,M.shadowMap=Me,M.state=P,M.info=T}_!==pi&&(v=new hy(_,t.width,t.height,n,s,r));let _e=new $_(M,z);this.xr=_e,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let w=Ke.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ke.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(w){w!==void 0&&(he=w,this.setSize(Ze,ee,!1))},this.getSize=function(w){return w.set(Ze,ee)},this.setSize=function(w,V,$=!0){if(_e.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Ze=w,ee=V,t.width=Math.floor(w*he),t.height=Math.floor(V*he),$===!0&&(t.style.width=w+"px",t.style.height=V+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(Ze*he,ee*he).floor()},this.setDrawingBufferSize=function(w,V,$){Ze=w,ee=V,he=$,t.width=Math.floor(w*$),t.height=Math.floor(V*$),this.setViewport(0,0,w,V)},this.setEffects=function(w){if(_===pi){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let V=0;V<w.length;V++)if(w[V].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ie)},this.getViewport=function(w){return w.copy(Ce)},this.setViewport=function(w,V,$,Y){w.isVector4?Ce.set(w.x,w.y,w.z,w.w):Ce.set(w,V,$,Y),P.viewport(ie.copy(Ce).multiplyScalar(he).round())},this.getScissor=function(w){return w.copy(Se)},this.setScissor=function(w,V,$,Y){w.isVector4?Se.set(w.x,w.y,w.z,w.w):Se.set(w,V,$,Y),P.scissor(ue.copy(Se).multiplyScalar(he).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(w){P.setScissorTest(Qe=w)},this.setOpaqueSort=function(w){me=w},this.setTransparentSort=function(w){Be=w},this.getClearColor=function(w){return w.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,$=!0){let Y=0;if(w){let q=!1;if(Z!==null){let xe=Z.texture.format;q=x.has(xe)}if(q){let xe=Z.texture.type,Ee=m.has(xe),Ie=Pe.getClearColor(),De=Pe.getClearAlpha(),Ge=Ie.r,at=Ie.g,lt=Ie.b;Ee?(f[0]=Ge,f[1]=at,f[2]=lt,f[3]=De,z.clearBufferuiv(z.COLOR,0,f)):(y[0]=Ge,y[1]=at,y[2]=lt,y[3]=De,z.clearBufferiv(z.COLOR,0,y))}else Y|=z.COLOR_BUFFER_BIT}V&&(Y|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),R=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",rt,!1),Pe.dispose(),ge.dispose(),se.dispose(),H.dispose(),L.dispose(),C.dispose(),be.dispose(),de.dispose(),G.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Di),_e.removeEventListener("sessionend",Vt),hi.stop()};function Ue(w){w.preventDefault(),_n("WebGLRenderer: Context Lost."),U=!0}function St(){_n("WebGLRenderer: Context Restored."),U=!1;let w=T.autoReset,V=Me.enabled,$=Me.autoUpdate,Y=Me.needsUpdate,q=Me.type;ae(),T.autoReset=w,Me.enabled=V,Me.autoUpdate=$,Me.needsUpdate=Y,Me.type=q}function rt(w){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function fi(w){let V=w.target;V.removeEventListener("dispose",fi),_i(V)}function _i(w){mt(w),H.remove(w)}function mt(w){let V=H.get(w).programs;V!==void 0&&(V.forEach(function($){G.releaseProgram($)}),w.isShaderMaterial&&G.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,$,Y,q,xe){V===null&&(V=ze);let Ee=q.isMesh&&q.matrixWorld.determinantAffine()<0,Ie=np(w,V,$,Y,q);P.setMaterial(Y,Ee);let De=$.index,Ge=1;if(Y.wireframe===!0){if(De=B.getWireframeAttribute($),De===void 0)return;Ge=2}let at=$.drawRange,lt=$.attributes.position,Fe=at.start*Ge,yt=(at.start+at.count)*Ge;xe!==null&&(Fe=Math.max(Fe,xe.start*Ge),yt=Math.min(yt,(xe.start+xe.count)*Ge)),De!==null?(Fe=Math.max(Fe,0),yt=Math.min(yt,De.count)):lt!=null&&(Fe=Math.max(Fe,0),yt=Math.min(yt,lt.count));let Nt=yt-Fe;if(Nt<0||Nt===1/0)return;be.setup(q,Y,Ie,$,De);let Mt,bt=F;if(De!==null&&(Mt=O.get(De),bt=te,bt.setIndex(Mt)),q.isMesh)Y.wireframe===!0?(P.setLineWidth(Y.wireframeLinewidth*Je()),bt.setMode(z.LINES)):bt.setMode(z.TRIANGLES);else if(q.isLine){let At=Y.linewidth;At===void 0&&(At=1),P.setLineWidth(At*Je()),q.isLineSegments?bt.setMode(z.LINES):q.isLineLoop?bt.setMode(z.LINE_LOOP):bt.setMode(z.LINE_STRIP)}else q.isPoints?bt.setMode(z.POINTS):q.isSprite&&bt.setMode(z.TRIANGLES);if(q.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))bt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let At=q._multiDrawStarts,Oe=q._multiDrawCounts,ii=q._multiDrawCount,Es=De?O.get(De).bytesPerElement:1,mi=H.get(Y).currentProgram.getUniforms();for(let Bi=0;Bi<ii;Bi++)mi.setValue(z,"_gl_DrawID",Bi),bt.render(At[Bi]/Es,Oe[Bi])}else if(q.isInstancedMesh)bt.renderInstances(Fe,Nt,q.count);else if($.isInstancedBufferGeometry){let At=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Oe=Math.min($.instanceCount,At);bt.renderInstances(Fe,Nt,Oe)}else bt.render(Fe,Nt)};function Gt(w,V,$,Y){R!==null&&w.isNodeMaterial&&R.setObject(Y,w),oe===!0&&ve.setState(w,$,!1),w.transparent===!0&&w.side===vi&&w.forceSinglePass===!1?(w.side=Qt,w.needsUpdate=!0,Ea(w,V,Y),w.side=rs,w.needsUpdate=!0,Ea(w,V,Y),w.side=vi):Ea(w,V,Y)}this.compile=function(w,V,$=null){$===null&&($=w),R!==null&&R.renderStart(w,V,$),S=se.get($),S.init(V),A.push(S),$.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(S.pushLight(q),q.castShadow&&S.pushShadow(q))}),w!==$&&w.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(S.pushLight(q),q.castShadow&&S.pushShadow(q))}),S.setupLights(),R!==null&&R.updateLights(S.state.lightsArray),fe=this.localClippingEnabled,oe=ve.init(this.clippingPlanes,fe),oe===!0&&ve.setGlobalState(this.clippingPlanes,V),R!==null&&Me.render(S.state.shadowsArray,$,V);let Y=new Set;return w.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let xe=q.material;if(xe)if(Array.isArray(xe))for(let Ee=0;Ee<xe.length;Ee++){let Ie=xe[Ee];Gt(Ie,$,V,q),Y.add(Ie)}else Gt(xe,$,V,q),Y.add(xe)}),S=A.pop(),R!==null&&R.renderEnd(),Y},this.compileAsync=function(w,V,$=null){let Y=this.compile(w,V,$);return new Promise(q=>{function xe(){if(Y.forEach(function(Ee){let Ie=H.get(Ee).currentProgram;(Ie===void 0||Ie.isReady())&&Y.delete(Ee)}),Y.size===0){q(w);return}setTimeout(xe,10)}Ke.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let oi=null;function ti(w){oi&&oi(w)}function Di(){hi.stop()}function Vt(){hi.start()}let hi=new ju;hi.setAnimationLoop(ti),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(w){oi=w,_e.setAnimationLoop(w),w===null?hi.stop():hi.start()},_e.addEventListener("sessionstart",Di),_e.addEventListener("sessionend",Vt),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;R!==null&&R.renderStart(w,V);let $=_e.enabled===!0&&_e.isPresenting===!0,Y=v!==null&&(Z===null||$)&&v.begin(M,Z);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(V),V=_e.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,V,Z),S=se.get(w,A.length),S.init(V),S.state.textureUnits=J.getTextureUnits(),A.push(S),we.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),le.setFromProjectionMatrix(we,wi,V.reversedDepth),fe=this.localClippingEnabled,oe=ve.init(this.clippingPlanes,fe),g=ge.get(w,E.length),g.init(),E.push(g),_e.enabled===!0&&_e.isPresenting===!0){let xe=M.xr.getDepthSensingMesh();xe!==null&&xi(xe,V,-1/0,M.sortObjects)}xi(w,V,0,M.sortObjects),g.finish(),R!==null&&R.updateLights(S.state.lightsArray),M.sortObjects===!0&&g.sort(me,Be),Xe=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Xe&&Pe.addToRenderList(g,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&ve.beginShadows();let q=S.state.shadowsArray;if(Me.render(q,w,V),oe===!0&&ve.endShadows(),(Y&&v.hasRenderPass())===!1){let xe=g.opaque,Ee=g.transmissive;if(S.setupLights(),V.isArrayCamera){let Ie=V.cameras;if(Ee.length>0)for(let De=0,Ge=Ie.length;De<Ge;De++){let at=Ie[De];ci(xe,Ee,w,at)}Xe&&Pe.render(w);for(let De=0,Ge=Ie.length;De<Ge;De++){let at=Ie[De];hs(g,w,at,at.viewport)}}else Ee.length>0&&ci(xe,Ee,w,V),Xe&&Pe.render(w),hs(g,w,V)}Z!==null&&K===0&&(J.updateMultisampleRenderTarget(Z),J.updateRenderTargetMipmap(Z)),Y&&v.end(M),w.isScene===!0&&w.onAfterRender(M,w,V),be.resetDefaultState(),ye=-1,Q=null,A.pop(),A.length>0?(S=A[A.length-1],J.setTextureUnits(S.state.textureUnits),oe===!0&&ve.setGlobalState(M.clippingPlanes,S.state.camera)):S=null,E.pop(),E.length>0?g=E[E.length-1]:g=null,R!==null&&R.renderEnd()};function xi(w,V,$,Y){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLightProbeGrid)S.pushLightProbeGrid(w);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(le)){Y&&Le.setFromMatrixPosition(w.matrixWorld).applyMatrix4(we);let xe=C.update(w),Ee=w.material;Ee.visible&&g.push(w,xe,Ee,$,Le.z,null,V)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(le))){let xe=C.update(w),Ee=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Le.copy(w.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Le.copy(xe.boundingSphere.center)),Le.applyMatrix4(w.matrixWorld).applyMatrix4(we)),Array.isArray(Ee)){let Ie=xe.groups;for(let De=0,Ge=Ie.length;De<Ge;De++){let at=Ie[De],lt=Ee[at.materialIndex];lt&&lt.visible&&g.push(w,xe,lt,$,Le.z,at,V)}}else Ee.visible&&g.push(w,xe,Ee,$,Le.z,null,V)}}let q=w.children;for(let xe=0,Ee=q.length;xe<Ee;xe++)xi(q[xe],V,$,Y)}function hs(w,V,$,Y){let{opaque:q,transmissive:xe,transparent:Ee}=w;S.setupLightsView($),oe===!0&&ve.setGlobalState(M.clippingPlanes,$),Y&&P.viewport(ie.copy(Y)),q.length>0&&Oi(q,V,$),xe.length>0&&Oi(xe,V,$),Ee.length>0&&Oi(Ee,V,$),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function ci(w,V,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Y.id]===void 0){let lt=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Y.id]=new Ai(1,1,{generateMipmaps:!0,type:lt?Xi:pi,minFilter:Ls,samples:Math.max(4,tt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let q=S.state.transmissionRenderTarget[Y.id],xe=Y.viewport||ie;q.setSize(xe.z*M.transmissionResolutionScale,xe.w*M.transmissionResolutionScale);let Ee=M.getRenderTarget(),Ie=M.getActiveCubeFace(),De=M.getActiveMipmapLevel();M.setRenderTarget(q),M.getClearColor(Ne),pt=M.getClearAlpha(),pt<1&&M.setClearColor(16777215,.5),M.clear(),Xe&&Pe.render($);let Ge=M.toneMapping;M.toneMapping=Vi;let at=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),S.setupLightsView(Y),oe===!0&&ve.setGlobalState(M.clippingPlanes,Y),Oi(w,$,Y),J.updateMultisampleRenderTarget(q),J.updateRenderTargetMipmap(q),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Fe=0,yt=V.length;Fe<yt;Fe++){let Nt=V[Fe],{object:Mt,geometry:bt,material:At,group:Oe}=Nt;if(At.side===vi&&Mt.layers.test(Y.layers)){let ii=At.side;At.side=Qt,At.needsUpdate=!0,ph(Mt,$,Y,bt,At,Oe),At.side=ii,At.needsUpdate=!0,lt=!0}}lt===!0&&(J.updateMultisampleRenderTarget(q),J.updateRenderTargetMipmap(q))}M.setRenderTarget(Ee,Ie,De),M.setClearColor(Ne,pt),at!==void 0&&(Y.viewport=at),M.toneMapping=Ge}function Oi(w,V,$){let Y=V.isScene===!0?V.overrideMaterial:null;for(let q=0,xe=w.length;q<xe;q++){let Ee=w[q],{object:Ie,geometry:De,group:Ge}=Ee,at=Ee.material;at.allowOverride===!0&&Y!==null&&(at=Y),Ie.layers.test($.layers)&&ph(Ie,V,$,De,at,Ge)}}function ph(w,V,$,Y,q,xe){R!==null&&q.isNodeMaterial&&R.setObject(w,q),w.onBeforeRender(M,V,$,Y,q,xe),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(M,V,$,Y,w,xe),q.transparent===!0&&q.side===vi&&q.forceSinglePass===!1?(q.side=Qt,q.needsUpdate=!0,M.renderBufferDirect($,V,Y,q,w,xe),q.side=rs,q.needsUpdate=!0,M.renderBufferDirect($,V,Y,q,w,xe),q.side=vi):M.renderBufferDirect($,V,Y,q,w,xe),w.onAfterRender(M,V,$,Y,q,xe)}function Ea(w,V,$){V.isScene!==!0&&(V=ze);let Y=H.get(w),q=S.state.lights,xe=S.state.shadowsArray,Ee=q.state.version,Ie=G.getParameters(w,q.state,xe,V,$,S.state.lightProbeGridArray),De=G.getProgramCacheKey(Ie),Ge=Y.programs;Y.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?V.environment:null,Y.fog=V.fog;let at=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Y.envMap=L.get(w.envMap||Y.environment,at),Y.envMapRotation=Y.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,Ge===void 0&&(w.addEventListener("dispose",fi),Ge=new Map,Y.programs=Ge);let lt=Ge.get(De);if(lt!==void 0){if(Y.currentProgram===lt&&Y.lightsStateVersion===Ee)return mh(w,Ie),lt}else Ie.uniforms=G.getUniforms(w),R!==null&&w.isNodeMaterial&&R.build(w,$,Ie),w.onBeforeCompile(Ie,M),lt=G.acquireProgram(Ie,De),Ge.set(De,lt),Y.uniforms=Ie.uniforms;let Fe=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Fe.clippingPlanes=ve.uniform),mh(w,Ie),Y.needsLights=lp(w),Y.lightsStateVersion=Ee,Y.needsLights&&(Fe.ambientLightColor.value=q.state.ambient,Fe.lightProbe.value=q.state.probe,Fe.sunLights.value=q.state.sun,Fe.sunLightShadows.value=q.state.sunShadow,Fe.directionalLights.value=q.state.directional,Fe.directionalLightShadows.value=q.state.directionalShadow,Fe.spotLights.value=q.state.spot,Fe.spotLightShadows.value=q.state.spotShadow,Fe.rectAreaLights.value=q.state.rectArea,Fe.ltc_1.value=q.state.rectAreaLTC1,Fe.ltc_2.value=q.state.rectAreaLTC2,Fe.pointLights.value=q.state.point,Fe.pointLightShadows.value=q.state.pointShadow,Fe.hemisphereLights.value=q.state.hemi,Fe.sunShadowMatrix.value=q.state.sunShadowMatrix,Fe.sunShadowCascade.value=q.state.sunShadowCascade,Fe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Fe.spotLightMatrix.value=q.state.spotLightMatrix,Fe.spotLightMap.value=q.state.spotLightMap,Fe.pointShadowMatrix.value=q.state.pointShadowMatrix),Y.lightProbeGrid=S.state.lightProbeGridArray.length>0,Y.currentProgram=lt,Y.uniformsList=null,lt}function fh(w){if(w.uniformsList===null){let V=w.currentProgram.getUniforms();w.uniformsList=dn.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function mh(w,V){let $=H.get(w);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function ap(w,V){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;b.setFromMatrixPosition(V.matrixWorld);for(let $=0,Y=w.length;$<Y;$++){let q=w[$];if(q.texture!==null&&q.boundingBox.containsPoint(b))return q}return null}function np(w,V,$,Y,q){V.isScene!==!0&&(V=ze),J.resetTextureUnits();let xe=V.fog,Ee=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?V.environment:null,Ie=Z===null?M.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ot.workingColorSpace,De=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ge=L.get(Y.envMap||Ee,De),at=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,lt=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Fe=!!$.morphAttributes.position,yt=!!$.morphAttributes.normal,Nt=!!$.morphAttributes.color,Mt=Vi;Y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Mt=M.toneMapping);let bt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,At=bt!==void 0?bt.length:0,Oe=H.get(Y),ii=S.state.lights;if(oe===!0&&(fe===!0||w!==Q)){let xt=w===Q&&Y.id===ye;ve.setState(Y,w,xt)}let Es=!1;Y.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ii.state.version||Oe.outputColorSpace!==Ie||q.isBatchedMesh&&Oe.batching===!1||!q.isBatchedMesh&&Oe.batching===!0||q.isBatchedMesh&&Oe.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Oe.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Oe.instancing===!1||!q.isInstancedMesh&&Oe.instancing===!0||q.isSkinnedMesh&&Oe.skinning===!1||!q.isSkinnedMesh&&Oe.skinning===!0||q.isInstancedMesh&&Oe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Oe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Oe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Oe.instancingMorph===!1&&q.morphTexture!==null||Oe.envMap!==Ge||Y.fog===!0&&Oe.fog!==xe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ve.numPlanes||Oe.numIntersection!==ve.numIntersection)||Oe.vertexAlphas!==at||Oe.vertexTangents!==lt||Oe.morphTargets!==Fe||Oe.morphNormals!==yt||Oe.morphColors!==Nt||Oe.toneMapping!==Mt||Oe.morphTargetsCount!==At||!!Oe.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Es=!0):(Es=!0,Oe.__version=Y.version);let mi=Oe.currentProgram;Es===!0&&(mi=Ea(Y,V,q),R&&Y.isNodeMaterial&&R.onUpdateProgram(Y,mi,Oe));let Bi=!1,cs=!1,js=!1,_t=mi.getUniforms(),It=Oe.uniforms;if(P.useProgram(mi.program)&&(Bi=!0,cs=!0,js=!0),Y.id!==ye&&(ye=Y.id,cs=!0),Oe.needsLights){let xt=ap(S.state.lightProbeGridArray,q);Oe.lightProbeGrid!==xt&&(Oe.lightProbeGrid=xt,cs=!0)}if(Bi||Q!==w){P.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),_t.setValue(z,"projectionMatrix",w.projectionMatrix),_t.setValue(z,"viewMatrix",w.matrixWorldInverse);let xt=_t.map.cameraPosition;xt!==void 0&&xt.setValue(z,Re.setFromMatrixPosition(w.matrixWorld)),tt.logarithmicDepthBuffer&&_t.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&_t.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),Q!==w&&(Q=w,cs=!0,js=!0)}if(Oe.needsLights&&(ii.state.sunShadowMap.length>0&&_t.setValue(z,"sunShadowMap",ii.state.sunShadowMap,J),ii.state.directionalShadowMap.length>0&&_t.setValue(z,"directionalShadowMap",ii.state.directionalShadowMap,J),ii.state.spotShadowMap.length>0&&_t.setValue(z,"spotShadowMap",ii.state.spotShadowMap,J),ii.state.pointShadowMap.length>0&&_t.setValue(z,"pointShadowMap",ii.state.pointShadowMap,J)),q.isSkinnedMesh){_t.setOptional(z,q,"bindMatrix"),_t.setOptional(z,q,"bindMatrixInverse");let xt=q.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),_t.setValue(z,"boneTexture",xt.boneTexture,J))}q.isBatchedMesh&&(_t.setOptional(z,q,"batchingTexture"),_t.setValue(z,"batchingTexture",q._matricesTexture,J),_t.setOptional(z,q,"batchingIdTexture"),_t.setValue(z,"batchingIdTexture",q._indirectTexture,J),_t.setOptional(z,q,"batchingColorTexture"),q._colorsTexture!==null&&_t.setValue(z,"batchingColorTexture",q._colorsTexture,J));let us=$.morphAttributes;if((us.position!==void 0||us.normal!==void 0||us.color!==void 0)&&ke.update(q,$,mi),(cs||Oe.receiveShadow!==q.receiveShadow)&&(Oe.receiveShadow=q.receiveShadow,_t.setValue(z,"receiveShadow",q.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&V.environment!==null&&(It.envMapIntensity.value=V.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=ix()),cs){if(_t.setValue(z,"toneMappingExposure",M.toneMappingExposure),Oe.needsLights&&op(It,js),xe&&Y.fog===!0&&ce.refreshFogUniforms(It,xe),ce.refreshMaterialUniforms(It,Y,he,ee,S.state.transmissionRenderTarget[w.id]),Oe.needsLights&&Oe.lightProbeGrid){let xt=Oe.lightProbeGrid;It.probesSH.value=xt.texture,It.probesMin.value.copy(xt.boundingBox.min),It.probesMax.value.copy(xt.boundingBox.max),It.probesResolution.value.copy(xt.resolution)}dn.upload(z,fh(Oe),It,J)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(dn.upload(z,fh(Oe),It,J),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&_t.setValue(z,"center",q.center),_t.setValue(z,"modelViewMatrix",q.modelViewMatrix),_t.setValue(z,"normalMatrix",q.normalMatrix),_t.setValue(z,"modelMatrix",q.matrixWorld),Y.uniformsGroups!==void 0){let xt=Y.uniformsGroups;for(let zr=0,Xs=xt.length;zr<Xs;zr++){let vh=xt[zr];de.update(vh,mi),de.bind(vh,mi)}}return mi}function op(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.sunLights.needsUpdate=V,w.sunLightShadows.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function lp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(w,V,$){let Y=H.get(w);Y.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),H.get(w.texture).__webglTexture=V,H.get(w.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:$,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){let $=H.get(w);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,$=0){Z=w,X=V,K=$;let Y=null,q=!1,xe=!1;if(w){let Ee=H.get(w);if(Ee.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(z.FRAMEBUFFER,Ee.__webglFramebuffer),ie.copy(w.viewport),ue.copy(w.scissor),He=w.scissorTest,P.viewport(ie),P.scissor(ue),P.setScissorTest(He),ye=-1;return}else if(Ee.__webglFramebuffer===void 0)J.setupRenderTarget(w);else if(Ee.__hasExternalTextures)J.rebindTextures(w,H.get(w.texture).__webglTexture,H.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ge=w.depthTexture;if(Ee.__boundDepthTexture!==Ge){if(Ge!==null&&H.has(Ge)&&(w.width!==Ge.image.width||w.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(w)}}let Ie=w.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(xe=!0);let De=H.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(De[V])?Y=De[V][$]:Y=De[V],q=!0):w.samples>0&&J.useMultisampledRTT(w)===!1?Y=H.get(w).__webglMultisampledFramebuffer:Array.isArray(De)?Y=De[$]:Y=De,ie.copy(w.viewport),ue.copy(w.scissor),He=w.scissorTest}else ie.copy(Ce).multiplyScalar(he).floor(),ue.copy(Se).multiplyScalar(he).floor(),He=Qe;if($!==0&&(Y=N),P.bindFramebuffer(z.FRAMEBUFFER,Y)&&P.drawBuffers(w,Y),P.viewport(ie),P.scissor(ue),P.setScissorTest(He),q){let Ee=H.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ee.__webglTexture,$)}else if(xe){let Ee=V;for(let Ie=0;Ie<w.textures.length;Ie++){let De=H.get(w.textures[Ie]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ie,De.__webglTexture,$,Ee)}}else if(w!==null&&$!==0){let Ee=H.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ee.__webglTexture,$)}ye=-1};function gh(w){let V=H.get(w);return(V.__readFormat!==w.format||V.__readType!==w.type)&&(V.__readFormat=w.format,V.__readType=w.type,V.__formatReadable=tt.textureFormatReadable(w.format),V.__typeReadable=tt.textureTypeReadable(w.type)),V}this.readRenderTargetPixels=function(w,V,$,Y,q,xe,Ee,Ie=0){if(!(w&&w.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=H.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ee!==void 0&&(De=De[Ee]),De){P.bindFramebuffer(z.FRAMEBUFFER,De);try{let Ge=w.textures[Ie],at=Ge.format,lt=Ge.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ie);let Fe=gh(Ge);if(Fe.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-Y&&$>=0&&$<=w.height-q&&z.readPixels(V,$,Y,q,ne.convert(at),ne.convert(lt),xe)}finally{let Ge=Z!==null?H.get(Z).__webglFramebuffer:null;P.bindFramebuffer(z.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(w,V,$,Y,q,xe,Ee,Ie=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=H.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ee!==void 0&&(De=De[Ee]),De)if(V>=0&&V<=w.width-Y&&$>=0&&$<=w.height-q){P.bindFramebuffer(z.FRAMEBUFFER,De);let Ge=w.textures[Ie],at=Ge.format,lt=Ge.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ie);let Fe=gh(Ge);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let yt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,yt),z.bufferData(z.PIXEL_PACK_BUFFER,xe.byteLength,z.STREAM_READ),z.readPixels(V,$,Y,q,ne.convert(at),ne.convert(lt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Nt=Z!==null?H.get(Z).__webglFramebuffer:null;P.bindFramebuffer(z.FRAMEBUFFER,Nt);let Mt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await qp(z,Mt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,yt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,xe),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(yt),z.deleteSync(Mt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,$=0){let Y=Math.pow(2,-$),q=Math.floor(w.image.width*Y),xe=Math.floor(w.image.height*Y),Ee=V!==null?V.x:0,Ie=V!==null?V.y:0;J.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,Ee,Ie,q,xe),P.unbindTexture()},this.copyTextureToTexture=function(w,V,$=null,Y=null,q=0,xe=0){let Ee,Ie,De,Ge,at,lt,Fe,yt,Nt,Mt=w.isCompressedTexture?w.mipmaps[xe]:w.image;if($!==null)Ee=$.max.x-$.min.x,Ie=$.max.y-$.min.y,De=$.isBox3?$.max.z-$.min.z:1,Ge=$.min.x,at=$.min.y,lt=$.isBox3?$.min.z:0;else{let It=Math.pow(2,-q);Ee=Math.floor(Mt.width*It),Ie=Math.floor(Mt.height*It),w.isDataArrayTexture?De=Mt.depth:w.isData3DTexture?De=Math.floor(Mt.depth*It):De=1,Ge=0,at=0,lt=0}Y!==null?(Fe=Y.x,yt=Y.y,Nt=Y.z):(Fe=0,yt=0,Nt=0);let bt=ne.convert(V.format),At=ne.convert(V.type),Oe;V.isData3DTexture?(J.setTexture3D(V,0),Oe=z.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(J.setTexture2DArray(V,0),Oe=z.TEXTURE_2D_ARRAY):(J.setTexture2D(V,0),Oe=z.TEXTURE_2D),P.activeTexture(z.TEXTURE0),P.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),P.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),P.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment);let ii=P.getParameter(z.UNPACK_ROW_LENGTH),Es=P.getParameter(z.UNPACK_IMAGE_HEIGHT),mi=P.getParameter(z.UNPACK_SKIP_PIXELS),Bi=P.getParameter(z.UNPACK_SKIP_ROWS),cs=P.getParameter(z.UNPACK_SKIP_IMAGES);P.pixelStorei(z.UNPACK_ROW_LENGTH,Mt.width),P.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Mt.height),P.pixelStorei(z.UNPACK_SKIP_PIXELS,Ge),P.pixelStorei(z.UNPACK_SKIP_ROWS,at),P.pixelStorei(z.UNPACK_SKIP_IMAGES,lt);let js=w.isDataArrayTexture||w.isData3DTexture,_t=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){let It=H.get(w),us=H.get(V),xt=H.get(It.__renderTarget),zr=H.get(us.__renderTarget);P.bindFramebuffer(z.READ_FRAMEBUFFER,xt.__webglFramebuffer),P.bindFramebuffer(z.DRAW_FRAMEBUFFER,zr.__webglFramebuffer);for(let Xs=0;Xs<De;Xs++)js&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,H.get(w).__webglTexture,q,lt+Xs),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,H.get(V).__webglTexture,xe,Nt+Xs)),z.blitFramebuffer(Ge,at,Ee,Ie,Fe,yt,Ee,Ie,z.DEPTH_BUFFER_BIT,z.NEAREST);P.bindFramebuffer(z.READ_FRAMEBUFFER,null),P.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(q!==0||w.isRenderTargetTexture||H.has(w)){let It=H.get(w),us=H.get(V);P.bindFramebuffer(z.READ_FRAMEBUFFER,j),P.bindFramebuffer(z.DRAW_FRAMEBUFFER,D);for(let xt=0;xt<De;xt++)js?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,It.__webglTexture,q,lt+xt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,It.__webglTexture,q),_t?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,us.__webglTexture,xe,Nt+xt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,us.__webglTexture,xe),q!==0?z.blitFramebuffer(Ge,at,Ee,Ie,Fe,yt,Ee,Ie,z.COLOR_BUFFER_BIT,z.NEAREST):_t?z.copyTexSubImage3D(Oe,xe,Fe,yt,Nt+xt,Ge,at,Ee,Ie):z.copyTexSubImage2D(Oe,xe,Fe,yt,Ge,at,Ee,Ie);P.bindFramebuffer(z.READ_FRAMEBUFFER,null),P.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else _t?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(Oe,xe,Fe,yt,Nt,Ee,Ie,De,bt,At,Mt.data):V.isCompressedArrayTexture?z.compressedTexSubImage3D(Oe,xe,Fe,yt,Nt,Ee,Ie,De,bt,Mt.data):z.texSubImage3D(Oe,xe,Fe,yt,Nt,Ee,Ie,De,bt,At,Mt):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,xe,Fe,yt,Ee,Ie,bt,At,Mt.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,xe,Fe,yt,Mt.width,Mt.height,bt,Mt.data):z.texSubImage2D(z.TEXTURE_2D,xe,Fe,yt,Ee,Ie,bt,At,Mt);P.pixelStorei(z.UNPACK_ROW_LENGTH,ii),P.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Es),P.pixelStorei(z.UNPACK_SKIP_PIXELS,mi),P.pixelStorei(z.UNPACK_SKIP_ROWS,Bi),P.pixelStorei(z.UNPACK_SKIP_IMAGES,cs),xe===0&&V.generateMipmaps&&z.generateMipmap(Oe),P.unbindTexture()},this.initRenderTarget=function(w){H.get(w).__webglFramebuffer===void 0&&J.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?J.setTextureCube(w,0):w.isData3DTexture?J.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?J.setTexture2DArray(w,0):J.setTexture2D(w,0),P.unbindTexture()},this.resetState=function(){X=0,K=0,Z=null,P.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};});var Ae,Hs,Ii=ut(()=>{Ae={world:{gravity:34,maxFall:40,coyoteTime:.12,jumpBuffer:.14,stepHeight:.45,pushStrength:1},heroes:{kid:{walk:5.2,run:9.2,accel:58,decel:42,air:20,jump:2.15,gravity:1,turn:15,stamina:7,regen:.22,mass:1,reach:1.25,climb:3.6,dash:{mul:1.45,time:.35,cooldown:4}},masha:{walk:5.2,run:9,accel:60,decel:42,air:20,jump:2.2,gravity:1,turn:16,stamina:6.5,regen:.22,mass:1,reach:1.25,climb:3.6,dash:{mul:1.45,time:.35,cooldown:4}},catbus:{walk:5.8,run:11,accel:32,decel:22,air:10,jump:1.8,gravity:1.15,turn:7,stamina:5,regen:.18,mass:3,reach:1,climb:2.6,dash:{mul:1.3,time:.6,cooldown:6}},moti:{walk:4.6,run:8.2,accel:26,decel:30,air:8,jump:1.6,gravity:1.3,turn:9,stamina:8,regen:.25,mass:4,reach:1.35,climb:2.4,dash:{mul:1.25,time:.5,cooldown:7}},noface:{walk:4.6,run:8.4,accel:14,decel:12,air:8,jump:0,gravity:1,turn:5,stamina:9,regen:.16,mass:5,reach:0,climb:0,dash:{mul:1.55,time:.8,cooldown:1.2,charges:3,recharge:12},fly:{speed:2.6,time:2.6,regen:.25}}},camera:{distance:6.5,minDistance:1.2,height:1.5,fov:62,mouseSens:.0026,touchSens:.0055,pitchMin:-.35,pitchMax:1.15,follow:12},ghost:{count:1,spawnGap:4,lateBoost:.08,burstRange:7,catchRadius:1.05,catchHeight:2.2,sightRange:22,hearRunRange:9,loseSightTime:2.2,repathEvery:.35,disguise:{cd:18,time:9,noticeRange:2.6},grab:1.1},abilities:{shelter:{cd:22,time:5,radius:3.4},light:{cd:14,radius:6,boost:1.2,boostTime:3},wisps:{cd:24,count:3,slow:4,stun:.6},path:{cd:18,time:8},swing:{cd:2.5,range:2.6,stun:1.6,knock:3.5},wave:{cd:1.5},dash:{},prop:{cd:4,walk:.45}},bots:{fleeRange:13,hideChance:.55,think:.25,restless:[7,15],helpRange:20,calmRun:.55,jukeRange:3.2,roofChance:.45},round:{hide:120,headStart:15,chase:60,chaseGhosts:4,chaseBotSpeed:.9,pumpkins:14,reward:{found:3,survive:5,catch:2}},graphics:{maxPixelRatioDesktop:1.75,maxPixelRatioMobile:1.35,shadows:!0,shadowMapSize:1024,fireflies:90}},Hs=JSON.parse(JSON.stringify({world:Ae.world,heroes:Ae.heroes,ghost:Ae.ghost,abilities:Ae.abilities,bots:Ae.bots}))});function re(e,t={}){let i=e+JSON.stringify(t);if($l.has(i))return $l.get(i);let s=new Ct({color:e,roughness:t.roughness??.72,metalness:t.metalness??0,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,transparent:t.opacity!==void 0&&t.opacity<1,opacity:t.opacity??1,flatShading:!!t.flat,side:t.side??rs,map:t.map??null});return $l.set(i,s),s}function k(e,t,{x:i=0,y:s=0,z:r=0,sx:a=1,sy:n=1,sz:o=1,rx:l=0,ry:h=0,rz:c=0,shadow:d=!0}={}){let u=new ht(e,t);return u.position.set(i,s,r),u.scale.set(a,n,o),u.rotation.set(l,h,c),u.castShadow=d,u.receiveShadow=!1,u}function ct(e,t,i){let s=new nt;return s.position.set(e,t,i),s}function ei(e,t,i){let s=document.createElement("canvas");s.width=e,s.height=t,i(s.getContext("2d"),e,t);let r=new Ss(s);return r.colorSpace=jt,r.anisotropy=4,r}function Cn(e=.07,t=2759188){let i=new nt,s=k(W.sphere(1,16,12),re(t,{roughness:.3}),{sx:e*.8,sy:e,sz:e*.35,shadow:!1}),r=k(W.sphere(1,8,6),re(16777215,{emissive:16777215,emissiveIntensity:.6}),{x:e*.25,y:e*.35,z:e*.3,sx:e*.28,sy:e*.28,sz:e*.1,shadow:!1}),a=k(W.sphere(1,8,6),re(16777215,{emissive:16777215,emissiveIntensity:.6}),{x:-e*.25,y:-e*.35,z:e*.3,sx:e*.14,sy:e*.14,sz:e*.08,shadow:!1});return i.add(s,r,a),i}function Pt(e,t=3,i=.08,s=1,r=!0){let a=new Vl(e,t),n=a.attributes.position,o=new I,l=[];for(let h=0;h<n.count;h++){o.fromBufferAttribute(n,h),l.push(`${o.x.toFixed(4)},${o.y.toFixed(4)},${o.z.toFixed(4)}`);let c=o.clone().normalize(),d=Math.sin(c.x*9.1+s)*Math.cos(c.y*7.3+s*2)*Math.sin(c.z*8.7+s*3)+.5*Math.sin(c.x*23+c.y*17+s*5)*Math.cos(c.z*19-s);o.multiplyScalar(1+d*i),n.setXYZ(h,o.x,o.y,o.z)}if(a.computeVertexNormals(),r){let h=a.attributes.normal,c=new Map;for(let d=0;d<n.count;d++){let u=c.get(l[d])||[0,0,0];u[0]+=h.getX(d),u[1]+=h.getY(d),u[2]+=h.getZ(d),c.set(l[d],u)}for(let d=0;d<n.count;d++){let u=c.get(l[d]),p=Math.hypot(u[0],u[1],u[2])||1;h.setXYZ(d,u[0]/p,u[1]/p,u[2]/p)}}return a}function Ir(e,t,i,{stride:s=.9,armSwing:r=.7,bob:a=.05,freq:n=1}={}){let o=t.speed,l=Math.min(1,o/4);e.phase=(e.phase||0)+i*(4+o*1.15)*n*(l>.05?1:0);let h=Math.sin(e.phase),c=e.blend=Tt.lerp(e.blend||0,l,1-Math.exp(-i*10)),d=t.grounded?0:1;e.air=Tt.lerp(e.air||0,d,1-Math.exp(-i*12));let u=h*s*c;if(e.legL&&(e.legL.rotation.x=Tt.lerp(u,-.5,e.air)),e.legR&&(e.legR.rotation.x=Tt.lerp(-u,.35,e.air)),e.armL&&(e.armL.rotation.x=Tt.lerp(-h*r*c,-2.4,e.air*.8),e.armL.rotation.z=Tt.lerp(.12,.5,e.air)),e.armR&&(e.armR.rotation.x=Tt.lerp(h*r*c,-2.4,e.air*.8),e.armR.rotation.z=Tt.lerp(-.12,-.5,e.air)),e.body){let p=Math.sin(t.t*2.2)*.012*(1-c);e.body.position.y=e.bodyY+Math.abs(Math.cos(e.phase))*a*c+p,e.body.rotation.x=.12*c*Math.min(1,o/7)-e.air*.1}e.head&&(e.head.rotation.x=-.08*c+Math.sin(t.t*1.7)*.02)}function Lr(e,t,i){e.userData.sq=e.userData.sq??0,t.landed&&(e.userData.sq=Math.min(.22,.06+Math.abs(t.landSpeed)*.012)),e.userData.sq=Tt.lerp(e.userData.sq,0,1-Math.exp(-i*12));let s=e.userData.sq;e.scale.set(1+s*.6,1-s,1+s*.6)}var $l,W,os=ut(()=>{Lt();$l=new Map;W={sphere:(e=1,t=24,i=16)=>new qt(e,t,i),capsule:(e,t,i=6,s=12)=>new kl(e,t,i,s),cyl:(e,t,i,s=20,r=!1)=>new Ar(e,t,i,s,1,r),box:(e,t,i)=>new Ms(e,t,i),cone:(e,t,i=20)=>new fa(e,t,i),torus:(e,t,i=10,s=24,r=Math.PI*2)=>new jl(e,t,i,s,r)}});function Qu(){let e=new nt,t=new nt;e.add(t);let i=re(16175803,{roughness:.6}),s=re(3809815,{roughness:.55}),r=re(15305370,{roughness:.8}),a=re(16052714),n=re(14240063,{roughness:.45}),o=ei(64,64,(y,b,g)=>{y.fillStyle="#f4f2ea",y.fillRect(0,0,b,g),y.fillStyle="#6ea77a";for(let S=0;S<g;S+=16)y.fillRect(0,S,b,8)});o.wrapS=o.wrapT=Ri,o.repeat.set(3,2.2);let l=re(16777215,{map:o,roughness:.85}),h=o.clone();h.repeat.set(2,1),h.needsUpdate=!0;let c=re(16777215,{map:h,roughness:.85}),d={bodyY:.62};for(let y of[-1,1]){let b=ct(y*.095,.62,0);b.add(k(W.capsule(.066,.36),i,{y:-.25})),b.add(k(W.cyl(.07,.068,.12),a,{y:-.49})),b.add(k(W.sphere(1,16,12),n,{y:-.57,z:.035,sx:.085,sy:.06,sz:.13})),t.add(b),y<0?d.legR=b:d.legL=b}let u=ct(0,d.bodyY,0);t.add(u),d.body=u,u.add(k(W.cyl(.175,.205,.17,20),r,{y:0})),u.add(k(W.cyl(.15,.19,.36,20),l,{y:.24})),u.add(k(W.sphere(.152,20,10),l,{y:.41,sy:.45})),u.add(k(W.cyl(.05,.055,.08),i,{y:.47}));for(let y of[-1,1]){let b=ct(y*.19,.38,0);b.add(k(W.capsule(.058,.1),c,{y:-.08})),b.add(k(W.capsule(.043,.16),i,{y:-.26})),b.add(k(W.sphere(.05,12,10),i,{y:-.39})),u.add(b),y<0?d.armR=b:d.armL=b}let p=ct(0,.5,0);u.add(p),d.head=p,p.add(k(W.sphere(.24,32,24),i,{y:.2,sy:.96}));for(let y of[-1,1])p.add(k(W.sphere(.045,10,8),i,{x:y*.235,y:.18,sz:.6}));for(let y of[-1,1]){let b=Cn(.052);b.position.set(y*.088,.19,.214),b.rotation.y=y*.28,p.add(b),p.add(k(W.sphere(1,10,8),re(15899290,{opacity:.65,roughness:1}),{x:y*.15,y:.115,z:.18,sx:.045,sy:.022,sz:.02,ry:y*.6,shadow:!1})),p.add(k(W.capsule(.007,.04,2,6),s,{x:y*.09,y:.265,z:.215,rz:Math.PI/2+y*.18,shadow:!1}))}p.add(k(W.torus(.022,.006,6,12,Math.PI),re(10107701),{y:.1,z:.232,rz:Math.PI,shadow:!1}));let _=new qt(.262,32,20,0,Math.PI*2,0,Math.PI*.62);p.add(k(_,s,{y:.2,z:-.01,rx:-.78})),p.add(k(W.sphere(.25,24,16),s,{y:.13,z:-.08,sx:1.03,sy:.9,sz:.92}));let x=[[-.12,.3],[-.04,.315],[.05,.31],[.13,.295]];for(let[y,b]of x)p.add(k(W.sphere(1,12,10),s,{x:y,y:b,z:.19,sx:.07,sy:.075,sz:.05,rz:y*1.4}));for(let y of[-1,1])p.add(k(W.capsule(.045,.14,4,8),s,{x:y*.215,y:.1,z:.07,rz:y*.12}));let m=ct(0,.26,-.22);p.add(m),m.add(k(W.torus(.035,.016,8,16),re(9329368,{roughness:.3,emissive:3807856,emissiveIntensity:.6}),{rx:Math.PI/2-.4})),m.add(k(W.capsule(.045,.12,4,8),s,{y:-.09,z:-.04,rx:.5})),d.tail=m,t.scale.setScalar(1.12);function f(y,b){Ir(d,b,y,{stride:.95,armSwing:.85,bob:.045});let g=b.action;if(g&&g.name==="wave"){let S=Math.sin(Math.min(1,g.k)*Math.PI);d.armL.rotation.z=2.7*S+Math.sin(b.t*14)*.3*S,d.armL.rotation.x=-.2*S,d.head.rotation.z=Math.sin(b.t*4)*.1*S}else d.head.rotation.z=0;d.tail.rotation.x=.25+Math.sin(d.phase*2)*.15*d.blend+d.air*.5,Lr(e,b,y)}return{root:e,update:f,height:1.72}}var ed=ut(()=>{Lt();os()});function td(){let e=new nt,t=new nt;e.add(t);let i=ei(256,128,(A,v,M)=>{A.fillStyle="#ecd6ad",A.fillRect(0,0,v,M);let U=7,R=()=>(U=(U*9301+49297)%233280)/233280;A.fillStyle="#7d4f2e";for(let N=0;N<16;N++)A.beginPath(),A.ellipse(R()*v,R()*M,10+R()*18,7+R()*12,R()*3,0,Math.PI*2),A.fill();A.globalAlpha=.15,A.strokeStyle="#6b4526";for(let N=0;N<400;N++){let j=R()*v,D=R()*M;A.beginPath(),A.moveTo(j,D),A.lineTo(j+3,D+5),A.stroke()}}),s=re(16777215,{map:i,roughness:.9}),r=re(15719606,{roughness:.9}),a=re(8212270,{roughness:.9}),n=re(5978658,{roughness:.7}),o=re(16761946,{emissive:16754224,emissiveIntensity:1.6,roughness:.4}),l=re(5795898,{roughness:1,flat:!0}),h={},c=ct(0,1,0);t.add(c),h.body=c,c.add(k(W.capsule(.62,1.3,8,20),s,{rx:Math.PI/2}));for(let A of[-1,1])for(let v of[-.55,0,.55])c.add(k(W.box(.04,.4,.4),n,{x:A*.605,y:.12,z:v})),c.add(k(W.box(.03,.32,.32),o,{x:A*.625,y:.12,z:v,shadow:!1}));c.add(k(W.box(.34,.3,.04),o,{y:.15,z:-1.25,shadow:!1})),c.add(k(W.sphere(1,16,10),l,{y:.52,sx:.5,sy:.14,sz:1.05}));let d=ei(128,64,(A,v,M)=>{A.fillStyle="#6a4125",A.fillRect(0,0,v,M),A.fillStyle="#f7d992",A.fillRect(6,6,v-12,M-12),A.fillStyle="#3a2112",A.font="bold 44px serif",A.textAlign="center",A.textBaseline="middle",A.fillText("\u732B",v/2,M/2+2)});c.add(k(W.box(.5,.24,.05),re(16777215,{map:d,emissive:4465152,emissiveIntensity:.4}),{y:.74,z:.55})),c.add(k(W.box(.04,.12,.04),n,{y:.6,z:.55}));let u=re(16756810,{emissive:16747040,emissiveIntensity:2.2});for(let[A,v]of[[-.4,.75],[.4,.75],[-.4,-.75],[.4,-.75]])c.add(k(W.sphere(.07,10,8),u,{x:A,y:.55,z:v,sy:1.3,shadow:!1}));let p=ct(0,.05,1.05);c.add(p),h.head=p,p.add(k(W.sphere(.52,28,20),s,{sx:1.05,sy:.95,sz:.85}));for(let A of[-1,1]){p.add(k(W.cone(.16,.3,4),r,{x:A*.32,y:.48,z:-.02,rz:-A*.35,ry:Math.PI/4})),p.add(k(W.cone(.1,.18,4),re(14129802),{x:A*.31,y:.47,z:.02,rz:-A*.35,ry:Math.PI/4,shadow:!1}));let v=k(W.sphere(.13,20,14),re(16765498,{emissive:16757760,emissiveIntensity:.9,roughness:.2}),{x:A*.21,y:.17,z:.36,sz:.6,shadow:!1});v.add(k(W.sphere(1,10,8),re(1313797),{z:.105,sx:.026,sy:.1,sz:.03,shadow:!1})),p.add(v);for(let M of[-1,0,1])p.add(k(W.cyl(.006,.006,.55,4),re(16183264),{x:A*.5,y:0+M*.05,z:.3,rz:Math.PI/2+M*.12*A,ry:-A*.25,shadow:!1}))}p.add(k(W.sphere(.045,10,8),re(13068906),{y:.04,z:.45,shadow:!1})),p.add(k(W.torus(.27,.07,8,28,Math.PI),re(2757132),{y:-.02,z:.33,rz:Math.PI,sz:.6,shadow:!1})),p.add(k(W.torus(.27,.052,8,28,Math.PI),re(16512746,{roughness:.3}),{y:-.02,z:.37,rz:Math.PI,sz:.5,shadow:!1}));let _=[];for(let A of[.6,0,-.6])for(let v of[-1,1]){let M=ct(v*.42,.62,A);M.add(k(W.capsule(.13,.3,4,10),s,{y:-.25})),M.add(k(W.sphere(.15,12,10),r,{y:-.5,z:.05,sy:.7})),t.add(M),_.push({l:M,phase:(A===0?Math.PI:0)+(v>0?Math.PI:0)})}let x=ct(0,1.05,-1.2);t.add(x);let m=[],f=x;for(let A=0;A<6;A++){let v=ct(0,A===0?0:.2,0);v.add(k(W.sphere(.13-A*.008,12,10),A%2?r:a,{y:.1,sy:1.3})),v.rotation.x=-.35,f.add(v),f=v,m.push(v)}t.scale.setScalar(.92);let y=0,b=0,g=0,S=0;function E(A,v){let M=Math.min(1,v.speed/4);b=Tt.lerp(b,M,1-Math.exp(-A*10)),g=Tt.lerp(g,v.grounded?0:1,1-Math.exp(-A*12)),y+=A*(5+v.speed*1.3)*(M>.05?1:0),_.forEach(({l:U,phase:R})=>{U.rotation.x=Tt.lerp(Math.sin(y+R)*.8*b,R?-.7:.7,g)}),c.position.y=1+Math.abs(Math.sin(y))*.07*b+Math.sin(v.t*2)*.015,c.rotation.x=-g*.15+.05*b,p.rotation.y=Math.sin(v.t*.7)*.1*(1-b),m.forEach((U,R)=>{U.rotation.z=Math.sin(v.t*3+R*.6)*.15*(.5+b)}),o.emissiveIntensity=1.5+Math.sin(v.t*3)*.1,v.landed&&(S=Math.min(.2,.06+Math.abs(v.landSpeed)*.01)),S=Tt.lerp(S,0,1-Math.exp(-A*12)),e.scale.set(1+S*.5,1-S,1+S*.5)}return{root:e,update:E,height:1.9}}var id=ut(()=>{Lt();os()});function sd(e="classic"){let t=Pn[e]||Pn.classic,i=new nt,s=new nt;i.add(s);let r=re(t.fur,{roughness:.95}),a=re(t.shade,{roughness:1}),n=re(t.hat,{roughness:.7}),o=re(t.cloth,{roughness:.75}),l=re(2825495),h=re(7030054,{roughness:.85}),c=re(4138774,{roughness:.9}),d=re(16763248,{emissive:16754240,emissiveIntensity:2.4}),u={bodyY:.45};for(let R of[-1,1]){let N=ct(R*.36,.45,0);N.add(k(Pt(.28,2,.1,R+3),r,{y:-.2,sy:1.1})),N.add(k(W.sphere(.22,12,10),a,{y:-.4,z:.08,sy:.55}));for(let j of[-1,0,1])N.add(k(W.sphere(.035,6,4),re(7166538),{x:j*.08,y:-.43,z:.27,sz:1.4,shadow:!1}));s.add(N),R<0?u.legR=N:u.legL=N}let p=ct(0,u.bodyY,0);s.add(p),u.body=p,p.add(k(Pt(.86,4,.06,1.3),r,{y:.74,sy:1.1,sz:.92})),p.add(k(W.torus(.76,.08,8,32),o,{y:.2,rx:Math.PI/2,sy:.92})),p.add(k(W.box(.52,.42,.08),o,{y:0,z:.7,rx:-.14}));let _=ct(0,1.3,.68);p.add(_),u.head=_;let x=[];for(let R of[-1,1]){let N=k(W.sphere(1,12,8),l,{x:R*.14,y:.05,z:.08,sx:.038,sy:.022,sz:.02,shadow:!1});_.add(N),x.push(N),_.add(k(W.sphere(1,10,8),re(15771296,{opacity:.55,roughness:1}),{x:R*.26,y:-.03,z:.05,sx:.08,sy:.04,sz:.02,shadow:!1})),_.add(k(W.capsule(.013,.09,2,6),re(13616821),{x:R*.14,y:.15,z:.07,rz:Math.PI/2-R*.15,shadow:!1})),_.add(k(Pt(.19,2,.14,R*5),r,{x:R*.15,y:-.13,z:.08,sx:1.3,sy:.8,sz:.7})),_.add(k(Pt(.2,2,.16,R*11),r,{x:R*.46,y:-.05,z:-.1,sy:1.3}))}_.add(k(W.sphere(.055,10,8),re(15321528),{y:-.02,z:.15,shadow:!1})),_.add(k(Pt(.16,2,.16,9),r,{y:-.33,z:.05,sy:1.4}));let m=k(W.sphere(1,10,8),re(5909026),{y:-.2,z:.16,sx:.06,sy:.001,sz:.02,shadow:!1});_.add(m);let f=ct(0,1.66,.02);if(p.add(f),f.add(k(W.cyl(.66,.7,.05,32),n,{rx:.08})),f.add(k(new qt(.42,24,12,0,Math.PI*2,0,Math.PI/2),n,{y:.02,sy:.72})),f.add(k(W.cyl(.425,.425,.07,24),re(t.hatBand),{y:.05})),e==="holiday")for(let R=0;R<8;R++){let N=R/8*Math.PI*2;f.add(k(W.sphere(.035,8,6),re(16769162,{emissive:16760896,emissiveIntensity:1.5}),{x:Math.cos(N)*.43,y:.06,z:Math.sin(N)*.43,shadow:!1}))}e==="winter"&&f.add(k(Pt(.1,1,.2,2),re(16777215),{y:.33})),e==="forest"&&f.add(k(W.sphere(1,8,6),re(7909450,{flat:!0}),{x:.3,y:.2,z:.1,sx:.14,sy:.04,sz:.08,rz:.4}));let y=ct(0,.95,-.72);p.add(y),u.pack=y,y.add(k(W.box(1.15,1.3,.62),c,{z:-.3}));for(let R of[-1,1])for(let N of[-1,1])y.add(k(W.box(.1,.1,.68),h,{x:R*.58,y:N*.65,z:-.3}));for(let R of[-1,1])y.add(k(W.box(.1,1.4,.1),h,{x:R*.58,z:-.62}));for(let R of[-.2,.25])y.add(k(W.box(1.1,.06,.58),h,{y:R,z:-.3}));let b=new Rr;b.moveTo(-.78,0),b.lineTo(0,.42),b.lineTo(.78,0),b.closePath();let g=k(new ga(b,{depth:.86,bevelEnabled:!1}),re(3878984,{roughness:.6}),{y:.66,z:-.73});y.add(g);let S=ei(128,160,(R,N,j)=>{R.fillStyle="#b7473c",R.fillRect(0,0,N,j),R.fillStyle="#f1dcc0",R.fillRect(10,10,N-20,j-20),R.fillStyle="#8a3a2e",R.beginPath(),R.ellipse(64,95,26,22,0,0,Math.PI*2),R.fill();for(let[D,X]of[[36,60],[54,48],[74,48],[92,60]])R.beginPath(),R.ellipse(D,X,9,11,0,0,Math.PI*2),R.fill()});y.add(k(W.box(.62,.78,.02),re(16777215,{map:S,roughness:.9}),{y:-.05,z:-.63})),y.add(k(W.box(.36,.28,.02),d,{y:.42,z:-.63,shadow:!1}));for(let R of[-1,1]){let N=ct(R*.7,.3,-.35);N.add(k(W.cyl(.004,.004,.14,4),l,{y:-.07,shadow:!1})),N.add(k(W.cyl(.09,.09,.2,10),re(16747082,{emissive:16738858,emissiveIntensity:2}),{y:-.24,shadow:!1})),y.add(N)}y.add(k(W.cyl(.12,.1,.18,10),re(9067066),{x:-.35,y:-.5,z:-.62})),y.add(k(W.cyl(.09,.09,.5,10),re(14206106),{x:.3,y:-.52,z:-.66,rz:Math.PI/2}));for(let R of[-1,1])y.add(k(W.box(.12,1.1,.05),re(5913122),{x:R*.42,y:.1,z:.18,rx:.15}));let E=ei(64,64,(R,N,j)=>{R.fillStyle="#ffe2a0",R.fillRect(0,0,N,j),R.fillStyle="#a0461e",R.beginPath(),R.ellipse(32,40,13,11,0,0,Math.PI*2),R.fill();for(let[D,X]of[[17,22],[27,15],[38,15],[48,22]])R.beginPath(),R.ellipse(D,X,5,6,0,0,Math.PI*2),R.fill()}),A=new Ct({map:E,emissive:16754240,emissiveMap:E,emissiveIntensity:2.2});for(let R of[-1,1]){let N=ct(R*.8,1.08,.05);if(N.add(k(Pt(.22,2,.12,R*7),r,{y:-.3,sy:1.7})),N.add(k(Pt(.15,1,.1,R*8),a,{y:-.64})),p.add(N),R<0){u.armR=N;let j=ct(0,-.74,.08);j.add(k(W.cyl(.02,.02,.3,6),h,{y:-.05,shadow:!1})),j.add(k(W.cyl(.15,.15,.34,14),A,{y:-.36,shadow:!1})),j.add(k(W.cyl(.17,.17,.04,14),c,{y:-.18})),j.add(k(W.cyl(.17,.17,.04,14),c,{y:-.54})),N.add(j),u.lantern=j,u.lampMat=A}else u.armL=N}let v=[],M=re(16765066,{emissive:16751162,emissiveIntensity:2.4});for(let R=0;R<2;R++){let N=new nt;N.add(k(W.sphere(.1,10,8),M,{shadow:!1})),N.add(k(W.cone(.08,.2,8),M,{y:.13,shadow:!1}));for(let j of[-1,1])N.add(k(W.sphere(.014,6,4),l,{x:j*.035,y:.01,z:.09,shadow:!1}));s.add(N),v.push(N)}s.scale.setScalar(1.02);function U(R,N){Ir(u,{...N,speed:N.speed*.8},R,{stride:.55,armSwing:.35,bob:.06,freq:.8}),p.rotation.z=Math.sin(u.phase)*.06*u.blend,p.rotation.y=0,m.scale.y=.001,x.forEach(D=>D.scale.y=.022);let j=N.action;if(j){let D=j.k,X=Math.sin(Math.min(1,D)*Math.PI);if(j.name==="swing"){let K=D<.3?-D/.3:-1+(D-.3)/.7*2.6;u.armR.rotation.x=Tt.lerp(u.armR.rotation.x,-1.2*K-.3,.6),u.armR.rotation.z=-.3-X*.5,p.rotation.y=-K*.35,m.scale.y=.03*X}else if(j.name==="cast"||j.name==="summon"||j.name==="path"){let K=j.name==="summon"?-1.5:j.name==="path"?-1.1:-2.6;u.armL.rotation.x=K*X,u.armR.rotation.x=K*X,u.armL.rotation.z=.5*X,u.armR.rotation.z=-.5*X,p.position.y+=X*.08,p.rotation.x=-.12*X,m.scale.y=.04*X,x.forEach(Z=>Z.scale.y=.022-.015*X)}else j.name==="wave"&&(u.armL.rotation.x=-.3*X,u.armL.rotation.z=2.5*X+Math.sin(N.t*12)*.35*X,_.rotation.z=Math.sin(N.t*3)*.08*X,m.scale.y=.05*X,x.forEach(K=>K.scale.y=.022-.016*X))}else _.rotation.z=0;(!j||j.name!=="swing")&&(u.lantern.rotation.x=-u.armR.rotation.x+Math.sin(N.t*2.4)*.12),u.lampMat.emissiveIntensity=2.2+(j&&j.name!=="wave"?Math.sin(Math.min(1,j.k)*Math.PI)*2.5:0),u.pack.rotation.x=Math.sin(u.phase*2)*.03*u.blend,v.forEach((D,X)=>{let K=N.t*(1.1+X*.3)+X*Math.PI,Z=j&&j.name==="summon"?1.2+Math.sin(Math.min(1,j.k)*Math.PI)*1.2:1.15;D.position.set(Math.cos(K)*Z,1.7+Math.sin(N.t*2+X)*.2,Math.sin(K)*Z),D.rotation.y=-K+Math.PI}),Lr(i,N,R)}return{root:i,update:U,height:2.4}}var Pn,rd=ut(()=>{Lt();os();Pn={classic:{name:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439",fur:15920611,shade:14933197,hat:12857642,hatBand:9314588,cloth:12857642},winter:{name:"\u0417\u0438\u043C\u043D\u0438\u0439",fur:15331578,shade:13622510,hat:8365784,hatBand:4153237,cloth:4880568},forest:{name:"\u041B\u0435\u0441\u043D\u043E\u0439",fur:15788760,shade:14537659,hat:5212730,hatBand:3037730,cloth:14251819},holiday:{name:"\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u0447\u043D\u044B\u0439",fur:16183270,shade:15129034,hat:14168634,hatBand:15251018,cloth:12067884}}});function ad(){let e=new nt,t=new nt;e.add(t);let i=new Ct({color:789010,roughness:.35,metalness:.1,transparent:!0,opacity:.93,emissive:1444388,emissiveIntensity:.6}),s=[[0,0],[.5,0],[.58,.12],[.56,.5],[.5,1],[.46,1.5],[.43,1.8],[.42,2.05],[.38,2.28],[.28,2.44],[.12,2.52],[0,2.54]].map(([S,E])=>new pe(S,E)),r=k(new Wl(s,32),i);t.add(r);let a=re(15986662,{roughness:.45}).clone(),n=.29,o=.36,l=.13,h=2.06,c=.3;t.add(k(W.sphere(1,32,24),a,{y:h,z:c,sx:n,sy:o,sz:l}));let d=(S,E)=>{let A=1-S*S/(n*n)-E*E/(o*o);return c+l*Math.sqrt(Math.max(0,A))-.004},u=(S,E,A,v,M,U=0)=>{let R=k(W.sphere(1,16,10),M,{x:S,y:h+E,z:d(S,E),sx:A,sy:v,sz:.012,rz:U,shadow:!1});return R.lookAt(new I(S*2.2,h+E*1.4,2)),R.rotation.z+=U,t.add(R),R},p=re(7290771,{roughness:.6}),_=new Ct({color:328456,emissive:5974666,emissiveIntensity:0,roughness:1}),x=[];for(let S of[-1,1])x.push(u(S*.1,.05,.05,.03,_)),u(S*.1,.15,.028,.045,p,S*.3),u(S*.1,-.07,.022,.075,p);u(0,-.2,.05,.012,re(3877427));let m=[];for(let S of[-1,1]){let E=ct(S*.4,1.55,.1);E.add(k(W.capsule(.05,.7,4,8),i,{y:-.4})),E.add(k(W.sphere(.07,10,8),i,{y:-.8})),E.rotation.z=S*.06,t.add(E),m.push(E)}let f=Li("rgba(150,90,220,0.55)","rgba(80,30,140,0)"),y=new qi(new Ci({map:f,transparent:!0,depthWrite:!1,blending:Ot,opacity:0}));y.scale.set(3.4,4.2,1),y.position.set(0,1.4,-.2),t.add(y);let b=0;function g(S,E){let A=E.t;b=Tt.lerp(b,E.mode==="hunt"?1:0,1-Math.exp(-S*4)),t.position.y=.12+Math.sin(A*1.6)*.07,t.rotation.x=Math.min(.22,E.speed*.028),t.rotation.z=Math.sin(A*.9)*.03,m.forEach((M,U)=>{let R=U?1:-1;M.rotation.x=Tt.lerp(.05,-1.35+Math.sin(A*5+U)*.08,b),M.rotation.z=R*(.06+.1*(1-b))}),_.emissiveIntensity=b*(.9+Math.sin(A*6)*.3),y.material.opacity=(.25+b*.5)*(E.appear??1);let v=E.appear??1;i.opacity=.93*v,a.opacity=v,a.transparent=v<1,t.scale.set(.6+.4*v,v,.6+.4*v)}return{root:e,update:g,height:2.5}}function Li(e,t,i=128){let s=document.createElement("canvas");s.width=s.height=i;let r=s.getContext("2d"),a=r.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);a.addColorStop(0,e),a.addColorStop(1,t),r.fillStyle=a,r.fillRect(0,0,i,i);let n=new Ss(s);return n.colorSpace=jt,n}var Nr=ut(()=>{Lt();os()});function ya(){try{return{...Kl,...JSON.parse(localStorage.getItem(od)||"{}")}}catch{return{...Kl}}}function ld(e){try{localStorage.setItem(od,JSON.stringify(e))}catch{}}function nd(e,t){return ei(256,256,(i,s,r)=>{i.fillStyle=e,i.fillRect(0,0,s,r),i.strokeStyle=hd(e,.18),i.lineWidth=3;for(let l=8;l<s;l+=16)for(let h=0;h<r;h+=12)i.beginPath(),i.moveTo(l-5,h),i.lineTo(l,h+8),i.lineTo(l+5,h),i.stroke();i.fillStyle=sx(e,.18);for(let l=0;l<300;l++)i.fillRect(Math.random()*s,Math.random()*r,2,2);let a=s*.5,n=r*.42,o=44;if(t==="star"){i.fillStyle="#f7d65a",i.strokeStyle="#c8962a",i.lineWidth=3,i.beginPath();for(let l=0;l<10;l++){let h=-Math.PI/2+l*Math.PI/5,c=l%2?o*.45:o;i.lineTo(a+Math.cos(h)*c,n+Math.sin(h)*c)}i.closePath(),i.fill(),i.stroke()}else if(t==="heart")i.fillStyle="#f0506a",i.beginPath(),i.moveTo(a,n+o*.8),i.bezierCurveTo(a-o*1.4,n-o*.2,a-o*.5,n-o*1.1,a,n-o*.35),i.bezierCurveTo(a+o*.5,n-o*1.1,a+o*1.4,n-o*.2,a,n+o*.8),i.fill();else if(t==="paw"){i.fillStyle="#fff4e8",i.beginPath(),i.ellipse(a,n+8,15,12,0,0,7),i.fill();for(let[l,h]of[[-16,-10],[-6,-20],[6,-20],[16,-10]])i.beginPath(),i.ellipse(a+l,n+h,6,7,0,0,7),i.fill()}})}function rx(){return ei(128,128,(e,t,i)=>{e.fillStyle="#7fa6d6",e.fillRect(0,0,t,i);for(let s=0;s<900;s++)e.fillStyle=Math.random()<.5?"rgba(255,255,255,.18)":"rgba(30,60,120,.18)",e.fillRect(Math.random()*t,Math.random()*i,1,3)})}function cd(e){let t={...Kl,...e||{}},i=t.gender==="girl",s=new nt,r=new nt;s.add(r);let a=re(16308420,{roughness:.6}),n=re(In(t.hair).getHex(),{roughness:.55}),o=re(In(hd(t.hair,.2)).getHex(),{roughness:.6}),l=nd(t.sweater,t.emblem);l.wrapS=Ri;let h=new Ct({map:l,roughness:.95}),c=nd(t.sweater,"none");c.wrapS=c.wrapT=Ri,c.repeat.set(1,1);let d=new Ct({map:c,roughness:.95}),u=new Ct({map:rx(),roughness:.9}),p=re(16184568,{roughness:.5}),_=re(14207210,{roughness:.6}),x=re(16447476,{roughness:.9}),m=re(16103624,{roughness:.9}),f={bodyY:.52};for(let v of[-1,1]){let M=ct(v*.1,.52,0);M.add(k(W.capsule(.078,.3),u,{y:-.2})),M.add(k(W.cyl(.085,.09,.06,14),u,{y:-.39})),M.add(k(W.sphere(1,16,12),p,{y:-.46,z:.04,sx:.095,sy:.07,sz:.14})),M.add(k(W.box(.17,.03,.26),_,{y:-.515,z:.04})),i&&M.add(k(W.torus(.02,.008,6,10),re(12101872),{y:-.41,z:.12,rx:.3,shadow:!1})),r.add(M),v<0?f.legR=M:f.legL=M}let y=ct(0,f.bodyY,0);r.add(y),f.body=y,y.add(k(W.cyl(.19,.2,.1,20),u,{y:0}));let b=k(W.cyl(.19,.225,.34,24),h,{y:.2});b.rotation.y=Math.PI,y.add(b),y.add(k(W.torus(.2,.035,8,24),d,{y:.04,rx:Math.PI/2})),y.add(k(W.sphere(.19,20,10),d,{y:.37,sy:.42})),y.add(k(W.torus(.075,.03,8,16),d,{y:.42,rx:Math.PI/2}));for(let v of[-1,1]){let M=ct(v*.22,.34,0);M.add(k(W.capsule(.075,.16),d,{y:-.12})),M.add(k(W.torus(.06,.025,6,12),d,{y:-.26,rx:Math.PI/2})),M.add(k(W.sphere(.055,12,10),a,{y:-.31})),y.add(M),v<0?f.armR=M:f.armL=M}if(t.tail==="1"){let v=ct(0,.06,-.2);y.add(v);let M=Pt(1,2,.12,4),U=[],R=v;for(let N=0;N<5;N++){let j=ct(0,.05,-.07);R.add(j),j.add(k(M,x,{sx:.085+N*.012,sy:.085+N*.012,sz:.1+N*.012})),U.push(j),R=j}f.tailSegs=U}let g=ct(0,.44,0);y.add(g),f.head=g,g.add(k(W.sphere(.27,32,24),a,{y:.24,sy:.95}));for(let v of[-1,1]){let M=Cn(.062,4860442);M.position.set(v*.1,.22,.24),M.rotation.y=v*.28,g.add(M),g.add(k(W.sphere(1,10,8),re(15899290,{opacity:.7,roughness:1}),{x:v*.17,y:.14,z:.2,sx:.05,sy:.025,sz:.02,ry:v*.6,shadow:!1}))}g.add(k(W.torus(.024,.007,6,12,Math.PI),re(10107701),{y:.12,z:.262,rz:Math.PI,shadow:!1})),g.add(k(W.sphere(.012,8,6),re(15245456),{y:.17,z:.268,shadow:!1}));let S=new qt(.29,32,20,0,Math.PI*2,0,Math.PI*.6);g.add(k(S,n,{y:.24,z:-.01,rx:-.72})),g.add(k(W.sphere(.28,24,16),n,{y:.17,z:-.09,sx:1.04,sy:.92,sz:.94}));let E=t.hairStyle;if(E==="messy"||E==="spiky"){let v=Pt(1,1,.25,9),M=E==="spiky"?14:10;for(let U=0;U<M;U++){let R=U/M*Math.PI*2,N=.35+U%3*.12,j=Math.cos(R)*.2,D=Math.sin(R)*.2-.03;D>.14&&Math.abs(j)<.12||g.add(E==="spiky"?k(W.cone(.05,.14,6),n,{x:j,y:.36+N*.1,z:D,rx:D*2.5,rz:-j*2.5}):k(v,U%2?n:o,{x:j*1.1,y:.3+N*.12,z:D,sx:.09,sy:.07,sz:.09}))}for(let[U,R]of[[-.12,.34],[-.03,.36],[.07,.355],[.15,.33]])g.add(k(W.sphere(1,10,8),n,{x:U,y:R,z:.22,sx:.075,sy:.07,sz:.05,rz:U*2}))}else{for(let[v,M]of[[-.14,.34],[-.05,.355],[.05,.35],[.14,.335]])g.add(k(W.sphere(1,12,10),n,{x:v,y:M,z:.215,sx:.08,sy:.08,sz:.055,rz:v*1.4}));for(let v of[-1,1])g.add(k(W.capsule(.05,.16,4,8),n,{x:v*.245,y:.13,z:.07,rz:v*.12}))}if(f.braids=[],E==="braids")for(let v of[-1,1]){let M=ct(v*.2,.12,-.12);g.add(M);for(let U=0;U<4;U++)M.add(k(W.sphere(1,10,8),n,{x:v*.02*U,y:-.07*U-.02,z:-.02*U,sx:.05-U*.004,sy:.055,sz:.05-U*.004}));M.add(k(W.sphere(.03,10,8),re(10124008,{roughness:.3,emissive:3807856,emissiveIntensity:.4}),{x:v*.07,y:-.31,z:-.07})),M.add(k(W.cone(.04,.09,8),n,{x:v*.075,y:-.37,z:-.08,rx:Math.PI})),f.braids.push(M)}else if(E==="pony"){let v=ct(0,.32,-.25);g.add(v),v.add(k(W.torus(.04,.016,8,16),re(10124008,{roughness:.3}),{rx:Math.PI/2-.4})),v.add(k(W.capsule(.055,.16,4,8),n,{y:-.11,z:-.05,rx:.5})),f.braids.push(v)}if(i){let v=new nt;for(let M=0;M<6;M++){let U=M*Math.PI/3;v.add(k(W.sphere(1,8,6),re(16777215,{roughness:.5}),{x:Math.cos(U)*.035,y:Math.sin(U)*.035,sx:.028,sy:.028,sz:.012,shadow:!1}))}v.add(k(W.sphere(.018,8,6),re(16238666),{z:.01,shadow:!1})),v.position.set(.2,.38,.12),v.rotation.set(-.3,.7,0),g.add(v)}if(t.ears==="1"){f.ears=[];for(let v of[-1,1]){let M=ct(v*.16,.44,-.02);M.rotation.z=-v*.35,M.add(k(W.cone(.085,.19,4),x,{y:.07,sz:.55,ry:Math.PI/4})),M.add(k(W.cone(.05,.13,4),m,{y:.06,z:.02,sz:.3,ry:Math.PI/4})),M.add(k(Pt(1,1,.2,v+3),x,{y:.005,sx:.07,sy:.04,sz:.05})),g.add(M),f.ears.push(M)}}r.scale.setScalar(1.05);function A(v,M){Ir(f,M,v,{stride:.9,armSwing:.9,bob:.05});let U=M.action;if(U&&U.name==="wave"){let R=Math.sin(Math.min(1,U.k)*Math.PI);f.armL.rotation.z=2.7*R+Math.sin(M.t*14)*.3*R,f.armL.rotation.x=-.2*R,f.head.rotation.z=Math.sin(M.t*4)*.1*R}else f.head.rotation.z=0;f.tailSegs&&f.tailSegs.forEach((R,N)=>{R.rotation.y=Math.sin(M.t*3-N*.6)*(.25-f.blend*.15),R.rotation.x=-.25+f.blend*.2+f.air*.3}),f.ears&&f.ears.forEach((R,N)=>{R.rotation.x=Math.max(0,Math.sin(M.t*1.3+N*2))**8*.4}),f.braids.forEach((R,N)=>{R.rotation.x=.1+Math.sin(f.phase*2+N)*.18*f.blend+f.air*.4}),Lr(s,M,v)}return{root:s,update:A,height:1.55}}var Ql,Kl,od,In,sx,hd,eh=ut(()=>{Lt();os();Ql={gender:[["girl","\u0414\u0435\u0432\u043E\u0447\u043A\u0430"],["boy","\u041C\u0430\u043B\u044C\u0447\u0438\u043A"]],hairStyle:{girl:[["braids","\u041A\u043E\u0441\u0438\u0447\u043A\u0438"],["pony","\u0425\u0432\u043E\u0441\u0442\u0438\u043A"],["bob","\u041A\u0430\u0440\u0435"]],boy:[["messy","\u041B\u043E\u0445\u043C\u0430\u0442\u0430\u044F"],["spiky","\u0401\u0436\u0438\u043A"],["bob","\u0427\u0451\u043B\u043A\u0430"]]},hair:["#7a4a2a","#3a2217","#e8b86a","#c8683a","#f4f0f8","#9a6ad8"],sweater:["#b78ae8","#f07a5a","#6ab0e8","#f4c64a","#7ac88a","#f49ac0"],emblem:[["star","\u2B50"],["heart","\u2764\uFE0F"],["paw","\u{1F43E}"],["none","\u2014"]],ears:[["1","\u0414\u0430"],["0","\u041D\u0435\u0442"]],tail:[["1","\u0414\u0430"],["0","\u041D\u0435\u0442"]]},Kl={gender:"girl",hairStyle:"braids",hair:"#7a4a2a",sweater:"#b78ae8",emblem:"star",ears:"1",tail:"1"},od="masha-game-look-v1";In=e=>new qe(e),sx=(e,t)=>"#"+In(e).lerp(new qe(16777215),t).getHexString(),hd=(e,t)=>"#"+In(e).lerp(new qe(0),t).getHexString()});var ax,ni,zt,th=ut(()=>{ed();id();rd();Nr();eh();ax=e=>{try{return e&&e!=="classic"?JSON.parse(e):ya()}catch{return ya()}},ni=[{id:"kid",name:"\u041C\u043E\u0439 \u043A\u043E\u0442\u0438\u043A",rarity:"\u041C\u041E\u0419 \u0413\u0415\u0420\u041E\u0419",rarityClass:"rare",about:"\u0422\u0432\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0433\u0435\u0440\u043E\u0439! \u0412\u044B\u0431\u0435\u0440\u0438, \u0434\u0435\u0432\u043E\u0447\u043A\u0430 \u0438\u043B\u0438 \u043C\u0430\u043B\u044C\u0447\u0438\u043A, \u043F\u0440\u0438\u0447\u0451\u0441\u043A\u0443, \u0441\u0432\u0438\u0442\u0435\u0440, \u0443\u0448\u043A\u0438 \u0438 \u0445\u0432\u043E\u0441\u0442\u0438\u043A \u043A\u043E\u0442\u0438\u043A\u0430.",ability:"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430",abilityText:"Q \u2014 \u043F\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u0432 \u043F\u0440\u0435\u0434\u043C\u0435\u0442, G \u2014 \u043F\u043E\u043C\u0430\u0445\u0430\u0442\u044C. \u041F\u0440\u044B\u0433\u0443\u0447\u0438\u0439 \u0438 \u043B\u043E\u0432\u043A\u0438\u0439, \u043A\u0430\u043A \u041C\u0430\u0448\u0430.",tags:["\u0421\u0432\u043E\u0439 \u0441\u043A\u0438\u043D","\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430"],build:e=>cd(ax(e)),radius:.42,height:1.6,custom:!0,bot:!1,cam:{distance:6,height:1.4}},{id:"masha",name:"\u041C\u0430\u0448\u0430",rarity:"\u0413\u0415\u0420\u041E\u0419",rarityClass:"hero",about:"\u0421\u043C\u0435\u043B\u0430\u044F \u0434\u0435\u0432\u043E\u0447\u043A\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043D\u0430\u0448\u043B\u0430 \u0434\u043E\u0440\u043E\u0433\u0443 \u0432 \u043C\u0438\u0440 \u0434\u0443\u0445\u043E\u0432. \u041B\u0451\u0433\u043A\u0430\u044F, \u043F\u0440\u044B\u0433\u0443\u0447\u0430\u044F \u0438 \u043E\u0447\u0435\u043D\u044C \u0431\u044B\u0441\u0442\u0440\u0430\u044F \u043D\u0430 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430\u0445.",ability:"\u041B\u0451\u0433\u043A\u0438\u0435 \u043D\u043E\u0433\u0438",abilityText:"\u041F\u0440\u044B\u0433\u0430\u0435\u0442 \u0432\u044B\u0448\u0435 \u0432\u0441\u0435\u0445 \u0438 \u0440\u0435\u0437\u043A\u043E \u0441\u0442\u0430\u0440\u0442\u0443\u0435\u0442. E \u2014 \u0440\u044B\u0432\u043E\u043A, G \u2014 \u043F\u043E\u043C\u0430\u0445\u0430\u0442\u044C.",tags:["\u041F\u0440\u044B\u0436\u043E\u043A","\u0412\u044B\u043D\u043E\u0441\u043B\u0438\u0432\u043E\u0441\u0442\u044C"],build:Qu,radius:.42,height:1.72,cam:{distance:6.2,height:1.45}},{id:"catbus",name:"\u041D\u044D\u043A\u043E\u0411\u0443\u0441",rarity:"\u042D\u041F\u0418\u0427\u0415\u0421\u041A\u0418\u0419",rarityClass:"epic",about:"\u0414\u0443\u0445-\u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0443\u0432\u0435\u0437\u0451\u0442 \u0442\u0435\u0431\u044F \u0432 \u0441\u0430\u043C\u044B\u0435 \u0443\u0434\u0438\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043C\u0435\u0441\u0442\u0430. \u0412\u0441\u0435\u0433\u0434\u0430 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442, \u043A\u043E\u0433\u0434\u0430 \u0442\u044B \u0432 \u043F\u0443\u0442\u0438.",ability:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u043D\u043E\u0439 \u0440\u0435\u0439\u0441",abilityText:"\u0421\u0430\u043C\u044B\u0439 \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u043D\u0430 \u043F\u0440\u044F\u043C\u043E\u0439, \u043D\u043E \u0442\u044F\u0436\u0451\u043B\u044B\u0439 \u0438 \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E \u043F\u043E\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442. E \u2014 \u0434\u043B\u0438\u043D\u043D\u044B\u0439 \u0440\u044B\u0432\u043E\u043A.",tags:["\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C","\u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435"],build:td,radius:.85,height:1.9,cam:{distance:8.2,height:2.1,side:.6}},{id:"moti",name:"\u0414\u044F\u0434\u044E\u0448\u043A\u0430 \u041C\u043E\u0442\u0438",rarity:"\u042D\u041F\u0418\u0427\u0415\u0421\u041A\u0418\u0419",rarityClass:"epic",about:"\u0414\u043E\u0431\u0440\u043E\u0434\u0443\u0448\u043D\u044B\u0439 \u0432\u0435\u043B\u0438\u043A\u0430\u043D, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u043E\u0441\u0438\u0442 \u043D\u0430 \u0441\u043F\u0438\u043D\u0435 \u0443\u044E\u0442\u043D\u044B\u0439 \u043F\u0440\u0438\u044E\u0442 \u0434\u043B\u044F \u0434\u0443\u0445\u043E\u0432. \u0422\u0430\u043C \u0432\u0441\u0435\u0433\u0434\u0430 \u043D\u0430\u0439\u0434\u0451\u0442\u0441\u044F \u043C\u0435\u0441\u0442\u043E \u0434\u043B\u044F \u043D\u043E\u0432\u044B\u0445 \u0434\u0440\u0443\u0437\u0435\u0439.",ability:"\u0423\u044E\u0442\u043D\u044B\u0439 \u043F\u0440\u0438\u044E\u0442",abilityText:"\u041A\u0443\u043F\u043E\u043B, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0411\u0435\u0437\u043B\u0438\u043A \u043D\u0438\u043A\u043E\u0433\u043E \u043D\u0435 \u043F\u043E\u0439\u043C\u0430\u0435\u0442. \u0415\u0449\u0451 3 \u0443\u043C\u0435\u043D\u0438\u044F: 2, 3, 4, F.",tags:["\u0417\u0430\u0449\u0438\u0442\u0430","\u041B\u0435\u0447\u0435\u043D\u0438\u0435","\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430","\u041A\u043E\u043C\u0430\u043D\u0434\u0430"],build:e=>sd(e),radius:.85,height:2.4,skins:Pn,helper:!0,cam:{distance:8.4,height:3,side:1.3}}],zt={id:"noface",name:"\u0411\u0435\u0437\u043B\u0438\u043A",rarity:"\u041E\u0425\u041E\u0422\u041D\u0418\u041A",rarityClass:"hunter",about:"\u0422\u0438\u0445\u0438\u0439 \u0434\u0443\u0445 \u0432 \u0431\u0435\u043B\u043E\u0439 \u043C\u0430\u0441\u043A\u0435. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0438\u0449\u0435\u0442 \u0441\u043F\u0440\u044F\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044F, \u043F\u043E\u0442\u043E\u043C \u0434\u043E\u0433\u043E\u043D\u044F\u0435\u0442. \u0423\u043C\u0435\u0435\u0442 \u043F\u0440\u0438\u0442\u0432\u043E\u0440\u044F\u0442\u044C\u0441\u044F \u0433\u0435\u0440\u043E\u044F\u043C\u0438 \u0438 \u0432\u0435\u0449\u0430\u043C\u0438.",ability:"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430",abilityText:"\u0418\u0433\u0440\u0430\u0435\u0448\u044C \u0432\u043E\u0434\u044F\u0449\u0438\u043C! 1 \u2014 \u0441\u0442\u0430\u0442\u044C \u0433\u0435\u0440\u043E\u0435\u043C, 2 \u2014 \u0441\u0442\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u043C, E \u2014 \u0440\u044B\u0432\u043E\u043A (3 \u0437\u0430\u0440\u044F\u0434\u0430), \u041F\u0440\u043E\u0431\u0435\u043B \u2014 \u0432\u0437\u043B\u0435\u0442\u0435\u0442\u044C.",tags:["\u041E\u0445\u043E\u0442\u0430","\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430","\u041F\u043E\u043B\u0451\u0442"],build:ad,radius:.55,height:2.5,cam:{distance:7.6,height:2.3,side:.6}}});var Ln,ud=ut(()=>{Ln=class{constructor(t=32){this.half=t,this.boxes=[],this.circles=[],this.bushes=[],this.ladders=[],this.grid=null}addBox(t,i,s,r,a,n={}){let o=n.bottom??0,l={minX:t-s/2,maxX:t+s/2,minZ:i-r/2,maxZ:i+r/2,bottom:o,top:a,topAt:n.topAt||null,sight:n.sight??a-o>1.4,nav:n.nav??o<1.2};return this.boxes.push(l),this.grid=null,l}addRoof(t,i,s,r,a,n,o="x"){let l=(o==="x"?r:s)/2,h=o==="x"?(c,d)=>a+(n-a)*Math.max(0,1-Math.abs(d-i)/l):(c,d)=>a+(n-a)*Math.max(0,1-Math.abs(c-t)/l);return this.addBox(t,i,s,r,n,{bottom:a-.25,topAt:h,sight:!0,nav:!1})}addCircle(t,i,s,r,a={}){let n={x:t,z:i,r:s,bottom:a.bottom??0,top:r,sight:a.sight??r>1.4,nav:a.nav??!0};return this.circles.push(n),this.grid=null,n}addBush(t,i,s,r="bush"){this.bushes.push({x:t,z:i,r:s,kind:r})}addLadder(t,i,s,r,a,n){this.ladders.push({x:t,z:i,nx:s,nz:r,w:a,top:n})}#e(){let t=Math.ceil((this.half*2+8)/4),i=Array.from({length:t*t},()=>({boxes:[],circles:[]})),s=r=>Math.max(0,Math.min(t-1,Math.floor((r+this.half+4)/4)));for(let r of this.boxes)for(let a=s(r.minZ-1.5);a<=s(r.maxZ+1.5);a++)for(let n=s(r.minX-1.5);n<=s(r.maxX+1.5);n++)i[a*t+n].boxes.push(r);for(let r of this.circles)for(let a=s(r.z-r.r-1.5);a<=s(r.z+r.r+1.5);a++)for(let n=s(r.x-r.r-1.5);n<=s(r.x+r.r+1.5);n++)i[a*t+n].circles.push(r);this.grid={n:t,cells:i,idx:s}}near(t,i){this.grid||this.#e();let{n:s,cells:r,idx:a}=this.grid;return r[a(i)*s+a(t)]}topOf(t,i,s){return t.topAt?t.topAt(i,s):t.top}inBush(t,i,s=0){return s>1.2?!1:this.bushes.some(r=>(t-r.x)**2+(i-r.z)**2<(r.r*.9)**2)}groundAt(t,i,s,r){let a=0,n=s*.7,o=this.near(t,i);for(let l of o.boxes){if(!(t+n>l.minX&&t-n<l.maxX&&i+n>l.minZ&&i-n<l.maxZ))continue;let h=Math.max(l.minX,Math.min(t,l.maxX)),c=Math.max(l.minZ,Math.min(i,l.maxZ)),d=this.topOf(l,h,c);d>r||d<=a||(a=d)}for(let l of o.circles)l.top>r||l.top<=a||(t-l.x)**2+(i-l.z)**2<(l.r+n)**2&&(a=l.top);return a}ceilingAt(t,i,s,r){let a=1/0,n=s*.7,o=this.near(t,i);for(let l of o.boxes)l.bottom<=r+.05||l.bottom>=a||t+n>l.minX&&t-n<l.maxX&&i+n>l.minZ&&i-n<l.maxZ&&(a=l.bottom);for(let l of o.circles)l.bottom<=r+.05||l.bottom>=a||(t-l.x)**2+(i-l.z)**2<(l.r+n)**2&&(a=l.bottom);return a}resolve(t,i,s,r=1/0){let a=!1,n=this.near(t.x,t.z);for(let l=0;l<3;l++){let h=!1;for(let c of n.boxes){if(c.bottom>=r)continue;let d=Math.max(c.minX,Math.min(t.x,c.maxX)),u=Math.max(c.minZ,Math.min(t.z,c.maxZ)),p=t.x-d,_=t.z-u,x=p*p+_*_;if(!(x>=i*i)&&!(this.topOf(c,d,u)<=s)){if(x>1e-8){let m=Math.sqrt(x);t.x+=p/m*(i-m),t.z+=_/m*(i-m)}else{let m=[[t.x-c.minX,-1,0],[c.maxX-t.x,1,0],[t.z-c.minZ,0,-1],[c.maxZ-t.z,0,1]];m.sort((g,S)=>g[0]-S[0]);let[f,y,b]=m[0];t.x+=y*(f+i),t.z+=b*(f+i)}a=h=!0}}for(let c of n.circles){if(c.top<=s||c.bottom>=r)continue;let d=t.x-c.x,u=t.z-c.z,p=i+c.r,_=d*d+u*u;if(_>=p*p)continue;let x=Math.sqrt(_)||1e-4;t.x=c.x+d/x*p,t.z=c.z+u/x*p,a=h=!0}if(!h)break}let o=this.half-i-.3;return t.x=Math.max(-o,Math.min(o,t.x)),t.z=Math.max(-o,Math.min(o,t.z)),a}ledgeAt(t,i,s,r,a){let n=this.near(t,i),o=-1/0;for(let l of n.boxes){if(t<=l.minX||t>=l.maxX||i<=l.minZ||i>=l.maxZ)continue;let h=this.topOf(l,t,i);h>s+.3&&h<=s+r&&l.bottom<s+a&&h>o&&(o=h)}for(let l of n.circles)(t-l.x)**2+(i-l.z)**2>=l.r*l.r||l.top>s+.3&&l.top<=s+r&&l.bottom<s+a&&l.top>o&&(o=l.top);if(o===-1/0)return null;for(let l of n.boxes)if(!(t<=l.minX||t>=l.maxX||i<=l.minZ||i>=l.maxZ)&&this.topOf(l,t,i)>o+.05&&l.bottom<o+a*.8)return null;for(let l of n.circles)if(!((t-l.x)**2+(i-l.z)**2>=l.r*l.r)&&l.top>o+.05&&l.bottom<o+a*.8)return null;return o}ladderAt(t,i,s,r){for(let a of this.ladders){let n=t-a.x,o=i-a.z,l=n*a.nx+o*a.nz,h=Math.abs(n*-a.nz+o*a.nx);if(l>-.2&&l<s+.45&&h<a.w/2&&r<a.top-.1)return a}return null}lineOfSight(t,i,s,r,a=!1,n=1.5,o=1.5){let l=s-t,h=r-i,c=Math.hypot(l,h),d=Math.ceil(c/.4);for(let u=1;u<d;u++){let p=u/d,_=t+l*p,x=i+h*p,m=n+(o-n)*p,f=this.near(_,x);for(let y of f.boxes)if(!(!y.sight||_<=y.minX||_>=y.maxX||x<=y.minZ||x>=y.maxZ)&&m>y.bottom&&m<this.topOf(y,_,x))return!1;for(let y of f.circles)if(y.sight&&m>y.bottom&&m<y.top&&(_-y.x)**2+(x-y.z)**2<y.r*y.r)return!1;if(!a&&m<1.6){for(let y of this.bushes)if((_-y.x)**2+(x-y.z)**2<(y.r*.8)**2)return!1}}return!0}}});function dd(e,t=()=>!1){let i=new Map,s=[];e.updateMatrixWorld(!0),e.traverse(a=>{if(!a.isMesh||a.userData.keep||t(a)||!(a.material instanceof Ct))return;let n=a.material.uuid+(a.castShadow?":s":":n");i.has(n)||i.set(n,{material:a.material,cast:a.castShadow,geos:[]});let o=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();for(let l of Object.keys(o.attributes))["position","normal","uv"].includes(l)||o.deleteAttribute(l);o.attributes.uv||o.setAttribute("uv",new je(new Float32Array(o.attributes.position.count*2),2)),o.applyMatrix4(a.matrixWorld),i.get(n).geos.push(o),s.push(a)});for(let a of s)a.parent.remove(a);let r=0;for(let{material:a,cast:n,geos:o}of i.values()){let l=o.reduce((x,m)=>x+m.attributes.position.count,0),h=new Float32Array(l*3),c=new Float32Array(l*3),d=new Float32Array(l*2),u=0;for(let x of o)h.set(x.attributes.position.array,u*3),c.set(x.attributes.normal.array,u*3),d.set(x.attributes.uv.array,u*2),u+=x.attributes.position.count,x.dispose();let p=new dt;p.setAttribute("position",new Xt(h,3)),p.setAttribute("normal",new Xt(c,3)),p.setAttribute("uv",new Xt(d,2)),p.computeBoundingSphere();let _=new ht(p,a);_.castShadow=n,_.receiveShadow=!0,_.matrixAutoUpdate=!1,e.add(_),r++}return{merged:s.length,calls:r}}var pd=ut(()=>{Lt()});function fd(e,{isMobile:t}){let i=new Ln(kt),s=[],r=new Pi,a=(L,O,B,C,G,ce)=>{let ge=new ht(new Ms(C,G,ce),r);ge.position.set(L,O,B),ge.updateMatrixWorld(!0),s.push(ge)},n=Li("rgba(255,190,110,0.9)","rgba(255,140,40,0)"),o=[];e.background=new qe(856112),e.fog=new iu(1382974,.022);let l=new qt(180,32,16),h=new li({side:Qt,depthWrite:!1,fog:!1,uniforms:{top:{value:new qe(461346)},bottom:{value:new qe(3814512)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying vec3 vP; void main(){ float h = smoothstep(-0.05, 0.55, vP.y); gl_FragColor = vec4(mix(bottom, top, h), 1.); }"});e.add(new ht(l,h));let c=new ht(new qt(7,32,16),new Pi({color:16052700,fog:!1}));c.position.set(-60,70,-120),e.add(c);let d=new qi(new Ci({map:Li("rgba(220,225,255,0.55)","rgba(120,130,220,0)"),fog:!1,depthWrite:!1,blending:Ot}));d.scale.set(60,60,1),d.position.copy(c.position),e.add(d);let u=new dt,p=[];for(let L=0;L<700;L++){let O=Math.random()*Math.PI*2,B=Math.random()*1.2+.15;p.push(Math.cos(O)*Math.cos(B)*170,Math.sin(B)*170,Math.sin(O)*Math.cos(B)*170)}u.setAttribute("position",new je(p,3)),e.add(new wr(u,new ks({color:14673151,size:1.1,fog:!1,sizeAttenuation:!1,transparent:!0,opacity:.8}))),e.add(new Tn(8029912,1906736,1.05));let _=new En(12766463,1.35);_.position.set(-18,30,-14),_.castShadow=!0,_.shadow.mapSize.set(t?1024:2048,t?1024:2048);let x=_.shadow.camera;x.left=-26,x.right=26,x.top=26,x.bottom=-26,x.near=1,x.far=90,_.shadow.bias=-8e-4,_.shadow.normalBias=.03,e.add(_,_.target);let m=ei(256,256,(L,O,B)=>{L.fillStyle="#26402f",L.fillRect(0,0,O,B);for(let C=0;C<2600;C++){let G=50+Math.random()*40;L.fillStyle=`rgba(${G*.55|0},${G+20|0},${G*.7|0},${.25+Math.random()*.35})`,L.fillRect(Math.random()*O,Math.random()*B,2,3+Math.random()*4)}});m.wrapS=m.wrapT=Ri,m.repeat.set(18,18);let f=new ht(new bs(kt*4,kt*4),new Ct({map:m,roughness:1}));f.rotation.x=-Math.PI/2,f.receiveShadow=!0,f.userData.keep=!0,e.add(f);let y=ei(256,256,(L,O,B)=>{L.fillStyle="#3b3a44",L.fillRect(0,0,O,B);for(let C=0;C<B;C+=32)for(let G=C/32%2?-24:0;G<O;G+=48){let ce=88+Math.random()*40;L.fillStyle=`rgb(${ce},${ce-4},${ce+8})`,L.beginPath(),L.roundRect(G+3,C+3,42,26,8),L.fill()}});y.wrapS=y.wrapT=Ri;let b=(L,O)=>{let B=y.clone();return B.needsUpdate=!0,B.repeat.set(L,O),new Ct({map:B,roughness:.95})},g=(L,O,B,C)=>{let G=new ht(new bs(B,C),b(B/2.2,C/2.2));G.rotation.x=-Math.PI/2,G.position.set(L,.015,O),G.receiveShadow=!0,e.add(G)};g(0,0,3.4,58),g(0,0,56,3.2),g(0,-21,9,7);let S=ei(128,128,(L,O,B)=>{L.fillStyle="#ffd58a",L.fillRect(0,0,O,B);let C=L.createRadialGradient(O/2,B/2,10,O/2,B/2,80);C.addColorStop(0,"rgba(255,240,190,1)"),C.addColorStop(1,"rgba(255,160,60,0.4)"),L.fillStyle=C,L.fillRect(0,0,O,B),L.strokeStyle="#4a2e1c",L.lineWidth=5;for(let G=0;G<=4;G++)L.beginPath(),L.moveTo(G*O/4,0),L.lineTo(G*O/4,B),L.stroke(),L.beginPath(),L.moveTo(0,G*B/4),L.lineTo(O,G*B/4),L.stroke()}),E=new Ct({map:S,emissive:16753226,emissiveMap:S,emissiveIntensity:1.25,roughness:.8}),A=re(7227955,{roughness:.85}),v=re(13482908,{roughness:.95}),M=re(3093328,{roughness:.6}),U=re(1908531,{roughness:.6}),R=re(4139549,{roughness:.8});function N(L,O,B,C,G=3.2,ce="z",ge={}){let se=new nt;se.position.set(L,0,O);let ve=.35+G;se.add(k(W.box(B+.3,.35,C+.3),re(4933714),{y:.17})),i.addBox(L,O,B+.3,C+.3,.35,{sight:!1,nav:!1});let Me=.28,Pe=2.5,ke=2.95,F=ce==="z";if(ge.enter){let mt=(Vt,hi,xi,hs,ci=.35,Oi=ve)=>{se.add(k(W.box(xi,Oi-ci,hs),v,{x:Vt-L,y:(ci+Oi)/2,z:hi-O})),i.addBox(Vt,hi,xi,hs,Oi,{bottom:ci>.35?ci:0,sight:!0,nav:ci<=.35}),a(Vt,(ci+Oi)/2,hi,xi,Oi-ci,hs)},Gt=Vt=>{let hi=F?B:C,xi=(hi-Pe)/2;for(let hs of[-1,1]){let ci=hs*(Pe/2+xi/2);F?mt(L+ci,O+Vt*(C/2-Me/2),xi,Me):mt(L+Vt*(B/2-Me/2),O+ci,Me,xi)}F?mt(L,O+Vt*(C/2-Me/2),Pe,Me,ke):mt(L+Vt*(B/2-Me/2),O,Me,Pe,ke)};if(Gt(1),Gt(-1),F)for(let Vt of[-1,1])mt(L+Vt*(B/2-Me/2),O,Me,C-2*Me);else for(let Vt of[-1,1])mt(L,O+Vt*(C/2-Me/2),B-2*Me,Me);se.add(k(W.box(B-.1,.04,C-.1),re(12100712,{roughness:1}),{y:.37,shadow:!1})),se.add(k(W.box(B-.1,.08,C-.1),R,{y:ve-.05,shadow:!1}));let oi=(F?1:.5)*(B/2-1),ti=(F?.5:1)*(C/2-1),Di=k(W.box(1.6,1.5,.08),re(15852740,{roughness:.9,emissive:3810320,emissiveIntensity:.3}),{x:oi,y:1.1,z:ti-.5,ry:.5});se.add(Di),se.add(k(W.box(.9,.35,.9),re(8076106),{x:oi,y:.55,z:ti})),i.addBush(L+oi,O+ti,1,"screen"),se.add(k(W.sphere(.2,12,8),X,{x:-oi*.6,y:ve-.6,z:-ti*.6,sy:1.3,shadow:!1})),o.push(new I(L-oi*.6,ve-.6,O-ti*.6))}else{let mt=k(W.box(B,G,C),v,{y:.35+G/2});mt.receiveShadow=!0,se.add(mt),i.addBox(L,O,B,C,ve,{sight:!0}),a(L,.35+G/2,O,B,G,C)}for(let mt of[-1,1])for(let Gt of[-1,1])se.add(k(W.box(.22,G,.22),R,{x:mt*B/2,y:.35+G/2,z:Gt*C/2}));se.add(k(W.box(B+.05,.16,C+.05),R,{y:.35+G*.62}));let te=.35+G*.38;for(let mt of[-1,1])for(let Gt=-1;Gt<=1;Gt+=2){let oi=ge.enter&&F,ti=ge.enter&&!F;B>3.5&&!oi&&se.add(k(W.box(B*.26,G*.34,.06),E,{x:Gt*B*.24,y:te,z:mt*(C/2+.02),shadow:!1})),C>3.5&&!ti&&se.add(k(W.box(.06,G*.34,C*.26),E,{x:mt*(B/2+.02),y:te,z:Gt*C*.24,shadow:!1}))}if(ge.enter)for(let mt of[-1,1])se.add(k(F?W.box(Pe+.3,.2,.34):W.box(.34,.2,Pe+.3),R,{x:F?0:mt*B/2,y:ke+.1,z:F?mt*C/2:0}));else{let mt=F?{x:0,z:C/2+.03,sx:1.1,sz:.06}:{x:B/2+.03,z:0,sx:.06,sz:1.1};se.add(k(W.box(mt.sx,1.9,mt.sz),E,{x:mt.x,y:1.3,z:mt.z,shadow:!1}))}let ne=.7,be=Math.min(B,C)*.42,de=F?B:C,ae=F?C:B,_e=new Rr;_e.moveTo(-ae/2-ne,0),_e.lineTo(0,be),_e.lineTo(ae/2+ne,0),_e.lineTo(ae/2+ne-.25,-.12),_e.lineTo(0,be-.28),_e.lineTo(-ae/2-ne+.25,-.12),_e.closePath();let Ue=new ht(new ga(_e,{depth:de+ne*2,bevelEnabled:!1}),M);Ue.castShadow=!0,Ue.position.set(0,ve,0),F?(Ue.rotation.y=Math.PI/2,Ue.position.x=-(de/2+ne)):Ue.position.z=-(de/2+ne),se.add(Ue),se.add(k(W.box(F?de+ne*2:.3,.25,F?.3:de+ne*2),U,{y:ve+be-.05})),e.add(se);let St=ae/2+ne,rt=F?(mt,Gt)=>ve+be*Math.max(0,1-Math.abs(Gt-O)/St):(mt,Gt)=>ve+be*Math.max(0,1-Math.abs(mt-L)/St);i.addBox(L,O,B+.3,C+.3,ve+be,{bottom:ve-.25,topAt:rt,sight:!0,nav:!1}),a(L,ve+be/2,O,B+ne,be,C+ne);let fi=L+(F?B/2-.6:B/2+.5),_i=O+(F?C/2+.5:C/2-.6);if(ge.enter?Z(L+(F?Pe/2+.5:B/2+.5),O+(F?C/2+.5:Pe/2+.5),2.6,16738874):Z(fi,_i,2.6,16738874),ge.ladder){let mt=ge.ladder,Gt,oi,ti,Di;if(mt==="back")ti=F?0:-1,Di=F?-1:0;else{let Vt=mt==="left"?-1:1;ti=F?Vt:0,Di=F?0:Vt}Gt=L+ti*(B/2+.02)+(Di!==0?B*.25:0),oi=O+Di*(C/2+.02)+(ti!==0?C*.25:0),j(Gt,oi,ti,Di,ve+.2)}}function j(L,O,B,C,G){let ce=re(6965804,{roughness:.9}),ge=-C,se=B;for(let ve of[-1,1])e.add(k(W.box(.08,G,.08),ce,{x:L+B*.12+ge*ve*.4,y:G/2,z:O+C*.12+se*ve*.4}));for(let ve=.35;ve<G;ve+=.4)e.add(k(B?W.box(.06,.06,.8):W.box(.8,.06,.06),ce,{x:L+B*.12,y:ve,z:O+C*.12}));i.addLadder(L,O,B,C,1.1,G)}let D=re(14701114,{emissive:16734762,emissiveIntensity:1.8,roughness:.6}),X=re(16761450,{emissive:16752704,emissiveIntensity:2.2,roughness:.6});function K(L,O,B,C=2.2,G){let ce=new Ci({map:n,transparent:!0,depthWrite:!1,blending:Ot,color:G??16777215,opacity:.8}),ge=new qi(ce);return ge.scale.set(C,C,1),ge.position.set(L,O,B),e.add(ge),ge}function Z(L,O,B,C){let G=k(W.sphere(.24,14,10),C===16738874?D:X,{x:L,y:B,z:O,sy:1.35,shadow:!1});e.add(G),e.add(k(W.cyl(.18,.18,.05,10),R,{x:L,y:B+.33,z:O,shadow:!1})),e.add(k(W.cyl(.18,.18,.05,10),R,{x:L,y:B-.33,z:O,shadow:!1})),K(L,B,O,2.4),o.push(new I(L,B,O))}function ye(L,O){e.add(k(W.cyl(.08,.1,3,8),R,{x:L,y:1.5,z:O})),e.add(k(W.box(.8,.08,.08),R,{x:L+.35,y:2.95,z:O})),Z(L+.7,O,2.45,16761450),i.addCircle(L,O,.14,3.2,{sight:!1})}function Q(L,O){let B=re(7697534,{roughness:1});e.add(k(W.cyl(.35,.45,.25,6),B,{x:L,y:.12,z:O})),e.add(k(W.cyl(.14,.18,.7,8),B,{x:L,y:.6,z:O})),e.add(k(W.box(.55,.42,.55),B,{x:L,y:1.15,z:O})),e.add(k(W.box(.3,.24,.6),X,{x:L,y:1.16,z:O,shadow:!1})),e.add(k(W.cone(.55,.36,6),B,{x:L,y:1.54,z:O})),K(L,1.16,O,1.8),i.addCircle(L,O,.42,1.75,{sight:!1}),o.push(new I(L,1.2,O))}let ie=re(3877408,{roughness:1}),ue=[re(2047276,{roughness:1,flat:!0}),re(2771509,{roughness:1,flat:!0}),re(6962012,{roughness:1,flat:!0})],He=[Pt(1,1,.18,1),Pt(1,1,.2,2),Pt(1,1,.16,3)];function Ne(L,O,B=1,C=!1){e.add(k(W.cyl(.18*B,.28*B,2.6*B,7),ie,{x:L,y:1.3*B,z:O}));let G=C?re(14191021,{roughness:1,flat:!0,emissive:3805232,emissiveIntensity:.4}):ue[(L*7+O*3&255)%2];for(let ce=0;ce<3;ce++){let ge=ce*2.1+L;e.add(k(He[ce],G,{x:L+Math.cos(ge)*.6*B,y:(2.8+ce*.5)*B,z:O+Math.sin(ge)*.6*B,sx:1.4*B,sy:1.1*B,sz:1.4*B}))}i.addCircle(L,O,.35*B,6,{sight:B>1.1})}let pt=re(2377775,{roughness:1,flat:!0}),Ze=Pt(1,1,.22,7),ee=[];function he(L,O,B=1.4){let C=new nt;C.position.set(L,0,O);for(let G=0;G<4;G++){let ce=G*1.7;C.add(k(Ze,pt,{x:Math.cos(ce)*B*.45,y:.8,z:Math.sin(ce)*B*.45,sx:B*.75,sy:.95,sz:B*.75}))}e.add(C),ee.push(C),i.addBush(L,O,B)}let me=re(9068088,{roughness:.85}),Be=re(5913378);function Ce(L,O,B,C){let G=B;e.add(k(W.box(B,G,B),me,{x:L,y:C-G/2,z:O})),e.add(k(W.box(B+.04,.08,B+.04),Be,{x:L,y:C-.04,z:O})),i.addBox(L,O,B,B,C,{sight:!1})}function Se(L,O,B,C,G){e.add(k(W.box(B,.2,C),re(8015923),{x:L,y:G-.1,z:O}));for(let ce of[-1,1])for(let ge of[-1,1])e.add(k(W.box(.2,G,.2),R,{x:L+ce*(B/2-.15),y:G/2,z:O+ge*(C/2-.15)}));i.addBox(L,O,B,C,G,{sight:!1})}function Qe(L,O){let B=re(12728874,{roughness:.55});for(let C of[-1,1])e.add(k(W.cyl(.2,.24,4.6,12),B,{x:L+C*2.1,y:2.3,z:O})),i.addCircle(L+C*2.1,O,.26,5);e.add(k(W.box(5.8,.32,.4),re(1841698),{x:L,y:4.7,z:O})),e.add(k(W.box(5.2,.25,.3),B,{x:L,y:4.35,z:O})),e.add(k(W.box(4.8,.22,.26),B,{x:L,y:3.7,z:O}))}N(-10,12,7,5,3.2,"x",{enter:!0,ladder:"left"}),N(11,13,6,6,3.4,"x",{enter:!0}),N(-12,-7,6,7,3,"x",{ladder:"back"}),N(11,-8,7,5,3.2,"z",{enter:!0,ladder:"right"}),N(-21,21,5,5,2.8,"z"),N(22,2,5,6,3,"x",{enter:!0}),N(-22,-18,6,5,3,"z"),N(20,-21,5,5,2.8,"z"),N(0,-26,7,4,3.6,"z"),Qe(0,-17),Ce(4.2,5.2,.9,.6),Ce(5.3,6.4,1,1.1),Ce(5.4,7.7,1,1.6),Se(7.8,7.4,3.2,3,2),Ce(-5.5,-3.8,1.2,1),Ce(-6.6,-4.6,1,1.7),Ce(16,8,1.2,1.2),Ce(-16,3,1.1,.9),Ce(-16.9,3.9,.9,1.5),Ce(13.2,16.9,1.1,.9),Ce(12.2,17.2,1,1.7),Ce(25.4,5.8,1.1,1),Ce(24.3,5.8,1,1.8),Ce(-20.6,24.3,1,1.1);let le=re(2050602,{roughness:1,flat:!0}),oe=re(2976314,{roughness:1,flat:!0});function fe(L,O,B,C,G=2.5){e.add(k(W.box(B,G,C),le,{x:L,y:G/2,z:O})),e.add(k(W.box(B+.12,.25,C+.12),oe,{x:L,y:G-.05,z:O})),i.addBox(L,O,B,C,G,{sight:!0}),a(L,G/2,O,B,G,C)}(function(O,B,C,G){let ce=20260925,ge=()=>(ce=ce*1664525+1013904223>>>0)/4294967296,se=new Uint8Array(C*C),ve=Array.from({length:C*C},()=>!0),Me=Array.from({length:C*C},()=>!0),Pe=[0];for(se[0]=1;Pe.length;){let de=Pe[Pe.length-1],ae=de%C,_e=de/C|0,Ue=[];if(ae>0&&!se[de-1]&&Ue.push([de-1,"L"]),ae<C-1&&!se[de+1]&&Ue.push([de+1,"R"]),_e>0&&!se[de-C]&&Ue.push([de-C,"U"]),_e<C-1&&!se[de+C]&&Ue.push([de+C,"D"]),!Ue.length){Pe.pop();continue}let[St,rt]=Ue[ge()*Ue.length|0];rt==="L"&&(ve[St]=!1),rt==="R"&&(ve[de]=!1),rt==="U"&&(Me[St]=!1),rt==="D"&&(Me[de]=!1),se[St]=1,Pe.push(St)}for(let de=0;de<5;de++){let ae=ge()*C*(C-1)|0;ae%C<C-1?ve[ae]=!1:Me[ae]=!1}let ke=.55,F=2.5,te=C*G;for(let de=0;de<C;de++)de!==C-1&&fe(O+de*G+G/2,B,G+ke,ke,F),fe(O+de*G+G/2,B+te,G+ke,ke,F);for(let de=0;de<C;de++)fe(O,B+de*G+G/2,ke,G+ke,F),de!==0&&fe(O+te,B+de*G+G/2,ke,G+ke,F);for(let de=0;de<C;de++)for(let ae=0;ae<C;ae++){let _e=de*C+ae;ae<C-1&&ve[_e]&&fe(O+(ae+1)*G,B+de*G+G/2,ke,G+ke,F),de<C-1&&Me[_e]&&fe(O+ae*G+G/2,B+(de+1)*G,G+ke,ke,F)}let ne=O+te/2,be=B+te/2;Q(ne,be),he(O+G/2,B+te-G/2,1.1),he(O+te-G/2,B+te-G/2,1.1),he(O+G/2,B+G*1.5,1.1)})(-43,26.5,5,3.3);let we=re(7248458,{roughness:.7}),Re=re(4094522,{roughness:1,flat:!0});for(let L=0;L<22;L++){let O=-41+L%5*3.1+L*7%3*.6,B=-41+Math.floor(L/5)*3.2+L*5%3*.5;for(let C=0;C<5;C++){let G=C*1.3+L,ce=.3+C%2*.2,ge=O+Math.cos(G)*ce,se=B+Math.sin(G)*ce,ve=6+(L+C)%3;e.add(k(W.cyl(.07,.09,ve,6),we,{x:ge,y:ve/2,z:se})),e.add(k(He[C%3],Re,{x:ge,y:ve,z:se,sx:.9,sy:.5,sz:.9}))}i.addCircle(O,B,.62,7,{sight:!0})}he(-37.5,-35.5,1.3),he(-32,-39,1.2),he(-40,-30.5,1.3);let Le=re(5914154,{roughness:.9}),ze=re(4015200,{roughness:.5});function Xe(L,O,B,C,G,ce){if(ce){let ve=(Me,Pe,ke,F,te=0)=>{e.add(k(W.box(ke,G-te,F),Le,{x:Me,y:(te+G)/2,z:Pe})),i.addBox(Me,Pe,ke,F,G,{bottom:te,sight:!0}),a(Me,(te+G)/2,Pe,ke,G-te,F)};for(let Me of[-1,1]){let Pe=(C-2.6)/2;for(let ke of[-1,1])ve(L+Me*(B/2-.3/2),O+ke*(2.6/2+Pe/2),.3,Pe);ve(L+Me*(B/2-.3/2),O,.3,2.6,2.95),ve(L,O+Me*(C/2-.3/2),B-2*.3,.3)}e.add(k(W.box(B,.3,C),ze,{x:L,y:G-.15,z:O})),i.addBox(L,O,B,C,G,{bottom:G-.3,sight:!0,nav:!1}),a(L,G-.15,O,B,.3,C),e.add(k(W.box(1.4,.9,1),re(13482382,{roughness:1}),{x:L+B/2-1.3,y:.45,z:O-C/2+1.1})),i.addBush(L+B/2-1.3,O-C/2+1.4,1.1,"sacks"),o.push(new I(L,G-.7,O)),e.add(k(W.sphere(.22,12,8),X,{x:L,y:G-.7,z:O,sy:1.3,shadow:!1}))}else{e.add(k(W.box(B,G,C),Le,{x:L,y:G/2,z:O})),e.add(k(W.box(B+.2,.2,C+.2),ze,{x:L,y:G+.1,z:O})),i.addBox(L,O,B,C,G+.2,{sight:!0}),a(L,G/2,O,B,G,C);for(let ge of[-1,1])e.add(k(W.box(B*.3,.8,.06),E,{x:L,y:G*.55,z:O+ge*(C/2+.02),shadow:!1}))}}Xe(38,-14,7,7,4,!1),Xe(38,0,7,8,4,!0),Xe(38,14,7,7,4,!1);for(let L of[-7,7])e.add(k(W.box(1.6,.15,7.2),Le,{x:38,y:4.05,z:L})),i.addBox(38,L,1.6,7.2,4.12,{bottom:3.95,sight:!1,nav:!1});j(34.5-.02,-16,-1,0,4.2),j(34.5-.02,16,-1,0,4.2),Ce(32.4,3,1,1),Ce(33.5,3,1.1,2);let Je=re(15237418,{roughness:.6,emissive:4200448,emissiveIntensity:.3}),z=re(3889700);for(let L=0;L<5;L++)for(let O=0;O<4;O++){let B=30+L*2.6+O%2*1.2,C=30+O*3;e.add(k(W.sphere(.45,12,8),Je,{x:B,y:.35,z:C,sy:.75})),e.add(k(W.cyl(.05,.06,.25,5),z,{x:B,y:.75,z:C})),i.addCircle(B,C,.45,.4,{sight:!1,nav:!1})}let ft=re(13215306,{roughness:1});e.add(k(W.cyl(1.6,1.9,2.2,10),ft,{x:26,y:1.1,z:38})),e.add(k(W.cone(1.7,1.2,10),ft,{x:26,y:2.8,z:38})),i.addCircle(26,38,1.8,3.4,{sight:!0}),Ce(27.9,36.6,1.1,1.2),he(34,40,1.4),he(41,33,1.3),N(36,-36,9,7,3.4,"z",{enter:!0,ladder:"left"});for(let[L,O,B,C]of[[-36,-10,1.2,!1],[-38,6,1.1,!0],[-34,18,1.2,!1],[-14,-38,1.1,!1],[-4,-40,1.2,!0],[10,-38,1.1,!1],[22,-40,1.2,!1],[36,-24,1.1,!0],[30,22,1.2,!1],[14,38,1.1,!0],[0,40,1.2,!1],[-14,40,1.1,!1]])Ne(L,O,B,C);for(let[L,O,B]of[[-38,-18,1.4],[-40,12,1.4],[-20,-38,1.5],[6,-40,1.4],[24,-34,1.4],[30,10,1.3],[20,38,1.4],[-6,38,1.5],[-22,34,1.4],[40,-26,1.3]])he(L,O,B);for(let[L,O]of[[2.6,17],[-2.6,8],[2.6,-6],[-2.6,-12],[8,2.4],[-9,-2.4],[18,-2.4],[-19,2.4]])Q(L,O);for(let[L,O]of[[-2.8,22],[-2.8,-2.8],[14,2.8],[-14,-2.8]])ye(L,O);for(let L=-kt+3;L<=kt-3;L+=4.3)for(let[O,B]of[[L,-kt+2],[L,kt-2],[-kt+2,L],[kt-2,L]])Math.abs(L)<2.5||Ne(O+(Math.random()-.5)*1.2,B+(Math.random()-.5)*1.2,1.1+Math.random()*.4);for(let[L,O,B,C]of[[-6,17,1,!0],[6,20,1.2,!1],[16,16,1.1,!0],[-17,11,1.2,!1],[-5,-18,1,!0],[7,-15,1.1,!1],[24,-10,1.2,!1],[-25,-6,1.1,!0],[15,-27,1,!1],[-15,-26,1.1,!0],[25,24,1.2,!1]])Ne(L,O,B,C);for(let[L,O,B]of[[-4.5,-12,1.5],[15,-15,1.6],[-17.5,6,1.5],[18,18,1.5],[-6,21,1.4],[25,-24,1.4],[6.5,-3.8,1.3],[-25,13,1.5],[9,24,1.4],[-10,-24,1.5],[26,12,1.4]])he(L,O,B);let Ke=re(4862754,{roughness:1});for(let L of[-1,1]){for(let O=-kt+1;O<kt;O+=2)e.add(k(W.box(.14,1.2,.14),Ke,{x:O,y:.6,z:L*(kt-.6)})),e.add(k(W.box(.14,1.2,.14),Ke,{x:L*(kt-.6),y:.6,z:O}));e.add(k(W.box(kt*2,.1,.08),Ke,{y:.9,z:L*(kt-.6)})),e.add(k(W.box(.08,.1,kt*2),Ke,{x:L*(kt-.6),y:.9}))}let tt=ei(64,192,(L,O,B)=>{L.fillStyle="#5a3a26",L.fillRect(0,0,O,B),L.fillStyle="#e9d6b0",L.fillRect(5,5,O-10,B-10),L.fillStyle="#2a170c",L.font="bold 42px serif",L.textAlign="center",["\u306E","\u308A","\u3070"].forEach((C,G)=>L.fillText(C,O/2,55+G*55))});e.add(k(W.cyl(.07,.07,2.8,6),R,{x:-2.6,y:1.4,z:20.5})),e.add(k(W.box(.5,1.5,.08),re(16777215,{map:tt,emissive:2101256,emissiveIntensity:.5}),{x:-2.6,y:2.3,z:20.55})),i.addCircle(-2.6,20.5,.12,3,{sight:!1});let P=[],T=t?2:4;for(let L=0;L<T;L++){let O=new Cr(16752714,18,11,1.8);e.add(O),P.push(O)}function H(L){let O=o.slice().sort((B,C)=>B.distanceToSquared(L)-C.distanceToSquared(L));P.forEach((B,C)=>{O[C]&&B.position.copy(O[C])}),_.position.set(L.x-18,30,L.z-14),_.target.position.set(L.x,0,L.z)}return{stats:dd(e),world:i,cameraBlockers:s,bushMeshes:ee,updateLights:H,playerSpawn:new I(0,0,22),ghostSpawn:new I(0,0,-21)}}var kt,md=ut(()=>{Lt();ud();os();Nr();pd();kt=44});function gd(e,t,i){let s=new dt,r=new Float32Array(t*3),a=[];for(let l=0;l<t;l++){let h={x:(Math.random()*2-1)*i,z:(Math.random()*2-1)*i,y:.6+Math.random()*3,p:Math.random()*10,r:.5+Math.random()*1.5};a.push(h)}s.setAttribute("position",new Xt(r,3));let n=Li("rgba(255,245,190,1)","rgba(255,200,80,0)",64),o=new wr(s,new ks({size:.35,map:n,transparent:!0,depthWrite:!1,blending:Ot,color:16773296}));return o.frustumCulled=!1,e.add(o),l=>{for(let h=0;h<t;h++){let c=a[h];r[h*3]=c.x+Math.sin(l*.3+c.p)*c.r,r[h*3+1]=c.y+Math.sin(l*.8+c.p*2)*.4,r[h*3+2]=c.z+Math.cos(l*.25+c.p)*c.r}s.attributes.position.needsUpdate=!0}}function vd(e,t,i=14){let s=re(723727,{roughness:1,flat:!0}),r=re(16777215,{emissive:16777215,emissiveIntensity:.4}),a=re(0),n=Pt(.2,1,.35,4),o=[];for(let h=0;h<i;h++){let c=new nt;c.add(k(n,s));for(let p of[-1,1])c.add(k(W.sphere(.06,8,6),r,{x:p*.07,y:.04,z:.15,shadow:!1})),c.add(k(W.sphere(.03,6,4),a,{x:p*.07,y:.04,z:.2,shadow:!1}));let d,u;do d=(Math.random()*2-1)*26,u=(Math.random()*2-1)*26;while(t.groundAt(d,u,.3,99)>0||Math.hypot(d,u-22)<5);c.position.set(d,.2,u),e.add(c),o.push({g:c,home:new pe(d,u),vx:0,vz:0,hop:Math.random()*6})}let l={x:0,y:0,z:0};return(h,c,d)=>{for(let u of o){let p=u.g.position.x-d.x,_=u.g.position.z-d.z,x=Math.hypot(p,_);x<3.2?(u.vx+=p/x*30*h,u.vz+=_/x*30*h):(u.vx+=(u.home.x-u.g.position.x)*.4*h,u.vz+=(u.home.y-u.g.position.z)*.4*h),u.vx*=1-3*h,u.vz*=1-3*h,l.x=u.g.position.x+u.vx*h,l.z=u.g.position.z+u.vz*h,t.resolve(l,.2,0),u.g.position.x=l.x,u.g.position.z=l.z;let m=Math.hypot(u.vx,u.vz);u.hop+=h*(4+m*2),u.g.position.y=.2+Math.abs(Math.sin(u.hop))*(.08+Math.min(.35,m*.08)),m>.3?u.g.rotation.y=Math.atan2(u.vx,u.vz):u.g.lookAt(d.x,.2,d.z)}}}var yd=ut(()=>{Lt();os();Nr()});function Gs(e){let t=new nt;if(e==="crate")t.add(k(W.box(1,1,1),re(9068088,{roughness:.85}),{y:.5})),t.add(k(W.box(1.04,.08,1.04),re(5913378),{y:.96}));else if(e==="lantern"){let i=re(7697534,{roughness:1});t.add(k(W.cyl(.35,.45,.25,6),i,{y:.12})),t.add(k(W.cyl(.14,.18,.7,8),i,{y:.6})),t.add(k(W.box(.55,.42,.55),i,{y:1.15})),t.add(k(W.box(.3,.24,.6),re(16761450,{emissive:16752704,emissiveIntensity:2.2,roughness:.6}),{y:1.16,shadow:!1})),t.add(k(W.cone(.55,.36,6),i,{y:1.54}))}else if(e==="pumpkin")t.add(k(W.sphere(.55,14,10),re(15237418,{roughness:.6,emissive:4200448,emissiveIntensity:.3}),{y:.42,sy:.75})),t.add(k(W.cyl(.05,.07,.3,5),re(3889700),{y:.9}));else if(e==="barrel"){t.add(k(W.cyl(.42,.42,1.1,14),re(8015660,{roughness:.8}),{y:.55}));for(let i of[.2,.9])t.add(k(W.cyl(.44,.44,.07,14),re(3816004,{metalness:.4}),{y:i}))}else{_d||=Pt(1,1,.22,7);for(let i=0;i<3;i++)t.add(k(_d,re(2377775,{roughness:1,flat:!0}),{x:Math.cos(i*2.1)*.35,y:.6,z:Math.sin(i*2.1)*.35,sx:.75,sy:.7,sz:.75}))}return t}function ih(e,t,i,s,r=15260927){let a=new nt,n=new Pi({color:r,transparent:!0,opacity:.8,depthWrite:!1}),o=[];for(let h=0;h<9;h++){let c=new ht(new qt(.35,8,6),n),d=h/9*Math.PI*2;c.position.set(Math.cos(d)*.3,.6+h%3*.3,Math.sin(d)*.3),c.userData.v=new I(Math.cos(d)*1.6,.8+Math.random(),Math.sin(d)*1.6),a.add(c),o.push(c)}a.position.set(t,i,s),e.add(a);let l=0;return{update(h){l+=h;for(let c of o)c.position.addScaledVector(c.userData.v,h),c.scale.setScalar(1+l*1.5);if(n.opacity=Math.max(0,.8-l*1.6),l>.5)return e.remove(a),n.dispose(),!1}}}var Ts,_d,xd,Ur,Nn,Dr=ut(()=>{Lt();os();Ts=[{id:"crate",name:"\u044F\u0449\u0438\u043A",icon:"\u{1F4E6}"},{id:"lantern",name:"\u0444\u043E\u043D\u0430\u0440\u044C",icon:"\u{1F3EE}"},{id:"pumpkin",name:"\u0442\u044B\u043A\u0432\u0430",icon:"\u{1F383}"},{id:"barrel",name:"\u0431\u043E\u0447\u043A\u0430",icon:"\u{1F6E2}\uFE0F"},{id:"bush",name:"\u043A\u0443\u0441\u0442",icon:"\u{1F33F}"}],_d=null;xd="masha-game-pumpkins",Ur={get(){try{return+(localStorage.getItem(xd)||0)}catch{return 0}},add(e){let t=this.get()+e;try{localStorage.setItem(xd,String(t))}catch{}return t}},Nn=class{constructor(t,i){this.scene=t,this.nav=i,this.list=[],this.geo=new qt(.28,12,8),this.mat=new Ct({color:16753210,emissive:16742928,emissiveIntensity:.9,roughness:.4}),this.stem=new Ar(.03,.04,.14,5),this.stemMat=new Ct({color:3889700})}clear(){for(let t of this.list)this.scene.remove(t.g);this.list=[]}spawn(t){this.clear();for(let i=0;i<t;i++){let s=0,r=0;for(let o=0;o<30;o++){s=(Math.random()*2-1)*(this.nav.half-3),r=(Math.random()*2-1)*(this.nav.half-3);let[l,h]=this.nav.toCell(s,r);if(this.nav.free(l,h)&&!this.list.some(c=>Math.hypot(c.x-s,c.z-r)<6))break}let a=new nt;a.add(new ht(this.geo,this.mat));let n=new ht(this.stem,this.stemMat);n.position.y=.26,a.add(n),a.children[0].scale.y=.8,a.position.set(s,.8,r),this.scene.add(a),this.list.push({g:a,x:s,z:r,ph:Math.random()*6})}}update(t,i,s){let r=[];for(let a=this.list.length-1;a>=0;a--){let n=this.list[a];n.g.rotation.y+=t*2,n.g.position.y=.8+Math.sin(i*3+n.ph)*.12;for(let o of s){let l=o.ctrl.pos;if(Math.hypot(l.x-n.x,l.z-n.z)<1&&l.y<1.8){this.scene.remove(n.g),this.list.splice(a,1),r.push(o);break}}}return r}}});var Un,Sd=ut(()=>{Ii();Un=class{constructor(t,i){this.keys=new Set,this.move={x:0,y:0},this.look={x:0,y:0},this.jumpQueued=!1,this.dashQueued=!1,this.jumpHeldBtn=!1,this.lookOnly=!1,this.touchRun=!1,this.touchCrouch=!1,this.enabled=!1,this.canvas=t,addEventListener("keydown",r=>{r.code==="Space"&&(r.repeat||(this.jumpQueued=!0),r.preventDefault()),r.code==="KeyE"&&!r.repeat&&(this.dashQueued=!0),r.code==="KeyC"&&!r.repeat&&this.#e(!this.touchCrouch),this.keys.add(r.code)}),addEventListener("keyup",r=>this.keys.delete(r.code)),addEventListener("blur",()=>this.keys.clear());let s=!1;t.addEventListener("mousedown",()=>{if(this.enabled){if(document.pointerLockElement!==t&&t.requestPointerLock)try{let r=t.requestPointerLock();r&&r.catch&&r.catch(()=>{})}catch{}s=!0}}),addEventListener("mouseup",()=>s=!1),addEventListener("mousemove",r=>{this.enabled&&(document.pointerLockElement===t||s)&&(this.look.x+=r.movementX*Ae.camera.mouseSens,this.look.y+=r.movementY*Ae.camera.mouseSens)}),this.root=i,this.#t(i)}#e(t){this.touchCrouch=t,this.root?.querySelector(".btn-crouch")?.classList.toggle("active",t)}#t(t){let i=t.querySelector(".stick"),s=t.querySelector(".stick-knob"),r=t.querySelector(".stick-zone"),a=t.querySelector(".look-zone"),n=y=>{y.preventDefault(),y.stopPropagation()},o=(y,b,g)=>{let S=t.querySelector(y);S.addEventListener("pointerdown",A=>{n(A),S.classList.add("down"),b();try{S.setPointerCapture(A.pointerId)}catch{}});let E=()=>{S.classList.remove("down"),g?.()};S.addEventListener("pointerup",E),S.addEventListener("pointercancel",E),S.addEventListener("mousedown",A=>A.stopPropagation())};o(".btn-jump",()=>{this.jumpQueued=!0,this.jumpHeldBtn=!0},()=>{this.jumpHeldBtn=!1}),o(".btn-dash",()=>{this.dashQueued=!0}),o(".btn-run",()=>{this.touchRun=!this.touchRun,t.querySelector(".btn-run").classList.toggle("active",this.touchRun)}),o(".btn-crouch",()=>this.#e(!this.touchCrouch));let l=null,h=0,c=0,d=52;r.addEventListener("pointerdown",y=>{n(y),l=y.pointerId;let b=r.getBoundingClientRect(),g=r.classList.contains("fixed");h=g?b.left+b.width/2:y.clientX,c=g?b.top+b.height/2:y.clientY,g||(i.style.left=h+"px",i.style.top=c+"px"),i.classList.add("on");try{r.setPointerCapture(y.pointerId)}catch{}u(y)});let u=y=>{if(y.pointerId!==l)return;let b=y.clientX-h,g=y.clientY-c,S=Math.hypot(b,g);S>d&&(b*=d/S,g*=d/S),s.style.transform=`translate(${b}px, ${g}px)`,this.move.x=b/d,this.move.y=-g/d,this.stickRun=S>d*1.35,y.preventDefault()},p=y=>{y.pointerId===l&&(l=null,this.move.x=this.move.y=0,this.stickRun=!1,s.style.transform="",i.classList.remove("on"))};r.addEventListener("pointermove",u),r.addEventListener("pointerup",p),r.addEventListener("pointercancel",p),r.addEventListener("mousedown",y=>y.stopPropagation());let _=null,x=0,m=0;a.addEventListener("pointerdown",y=>{if(y.pointerType!=="mouse"){_=y.pointerId,x=y.clientX,m=y.clientY;try{a.setPointerCapture(y.pointerId)}catch{}y.preventDefault()}}),a.addEventListener("pointermove",y=>{y.pointerId===_&&(this.look.x+=(y.clientX-x)*Ae.camera.touchSens,this.look.y+=(y.clientY-m)*Ae.camera.touchSens,x=y.clientX,m=y.clientY,y.preventDefault())});let f=y=>{y.pointerId===_&&(_=null)};a.addEventListener("pointerup",f),a.addEventListener("pointercancel",f)}reset(){this.touchRun=!1,this.#e(!1),this.jumpHeldBtn=!1,this.root?.querySelector(".btn-run")?.classList.remove("active"),this.move.x=this.move.y=0}read(){let t=this.keys,i=this.move.x,s=this.move.y;(t.has("KeyW")||t.has("ArrowUp"))&&(s+=1),(t.has("KeyS")||t.has("ArrowDown"))&&(s-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(i+=1),(t.has("KeyA")||t.has("ArrowLeft"))&&(i-=1);let r=Math.hypot(i,s);r>1&&(i/=r,s/=r);let a={x:i,y:s,run:t.has("ShiftLeft")||t.has("ShiftRight")||this.touchRun||this.stickRun,crouch:this.touchCrouch||t.has("ControlLeft"),jump:this.jumpQueued,jumpHold:t.has("Space")||this.jumpHeldBtn,dash:this.dashQueued,lookX:this.look.x,lookY:this.look.y};return this.jumpQueued=!1,this.dashQueued=!1,this.look.x=this.look.y=0,this.enabled||(a.x=a.y=0,a.jump=a.dash=a.jumpHold=!1,a.lookX=a.lookY=0),this.lookOnly&&(a.x=a.y=0,a.jump=a.dash=a.run=a.jumpHold=a.crouch=!1),a}releasePointer(){document.pointerLockElement&&document.exitPointerLock()}}});var Ni,Dn,Md=ut(()=>{Lt();Ii();Ni=Ae.camera,Dn=class{constructor(t,i){this.cam=t,this.blockers=i,this.yaw=0,this.pitch=.32,this.distance=Ni.distance,this.baseDistance=Ni.distance,this.lookHeight=Ni.height,this.curDist=Ni.distance,this.focus=new I,this.ray=new Wu,this.mode="third",this.shake=0}configure(t){this.baseDistance=t?.distance??Ni.distance,this.lookHeight=t?.height??Ni.height,this.side=t?.side??0}snap(t){this.focus.set(t.x,t.y+this.lookHeight,t.z),this.curDist=this.baseDistance,this.#t()}update(t,i,s){this.yaw-=s.lookX,this.pitch=Tt.clamp(this.pitch+s.lookY,Ni.pitchMin,Ni.pitchMax);let r=new I(i.x,i.y+this.lookHeight,i.z),a=1-Math.exp(-t*Ni.follow*1.6),n=1-Math.exp(-t*Ni.follow*.6);this.focus.x+=(r.x-this.focus.x)*a,this.focus.z+=(r.z-this.focus.z)*a,this.focus.y+=(r.y-this.focus.y)*n;let o=this.#e();this.ray.set(this.focus,o),this.ray.far=this.baseDistance;let l=this.ray.intersectObjects(this.blockers,!1)[0],h=l?Math.max(Ni.minDistance,l.distance-.35):this.baseDistance;this.curDist=h<this.curDist?h:this.curDist+(h-this.curDist)*(1-Math.exp(-t*4)),this.shake=Math.max(0,this.shake-t*1.5),this.#t()}#e(){return new I(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch)).normalize()}#t(){let t=Math.cos(this.yaw),i=-Math.sin(this.yaw),s=this.focus.clone();s.x+=t*this.side,s.z+=i*this.side;let r=s.clone().addScaledVector(this.#e(),this.curDist);if(r.y=Math.max(.35,r.y),this.shake>0){let a=this.shake*.12;r.x+=(Math.random()-.5)*a,r.y+=(Math.random()-.5)*a,r.z+=(Math.random()-.5)*a}this.cam.position.copy(r),this.cam.lookAt(s)}}});var Or,sh,rh=ut(()=>{Or=class{constructor(t,i=.55,s=.5){this.cell=s,this.half=t.half,this.n=Math.round(t.half*2/s),this.blocked=new Uint8Array(this.n*this.n);for(let r=0;r<this.n;r++)for(let a=0;a<this.n;a++){let n=-this.half+(a+.5)*s,o=-this.half+(r+.5)*s,l=Math.abs(n)>this.half-1.4||Math.abs(o)>this.half-1.4,h=t.near(n,o);if(!l){for(let c of h.boxes)if(!(!c.nav||c.top<.35)&&n>c.minX-i&&n<c.maxX+i&&o>c.minZ-i&&o<c.maxZ+i){l=!0;break}}if(!l){for(let c of h.circles)if(!(!c.nav||c.top<.35)&&(n-c.x)**2+(o-c.z)**2<(c.r+i)**2){l=!0;break}}this.blocked[r*this.n+a]=l?1:0}this.g=new Float32Array(this.n*this.n),this.from=new Int32Array(this.n*this.n),this.closed=new Uint8Array(this.n*this.n)}toCell(t,i){let s=Math.max(0,Math.min(this.n-1,Math.floor((t+this.half)/this.cell))),r=Math.max(0,Math.min(this.n-1,Math.floor((i+this.half)/this.cell)));return[s,r]}center(t,i){return[-this.half+(t+.5)*this.cell,-this.half+(i+.5)*this.cell]}free(t,i){return t>=0&&i>=0&&t<this.n&&i<this.n&&!this.blocked[i*this.n+t]}nearestFree(t,i){if(this.free(t,i))return[t,i];for(let s=1;s<14;s++){let r=null,a=1e9;for(let n=-s;n<=s;n++)for(let o=-s;o<=s;o++){if(Math.max(Math.abs(o),Math.abs(n))!==s||!this.free(t+o,i+n))continue;let l=o*o+n*n;l<a&&(a=l,r=[t+o,i+n])}if(r)return r}return[t,i]}find(t,i,s,r){let a=this.n,[n,o]=this.nearestFree(...this.toCell(t,i)),[l,h]=this.nearestFree(...this.toCell(s,r)),c=o*a+n,d=h*a+l;this.g.fill(1/0),this.closed.fill(0),this.from.fill(-1),this.g[c]=0;let u=new sh,p=(S,E)=>{let A=Math.abs(S-l),v=Math.abs(E-h);return A+v+(Math.SQRT2-2)*Math.min(A,v)};u.push(c,p(n,o));let _=!1,x=0;for(;u.size&&x++<4e4;){let S=u.pop();if(S===d){_=!0;break}if(this.closed[S])continue;this.closed[S]=1;let E=S%a,A=S/a|0;for(let v=-1;v<=1;v++)for(let M=-1;M<=1;M++){if(!M&&!v)continue;let U=E+M,R=A+v;if(!this.free(U,R)||M&&v&&(!this.free(E+M,A)||!this.free(E,A+v)))continue;let N=R*a+U,j=this.g[S]+(M&&v?Math.SQRT2:1);j<this.g[N]&&(this.g[N]=j,this.from[N]=S,u.push(N,j+p(U,R)))}}if(!_)return null;let m=[];for(let S=d;S!==-1;S=this.from[S])m.push(S);m.reverse();let f=m.map(S=>this.center(S%a,S/a|0));f[f.length-1]=[s,r];let y=[],b=[t,i],g=0;for(;g<f.length-1;){let S=g+1;for(let E=f.length-1;E>g+1;E--)if(this.clear(b[0],b[1],f[E][0],f[E][1])){S=E;break}y.push(f[S]),b=f[S],g=S}return y.length||y.push([s,r]),y}clear(t,i,s,r){let a=Math.hypot(s-t,r-i),n=Math.ceil(a/(this.cell*.4));for(let o=1;o<n;o++){let l=o/n,[h,c]=this.toCell(t+(s-t)*l,i+(r-i)*l);if(this.blocked[c*this.n+h])return!1}return!0}},sh=class{constructor(){this.a=[],this.p=[]}get size(){return this.a.length}push(t,i){let s=this.a,r=this.p;s.push(t),r.push(i);let a=s.length-1;for(;a>0;){let n=a-1>>1;if(r[n]<=r[a])break;[s[n],s[a]]=[s[a],s[n]],[r[n],r[a]]=[r[a],r[n]],a=n}}pop(){let t=this.a,i=this.p,s=t[0],r=t.pop(),a=i.pop();if(t.length){t[0]=r,i[0]=a;let n=0;for(;;){let o=n*2+1,l=o+1,h=n;if(o<t.length&&i[o]<i[h]&&(h=o),l<t.length&&i[l]<i[h]&&(h=l),h===n)break;[t[h],t[n]]=[t[n],t[h]],[i[h],i[n]]=[i[n],i[h]],n=h}}return s}}});function Td(e){let t=Ae.world.pushStrength;for(let i=0;i<e.length;i++){let s=e[i];if(s.alive)for(let r=i+1;r<e.length;r++){let a=e[r];if(!a.alive)continue;let n=s.ctrl,o=a.ctrl;if(n.mantle||o.mantle||Math.abs(n.pos.y-o.pos.y)>1.4)continue;let l=o.pos.x-n.pos.x,h=o.pos.z-n.pos.z,c=n.radius+o.radius,d=l*l+h*h;if(d>=c*c||d<1e-8)continue;let u=Math.sqrt(d),p=(c-u)*t,_=n.phys.mass,x=o.phys.mass,m=_+x,f=l/u,y=h/u,b={x:n.pos.x-f*p*(x/m),y:n.pos.y,z:n.pos.z-y*p*(x/m)},g={x:o.pos.x+f*p*(_/m),y:o.pos.y,z:o.pos.z+y*p*(_/m)};n.world.resolve(b,n.radius,n.pos.y+ls.stepHeight,n.pos.y+n.height*.9),o.world.resolve(g,o.radius,o.pos.y+ls.stepHeight,o.pos.y+o.height*.9),n.pos.x=b.x,n.pos.z=b.z,o.pos.x=g.x,o.pos.z=g.z}}}var ls,On,bd,Vs,_a,Br,ah=ut(()=>{Lt();Ii();ls=Ae.world,On=new I,bd=new I,Vs=new I,_a=new I,Br=class{constructor(t,i){this.hero=t,this.world=i,this.pos=new I,this.vel=new I,this.yaw=0,this.grounded=!0,this.coyote=0,this.jumpBuf=0,this.stamina=1,this.exhausted=!1,this.running=!1,this.landed=!1,this.landSpeed=0,this.dashT=0,this.dashCd=0,this.boostT=0,this.boostMul=1,this.moveMul=1,this.slowMul=1,this.speed=0,this.stagger=0,this.mantle=null,this.climbing=!1,this.flying=!1,this.flyEnergy=1,this.dashCharges=0,this.chargeT=0,this.crouching=!1}get phys(){return Ae.heroes[this.hero.id]}get radius(){return this.hero.radius}get height(){return this.hero.height*(this.crouching?.58:1)}get elevated(){return this.pos.y>1.3}spawn(t,i=Math.PI){this.pos.copy(t),this.vel.set(0,0,0),this.yaw=i,this.stamina=1,this.exhausted=!1,this.grounded=!0,this.dashT=this.dashCd=this.boostT=this.stagger=0,this.mantle=null,this.climbing=this.flying=this.crouching=!1,this.flyEnergy=1,this.dashCharges=this.phys.dash.charges??0,this.chargeT=0}get dashReady(){return this.dashCd<=0&&(this.phys.dash.charges?this.dashCharges>0:!0)}update(t,i,s){let r=this.phys;On.set(-Math.sin(s),0,-Math.cos(s)),bd.set(-On.z,0,On.x),Vs.set(0,0,0).addScaledVector(On,i.y||0).addScaledVector(bd,i.x||0);let a=Math.min(1,Vs.length());a>.001&&Vs.normalize();let n=Vs.x,o=Vs.z;if(this.dashed=!1,this.jumped=!1,this.landed=!1,this.mantle)return this.#e(t);i.crouch&&this.grounded&&r.jump>0?this.crouching=!0:this.crouching&&(!i.crouch||!this.grounded)&&this.world.ceilingAt(this.pos.x,this.pos.z,this.radius,this.pos.y+.1)>this.pos.y+this.hero.height&&(this.crouching=!1);let l=i.run&&a>.2&&!this.crouching;this.exhausted&&this.stamina>.35&&(this.exhausted=!1),this.running=l&&!this.exhausted,this.running?(this.stamina-=t/r.stamina,this.stamina<=0&&(this.stamina=0,this.exhausted=!0,this.running=!1)):this.stamina=Math.min(1,this.stamina+t*r.regen*(a<.1?1.4:1)),this.dashCd=Math.max(0,this.dashCd-t),this.dashT=Math.max(0,this.dashT-t),r.dash.charges&&(this.dashCharges<r.dash.charges?(this.chargeT+=t,this.chargeT>=r.dash.recharge&&(this.chargeT=0,this.dashCharges++)):this.chargeT=0),i.dash&&this.dashReady&&(a>.2||this.speed>1)&&(this.dashT=r.dash.time,this.dashCd=r.dash.cooldown,r.dash.charges&&this.dashCharges--,this.dashed=!0);let h=this.dashT>0;this.boostT=Math.max(0,this.boostT-t),this.stagger=Math.max(0,this.stagger-t);let c=this.exhausted?.85:1,d=this.moveMul*this.slowMul*(this.boostT>0?this.boostMul:1)*(this.stagger>0?.45:1),u=(this.running?r.run:r.walk*c*(this.crouching?.5:1))*a*d;h&&(u=r.run*r.dash.mul*this.moveMul*this.slowMul);let p=(h&&a<.2?Vs.set(Math.sin(this.yaw),0,Math.cos(this.yaw)):Vs).multiplyScalar(u);_a.set(this.vel.x,0,this.vel.z);let _=this.grounded?a>.01?r.accel:r.decel:r.air;if(this.grounded&&a>.2){let g=_a.length();if(g>r.walk){let S=(_a.x*p.x+_a.z*p.z)/(g*(p.length()||1));S<.3&&(_*=Tt.lerp(.55,1,(S+1)/1.3)**(r.mass>2?1.6:1))}}h&&(_=r.accel*3);let x=p.sub(_a),m=_*t;x.length()>m&&x.setLength(m),this.vel.x+=x.x,this.vel.z+=x.z;let f=this.world.ladderAt(this.pos.x,this.pos.z,this.radius,this.pos.y);this.climbing=!!(f&&a>.3&&n*-f.nx+o*-f.nz>.4);let y=ls.gravity*r.gravity;if(i.jump?this.jumpBuf=ls.jumpBuffer:this.jumpBuf-=t,this.coyote=this.grounded||this.climbing?ls.coyoteTime:this.coyote-t,this.jumpBuf>0&&this.coyote>0&&r.jump>0&&!this.crouching&&(this.vel.y=Math.sqrt(2*y*r.jump),this.climbing&&f&&(this.vel.x+=f.nx*4,this.vel.z+=f.nz*4),this.grounded=!1,this.climbing=!1,this.coyote=0,this.jumpBuf=0,this.jumped=!0,this.stamina=Math.max(0,this.stamina-.03)),this.flying=!1,r.fly&&((i.jumpHold||i.jump)&&this.flyEnergy>0?(this.flying=!0,this.vel.y+=(r.fly.speed-this.vel.y)*Math.min(1,t*8),this.flyEnergy=Math.max(0,this.flyEnergy-t/r.fly.time),this.grounded=!1):this.grounded&&(this.flyEnergy=Math.min(1,this.flyEnergy+t*r.fly.regen))),this.climbing?(this.vel.y=r.climb??3.2,this.vel.x*=.5,this.vel.z*=.5,this.grounded=!1):this.flying||(this.vel.y=Math.max(-ls.maxFall*(r.fly?.3:1),this.vel.y-y*t*(r.fly&&this.vel.y<0?.35:1))),this.#t(t),!this.grounded&&!this.mantle&&a>.3&&this.vel.y<4&&r.reach>0){let g=this.radius+.3,S=this.pos.x+n*g,E=this.pos.z+o*g,A=this.world.ledgeAt(S,E,this.pos.y,r.reach,this.height);if(A!==null){let v=new I(this.pos.x+n*(this.radius+.35),A,this.pos.z+o*(this.radius+.35));this.mantle={t:0,dur:.22+(A-this.pos.y)*.12*(r.mass>2?1.4:1),from:this.pos.clone(),to:v},this.vel.set(0,0,0),this.stamina=Math.max(0,this.stamina-.05),this.climbing=!1}}let b=Math.hypot(this.vel.x,this.vel.z);if(b>.4&&(a>.05||h)){let g=Math.atan2(this.vel.x,this.vel.z),S=Math.atan2(Math.sin(g-this.yaw),Math.cos(g-this.yaw));this.yaw+=S*Math.min(1,r.turn*t)}else this.climbing&&f&&(this.yaw=Math.atan2(-f.nx,-f.nz));this.speed=b}#e(t){let i=this.mantle;i.t+=t;let s=Math.min(1,i.t/i.dur),r=Math.min(1,s/.65),a=Math.max(0,(s-.35)/.65),n=o=>o*o*(3-2*o);if(this.pos.y=i.from.y+(i.to.y-i.from.y)*n(r),this.pos.x=i.from.x+(i.to.x-i.from.x)*n(a),this.pos.z=i.from.z+(i.to.z-i.from.z)*n(a),this.grounded=!1,this.speed=0,s>=1){this.mantle=null;let o={x:this.pos.x,y:this.pos.y,z:this.pos.z};this.world.resolve(o,this.radius,this.pos.y+ls.stepHeight,this.pos.y+this.height*.9),this.pos.x=o.x,this.pos.z=o.z,this.pos.y=Math.max(this.pos.y,this.world.groundAt(this.pos.x,this.pos.z,this.radius,this.pos.y+.1)),this.grounded=!0,this.vel.set(0,0,0)}}#t(t){let i=this.pos.y+(this.grounded?ls.stepHeight:.08),s=this.pos.y+this.height*.9,r={x:this.pos.x+this.vel.x*t,y:this.pos.y,z:this.pos.z+this.vel.z*t},a=r.x,n=r.z;this.hitWall=this.world.resolve(r,this.radius,i,s);let o=r.x-a,l=r.z-n,h=Math.hypot(o,l);if(h>1e-5){let u=o/h,p=l/h,_=this.vel.x*u+this.vel.z*p;_<0&&(this.vel.x-=_*u,this.vel.z-=_*p)}this.pos.x=r.x,this.pos.z=r.z;let c=this.grounded,d=this.world.groundAt(this.pos.x,this.pos.z,this.radius,i);if(this.pos.y+=this.vel.y*t,this.vel.y>0){let u=this.world.ceilingAt(this.pos.x,this.pos.z,this.radius,this.pos.y-this.vel.y*t+this.height*.5);this.pos.y+this.height>u&&(this.pos.y=Math.max(d,u-this.height),this.vel.y=0)}this.pos.y<=d?(c||(this.landed=!0,this.landSpeed=this.vel.y,this.vel.y<-15&&!this.phys.fly&&(this.stagger=Math.min(.6,(-this.vel.y-15)*.06+.2))),this.pos.y=d,this.vel.y=0,this.grounded=!0):c&&this.vel.y<=0&&this.pos.y-d<ls.stepHeight?(this.pos.y=d,this.vel.y=0,this.grounded=!0):this.grounded=!1}animState(t){let i=this.mantle;return{t,speed:i?0:this.speed||0,grounded:this.grounded&&!i,vy:i||this.climbing?3:this.vel.y,running:this.running||this.dashT>0,landed:this.landed,landSpeed:this.landSpeed,crouch:this.crouching}}}});function Ed(e,t){let i=null,s=1/0;for(let r of e){if(!r.alive||r.protected||r.hidden)continue;let a=r.ctrl.pos.distanceTo(t);a<s&&(s=a,i=r)}return i}var Ui,nx,nh,Bn,wd=ut(()=>{Lt();Ii();rh();ah();Nr();Dr();Ui=Ae.ghost,nx=2.1,nh=null,Bn=class{constructor(t,i,s,r,{heroes:a=[]}={}){this.def=t,this.world=i,this.scene=s,this.heroes=a,this.char=t.build(),this.root=this.char.root,this.root.visible=!1,s.add(this.root),this.nav=r||new Or(i,t.radius+.1),this.ctrl=new Br(t,i),this.pos=this.ctrl.pos,this.vel=this.ctrl.vel,this.disguises=new Map,this.isPlayer=!1,this.reset(new I)}get radius(){return this.def.radius}get human(){return this.isPlayer||!!this.remote}get yaw(){return this.ctrl.yaw}reset(t){this.ctrl.spawn(t,0),this.state="hidden",this.appear=0,this.root.visible=!1,this.path=null,this.repath=0,this.lastSeen=null,this.target=null,this.unseen=0,this.wanderTarget=null,this.sees=!1,this.stunT=0,this.slowT=0,this.stuckT=0,this.stuckFrom=null,this.disguise=null,this.disguiseCd=6,this.caughtN=0,this.#e()}spawn(){this.state="appear",this.appear=0,this.root.visible=!0}get active(){return this.state==="search"||this.state==="hunt"}get disguised(){return!!this.disguise}get eyeY(){return this.pos.y+nx}stun(t){this.stunT=Math.max(this.stunT,t),this.ctrl.dashT=0,this.reveal()}slow(t){this.slowT=Math.max(this.slowT,t)}knock(t,i,s){let r={x:this.pos.x+t*s,y:this.pos.y,z:this.pos.z+i*s};this.world.resolve(r,this.radius,this.pos.y+.3,this.pos.y+2.2),this.pos.x=r.x,this.pos.z=r.z,this.vel.set(0,0,0),this.path=null}get disguiseReady(){return this.disguiseCd<=0&&!this.disguise&&this.active&&this.stunT<=0}useDisguise(t=[],i="hero"){if(!this.disguiseReady)return!1;if(i==="prop"){let s=Ts[Math.random()*Ts.length|0],r=this.disguises.get("prop:"+s.id);r||(r={root:Gs(s.id),update(){}},this.disguises.set("prop:"+s.id,r)),this.scene.add(r.root),r.root.visible=!0,this.disguise={prop:s,char:r,t:Ui.disguise.time}}else{if(!this.heroes.length)return!1;let s=new Set(t.filter(l=>l.alive).map(l=>l.hero.id)),r=this.heroes.filter(l=>!s.has(l.id)),a=r.length?r:this.heroes,n=a[Math.random()*a.length|0],o=this.disguises.get(n.id);if(!o){o=n.build("classic"),nh||(nh=Li("rgba(150,80,230,0.55)","rgba(90,30,160,0)"));let l=new qi(new Ci({map:nh,transparent:!0,depthWrite:!1,blending:Ot,opacity:.5}));l.scale.set(n.radius*3,.9,1),l.position.y=.35,o.root.add(l),o.shimmer=l,this.disguises.set(n.id,o)}this.scene.add(o.root),o.root.visible=!0,this.disguise={hero:n,char:o,t:Ui.disguise.time}}return this.root.visible=!1,this.poof=!0,!0}reveal(){this.disguise&&(this.#e(),this.disguise=null,this.disguiseCd=Ui.disguise.cd,this.root.visible=this.state!=="hidden",this.poof=!0)}#e(){for(let t of this.disguises.values())t.root.visible=!1,this.scene.remove(t.root)}update(t,i,s,r,a={},n=null,o=0){let l={t:i,speed:0,mode:"search",appear:1};if(this.state==="hidden")return l;if(this.state==="appear")return this.appear=Math.min(1,this.appear+t/2.2),l.appear=this.appear,l.mode="hunt",this.appear>=1&&(this.state=this.human?"hunt":"search"),this.#n(l,t),l;this.stunT=Math.max(0,this.stunT-t),this.slowT=Math.max(0,this.slowT-t),this.disguiseCd=Math.max(0,this.disguiseCd-t),this.disguise&&(this.disguise.t-=t,this.disguise.t<=0&&this.reveal());let h=this.#t(t,s),c;this.human?c=n:c=this.#i(t,h,s);let d=this.ctrl;d.moveMul=this.stunT>0?0:1,this.disguise?.prop&&c&&(d.moveMul*=Ae.abilities.prop.walk,c={...c,run:!1,jumpHold:!1,jump:!1}),d.slowMul=(this.slowT>0?.45:1)*(1+Ui.lateBoost*r)*(this.speedMul??1);let u=d.dashT>0;d.update(t,this.stunT>0?{x:0,y:0}:c,this.human?o:0),d.dashT>0&&!u&&this.reveal(),this.dashed=d.dashed;for(let p of a.domes||[]){let _=this.pos.x-p.x,x=this.pos.z-p.z,m=p.r+this.radius,f=Math.hypot(_,x);if(f<m){let y=f||.001;this.pos.x=p.x+_/y*m,this.pos.z=p.z+x/y*m;let b=(this.vel.x*_+this.vel.z*x)/y;b<0&&(this.vel.x-=b*_/y,this.vel.z-=b*x/y)}}return this.human||this.#o(t),l.mode=this.stunT>0?"search":this.state==="hunt"?"hunt":"search",l.speed=d.speed,l.stunned=this.stunT>0,this.#n(l,t),l}#t(t,i){let s=null,r=1/0,a=null,n=Math.sin(this.yaw),o=Math.cos(this.yaw);for(let h of i){if(!h.alive||h.protected)continue;let c=h.ctrl.pos,d=c.x-this.pos.x,u=c.z-this.pos.z,p=Math.hypot(d,u),_=p<Ui.sightRange&&this.world.lineOfSight(this.pos.x,this.pos.z,c.x,c.z,!1,this.eyeY,c.y+h.ctrl.height*.75);h.hidden&&p>2.6&&(_=!1),h.prop&&!(h.ctrl.speed>.8&&p<14)&&(_=!1),_&&p>8&&(d*n+u*o)/(p||1)<-.35&&(_=!1);let x=h.ctrl.running&&p<Ui.hearRunRange&&!h.hidden&&!h.prop;if(!(_||x||p<2.2))continue;let m=p*(_?1:1.6);h===this.target&&(a={a:h,d:p,sees:_}),m<r&&(r=m,s={a:h,d:p,sees:_})}let l=a&&a.d<r*1.5+3?a:s;return this.sees=!!(l&&l.sees),l?(this.target=l.a,this.lastSeen=l.a.ctrl.pos.clone(),this.unseen=0,this.state!=="hunt"&&!this.disguise&&(this.state="hunt")):(this.unseen+=t,this.state==="hunt"&&this.unseen>Ui.loseSightTime&&(this.target=null,this.human||(this.state="search"))),l}#i(t,i,s){let r=this.ctrl,a={x:0,y:0,run:!1,jump:!1,jumpHold:!1,dash:!1};if(!i&&this.disguiseReady&&Math.random()<t*.25&&this.useDisguise(s,Math.random()<.3?"prop":"hero"),this.disguise?.prop){let x=Ed(s,this.pos);if(x&&x.ctrl.pos.distanceTo(this.pos)<4.5)this.reveal(),this.target=x,this.state="hunt",this.lastSeen=x.ctrl.pos.clone();else return a}let n,o=!1;if(this.disguise){let x=i?.a||Ed(s,this.pos);x&&(n=x.ctrl.pos,this.target=x,o=x.ctrl.pos.distanceTo(this.pos)>3)}if(!n)if(this.state==="hunt"&&this.target)n=this.sees?this.target.ctrl.pos:this.lastSeen;else if(this.lastSeen&&this.pos.distanceTo(this.lastSeen)>1.5)n=this.lastSeen;else{if(this.lastSeen=null,!this.wanderTarget||this.pos.distanceTo(this.wanderTarget)<1.5){let x=s.filter(y=>y.alive),m=x.filter(y=>y.prop&&y.ctrl.pos.distanceTo(this.pos)<16&&this.world.lineOfSight(this.pos.x,this.pos.z,y.ctrl.pos.x,y.ctrl.pos.z,!0,this.eyeY,1)),f=Math.random();m.length&&f<.2?this.wanderTarget=m[Math.random()*m.length|0].ctrl.pos.clone():f<.6?this.wanderTarget=this.#s():f<.75&&x.length?this.wanderTarget=this.#r(x[Math.random()*x.length|0].ctrl.pos):this.wanderTarget=this.#r(this.pos)}n=this.wanderTarget}if(!n)return a;let l=Math.hypot(n.x-this.pos.x,n.z-this.pos.z),h=!1;if(this.target&&this.target.alive&&!o){let x=this.target.ctrl.pos;h=x.y-this.pos.y>.8&&Math.hypot(x.x-this.pos.x,x.z-this.pos.z)<3.2}let c=h?this.target.ctrl.pos:this.#a(n,this.sees&&i&&i.d<7,t),d=c.x-this.pos.x,u=c.z-this.pos.z,p=Math.hypot(d,u);p>.05&&(a.x=d/p,a.y=-u/p);let _=this.state==="hunt"&&!!this.target&&!o;return a.run=_&&(this.sees||l<10)&&!r.exhausted,_&&this.sees&&i&&i.d<Ui.burstRange&&i.d>1.6&&r.dashReady&&!this.target.hidden&&(this.target.ctrl.running||this.target.ctrl.dashT>0||i.d<4||r.dashCharges>=(r.phys.dash.charges??1))&&(a.dash=!0),a.jumpHold=h,a}#a(t,i,s){if(this.repath-=s,i&&this.nav.clear(this.pos.x,this.pos.z,t.x,t.z))return this.path=null,t;if((!this.path||this.repath<=0)&&(this.path=this.nav.find(this.pos.x,this.pos.z,t.x,t.z),this.repath=Ui.repathEvery*(.8+Math.random()*.4)),this.path&&this.path.length){let[r,a]=this.path[0];return Math.hypot(r-this.pos.x,a-this.pos.z)<.7&&this.path.length>1&&this.path.shift(),{x:this.path[0][0],z:this.path[0][1]}}return t}#s(){this.checked||=new Map;let t=performance.now(),i=null,s=-1/0;for(let r of this.world.bushes){let a=Math.hypot(r.x-this.pos.x,r.z-this.pos.z),n=(t-(this.checked.get(r)||-1e9))/1e3,o=Math.min(n,60)*.5-a+Math.random()*8;o>s&&(s=o,i=r)}return i?(this.checked.set(i,t),new I(i.x,0,i.z)):this.#r(this.pos)}#r(t){for(let i=0;i<20;i++){let s=t.x+(Math.random()-.5)*22,r=t.z+(Math.random()-.5)*22,[a,n]=this.nav.toCell(s,r);if(this.nav.free(a,n))return new I(s,0,r)}return t.clone()}#o(t){if(this.stunT>0){this.stuckT=0,this.stuckFrom=null;return}this.stuckFrom||(this.stuckFrom=this.pos.clone()),this.stuckT+=t,this.stuckT>1.5&&(this.pos.distanceTo(this.stuckFrom)<.6&&(this.wanderTarget=null,this.path=null,this.sees||(this.lastSeen=null,this.state==="hunt"&&(this.state="search",this.target=null))),this.stuckT=0,this.stuckFrom=this.pos.clone())}#n(t,i){let s=this.disguise;if(s){let r=s.char.root;r.position.copy(this.pos),s.prop||(r.rotation.y=this.yaw),s.char.update(i,this.ctrl.animState(t.t)),s.char.shimmer&&(s.char.shimmer.material.opacity=.35+Math.sin(t.t*3)*.15);return}this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,this.root.rotation.z=t.stunned?Math.sin(t.t*18)*.06:0,this.char.update(i,t)}catches(t){if(!this.active||this.stunT>0||!t.alive||t.protected)return!1;let i=t.ctrl.pos;return Math.hypot(i.x-this.pos.x,i.z-this.pos.z)<Ui.catchRadius+t.ctrl.radius*.6&&i.y-this.pos.y<Ui.catchHeight&&this.pos.y-i.y<1.5}}});function Rd(e,t,i,s,r){let a=new li({transparent:!0,depthWrite:!1,side:vi,blending:Ot,uniforms:{uT:{value:0},uA:{value:0}},vertexShader:`varying vec3 vN; varying vec3 vV; varying vec3 vP;
      void main(){ vec4 w = modelMatrix*vec4(position,1.); vP = position; vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition - w.xyz); gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`uniform float uT; uniform float uA; varying vec3 vN; varying vec3 vV; varying vec3 vP;
      void main(){ float f = pow(1. - abs(dot(vN, vV)), 2.2);
        float hex = step(0.92, fract(vP.y*3.5 + uT*0.4)) * 0.25;
        vec3 c = mix(vec3(1.,.72,.3), vec3(1.,.9,.6), f);
        gl_FragColor = vec4(c, (0.06 + f*0.75 + hex*f) * uA); }`}),n=new ht(new qt(s,40,20,0,Math.PI*2,0,Math.PI/2),a);n.position.set(t,0,i),e.add(n);let o=Cd(e,t,i,s,16760928),l=0;return{x:t,z:i,r:s,update(h){l+=h;let c=Math.min(1,l/.4);return n.scale.setScalar(.2+.8*(1-(1-c)**3)),a.uniforms.uT.value=l,a.uniforms.uA.value=Math.min(1,l/.3)*Math.min(1,(r-l)/.6),o.material.opacity=a.uniforms.uA.value*.6,l>=r?(e.remove(n,o),a.dispose(),!1):!0}}}function Cd(e,t,i,s,r){let a=new ht(new bn(s*.94,s,48),new Pi({color:r,transparent:!0,opacity:.6,depthWrite:!1,blending:Ot}));return a.rotation.x=-Math.PI/2,a.position.set(t,.05,i),e.add(a),a}function Fn(e,t,i,s,r=16748442){let a=Cd(e,t,i,1,r),n=24,o=new dt,l=new Float32Array(n*3),h=[];for(let u=0;u<n;u++){let p=Math.random()*Math.PI*2,_=Math.random()*s*.8;l.set([t+Math.cos(p)*_,.3+Math.random(),i+Math.sin(p)*_],u*3),h.push(.8+Math.random()*1.5)}o.setAttribute("position",new Xt(l,3));let c=new wr(o,new ks({size:.4,map:Ad,color:r,transparent:!0,depthWrite:!1,blending:Ot}));e.add(c);let d=0;return{update(u){d+=u,a.scale.setScalar(1+d*s*1.6),a.material.opacity=Math.max(0,.8-d);for(let p=0;p<n;p++)l[p*3+1]+=h[p]*u;return o.attributes.position.needsUpdate=!0,c.material.opacity=Math.max(0,1-d/1.4),d>1.4?(e.remove(a,c),o.dispose(),!1):!0}}}function Pd(e,t,i,s,r=6){let a=new nt,n=new Ct({color:16765066,emissive:16751162,emissiveIntensity:2.6});a.add(new ht(new qt(.14,10,8),n));let o=new ht(new fa(.11,.28,8),n);o.position.y=.18,a.add(o);let l=new qi(new Ci({map:Ad,transparent:!0,depthWrite:!1,blending:Ot}));l.scale.set(1.1,1.1,1),a.add(l),a.position.copy(t),e.add(a);let h=new I((Math.random()-.5)*4,3,(Math.random()-.5)*4),c=0;return{update(d){c+=d;let u=i();if(u){let p=new I(u.x,1.6,u.z).sub(a.position);if(p.length()<.8)return s(u),e.remove(a),!1;h.lerp(p.setLength(11),Math.min(1,d*2.5))}else h.y+=d*1.5;return a.position.addScaledVector(h,d),a.rotation.y+=d*6,l.material.opacity=.6+Math.sin(c*20)*.2,c>r?(e.remove(a),!1):!0}}}function Id(e,t,i){let s=new Ss((()=>{let h=document.createElement("canvas");h.width=h.height=64;let c=h.getContext("2d");c.fillStyle="#ffd98a",c.beginPath(),c.ellipse(32,40,13,11,0,0,Math.PI*2),c.fill();for(let[d,u]of[[17,22],[27,15],[38,15],[48,22]])c.beginPath(),c.ellipse(d,u,5,6,0,0,Math.PI*2),c.fill();return h})()),r=new Pi({map:s,transparent:!0,depthWrite:!1,blending:Ot}),a=new bs(.5,.5),n=[],o=1;for(let h=0;h<t.length-1;h++){let[c,d]=t[h],[u,p]=t[h+1],_=Math.hypot(u-c,p-d),x=Math.atan2(u-c,p-d);for(let m=0;m<_;m+=.8){let f=m/_,y=new ht(a,r);y.rotation.set(-Math.PI/2,0,x+Math.PI),y.position.set(c+(u-c)*f+Math.cos(x)*.18*o,.04,d+(p-d)*f-Math.sin(x)*.18*o),o=-o,y.userData.delay=n.length*.04,y.visible=!1,e.add(y),n.push(y)}}let l=0;return{update(h){l+=h;for(let c of n)c.visible=l>c.userData.delay;return r.opacity=Math.min(1,(i-l)/1)*(.75+Math.sin(l*5)*.25),l>i?(n.forEach(c=>e.remove(c)),a.dispose(),!1):!0}}}function Ld(e,t,i){let s=new qi(new Ci({map:Li("rgba(190,120,255,1)","rgba(120,40,200,0)",64),depthTest:!1,transparent:!0,blending:Ot}));s.scale.set(1.6,1.6,1),s.renderOrder=10,e.add(s);let r=0;return{update(a){r+=a;let n=t();return s.position.set(n.x,3.3+Math.sin(r*4)*.15,n.z),s.material.opacity=Math.min(1,i-r),r>i?(e.remove(s),!1):!0}}}function Nd(e,t,i,s,r){let a=new Pi({color:16760928,transparent:!0,opacity:.9,side:vi,depthWrite:!1,blending:Ot}),n=new ht(new bn(1.4,2,32,1,-Math.PI*.85,Math.PI*.7),a);n.rotation.x=-Math.PI/2;let o=new nt;o.add(n),o.rotation.y=r,o.position.set(t,i+1.1,s),e.add(o);let l=0;return{update(h){return l+=h,a.opacity=Math.max(0,.9-l*2.5),n.scale.setScalar(1+l*.6),l>.4?(e.remove(o),!1):!0}}}var Ad,oh=ut(()=>{Lt();Nr();Ad=Li("rgba(255,210,130,1)","rgba(255,150,40,0)",64)});var xa,Ud=ut(()=>{Ii();xa=class{constructor(t,i,s){this.agent=t,this.world=i,this.nav=s,this.mode="wander",this.goal=null,this.path=null,this.think=Math.random()*.3,this.stuck=0,this.idle=0,this.sat=0,this.patience=this.#e(),this.juke=null,this.ladder=null}#e(){let[t,i]=Ae.bots.restless,s=this.agent?.abilities?.game?.phase==="hide"?2.5:1;return(t+Math.random()*(i-t))*s}#t(t,i,s){let r=this.agent.ctrl;if(!t.active)return!1;if(t.disguised){let a=t.ctrl.speed>6.5||t.ctrl.dashT>0;if(!(s<Ae.ghost.disguise.noticeRange||a&&s<8))return!1}return t.target===this.agent&&t.sees?!0:s<Ae.bots.fleeRange&&this.world.lineOfSight(i.x,i.z,t.pos.x,t.pos.z,!0,i.y+r.height*.8,t.eyeY)}update(t,i){this.ghosts=i;let s=Ae.bots,r=this.agent,a=r.ctrl,n=a.pos,o=null,l=1/0;for(let y of i){let b=Math.hypot(y.pos.x-n.x,y.pos.z-n.z);b<l&&this.#t(y,n,b)&&(l=b,o=y)}this.threat=o,this.td=l,this.think-=t,this.think<=0&&(this.think=s.think*(.7+Math.random()*.6),this.#i(o,l));let h={x:0,y:0,run:!1,jump:!1,dash:!1};if(r.prop)return h;if(o&&l<s.jukeRange&&!a.elevated&&o.pos.y<n.y+1&&(!this.juke||this.juke.t<=0)){let y=n.x-o.pos.x,b=n.z-o.pos.z,g=Math.hypot(y,b)||1,S=Math.random()<.5?1:-1,E=-b/g*S*.85+y/g*.5,A=y/g*S*.85+b/g*.5,[v,M]=this.nav.toCell(n.x+E*2.5,n.z+A*2.5);this.nav.free(v,M)||(E=b/g*S*.85+y/g*.5,A=-y/g*S*.85+b/g*.5),this.juke={x:E,z:A,t:.45}}if(this.juke&&this.juke.t>0)return this.juke.t-=t,h.x=this.juke.x,h.y=-this.juke.z,h.run=!a.exhausted,h.dash=a.dashReady,this.juke.t<=0&&(this.path=null,this.think=0),h;if(a.elevated&&a.grounded&&this.mode!=="ladder"){if(this.mode="roof",o){let y=n.x-o.pos.x,b=n.z-o.pos.z,g=Math.hypot(y,b)||1;return h.x=y/g,h.y=-b/g,h.run=l<7&&!a.exhausted,h.jump=o.pos.y>n.y-1.2&&l<3.5,h}if(this.sat+=t,this.sat>this.patience){let y=this.roofDir??=Math.random()*Math.PI*2;h.x=Math.cos(y),h.y=Math.sin(y)}return h}if(this.mode==="roof"&&!a.elevated&&(this.mode="wander",this.roofDir=null,this.sat=0,this.path=null),this.mode==="ladder"&&this.ladder){let y=this.ladder,b=y.x+y.nx*(a.radius+.25),g=y.z+y.nz*(a.radius+.25),S=b-n.x,E=g-n.z;if(Math.hypot(S,E)>.5&&!a.climbing&&n.y<.5)(!this.path||!this.path.length)&&this.#s(b,g);else return h.x=-y.nx,h.y=y.nz,h.run=!1,a.elevated&&a.grounded&&(this.mode="roof",this.ladder=null,this.sat=0),h}let c=this.world.inBush(n.x,n.z,n.y);if(this.mode==="hide"&&c&&(!o||o.target!==r||l>4))return this.sat+=t,!o&&this.sat>this.patience&&(this.sat=0,this.patience=this.#e(),this.mode="wander",this.path=null,this.think=0),h;if(this.mode!=="roof"&&(this.sat=0),this.mode==="wander"&&this.idle>0)return this.idle-=t,h;if(!this.path||!this.path.length)return h;let[d,u]=this.path[0],p=d-n.x,_=u-n.z,x=Math.hypot(p,_);if(x<.6)return this.path.shift(),!this.path.length&&this.mode==="wander"&&(this.idle=Math.random()*2),h;p/=x,_/=x,h.x=p,h.y=-_;let m=this.mode==="flee"||this.mode==="help"||this.mode==="ladder"||this.mode==="hide"&&o,f=o&&(l<8||o.target===r&&o.sees);return h.run=m&&!a.exhausted&&(f||a.stamina>s.calmRun&&o&&l<12||this.mode==="help"),h.dash=m&&o&&l<4.5&&a.dashReady,a.speed<.6&&!a.mantle?this.stuck+=t:this.stuck=0,this.stuck>.5&&(h.jump=!0,this.stuck=0,this.path=null,this.think=0),h}#i(t,i){let s=this.agent,r=s.ctrl,a=r.pos;if(!(s.prop||this.mode==="roof"||this.mode==="ladder"&&(r.climbing||r.elevated))){if(!t&&s.hero.helper&&this.allies){let n=this.#a();if(n){this.mode="help",this.#s(n.ctrl.pos.x,n.ctrl.pos.z);return}this.mode==="help"&&(this.mode="wander")}if(t){if(this.mode==="hide"&&this.world.inBush(a.x,a.z,a.y)&&t.target!==s||this.mode==="ladder"&&this.ladder)return;if(i>5&&Math.random()<Ae.bots.roofChance){let o=this.#r(t);if(o){this.mode="ladder",this.ladder=o,this.path=null;return}}let n=Math.random()<Ae.bots.hideChance?this.#n(t):null;if(n){this.mode="hide",this.#s(n.x,n.z);return}this.mode="flee",this.#s(...this.#o(t));return}if(this.mode==="flee"&&(this.mode="wander"),this.mode!=="ladder"&&!(this.mode==="hide"&&this.world.inBush(a.x,a.z,a.y))&&(!this.path||!this.path.length)){let n=Math.random();if(n<.1){let u=this.#r(null);if(u){this.mode="ladder",this.ladder=u;return}}let o=this.agent.abilities?.game?.phase==="hide";if(this.mode=n<(o?.75:.4)?"hide":"wander",this.mode==="hide"){let u=this.#n(null);if(u)return this.#s(u.x,u.z)}let[l,h]=this.nav.toCell(a.x+(Math.random()-.5)*26,a.z+(Math.random()-.5)*26),[c,d]=this.nav.nearestFree(l,h);this.#s(...this.nav.center(c,d))}}}#a(){let t=this.agent.ctrl.pos,i=null,s=Ae.bots.helpRange;for(let r of this.allies()){if(r===this.agent||!r.alive||!this.ghosts||!this.ghosts.some(n=>n.active&&!n.disguised&&n.target===r))continue;let a=r.ctrl.pos.distanceTo(t);a<s&&(s=a,i=r)}return i}#s(t,i){let s=this.agent.ctrl.pos;this.path=this.nav.find(s.x,s.z,t,i)||[[t,i]]}#r(t){let i=this.agent.ctrl.pos,s=null,r=12;for(let a of this.world.ladders){let n=Math.hypot(a.x-i.x,a.z-i.z);n>r||t&&Math.hypot(a.x-t.pos.x,a.z-t.pos.z)<n+2||(r=n,s=a)}return s}#o(t){let i=this.agent.ctrl.pos,s=null,r=-1/0;for(let a=0;a<16;a++){let n=a/16*Math.PI*2,o=7+a%2*4,l=i.x+Math.cos(n)*o,h=i.z+Math.sin(n)*o,[c,d]=this.nav.toCell(l,h);if(!this.nav.free(c,d)||!this.nav.clear(i.x,i.z,l,h))continue;let u=Math.hypot(l-i.x,h-i.z),p=Math.hypot(l-t.pos.x,h-t.pos.z),_=p-u,x=this.world.lineOfSight(t.pos.x,t.pos.z,l,h,!1,t.eyeY,1.4)?0:5,m=_*1.2+p*.4+x+Math.random()*1.5;m>r&&(r=m,s=[l,h])}return s||[i.x-(t.pos.x-i.x),i.z-(t.pos.z-i.z)]}#n(t){let i=this.agent.ctrl.pos,s=null,r=-1/0;for(let a of this.world.bushes){let n=Math.hypot(a.x-i.x,a.z-i.z);if(n>20||!t&&n<a.r+1||this.agent.ctrl.radius>a.r*.9)continue;let o=-n;if(t){let l=Math.hypot(a.x-t.pos.x,a.z-t.pos.z);if(l<n+1)continue;o+=l*.8}o>r&&(r=o,s=a)}return s}}});function lx(e,t,i){let s=null,r=i;for(let a of e){if(!a.active)continue;let n=a.pos.distanceTo(t);n<r&&(r=n,s=a)}return s}function hx(e,t,i){let s=null,r=-1/0;for(let a of e.bushes){let n=Math.hypot(a.x-i.x,a.z-i.z),o=40;for(let h of t)h.state!=="hidden"&&(o=Math.min(o,Math.hypot(a.x-h.pos.x,a.z-h.pos.z)));let l=o*1.2-n;l>r&&(r=l,s=a)}return s}var Dd,lh,zn,hh=ut(()=>{Lt();Ii();oh();Dd=()=>Ae.abilities,lh={moti:[{id:"shelter",key:"1",name:"\u0423\u044E\u0442\u043D\u044B\u0439 \u043F\u0440\u0438\u044E\u0442",icon:"\u{1F6E1}\uFE0F",tag:"\u0417\u0430\u0449\u0438\u0442\u0430",anim:"cast",dur:.9,lock:.7},{id:"light",key:"2",name:"\u0422\u0451\u043F\u043B\u044B\u0439 \u0441\u0432\u0435\u0442",icon:"\u2764\uFE0F",tag:"\u041B\u0435\u0447\u0435\u043D\u0438\u0435",anim:"cast",dur:.8,lock:.5},{id:"wisps",key:"3",name:"\u0414\u0443\u0445\u0438-\u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A\u0438",icon:"\u{1F525}",tag:"\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430",anim:"summon",dur:1,lock:.6},{id:"path",key:"4",name:"\u041F\u0443\u0442\u044C \u0444\u043E\u043D\u0430\u0440\u0435\u0439",icon:"\u{1F43E}",tag:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430",anim:"path",dur:.8,lock:.4},{id:"swing",key:"F",name:"\u0423\u0434\u0430\u0440 \u0444\u043E\u043D\u0430\u0440\u0451\u043C",icon:"\u{1F3EE}",tag:"\u0410\u0442\u0430\u043A\u0430",anim:"swing",dur:.55,lock:0},{id:"wave",key:"G",name:"\u041F\u0440\u0438\u0432\u0435\u0442!",icon:"\u{1F44B}",tag:"\u042D\u043C\u043E\u0446\u0438\u044F",anim:"wave",dur:1.6,lock:0}],kid:[{id:"prop",key:"Q",name:"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430",icon:"\u{1F3AD}",tag:"\u041F\u0440\u044F\u0442\u043A\u0438",anim:"poof",dur:.25,lock:0},{id:"wave",key:"G",name:"\u041F\u0440\u0438\u0432\u0435\u0442!",icon:"\u{1F44B}",tag:"\u042D\u043C\u043E\u0446\u0438\u044F",anim:"wave",dur:1.4,lock:0}],masha:[{id:"prop",key:"Q",name:"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430",icon:"\u{1F3AD}",tag:"\u041F\u0440\u044F\u0442\u043A\u0438",anim:"poof",dur:.25,lock:0},{id:"wave",key:"G",name:"\u041F\u0440\u0438\u0432\u0435\u0442!",icon:"\u{1F44B}",tag:"\u042D\u043C\u043E\u0446\u0438\u044F",anim:"wave",dur:1.4,lock:0}],catbus:[{id:"prop",key:"Q",name:"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430",icon:"\u{1F3AD}",tag:"\u041F\u0440\u044F\u0442\u043A\u0438",anim:"poof",dur:.25,lock:0}]},zn=class{constructor(t,i){this.agent=t,this.game=i,this.list=(lh[t.ctrl.hero.id]||[]).map(s=>({...s,cdLeft:0})),t.action=null}get(t){return this.list.find(i=>i.id===t)}ready(t){let i=this.get(t);return!!i&&i.cdLeft<=0}cooldown(t){return Dd()[t.id]?.cd??1}use(t){let i=this.get(t);return!i||i.cdLeft>0||!this.agent.alive||this.agent.action&&this.agent.action.lock>0?!1:(i.cdLeft=this.cooldown(i),this.agent.action={name:i.anim,t:0,dur:i.dur,lock:i.lock,id:i.id,fired:!1},!0)}update(t){for(let r of this.list)r.cdLeft=Math.max(0,r.cdLeft-t);let i=this.agent.action;if(this.agent.ctrl.moveMul=1,!i)return;i.t+=t,i.lock=Math.max(0,i.lock-t),i.lock>0&&(this.agent.ctrl.moveMul=.15);let s=i.name==="swing"?.3:i.name==="wave"?99:i.name==="poof"?0:.45;!i.fired&&i.t/i.dur>=s&&(i.fired=!0,this.#e(i.id)),i.t>=i.dur&&(this.agent.action=null)}pose(){let t=this.agent.action;return t?{name:t.name,k:t.t/t.dur}:null}#e(t){let i=this.game,s=this.agent,r=s.ctrl,a=Dd()[t],n=r.pos,o=i.sound;if(t==="prop")i.toggleProp?.(s);else if(t==="shelter"){let l=Rd(i.scene,n.x,n.z,a.radius,a.time);i.addFx(l),i.domes.push(l),setTimeout(()=>{i.domes=i.domes.filter(h=>h!==l)},a.time*1e3),o.chime?.([523,784,1046])}else if(t==="light"){i.addFx(Fn(i.scene,n.x,n.z,a.radius));for(let l of i.agents)!l.alive||l.ctrl.pos.distanceTo(n)>a.radius||(l.ctrl.stamina=1,l.ctrl.exhausted=!1,l.ctrl.boostT=a.boostTime,l.ctrl.boostMul=a.boost);o.chime?.([659,880,1318])}else if(t==="wisps"){let l=new I(n.x,n.y+2,n.z);for(let h=0;h<a.count;h++){let c=null;i.addFx(Pd(i.scene,l,()=>((!c||!c.active)&&(c=lx(i.ghosts,n,30)),c?c.pos:null),()=>{c.slow(a.slow),c.stun(a.stun),i.sound.land?.(6)},7))}o.chime?.([440,660,880])}else if(t==="path"){let l=hx(i.world,i.ghosts,n);if(l){let h=i.navFor(r.radius).find(n.x,n.z,l.x,l.z);h&&i.addFx(Id(i.scene,[[n.x,n.z],...h],a.time))}for(let h of i.ghosts)h.state!=="hidden"&&i.addFx(Ld(i.scene,()=>h.pos,a.time));o.chime?.([392,523,659,784])}else if(t==="swing"){i.addFx(Nd(i.scene,n.x,n.y,n.z,r.yaw));let l=Math.sin(r.yaw),h=Math.cos(r.yaw);for(let c of i.ghosts){if(!c.active)continue;let d=c.pos.x-n.x,u=c.pos.z-n.z,p=Math.hypot(d,u);p>a.range+c.radius||(d*l+u*h)/(p||1)<-.2||(c.stun(a.stun),c.knock(d/(p||1),u/(p||1),a.knock),i.cam.shake=Math.max(i.cam.shake,.4))}o.land?.(12)}}botThink(t,i){let s=this.agent.ctrl,r=this.game,a=s.pos;if(this.get("prop")){let n=this.agent;if(n.prop&&t&&i<Ae.bots.jukeRange+.8){r.toggleProp?.(n);return}if(!n.prop&&!t&&r.phase==="hide"&&this.ready("prop")&&!s.elevated&&Math.random()<.006)return this.use("prop");if(n.prop)return}for(let n of r.agents){if(n===this.agent||!n.alive)continue;let o=r.ghosts.find(h=>h.active&&h.target===n),l=n.ctrl.pos.distanceTo(a);if(o&&o.pos.distanceTo(a)<16&&this.ready("wisps"))return this.use("wisps");if(o&&l<Ae.abilities.shelter.radius&&o.pos.distanceTo(n.ctrl.pos)<8&&this.ready("shelter"))return this.use("shelter");if(n.ctrl.exhausted&&l<Ae.abilities.light.radius&&this.ready("light"))return this.use("light")}if(t&&i<2.8&&this.ready("swing"))return this.use("swing");if(t&&i<7&&this.ready("shelter"))return this.use("shelter");if(t&&i<16&&this.ready("wisps"))return this.use("wisps");if(s.stamina<.25&&this.ready("light"))return this.use("light");if(t&&i<12&&this.ready("path")&&Math.random()<.02)return this.use("path");if(!t&&this.ready("wave")&&Math.random()<.002)return this.use("wave")}}});var Od,Sa,kn,Bd=ut(()=>{Lt();Ii();ah();Ud();hh();Dr();Od=[[-5,19],[5.5,17],[-9,23],[9,21],[-3,14],[3,25]],Sa=[[0,-21],[-7,-20],[7,-20],[0,-14]],kn=class{constructor(t){Object.assign(this,t),this.agents=[],this.domes=[],this.fx=[],this.events=[],this.phase="none",this.activeGhosts=[],this.netIn=new Map}addFx(t){this.fx.push(t)}emit(t,i={}){this.events.push({type:t,...i})}makeAgent(t,i,s,r,a=null,n=null){let o=new Br(t,this.world);o.spawn(s,i||a?Math.PI:Math.random()*Math.PI*2);let l={hero:t,name:n||t.name,ctrl:o,char:this.makeChar(t,r),isPlayer:i,remote:a,alive:!0,hidden:!1,protected:!1,prop:null,skin:r};return l.key=this.keySeq=(this.keySeq||0)+1,l.abilities=new zn(l,this),!i&&!a&&(l.brain=new xa(l,this.world,this.navFor(t.radius)),l.brain.allies=()=>this.agents),this.agents.push(l),l}start(t){this.opts=t,this.mode=t.mode,this.agents=[],this.domes=[],this.caughtOrder=[],this.stats={found:0,chaseCatches:0,pumpkins:0,playerFoundAt:null,playerCaughtInChase:!1},this.player=null,this.playerGhost=null;let i=Od.slice().sort(()=>Math.random()-.5),s=h=>new I(h[0],0,h[1]),r=t.remotes||[],a=r.filter(h=>h.hero.id==="noface");if(t.mode==="play"||t.mode==="hunter"&&r.length){t.mode==="play"&&(this.player=this.makeAgent(t.hero,!0,new I(0,0,22),t.skin)),r.filter(c=>c.hero.id!=="noface").forEach((c,d)=>this.makeAgent(c.hero,!1,new I(-3+d*2,0,23),c.skin,c.id,c.name));let h=new Set([t.hero.id,...r.map(c=>c.hero.id)]);if(t.withBots)for(let c of this.heroes)!h.has(c.id)&&c.bot!==!1&&this.makeAgent(c,!1,s(i.pop()),"classic")}else for(let h of this.heroes)h.bot!==!1&&this.makeAgent(h,!1,s(i.pop()),h.id==="moti"&&t.mSkin||"classic");for(let h of this.ghosts)h.isPlayer=!1,h.remote=null,h.reset(s(Sa[0]));let n=(t.mode==="hunter"?1:0)+a.length,o=Math.min(this.ghosts.length,Math.max(1,Math.min(3,t.ghosts),n));this.activeGhosts=this.ghosts.slice(0,o),this.activeGhosts.forEach((h,c)=>h.reset(s(Sa[c])));let l=0;t.mode==="hunter"&&(this.playerGhost=this.activeGhosts[l++],this.playerGhost.isPlayer=!0);for(let h of a){let c=this.activeGhosts[l++];c.remote=h.id,c.remoteName=h.name}this.netIn.clear(),this.setPhase("hide")}setPhase(t){this.phase=t,this.t=0,this.spawned=0,this.duration=t==="hide"?Ae.round.hide:Ae.round.chase}get left(){return Math.max(0,this.duration-this.t)}toggleProp(t){if(t.prop){this.emit("poof",{x:t.ctrl.pos.x,y:t.ctrl.pos.y,z:t.ctrl.pos.z}),t.prop.obj&&this.scene.remove(t.prop.obj),t.prop=null,t.char&&(t.char.root.visible=!0);return}if(t.ctrl.elevated||!t.alive)return;let i=Ts[Math.random()*Ts.length|0],s=this.makeProp(i.id);s&&(s.position.copy(t.ctrl.pos),s.rotation.y=Math.random()*6,this.scene.add(s)),t.prop={kind:i,obj:s},t.char&&(t.char.root.visible=!1),this.emit("poof",{x:t.ctrl.pos.x,y:t.ctrl.pos.y,z:t.ctrl.pos.z,kind:i.name,agent:t})}step(t,i,s=null,r=0){this.t+=t;let a=Ae,n=this.phase==="hide"?a.round.headStart:.3;this.activeGhosts.forEach((c,d)=>{c.state==="hidden"&&this.t>=n+d*(this.phase==="hide"?a.ghost.spawnGap:.4)&&(c.spawn(),this.spawned++,this.emit("ghostSpawn",{i:d,ghost:c}))});let o=this.activeGhosts.filter(c=>c.active);for(let c of this.agents){if(!c.alive)continue;c.abilities.update(t);let d;if(c.isPlayer)d=s||{};else if(c.remote)d=this.#i(c.remote);else{d=c.brain.update(t,o);let p=c.brain.threat;c.abilities.botThink(p,p?p.pos.distanceTo(c.ctrl.pos):1/0)}c.prop&&(d.dash?this.toggleProp(c):(d={...d,run:!1,jump:!1},c.ctrl.moveMul*=a.abilities.prop.walk)),c.ctrl.update(t,d,c.isPlayer?r:c.remote&&d.camYaw||0),c.prop?.obj&&c.prop.obj.position.copy(c.ctrl.pos);let u=c.ctrl.pos;c.hidden=this.world.inBush(u.x,u.z,u.y)&&!c.ctrl.running||!!c.prop&&c.ctrl.speed<.6,c.protected=this.domes.some(p=>Math.hypot(u.x-p.x,u.z-p.z)<p.r),c.protected&&(c.ctrl.stamina=Math.min(1,c.ctrl.stamina+t*.25))}Td(this.agents);let l=Math.min(1,this.t/this.duration);for(let c of this.activeGhosts){c.speedMul=this.phase==="chase"&&!c.isPlayer&&!c.remote?a.round.chaseBotSpeed:1;let d=c.isPlayer?s||{}:c.remote?this.#i(c.remote):null;c.update(t,i,this.agents,l,{domes:this.domes},d,c.isPlayer?r:d?.camYaw||0),c.poof&&(c.poof=!1,this.emit("poof",{x:c.pos.x,y:c.pos.y,z:c.pos.z,ghost:c}))}for(let c of this.activeGhosts)for(let d of this.agents)c.catches(d)&&this.#e(d,c);let h=this.agents.filter(c=>c.alive).length;(this.t>=this.duration||h===0)&&(this.phase==="hide"?this.#t():this.phase==="chase"&&(this.phase="over",this.emit("end",{result:this.result()})))}#e(t,i){t.alive=!1,t.prop&&this.toggleProp(t),t.char&&(t.char.root.visible=!1),i.reveal(),i.stun(Ae.ghost.grab),this.caughtOrder.push({agent:t,phase:this.phase,t:this.t}),this.phase==="hide"?(this.stats.found++,t.isPlayer&&(this.stats.playerFoundAt=this.t)):(this.stats.chaseCatches++,t.isPlayer&&(this.stats.playerCaughtInChase=!0)),this.emit("caught",{agent:t,ghost:i,byPlayer:i.isPlayer,byRemote:i.remote,phase:this.phase})}#t(){let t=this.caughtOrder.find(d=>d.phase==="hide")?.agent,i=this.agents.filter(d=>d.alive).map(d=>d.name);this.hideSurvivors=i;let s=d=>new I(d[0],0,d[1]),r=this.playerGhost?this.playerGhost.pos.clone():null,a=this.activeGhosts.filter(d=>d.remote).map(d=>[d.remote,d.remoteName]);for(let d of this.ghosts)d.reveal(),d.reset(s(Sa[0])),d.isPlayer=!1,d.remote=null;let n=Math.min(this.ghosts.length,Ae.round.chaseGhosts);this.activeGhosts=this.ghosts.slice(0,n);let o=null,l=null;if(this.mode==="hunter")this.playerGhost=this.activeGhosts[0],this.playerGhost.isPlayer=!0,l="\u0442\u044B";else{let d=t||this.agents[Math.random()*this.agents.length|0];o=d,l=d.name,this.agents=this.agents.filter(u=>u!==d),d.prop&&this.toggleProp(d),d.char&&(d.char.root.visible=!1),this.activeGhosts[0].reset(d.ctrl.pos.clone()),d.remote&&(this.activeGhosts[0].remote=d.remote,this.activeGhosts[0].remoteName=d.name),d.isPlayer&&(this.player=null,this.playerGhost=this.activeGhosts[0],this.playerGhost.isPlayer=!0)}this.activeGhosts.forEach((d,u)=>{u>0&&d.reset(s(Sa[u%Sa.length]))}),this.mode==="hunter"&&this.playerGhost.reset(r);let h=1;for(let[d,u]of a){for(;h<this.activeGhosts.length&&this.activeGhosts[h].remote;)h++;let p=this.activeGhosts[h++];p&&(p.remote=d,p.remoteName=u)}let c=Od.slice();for(let d of this.agents)d.prop&&this.toggleProp(d),d.alive||(d.alive=!0,d.ctrl.spawn(s(c.pop()||[0,22]),Math.PI),d.char&&(d.char.root.visible=!0)),d.ctrl.stamina=1;this.setPhase("chase"),this.emit("phase",{phase:"chase",newGhostName:l,newGhostIsPlayer:!!this.playerGhost&&this.mode!=="hunter",agent:o}),this.agents.length||(this.phase="over",this.emit("end",{result:this.result()}))}convertToBot(t){t.remote=null,t.brain=new xa(t,this.world,this.navFor(t.hero.radius)),t.brain.allies=()=>this.agents}#i(t){let i=this.netIn.get(t);if(!i)return{};let s={...i};return i.jump=!1,i.dash=!1,s}result(){let t=Ae.round.reward,i=this.agents.filter(r=>r.alive).map(r=>r.name),s=this.stats.pumpkins;return this.mode==="hunter"?s+=this.stats.found*t.found+this.stats.chaseCatches*t.catch:this.mode==="play"&&(this.stats.playerFoundAt===null&&(s+=t.survive),this.playerGhost?s+=this.caughtOrder.filter(r=>r.phase==="chase").length*t.catch:!this.stats.playerCaughtInChase&&this.player&&(s+=t.survive)),{mode:this.mode,alive:i,hideSurvivors:this.hideSurvivors||[],caught:this.caughtOrder.map(r=>r.agent.name),found:this.stats.found,chaseCatches:this.stats.chaseCatches,playerFoundAt:this.stats.playerFoundAt,playerWasGhost:!!this.playerGhost,playerCaughtInChase:this.stats.playerCaughtInChase,earn:s}}}});var Hn,Fd=ut(()=>{Hn=class{constructor(){this.ctx=null,this.muted=!1}unlock(){if(this.ctx){this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.55,this.master.connect(this.ctx.destination),this.#e())}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.55)}#e(){let t=this.ctx;this.amb=t.createGain(),this.amb.gain.value=.05,this.amb.connect(this.master);for(let a of[110,164.8,220,277.2]){let n=t.createOscillator();n.type="sine",n.frequency.value=a;let o=t.createGain();o.gain.value=.25;let l=t.createOscillator();l.frequency.value=.07+Math.random()*.1;let h=t.createGain();h.gain.value=.2,l.connect(h).connect(o.gain),n.connect(o).connect(this.amb),n.start(),l.start()}let i=()=>{this.ctx&&(this.muted||this.#i(),setTimeout(i,350+Math.random()*1400))};i(),this.tension=t.createGain(),this.tension.gain.value=0,this.tension.connect(this.master);let s=t.createOscillator();s.type="sawtooth",s.frequency.value=55;let r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=220,s.connect(r).connect(this.tension),s.start()}#t(t){let i=this.ctx,s=i.createBuffer(1,Math.max(1,i.sampleRate*t),i.sampleRate),r=s.getChannelData(0);for(let n=0;n<r.length;n++)r[n]=Math.random()*2-1;let a=i.createBufferSource();return a.buffer=s,a}#i(){let t=this.ctx,i=t.currentTime;for(let s=0;s<3;s++){let r=t.createOscillator();r.frequency.value=4200+Math.random()*400;let a=t.createGain();a.gain.setValueAtTime(0,i+s*.06),a.gain.linearRampToValueAtTime(.012,i+s*.06+.01),a.gain.linearRampToValueAtTime(0,i+s*.06+.04),r.connect(a).connect(this.master),r.start(i+s*.06),r.stop(i+s*.06+.05)}}jump(){if(!this.ctx)return;let t=this.ctx,i=t.currentTime,s=t.createOscillator();s.type="triangle",s.frequency.setValueAtTime(320,i),s.frequency.exponentialRampToValueAtTime(640,i+.12);let r=t.createGain();r.gain.setValueAtTime(.12,i),r.gain.exponentialRampToValueAtTime(.001,i+.18),s.connect(r).connect(this.master),s.start(i),s.stop(i+.2)}land(t){if(!this.ctx)return;let i=this.ctx,s=i.currentTime,r=this.#t(.12),a=i.createBiquadFilter();a.type="lowpass",a.frequency.value=500;let n=i.createGain();n.gain.setValueAtTime(Math.min(.25,.05+t*.01),s),n.gain.exponentialRampToValueAtTime(.001,s+.12),r.connect(a).connect(n).connect(this.master),r.start(s)}step(){if(!this.ctx)return;let t=this.ctx,i=t.currentTime,s=this.#t(.05),r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=900+Math.random()*300;let a=t.createGain();a.gain.setValueAtTime(.03,i),a.gain.exponentialRampToValueAtTime(.001,i+.05),s.connect(r).connect(a).connect(this.master),s.start(i)}ghostAppear(){if(!this.ctx)return;let t=this.ctx,i=t.currentTime,s=this.#t(2.4),r=t.createBiquadFilter();r.type="bandpass",r.Q.value=3,r.frequency.setValueAtTime(200,i),r.frequency.exponentialRampToValueAtTime(700,i+1.2),r.frequency.exponentialRampToValueAtTime(150,i+2.3);let a=t.createGain();a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(.35,i+.8),a.gain.linearRampToValueAtTime(0,i+2.4),s.connect(r).connect(a).connect(this.master),s.start(i);for(let[n,o]of[[880,0],[1318,.35],[1046,.7]]){let l=t.createOscillator();l.type="sine",l.frequency.value=n;let h=t.createGain();h.gain.setValueAtTime(0,i+o),h.gain.linearRampToValueAtTime(.08,i+o+.02),h.gain.exponentialRampToValueAtTime(.001,i+o+1.6),l.connect(h).connect(this.master),l.start(i+o),l.stop(i+o+1.7)}}setTension(t){if(!this.ctx)return;this.tension.gain.setTargetAtTime(t*.07,this.ctx.currentTime,.3),this.amb.gain.setTargetAtTime(.05*(1-t*.6),this.ctx.currentTime,.5);let i=this.ctx.currentTime;t>.25&&(!this.nextBeat||i>this.nextBeat)&&(this.#a(t),this.nextBeat=i+1.1-t*.65)}#a(t){let i=this.ctx,s=i.currentTime;for(let r of[0,.16]){let a=i.createOscillator();a.type="sine",a.frequency.setValueAtTime(70,s+r),a.frequency.exponentialRampToValueAtTime(40,s+r+.12);let n=i.createGain();n.gain.setValueAtTime(.28*t,s+r),n.gain.exponentialRampToValueAtTime(.001,s+r+.15),a.connect(n).connect(this.master),a.start(s+r),a.stop(s+r+.16)}}chime(t){this.#s(t,.08,"sine")}win(){this.#s([523,659,784,1046],.12,"triangle")}lose(){this.#s([392,330,262,196],.18,"sine")}#s(t,i,s){if(!this.ctx)return;let r=this.ctx,a=r.currentTime;t.forEach((n,o)=>{let l=r.createOscillator();l.type=s,l.frequency.value=n;let h=r.createGain();h.gain.setValueAtTime(1e-4,a+o*i),h.gain.linearRampToValueAtTime(.14,a+o*i+.02),h.gain.exponentialRampToValueAtTime(.001,a+o*i+.5),l.connect(h).connect(this.master),l.start(a+o*i),l.stop(a+o*i+.55)})}}});var Ye,zd,Gn,kd=ut(()=>{Ye=e=>document.getElementById(e),zd={kid:"\u{1F431}",masha:"\u{1F9B6}",catbus:"\u{1F408}",moti:"\u{1F6E1}\uFE0F",noface:"\u{1F3AD}"},Gn=class{constructor(){this.lastStatus="",this.hintTimer=null}on(t,i){Ye(t).addEventListener("click",s=>{s.stopPropagation(),i()})}progress(t,i){document.querySelector(".load-bar i").style.width=Math.round(t*100)+"%",i&&(document.querySelector(".load-text").textContent=i)}hideLoading(){Ye("loading").classList.remove("show")}show(t,i){Ye(t).classList.toggle("show",i)}mode(t,i,s="play"){if(this.show("select",t==="select"),this.show("maps",t==="maps"),this.show("lobby",t==="lobby"),document.getElementById("watch-bar").classList.toggle("hidden",!(t==="play"&&s==="watch")),document.getElementById("abil-bar").classList.toggle("hidden",!(t==="play"&&s==="play")),document.querySelector(".hud-left .stamina").classList.toggle("hidden",s==="watch"),this.show("result",t==="result"),this.show("paused",!1),Ye("ghost-view").classList.add("hidden"),Ye("hud").classList.toggle("hidden",t!=="play"),Ye("touch").classList.toggle("hidden",!(t==="play"&&s!=="watch")),Ye("touch").classList.toggle("desktop",!i),document.querySelector(".stick-zone").classList.toggle("fixed",!i),Ye("alive").classList.toggle("hidden",t!=="play"),t==="play"){let r=Ye("hint");r.style.opacity=1,clearTimeout(this.hintTimer),this.hintTimer=setTimeout(()=>r.style.opacity=0,9e3)}}buildCards(t,i,s,r){let a=Ye("cards");a.innerHTML="",this.cards=new Map;for(let l of t){let h=document.createElement("button");h.className="card",h.style.backgroundImage=`url(${s[l.id]})`,h.innerHTML=`<div class="c-body"><div class="c-name">${l.name}</div><span class="pill ${l.rarityClass}">${l.rarity}</span><br><span class="c-tag">${zd[l.id]||"\u2726"} ${l.tags[0]}</span></div>`,h.addEventListener("click",()=>r(l.id)),a.appendChild(h),this.cards.set(l.id,h)}let n=document.createElement("button");n.className="card",n.style.backgroundImage=`url(${s[i.id]})`,n.innerHTML=`<span class="c-lock">\u0412\u041E\u0414\u042F\u0429\u0418\u0419</span><div class="c-body"><div class="c-name">${i.name}</div><span class="pill ${i.rarityClass}">${i.rarity}</span><br><span class="c-tag">\u{1F3AD} ${i.tags[0]}</span></div>`,n.addEventListener("click",()=>r(i.id)),a.appendChild(n),this.cards.set(i.id,n);let o=document.createElement("div");o.className="card soon",o.innerHTML='<div class="q">?</div><div class="c-body" style="text-align:center"><div class="c-name">???</div><span class="pill common">\u0421\u041A\u041E\u0420\u041E</span></div>',a.appendChild(o)}onOptions(t,i){this.optCb=t;let s=(r,a,n)=>{let o=Ye(r),l=h=>o.querySelectorAll("button").forEach(c=>c.classList.toggle("on",c.dataset.v===String(h)));l(a),o.querySelectorAll("button").forEach(h=>h.addEventListener("click",()=>{l(h.dataset.v),n(h.dataset.v)}))};s("opt-ghosts",i.ghosts,r=>t.ghosts(+r)),s("opt-bots",i.bots?1:0,r=>t.bots(r==="1"))}onAbility(t){this.abilityFn=t}abilityBar(t){let i=Ye("abil-bar");i.innerHTML=t.map(s=>`<button class="ab" data-id="${s.id}" title="${s.name}"><i>${s.icon}</i><em>${s.key}</em><s></s><b class="ab-n"></b><small>${s.name}</small></button>`).join(""),i.querySelectorAll(".ab").forEach(s=>{s.addEventListener("mousedown",r=>r.stopPropagation()),s.addEventListener("click",r=>{r.stopPropagation(),this.abilityFn?.(s.dataset.id)})}),this.abEls=[...i.querySelectorAll(".ab")]}cooldowns(t){if(this.abEls)for(let i of this.abEls){let{k:s=0,n:r=""}=t(i.dataset.id)||{};i.querySelector("s").style.height=(s*100).toFixed(0)+"%",i.classList.toggle("ready",s<=0);let a=i.querySelector(".ab-n");a.textContent!==String(r)&&(a.textContent=r)}}alive(t,i,s="\u0413\u0435\u0440\u043E\u0435\u0432"){Ye("alive").textContent=`${s}: ${t}/${i}`}wallet(t){Ye("wallet").textContent=t}pumpkins(t){Ye("pumpkins").textContent=t}phase(t){let i=Ye("phase");i.textContent=t==="chase"?"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438!":"\u041F\u0440\u044F\u0442\u043A\u0438",i.classList.toggle("chase",t==="chase")}mmLabel(t){let i=Ye("mm-label");i.innerHTML=t,i.style.opacity=t?1:0}buildMaps(t,i){let s=Ye("map-cards");s.innerHTML=t.map(r=>`<button class="map-card ${r.ready?"":"soon"}" data-id="${r.id}"><div class="m-title">${r.icon} ${r.name}</div><div class="m-pic" style="background-image:url(${r.pic})"></div><span class="m-diff ${r.hard?"hard":""}">${r.hard?"\u0421\u043B\u043E\u0436\u043D\u044B\u0439":"\u041E\u0431\u044B\u0447\u043D\u044B\u0439"}</span></button>`).join(""),s.querySelectorAll(".map-card").forEach(r=>r.addEventListener("click",()=>i(r.dataset.id)))}pickMap(t){document.querySelectorAll(".map-card").forEach(i=>i.classList.toggle("active",i.dataset.id===t))}minimapInit(t,i){let s=Ye("minimap"),r=s.getContext("2d");this.mm={c:s,x:r,half:i,bg:document.createElement("canvas")};let a=this.mm.bg;a.width=a.height=300;let n=a.getContext("2d"),o=300/(i*2),l=h=>(h+i)*o;n.fillStyle="#6b5436",n.fillRect(0,0,300,300),n.fillStyle="#8a6d45",n.fillRect(l(-1.7),0,3.4*o,300),n.fillRect(0,l(-1.6),300,3.2*o),n.fillStyle="#3f6a3a";for(let h of t.bushes)n.beginPath(),n.arc(l(h.x),l(h.z),h.r*o,0,7),n.fill();n.fillStyle="#2b1a10";for(let h of t.boxes)h.top>1.2&&h.bottom<1&&n.fillRect(l(h.minX),l(h.minZ),(h.maxX-h.minX)*o,(h.maxZ-h.minZ)*o);n.fillStyle="#243a22";for(let h of t.circles)h.top>3&&(n.beginPath(),n.arc(l(h.x),l(h.z),Math.max(1.5,h.r*o),0,7),n.fill())}minimap(t,i,s){if(!this.mm)return;let{c:r,x:a,half:n,bg:o}=this.mm,l=300/(n*2),h=2.3;a.save(),a.clearRect(0,0,300,300),a.beginPath(),a.arc(150,150,150,0,7),a.clip(),a.translate(150,150),a.rotate(i),a.scale(h,h),a.translate(-(t.x+n)*l,-(t.z+n)*l),a.drawImage(o,0,0);for(let c of s){let d=(c.x+n)*l,u=(c.z+n)*l;if(c.kind==="pumpkin"){a.fillStyle="#ffa23a",a.beginPath(),a.arc(d,u,2.2,0,7),a.fill();continue}a.fillStyle=c.kind==="me"?"#ff8a3a":c.kind==="ghost"?"#b07aff":"#ffffff",a.strokeStyle="#2a170b",a.lineWidth=1,a.beginPath(),a.arc(d,u,c.kind==="me"?4.5:3.2,0,7),a.fill(),a.stroke()}a.restore()}toast(t){let i=Ye("toast");i.textContent=t,i.classList.remove("on"),i.offsetWidth,i.classList.add("on")}buildCreator(t,i,s){let r=Ye("creator"),a=(n,o,l,h)=>`<div class="cr-row"><span>${o}</span><div class="cr-opts" data-k="${n}">${l.map(([c,d])=>h?`<button data-v="${c}" class="sw ${t[n]===c?"on":""}" style="--c:${c}"></button>`:`<button data-v="${c}" class="${t[n]===c?"on":""}">${d}</button>`).join("")}</div></div>`;r.innerHTML=a("gender","\u041A\u0442\u043E",i.gender)+a("hairStyle","\u041F\u0440\u0438\u0447\u0451\u0441\u043A\u0430",i.hairStyle[t.gender])+a("hair","\u0412\u043E\u043B\u043E\u0441\u044B",i.hair.map(n=>[n,n]),!0)+a("sweater","\u0421\u0432\u0438\u0442\u0435\u0440",i.sweater.map(n=>[n,n]),!0)+a("emblem","\u0417\u043D\u0430\u0447\u043E\u043A",i.emblem)+a("ears","\u0423\u0448\u043A\u0438 \u043A\u043E\u0442\u0438\u043A\u0430",i.ears)+a("tail","\u0425\u0432\u043E\u0441\u0442\u0438\u043A",i.tail),r.querySelectorAll(".cr-opts button").forEach(n=>n.addEventListener("click",()=>s(n.parentElement.dataset.k,n.dataset.v)))}showHero(t,i){Ye("creator").classList.toggle("hidden",!t.custom),document.querySelector(".sel-info").classList.toggle("custom",!!t.custom);let s=Ye("skins");s.classList.toggle("hidden",!t.skins),t.skins&&(s.innerHTML=Object.entries(t.skins).map(([a,n])=>`<button data-s="${a}" class="${a===i?"on":""}" style="--c:#${n.hat.toString(16).padStart(6,"0")}">${n.name}</button>`).join(""),s.querySelectorAll("button").forEach(a=>a.addEventListener("click",()=>this.optCb?.skin(a.dataset.s)))),Ye("hero-name").innerHTML=`${t.name} <span class="paw">\u{1F43E}</span>`;let r=Ye("hero-rarity");r.textContent=t.rarity,r.className="pill "+t.rarityClass,Ye("hero-about").textContent=t.about,Ye("hero-ab").textContent=t.ability,Ye("hero-ab-text").textContent=t.abilityText,Ye("hero-ab-icon").textContent=zd[t.id]||"\u2726",Ye("hero-tags").innerHTML=t.tags.map(a=>`<span class="tag">${a}</span>`).join(""),this.cards?.forEach((a,n)=>a.classList.toggle("active",n===t.id))}status(t,i){let s=t+i;if(s===this.lastStatus)return;this.lastStatus=s;let r=Ye("status");r.textContent=t,r.className="status "+(i||"")}hud({left:t,stamina:i,tired:s,hidden:r}){let a=Math.ceil(t),n=`${String(Math.floor(a/60)).padStart(2,"0")}:${String(a%60).padStart(2,"0")}`,o=Ye("timer");o.textContent!==n&&(o.textContent=n,o.parentElement.classList.toggle("warn",a<=10));let l=Ye("stamina");l.style.width=(i*100).toFixed(1)+"%",l.classList.toggle("tired",!!s),Ye("hidden-badge").classList.toggle("on",!!r)}vignette(t){Ye("vignette").style.opacity=t.toFixed(2)}setShield(t){let i=Ye("shield");i.classList.toggle("hidden",t===null),i.classList.toggle("used",t===0)}setMute(t){Ye("btn-mute").textContent=t?"\u{1F507}":"\u{1F50A}"}result(t){let i=Ye("res-earn");i.textContent=t.earn?`+${t.earn} \u{1F383} \u0442\u044B\u043A\u043E\u0432\u043E\u043A`:"";let s=a=>a.join(", ");if(t.mode==="watch"){Ye("res-emoji").textContent=t.alive.length?"\u{1F3EE}":"\u{1F47A}",Ye("res-title").textContent=t.alive.length?"\u0420\u0430\u0441\u0441\u0432\u0435\u0442!":"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u043F\u043E\u0439\u043C\u0430\u043B\u0438 \u0432\u0441\u0435\u0445",Ye("res-text").textContent=`\u041F\u043E\u0441\u043B\u0435 \u043F\u0440\u044F\u0442\u043E\u043A \u043E\u0441\u0442\u0430\u043B\u0438\u0441\u044C: ${s(t.hideSurvivors)||"\u043D\u0438\u043A\u0442\u043E"}. \u041F\u043E\u0441\u043B\u0435 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043E\u043A: ${s(t.alive)||"\u043D\u0438\u043A\u0442\u043E"}.`;return}if(t.mode==="hunter"||t.playerWasGhost){let a=t.found+t.chaseCatches;Ye("res-emoji").textContent=a?"\u{1F3AD}":"\u{1F319}",Ye("res-title").textContent=t.mode==="hunter"?t.alive.length?"\u041A\u0442\u043E-\u0442\u043E \u0443\u0441\u043A\u043E\u043B\u044C\u0437\u043D\u0443\u043B!":"\u0422\u044B \u043D\u0430\u0448\u0451\u043B \u0432\u0441\u0435\u0445!":t.alive.length?"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438 \u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C":"\u0422\u044B \u0434\u043E\u0433\u043D\u0430\u043B \u0432\u0441\u0435\u0445!",Ye("res-text").textContent=t.mode==="hunter"?`\u0412 \u043F\u0440\u044F\u0442\u043A\u0430\u0445 \u043D\u0430\u0448\u0451\u043B: ${t.found}. \u0412 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0430\u0445 \u043F\u043E\u0439\u043C\u0430\u043B: ${t.chaseCatches}.${t.alive.length?` \u0421\u043F\u0430\u0441\u043B\u0438\u0441\u044C: ${s(t.alive)}.`:""}`:`\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438 \u043F\u0435\u0440\u0432\u044B\u043C \u2014 \u0438 \u0442\u044B \u0441\u0442\u0430\u043B \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u043C! \u0412 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0430\u0445 \u043F\u043E\u0439\u043C\u0430\u043D\u043E: ${t.chaseCatches}.`;return}let r=!t.playerCaughtInChase;Ye("res-emoji").textContent=r?"\u{1F3EE}":"\u{1F47A}",Ye("res-title").textContent=r?"\u0422\u044B \u043F\u0440\u043E\u0434\u0435\u0440\u0436\u0430\u043B\u0441\u044F!":"\u0422\u0435\u0431\u044F \u0434\u043E\u0433\u043D\u0430\u043B\u0438",Ye("res-text").textContent=(t.playerFoundAt===null?"\u0412 \u043F\u0440\u044F\u0442\u043A\u0430\u0445 \u0442\u0435\u0431\u044F \u0442\u0430\u043A \u0438 \u043D\u0435 \u043D\u0430\u0448\u043B\u0438! ":"\u0412 \u043F\u0440\u044F\u0442\u043A\u0430\u0445 \u0442\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438. ")+(r?"\u0418 \u0432 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0430\u0445 \u0442\u044B \u0443\u0431\u0435\u0436\u0430\u043B \u043E\u0442 \u0432\u0441\u0435\u0445 \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u0432.":"\u041F\u0440\u044F\u0447\u044C\u0441\u044F \u0432 \u0434\u043E\u043C\u0430\u0445, \u0437\u0430 \u0448\u0438\u0440\u043C\u0430\u043C\u0438 \u0438 \u043D\u0430 \u043A\u0440\u044B\u0448\u0430\u0445, \u043F\u0440\u0438\u0441\u0435\u0434\u0430\u0439 \u0437\u0430 \u044F\u0449\u0438\u043A\u0430\u043C\u0438.")}}});function jd(){try{let e=JSON.parse(localStorage.getItem(Vd)||"null");if(!e)return;for(let t of Object.keys(Ae.heroes))e.heroes?.[t]&&Ws(Ae.heroes[t],e.heroes[t]);e.ghost&&Ws(Ae.ghost,e.ghost),e.world&&Ws(Ae.world,e.world)}catch{}}function Ws(e,t){for(let i of Object.keys(t))typeof t[i]=="object"&&t[i]&&typeof e[i]=="object"?Ws(e[i],t[i]):typeof t[i]==typeof e[i]&&(e[i]=t[i])}function Hd(){try{localStorage.setItem(Vd,JSON.stringify({heroes:Ae.heroes,ghost:Ae.ghost,world:Ae.world}))}catch{}}var Vd,Wd,cx,ux,dx,ch,px,Vn,Gd,Xd=ut(()=>{Ii();Vd="masha-game-physics-v2",Wd=[["walk","\u0428\u0430\u0433, \u043C/\u0441",2,10,.1],["run","\u0411\u0435\u0433, \u043C/\u0441",4,16,.1],["accel","\u0420\u0430\u0437\u0433\u043E\u043D",5,120,1],["decel","\u0422\u043E\u0440\u043C\u043E\u0436\u0435\u043D\u0438\u0435",5,120,1],["air","\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u0432\u043E\u0437\u0434\u0443\u0445\u0435",0,40,1],["jump","\u041F\u0440\u044B\u0436\u043E\u043A, \u043C",.5,4,.05],["gravity","\u0422\u044F\u0436\u0435\u0441\u0442\u044C \xD7",.4,2.5,.05],["turn","\u041F\u043E\u0432\u043E\u0440\u043E\u0442",2,30,.5],["stamina","\u0411\u0435\u0433 \u0431\u0435\u0437 \u043E\u0442\u0434\u044B\u0445\u0430, \u0441",1,15,.5],["regen","\u041E\u0442\u0434\u044B\u0445 (\u0434\u043E\u043B\u044F/\u0441)",.05,.6,.01],["mass","\u0412\u0435\u0441 \u043F\u0440\u0438 \u0442\u043E\u043B\u043A\u0430\u043D\u0438\u0438",.3,6,.1],["reach","\u0414\u043E\u0442\u044F\u0433\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0434\u043E \u0443\u0441\u0442\u0443\u043F\u0430, \u043C",0,2.5,.05],["climb","\u041B\u0435\u0437\u0435\u0442 \u043F\u043E \u043B\u0435\u0441\u0442\u043D\u0438\u0446\u0435, \u043C/\u0441",0,6,.1],["dash.mul","\u0420\u044B\u0432\u043E\u043A: \u0441\u0438\u043B\u0430 \xD7",1,2.5,.05],["dash.time","\u0420\u044B\u0432\u043E\u043A: \u0434\u043B\u0438\u0442\u0441\u044F, \u0441",.1,1.5,.05],["dash.cooldown","\u0420\u044B\u0432\u043E\u043A: \u043F\u0435\u0440\u0435\u0437\u0430\u0440\u044F\u0434\u043A\u0430, \u0441",.5,12,.5]],cx=[...Wd.filter(([e])=>!["jump","reach","climb","dash.cooldown"].includes(e)),["dash.charges","\u0420\u044B\u0432\u043A\u043E\u0432 \u0432 \u0437\u0430\u043F\u0430\u0441\u0435",1,6,1],["dash.recharge","\u041D\u043E\u0432\u044B\u0439 \u0440\u044B\u0432\u043E\u043A \u043A\u043E\u043F\u0438\u0442\u0441\u044F, \u0441",2,30,1],["fly.speed","\u041F\u0430\u0440\u0438\u0442 \u0432\u0432\u0435\u0440\u0445, \u043C/\u0441",.5,6,.1],["fly.time","\u041F\u0430\u0440\u0438\u0442 \u0431\u0435\u0437 \u043E\u0442\u0434\u044B\u0445\u0430, \u0441",.5,6,.1]],ux=[["sightRange","\u0412\u0438\u0434\u0438\u0442 \u043D\u0430, \u043C",5,40,1],["hearRunRange","\u0421\u043B\u044B\u0448\u0438\u0442 \u0431\u0435\u0433 \u043D\u0430, \u043C",0,20,.5],["loseSightTime","\u0422\u0435\u0440\u044F\u0435\u0442 \u0438\u0437 \u0432\u0438\u0434\u0443 \u0437\u0430, \u0441",.5,6,.1],["catchRadius","\u0420\u0430\u0434\u0438\u0443\u0441 \u043F\u043E\u0438\u043C\u043A\u0438, \u043C",.5,2.5,.05],["burstRange","\u0420\u044B\u0432\u043E\u043A \u0441 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u044F (\u0431\u043E\u0442), \u043C",2,15,.5],["lateBoost","\u0411\u044B\u0441\u0442\u0440\u0435\u0435 \u043A \u043A\u043E\u043D\u0446\u0443 \u0440\u0430\u0443\u043D\u0434\u0430 (\u0434\u043E\u043B\u044F)",0,.4,.01],["spawnGap","\u0412\u044B\u0445\u043E\u0434\u044F\u0442 \u0441 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u043E\u043C, \u0441",0,15,1],["disguise.time","\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u0434\u043B\u0438\u0442\u0441\u044F, \u0441",2,20,.5],["disguise.cd","\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u0435\u0440\u0435\u0437\u0430\u0440\u044F\u0434\u043A\u0430, \u0441",4,40,1]],dx=[["gravity","\u0413\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u044F",10,60,1],["stepHeight","\u0421\u0442\u0443\u043F\u0435\u043D\u044C\u043A\u0430 \u0431\u0435\u0437 \u043F\u0440\u044B\u0436\u043A\u0430, \u043C",.1,1,.05],["pushStrength","\u0422\u043E\u043B\u043A\u0430\u043D\u0438\u0435 \u0433\u0435\u0440\u043E\u0435\u0432",0,1.5,.05]],ch=(e,t)=>t.split(".").reduce((i,s)=>i[s],e),px=(e,t,i)=>{let s=t.split("."),r=s.pop();s.reduce((a,n)=>a[n],e)[r]=i};Vn=class{constructor(t,i){this.heroes=t,this.getCurrentHero=i,this.el=document.getElementById("tuner"),this.tab=null,this.el.querySelector(".tn-close").addEventListener("click",()=>this.toggle(!1)),this.el.querySelector(".tn-copy").addEventListener("click",()=>this.#t()),this.el.querySelector(".tn-reset").addEventListener("click",()=>this.#i());for(let s of["keydown","mousedown","touchstart","pointerdown","wheel"])this.el.addEventListener(s,r=>r.stopPropagation());addEventListener("keydown",s=>{(s.code==="F2"||s.code==="Backquote")&&(s.preventDefault(),this.toggle())})}get open(){return this.el.classList.contains("show")}toggle(t=!this.open){this.el.classList.toggle("show",t),t&&this.#e(this.tab||this.getCurrentHero()),t&&document.pointerLockElement&&document.exitPointerLock()}#e(t){this.tab=t;let i=this.el.querySelector(".tn-tabs"),s=[...this.heroes.map(l=>[l.id,l.name]),["noface","\u0411\u0435\u0437\u043B\u0438\u043A"],["ghost","\u0427\u0443\u0442\u044C\u0451 \u0411\u0435\u0437\u043B\u0438\u043A\u0430"],["world","\u041C\u0438\u0440"]];i.innerHTML=s.map(([l,h])=>`<button data-t="${l}" class="${l===t?"on":""}">${h}</button>`).join(""),i.querySelectorAll("button").forEach(l=>l.addEventListener("click",()=>this.#e(l.dataset.t)));let[r,a,n]=t==="ghost"?[Ae.ghost,ux,Hs.ghost]:t==="world"?[Ae.world,dx,Hs.world]:[Ae.heroes[t],t==="noface"?cx:Wd,Hs.heroes[t]],o=this.el.querySelector(".tn-fields");o.innerHTML=a.map(([l,h,c,d,u])=>{let p=ch(r,l),_=ch(n,l);return`<label class="${p!==_?"changed":""}"><span>${h}</span><input type="range" min="${c}" max="${d}" step="${u}" value="${p}" data-k="${l}"><b>${Gd(p)}</b></label>`}).join(""),o.querySelectorAll("input").forEach(l=>l.addEventListener("input",()=>{let h=parseFloat(l.value);px(r,l.dataset.k,h),l.nextElementSibling.textContent=Gd(h),l.parentElement.classList.toggle("changed",h!==ch(n,l.dataset.k)),Hd()}))}#t(){let t=this.tab,i=t==="ghost"?Ae.ghost:t==="world"?Ae.world:Ae.heroes[t],s=`${t}: ${JSON.stringify(i).replace(/"(\w+)":/g,"$1: ").replace(/,/g,", ")},`;navigator.clipboard?.writeText(s).then(()=>this.#a("\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u2014 \u0432\u0441\u0442\u0430\u0432\u044C \u0432 config.js"),()=>prompt("\u0421\u043A\u043E\u043F\u0438\u0440\u0443\u0439:",s))}#i(){let t=this.tab;t==="ghost"?Ws(Ae.ghost,Hs.ghost):t==="world"?Ws(Ae.world,Hs.world):Ws(Ae.heroes[t],Hs.heroes[t]),Hd(),this.#e(t),this.#a("\u0412\u0435\u0440\u043D\u0443\u043B \u043A\u0430\u043A \u0431\u044B\u043B\u043E")}#a(t){let i=this.el.querySelector(".tn-flash");i.textContent=t,i.classList.add("on"),setTimeout(()=>i.classList.remove("on"),1600)}},Gd=e=>Math.abs(e)>=10?e.toFixed(0):e.toFixed(2).replace(/0$/,"")});function qd(e){let s=new Rn({antialias:!0,preserveDrawingBuffer:!0});s.setSize(240,320,!1),s.setPixelRatio(1),s.toneMapping=Er,s.toneMappingExposure=1.2;let r=new Mn,a=document.createElement("canvas");a.width=8,a.height=256;let n=a.getContext("2d"),o=n.createLinearGradient(0,0,0,256);o.addColorStop(0,"#1a1a4a"),o.addColorStop(.6,"#3a2e6a"),o.addColorStop(1,"#2a1b2e"),n.fillStyle=o,n.fillRect(0,0,8,256),r.background=new Ss(a),r.background.colorSpace=jt,r.add(new Tn(10134783,2758704,1.3));let l=new En(16769720,2.2);l.position.set(2,4,5),r.add(l);let h=new Cr(16752720,20,12);h.position.set(-2.5,2.5,-1.5),r.add(h);let c=new Yt(32,240/320,.1,50),d={};for(let u of e){let p=u.build();p.update(.016,{t:1,speed:0,grounded:!0,landed:!1,mode:"search",appear:1}),p.root.rotation.y=u.id==="catbus"?.75:.35,r.add(p.root);let _=u.height,x=_*2.5+(u.id==="catbus"?1.6:.5);c.position.set(0,_*.6,x),c.lookAt(0,_*.4,0),s.render(r,c),d[u.id]=s.domElement.toDataURL("image/jpeg",.85),r.remove(p.root)}return s.dispose(),s.forceContextLoss?.(),d}var Yd=ut(()=>{Lt()});var Ma,Zd=ut(()=>{Ma=class{constructor(){this.ws=null,this.id=null,this.host=null,this.players=[],this.handlers=new Map,this.code=null,this.heartbeat=null}get isHost(){return!!this.id&&this.id===this.host}get connected(){return this.ws?.readyState===1}on(t,i){(this.handlers.get(t)||this.handlers.set(t,[]).get(t)).push(i)}#e(t,i){for(let s of this.handlers.get(t)||[])s(i)}static newCode(){let t="ABCDEFGHJKLMNPRSTUVWXYZ23456789";return Array.from({length:4},()=>t[Math.random()*t.length|0]).join("")}connect(t,i){return this.code=t.toUpperCase(),this.hello=i,new Promise(s=>{let r=!1,a=l=>{r||(r=!0,s(l))},n;try{n=new WebSocket(`${location.protocol==="https:"?"wss":"ws"}://${location.host}/room/${this.code}`)}catch{return a(!1)}this.ws=n;let o=setTimeout(()=>{a(!1);try{n.close()}catch{}},6e3);n.onmessage=l=>{let h;try{h=JSON.parse(l.data)}catch{return}h.t==="welcome"&&(this.id=h.id,clearTimeout(o),this.send({t:"hello",...this.hello}),clearInterval(this.heartbeat),this.heartbeat=setInterval(()=>this.send({t:"ping"}),25e3),a(!0)),h.t==="lobby"&&(this.players=h.players,this.host=h.host),this.#e(h.t,h),this.#e("*",h)},n.onclose=()=>{clearTimeout(o),clearInterval(this.heartbeat),this.heartbeat=null,a(!1),this.ws===n&&(this.ws=null,this.#e("close",{}))},n.onerror=()=>{}})}send(t){this.connected&&this.ws.send(JSON.stringify(t))}update(t){this.hello={...this.hello,...t},this.send({t:"hello",...this.hello})}leave(){let t=this.ws;clearInterval(this.heartbeat),this.heartbeat=null,this.ws=null,this.id=null,this.host=null,this.players=[],this.code=null;try{t?.close()}catch{}}name(t){return this.players.find(i=>i.id===t)?.name||"\u0418\u0433\u0440\u043E\u043A"}}});function uh(e){return e.agents.map(t=>({k:t.key,hero:t.hero.id,skin:t.skin,name:t.name,pid:t.isPlayer?"host":t.remote||null}))}function $d(e){let t=e.agents.map(s=>{let r=s.ctrl,a=s.action;return[s.key,Ht(r.pos.x),Ht(r.pos.y),Ht(r.pos.z),Ht(r.yaw),Ht(r.speed),r.grounded?1:0,Ht(r.vel.y),r.running||r.dashT>0?1:0,r.crouching?1:0,s.alive?1:0,s.prop?Jd.indexOf(s.prop.kind.id)+1:0,a?a.name:0,a?Ht(a.t/a.dur):0,s.hidden?1:0,Ht(r.stamina),r.exhausted?1:0,Ht(r.dashCd/r.phys.dash.cooldown)]}),i=e.activeGhosts.map((s,r)=>{let a=s.disguise;return[r,Ht(s.pos.x),Ht(s.pos.y),Ht(s.pos.z),Ht(s.yaw),s.state==="hidden"?0:s.state==="appear"?1:2,Ht(s.appear),s.state==="hunt"?1:0,Ht(s.ctrl.speed),s.stunT>0?1:0,a?.hero?a.hero.id:0,a?.prop?a.prop.id:0,s.isPlayer?"host":s.remote||0,Ht(s.ctrl.stamina),s.ctrl.dashCharges,Ht(s.ctrl.flyEnergy),Ht(s.disguiseCd)]});return{t:"s",ph:e.phase,left:Ht(e.left),sp:e.spawned,a:t,g:i}}var Ht,Jd,Wn,Kd=ut(()=>{Lt();Dr();Ht=e=>Math.round(e*100)/100,Jd=Ts.map(e=>e.id);Wn=class{constructor(t){this.env=t,this.agents=new Map,this.snap=null,this.ghostDz=new Map}setRoster(t){let i=new Set(t.map(s=>s.k));for(let[s,r]of this.agents)i.has(s)||(this.env.scene.remove(r.char.root),r.propObj&&this.env.scene.remove(r.propObj),this.agents.delete(s));for(let s of t){if(this.agents.has(s.k))continue;let r=this.env.heroes.find(n=>n.id===s.hero)||this.env.heroes[0],a=this.env.acquire(r,s.skin);this.agents.set(s.k,{def:r,char:a,name:s.name,pid:s.pid,pos:null,yaw:0,s:null,propObj:null,propKind:0})}}apply(t){this.snap=t;for(let i of t.a){let s=this.agents.get(i[0]);s&&(s.s=i)}}me(t){for(let s of this.agents.values())if(s.pid===t&&s.s&&s.s[10])return{kind:"agent",v:s,pos:s.pos||new I(s.s[1],s.s[2],s.s[3])};let i=this.snap?.g.find(s=>s[12]===t);return i?{kind:"ghost",g:i,pos:this.env.ghosts[i[0]].root.position}:null}render(t,i){let s=1-Math.exp(-t*14);for(let a of this.agents.values()){let n=a.s;if(!n){a.char.root.visible=!1;continue}let o=new I(n[1],n[2],n[3]);!a.pos||a.pos.distanceTo(o)>6?a.pos=o.clone():a.pos.lerp(o,s),a.yaw+=Math.atan2(Math.sin(n[4]-a.yaw),Math.cos(n[4]-a.yaw))*s;let l=!!n[10],h=n[11];h!==a.propKind&&(a.propObj&&(this.env.scene.remove(a.propObj),a.propObj=null),h&&(a.propObj=Gs(Jd[h-1]),a.propObj.rotation.y=Math.random()*6,this.env.scene.add(a.propObj)),a.propKind=h),a.propObj&&(a.propObj.position.copy(a.pos),a.propObj.visible=l);let c=a.char.root;c.visible=l&&!h,c.position.copy(a.pos),c.rotation.y=a.yaw,c.scale.y+=((n[9]?.62:1)-c.scale.y)*Math.min(1,t*14),a.char.update(t,{t:i,speed:n[5],grounded:!!n[6],vy:n[7],running:!!n[8],landed:!1,landSpeed:0,crouch:!!n[9],action:n[12]?{name:n[12],k:n[13]}:null})}let r=this.snap?.g||[];this.env.ghosts.forEach((a,n)=>{let o=r.find(d=>d[0]===n),l=o&&o[5]!==0,h=o&&(o[10]?"hero:"+o[10]:o[11]?"prop:"+o[11]:null);for(let[d,u]of this.ghostDz)d.endsWith("#"+n)&&d!==h+"#"+n&&(u.root.visible=!1);if(a.root.visible=!!l&&!h,!o)return;let c=new I(o[1],o[2],o[3]);if(a.root.position.distanceTo(c)>6?a.root.position.copy(c):a.root.position.lerp(c,s),a.root.rotation.y+=Math.atan2(Math.sin(o[4]-a.root.rotation.y),Math.cos(o[4]-a.root.rotation.y))*s,l&&!h&&a.char.update(t,{t:i,speed:o[8],mode:o[7]?"hunt":"search",appear:o[5]===1?o[6]:1,stunned:!!o[9]}),l&&h){let d=h+"#"+n,u=this.ghostDz.get(d);u||(o[10]?u=this.env.heroes.find(_=>_.id===o[10]).build("classic"):u={root:Gs(o[11]),update(){}},this.env.scene.add(u.root),this.ghostDz.set(d,u)),u.root.visible=!0,u.root.position.copy(a.root.position),o[10]&&(u.root.rotation.y=a.root.rotation.y),u.update(t,{t:i,speed:o[8],grounded:!0,vy:0,running:o[8]>6,landed:!1})}})}clear(){for(let t of this.agents.values())this.env.scene.remove(t.char.root),t.propObj&&this.env.scene.remove(t.propObj);this.agents.clear();for(let t of this.ghostDz.values())this.env.scene.remove(t.root);this.ghostDz.clear(),this.env.ghosts.forEach(t=>{t.root.visible=!1}),this.snap=null}}});var Zi,Qd,fx,ep,jn,mx,tp=ut(()=>{Lt();Ii();th();Zd();Kd();Dr();Zi=e=>document.getElementById(e),Qd="masha-game-name",fx={kid:"\u{1F431}",masha:"\u{1F9B6}",catbus:"\u{1F408}",moti:"\u{1F6E1}\uFE0F",noface:"\u{1F3AD}"},ep=e=>ni.find(t=>t.id===e)||(e===zt.id?zt:ni[0]),jn=class{constructor(t){this.g=t,this.net=new Ma,this.sendT=0,this.inT=0,this.latch={jump:!1,dash:!1},this.guest=null,this.#e()}get inRoom(){return!!this.net.code&&this.net.connected}get isHost(){return this.inRoom&&this.net.isHost}get isGuestPlaying(){return!!this.guest}get myName(){try{return localStorage.getItem(Qd)||""}catch{return""}}hello(){let t=this.g.hero;return{name:this.myName||"\u0418\u0433\u0440\u043E\u043A",hero:t.id,skin:t.custom?JSON.stringify(this.g.look):this.g.skin}}#e(){let t=this.g.ui,i=this.net;this.seenHost=null,t.on("lb-leave",()=>this.leave()),t.on("lb-hero",()=>this.g.toSelect()),t.on("lb-start",()=>this.hostStart()),t.on("lb-copy",()=>{navigator.clipboard?.writeText(this.url).then(()=>t.toast("\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430!"),()=>{}),Zi("lb-url").select()}),t.on("lb-share",()=>{navigator.share?navigator.share({title:"\u041F\u0440\u044F\u0442\u043A\u0438 \u0441 \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u043C",text:"\u0418\u0433\u0440\u0430\u0435\u043C \u0432\u043C\u0435\u0441\u0442\u0435! \u041A\u043E\u043C\u043D\u0430\u0442\u0430 "+i.code,url:this.url}).catch(()=>{}):(navigator.clipboard?.writeText(this.url),t.toast("\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430!"))});let s=Zi("lb-name");s.value=this.myName,s.addEventListener("keydown",r=>r.stopPropagation()),s.addEventListener("change",()=>{try{localStorage.setItem(Qd,s.value.trim())}catch{}i.update(this.hello())}),i.on("lobby",r=>{this.g.state==="lobby"&&this.renderLobby(),this.#i(r)}),i.on("left",r=>{if(this.isHost&&this.g.state==="play"){let a=this.g.round,n=a.agents.find(o=>o.remote===r.id);n&&(this.g.ui.toast(`${n.name} \u0432\u044B\u0448\u0435\u043B \u2014 \u0437\u0430 \u043D\u0435\u0433\u043E \u0438\u0433\u0440\u0430\u0435\u0442 \u0431\u043E\u0442`),a.convertToBot(n));for(let o of a.activeGhosts)o.remote===r.id&&(o.remote=null)}}),i.on("close",()=>{this.g.state!=="loading"&&(this.g.ui.toast("\u0421\u0432\u044F\u0437\u044C \u0441 \u043A\u043E\u043C\u043D\u0430\u0442\u043E\u0439 \u043F\u043E\u0442\u0435\u0440\u044F\u043D\u0430"),this.#r(),["lobby","guest"].includes(this.g.state)&&this.g.toSelect())}),i.on("start",r=>this.#s(r)),i.on("roster",r=>this.guest?.setRoster(r.roster)),i.on("s",r=>this.guest?.apply(r)),i.on("ev",r=>this.#o(r)),i.on("end",r=>this.#n(r)),i.on("lobbyBack",()=>{this.#r(),this.showLobby()}),i.on("in",r=>{if(!this.isHost)return;let a=this.g.round.netIn.get(r.from)||{};this.g.round.netIn.set(r.from,{...r,jump:a.jump||r.jump,dash:a.dash||r.dash})}),i.on("ab",r=>this.#a(r))}get url(){return`${location.origin}${location.pathname}?room=${this.net.code}`}async createRoom(){return this.join(Ma.newCode())}async join(t){let i=this.g.ui;if(i.toast("\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u0441\u044F \u043A \u043A\u043E\u043C\u043D\u0430\u0442\u0435\u2026"),!await this.net.connect(t,this.hello()))return i.toast("\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F. \u0421\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u0430\u044F \u0438\u0433\u0440\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0430 \u0430\u0434\u0440\u0435\u0441\u0435 \u0438\u0433\u0440\u044B \u0432 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0435."),!1;try{history.replaceState(null,"",`?room=${this.net.code}`)}catch{}return this.showLobby(),!0}leave(){this.isHost&&this.g.state==="play"&&this.net.send({t:"lobbyBack"}),this.net.leave(),this.#r();try{history.replaceState(null,"",location.pathname)}catch{}this.g.toSelect()}showLobby(){let t=this.g;this.isHost&&["play","result"].includes(t.state)&&this.net.send({t:"lobbyBack"}),t.state="lobby",t.input.enabled=!1,t.input.releasePointer(),t.ui.mode("lobby",!0),this.net.update(this.hello()),Zi("lb-code").textContent=this.net.code,Zi("lb-url").value=this.url,this.#t(),this.renderLobby()}renderLobby(){let t=this.net,i=t.host;Zi("lb-count").textContent=`${t.players.length}/8`,Zi("lb-players").innerHTML=t.players.map(l=>`<div class="lb-p ${l.id===t.id?"me":""}"><span class="ic">${fx[l.hero]||"\u{1F43E}"}</span><span class="nm">${mx(l.name)}${l.id===i?" \u{1F451}":""}</span><span class="hr">${ep(l.hero).name}</span></div>`).join("");let s={};for(let l of t.players)s[l.vote]=(s[l.vote]||0)+1;let r=this.g.maps,a=Zi("lb-maps");a.innerHTML=r.map(l=>`<button class="map-card ${l.ready?"":"soon"}" data-id="${l.id}"><div class="m-title">${l.icon} ${l.name}</div><div class="m-pic" style="background-image:url(${l.pic})"></div><span class="m-diff ${l.hard?"hard":""}">${l.hard?"\u0421\u043B\u043E\u0436\u043D\u044B\u0439":"\u041E\u0431\u044B\u0447\u043D\u044B\u0439"}</span><div class="m-votes">${"\u{1F43E}".repeat(s[l.id]||0)}</div></button>`).join("");let n=t.players.find(l=>l.id===t.id)?.vote;a.querySelectorAll(".map-card").forEach(l=>{l.classList.toggle("active",l.dataset.id===n),l.addEventListener("click",()=>{let h=r.find(c=>c.id===l.dataset.id);if(!h.ready){this.g.ui.toast(`\xAB${h.name}\xBB \u0441\u043A\u043E\u0440\u043E \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F!`);return}t.send({t:"vote",map:h.id})})});let o=t.isHost;Zi("lb-start").classList.toggle("hidden",!o),Zi("lb-wait").classList.toggle("hidden",o)}#t(){let t=Zi("lb-qr"),i=()=>{try{let r=window.qrcode(0,"M");r.addData(this.url),r.make(),t.src=r.createDataURL(4,2)}catch{t.removeAttribute("src")}};if(window.qrcode)return i();if(t.removeAttribute("src"),this.qrLoading)return;this.qrLoading=!0;let s=document.createElement("script");s.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js",s.onload=i,document.head.appendChild(s)}#i(t){let i=this.seenHost;this.seenHost=t.host,!(!this.guest||i==null||t.host===i)&&(this.#r(),this.g.ui.toast(t.host===this.net.id?"\u0425\u043E\u0437\u044F\u0438\u043D \u0432\u044B\u0448\u0435\u043B \u2014 \u0442\u0435\u043F\u0435\u0440\u044C \u0442\u044B \u0445\u043E\u0437\u044F\u0438\u043D. \u0420\u0430\u0443\u043D\u0434 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D.":"\u0425\u043E\u0437\u044F\u0438\u043D \u0432\u044B\u0448\u0435\u043B \u2014 \u0440\u0430\u0443\u043D\u0434 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D, \u0432\u0435\u0440\u043D\u0443\u043B\u0438\u0441\u044C \u0432 \u043B\u043E\u0431\u0431\u0438."),this.showLobby())}remotes(){return this.isHost?this.net.players.filter(t=>t.id!==this.net.id).map(t=>({id:t.id,name:t.name,hero:ep(t.hero),skin:t.skin})):[]}hostStart(){if(!this.isHost)return;let t=this.g;t.beginRound(t.hero.id===zt.id?"hunter":"play")}hostStarted(){if(!this.isHost)return;let t=this.g.round;t.player&&(t.player.name=this.myName||t.player.name),this.net.send({t:"start",roster:uh(t),mode:t.mode}),this.sendT=0}hostTick(t){this.isHost&&(this.sendT-=t,!(this.sendT>0)&&(this.sendT=1/15,this.net.send($d(this.g.round))))}hostEvent(t){if(!this.isHost)return;let i=s=>s?.isPlayer?"host":s?.remote||null;t.type==="caught"?this.net.send({t:"ev",k:"caught",name:t.agent.name,pid:i(t.agent),phase:t.phase,by:t.ghost.isPlayer?"host":t.ghost.remote||null}):t.type==="ghostSpawn"?this.net.send({t:"ev",k:"spawn",i:t.i,phase:this.g.round.phase,pid:t.ghost.isPlayer?"host":t.ghost.remote||null}):t.type==="phase"?(this.net.send({t:"roster",roster:uh(this.g.round)}),this.net.send({t:"ev",k:"phase",name:t.newGhostName,pid:t.agent?i(t.agent):null})):t.type==="poof"&&this.net.send({t:"ev",k:"poof",x:t.x,y:t.y,z:t.z,ghost:!!t.ghost})}hostEnd(t){this.isHost&&this.net.send({t:"end",r:{hideSurvivors:t.hideSurvivors,alive:t.alive,caught:t.caught}})}hostPumpkin(t){this.isHost&&t&&t!=="host"&&this.net.send({t:"ev",k:"pk",to:t})}#a(t){if(!this.isHost||this.g.state!=="play")return;let i=this.g.round,s=i.agents.find(a=>a.remote===t.from&&a.alive);if(s){s.abilities.use(t.id);return}let r=i.activeGhosts.find(a=>a.remote===t.from);r&&(t.id==="mask-hero"||t.id==="mask-prop")&&(r.disguised?r.reveal():r.useDisguise(i.agents,t.id==="mask-prop"?"prop":"hero"))}#s(t){let i=this.g;i.releaseAll(),this.guest||(this.guest=new Wn({scene:i.scene,heroes:[...ni,zt],ghosts:i.ghostPool,acquire:(s,r)=>i.acquireChar(s,r)})),this.guest.clear(),this.guest.setRoster(t.roster),this.guestMode=t.mode,this.guestFocus=0,this.pk=0,i.showGhost.root.visible=!1,i.showcase=null,i.input.reset(),i.state="guest",i.input.enabled=!0,i.input.lookOnly=!1,i.cam.yaw=0,i.cam.pitch=.3,i.ui.mode("play",i.isTouch,"play"),i.ui.phase("hide"),i.ui.pumpkins(0),i.ui.abilityBar([]),this.lastBar=null,i.showLight.intensity=0,document.getElementById("btn-again").classList.add("hidden")}#r(){this.guest&&(this.guest.clear(),this.g.releaseAll(),this.guest=null,document.getElementById("btn-again").classList.remove("hidden"))}guestTick(t,i){let s=this.g,r=this.guest;if(!r)return;let a=s.input.read();a.jump&&(this.latch.jump=!0),a.dash&&(this.latch.dash=!0),this.inT-=t,this.inT<=0&&(this.inT=1/20,this.net.send({t:"in",x:+a.x.toFixed(2),y:+a.y.toFixed(2),run:a.run,crouch:a.crouch,jumpHold:a.jumpHold,jump:this.latch.jump,dash:this.latch.dash,camYaw:+s.cam.yaw.toFixed(3)}),this.latch.jump=this.latch.dash=!1),r.render(t,i);let n=r.snap,o=r.me(this.net.id),l=[...r.agents.values()].filter(E=>E.s?.[10]),h=!o&&l.length>0,c=h?l[this.guestFocus%l.length]:null,d=o?.pos||c?.pos||r.agents.values().next().value?.pos||new I(0,0,22);if(s.mainFirstPersonTarget=h?c:null,o?.kind!==this.lastKind&&(s.cam.configure(o?.kind==="ghost"?zt.cam:o?.v?.def.cam||ni[0].cam),this.lastKind=o?.kind),h?s.firstPerson({ctrl:{pos:c.pos,yaw:c.yaw},hero:c.def}):s.cam.update(t,d,a),this.focusPos=d,!n)return;document.getElementById("watch-bar").classList.toggle("hidden",!h),document.getElementById("touch").classList.toggle("hidden",h),h&&(document.getElementById("btn-next").textContent="\u0414\u0440\u0443\u0433\u043E\u0439 \u0433\u0435\u0440\u043E\u0439 \u203A");let u=f&&n.ph==="hide"&&(f[9]||f[11]||f[14])?n.g.filter(E=>E[5]).sort((E,A)=>Math.hypot(E[1]-d.x,E[3]-d.z)-Math.hypot(A[1]-d.x,A[3]-d.z))[0]:null,p=u&&s.ghostPool[u[0]],_=u&&(u[10]?`hero:${u[10]}`:u[11]?`prop:${u[11]}`:null),x=_&&this.guest.ghostDz.get(`${_}#${u[0]}`);s.ghostViewTarget=p?{ctrl:{pos:new I(u[1],u[2],u[3]),yaw:u[4]},def:p.def,root:p.root,disguiseRoot:x?.root}:null,document.getElementById("ghost-view").classList.toggle("hidden",!s.ghostViewTarget),s.ui.phase(n.ph==="chase"?"chase":"hide");let m=n.a.filter(E=>E[10]).length;s.ui.alive(m,n.a.length,n.ph==="hide"?"\u0421\u043F\u0440\u044F\u0442\u0430\u043B\u0438\u0441\u044C":"\u0423\u0431\u0435\u0433\u0430\u044E\u0442");let f=o?.kind==="agent"?o.v.s:null,y=o?.kind==="ghost"?o.g:null;s.ui.hud({left:n.left,stamina:f?f[15]:y?y[13]:1,tired:f?!!f[16]:!1,hidden:f?!!f[14]:!1});let b;n.ph==="hide"&&n.sp===0?b=y?"\u0417\u0430\u043A\u0440\u043E\u0439 \u0433\u043B\u0430\u0437\u0430 \u0438 \u0441\u0447\u0438\u0442\u0430\u0439\u2026 \u0413\u0435\u0440\u043E\u0438 \u043F\u0440\u044F\u0447\u0443\u0442\u0441\u044F!":"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0441\u043A\u043E\u0440\u043E \u0432\u044B\u0439\u0434\u0443\u0442 \u2014 \u043F\u0440\u044F\u0447\u044C\u0441\u044F!":y?b=y[10]||y[11]?"\u0422\u044B \u0437\u0430\u043C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u0430\u043D \u2014 \u043F\u043E\u0434\u043A\u0440\u0430\u0434\u0438\u0441\u044C!":n.ph==="hide"?`\u041D\u0430\u0439\u0434\u0438 \u0441\u043F\u0440\u044F\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044F! \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C: ${m}`:`\u0414\u043E\u0433\u043E\u043D\u0438 \u0432\u0441\u0435\u0445! \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C: ${m}`:o?f[11]?b="\u0422\u044B \u2014 \u043F\u0440\u0435\u0434\u043C\u0435\u0442. \u041D\u0435 \u0448\u0435\u0432\u0435\u043B\u0438\u0441\u044C! (Q \u2014 \u0441\u043D\u043E\u0432\u0430 \u0441\u0442\u0430\u0442\u044C \u0441\u043E\u0431\u043E\u0439)":b=f[14]?"\u0422\u0438\u0445\u043E\u2026 \u0442\u0435\u0431\u044F \u0438\u0449\u0443\u0442":n.ph==="chase"?"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438! \u041D\u0435 \u043F\u043E\u043F\u0430\u0434\u0438\u0441\u044C!":"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0438\u0449\u0443\u0442. \u0421\u043F\u0440\u044F\u0447\u044C\u0441\u044F \u0438\u043B\u0438 \u0437\u0430\u043C\u0430\u0441\u043A\u0438\u0440\u0443\u0439\u0441\u044F!":b="\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438! \u0421\u043C\u043E\u0442\u0440\u0438, \u043A\u0430\u043A \u043F\u0440\u044F\u0447\u0443\u0442\u0441\u044F \u0434\u0440\u0443\u0433\u0438\u0435\u2026",s.ui.status(b,"calm"),s.ui.mmLabel(n.ph==="hide"&&n.sp===0&&!y?"\u041D\u0430\u0439\u0434\u0438 \u043C\u0435\u0441\u0442\u043E<br>\u0438 \u0441\u043F\u0440\u044F\u0447\u044C\u0441\u044F!":"");let g=y?"ghost":f?"hero:"+o.v.def.id:"none";g!==this.lastBar&&(this.lastBar=g,s.ui.abilityBar(y?s.ghostAbilities:f?s.heroAbilities(o.v.def.id):[])),y?s.ui.cooldowns(E=>E==="dash"?{k:y[14]>0?0:1,n:y[14]}:E==="fly"?{k:1-y[15]}:{k:y[10]||y[11]?0:y[16]/Ae.ghost.disguise.cd}):f&&s.ui.cooldowns(E=>E==="dash"?{k:f[17]}:{k:0});let S=[];for(let E of r.agents.values())E.s&&E.s[10]&&E!==o?.v&&!y&&S.push({x:E.s[1],z:E.s[3],kind:"ally"});for(let E of n.g)E[5]&&E!==y&&(y||!E[10]&&!E[11]&&Math.hypot(E[1]-d.x,E[3]-d.z)<18)&&S.push({x:E[1],z:E[3],kind:"ghost"});S.push({x:d.x,z:d.z,kind:"me"}),s.ui.minimap(d,s.cam.yaw,S)}nextGuestFocus(){this.g.state!=="guest"||this.guest?.me(this.net.id)||this.guestFocus++}guestKey(t){if(this.lastBar==="ghost"){t==="1"&&this.guestAbility("mask-hero"),t==="2"&&this.guestAbility("mask-prop");return}if(this.lastBar?.startsWith("hero:")){let i=this.g.heroAbilities(this.lastBar.slice(5)).find(s=>s.key===t);i&&this.guestAbility(i.id)}}guestAbility(t){if(t==="dash"){this.latch.dash=!0;return}if(t==="fly"){this.latch.jump=!0;return}this.net.send({t:"ab",id:t})}#o(t){let i=this.g,s=i.ui,r=this.net.id;this.guest&&(t.k==="caught"?(t.pid===r?s.toast(t.phase==="hide"?"\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438! \u041F\u043E\u0434\u043E\u0436\u0434\u0438 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043E\u043A.":"\u0422\u0435\u0431\u044F \u0434\u043E\u0433\u043D\u0430\u043B\u0438!"):t.by===r?s.toast(`\u041F\u043E\u043F\u0430\u043B\u0441\u044F: ${t.name}!`):s.toast(`${t.phase==="hide"?"\u041D\u0430\u0448\u043B\u0438":"\u0414\u043E\u0433\u043D\u0430\u043B\u0438"}: ${t.name}`),i.sound.chime([392,330])):t.k==="spawn"?(i.sound.ghostAppear(),i.cam.shake=.6,t.pid===r?s.toast("\u0422\u044B \u0432\u044B\u0448\u0435\u043B \u043D\u0430 \u043E\u0445\u043E\u0442\u0443! \u0418\u0449\u0438!"):t.i===0&&s.toast(t.phase==="hide"?"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0432\u044B\u0448\u043B\u0438 \u0438\u0441\u043A\u0430\u0442\u044C!":"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438 \u043D\u0430\u0447\u0430\u043B\u0438\u0441\u044C!")):t.k==="phase"?(i.sound.ghostAppear(),s.phase("chase"),s.toast(t.pid===r?"\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438 \u043F\u0435\u0440\u0432\u044B\u043C \u2014 \u0442\u0435\u043F\u0435\u0440\u044C \u0422\u042B \u0411\u0435\u0437\u043B\u0438\u043A! \u0414\u043E\u0433\u043E\u043D\u044F\u0439!":`\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438! \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u043C \u0441\u0442\u0430\u043B(\u0430): ${t.name}. \u0411\u0435\u0433\u0438!`)):t.k==="poof"?i.addFx(i.poofFx(t.x,t.y,t.z,t.ghost)):t.k==="pk"&&t.to===r&&(this.pk++,s.pumpkins(this.pk),i.sound.chime([784,1046,1318])))}#n(t){let i=this.g,s=t.r;i.state="result",i.input.enabled=!1,i.input.releasePointer();let r=this.pk;r&&i.ui.wallet(Ur.add(r)),i.ui.result({mode:"watch",alive:s.alive,hideSurvivors:s.hideSurvivors,caught:s.caught,earn:r}),i.ui.mode("result",i.isTouch),document.getElementById("btn-again").classList.add("hidden")}},mx=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])});var sp={};cp(sp,{Game:()=>dh});var Fr,ba,gx,Ta,ip,dh,Xn,rp=ut(()=>{Lt();Ii();th();md();yd();Dr();Sd();Md();wd();rh();oh();Bd();Fd();kd();Xd();Yd();eh();hh();tp();Fr=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,ba=Fr&&Math.min(screen.width,screen.height)<820,gx=4,Ta=new I(0,0,22),ip=[{id:"dash",key:"E",icon:"\u{1F4A8}",name:"\u0420\u044B\u0432\u043E\u043A"},{id:"mask-hero",key:"1",icon:"\u{1F3AD}",name:"\u0421\u0442\u0430\u0442\u044C \u0433\u0435\u0440\u043E\u0435\u043C"},{id:"mask-prop",key:"2",icon:"\u{1F4E6}",name:"\u0421\u0442\u0430\u0442\u044C \u0432\u0435\u0449\u044C\u044E"},{id:"fly",key:"\u2423",icon:"\u{1FAB6}",name:"\u0412\u0437\u043B\u0435\u0442\u0435\u0442\u044C"}],dh=class{constructor(t){this.canvas=t,this.ui=new Gn,this.sound=new Hn,this.state="loading",this.t=0,this.fx=[],this.navs=new Map,this.pool=new Map,this.acquired=[],this.skin="classic",this.withBots=!0,this.ghostCount=Ae.ghost.count,this.mapId="village",this.look=ya()}get agents(){return this.round?.agents||[]}get isTouch(){return Fr}get ghostAbilities(){return ip}heroAbilities(t){return lh[t]||[]}acquireChar(t,i){return this.#t(t,i)}releaseAll(){this.#i()}poofFx(t,i,s,r){return ih(this.scene,t,i,s,r?13215999:16773590)}get ghosts(){return this.round?.activeGhosts||[]}async start(){jd();let t=this.ui;t.progress(.1,"\u0421\u0442\u0440\u043E\u0438\u043C \u0434\u0435\u0440\u0435\u0432\u043D\u044E\u2026"),await Xn();let i=this.renderer=new Rn({canvas:this.canvas,antialias:!ba||devicePixelRatio<2,powerPreference:"high-performance"});i.setPixelRatio(Math.min(devicePixelRatio,ba?Ae.graphics.maxPixelRatioMobile:Ae.graphics.maxPixelRatioDesktop)),i.setSize(innerWidth,innerHeight,!1),i.toneMapping=Er,i.toneMappingExposure=1.15,i.shadowMap.enabled=Ae.graphics.shadows,i.shadowMap.type=mr,this.scene=new Mn,this.camera=new Yt(Ae.camera.fov,innerWidth/innerHeight,.1,400),this.insetCamera=new Yt(72,16/9,.08,180),this.map=fd(this.scene,{isMobile:ba}),this.world=this.map.world,t.progress(.4,"\u0417\u0430\u0436\u0438\u0433\u0430\u0435\u043C \u0444\u043E\u043D\u0430\u0440\u0438\u043A\u0438\u2026"),await Xn(),this.fireflies=gd(this.scene,ba?50:Ae.graphics.fireflies,28),this.soot=vd(this.scene,this.world,ba?10:16);let s=this.navFor(zt.radius);this.ghostPool=Array.from({length:gx},()=>new Bn(zt,this.world,this.scene,s,{heroes:ni})),this.input=new Un(this.canvas,document.getElementById("touch")),this.cam=new Dn(this.camera,this.map.cameraBlockers),this.showLight=new Cr(16769200,14,9,1.6),this.scene.add(this.showLight),t.progress(.6,"\u041F\u0440\u043E\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u043C \u0442\u0440\u043E\u043F\u0438\u043D\u043A\u0438\u2026"),await Xn();for(let o of ni)this.navFor(o.radius);this.pumpkins=new Nn(this.scene,this.navFor(.42)),t.progress(.8,"\u0417\u043E\u0432\u0451\u043C \u0434\u0443\u0445\u043E\u0432\u2026"),await Xn(),this.ghostPool.forEach(o=>{o.root.visible=!0,o.char.update(.016,{t:0,speed:0,mode:"hunt",appear:1})}),this.renderer.compile(this.scene,this.camera),this.ghostPool.forEach(o=>{o.root.visible=!1}),this.showGhost=zt.build(),this.showGhost.root.visible=!1,this.scene.add(this.showGhost.root),this.round=new kn({world:this.world,scene:this.scene,navFor:o=>this.navFor(o),ghosts:this.ghostPool,heroes:ni,makeChar:(o,l)=>this.#t(o,l),makeProp:o=>Gs(o),sound:this.sound,cam:this.cam}),this.round.addFx=o=>this.fx.push(o);let r=qd([...ni,zt]);this.#e(),t.progress(1,"\u0413\u043E\u0442\u043E\u0432\u043E!"),t.buildCards(ni,zt,r,o=>this.selectHero(o)),t.on("btn-choose",()=>this.mp.inRoom?this.mp.showLobby():this.toMaps()),t.on("btn-friends",()=>this.mp.inRoom?this.mp.showLobby():this.mp.createRoom()),t.on("btn-maps-back",()=>this.toSelect()),t.on("btn-maps-go",()=>this.beginRound(this.hero.id==="noface"?"hunter":"play")),t.on("btn-watch",()=>this.beginRound("watch")),t.on("btn-again",()=>this.beginRound(this.mode)),t.on("btn-change",()=>this.mp.inRoom?this.mp.showLobby():this.toSelect()),t.on("btn-resume",()=>this.resume()),t.on("btn-quit",()=>{this.ui.show("paused",!1),this.toSelect()}),t.on("btn-pause",()=>this.pause()),t.on("btn-next",()=>this.state==="guest"?this.mp.nextGuestFocus():this.#p()),t.on("btn-tuner",()=>this.tuner.toggle()),t.on("btn-tuner2",()=>this.tuner.toggle()),t.on("btn-mute",()=>{this.sound.setMuted(!this.sound.muted),t.setMute(this.sound.muted)}),t.onOptions({ghosts:o=>{this.ghostCount=o},bots:o=>{this.withBots=o},skin:o=>{this.skin=o,this.selectHero("moti")}},{ghosts:this.ghostCount,bots:this.withBots}),this.tuner=new Vn(ni,()=>this.hero?.id||"masha"),t.minimapInit(this.world,kt),this.mp=new jn(this),t.wallet(Ur.get()),addEventListener("keydown",o=>{if(this.tuner.open)return;if(this.state==="play"&&(o.code==="KeyP"||o.code==="Escape"&&!document.pointerLockElement))return this.pause();if(this.state==="paused"&&(o.code==="KeyP"||o.code==="Escape"))return this.resume();if(this.state==="play"&&this.mode==="watch"&&(o.code==="Tab"||o.code==="KeyN"))return o.preventDefault(),this.#p();if(this.state==="guest"&&!o.repeat)return this.mp.guestKey(o.code.replace("Digit","").replace("Key",""));if(this.state!=="play"||o.repeat)return;let l=o.code.replace("Digit","").replace("Key","");if(this.round.playerGhost)l==="1"&&this.#o("mask-hero"),l==="2"&&this.#o("mask-prop");else if(this.round.player?.alive){let c=this.round.player.abilities.list.find(d=>d.key===l);c&&this.round.player.abilities.use(c.id)}}),t.onAbility(o=>this.#o(o)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="play"&&this.pause()}),addEventListener("resize",()=>this.#c()),addEventListener("orientationchange",()=>{this.#c(),setTimeout(()=>this.#c(),180)}),window.visualViewport?.addEventListener("resize",()=>this.#c()),this.#c();let a=()=>this.sound.unlock();addEventListener("pointerdown",a),addEventListener("keydown",a),this.hero=ni[0],this.toSelect(),t.hideLoading();let n=new URLSearchParams(location.search).get("room");n&&this.mp.join(n),this.last=performance.now(),this.renderer.setAnimationLoop(()=>this.#v()),window.__game=this}navFor(t){let i=Math.round(t*10);return this.navs.has(i)||this.navs.set(i,new Or(this.world,t+.1)),this.navs.get(i)}addFx(t){this.fx.push(t)}#e(){let t=(i,s)=>(this.camera.position.set(...i),this.camera.lookAt(...s),this.map.updateLights(new I(s[0],0,s[2])),this.renderer.render(this.scene,this.camera),this.renderer.domElement.toDataURL("image/jpeg",.72));this.maps=[{id:"forest",name:"\u041B\u0435\u0441 \u0434\u0443\u0445\u043E\u0432",icon:"\u{1F332}",ready:!1,pic:t([-26,3.2,-26],[-36,2.4,-36])},{id:"village",name:"\u0414\u0435\u0440\u0435\u0432\u043D\u044F \u0434\u0443\u0445\u043E\u0432",icon:"\u{1F3E0}",ready:!0,pic:t([0,5,30],[0,1.5,4])},{id:"temple",name:"\u0417\u0430\u0431\u0440\u043E\u0448\u0435\u043D\u043D\u044B\u0439 \u0445\u0440\u0430\u043C",icon:"\u26E9\uFE0F",ready:!1,hard:!0,pic:t([0,3.5,-8],[0,2.4,-24])}],this.ui.buildMaps(this.maps,i=>{let s=this.maps.find(r=>r.id===i);if(!s.ready){this.ui.toast(`\xAB${s.name}\xBB \u0441\u043A\u043E\u0440\u043E \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F!`);return}this.mapId=i,this.ui.pickMap(i)}),this.ui.pickMap(this.mapId)}#t(t,i){let s=t.id+":"+(t.skins||t.custom?i:""),r=this.pool.get(s)||[];this.pool.set(s,r);let a=r.find(n=>!n.inUse);return a||(a=t.build(i),r.push(a)),a.inUse=!0,a.root.visible=!0,a.root.scale.set(1,1,1),this.scene.add(a.root),this.acquired.push(a),a}#i(){for(let t of this.acquired)t.inUse=!1,this.scene.remove(t.root);this.acquired=[];for(let t of this.agents)t.prop?.obj&&this.scene.remove(t.prop.obj);this.round.agents=[],this.round.player=null,this.round.playerGhost=null,this.round.domes=[];for(let t of this.fx)for(;t.update(99)!==!1;);this.fx=[],this.pumpkins.clear()}selectHero(t){this.hero=t===zt.id?zt:ni.find(i=>i.id===t),this.#i();for(let i of this.ghostPool)i.reveal(),i.reset(new I(0,0,-21));this.showGhost.root.visible=t===zt.id,this.showcase=t===zt.id?null:this.round.makeAgent(this.hero,!0,Ta,this.#a(this.hero)),this.ui.showHero(this.hero,this.skin),this.hero.custom&&this.ui.buildCreator(this.look,Ql,(i,s)=>this.#s(i,s)),this.cam.configure(this.hero.cam)}#a(t){return t.custom?JSON.stringify(this.look):this.skin}#s(t,i){this.look={...this.look,[t]:i},t==="gender"&&(this.look.hairStyle=Ql.hairStyle[i][0][0]),ld(this.look);for(let s of[...this.pool.keys()])s.startsWith("kid:")&&this.pool.delete(s);this.sound.chime([660,880]),this.selectHero("kid")}toSelect(){this.state="select",this.input.enabled=!1,this.input.lookOnly=!1,this.input.releasePointer(),this.selectHero(this.hero.id),this.sound.setTension(0),this.ui.mode("select",Fr),this.ui.wallet(Ur.get()),this.showLight.intensity=14}toMaps(){this.state="maps",this.ui.mode("maps",Fr)}beginRound(t){this.mode=t,this.sound.unlock(),this.#i(),this.showGhost.root.visible=!1,this.showcase=null,this.input.reset();let i=this.hero.id===zt.id?ni[0]:this.hero;this.round.start({mode:t,hero:i,skin:this.#a(i),mSkin:this.skin,ghosts:this.ghostCount,withBots:this.withBots,remotes:this.mp.remotes()}),this.mp.hostStarted(),this.pumpkins.spawn(Ae.round.pumpkins),this.focus=0,this.cam.yaw=t==="hunter"?Math.PI:0,this.cam.pitch=.3;let s=this.#l();this.#u(s),this.cam.snap(this.#h(s)),this.state="play",this.input.enabled=!0,this.input.lookOnly=t==="watch",this.ui.mode("play",Fr,t),this.ui.phase("hide"),this.#r(),this.#n(),this.ui.pumpkins(0),this.showLight.intensity=0}#r(){let t=this.round;t.playerGhost?this.ui.abilityBar(ip):t.player?this.ui.abilityBar(t.player.abilities.list):this.ui.abilityBar([]),document.getElementById("abil-bar").classList.toggle("hidden",this.mode==="watch")}#o(t){if(this.state==="guest")return this.mp.guestAbility(t);let i=this.round,s=i.playerGhost;if(t==="dash"){this.input.dashQueued=!0;return}if(s){t==="fly"?this.input.jumpQueued=!0:(t==="mask-hero"||t==="mask-prop")&&(s.disguised?s.reveal():s.useDisguise(i.agents,t==="mask-prop"?"prop":"hero")||this.ui.toast(s.active?"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u0435\u0449\u0451 \u043A\u043E\u043F\u0438\u0442\u0441\u044F\u2026":"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E\u0436\u0434\u0438\u0441\u044C \u0441\u0432\u043E\u0435\u0433\u043E \u0432\u044B\u0445\u043E\u0434\u0430"));return}i.player?.alive&&i.player.abilities.use(t)}#n(){let t=this.round,i=t.agents.filter(s=>s.alive).length;this.ui.alive(i,t.agents.length,t.phase==="hide"?"\u0421\u043F\u0440\u044F\u0442\u0430\u043B\u0438\u0441\u044C":"\u0423\u0431\u0435\u0433\u0430\u044E\u0442")}#l(){let t=this.round;if(t.player?.alive)return t.player;if(t.playerGhost)return t.playerGhost;let i=t.agents.filter(r=>r.alive),s=i.length?i:t.activeGhosts.filter(r=>r.state!=="hidden");return s[this.focus%Math.max(1,s.length)]||t.agents[0]||t.activeGhosts[0]}#u(t){t?.hero?this.cam.configure(t.hero.cam):this.cam.configure(zt.cam)}#p(){(this.mode==="watch"||!this.round.player?.alive&&!this.round.playerGhost)&&(this.focus++,this.#u(this.#l()))}#h(t){return t?t.ctrl.pos:Ta}#d(t,i){if(!t?.ctrl)return;let s=t.ctrl.pos,a=(t.hero?.height??t.def?.height??1.7)*.84,n=t.ctrl.yaw;i.position.set(s.x,s.y+a,s.z),i.lookAt(s.x+Math.sin(n),s.y+a-.03,s.z+Math.cos(n))}firstPerson(t,i=this.camera){this.#d(t,i)}#f(t){return t?.prop?.obj||t?.propObj||t?.disguiseRoot||t?.disguise?.char?.root||t?.root||t?.char?.root||null}#g(){let t=document.getElementById("ghost-view"),i=this.ghostViewTarget;if(!i||t.classList.contains("hidden"))return;let s=t.getBoundingClientRect();if(!s.width||!s.height)return;this.insetCamera.aspect=s.width/s.height,this.insetCamera.updateProjectionMatrix(),this.#d(i,this.insetCamera);let r=this.renderer.domElement.clientWidth||innerWidth,a=this.renderer.domElement.clientHeight||innerHeight,n=s.left,o=a-s.bottom;this.renderer.setScissorTest(!0),this.renderer.setViewport(n,o,s.width,s.height),this.renderer.setScissor(n,o,s.width,s.height);let l=this.#f(i),h=l?.visible;l&&(l.visible=!1),this.renderer.render(this.scene,this.insetCamera),l&&(l.visible=h),this.renderer.setScissorTest(!1),this.renderer.setViewport(0,0,r,a)}pause(){this.state==="play"&&(this.state="paused",this.input.enabled=!1,this.input.releasePointer(),this.ui.show("paused",!0))}resume(){this.state==="paused"&&(this.state="play",this.input.enabled=!0,this.last=performance.now(),this.ui.show("paused",!1))}#m(t){this.state="result",this.input.enabled=!1,this.input.releasePointer(),this.sound.setTension(0),(t.mode==="watch"?t.alive.length>0:t.mode==="hunter"||t.playerWasGhost?t.alive.length===0:!t.playerCaughtInChase)?this.sound.win():this.sound.lose(),t.mode!=="watch"&&t.earn?this.ui.wallet(Ur.add(t.earn)):t.earn=0,this.ui.result(t),this.ui.mode("result",Fr),this.mp.hostEnd(t)}#v(){let t=performance.now(),i=Math.min(.05,(t-this.last)/1e3);this.last=t,this.t+=i;let s=this.t;if(this.state==="play")this.#_(i,s);else if(this.state==="guest")this.mp.guestTick(i,s);else if(this.state==="select"||this.state==="maps")this.#y(i,s);else if(this.state==="result"){for(let o of this.agents)o.alive&&o.char&&o.char.update(i,{...o.ctrl.animState(s),speed:0,grounded:!0,landed:!1,action:o.abilities.pose()});for(let o of this.ghosts)o.state!=="hidden"&&!o.disguised&&o.char.update(i,{t:s,speed:0,mode:"hunt",appear:1})}this.fx=this.fx.filter(o=>o.update(i)!==!1);let r=this.state==="play"?this.#h(this.#l()):this.state==="guest"&&this.mp.focusPos||Ta;this.map.updateLights(r),this.fireflies(s),this.soot(i,s,r);let a=this.#f(this.mainFirstPersonTarget),n=a?.visible;a&&(a.visible=!1),this.renderer.render(this.scene,this.camera),a&&(a.visible=n),this.#g()}#y(t,i){let s=this.hero.id===zt.id,r=Ta;if(s){let d=this.showGhost.root;d.position.copy(r),d.rotation.y=-.35+Math.sin(i*.4)*.3,this.showGhost.update(t,{t:i,speed:0,mode:Math.sin(i*.5)>.3?"hunt":"search",appear:1})}else if(this.showcase){let d=this.showcase;if(d.abilities.update(t),!d.action&&Math.random()<t*.25){let u=d.abilities.list.filter(p=>["wave","cast","swing","summon"].includes(p.anim));if(u.length){let p=u[Math.random()*u.length|0];d.action={name:p.anim,t:0,dur:p.dur,lock:0,fired:!0}}}d.char.root.position.copy(r),d.char.root.rotation.y=-.35+Math.sin(i*.4)*.3,d.char.update(t,{t:i,speed:0,grounded:!0,landed:!1,action:d.abilities.pose()})}let a=this.hero.height,n=innerWidth<760,o=a*(n?2.9:2)+1.4,l=.12+Math.sin(i*.15)*.06,h=(n?.55:1.25)*(a/1.7)+(n?0:.3),c=new I(r.x+h,r.y+a*.6,r.z);this.camera.position.set(c.x+Math.sin(l)*o,c.y+a*.18,c.z+Math.cos(l)*o),this.camera.lookAt(c),this.showLight.position.set(r.x+.8,r.y+a*.9,r.z+2.4)}#_(t,i){let s=this.round,r=Ae,a=this.input.read(),n=this.#l(),o=this.mode!=="watch"&&!s.player?.alive&&!s.playerGhost;if(o)this.#d(n,this.camera),document.getElementById("touch").classList.add("hidden");else if(this.mode==="watch"||!(s.player?.alive||s.playerGhost)){let g=n.ctrl.yaw+Math.PI;Math.abs(a.lookX)+Math.abs(a.lookY)<1e-5&&(this.cam.yaw+=Math.atan2(Math.sin(g-this.cam.yaw),Math.cos(g-this.cam.yaw))*Math.min(1,t*1.2)),this.cam.update(t,this.#h(n),a)}else this.cam.update(t,this.#h(n),a);s.step(t,i,a,this.cam.yaw);for(let g of s.events)this.#x(g);if(s.events.length=0,this.mp.hostTick(t),this.state!=="play")return;n=this.#l(),this.mainFirstPersonTarget=o?n:null;let l=s.player,h=l?.alive&&s.phase==="hide"&&(l.hidden||l.prop||l.ctrl.crouching)?s.activeGhosts.filter(g=>g.state!=="hidden").sort((g,S)=>g.pos.distanceTo(l.ctrl.pos)-S.pos.distanceTo(l.ctrl.pos))[0]:null;this.ghostViewTarget=h||null,document.getElementById("ghost-view").classList.toggle("hidden",!this.ghostViewTarget);let c=this.mode==="watch"||o;document.getElementById("watch-bar").classList.toggle("hidden",!c),document.getElementById("abil-bar").classList.toggle("hidden",c),o?document.getElementById("btn-next").textContent="\u0414\u0440\u0443\u0433\u043E\u0439 \u0433\u0435\u0440\u043E\u0439 \u203A":this.mode==="watch"&&(document.getElementById("btn-next").textContent="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u203A"),o||document.getElementById("touch").classList.toggle("hidden",this.mode==="watch");for(let g of s.agents){if(!g.alive||!g.char)continue;let S=g.char.root;S.visible=!g.prop,S.position.copy(g.ctrl.pos),S.rotation.y=g.ctrl.yaw,S.scale.y+=((g.ctrl.crouching?.62:1)-S.scale.y)*Math.min(1,t*14),g.char.update(t,{...g.ctrl.animState(i),action:g.abilities.pose()})}let d=s.player?.alive?s.player:s.playerGhost,u=[d,...s.agents.filter(g=>g.remote&&g.alive),...s.activeGhosts.filter(g=>g.remote&&g.active)].filter(Boolean);for(let g of this.pumpkins.update(t,i,u))g===d?(s.stats.pumpkins++,this.ui.pumpkins(s.stats.pumpkins),this.sound.chime([784,1046,1318])):this.mp.hostPumpkin(g.remote);if(d){let g=d.ctrl;g.jumped&&this.sound.jump(),g.dashed&&this.sound.chime([880,1320]),g.landed&&g.landSpeed<-8&&(this.sound.land(-g.landSpeed),g.stagger>0&&(this.cam.shake=Math.max(this.cam.shake,.5))),g.grounded&&g.speed>1&&!g.crouching&&(this.stepDist=(this.stepDist||0)+g.speed*t,this.stepDist>(g.running?2.2:1.6)&&(this.stepDist=0,this.sound.step()))}let p=s.player?.alive?s.player:this.mode==="watch"&&n.hero&&n.alive!==void 0?n:null,_=p?this.#b(p.ctrl.pos):null,x=_?_.d:99,m=!!(_&&_.g.sees&&_.g.target===p&&!_.g.disguised),f=Math.ceil(r.round.headStart-s.t);if(s.phase==="hide"&&s.spawned===0)s.playerGhost?this.ui.status(`\u0417\u0430\u043A\u0440\u043E\u0439 \u0433\u043B\u0430\u0437\u0430 \u0438 \u0441\u0447\u0438\u0442\u0430\u0439: ${f}\u2026 \u0413\u0435\u0440\u043E\u0438 \u043F\u0440\u044F\u0447\u0443\u0442\u0441\u044F!`,"calm"):this.ui.status(`\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0432\u044B\u0439\u0434\u0443\u0442 \u0447\u0435\u0440\u0435\u0437 ${f} \u2014 \u043F\u0440\u044F\u0447\u044C\u0441\u044F!`,"calm");else if(s.playerGhost){let g=s.playerGhost,S=s.agents.filter(E=>E.alive).length;this.ui.status(g.disguised?`\u0422\u044B \u0437\u0430\u043C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u0430\u043D${g.disguise.prop?` \u043F\u043E\u0434 ${g.disguise.prop.name}`:` \u043F\u043E\u0434 \xAB${g.disguise.hero.name}\xBB`} \u2014 \u043F\u043E\u0434\u043A\u0440\u0430\u0434\u0438\u0441\u044C!`:s.phase==="hide"?`\u041D\u0430\u0439\u0434\u0438 \u0441\u043F\u0440\u044F\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044F! \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C: ${S}`:`\u0414\u043E\u0433\u043E\u043D\u0438 \u0432\u0441\u0435\u0445! \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C: ${S}`,"")}else this.mode==="watch"?this.ui.status(n.hero&&n.alive!==void 0?`\u0421\u043C\u043E\u0442\u0440\u0438\u043C: ${n.name}${n.hidden?" \xB7 \u0432 \u0443\u043A\u0440\u044B\u0442\u0438\u0438":""}${n.prop?` \xB7 \u043F\u0440\u0438\u0442\u0432\u043E\u0440\u0438\u043B\u0441\u044F: ${n.prop.kind.name}`:""}`:"\u0421\u043C\u043E\u0442\u0440\u0438\u043C: \u0411\u0435\u0437\u043B\u0438\u043A",m?"danger":""):s.player?.alive?m?this.ui.status("\u041E\u043D \u0442\u0435\u0431\u044F \u0432\u0438\u0434\u0438\u0442! \u0411\u0435\u0433\u0438!","danger"):s.player.protected?this.ui.status("\u0422\u044B \u043F\u043E\u0434 \u043A\u0443\u043F\u043E\u043B\u043E\u043C \u2014 \u0437\u0434\u0435\u0441\u044C \u043D\u0435 \u043F\u043E\u0439\u043C\u0430\u044E\u0442","calm"):s.player.prop?this.ui.status(`\u0422\u044B \u2014 ${s.player.prop.kind.name}. \u041D\u0435 \u0448\u0435\u0432\u0435\u043B\u0438\u0441\u044C! (Q \u2014 \u0441\u043D\u043E\u0432\u0430 \u0441\u0442\u0430\u0442\u044C \u0441\u043E\u0431\u043E\u0439)`,"calm"):_&&_.g.state==="hunt"&&_.g.target===s.player&&!_.g.disguised?this.ui.status("\u0411\u0435\u0437\u043B\u0438\u043A \u0438\u0434\u0451\u0442 \u043F\u043E \u0441\u043B\u0435\u0434\u0443\u2026",""):this.ui.status(s.player.hidden?"\u0422\u0438\u0445\u043E\u2026 \u043E\u043D \u0442\u0435\u0431\u044F \u0438\u0449\u0435\u0442":s.phase==="chase"?"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438! \u041D\u0435 \u043F\u043E\u043F\u0430\u0434\u0438\u0441\u044C!":"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0438\u0449\u0443\u0442. \u0421\u043F\u0440\u044F\u0447\u044C\u0441\u044F \u0438\u043B\u0438 \u0437\u0430\u043C\u0430\u0441\u043A\u0438\u0440\u0443\u0439\u0441\u044F!","calm"):this.ui.status("\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438! \u0421\u043C\u043E\u0442\u0440\u0438, \u043A\u0430\u043A \u043F\u0440\u044F\u0447\u0443\u0442\u0441\u044F \u0434\u0440\u0443\u0433\u0438\u0435\u2026","");let y=s.spawned&&p?Tt.clamp(1-x/16,0,1):0;this.sound.setTension(this.mode==="watch"?y*.5:y),this.ui.vignette(y*(m?1:.6));let b=d?d.ctrl:n.ctrl;this.ui.hud({left:s.left,stamina:b.stamina,tired:b.exhausted,hidden:d?.hidden}),this.ui.mmLabel(s.phase==="hide"&&s.spawned===0&&!s.playerGhost?"\u041D\u0430\u0439\u0434\u0438 \u043C\u0435\u0441\u0442\u043E<br>\u0438 \u0441\u043F\u0440\u044F\u0447\u044C\u0441\u044F!":""),this.#S(n),this.#M()}#x(t){let i=this.round;if(this.mp.hostEvent(t),t.type==="ghostSpawn")this.sound.ghostAppear(),this.cam.shake=Math.max(this.cam.shake,.6),t.ghost.isPlayer?this.ui.toast("\u0422\u044B \u0432\u044B\u0448\u0435\u043B \u043D\u0430 \u043E\u0445\u043E\u0442\u0443! \u0418\u0449\u0438!"):t.i===0&&this.ui.toast(i.phase==="hide"?"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0432\u044B\u0448\u043B\u0438 \u0438\u0441\u043A\u0430\u0442\u044C!":"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438 \u043D\u0430\u0447\u0430\u043B\u0438\u0441\u044C!");else if(t.type==="caught"){let s=t.agent;if(this.addFx(Fn(this.scene,s.ctrl.pos.x,s.ctrl.pos.z,2.5,10115808)),this.#n(),s.isPlayer){if(this.cam.shake=1,t.phase==="hide"){let r=i.caughtOrder.filter(a=>a.phase==="hide").length===1;this.ui.toast(r?"\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438 \u043F\u0435\u0440\u0432\u044B\u043C \u2014 \u0432 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0430\u0445 \u0422\u042B \u0431\u0443\u0434\u0435\u0448\u044C \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u043C!":"\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438! \u041F\u043E\u0434\u043E\u0436\u0434\u0438 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043E\u043A."),this.focus=0,this.#u(this.#l())}}else this.ui.toast(t.byPlayer?`\u041F\u043E\u043F\u0430\u043B\u0441\u044F: ${s.name}! \u{1F383}+${t.phase==="hide"?Ae.round.reward.found:Ae.round.reward.catch}`:`${t.phase==="hide"?"\u041D\u0430\u0448\u043B\u0438":"\u0414\u043E\u0433\u043D\u0430\u043B\u0438"}: ${s.name}`);s.isPlayer&&t.phase==="chase"&&(this.round.phase="over",this.#m(i.result()))}else if(t.type==="poof")this.addFx(ih(this.scene,t.x,t.y,t.z,t.ghost?13215999:16773590)),t.agent?.isPlayer&&t.kind&&this.ui.toast(`\u0422\u044B \u043F\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u043B\u0441\u044F: ${t.kind}!`);else if(t.type==="phase"){this.ui.phase("chase"),this.sound.ghostAppear(),this.cam.shake=.8,t.newGhostIsPlayer?this.ui.toast("\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438 \u043F\u0435\u0440\u0432\u044B\u043C \u2014 \u0442\u0435\u043F\u0435\u0440\u044C \u0422\u042B \u0411\u0435\u0437\u043B\u0438\u043A! \u0414\u043E\u0433\u043E\u043D\u044F\u0439 \u0432\u0441\u0435\u0445!"):i.mode==="hunter"?this.ui.toast("\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438! \u0421 \u0442\u043E\u0431\u043E\u0439 \u0435\u0449\u0451 3 \u0411\u0435\u0437\u043B\u0438\u043A\u0430 \u2014 \u043B\u043E\u0432\u0438 \u0432\u0441\u0435\u0445!"):this.ui.toast(`\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438! \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u043C \u0441\u0442\u0430\u043B(\u0430): ${t.newGhostName}. \u0411\u0435\u0433\u0438!`),this.#r(),this.#n();let s=this.#l();this.#u(s),this.cam.snap(this.#h(s))}else t.type==="end"&&this.#m(t.result)}#S(t){let i=this.round,s=t,r=[];for(let n of this.pumpkins.list)r.push({x:n.x,z:n.z,kind:"pumpkin"});let a=!!i.playerGhost;for(let n of i.agents)n.alive&&n!==s&&(!a||this.mode==="watch")&&r.push({x:n.ctrl.pos.x,z:n.ctrl.pos.z,kind:"ally"});for(let n of i.activeGhosts){if(n.state==="hidden"||n===s)continue;(a||this.mode==="watch"||!n.disguised&&this.world.lineOfSight(s.ctrl.pos.x,s.ctrl.pos.z,n.pos.x,n.pos.z,!0,s.ctrl.pos.y+1.4,n.eyeY))&&r.push({x:n.pos.x,z:n.pos.z,kind:"ghost"})}r.push({x:s.ctrl.pos.x,z:s.ctrl.pos.z,kind:"me"}),this.ui.minimap(s.ctrl.pos,this.cam.yaw,r)}#M(){let t=this.round,i=t.playerGhost;if(i){let s=i.ctrl,r=s.phys.dash;this.ui.cooldowns(a=>{if(a==="dash")return{k:s.dashCharges>0?s.dashCd/r.cooldown:1-s.chargeT/r.recharge,n:s.dashCharges};if(a==="mask-hero"||a==="mask-prop")return{k:i.disguised?0:i.disguiseCd/Ae.ghost.disguise.cd,n:i.disguised?Math.ceil(i.disguise.t):""};if(a==="fly")return{k:1-s.flyEnergy}})}else if(t.player){let s=t.player.ctrl,r=t.player.abilities;this.ui.cooldowns(a=>{if(a==="dash")return{k:s.dashCd/s.phys.dash.cooldown};let n=r.get(a);return{k:n?n.cdLeft/r.cooldown(n):0}})}}#b(t){let i=null;for(let s of this.ghosts){if(s.state==="hidden")continue;let r=Math.hypot(s.pos.x-t.x,s.pos.z-t.z);(!i||r<i.d)&&(i={g:s,d:r})}return i}#c(){let t=window.screen?.orientation?.type,i=t?t.startsWith("landscape"):typeof window.orientation=="number"?Math.abs(window.orientation)===90:innerWidth>innerHeight;document.documentElement.classList.toggle("landscape",i),requestAnimationFrame(()=>{let s=Math.max(1,innerWidth),r=Math.max(1,innerHeight);this.camera.aspect=s/r,this.camera.updateProjectionMatrix(),this.insetCamera.aspect=s/r,this.insetCamera.updateProjectionMatrix(),this.renderer.setSize(s,r,!1)})}},Xn=()=>new Promise(e=>setTimeout(e,0))});async function vx(){try{let{Game:e}=await Promise.resolve().then(()=>(rp(),sp));window.__started=!0,typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.roundRect&&(CanvasRenderingContext2D.prototype.roundRect=function(i,s,r,a,n=0){return n=Math.min(Array.isArray(n)?n[0]||0:n,r/2,a/2),this.moveTo(i+n,s),this.arcTo(i+r,s,i+r,s+a,n),this.arcTo(i+r,s+a,i,s+a,n),this.arcTo(i,s+a,i,s,n),this.arcTo(i,s,i+r,s,n),this.closePath(),this}),await new e(document.getElementById("scene")).start()}catch(e){console.error(e);let t=document.querySelector(".load-text");t&&(t.textContent="\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0438\u0433\u0440\u0443: "+(e?.message||String(e)))}}vx();
/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/
