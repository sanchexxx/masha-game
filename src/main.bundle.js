(()=>{var Kh=e=>{throw TypeError(e)};var lf=(e,t,i)=>t.has(e)||Kh("Cannot "+i);var Et=(e,t,i)=>t.has(e)?Kh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i);var K=(e,t,i)=>(lf(e,t,"access private method"),i);var xo,So,Mo,bo,ka,To;var hf=0,Qh=1,cf=2;var Er=1,uf=2,la=3,hs=0,si=1,bi=2,os=0,ua=1,kt=2,ec=3,tc=4,df=5;var Sr=100,pf=101,ff=102,mf=103,gf=104,vf=200,yf=201,_f=202,xf=203,mu=204,gu=205,Sf=206,Mf=207,bf=208,Tf=209,Ef=210,wf=211,Af=212,Rf=213,Cf=214,hl=0,cl=1,ul=2,ma=3,dl=4,pl=5,fl=6,ml=7,vu=0,Pf=1,If=2,Yi=0,yu=1,_u=2,xu=3,Dr=4,Su=5,Mu=6,bu=7;var Tu=300,Ws=301,Cr=302,Eo=303,wo=304,Dn=306,Ui=1e3,ns=1001,gl=1002,Qt=1003,Lf=1004;var Ha=1005;var ii=1006,Ao=1007;var Hs=1008;var yi=1009,Eu=1010,wu=1011,ga=1012,th=1013,Ji=1014,Xi=1015,$i=1016,ih=1017,sh=1018,va=1020,Au=35902,Ru=35899,Cu=1021,Pu=1022,Ii=1023,cs=1026,Gs=1027,Iu=1028,rh=1029,js=1030,ah=1031;var nh=1033,xn=33776,Sn=33777,Mn=33778,bn=33779,vl=35840,yl=35841,_l=35842,xl=35843,Sl=36196,Ml=37492,bl=37496,Tl=37488,El=37489,An=37490,wl=37491,Al=37808,Rl=37809,Cl=37810,Pl=37811,Il=37812,Ll=37813,Nl=37814,Ul=37815,Dl=37816,Ol=37817,Bl=37818,Fl=37819,zl=37820,kl=37821,Hl=36492,Gl=36494,Vl=36495,Wl=36283,jl=36284,Rn=36285,Xl=36286;var Cn=2300,ql=2301,Ro=2302,ic=2303,sc=2400,rc=2401,ac=2402;var Nf=3200;var Yl=0,Uf=1,Ts="",Zt="srgb",Pn="srgb-linear",In="linear",vt="srgb";var Co=7680;var Df=519,Of=512,Bf=513,Ff=514,oh=515,zf=516,kf=517,lh=518,Hf=519,Lu=35044;var nc="300 es",Li=2e3,ya=2001;function Gf(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Vf(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ln(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Wf(){let e=Ln("canvas");return e.style.display="block",e}var oc={},Pr=null;function Nn(...e){let t="THREE."+e.shift();Pr?Pr("log",t,...e):console.log(t,...e)}function Nu(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Xe(...e){e=Nu(e);let t="THREE."+e.shift();if(Pr)Pr("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function je(...e){e=Nu(e);let t="THREE."+e.shift();if(Pr)Pr("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function wr(...e){let t=e.join(" ");t in oc||(oc[t]=!0,Xe(...e))}function jf(e,t,i){return new Promise(function(s,r){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(a,i);break;default:s()}}setTimeout(a,i)})}var Xf={[hl]:cl,[ul]:fl,[dl]:ml,[ma]:pl,[cl]:hl,[fl]:ul,[ml]:dl,[pl]:ma},qs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lc=1234567,Ar=Math.PI/180,_a=180/Math.PI;function Zi(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(ei[e&255]+ei[e>>8&255]+ei[e>>16&255]+ei[e>>24&255]+"-"+ei[t&255]+ei[t>>8&255]+"-"+ei[t>>16&15|64]+ei[t>>24&255]+"-"+ei[i&63|128]+ei[i>>8&255]+"-"+ei[i>>16&255]+ei[i>>24&255]+ei[s&255]+ei[s>>8&255]+ei[s>>16&255]+ei[s>>24&255]).toLowerCase()}function rt(e,t,i){return Math.max(t,Math.min(i,e))}function hh(e,t){return(e%t+t)%t}function qf(e,t,i,s,r){return s+(e-t)*(r-s)/(i-t)}function Yf(e,t,i){return e!==t?(i-e)/(t-e):0}function da(e,t,i){return(1-i)*e+i*t}function Zf(e,t,i,s){return da(e,t,1-Math.exp(-i*s))}function Jf(e,t=1){return t-Math.abs(hh(e,t*2)-t)}function $f(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function Kf(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function Qf(e,t){return e+Math.floor(Math.random()*(t-e+1))}function em(e,t){return e+Math.random()*(t-e)}function tm(e){return e*(.5-Math.random())}function im(e){e!==void 0&&(lc=e);let t=lc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sm(e){return e*Ar}function rm(e){return e*_a}function am(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function nm(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function om(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function lm(e,t,i,s,r){let a=Math.cos,n=Math.sin,o=a(i/2),l=n(i/2),h=a((t+s)/2),u=n((t+s)/2),d=a((t-s)/2),c=n((t-s)/2),p=a((s-t)/2),v=n((s-t)/2);switch(r){case"XYX":e.set(o*u,l*d,l*c,o*h);break;case"YZY":e.set(l*c,o*u,l*d,o*h);break;case"ZXZ":e.set(l*d,l*c,o*u,o*h);break;case"XZX":e.set(o*u,l*v,l*p,o*h);break;case"YXY":e.set(l*p,o*u,l*v,o*h);break;case"ZYZ":e.set(l*v,l*p,o*u,o*h);break;default:Xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Pi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var wt={DEG2RAD:Ar,RAD2DEG:_a,generateUUID:Zi,clamp:rt,euclideanModulo:hh,mapLinear:qf,inverseLerp:Yf,lerp:da,damp:Zf,pingpong:Jf,smoothstep:$f,smootherstep:Kf,randInt:Qf,randFloat:em,randFloatSpread:tm,seededRandom:im,degToRad:sm,radToDeg:rm,isPowerOfTwo:am,ceilPowerOfTwo:nm,floorPowerOfTwo:om,setQuaternionFromProperEuler:lm,normalize:yt,denormalize:Pi},fe=(xo=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xo.prototype.isVector2=!0,xo),us=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,n){let o=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],c=r[a+1],p=r[a+2],v=r[a+3];if(u!==v||o!==d||l!==c||h!==p){let S=o*d+l*c+h*p+u*v;S<0&&(d=-d,c=-c,p=-p,v=-v,S=-S);let m=1-n;if(S<.9995){let f=Math.acos(S),y=Math.sin(f);m=Math.sin(m*f)/y,n=Math.sin(n*f)/y,o=o*m+d*n,l=l*m+c*n,h=h*m+p*n,u=u*m+v*n}else{o=o*m+d*n,l=l*m+c*n,h=h*m+p*n,u=u*m+v*n;let f=1/Math.sqrt(o*o+l*l+h*h+u*u);o*=f,l*=f,h*=f,u*=f}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let n=i[s],o=i[s+1],l=i[s+2],h=i[s+3],u=r[a],d=r[a+1],c=r[a+2],p=r[a+3];return e[t]=n*p+h*u+o*c-l*d,e[t+1]=o*p+h*d+l*u-n*c,e[t+2]=l*p+h*c+n*d-o*u,e[t+3]=h*p-n*u-o*d-l*c,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,n=Math.cos,o=Math.sin,l=n(i/2),h=n(s/2),u=n(r/2),d=o(i/2),c=o(s/2),p=o(r/2);switch(a){case"XYZ":this._x=d*h*u+l*c*p,this._y=l*c*u-d*h*p,this._z=l*h*p+d*c*u,this._w=l*h*u-d*c*p;break;case"YXZ":this._x=d*h*u+l*c*p,this._y=l*c*u-d*h*p,this._z=l*h*p-d*c*u,this._w=l*h*u+d*c*p;break;case"ZXY":this._x=d*h*u-l*c*p,this._y=l*c*u+d*h*p,this._z=l*h*p+d*c*u,this._w=l*h*u-d*c*p;break;case"ZYX":this._x=d*h*u-l*c*p,this._y=l*c*u+d*h*p,this._z=l*h*p-d*c*u,this._w=l*h*u+d*c*p;break;case"YZX":this._x=d*h*u+l*c*p,this._y=l*c*u+d*h*p,this._z=l*h*p-d*c*u,this._w=l*h*u-d*c*p;break;case"XZY":this._x=d*h*u-l*c*p,this._y=l*c*u-d*h*p,this._z=l*h*p+d*c*u,this._w=l*h*u+d*c*p;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],n=t[5],o=t[9],l=t[2],h=t[6],u=t[10],d=i+n+u;if(d>0){let c=.5/Math.sqrt(d+1);this._w=.25/c,this._x=(h-o)*c,this._y=(r-l)*c,this._z=(a-s)*c}else if(i>n&&i>u){let c=2*Math.sqrt(1+i-n-u);this._w=(h-o)/c,this._x=.25*c,this._y=(s+a)/c,this._z=(r+l)/c}else if(n>u){let c=2*Math.sqrt(1+n-i-u);this._w=(r-l)/c,this._x=(s+a)/c,this._y=.25*c,this._z=(o+h)/c}else{let c=2*Math.sqrt(1+u-i-n);this._w=(a-s)/c,this._x=(r+l)/c,this._y=(o+h)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,n=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+a*n+s*l-r*o,this._y=s*h+a*o+r*n-i*l,this._z=r*h+a*l+i*o-s*n,this._w=a*h-i*n-s*o-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,n=this.dot(e);n<0&&(i=-i,s=-s,r=-r,a=-a,n=-n);let o=1-t;if(n<.9995){let l=Math.acos(n),h=Math.sin(l);o=Math.sin(o*l)/h,t=Math.sin(t*l)/h,this._x=this._x*o+i*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+s*t,this._z=this._z*o+r*t,this._w=this._w*o+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=(So=class{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,n=e.z,o=e.w,l=2*(a*s-n*i),h=2*(n*t-r*s),u=2*(r*i-a*t);return this.x=t+o*l+a*u-n*h,this.y=i+o*h+n*l-r*u,this.z=s+o*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,n=t.y,o=t.z;return this.x=s*o-r*n,this.y=r*a-i*o,this.z=i*n-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Po.copy(this).projectOnVector(e),this.sub(Po)}reflect(e){return this.sub(Po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},So.prototype.isVector3=!0,So),Po=new I,hc=new us,Qe=(Mo=class{constructor(e,t,i,s,r,a,n,o,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,n,o,l)}set(e,t,i,s,r,a,n,o,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=n,h[3]=t,h[4]=r,h[5]=o,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],n=i[3],o=i[6],l=i[1],h=i[4],u=i[7],d=i[2],c=i[5],p=i[8],v=s[0],S=s[3],m=s[6],f=s[1],y=s[4],b=s[7],_=s[2],M=s[5],w=s[8];return r[0]=a*v+n*f+o*_,r[3]=a*S+n*y+o*M,r[6]=a*m+n*b+o*w,r[1]=l*v+h*f+u*_,r[4]=l*S+h*y+u*M,r[7]=l*m+h*b+u*w,r[2]=d*v+c*f+p*_,r[5]=d*S+c*y+p*M,r[8]=d*m+c*b+p*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],n=e[5],o=e[6],l=e[7],h=e[8];return t*a*h-t*n*l-i*r*h+i*n*o+s*r*l-s*a*o}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],n=e[5],o=e[6],l=e[7],h=e[8],u=h*a-n*l,d=n*o-h*r,c=l*r-a*o,p=t*u+i*d+s*c;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=u*v,e[1]=(s*l-h*i)*v,e[2]=(n*i-s*a)*v,e[3]=d*v,e[4]=(h*t-s*o)*v,e[5]=(s*r-n*t)*v,e[6]=c*v,e[7]=(i*o-l*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,n){let o=Math.cos(r),l=Math.sin(r);return this.set(i*o,i*l,-i*(o*a+l*n)+a+e,-s*l,s*o,-s*(-l*a+o*n)+n+t,0,0,1),this}scale(e,t){return wr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Io.makeScale(e,t)),this}rotate(e){return wr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Io.makeRotation(-e)),this}translate(e,t){return wr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Mo.prototype.isMatrix3=!0,Mo),Io=new Qe,cc=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uc=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hm(){let e={enabled:!0,workingColorSpace:Pn,spaces:{},convert:function(r,a,n){return this.enabled===!1||a===n||!a||!n||(this.spaces[a].transfer===vt&&(r.r=ls(r.r),r.g=ls(r.g),r.b=ls(r.b)),this.spaces[a].primaries!==this.spaces[n].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===vt&&(r.r=Rr(r.r),r.g=Rr(r.g),r.b=Rr(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ts?In:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,n){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return wr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return wr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(r,a)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return e.define({[Pn]:{primaries:t,whitePoint:s,transfer:In,toXYZ:cc,fromXYZ:uc,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:t,whitePoint:s,transfer:vt,toXYZ:cc,fromXYZ:uc,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),e}var ht=hm();function ls(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Rr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var sr,cm=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{sr===void 0&&(sr=Ln("canvas")),sr.width=e.width,sr.height=e.height;let s=sr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=sr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ln("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ls(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ls(t[i]/255)*255):t[i]=ls(t[i]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},um=0,ch=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,n=s.length;a<n;a++)s[a].isDataTexture?r.push(Lo(s[a].image)):r.push(Lo(s[a]))}else r=Lo(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Lo(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?cm.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var dm=0,No=new I,Ti=class Tn extends qs{constructor(t=Tn.DEFAULT_IMAGE,i=Tn.DEFAULT_MAPPING,s=ns,r=ns,a=ii,n=Hs,o=Ii,l=yi,h=Tn.DEFAULT_ANISOTROPY,u=Ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Zi(),this.name="",this.source=new ch(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=r,this.magFilter=a,this.minFilter=n,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(No).x}get height(){return this.source.getSize(No).y}get depth(){return this.source.getSize(No).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let s=t[i];if(s===void 0){Xe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let r=this[i];if(r===void 0){Xe(`Texture.setValues(): property '${i}' does not exist.`);continue}r&&s&&r.isVector2&&s.isVector2||r&&s&&r.isVector3&&s.isVector3||r&&s&&r.isMatrix3&&s.isMatrix3?r.copy(s):this[i]=s}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ui:t.x=t.x-Math.floor(t.x);break;case ns:t.x=t.x<0?0:1;break;case gl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ui:t.y=t.y-Math.floor(t.y);break;case ns:t.y=t.y<0?0:1;break;case gl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ti.DEFAULT_IMAGE=null,Ti.DEFAULT_MAPPING=Tu,Ti.DEFAULT_ANISOTROPY=1;var Rt=(bo=class{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,a=e.elements,n=a[0],o=a[4],l=a[8],h=a[1],u=a[5],d=a[9],c=a[2],p=a[6],v=a[10];if(Math.abs(o-h)<.01&&Math.abs(l-c)<.01&&Math.abs(d-p)<.01){if(Math.abs(o+h)<.1&&Math.abs(l+c)<.1&&Math.abs(d+p)<.1&&Math.abs(n+u+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let m=(n+1)/2,f=(u+1)/2,y=(v+1)/2,b=(o+h)/4,_=(l+c)/4,M=(d+p)/4;return m>f&&m>y?m<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(m),s=b/i,r=_/i):f>y?f<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(f),i=b/s,r=M/s):y<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),i=_/r,s=M/r),this.set(i,s,r,t),this}let S=Math.sqrt((p-d)*(p-d)+(l-c)*(l-c)+(h-o)*(h-o));return Math.abs(S)<.001&&(S=1),this.x=(p-d)/S,this.y=(l-c)/S,this.z=(h-o)/S,this.w=Math.acos((n+u+v-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bo.prototype.isVector4=!0,bo),pm=class extends qs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Ti(s),a=i.count;for(let n=0;n<a;n++)this.textures[n]=r.clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ii,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ch(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ni=class extends pm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Uu=class extends Ti{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var fm=class extends Ti{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var at=(ka=class{constructor(e,t,i,s,r,a,n,o,l,h,u,d,c,p,v,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,n,o,l,h,u,d,c,p,v,S)}set(e,t,i,s,r,a,n,o,l,h,u,d,c,p,v,S){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=n,m[13]=o,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=c,m[7]=p,m[11]=v,m[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ka().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/rr.setFromMatrixColumn(e,0).length(),r=1/rr.setFromMatrixColumn(e,1).length(),a=1/rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),n=Math.sin(i),o=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,c=a*u,p=n*h,v=n*u;t[0]=o*h,t[4]=-o*u,t[8]=l,t[1]=c+p*l,t[5]=d-v*l,t[9]=-n*o,t[2]=v-d*l,t[6]=p+c*l,t[10]=a*o}else if(e.order==="YXZ"){let d=o*h,c=o*u,p=l*h,v=l*u;t[0]=d+v*n,t[4]=p*n-c,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-n,t[2]=c*n-p,t[6]=v+d*n,t[10]=a*o}else if(e.order==="ZXY"){let d=o*h,c=o*u,p=l*h,v=l*u;t[0]=d-v*n,t[4]=-a*u,t[8]=p+c*n,t[1]=c+p*n,t[5]=a*h,t[9]=v-d*n,t[2]=-a*l,t[6]=n,t[10]=a*o}else if(e.order==="ZYX"){let d=a*h,c=a*u,p=n*h,v=n*u;t[0]=o*h,t[4]=p*l-c,t[8]=d*l+v,t[1]=o*u,t[5]=v*l+d,t[9]=c*l-p,t[2]=-l,t[6]=n*o,t[10]=a*o}else if(e.order==="YZX"){let d=a*o,c=a*l,p=n*o,v=n*l;t[0]=o*h,t[4]=v-d*u,t[8]=p*u+c,t[1]=u,t[5]=a*h,t[9]=-n*h,t[2]=-l*h,t[6]=c*u+p,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*o,c=a*l,p=n*o,v=n*l;t[0]=o*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=a*h,t[9]=c*u-p,t[2]=p*u-c,t[6]=n*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mm,e,gm)}lookAt(e,t,i){let s=this.elements;return gi.subVectors(e,t),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),ys.crossVectors(i,gi),ys.lengthSq()===0&&(Math.abs(i.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),ys.crossVectors(i,gi)),ys.normalize(),Ga.crossVectors(gi,ys),s[0]=ys.x,s[4]=Ga.x,s[8]=gi.x,s[1]=ys.y,s[5]=Ga.y,s[9]=gi.y,s[2]=ys.z,s[6]=Ga.z,s[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],n=i[4],o=i[8],l=i[12],h=i[1],u=i[5],d=i[9],c=i[13],p=i[2],v=i[6],S=i[10],m=i[14],f=i[3],y=i[7],b=i[11],_=i[15],M=s[0],w=s[4],A=s[8],g=s[12],x=s[1],U=s[5],R=s[9],N=s[13],W=s[2],D=s[6],X=s[10],Q=s[14],Z=s[3],_e=s[7],ee=s[11],se=s[15];return r[0]=a*M+n*x+o*W+l*Z,r[4]=a*w+n*U+o*D+l*_e,r[8]=a*A+n*R+o*X+l*ee,r[12]=a*g+n*N+o*Q+l*se,r[1]=h*M+u*x+d*W+c*Z,r[5]=h*w+u*U+d*D+c*_e,r[9]=h*A+u*R+d*X+c*ee,r[13]=h*g+u*N+d*Q+c*se,r[2]=p*M+v*x+S*W+m*Z,r[6]=p*w+v*U+S*D+m*_e,r[10]=p*A+v*R+S*X+m*ee,r[14]=p*g+v*N+S*Q+m*se,r[3]=f*M+y*x+b*W+_*Z,r[7]=f*w+y*U+b*D+_*_e,r[11]=f*A+y*R+b*X+_*ee,r[15]=f*g+y*N+b*Q+_*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],n=e[5],o=e[9],l=e[13],h=e[2],u=e[6],d=e[10],c=e[14],p=e[3],v=e[7],S=e[11],m=e[15],f=o*c-l*d,y=n*c-l*u,b=n*d-o*u,_=a*c-l*h,M=a*d-o*h,w=a*u-n*h;return t*(v*f-S*y+m*b)-i*(p*f-S*_+m*M)+s*(p*y-v*_+m*w)-r*(p*b-v*M+S*w)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],n=e[9],o=e[2],l=e[6],h=e[10];return t*(a*h-n*l)-i*(r*h-n*o)+s*(r*l-a*o)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],n=e[5],o=e[6],l=e[7],h=e[8],u=e[9],d=e[10],c=e[11],p=e[12],v=e[13],S=e[14],m=e[15],f=t*n-i*a,y=t*o-s*a,b=t*l-r*a,_=i*o-s*n,M=i*l-r*n,w=s*l-r*o,A=h*v-u*p,g=h*S-d*p,x=h*m-c*p,U=u*S-d*v,R=u*m-c*v,N=d*m-c*S,W=f*N-y*R+b*U+_*x-M*g+w*A;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/W;return e[0]=(n*N-o*R+l*U)*D,e[1]=(s*R-i*N-r*U)*D,e[2]=(v*w-S*M+m*_)*D,e[3]=(d*M-u*w-c*_)*D,e[4]=(o*x-a*N-l*g)*D,e[5]=(t*N-s*x+r*g)*D,e[6]=(S*b-p*w-m*y)*D,e[7]=(h*w-d*b+c*y)*D,e[8]=(a*R-n*x+l*A)*D,e[9]=(i*x-t*R-r*A)*D,e[10]=(p*M-v*b+m*f)*D,e[11]=(u*b-h*M-c*f)*D,e[12]=(n*g-a*U-o*A)*D,e[13]=(t*U-i*g+s*A)*D,e[14]=(v*y-p*_-S*f)*D,e[15]=(h*_-u*y+d*f)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,n=e.y,o=e.z,l=r*a,h=r*n;return this.set(l*a+i,l*n-s*o,l*o+s*n,0,l*n+s*o,h*n+i,h*o-s*a,0,l*o-s*n,h*o+s*a,r*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,n=t._z,o=t._w,l=r+r,h=a+a,u=n+n,d=r*l,c=r*h,p=r*u,v=a*h,S=a*u,m=n*u,f=o*l,y=o*h,b=o*u,_=i.x,M=i.y,w=i.z;return s[0]=(1-(v+m))*_,s[1]=(c+b)*_,s[2]=(p-y)*_,s[3]=0,s[4]=(c-b)*M,s[5]=(1-(d+m))*M,s[6]=(S+f)*M,s[7]=0,s[8]=(p+y)*w,s[9]=(S-f)*w,s[10]=(1-(d+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=rr.set(s[0],s[1],s[2]).length(),n=rr.set(s[4],s[5],s[6]).length(),o=rr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ai.copy(this);let l=1/a,h=1/n,u=1/o;return Ai.elements[0]*=l,Ai.elements[1]*=l,Ai.elements[2]*=l,Ai.elements[4]*=h,Ai.elements[5]*=h,Ai.elements[6]*=h,Ai.elements[8]*=u,Ai.elements[9]*=u,Ai.elements[10]*=u,t.setFromRotationMatrix(Ai),i.x=a,i.y=n,i.z=o,this}makePerspective(e,t,i,s,r,a,n=Li,o=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),c=(i+s)/(i-s),p,v;if(o)p=r/(a-r),v=a*r/(a-r);else if(n===Li)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(n===ya)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+n);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=c,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,n=Li,o=!1){let l=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),c=-(i+s)/(i-s),p,v;if(o)p=1/(a-r),v=a/(a-r);else if(n===Li)p=-2/(a-r),v=-(a+r)/(a-r);else if(n===ya)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+n);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=c,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ka.prototype.isMatrix4=!0,ka),rr=new I,Ai=new at,mm=new I(0,0,0),gm=new I(1,1,1),ys=new I,Ga=new I,gi=new I,dc=new at,pc=new us,Ir=class Du{constructor(t=0,i=0,s=0,r=Du.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,r=this._order){return this._x=t,this._y=i,this._z=s,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){let r=t.elements,a=r[0],n=r[4],o=r[8],l=r[1],h=r[5],u=r[9],d=r[2],c=r[6],p=r[10];switch(i){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-n,a)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-n,h)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-n,h));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-rt(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return dc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dc,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return pc.setFromEuler(this),this.setFromQuaternion(pc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ir.DEFAULT_ORDER="XYZ";var uh=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vm=0,fc=new I,ar=new us,ts=new at,Va=new I,$r=new I,ym=new I,_m=new us,mc=new I(1,0,0),gc=new I(0,1,0),vc=new I(0,0,1),yc={type:"added"},xm={type:"removed"},nr={type:"childadded",child:null},Uo={type:"childremoved",child:null},ui=class En extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();let t=new I,i=new Ir,s=new us,r=new I(1,1,1);function a(){s.setFromEuler(i,!1)}function n(){i.setFromQuaternion(s,void 0,!1)}i._onChange(a),s._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Qe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ar.setFromAxisAngle(t,i),this.quaternion.multiply(ar),this}rotateOnWorldAxis(t,i){return ar.setFromAxisAngle(t,i),this.quaternion.premultiply(ar),this}rotateX(t){return this.rotateOnAxis(mc,t)}rotateY(t){return this.rotateOnAxis(gc,t)}rotateZ(t){return this.rotateOnAxis(vc,t)}translateOnAxis(t,i){return fc.copy(t).applyQuaternion(this.quaternion),this.position.add(fc.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(mc,t)}translateY(t){return this.translateOnAxis(gc,t)}translateZ(t){return this.translateOnAxis(vc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ts.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Va.copy(t):Va.set(t,i,s);let r=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ts.lookAt($r,Va,this.up):ts.lookAt(Va,$r,this.up),this.quaternion.setFromRotationMatrix(ts),r&&(ts.extractRotation(r.matrixWorld),ar.setFromRotationMatrix(ts),this.quaternion.premultiply(ar.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(je("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yc),nr.child=t,this.dispatchEvent(nr),nr.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(xm),Uo.child=t,this.dispatchEvent(Uo),Uo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ts.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ts.multiply(t.parent.matrixWorld)),t.applyMatrix4(ts),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yc),nr.child=t,this.dispatchEvent(nr),nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,r=this.children.length;s<r;s++){let a=this.children[s].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);let r=this.children;for(let a=0,n=r.length;a<n;a++)r[a].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,t,ym),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,_m,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,s=t.y,r=t.z,a=this.matrix.elements;a[12]+=i-a[0]*i-a[4]*s-a[8]*r,a[13]+=s-a[1]*i-a[5]*s-a[9]*r,a[14]+=r-a[2]*i-a[6]*s-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){let a=this.children;for(let n=0,o=a.length;n<o;n++)a[n].updateWorldMatrix(!1,!0,s)}}toJSON(t){let i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let d=l[h];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(a(t.materials,this.material[l]));r.material=o}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(a(t.animations,l))}}if(i){let o=n(t.geometries),l=n(t.materials),h=n(t.textures),u=n(t.images),d=n(t.shapes),c=n(t.skeletons),p=n(t.animations),v=n(t.nodes);o.length>0&&(s.geometries=o),l.length>0&&(s.materials=l),h.length>0&&(s.textures=h),u.length>0&&(s.images=u),d.length>0&&(s.shapes=d),c.length>0&&(s.skeletons=c),p.length>0&&(s.animations=p),v.length>0&&(s.nodes=v)}return s.object=r,s;function n(o){let l=[];for(let h in o){let u=o[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){let r=t.children[s];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ui.DEFAULT_UP=new I(0,1,0),ui.DEFAULT_MATRIX_AUTO_UPDATE=!0,ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var lt=class extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sm={type:"move"},Do=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,n=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let S=t.getJointPose(v,i),m=this._getHandJoint(l,v);S!==null&&(m.matrix.fromArray(S.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=S.radius),m.visible=S!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),c=.02,p=.005;l.inputState.pinching&&d>c+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=c-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));n!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(n.matrix.fromArray(s.transform.matrix),n.matrix.decompose(n.position,n.rotation,n.scale),n.matrixWorldNeedsUpdate=!0,s.linearVelocity?(n.hasLinearVelocity=!0,n.linearVelocity.copy(s.linearVelocity)):n.hasLinearVelocity=!1,s.angularVelocity?(n.hasAngularVelocity=!0,n.angularVelocity.copy(s.angularVelocity)):n.hasAngularVelocity=!1,this.dispatchEvent(Sm)))}return n!==null&&(n.visible=s!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function Oo(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Ze=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ht.workingColorSpace){if(e=hh(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Oo(a,r,e+1/3),this.g=Oo(a,r,e),this.b=Oo(a,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=Zt){function i(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],n=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){let i=Ou[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return ht.workingToColorSpace(ti.copy(this),e),Math.round(rt(ti.r*255,0,255))*65536+Math.round(rt(ti.g*255,0,255))*256+Math.round(rt(ti.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(ti.copy(this),t);let i=ti.r,s=ti.g,r=ti.b,a=Math.max(i,s,r),n=Math.min(i,s,r),o,l,h=(n+a)/2;if(n===a)o=0,l=0;else{let u=a-n;switch(l=h<=.5?u/(a+n):u/(2-a-n),a){case i:o=(s-r)/u+(s<r?6:0);break;case s:o=(r-i)/u+2;break;case r:o=(i-s)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(ti.copy(this),t),e.r=ti.r,e.g=ti.g,e.b=ti.b,e}getStyle(e=Zt){ht.workingToColorSpace(ti.copy(this),e);let t=ti.r,i=ti.g,s=ti.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(_s),this.setHSL(_s.h+e,_s.s+t,_s.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_s),e.getHSL(Wa);let i=da(_s.h,Wa.h,t),s=da(_s.s,Wa.s,t),r=da(_s.l,Wa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ti=new Ze;Ze.NAMES=Ou;var Bu=class Fu{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ze(t),this.density=i}clone(){return new Fu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var On=class extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ir,this.environmentIntensity=1,this.environmentRotation=new Ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ri=new I,is=new I,Bo=new I,ss=new I,or=new I,lr=new I,_c=new I,Fo=new I,zo=new I,ko=new I,Ho=new Rt,Go=new Rt,Vo=new Rt,ks=class Mr{constructor(t=new I,i=new I,s=new I){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,r){r.subVectors(s,i),Ri.subVectors(t,i),r.cross(Ri);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(t,i,s,r,a){Ri.subVectors(r,i),is.subVectors(s,i),Bo.subVectors(t,i);let n=Ri.dot(Ri),o=Ri.dot(is),l=Ri.dot(Bo),h=is.dot(is),u=is.dot(Bo),d=n*h-o*o;if(d===0)return a.set(0,0,0),null;let c=1/d,p=(h*l-o*u)*c,v=(n*u-o*l)*c;return a.set(1-p-v,v,p)}static containsPoint(t,i,s,r){return this.getBarycoord(t,i,s,r,ss)===null?!1:ss.x>=0&&ss.y>=0&&ss.x+ss.y<=1}static getInterpolation(t,i,s,r,a,n,o,l){return this.getBarycoord(t,i,s,r,ss)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ss.x),l.addScaledVector(n,ss.y),l.addScaledVector(o,ss.z),l)}static getInterpolatedAttribute(t,i,s,r,a,n){return Ho.setScalar(0),Go.setScalar(0),Vo.setScalar(0),Ho.fromBufferAttribute(t,i),Go.fromBufferAttribute(t,s),Vo.fromBufferAttribute(t,r),n.setScalar(0),n.addScaledVector(Ho,a.x),n.addScaledVector(Go,a.y),n.addScaledVector(Vo,a.z),n}static isFrontFacing(t,i,s,r){return Ri.subVectors(s,i),is.subVectors(t,i),Ri.cross(is).dot(r)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,r){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,i,s,r){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),is.subVectors(this.a,this.b),Ri.cross(is).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Mr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,r,a){return Mr.getInterpolation(t,this.a,this.b,this.c,i,s,r,a)}containsPoint(t){return Mr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let s=this.a,r=this.b,a=this.c,n,o;or.subVectors(r,s),lr.subVectors(a,s),Fo.subVectors(t,s);let l=or.dot(Fo),h=lr.dot(Fo);if(l<=0&&h<=0)return i.copy(s);zo.subVectors(t,r);let u=or.dot(zo),d=lr.dot(zo);if(u>=0&&d<=u)return i.copy(r);let c=l*d-u*h;if(c<=0&&l>=0&&u<=0)return n=l/(l-u),i.copy(s).addScaledVector(or,n);ko.subVectors(t,a);let p=or.dot(ko),v=lr.dot(ko);if(v>=0&&p<=v)return i.copy(a);let S=p*h-l*v;if(S<=0&&h>=0&&v<=0)return o=h/(h-v),i.copy(s).addScaledVector(lr,o);let m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return _c.subVectors(a,r),o=(d-u)/(d-u+(p-v)),i.copy(r).addScaledVector(_c,o);let f=1/(m+S+c);return n=S*f,o=c*f,i.copy(s).addScaledVector(or,n).addScaledVector(lr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Es=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,n=r.count;a<n;a++)e.isMesh===!0?e.getVertexPosition(a,Ci):Ci.fromBufferAttribute(r,a),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ja.copy(i.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),Xa.subVectors(this.max,Kr),hr.subVectors(e.a,Kr),cr.subVectors(e.b,Kr),ur.subVectors(e.c,Kr),xs.subVectors(cr,hr),Ss.subVectors(ur,cr),Ds.subVectors(hr,ur);let t=[0,-xs.z,xs.y,0,-Ss.z,Ss.y,0,-Ds.z,Ds.y,xs.z,0,-xs.x,Ss.z,0,-Ss.x,Ds.z,0,-Ds.x,-xs.y,xs.x,0,-Ss.y,Ss.x,0,-Ds.y,Ds.x,0];return!Wo(t,hr,cr,ur,Xa)||(t=[1,0,0,0,1,0,0,0,1],!Wo(t,hr,cr,ur,Xa))?!1:(qa.crossVectors(xs,Ss),t=[qa.x,qa.y,qa.z],Wo(t,hr,cr,ur,Xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},rs=[new I,new I,new I,new I,new I,new I,new I,new I],Ci=new I,ja=new Es,hr=new I,cr=new I,ur=new I,xs=new I,Ss=new I,Ds=new I,Kr=new I,Xa=new I,qa=new I,Os=new I;function Wo(e,t,i,s,r){for(let a=0,n=e.length-3;a<=n;a+=3){Os.fromArray(e,a);let o=r.x*Math.abs(Os.x)+r.y*Math.abs(Os.y)+r.z*Math.abs(Os.z),l=t.dot(Os),h=i.dot(Os),u=s.dot(Os);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}var g1=Mm();function Mm(){let e=new ArrayBuffer(4),t=new Float32Array(e),i=new Uint32Array(e),s=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(s[l]=0,s[l|256]=32768,r[l]=24,r[l|256]=24):h<-14?(s[l]=1024>>-h-14,s[l|256]=1024>>-h-14|32768,r[l]=-h-1,r[l|256]=-h-1):h<=15?(s[l]=h+15<<10,s[l|256]=h+15<<10|32768,r[l]=13,r[l|256]=13):h<128?(s[l]=31744,s[l|256]=64512,r[l]=24,r[l|256]=24):(s[l]=31744,s[l|256]=64512,r[l]=13,r[l|256]=13)}let a=new Uint32Array(2048),n=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,u=0;for(;!(h&8388608);)h<<=1,u-=8388608;h&=-8388609,u+=947912704,a[l]=h|u}for(let l=1024;l<2048;++l)a[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)n[l]=l<<23;n[31]=1199570944,n[32]=2147483648;for(let l=33;l<63;++l)n[l]=2147483648+(l-32<<23);n[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:i,baseTable:s,shiftTable:r,mantissaTable:a,exponentTable:n,offsetTable:o}}var Ft=new I,Ya=new fe,bm=0,Jt=class extends qs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Lu,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var zu=class extends Jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ku=class extends Jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var qe=class extends Jt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Tm=new Es,Qr=new I,jo=new I,ws=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Tm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);let t=Qr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Qr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(jo)),this.expandByPoint(Qr.copy(e.center).sub(jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Em=0,Mi=new at,Xo=new ui,dr=new I,vi=new Es,ea=new Es,Yt=new I,pt=class Hu extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gf(t)?ku:zu)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let s=this.attributes.normal;if(s!==void 0){let a=new Qe().getNormalMatrix(t);s.applyNormalMatrix(a),s.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,i,s){return Mi.makeTranslation(t,i,s),this.applyMatrix4(Mi),this}scale(t,i,s){return Mi.makeScale(t,i,s),this.applyMatrix4(Mi),this}lookAt(t){return Xo.lookAt(t),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let s=[];for(let r=0,a=t.length;r<a;r++){let n=t[r];s.push(n.x,n.y,n.z||0)}this.setAttribute("position",new qe(s,3))}else{let s=Math.min(t.length,i.count);for(let r=0;r<s;r++){let a=t[r];i.setXYZ(r,a.x,a.y,a.z||0)}t.length>i.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,r=i.length;s<r;s++){let a=i[s];vi.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let s=this.boundingSphere.center;if(vi.setFromBufferAttribute(t),i)for(let a=0,n=i.length;a<n;a++){let o=i[a];ea.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(vi.min,ea.min),vi.expandByPoint(Yt),Yt.addVectors(vi.max,ea.max),vi.expandByPoint(Yt)):(vi.expandByPoint(ea.min),vi.expandByPoint(ea.max))}vi.getCenter(s);let r=0;for(let a=0,n=t.count;a<n;a++)Yt.fromBufferAttribute(t,a),r=Math.max(r,s.distanceToSquared(Yt));if(i)for(let a=0,n=i.length;a<n;a++){let o=i[a],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Yt.fromBufferAttribute(o,h),l&&(dr.fromBufferAttribute(t,h),Yt.add(dr)),r=Math.max(r,s.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let s=i.position,r=i.normal,a=i.uv,n=this.getAttribute("tangent");(n===void 0||n.count!==s.count)&&(n=new Jt(new Float32Array(4*s.count),4),this.setAttribute("tangent",n));let o=[],l=[];for(let g=0;g<s.count;g++)o[g]=new I,l[g]=new I;let h=new I,u=new I,d=new I,c=new fe,p=new fe,v=new fe,S=new I,m=new I;function f(g,x,U){h.fromBufferAttribute(s,g),u.fromBufferAttribute(s,x),d.fromBufferAttribute(s,U),c.fromBufferAttribute(a,g),p.fromBufferAttribute(a,x),v.fromBufferAttribute(a,U),u.sub(h),d.sub(h),p.sub(c),v.sub(c);let R=1/(p.x*v.y-v.x*p.y);isFinite(R)&&(S.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(R),o[g].add(S),o[x].add(S),o[U].add(S),l[g].add(m),l[x].add(m),l[U].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let g=0,x=y.length;g<x;++g){let U=y[g],R=U.start,N=U.count;for(let W=R,D=R+N;W<D;W+=3)f(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let b=new I,_=new I,M=new I,w=new I;function A(g){M.fromBufferAttribute(r,g),w.copy(M);let x=o[g];b.copy(x),b.sub(M.multiplyScalar(M.dot(x))).normalize(),_.crossVectors(w,x);let U=_.dot(l[g])<0?-1:1;n.setXYZW(g,b.x,b.y,b.z,U)}for(let g=0,x=y.length;g<x;++g){let U=y[g],R=U.start,N=U.count;for(let W=R,D=R+N;W<D;W+=3)A(t.getX(W+0)),A(t.getX(W+1)),A(t.getX(W+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Jt(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let c=0,p=s.count;c<p;c++)s.setXYZ(c,0,0,0);let r=new I,a=new I,n=new I,o=new I,l=new I,h=new I,u=new I,d=new I;if(t)for(let c=0,p=t.count;c<p;c+=3){let v=t.getX(c+0),S=t.getX(c+1),m=t.getX(c+2);r.fromBufferAttribute(i,v),a.fromBufferAttribute(i,S),n.fromBufferAttribute(i,m),u.subVectors(n,a),d.subVectors(r,a),u.cross(d),o.fromBufferAttribute(s,v),l.fromBufferAttribute(s,S),h.fromBufferAttribute(s,m),o.add(u),l.add(u),h.add(u),s.setXYZ(v,o.x,o.y,o.z),s.setXYZ(S,l.x,l.y,l.z),s.setXYZ(m,h.x,h.y,h.z)}else for(let c=0,p=i.count;c<p;c+=3)r.fromBufferAttribute(i,c+0),a.fromBufferAttribute(i,c+1),n.fromBufferAttribute(i,c+2),u.subVectors(n,a),d.subVectors(r,a),u.cross(d),s.setXYZ(c+0,u.x,u.y,u.z),s.setXYZ(c+1,u.x,u.y,u.z),s.setXYZ(c+2,u.x,u.y,u.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Yt.fromBufferAttribute(t,i),Yt.normalize(),t.setXYZ(i,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function t(o,l){let h=o.array,u=o.itemSize,d=o.normalized,c=new h.constructor(l.length*u),p=0,v=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*u;for(let f=0;f<u;f++)c[v++]=h[p++]}return new Jt(c,u,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Hu,s=this.index.array,r=this.attributes;for(let o in r){let l=r[o],h=t(l,s);i.setAttribute(o,h)}let a=this.morphAttributes;for(let o in a){let l=[],h=a[o];for(let u=0,d=h.length;u<d;u++){let c=h[u],p=t(c,s);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let n=this.groups;for(let o=0,l=n.length;o<l;o++){let h=n[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let s=this.attributes;for(let l in s){let h=s[l];t.data.attributes[l]=h.toJSON(t.data)}let r={},a=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let d=0,c=h.length;d<c;d++){let p=h[d];u.push(p.toJSON(t.data))}u.length>0&&(r[l]=u,a=!0)}a&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let n=this.groups;n.length>0&&(t.data.groups=JSON.parse(JSON.stringify(n)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let s=t.index;s!==null&&this.setIndex(s.clone());let r=t.attributes;for(let h in r){let u=r[h];this.setAttribute(h,u.clone(i))}let a=t.morphAttributes;for(let h in a){let u=[],d=a[h];for(let c=0,p=d.length;c<p;c++)u.push(d[c].clone(i));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let n=t.groups;for(let h=0,u=n.length;h<u;h++){let d=n[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},wm=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lu,this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},hi=new I,xc=class Gu{constructor(t,i,s,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)hi.fromBufferAttribute(this,i),hi.applyMatrix4(t),this.setXYZ(i,hi.x,hi.y,hi.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)hi.fromBufferAttribute(this,i),hi.applyNormalMatrix(t),this.setXYZ(i,hi.x,hi.y,hi.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)hi.fromBufferAttribute(this,i),hi.transformDirection(t),this.setXYZ(i,hi.x,hi.y,hi.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Pi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=yt(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=yt(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=yt(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=yt(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=yt(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Pi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Pi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Pi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Pi(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=yt(i,this.array),s=yt(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=yt(i,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=r,this}setXYZW(t,i,s,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=yt(i,this.array),s=yt(s,this.array),r=yt(r,this.array),a=yt(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=r,this.data.array[t+3]=a,this}clone(t){if(t===void 0){Nn("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let s=0;s<this.count;s++){let r=s*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)i.push(this.data.array[r+a])}return new Jt(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Gu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Nn("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let s=0;s<this.count;s++){let r=s*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)i.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qo=new I,Am=new I,Rm=new Qe,bs=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=qo.subVectors(i,t).cross(Am.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(qo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Rm.getNormalMatrix(e),s=this.coplanarPoint(qo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Cm=0,Ys=class extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=ua,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mu,this.blendDst=gu,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Df,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Co,this.stencilZFail=Co,this.stencilZPass=Co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let n in r){let o=r[n];delete o.metadata,a.push(o)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new bs().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new fe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Di=class extends Ys{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},pr,ta=new I,fr=new I,mr=new I,gr=new fe,ia=new fe,Vu=new at,Za=new I,sa=new I,Ja=new I,Sc=new fe,Yo=new fe,Mc=new fe,Ki=class extends ui{constructor(e=new Di){if(super(),this.isSprite=!0,this.type="Sprite",pr===void 0){pr=new pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new wm(t,5);pr.setIndex([0,1,2,0,2,3]),pr.setAttribute("position",new xc(i,3,0,!1)),pr.setAttribute("uv",new xc(i,2,3,!1))}this.geometry=pr,this.material=e,this.center=new fe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fr.setFromMatrixScale(this.matrixWorld),Vu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fr.multiplyScalar(-mr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;$a(Za.set(-.5,-.5,0),mr,a,fr,s,r),$a(sa.set(.5,-.5,0),mr,a,fr,s,r),$a(Ja.set(.5,.5,0),mr,a,fr,s,r),Sc.set(0,0),Yo.set(1,0),Mc.set(1,1);let n=e.ray.intersectTriangle(Za,sa,Ja,!1,ta);if(n===null&&($a(sa.set(-.5,.5,0),mr,a,fr,s,r),Yo.set(0,1),n=e.ray.intersectTriangle(Za,Ja,sa,!1,ta),n===null))return;let o=e.ray.origin.distanceTo(ta);o<e.near||o>e.far||t.push({distance:o,point:ta.clone(),uv:ks.getInterpolation(ta,Za,sa,Ja,Sc,Yo,Mc,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function $a(e,t,i,s,r,a){gr.subVectors(e,i).addScalar(.5).multiply(s),r!==void 0?(ia.x=a*gr.x-r*gr.y,ia.y=r*gr.x+a*gr.y):ia.copy(gr),e.copy(t),e.x+=ia.x,e.y+=ia.y,e.applyMatrix4(Vu)}var v1=new I,y1=new I;var as=new I,Zo=new I,Ka=new I,Qa=new I,Ta=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,as)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=as.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(as.copy(this.origin).addScaledVector(this.direction,t),as.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Zo.copy(e).add(t).multiplyScalar(.5),Ka.copy(t).sub(e).normalize(),Qa.copy(this.origin).sub(Zo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ka),n=Qa.dot(this.direction),o=-Qa.dot(Ka),l=Qa.lengthSq(),h=Math.abs(1-a*a),u,d,c,p;if(h>0)if(u=a*o-n,d=a*n-o,p=r*h,u>=0)if(d>=-p)if(d<=p){let v=1/h;u*=v,d*=v,c=u*(u+a*d+2*n)+d*(a*u+d+2*o)+l}else d=r,u=Math.max(0,-(a*d+n)),c=-u*u+d*(d+2*o)+l;else d=-r,u=Math.max(0,-(a*d+n)),c=-u*u+d*(d+2*o)+l;else d<=-p?(u=Math.max(0,-(-a*r+n)),d=u>0?-r:Math.min(Math.max(-r,-o),r),c=-u*u+d*(d+2*o)+l):d<=p?(u=0,d=Math.min(Math.max(-r,-o),r),c=d*(d+2*o)+l):(u=Math.max(0,-(a*r+n)),d=u>0?r:Math.min(Math.max(-r,-o),r),c=-u*u+d*(d+2*o)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+n)),c=-u*u+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zo).addScaledVector(Ka,d),c}intersectSphere(e,t){if(e.radius<0)return null;as.subVectors(e.center,this.origin);let i=as.dot(this.direction),s=as.dot(as)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),n=i-a,o=i+a;return o<0?null:n<0?this.at(o,t):this.at(n,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,n,o,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(n=(e.min.z-d.z)*u,o=(e.max.z-d.z)*u):(n=(e.max.z-d.z)*u,o=(e.min.z-d.z)*u),i>o||n>s)||((n>i||i!==i)&&(i=n),(o<s||s!==s)&&(s=o),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,as)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,n=this.direction,o=n.x,l=n.y,h=n.z,u=e.x-a.x,d=e.y-a.y,c=e.z-a.z,p=t.x-a.x,v=t.y-a.y,S=t.z-a.z,m=i.x-a.x,f=i.y-a.y,y=i.z-a.z,b=Math.abs(o),_=Math.abs(l),M=Math.abs(h),w,A,g,x,U,R,N,W,D,X,Q,Z;if(b>=_&&b>=M?(g=o,R=u,D=p,Z=m,o>=0?(w=l,A=h,x=d,U=c,N=v,W=S,X=f,Q=y):(w=h,A=l,x=c,U=d,N=S,W=v,X=y,Q=f)):_>=M?(g=l,R=d,D=v,Z=f,l>=0?(w=h,A=o,x=c,U=u,N=S,W=p,X=y,Q=m):(w=o,A=h,x=u,U=c,N=p,W=S,X=m,Q=y)):(g=h,R=c,D=S,Z=y,h>=0?(w=o,A=l,x=u,U=d,N=p,W=v,X=m,Q=f):(w=l,A=o,x=d,U=u,N=v,W=p,X=f,Q=m)),g===0)return null;let _e=w/g,ee=A/g,se=1/g,de=x-_e*R,Ve=U-ee*R,De=N-_e*D,ft=W-ee*D,$e=X-_e*Z,te=Q-ee*Z,ce=$e*ft-te*De,ge=de*te-Ve*$e,ze=De*Ve-ft*de;if(s){if(ce<0||ge<0||ze<0)return null}else if((ce<0||ge<0||ze<0)&&(ce>0||ge>0||ze>0))return null;let Ie=ce+ge+ze;if(Ie===0)return null;let be=se*(ce*R+ge*D+ze*Z);return(Ie>0?be<0:be>0)?null:this.at(be/Ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Oi=class extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.combine=vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bc=new at,Bs=new Ta,en=new ws,Tc=new I,tn=new I,sn=new I,rn=new I,Jo=new I,an=new I,Ec=new I,nn=new I,ut=class extends ui{constructor(e=new pt,t=new Oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let n=this.morphTargetInfluences;if(r&&n){an.set(0,0,0);for(let o=0,l=r.length;o<l;o++){let h=n[o],u=r[o];h!==0&&(Jo.fromBufferAttribute(u,e),a?an.addScaledVector(Jo,h):an.addScaledVector(Jo.sub(t),h))}t.add(an)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),en.copy(i.boundingSphere),en.applyMatrix4(r),Bs.copy(e.ray).recast(e.near),!(en.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(en,Tc)===null||Bs.origin.distanceToSquared(Tc)>(e.far-e.near)**2))&&(bc.copy(r).invert(),Bs.copy(e.ray).applyMatrix4(bc),!(i.boundingBox!==null&&Bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Bs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,n=r.index,o=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,c=r.drawRange;if(n!==null)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){let S=d[p],m=a[S.materialIndex],f=Math.max(S.start,c.start),y=Math.min(n.count,Math.min(S.start+S.count,c.start+c.count));for(let b=f,_=y;b<_;b+=3){let M=n.getX(b),w=n.getX(b+1),A=n.getX(b+2);s=on(this,m,e,i,l,h,u,M,w,A),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{let p=Math.max(0,c.start),v=Math.min(n.count,c.start+c.count);for(let S=p,m=v;S<m;S+=3){let f=n.getX(S),y=n.getX(S+1),b=n.getX(S+2);s=on(this,a,e,i,l,h,u,f,y,b),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){let S=d[p],m=a[S.materialIndex],f=Math.max(S.start,c.start),y=Math.min(o.count,Math.min(S.start+S.count,c.start+c.count));for(let b=f,_=y;b<_;b+=3){let M=b,w=b+1,A=b+2;s=on(this,m,e,i,l,h,u,M,w,A),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{let p=Math.max(0,c.start),v=Math.min(o.count,c.start+c.count);for(let S=p,m=v;S<m;S+=3){let f=S,y=S+1,b=S+2;s=on(this,a,e,i,l,h,u,f,y,b),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}};function Pm(e,t,i,s,r,a,n,o){let l;if(t.side===si?l=s.intersectTriangle(n,a,r,!0,o):l=s.intersectTriangle(r,a,n,t.side===hs,o),l===null)return null;nn.copy(o),nn.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(nn);return h<i.near||h>i.far?null:{distance:h,point:nn.clone(),object:e}}function on(e,t,i,s,r,a,n,o,l,h){e.getVertexPosition(o,tn),e.getVertexPosition(l,sn),e.getVertexPosition(h,rn);let u=Pm(e,t,i,s,tn,sn,rn,Ec);if(u){let d=new I;ks.getBarycoord(Ec,tn,sn,rn,d),r&&(u.uv=ks.getInterpolatedAttribute(r,o,l,h,d,new fe)),a&&(u.uv1=ks.getInterpolatedAttribute(a,o,l,h,d,new fe)),n&&(u.normal=ks.getInterpolatedAttribute(n,o,l,h,d,new I),u.normal.dot(s.direction)>0&&u.normal.multiplyScalar(-1));let c={a:o,b:l,c:h,normal:new I,materialIndex:0};ks.getNormal(tn,sn,rn,c.normal),u.face=c,u.barycoord=d}return u}var _1=new Rt,x1=new Rt,S1=new Rt,M1=new Rt,b1=new at,T1=new I,E1=new ws,w1=new at,A1=new Ta;var Im=class extends Ti{constructor(e=null,t=1,i=1,s,r,a,n,o,l=Qt,h=Qt,u,d){super(null,a,n,o,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},R1=new at,C1=new at;var P1=new at,I1=new at;var L1=new Es,N1=new at,U1=new ut,D1=new ws;var Fs=new ws,Lm=new fe(.5,.5),ln=new I,Lr=class{constructor(e=new bs,t=new bs,i=new bs,s=new bs,r=new bs,a=new bs){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let n=this.planes;return n[0].copy(e),n[1].copy(t),n[2].copy(i),n[3].copy(s),n[4].copy(r),n[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Li,i=!1){let s=this.planes,r=e.elements,a=r[0],n=r[1],o=r[2],l=r[3],h=r[4],u=r[5],d=r[6],c=r[7],p=r[8],v=r[9],S=r[10],m=r[11],f=r[12],y=r[13],b=r[14],_=r[15];if(s[0].setComponents(l-a,c-h,m-p,_-f).normalize(),s[1].setComponents(l+a,c+h,m+p,_+f).normalize(),s[2].setComponents(l+n,c+u,m+v,_+y).normalize(),s[3].setComponents(l-n,c-u,m-v,_-y).normalize(),i)s[4].setComponents(o,d,S,b).normalize(),s[5].setComponents(l-o,c-d,m-S,_-b).normalize();else if(s[4].setComponents(l-o,c-d,m-S,_-b).normalize(),t===Li)s[5].setComponents(l+o,c+d,m+S,_+b).normalize();else if(t===ya)s[5].setComponents(o,d,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){Fs.center.set(0,0,0);let t=Lm.distanceTo(e.center);return Fs.radius=.7071067811865476+t,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ln.x=s.normal.x>0?e.max.x:e.min.x,ln.y=s.normal.y>0?e.max.y:e.min.y,ln.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ln)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},wc=new at,Nm=class Wu{constructor(){this.coordinateSystem=Li,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,s=this._frustums;for(let r=0;r<i.length;r++){let a=i[r];wc.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),s[r]===void 0&&(s[r]=new Lr),s[r].setFromProjectionMatrix(wc,a.coordinateSystem,a.reversedDepth)}return this._count=i.length,this}intersectsObject(t){let i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,s=t._frustums;for(let r=0;r<t._count;r++)i[r]===void 0&&(i[r]=new Lr),i[r].copy(s[r]);return this._count=t._count,this}clone(){return new Wu().copy(this)}};var Um=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,s){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let n=r[this.index];a.push(n),this.index++,n.start=e,n.count=t,n.z=i,n.index=s}reset(){this.list.length=0,this.index=0}},O1=new at,B1=new Ze(1,1,1),F1=new Lr,z1=new Nm,k1=new Es,H1=new ws,G1=new I,V1=new I,W1=new I,j1=new Um,X1=new ut;var q1=new I,Y1=new I,Z1=new at,J1=new Ta,$1=new ws,K1=new I,Q1=new I;var eS=new I,tS=new I;var Zs=class extends Ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ac=new at,Zl=new Ta,hn=new ws,cn=new I,Or=class extends ui{constructor(e=new pt,t=new Zs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hn.copy(i.boundingSphere),hn.applyMatrix4(s),hn.radius+=r,e.ray.intersectsSphere(hn)===!1)return;Ac.copy(s).invert(),Zl.copy(e.ray).applyMatrix4(Ac);let n=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=n*n,l=i.index,h=i.attributes.position;if(l!==null){let u=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let c=u,p=d;c<p;c++){let v=l.getX(c);cn.fromBufferAttribute(h,v),Rc(cn,v,o,s,e,t,this)}}else{let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let c=u,p=d;c<p;c++)cn.fromBufferAttribute(h,c),Rc(cn,c,o,s,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Rc(e,t,i,s,r,a,n){let o=Zl.distanceSqToPoint(e);if(o<i){let l=new I;Zl.closestPointToPoint(e,l),l.applyMatrix4(s);let h=r.ray.origin.distanceTo(l);if(h<r.near||h>r.far)return;a.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:n})}}var ju=class extends Ti{constructor(e=[],t=Ws,i,s,r,a,n,o,l,h){super(e,t,i,s,r,a,n,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},As=class extends Ti{constructor(e,t,i,s,r,a,n,o,l){super(e,t,i,s,r,a,n,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var xa=class extends Ti{constructor(e,t,i=Ji,s,r,a,n=Qt,o=Qt,l,h=cs,u=1){if(h!==cs&&h!==Gs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,n,o,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ch(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Dm=class extends xa{constructor(e,t=Ji,i=Ws,s,r,a=Qt,n=Qt,o,l=cs){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,n,o,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Xu=class extends Ti{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Rs=class qu extends pt{constructor(t=1,i=1,s=1,r=1,a=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:r,heightSegments:a,depthSegments:n};let o=this;r=Math.floor(r),a=Math.floor(a),n=Math.floor(n);let l=[],h=[],u=[],d=[],c=0,p=0;v("z","y","x",-1,-1,s,i,t,n,a,0),v("z","y","x",1,-1,s,i,-t,n,a,1),v("x","z","y",1,1,t,s,i,r,n,2),v("x","z","y",1,-1,t,s,-i,r,n,3),v("x","y","z",1,-1,t,i,s,r,a,4),v("x","y","z",-1,-1,t,i,-s,r,a,5),this.setIndex(l),this.setAttribute("position",new qe(h,3)),this.setAttribute("normal",new qe(u,3)),this.setAttribute("uv",new qe(d,2));function v(S,m,f,y,b,_,M,w,A,g,x){let U=_/A,R=M/g,N=_/2,W=M/2,D=w/2,X=A+1,Q=g+1,Z=0,_e=0,ee=new I;for(let se=0;se<Q;se++){let de=se*R-W;for(let Ve=0;Ve<X;Ve++){let De=Ve*U-N;ee[S]=De*y,ee[m]=de*b,ee[f]=D,h.push(ee.x,ee.y,ee.z),ee[S]=0,ee[m]=0,ee[f]=w>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(Ve/A),d.push(1-se/g),Z+=1}}for(let se=0;se<g;se++)for(let de=0;de<A;de++){let Ve=c+de+X*se,De=c+de+X*(se+1),ft=c+(de+1)+X*(se+1),$e=c+(de+1)+X*se;l.push(Ve,De,$e),l.push(De,ft,$e),_e+=6}o.addGroup(p,_e,x),p+=_e,c+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},dh=class Yu extends pt{constructor(t=1,i=1,s=4,r=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:s,radialSegments:r,heightSegments:a},i=Math.max(0,i),s=Math.max(1,Math.floor(s)),r=Math.max(3,Math.floor(r)),a=Math.max(1,Math.floor(a));let n=[],o=[],l=[],h=[],u=i/2,d=Math.PI/2*t,c=i,p=2*d+c,v=s*2+a,S=r+1,m=new I,f=new I;for(let y=0;y<=v;y++){let b=0,_=0,M=0,w=0;if(y<=s){let x=y/s,U=x*Math.PI/2;_=-u-t*Math.cos(U),M=t*Math.sin(U),w=-t*Math.cos(U),b=x*d}else if(y<=s+a){let x=(y-s)/a;_=-u+x*i,M=t,w=0,b=d+x*c}else{let x=(y-s-a)/s,U=x*Math.PI/2;_=u+t*Math.sin(U),M=t*Math.cos(U),w=t*Math.sin(U),b=d+c+x*d}let A=Math.max(0,Math.min(1,b/p)),g=0;y===0?g=.5/r:y===v&&(g=-.5/r);for(let x=0;x<=r;x++){let U=x/r,R=U*Math.PI*2,N=Math.sin(R),W=Math.cos(R);f.x=-M*W,f.y=_,f.z=M*N,o.push(f.x,f.y,f.z),m.set(-M*W,w,M*N),m.normalize(),l.push(m.x,m.y,m.z),h.push(U+g,A)}if(y>0){let x=(y-1)*S;for(let U=0;U<r;U++){let R=x+U,N=x+U+1,W=y*S+U,D=y*S+U+1;n.push(R,N,W),n.push(N,D,W)}}}this.setIndex(n),this.setAttribute("position",new qe(o,3)),this.setAttribute("normal",new qe(l,3)),this.setAttribute("uv",new qe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yu(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Om=class Zu extends pt{constructor(t=1,i=32,s=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:s,thetaLength:r},i=Math.max(3,i);let a=[],n=[],o=[],l=[],h=new I,u=new fe;n.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,c=3;d<=i;d++,c+=3){let p=s+d/i*r;h.x=t*Math.cos(p),h.y=t*Math.sin(p),n.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(n[c]/t+1)/2,u.y=(n[c+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=i;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new qe(n,3)),this.setAttribute("normal",new qe(o,3)),this.setAttribute("uv",new qe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zu(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Br=class Ju extends pt{constructor(t=1,i=1,s=1,r=32,a=1,n=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:o,thetaLength:l};let h=this;r=Math.floor(r),a=Math.floor(a);let u=[],d=[],c=[],p=[],v=0,S=[],m=s/2,f=0;y(),n===!1&&(t>0&&b(!0),i>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new qe(d,3)),this.setAttribute("normal",new qe(c,3)),this.setAttribute("uv",new qe(p,2));function y(){let _=new I,M=new I,w=0,A=(i-t)/s;for(let g=0;g<=a;g++){let x=[],U=g/a,R=U*(i-t)+t;for(let N=0;N<=r;N++){let W=N/r,D=W*l+o,X=Math.sin(D),Q=Math.cos(D);M.x=R*X,M.y=-U*s+m,M.z=R*Q,d.push(M.x,M.y,M.z),_.set(X,A,Q).normalize(),c.push(_.x,_.y,_.z),p.push(W,1-U),x.push(v++)}S.push(x)}for(let g=0;g<r;g++)for(let x=0;x<a;x++){let U=S[x][g],R=S[x+1][g],N=S[x+1][g+1],W=S[x][g+1];(t>0||x!==0)&&(u.push(U,R,W),w+=3),(i>0||x!==a-1)&&(u.push(R,N,W),w+=3)}h.addGroup(f,w,0),f+=w}function b(_){let M=v,w=new fe,A=new I,g=0,x=_===!0?t:i,U=_===!0?1:-1;for(let N=1;N<=r;N++)d.push(0,m*U,0),c.push(0,U,0),p.push(.5,.5),v++;let R=v;for(let N=0;N<=r;N++){let W=N/r*l+o,D=Math.cos(W),X=Math.sin(W);A.x=x*X,A.y=m*U,A.z=x*D,d.push(A.x,A.y,A.z),c.push(0,U,0),w.x=D*.5+.5,w.y=X*.5*U+.5,p.push(w.x,w.y),v++}for(let N=0;N<r;N++){let W=M+N,D=R+N;_===!0?u.push(D,D+1,W):u.push(D+1,D,W),g+=3}h.addGroup(f,g,_===!0?1:2),f+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ju(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ea=class $u extends Br{constructor(t=1,i=1,s=32,r=1,a=!1,n=0,o=Math.PI*2){super(0,t,i,s,r,a,n,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:n,thetaLength:o}}static fromJSON(t){return new $u(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wa=class Ku extends pt{constructor(t=[],i=[],s=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:r};let a=[],n=[];o(r),h(s),u(),this.setAttribute("position",new qe(a,3)),this.setAttribute("normal",new qe(a.slice(),3)),this.setAttribute("uv",new qe(n,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let b=new I,_=new I,M=new I;for(let w=0;w<i.length;w+=3)p(i[w+0],b),p(i[w+1],_),p(i[w+2],M),l(b,_,M,y)}function l(y,b,_,M){let w=M+1,A=[];for(let g=0;g<=w;g++){A[g]=[];let x=y.clone().lerp(_,g/w),U=b.clone().lerp(_,g/w),R=w-g;for(let N=0;N<=R;N++)N===0&&g===w?A[g][N]=x:A[g][N]=x.clone().lerp(U,N/R)}for(let g=0;g<w;g++)for(let x=0;x<2*(w-g)-1;x++){let U=Math.floor(x/2);x%2===0?(c(A[g][U+1]),c(A[g+1][U]),c(A[g][U])):(c(A[g][U+1]),c(A[g+1][U+1]),c(A[g+1][U]))}}function h(y){let b=new I;for(let _=0;_<a.length;_+=3)b.x=a[_+0],b.y=a[_+1],b.z=a[_+2],b.normalize().multiplyScalar(y),a[_+0]=b.x,a[_+1]=b.y,a[_+2]=b.z}function u(){let y=new I;for(let b=0;b<a.length;b+=3){y.x=a[b+0],y.y=a[b+1],y.z=a[b+2];let _=m(y)/2/Math.PI+.5,M=f(y)/Math.PI+.5;n.push(_,1-M)}v(),d()}function d(){for(let y=0;y<n.length;y+=6){let b=n[y+0],_=n[y+2],M=n[y+4],w=Math.max(b,_,M),A=Math.min(b,_,M);w>.9&&A<.1&&(b<.2&&(n[y+0]+=1),_<.2&&(n[y+2]+=1),M<.2&&(n[y+4]+=1))}}function c(y){a.push(y.x,y.y,y.z)}function p(y,b){let _=y*3;b.x=t[_+0],b.y=t[_+1],b.z=t[_+2]}function v(){let y=new I,b=new I,_=new I,M=new I,w=new fe,A=new fe,g=new fe;for(let x=0,U=0;x<a.length;x+=9,U+=6){y.set(a[x+0],a[x+1],a[x+2]),b.set(a[x+3],a[x+4],a[x+5]),_.set(a[x+6],a[x+7],a[x+8]),w.set(n[U+0],n[U+1]),A.set(n[U+2],n[U+3]),g.set(n[U+4],n[U+5]),M.copy(y).add(b).add(_).divideScalar(3);let R=m(M);S(w,U+0,y,R),S(A,U+2,b,R),S(g,U+4,_,R)}}function S(y,b,_,M){M<0&&y.x===1&&(n[b]=y.x-1),_.x===0&&_.z===0&&(n[b]=M/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ku(t.vertices,t.indices,t.radius,t.detail)}},Bm=class Qu extends wa{constructor(t=1,i=0){let s=(1+Math.sqrt(5))/2,r=1/s,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-s,0,-r,s,0,r,-s,0,r,s,-r,-s,0,-r,s,0,r,-s,0,r,s,0,-s,0,-r,s,0,-r,-s,0,r,s,0,r],n=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,n,t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Qu(t.radius,t.detail)}},un=new I,dn=new I,$o=new I,pn=new ks,Fm=class extends pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(Ar*t),r=e.getIndex(),a=e.getAttribute("position"),n=r?r.count:a.count,o=[0,0,0],l=["a","b","c"],h=new Array(3),u={},d=[];for(let c=0;c<n;c+=3){r?(o[0]=r.getX(c),o[1]=r.getX(c+1),o[2]=r.getX(c+2)):(o[0]=c,o[1]=c+1,o[2]=c+2);let{a:p,b:v,c:S}=pn;if(p.fromBufferAttribute(a,o[0]),v.fromBufferAttribute(a,o[1]),S.fromBufferAttribute(a,o[2]),pn.getNormal($o),h[0]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[1]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,h[2]=`${Math.round(S.x*i)},${Math.round(S.y*i)},${Math.round(S.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let m=0;m<3;m++){let f=(m+1)%3,y=h[m],b=h[f],_=pn[l[m]],M=pn[l[f]],w=`${y}_${b}`,A=`${b}_${y}`;A in u&&u[A]?($o.dot(u[A].normal)<=s&&(d.push(_.x,_.y,_.z),d.push(M.x,M.y,M.z)),u[A]=null):w in u||(u[w]={index0:o[m],index1:o[f],normal:$o.clone()})}}for(let c in u)if(u[c]){let{index0:p,index1:v}=u[c];un.fromBufferAttribute(a,p),dn.fromBufferAttribute(a,v),d.push(un.x,un.y,un.z),d.push(dn.x,dn.y,dn.z)}this.setAttribute("position",new qe(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Qi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let n=0,o=r-1,l;for(;n<=o;)if(s=Math.floor(n+(o-n)/2),l=i[s]-a,l<0)n=s+1;else if(l>0)o=s-1;else{o=s;break}if(s=o,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let r=this.getPoint(i),a=this.getPoint(s),n=t||(r.isVector2?new fe:new I);return n.copy(a).sub(r).normalize(),n}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new I,s=[],r=[],a=[],n=new I,o=new at;for(let c=0;c<=e;c++){let p=c/e;s[c]=this.getTangentAt(p,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),n.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],n),a[0].crossVectors(s[0],r[0]);for(let c=1;c<=e;c++){if(r[c]=r[c-1].clone(),a[c]=a[c-1].clone(),n.crossVectors(s[c-1],s[c]),n.length()>Number.EPSILON){n.normalize();let p=Math.acos(rt(s[c-1].dot(s[c]),-1,1));r[c].applyMatrix4(o.makeRotationAxis(n,p))}a[c].crossVectors(s[c],r[c])}if(t===!0){let c=Math.acos(rt(r[0].dot(r[e]),-1,1));c/=e,s[0].dot(n.crossVectors(r[0],r[e]))>0&&(c=-c);for(let p=1;p<=e;p++)r[p].applyMatrix4(o.makeRotationAxis(s[p],c*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ph=class extends Qi{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,n=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=n,this.aRotation=o}getPoint(e,t=new fe){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let n=this.aStartAngle+e*r,o=this.aX+this.xRadius*Math.cos(n),l=this.aY+this.yRadius*Math.sin(n);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=o-this.aX,c=l-this.aY;o=d*h-c*u+this.aX,l=d*u+c*h+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},zm=class extends ph{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function fh(){let e=0,t=0,i=0,s=0;function r(a,n,o,l){e=a,t=o,i=-3*a+3*n-2*o-l,s=2*a-2*n+o+l}return{initCatmullRom:function(a,n,o,l,h){r(n,o,h*(o-a),h*(l-n))},initNonuniformCatmullRom:function(a,n,o,l,h,u,d){let c=(n-a)/h-(o-a)/(h+u)+(o-n)/u,p=(o-n)/u-(l-n)/(u+d)+(l-o)/d;c*=u,p*=u,r(n,o,c,p)},calc:function(a){let n=a*a,o=n*a;return e+t*a+i*n+s*o}}}var Cc=new I,Pc=new I,Ko=new fh,Qo=new fh,el=new fh,km=class extends Qi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,n=Math.floor(a),o=a-n;this.closed?n+=n>0?0:(Math.floor(Math.abs(n)/r)+1)*r:o===0&&n===r-1&&(n=r-2,o=1);let l,h;this.closed||n>0?l=s[(n-1)%r]:(Pc.subVectors(s[0],s[1]).add(s[0]),l=Pc);let u=s[n%r],d=s[(n+1)%r];if(this.closed||n+2<r?h=s[(n+2)%r]:(Cc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Cc),this.curveType==="centripetal"||this.curveType==="chordal"){let c=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),c),v=Math.pow(u.distanceToSquared(d),c),S=Math.pow(d.distanceToSquared(h),c);v<1e-4&&(v=1),p<1e-4&&(p=v),S<1e-4&&(S=v),Ko.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,v,S),Qo.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,v,S),el.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,v,S)}else this.curveType==="catmullrom"&&(Ko.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Qo.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),el.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Ko.calc(o),Qo.calc(o),el.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ic(e,t,i,s,r){let a=(s-t)*.5,n=(r-i)*.5,o=e*e,l=e*o;return(2*i-2*s+a+n)*l+(-3*i+3*s-2*a-n)*o+a*e+i}function Hm(e,t){let i=1-e;return i*i*t}function Gm(e,t){return 2*(1-e)*e*t}function Vm(e,t){return e*e*t}function pa(e,t,i,s){return Hm(e,t)+Gm(e,i)+Vm(e,s)}function Wm(e,t){let i=1-e;return i*i*i*t}function jm(e,t){let i=1-e;return 3*i*i*e*t}function Xm(e,t){return 3*(1-e)*e*e*t}function qm(e,t){return e*e*e*t}function fa(e,t,i,s,r){return Wm(e,t)+jm(e,i)+Xm(e,s)+qm(e,r)}var ed=class extends Qi{constructor(e=new fe,t=new fe,i=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new fe){let i=t,s=this.v0,r=this.v1,a=this.v2,n=this.v3;return i.set(fa(e,s.x,r.x,a.x,n.x),fa(e,s.y,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ym=class extends Qi{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,a=this.v2,n=this.v3;return i.set(fa(e,s.x,r.x,a.x,n.x),fa(e,s.y,r.y,a.y,n.y),fa(e,s.z,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},td=class extends Qi{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zm=class extends Qi{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},id=class extends Qi{constructor(e=new fe,t=new fe,i=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new fe){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(pa(e,s.x,r.x,a.x),pa(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sd=class extends Qi{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(pa(e,s.x,r.x,a.x),pa(e,s.y,r.y,a.y),pa(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rd=class extends Qi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),n=r-a,o=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Ic(n,o.x,l.x,h.x,u.x),Ic(n,o.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new fe().fromArray(s))}return this}},Un=Object.freeze({__proto__:null,ArcCurve:zm,CatmullRomCurve3:km,CubicBezierCurve:ed,CubicBezierCurve3:Ym,EllipseCurve:ph,LineCurve:td,LineCurve3:Zm,QuadraticBezierCurve:id,QuadraticBezierCurve3:sd,SplineCurve:rd}),Jm=class extends Qi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Un[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,n=this.curves[r],o=n.getLength(),l=o===0?0:1-a/o;return n.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],n=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,o=a.getPoints(n);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Un[s.type]().fromJSON(s))}return this}},Lc=class extends Jm{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new td(this.currentPoint.clone(),new fe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new id(this.currentPoint.clone(),new fe(e,t),new fe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let n=new ed(this.currentPoint.clone(),new fe(e,t),new fe(i,s),new fe(r,a));return this.curves.push(n),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new rd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let n=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+n,t+o,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,n,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,a,n,o),this}absellipse(e,t,i,s,r,a,n,o){let l=new ph(e,t,i,s,r,a,n,o);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Fr=class extends Lc{constructor(e){super(e),this.uuid=Zi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Lc().fromJSON(s))}return this}};function $m(e,t,i=2){let s=t&&t.length,r=s?t[0]*i:e.length,a=ad(e,0,r,i,!0),n=[];if(!a||a.next===a.prev)return n;let o,l,h;if(s&&(a=ig(e,t,a,i)),e.length>80*i){o=e[0],l=e[1];let u=o,d=l;for(let c=i;c<r;c+=i){let p=e[c],v=e[c+1];p<o&&(o=p),v<l&&(l=v),p>u&&(u=p),v>d&&(d=v)}h=Math.max(u-o,d-l),h=h!==0?32767/h:0}return Sa(a,n,i,o,l,h,0),n}function ad(e,t,i,s,r){let a;if(r===pg(e,t,i,s)>0)for(let n=t;n<i;n+=s)a=Nc(n/s|0,e[n],e[n+1],a);else for(let n=i-s;n>=t;n-=s)a=Nc(n/s|0,e[n],e[n+1],a);return a&&Nr(a,a.next)&&(ba(a),a=a.next),a}function Xs(e,t){if(!e)return e;t||(t=e);let i=e,s;do if(s=!1,!i.steiner&&(Nr(i,i.next)||Ct(i.prev,i,i.next)===0)){if(ba(i),i=t=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==t);return t}function Sa(e,t,i,s,r,a,n){if(!e)return;!n&&a&&og(e,s,r,a);let o=e;for(;e.prev!==e.next;){let l=e.prev,h=e.next;if(a?Qm(e,s,r,a):Km(e)){t.push(l.i,e.i,h.i),ba(e),e=h.next,o=h.next;continue}if(e=h,e===o){n?n===1?(e=eg(Xs(e),t),Sa(e,t,i,s,r,a,2)):n===2&&tg(e,t,i,s,r,a):Sa(Xs(e),t,i,s,r,a,1);break}}}function Km(e){let t=e.prev,i=e,s=e.next;if(Ct(t,i,s)>=0)return!1;let r=t.x,a=i.x,n=s.x,o=t.y,l=i.y,h=s.y,u=Math.min(r,a,n),d=Math.min(o,l,h),c=Math.max(r,a,n),p=Math.max(o,l,h),v=s.next;for(;v!==t;){if(v.x>=u&&v.x<=c&&v.y>=d&&v.y<=p&&ha(r,o,a,l,n,h,v.x,v.y)&&Ct(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function Qm(e,t,i,s){let r=e.prev,a=e,n=e.next;if(Ct(r,a,n)>=0)return!1;let o=r.x,l=a.x,h=n.x,u=r.y,d=a.y,c=n.y,p=Math.min(o,l,h),v=Math.min(u,d,c),S=Math.max(o,l,h),m=Math.max(u,d,c),f=Jl(p,v,t,i,s),y=Jl(S,m,t,i,s),b=e.prevZ,_=e.nextZ;for(;b&&b.z>=f&&_&&_.z<=y;){if(b.x>=p&&b.x<=S&&b.y>=v&&b.y<=m&&b!==r&&b!==n&&ha(o,u,l,d,h,c,b.x,b.y)&&Ct(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=p&&_.x<=S&&_.y>=v&&_.y<=m&&_!==r&&_!==n&&ha(o,u,l,d,h,c,_.x,_.y)&&Ct(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=f;){if(b.x>=p&&b.x<=S&&b.y>=v&&b.y<=m&&b!==r&&b!==n&&ha(o,u,l,d,h,c,b.x,b.y)&&Ct(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=y;){if(_.x>=p&&_.x<=S&&_.y>=v&&_.y<=m&&_!==r&&_!==n&&ha(o,u,l,d,h,c,_.x,_.y)&&Ct(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function eg(e,t){let i=e;do{let s=i.prev,r=i.next.next;!Nr(s,r)&&od(s,i,i.next,r)&&Ma(s,r)&&Ma(r,s)&&(t.push(s.i,i.i,r.i),ba(i),ba(i.next),i=e=r),i=i.next}while(i!==e);return Xs(i)}function tg(e,t,i,s,r,a){let n=e;do{let o=n.next.next;for(;o!==n.prev;){if(n.i!==o.i&&cg(n,o)){let l=ld(n,o);n=Xs(n,n.next),l=Xs(l,l.next),Sa(n,t,i,s,r,a,0),Sa(l,t,i,s,r,a,0);return}o=o.next}n=n.next}while(n!==e)}function ig(e,t,i,s){let r=[];for(let a=0,n=t.length;a<n;a++){let o=t[a]*s,l=a<n-1?t[a+1]*s:e.length,h=ad(e,o,l,s,!1);h===h.next&&(h.steiner=!0),r.push(hg(h))}r.sort(sg);for(let a=0;a<r.length;a++)i=rg(r[a],i);return i}function sg(e,t){let i=e.x-t.x;if(i===0&&(i=e.y-t.y,i===0)){let s=(e.next.y-e.y)/(e.next.x-e.x),r=(t.next.y-t.y)/(t.next.x-t.x);i=s-r}return i}function rg(e,t){let i=ag(e,t);if(!i)return t;let s=ld(i,e);return Xs(s,s.next),Xs(i,i.next)}function ag(e,t){let i=t,s=e.x,r=e.y,a=-1/0,n;if(Nr(e,i))return i;do{if(Nr(e,i.next))return i.next;if(r<=i.y&&r>=i.next.y&&i.next.y!==i.y){let d=i.x+(r-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=s&&d>a&&(a=d,n=i.x<i.next.x?i:i.next,d===s))return n}i=i.next}while(i!==t);if(!n)return null;let o=n,l=n.x,h=n.y,u=1/0;i=n;do{if(s>=i.x&&i.x>=l&&s!==i.x&&nd(r<h?s:a,r,l,h,r<h?a:s,r,i.x,i.y)){let d=Math.abs(r-i.y)/(s-i.x);Ma(i,e)&&(d<u||d===u&&(i.x>n.x||i.x===n.x&&ng(n,i)))&&(n=i,u=d)}i=i.next}while(i!==o);return n}function ng(e,t){return Ct(e.prev,e,t.prev)<0&&Ct(t.next,e,e.next)<0}function og(e,t,i,s){let r=e;do r.z===0&&(r.z=Jl(r.x,r.y,t,i,s)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,lg(r)}function lg(e){let t,i=1;do{let s=e,r;e=null;let a=null;for(t=0;s;){t++;let n=s,o=0;for(let h=0;h<i&&(o++,n=n.nextZ,!!n);h++);let l=i;for(;o>0||l>0&&n;)o!==0&&(l===0||!n||s.z<=n.z)?(r=s,s=s.nextZ,o--):(r=n,n=n.nextZ,l--),a?a.nextZ=r:e=r,r.prevZ=a,a=r;s=n}a.nextZ=null,i*=2}while(t>1);return e}function Jl(e,t,i,s,r){return e=(e-i)*r|0,t=(t-s)*r|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function hg(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function nd(e,t,i,s,r,a,n,o){return(r-n)*(t-o)>=(e-n)*(a-o)&&(e-n)*(s-o)>=(i-n)*(t-o)&&(i-n)*(a-o)>=(r-n)*(s-o)}function ha(e,t,i,s,r,a,n,o){return!(e===n&&t===o)&&nd(e,t,i,s,r,a,n,o)}function cg(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!ug(e,t)&&(Ma(e,t)&&Ma(t,e)&&dg(e,t)&&(Ct(e.prev,e,t.prev)||Ct(e,t.prev,t))||Nr(e,t)&&Ct(e.prev,e,e.next)>0&&Ct(t.prev,t,t.next)>0)}function Ct(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Nr(e,t){return e.x===t.x&&e.y===t.y}function od(e,t,i,s){let r=mn(Ct(e,t,i)),a=mn(Ct(e,t,s)),n=mn(Ct(i,s,e)),o=mn(Ct(i,s,t));return!!(r!==a&&n!==o||r===0&&fn(e,i,t)||a===0&&fn(e,s,t)||n===0&&fn(i,e,s)||o===0&&fn(i,t,s))}function fn(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function mn(e){return e>0?1:e<0?-1:0}function ug(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&od(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Ma(e,t){return Ct(e.prev,e,e.next)<0?Ct(e,t,e.next)>=0&&Ct(e,e.prev,t)>=0:Ct(e,t,e.prev)<0||Ct(e,e.next,t)<0}function dg(e,t){let i=e,s=!1,r=(e.x+t.x)/2,a=(e.y+t.y)/2;do i.y>a!=i.next.y>a&&i.next.y!==i.y&&r<(i.next.x-i.x)*(a-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==e);return s}function ld(e,t){let i=$l(e.i,e.x,e.y),s=$l(t.i,t.x,t.y),r=e.next,a=t.prev;return e.next=t,t.prev=e,i.next=r,r.prev=i,s.next=i,i.prev=s,a.next=s,s.prev=a,s}function Nc(e,t,i,s){let r=$l(e,t,i);return s?(r.next=s.next,r.prev=s,s.next.prev=r,s.next=r):(r.prev=r,r.next=r),r}function ba(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function $l(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pg(e,t,i,s){let r=0;for(let a=t,n=i-s;a<i;a+=s)r+=(e[n]-e[a])*(e[a+1]+e[n+1]),n=a;return r}var fg=class{static triangulate(e,t,i=2){return $m(e,t,i)}},Vs=class hd{static area(t){let i=t.length,s=0;for(let r=i-1,a=0;a<i;r=a++)s+=t[r].x*t[a].y-t[a].x*t[r].y;return s*.5}static isClockWise(t){return hd.area(t)<0}static triangulateShape(t,i){let s=[],r=[],a=[];Uc(t),Dc(s,t);let n=t.length;i.forEach(Uc);for(let l=0;l<i.length;l++)r.push(n),n+=i[l].length,Dc(s,i[l]);let o=fg.triangulate(s,r);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function Uc(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Dc(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var Aa=class cd extends pt{constructor(t=new Fr([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let s=this,r=[],a=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];n(h)}this.setAttribute("position",new qe(r,3)),this.setAttribute("uv",new qe(a,2)),this.computeVertexNormals();function n(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,u=i.steps!==void 0?i.steps:1,d=i.depth!==void 0?i.depth:1,c=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:.2,v=i.bevelSize!==void 0?i.bevelSize:p-.1,S=i.bevelOffset!==void 0?i.bevelOffset:0,m=i.bevelSegments!==void 0?i.bevelSegments:3,f=i.extrudePath,y=i.UVGenerator!==void 0?i.UVGenerator:mg,b,_=!1,M,w,A,g;if(f){b=f.getSpacedPoints(u),_=!0,c=!1;let he=f.isCatmullRomCurve3?f.closed:!1;M=f.computeFrenetFrames(u,he),w=new I,A=new I,g=new I}c||(m=0,p=0,v=0,S=0);let x=o.extractPoints(h),U=x.shape,R=x.holes;if(!Vs.isClockWise(U)){U=U.reverse();for(let he=0,le=R.length;he<le;he++){let me=R[he];Vs.isClockWise(me)&&(R[he]=me.reverse())}}function N(he){let le=10000000000000001e-36,me=he[0];for(let Re=1;Re<=he.length;Re++){let Pe=Re%he.length,Ue=he[Pe],He=Ue.x-me.x,Ye=Ue.y-me.y,Ke=He*He+Ye*Ye,z=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(me.x),Math.abs(me.y)),mt=le*z*z;if(Ke<=mt){he.splice(Pe,1),Re--;continue}me=Ue}}N(U),R.forEach(N);let W=R.length,D=U;for(let he=0;he<W;he++){let le=R[he];U=U.concat(le)}function X(he,le,me){return le||je("ExtrudeGeometry: vec does not exist"),he.clone().addScaledVector(le,me)}let Q=U.length;function Z(he,le,me){let Re,Pe,Ue,He=he.x-le.x,Ye=he.y-le.y,Ke=me.x-he.x,z=me.y-he.y,mt=He*He+Ye*Ye,et=He*z-Ye*Ke;if(Math.abs(et)>Number.EPSILON){let st=Math.sqrt(mt),P=Math.sqrt(Ke*Ke+z*z),T=le.x-Ye/st,H=le.y+He/st,J=me.x-z/P,L=me.y+Ke/P,O=((J-T)*z-(L-H)*Ke)/(He*z-Ye*Ke);Re=T+He*O-he.x,Pe=H+Ye*O-he.y;let B=Re*Re+Pe*Pe;if(B<=2)return new fe(Re,Pe);Ue=Math.sqrt(B/2)}else{let st=!1;He>Number.EPSILON?Ke>Number.EPSILON&&(st=!0):He<-Number.EPSILON?Ke<-Number.EPSILON&&(st=!0):Math.sign(Ye)===Math.sign(z)&&(st=!0),st?(Re=-Ye,Pe=He,Ue=Math.sqrt(mt)):(Re=He,Pe=Ye,Ue=Math.sqrt(mt/2))}return new fe(Re/Ue,Pe/Ue)}let _e=[];for(let he=0,le=D.length,me=le-1,Re=he+1;he<le;he++,me++,Re++)me===le&&(me=0),Re===le&&(Re=0),_e[he]=Z(D[he],D[me],D[Re]);let ee=[],se,de=_e.concat();for(let he=0,le=W;he<le;he++){let me=R[he];se=[];for(let Re=0,Pe=me.length,Ue=Pe-1,He=Re+1;Re<Pe;Re++,Ue++,He++)Ue===Pe&&(Ue=0),He===Pe&&(He=0),se[Re]=Z(me[Re],me[Ue],me[He]);ee.push(se),de=de.concat(se)}let Ve;if(m===0)Ve=Vs.triangulateShape(D,R);else{let he=[],le=[];for(let me=0;me<m;me++){let Re=me/m,Pe=p*Math.cos(Re*Math.PI/2),Ue=v*Math.sin(Re*Math.PI/2)+S;for(let He=0,Ye=D.length;He<Ye;He++){let Ke=X(D[He],_e[He],Ue);ge(Ke.x,Ke.y,-Pe),Re===0&&he.push(Ke)}for(let He=0,Ye=W;He<Ye;He++){let Ke=R[He];se=ee[He];let z=[];for(let mt=0,et=Ke.length;mt<et;mt++){let st=X(Ke[mt],se[mt],Ue);ge(st.x,st.y,-Pe),Re===0&&z.push(st)}Re===0&&le.push(z)}}Ve=Vs.triangulateShape(he,le)}let De=Ve.length,ft=v+S;for(let he=0;he<Q;he++){let le=c?X(U[he],de[he],ft):U[he];_?(A.copy(M.normals[0]).multiplyScalar(le.x),w.copy(M.binormals[0]).multiplyScalar(le.y),g.copy(b[0]).add(A).add(w),ge(g.x,g.y,g.z)):ge(le.x,le.y,0)}for(let he=1;he<=u;he++)for(let le=0;le<Q;le++){let me=c?X(U[le],de[le],ft):U[le];_?(A.copy(M.normals[he]).multiplyScalar(me.x),w.copy(M.binormals[he]).multiplyScalar(me.y),g.copy(b[he]).add(A).add(w),ge(g.x,g.y,g.z)):ge(me.x,me.y,d/u*he)}for(let he=m-1;he>=0;he--){let le=he/m,me=p*Math.cos(le*Math.PI/2),Re=v*Math.sin(le*Math.PI/2)+S;for(let Pe=0,Ue=D.length;Pe<Ue;Pe++){let He=X(D[Pe],_e[Pe],Re);ge(He.x,He.y,d+me)}for(let Pe=0,Ue=R.length;Pe<Ue;Pe++){let He=R[Pe];se=ee[Pe];for(let Ye=0,Ke=He.length;Ye<Ke;Ye++){let z=X(He[Ye],se[Ye],Re);_?ge(z.x,z.y+b[u-1].y,b[u-1].x+me):ge(z.x,z.y,d+me)}}}$e(),te();function $e(){let he=r.length/3;if(c){let le=0,me=Q*le;for(let Re=0;Re<De;Re++){let Pe=Ve[Re];ze(Pe[2]+me,Pe[1]+me,Pe[0]+me)}le=u+m*2,me=Q*le;for(let Re=0;Re<De;Re++){let Pe=Ve[Re];ze(Pe[0]+me,Pe[1]+me,Pe[2]+me)}}else{for(let le=0;le<De;le++){let me=Ve[le];ze(me[2],me[1],me[0])}for(let le=0;le<De;le++){let me=Ve[le];ze(me[0]+Q*u,me[1]+Q*u,me[2]+Q*u)}}s.addGroup(he,r.length/3-he,0)}function te(){let he=r.length/3,le=0;ce(D,le),le+=D.length;for(let me=0,Re=R.length;me<Re;me++){let Pe=R[me];ce(Pe,le),le+=Pe.length}s.addGroup(he,r.length/3-he,1)}function ce(he,le){let me=he.length;for(;--me>=0;){let Re=me,Pe=me-1;Pe<0&&(Pe=he.length-1);for(let Ue=0,He=u+m*2;Ue<He;Ue++){let Ye=Q*Ue,Ke=Q*(Ue+1),z=le+Re+Ye,mt=le+Pe+Ye,et=le+Pe+Ke,st=le+Re+Ke;Ie(z,mt,et,st)}}}function ge(he,le,me){l.push(he),l.push(le),l.push(me)}function ze(he,le,me){be(he),be(le),be(me);let Re=r.length/3,Pe=y.generateTopUV(s,r,Re-3,Re-2,Re-1);tt(Pe[0]),tt(Pe[1]),tt(Pe[2])}function Ie(he,le,me,Re){be(he),be(le),be(Re),be(le),be(me),be(Re);let Pe=r.length/3,Ue=y.generateSideWallUV(s,r,Pe-6,Pe-3,Pe-2,Pe-1);tt(Ue[0]),tt(Ue[1]),tt(Ue[3]),tt(Ue[1]),tt(Ue[2]),tt(Ue[3])}function be(he){r.push(l[he*3+0]),r.push(l[he*3+1]),r.push(l[he*3+2])}function tt(he){a.push(he.x),a.push(he.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,s=this.parameters.options;return gg(i,s,t)}static fromJSON(t,i){let s=[];for(let a=0,n=t.shapes.length;a<n;a++){let o=i[t.shapes[a]];s.push(o)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Un[r.type]().fromJSON(r)),new cd(s,t.options)}},mg={generateTopUV:function(e,t,i,s,r){let a=t[i*3],n=t[i*3+1],o=t[s*3],l=t[s*3+1],h=t[r*3],u=t[r*3+1];return[new fe(a,n),new fe(o,l),new fe(h,u)]},generateSideWallUV:function(e,t,i,s,r,a){let n=t[i*3],o=t[i*3+1],l=t[i*3+2],h=t[s*3],u=t[s*3+1],d=t[s*3+2],c=t[r*3],p=t[r*3+1],v=t[r*3+2],S=t[a*3],m=t[a*3+1],f=t[a*3+2];return Math.abs(o-u)<Math.abs(n-h)?[new fe(n,1-l),new fe(h,1-d),new fe(c,1-v),new fe(S,1-f)]:[new fe(o,1-l),new fe(u,1-d),new fe(p,1-v),new fe(m,1-f)]}};function gg(e,t,i){if(i.shapes=[],Array.isArray(e))for(let s=0,r=e.length;s<r;s++){let a=e[s];i.shapes.push(a.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var mh=class ud extends wa{constructor(t=1,i=0){let s=(1+Math.sqrt(5))/2,r=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,a,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new ud(t.radius,t.detail)}},gh=class dd extends pt{constructor(t=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],i=12,s=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:s,phiLength:r},i=Math.floor(i),r=rt(r,0,Math.PI*2);let a=[],n=[],o=[],l=[],h=[],u=1/i,d=new I,c=new fe,p=new I,v=new I,S=new I,m=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,S.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(S.x,S.y,S.z);break;default:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,p.x=f*1,p.y=-m,p.z=f*0,v.copy(p),p.x+=S.x,p.y+=S.y,p.z+=S.z,p.normalize(),l.push(p.x,p.y,p.z),S.copy(v)}for(let y=0;y<=i;y++){let b=s+y*u*r,_=Math.sin(b),M=Math.cos(b);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*_,d.y=t[w].y,d.z=t[w].x*M,n.push(d.x,d.y,d.z),c.x=y/i,c.y=w/(t.length-1),o.push(c.x,c.y);let A=l[3*w+0]*_,g=l[3*w+1],x=l[3*w+0]*M;h.push(A,g,x)}}for(let y=0;y<i;y++)for(let b=0;b<t.length-1;b++){let _=b+y*t.length,M=_,w=_+t.length,A=_+t.length+1,g=_+1;a.push(M,w,g),a.push(A,g,w)}this.setIndex(a),this.setAttribute("position",new qe(n,3)),this.setAttribute("uv",new qe(o,2)),this.setAttribute("normal",new qe(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dd(t.points,t.segments,t.phiStart,t.phiLength)}},vg=class pd extends wa{constructor(t=1,i=0){let s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,r,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new pd(t.radius,t.detail)}},Cs=class fd extends pt{constructor(t=1,i=1,s=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:r};let a=t/2,n=i/2,o=Math.floor(s),l=Math.floor(r),h=o+1,u=l+1,d=t/o,c=i/l,p=[],v=[],S=[],m=[];for(let f=0;f<u;f++){let y=f*c-n;for(let b=0;b<h;b++){let _=b*d-a;v.push(_,-y,0),S.push(0,0,1),m.push(b/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){let b=y+h*f,_=y+h*(f+1),M=y+1+h*(f+1),w=y+1+h*f;p.push(b,_,w),p.push(_,M,w)}this.setIndex(p),this.setAttribute("position",new qe(v,3)),this.setAttribute("normal",new qe(S,3)),this.setAttribute("uv",new qe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fd(t.width,t.height,t.widthSegments,t.heightSegments)}},Bn=class md extends pt{constructor(t=.5,i=1,s=32,r=1,a=0,n=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:r,thetaStart:a,thetaLength:n},s=Math.max(3,s),r=Math.max(1,r);let o=[],l=[],h=[],u=[],d=t,c=(i-t)/r,p=new I,v=new fe;for(let S=0;S<=r;S++){for(let m=0;m<=s;m++){let f=a+m/s*n;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),h.push(0,0,1),v.x=(p.x/i+1)/2,v.y=(p.y/i+1)/2,u.push(v.x,v.y)}d+=c}for(let S=0;S<r;S++){let m=S*(s+1);for(let f=0;f<s;f++){let y=f+m,b=y,_=y+s+1,M=y+s+2,w=y+1;o.push(b,_,w),o.push(_,M,w)}}this.setIndex(o),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new md(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},yg=class gd extends pt{constructor(t=new Fr([new fe(0,.5),new fe(-.5,-.5),new fe(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let s=[],r=[],a=[],n=[],o=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let u=0;u<t.length;u++)h(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(s),this.setAttribute("position",new qe(r,3)),this.setAttribute("normal",new qe(a,3)),this.setAttribute("uv",new qe(n,2));function h(u){let d=r.length/3,c=u.extractPoints(i),p=c.shape,v=c.holes;Vs.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=v.length;m<f;m++){let y=v[m];Vs.isClockWise(y)===!0&&(v[m]=y.reverse())}let S=Vs.triangulateShape(p,v);for(let m=0,f=v.length;m<f;m++){let y=v[m];p=p.concat(y)}for(let m=0,f=p.length;m<f;m++){let y=p[m];r.push(y.x,y.y,0),a.push(0,0,1),n.push(y.x,y.y)}for(let m=0,f=S.length;m<f;m++){let y=S[m],b=y[0]+d,_=y[1]+d,M=y[2]+d;s.push(b,_,M),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return _g(i,t)}static fromJSON(t,i){let s=[];for(let r=0,a=t.shapes.length;r<a;r++){let n=i[t.shapes[r]];s.push(n)}return new gd(s,t.curveSegments)}};function _g(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,s=e.length;i<s;i++){let r=e[i];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var $t=class vd extends pt{constructor(t=1,i=32,s=16,r=0,a=Math.PI*2,n=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:r,phiLength:a,thetaStart:n,thetaLength:o},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));let l=Math.min(n+o,Math.PI),h=0,u=[],d=new I,c=new I,p=[],v=[],S=[],m=[];for(let f=0;f<=s;f++){let y=[],b=f/s,_=n+b*o,M=t*Math.cos(_),w=Math.sqrt(t*t-M*M),A=0;f===0&&n===0?A=.5/i:f===s&&l===Math.PI&&(A=-.5/i);for(let g=0;g<=i;g++){let x=g/i,U=r+x*a;d.x=-w*Math.cos(U),d.y=M,d.z=w*Math.sin(U),v.push(d.x,d.y,d.z),c.copy(d).normalize(),S.push(c.x,c.y,c.z),m.push(x+A,1-b),y.push(h++)}u.push(y)}for(let f=0;f<s;f++)for(let y=0;y<i;y++){let b=u[f][y+1],_=u[f][y],M=u[f+1][y],w=u[f+1][y+1];(f!==0||n>0)&&p.push(b,_,w),(f!==s-1||l<Math.PI)&&p.push(_,M,w)}this.setIndex(p),this.setAttribute("position",new qe(v,3)),this.setAttribute("normal",new qe(S,3)),this.setAttribute("uv",new qe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vd(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},xg=class yd extends wa{constructor(t=1,i=0){let s=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(s,r,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new yd(t.radius,t.detail)}},vh=class _d extends pt{constructor(t=1,i=.4,s=12,r=48,a=Math.PI*2,n=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:r,arc:a,thetaStart:n,thetaLength:o},s=Math.floor(s),r=Math.floor(r);let l=[],h=[],u=[],d=[],c=new I,p=new I,v=new I;for(let S=0;S<=s;S++){let m=n+S/s*o;for(let f=0;f<=r;f++){let y=f/r*a;p.x=(t+i*Math.cos(m))*Math.cos(y),p.y=(t+i*Math.cos(m))*Math.sin(y),p.z=i*Math.sin(m),h.push(p.x,p.y,p.z),c.x=t*Math.cos(y),c.y=t*Math.sin(y),v.subVectors(p,c).normalize(),u.push(v.x,v.y,v.z),d.push(f/r),d.push(S/s)}}for(let S=1;S<=s;S++)for(let m=1;m<=r;m++){let f=(r+1)*S+m-1,y=(r+1)*(S-1)+m-1,b=(r+1)*(S-1)+m,_=(r+1)*S+m;l.push(f,y,_),l.push(y,b,_)}this.setIndex(l),this.setAttribute("position",new qe(h,3)),this.setAttribute("normal",new qe(u,3)),this.setAttribute("uv",new qe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _d(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Sg=class xd extends pt{constructor(t=1,i=.4,s=64,r=8,a=2,n=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:s,radialSegments:r,p:a,q:n},s=Math.floor(s),r=Math.floor(r);let o=[],l=[],h=[],u=[],d=new I,c=new I,p=new I,v=new I,S=new I,m=new I,f=new I;for(let b=0;b<=s;++b){let _=b/s*a*Math.PI*2;y(_,a,n,t,p),y(_+.01,a,n,t,v),m.subVectors(v,p),f.addVectors(v,p),S.crossVectors(m,f),f.crossVectors(S,m),S.normalize(),f.normalize();for(let M=0;M<=r;++M){let w=M/r*Math.PI*2,A=-i*Math.cos(w),g=i*Math.sin(w);d.x=p.x+(A*f.x+g*S.x),d.y=p.y+(A*f.y+g*S.y),d.z=p.z+(A*f.z+g*S.z),l.push(d.x,d.y,d.z),c.subVectors(d,p).normalize(),h.push(c.x,c.y,c.z),u.push(b/s),u.push(M/r)}}for(let b=1;b<=s;b++)for(let _=1;_<=r;_++){let M=(r+1)*(b-1)+(_-1),w=(r+1)*b+(_-1),A=(r+1)*b+_,g=(r+1)*(b-1)+_;o.push(M,w,g),o.push(w,A,g)}this.setIndex(o),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(u,2));function y(b,_,M,w,A){let g=Math.cos(b),x=Math.sin(b),U=M/_*b,R=Math.cos(U);A.x=w*(2+R)*.5*g,A.y=w*(2+R)*x*.5,A.z=w*Math.sin(U)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xd(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Mg=class Sd extends pt{constructor(t=new sd(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),i=64,s=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:r,closed:a};let n=t.computeFrenetFrames(i,a);this.tangents=n.tangents,this.normals=n.normals,this.binormals=n.binormals;let o=new I,l=new I,h=new fe,u=new I,d=[],c=[],p=[],v=[];S(),this.setIndex(v),this.setAttribute("position",new qe(d,3)),this.setAttribute("normal",new qe(c,3)),this.setAttribute("uv",new qe(p,2));function S(){for(let b=0;b<i;b++)m(b);m(a===!1?i:0),y(),f()}function m(b){u=t.getPointAt(b/i,u);let _=n.normals[b],M=n.binormals[b];for(let w=0;w<=r;w++){let A=w/r*Math.PI*2,g=Math.sin(A),x=-Math.cos(A);l.x=x*_.x+g*M.x,l.y=x*_.y+g*M.y,l.z=x*_.z+g*M.z,l.normalize(),c.push(l.x,l.y,l.z),o.x=u.x+s*l.x,o.y=u.y+s*l.y,o.z=u.z+s*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let b=1;b<=i;b++)for(let _=1;_<=r;_++){let M=(r+1)*(b-1)+(_-1),w=(r+1)*b+(_-1),A=(r+1)*b+_,g=(r+1)*(b-1)+_;v.push(M,w,g),v.push(w,A,g)}}function y(){for(let b=0;b<=i;b++)for(let _=0;_<=r;_++)h.x=b/i,h.y=_/r,p.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Sd(new Un[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},bg=class extends pt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new I,r=new I;if(e.index!==null){let a=e.attributes.position,n=e.index,o=e.groups;o.length===0&&(o=[{start:0,count:n.count,materialIndex:0}]);for(let l=0,h=o.length;l<h;++l){let u=o[l],d=u.start,c=u.count;for(let p=d,v=d+c;p<v;p+=3)for(let S=0;S<3;S++){let m=n.getX(p+S),f=n.getX(p+(S+1)%3);s.fromBufferAttribute(a,m),r.fromBufferAttribute(a,f),Oc(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let n=0,o=a.count/3;n<o;n++)for(let l=0;l<3;l++){let h=3*n+l,u=3*n+(l+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Oc(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new qe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Oc(e,t,i){let s=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return i.has(s)===!0||i.has(r)===!0?!1:(i.add(s),i.add(r),!0)}var iS=Object.freeze({__proto__:null,BoxGeometry:Rs,CapsuleGeometry:dh,CircleGeometry:Om,ConeGeometry:Ea,CylinderGeometry:Br,DodecahedronGeometry:Bm,EdgesGeometry:Fm,ExtrudeGeometry:Aa,IcosahedronGeometry:mh,LatheGeometry:gh,OctahedronGeometry:vg,PlaneGeometry:Cs,PolyhedronGeometry:wa,RingGeometry:Bn,ShapeGeometry:yg,SphereGeometry:$t,TetrahedronGeometry:xg,TorusGeometry:vh,TorusKnotGeometry:Sg,TubeGeometry:Mg,WireframeGeometry:bg});function Ur(e){let t={};for(let i in e){t[i]={};for(let s in e[i]){let r=e[i][s];if(Bc(r))r.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=r.clone();else if(Array.isArray(r))if(Bc(r[0])){let a=[];for(let n=0,o=r.length;n<o;n++)a[n]=r[n].clone();t[i][s]=a}else t[i][s]=r.slice();else t[i][s]=r}}return t}function ci(e){let t={};for(let i=0;i<e.length;i++){let s=Ur(e[i]);for(let r in s)t[r]=s[r]}return t}function Bc(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Tg(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Md(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ht.workingColorSpace}var Eg={clone:Ur,merge:ci},wg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ag=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pi=class extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wg,this.fragmentShader=Ag,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ur(e.uniforms),this.uniformsGroups=Tg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ze().setHex(s.value);break;case"v2":this.uniforms[i].value=new fe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Rt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Qe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new at().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Rg=class extends pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Lt=class extends Ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yl,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Cg=class extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pg=class extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function vr(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function tl(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ra=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];i:{e:{let a;t:{s:if(!(e<s)){for(let n=i+2;;){if(s===void 0){if(e<r)break s;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===n)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let n=t[1];e<n&&(i=2,r=n);for(let o=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){let n=i+a>>>1;e<t[n]?a=n:i=n+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ig=class extends Ra{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sc,endingEnd:sc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,n=s[r],o=s[a];if(n===void 0)switch(this.getSettings_().endingStart){case rc:r=e,n=2*t-i;break;case ac:r=s.length-2,n=t+s[r]-s[r+1];break;default:r=e,n=i}if(o===void 0)switch(this.getSettings_().endingEnd){case rc:a=e,o=2*i-t;break;case ac:a=1,o=i+s[1]-s[0];break;default:a=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-n),this._weightNext=l/(o-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,c=this._weightNext,p=(i-t)/(s-t),v=p*p,S=v*p,m=-d*S+2*d*v-d*p,f=(1+d)*S+(-1.5-2*d)*v+(-.5+d)*p+1,y=(-1-c)*S+(1.5+c)*v+.5*p,b=c*S-c*v;for(let _=0;_!==n;++_)r[_]=m*a[h+_]+f*a[l+_]+y*a[o+_]+b*a[u+_];return r}},Lg=class extends Ra{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==n;++d)r[d]=a[l+d]*u+a[o+d]*h;return r}},Ng=class extends Ra{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ug=class extends Ra{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-t)/(s-t),v=1-p;for(let S=0;S!==n;++S)r[S]=a[l+S]*v+a[o+S]*p;return r}let d=n*2,c=e-1;for(let p=0;p!==n;++p){let v=a[l+p],S=a[o+p],m=c*d+p*2,f=u[m],y=u[m+1],b=e*d+p*2,_=h[b],M=h[b+1],w=Og(i,t,f,_,s);r[p]=bd(w,v,y,M,S)}return r}};function bd(e,t,i,s,r){let a=1-e;return a*a*a*t+3*a*a*e*i+3*a*e*e*s+e*e*e*r}function Dg(e,t,i,s,r){let a=1-e;return 3*a*a*(i-t)+6*a*e*(s-i)+3*e*e*(r-s)}function Og(e,t,i,s,r){let a=(e-t)/(r-t);for(let n=0;n<8;n++){let o=bd(a,t,i,s,r)-e;if(Math.abs(o)<1e-10)break;let l=Dg(a,t,i,s,r);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var qi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vr(t,this.TimeBufferType),this.values=vr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:vr(e.times,Array),values:vr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),tl(e.settings)&&(i.settings={inTangents:vr(e.settings.inTangents,Array),outTangents:vr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ng(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ig(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ug(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Cn:t=this.InterpolantFactoryMethodDiscrete;break;case ql:t=this.InterpolantFactoryMethodLinear;break;case Ro:t=this.InterpolantFactoryMethodSmooth;break;case ic:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Xe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cn;case this.InterpolantFactoryMethodLinear:return ql;case this.InterpolantFactoryMethodSmooth:return Ro;case this.InterpolantFactoryMethodBezier:return ic}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;tl(this.settings)&&(Fc(this.settings.inTangents,e),Fc(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let n=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*n,a*n)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let n=0;n!==r;n++){let o=i[n];if(typeof o=="number"&&isNaN(o)){je("KeyframeTrack: Time is not a valid number.",this,n,o),e=!1;break}if(a!==null&&a>o){je("KeyframeTrack: Out of order keys.",this,n,o,a),e=!1;break}a=o}if(s!==void 0&&Vf(s))for(let n=0,o=s.length;n!==o;++n){let l=s[n];if(isNaN(l)){je("KeyframeTrack: Value is not a valid number.",this,n,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ro,r=e.length-1,a=1;for(let n=1;n<r;++n){let o=!1,l=e[n],h=e[n+1];if(l!==h&&(n!==1||l!==e[0]))if(s)o=!0;else{let u=n*i,d=u-i,c=u+i;for(let p=0;p!==i;++p){let v=t[u+p];if(v!==t[d+p]||v!==t[c+p]){o=!0;break}}}if(o){if(n!==a){e[a]=e[n];let u=n*i,d=a*i;for(let c=0;c!==i;++c)t[d+c]=t[u+c]}++a}}if(r>0){e[a]=e[r];for(let n=r*i,o=a*i,l=0;l!==i;++l)t[o+l]=t[n+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,tl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Fc(e,t){for(let i=0,s=e.length;i!==s;i+=2)e[i]*=t}qi.prototype.ValueTypeName="",qi.prototype.TimeBufferType=Float32Array,qi.prototype.ValueBufferType=Float32Array,qi.prototype.DefaultInterpolation=ql;var ra=class extends qi{constructor(e,t,i){super(e,t,i)}};ra.prototype.ValueTypeName="bool",ra.prototype.ValueBufferType=Array,ra.prototype.DefaultInterpolation=Cn,ra.prototype.InterpolantFactoryMethodLinear=void 0,ra.prototype.InterpolantFactoryMethodSmooth=void 0;var Bg=class extends qi{constructor(e,t,i,s){super(e,t,i,s)}};Bg.prototype.ValueTypeName="color";var Fg=class extends qi{constructor(e,t,i,s){super(e,t,i,s)}};Fg.prototype.ValueTypeName="number";var zg=class extends Ra{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,n=this.valueSize,o=(i-t)/(s-t),l=e*n;for(let h=l+n;l!==h;l+=4)us.slerpFlat(r,0,a,l-n,a,l,o);return r}},zc=class extends qi{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new zg(this.times,this.values,this.getValueSize(),e)}};zc.prototype.ValueTypeName="quaternion",zc.prototype.InterpolantFactoryMethodSmooth=void 0;var aa=class extends qi{constructor(e,t,i){super(e,t,i)}};aa.prototype.ValueTypeName="string",aa.prototype.ValueBufferType=Array,aa.prototype.DefaultInterpolation=Cn,aa.prototype.InterpolantFactoryMethodLinear=void 0,aa.prototype.InterpolantFactoryMethodSmooth=void 0;var kg=class extends qi{constructor(e,t,i,s){super(e,t,i,s)}};kg.prototype.ValueTypeName="vector";var Hg=class{constructor(e,t,i){let s=this,r=!1,a=0,n=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){n++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,n),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,n),a===n&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let c=l[u],p=l[u+1];if(c.global&&(c.lastIndex=0),c.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gg=new Hg,Vg=class{constructor(e){this.manager=e!==void 0?e:Gg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Vg.DEFAULT_MATERIAL_NAME="__DEFAULT";var yh=class extends ui{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Fn=class extends yh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ui.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},il=new at,kc=new I,Hc=new I,Td=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lr,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(kc),Hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(il,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,n=s?s.w/r.y:1,o=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===ya||e.reversedDepth?t.set(.5*a,0,0,.5*a+o,0,.5*n,0,.5*n+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+o,0,.5*n,0,.5*n+l,0,0,.5,.5,0,0,0,1),t.multiply(il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},gn=new I,vn=new us,Vi=new I,_h=class extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(gn,vn,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gn,vn,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(gn,vn,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gn,vn,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ms=new I,Gc=new fe,Vc=new fe,Kt=class extends _h{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_a*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _a*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z),Ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z)}getViewSize(e,t){return this.getViewBounds(e,Gc,Vc),t.subVectors(Vc,Gc)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ar*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let o=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/o,t-=a.offsetY*i/l,s*=a.width/o,i*=a.height/l}let n=this.filmOffset;n!==0&&(r+=e*n/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Wg=class extends Td{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0}},zr=class extends yh{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Wg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},xh=class extends _h{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,n=s+t,o=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,n-=h*this.view.offsetY,o=n-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,n,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},jg=class extends Td{constructor(){super(new xh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zn=class extends yh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ui.DEFAULT_UP),this.updateMatrix(),this.target=new ui,this.shadow=new jg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var sS=new at,rS=new at,aS=new at;var yr=-90,_r=1,Xg=class extends ui{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kt(yr,_r,e,t);s.layers=this.layers,this.add(s);let r=new Kt(yr,_r,e,t);r.layers=this.layers,this.add(r);let a=new Kt(yr,_r,e,t);a.layers=this.layers,this.add(a);let n=new Kt(yr,_r,e,t);n.layers=this.layers,this.add(n);let o=new Kt(yr,_r,e,t);o.layers=this.layers,this.add(o);let l=new Kt(yr,_r,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,n,o]=t;for(let l of t)this.remove(l);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),n.up.set(0,1,0),n.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===ya)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),n.up.set(0,-1,0),n.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,n,o,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),c=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,3,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,c),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},qg=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var nS=new I,oS=new us,lS=new I,hS=new I,cS=new I;var uS=new I,dS=new us,pS=new I,fS=new I;var Sh="\\[\\]\\.:\\/",Yg=new RegExp("["+Sh+"]","g"),Mh="[^"+Sh+"]",Zg="[^"+Sh.replace("\\.","")+"]",Jg=/((?:WC+[\/:])*)/.source.replace("WC",Mh),$g=/(WCOD+)?/.source.replace("WCOD",Zg),Kg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mh),Qg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mh),e0=new RegExp("^"+Jg+$g+Kg+Qg+"$"),t0=["material","materials","bones","map"],i0=class{constructor(e,t,i){let s=i||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},It=class br{constructor(t,i,s){this.path=i,this.parsedPath=s||br.parseTrackName(i),this.node=br.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,s){return t&&t.isAnimationObjectGroup?new br.Composite(t,i,s):new br(t,i,s)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yg,"")}static parseTrackName(t){let i=e0.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let s={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},r=s.nodeName&&s.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=s.nodeName.substring(r+1);t0.indexOf(a)!==-1&&(s.nodeName=s.nodeName.substring(0,r),s.objectName=a)}if(s.propertyName===null||s.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return s}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let s=t.skeleton.getBoneByName(i);if(s!==void 0)return s}if(t.children){let s=function(a){for(let n=0;n<a.length;n++){let o=a[n];if(o.name===i||o.uuid===i)return o;let l=s(o.children);if(l)return l}return null},r=s(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let s=this.resolvedProperty;for(let r=0,a=s.length;r!==a;++r)t[i++]=s[r]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let s=this.resolvedProperty;for(let r=0,a=s.length;r!==a;++r)s[r]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let s=this.resolvedProperty;for(let r=0,a=s.length;r!==a;++r)s[r]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let s=this.resolvedProperty;for(let r=0,a=s.length;r!==a;++r)s[r]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,s=i.objectName,r=i.propertyName,a=i.propertyIndex;if(t||(t=br.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(s){let h=i.objectIndex;switch(s){case"materials":if(!t.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[s]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[s]}if(h!==void 0){if(t[h]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let n=t[r];if(n===void 0){let h=i.nodeName;je("PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=n,this.propertyIndex=a}else n.fromArray!==void 0&&n.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=n):Array.isArray(n)?(l=this.BindingType.EntireArray,this.resolvedProperty=n):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=i0,It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray],It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mS=new Float32Array(1);var Wc=new at,Ed=class{constructor(e,t,i=0,s=1/0){this.ray=new Ta(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new uh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wc),this}intersectObject(e,t=!0,i=[]){return Kl(e,this,i,t),i.sort(jc),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Kl(e[s],this,i,t);return i.sort(jc),i}};function jc(e,t){return e.distance-t.distance}function Kl(e,t,i,s){let r=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(r=!1),r===!0&&s===!0){let a=e.children;for(let n=0,o=a.length;n<o;n++)Kl(a[n],t,i,!0)}}var gS=(To=class{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}},To.prototype.isMatrix2=!0,To),vS=new fe;var yS=new I,_S=new I,xS=new I,SS=new I,MS=new I,bS=new I,TS=new I;var ES=new I;var wS=new I,AS=new at,RS=new at;var CS=new I,PS=new Ze,IS=new Ze;var LS=new I,NS=new I,US=new I;var DS=new I,OS=new _h;var BS=new Es;var FS=new I;function Xc(e,t,i,s){let r=s0(s);switch(i){case Cu:return e*t;case Iu:return e*t/r.components*r.byteLength;case rh:return e*t/r.components*r.byteLength;case js:return e*t*2/r.components*r.byteLength;case ah:return e*t*2/r.components*r.byteLength;case Pu:return e*t*3/r.components*r.byteLength;case Ii:return e*t*4/r.components*r.byteLength;case nh:return e*t*4/r.components*r.byteLength;case xn:case Sn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Mn:case bn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case yl:case xl:return Math.max(e,16)*Math.max(t,8)/4;case vl:case _l:return Math.max(e,8)*Math.max(t,8)/2;case Sl:case Ml:case Tl:case El:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case bl:case An:case wl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Il:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Fl:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case zl:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case kl:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Hl:case Gl:case Vl:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Wl:case jl:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Rn:case Xl:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function s0(e){switch(e){case yi:case Eu:return{byteLength:1,components:1};case ga:case wu:case $i:return{byteLength:2,components:1};case ih:case sh:return{byteLength:2,components:4};case Ji:case th:case Xi:return{byteLength:4,components:1};case Au:case Ru:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}})),typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function wd(){let e=null,t=!1,i=null,s=null;function r(a,n){s=e.requestAnimationFrame(r),i(a,n)}return{start:function(){t!==!0&&i!==null&&e!==null&&(s=e.requestAnimationFrame(r),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(a){i=a},setContext:function(a){e=a}}}function r0(e){let t=new WeakMap;function i(o,l){let h=o.array,u=o.usage,d=h.byteLength,c=e.createBuffer();e.bindBuffer(l,c),e.bufferData(l,h,u),o.onUploadCallback();let p;if(h instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=e.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=e.SHORT;else if(h instanceof Uint32Array)p=e.UNSIGNED_INT;else if(h instanceof Int32Array)p=e.INT;else if(h instanceof Int8Array)p=e.BYTE;else if(h instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function s(o,l,h){let u=l.array,d=l.updateRanges;if(e.bindBuffer(h,o),d.length===0)e.bufferSubData(h,0,u);else{d.sort((p,v)=>p.start-v.start);let c=0;for(let p=1;p<d.length;p++){let v=d[c],S=d[p];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++c,d[c]=S)}d.length=c+1;for(let p=0,v=d.length;p<v;p++){let S=d[p];e.bufferSubData(h,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function n(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,o,l),h.version=o.version}}return{get:r,remove:a,update:n}}var a0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n0=`#ifdef USE_ALPHAHASH
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
#endif`,o0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u0=`#ifdef USE_AOMAP
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
#endif`,d0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p0=`#ifdef USE_BATCHING
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
#endif`,f0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,y0=`#ifdef USE_IRIDESCENCE
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
#endif`,_0=`#ifdef USE_BUMPMAP
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
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,E0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,w0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,A0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,R0=`#define PI 3.141592653589793
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
} // validated`,C0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,P0=`vec3 transformedNormal = objectNormal;
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
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,U0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D0="gl_FragColor = linearToOutputTexel( gl_FragColor );",O0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,B0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,G0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X0=`#ifdef USE_GRADIENTMAP
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
}`,q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$0=`#ifdef USE_ENVMAP
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
#endif`,K0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ev=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iv=`PhysicalMaterial material;
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
#endif`,sv=`uniform sampler2D dfgLUT;
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
}`,rv=`
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
#endif`,av=`#if defined( RE_IndirectDiffuse )
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
#endif`,nv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ov=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,lv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mv=`#if defined( USE_POINTS_UV )
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
#endif`,gv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_v=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sv=`#ifdef USE_MORPHTARGETS
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
#endif`,Mv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Av=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Rv=`#ifdef USE_NORMALMAP
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
#endif`,Cv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ov=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wv=`float getShadowMask() {
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
}`,jv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xv=`#ifdef USE_SKINNING
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
#endif`,qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yv=`#ifdef USE_SKINNING
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
#endif`,Zv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$v=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qv=`#ifdef USE_TRANSMISSION
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
#endif`,ey=`#ifdef USE_TRANSMISSION
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
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ry=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ay=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ny=`uniform sampler2D t2D;
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
}`,oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ly=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`#include <common>
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
}`,dy=`#if DEPTH_PACKING == 3200
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
}`,py=`#define DISTANCE
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
}`,fy=`#define DISTANCE
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
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vy=`uniform float scale;
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
}`,yy=`uniform vec3 diffuse;
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
}`,_y=`#include <common>
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
}`,xy=`uniform vec3 diffuse;
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
}`,Sy=`#define LAMBERT
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
}`,My=`#define LAMBERT
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
}`,by=`#define MATCAP
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
}`,Ty=`#define MATCAP
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
}`,Ey=`#define NORMAL
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
}`,wy=`#define NORMAL
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
}`,Ay=`#define PHONG
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
}`,Ry=`#define PHONG
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
}`,Cy=`#define STANDARD
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
}`,Py=`#define STANDARD
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
}`,Iy=`#define TOON
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
}`,Ly=`#define TOON
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
}`,Ny=`uniform float size;
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
}`,Uy=`uniform vec3 diffuse;
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
}`,Dy=`#include <common>
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
}`,Oy=`uniform vec3 color;
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
}`,By=`uniform float rotation;
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
}`,Fy=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:a0,alphahash_pars_fragment:n0,alphamap_fragment:o0,alphamap_pars_fragment:l0,alphatest_fragment:h0,alphatest_pars_fragment:c0,aomap_fragment:u0,aomap_pars_fragment:d0,batching_pars_vertex:p0,batching_vertex:f0,begin_vertex:m0,beginnormal_vertex:g0,bsdfs:v0,iridescence_fragment:y0,bumpmap_pars_fragment:_0,clipping_planes_fragment:x0,clipping_planes_pars_fragment:S0,clipping_planes_pars_vertex:M0,clipping_planes_vertex:b0,color_fragment:T0,color_pars_fragment:E0,color_pars_vertex:w0,color_vertex:A0,common:R0,cube_uv_reflection_fragment:C0,defaultnormal_vertex:P0,displacementmap_pars_vertex:I0,displacementmap_vertex:L0,emissivemap_fragment:N0,emissivemap_pars_fragment:U0,colorspace_fragment:D0,colorspace_pars_fragment:O0,envmap_fragment:B0,envmap_common_pars_fragment:F0,envmap_pars_fragment:z0,envmap_pars_vertex:k0,envmap_physical_pars_fragment:$0,envmap_vertex:H0,fog_vertex:G0,fog_pars_vertex:V0,fog_fragment:W0,fog_pars_fragment:j0,gradientmap_pars_fragment:X0,lightmap_pars_fragment:q0,lights_lambert_fragment:Y0,lights_lambert_pars_fragment:Z0,lights_pars_begin:J0,lights_toon_fragment:K0,lights_toon_pars_fragment:Q0,lights_phong_fragment:ev,lights_phong_pars_fragment:tv,lights_physical_fragment:iv,lights_physical_pars_fragment:sv,lights_fragment_begin:rv,lights_fragment_maps:av,lights_fragment_end:nv,lightprobes_pars_fragment:ov,logdepthbuf_fragment:lv,logdepthbuf_pars_fragment:hv,logdepthbuf_pars_vertex:cv,logdepthbuf_vertex:uv,map_fragment:dv,map_pars_fragment:pv,map_particle_fragment:fv,map_particle_pars_fragment:mv,metalnessmap_fragment:gv,metalnessmap_pars_fragment:vv,morphinstance_vertex:yv,morphcolor_vertex:_v,morphnormal_vertex:xv,morphtarget_pars_vertex:Sv,morphtarget_vertex:Mv,normal_fragment_begin:bv,normal_fragment_maps:Tv,normal_pars_fragment:Ev,normal_pars_vertex:wv,normal_vertex:Av,normalmap_pars_fragment:Rv,clearcoat_normal_fragment_begin:Cv,clearcoat_normal_fragment_maps:Pv,clearcoat_pars_fragment:Iv,iridescence_pars_fragment:Lv,opaque_fragment:Nv,packing:Uv,premultiplied_alpha_fragment:Dv,project_vertex:Ov,dithering_fragment:Bv,dithering_pars_fragment:Fv,roughnessmap_fragment:zv,roughnessmap_pars_fragment:kv,shadowmap_pars_fragment:Hv,shadowmap_pars_vertex:Gv,shadowmap_vertex:Vv,shadowmask_pars_fragment:Wv,skinbase_vertex:jv,skinning_pars_vertex:Xv,skinning_vertex:qv,skinnormal_vertex:Yv,specularmap_fragment:Zv,specularmap_pars_fragment:Jv,tonemapping_fragment:$v,tonemapping_pars_fragment:Kv,transmission_fragment:Qv,transmission_pars_fragment:ey,uv_pars_fragment:ty,uv_pars_vertex:iy,uv_vertex:sy,worldpos_vertex:ry,background_vert:ay,background_frag:ny,backgroundCube_vert:oy,backgroundCube_frag:ly,cube_vert:hy,cube_frag:cy,depth_vert:uy,depth_frag:dy,distance_vert:py,distance_frag:fy,equirect_vert:my,equirect_frag:gy,linedashed_vert:vy,linedashed_frag:yy,meshbasic_vert:_y,meshbasic_frag:xy,meshlambert_vert:Sy,meshlambert_frag:My,meshmatcap_vert:by,meshmatcap_frag:Ty,meshnormal_vert:Ey,meshnormal_frag:wy,meshphong_vert:Ay,meshphong_frag:Ry,meshphysical_vert:Cy,meshphysical_frag:Py,meshtoon_vert:Iy,meshtoon_frag:Ly,points_vert:Ny,points_frag:Uy,shadow_vert:Dy,shadow_frag:Oy,sprite_vert:By,sprite_frag:Fy},we={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},ji={basic:{uniforms:ci([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:ci([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:ci([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:ci([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:ci([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ze(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:ci([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:ci([we.points,we.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:ci([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:ci([we.common,we.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:ci([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:ci([we.sprite,we.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:ci([we.common,we.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:ci([we.lights,we.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};ji.physical={uniforms:ci([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var yn={r:0,b:0,g:0},zy=new at,Ad=new Qe;Ad.set(-1,0,0,0,1,0,0,0,1);function ky(e,t,i,s,r,a){let n=new Ze(0),o=r===!0?0:1,l,h,u=null,d=0,c=null;function p(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let _=y.backgroundBlurriness>0;b=t.get(b,_)}return b}function v(y){let b=!1,_=p(y);_===null?m(n,o):_&&_.isColor&&(m(_,1),b=!0);let M=e.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(e.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function S(y,b){let _=p(b);_&&(_.isCubeTexture||_.mapping===Dn)?(h===void 0&&(h=new ut(new Rs(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Ur(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zy.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Ad),h.material.toneMapped=ht.getTransfer(_.colorSpace)!==vt,(u!==_||d!==_.version||c!==e.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,c=e.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ut(new Cs(2,2),new pi({name:"BackgroundMaterial",uniforms:Ur(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ht.getTransfer(_.colorSpace)!==vt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||c!==e.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,c=e.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,b){y.getRGB(yn,Md(e)),i.buffers.color.setClear(yn.r,yn.g,yn.b,b,a)}function f(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return n},setClearColor:function(y,b=1){n.set(y),o=b,m(n,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(n,o)},render:v,addToRenderList:S,dispose:f}}function Hy(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),s={},r=c(null),a=r,n=!1;function o(R,N,W,D,X){let Q=!1,Z=d(R,D,W,N);a!==Z&&(a=Z,h(a.object)),Q=p(R,D,W,X),Q&&v(R,D,W,X),X!==null&&t.update(X,e.ELEMENT_ARRAY_BUFFER),(Q||n)&&(n=!1,_(R,N,W,D),X!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return e.createVertexArray()}function h(R){return e.bindVertexArray(R)}function u(R){return e.deleteVertexArray(R)}function d(R,N,W,D){let X=D.wireframe===!0,Q=s[N.id];Q===void 0&&(Q={},s[N.id]=Q);let Z=R.isInstancedMesh===!0?R.id:0,_e=Q[Z];_e===void 0&&(_e={},Q[Z]=_e);let ee=_e[W.id];ee===void 0&&(ee={},_e[W.id]=ee);let se=ee[X];return se===void 0&&(se=c(l()),ee[X]=se),se}function c(R){let N=[],W=[],D=[];for(let X=0;X<i;X++)N[X]=0,W[X]=0,D[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:D,object:R,attributes:{},index:null}}function p(R,N,W,D){let X=a.attributes,Q=N.attributes,Z=0,_e=W.getAttributes();for(let ee in _e)if(_e[ee].location>=0){let se=X[ee],de=Q[ee];if(de===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),se===void 0||se.attribute!==de||de&&se.data!==de.data)return!0;Z++}return a.attributesNum!==Z||a.index!==D}function v(R,N,W,D){let X={},Q=N.attributes,Z=0,_e=W.getAttributes();for(let ee in _e)if(_e[ee].location>=0){let se=Q[ee];se===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(se=R.instanceColor));let de={};de.attribute=se,se&&se.data&&(de.data=se.data),X[ee]=de,Z++}a.attributes=X,a.attributesNum=Z,a.index=D}function S(){let R=a.newAttributes;for(let N=0,W=R.length;N<W;N++)R[N]=0}function m(R){f(R,0)}function f(R,N){let W=a.newAttributes,D=a.enabledAttributes,X=a.attributeDivisors;W[R]=1,D[R]===0&&(e.enableVertexAttribArray(R),D[R]=1),X[R]!==N&&(e.vertexAttribDivisor(R,N),X[R]=N)}function y(){let R=a.newAttributes,N=a.enabledAttributes;for(let W=0,D=N.length;W<D;W++)N[W]!==R[W]&&(e.disableVertexAttribArray(W),N[W]=0)}function b(R,N,W,D,X,Q,Z){Z===!0?e.vertexAttribIPointer(R,N,W,X,Q):e.vertexAttribPointer(R,N,W,D,X,Q)}function _(R,N,W,D){S();let X=D.attributes,Q=W.getAttributes(),Z=N.defaultAttributeValues;for(let _e in Q){let ee=Q[_e];if(ee.location>=0){let se=X[_e];if(se===void 0&&(_e==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),_e==="instanceColor"&&R.instanceColor&&(se=R.instanceColor)),se!==void 0){let de=se.normalized,Ve=se.itemSize,De=t.get(se);if(De===void 0)continue;let ft=De.buffer,$e=De.type,te=De.bytesPerElement,ce=$e===e.INT||$e===e.UNSIGNED_INT||se.gpuType===th;if(se.isInterleavedBufferAttribute){let ge=se.data,ze=ge.stride,Ie=se.offset;if(ge.isInstancedInterleavedBuffer){for(let be=0;be<ee.locationSize;be++)f(ee.location+be,ge.meshPerAttribute);R.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let be=0;be<ee.locationSize;be++)m(ee.location+be);e.bindBuffer(e.ARRAY_BUFFER,ft);for(let be=0;be<ee.locationSize;be++)b(ee.location+be,Ve/ee.locationSize,$e,de,ze*te,(Ie+Ve/ee.locationSize*be)*te,ce)}else{if(se.isInstancedBufferAttribute){for(let ge=0;ge<ee.locationSize;ge++)f(ee.location+ge,se.meshPerAttribute);R.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ge=0;ge<ee.locationSize;ge++)m(ee.location+ge);e.bindBuffer(e.ARRAY_BUFFER,ft);for(let ge=0;ge<ee.locationSize;ge++)b(ee.location+ge,Ve/ee.locationSize,$e,de,Ve*te,Ve/ee.locationSize*ge*te,ce)}}else if(Z!==void 0){let de=Z[_e];if(de!==void 0)switch(de.length){case 2:e.vertexAttrib2fv(ee.location,de);break;case 3:e.vertexAttrib3fv(ee.location,de);break;case 4:e.vertexAttrib4fv(ee.location,de);break;default:e.vertexAttrib1fv(ee.location,de)}}}}y()}function M(){x();for(let R in s){let N=s[R];for(let W in N){let D=N[W];for(let X in D){let Q=D[X];for(let Z in Q)u(Q[Z].object),delete Q[Z];delete D[X]}}delete s[R]}}function w(R){if(s[R.id]===void 0)return;let N=s[R.id];for(let W in N){let D=N[W];for(let X in D){let Q=D[X];for(let Z in Q)u(Q[Z].object),delete Q[Z];delete D[X]}}delete s[R.id]}function A(R){for(let N in s){let W=s[N];for(let D in W){let X=W[D];if(X[R.id]===void 0)continue;let Q=X[R.id];for(let Z in Q)u(Q[Z].object),delete Q[Z];delete X[R.id]}}}function g(R){for(let N in s){let W=s[N],D=R.isInstancedMesh===!0?R.id:0,X=W[D];if(X!==void 0){for(let Q in X){let Z=X[Q];for(let _e in Z)u(Z[_e].object),delete Z[_e];delete X[Q]}delete W[D],Object.keys(W).length===0&&delete s[N]}}}function x(){U(),n=!0,a!==r&&(a=r,h(a.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:x,resetDefaultState:U,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:g,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:m,disableUnusedAttributes:y}}function Gy(e,t,i){let s;function r(l){s=l}function a(l,h){e.drawArrays(s,l,h),i.update(h,s,1)}function n(l,h,u){u!==0&&(e.drawArraysInstanced(s,l,h,u),i.update(h,s,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,l,0,h,0,u);let d=0;for(let c=0;c<u;c++)d+=h[c];i.update(d,s,1)}this.setMode=r,this.render=a,this.renderInstances=n,this.renderMultiDraw=o}function Vy(e,t,i,s){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function n(A){return!(A!==Ii&&s.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let g=A===$i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==yi&&A!==Xi&&!g&&s.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",u=l(h);u!==h&&(Xe("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let d=i.logarithmicDepthBuffer===!0,c=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&c===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),M=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:n,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:c,maxTextures:p,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:_,maxSamples:M,samples:w}}function Wy(e){let t=this,i=null,s=0,r=!1,a=!1,n=new bs,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c){let p=d.length!==0||c||s!==0||r;return r=c,s=d.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,c){i=u(d,c,0)},this.setState=function(d,c,p){let v=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,f=e.get(d);if(!r||v===null||v.length===0||a&&!m)a?u(null):h();else{let y=a?0:s,b=y*4,_=f.clippingState||null;l.value=_,_=u(v,c,b,p);for(let M=0;M!==b;++M)_[M]=i[M];f.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function u(d,c,p,v){let S=d!==null?d.length:0,m=null;if(S!==0){if(m=l.value,v!==!0||m===null){let f=p+S*4,y=c.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,_=p;b!==S;++b,_+=4)n.copy(d[b]).applyMatrix4(y,o),n.normal.toArray(m,_),m[_+3]=n.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}var Tr=4,jy=6,Xy=20,qy=256,na=new xh,qc=new Ze,sl=null,rl=0,al=0,nl=!1,Yy=new I,zs=new I,Yc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:n=Yy}=r;sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o,n),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sl,rl,al),this._renderer.xr.enabled=nl,e.scissorTest=!1,xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:$i,format:Ii,colorSpace:Pn,depthBuffer:!1},s=Zc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zc(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Zy(r)),this._blurMaterial=$y(r,e,t),this._ggxMaterial=Jy(r,e,t)}return s}_compileMaterial(e){let t=new ut(new pt,e);this._renderer.compile(t,na)}_sceneToCubeUV(e,t,i,s,r){let a=new Kt(90,1,t,i),n=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(qc),l.toneMapping=Yi,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(s),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ut(new Rs,new Oi({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,c=d.material,p=!1,v=e.background;v?v.isColor&&(c.color.copy(v),e.background=null,p=!0):(c.color.copy(qc),p=!0);for(let S=0;S<6;S++){let m=S%3;m===0?(a.up.set(0,n[S],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x+o[S],r.y,r.z)):m===1?(a.up.set(0,0,n[S]),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y+o[S],r.z)):(a.up.set(0,n[S],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y,r.z+o[S]));let f=this._cubeSize;xr(s,m*f,S>2?f:0,f,f),l.setRenderTarget(s),p&&l.render(d,a),l.render(e,a)}l.toneMapping=u,l.autoClear=h,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ws||e.mapping===Cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$c()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let n=r.uniforms;n.envMap.value=e;let o=this._cubeSize;xr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,na)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,n=this._lodMeshes[i];n.material=a;let o=a.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,c=u*d,{_lodMax:p}=this,v=this._sizeLods[i],S=3*v*(i>p-Tr?i-p+Tr:0),m=4*(this._cubeSize-v);o.envMap.value=e.texture,o.roughness.value=c,o.mipInt.value=p-t,xr(r,S,m,3*v,2*v),s.setRenderTarget(r),s.render(n,na),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=p-i,xr(e,S,m,3*v,2*v),s.setRenderTarget(e),s.render(n,na)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,n=this._blurMaterial,o=this._lodMeshes[s];o.material=n;let l=n.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Tr?s-this._lodMax+Tr:0),d=4*(this._cubeSize-h);xr(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(o,na)}};function Zy(e){let t=[],i=[],s=e,r=e-Tr+1+jy;for(let a=0;a<r;a++){let n=Math.pow(2,s);t.push(n);let o=1/(n-2),l=-o,h=1+o,u=[l,l,h,l,h,h,l,l,h,h,l,h],d=6,c=6,p=3,v=new Float32Array(p*c*d),S=new Float32Array(p*c*d);for(let f=0;f<d;f++){let y=f%3*2/3-1,b=f>2?0:-1,_=[y,b,0,y+2/3,b,0,y+2/3,b+1,0,y,b,0,y+2/3,b+1,0,y,b+1,0];v.set(_,p*c*f);for(let M=0;M<c;M++){let w=u[M*2]*2-1,A=u[M*2+1]*2-1;f===0?zs.set(1,A,w):f===1?zs.set(-w,1,-A):f===2?zs.set(-w,A,1):f===3?zs.set(-1,A,-w):f===4?zs.set(-w,-1,A):zs.set(w,A,-1),zs.toArray(S,(f*c+M)*p)}}let m=new pt;m.setAttribute("position",new Jt(v,p)),m.setAttribute("outputDirection",new Jt(S,p)),i.push(new ut(m,null)),s>Tr&&s--}return{lodMeshes:i,sizeLods:t}}function Zc(e,t,i){let s=new Ni(e,t,i);return s.texture.mapping=Dn,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function xr(e,t,i,s,r){e.viewport.set(t,i,s,r),e.scissor.set(t,i,s,r)}function Jy(e,t,i){return new pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kn(),fragmentShader:`

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
		`,blending:os,depthTest:!1,depthWrite:!1})}function $y(e,t,i){return new pi({name:"SphericalGaussianBlur",defines:{SAMPLES:Xy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:kn(),fragmentShader:`

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
		`,blending:os,depthTest:!1,depthWrite:!1})}function Jc(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kn(),fragmentShader:`

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
		`,blending:os,depthTest:!1,depthWrite:!1})}function $c(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function kn(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Rd=class extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ju(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rs(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:Ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:si,blending:os});r.uniforms.tEquirect.value=t;let a=new ut(s,r),n=t.minFilter;return t.minFilter===Hs&&(t.minFilter=ii),new Xg(1,10,this).update(e,a),t.minFilter=n,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function Ky(e){let t=new WeakMap,i=new WeakMap,s=null;function r(c,p=!1){return c==null?null:p?n(c):a(c)}function a(c){if(c&&c.isTexture){let p=c.mapping;if(p===Eo||p===wo)if(t.has(c)){let v=t.get(c).texture;return o(v,c.mapping)}else{let v=c.image;if(v&&v.height>0){let S=new Rd(v.height);return S.fromEquirectangularTexture(e,c),t.set(c,S),c.addEventListener("dispose",h),o(S.texture,c.mapping)}else return null}}return c}function n(c){if(c&&c.isTexture){let p=c.mapping,v=p===Eo||p===wo,S=p===Ws||p===Cr;if(v||S){let m=i.get(c),f=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return s===null&&(s=new Yc(e)),m=v?s.fromEquirectangular(c,m):s.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,i.set(c,m),m.texture;if(m!==void 0)return m.texture;{let y=c.image;return v&&y&&y.height>0||S&&y&&l(y)?(s===null&&(s=new Yc(e)),m=v?s.fromEquirectangular(c):s.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,i.set(c,m),c.addEventListener("dispose",u),m.texture):null}}}return c}function o(c,p){return p===Eo?c.mapping=Ws:p===wo&&(c.mapping=Cr),c}function l(c){let p=0,v=6;for(let S=0;S<v;S++)c[S]!==void 0&&p++;return p===v}function h(c){let p=c.target;p.removeEventListener("dispose",h);let v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function u(c){let p=c.target;p.removeEventListener("dispose",u);let v=i.get(p);v!==void 0&&(i.delete(p),v.dispose())}function d(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:r,dispose:d}}function Qy(e){let t={};function i(s){if(t[s]!==void 0)return t[s];let r=e.getExtension(s);return t[s]=r,r}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){let r=i(s);return r===null&&wr("WebGLRenderer: "+s+" extension not supported."),r}}}function e_(e,t,i,s){let r={},a=new WeakMap;function n(d){let c=d.target;c.index!==null&&t.remove(c.index);for(let v in c.attributes)t.remove(c.attributes[v]);c.removeEventListener("dispose",n),delete r[c.id];let p=a.get(c);p&&(t.remove(p),a.delete(c)),s.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,i.memory.geometries--}function o(d,c){return r[c.id]===!0||(c.addEventListener("dispose",n),r[c.id]=!0,i.memory.geometries++),c}function l(d){let c=d.attributes;for(let p in c)t.update(c[p],e.ARRAY_BUFFER)}function h(d){let c=[],p=d.index,v=d.attributes.position,S=0;if(v===void 0)return;if(p!==null){let y=p.array;S=p.version;for(let b=0,_=y.length;b<_;b+=3){let M=y[b+0],w=y[b+1],A=y[b+2];c.push(M,w,w,A,A,M)}}else{let y=v.array;S=v.version;for(let b=0,_=y.length/3-1;b<_;b+=3){let M=b+0,w=b+1,A=b+2;c.push(M,w,w,A,A,M)}}let m=new(v.count>=65535?ku:zu)(c,1);m.version=S;let f=a.get(d);f&&t.remove(f),a.set(d,m)}function u(d){let c=a.get(d);if(c){let p=d.index;p!==null&&c.version<p.version&&h(d)}else h(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function t_(e,t,i){let s;function r(d){s=d}let a,n;function o(d){a=d.type,n=d.bytesPerElement}function l(d,c){e.drawElements(s,c,a,d*n),i.update(c,s,1)}function h(d,c,p){p!==0&&(e.drawElementsInstanced(s,c,a,d*n,p),i.update(c,s,p))}function u(d,c,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,c,0,a,d,0,p);let v=0;for(let S=0;S<p;S++)v+=c[S];i.update(v,s,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=u}function i_(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(a,n,o){switch(i.calls++,n){case e.TRIANGLES:i.triangles+=o*(a/3);break;case e.LINES:i.lines+=o*(a/2);break;case e.LINE_STRIP:i.lines+=o*(a-1);break;case e.LINE_LOOP:i.lines+=o*a;break;case e.POINTS:i.points+=o*a;break;default:je("WebGLInfo: Unknown draw mode:",n);break}}function r(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:r,update:s}}function s_(e,t,i){let s=new WeakMap,r=new Rt;function a(n,o,l){let h=n.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,c=s.get(o);if(c===void 0||c.count!==d){let p=function(){g.dispose(),s.delete(o),o.removeEventListener("dispose",p)};c!==void 0&&c.texture.dispose();let v=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],_=0;v===!0&&(_=1),S===!0&&(_=2),m===!0&&(_=3);let M=o.attributes.position.count*_,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let A=new Float32Array(M*w*4*d),g=new Uu(A,M,w,d);g.type=Xi,g.needsUpdate=!0;let x=_*4;for(let U=0;U<d;U++){let R=f[U],N=y[U],W=b[U],D=M*w*4*U;for(let X=0;X<R.count;X++){let Q=X*x;v===!0&&(r.fromBufferAttribute(R,X),A[D+Q+0]=r.x,A[D+Q+1]=r.y,A[D+Q+2]=r.z,A[D+Q+3]=0),S===!0&&(r.fromBufferAttribute(N,X),A[D+Q+4]=r.x,A[D+Q+5]=r.y,A[D+Q+6]=r.z,A[D+Q+7]=0),m===!0&&(r.fromBufferAttribute(W,X),A[D+Q+8]=r.x,A[D+Q+9]=r.y,A[D+Q+10]=r.z,A[D+Q+11]=W.itemSize===4?r.w:1)}}c={count:d,texture:g,size:new fe(M,w)},s.set(o,c),o.addEventListener("dispose",p)}if(n.isInstancedMesh===!0&&n.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",n.morphTexture,i);else{let p=0;for(let S=0;S<h.length;S++)p+=h[S];let v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",h)}l.getUniforms().setValue(e,"morphTargetsTexture",c.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",c.size)}return{update:a}}function r_(e,t,i,s,r){let a=new WeakMap;function n(h){let u=r.render.frame,d=h.geometry,c=t.get(h,d);if(a.get(c)!==u&&(t.update(c),a.set(c,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),a.get(h)!==u&&(i.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,e.ARRAY_BUFFER),a.set(h,u))),h.isSkinnedMesh){let p=h.skeleton;a.get(p)!==u&&(p.update(),a.set(p,u))}return c}function o(){a=new WeakMap}function l(h){let u=h.target;u.removeEventListener("dispose",l),s.releaseStatesOfObject(u),i.remove(u.instanceMatrix),u.instanceColor!==null&&i.remove(u.instanceColor)}return{update:n,dispose:o}}var a_={[yu]:"LINEAR_TONE_MAPPING",[_u]:"REINHARD_TONE_MAPPING",[xu]:"CINEON_TONE_MAPPING",[Dr]:"ACES_FILMIC_TONE_MAPPING",[Mu]:"AGX_TONE_MAPPING",[bu]:"NEUTRAL_TONE_MAPPING",[Su]:"CUSTOM_TONE_MAPPING"};function n_(e,t,i,s,r,a){let n=new Ni(t,i,{type:e,depthBuffer:r,stencilBuffer:a,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=new pt;h.setAttribute("position",new qe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new qe([0,2,0,0,2,0],2));let u=new Rg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ut(h,u),c=new xh(-1,1,1,-1,0,1),p=null,v=null,S=!1,m,f=null,y=[],b=!1;this.setSize=function(_,M){n.setSize(_,M),o!==null&&o.setSize(_,M),l!==null&&l.setSize(_,M);for(let w=0;w<y.length;w++){let A=y[w];A.setSize&&A.setSize(_,M)}},this.setEffects=function(_){y=_,b=y.length>0&&y[0].isRenderPass===!0;let M=n.width,w=n.height;y.length>0&&o===null&&(o=new Ni(M,w,{type:$i,depthBuffer:!1,stencilBuffer:!1}),l=new Ni(M,w,{type:$i,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let g=y[A];g.setSize&&g.setSize(M,w)}},this.begin=function(_,M){if(S||_.toneMapping===Yi&&y.length===0)return!1;if(f=M,M!==null){let w=M.width,A=M.height;(n.width!==w||n.height!==A)&&this.setSize(w,A)}return b===!1&&_.setRenderTarget(n),m=_.toneMapping,_.toneMapping=Yi,!0},this.hasRenderPass=function(){return b},this.end=function(_,M){_.toneMapping=m,S=!0;let w=n,A=o;for(let g=0;g<y.length;g++){let x=y[g];x.enabled!==!1&&(x.render(_,A,w,M),x.needsSwap!==!1&&(w=A,A=A===o?l:o))}if(p!==_.outputColorSpace||v!==_.toneMapping){p=_.outputColorSpace,v=_.toneMapping,u.defines={},ht.getTransfer(p)===vt&&(u.defines.SRGB_TRANSFER="");let g=a_[v];g&&(u.defines[g]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(f),_.render(d,c),f=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){n.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Cd=new Ti,Ql=new xa(1,1),Pd=new Uu,Id=new fm,Ld=new ju,Kc=[],Qc=[],eu=new Float32Array(16),tu=new Float32Array(9),iu=new Float32Array(4);function kr(e,t,i){let s=e[0];if(s<=0||s>0)return e;let r=t*i,a=Kc[r];if(a===void 0&&(a=new Float32Array(r),Kc[r]=a),t!==0){s.toArray(a,0);for(let n=1,o=0;n!==t;++n)o+=i,e[n].toArray(a,o)}return a}function Ht(e,t){if(e.length!==t.length)return!1;for(let i=0,s=e.length;i<s;i++)if(e[i]!==t[i])return!1;return!0}function Gt(e,t){for(let i=0,s=t.length;i<s;i++)e[i]=t[i]}function Hn(e,t){let i=Qc[t];i===void 0&&(i=new Int32Array(t),Qc[t]=i);for(let s=0;s!==t;++s)i[s]=e.allocateTextureUnit();return i}function o_(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function l_(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ht(i,t))return;e.uniform2fv(this.addr,t),Gt(i,t)}}function h_(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Ht(i,t))return;e.uniform3fv(this.addr,t),Gt(i,t)}}function c_(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ht(i,t))return;e.uniform4fv(this.addr,t),Gt(i,t)}}function u_(e,t){let i=this.cache,s=t.elements;if(s===void 0){if(Ht(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Gt(i,t)}else{if(Ht(i,s))return;iu.set(s),e.uniformMatrix2fv(this.addr,!1,iu),Gt(i,s)}}function d_(e,t){let i=this.cache,s=t.elements;if(s===void 0){if(Ht(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Gt(i,t)}else{if(Ht(i,s))return;tu.set(s),e.uniformMatrix3fv(this.addr,!1,tu),Gt(i,s)}}function p_(e,t){let i=this.cache,s=t.elements;if(s===void 0){if(Ht(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Gt(i,t)}else{if(Ht(i,s))return;eu.set(s),e.uniformMatrix4fv(this.addr,!1,eu),Gt(i,s)}}function f_(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function m_(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ht(i,t))return;e.uniform2iv(this.addr,t),Gt(i,t)}}function g_(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Ht(i,t))return;e.uniform3iv(this.addr,t),Gt(i,t)}}function v_(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ht(i,t))return;e.uniform4iv(this.addr,t),Gt(i,t)}}function y_(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function __(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ht(i,t))return;e.uniform2uiv(this.addr,t),Gt(i,t)}}function x_(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Ht(i,t))return;e.uniform3uiv(this.addr,t),Gt(i,t)}}function S_(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ht(i,t))return;e.uniform4uiv(this.addr,t),Gt(i,t)}}function M_(e,t,i){let s=this.cache,r=i.allocateTextureUnit();s[0]!==r&&(e.uniform1i(this.addr,r),s[0]=r);let a;this.type===e.SAMPLER_2D_SHADOW?(Ql.compareFunction=i.isReversedDepthBuffer()?lh:oh,a=Ql):a=Cd,i.setTexture2D(t||a,r)}function b_(e,t,i){let s=this.cache,r=i.allocateTextureUnit();s[0]!==r&&(e.uniform1i(this.addr,r),s[0]=r),i.setTexture3D(t||Id,r)}function T_(e,t,i){let s=this.cache,r=i.allocateTextureUnit();s[0]!==r&&(e.uniform1i(this.addr,r),s[0]=r),i.setTextureCube(t||Ld,r)}function E_(e,t,i){let s=this.cache,r=i.allocateTextureUnit();s[0]!==r&&(e.uniform1i(this.addr,r),s[0]=r),i.setTexture2DArray(t||Pd,r)}function w_(e){switch(e){case 5126:return o_;case 35664:return l_;case 35665:return h_;case 35666:return c_;case 35674:return u_;case 35675:return d_;case 35676:return p_;case 5124:case 35670:return f_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return v_;case 5125:return y_;case 36294:return __;case 36295:return x_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return M_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return E_}}function A_(e,t){e.uniform1fv(this.addr,t)}function R_(e,t){let i=kr(t,this.size,2);e.uniform2fv(this.addr,i)}function C_(e,t){let i=kr(t,this.size,3);e.uniform3fv(this.addr,i)}function P_(e,t){let i=kr(t,this.size,4);e.uniform4fv(this.addr,i)}function I_(e,t){let i=kr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function L_(e,t){let i=kr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function N_(e,t){let i=kr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function U_(e,t){e.uniform1iv(this.addr,t)}function D_(e,t){e.uniform2iv(this.addr,t)}function O_(e,t){e.uniform3iv(this.addr,t)}function B_(e,t){e.uniform4iv(this.addr,t)}function F_(e,t){e.uniform1uiv(this.addr,t)}function z_(e,t){e.uniform2uiv(this.addr,t)}function k_(e,t){e.uniform3uiv(this.addr,t)}function H_(e,t){e.uniform4uiv(this.addr,t)}function G_(e,t,i){let s=this.cache,r=t.length,a=Hn(i,r);Ht(s,a)||(e.uniform1iv(this.addr,a),Gt(s,a));let n;this.type===e.SAMPLER_2D_SHADOW?n=Ql:n=Cd;for(let o=0;o!==r;++o)i.setTexture2D(t[o]||n,a[o])}function V_(e,t,i){let s=this.cache,r=t.length,a=Hn(i,r);Ht(s,a)||(e.uniform1iv(this.addr,a),Gt(s,a));for(let n=0;n!==r;++n)i.setTexture3D(t[n]||Id,a[n])}function W_(e,t,i){let s=this.cache,r=t.length,a=Hn(i,r);Ht(s,a)||(e.uniform1iv(this.addr,a),Gt(s,a));for(let n=0;n!==r;++n)i.setTextureCube(t[n]||Ld,a[n])}function j_(e,t,i){let s=this.cache,r=t.length,a=Hn(i,r);Ht(s,a)||(e.uniform1iv(this.addr,a),Gt(s,a));for(let n=0;n!==r;++n)i.setTexture2DArray(t[n]||Pd,a[n])}function X_(e){switch(e){case 5126:return A_;case 35664:return R_;case 35665:return C_;case 35666:return P_;case 35674:return I_;case 35675:return L_;case 35676:return N_;case 5124:case 35670:return U_;case 35667:case 35671:return D_;case 35668:case 35672:return O_;case 35669:case 35673:return B_;case 5125:return F_;case 36294:return z_;case 36295:return k_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return j_}}var q_=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=w_(t.type)}},Y_=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=X_(t.type)}},Z_=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let n=s[r];n.setValue(e,t[n.id],i)}}},ol=/(\w+)(\])?(\[|\.)?/g;function su(e,t){e.seq.push(t),e.map[t.id]=t}function J_(e,t,i){let s=e.name,r=s.length;for(ol.lastIndex=0;;){let a=ol.exec(s),n=ol.lastIndex,o=a[1],l=a[2]==="]",h=a[3];if(l&&(o=o|0),h===void 0||h==="["&&n+2===r){su(i,h===void 0?new q_(o,e,t):new Y_(o,e,t));break}else{let u=i.map[o];u===void 0&&(u=new Z_(o),su(i,u)),i=u}}}var wn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let n=e.getActiveUniform(t,a),o=e.getUniformLocation(t,n.name);J_(n,o,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let n=t[r],o=i[n.id];o.needsUpdate!==!1&&n.setValue(e,o.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function ru(e,t,i){let s=e.createShader(t);return e.shaderSource(s,i),e.compileShader(s),s}var $_=37297,K_=0;function Q_(e,t){let i=e.split(`
`),s=[],r=Math.max(t-6,0),a=Math.min(t+6,i.length);for(let n=r;n<a;n++){let o=n+1;s.push(`${o===t?">":" "} ${o}: ${i[n]}`)}return s.join(`
`)}var au=new Qe;function ex(e){ht._getMatrix(au,ht.workingColorSpace,e);let t=`mat3( ${au.elements.map(i=>i.toFixed(4))} )`;switch(ht.getTransfer(e)){case In:return[t,"LinearTransferOETF"];case vt:return[t,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function nu(e,t,i){let s=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(s&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let n=parseInt(a[1]);return i.toUpperCase()+`

`+r+`

`+Q_(e.getShaderSource(t),n)}else return r}function tx(e,t){let i=ex(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var ix={[yu]:"Linear",[_u]:"Reinhard",[xu]:"Cineon",[Dr]:"ACESFilmic",[Mu]:"AgX",[bu]:"Neutral",[Su]:"Custom"};function sx(e,t){let i=ix[t];return i===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var _n=new I;function rx(){ht.getLuminanceCoefficients(_n);let e=_n.x.toFixed(4),t=_n.y.toFixed(4),i=_n.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ax(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function nx(e){let t=[];for(let i in e){let s=e[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function ox(e,t){let i={},s=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<s;r++){let a=e.getActiveAttrib(t,r),n=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),i[n]={type:a.type,location:e.getAttribLocation(t,n),locationSize:o}}return i}function ca(e){return e!==""}function ou(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var lx=/^[ \t]*#include +<([\w\d./]+)>/gm;function eh(e){return e.replace(lx,cx)}var hx=new Map;function cx(e,t){let i=it[t];if(i===void 0){let s=hx.get(t);if(s!==void 0)i=it[s],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return eh(i)}var ux=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hu(e){return e.replace(ux,dx)}function dx(e,t,i,s){let r="";for(let a=parseInt(t);a<parseInt(i);a++)r+=s.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function cu(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var px={[Er]:"SHADOWMAP_TYPE_PCF",[la]:"SHADOWMAP_TYPE_VSM"};function fx(e){return px[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var mx={[Ws]:"ENVMAP_TYPE_CUBE",[Cr]:"ENVMAP_TYPE_CUBE",[Dn]:"ENVMAP_TYPE_CUBE_UV"};function gx(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":mx[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var vx={[Cr]:"ENVMAP_MODE_REFRACTION"};function yx(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":vx[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _x={[vu]:"ENVMAP_BLENDING_MULTIPLY",[Pf]:"ENVMAP_BLENDING_MIX",[If]:"ENVMAP_BLENDING_ADD"};function xx(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":_x[e.combine]||"ENVMAP_BLENDING_NONE"}function Sx(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function Mx(e,t,i,s){let r=e.getContext(),a=i.defines,n=i.vertexShader,o=i.fragmentShader,l=fx(i),h=gx(i),u=yx(i),d=xx(i),c=Sx(i),p=ax(i),v=nx(a),S=r.createProgram(),m,f,y=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v].filter(ca).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v].filter(ca).join(`
`),f.length>0&&(f+=`
`)):(m=[cu(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),f=[cu(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+u:"",i.envMap?"#define "+d:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?it.tonemapping_pars_fragment:"",i.toneMapping!==Yi?sx("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,tx("linearToOutputTexel",i.outputColorSpace),rx(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ca).join(`
`)),n=eh(n),n=ou(n,i),n=lu(n,i),o=eh(o),o=ou(o,i),o=lu(o,i),n=hu(n),o=hu(o),i.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",i.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=y+m+n,_=y+f+o,M=ru(r,r.VERTEX_SHADER,b),w=ru(r,r.FRAGMENT_SHADER,_);r.attachShader(S,M),r.attachShader(S,w),i.index0AttributeName!==void 0?r.bindAttribLocation(S,0,i.index0AttributeName):i.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function A(R){if(e.debug.checkShaderErrors){let N=r.getProgramInfoLog(S)||"",W=r.getShaderInfoLog(M)||"",D=r.getShaderInfoLog(w)||"",X=N.trim(),Q=W.trim(),Z=D.trim(),_e=!0,ee=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(_e=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,S,M,w);else{let se=nu(r,M,"vertex"),de=nu(r,w,"fragment");je("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+X+`
`+se+`
`+de)}else X!==""?Xe("WebGLProgram: Program Info Log:",X):(Q===""||Z==="")&&(ee=!1);ee&&(R.diagnostics={runnable:_e,programLog:X,vertexShader:{log:Q,prefix:m},fragmentShader:{log:Z,prefix:f}})}r.deleteShader(M),r.deleteShader(w),g=new wn(r,S),x=ox(r,S)}let g;this.getUniforms=function(){return g===void 0&&A(this),g};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(S,$_)),U},this.destroy=function(){s.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=K_++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=M,this.fragmentShader=w,this}var bx=0,Tx=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ex(e),t.set(e,i)),i}},Ex=class{constructor(e){this.id=bx++,this.code=e,this.usedTimes=0}};function wx(e){return e===js||e===An||e===Rn}function Ax(e,t,i,s,r,a){let n=new uh,o=new Tx,l=new Set,h=[],u=new Map,d=s.logarithmicDepthBuffer,c=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(g){return l.add(g),g===0?"uv":`uv${g}`}function S(g,x,U,R,N,W){let D=R.fog,X=N.geometry,Q=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,Z=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,_e=t.get(g.envMap||Q,Z),ee=_e&&_e.mapping===Dn?_e.image.height:null,se=p[g.type];g.precision!==null&&(c=s.getMaxPrecision(g.precision),c!==g.precision&&Xe("WebGLProgram.getParameters:",g.precision,"not supported, using",c,"instead."));let de=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ve=de!==void 0?de.length:0,De=0;X.morphAttributes.position!==void 0&&(De=1),X.morphAttributes.normal!==void 0&&(De=2),X.morphAttributes.color!==void 0&&(De=3);let ft,$e,te,ce;if(se){let Mt=ji[se];ft=Mt.vertexShader,$e=Mt.fragmentShader}else{ft=g.vertexShader,$e=g.fragmentShader;let Mt=o.getVertexShaderStage(g),nt=o.getFragmentShaderStage(g);o.update(g,Mt,nt),te=Mt.id,ce=nt.id}let ge=e.getRenderTarget(),ze=e.state.buffers.depth.getReversed(),Ie=N.isInstancedMesh===!0,be=N.isBatchedMesh===!0,tt=!!g.map,he=!!g.matcap,le=!!_e,me=!!g.aoMap,Re=!!g.lightMap,Pe=!!g.bumpMap&&g.wireframe===!1,Ue=!!g.normalMap,He=!!g.displacementMap,Ye=!!g.emissiveMap,Ke=!!g.metalnessMap,z=!!g.roughnessMap,mt=g.anisotropy>0,et=g.clearcoat>0,st=g.dispersion>0,P=g.retroreflectivity>0,T=g.iridescence>0,H=g.sheen>0,J=g.transmission>0,L=mt&&!!g.anisotropyMap,O=et&&!!g.clearcoatMap,B=et&&!!g.clearcoatNormalMap,C=et&&!!g.clearcoatRoughnessMap,G=T&&!!g.iridescenceMap,ue=T&&!!g.iridescenceThicknessMap,ve=H&&!!g.sheenColorMap,re=H&&!!g.sheenRoughnessMap,ye=!!g.specularMap,Te=!!g.specularColorMap,Le=!!g.specularIntensityMap,Ge=J&&!!g.transmissionMap,F=J&&!!g.thicknessMap,ie=!!g.gradientMap,oe=!!g.alphaMap,Ee=g.alphaTest>0,pe=!!g.alphaHash,ne=!!g.extensions,xe=Yi;g.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(xe=e.toneMapping);let Oe={shaderID:se,shaderType:g.type,shaderName:g.name,vertexShader:ft,fragmentShader:$e,defines:g.defines,customVertexShaderID:te,customFragmentShaderID:ce,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:c,batching:be,batchingColor:be&&N._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&N.instanceColor!==null,instancingMorph:Ie&&N.morphTexture!==null,outputColorSpace:ge===null?e.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:tt,matcap:he,envMap:le,envMapMode:le&&_e.mapping,envMapCubeUVHeight:ee,aoMap:me,lightMap:Re,bumpMap:Pe,normalMap:Ue,displacementMap:He,emissiveMap:Ye,normalMapObjectSpace:Ue&&g.normalMapType===Uf,normalMapTangentSpace:Ue&&g.normalMapType===Yl,packedNormalMap:Ue&&g.normalMapType===Yl&&wx(g.normalMap.format),metalnessMap:Ke,roughnessMap:z,anisotropy:mt,anisotropyMap:L,clearcoat:et,clearcoatMap:O,clearcoatNormalMap:B,clearcoatRoughnessMap:C,dispersion:st,retroreflection:P,iridescence:T,iridescenceMap:G,iridescenceThicknessMap:ue,sheen:H,sheenColorMap:ve,sheenRoughnessMap:re,specularMap:ye,specularColorMap:Te,specularIntensityMap:Le,transmission:J,transmissionMap:Ge,thicknessMap:F,gradientMap:ie,opaque:g.transparent===!1&&g.blending===ua&&g.alphaToCoverage===!1,alphaMap:oe,alphaTest:Ee,alphaHash:pe,combine:g.combine,mapUv:tt&&v(g.map.channel),aoMapUv:me&&v(g.aoMap.channel),lightMapUv:Re&&v(g.lightMap.channel),bumpMapUv:Pe&&v(g.bumpMap.channel),normalMapUv:Ue&&v(g.normalMap.channel),displacementMapUv:He&&v(g.displacementMap.channel),emissiveMapUv:Ye&&v(g.emissiveMap.channel),metalnessMapUv:Ke&&v(g.metalnessMap.channel),roughnessMapUv:z&&v(g.roughnessMap.channel),anisotropyMapUv:L&&v(g.anisotropyMap.channel),clearcoatMapUv:O&&v(g.clearcoatMap.channel),clearcoatNormalMapUv:B&&v(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:C&&v(g.clearcoatRoughnessMap.channel),iridescenceMapUv:G&&v(g.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&v(g.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&v(g.sheenColorMap.channel),sheenRoughnessMapUv:re&&v(g.sheenRoughnessMap.channel),specularMapUv:ye&&v(g.specularMap.channel),specularColorMapUv:Te&&v(g.specularColorMap.channel),specularIntensityMapUv:Le&&v(g.specularIntensityMap.channel),transmissionMapUv:Ge&&v(g.transmissionMap.channel),thicknessMapUv:F&&v(g.thicknessMap.channel),alphaMapUv:oe&&v(g.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ue||mt),vertexNormals:!!X.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!X.attributes.uv&&(tt||oe),fog:!!D,useFog:g.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||X.attributes.normal===void 0&&Ue===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ze,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ve,morphTextureStride:De,numSunLights:x.sun.length,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numSunLightShadows:x.sunShadowMap.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:xe,decodeVideoTexture:tt&&g.map.isVideoTexture===!0&&ht.getTransfer(g.map.colorSpace)===vt,decodeVideoTextureEmissive:Ye&&g.emissiveMap.isVideoTexture===!0&&ht.getTransfer(g.emissiveMap.colorSpace)===vt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===bi,flipSided:g.side===si,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ne&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&g.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function m(g){let x=[];if(g.shaderID?x.push(g.shaderID):(x.push(g.customVertexShaderID),x.push(g.customFragmentShaderID)),g.defines!==void 0)for(let U in g.defines)x.push(U),x.push(g.defines[U]);return g.isRawShaderMaterial===!1&&(f(x,g),y(x,g),x.push(e.outputColorSpace)),x.push(g.customProgramCacheKey),x.join()}function f(g,x){g.push(x.precision),g.push(x.outputColorSpace),g.push(x.envMapMode),g.push(x.envMapCubeUVHeight),g.push(x.mapUv),g.push(x.alphaMapUv),g.push(x.lightMapUv),g.push(x.aoMapUv),g.push(x.bumpMapUv),g.push(x.normalMapUv),g.push(x.displacementMapUv),g.push(x.emissiveMapUv),g.push(x.metalnessMapUv),g.push(x.roughnessMapUv),g.push(x.anisotropyMapUv),g.push(x.clearcoatMapUv),g.push(x.clearcoatNormalMapUv),g.push(x.clearcoatRoughnessMapUv),g.push(x.iridescenceMapUv),g.push(x.iridescenceThicknessMapUv),g.push(x.sheenColorMapUv),g.push(x.sheenRoughnessMapUv),g.push(x.specularMapUv),g.push(x.specularColorMapUv),g.push(x.specularIntensityMapUv),g.push(x.transmissionMapUv),g.push(x.thicknessMapUv),g.push(x.combine),g.push(x.fogExp2),g.push(x.sizeAttenuation),g.push(x.morphTargetsCount),g.push(x.morphAttributeCount),g.push(x.numSunLights),g.push(x.numDirLights),g.push(x.numPointLights),g.push(x.numSpotLights),g.push(x.numSpotLightMaps),g.push(x.numHemiLights),g.push(x.numRectAreaLights),g.push(x.numSunLightShadows),g.push(x.numDirLightShadows),g.push(x.numPointLightShadows),g.push(x.numSpotLightShadows),g.push(x.numSpotLightShadowsWithMaps),g.push(x.numLightProbes),g.push(x.shadowMapType),g.push(x.toneMapping),g.push(x.numClippingPlanes),g.push(x.numClipIntersection),g.push(x.depthPacking)}function y(g,x){n.disableAll(),x.instancing&&n.enable(0),x.instancingColor&&n.enable(1),x.instancingMorph&&n.enable(2),x.matcap&&n.enable(3),x.envMap&&n.enable(4),x.normalMapObjectSpace&&n.enable(5),x.normalMapTangentSpace&&n.enable(6),x.clearcoat&&n.enable(7),x.iridescence&&n.enable(8),x.alphaTest&&n.enable(9),x.vertexColors&&n.enable(10),x.vertexAlphas&&n.enable(11),x.vertexUv1s&&n.enable(12),x.vertexUv2s&&n.enable(13),x.vertexUv3s&&n.enable(14),x.vertexTangents&&n.enable(15),x.anisotropy&&n.enable(16),x.alphaHash&&n.enable(17),x.batching&&n.enable(18),x.dispersion&&n.enable(19),x.retroreflection&&n.enable(24),x.batchingColor&&n.enable(20),x.gradientMap&&n.enable(21),x.packedNormalMap&&n.enable(22),x.vertexNormals&&n.enable(23),g.push(n.mask),n.disableAll(),x.fog&&n.enable(0),x.useFog&&n.enable(1),x.flatShading&&n.enable(2),x.logarithmicDepthBuffer&&n.enable(3),x.reversedDepthBuffer&&n.enable(4),x.skinning&&n.enable(5),x.morphTargets&&n.enable(6),x.morphNormals&&n.enable(7),x.morphColors&&n.enable(8),x.premultipliedAlpha&&n.enable(9),x.shadowMapEnabled&&n.enable(10),x.doubleSided&&n.enable(11),x.flipSided&&n.enable(12),x.useDepthPacking&&n.enable(13),x.dithering&&n.enable(14),x.transmission&&n.enable(15),x.sheen&&n.enable(16),x.opaque&&n.enable(17),x.pointsUvs&&n.enable(18),x.decodeVideoTexture&&n.enable(19),x.decodeVideoTextureEmissive&&n.enable(20),x.alphaToCoverage&&n.enable(21),x.numLightProbeGrids>0&&n.enable(22),x.hasPositionAttribute&&n.enable(23),g.push(n.mask)}function b(g){let x=p[g.type],U;if(x){let R=ji[x];U=Eg.clone(R.uniforms)}else U=g.uniforms;return U}function _(g,x){let U=u.get(x);return U!==void 0?++U.usedTimes:(U=new Mx(e,x,g,r),h.push(U),u.set(x,U)),U}function M(g){if(--g.usedTimes===0){let x=h.indexOf(g);h[x]=h[h.length-1],h.pop(),u.delete(g.cacheKey),g.destroy()}}function w(g){o.remove(g)}function A(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:b,acquireProgram:_,releaseProgram:M,releaseShaderCache:w,programs:h,dispose:A}}function Rx(){let e=new WeakMap;function t(n){return e.has(n)}function i(n){let o=e.get(n);return o===void 0&&(o={},e.set(n,o)),o}function s(n){e.delete(n)}function r(n,o,l){e.get(n)[o]=l}function a(){e=new WeakMap}return{has:t,get:i,remove:s,update:r,dispose:a}}function Cx(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function uu(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function du(){let e=[],t=0,i=[],s=[],r=[];function a(){t=0,i.length=0,s.length=0,r.length=0}function n(c){let p=0;return c.isInstancedMesh&&(p+=2),c.isSkinnedMesh&&(p+=1),p}function o(c,p,v,S,m,f){let y=e[t];return y===void 0?(y={id:c.id,object:c,geometry:p,material:v,materialVariant:n(c),groupOrder:S,renderOrder:c.renderOrder,z:m,group:f},e[t]=y):(y.id=c.id,y.object=c,y.geometry=p,y.material=v,y.materialVariant=n(c),y.groupOrder=S,y.renderOrder=c.renderOrder,y.z=m,y.group=f),t++,y}function l(c,p,v,S,m,f,y){y.reversedDepth===!0&&(m=-m);let b=o(c,p,v,S,m,f);v.transmission>0?s.push(b):v.transparent===!0?r.push(b):i.push(b)}function h(c,p,v,S,m,f){let y=o(c,p,v,S,m,f);v.transmission>0?s.unshift(y):v.transparent===!0?r.unshift(y):i.unshift(y)}function u(c,p){i.length>1&&i.sort(c||Cx),s.length>1&&s.sort(p||uu),r.length>1&&r.sort(p||uu)}function d(){for(let c=t,p=e.length;c<p;c++){let v=e[c];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:i,transmissive:s,transparent:r,init:a,push:l,unshift:h,finish:d,sort:u}}function Px(){let e=new WeakMap;function t(s,r){let a=e.get(s),n;return a===void 0?(n=new du,e.set(s,[n])):r>=a.length?(n=new du,a.push(n)):n=a[r],n}function i(){e=new WeakMap}return{get:t,dispose:i}}function Ix(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new I,color:new Ze};break;case"SpotLight":i={position:new I,direction:new I,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new I,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":i={direction:new I,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":i={color:new Ze,position:new I,halfWidth:new I,halfHeight:new I};break}return e[t.id]=i,i}}}function Lx(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var Nx=0;function Ux(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Dx(e){let t=new Ix,i=Lx(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);let r=new I,a=new at,n=new at;function o(h){let u=0,d=0,c=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let p=0,v=0,S=0,m=0,f=0,y=0,b=0,_=0,M=0,w=0,A=0,g=0,x=0,U=0;h.sort(Ux);for(let N=0,W=h.length;N<W;N++){let D=h[N],X=D.color,Q=D.intensity,Z=D.distance,_e=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===js?_e=D.shadow.map.texture:_e=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=X.r*Q,d+=X.g*Q,c+=X.b*Q;else if(D.isLightProbe){for(let ee=0;ee<9;ee++)s.probe[ee].addScaledVector(D.sh.coefficients[ee],Q);U++}else if(D.isSunLight){let ee=t.get(D);if(ee.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let se=D.shadow,de=i.get(D);de.shadowIntensity=se.intensity,de.shadowBias=se.bias,de.shadowNormalBias=se.normalBias,de.shadowRadius=se.radius,de.shadowMapSize.copy(se.mapSize).multiply(se.getFrameExtents()),s.sunShadow[v]=de,s.sunShadowMap[v]=_e;let Ve=se.getViewportCount();for(let De=0;De<Ve;De++)s.sunShadowMatrix[S+De]=se.getMatrix(De),s.sunShadowCascade[S+De]=se._cascadeData[De];S+=Ve,v++}s.sun[p]=ee,p++}else if(D.isDirectionalLight){let ee=t.get(D);if(ee.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let se=D.shadow,de=i.get(D);de.shadowIntensity=se.intensity,de.shadowBias=se.bias,de.shadowNormalBias=se.normalBias,de.shadowRadius=se.radius,de.shadowMapSize=se.mapSize,s.directionalShadow[m]=de,s.directionalShadowMap[m]=_e,s.directionalShadowMatrix[m]=D.shadow.matrix,M++}s.directional[m]=ee,m++}else if(D.isSpotLight){let ee=t.get(D);ee.position.setFromMatrixPosition(D.matrixWorld),ee.color.copy(X).multiplyScalar(Q),ee.distance=Z,ee.coneCos=Math.cos(D.angle),ee.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),ee.decay=D.decay,s.spot[y]=ee;let se=D.shadow;if(D.map&&(s.spotLightMap[g]=D.map,g++,se.updateMatrices(D),D.castShadow&&x++),s.spotLightMatrix[y]=se.matrix,D.castShadow){let de=i.get(D);de.shadowIntensity=se.intensity,de.shadowBias=se.bias,de.shadowNormalBias=se.normalBias,de.shadowRadius=se.radius,de.shadowMapSize=se.mapSize,s.spotShadow[y]=de,s.spotShadowMap[y]=_e,A++}y++}else if(D.isRectAreaLight){let ee=t.get(D);ee.color.copy(X).multiplyScalar(Q),ee.halfWidth.set(D.width*.5,0,0),ee.halfHeight.set(0,D.height*.5,0),s.rectArea[b]=ee,b++}else if(D.isPointLight){let ee=t.get(D);if(ee.color.copy(D.color).multiplyScalar(D.intensity),ee.distance=D.distance,ee.decay=D.decay,D.castShadow){let se=D.shadow,de=i.get(D);de.shadowIntensity=se.intensity,de.shadowBias=se.bias,de.shadowNormalBias=se.normalBias,de.shadowRadius=se.radius,de.shadowMapSize=se.mapSize,de.shadowCameraNear=se.camera.near,de.shadowCameraFar=se.camera.far,s.pointShadow[f]=de,s.pointShadowMap[f]=_e,s.pointShadowMatrix[f]=D.shadow.matrix,w++}s.point[f]=ee,f++}else if(D.isHemisphereLight){let ee=t.get(D);ee.skyColor.copy(D.color).multiplyScalar(Q),ee.groundColor.copy(D.groundColor).multiplyScalar(Q),s.hemi[_]=ee,_++}}b>0&&(e.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=we.LTC_FLOAT_1,s.rectAreaLTC2=we.LTC_FLOAT_2):(s.rectAreaLTC1=we.LTC_HALF_1,s.rectAreaLTC2=we.LTC_HALF_2)),s.ambient[0]=u,s.ambient[1]=d,s.ambient[2]=c;let R=s.hash;(R.sunLength!==p||R.directionalLength!==m||R.pointLength!==f||R.spotLength!==y||R.rectAreaLength!==b||R.hemiLength!==_||R.numSunShadows!==v||R.numDirectionalShadows!==M||R.numPointShadows!==w||R.numSpotShadows!==A||R.numSpotMaps!==g||R.numLightProbes!==U)&&(s.sun.length=p,s.directional.length=m,s.spot.length=y,s.rectArea.length=b,s.point.length=f,s.hemi.length=_,s.sunShadow.length=v,s.sunShadowMap.length=v,s.sunShadowMatrix.length=S,s.sunShadowCascade.length=S,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.directionalShadowMatrix.length=M,s.pointShadow.length=w,s.pointShadowMap.length=w,s.pointShadowMatrix.length=w,s.spotShadow.length=A,s.spotShadowMap.length=A,s.spotLightMatrix.length=A+g-x,s.spotLightMap.length=g,s.numSpotLightShadowsWithMaps=x,s.numLightProbes=U,R.sunLength=p,R.directionalLength=m,R.pointLength=f,R.spotLength=y,R.rectAreaLength=b,R.hemiLength=_,R.numSunShadows=v,R.numDirectionalShadows=M,R.numPointShadows=w,R.numSpotShadows=A,R.numSpotMaps=g,R.numLightProbes=U,s.version=Nx++)}function l(h,u){let d=0,c=0,p=0,v=0,S=0,m=0,f=u.matrixWorldInverse;for(let y=0,b=h.length;y<b;y++){let _=h[y];if(_.isSunLight){let M=s.sun[d];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(f),d++}else if(_.isDirectionalLight){let M=s.directional[c];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),c++}else if(_.isSpotLight){let M=s.spot[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),v++}else if(_.isRectAreaLight){let M=s.rectArea[S];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),n.identity(),a.copy(_.matrixWorld),a.premultiply(f),n.extractRotation(a),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(n),M.halfHeight.applyMatrix4(n),S++}else if(_.isPointLight){let M=s.point[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),p++}else if(_.isHemisphereLight){let M=s.hemi[m];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:s}}function pu(e){let t=new Dx(e),i=[],s=[],r=[];function a(c){d.camera=c,i.length=0,s.length=0,r.length=0}function n(c){i.push(c)}function o(c){s.push(c)}function l(c){r.push(c)}function h(){t.setup(i)}function u(c){t.setupView(i,c)}let d={lightsArray:i,shadowsArray:s,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:h,setupLightsView:u,pushLight:n,pushShadow:o,pushLightProbeGrid:l}}function Ox(e){let t=new WeakMap;function i(r,a=0){let n=t.get(r),o;return n===void 0?(o=new pu(e),t.set(r,[o])):a>=n.length?(o=new pu(e),n.push(o)):o=n[a],o}function s(){t=new WeakMap}return{get:i,dispose:s}}var Bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fx=`uniform sampler2D shadow_pass;
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
}`,zx=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],kx=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],fu=new at,oa=new I,ll=new I;function Hx(e,t,i){let s=new Lr,r=new fe,a=new fe,n=new Rt,o=new Cg,l=new Pg,h={},u=i.maxTextureSize,d={[hs]:si,[si]:hs,[bi]:bi},c=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:Bx,fragmentShader:Fx}),p=c.clone();p.defines.HORIZONTAL_PASS=1;let v=new pt;v.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new ut(v,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Er;let f=this.type;this.render=function(w,A,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===uf&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Er);let x=e.getRenderTarget(),U=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),N=e.state;N.setBlending(os),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let W=f!==this.type;W&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(X=>X.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,X=w.length;D<X;D++){let Q=w[D],Z=Q.shadow;if(Z===void 0){Xe("WebGLShadowMap:",Q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);let _e=Z.getFrameExtents();r.multiply(_e),a.copy(Z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/_e.x),r.x=a.x*_e.x,Z.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/_e.y),r.y=a.y*_e.y,Z.mapSize.y=a.y));let ee=e.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=ee,Z.map===null||W===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===la){if(Q.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Ni(r.x,r.y,{format:js,type:$i,minFilter:ii,magFilter:ii,generateMipmaps:!1}),Z.map.texture.name=Q.name+".shadowMap",Z.map.depthTexture=new xa(r.x,r.y,Xi),Z.map.depthTexture.name=Q.name+".shadowMapDepth",Z.map.depthTexture.format=cs,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Qt,Z.map.depthTexture.magFilter=Qt}else Q.isPointLight?(Z.map=new Rd(r.x),Z.map.depthTexture=new Dm(r.x,Ji)):(Z.map=new Ni(r.x,r.y),Z.map.depthTexture=new xa(r.x,r.y,Ji)),Z.map.depthTexture.name=Q.name+".shadowMap",Z.map.depthTexture.format=cs,this.type===Er?(Z.map.depthTexture.compareFunction=ee?lh:oh,Z.map.depthTexture.minFilter=ii,Z.map.depthTexture.magFilter=ii):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Qt,Z.map.depthTexture.magFilter=Qt);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==r.x||Z.map.height!==r.y)&&Z.map.setSize(r.x,r.y);let se=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();Q.isPointLight!==!0&&Z.updateMatrices(Q,g);for(let de=0;de<se;de++){let Ve=Z.getCamera(de);if(Q.isPointLight){let De=Z.camera,ft=Z.matrix,$e=Q.distance||De.far;$e!==De.far&&(De.far=$e,De.updateProjectionMatrix()),oa.setFromMatrixPosition(Q.matrixWorld),De.position.copy(oa),ll.copy(De.position),ll.add(zx[de]),De.up.copy(kx[de]),De.lookAt(ll),De.updateMatrixWorld(),ft.makeTranslation(-oa.x,-oa.y,-oa.z),fu.multiplyMatrices(De.projectionMatrix,De.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(fu,De.coordinateSystem,De.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)e.setRenderTarget(Z.map,de),e.clear();else{de===0&&(e.setRenderTarget(Z.map),e.clear());let De=Z.getViewport(de);n.set(a.x*De.x,a.y*De.y,a.x*De.z,a.y*De.w),N.viewport(n)}s=Z.getFrustum(de),_(A,g,Ve,Q,this.type)}Z.isPointLightShadow!==!0&&this.type===la&&y(Z,g),Z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(x,U,R)};function y(w,A){let g=t.update(S);c.defines.VSM_SAMPLES!==w.blurSamples&&(c.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,c.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ni(r.x,r.y,{format:js,type:$i}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),c.uniforms.shadow_pass.value=w.map.depthTexture,c.uniforms.resolution.value.set(w.map.width,w.map.height),c.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(A,null,g,c,S,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(A,null,g,p,S,null)}function b(w,A,g,x){let U=null,R=g.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)U=R;else if(U=g.isPointLight===!0?l:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=U.uuid,W=A.uuid,D=h[N];D===void 0&&(D={},h[N]=D);let X=D[W];X===void 0&&(X=U.clone(),D[W]=X,A.addEventListener("dispose",M)),U=X}if(U.visible=A.visible,U.wireframe=A.wireframe,x===la?U.side=A.shadowSide!==null?A.shadowSide:A.side:U.side=A.shadowSide!==null?A.shadowSide:d[A.side],U.alphaMap=A.alphaMap,U.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,U.map=A.map,U.clipShadows=A.clipShadows,U.clippingPlanes=A.clippingPlanes,U.clipIntersection=A.clipIntersection,U.displacementMap=A.displacementMap,U.displacementScale=A.displacementScale,U.displacementBias=A.displacementBias,U.wireframeLinewidth=A.wireframeLinewidth,U.linewidth=A.linewidth,g.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let N=e.properties.get(U);N.light=g}return U}function _(w,A,g,x,U){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===la)&&(!w.frustumCulled||w.intersectsFrustum(s))){w.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,w.matrixWorld);let N=t.update(w),W=w.material;if(Array.isArray(W)){let D=N.groups;for(let X=0,Q=D.length;X<Q;X++){let Z=D[X],_e=W[Z.materialIndex];if(_e&&_e.visible){let ee=b(w,_e,x,U);w.onBeforeShadow(e,w,A,g,N,ee,Z),e.renderBufferDirect(g,null,N,ee,w,Z),w.onAfterShadow(e,w,A,g,N,ee,Z)}}}else if(W.visible){let D=b(w,W,x,U);w.onBeforeShadow(e,w,A,g,N,D,null),e.renderBufferDirect(g,null,N,D,w,null),w.onAfterShadow(e,w,A,g,N,D,null)}}let R=w.children;for(let N=0,W=R.length;N<W;N++)_(R[N],A,g,x,U)}function M(w){w.target.removeEventListener("dispose",M);for(let A in h){let g=h[A],x=w.target.uuid;x in g&&(g[x].dispose(),delete g[x])}}}function Gx(e,t){function i(){let F=!1,ie=new Rt,oe=null,Ee=new Rt(0,0,0,0);return{setMask:function(pe){oe!==pe&&!F&&(e.colorMask(pe,pe,pe,pe),oe=pe)},setLocked:function(pe){F=pe},setClear:function(pe,ne,xe,Oe,Mt){Mt===!0&&(pe*=Oe,ne*=Oe,xe*=Oe),ie.set(pe,ne,xe,Oe),Ee.equals(ie)===!1&&(e.clearColor(pe,ne,xe,Oe),Ee.copy(ie))},reset:function(){F=!1,oe=null,Ee.set(-1,0,0,0)}}}function s(){let F=!1,ie=!1,oe=null,Ee=null,pe=null;return{setReversed:function(ne){if(ie!==ne){let xe=t.get("EXT_clip_control");ne?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ie=ne;let Oe=pe;pe=null,this.setClear(Oe)}},getReversed:function(){return ie},setTest:function(ne){ne?ge(e.DEPTH_TEST):ze(e.DEPTH_TEST)},setMask:function(ne){oe!==ne&&!F&&(e.depthMask(ne),oe=ne)},setFunc:function(ne){if(ie&&(ne=Xf[ne]),Ee!==ne){switch(ne){case hl:e.depthFunc(e.NEVER);break;case cl:e.depthFunc(e.ALWAYS);break;case ul:e.depthFunc(e.LESS);break;case ma:e.depthFunc(e.LEQUAL);break;case dl:e.depthFunc(e.EQUAL);break;case pl:e.depthFunc(e.GEQUAL);break;case fl:e.depthFunc(e.GREATER);break;case ml:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Ee=ne}},setLocked:function(ne){F=ne},setClear:function(ne){pe!==ne&&(pe=ne,ie&&(ne=1-ne),e.clearDepth(ne))},reset:function(){F=!1,oe=null,Ee=null,pe=null,ie=!1}}}function r(){let F=!1,ie=null,oe=null,Ee=null,pe=null,ne=null,xe=null,Oe=null,Mt=null;return{setTest:function(nt){F||(nt?ge(e.STENCIL_TEST):ze(e.STENCIL_TEST))},setMask:function(nt){ie!==nt&&!F&&(e.stencilMask(nt),ie=nt)},setFunc:function(nt,xi,Ei){(oe!==nt||Ee!==xi||pe!==Ei)&&(e.stencilFunc(nt,xi,Ei),oe=nt,Ee=xi,pe=Ei)},setOp:function(nt,xi,Ei){(ne!==nt||xe!==xi||Oe!==Ei)&&(e.stencilOp(nt,xi,Ei),ne=nt,xe=xi,Oe=Ei)},setLocked:function(nt){F=nt},setClear:function(nt){Mt!==nt&&(e.clearStencil(nt),Mt=nt)},reset:function(){F=!1,ie=null,oe=null,Ee=null,pe=null,ne=null,xe=null,Oe=null,Mt=null}}}let a=new i,n=new s,o=new r,l=new WeakMap,h=new WeakMap,u={},d={},c={},p=new WeakMap,v=[],S=null,m=!1,f=null,y=null,b=null,_=null,M=null,w=null,A=null,g=new Ze(0,0,0),x=0,U=!1,R=null,N=null,W=null,D=null,X=null,Q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,_e=0,ee=e.getParameter(e.VERSION);ee.indexOf("WebGL")!==-1?(_e=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Z=_e>=1):ee.indexOf("OpenGL ES")!==-1&&(_e=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Z=_e>=2);let se=null,de={},Ve=e.getParameter(e.SCISSOR_BOX),De=e.getParameter(e.VIEWPORT),ft=new Rt().fromArray(Ve),$e=new Rt().fromArray(De);function te(F,ie,oe,Ee){let pe=new Uint8Array(4),ne=e.createTexture();e.bindTexture(F,ne),e.texParameteri(F,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(F,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let xe=0;xe<oe;xe++)F===e.TEXTURE_3D||F===e.TEXTURE_2D_ARRAY?e.texImage3D(ie,0,e.RGBA,1,1,Ee,0,e.RGBA,e.UNSIGNED_BYTE,pe):e.texImage2D(ie+xe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,pe);return ne}let ce={};ce[e.TEXTURE_2D]=te(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=te(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=te(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=te(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),n.setClear(1),o.setClear(0),ge(e.DEPTH_TEST),n.setFunc(ma),Pe(!1),Ue(Qh),ge(e.CULL_FACE),me(os);function ge(F){u[F]!==!0&&(e.enable(F),u[F]=!0)}function ze(F){u[F]!==!1&&(e.disable(F),u[F]=!1)}function Ie(F,ie){return c[F]!==ie?(e.bindFramebuffer(F,ie),c[F]=ie,F===e.DRAW_FRAMEBUFFER&&(c[e.FRAMEBUFFER]=ie),F===e.FRAMEBUFFER&&(c[e.DRAW_FRAMEBUFFER]=ie),!0):!1}function be(F,ie){let oe=v,Ee=!1;if(F){oe=p.get(ie),oe===void 0&&(oe=[],p.set(ie,oe));let pe=F.textures;if(oe.length!==pe.length||oe[0]!==e.COLOR_ATTACHMENT0){for(let ne=0,xe=pe.length;ne<xe;ne++)oe[ne]=e.COLOR_ATTACHMENT0+ne;oe.length=pe.length,Ee=!0}}else oe[0]!==e.BACK&&(oe[0]=e.BACK,Ee=!0);Ee&&e.drawBuffers(oe)}function tt(F){return S!==F?(e.useProgram(F),S=F,!0):!1}let he={[Sr]:e.FUNC_ADD,[pf]:e.FUNC_SUBTRACT,[ff]:e.FUNC_REVERSE_SUBTRACT};he[mf]=e.MIN,he[gf]=e.MAX;let le={[vf]:e.ZERO,[yf]:e.ONE,[_f]:e.SRC_COLOR,[mu]:e.SRC_ALPHA,[Ef]:e.SRC_ALPHA_SATURATE,[bf]:e.DST_COLOR,[Sf]:e.DST_ALPHA,[xf]:e.ONE_MINUS_SRC_COLOR,[gu]:e.ONE_MINUS_SRC_ALPHA,[Tf]:e.ONE_MINUS_DST_COLOR,[Mf]:e.ONE_MINUS_DST_ALPHA,[wf]:e.CONSTANT_COLOR,[Af]:e.ONE_MINUS_CONSTANT_COLOR,[Rf]:e.CONSTANT_ALPHA,[Cf]:e.ONE_MINUS_CONSTANT_ALPHA};function me(F,ie,oe,Ee,pe,ne,xe,Oe,Mt,nt){if(F===os){m===!0&&(ze(e.BLEND),m=!1);return}if(m===!1&&(ge(e.BLEND),m=!0),F!==df){if(F!==f||nt!==U){if((y!==Sr||M!==Sr)&&(e.blendEquation(e.FUNC_ADD),y=Sr,M=Sr),nt)switch(F){case ua:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case kt:e.blendFunc(e.ONE,e.ONE);break;case ec:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case tc:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:je("WebGLState: Invalid blending: ",F);break}else switch(F){case ua:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case kt:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case ec:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tc:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",F);break}b=null,_=null,w=null,A=null,g.set(0,0,0),x=0,f=F,U=nt}return}pe=pe||ie,ne=ne||oe,xe=xe||Ee,(ie!==y||pe!==M)&&(e.blendEquationSeparate(he[ie],he[pe]),y=ie,M=pe),(oe!==b||Ee!==_||ne!==w||xe!==A)&&(e.blendFuncSeparate(le[oe],le[Ee],le[ne],le[xe]),b=oe,_=Ee,w=ne,A=xe),(Oe.equals(g)===!1||Mt!==x)&&(e.blendColor(Oe.r,Oe.g,Oe.b,Mt),g.copy(Oe),x=Mt),f=F,U=!1}function Re(F,ie){F.side===bi?ze(e.CULL_FACE):ge(e.CULL_FACE);let oe=F.side===si;ie&&(oe=!oe),Pe(oe),F.blending===ua&&F.transparent===!1?me(os):me(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),n.setFunc(F.depthFunc),n.setTest(F.depthTest),n.setMask(F.depthWrite),a.setMask(F.colorWrite);let Ee=F.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ye(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ge(e.SAMPLE_ALPHA_TO_COVERAGE):ze(e.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(F){R!==F&&(F?e.frontFace(e.CW):e.frontFace(e.CCW),R=F)}function Ue(F){F!==hf?(ge(e.CULL_FACE),F!==N&&(F===Qh?e.cullFace(e.BACK):F===cf?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ze(e.CULL_FACE),N=F}function He(F){F!==W&&(Z&&e.lineWidth(F),W=F)}function Ye(F,ie,oe){F?(ge(e.POLYGON_OFFSET_FILL),(D!==ie||X!==oe)&&(D=ie,X=oe,n.getReversed()&&(ie=-ie),e.polygonOffset(ie,oe))):ze(e.POLYGON_OFFSET_FILL)}function Ke(F){F?ge(e.SCISSOR_TEST):ze(e.SCISSOR_TEST)}function z(F){F===void 0&&(F=e.TEXTURE0+Q-1),se!==F&&(e.activeTexture(F),se=F)}function mt(F,ie,oe){oe===void 0&&(se===null?oe=e.TEXTURE0+Q-1:oe=se);let Ee=de[oe];Ee===void 0&&(Ee={type:void 0,texture:void 0},de[oe]=Ee),(Ee.type!==F||Ee.texture!==ie)&&(se!==oe&&(e.activeTexture(oe),se=oe),e.bindTexture(F,ie||ce[F]),Ee.type=F,Ee.texture=ie)}function et(){let F=de[se];F!==void 0&&F.type!==void 0&&(e.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function st(){try{e.compressedTexImage2D(...arguments)}catch(F){je("WebGLState:",F)}}function P(){try{e.compressedTexImage3D(...arguments)}catch(F){je("WebGLState:",F)}}function T(){try{e.texSubImage2D(...arguments)}catch(F){je("WebGLState:",F)}}function H(){try{e.texSubImage3D(...arguments)}catch(F){je("WebGLState:",F)}}function J(){try{e.compressedTexSubImage2D(...arguments)}catch(F){je("WebGLState:",F)}}function L(){try{e.compressedTexSubImage3D(...arguments)}catch(F){je("WebGLState:",F)}}function O(){try{e.texStorage2D(...arguments)}catch(F){je("WebGLState:",F)}}function B(){try{e.texStorage3D(...arguments)}catch(F){je("WebGLState:",F)}}function C(){try{e.texImage2D(...arguments)}catch(F){je("WebGLState:",F)}}function G(){try{e.texImage3D(...arguments)}catch(F){je("WebGLState:",F)}}function ue(F){return d[F]!==void 0?d[F]:e.getParameter(F)}function ve(F,ie){d[F]!==ie&&(e.pixelStorei(F,ie),d[F]=ie)}function re(F){ft.equals(F)===!1&&(e.scissor(F.x,F.y,F.z,F.w),ft.copy(F))}function ye(F){$e.equals(F)===!1&&(e.viewport(F.x,F.y,F.z,F.w),$e.copy(F))}function Te(F,ie){let oe=h.get(ie);oe===void 0&&(oe=new WeakMap,h.set(ie,oe));let Ee=oe.get(F);Ee===void 0&&(Ee=e.getUniformBlockIndex(ie,F.name),oe.set(F,Ee))}function Le(F,ie){let oe=h.get(ie).get(F);l.get(ie)!==oe&&(e.uniformBlockBinding(ie,oe,F.__bindingPointIndex),l.set(ie,oe))}function Ge(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),n.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},se=null,de={},c={},p=new WeakMap,v=[],S=null,m=!1,f=null,y=null,b=null,_=null,M=null,w=null,A=null,g=new Ze(0,0,0),x=0,U=!1,R=null,N=null,W=null,D=null,X=null,ft.set(0,0,e.canvas.width,e.canvas.height),$e.set(0,0,e.canvas.width,e.canvas.height),a.reset(),n.reset(),o.reset()}return{buffers:{color:a,depth:n,stencil:o},enable:ge,disable:ze,bindFramebuffer:Ie,drawBuffers:be,useProgram:tt,setBlending:me,setMaterial:Re,setFlipSided:Pe,setCullFace:Ue,setLineWidth:He,setPolygonOffset:Ye,setScissorTest:Ke,activeTexture:z,bindTexture:mt,unbindTexture:et,compressedTexImage2D:st,compressedTexImage3D:P,texImage2D:C,texImage3D:G,pixelStorei:ve,getParameter:ue,updateUBOMapping:Te,uniformBlockBinding:Le,texStorage2D:O,texStorage3D:B,texSubImage2D:T,texSubImage3D:H,compressedTexSubImage2D:J,compressedTexSubImage3D:L,scissor:re,viewport:ye,reset:Ge}}function Vx(e,t,i,s,r,a,n){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new fe,u=new WeakMap,d=new Set,c,p=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,T){return v?new OffscreenCanvas(P,T):Ln("canvas")}function m(P,T,H){let J=1,L=st(P);if((L.width>H||L.height>H)&&(J=H/Math.max(L.width,L.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let O=Math.floor(J*L.width),B=Math.floor(J*L.height);c===void 0&&(c=S(O,B));let C=T?S(O,B):c;return C.width=O,C.height=B,C.getContext("2d").drawImage(P,0,0,O,B),Xe("WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+O+"x"+B+")."),C}else return"data"in P&&Xe("WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),P;return P}function f(P){return P.generateMipmaps}function y(P){e.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?e.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(P,T,H,J,L,O=!1){if(P!==null){if(e[P]!==void 0)return e[P];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let B;J&&(B=t.get("EXT_texture_norm16"),B||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let C=T;if(T===e.RED&&(H===e.FLOAT&&(C=e.R32F),H===e.HALF_FLOAT&&(C=e.R16F),H===e.UNSIGNED_BYTE&&(C=e.R8),H===e.UNSIGNED_SHORT&&B&&(C=B.R16_EXT),H===e.SHORT&&B&&(C=B.R16_SNORM_EXT)),T===e.RED_INTEGER&&(H===e.UNSIGNED_BYTE&&(C=e.R8UI),H===e.UNSIGNED_SHORT&&(C=e.R16UI),H===e.UNSIGNED_INT&&(C=e.R32UI),H===e.BYTE&&(C=e.R8I),H===e.SHORT&&(C=e.R16I),H===e.INT&&(C=e.R32I)),T===e.RG&&(H===e.FLOAT&&(C=e.RG32F),H===e.HALF_FLOAT&&(C=e.RG16F),H===e.UNSIGNED_BYTE&&(C=e.RG8),H===e.UNSIGNED_SHORT&&B&&(C=B.RG16_EXT),H===e.SHORT&&B&&(C=B.RG16_SNORM_EXT)),T===e.RG_INTEGER&&(H===e.UNSIGNED_BYTE&&(C=e.RG8UI),H===e.UNSIGNED_SHORT&&(C=e.RG16UI),H===e.UNSIGNED_INT&&(C=e.RG32UI),H===e.BYTE&&(C=e.RG8I),H===e.SHORT&&(C=e.RG16I),H===e.INT&&(C=e.RG32I)),T===e.RGB_INTEGER&&(H===e.UNSIGNED_BYTE&&(C=e.RGB8UI),H===e.UNSIGNED_SHORT&&(C=e.RGB16UI),H===e.UNSIGNED_INT&&(C=e.RGB32UI),H===e.BYTE&&(C=e.RGB8I),H===e.SHORT&&(C=e.RGB16I),H===e.INT&&(C=e.RGB32I)),T===e.RGBA_INTEGER&&(H===e.UNSIGNED_BYTE&&(C=e.RGBA8UI),H===e.UNSIGNED_SHORT&&(C=e.RGBA16UI),H===e.UNSIGNED_INT&&(C=e.RGBA32UI),H===e.BYTE&&(C=e.RGBA8I),H===e.SHORT&&(C=e.RGBA16I),H===e.INT&&(C=e.RGBA32I)),T===e.RGB&&(H===e.UNSIGNED_SHORT&&B&&(C=B.RGB16_EXT),H===e.SHORT&&B&&(C=B.RGB16_SNORM_EXT),H===e.UNSIGNED_INT_5_9_9_9_REV&&(C=e.RGB9_E5),H===e.UNSIGNED_INT_10F_11F_11F_REV&&(C=e.R11F_G11F_B10F)),T===e.RGBA){let G=O?In:ht.getTransfer(L);H===e.FLOAT&&(C=e.RGBA32F),H===e.HALF_FLOAT&&(C=e.RGBA16F),H===e.UNSIGNED_BYTE&&(C=G===vt?e.SRGB8_ALPHA8:e.RGBA8),H===e.UNSIGNED_SHORT&&B&&(C=B.RGBA16_EXT),H===e.SHORT&&B&&(C=B.RGBA16_SNORM_EXT),H===e.UNSIGNED_SHORT_4_4_4_4&&(C=e.RGBA4),H===e.UNSIGNED_SHORT_5_5_5_1&&(C=e.RGB5_A1)}return(C===e.R16F||C===e.R32F||C===e.RG16F||C===e.RG32F||C===e.RGBA16F||C===e.RGBA32F)&&t.get("EXT_color_buffer_float"),C}function M(P,T){let H;return P?T===null||T===Ji||T===va?H=e.DEPTH24_STENCIL8:T===Xi?H=e.DEPTH32F_STENCIL8:T===ga&&(H=e.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ji||T===va?H=e.DEPTH_COMPONENT24:T===Xi?H=e.DEPTH_COMPONENT32F:T===ga&&(H=e.DEPTH_COMPONENT16),H}function w(P,T){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==Qt&&P.minFilter!==ii?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function A(P){let T=P.target;T.removeEventListener("dispose",A),x(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&d.delete(T)}function g(P){let T=P.target;T.removeEventListener("dispose",g),R(T)}function x(P){let T=s.get(P);if(T.__webglInit===void 0)return;let H=P.source,J=p.get(H);if(J){let L=J[T.__cacheKey];L.usedTimes--,L.usedTimes===0&&U(P),Object.keys(J).length===0&&p.delete(H)}s.remove(P)}function U(P){let T=s.get(P);e.deleteTexture(T.__webglTexture);let H=P.source,J=p.get(H);delete J[T.__cacheKey],n.memory.textures--}function R(P){let T=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let L=0;L<T.__webglFramebuffer[J].length;L++)e.deleteFramebuffer(T.__webglFramebuffer[J][L]);else e.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&e.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)e.deleteFramebuffer(T.__webglFramebuffer[J]);else e.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&e.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&e.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&e.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&e.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let H=P.textures;for(let J=0,L=H.length;J<L;J++){let O=s.get(H[J]);O.__webglTexture&&(e.deleteTexture(O.__webglTexture),n.memory.textures--),s.remove(H[J])}s.remove(P)}let N=0;function W(){N=0}function D(){return N}function X(P){N=P}function Q(){let P=N;return P>=r.maxTextures&&Xe("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),N+=1,P}function Z(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function _e(P,T){let H=s.get(P);if(P.isVideoTexture&&mt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){let J=P.image;if(J===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{ze(H,P,T);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,H.__webglTexture,e.TEXTURE0+T)}function ee(P,T){let H=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){ze(H,P,T);return}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,H.__webglTexture,e.TEXTURE0+T)}function se(P,T){let H=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){ze(H,P,T);return}i.bindTexture(e.TEXTURE_3D,H.__webglTexture,e.TEXTURE0+T)}function de(P,T){let H=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&H.__version!==P.version){Ie(H,P,T);return}i.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture,e.TEXTURE0+T)}let Ve={[Ui]:e.REPEAT,[ns]:e.CLAMP_TO_EDGE,[gl]:e.MIRRORED_REPEAT},De={[Qt]:e.NEAREST,[Lf]:e.NEAREST_MIPMAP_NEAREST,[Ha]:e.NEAREST_MIPMAP_LINEAR,[ii]:e.LINEAR,[Ao]:e.LINEAR_MIPMAP_NEAREST,[Hs]:e.LINEAR_MIPMAP_LINEAR},ft={[Of]:e.NEVER,[Hf]:e.ALWAYS,[Bf]:e.LESS,[oh]:e.LEQUAL,[Ff]:e.EQUAL,[lh]:e.GEQUAL,[zf]:e.GREATER,[kf]:e.NOTEQUAL};function $e(P,T){if(T.type===Xi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===ii||T.magFilter===Ao||T.magFilter===Ha||T.magFilter===Hs||T.minFilter===ii||T.minFilter===Ao||T.minFilter===Ha||T.minFilter===Hs)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(P,e.TEXTURE_WRAP_S,Ve[T.wrapS]),e.texParameteri(P,e.TEXTURE_WRAP_T,Ve[T.wrapT]),(P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY)&&e.texParameteri(P,e.TEXTURE_WRAP_R,Ve[T.wrapR]),e.texParameteri(P,e.TEXTURE_MAG_FILTER,De[T.magFilter]),e.texParameteri(P,e.TEXTURE_MIN_FILTER,De[T.minFilter]),T.compareFunction&&(e.texParameteri(P,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(P,e.TEXTURE_COMPARE_FUNC,ft[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Qt||T.minFilter!==Ha&&T.minFilter!==Hs||T.type===Xi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");e.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function te(P,T){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",A));let J=T.source,L=p.get(J);L===void 0&&(L={},p.set(J,L));let O=Z(T);if(O!==P.__cacheKey){L[O]===void 0&&(L[O]={texture:e.createTexture(),usedTimes:0},n.memory.textures++,H=!0),L[O].usedTimes++;let B=L[P.__cacheKey];B!==void 0&&(L[P.__cacheKey].usedTimes--,B.usedTimes===0&&U(T)),P.__cacheKey=O,P.__webglTexture=L[O].texture}return H}function ce(P,T,H){return Math.floor(Math.floor(P/H)/T)}function ge(P,T,H,J){let L=P.updateRanges;if(L.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,T.width,T.height,H,J,T.data);else{L.sort((ue,ve)=>ue.start-ve.start);let O=0;for(let ue=1;ue<L.length;ue++){let ve=L[O],re=L[ue],ye=ve.start+ve.count,Te=ce(re.start,T.width,4),Le=ce(ve.start,T.width,4);re.start<=ye+1&&Te===Le&&ce(re.start+re.count-1,T.width,4)===Te?ve.count=Math.max(ve.count,re.start+re.count-ve.start):(++O,L[O]=re)}L.length=O+1;let B=i.getParameter(e.UNPACK_ROW_LENGTH),C=i.getParameter(e.UNPACK_SKIP_PIXELS),G=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,T.width);for(let ue=0,ve=L.length;ue<ve;ue++){let re=L[ue],ye=Math.floor(re.start/4),Te=Math.ceil(re.count/4),Le=ye%T.width,Ge=Math.floor(ye/T.width),F=Te;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Le),i.pixelStorei(e.UNPACK_SKIP_ROWS,Ge),i.texSubImage2D(e.TEXTURE_2D,0,Le,Ge,F,1,H,J,T.data)}P.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,B),i.pixelStorei(e.UNPACK_SKIP_PIXELS,C),i.pixelStorei(e.UNPACK_SKIP_ROWS,G)}}function ze(P,T,H){let J=e.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=e.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=e.TEXTURE_3D);let L=te(P,T),O=T.source;i.bindTexture(J,P.__webglTexture,e.TEXTURE0+H);let B=s.get(O);if(O.version!==B.__version||L===!0){if(i.activeTexture(e.TEXTURE0+H),!(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)){let ie=ht.getPrimaries(ht.workingColorSpace),oe=T.colorSpace===Ts?null:ht.getPrimaries(T.colorSpace),Ee=T.colorSpace===Ts||ie===oe?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}i.pixelStorei(e.UNPACK_ALIGNMENT,T.unpackAlignment);let C=m(T.image,!1,r.maxTextureSize);C=et(T,C);let G=a.convert(T.format,T.colorSpace),ue=a.convert(T.type),ve=_(T.internalFormat,G,ue,T.normalized,T.colorSpace,T.isVideoTexture);$e(J,T);let re,ye=T.mipmaps,Te=T.isVideoTexture!==!0,Le=B.__version===void 0||L===!0,Ge=O.dataReady,F=w(T,C);if(T.isDepthTexture)ve=M(T.format===Gs,T.type),Le&&(Te?i.texStorage2D(e.TEXTURE_2D,1,ve,C.width,C.height):i.texImage2D(e.TEXTURE_2D,0,ve,C.width,C.height,0,G,ue,null));else if(T.isDataTexture)if(ye.length>0){Te&&Le&&i.texStorage2D(e.TEXTURE_2D,F,ve,ye[0].width,ye[0].height);for(let ie=0,oe=ye.length;ie<oe;ie++)re=ye[ie],Te?Ge&&i.texSubImage2D(e.TEXTURE_2D,ie,0,0,re.width,re.height,G,ue,re.data):i.texImage2D(e.TEXTURE_2D,ie,ve,re.width,re.height,0,G,ue,re.data);T.generateMipmaps=!1}else Te?(Le&&i.texStorage2D(e.TEXTURE_2D,F,ve,C.width,C.height),Ge&&ge(T,C,G,ue)):i.texImage2D(e.TEXTURE_2D,0,ve,C.width,C.height,0,G,ue,C.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Te&&Le&&i.texStorage3D(e.TEXTURE_2D_ARRAY,F,ve,ye[0].width,ye[0].height,C.depth);for(let ie=0,oe=ye.length;ie<oe;ie++)if(re=ye[ie],T.format!==Ii)if(G!==null)if(Te){if(Ge)if(T.layerUpdates.size>0){let Ee=Xc(re.width,re.height,T.format,T.type);for(let pe of T.layerUpdates){let ne=re.data.subarray(pe*Ee/re.data.BYTES_PER_ELEMENT,(pe+1)*Ee/re.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ie,0,0,pe,re.width,re.height,1,G,ne)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ie,0,0,0,re.width,re.height,C.depth,G,re.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ie,ve,re.width,re.height,C.depth,0,re.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?Ge&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,ie,0,0,0,re.width,re.height,C.depth,G,ue,re.data):i.texImage3D(e.TEXTURE_2D_ARRAY,ie,ve,re.width,re.height,C.depth,0,G,ue,re.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Te&&Le&&i.texStorage2D(e.TEXTURE_2D,F,ve,ye[0].width,ye[0].height);for(let ie=0,oe=ye.length;ie<oe;ie++)re=ye[ie],T.format!==Ii?G!==null?Te?Ge&&i.compressedTexSubImage2D(e.TEXTURE_2D,ie,0,0,re.width,re.height,G,re.data):i.compressedTexImage2D(e.TEXTURE_2D,ie,ve,re.width,re.height,0,re.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?Ge&&i.texSubImage2D(e.TEXTURE_2D,ie,0,0,re.width,re.height,G,ue,re.data):i.texImage2D(e.TEXTURE_2D,ie,ve,re.width,re.height,0,G,ue,re.data)}else if(T.isDataArrayTexture)if(Te){if(Le&&i.texStorage3D(e.TEXTURE_2D_ARRAY,F,ve,C.width,C.height,C.depth),Ge)if(T.layerUpdates.size>0){let ie=Xc(C.width,C.height,T.format,T.type);for(let oe of T.layerUpdates){let Ee=C.data.subarray(oe*ie/C.data.BYTES_PER_ELEMENT,(oe+1)*ie/C.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,oe,C.width,C.height,1,G,ue,Ee)}T.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,C.width,C.height,C.depth,G,ue,C.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,ve,C.width,C.height,C.depth,0,G,ue,C.data);else if(T.isData3DTexture)Te?(Le&&i.texStorage3D(e.TEXTURE_3D,F,ve,C.width,C.height,C.depth),Ge&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,C.width,C.height,C.depth,G,ue,C.data)):i.texImage3D(e.TEXTURE_3D,0,ve,C.width,C.height,C.depth,0,G,ue,C.data);else if(T.isFramebufferTexture){if(Le)if(Te)i.texStorage2D(e.TEXTURE_2D,F,ve,C.width,C.height);else{let ie=C.width,oe=C.height;for(let Ee=0;Ee<F;Ee++)i.texImage2D(e.TEXTURE_2D,Ee,ve,ie,oe,0,G,ue,null),ie>>=1,oe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in e){let ie=e.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),C.parentNode!==ie){ie.appendChild(C),d.add(T),ie.onpaint=oe=>{let Ee=oe.changedElements;for(let pe of d)Ee.includes(pe.image)&&(pe.needsUpdate=!0)},ie.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,C);else{let oe=e.RGBA,Ee=e.RGBA,pe=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,oe,Ee,pe,C)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(ye.length>0){if(Te&&Le){let ie=st(ye[0]);i.texStorage2D(e.TEXTURE_2D,F,ve,ie.width,ie.height)}for(let ie=0,oe=ye.length;ie<oe;ie++)re=ye[ie],Te?Ge&&i.texSubImage2D(e.TEXTURE_2D,ie,0,0,G,ue,re):i.texImage2D(e.TEXTURE_2D,ie,ve,G,ue,re);T.generateMipmaps=!1}else if(Te){if(Le){let ie=st(C);i.texStorage2D(e.TEXTURE_2D,F,ve,ie.width,ie.height)}Ge&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,G,ue,C)}else i.texImage2D(e.TEXTURE_2D,0,ve,G,ue,C);f(T)&&y(J),B.__version=O.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Ie(P,T,H){if(T.image.length!==6)return;let J=te(P,T),L=T.source;i.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+H);let O=s.get(L);if(L.version!==O.__version||J===!0){i.activeTexture(e.TEXTURE0+H);let B=ht.getPrimaries(ht.workingColorSpace),C=T.colorSpace===Ts?null:ht.getPrimaries(T.colorSpace),G=T.colorSpace===Ts||B===C?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,G);let ue=T.isCompressedTexture||T.image[0].isCompressedTexture,ve=T.image[0]&&T.image[0].isDataTexture,re=[];for(let ne=0;ne<6;ne++)!ue&&!ve?re[ne]=m(T.image[ne],!0,r.maxCubemapSize):re[ne]=ve?T.image[ne].image:T.image[ne],re[ne]=et(T,re[ne]);let ye=re[0],Te=a.convert(T.format,T.colorSpace),Le=a.convert(T.type),Ge=_(T.internalFormat,Te,Le,T.normalized,T.colorSpace),F=T.isVideoTexture!==!0,ie=O.__version===void 0||J===!0,oe=L.dataReady,Ee=w(T,ye);$e(e.TEXTURE_CUBE_MAP,T);let pe;if(ue){F&&ie&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Ee,Ge,ye.width,ye.height);for(let ne=0;ne<6;ne++){pe=re[ne].mipmaps;for(let xe=0;xe<pe.length;xe++){let Oe=pe[xe];T.format!==Ii?Te!==null?F?oe&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,0,0,Oe.width,Oe.height,Te,Oe.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,Ge,Oe.width,Oe.height,0,Oe.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?oe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,0,0,Oe.width,Oe.height,Te,Le,Oe.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,Ge,Oe.width,Oe.height,0,Te,Le,Oe.data)}}}else{if(pe=T.mipmaps,F&&ie){pe.length>0&&Ee++;let ne=st(re[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Ee,Ge,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ve){F?oe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,re[ne].width,re[ne].height,Te,Le,re[ne].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ge,re[ne].width,re[ne].height,0,Te,Le,re[ne].data);for(let xe=0;xe<pe.length;xe++){let Oe=pe[xe].image[ne].image;F?oe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,0,0,Oe.width,Oe.height,Te,Le,Oe.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,Ge,Oe.width,Oe.height,0,Te,Le,Oe.data)}}else{F?oe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Te,Le,re[ne]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ge,Te,Le,re[ne]);for(let xe=0;xe<pe.length;xe++){let Oe=pe[xe];F?oe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,0,0,Te,Le,Oe.image[ne]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,Ge,Te,Le,Oe.image[ne])}}}f(T)&&y(e.TEXTURE_CUBE_MAP),O.__version=L.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function be(P,T,H,J,L,O){let B=a.convert(H.format,H.colorSpace),C=a.convert(H.type),G=_(H.internalFormat,B,C,H.normalized,H.colorSpace),ue=s.get(T),ve=s.get(H);if(ve.__renderTarget=T,!ue.__hasExternalTextures){let re=Math.max(1,T.width>>O),ye=Math.max(1,T.height>>O);L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?i.texImage3D(L,O,G,re,ye,T.depth,0,B,C,null):i.texImage2D(L,O,G,re,ye,0,B,C,null)}i.bindFramebuffer(e.FRAMEBUFFER,P),z(T)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,L,ve.__webglTexture,0,Ke(T)):(L===e.TEXTURE_2D||L>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,J,L,ve.__webglTexture,O),i.bindFramebuffer(e.FRAMEBUFFER,null)}function tt(P,T,H){if(e.bindRenderbuffer(e.RENDERBUFFER,P),T.depthBuffer){let J=T.depthTexture,L=J&&J.isDepthTexture?J.type:null,O=M(T.stencilBuffer,L),B=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;z(T)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ke(T),O,T.width,T.height):H?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ke(T),O,T.width,T.height):e.renderbufferStorage(e.RENDERBUFFER,O,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,B,e.RENDERBUFFER,P)}else{let J=T.textures;for(let L=0;L<J.length;L++){let O=J[L],B=a.convert(O.format,O.colorSpace),C=a.convert(O.type),G=_(O.internalFormat,B,C,O.normalized,O.colorSpace);z(T)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ke(T),G,T.width,T.height):H?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ke(T),G,T.width,T.height):e.renderbufferStorage(e.RENDERBUFFER,G,T.width,T.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function he(P,T,H){let J=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let L=s.get(T.depthTexture);if(L.__renderTarget=T,(!L.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),J){if(L.__webglInit===void 0&&(L.__webglInit=!0,T.depthTexture.addEventListener("dispose",A)),L.__webglTexture===void 0){L.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,L.__webglTexture),$e(e.TEXTURE_CUBE_MAP,T.depthTexture);let ue=a.convert(T.depthTexture.format),ve=a.convert(T.depthTexture.type),re;T.depthTexture.format===cs?re=e.DEPTH_COMPONENT24:T.depthTexture.format===Gs&&(re=e.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,re,T.width,T.height,0,ue,ve,null)}}else _e(T.depthTexture,0);let O=L.__webglTexture,B=Ke(T),C=J?e.TEXTURE_CUBE_MAP_POSITIVE_X+H:e.TEXTURE_2D,G=T.depthTexture.format===Gs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(T.depthTexture.format===cs)z(T)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,G,C,O,0,B):e.framebufferTexture2D(e.FRAMEBUFFER,G,C,O,0);else if(T.depthTexture.format===Gs)z(T)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,G,C,O,0,B):e.framebufferTexture2D(e.FRAMEBUFFER,G,C,O,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function le(P){let T=s.get(P),H=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let J=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),J){let L=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,J.removeEventListener("dispose",L)};J.addEventListener("dispose",L),T.__depthDisposeCallback=L}T.__boundDepthTexture=J}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(H)for(let J=0;J<6;J++)he(T.__webglFramebuffer[J],P,J);else{let J=P.texture.mipmaps;J&&J.length>0?he(T.__webglFramebuffer[0],P,0):he(T.__webglFramebuffer,P,0)}else if(H){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(i.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]===void 0)T.__webglDepthbuffer[J]=e.createRenderbuffer(),tt(T.__webglDepthbuffer[J],P,!1);else{let L=P.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,O=T.__webglDepthbuffer[J];e.bindRenderbuffer(e.RENDERBUFFER,O),e.framebufferRenderbuffer(e.FRAMEBUFFER,L,e.RENDERBUFFER,O)}}else{let J=P.texture.mipmaps;if(J&&J.length>0?i.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=e.createRenderbuffer(),tt(T.__webglDepthbuffer,P,!1);else{let L=P.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,O=T.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,O),e.framebufferRenderbuffer(e.FRAMEBUFFER,L,e.RENDERBUFFER,O)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function me(P,T,H){let J=s.get(P);T!==void 0&&be(J.__webglFramebuffer,P,P.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),H!==void 0&&le(P)}function Re(P){let T=P.texture,H=s.get(P),J=s.get(T);P.addEventListener("dispose",g);let L=P.textures,O=P.isWebGLCubeRenderTarget===!0,B=L.length>1;if(B||(J.__webglTexture===void 0&&(J.__webglTexture=e.createTexture()),J.__version=T.version,n.memory.textures++),O){H.__webglFramebuffer=[];for(let C=0;C<6;C++)if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[C]=[];for(let G=0;G<T.mipmaps.length;G++)H.__webglFramebuffer[C][G]=e.createFramebuffer()}else H.__webglFramebuffer[C]=e.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let C=0;C<T.mipmaps.length;C++)H.__webglFramebuffer[C]=e.createFramebuffer()}else H.__webglFramebuffer=e.createFramebuffer();if(B)for(let C=0,G=L.length;C<G;C++){let ue=s.get(L[C]);ue.__webglTexture===void 0&&(ue.__webglTexture=e.createTexture(),n.memory.textures++)}if(P.samples>0&&z(P)===!1){H.__webglMultisampledFramebuffer=e.createFramebuffer(),H.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let C=0;C<L.length;C++){let G=L[C];H.__webglColorRenderbuffer[C]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,H.__webglColorRenderbuffer[C]);let ue=a.convert(G.format,G.colorSpace),ve=a.convert(G.type),re=_(G.internalFormat,ue,ve,G.normalized,G.colorSpace,P.isXRRenderTarget===!0),ye=Ke(P);e.renderbufferStorageMultisample(e.RENDERBUFFER,ye,re,P.width,P.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+C,e.RENDERBUFFER,H.__webglColorRenderbuffer[C])}e.bindRenderbuffer(e.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=e.createRenderbuffer(),tt(H.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(O){i.bindTexture(e.TEXTURE_CUBE_MAP,J.__webglTexture),$e(e.TEXTURE_CUBE_MAP,T);for(let C=0;C<6;C++)if(T.mipmaps&&T.mipmaps.length>0)for(let G=0;G<T.mipmaps.length;G++)be(H.__webglFramebuffer[C][G],P,T,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+C,G);else be(H.__webglFramebuffer[C],P,T,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+C,0);f(T)&&y(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(B){for(let C=0,G=L.length;C<G;C++){let ue=L[C],ve=s.get(ue),re=e.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(re=P.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(re,ve.__webglTexture),$e(re,ue),be(H.__webglFramebuffer,P,ue,e.COLOR_ATTACHMENT0+C,re,0),f(ue)&&y(re)}i.unbindTexture()}else{let C=e.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(C=P.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(C,J.__webglTexture),$e(C,T),T.mipmaps&&T.mipmaps.length>0)for(let G=0;G<T.mipmaps.length;G++)be(H.__webglFramebuffer[G],P,T,e.COLOR_ATTACHMENT0,C,G);else be(H.__webglFramebuffer,P,T,e.COLOR_ATTACHMENT0,C,0);f(T)&&y(C),i.unbindTexture()}P.depthBuffer&&le(P)}function Pe(P){let T=P.textures;for(let H=0,J=T.length;H<J;H++){let L=T[H];if(f(L)){let O=b(P),B=s.get(L).__webglTexture;i.bindTexture(O,B),y(O),i.unbindTexture()}}}let Ue=[],He=[];function Ye(P){if(P.samples>0){if(z(P)===!1){let T=P.textures,H=P.width,J=P.height,L=e.COLOR_BUFFER_BIT,O=P.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,B=s.get(P),C=T.length>1;if(C)for(let ue=0;ue<T.length;ue++)i.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,B.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,B.__webglMultisampledFramebuffer);let G=P.texture.mipmaps;G&&G.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,B.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,B.__webglFramebuffer);for(let ue=0;ue<T.length;ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(L|=e.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(L|=e.STENCIL_BUFFER_BIT)),C){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,B.__webglColorRenderbuffer[ue]);let ve=s.get(T[ue]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ve,0)}e.blitFramebuffer(0,0,H,J,0,0,H,J,L,e.NEAREST),l===!0&&(Ue.length=0,He.length=0,Ue.push(e.COLOR_ATTACHMENT0+ue),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(Ue.push(O),He.push(O),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,He)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ue))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),C)for(let ue=0;ue<T.length;ue++){i.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.RENDERBUFFER,B.__webglColorRenderbuffer[ue]);let ve=s.get(T[ue]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,B.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.TEXTURE_2D,ve,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,B.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let T=P.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[T])}}}function Ke(P){return Math.min(r.maxSamples,P.samples)}function z(P){let T=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function mt(P){let T=n.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function et(P,T){let H=P.colorSpace,J=P.format,L=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==Pn&&H!==Ts&&(ht.getTransfer(H)===vt?(J!==Ii||L!==yi)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",H)),T}function st(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=Q,this.resetTextureUnits=W,this.getTextureUnits=D,this.setTextureUnits=X,this.setTexture2D=_e,this.setTexture2DArray=ee,this.setTexture3D=se,this.setTextureCube=de,this.rebindTextures=me,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=be,this.useMultisampledRTT=z,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Wx(e,t){function i(s,r=Ts){let a,n=ht.getTransfer(r);if(s===yi)return e.UNSIGNED_BYTE;if(s===ih)return e.UNSIGNED_SHORT_4_4_4_4;if(s===sh)return e.UNSIGNED_SHORT_5_5_5_1;if(s===Au)return e.UNSIGNED_INT_5_9_9_9_REV;if(s===Ru)return e.UNSIGNED_INT_10F_11F_11F_REV;if(s===Eu)return e.BYTE;if(s===wu)return e.SHORT;if(s===ga)return e.UNSIGNED_SHORT;if(s===th)return e.INT;if(s===Ji)return e.UNSIGNED_INT;if(s===Xi)return e.FLOAT;if(s===$i)return e.HALF_FLOAT;if(s===Cu)return e.ALPHA;if(s===Pu)return e.RGB;if(s===Ii)return e.RGBA;if(s===cs)return e.DEPTH_COMPONENT;if(s===Gs)return e.DEPTH_STENCIL;if(s===Iu)return e.RED;if(s===rh)return e.RED_INTEGER;if(s===js)return e.RG;if(s===ah)return e.RG_INTEGER;if(s===nh)return e.RGBA_INTEGER;if(s===xn||s===Sn||s===Mn||s===bn)if(n===vt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===xn)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===xn)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sn)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mn)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bn)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vl||s===yl||s===_l||s===xl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===vl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===yl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_l)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Sl||s===Ml||s===bl||s===Tl||s===El||s===An||s===wl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Sl||s===Ml)return n===vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===bl)return n===vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(s===Tl)return a.COMPRESSED_R11_EAC;if(s===El)return a.COMPRESSED_SIGNED_R11_EAC;if(s===An)return a.COMPRESSED_RG11_EAC;if(s===wl)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Al||s===Rl||s===Cl||s===Pl||s===Il||s===Ll||s===Nl||s===Ul||s===Dl||s===Ol||s===Bl||s===Fl||s===zl||s===kl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Al)return n===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Rl)return n===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Cl)return n===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Pl)return n===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Il)return n===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ll)return n===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Nl)return n===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ul)return n===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Dl)return n===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ol)return n===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Bl)return n===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Fl)return n===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===zl)return n===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kl)return n===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Hl||s===Gl||s===Vl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Hl)return n===vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Gl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Vl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Wl||s===jl||s===Rn||s===Xl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Wl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===jl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Rn)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Xl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===va?e.UNSIGNED_INT_24_8:e[s]!==void 0?e[s]:null}return{convert:i}}var jx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xx=`
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

}`,qx=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Xu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new pi({vertexShader:jx,fragmentShader:Xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Cs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yx=class extends qs{constructor(e,t){super();let i=this,s=null,r=1,a=null,n="local-floor",o=1,l=null,h=null,u=null,d=null,c=null,p=null,v=typeof XRWebGLBinding<"u",S=new qx,m={},f=t.getContextAttributes(),y=null,b=null,_=[],M=[],w=new fe,A=null,g=null,x=new Kt;x.viewport=new Rt;let U=new Kt;U.viewport=new Rt;let R=[x,U],N=new qg,W=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ce=_[te];return ce===void 0&&(ce=new Do,_[te]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(te){let ce=_[te];return ce===void 0&&(ce=new Do,_[te]=ce),ce.getGripSpace()},this.getHand=function(te){let ce=_[te];return ce===void 0&&(ce=new Do,_[te]=ce),ce.getHandSpace()};function X(te){let ce=M.indexOf(te.inputSource);if(ce===-1)return;let ge=_[ce];ge!==void 0&&(ge.update(te.inputSource,te.frame,l||a),ge.dispatchEvent({type:te.type,data:te.inputSource}))}function Q(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",Z);for(let te=0;te<_.length;te++){let ce=M[te];ce!==null&&(M[te]=null,_[te].disconnect(ce))}W=null,D=null,S.reset();for(let te in m)delete m[te];if(e.setRenderTarget(y),c=null,d=null,u=null,s=null,b=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),g!==null){let te=g.camera;te.fov=g.fov,te.zoom=g.zoom,te.updateProjectionMatrix(),g=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){n=te,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return d!==null?d:c},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",Z),f.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,ge=null,ze=null;f.depth&&(ze=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=f.stencil?Gs:cs,ge=f.stencil?va:Ji);let Ie={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ie),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Ni(d.textureWidth,d.textureHeight,{format:Ii,type:yi,depthTexture:new xa(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ce={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};c=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:c}),e.setPixelRatio(1),e.setSize(c.framebufferWidth,c.framebufferHeight,!1),b=new Ni(c.framebufferWidth,c.framebufferHeight,{format:Ii,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(o),l=null,a=await s.requestReferenceSpace(n),$e.setContext(s),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Z(te){for(let ce=0;ce<te.removed.length;ce++){let ge=te.removed[ce],ze=M.indexOf(ge);ze>=0&&(M[ze]=null,_[ze].disconnect(ge))}for(let ce=0;ce<te.added.length;ce++){let ge=te.added[ce],ze=M.indexOf(ge);if(ze===-1){for(let be=0;be<_.length;be++)if(be>=M.length){M.push(ge),ze=be;break}else if(M[be]===null){M[be]=ge,ze=be;break}if(ze===-1)break}let Ie=_[ze];Ie&&Ie.connect(ge)}}let _e=new I,ee=new I;function se(te,ce,ge){_e.setFromMatrixPosition(ce.matrixWorld),ee.setFromMatrixPosition(ge.matrixWorld);let ze=_e.distanceTo(ee),Ie=ce.projectionMatrix.elements,be=ge.projectionMatrix.elements,tt=Ie[14]/(Ie[10]-1),he=Ie[14]/(Ie[10]+1),le=(Ie[9]+1)/Ie[5],me=(Ie[9]-1)/Ie[5],Re=(Ie[8]-1)/Ie[0],Pe=(be[8]+1)/be[0],Ue=tt*Re,He=tt*Pe,Ye=ze/(-Re+Pe),Ke=Ye*-Re;if(ce.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ke),te.translateZ(Ye),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ie[10]===-1)te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let z=tt+Ye,mt=he+Ye,et=Ue-Ke,st=He+(ze-Ke),P=le*he/mt*z,T=me*he/mt*z;te.projectionMatrix.makePerspective(et,st,P,T,z,mt),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function de(te,ce){ce===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ce.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ce=te.near,ge=te.far;S.texture!==null&&(S.depthNear>0&&(ce=S.depthNear),S.depthFar>0&&(ge=S.depthFar)),N.near=U.near=x.near=ce,N.far=U.far=x.far=ge,(W!==N.near||D!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),W=N.near,D=N.far),N.layers.mask=te.layers.mask|6,x.layers.mask=N.layers.mask&-5,U.layers.mask=N.layers.mask&-3;let ze=te.parent,Ie=N.cameras;de(N,ze);for(let be=0;be<Ie.length;be++)de(Ie[be],ze);Ie.length===2?se(N,x,U):N.projectionMatrix.copy(x.projectionMatrix),g===null&&te.isPerspectiveCamera&&(g={camera:te,fov:te.fov,zoom:te.zoom}),Ve(te,N,ze)};function Ve(te,ce,ge){ge===null?te.matrix.copy(ce.matrixWorld):(te.matrix.copy(ge.matrixWorld),te.matrix.invert(),te.matrix.multiply(ce.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=_a*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&c===null))return o},this.setFoveation=function(te){o=te,d!==null&&(d.fixedFoveation=te),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=te)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(N)},this.getCameraTexture=function(te){return m[te]};let De=null;function ft(te,ce){if(h=ce.getViewerPose(l||a),p=ce,h!==null){let ge=h.views;c!==null&&(e.setRenderTargetFramebuffer(b,c.framebuffer),e.setRenderTarget(b));let ze=!1;ge.length!==N.cameras.length&&(N.cameras.length=0,ze=!0);for(let be=0;be<ge.length;be++){let tt=ge[be],he=null;if(c!==null)he=c.getViewport(tt);else{let me=u.getViewSubImage(d,tt);he=me.viewport,be===0&&(e.setRenderTargetTextures(b,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(b))}let le=R[be];le===void 0&&(le=new Kt,le.layers.enable(be),le.viewport=new Rt,R[be]=le),le.matrix.fromArray(tt.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(tt.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(he.x,he.y,he.width,he.height),be===0&&(N.matrix.copy(le.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ze===!0&&N.cameras.push(le)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();let be=u.getDepthInformation(ge[0]);be&&be.isValid&&be.texture&&S.init(be,s.renderState)}if(Ie&&Ie.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let be=0;be<ge.length;be++){let tt=ge[be].camera;if(tt){let he=m[tt];he||(he=new Xu,m[tt]=he);let le=u.getCameraImage(tt);he.sourceTexture=le}}}}for(let ge=0;ge<_.length;ge++){let ze=M[ge],Ie=_[ge];ze!==null&&Ie!==void 0&&Ie.update(ze,ce,l||a)}De&&De(te,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),p=null}let $e=new wd;$e.setAnimationLoop(ft),this.setAnimationLoop=function(te){De=te},this.dispose=function(){}}},Zx=new at,Nd=new Qe;Nd.set(-1,0,0,0,1,0,0,0,1);function Jx(e,t){function i(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function s(m,f){f.color.getRGB(m.fogColor.value,Md(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,y,b,_){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?a(m,f):f.isMeshLambertMaterial?(a(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(a(m,f),d(m,f)):f.isMeshPhongMaterial?(a(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(a(m,f),c(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(a(m,f),v(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),S(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(n(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,b):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,i(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===si&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,i(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===si&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,i(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,i(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=t.get(f),b=y.envMap,_=y.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(Zx.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Nd),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,m.aoMapTransform))}function n(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=b*.5,f.map&&(m.map.value=f.map,i(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function c(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===si&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){let y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:r}}function $x(e,t,i,s){let r={},a={},n=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){let w=M.program;s.uniformBlockBinding(_,w)}function h(_,M){let w=r[_.id];w===void 0&&(m(_),w=u(_),r[_.id]=w,_.addEventListener("dispose",y));let A=M.program;s.updateUBOMapping(_,A);let g=t.render.frame;a[_.id]!==g&&(c(_),a[_.id]=g)}function u(_){let M=d();_.__bindingPointIndex=M;let w=e.createBuffer(),A=_.__size,g=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,w),e.bufferData(e.UNIFORM_BUFFER,A,g),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,M,w),w}function d(){for(let _=0;_<o;_++)if(n.indexOf(_)===-1)return n.push(_),_;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(_){let M=r[_.id],w=_.uniforms,A=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let g=0,x=w.length;g<x;g++){let U=w[g];if(Array.isArray(U))for(let R=0,N=U.length;R<N;R++)p(U[R],g,R,A);else p(U,g,0,A)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(_,M,w,A){if(S(_,M,w,A)===!0){let g=_.__offset,x=_.value;if(Array.isArray(x)){let U=0;for(let R=0;R<x.length;R++){let N=x[R],W=f(N);v(N,_.__data,U),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(U+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(x,_.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,g,_.__data)}}function v(_,M,w){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,w)}function S(_,M,w,A){let g=_.value,x=M+"_"+w;if(A[x]===void 0)return typeof g=="number"||typeof g=="boolean"?A[x]=g:ArrayBuffer.isView(g)?A[x]=g.slice():A[x]=g.clone(),!0;{let U=A[x];if(typeof g=="number"||typeof g=="boolean"){if(U!==g)return A[x]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(U.equals(g)===!1)return U.copy(g),!0}}return!1}function m(_){let M=_.uniforms,w=0,A=16;for(let x=0,U=M.length;x<U;x++){let R=Array.isArray(M[x])?M[x]:[M[x]];for(let N=0,W=R.length;N<W;N++){let D=R[N],X=Array.isArray(D.value)?D.value:[D.value];for(let Q=0,Z=X.length;Q<Z;Q++){let _e=X[Q],ee=f(_e),se=w%A,de=se%ee.boundary,Ve=se+de;w+=de,Ve!==0&&A-Ve<ee.storage&&(w+=A-Ve),D.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=ee.storage}}}let g=w%A;return g>0&&(w+=A-g),_.__size=w,_.__cache={},this}function f(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",_),M}function y(_){let M=_.target;M.removeEventListener("dispose",y);let w=n.indexOf(M.__bindingPointIndex);n.splice(w,1),e.deleteBuffer(r[M.id]),delete r[M.id],delete a[M.id]}function b(){for(let _ in r)e.deleteBuffer(r[_]);n=[],r={},a={}}return{bind:l,update:h,dispose:b}}var Kx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wi=null;function Qx(){return Wi===null&&(Wi=new Im(Kx,16,16,js,$i),Wi.name="DFG_LUT",Wi.minFilter=ii,Wi.magFilter=ii,Wi.wrapS=ns,Wi.wrapT=ns,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}var Gn=class{constructor(e={}){let{canvas:t=Wf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:n=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:c=yi}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let v=c,S=new Set([nh,ah,rh]),m=new Set([yi,Ji,ga,va,ih,sh]),f=new Uint32Array(4),y=new Int32Array(4),b=new I,_=null,M=null,w=[],A=[],g=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,U=!1,R=null,N=null,W=null,D=null;this._outputColorSpace=Zt;let X=0,Q=0,Z=null,_e=-1,ee=null,se=new Rt,de=new Rt,Ve=null,De=new Ze(0),ft=0,$e=t.width,te=t.height,ce=1,ge=null,ze=null,Ie=new Rt(0,0,$e,te),be=new Rt(0,0,$e,te),tt=!1,he=new Lr,le=!1,me=!1,Re=new at,Pe=new I,Ue=new Rt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ye=!1;function Ke(){return Z===null?ce:1}let z=i;function mt(E,V){return t.getContext(E,V)}let et,st,P,T,H,J,L,O,B,C,G,ue,ve,re,ye,Te,Le,Ge,F,ie,oe,Ee,pe;try{let E={alpha:!0,depth:s,stencil:r,antialias:n,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",Mt,!1),t.addEventListener("webglcontextcreationerror",nt,!1),z===null){let V="webgl2";if(z=mt(V,E),z===null)throw mt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ne()}catch(E){throw t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),je("WebGLRenderer: "+E.message),E}function ne(){et=new Qy(z),et.init(),oe=new Wx(z,et),st=new Vy(z,et,e,oe),P=new Gx(z,et),st.reversedDepthBuffer&&d&&P.buffers.depth.setReversed(!0),N=z.createFramebuffer(),W=z.createFramebuffer(),D=z.createFramebuffer(),T=new i_(z),H=new Rx,J=new Vx(z,et,P,H,st,oe,T),L=new Ky(x),O=new r0(z),Ee=new Hy(z,O),B=new e_(z,O,T,Ee),C=new r_(z,B,O,Ee,T),Ge=new s_(z,st,J),ye=new Wy(H),G=new Ax(x,L,et,st,Ee,ye),ue=new Jx(x,H),ve=new Px,re=new Ox(et),Le=new ky(x,L,P,C,p,o),Te=new Hx(x,C,st),pe=new $x(z,T,st,P),F=new Gy(z,et,T),ie=new t_(z,et,T),T.programs=G.programs,x.capabilities=st,x.extensions=et,x.properties=H,x.renderLists=ve,x.shadowMap=Te,x.state=P,x.info=T}v!==yi&&(g=new n_(v,t.width,t.height,n,s,r));let xe=new Yx(x,z);this.xr=xe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let E=et.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=et.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(E){E!==void 0&&(ce=E,this.setSize($e,te,!1))},this.getSize=function(E){return E.set($e,te)},this.setSize=function(E,V,$=!0){if(xe.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=E,te=V,t.width=Math.floor(E*ce),t.height=Math.floor(V*ce),$===!0&&(t.style.width=E+"px",t.style.height=V+"px"),g!==null&&g.setSize(t.width,t.height),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set($e*ce,te*ce).floor()},this.setDrawingBufferSize=function(E,V,$){$e=E,te=V,ce=$,t.width=Math.floor(E*$),t.height=Math.floor(V*$),this.setViewport(0,0,E,V)},this.setEffects=function(E){if(v===yi){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let V=0;V<E.length;V++)if(E[V].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}g.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(se)},this.getViewport=function(E){return E.copy(Ie)},this.setViewport=function(E,V,$,Y){E.isVector4?Ie.set(E.x,E.y,E.z,E.w):Ie.set(E,V,$,Y),P.viewport(se.copy(Ie).multiplyScalar(ce).round())},this.getScissor=function(E){return E.copy(be)},this.setScissor=function(E,V,$,Y){E.isVector4?be.set(E.x,E.y,E.z,E.w):be.set(E,V,$,Y),P.scissor(de.copy(be).multiplyScalar(ce).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(E){P.setScissorTest(tt=E)},this.setOpaqueSort=function(E){ge=E},this.setTransparentSort=function(E){ze=E},this.getClearColor=function(E){return E.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(E=!0,V=!0,$=!0){let Y=0;if(E){let q=!1;if(Z!==null){let Se=Z.texture.format;q=S.has(Se)}if(q){let Se=Z.texture.type,Ae=m.has(Se),Ne=Le.getClearColor(),Be=Le.getClearAlpha(),We=Ne.r,ot=Ne.g,ct=Ne.b;Ae?(f[0]=We,f[1]=ot,f[2]=ct,f[3]=Be,z.clearBufferuiv(z.COLOR,0,f)):(y[0]=We,y[1]=ot,y[2]=ct,y[3]=Be,z.clearBufferiv(z.COLOR,0,y))}else Y|=z.COLOR_BUFFER_BIT}V&&(Y|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),R=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),Le.dispose(),ve.dispose(),re.dispose(),H.dispose(),L.dispose(),C.dispose(),Ee.dispose(),pe.dispose(),G.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",ki),xe.removeEventListener("sessionend",qt),fi.stop()};function Oe(E){E.preventDefault(),Nn("WebGLRenderer: Context Lost."),U=!0}function Mt(){Nn("WebGLRenderer: Context Restored."),U=!1;let E=T.autoReset,V=Te.enabled,$=Te.autoUpdate,Y=Te.needsUpdate,q=Te.type;ne(),T.autoReset=E,Te.enabled=V,Te.autoUpdate=$,Te.needsUpdate=Y,Te.type=q}function nt(E){je("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function xi(E){let V=E.target;V.removeEventListener("dispose",xi),Ei(V)}function Ei(E){gt(E),H.remove(E)}function gt(E){let V=H.get(E).programs;V!==void 0&&(V.forEach(function($){G.releaseProgram($)}),E.isShaderMaterial&&G.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,$,Y,q,Se){V===null&&(V=He);let Ae=q.isMesh&&q.matrixWorld.determinantAffine()<0,Ne=af(E,V,$,Y,q);P.setMaterial(Y,Ae);let Be=$.index,We=1;if(Y.wireframe===!0){if(Be=B.getWireframeAttribute($),Be===void 0)return;We=2}let ot=$.drawRange,ct=$.attributes.position,ke=ot.start*We,_t=(ot.start+ot.count)*We;Se!==null&&(ke=Math.max(ke,Se.start*We),_t=Math.min(_t,(Se.start+Se.count)*We)),Be!==null?(ke=Math.max(ke,0),_t=Math.min(_t,Be.count)):ct!=null&&(ke=Math.max(ke,0),_t=Math.min(_t,ct.count));let Bt=_t-ke;if(Bt<0||Bt===1/0)return;Ee.setup(q,Y,Ne,$,Be);let bt,Tt=F;if(Be!==null&&(bt=O.get(Be),Tt=ie,Tt.setIndex(bt)),q.isMesh)Y.wireframe===!0?(P.setLineWidth(Y.wireframeLinewidth*Ke()),Tt.setMode(z.LINES)):Tt.setMode(z.TRIANGLES);else if(q.isLine){let Pt=Y.linewidth;Pt===void 0&&(Pt=1),P.setLineWidth(Pt*Ke()),q.isLineSegments?Tt.setMode(z.LINES):q.isLineLoop?Tt.setMode(z.LINE_LOOP):Tt.setMode(z.LINE_STRIP)}else q.isPoints?Tt.setMode(z.POINTS):q.isSprite&&Tt.setMode(z.TRIANGLES);if(q.isBatchedMesh)if(et.get("WEBGL_multi_draw"))Tt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Pt=q._multiDrawStarts,Fe=q._multiDrawCounts,li=q._multiDrawCount,Us=Be?O.get(Be).bytesPerElement:1,Si=H.get(Y).currentProgram.getUniforms();for(let Gi=0;Gi<li;Gi++)Si.setValue(z,"_gl_DrawID",Gi),Tt.render(Pt[Gi]/Us,Fe[Gi])}else if(q.isInstancedMesh)Tt.renderInstances(ke,Bt,q.count);else if($.isInstancedBufferGeometry){let Pt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Fe=Math.min($.instanceCount,Pt);Tt.renderInstances(ke,Bt,Fe)}else Tt.render(ke,Bt)};function Xt(E,V,$,Y){R!==null&&E.isNodeMaterial&&R.setObject(Y,E),le===!0&&ye.setState(E,$,!1),E.transparent===!0&&E.side===bi&&E.forceSinglePass===!1?(E.side=si,E.needsUpdate=!0,za(E,V,Y),E.side=hs,E.needsUpdate=!0,za(E,V,Y),E.side=bi):za(E,V,Y)}this.compile=function(E,V,$=null){$===null&&($=E),R!==null&&R.renderStart(E,V,$),M=re.get($),M.init(V),A.push(M),$.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),E!==$&&E.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),M.setupLights(),R!==null&&R.updateLights(M.state.lightsArray),me=this.localClippingEnabled,le=ye.init(this.clippingPlanes,me),le===!0&&ye.setGlobalState(this.clippingPlanes,V),R!==null&&Te.render(M.state.shadowsArray,$,V);let Y=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Se=q.material;if(Se)if(Array.isArray(Se))for(let Ae=0;Ae<Se.length;Ae++){let Ne=Se[Ae];Xt(Ne,$,V,q),Y.add(Ne)}else Xt(Se,$,V,q),Y.add(Se)}),M=A.pop(),R!==null&&R.renderEnd(),Y},this.compileAsync=function(E,V,$=null){let Y=this.compile(E,V,$);return new Promise(q=>{function Se(){if(Y.forEach(function(Ae){let Ne=H.get(Ae).currentProgram;(Ne===void 0||Ne.isReady())&&Y.delete(Ae)}),Y.size===0){q(E);return}setTimeout(Se,10)}et.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let di=null;function oi(E){di&&di(E)}function ki(){fi.stop()}function qt(){fi.start()}let fi=new wd;fi.setAnimationLoop(oi),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(E){di=E,xe.setAnimationLoop(E),E===null?fi.stop():fi.start()},xe.addEventListener("sessionstart",ki),xe.addEventListener("sessionend",qt),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;R!==null&&R.renderStart(E,V);let $=xe.enabled===!0&&xe.isPresenting===!0,Y=g!==null&&(Z===null||$)&&g.begin(x,Z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(g===null||g.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(V),V=xe.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,V,Z),M=re.get(E,A.length),M.init(V),M.state.textureUnits=J.getTextureUnits(),A.push(M),Re.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),he.setFromProjectionMatrix(Re,Li,V.reversedDepth),me=this.localClippingEnabled,le=ye.init(this.clippingPlanes,me),_=ve.get(E,w.length),_.init(),w.push(_),xe.enabled===!0&&xe.isPresenting===!0){let Se=x.xr.getDepthSensingMesh();Se!==null&&wi(Se,V,-1/0,x.sortObjects)}wi(E,V,0,x.sortObjects),_.finish(),R!==null&&R.updateLights(M.state.lightsArray),x.sortObjects===!0&&_.sort(ge,ze),Ye=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,Ye&&Le.addToRenderList(_,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),le===!0&&ye.beginShadows();let q=M.state.shadowsArray;if(Te.render(q,E,V),le===!0&&ye.endShadows(),(Y&&g.hasRenderPass())===!1){let Se=_.opaque,Ae=_.transmissive;if(M.setupLights(),V.isArrayCamera){let Ne=V.cameras;if(Ae.length>0)for(let Be=0,We=Ne.length;Be<We;Be++){let ot=Ne[Be];mi(Se,Ae,E,ot)}Ye&&Le.render(E);for(let Be=0,We=Ne.length;Be<We;Be++){let ot=Ne[Be];ms(_,E,ot,ot.viewport)}}else Ae.length>0&&mi(Se,Ae,E,V),Ye&&Le.render(E),ms(_,E,V)}Z!==null&&Q===0&&(J.updateMultisampleRenderTarget(Z),J.updateRenderTargetMipmap(Z)),Y&&g.end(x),E.isScene===!0&&E.onAfterRender(x,E,V),Ee.resetDefaultState(),_e=-1,ee=null,A.pop(),A.length>0?(M=A[A.length-1],J.setTextureUnits(M.state.textureUnits),le===!0&&ye.setGlobalState(x.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?_=w[w.length-1]:_=null,R!==null&&R.renderEnd()};function wi(E,V,$,Y){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLightProbeGrid)M.pushLightProbeGrid(E);else if(E.isLight)M.pushLight(E),E.castShadow&&M.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(he)){Y&&Ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Re);let Se=C.update(E),Ae=E.material;Ae.visible&&_.push(E,Se,Ae,$,Ue.z,null,V)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(he))){let Se=C.update(E),Ae=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ue.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ue.copy(Se.boundingSphere.center)),Ue.applyMatrix4(E.matrixWorld).applyMatrix4(Re)),Array.isArray(Ae)){let Ne=Se.groups;for(let Be=0,We=Ne.length;Be<We;Be++){let ot=Ne[Be],ct=Ae[ot.materialIndex];ct&&ct.visible&&_.push(E,Se,ct,$,Ue.z,ot,V)}}else Ae.visible&&_.push(E,Se,Ae,$,Ue.z,null,V)}}let q=E.children;for(let Se=0,Ae=q.length;Se<Ae;Se++)wi(q[Se],V,$,Y)}function ms(E,V,$,Y){let{opaque:q,transmissive:Se,transparent:Ae}=E;M.setupLightsView($),le===!0&&ye.setGlobalState(x.clippingPlanes,$),Y&&P.viewport(se.copy(Y)),q.length>0&&Hi(q,V,$),Se.length>0&&Hi(Se,V,$),Ae.length>0&&Hi(Ae,V,$),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function mi(E,V,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Y.id]===void 0){let ct=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Y.id]=new Ni(1,1,{generateMipmaps:!0,type:ct?$i:yi,minFilter:Hs,samples:Math.max(4,st.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let q=M.state.transmissionRenderTarget[Y.id],Se=Y.viewport||se;q.setSize(Se.z*x.transmissionResolutionScale,Se.w*x.transmissionResolutionScale);let Ae=x.getRenderTarget(),Ne=x.getActiveCubeFace(),Be=x.getActiveMipmapLevel();x.setRenderTarget(q),x.getClearColor(De),ft=x.getClearAlpha(),ft<1&&x.setClearColor(16777215,.5),x.clear(),Ye&&Le.render($);let We=x.toneMapping;x.toneMapping=Yi;let ot=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),M.setupLightsView(Y),le===!0&&ye.setGlobalState(x.clippingPlanes,Y),Hi(E,$,Y),J.updateMultisampleRenderTarget(q),J.updateRenderTargetMipmap(q),et.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let ke=0,_t=V.length;ke<_t;ke++){let Bt=V[ke],{object:bt,geometry:Tt,material:Pt,group:Fe}=Bt;if(Pt.side===bi&&bt.layers.test(Y.layers)){let li=Pt.side;Pt.side=si,Pt.needsUpdate=!0,qh(bt,$,Y,Tt,Pt,Fe),Pt.side=li,Pt.needsUpdate=!0,ct=!0}}ct===!0&&(J.updateMultisampleRenderTarget(q),J.updateRenderTargetMipmap(q))}x.setRenderTarget(Ae,Ne,Be),x.setClearColor(De,ft),ot!==void 0&&(Y.viewport=ot),x.toneMapping=We}function Hi(E,V,$){let Y=V.isScene===!0?V.overrideMaterial:null;for(let q=0,Se=E.length;q<Se;q++){let Ae=E[q],{object:Ne,geometry:Be,group:We}=Ae,ot=Ae.material;ot.allowOverride===!0&&Y!==null&&(ot=Y),Ne.layers.test($.layers)&&qh(Ne,V,$,Be,ot,We)}}function qh(E,V,$,Y,q,Se){R!==null&&q.isNodeMaterial&&R.setObject(E,q),E.onBeforeRender(x,V,$,Y,q,Se),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(x,V,$,Y,E,Se),q.transparent===!0&&q.side===bi&&q.forceSinglePass===!1?(q.side=si,q.needsUpdate=!0,x.renderBufferDirect($,V,Y,q,E,Se),q.side=hs,q.needsUpdate=!0,x.renderBufferDirect($,V,Y,q,E,Se),q.side=bi):x.renderBufferDirect($,V,Y,q,E,Se),E.onAfterRender(x,V,$,Y,q,Se)}function za(E,V,$){V.isScene!==!0&&(V=He);let Y=H.get(E),q=M.state.lights,Se=M.state.shadowsArray,Ae=q.state.version,Ne=G.getParameters(E,q.state,Se,V,$,M.state.lightProbeGridArray),Be=G.getProgramCacheKey(Ne),We=Y.programs;Y.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?V.environment:null,Y.fog=V.fog;let ot=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Y.envMap=L.get(E.envMap||Y.environment,ot),Y.envMapRotation=Y.environment!==null&&E.envMap===null?V.environmentRotation:E.envMapRotation,We===void 0&&(E.addEventListener("dispose",xi),We=new Map,Y.programs=We);let ct=We.get(Be);if(ct!==void 0){if(Y.currentProgram===ct&&Y.lightsStateVersion===Ae)return Zh(E,Ne),ct}else Ne.uniforms=G.getUniforms(E),R!==null&&E.isNodeMaterial&&R.build(E,$,Ne),E.onBeforeCompile(Ne,x),ct=G.acquireProgram(Ne,Be),We.set(Be,ct),Y.uniforms=Ne.uniforms;let ke=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ke.clippingPlanes=ye.uniform),Zh(E,Ne),Y.needsLights=of(E),Y.lightsStateVersion=Ae,Y.needsLights&&(ke.ambientLightColor.value=q.state.ambient,ke.lightProbe.value=q.state.probe,ke.sunLights.value=q.state.sun,ke.sunLightShadows.value=q.state.sunShadow,ke.directionalLights.value=q.state.directional,ke.directionalLightShadows.value=q.state.directionalShadow,ke.spotLights.value=q.state.spot,ke.spotLightShadows.value=q.state.spotShadow,ke.rectAreaLights.value=q.state.rectArea,ke.ltc_1.value=q.state.rectAreaLTC1,ke.ltc_2.value=q.state.rectAreaLTC2,ke.pointLights.value=q.state.point,ke.pointLightShadows.value=q.state.pointShadow,ke.hemisphereLights.value=q.state.hemi,ke.sunShadowMatrix.value=q.state.sunShadowMatrix,ke.sunShadowCascade.value=q.state.sunShadowCascade,ke.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ke.spotLightMatrix.value=q.state.spotLightMatrix,ke.spotLightMap.value=q.state.spotLightMap,ke.pointShadowMatrix.value=q.state.pointShadowMatrix),Y.lightProbeGrid=M.state.lightProbeGridArray.length>0,Y.currentProgram=ct,Y.uniformsList=null,ct}function Yh(E){if(E.uniformsList===null){let V=E.currentProgram.getUniforms();E.uniformsList=wn.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function Zh(E,V){let $=H.get(E);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function rf(E,V){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;b.setFromMatrixPosition(V.matrixWorld);for(let $=0,Y=E.length;$<Y;$++){let q=E[$];if(q.texture!==null&&q.boundingBox.containsPoint(b))return q}return null}function af(E,V,$,Y,q){V.isScene!==!0&&(V=He),J.resetTextureUnits();let Se=V.fog,Ae=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?V.environment:null,Ne=Z===null?x.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ht.workingColorSpace,Be=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,We=L.get(Y.envMap||Ae,Be),ot=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ct=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ke=!!$.morphAttributes.position,_t=!!$.morphAttributes.normal,Bt=!!$.morphAttributes.color,bt=Yi;Y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(bt=x.toneMapping);let Tt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Pt=Tt!==void 0?Tt.length:0,Fe=H.get(Y),li=M.state.lights;if(le===!0&&(me===!0||E!==ee)){let St=E===ee&&Y.id===_e;ye.setState(Y,E,St)}let Us=!1;Y.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==li.state.version||Fe.outputColorSpace!==Ne||q.isBatchedMesh&&Fe.batching===!1||!q.isBatchedMesh&&Fe.batching===!0||q.isBatchedMesh&&Fe.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Fe.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Fe.instancing===!1||!q.isInstancedMesh&&Fe.instancing===!0||q.isSkinnedMesh&&Fe.skinning===!1||!q.isSkinnedMesh&&Fe.skinning===!0||q.isInstancedMesh&&Fe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Fe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Fe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Fe.instancingMorph===!1&&q.morphTexture!==null||Fe.envMap!==We||Y.fog===!0&&Fe.fog!==Se||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ye.numPlanes||Fe.numIntersection!==ye.numIntersection)||Fe.vertexAlphas!==ot||Fe.vertexTangents!==ct||Fe.morphTargets!==ke||Fe.morphNormals!==_t||Fe.morphColors!==Bt||Fe.toneMapping!==bt||Fe.morphTargetsCount!==Pt||!!Fe.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Us=!0):(Us=!0,Fe.__version=Y.version);let Si=Fe.currentProgram;Us===!0&&(Si=za(Y,V,q),R&&Y.isNodeMaterial&&R.onUpdateProgram(Y,Si,Fe));let Gi=!1,gs=!1,tr=!1,xt=Si.getUniforms(),Dt=Fe.uniforms;if(P.useProgram(Si.program)&&(Gi=!0,gs=!0,tr=!0),Y.id!==_e&&(_e=Y.id,gs=!0),Fe.needsLights){let St=rf(M.state.lightProbeGridArray,q);Fe.lightProbeGrid!==St&&(Fe.lightProbeGrid=St,gs=!0)}if(Gi||ee!==E){P.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),xt.setValue(z,"projectionMatrix",E.projectionMatrix),xt.setValue(z,"viewMatrix",E.matrixWorldInverse);let St=xt.map.cameraPosition;St!==void 0&&St.setValue(z,Pe.setFromMatrixPosition(E.matrixWorld)),st.logarithmicDepthBuffer&&xt.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&xt.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),ee!==E&&(ee=E,gs=!0,tr=!0)}if(Fe.needsLights&&(li.state.sunShadowMap.length>0&&xt.setValue(z,"sunShadowMap",li.state.sunShadowMap,J),li.state.directionalShadowMap.length>0&&xt.setValue(z,"directionalShadowMap",li.state.directionalShadowMap,J),li.state.spotShadowMap.length>0&&xt.setValue(z,"spotShadowMap",li.state.spotShadowMap,J),li.state.pointShadowMap.length>0&&xt.setValue(z,"pointShadowMap",li.state.pointShadowMap,J)),q.isSkinnedMesh){xt.setOptional(z,q,"bindMatrix"),xt.setOptional(z,q,"bindMatrixInverse");let St=q.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),xt.setValue(z,"boneTexture",St.boneTexture,J))}q.isBatchedMesh&&(xt.setOptional(z,q,"batchingTexture"),xt.setValue(z,"batchingTexture",q._matricesTexture,J),xt.setOptional(z,q,"batchingIdTexture"),xt.setValue(z,"batchingIdTexture",q._indirectTexture,J),xt.setOptional(z,q,"batchingColorTexture"),q._colorsTexture!==null&&xt.setValue(z,"batchingColorTexture",q._colorsTexture,J));let vs=$.morphAttributes;if((vs.position!==void 0||vs.normal!==void 0||vs.color!==void 0)&&Ge.update(q,$,Si),(gs||Fe.receiveShadow!==q.receiveShadow)&&(Fe.receiveShadow=q.receiveShadow,xt.setValue(z,"receiveShadow",q.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&V.environment!==null&&(Dt.envMapIntensity.value=V.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=Qx()),gs){if(xt.setValue(z,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&nf(Dt,tr),Se&&Y.fog===!0&&ue.refreshFogUniforms(Dt,Se),ue.refreshMaterialUniforms(Dt,Y,ce,te,M.state.transmissionRenderTarget[E.id]),Fe.needsLights&&Fe.lightProbeGrid){let St=Fe.lightProbeGrid;Dt.probesSH.value=St.texture,Dt.probesMin.value.copy(St.boundingBox.min),Dt.probesMax.value.copy(St.boundingBox.max),Dt.probesResolution.value.copy(St.resolution)}wn.upload(z,Yh(Fe),Dt,J)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(wn.upload(z,Yh(Fe),Dt,J),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&xt.setValue(z,"center",q.center),xt.setValue(z,"modelViewMatrix",q.modelViewMatrix),xt.setValue(z,"normalMatrix",q.normalMatrix),xt.setValue(z,"modelMatrix",q.matrixWorld),Y.uniformsGroups!==void 0){let St=Y.uniformsGroups;for(let Jr=0,ir=St.length;Jr<ir;Jr++){let $h=St[Jr];pe.update($h,Si),pe.bind($h,Si)}}return Si}function nf(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.sunLights.needsUpdate=V,E.sunLightShadows.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function of(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(E,V,$){let Y=H.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),H.get(E.texture).__webglTexture=V,H.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:$,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,V){let $=H.get(E);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(E,V=0,$=0){Z=E,X=V,Q=$;let Y=null,q=!1,Se=!1;if(E){let Ae=H.get(E);if(Ae.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(z.FRAMEBUFFER,Ae.__webglFramebuffer),se.copy(E.viewport),de.copy(E.scissor),Ve=E.scissorTest,P.viewport(se),P.scissor(de),P.setScissorTest(Ve),_e=-1;return}else if(Ae.__webglFramebuffer===void 0)J.setupRenderTarget(E);else if(Ae.__hasExternalTextures)J.rebindTextures(E,H.get(E.texture).__webglTexture,H.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let We=E.depthTexture;if(Ae.__boundDepthTexture!==We){if(We!==null&&H.has(We)&&(E.width!==We.image.width||E.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(E)}}let Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Se=!0);let Be=H.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Be[V])?Y=Be[V][$]:Y=Be[V],q=!0):E.samples>0&&J.useMultisampledRTT(E)===!1?Y=H.get(E).__webglMultisampledFramebuffer:Array.isArray(Be)?Y=Be[$]:Y=Be,se.copy(E.viewport),de.copy(E.scissor),Ve=E.scissorTest}else se.copy(Ie).multiplyScalar(ce).floor(),de.copy(be).multiplyScalar(ce).floor(),Ve=tt;if($!==0&&(Y=N),P.bindFramebuffer(z.FRAMEBUFFER,Y)&&P.drawBuffers(E,Y),P.viewport(se),P.scissor(de),P.setScissorTest(Ve),q){let Ae=H.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ae.__webglTexture,$)}else if(Se){let Ae=V;for(let Ne=0;Ne<E.textures.length;Ne++){let Be=H.get(E.textures[Ne]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ne,Be.__webglTexture,$,Ae)}}else if(E!==null&&$!==0){let Ae=H.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ae.__webglTexture,$)}_e=-1};function Jh(E){let V=H.get(E);return(V.__readFormat!==E.format||V.__readType!==E.type)&&(V.__readFormat=E.format,V.__readType=E.type,V.__formatReadable=st.textureFormatReadable(E.format),V.__typeReadable=st.textureTypeReadable(E.type)),V}this.readRenderTargetPixels=function(E,V,$,Y,q,Se,Ae,Ne=0){if(!(E&&E.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=H.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Be=Be[Ae]),Be){P.bindFramebuffer(z.FRAMEBUFFER,Be);try{let We=E.textures[Ne],ot=We.format,ct=We.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ne);let ke=Jh(We);if(ke.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ke.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-Y&&$>=0&&$<=E.height-q&&z.readPixels(V,$,Y,q,oe.convert(ot),oe.convert(ct),Se)}finally{let We=Z!==null?H.get(Z).__webglFramebuffer:null;P.bindFramebuffer(z.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(E,V,$,Y,q,Se,Ae,Ne=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=H.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Be=Be[Ae]),Be)if(V>=0&&V<=E.width-Y&&$>=0&&$<=E.height-q){P.bindFramebuffer(z.FRAMEBUFFER,Be);let We=E.textures[Ne],ot=We.format,ct=We.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ne);let ke=Jh(We);if(ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,_t),z.bufferData(z.PIXEL_PACK_BUFFER,Se.byteLength,z.STREAM_READ),z.readPixels(V,$,Y,q,oe.convert(ot),oe.convert(ct),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Bt=Z!==null?H.get(Z).__webglFramebuffer:null;P.bindFramebuffer(z.FRAMEBUFFER,Bt);let bt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await jf(z,bt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,_t),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Se),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(_t),z.deleteSync(bt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,V=null,$=0){let Y=Math.pow(2,-$),q=Math.floor(E.image.width*Y),Se=Math.floor(E.image.height*Y),Ae=V!==null?V.x:0,Ne=V!==null?V.y:0;J.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,Ae,Ne,q,Se),P.unbindTexture()},this.copyTextureToTexture=function(E,V,$=null,Y=null,q=0,Se=0){let Ae,Ne,Be,We,ot,ct,ke,_t,Bt,bt=E.isCompressedTexture?E.mipmaps[Se]:E.image;if($!==null)Ae=$.max.x-$.min.x,Ne=$.max.y-$.min.y,Be=$.isBox3?$.max.z-$.min.z:1,We=$.min.x,ot=$.min.y,ct=$.isBox3?$.min.z:0;else{let Dt=Math.pow(2,-q);Ae=Math.floor(bt.width*Dt),Ne=Math.floor(bt.height*Dt),E.isDataArrayTexture?Be=bt.depth:E.isData3DTexture?Be=Math.floor(bt.depth*Dt):Be=1,We=0,ot=0,ct=0}Y!==null?(ke=Y.x,_t=Y.y,Bt=Y.z):(ke=0,_t=0,Bt=0);let Tt=oe.convert(V.format),Pt=oe.convert(V.type),Fe;V.isData3DTexture?(J.setTexture3D(V,0),Fe=z.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(J.setTexture2DArray(V,0),Fe=z.TEXTURE_2D_ARRAY):(J.setTexture2D(V,0),Fe=z.TEXTURE_2D),P.activeTexture(z.TEXTURE0),P.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),P.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),P.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment);let li=P.getParameter(z.UNPACK_ROW_LENGTH),Us=P.getParameter(z.UNPACK_IMAGE_HEIGHT),Si=P.getParameter(z.UNPACK_SKIP_PIXELS),Gi=P.getParameter(z.UNPACK_SKIP_ROWS),gs=P.getParameter(z.UNPACK_SKIP_IMAGES);P.pixelStorei(z.UNPACK_ROW_LENGTH,bt.width),P.pixelStorei(z.UNPACK_IMAGE_HEIGHT,bt.height),P.pixelStorei(z.UNPACK_SKIP_PIXELS,We),P.pixelStorei(z.UNPACK_SKIP_ROWS,ot),P.pixelStorei(z.UNPACK_SKIP_IMAGES,ct);let tr=E.isDataArrayTexture||E.isData3DTexture,xt=V.isDataArrayTexture||V.isData3DTexture;if(E.isDepthTexture){let Dt=H.get(E),vs=H.get(V),St=H.get(Dt.__renderTarget),Jr=H.get(vs.__renderTarget);P.bindFramebuffer(z.READ_FRAMEBUFFER,St.__webglFramebuffer),P.bindFramebuffer(z.DRAW_FRAMEBUFFER,Jr.__webglFramebuffer);for(let ir=0;ir<Be;ir++)tr&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,H.get(E).__webglTexture,q,ct+ir),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,H.get(V).__webglTexture,Se,Bt+ir)),z.blitFramebuffer(We,ot,Ae,Ne,ke,_t,Ae,Ne,z.DEPTH_BUFFER_BIT,z.NEAREST);P.bindFramebuffer(z.READ_FRAMEBUFFER,null),P.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||H.has(E)){let Dt=H.get(E),vs=H.get(V);P.bindFramebuffer(z.READ_FRAMEBUFFER,W),P.bindFramebuffer(z.DRAW_FRAMEBUFFER,D);for(let St=0;St<Be;St++)tr?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Dt.__webglTexture,q,ct+St):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Dt.__webglTexture,q),xt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,vs.__webglTexture,Se,Bt+St):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,vs.__webglTexture,Se),q!==0?z.blitFramebuffer(We,ot,Ae,Ne,ke,_t,Ae,Ne,z.COLOR_BUFFER_BIT,z.NEAREST):xt?z.copyTexSubImage3D(Fe,Se,ke,_t,Bt+St,We,ot,Ae,Ne):z.copyTexSubImage2D(Fe,Se,ke,_t,We,ot,Ae,Ne);P.bindFramebuffer(z.READ_FRAMEBUFFER,null),P.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else xt?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(Fe,Se,ke,_t,Bt,Ae,Ne,Be,Tt,Pt,bt.data):V.isCompressedArrayTexture?z.compressedTexSubImage3D(Fe,Se,ke,_t,Bt,Ae,Ne,Be,Tt,bt.data):z.texSubImage3D(Fe,Se,ke,_t,Bt,Ae,Ne,Be,Tt,Pt,bt):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Se,ke,_t,Ae,Ne,Tt,Pt,bt.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Se,ke,_t,bt.width,bt.height,Tt,bt.data):z.texSubImage2D(z.TEXTURE_2D,Se,ke,_t,Ae,Ne,Tt,Pt,bt);P.pixelStorei(z.UNPACK_ROW_LENGTH,li),P.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Us),P.pixelStorei(z.UNPACK_SKIP_PIXELS,Si),P.pixelStorei(z.UNPACK_SKIP_ROWS,Gi),P.pixelStorei(z.UNPACK_SKIP_IMAGES,gs),Se===0&&V.generateMipmaps&&z.generateMipmap(Fe),P.unbindTexture()},this.initRenderTarget=function(E){H.get(E).__webglFramebuffer===void 0&&J.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?J.setTextureCube(E,0):E.isData3DTexture?J.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?J.setTexture2DArray(E,0):J.setTexture2D(E,0),P.unbindTexture()},this.resetState=function(){X=0,Q=0,Z=null,P.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var Ce={world:{gravity:34,maxFall:40,coyoteTime:.12,jumpBuffer:.14,stepHeight:.45,pushStrength:1},heroes:{kid:{walk:5.2,run:9.2,accel:58,decel:42,air:20,jump:2.15,gravity:1,turn:15,stamina:7,regen:.22,mass:1,reach:1.25,climb:3.6,dash:{mul:1.45,time:.35,cooldown:4}},masha:{walk:5.2,run:9,accel:60,decel:42,air:20,jump:2.2,gravity:1,turn:16,stamina:6.5,regen:.22,mass:1,reach:1.25,climb:3.6,dash:{mul:1.45,time:.35,cooldown:4}},catbus:{walk:5.8,run:11,accel:32,decel:22,air:10,jump:1.8,gravity:1.15,turn:7,stamina:5,regen:.18,mass:3,reach:1,climb:2.6,dash:{mul:1.3,time:.6,cooldown:6}},moti:{walk:4.6,run:8.2,accel:26,decel:30,air:8,jump:1.6,gravity:1.3,turn:9,stamina:8,regen:.25,mass:4,reach:1.35,climb:2.4,dash:{mul:1.25,time:.5,cooldown:7}},noface:{walk:4.6,run:8.4,accel:14,decel:12,air:8,jump:0,gravity:1,turn:5,stamina:9,regen:.16,mass:5,reach:0,climb:0,dash:{mul:1.55,time:.8,cooldown:1.2,charges:3,recharge:12},fly:{speed:2.6,time:2.6,regen:.25}}},camera:{distance:6.5,minDistance:1.2,height:1.5,fov:62,mouseSens:.0026,touchSens:.0055,pitchMin:-.35,pitchMax:1.15,follow:12},ghost:{count:1,spawnGap:4,lateBoost:.08,burstRange:7,catchRadius:1.05,catchHeight:2.2,sightRange:22,hearRunRange:9,loseSightTime:2.2,repathEvery:.35,disguise:{cd:18,time:9,noticeRange:2.6},grab:1.1},abilities:{shelter:{cd:22,time:5,radius:3.4},light:{cd:14,radius:6,boost:1.2,boostTime:3},wisps:{cd:24,count:3,slow:4,stun:.6},path:{cd:18,time:8},swing:{cd:2.5,range:2.6,stun:1.6,knock:3.5},wave:{cd:1.5},dash:{},prop:{cd:4,walk:.45}},bots:{fleeRange:13,hideChance:.55,think:.25,restless:[7,15],helpRange:20,calmRun:.55,jukeRange:3.2,roofChance:.45},round:{hide:120,headStart:15,chase:60,chaseGhosts:4,chaseBotSpeed:.9,pumpkins:14,reward:{found:3,survive:5,catch:2}},graphics:{maxPixelRatioDesktop:1.75,maxPixelRatioMobile:1.35,shadows:!0,shadowMapSize:1024,fireflies:90}},Js=JSON.parse(JSON.stringify({world:Ce.world,heroes:Ce.heroes,ghost:Ce.ghost,abilities:Ce.abilities,bots:Ce.bots}));var bh=new Map;function ae(e,t={}){var r,a,n,o,l,h,u;let i=e+JSON.stringify(t);if(bh.has(i))return bh.get(i);let s=new Lt({color:e,roughness:(r=t.roughness)!=null?r:.72,metalness:(a=t.metalness)!=null?a:0,emissive:(n=t.emissive)!=null?n:0,emissiveIntensity:(o=t.emissiveIntensity)!=null?o:1,transparent:t.opacity!==void 0&&t.opacity<1,opacity:(l=t.opacity)!=null?l:1,flatShading:!!t.flat,side:(h=t.side)!=null?h:hs,map:(u=t.map)!=null?u:null});return bh.set(i,s),s}function k(e,t,{x:i=0,y:s=0,z:r=0,sx:a=1,sy:n=1,sz:o=1,rx:l=0,ry:h=0,rz:u=0,shadow:d=!0}={}){let c=new ut(e,t);return c.position.set(i,s,r),c.scale.set(a,n,o),c.rotation.set(l,h,u),c.castShadow=d,c.receiveShadow=!1,c}var j={sphere:(e=1,t=24,i=16)=>new $t(e,t,i),capsule:(e,t,i=6,s=12)=>new dh(e,t,i,s),cyl:(e,t,i,s=20,r=!1)=>new Br(e,t,i,s,1,r),box:(e,t,i)=>new Rs(e,t,i),cone:(e,t,i=20)=>new Ea(e,t,i),torus:(e,t,i=10,s=24,r=Math.PI*2)=>new vh(e,t,i,s,r)};function dt(e,t,i){let s=new lt;return s.position.set(e,t,i),s}function ri(e,t,i){let s=document.createElement("canvas");s.width=e,s.height=t,i(s.getContext("2d"),e,t);let r=new As(s);return r.colorSpace=Zt,r.anisotropy=4,r}function Vn(e=.07,t=2759188){let i=new lt,s=k(j.sphere(1,16,12),ae(t,{roughness:.3}),{sx:e*.8,sy:e,sz:e*.35,shadow:!1}),r=k(j.sphere(1,8,6),ae(16777215,{emissive:16777215,emissiveIntensity:.6}),{x:e*.25,y:e*.35,z:e*.3,sx:e*.28,sy:e*.28,sz:e*.1,shadow:!1}),a=k(j.sphere(1,8,6),ae(16777215,{emissive:16777215,emissiveIntensity:.6}),{x:-e*.25,y:-e*.35,z:e*.3,sx:e*.14,sy:e*.14,sz:e*.08,shadow:!1});return i.add(s,r,a),i}function Nt(e,t=3,i=.08,s=1,r=!0){let a=new mh(e,t),n=a.attributes.position,o=new I,l=[];for(let h=0;h<n.count;h++){o.fromBufferAttribute(n,h),l.push(`${o.x.toFixed(4)},${o.y.toFixed(4)},${o.z.toFixed(4)}`);let u=o.clone().normalize(),d=Math.sin(u.x*9.1+s)*Math.cos(u.y*7.3+s*2)*Math.sin(u.z*8.7+s*3)+.5*Math.sin(u.x*23+u.y*17+s*5)*Math.cos(u.z*19-s);o.multiplyScalar(1+d*i),n.setXYZ(h,o.x,o.y,o.z)}if(a.computeVertexNormals(),r){let h=a.attributes.normal,u=new Map;for(let d=0;d<n.count;d++){let c=u.get(l[d])||[0,0,0];c[0]+=h.getX(d),c[1]+=h.getY(d),c[2]+=h.getZ(d),u.set(l[d],c)}for(let d=0;d<n.count;d++){let c=u.get(l[d]),p=Math.hypot(c[0],c[1],c[2])||1;h.setXYZ(d,c[0]/p,c[1]/p,c[2]/p)}}return a}function Hr(e,t,i,{stride:s=.9,armSwing:r=.7,bob:a=.05,freq:n=1}={}){let o=t.speed,l=Math.min(1,o/4);e.phase=(e.phase||0)+i*(4+o*1.15)*n*(l>.05?1:0);let h=Math.sin(e.phase),u=e.blend=wt.lerp(e.blend||0,l,1-Math.exp(-i*10)),d=t.grounded?0:1;e.air=wt.lerp(e.air||0,d,1-Math.exp(-i*12));let c=h*s*u;if(e.legL&&(e.legL.rotation.x=wt.lerp(c,-.5,e.air)),e.legR&&(e.legR.rotation.x=wt.lerp(-c,.35,e.air)),e.armL&&(e.armL.rotation.x=wt.lerp(-h*r*u,-2.4,e.air*.8),e.armL.rotation.z=wt.lerp(.12,.5,e.air)),e.armR&&(e.armR.rotation.x=wt.lerp(h*r*u,-2.4,e.air*.8),e.armR.rotation.z=wt.lerp(-.12,-.5,e.air)),e.body){let p=Math.sin(t.t*2.2)*.012*(1-u);e.body.position.y=e.bodyY+Math.abs(Math.cos(e.phase))*a*u+p,e.body.rotation.x=.12*u*Math.min(1,o/7)-e.air*.1}e.head&&(e.head.rotation.x=-.08*u+Math.sin(t.t*1.7)*.02)}function Gr(e,t,i){var r;e.userData.sq=(r=e.userData.sq)!=null?r:0,t.landed&&(e.userData.sq=Math.min(.22,.06+Math.abs(t.landSpeed)*.012)),e.userData.sq=wt.lerp(e.userData.sq,0,1-Math.exp(-i*12));let s=e.userData.sq;e.scale.set(1+s*.6,1-s,1+s*.6)}function Ud(){let e=new lt,t=new lt;e.add(t);let i=ae(16175803,{roughness:.6}),s=ae(3809815,{roughness:.55}),r=ae(15305370,{roughness:.8}),a=ae(16052714),n=ae(14240063,{roughness:.45}),o=ri(64,64,(y,b,_)=>{y.fillStyle="#f4f2ea",y.fillRect(0,0,b,_),y.fillStyle="#6ea77a";for(let M=0;M<_;M+=16)y.fillRect(0,M,b,8)});o.wrapS=o.wrapT=Ui,o.repeat.set(3,2.2);let l=ae(16777215,{map:o,roughness:.85}),h=o.clone();h.repeat.set(2,1),h.needsUpdate=!0;let u=ae(16777215,{map:h,roughness:.85}),d={bodyY:.62};for(let y of[-1,1]){let b=dt(y*.095,.62,0);b.add(k(j.capsule(.066,.36),i,{y:-.25})),b.add(k(j.cyl(.07,.068,.12),a,{y:-.49})),b.add(k(j.sphere(1,16,12),n,{y:-.57,z:.035,sx:.085,sy:.06,sz:.13})),t.add(b),y<0?d.legR=b:d.legL=b}let c=dt(0,d.bodyY,0);t.add(c),d.body=c,c.add(k(j.cyl(.175,.205,.17,20),r,{y:0})),c.add(k(j.cyl(.15,.19,.36,20),l,{y:.24})),c.add(k(j.sphere(.152,20,10),l,{y:.41,sy:.45})),c.add(k(j.cyl(.05,.055,.08),i,{y:.47}));for(let y of[-1,1]){let b=dt(y*.19,.38,0);b.add(k(j.capsule(.058,.1),u,{y:-.08})),b.add(k(j.capsule(.043,.16),i,{y:-.26})),b.add(k(j.sphere(.05,12,10),i,{y:-.39})),c.add(b),y<0?d.armR=b:d.armL=b}let p=dt(0,.5,0);c.add(p),d.head=p,p.add(k(j.sphere(.24,32,24),i,{y:.2,sy:.96}));for(let y of[-1,1])p.add(k(j.sphere(.045,10,8),i,{x:y*.235,y:.18,sz:.6}));for(let y of[-1,1]){let b=Vn(.052);b.position.set(y*.088,.19,.214),b.rotation.y=y*.28,p.add(b),p.add(k(j.sphere(1,10,8),ae(15899290,{opacity:.65,roughness:1}),{x:y*.15,y:.115,z:.18,sx:.045,sy:.022,sz:.02,ry:y*.6,shadow:!1})),p.add(k(j.capsule(.007,.04,2,6),s,{x:y*.09,y:.265,z:.215,rz:Math.PI/2+y*.18,shadow:!1}))}p.add(k(j.torus(.022,.006,6,12,Math.PI),ae(10107701),{y:.1,z:.232,rz:Math.PI,shadow:!1}));let v=new $t(.262,32,20,0,Math.PI*2,0,Math.PI*.62);p.add(k(v,s,{y:.2,z:-.01,rx:-.78})),p.add(k(j.sphere(.25,24,16),s,{y:.13,z:-.08,sx:1.03,sy:.9,sz:.92}));let S=[[-.12,.3],[-.04,.315],[.05,.31],[.13,.295]];for(let[y,b]of S)p.add(k(j.sphere(1,12,10),s,{x:y,y:b,z:.19,sx:.07,sy:.075,sz:.05,rz:y*1.4}));for(let y of[-1,1])p.add(k(j.capsule(.045,.14,4,8),s,{x:y*.215,y:.1,z:.07,rz:y*.12}));let m=dt(0,.26,-.22);p.add(m),m.add(k(j.torus(.035,.016,8,16),ae(9329368,{roughness:.3,emissive:3807856,emissiveIntensity:.6}),{rx:Math.PI/2-.4})),m.add(k(j.capsule(.045,.12,4,8),s,{y:-.09,z:-.04,rx:.5})),d.tail=m,t.scale.setScalar(1.12);function f(y,b){Hr(d,b,y,{stride:.95,armSwing:.85,bob:.045});let _=b.action;if(_&&_.name==="wave"){let M=Math.sin(Math.min(1,_.k)*Math.PI);d.armL.rotation.z=2.7*M+Math.sin(b.t*14)*.3*M,d.armL.rotation.x=-.2*M,d.head.rotation.z=Math.sin(b.t*4)*.1*M}else d.head.rotation.z=0;d.tail.rotation.x=.25+Math.sin(d.phase*2)*.15*d.blend+d.air*.5,Gr(e,b,y)}return{root:e,update:f,height:1.72}}function Dd(){let e=new lt,t=new lt;e.add(t);let i=ri(256,128,(A,g,x)=>{A.fillStyle="#ecd6ad",A.fillRect(0,0,g,x);let U=7,R=()=>(U=(U*9301+49297)%233280)/233280;A.fillStyle="#7d4f2e";for(let N=0;N<16;N++)A.beginPath(),A.ellipse(R()*g,R()*x,10+R()*18,7+R()*12,R()*3,0,Math.PI*2),A.fill();A.globalAlpha=.15,A.strokeStyle="#6b4526";for(let N=0;N<400;N++){let W=R()*g,D=R()*x;A.beginPath(),A.moveTo(W,D),A.lineTo(W+3,D+5),A.stroke()}}),s=ae(16777215,{map:i,roughness:.9}),r=ae(15719606,{roughness:.9}),a=ae(8212270,{roughness:.9}),n=ae(5978658,{roughness:.7}),o=ae(16761946,{emissive:16754224,emissiveIntensity:1.6,roughness:.4}),l=ae(5795898,{roughness:1,flat:!0}),h={},u=dt(0,1,0);t.add(u),h.body=u,u.add(k(j.capsule(.62,1.3,8,20),s,{rx:Math.PI/2}));for(let A of[-1,1])for(let g of[-.55,0,.55])u.add(k(j.box(.04,.4,.4),n,{x:A*.605,y:.12,z:g})),u.add(k(j.box(.03,.32,.32),o,{x:A*.625,y:.12,z:g,shadow:!1}));u.add(k(j.box(.34,.3,.04),o,{y:.15,z:-1.25,shadow:!1})),u.add(k(j.sphere(1,16,10),l,{y:.52,sx:.5,sy:.14,sz:1.05}));let d=ri(128,64,(A,g,x)=>{A.fillStyle="#6a4125",A.fillRect(0,0,g,x),A.fillStyle="#f7d992",A.fillRect(6,6,g-12,x-12),A.fillStyle="#3a2112",A.font="bold 44px serif",A.textAlign="center",A.textBaseline="middle",A.fillText("\u732B",g/2,x/2+2)});u.add(k(j.box(.5,.24,.05),ae(16777215,{map:d,emissive:4465152,emissiveIntensity:.4}),{y:.74,z:.55})),u.add(k(j.box(.04,.12,.04),n,{y:.6,z:.55}));let c=ae(16756810,{emissive:16747040,emissiveIntensity:2.2});for(let[A,g]of[[-.4,.75],[.4,.75],[-.4,-.75],[.4,-.75]])u.add(k(j.sphere(.07,10,8),c,{x:A,y:.55,z:g,sy:1.3,shadow:!1}));let p=dt(0,.05,1.05);u.add(p),h.head=p,p.add(k(j.sphere(.52,28,20),s,{sx:1.05,sy:.95,sz:.85}));for(let A of[-1,1]){p.add(k(j.cone(.16,.3,4),r,{x:A*.32,y:.48,z:-.02,rz:-A*.35,ry:Math.PI/4})),p.add(k(j.cone(.1,.18,4),ae(14129802),{x:A*.31,y:.47,z:.02,rz:-A*.35,ry:Math.PI/4,shadow:!1}));let g=k(j.sphere(.13,20,14),ae(16765498,{emissive:16757760,emissiveIntensity:.9,roughness:.2}),{x:A*.21,y:.17,z:.36,sz:.6,shadow:!1});g.add(k(j.sphere(1,10,8),ae(1313797),{z:.105,sx:.026,sy:.1,sz:.03,shadow:!1})),p.add(g);for(let x of[-1,0,1])p.add(k(j.cyl(.006,.006,.55,4),ae(16183264),{x:A*.5,y:0+x*.05,z:.3,rz:Math.PI/2+x*.12*A,ry:-A*.25,shadow:!1}))}p.add(k(j.sphere(.045,10,8),ae(13068906),{y:.04,z:.45,shadow:!1})),p.add(k(j.torus(.27,.07,8,28,Math.PI),ae(2757132),{y:-.02,z:.33,rz:Math.PI,sz:.6,shadow:!1})),p.add(k(j.torus(.27,.052,8,28,Math.PI),ae(16512746,{roughness:.3}),{y:-.02,z:.37,rz:Math.PI,sz:.5,shadow:!1}));let v=[];for(let A of[.6,0,-.6])for(let g of[-1,1]){let x=dt(g*.42,.62,A);x.add(k(j.capsule(.13,.3,4,10),s,{y:-.25})),x.add(k(j.sphere(.15,12,10),r,{y:-.5,z:.05,sy:.7})),t.add(x),v.push({l:x,phase:(A===0?Math.PI:0)+(g>0?Math.PI:0)})}let S=dt(0,1.05,-1.2);t.add(S);let m=[],f=S;for(let A=0;A<6;A++){let g=dt(0,A===0?0:.2,0);g.add(k(j.sphere(.13-A*.008,12,10),A%2?r:a,{y:.1,sy:1.3})),g.rotation.x=-.35,f.add(g),f=g,m.push(g)}t.scale.setScalar(.92);let y=0,b=0,_=0,M=0;function w(A,g){let x=Math.min(1,g.speed/4);b=wt.lerp(b,x,1-Math.exp(-A*10)),_=wt.lerp(_,g.grounded?0:1,1-Math.exp(-A*12)),y+=A*(5+g.speed*1.3)*(x>.05?1:0),v.forEach(({l:U,phase:R})=>{U.rotation.x=wt.lerp(Math.sin(y+R)*.8*b,R?-.7:.7,_)}),u.position.y=1+Math.abs(Math.sin(y))*.07*b+Math.sin(g.t*2)*.015,u.rotation.x=-_*.15+.05*b,p.rotation.y=Math.sin(g.t*.7)*.1*(1-b),m.forEach((U,R)=>{U.rotation.z=Math.sin(g.t*3+R*.6)*.15*(.5+b)}),o.emissiveIntensity=1.5+Math.sin(g.t*3)*.1,g.landed&&(M=Math.min(.2,.06+Math.abs(g.landSpeed)*.01)),M=wt.lerp(M,0,1-Math.exp(-A*12)),e.scale.set(1+M*.5,1-M,1+M*.5)}return{root:e,update:w,height:1.9}}var Wn={classic:{name:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439",fur:15920611,shade:14933197,hat:12857642,hatBand:9314588,cloth:12857642},winter:{name:"\u0417\u0438\u043C\u043D\u0438\u0439",fur:15331578,shade:13622510,hat:8365784,hatBand:4153237,cloth:4880568},forest:{name:"\u041B\u0435\u0441\u043D\u043E\u0439",fur:15788760,shade:14537659,hat:5212730,hatBand:3037730,cloth:14251819},holiday:{name:"\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u0447\u043D\u044B\u0439",fur:16183270,shade:15129034,hat:14168634,hatBand:15251018,cloth:12067884}};function Od(e="classic"){let t=Wn[e]||Wn.classic,i=new lt,s=new lt;i.add(s);let r=ae(t.fur,{roughness:.95}),a=ae(t.shade,{roughness:1}),n=ae(t.hat,{roughness:.7}),o=ae(t.cloth,{roughness:.75}),l=ae(2825495),h=ae(7030054,{roughness:.85}),u=ae(4138774,{roughness:.9}),d=ae(16763248,{emissive:16754240,emissiveIntensity:2.4}),c={bodyY:.45};for(let R of[-1,1]){let N=dt(R*.36,.45,0);N.add(k(Nt(.28,2,.1,R+3),r,{y:-.2,sy:1.1})),N.add(k(j.sphere(.22,12,10),a,{y:-.4,z:.08,sy:.55}));for(let W of[-1,0,1])N.add(k(j.sphere(.035,6,4),ae(7166538),{x:W*.08,y:-.43,z:.27,sz:1.4,shadow:!1}));s.add(N),R<0?c.legR=N:c.legL=N}let p=dt(0,c.bodyY,0);s.add(p),c.body=p,p.add(k(Nt(.86,4,.06,1.3),r,{y:.74,sy:1.1,sz:.92})),p.add(k(j.torus(.76,.08,8,32),o,{y:.2,rx:Math.PI/2,sy:.92})),p.add(k(j.box(.52,.42,.08),o,{y:0,z:.7,rx:-.14}));let v=dt(0,1.3,.68);p.add(v),c.head=v;let S=[];for(let R of[-1,1]){let N=k(j.sphere(1,12,8),l,{x:R*.14,y:.05,z:.08,sx:.038,sy:.022,sz:.02,shadow:!1});v.add(N),S.push(N),v.add(k(j.sphere(1,10,8),ae(15771296,{opacity:.55,roughness:1}),{x:R*.26,y:-.03,z:.05,sx:.08,sy:.04,sz:.02,shadow:!1})),v.add(k(j.capsule(.013,.09,2,6),ae(13616821),{x:R*.14,y:.15,z:.07,rz:Math.PI/2-R*.15,shadow:!1})),v.add(k(Nt(.19,2,.14,R*5),r,{x:R*.15,y:-.13,z:.08,sx:1.3,sy:.8,sz:.7})),v.add(k(Nt(.2,2,.16,R*11),r,{x:R*.46,y:-.05,z:-.1,sy:1.3}))}v.add(k(j.sphere(.055,10,8),ae(15321528),{y:-.02,z:.15,shadow:!1})),v.add(k(Nt(.16,2,.16,9),r,{y:-.33,z:.05,sy:1.4}));let m=k(j.sphere(1,10,8),ae(5909026),{y:-.2,z:.16,sx:.06,sy:.001,sz:.02,shadow:!1});v.add(m);let f=dt(0,1.66,.02);if(p.add(f),f.add(k(j.cyl(.66,.7,.05,32),n,{rx:.08})),f.add(k(new $t(.42,24,12,0,Math.PI*2,0,Math.PI/2),n,{y:.02,sy:.72})),f.add(k(j.cyl(.425,.425,.07,24),ae(t.hatBand),{y:.05})),e==="holiday")for(let R=0;R<8;R++){let N=R/8*Math.PI*2;f.add(k(j.sphere(.035,8,6),ae(16769162,{emissive:16760896,emissiveIntensity:1.5}),{x:Math.cos(N)*.43,y:.06,z:Math.sin(N)*.43,shadow:!1}))}e==="winter"&&f.add(k(Nt(.1,1,.2,2),ae(16777215),{y:.33})),e==="forest"&&f.add(k(j.sphere(1,8,6),ae(7909450,{flat:!0}),{x:.3,y:.2,z:.1,sx:.14,sy:.04,sz:.08,rz:.4}));let y=dt(0,.95,-.72);p.add(y),c.pack=y,y.add(k(j.box(1.15,1.3,.62),u,{z:-.3}));for(let R of[-1,1])for(let N of[-1,1])y.add(k(j.box(.1,.1,.68),h,{x:R*.58,y:N*.65,z:-.3}));for(let R of[-1,1])y.add(k(j.box(.1,1.4,.1),h,{x:R*.58,z:-.62}));for(let R of[-.2,.25])y.add(k(j.box(1.1,.06,.58),h,{y:R,z:-.3}));let b=new Fr;b.moveTo(-.78,0),b.lineTo(0,.42),b.lineTo(.78,0),b.closePath();let _=k(new Aa(b,{depth:.86,bevelEnabled:!1}),ae(3878984,{roughness:.6}),{y:.66,z:-.73});y.add(_);let M=ri(128,160,(R,N,W)=>{R.fillStyle="#b7473c",R.fillRect(0,0,N,W),R.fillStyle="#f1dcc0",R.fillRect(10,10,N-20,W-20),R.fillStyle="#8a3a2e",R.beginPath(),R.ellipse(64,95,26,22,0,0,Math.PI*2),R.fill();for(let[D,X]of[[36,60],[54,48],[74,48],[92,60]])R.beginPath(),R.ellipse(D,X,9,11,0,0,Math.PI*2),R.fill()});y.add(k(j.box(.62,.78,.02),ae(16777215,{map:M,roughness:.9}),{y:-.05,z:-.63})),y.add(k(j.box(.36,.28,.02),d,{y:.42,z:-.63,shadow:!1}));for(let R of[-1,1]){let N=dt(R*.7,.3,-.35);N.add(k(j.cyl(.004,.004,.14,4),l,{y:-.07,shadow:!1})),N.add(k(j.cyl(.09,.09,.2,10),ae(16747082,{emissive:16738858,emissiveIntensity:2}),{y:-.24,shadow:!1})),y.add(N)}y.add(k(j.cyl(.12,.1,.18,10),ae(9067066),{x:-.35,y:-.5,z:-.62})),y.add(k(j.cyl(.09,.09,.5,10),ae(14206106),{x:.3,y:-.52,z:-.66,rz:Math.PI/2}));for(let R of[-1,1])y.add(k(j.box(.12,1.1,.05),ae(5913122),{x:R*.42,y:.1,z:.18,rx:.15}));let w=ri(64,64,(R,N,W)=>{R.fillStyle="#ffe2a0",R.fillRect(0,0,N,W),R.fillStyle="#a0461e",R.beginPath(),R.ellipse(32,40,13,11,0,0,Math.PI*2),R.fill();for(let[D,X]of[[17,22],[27,15],[38,15],[48,22]])R.beginPath(),R.ellipse(D,X,5,6,0,0,Math.PI*2),R.fill()}),A=new Lt({map:w,emissive:16754240,emissiveMap:w,emissiveIntensity:2.2});for(let R of[-1,1]){let N=dt(R*.8,1.08,.05);if(N.add(k(Nt(.22,2,.12,R*7),r,{y:-.3,sy:1.7})),N.add(k(Nt(.15,1,.1,R*8),a,{y:-.64})),p.add(N),R<0){c.armR=N;let W=dt(0,-.74,.08);W.add(k(j.cyl(.02,.02,.3,6),h,{y:-.05,shadow:!1})),W.add(k(j.cyl(.15,.15,.34,14),A,{y:-.36,shadow:!1})),W.add(k(j.cyl(.17,.17,.04,14),u,{y:-.18})),W.add(k(j.cyl(.17,.17,.04,14),u,{y:-.54})),N.add(W),c.lantern=W,c.lampMat=A}else c.armL=N}let g=[],x=ae(16765066,{emissive:16751162,emissiveIntensity:2.4});for(let R=0;R<2;R++){let N=new lt;N.add(k(j.sphere(.1,10,8),x,{shadow:!1})),N.add(k(j.cone(.08,.2,8),x,{y:.13,shadow:!1}));for(let W of[-1,1])N.add(k(j.sphere(.014,6,4),l,{x:W*.035,y:.01,z:.09,shadow:!1}));s.add(N),g.push(N)}s.scale.setScalar(1.02);function U(R,N){Hr(c,{...N,speed:N.speed*.8},R,{stride:.55,armSwing:.35,bob:.06,freq:.8}),p.rotation.z=Math.sin(c.phase)*.06*c.blend,p.rotation.y=0,m.scale.y=.001,S.forEach(D=>D.scale.y=.022);let W=N.action;if(W){let D=W.k,X=Math.sin(Math.min(1,D)*Math.PI);if(W.name==="swing"){let Q=D<.3?-D/.3:-1+(D-.3)/.7*2.6;c.armR.rotation.x=wt.lerp(c.armR.rotation.x,-1.2*Q-.3,.6),c.armR.rotation.z=-.3-X*.5,p.rotation.y=-Q*.35,m.scale.y=.03*X}else if(W.name==="cast"||W.name==="summon"||W.name==="path"){let Q=W.name==="summon"?-1.5:W.name==="path"?-1.1:-2.6;c.armL.rotation.x=Q*X,c.armR.rotation.x=Q*X,c.armL.rotation.z=.5*X,c.armR.rotation.z=-.5*X,p.position.y+=X*.08,p.rotation.x=-.12*X,m.scale.y=.04*X,S.forEach(Z=>Z.scale.y=.022-.015*X)}else W.name==="wave"&&(c.armL.rotation.x=-.3*X,c.armL.rotation.z=2.5*X+Math.sin(N.t*12)*.35*X,v.rotation.z=Math.sin(N.t*3)*.08*X,m.scale.y=.05*X,S.forEach(Q=>Q.scale.y=.022-.016*X))}else v.rotation.z=0;(!W||W.name!=="swing")&&(c.lantern.rotation.x=-c.armR.rotation.x+Math.sin(N.t*2.4)*.12),c.lampMat.emissiveIntensity=2.2+(W&&W.name!=="wave"?Math.sin(Math.min(1,W.k)*Math.PI)*2.5:0),c.pack.rotation.x=Math.sin(c.phase*2)*.03*c.blend,g.forEach((D,X)=>{let Q=N.t*(1.1+X*.3)+X*Math.PI,Z=W&&W.name==="summon"?1.2+Math.sin(Math.min(1,W.k)*Math.PI)*1.2:1.15;D.position.set(Math.cos(Q)*Z,1.7+Math.sin(N.t*2+X)*.2,Math.sin(Q)*Z),D.rotation.y=-Q+Math.PI}),Gr(i,N,R)}return{root:i,update:U,height:2.4}}function Bd(){let e=new lt,t=new lt;e.add(t);let i=new Lt({color:789010,roughness:.35,metalness:.1,transparent:!0,opacity:.93,emissive:1444388,emissiveIntensity:.6}),s=[[0,0],[.5,0],[.58,.12],[.56,.5],[.5,1],[.46,1.5],[.43,1.8],[.42,2.05],[.38,2.28],[.28,2.44],[.12,2.52],[0,2.54]].map(([M,w])=>new fe(M,w)),r=k(new gh(s,32),i);t.add(r);let a=ae(15986662,{roughness:.45}).clone(),n=.29,o=.36,l=.13,h=2.06,u=.3;t.add(k(j.sphere(1,32,24),a,{y:h,z:u,sx:n,sy:o,sz:l}));let d=(M,w)=>{let A=1-M*M/(n*n)-w*w/(o*o);return u+l*Math.sqrt(Math.max(0,A))-.004},c=(M,w,A,g,x,U=0)=>{let R=k(j.sphere(1,16,10),x,{x:M,y:h+w,z:d(M,w),sx:A,sy:g,sz:.012,rz:U,shadow:!1});return R.lookAt(new I(M*2.2,h+w*1.4,2)),R.rotation.z+=U,t.add(R),R},p=ae(7290771,{roughness:.6}),v=new Lt({color:328456,emissive:5974666,emissiveIntensity:0,roughness:1}),S=[];for(let M of[-1,1])S.push(c(M*.1,.05,.05,.03,v)),c(M*.1,.15,.028,.045,p,M*.3),c(M*.1,-.07,.022,.075,p);c(0,-.2,.05,.012,ae(3877427));let m=[];for(let M of[-1,1]){let w=dt(M*.4,1.55,.1);w.add(k(j.capsule(.05,.7,4,8),i,{y:-.4})),w.add(k(j.sphere(.07,10,8),i,{y:-.8})),w.rotation.z=M*.06,t.add(w),m.push(w)}let f=Bi("rgba(150,90,220,0.55)","rgba(80,30,140,0)"),y=new Ki(new Di({map:f,transparent:!0,depthWrite:!1,blending:kt,opacity:0}));y.scale.set(3.4,4.2,1),y.position.set(0,1.4,-.2),t.add(y);let b=0;function _(M,w){var x,U;let A=w.t;b=wt.lerp(b,w.mode==="hunt"?1:0,1-Math.exp(-M*4)),t.position.y=.12+Math.sin(A*1.6)*.07,t.rotation.x=Math.min(.22,w.speed*.028),t.rotation.z=Math.sin(A*.9)*.03,m.forEach((R,N)=>{let W=N?1:-1;R.rotation.x=wt.lerp(.05,-1.35+Math.sin(A*5+N)*.08,b),R.rotation.z=W*(.06+.1*(1-b))}),v.emissiveIntensity=b*(.9+Math.sin(A*6)*.3),y.material.opacity=(.25+b*.5)*((x=w.appear)!=null?x:1);let g=(U=w.appear)!=null?U:1;i.opacity=.93*g,a.opacity=g,a.transparent=g<1,t.scale.set(.6+.4*g,g,.6+.4*g)}return{root:e,update:_,height:2.5}}function Bi(e,t,i=128){let s=document.createElement("canvas");s.width=s.height=i;let r=s.getContext("2d"),a=r.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);a.addColorStop(0,e),a.addColorStop(1,t),r.fillStyle=a,r.fillRect(0,0,i,i);let n=new As(s);return n.colorSpace=Zt,n}var Eh={gender:[["girl","\u0414\u0435\u0432\u043E\u0447\u043A\u0430"],["boy","\u041C\u0430\u043B\u044C\u0447\u0438\u043A"]],hairStyle:{girl:[["braids","\u041A\u043E\u0441\u0438\u0447\u043A\u0438"],["pony","\u0425\u0432\u043E\u0441\u0442\u0438\u043A"],["bob","\u041A\u0430\u0440\u0435"]],boy:[["messy","\u041B\u043E\u0445\u043C\u0430\u0442\u0430\u044F"],["spiky","\u0401\u0436\u0438\u043A"],["bob","\u0427\u0451\u043B\u043A\u0430"]]},hair:["#7a4a2a","#3a2217","#e8b86a","#c8683a","#f4f0f8","#9a6ad8"],sweater:["#b78ae8","#f07a5a","#6ab0e8","#f4c64a","#7ac88a","#f49ac0"],emblem:[["star","\u2B50"],["heart","\u2764\uFE0F"],["paw","\u{1F43E}"],["none","\u2014"]],ears:[["1","\u0414\u0430"],["0","\u041D\u0435\u0442"]],tail:[["1","\u0414\u0430"],["0","\u041D\u0435\u0442"]]},Th={gender:"girl",hairStyle:"braids",hair:"#7a4a2a",sweater:"#b78ae8",emblem:"star",ears:"1",tail:"1"},zd="masha-game-look-v1";function Ca(){try{return{...Th,...JSON.parse(localStorage.getItem(zd)||"{}")}}catch{return{...Th}}}function kd(e){try{localStorage.setItem(zd,JSON.stringify(e))}catch{}}var jn=e=>new Ze(e),e1=(e,t)=>"#"+jn(e).lerp(new Ze(16777215),t).getHexString(),Hd=(e,t)=>"#"+jn(e).lerp(new Ze(0),t).getHexString();function Fd(e,t){return ri(256,256,(i,s,r)=>{i.fillStyle=e,i.fillRect(0,0,s,r),i.strokeStyle=Hd(e,.18),i.lineWidth=3;for(let l=8;l<s;l+=16)for(let h=0;h<r;h+=12)i.beginPath(),i.moveTo(l-5,h),i.lineTo(l,h+8),i.lineTo(l+5,h),i.stroke();i.fillStyle=e1(e,.18);for(let l=0;l<300;l++)i.fillRect(Math.random()*s,Math.random()*r,2,2);let a=s*.5,n=r*.42,o=44;if(t==="star"){i.fillStyle="#f7d65a",i.strokeStyle="#c8962a",i.lineWidth=3,i.beginPath();for(let l=0;l<10;l++){let h=-Math.PI/2+l*Math.PI/5,u=l%2?o*.45:o;i.lineTo(a+Math.cos(h)*u,n+Math.sin(h)*u)}i.closePath(),i.fill(),i.stroke()}else if(t==="heart")i.fillStyle="#f0506a",i.beginPath(),i.moveTo(a,n+o*.8),i.bezierCurveTo(a-o*1.4,n-o*.2,a-o*.5,n-o*1.1,a,n-o*.35),i.bezierCurveTo(a+o*.5,n-o*1.1,a+o*1.4,n-o*.2,a,n+o*.8),i.fill();else if(t==="paw"){i.fillStyle="#fff4e8",i.beginPath(),i.ellipse(a,n+8,15,12,0,0,7),i.fill();for(let[l,h]of[[-16,-10],[-6,-20],[6,-20],[16,-10]])i.beginPath(),i.ellipse(a+l,n+h,6,7,0,0,7),i.fill()}})}function t1(){return ri(128,128,(e,t,i)=>{e.fillStyle="#7fa6d6",e.fillRect(0,0,t,i);for(let s=0;s<900;s++)e.fillStyle=Math.random()<.5?"rgba(255,255,255,.18)":"rgba(30,60,120,.18)",e.fillRect(Math.random()*t,Math.random()*i,1,3)})}function Gd(e){let t={...Th,...e||{}},i=t.gender==="girl",s=new lt,r=new lt;s.add(r);let a=ae(16308420,{roughness:.6}),n=ae(jn(t.hair).getHex(),{roughness:.55}),o=ae(jn(Hd(t.hair,.2)).getHex(),{roughness:.6}),l=Fd(t.sweater,t.emblem);l.wrapS=Ui;let h=new Lt({map:l,roughness:.95}),u=Fd(t.sweater,"none");u.wrapS=u.wrapT=Ui,u.repeat.set(1,1);let d=new Lt({map:u,roughness:.95}),c=new Lt({map:t1(),roughness:.9}),p=ae(16184568,{roughness:.5}),v=ae(14207210,{roughness:.6}),S=ae(16447476,{roughness:.9}),m=ae(16103624,{roughness:.9}),f={bodyY:.52};for(let g of[-1,1]){let x=dt(g*.1,.52,0);x.add(k(j.capsule(.078,.3),c,{y:-.2})),x.add(k(j.cyl(.085,.09,.06,14),c,{y:-.39})),x.add(k(j.sphere(1,16,12),p,{y:-.46,z:.04,sx:.095,sy:.07,sz:.14})),x.add(k(j.box(.17,.03,.26),v,{y:-.515,z:.04})),i&&x.add(k(j.torus(.02,.008,6,10),ae(12101872),{y:-.41,z:.12,rx:.3,shadow:!1})),r.add(x),g<0?f.legR=x:f.legL=x}let y=dt(0,f.bodyY,0);r.add(y),f.body=y,y.add(k(j.cyl(.19,.2,.1,20),c,{y:0}));let b=k(j.cyl(.19,.225,.34,24),h,{y:.2});b.rotation.y=Math.PI,y.add(b),y.add(k(j.torus(.2,.035,8,24),d,{y:.04,rx:Math.PI/2})),y.add(k(j.sphere(.19,20,10),d,{y:.37,sy:.42})),y.add(k(j.torus(.075,.03,8,16),d,{y:.42,rx:Math.PI/2}));for(let g of[-1,1]){let x=dt(g*.22,.34,0);x.add(k(j.capsule(.075,.16),d,{y:-.12})),x.add(k(j.torus(.06,.025,6,12),d,{y:-.26,rx:Math.PI/2})),x.add(k(j.sphere(.055,12,10),a,{y:-.31})),y.add(x),g<0?f.armR=x:f.armL=x}if(t.tail==="1"){let g=dt(0,.06,-.2);y.add(g);let x=Nt(1,2,.12,4),U=[],R=g;for(let N=0;N<5;N++){let W=dt(0,.05,-.07);R.add(W),W.add(k(x,S,{sx:.085+N*.012,sy:.085+N*.012,sz:.1+N*.012})),U.push(W),R=W}f.tailSegs=U}let _=dt(0,.44,0);y.add(_),f.head=_,_.add(k(j.sphere(.27,32,24),a,{y:.24,sy:.95}));for(let g of[-1,1]){let x=Vn(.062,4860442);x.position.set(g*.1,.22,.24),x.rotation.y=g*.28,_.add(x),_.add(k(j.sphere(1,10,8),ae(15899290,{opacity:.7,roughness:1}),{x:g*.17,y:.14,z:.2,sx:.05,sy:.025,sz:.02,ry:g*.6,shadow:!1}))}_.add(k(j.torus(.024,.007,6,12,Math.PI),ae(10107701),{y:.12,z:.262,rz:Math.PI,shadow:!1})),_.add(k(j.sphere(.012,8,6),ae(15245456),{y:.17,z:.268,shadow:!1}));let M=new $t(.29,32,20,0,Math.PI*2,0,Math.PI*.6);_.add(k(M,n,{y:.24,z:-.01,rx:-.72})),_.add(k(j.sphere(.28,24,16),n,{y:.17,z:-.09,sx:1.04,sy:.92,sz:.94}));let w=t.hairStyle;if(w==="messy"||w==="spiky"){let g=Nt(1,1,.25,9),x=w==="spiky"?14:10;for(let U=0;U<x;U++){let R=U/x*Math.PI*2,N=.35+U%3*.12,W=Math.cos(R)*.2,D=Math.sin(R)*.2-.03;D>.14&&Math.abs(W)<.12||_.add(w==="spiky"?k(j.cone(.05,.14,6),n,{x:W,y:.36+N*.1,z:D,rx:D*2.5,rz:-W*2.5}):k(g,U%2?n:o,{x:W*1.1,y:.3+N*.12,z:D,sx:.09,sy:.07,sz:.09}))}for(let[U,R]of[[-.12,.34],[-.03,.36],[.07,.355],[.15,.33]])_.add(k(j.sphere(1,10,8),n,{x:U,y:R,z:.22,sx:.075,sy:.07,sz:.05,rz:U*2}))}else{for(let[g,x]of[[-.14,.34],[-.05,.355],[.05,.35],[.14,.335]])_.add(k(j.sphere(1,12,10),n,{x:g,y:x,z:.215,sx:.08,sy:.08,sz:.055,rz:g*1.4}));for(let g of[-1,1])_.add(k(j.capsule(.05,.16,4,8),n,{x:g*.245,y:.13,z:.07,rz:g*.12}))}if(f.braids=[],w==="braids")for(let g of[-1,1]){let x=dt(g*.2,.12,-.12);_.add(x);for(let U=0;U<4;U++)x.add(k(j.sphere(1,10,8),n,{x:g*.02*U,y:-.07*U-.02,z:-.02*U,sx:.05-U*.004,sy:.055,sz:.05-U*.004}));x.add(k(j.sphere(.03,10,8),ae(10124008,{roughness:.3,emissive:3807856,emissiveIntensity:.4}),{x:g*.07,y:-.31,z:-.07})),x.add(k(j.cone(.04,.09,8),n,{x:g*.075,y:-.37,z:-.08,rx:Math.PI})),f.braids.push(x)}else if(w==="pony"){let g=dt(0,.32,-.25);_.add(g),g.add(k(j.torus(.04,.016,8,16),ae(10124008,{roughness:.3}),{rx:Math.PI/2-.4})),g.add(k(j.capsule(.055,.16,4,8),n,{y:-.11,z:-.05,rx:.5})),f.braids.push(g)}if(i){let g=new lt;for(let x=0;x<6;x++){let U=x*Math.PI/3;g.add(k(j.sphere(1,8,6),ae(16777215,{roughness:.5}),{x:Math.cos(U)*.035,y:Math.sin(U)*.035,sx:.028,sy:.028,sz:.012,shadow:!1}))}g.add(k(j.sphere(.018,8,6),ae(16238666),{z:.01,shadow:!1})),g.position.set(.2,.38,.12),g.rotation.set(-.3,.7,0),_.add(g)}if(t.ears==="1"){f.ears=[];for(let g of[-1,1]){let x=dt(g*.16,.44,-.02);x.rotation.z=-g*.35,x.add(k(j.cone(.085,.19,4),S,{y:.07,sz:.55,ry:Math.PI/4})),x.add(k(j.cone(.05,.13,4),m,{y:.06,z:.02,sz:.3,ry:Math.PI/4})),x.add(k(Nt(1,1,.2,g+3),S,{y:.005,sx:.07,sy:.04,sz:.05})),_.add(x),f.ears.push(x)}}r.scale.setScalar(1.05);function A(g,x){Hr(f,x,g,{stride:.9,armSwing:.9,bob:.05});let U=x.action;if(U&&U.name==="wave"){let R=Math.sin(Math.min(1,U.k)*Math.PI);f.armL.rotation.z=2.7*R+Math.sin(x.t*14)*.3*R,f.armL.rotation.x=-.2*R,f.head.rotation.z=Math.sin(x.t*4)*.1*R}else f.head.rotation.z=0;f.tailSegs&&f.tailSegs.forEach((R,N)=>{R.rotation.y=Math.sin(x.t*3-N*.6)*(.25-f.blend*.15),R.rotation.x=-.25+f.blend*.2+f.air*.3}),f.ears&&f.ears.forEach((R,N)=>{R.rotation.x=Math.max(0,Math.sin(x.t*1.3+N*2))**8*.4}),f.braids.forEach((R,N)=>{R.rotation.x=.1+Math.sin(f.phase*2+N)*.18*f.blend+f.air*.4}),Gr(s,x,g)}return{root:s,update:A,height:1.55}}var i1=e=>{try{return e&&e!=="classic"?JSON.parse(e):Ca()}catch{return Ca()}},ai=[{id:"kid",name:"\u041C\u043E\u0439 \u043A\u043E\u0442\u0438\u043A",rarity:"\u041C\u041E\u0419 \u0413\u0415\u0420\u041E\u0419",rarityClass:"rare",about:"\u0422\u0432\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0433\u0435\u0440\u043E\u0439! \u0412\u044B\u0431\u0435\u0440\u0438, \u0434\u0435\u0432\u043E\u0447\u043A\u0430 \u0438\u043B\u0438 \u043C\u0430\u043B\u044C\u0447\u0438\u043A, \u043F\u0440\u0438\u0447\u0451\u0441\u043A\u0443, \u0441\u0432\u0438\u0442\u0435\u0440, \u0443\u0448\u043A\u0438 \u0438 \u0445\u0432\u043E\u0441\u0442\u0438\u043A \u043A\u043E\u0442\u0438\u043A\u0430.",ability:"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430",abilityText:"Q \u2014 \u043F\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u0432 \u043F\u0440\u0435\u0434\u043C\u0435\u0442, G \u2014 \u043F\u043E\u043C\u0430\u0445\u0430\u0442\u044C. \u041F\u0440\u044B\u0433\u0443\u0447\u0438\u0439 \u0438 \u043B\u043E\u0432\u043A\u0438\u0439, \u043A\u0430\u043A \u041C\u0430\u0448\u0430.",tags:["\u0421\u0432\u043E\u0439 \u0441\u043A\u0438\u043D","\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430"],build:e=>Gd(i1(e)),radius:.42,height:1.6,custom:!0,bot:!1,cam:{distance:6,height:1.4}},{id:"masha",name:"\u041C\u0430\u0448\u0430",rarity:"\u0413\u0415\u0420\u041E\u0419",rarityClass:"hero",about:"\u0421\u043C\u0435\u043B\u0430\u044F \u0434\u0435\u0432\u043E\u0447\u043A\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043D\u0430\u0448\u043B\u0430 \u0434\u043E\u0440\u043E\u0433\u0443 \u0432 \u043C\u0438\u0440 \u0434\u0443\u0445\u043E\u0432. \u041B\u0451\u0433\u043A\u0430\u044F, \u043F\u0440\u044B\u0433\u0443\u0447\u0430\u044F \u0438 \u043E\u0447\u0435\u043D\u044C \u0431\u044B\u0441\u0442\u0440\u0430\u044F \u043D\u0430 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430\u0445.",ability:"\u041B\u0451\u0433\u043A\u0438\u0435 \u043D\u043E\u0433\u0438",abilityText:"\u041F\u0440\u044B\u0433\u0430\u0435\u0442 \u0432\u044B\u0448\u0435 \u0432\u0441\u0435\u0445 \u0438 \u0440\u0435\u0437\u043A\u043E \u0441\u0442\u0430\u0440\u0442\u0443\u0435\u0442. E \u2014 \u0440\u044B\u0432\u043E\u043A, G \u2014 \u043F\u043E\u043C\u0430\u0445\u0430\u0442\u044C.",tags:["\u041F\u0440\u044B\u0436\u043E\u043A","\u0412\u044B\u043D\u043E\u0441\u043B\u0438\u0432\u043E\u0441\u0442\u044C"],build:Ud,radius:.42,height:1.72,cam:{distance:6.2,height:1.45}},{id:"catbus",name:"\u041D\u044D\u043A\u043E\u0411\u0443\u0441",rarity:"\u042D\u041F\u0418\u0427\u0415\u0421\u041A\u0418\u0419",rarityClass:"epic",about:"\u0414\u0443\u0445-\u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0443\u0432\u0435\u0437\u0451\u0442 \u0442\u0435\u0431\u044F \u0432 \u0441\u0430\u043C\u044B\u0435 \u0443\u0434\u0438\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043C\u0435\u0441\u0442\u0430. \u0412\u0441\u0435\u0433\u0434\u0430 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442, \u043A\u043E\u0433\u0434\u0430 \u0442\u044B \u0432 \u043F\u0443\u0442\u0438.",ability:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u043D\u043E\u0439 \u0440\u0435\u0439\u0441",abilityText:"\u0421\u0430\u043C\u044B\u0439 \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u043D\u0430 \u043F\u0440\u044F\u043C\u043E\u0439, \u043D\u043E \u0442\u044F\u0436\u0451\u043B\u044B\u0439 \u0438 \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E \u043F\u043E\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442. E \u2014 \u0434\u043B\u0438\u043D\u043D\u044B\u0439 \u0440\u044B\u0432\u043E\u043A.",tags:["\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C","\u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435"],build:Dd,radius:.85,height:1.9,cam:{distance:8.2,height:2.1,side:.6}},{id:"moti",name:"\u0414\u044F\u0434\u044E\u0448\u043A\u0430 \u041C\u043E\u0442\u0438",rarity:"\u042D\u041F\u0418\u0427\u0415\u0421\u041A\u0418\u0419",rarityClass:"epic",about:"\u0414\u043E\u0431\u0440\u043E\u0434\u0443\u0448\u043D\u044B\u0439 \u0432\u0435\u043B\u0438\u043A\u0430\u043D, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u043E\u0441\u0438\u0442 \u043D\u0430 \u0441\u043F\u0438\u043D\u0435 \u0443\u044E\u0442\u043D\u044B\u0439 \u043F\u0440\u0438\u044E\u0442 \u0434\u043B\u044F \u0434\u0443\u0445\u043E\u0432. \u0422\u0430\u043C \u0432\u0441\u0435\u0433\u0434\u0430 \u043D\u0430\u0439\u0434\u0451\u0442\u0441\u044F \u043C\u0435\u0441\u0442\u043E \u0434\u043B\u044F \u043D\u043E\u0432\u044B\u0445 \u0434\u0440\u0443\u0437\u0435\u0439.",ability:"\u0423\u044E\u0442\u043D\u044B\u0439 \u043F\u0440\u0438\u044E\u0442",abilityText:"\u041A\u0443\u043F\u043E\u043B, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0411\u0435\u0437\u043B\u0438\u043A \u043D\u0438\u043A\u043E\u0433\u043E \u043D\u0435 \u043F\u043E\u0439\u043C\u0430\u0435\u0442. \u0415\u0449\u0451 3 \u0443\u043C\u0435\u043D\u0438\u044F: 2, 3, 4, F.",tags:["\u0417\u0430\u0449\u0438\u0442\u0430","\u041B\u0435\u0447\u0435\u043D\u0438\u0435","\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430","\u041A\u043E\u043C\u0430\u043D\u0434\u0430"],build:e=>Od(e),radius:.85,height:2.4,skins:Wn,helper:!0,cam:{distance:8.4,height:3,side:1.3}}],Vt={id:"noface",name:"\u0411\u0435\u0437\u043B\u0438\u043A",rarity:"\u041E\u0425\u041E\u0422\u041D\u0418\u041A",rarityClass:"hunter",about:"\u0422\u0438\u0445\u0438\u0439 \u0434\u0443\u0445 \u0432 \u0431\u0435\u043B\u043E\u0439 \u043C\u0430\u0441\u043A\u0435. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0438\u0449\u0435\u0442 \u0441\u043F\u0440\u044F\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044F, \u043F\u043E\u0442\u043E\u043C \u0434\u043E\u0433\u043E\u043D\u044F\u0435\u0442. \u0423\u043C\u0435\u0435\u0442 \u043F\u0440\u0438\u0442\u0432\u043E\u0440\u044F\u0442\u044C\u0441\u044F \u0433\u0435\u0440\u043E\u044F\u043C\u0438 \u0438 \u0432\u0435\u0449\u0430\u043C\u0438.",ability:"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430",abilityText:"\u0418\u0433\u0440\u0430\u0435\u0448\u044C \u0432\u043E\u0434\u044F\u0449\u0438\u043C! 1 \u2014 \u0441\u0442\u0430\u0442\u044C \u0433\u0435\u0440\u043E\u0435\u043C, 2 \u2014 \u0441\u0442\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u043C, E \u2014 \u0440\u044B\u0432\u043E\u043A (3 \u0437\u0430\u0440\u044F\u0434\u0430), \u041F\u0440\u043E\u0431\u0435\u043B \u2014 \u0432\u0437\u043B\u0435\u0442\u0435\u0442\u044C.",tags:["\u041E\u0445\u043E\u0442\u0430","\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430","\u041F\u043E\u043B\u0451\u0442"],build:Bd,radius:.55,height:2.5,cam:{distance:7.6,height:2.3,side:.6}};var qn,Vd,Xn=class{constructor(t=32){Et(this,qn);this.half=t,this.boxes=[],this.circles=[],this.bushes=[],this.ladders=[],this.grid=null}addBox(t,i,s,r,a,n={}){var h,u,d;let o=(h=n.bottom)!=null?h:0,l={minX:t-s/2,maxX:t+s/2,minZ:i-r/2,maxZ:i+r/2,bottom:o,top:a,topAt:n.topAt||null,sight:(u=n.sight)!=null?u:a-o>1.4,nav:(d=n.nav)!=null?d:o<1.2};return this.boxes.push(l),this.grid=null,l}addRoof(t,i,s,r,a,n,o="x"){let l=(o==="x"?r:s)/2,h=o==="x"?(u,d)=>a+(n-a)*Math.max(0,1-Math.abs(d-i)/l):(u,d)=>a+(n-a)*Math.max(0,1-Math.abs(u-t)/l);return this.addBox(t,i,s,r,n,{bottom:a-.25,topAt:h,sight:!0,nav:!1})}addCircle(t,i,s,r,a={}){var o,l,h;let n={x:t,z:i,r:s,bottom:(o=a.bottom)!=null?o:0,top:r,sight:(l=a.sight)!=null?l:r>1.4,nav:(h=a.nav)!=null?h:!0};return this.circles.push(n),this.grid=null,n}addBush(t,i,s,r="bush"){this.bushes.push({x:t,z:i,r:s,kind:r})}addLadder(t,i,s,r,a,n){this.ladders.push({x:t,z:i,nx:s,nz:r,w:a,top:n})}near(t,i){this.grid||K(this,qn,Vd).call(this);let{n:s,cells:r,idx:a}=this.grid;return r[a(i)*s+a(t)]}topOf(t,i,s){return t.topAt?t.topAt(i,s):t.top}inBush(t,i,s=0){return s>1.2?!1:this.bushes.some(r=>(t-r.x)**2+(i-r.z)**2<(r.r*.9)**2)}groundAt(t,i,s,r){let a=0,n=s*.7,o=this.near(t,i);for(let l of o.boxes){if(!(t+n>l.minX&&t-n<l.maxX&&i+n>l.minZ&&i-n<l.maxZ))continue;let h=Math.max(l.minX,Math.min(t,l.maxX)),u=Math.max(l.minZ,Math.min(i,l.maxZ)),d=this.topOf(l,h,u);d>r||d<=a||(a=d)}for(let l of o.circles)l.top>r||l.top<=a||(t-l.x)**2+(i-l.z)**2<(l.r+n)**2&&(a=l.top);return a}ceilingAt(t,i,s,r){let a=1/0,n=s*.7,o=this.near(t,i);for(let l of o.boxes)l.bottom<=r+.05||l.bottom>=a||t+n>l.minX&&t-n<l.maxX&&i+n>l.minZ&&i-n<l.maxZ&&(a=l.bottom);for(let l of o.circles)l.bottom<=r+.05||l.bottom>=a||(t-l.x)**2+(i-l.z)**2<(l.r+n)**2&&(a=l.bottom);return a}resolve(t,i,s,r=1/0){let a=!1,n=this.near(t.x,t.z);for(let l=0;l<3;l++){let h=!1;for(let u of n.boxes){if(u.bottom>=r)continue;let d=Math.max(u.minX,Math.min(t.x,u.maxX)),c=Math.max(u.minZ,Math.min(t.z,u.maxZ)),p=t.x-d,v=t.z-c,S=p*p+v*v;if(!(S>=i*i)&&!(this.topOf(u,d,c)<=s)){if(S>1e-8){let m=Math.sqrt(S);t.x+=p/m*(i-m),t.z+=v/m*(i-m)}else{let m=[[t.x-u.minX,-1,0],[u.maxX-t.x,1,0],[t.z-u.minZ,0,-1],[u.maxZ-t.z,0,1]];m.sort((_,M)=>_[0]-M[0]);let[f,y,b]=m[0];t.x+=y*(f+i),t.z+=b*(f+i)}a=h=!0}}for(let u of n.circles){if(u.top<=s||u.bottom>=r)continue;let d=t.x-u.x,c=t.z-u.z,p=i+u.r,v=d*d+c*c;if(v>=p*p)continue;let S=Math.sqrt(v)||1e-4;t.x=u.x+d/S*p,t.z=u.z+c/S*p,a=h=!0}if(!h)break}let o=this.half-i-.3;return t.x=Math.max(-o,Math.min(o,t.x)),t.z=Math.max(-o,Math.min(o,t.z)),a}ledgeAt(t,i,s,r,a){let n=this.near(t,i),o=-1/0;for(let l of n.boxes){if(t<=l.minX||t>=l.maxX||i<=l.minZ||i>=l.maxZ)continue;let h=this.topOf(l,t,i);h>s+.3&&h<=s+r&&l.bottom<s+a&&h>o&&(o=h)}for(let l of n.circles)(t-l.x)**2+(i-l.z)**2>=l.r*l.r||l.top>s+.3&&l.top<=s+r&&l.bottom<s+a&&l.top>o&&(o=l.top);if(o===-1/0)return null;for(let l of n.boxes)if(!(t<=l.minX||t>=l.maxX||i<=l.minZ||i>=l.maxZ)&&this.topOf(l,t,i)>o+.05&&l.bottom<o+a*.8)return null;for(let l of n.circles)if(!((t-l.x)**2+(i-l.z)**2>=l.r*l.r)&&l.top>o+.05&&l.bottom<o+a*.8)return null;return o}ladderAt(t,i,s,r){for(let a of this.ladders){let n=t-a.x,o=i-a.z,l=n*a.nx+o*a.nz,h=Math.abs(n*-a.nz+o*a.nx);if(l>-.2&&l<s+.45&&h<a.w/2&&r<a.top-.1)return a}return null}lineOfSight(t,i,s,r,a=!1,n=1.5,o=1.5){let l=s-t,h=r-i,u=Math.hypot(l,h),d=Math.ceil(u/.4);for(let c=1;c<d;c++){let p=c/d,v=t+l*p,S=i+h*p,m=n+(o-n)*p,f=this.near(v,S);for(let y of f.boxes)if(!(!y.sight||v<=y.minX||v>=y.maxX||S<=y.minZ||S>=y.maxZ)&&m>y.bottom&&m<this.topOf(y,v,S))return!1;for(let y of f.circles)if(y.sight&&m>y.bottom&&m<y.top&&(v-y.x)**2+(S-y.z)**2<y.r*y.r)return!1;if(!a&&m<1.6){for(let y of this.bushes)if((v-y.x)**2+(S-y.z)**2<(y.r*.8)**2)return!1}}return!0}};qn=new WeakSet,Vd=function(){let t=Math.ceil((this.half*2+8)/4),i=Array.from({length:t*t},()=>({boxes:[],circles:[]})),s=r=>Math.max(0,Math.min(t-1,Math.floor((r+this.half+4)/4)));for(let r of this.boxes)for(let a=s(r.minZ-1.5);a<=s(r.maxZ+1.5);a++)for(let n=s(r.minX-1.5);n<=s(r.maxX+1.5);n++)i[a*t+n].boxes.push(r);for(let r of this.circles)for(let a=s(r.z-r.r-1.5);a<=s(r.z+r.r+1.5);a++)for(let n=s(r.x-r.r-1.5);n<=s(r.x+r.r+1.5);n++)i[a*t+n].circles.push(r);this.grid={n:t,cells:i,idx:s}};function Wd(e,t=()=>!1){let i=new Map,s=[];e.updateMatrixWorld(!0),e.traverse(a=>{if(!a.isMesh||a.userData.keep||t(a)||!(a.material instanceof Lt))return;let n=a.material.uuid+(a.castShadow?":s":":n");i.has(n)||i.set(n,{material:a.material,cast:a.castShadow,geos:[]});let o=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();for(let l of Object.keys(o.attributes))["position","normal","uv"].includes(l)||o.deleteAttribute(l);o.attributes.uv||o.setAttribute("uv",new qe(new Float32Array(o.attributes.position.count*2),2)),o.applyMatrix4(a.matrixWorld),i.get(n).geos.push(o),s.push(a)});for(let a of s)a.parent.remove(a);let r=0;for(let{material:a,cast:n,geos:o}of i.values()){let l=o.reduce((S,m)=>S+m.attributes.position.count,0),h=new Float32Array(l*3),u=new Float32Array(l*3),d=new Float32Array(l*2),c=0;for(let S of o)h.set(S.attributes.position.array,c*3),u.set(S.attributes.normal.array,c*3),d.set(S.attributes.uv.array,c*2),c+=S.attributes.position.count,S.dispose();let p=new pt;p.setAttribute("position",new Jt(h,3)),p.setAttribute("normal",new Jt(u,3)),p.setAttribute("uv",new Jt(d,2)),p.computeBoundingSphere();let v=new ut(p,a);v.castShadow=n,v.receiveShadow=!0,v.matrixAutoUpdate=!1,e.add(v),r++}return{merged:s.length,calls:r}}var Wt=44;function jd(e,{isMobile:t}){let i=new Xn(Wt),s=[],r=new Oi,a=(L,O,B,C,G,ue)=>{let ve=new ut(new Rs(C,G,ue),r);ve.position.set(L,O,B),ve.updateMatrixWorld(!0),s.push(ve)},n=Bi("rgba(255,190,110,0.9)","rgba(255,140,40,0)"),o=[];e.background=new Ze(856112),e.fog=new Bu(1382974,.022);let l=new $t(180,32,16),h=new pi({side:si,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ze(461346)},bottom:{value:new Ze(3814512)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying vec3 vP; void main(){ float h = smoothstep(-0.05, 0.55, vP.y); gl_FragColor = vec4(mix(bottom, top, h), 1.); }"});e.add(new ut(l,h));let u=new ut(new $t(7,32,16),new Oi({color:16052700,fog:!1}));u.position.set(-60,70,-120),e.add(u);let d=new Ki(new Di({map:Bi("rgba(220,225,255,0.55)","rgba(120,130,220,0)"),fog:!1,depthWrite:!1,blending:kt}));d.scale.set(60,60,1),d.position.copy(u.position),e.add(d);let c=new pt,p=[];for(let L=0;L<700;L++){let O=Math.random()*Math.PI*2,B=Math.random()*1.2+.15;p.push(Math.cos(O)*Math.cos(B)*170,Math.sin(B)*170,Math.sin(O)*Math.cos(B)*170)}c.setAttribute("position",new qe(p,3)),e.add(new Or(c,new Zs({color:14673151,size:1.1,fog:!1,sizeAttenuation:!1,transparent:!0,opacity:.8}))),e.add(new Fn(8029912,1906736,1.05));let v=new zn(12766463,1.35);v.position.set(-18,30,-14),v.castShadow=!0,v.shadow.mapSize.set(t?1024:2048,t?1024:2048);let S=v.shadow.camera;S.left=-26,S.right=26,S.top=26,S.bottom=-26,S.near=1,S.far=90,v.shadow.bias=-8e-4,v.shadow.normalBias=.03,e.add(v,v.target);let m=ri(256,256,(L,O,B)=>{L.fillStyle="#26402f",L.fillRect(0,0,O,B);for(let C=0;C<2600;C++){let G=50+Math.random()*40;L.fillStyle=`rgba(${G*.55|0},${G+20|0},${G*.7|0},${.25+Math.random()*.35})`,L.fillRect(Math.random()*O,Math.random()*B,2,3+Math.random()*4)}});m.wrapS=m.wrapT=Ui,m.repeat.set(18,18);let f=new ut(new Cs(Wt*4,Wt*4),new Lt({map:m,roughness:1}));f.rotation.x=-Math.PI/2,f.receiveShadow=!0,f.userData.keep=!0,e.add(f);let y=ri(256,256,(L,O,B)=>{L.fillStyle="#3b3a44",L.fillRect(0,0,O,B);for(let C=0;C<B;C+=32)for(let G=C/32%2?-24:0;G<O;G+=48){let ue=88+Math.random()*40;L.fillStyle=`rgb(${ue},${ue-4},${ue+8})`,L.beginPath(),L.roundRect(G+3,C+3,42,26,8),L.fill()}});y.wrapS=y.wrapT=Ui;let b=(L,O)=>{let B=y.clone();return B.needsUpdate=!0,B.repeat.set(L,O),new Lt({map:B,roughness:.95})},_=(L,O,B,C)=>{let G=new ut(new Cs(B,C),b(B/2.2,C/2.2));G.rotation.x=-Math.PI/2,G.position.set(L,.015,O),G.receiveShadow=!0,e.add(G)};_(0,0,3.4,58),_(0,0,56,3.2),_(0,-21,9,7);let M=ri(128,128,(L,O,B)=>{L.fillStyle="#ffd58a",L.fillRect(0,0,O,B);let C=L.createRadialGradient(O/2,B/2,10,O/2,B/2,80);C.addColorStop(0,"rgba(255,240,190,1)"),C.addColorStop(1,"rgba(255,160,60,0.4)"),L.fillStyle=C,L.fillRect(0,0,O,B),L.strokeStyle="#4a2e1c",L.lineWidth=5;for(let G=0;G<=4;G++)L.beginPath(),L.moveTo(G*O/4,0),L.lineTo(G*O/4,B),L.stroke(),L.beginPath(),L.moveTo(0,G*B/4),L.lineTo(O,G*B/4),L.stroke()}),w=new Lt({map:M,emissive:16753226,emissiveMap:M,emissiveIntensity:1.25,roughness:.8}),A=ae(7227955,{roughness:.85}),g=ae(13482908,{roughness:.95}),x=ae(3093328,{roughness:.6}),U=ae(1908531,{roughness:.6}),R=ae(4139549,{roughness:.8});function N(L,O,B,C,G=3.2,ue="z",ve={}){let re=new lt;re.position.set(L,0,O);let ye=.35+G;re.add(k(j.box(B+.3,.35,C+.3),ae(4933714),{y:.17})),i.addBox(L,O,B+.3,C+.3,.35,{sight:!1,nav:!1});let Te=.28,Le=2.5,Ge=2.95,F=ue==="z";if(ve.enter){let gt=(qt,fi,wi,ms,mi=.35,Hi=ye)=>{re.add(k(j.box(wi,Hi-mi,ms),g,{x:qt-L,y:(mi+Hi)/2,z:fi-O})),i.addBox(qt,fi,wi,ms,Hi,{bottom:mi>.35?mi:0,sight:!0,nav:mi<=.35}),a(qt,(mi+Hi)/2,fi,wi,Hi-mi,ms)},Xt=qt=>{let fi=F?B:C,wi=(fi-Le)/2;for(let ms of[-1,1]){let mi=ms*(Le/2+wi/2);F?gt(L+mi,O+qt*(C/2-Te/2),wi,Te):gt(L+qt*(B/2-Te/2),O+mi,Te,wi)}F?gt(L,O+qt*(C/2-Te/2),Le,Te,Ge):gt(L+qt*(B/2-Te/2),O,Te,Le,Ge)};if(Xt(1),Xt(-1),F)for(let qt of[-1,1])gt(L+qt*(B/2-Te/2),O,Te,C-2*Te);else for(let qt of[-1,1])gt(L,O+qt*(C/2-Te/2),B-2*Te,Te);re.add(k(j.box(B-.1,.04,C-.1),ae(12100712,{roughness:1}),{y:.37,shadow:!1})),re.add(k(j.box(B-.1,.08,C-.1),R,{y:ye-.05,shadow:!1}));let di=(F?1:.5)*(B/2-1),oi=(F?.5:1)*(C/2-1),ki=k(j.box(1.6,1.5,.08),ae(15852740,{roughness:.9,emissive:3810320,emissiveIntensity:.3}),{x:di,y:1.1,z:oi-.5,ry:.5});re.add(ki),re.add(k(j.box(.9,.35,.9),ae(8076106),{x:di,y:.55,z:oi})),i.addBush(L+di,O+oi,1,"screen"),re.add(k(j.sphere(.2,12,8),X,{x:-di*.6,y:ye-.6,z:-oi*.6,sy:1.3,shadow:!1})),o.push(new I(L-di*.6,ye-.6,O-oi*.6))}else{let gt=k(j.box(B,G,C),g,{y:.35+G/2});gt.receiveShadow=!0,re.add(gt),i.addBox(L,O,B,C,ye,{sight:!0}),a(L,.35+G/2,O,B,G,C)}for(let gt of[-1,1])for(let Xt of[-1,1])re.add(k(j.box(.22,G,.22),R,{x:gt*B/2,y:.35+G/2,z:Xt*C/2}));re.add(k(j.box(B+.05,.16,C+.05),R,{y:.35+G*.62}));let ie=.35+G*.38;for(let gt of[-1,1])for(let Xt=-1;Xt<=1;Xt+=2){let di=ve.enter&&F,oi=ve.enter&&!F;B>3.5&&!di&&re.add(k(j.box(B*.26,G*.34,.06),w,{x:Xt*B*.24,y:ie,z:gt*(C/2+.02),shadow:!1})),C>3.5&&!oi&&re.add(k(j.box(.06,G*.34,C*.26),w,{x:gt*(B/2+.02),y:ie,z:Xt*C*.24,shadow:!1}))}if(ve.enter)for(let gt of[-1,1])re.add(k(F?j.box(Le+.3,.2,.34):j.box(.34,.2,Le+.3),R,{x:F?0:gt*B/2,y:Ge+.1,z:F?gt*C/2:0}));else{let gt=F?{x:0,z:C/2+.03,sx:1.1,sz:.06}:{x:B/2+.03,z:0,sx:.06,sz:1.1};re.add(k(j.box(gt.sx,1.9,gt.sz),w,{x:gt.x,y:1.3,z:gt.z,shadow:!1}))}let oe=.7,Ee=Math.min(B,C)*.42,pe=F?B:C,ne=F?C:B,xe=new Fr;xe.moveTo(-ne/2-oe,0),xe.lineTo(0,Ee),xe.lineTo(ne/2+oe,0),xe.lineTo(ne/2+oe-.25,-.12),xe.lineTo(0,Ee-.28),xe.lineTo(-ne/2-oe+.25,-.12),xe.closePath();let Oe=new ut(new Aa(xe,{depth:pe+oe*2,bevelEnabled:!1}),x);Oe.castShadow=!0,Oe.position.set(0,ye,0),F?(Oe.rotation.y=Math.PI/2,Oe.position.x=-(pe/2+oe)):Oe.position.z=-(pe/2+oe),re.add(Oe),re.add(k(j.box(F?pe+oe*2:.3,.25,F?.3:pe+oe*2),U,{y:ye+Ee-.05})),e.add(re);let Mt=ne/2+oe,nt=F?(gt,Xt)=>ye+Ee*Math.max(0,1-Math.abs(Xt-O)/Mt):(gt,Xt)=>ye+Ee*Math.max(0,1-Math.abs(gt-L)/Mt);i.addBox(L,O,B+.3,C+.3,ye+Ee,{bottom:ye-.25,topAt:nt,sight:!0,nav:!1}),a(L,ye+Ee/2,O,B+oe,Ee,C+oe);let xi=L+(F?B/2-.6:B/2+.5),Ei=O+(F?C/2+.5:C/2-.6);if(ve.enter?Z(L+(F?Le/2+.5:B/2+.5),O+(F?C/2+.5:Le/2+.5),2.6,16738874):Z(xi,Ei,2.6,16738874),ve.ladder){let gt=ve.ladder,Xt,di,oi,ki;if(gt==="back")oi=F?0:-1,ki=F?-1:0;else{let qt=gt==="left"?-1:1;oi=F?qt:0,ki=F?0:qt}Xt=L+oi*(B/2+.02)+(ki!==0?B*.25:0),di=O+ki*(C/2+.02)+(oi!==0?C*.25:0),W(Xt,di,oi,ki,ye+.2)}}function W(L,O,B,C,G){let ue=ae(6965804,{roughness:.9}),ve=-C,re=B;for(let ye of[-1,1])e.add(k(j.box(.08,G,.08),ue,{x:L+B*.12+ve*ye*.4,y:G/2,z:O+C*.12+re*ye*.4}));for(let ye=.35;ye<G;ye+=.4)e.add(k(B?j.box(.06,.06,.8):j.box(.8,.06,.06),ue,{x:L+B*.12,y:ye,z:O+C*.12}));i.addLadder(L,O,B,C,1.1,G)}let D=ae(14701114,{emissive:16734762,emissiveIntensity:1.8,roughness:.6}),X=ae(16761450,{emissive:16752704,emissiveIntensity:2.2,roughness:.6});function Q(L,O,B,C=2.2,G){let ue=new Di({map:n,transparent:!0,depthWrite:!1,blending:kt,color:G!=null?G:16777215,opacity:.8}),ve=new Ki(ue);return ve.scale.set(C,C,1),ve.position.set(L,O,B),e.add(ve),ve}function Z(L,O,B,C){let G=k(j.sphere(.24,14,10),C===16738874?D:X,{x:L,y:B,z:O,sy:1.35,shadow:!1});e.add(G),e.add(k(j.cyl(.18,.18,.05,10),R,{x:L,y:B+.33,z:O,shadow:!1})),e.add(k(j.cyl(.18,.18,.05,10),R,{x:L,y:B-.33,z:O,shadow:!1})),Q(L,B,O,2.4),o.push(new I(L,B,O))}function _e(L,O){e.add(k(j.cyl(.08,.1,3,8),R,{x:L,y:1.5,z:O})),e.add(k(j.box(.8,.08,.08),R,{x:L+.35,y:2.95,z:O})),Z(L+.7,O,2.45,16761450),i.addCircle(L,O,.14,3.2,{sight:!1})}function ee(L,O){let B=ae(7697534,{roughness:1});e.add(k(j.cyl(.35,.45,.25,6),B,{x:L,y:.12,z:O})),e.add(k(j.cyl(.14,.18,.7,8),B,{x:L,y:.6,z:O})),e.add(k(j.box(.55,.42,.55),B,{x:L,y:1.15,z:O})),e.add(k(j.box(.3,.24,.6),X,{x:L,y:1.16,z:O,shadow:!1})),e.add(k(j.cone(.55,.36,6),B,{x:L,y:1.54,z:O})),Q(L,1.16,O,1.8),i.addCircle(L,O,.42,1.75,{sight:!1}),o.push(new I(L,1.2,O))}let se=ae(3877408,{roughness:1}),de=[ae(2047276,{roughness:1,flat:!0}),ae(2771509,{roughness:1,flat:!0}),ae(6962012,{roughness:1,flat:!0})],Ve=[Nt(1,1,.18,1),Nt(1,1,.2,2),Nt(1,1,.16,3)];function De(L,O,B=1,C=!1){e.add(k(j.cyl(.18*B,.28*B,2.6*B,7),se,{x:L,y:1.3*B,z:O}));let G=C?ae(14191021,{roughness:1,flat:!0,emissive:3805232,emissiveIntensity:.4}):de[(L*7+O*3&255)%2];for(let ue=0;ue<3;ue++){let ve=ue*2.1+L;e.add(k(Ve[ue],G,{x:L+Math.cos(ve)*.6*B,y:(2.8+ue*.5)*B,z:O+Math.sin(ve)*.6*B,sx:1.4*B,sy:1.1*B,sz:1.4*B}))}i.addCircle(L,O,.35*B,6,{sight:B>1.1})}let ft=ae(2377775,{roughness:1,flat:!0}),$e=Nt(1,1,.22,7),te=[];function ce(L,O,B=1.4){let C=new lt;C.position.set(L,0,O);for(let G=0;G<4;G++){let ue=G*1.7;C.add(k($e,ft,{x:Math.cos(ue)*B*.45,y:.8,z:Math.sin(ue)*B*.45,sx:B*.75,sy:.95,sz:B*.75}))}e.add(C),te.push(C),i.addBush(L,O,B)}let ge=ae(9068088,{roughness:.85}),ze=ae(5913378);function Ie(L,O,B,C){let G=B;e.add(k(j.box(B,G,B),ge,{x:L,y:C-G/2,z:O})),e.add(k(j.box(B+.04,.08,B+.04),ze,{x:L,y:C-.04,z:O})),i.addBox(L,O,B,B,C,{sight:!1})}function be(L,O,B,C,G){e.add(k(j.box(B,.2,C),ae(8015923),{x:L,y:G-.1,z:O}));for(let ue of[-1,1])for(let ve of[-1,1])e.add(k(j.box(.2,G,.2),R,{x:L+ue*(B/2-.15),y:G/2,z:O+ve*(C/2-.15)}));i.addBox(L,O,B,C,G,{sight:!1})}function tt(L,O){let B=ae(12728874,{roughness:.55});for(let C of[-1,1])e.add(k(j.cyl(.2,.24,4.6,12),B,{x:L+C*2.1,y:2.3,z:O})),i.addCircle(L+C*2.1,O,.26,5);e.add(k(j.box(5.8,.32,.4),ae(1841698),{x:L,y:4.7,z:O})),e.add(k(j.box(5.2,.25,.3),B,{x:L,y:4.35,z:O})),e.add(k(j.box(4.8,.22,.26),B,{x:L,y:3.7,z:O}))}N(-10,12,7,5,3.2,"x",{enter:!0,ladder:"left"}),N(11,13,6,6,3.4,"x",{enter:!0}),N(-12,-7,6,7,3,"x",{ladder:"back"}),N(11,-8,7,5,3.2,"z",{enter:!0,ladder:"right"}),N(-21,21,5,5,2.8,"z"),N(22,2,5,6,3,"x",{enter:!0}),N(-22,-18,6,5,3,"z"),N(20,-21,5,5,2.8,"z"),N(0,-26,7,4,3.6,"z"),tt(0,-17),Ie(4.2,5.2,.9,.6),Ie(5.3,6.4,1,1.1),Ie(5.4,7.7,1,1.6),be(7.8,7.4,3.2,3,2),Ie(-5.5,-3.8,1.2,1),Ie(-6.6,-4.6,1,1.7),Ie(16,8,1.2,1.2),Ie(-16,3,1.1,.9),Ie(-16.9,3.9,.9,1.5),Ie(13.2,16.9,1.1,.9),Ie(12.2,17.2,1,1.7),Ie(25.4,5.8,1.1,1),Ie(24.3,5.8,1,1.8),Ie(-20.6,24.3,1,1.1);let he=ae(2050602,{roughness:1,flat:!0}),le=ae(2976314,{roughness:1,flat:!0});function me(L,O,B,C,G=2.5){e.add(k(j.box(B,G,C),he,{x:L,y:G/2,z:O})),e.add(k(j.box(B+.12,.25,C+.12),le,{x:L,y:G-.05,z:O})),i.addBox(L,O,B,C,G,{sight:!0}),a(L,G/2,O,B,G,C)}(function(O,B,C,G){let ue=20260925,ve=()=>(ue=ue*1664525+1013904223>>>0)/4294967296,re=new Uint8Array(C*C),ye=Array.from({length:C*C},()=>!0),Te=Array.from({length:C*C},()=>!0),Le=[0];for(re[0]=1;Le.length;){let pe=Le[Le.length-1],ne=pe%C,xe=pe/C|0,Oe=[];if(ne>0&&!re[pe-1]&&Oe.push([pe-1,"L"]),ne<C-1&&!re[pe+1]&&Oe.push([pe+1,"R"]),xe>0&&!re[pe-C]&&Oe.push([pe-C,"U"]),xe<C-1&&!re[pe+C]&&Oe.push([pe+C,"D"]),!Oe.length){Le.pop();continue}let[Mt,nt]=Oe[ve()*Oe.length|0];nt==="L"&&(ye[Mt]=!1),nt==="R"&&(ye[pe]=!1),nt==="U"&&(Te[Mt]=!1),nt==="D"&&(Te[pe]=!1),re[Mt]=1,Le.push(Mt)}for(let pe=0;pe<5;pe++){let ne=ve()*C*(C-1)|0;ne%C<C-1?ye[ne]=!1:Te[ne]=!1}let Ge=.55,F=2.5,ie=C*G;for(let pe=0;pe<C;pe++)pe!==C-1&&me(O+pe*G+G/2,B,G+Ge,Ge,F),me(O+pe*G+G/2,B+ie,G+Ge,Ge,F);for(let pe=0;pe<C;pe++)me(O,B+pe*G+G/2,Ge,G+Ge,F),pe!==0&&me(O+ie,B+pe*G+G/2,Ge,G+Ge,F);for(let pe=0;pe<C;pe++)for(let ne=0;ne<C;ne++){let xe=pe*C+ne;ne<C-1&&ye[xe]&&me(O+(ne+1)*G,B+pe*G+G/2,Ge,G+Ge,F),pe<C-1&&Te[xe]&&me(O+ne*G+G/2,B+(pe+1)*G,G+Ge,Ge,F)}let oe=O+ie/2,Ee=B+ie/2;ee(oe,Ee),ce(O+G/2,B+ie-G/2,1.1),ce(O+ie-G/2,B+ie-G/2,1.1),ce(O+G/2,B+G*1.5,1.1)})(-43,26.5,5,3.3);let Re=ae(7248458,{roughness:.7}),Pe=ae(4094522,{roughness:1,flat:!0});for(let L=0;L<22;L++){let O=-41+L%5*3.1+L*7%3*.6,B=-41+Math.floor(L/5)*3.2+L*5%3*.5;for(let C=0;C<5;C++){let G=C*1.3+L,ue=.3+C%2*.2,ve=O+Math.cos(G)*ue,re=B+Math.sin(G)*ue,ye=6+(L+C)%3;e.add(k(j.cyl(.07,.09,ye,6),Re,{x:ve,y:ye/2,z:re})),e.add(k(Ve[C%3],Pe,{x:ve,y:ye,z:re,sx:.9,sy:.5,sz:.9}))}i.addCircle(O,B,.62,7,{sight:!0})}ce(-37.5,-35.5,1.3),ce(-32,-39,1.2),ce(-40,-30.5,1.3);let Ue=ae(5914154,{roughness:.9}),He=ae(4015200,{roughness:.5});function Ye(L,O,B,C,G,ue){if(ue){let ye=(Te,Le,Ge,F,ie=0)=>{e.add(k(j.box(Ge,G-ie,F),Ue,{x:Te,y:(ie+G)/2,z:Le})),i.addBox(Te,Le,Ge,F,G,{bottom:ie,sight:!0}),a(Te,(ie+G)/2,Le,Ge,G-ie,F)};for(let Te of[-1,1]){let Le=(C-2.6)/2;for(let Ge of[-1,1])ye(L+Te*(B/2-.3/2),O+Ge*(2.6/2+Le/2),.3,Le);ye(L+Te*(B/2-.3/2),O,.3,2.6,2.95),ye(L,O+Te*(C/2-.3/2),B-2*.3,.3)}e.add(k(j.box(B,.3,C),He,{x:L,y:G-.15,z:O})),i.addBox(L,O,B,C,G,{bottom:G-.3,sight:!0,nav:!1}),a(L,G-.15,O,B,.3,C),e.add(k(j.box(1.4,.9,1),ae(13482382,{roughness:1}),{x:L+B/2-1.3,y:.45,z:O-C/2+1.1})),i.addBush(L+B/2-1.3,O-C/2+1.4,1.1,"sacks"),o.push(new I(L,G-.7,O)),e.add(k(j.sphere(.22,12,8),X,{x:L,y:G-.7,z:O,sy:1.3,shadow:!1}))}else{e.add(k(j.box(B,G,C),Ue,{x:L,y:G/2,z:O})),e.add(k(j.box(B+.2,.2,C+.2),He,{x:L,y:G+.1,z:O})),i.addBox(L,O,B,C,G+.2,{sight:!0}),a(L,G/2,O,B,G,C);for(let ve of[-1,1])e.add(k(j.box(B*.3,.8,.06),w,{x:L,y:G*.55,z:O+ve*(C/2+.02),shadow:!1}))}}Ye(38,-14,7,7,4,!1),Ye(38,0,7,8,4,!0),Ye(38,14,7,7,4,!1);for(let L of[-7,7])e.add(k(j.box(1.6,.15,7.2),Ue,{x:38,y:4.05,z:L})),i.addBox(38,L,1.6,7.2,4.12,{bottom:3.95,sight:!1,nav:!1});W(34.5-.02,-16,-1,0,4.2),W(34.5-.02,16,-1,0,4.2),Ie(32.4,3,1,1),Ie(33.5,3,1.1,2);let Ke=ae(15237418,{roughness:.6,emissive:4200448,emissiveIntensity:.3}),z=ae(3889700);for(let L=0;L<5;L++)for(let O=0;O<4;O++){let B=30+L*2.6+O%2*1.2,C=30+O*3;e.add(k(j.sphere(.45,12,8),Ke,{x:B,y:.35,z:C,sy:.75})),e.add(k(j.cyl(.05,.06,.25,5),z,{x:B,y:.75,z:C})),i.addCircle(B,C,.45,.4,{sight:!1,nav:!1})}let mt=ae(13215306,{roughness:1});e.add(k(j.cyl(1.6,1.9,2.2,10),mt,{x:26,y:1.1,z:38})),e.add(k(j.cone(1.7,1.2,10),mt,{x:26,y:2.8,z:38})),i.addCircle(26,38,1.8,3.4,{sight:!0}),Ie(27.9,36.6,1.1,1.2),ce(34,40,1.4),ce(41,33,1.3),N(36,-36,9,7,3.4,"z",{enter:!0,ladder:"left"});for(let[L,O,B,C]of[[-36,-10,1.2,!1],[-38,6,1.1,!0],[-34,18,1.2,!1],[-14,-38,1.1,!1],[-4,-40,1.2,!0],[10,-38,1.1,!1],[22,-40,1.2,!1],[36,-24,1.1,!0],[30,22,1.2,!1],[14,38,1.1,!0],[0,40,1.2,!1],[-14,40,1.1,!1]])De(L,O,B,C);for(let[L,O,B]of[[-38,-18,1.4],[-40,12,1.4],[-20,-38,1.5],[6,-40,1.4],[24,-34,1.4],[30,10,1.3],[20,38,1.4],[-6,38,1.5],[-22,34,1.4],[40,-26,1.3]])ce(L,O,B);for(let[L,O]of[[2.6,17],[-2.6,8],[2.6,-6],[-2.6,-12],[8,2.4],[-9,-2.4],[18,-2.4],[-19,2.4]])ee(L,O);for(let[L,O]of[[-2.8,22],[-2.8,-2.8],[14,2.8],[-14,-2.8]])_e(L,O);for(let L=-Wt+3;L<=Wt-3;L+=4.3)for(let[O,B]of[[L,-Wt+2],[L,Wt-2],[-Wt+2,L],[Wt-2,L]])Math.abs(L)<2.5||De(O+(Math.random()-.5)*1.2,B+(Math.random()-.5)*1.2,1.1+Math.random()*.4);for(let[L,O,B,C]of[[-6,17,1,!0],[6,20,1.2,!1],[16,16,1.1,!0],[-17,11,1.2,!1],[-5,-18,1,!0],[7,-15,1.1,!1],[24,-10,1.2,!1],[-25,-6,1.1,!0],[15,-27,1,!1],[-15,-26,1.1,!0],[25,24,1.2,!1]])De(L,O,B,C);for(let[L,O,B]of[[-4.5,-12,1.5],[15,-15,1.6],[-17.5,6,1.5],[18,18,1.5],[-6,21,1.4],[25,-24,1.4],[6.5,-3.8,1.3],[-25,13,1.5],[9,24,1.4],[-10,-24,1.5],[26,12,1.4]])ce(L,O,B);let et=ae(4862754,{roughness:1});for(let L of[-1,1]){for(let O=-Wt+1;O<Wt;O+=2)e.add(k(j.box(.14,1.2,.14),et,{x:O,y:.6,z:L*(Wt-.6)})),e.add(k(j.box(.14,1.2,.14),et,{x:L*(Wt-.6),y:.6,z:O}));e.add(k(j.box(Wt*2,.1,.08),et,{y:.9,z:L*(Wt-.6)})),e.add(k(j.box(.08,.1,Wt*2),et,{x:L*(Wt-.6),y:.9}))}let st=ri(64,192,(L,O,B)=>{L.fillStyle="#5a3a26",L.fillRect(0,0,O,B),L.fillStyle="#e9d6b0",L.fillRect(5,5,O-10,B-10),L.fillStyle="#2a170c",L.font="bold 42px serif",L.textAlign="center",["\u306E","\u308A","\u3070"].forEach((C,G)=>L.fillText(C,O/2,55+G*55))});e.add(k(j.cyl(.07,.07,2.8,6),R,{x:-2.6,y:1.4,z:20.5})),e.add(k(j.box(.5,1.5,.08),ae(16777215,{map:st,emissive:2101256,emissiveIntensity:.5}),{x:-2.6,y:2.3,z:20.55})),i.addCircle(-2.6,20.5,.12,3,{sight:!1});let P=[],T=t?2:4;for(let L=0;L<T;L++){let O=new zr(16752714,18,11,1.8);e.add(O),P.push(O)}function H(L){let O=o.slice().sort((B,C)=>B.distanceToSquared(L)-C.distanceToSquared(L));P.forEach((B,C)=>{O[C]&&B.position.copy(O[C])}),v.position.set(L.x-18,30,L.z-14),v.target.position.set(L.x,0,L.z)}return{stats:Wd(e),world:i,cameraBlockers:s,bushMeshes:te,updateLights:H,playerSpawn:new I(0,0,22),ghostSpawn:new I(0,0,-21)}}function Xd(e,t,i){let s=new pt,r=new Float32Array(t*3),a=[];for(let l=0;l<t;l++){let h={x:(Math.random()*2-1)*i,z:(Math.random()*2-1)*i,y:.6+Math.random()*3,p:Math.random()*10,r:.5+Math.random()*1.5};a.push(h)}s.setAttribute("position",new Jt(r,3));let n=Bi("rgba(255,245,190,1)","rgba(255,200,80,0)",64),o=new Or(s,new Zs({size:.35,map:n,transparent:!0,depthWrite:!1,blending:kt,color:16773296}));return o.frustumCulled=!1,e.add(o),l=>{for(let h=0;h<t;h++){let u=a[h];r[h*3]=u.x+Math.sin(l*.3+u.p)*u.r,r[h*3+1]=u.y+Math.sin(l*.8+u.p*2)*.4,r[h*3+2]=u.z+Math.cos(l*.25+u.p)*u.r}s.attributes.position.needsUpdate=!0}}function qd(e,t,i=14){let s=ae(723727,{roughness:1,flat:!0}),r=ae(16777215,{emissive:16777215,emissiveIntensity:.4}),a=ae(0),n=Nt(.2,1,.35,4),o=[];for(let h=0;h<i;h++){let u=new lt;u.add(k(n,s));for(let p of[-1,1])u.add(k(j.sphere(.06,8,6),r,{x:p*.07,y:.04,z:.15,shadow:!1})),u.add(k(j.sphere(.03,6,4),a,{x:p*.07,y:.04,z:.2,shadow:!1}));let d,c;do d=(Math.random()*2-1)*26,c=(Math.random()*2-1)*26;while(t.groundAt(d,c,.3,99)>0||Math.hypot(d,c-22)<5);u.position.set(d,.2,c),e.add(u),o.push({g:u,home:new fe(d,c),vx:0,vz:0,hop:Math.random()*6})}let l={x:0,y:0,z:0};return(h,u,d)=>{for(let c of o){let p=c.g.position.x-d.x,v=c.g.position.z-d.z,S=Math.hypot(p,v);S<3.2?(c.vx+=p/S*30*h,c.vz+=v/S*30*h):(c.vx+=(c.home.x-c.g.position.x)*.4*h,c.vz+=(c.home.y-c.g.position.z)*.4*h),c.vx*=1-3*h,c.vz*=1-3*h,l.x=c.g.position.x+c.vx*h,l.z=c.g.position.z+c.vz*h,t.resolve(l,.2,0),c.g.position.x=l.x,c.g.position.z=l.z;let m=Math.hypot(c.vx,c.vz);c.hop+=h*(4+m*2),c.g.position.y=.2+Math.abs(Math.sin(c.hop))*(.08+Math.min(.35,m*.08)),m>.3?c.g.rotation.y=Math.atan2(c.vx,c.vz):c.g.lookAt(d.x,.2,d.z)}}}var Ps=[{id:"crate",name:"\u044F\u0449\u0438\u043A",icon:"\u{1F4E6}"},{id:"lantern",name:"\u0444\u043E\u043D\u0430\u0440\u044C",icon:"\u{1F3EE}"},{id:"pumpkin",name:"\u0442\u044B\u043A\u0432\u0430",icon:"\u{1F383}"},{id:"barrel",name:"\u0431\u043E\u0447\u043A\u0430",icon:"\u{1F6E2}\uFE0F"},{id:"bush",name:"\u043A\u0443\u0441\u0442",icon:"\u{1F33F}"}],Yd=null;function $s(e){let t=new lt;if(e==="crate")t.add(k(j.box(1,1,1),ae(9068088,{roughness:.85}),{y:.5})),t.add(k(j.box(1.04,.08,1.04),ae(5913378),{y:.96}));else if(e==="lantern"){let i=ae(7697534,{roughness:1});t.add(k(j.cyl(.35,.45,.25,6),i,{y:.12})),t.add(k(j.cyl(.14,.18,.7,8),i,{y:.6})),t.add(k(j.box(.55,.42,.55),i,{y:1.15})),t.add(k(j.box(.3,.24,.6),ae(16761450,{emissive:16752704,emissiveIntensity:2.2,roughness:.6}),{y:1.16,shadow:!1})),t.add(k(j.cone(.55,.36,6),i,{y:1.54}))}else if(e==="pumpkin")t.add(k(j.sphere(.55,14,10),ae(15237418,{roughness:.6,emissive:4200448,emissiveIntensity:.3}),{y:.42,sy:.75})),t.add(k(j.cyl(.05,.07,.3,5),ae(3889700),{y:.9}));else if(e==="barrel"){t.add(k(j.cyl(.42,.42,1.1,14),ae(8015660,{roughness:.8}),{y:.55}));for(let i of[.2,.9])t.add(k(j.cyl(.44,.44,.07,14),ae(3816004,{metalness:.4}),{y:i}))}else{Yd||(Yd=Nt(1,1,.22,7));for(let i=0;i<3;i++)t.add(k(Yd,ae(2377775,{roughness:1,flat:!0}),{x:Math.cos(i*2.1)*.35,y:.6,z:Math.sin(i*2.1)*.35,sx:.75,sy:.7,sz:.75}))}return t}function wh(e,t,i,s,r=15260927){let a=new lt,n=new Oi({color:r,transparent:!0,opacity:.8,depthWrite:!1}),o=[];for(let h=0;h<9;h++){let u=new ut(new $t(.35,8,6),n),d=h/9*Math.PI*2;u.position.set(Math.cos(d)*.3,.6+h%3*.3,Math.sin(d)*.3),u.userData.v=new I(Math.cos(d)*1.6,.8+Math.random(),Math.sin(d)*1.6),a.add(u),o.push(u)}a.position.set(t,i,s),e.add(a);let l=0;return{update(h){l+=h;for(let u of o)u.position.addScaledVector(u.userData.v,h),u.scale.setScalar(1+l*1.5);if(n.opacity=Math.max(0,.8-l*1.6),l>.5)return e.remove(a),n.dispose(),!1}}}var Zd="masha-game-pumpkins",Vr={get(){try{return+(localStorage.getItem(Zd)||0)}catch{return 0}},add(e){let t=this.get()+e;try{localStorage.setItem(Zd,String(t))}catch{}return t}},Yn=class{constructor(t,i){this.scene=t,this.nav=i,this.list=[],this.geo=new $t(.28,12,8),this.mat=new Lt({color:16753210,emissive:16742928,emissiveIntensity:.9,roughness:.4}),this.stem=new Br(.03,.04,.14,5),this.stemMat=new Lt({color:3889700})}clear(){for(let t of this.list)this.scene.remove(t.g);this.list=[]}spawn(t){this.clear();for(let i=0;i<t;i++){let s=0,r=0;for(let o=0;o<30;o++){s=(Math.random()*2-1)*(this.nav.half-3),r=(Math.random()*2-1)*(this.nav.half-3);let[l,h]=this.nav.toCell(s,r);if(this.nav.free(l,h)&&!this.list.some(u=>Math.hypot(u.x-s,u.z-r)<6))break}let a=new lt;a.add(new ut(this.geo,this.mat));let n=new ut(this.stem,this.stemMat);n.position.y=.26,a.add(n),a.children[0].scale.y=.8,a.position.set(s,.8,r),this.scene.add(a),this.list.push({g:a,x:s,z:r,ph:Math.random()*6})}}update(t,i,s){let r=[];for(let a=this.list.length-1;a>=0;a--){let n=this.list[a];n.g.rotation.y+=t*2,n.g.position.y=.8+Math.sin(i*3+n.ph)*.12;for(let o of s){let l=o.ctrl.pos;if(Math.hypot(l.x-n.x,l.z-n.z)<1&&l.y<1.8){this.scene.remove(n.g),this.list.splice(a,1),r.push(o);break}}}return r}};var Is,Zn,Jd,Jn=class{constructor(t,i){Et(this,Is);this.keys=new Set,this.move={x:0,y:0},this.look={x:0,y:0},this.jumpQueued=!1,this.dashQueued=!1,this.jumpHeldBtn=!1,this.lookOnly=!1,this.touchRun=!1,this.touchCrouch=!1,this.enabled=!1,this.canvas=t,addEventListener("keydown",r=>{r.code==="Space"&&(r.repeat||(this.jumpQueued=!0),r.preventDefault()),r.code==="KeyE"&&!r.repeat&&(this.dashQueued=!0),r.code==="KeyC"&&!r.repeat&&K(this,Is,Zn).call(this,!this.touchCrouch),this.keys.add(r.code)}),addEventListener("keyup",r=>this.keys.delete(r.code)),addEventListener("blur",()=>this.keys.clear());let s=!1;t.addEventListener("mousedown",()=>{if(this.enabled){if(document.pointerLockElement!==t&&t.requestPointerLock)try{let r=t.requestPointerLock();r&&r.catch&&r.catch(()=>{})}catch{}s=!0}}),addEventListener("mouseup",()=>s=!1),addEventListener("mousemove",r=>{this.enabled&&(document.pointerLockElement===t||s)&&(this.look.x+=r.movementX*Ce.camera.mouseSens,this.look.y+=r.movementY*Ce.camera.mouseSens)}),this.root=i,K(this,Is,Jd).call(this,i)}reset(){var t,i;this.touchRun=!1,K(this,Is,Zn).call(this,!1),this.jumpHeldBtn=!1,(i=(t=this.root)==null?void 0:t.querySelector(".btn-run"))==null||i.classList.remove("active"),this.move.x=this.move.y=0}read(){let t=this.keys,i=this.move.x,s=this.move.y;(t.has("KeyW")||t.has("ArrowUp"))&&(s+=1),(t.has("KeyS")||t.has("ArrowDown"))&&(s-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(i+=1),(t.has("KeyA")||t.has("ArrowLeft"))&&(i-=1);let r=Math.hypot(i,s);r>1&&(i/=r,s/=r);let a={x:i,y:s,run:t.has("ShiftLeft")||t.has("ShiftRight")||this.touchRun||this.stickRun,crouch:this.touchCrouch||t.has("ControlLeft"),jump:this.jumpQueued,jumpHold:t.has("Space")||this.jumpHeldBtn,dash:this.dashQueued,lookX:this.look.x,lookY:this.look.y};return this.jumpQueued=!1,this.dashQueued=!1,this.look.x=this.look.y=0,this.enabled||(a.x=a.y=0,a.jump=a.dash=a.jumpHold=!1,a.lookX=a.lookY=0),this.lookOnly&&(a.x=a.y=0,a.jump=a.dash=a.run=a.jumpHold=a.crouch=!1),a}releasePointer(){document.pointerLockElement&&document.exitPointerLock()}};Is=new WeakSet,Zn=function(t){var i,s;this.touchCrouch=t,(s=(i=this.root)==null?void 0:i.querySelector(".btn-crouch"))==null||s.classList.toggle("active",t)},Jd=function(t){let i=t.querySelector(".stick"),s=t.querySelector(".stick-knob"),r=t.querySelector(".stick-zone"),a=t.querySelector(".look-zone"),n=y=>{y.preventDefault(),y.stopPropagation()},o=(y,b,_)=>{let M=t.querySelector(y);M.addEventListener("pointerdown",A=>{n(A),M.classList.add("down"),b();try{M.setPointerCapture(A.pointerId)}catch{}});let w=()=>{M.classList.remove("down"),_==null||_()};M.addEventListener("pointerup",w),M.addEventListener("pointercancel",w),M.addEventListener("mousedown",A=>A.stopPropagation())};o(".btn-jump",()=>{this.jumpQueued=!0,this.jumpHeldBtn=!0},()=>{this.jumpHeldBtn=!1}),o(".btn-dash",()=>{this.dashQueued=!0}),o(".btn-run",()=>{this.touchRun=!this.touchRun,t.querySelector(".btn-run").classList.toggle("active",this.touchRun)}),o(".btn-crouch",()=>K(this,Is,Zn).call(this,!this.touchCrouch));let l=null,h=0,u=0,d=52;r.addEventListener("pointerdown",y=>{n(y),l=y.pointerId;let b=r.getBoundingClientRect(),_=r.classList.contains("fixed");h=_?b.left+b.width/2:y.clientX,u=_?b.top+b.height/2:y.clientY,_||(i.style.left=h+"px",i.style.top=u+"px"),i.classList.add("on");try{r.setPointerCapture(y.pointerId)}catch{}c(y)});let c=y=>{if(y.pointerId!==l)return;let b=y.clientX-h,_=y.clientY-u,M=Math.hypot(b,_);M>d&&(b*=d/M,_*=d/M),s.style.transform=`translate(${b}px, ${_}px)`,this.move.x=b/d,this.move.y=-_/d,this.stickRun=M>d*1.35,y.preventDefault()},p=y=>{y.pointerId===l&&(l=null,this.move.x=this.move.y=0,this.stickRun=!1,s.style.transform="",i.classList.remove("on"))};r.addEventListener("pointermove",c),r.addEventListener("pointerup",p),r.addEventListener("pointercancel",p),r.addEventListener("mousedown",y=>y.stopPropagation());let v=null,S=0,m=0;a.addEventListener("pointerdown",y=>{if(y.pointerType!=="mouse"){v=y.pointerId,S=y.clientX,m=y.clientY;try{a.setPointerCapture(y.pointerId)}catch{}y.preventDefault()}}),a.addEventListener("pointermove",y=>{y.pointerId===v&&(this.look.x+=(y.clientX-S)*Ce.camera.touchSens,this.look.y+=(y.clientY-m)*Ce.camera.touchSens,S=y.clientX,m=y.clientY,y.preventDefault())});let f=y=>{y.pointerId===v&&(v=null)};a.addEventListener("pointerup",f),a.addEventListener("pointercancel",f)};var Fi=Ce.camera,Ls,Ah,Rh,$n=class{constructor(t,i){Et(this,Ls);this.cam=t,this.blockers=i,this.yaw=0,this.pitch=.32,this.distance=Fi.distance,this.baseDistance=Fi.distance,this.lookHeight=Fi.height,this.curDist=Fi.distance,this.focus=new I,this.ray=new Ed,this.mode="third",this.shake=0}configure(t){var i,s,r;this.baseDistance=(i=t==null?void 0:t.distance)!=null?i:Fi.distance,this.lookHeight=(s=t==null?void 0:t.height)!=null?s:Fi.height,this.side=(r=t==null?void 0:t.side)!=null?r:0}snap(t){this.focus.set(t.x,t.y+this.lookHeight,t.z),this.curDist=this.baseDistance,K(this,Ls,Rh).call(this)}update(t,i,s){this.yaw-=s.lookX,this.pitch=wt.clamp(this.pitch+s.lookY,Fi.pitchMin,Fi.pitchMax);let r=new I(i.x,i.y+this.lookHeight,i.z),a=1-Math.exp(-t*Fi.follow*1.6),n=1-Math.exp(-t*Fi.follow*.6);this.focus.x+=(r.x-this.focus.x)*a,this.focus.z+=(r.z-this.focus.z)*a,this.focus.y+=(r.y-this.focus.y)*n;let o=K(this,Ls,Ah).call(this);this.ray.set(this.focus,o),this.ray.far=this.baseDistance;let l=this.ray.intersectObjects(this.blockers,!1)[0],h=l?Math.max(Fi.minDistance,l.distance-.35):this.baseDistance;this.curDist=h<this.curDist?h:this.curDist+(h-this.curDist)*(1-Math.exp(-t*4)),this.shake=Math.max(0,this.shake-t*1.5),K(this,Ls,Rh).call(this)}};Ls=new WeakSet,Ah=function(){return new I(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch)).normalize()},Rh=function(){let t=Math.cos(this.yaw),i=-Math.sin(this.yaw),s=this.focus.clone();s.x+=t*this.side,s.z+=i*this.side;let r=s.clone().addScaledVector(K(this,Ls,Ah).call(this),this.curDist);if(r.y=Math.max(.35,r.y),this.shake>0){let a=this.shake*.12;r.x+=(Math.random()-.5)*a,r.y+=(Math.random()-.5)*a,r.z+=(Math.random()-.5)*a}this.cam.position.copy(r),this.cam.lookAt(s)};var Wr=class{constructor(t,i=.55,s=.5){this.cell=s,this.half=t.half,this.n=Math.round(t.half*2/s),this.blocked=new Uint8Array(this.n*this.n);for(let r=0;r<this.n;r++)for(let a=0;a<this.n;a++){let n=-this.half+(a+.5)*s,o=-this.half+(r+.5)*s,l=Math.abs(n)>this.half-1.4||Math.abs(o)>this.half-1.4,h=t.near(n,o);if(!l){for(let u of h.boxes)if(!(!u.nav||u.top<.35)&&n>u.minX-i&&n<u.maxX+i&&o>u.minZ-i&&o<u.maxZ+i){l=!0;break}}if(!l){for(let u of h.circles)if(!(!u.nav||u.top<.35)&&(n-u.x)**2+(o-u.z)**2<(u.r+i)**2){l=!0;break}}this.blocked[r*this.n+a]=l?1:0}this.g=new Float32Array(this.n*this.n),this.from=new Int32Array(this.n*this.n),this.closed=new Uint8Array(this.n*this.n)}toCell(t,i){let s=Math.max(0,Math.min(this.n-1,Math.floor((t+this.half)/this.cell))),r=Math.max(0,Math.min(this.n-1,Math.floor((i+this.half)/this.cell)));return[s,r]}center(t,i){return[-this.half+(t+.5)*this.cell,-this.half+(i+.5)*this.cell]}free(t,i){return t>=0&&i>=0&&t<this.n&&i<this.n&&!this.blocked[i*this.n+t]}nearestFree(t,i){if(this.free(t,i))return[t,i];for(let s=1;s<14;s++){let r=null,a=1e9;for(let n=-s;n<=s;n++)for(let o=-s;o<=s;o++){if(Math.max(Math.abs(o),Math.abs(n))!==s||!this.free(t+o,i+n))continue;let l=o*o+n*n;l<a&&(a=l,r=[t+o,i+n])}if(r)return r}return[t,i]}find(t,i,s,r){let a=this.n,[n,o]=this.nearestFree(...this.toCell(t,i)),[l,h]=this.nearestFree(...this.toCell(s,r)),u=o*a+n,d=h*a+l;this.g.fill(1/0),this.closed.fill(0),this.from.fill(-1),this.g[u]=0;let c=new Ch,p=(M,w)=>{let A=Math.abs(M-l),g=Math.abs(w-h);return A+g+(Math.SQRT2-2)*Math.min(A,g)};c.push(u,p(n,o));let v=!1,S=0;for(;c.size&&S++<4e4;){let M=c.pop();if(M===d){v=!0;break}if(this.closed[M])continue;this.closed[M]=1;let w=M%a,A=M/a|0;for(let g=-1;g<=1;g++)for(let x=-1;x<=1;x++){if(!x&&!g)continue;let U=w+x,R=A+g;if(!this.free(U,R)||x&&g&&(!this.free(w+x,A)||!this.free(w,A+g)))continue;let N=R*a+U,W=this.g[M]+(x&&g?Math.SQRT2:1);W<this.g[N]&&(this.g[N]=W,this.from[N]=M,c.push(N,W+p(U,R)))}}if(!v)return null;let m=[];for(let M=d;M!==-1;M=this.from[M])m.push(M);m.reverse();let f=m.map(M=>this.center(M%a,M/a|0));f[f.length-1]=[s,r];let y=[],b=[t,i],_=0;for(;_<f.length-1;){let M=_+1;for(let w=f.length-1;w>_+1;w--)if(this.clear(b[0],b[1],f[w][0],f[w][1])){M=w;break}y.push(f[M]),b=f[M],_=M}return y.length||y.push([s,r]),y}clear(t,i,s,r){let a=Math.hypot(s-t,r-i),n=Math.ceil(a/(this.cell*.4));for(let o=1;o<n;o++){let l=o/n,[h,u]=this.toCell(t+(s-t)*l,i+(r-i)*l);if(this.blocked[u*this.n+h])return!1}return!0}},Ch=class{constructor(){this.a=[],this.p=[]}get size(){return this.a.length}push(t,i){let s=this.a,r=this.p;s.push(t),r.push(i);let a=s.length-1;for(;a>0;){let n=a-1>>1;if(r[n]<=r[a])break;[s[n],s[a]]=[s[a],s[n]],[r[n],r[a]]=[r[a],r[n]],a=n}}pop(){let t=this.a,i=this.p,s=t[0],r=t.pop(),a=i.pop();if(t.length){t[0]=r,i[0]=a;let n=0;for(;;){let o=n*2+1,l=o+1,h=n;if(o<t.length&&i[o]<i[h]&&(h=o),l<t.length&&i[l]<i[h]&&(h=l),h===n)break;[t[h],t[n]]=[t[n],t[h]],[i[h],i[n]]=[i[n],i[h]],n=h}}return s}};var ds=Ce.world,Kn=new I,$d=new I,Ks=new I,Pa=new I,Xr,Kd,Qd,jr=class{constructor(t,i){Et(this,Xr);this.hero=t,this.world=i,this.pos=new I,this.vel=new I,this.yaw=0,this.grounded=!0,this.coyote=0,this.jumpBuf=0,this.stamina=1,this.exhausted=!1,this.running=!1,this.landed=!1,this.landSpeed=0,this.dashT=0,this.dashCd=0,this.boostT=0,this.boostMul=1,this.moveMul=1,this.slowMul=1,this.speed=0,this.stagger=0,this.mantle=null,this.climbing=!1,this.flying=!1,this.flyEnergy=1,this.dashCharges=0,this.chargeT=0,this.crouching=!1}get phys(){return Ce.heroes[this.hero.id]}get radius(){return this.hero.radius}get height(){return this.hero.height*(this.crouching?.58:1)}get elevated(){return this.pos.y>1.3}spawn(t,i=Math.PI){var s;this.pos.copy(t),this.vel.set(0,0,0),this.yaw=i,this.stamina=1,this.exhausted=!1,this.grounded=!0,this.dashT=this.dashCd=this.boostT=this.stagger=0,this.mantle=null,this.climbing=this.flying=this.crouching=!1,this.flyEnergy=1,this.dashCharges=(s=this.phys.dash.charges)!=null?s:0,this.chargeT=0}get dashReady(){return this.dashCd<=0&&(this.phys.dash.charges?this.dashCharges>0:!0)}update(t,i,s){var _;let r=this.phys;Kn.set(-Math.sin(s),0,-Math.cos(s)),$d.set(-Kn.z,0,Kn.x),Ks.set(0,0,0).addScaledVector(Kn,i.y||0).addScaledVector($d,i.x||0);let a=Math.min(1,Ks.length());a>.001&&Ks.normalize();let n=Ks.x,o=Ks.z;if(this.dashed=!1,this.jumped=!1,this.landed=!1,this.mantle)return K(this,Xr,Kd).call(this,t);i.crouch&&this.grounded&&r.jump>0?this.crouching=!0:this.crouching&&(!i.crouch||!this.grounded)&&this.world.ceilingAt(this.pos.x,this.pos.z,this.radius,this.pos.y+.1)>this.pos.y+this.hero.height&&(this.crouching=!1);let l=i.run&&a>.2&&!this.crouching;this.exhausted&&this.stamina>.35&&(this.exhausted=!1),this.running=l&&!this.exhausted,this.running?(this.stamina-=t/r.stamina,this.stamina<=0&&(this.stamina=0,this.exhausted=!0,this.running=!1)):this.stamina=Math.min(1,this.stamina+t*r.regen*(a<.1?1.4:1)),this.dashCd=Math.max(0,this.dashCd-t),this.dashT=Math.max(0,this.dashT-t),r.dash.charges&&(this.dashCharges<r.dash.charges?(this.chargeT+=t,this.chargeT>=r.dash.recharge&&(this.chargeT=0,this.dashCharges++)):this.chargeT=0),i.dash&&this.dashReady&&(a>.2||this.speed>1)&&(this.dashT=r.dash.time,this.dashCd=r.dash.cooldown,r.dash.charges&&this.dashCharges--,this.dashed=!0);let h=this.dashT>0;this.boostT=Math.max(0,this.boostT-t),this.stagger=Math.max(0,this.stagger-t);let u=this.exhausted?.85:1,d=this.moveMul*this.slowMul*(this.boostT>0?this.boostMul:1)*(this.stagger>0?.45:1),c=(this.running?r.run:r.walk*u*(this.crouching?.5:1))*a*d;h&&(c=r.run*r.dash.mul*this.moveMul*this.slowMul);let p=(h&&a<.2?Ks.set(Math.sin(this.yaw),0,Math.cos(this.yaw)):Ks).multiplyScalar(c);Pa.set(this.vel.x,0,this.vel.z);let v=this.grounded?a>.01?r.accel:r.decel:r.air;if(this.grounded&&a>.2){let M=Pa.length();if(M>r.walk){let w=(Pa.x*p.x+Pa.z*p.z)/(M*(p.length()||1));w<.3&&(v*=wt.lerp(.55,1,(w+1)/1.3)**(r.mass>2?1.6:1))}}h&&(v=r.accel*3);let S=p.sub(Pa),m=v*t;S.length()>m&&S.setLength(m),this.vel.x+=S.x,this.vel.z+=S.z;let f=this.world.ladderAt(this.pos.x,this.pos.z,this.radius,this.pos.y);this.climbing=!!(f&&a>.3&&n*-f.nx+o*-f.nz>.4);let y=ds.gravity*r.gravity;if(i.jump?this.jumpBuf=ds.jumpBuffer:this.jumpBuf-=t,this.coyote=this.grounded||this.climbing?ds.coyoteTime:this.coyote-t,this.jumpBuf>0&&this.coyote>0&&r.jump>0&&!this.crouching&&(this.vel.y=Math.sqrt(2*y*r.jump),this.climbing&&f&&(this.vel.x+=f.nx*4,this.vel.z+=f.nz*4),this.grounded=!1,this.climbing=!1,this.coyote=0,this.jumpBuf=0,this.jumped=!0,this.stamina=Math.max(0,this.stamina-.03)),this.flying=!1,r.fly&&((i.jumpHold||i.jump)&&this.flyEnergy>0?(this.flying=!0,this.vel.y+=(r.fly.speed-this.vel.y)*Math.min(1,t*8),this.flyEnergy=Math.max(0,this.flyEnergy-t/r.fly.time),this.grounded=!1):this.grounded&&(this.flyEnergy=Math.min(1,this.flyEnergy+t*r.fly.regen))),this.climbing?(this.vel.y=(_=r.climb)!=null?_:3.2,this.vel.x*=.5,this.vel.z*=.5,this.grounded=!1):this.flying||(this.vel.y=Math.max(-ds.maxFall*(r.fly?.3:1),this.vel.y-y*t*(r.fly&&this.vel.y<0?.35:1))),K(this,Xr,Qd).call(this,t),!this.grounded&&!this.mantle&&a>.3&&this.vel.y<4&&r.reach>0){let M=this.radius+.3,w=this.pos.x+n*M,A=this.pos.z+o*M,g=this.world.ledgeAt(w,A,this.pos.y,r.reach,this.height);if(g!==null){let x=new I(this.pos.x+n*(this.radius+.35),g,this.pos.z+o*(this.radius+.35));this.mantle={t:0,dur:.22+(g-this.pos.y)*.12*(r.mass>2?1.4:1),from:this.pos.clone(),to:x},this.vel.set(0,0,0),this.stamina=Math.max(0,this.stamina-.05),this.climbing=!1}}let b=Math.hypot(this.vel.x,this.vel.z);if(b>.4&&(a>.05||h)){let M=Math.atan2(this.vel.x,this.vel.z),w=Math.atan2(Math.sin(M-this.yaw),Math.cos(M-this.yaw));this.yaw+=w*Math.min(1,r.turn*t)}else this.climbing&&f&&(this.yaw=Math.atan2(-f.nx,-f.nz));this.speed=b}animState(t){let i=this.mantle;return{t,speed:i?0:this.speed||0,grounded:this.grounded&&!i,vy:i||this.climbing?3:this.vel.y,running:this.running||this.dashT>0,landed:this.landed,landSpeed:this.landSpeed,crouch:this.crouching}}};Xr=new WeakSet,Kd=function(t){let i=this.mantle;i.t+=t;let s=Math.min(1,i.t/i.dur),r=Math.min(1,s/.65),a=Math.max(0,(s-.35)/.65),n=o=>o*o*(3-2*o);if(this.pos.y=i.from.y+(i.to.y-i.from.y)*n(r),this.pos.x=i.from.x+(i.to.x-i.from.x)*n(a),this.pos.z=i.from.z+(i.to.z-i.from.z)*n(a),this.grounded=!1,this.speed=0,s>=1){this.mantle=null;let o={x:this.pos.x,y:this.pos.y,z:this.pos.z};this.world.resolve(o,this.radius,this.pos.y+ds.stepHeight,this.pos.y+this.height*.9),this.pos.x=o.x,this.pos.z=o.z,this.pos.y=Math.max(this.pos.y,this.world.groundAt(this.pos.x,this.pos.z,this.radius,this.pos.y+.1)),this.grounded=!0,this.vel.set(0,0,0)}},Qd=function(t){let i=this.pos.y+(this.grounded?ds.stepHeight:.08),s=this.pos.y+this.height*.9,r={x:this.pos.x+this.vel.x*t,y:this.pos.y,z:this.pos.z+this.vel.z*t},a=r.x,n=r.z;this.hitWall=this.world.resolve(r,this.radius,i,s);let o=r.x-a,l=r.z-n,h=Math.hypot(o,l);if(h>1e-5){let c=o/h,p=l/h,v=this.vel.x*c+this.vel.z*p;v<0&&(this.vel.x-=v*c,this.vel.z-=v*p)}this.pos.x=r.x,this.pos.z=r.z;let u=this.grounded,d=this.world.groundAt(this.pos.x,this.pos.z,this.radius,i);if(this.pos.y+=this.vel.y*t,this.vel.y>0){let c=this.world.ceilingAt(this.pos.x,this.pos.z,this.radius,this.pos.y-this.vel.y*t+this.height*.5);this.pos.y+this.height>c&&(this.pos.y=Math.max(d,c-this.height),this.vel.y=0)}this.pos.y<=d?(u||(this.landed=!0,this.landSpeed=this.vel.y,this.vel.y<-15&&!this.phys.fly&&(this.stagger=Math.min(.6,(-this.vel.y-15)*.06+.2))),this.pos.y=d,this.vel.y=0,this.grounded=!0):u&&this.vel.y<=0&&this.pos.y-d<ds.stepHeight?(this.pos.y=d,this.vel.y=0,this.grounded=!0):this.grounded=!1};function ep(e){let t=Ce.world.pushStrength;for(let i=0;i<e.length;i++){let s=e[i];if(s.alive)for(let r=i+1;r<e.length;r++){let a=e[r];if(!a.alive)continue;let n=s.ctrl,o=a.ctrl;if(n.mantle||o.mantle||Math.abs(n.pos.y-o.pos.y)>1.4)continue;let l=o.pos.x-n.pos.x,h=o.pos.z-n.pos.z,u=n.radius+o.radius,d=l*l+h*h;if(d>=u*u||d<1e-8)continue;let c=Math.sqrt(d),p=(u-c)*t,v=n.phys.mass,S=o.phys.mass,m=v+S,f=l/c,y=h/c,b={x:n.pos.x-f*p*(S/m),y:n.pos.y,z:n.pos.z-y*p*(S/m)},_={x:o.pos.x+f*p*(v/m),y:o.pos.y,z:o.pos.z+y*p*(v/m)};n.world.resolve(b,n.radius,n.pos.y+ds.stepHeight,n.pos.y+n.height*.9),o.world.resolve(_,o.radius,o.pos.y+ds.stepHeight,o.pos.y+o.height*.9),n.pos.x=b.x,n.pos.z=b.z,o.pos.x=_.x,o.pos.z=_.z}}}var zi=Ce.ghost,s1=2.1,Ph=null,Ut,Ih,ip,sp,rp,ap,Qn,np,Lh,eo=class{constructor(t,i,s,r,{heroes:a=[]}={}){Et(this,Ut);this.def=t,this.world=i,this.scene=s,this.heroes=a,this.char=t.build(),this.root=this.char.root,this.root.visible=!1,s.add(this.root),this.nav=r||new Wr(i,t.radius+.1),this.ctrl=new jr(t,i),this.pos=this.ctrl.pos,this.vel=this.ctrl.vel,this.disguises=new Map,this.isPlayer=!1,this.reset(new I)}get radius(){return this.def.radius}get human(){return this.isPlayer||!!this.remote}get yaw(){return this.ctrl.yaw}reset(t){this.ctrl.spawn(t,0),this.state="hidden",this.appear=0,this.root.visible=!1,this.path=null,this.repath=0,this.lastSeen=null,this.target=null,this.unseen=0,this.wanderTarget=null,this.sees=!1,this.stunT=0,this.slowT=0,this.stuckT=0,this.stuckFrom=null,this.disguise=null,this.disguiseCd=6,this.caughtN=0,K(this,Ut,Ih).call(this)}spawn(){this.state="appear",this.appear=0,this.root.visible=!0}get active(){return this.state==="search"||this.state==="hunt"}get disguised(){return!!this.disguise}get eyeY(){return this.pos.y+s1}stun(t){this.stunT=Math.max(this.stunT,t),this.ctrl.dashT=0,this.reveal()}slow(t){this.slowT=Math.max(this.slowT,t)}knock(t,i,s){let r={x:this.pos.x+t*s,y:this.pos.y,z:this.pos.z+i*s};this.world.resolve(r,this.radius,this.pos.y+.3,this.pos.y+2.2),this.pos.x=r.x,this.pos.z=r.z,this.vel.set(0,0,0),this.path=null}get disguiseReady(){return this.disguiseCd<=0&&!this.disguise&&this.active&&this.stunT<=0}useDisguise(t=[],i="hero"){if(!this.disguiseReady)return!1;if(i==="prop"){let s=Ps[Math.random()*Ps.length|0],r=this.disguises.get("prop:"+s.id);r||(r={root:$s(s.id),update(){}},this.disguises.set("prop:"+s.id,r)),this.scene.add(r.root),r.root.visible=!0,this.disguise={prop:s,char:r,t:zi.disguise.time}}else{if(!this.heroes.length)return!1;let s=new Set(t.filter(l=>l.alive).map(l=>l.hero.id)),r=this.heroes.filter(l=>!s.has(l.id)),a=r.length?r:this.heroes,n=a[Math.random()*a.length|0],o=this.disguises.get(n.id);if(!o){o=n.build("classic"),Ph||(Ph=Bi("rgba(150,80,230,0.55)","rgba(90,30,160,0)"));let l=new Ki(new Di({map:Ph,transparent:!0,depthWrite:!1,blending:kt,opacity:.5}));l.scale.set(n.radius*3,.9,1),l.position.y=.35,o.root.add(l),o.shimmer=l,this.disguises.set(n.id,o)}this.scene.add(o.root),o.root.visible=!0,this.disguise={hero:n,char:o,t:zi.disguise.time}}return this.root.visible=!1,this.poof=!0,!0}reveal(){this.disguise&&(K(this,Ut,Ih).call(this),this.disguise=null,this.disguiseCd=zi.disguise.cd,this.root.visible=this.state!=="hidden",this.poof=!0)}update(t,i,s,r,a={},n=null,o=0){var p,v;let l={t:i,speed:0,mode:"search",appear:1};if(this.state==="hidden")return l;if(this.state==="appear")return this.appear=Math.min(1,this.appear+t/2.2),l.appear=this.appear,l.mode="hunt",this.appear>=1&&(this.state=this.human?"hunt":"search"),K(this,Ut,Lh).call(this,l,t),l;this.stunT=Math.max(0,this.stunT-t),this.slowT=Math.max(0,this.slowT-t),this.disguiseCd=Math.max(0,this.disguiseCd-t),this.disguise&&(this.disguise.t-=t,this.disguise.t<=0&&this.reveal());let h=K(this,Ut,ip).call(this,t,s),u;this.human?u=n:u=K(this,Ut,sp).call(this,t,h,s);let d=this.ctrl;d.moveMul=this.stunT>0?0:1,(p=this.disguise)!=null&&p.prop&&u&&(d.moveMul*=Ce.abilities.prop.walk,u={...u,run:!1,jumpHold:!1,jump:!1}),d.slowMul=(this.slowT>0?.45:1)*(1+zi.lateBoost*r)*((v=this.speedMul)!=null?v:1);let c=d.dashT>0;d.update(t,this.stunT>0?{x:0,y:0}:u,this.human?o:0),d.dashT>0&&!c&&this.reveal(),this.dashed=d.dashed;for(let S of a.domes||[]){let m=this.pos.x-S.x,f=this.pos.z-S.z,y=S.r+this.radius,b=Math.hypot(m,f);if(b<y){let _=b||.001;this.pos.x=S.x+m/_*y,this.pos.z=S.z+f/_*y;let M=(this.vel.x*m+this.vel.z*f)/_;M<0&&(this.vel.x-=M*m/_,this.vel.z-=M*f/_)}}return this.human||K(this,Ut,np).call(this,t),l.mode=this.stunT>0?"search":this.state==="hunt"?"hunt":"search",l.speed=d.speed,l.stunned=this.stunT>0,K(this,Ut,Lh).call(this,l,t),l}catches(t){if(!this.active||this.stunT>0||!t.alive||t.protected)return!1;let i=t.ctrl.pos;return Math.hypot(i.x-this.pos.x,i.z-this.pos.z)<zi.catchRadius+t.ctrl.radius*.6&&i.y-this.pos.y<zi.catchHeight&&this.pos.y-i.y<1.5}};Ut=new WeakSet,Ih=function(){for(let t of this.disguises.values())t.root.visible=!1,this.scene.remove(t.root)},ip=function(t,i){let s=null,r=1/0,a=null,n=Math.sin(this.yaw),o=Math.cos(this.yaw);for(let h of i){if(!h.alive||h.protected)continue;let u=h.ctrl.pos,d=u.x-this.pos.x,c=u.z-this.pos.z,p=Math.hypot(d,c),v=p<zi.sightRange&&this.world.lineOfSight(this.pos.x,this.pos.z,u.x,u.z,!1,this.eyeY,u.y+h.ctrl.height*.75);h.hidden&&p>2.6&&(v=!1),h.prop&&!(h.ctrl.speed>.8&&p<14)&&(v=!1),v&&p>8&&(d*n+c*o)/(p||1)<-.35&&(v=!1);let S=h.ctrl.running&&p<zi.hearRunRange&&!h.hidden&&!h.prop;if(!(v||S||p<2.2))continue;let m=p*(v?1:1.6);h===this.target&&(a={a:h,d:p,sees:v}),m<r&&(r=m,s={a:h,d:p,sees:v})}let l=a&&a.d<r*1.5+3?a:s;return this.sees=!!(l&&l.sees),l?(this.target=l.a,this.lastSeen=l.a.ctrl.pos.clone(),this.unseen=0,this.state!=="hunt"&&!this.disguise&&(this.state="hunt")):(this.unseen+=t,this.state==="hunt"&&this.unseen>zi.loseSightTime&&(this.target=null,this.human||(this.state="search"))),l},sp=function(t,i,s){var S,m;let r=this.ctrl,a={x:0,y:0,run:!1,jump:!1,jumpHold:!1,dash:!1};if(!i&&this.disguiseReady&&Math.random()<t*.25&&this.useDisguise(s,Math.random()<.3?"prop":"hero"),(S=this.disguise)!=null&&S.prop){let f=tp(s,this.pos);if(f&&f.ctrl.pos.distanceTo(this.pos)<4.5)this.reveal(),this.target=f,this.state="hunt",this.lastSeen=f.ctrl.pos.clone();else return a}let n,o=!1;if(this.disguise){let f=(i==null?void 0:i.a)||tp(s,this.pos);f&&(n=f.ctrl.pos,this.target=f,o=f.ctrl.pos.distanceTo(this.pos)>3)}if(!n)if(this.state==="hunt"&&this.target)n=this.sees?this.target.ctrl.pos:this.lastSeen;else if(this.lastSeen&&this.pos.distanceTo(this.lastSeen)>1.5)n=this.lastSeen;else{if(this.lastSeen=null,!this.wanderTarget||this.pos.distanceTo(this.wanderTarget)<1.5){let f=s.filter(_=>_.alive),y=f.filter(_=>_.prop&&_.ctrl.pos.distanceTo(this.pos)<16&&this.world.lineOfSight(this.pos.x,this.pos.z,_.ctrl.pos.x,_.ctrl.pos.z,!0,this.eyeY,1)),b=Math.random();y.length&&b<.2?this.wanderTarget=y[Math.random()*y.length|0].ctrl.pos.clone():b<.6?this.wanderTarget=K(this,Ut,ap).call(this):b<.75&&f.length?this.wanderTarget=K(this,Ut,Qn).call(this,f[Math.random()*f.length|0].ctrl.pos):this.wanderTarget=K(this,Ut,Qn).call(this,this.pos)}n=this.wanderTarget}if(!n)return a;let l=Math.hypot(n.x-this.pos.x,n.z-this.pos.z),h=!1;if(this.target&&this.target.alive&&!o){let f=this.target.ctrl.pos;h=f.y-this.pos.y>.8&&Math.hypot(f.x-this.pos.x,f.z-this.pos.z)<3.2}let u=h?this.target.ctrl.pos:K(this,Ut,rp).call(this,n,this.sees&&i&&i.d<7,t),d=u.x-this.pos.x,c=u.z-this.pos.z,p=Math.hypot(d,c);p>.05&&(a.x=d/p,a.y=-c/p);let v=this.state==="hunt"&&!!this.target&&!o;return a.run=v&&(this.sees||l<10)&&!r.exhausted,v&&this.sees&&i&&i.d<zi.burstRange&&i.d>1.6&&r.dashReady&&!this.target.hidden&&(this.target.ctrl.running||this.target.ctrl.dashT>0||i.d<4||r.dashCharges>=((m=r.phys.dash.charges)!=null?m:1))&&(a.dash=!0),a.jumpHold=h,a},rp=function(t,i,s){if(this.repath-=s,i&&this.nav.clear(this.pos.x,this.pos.z,t.x,t.z))return this.path=null,t;if((!this.path||this.repath<=0)&&(this.path=this.nav.find(this.pos.x,this.pos.z,t.x,t.z),this.repath=zi.repathEvery*(.8+Math.random()*.4)),this.path&&this.path.length){let[r,a]=this.path[0];return Math.hypot(r-this.pos.x,a-this.pos.z)<.7&&this.path.length>1&&this.path.shift(),{x:this.path[0][0],z:this.path[0][1]}}return t},ap=function(){this.checked||(this.checked=new Map);let t=performance.now(),i=null,s=-1/0;for(let r of this.world.bushes){let a=Math.hypot(r.x-this.pos.x,r.z-this.pos.z),n=(t-(this.checked.get(r)||-1e9))/1e3,o=Math.min(n,60)*.5-a+Math.random()*8;o>s&&(s=o,i=r)}return i?(this.checked.set(i,t),new I(i.x,0,i.z)):K(this,Ut,Qn).call(this,this.pos)},Qn=function(t){for(let i=0;i<20;i++){let s=t.x+(Math.random()-.5)*22,r=t.z+(Math.random()-.5)*22,[a,n]=this.nav.toCell(s,r);if(this.nav.free(a,n))return new I(s,0,r)}return t.clone()},np=function(t){if(this.stunT>0){this.stuckT=0,this.stuckFrom=null;return}this.stuckFrom||(this.stuckFrom=this.pos.clone()),this.stuckT+=t,this.stuckT>1.5&&(this.pos.distanceTo(this.stuckFrom)<.6&&(this.wanderTarget=null,this.path=null,this.sees||(this.lastSeen=null,this.state==="hunt"&&(this.state="search",this.target=null))),this.stuckT=0,this.stuckFrom=this.pos.clone())},Lh=function(t,i){let s=this.disguise;if(s){let r=s.char.root;r.position.copy(this.pos),s.prop||(r.rotation.y=this.yaw),s.char.update(i,this.ctrl.animState(t.t)),s.char.shimmer&&(s.char.shimmer.material.opacity=.35+Math.sin(t.t*3)*.15);return}this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,this.root.rotation.z=t.stunned?Math.sin(t.t*18)*.06:0,this.char.update(i,t)};function tp(e,t){let i=null,s=1/0;for(let r of e){if(!r.alive||r.protected||r.hidden)continue;let a=r.ctrl.pos.distanceTo(t);a<s&&(s=a,i=r)}return i}var op=Bi("rgba(255,210,130,1)","rgba(255,150,40,0)",64);function lp(e,t,i,s,r){let a=new pi({transparent:!0,depthWrite:!1,side:bi,blending:kt,uniforms:{uT:{value:0},uA:{value:0}},vertexShader:`varying vec3 vN; varying vec3 vV; varying vec3 vP;
      void main(){ vec4 w = modelMatrix*vec4(position,1.); vP = position; vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition - w.xyz); gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`uniform float uT; uniform float uA; varying vec3 vN; varying vec3 vV; varying vec3 vP;
      void main(){ float f = pow(1. - abs(dot(vN, vV)), 2.2);
        float hex = step(0.92, fract(vP.y*3.5 + uT*0.4)) * 0.25;
        vec3 c = mix(vec3(1.,.72,.3), vec3(1.,.9,.6), f);
        gl_FragColor = vec4(c, (0.06 + f*0.75 + hex*f) * uA); }`}),n=new ut(new $t(s,40,20,0,Math.PI*2,0,Math.PI/2),a);n.position.set(t,0,i),e.add(n);let o=hp(e,t,i,s,16760928),l=0;return{x:t,z:i,r:s,update(h){l+=h;let u=Math.min(1,l/.4);return n.scale.setScalar(.2+.8*(1-(1-u)**3)),a.uniforms.uT.value=l,a.uniforms.uA.value=Math.min(1,l/.3)*Math.min(1,(r-l)/.6),o.material.opacity=a.uniforms.uA.value*.6,l>=r?(e.remove(n,o),a.dispose(),!1):!0}}}function hp(e,t,i,s,r){let a=new ut(new Bn(s*.94,s,48),new Oi({color:r,transparent:!0,opacity:.6,depthWrite:!1,blending:kt}));return a.rotation.x=-Math.PI/2,a.position.set(t,.05,i),e.add(a),a}function to(e,t,i,s,r=16748442){let a=hp(e,t,i,1,r),n=24,o=new pt,l=new Float32Array(n*3),h=[];for(let c=0;c<n;c++){let p=Math.random()*Math.PI*2,v=Math.random()*s*.8;l.set([t+Math.cos(p)*v,.3+Math.random(),i+Math.sin(p)*v],c*3),h.push(.8+Math.random()*1.5)}o.setAttribute("position",new Jt(l,3));let u=new Or(o,new Zs({size:.4,map:op,color:r,transparent:!0,depthWrite:!1,blending:kt}));e.add(u);let d=0;return{update(c){d+=c,a.scale.setScalar(1+d*s*1.6),a.material.opacity=Math.max(0,.8-d);for(let p=0;p<n;p++)l[p*3+1]+=h[p]*c;return o.attributes.position.needsUpdate=!0,u.material.opacity=Math.max(0,1-d/1.4),d>1.4?(e.remove(a,u),o.dispose(),!1):!0}}}function cp(e,t,i,s,r=6){let a=new lt,n=new Lt({color:16765066,emissive:16751162,emissiveIntensity:2.6});a.add(new ut(new $t(.14,10,8),n));let o=new ut(new Ea(.11,.28,8),n);o.position.y=.18,a.add(o);let l=new Ki(new Di({map:op,transparent:!0,depthWrite:!1,blending:kt}));l.scale.set(1.1,1.1,1),a.add(l),a.position.copy(t),e.add(a);let h=new I((Math.random()-.5)*4,3,(Math.random()-.5)*4),u=0;return{update(d){u+=d;let c=i();if(c){let p=new I(c.x,1.6,c.z).sub(a.position);if(p.length()<.8)return s(c),e.remove(a),!1;h.lerp(p.setLength(11),Math.min(1,d*2.5))}else h.y+=d*1.5;return a.position.addScaledVector(h,d),a.rotation.y+=d*6,l.material.opacity=.6+Math.sin(u*20)*.2,u>r?(e.remove(a),!1):!0}}}function up(e,t,i){let s=new As((()=>{let h=document.createElement("canvas");h.width=h.height=64;let u=h.getContext("2d");u.fillStyle="#ffd98a",u.beginPath(),u.ellipse(32,40,13,11,0,0,Math.PI*2),u.fill();for(let[d,c]of[[17,22],[27,15],[38,15],[48,22]])u.beginPath(),u.ellipse(d,c,5,6,0,0,Math.PI*2),u.fill();return h})()),r=new Oi({map:s,transparent:!0,depthWrite:!1,blending:kt}),a=new Cs(.5,.5),n=[],o=1;for(let h=0;h<t.length-1;h++){let[u,d]=t[h],[c,p]=t[h+1],v=Math.hypot(c-u,p-d),S=Math.atan2(c-u,p-d);for(let m=0;m<v;m+=.8){let f=m/v,y=new ut(a,r);y.rotation.set(-Math.PI/2,0,S+Math.PI),y.position.set(u+(c-u)*f+Math.cos(S)*.18*o,.04,d+(p-d)*f-Math.sin(S)*.18*o),o=-o,y.userData.delay=n.length*.04,y.visible=!1,e.add(y),n.push(y)}}let l=0;return{update(h){l+=h;for(let u of n)u.visible=l>u.userData.delay;return r.opacity=Math.min(1,(i-l)/1)*(.75+Math.sin(l*5)*.25),l>i?(n.forEach(u=>e.remove(u)),a.dispose(),!1):!0}}}function dp(e,t,i){let s=new Ki(new Di({map:Bi("rgba(190,120,255,1)","rgba(120,40,200,0)",64),depthTest:!1,transparent:!0,blending:kt}));s.scale.set(1.6,1.6,1),s.renderOrder=10,e.add(s);let r=0;return{update(a){r+=a;let n=t();return s.position.set(n.x,3.3+Math.sin(r*4)*.15,n.z),s.material.opacity=Math.min(1,i-r),r>i?(e.remove(s),!1):!0}}}function pp(e,t,i,s,r){let a=new Oi({color:16760928,transparent:!0,opacity:.9,side:bi,depthWrite:!1,blending:kt}),n=new ut(new Bn(1.4,2,32,1,-Math.PI*.85,Math.PI*.7),a);n.rotation.x=-Math.PI/2;let o=new lt;o.add(n),o.rotation.y=r,o.position.set(t,i+1.1,s),e.add(o);let l=0;return{update(h){return l+=h,a.opacity=Math.max(0,.9-l*2.5),n.scale.setScalar(1+l*.6),l>.4?(e.remove(o),!1):!0}}}var At,Nh,fp,mp,gp,Qs,Uh,vp,Dh,Ia=class{constructor(t,i,s){Et(this,At);this.agent=t,this.world=i,this.nav=s,this.mode="wander",this.goal=null,this.path=null,this.think=Math.random()*.3,this.stuck=0,this.idle=0,this.sat=0,this.patience=K(this,At,Nh).call(this),this.juke=null,this.ladder=null}update(t,i){var y;this.ghosts=i;let s=Ce.bots,r=this.agent,a=r.ctrl,n=a.pos,o=null,l=1/0;for(let b of i){let _=Math.hypot(b.pos.x-n.x,b.pos.z-n.z);_<l&&K(this,At,fp).call(this,b,n,_)&&(l=_,o=b)}this.threat=o,this.td=l,this.think-=t,this.think<=0&&(this.think=s.think*(.7+Math.random()*.6),K(this,At,mp).call(this,o,l));let h={x:0,y:0,run:!1,jump:!1,dash:!1};if(r.prop)return h;if(o&&l<s.jukeRange&&!a.elevated&&o.pos.y<n.y+1&&(!this.juke||this.juke.t<=0)){let b=n.x-o.pos.x,_=n.z-o.pos.z,M=Math.hypot(b,_)||1,w=Math.random()<.5?1:-1,A=-_/M*w*.85+b/M*.5,g=b/M*w*.85+_/M*.5,[x,U]=this.nav.toCell(n.x+A*2.5,n.z+g*2.5);this.nav.free(x,U)||(A=_/M*w*.85+b/M*.5,g=-b/M*w*.85+_/M*.5),this.juke={x:A,z:g,t:.45}}if(this.juke&&this.juke.t>0)return this.juke.t-=t,h.x=this.juke.x,h.y=-this.juke.z,h.run=!a.exhausted,h.dash=a.dashReady,this.juke.t<=0&&(this.path=null,this.think=0),h;if(a.elevated&&a.grounded&&this.mode!=="ladder"){if(this.mode="roof",o){let b=n.x-o.pos.x,_=n.z-o.pos.z,M=Math.hypot(b,_)||1;return h.x=b/M,h.y=-_/M,h.run=l<7&&!a.exhausted,h.jump=o.pos.y>n.y-1.2&&l<3.5,h}if(this.sat+=t,this.sat>this.patience){let b=(y=this.roofDir)!=null?y:this.roofDir=Math.random()*Math.PI*2;h.x=Math.cos(b),h.y=Math.sin(b)}return h}if(this.mode==="roof"&&!a.elevated&&(this.mode="wander",this.roofDir=null,this.sat=0,this.path=null),this.mode==="ladder"&&this.ladder){let b=this.ladder,_=b.x+b.nx*(a.radius+.25),M=b.z+b.nz*(a.radius+.25),w=_-n.x,A=M-n.z;if(Math.hypot(w,A)>.5&&!a.climbing&&n.y<.5)(!this.path||!this.path.length)&&K(this,At,Qs).call(this,_,M);else return h.x=-b.nx,h.y=b.nz,h.run=!1,a.elevated&&a.grounded&&(this.mode="roof",this.ladder=null,this.sat=0),h}let u=this.world.inBush(n.x,n.z,n.y);if(this.mode==="hide"&&u&&(!o||o.target!==r||l>4))return this.sat+=t,!o&&this.sat>this.patience&&(this.sat=0,this.patience=K(this,At,Nh).call(this),this.mode="wander",this.path=null,this.think=0),h;if(this.mode!=="roof"&&(this.sat=0),this.mode==="wander"&&this.idle>0)return this.idle-=t,h;if(!this.path||!this.path.length)return h;let[d,c]=this.path[0],p=d-n.x,v=c-n.z,S=Math.hypot(p,v);if(S<.6)return this.path.shift(),!this.path.length&&this.mode==="wander"&&(this.idle=Math.random()*2),h;p/=S,v/=S,h.x=p,h.y=-v;let m=this.mode==="flee"||this.mode==="help"||this.mode==="ladder"||this.mode==="hide"&&o,f=o&&(l<8||o.target===r&&o.sees);return h.run=m&&!a.exhausted&&(f||a.stamina>s.calmRun&&o&&l<12||this.mode==="help"),h.dash=m&&o&&l<4.5&&a.dashReady,a.speed<.6&&!a.mantle?this.stuck+=t:this.stuck=0,this.stuck>.5&&(h.jump=!0,this.stuck=0,this.path=null,this.think=0),h}};At=new WeakSet,Nh=function(){var r,a,n;let[t,i]=Ce.bots.restless,s=((n=(a=(r=this.agent)==null?void 0:r.abilities)==null?void 0:a.game)==null?void 0:n.phase)==="hide"?2.5:1;return(t+Math.random()*(i-t))*s},fp=function(t,i,s){let r=this.agent.ctrl;if(!t.active)return!1;if(t.disguised){let a=t.ctrl.speed>6.5||t.ctrl.dashT>0;if(!(s<Ce.ghost.disguise.noticeRange||a&&s<8))return!1}return t.target===this.agent&&t.sees?!0:s<Ce.bots.fleeRange&&this.world.lineOfSight(i.x,i.z,t.pos.x,t.pos.z,!0,i.y+r.height*.8,t.eyeY)},mp=function(t,i){var n,o;let s=this.agent,r=s.ctrl,a=r.pos;if(!(s.prop||this.mode==="roof"||this.mode==="ladder"&&(r.climbing||r.elevated))){if(!t&&s.hero.helper&&this.allies){let l=K(this,At,gp).call(this);if(l){this.mode="help",K(this,At,Qs).call(this,l.ctrl.pos.x,l.ctrl.pos.z);return}this.mode==="help"&&(this.mode="wander")}if(t){if(this.mode==="hide"&&this.world.inBush(a.x,a.z,a.y)&&t.target!==s||this.mode==="ladder"&&this.ladder)return;if(i>5&&Math.random()<Ce.bots.roofChance){let h=K(this,At,Uh).call(this,t);if(h){this.mode="ladder",this.ladder=h,this.path=null;return}}let l=Math.random()<Ce.bots.hideChance?K(this,At,Dh).call(this,t):null;if(l){this.mode="hide",K(this,At,Qs).call(this,l.x,l.z);return}this.mode="flee",K(this,At,Qs).call(this,...K(this,At,vp).call(this,t));return}if(this.mode==="flee"&&(this.mode="wander"),this.mode!=="ladder"&&!(this.mode==="hide"&&this.world.inBush(a.x,a.z,a.y))&&(!this.path||!this.path.length)){let l=Math.random();if(l<.1){let v=K(this,At,Uh).call(this,null);if(v){this.mode="ladder",this.ladder=v;return}}let h=((o=(n=this.agent.abilities)==null?void 0:n.game)==null?void 0:o.phase)==="hide";if(this.mode=l<(h?.75:.4)?"hide":"wander",this.mode==="hide"){let v=K(this,At,Dh).call(this,null);if(v)return K(this,At,Qs).call(this,v.x,v.z)}let[u,d]=this.nav.toCell(a.x+(Math.random()-.5)*26,a.z+(Math.random()-.5)*26),[c,p]=this.nav.nearestFree(u,d);K(this,At,Qs).call(this,...this.nav.center(c,p))}}},gp=function(){let t=this.agent.ctrl.pos,i=null,s=Ce.bots.helpRange;for(let r of this.allies()){if(r===this.agent||!r.alive||!this.ghosts||!this.ghosts.some(n=>n.active&&!n.disguised&&n.target===r))continue;let a=r.ctrl.pos.distanceTo(t);a<s&&(s=a,i=r)}return i},Qs=function(t,i){let s=this.agent.ctrl.pos;this.path=this.nav.find(s.x,s.z,t,i)||[[t,i]]},Uh=function(t){let i=this.agent.ctrl.pos,s=null,r=12;for(let a of this.world.ladders){let n=Math.hypot(a.x-i.x,a.z-i.z);n>r||t&&Math.hypot(a.x-t.pos.x,a.z-t.pos.z)<n+2||(r=n,s=a)}return s},vp=function(t){let i=this.agent.ctrl.pos,s=null,r=-1/0;for(let a=0;a<16;a++){let n=a/16*Math.PI*2,o=7+a%2*4,l=i.x+Math.cos(n)*o,h=i.z+Math.sin(n)*o,[u,d]=this.nav.toCell(l,h);if(!this.nav.free(u,d)||!this.nav.clear(i.x,i.z,l,h))continue;let c=Math.hypot(l-i.x,h-i.z),p=Math.hypot(l-t.pos.x,h-t.pos.z),v=p-c,S=this.world.lineOfSight(t.pos.x,t.pos.z,l,h,!1,t.eyeY,1.4)?0:5,m=v*1.2+p*.4+S+Math.random()*1.5;m>r&&(r=m,s=[l,h])}return s||[i.x-(t.pos.x-i.x),i.z-(t.pos.z-i.z)]},Dh=function(t){let i=this.agent.ctrl.pos,s=null,r=-1/0;for(let a of this.world.bushes){let n=Math.hypot(a.x-i.x,a.z-i.z);if(n>20||!t&&n<a.r+1||this.agent.ctrl.radius>a.r*.9)continue;let o=-n;if(t){let l=Math.hypot(a.x-t.pos.x,a.z-t.pos.z);if(l<n+1)continue;o+=l*.8}o>r&&(r=o,s=a)}return s};var yp=()=>Ce.abilities,Oh={moti:[{id:"shelter",key:"1",name:"\u0423\u044E\u0442\u043D\u044B\u0439 \u043F\u0440\u0438\u044E\u0442",icon:"\u{1F6E1}\uFE0F",tag:"\u0417\u0430\u0449\u0438\u0442\u0430",anim:"cast",dur:.9,lock:.7},{id:"light",key:"2",name:"\u0422\u0451\u043F\u043B\u044B\u0439 \u0441\u0432\u0435\u0442",icon:"\u2764\uFE0F",tag:"\u041B\u0435\u0447\u0435\u043D\u0438\u0435",anim:"cast",dur:.8,lock:.5},{id:"wisps",key:"3",name:"\u0414\u0443\u0445\u0438-\u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A\u0438",icon:"\u{1F525}",tag:"\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430",anim:"summon",dur:1,lock:.6},{id:"path",key:"4",name:"\u041F\u0443\u0442\u044C \u0444\u043E\u043D\u0430\u0440\u0435\u0439",icon:"\u{1F43E}",tag:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430",anim:"path",dur:.8,lock:.4},{id:"swing",key:"F",name:"\u0423\u0434\u0430\u0440 \u0444\u043E\u043D\u0430\u0440\u0451\u043C",icon:"\u{1F3EE}",tag:"\u0410\u0442\u0430\u043A\u0430",anim:"swing",dur:.55,lock:0},{id:"wave",key:"G",name:"\u041F\u0440\u0438\u0432\u0435\u0442!",icon:"\u{1F44B}",tag:"\u042D\u043C\u043E\u0446\u0438\u044F",anim:"wave",dur:1.6,lock:0}],kid:[{id:"prop",key:"Q",name:"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430",icon:"\u{1F3AD}",tag:"\u041F\u0440\u044F\u0442\u043A\u0438",anim:"poof",dur:.25,lock:0},{id:"wave",key:"G",name:"\u041F\u0440\u0438\u0432\u0435\u0442!",icon:"\u{1F44B}",tag:"\u042D\u043C\u043E\u0446\u0438\u044F",anim:"wave",dur:1.4,lock:0}],masha:[{id:"prop",key:"Q",name:"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430",icon:"\u{1F3AD}",tag:"\u041F\u0440\u044F\u0442\u043A\u0438",anim:"poof",dur:.25,lock:0},{id:"wave",key:"G",name:"\u041F\u0440\u0438\u0432\u0435\u0442!",icon:"\u{1F44B}",tag:"\u042D\u043C\u043E\u0446\u0438\u044F",anim:"wave",dur:1.4,lock:0}],catbus:[{id:"prop",key:"Q",name:"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430",icon:"\u{1F3AD}",tag:"\u041F\u0440\u044F\u0442\u043A\u0438",anim:"poof",dur:.25,lock:0}]},so,_p,io=class{constructor(t,i){Et(this,so);this.agent=t,this.game=i,this.list=(Oh[t.ctrl.hero.id]||[]).map(s=>({...s,cdLeft:0})),t.action=null}get(t){return this.list.find(i=>i.id===t)}ready(t){let i=this.get(t);return!!i&&i.cdLeft<=0}cooldown(t){var i,s;return(s=(i=yp()[t.id])==null?void 0:i.cd)!=null?s:1}use(t){let i=this.get(t);return!i||i.cdLeft>0||!this.agent.alive||this.agent.action&&this.agent.action.lock>0?!1:(i.cdLeft=this.cooldown(i),this.agent.action={name:i.anim,t:0,dur:i.dur,lock:i.lock,id:i.id,fired:!1},!0)}update(t){for(let r of this.list)r.cdLeft=Math.max(0,r.cdLeft-t);let i=this.agent.action;if(this.agent.ctrl.moveMul=1,!i)return;i.t+=t,i.lock=Math.max(0,i.lock-t),i.lock>0&&(this.agent.ctrl.moveMul=.15);let s=i.name==="swing"?.3:i.name==="wave"?99:i.name==="poof"?0:.45;!i.fired&&i.t/i.dur>=s&&(i.fired=!0,K(this,so,_p).call(this,i.id)),i.t>=i.dur&&(this.agent.action=null)}pose(){let t=this.agent.action;return t?{name:t.name,k:t.t/t.dur}:null}botThink(t,i){var n;let s=this.agent.ctrl,r=this.game,a=s.pos;if(this.get("prop")){let o=this.agent;if(o.prop&&t&&i<Ce.bots.jukeRange+.8){(n=r.toggleProp)==null||n.call(r,o);return}if(!o.prop&&!t&&r.phase==="hide"&&this.ready("prop")&&!s.elevated&&Math.random()<.006)return this.use("prop");if(o.prop)return}for(let o of r.agents){if(o===this.agent||!o.alive)continue;let l=r.ghosts.find(u=>u.active&&u.target===o),h=o.ctrl.pos.distanceTo(a);if(l&&l.pos.distanceTo(a)<16&&this.ready("wisps"))return this.use("wisps");if(l&&h<Ce.abilities.shelter.radius&&l.pos.distanceTo(o.ctrl.pos)<8&&this.ready("shelter"))return this.use("shelter");if(o.ctrl.exhausted&&h<Ce.abilities.light.radius&&this.ready("light"))return this.use("light")}if(t&&i<2.8&&this.ready("swing"))return this.use("swing");if(t&&i<7&&this.ready("shelter"))return this.use("shelter");if(t&&i<16&&this.ready("wisps"))return this.use("wisps");if(s.stamina<.25&&this.ready("light"))return this.use("light");if(t&&i<12&&this.ready("path")&&Math.random()<.02)return this.use("path");if(!t&&this.ready("wave")&&Math.random()<.002)return this.use("wave")}};so=new WeakSet,_p=function(t){var l,h,u,d,c,p;let i=this.game,s=this.agent,r=s.ctrl,a=yp()[t],n=r.pos,o=i.sound;if(t==="prop")(l=i.toggleProp)==null||l.call(i,s);else if(t==="shelter"){let v=lp(i.scene,n.x,n.z,a.radius,a.time);i.addFx(v),i.domes.push(v),setTimeout(()=>{i.domes=i.domes.filter(S=>S!==v)},a.time*1e3),(h=o.chime)==null||h.call(o,[523,784,1046])}else if(t==="light"){i.addFx(to(i.scene,n.x,n.z,a.radius));for(let v of i.agents)!v.alive||v.ctrl.pos.distanceTo(n)>a.radius||(v.ctrl.stamina=1,v.ctrl.exhausted=!1,v.ctrl.boostT=a.boostTime,v.ctrl.boostMul=a.boost);(u=o.chime)==null||u.call(o,[659,880,1318])}else if(t==="wisps"){let v=new I(n.x,n.y+2,n.z);for(let S=0;S<a.count;S++){let m=null;i.addFx(cp(i.scene,v,()=>((!m||!m.active)&&(m=a1(i.ghosts,n,30)),m?m.pos:null),()=>{var f,y;m.slow(a.slow),m.stun(a.stun),(y=(f=i.sound).land)==null||y.call(f,6)},7))}(d=o.chime)==null||d.call(o,[440,660,880])}else if(t==="path"){let v=n1(i.world,i.ghosts,n);if(v){let S=i.navFor(r.radius).find(n.x,n.z,v.x,v.z);S&&i.addFx(up(i.scene,[[n.x,n.z],...S],a.time))}for(let S of i.ghosts)S.state!=="hidden"&&i.addFx(dp(i.scene,()=>S.pos,a.time));(c=o.chime)==null||c.call(o,[392,523,659,784])}else if(t==="swing"){i.addFx(pp(i.scene,n.x,n.y,n.z,r.yaw));let v=Math.sin(r.yaw),S=Math.cos(r.yaw);for(let m of i.ghosts){if(!m.active)continue;let f=m.pos.x-n.x,y=m.pos.z-n.z,b=Math.hypot(f,y);b>a.range+m.radius||(f*v+y*S)/(b||1)<-.2||(m.stun(a.stun),m.knock(f/(b||1),y/(b||1),a.knock),i.cam.shake=Math.max(i.cam.shake,.4))}(p=o.land)==null||p.call(o,12)}};function a1(e,t,i){let s=null,r=i;for(let a of e){if(!a.active)continue;let n=a.pos.distanceTo(t);n<r&&(r=n,s=a)}return s}function n1(e,t,i){let s=null,r=-1/0;for(let a of e.bushes){let n=Math.hypot(a.x-i.x,a.z-i.z),o=40;for(let h of t)h.state!=="hidden"&&(o=Math.min(o,Math.hypot(a.x-h.pos.x,a.z-h.pos.z)));let l=o*1.2-n;l>r&&(r=l,s=a)}return s}var xp=[[-5,19],[5.5,17],[-9,23],[9,21],[-3,14],[3,25]],La=[[0,-21],[-7,-20],[7,-20],[0,-14]],ps,Sp,Mp,Bh,ro=class{constructor(t){Et(this,ps);Object.assign(this,t),this.agents=[],this.domes=[],this.fx=[],this.events=[],this.phase="none",this.activeGhosts=[],this.netIn=new Map}addFx(t){this.fx.push(t)}emit(t,i={}){this.events.push({type:t,...i})}makeAgent(t,i,s,r,a=null,n=null){let o=new jr(t,this.world);o.spawn(s,i||a?Math.PI:Math.random()*Math.PI*2);let l={hero:t,name:n||t.name,ctrl:o,char:this.makeChar(t,r),isPlayer:i,remote:a,alive:!0,hidden:!1,protected:!1,prop:null,skin:r};return l.key=this.keySeq=(this.keySeq||0)+1,l.abilities=new io(l,this),!i&&!a&&(l.brain=new Ia(l,this.world,this.navFor(t.radius)),l.brain.allies=()=>this.agents),this.agents.push(l),l}start(t){this.opts=t,this.mode=t.mode,this.agents=[],this.domes=[],this.caughtOrder=[],this.stats={found:0,chaseCatches:0,pumpkins:0,playerFoundAt:null,playerCaughtInChase:!1},this.player=null,this.playerGhost=null;let i=xp.slice().sort(()=>Math.random()-.5),s=h=>new I(h[0],0,h[1]),r=t.remotes||[],a=r.filter(h=>h.hero.id==="noface");if(t.mode==="play"||t.mode==="hunter"&&r.length){t.mode==="play"&&(this.player=this.makeAgent(t.hero,!0,new I(0,0,22),t.skin)),r.filter(u=>u.hero.id!=="noface").forEach((u,d)=>this.makeAgent(u.hero,!1,new I(-3+d*2,0,23),u.skin,u.id,u.name));let h=new Set([t.hero.id,...r.map(u=>u.hero.id)]);if(t.withBots)for(let u of this.heroes)!h.has(u.id)&&u.bot!==!1&&this.makeAgent(u,!1,s(i.pop()),"classic")}else for(let h of this.heroes)h.bot!==!1&&this.makeAgent(h,!1,s(i.pop()),h.id==="moti"&&t.mSkin||"classic");for(let h of this.ghosts)h.isPlayer=!1,h.remote=null,h.reset(s(La[0]));let n=(t.mode==="hunter"?1:0)+a.length,o=Math.min(this.ghosts.length,Math.max(1,Math.min(3,t.ghosts),n));this.activeGhosts=this.ghosts.slice(0,o),this.activeGhosts.forEach((h,u)=>h.reset(s(La[u])));let l=0;t.mode==="hunter"&&(this.playerGhost=this.activeGhosts[l++],this.playerGhost.isPlayer=!0);for(let h of a){let u=this.activeGhosts[l++];u.remote=h.id,u.remoteName=h.name}this.netIn.clear(),this.setPhase("hide")}setPhase(t){this.phase=t,this.t=0,this.spawned=0,this.duration=t==="hide"?Ce.round.hide:Ce.round.chase}get left(){return Math.max(0,this.duration-this.t)}toggleProp(t){if(t.prop){this.emit("poof",{x:t.ctrl.pos.x,y:t.ctrl.pos.y,z:t.ctrl.pos.z}),t.prop.obj&&this.scene.remove(t.prop.obj),t.prop=null,t.char&&(t.char.root.visible=!0);return}if(t.ctrl.elevated||!t.alive)return;let i=Ps[Math.random()*Ps.length|0],s=this.makeProp(i.id);s&&(s.position.copy(t.ctrl.pos),s.rotation.y=Math.random()*6,this.scene.add(s)),t.prop={kind:i,obj:s},t.char&&(t.char.root.visible=!1),this.emit("poof",{x:t.ctrl.pos.x,y:t.ctrl.pos.y,z:t.ctrl.pos.z,kind:i.name,agent:t})}step(t,i,s=null,r=0){var u;this.t+=t;let a=Ce,n=this.phase==="hide"?a.round.headStart:.3;this.activeGhosts.forEach((d,c)=>{d.state==="hidden"&&this.t>=n+c*(this.phase==="hide"?a.ghost.spawnGap:.4)&&(d.spawn(),this.spawned++,this.emit("ghostSpawn",{i:c,ghost:d}))});let o=this.activeGhosts.filter(d=>d.active);for(let d of this.agents){if(!d.alive)continue;d.abilities.update(t);let c;if(d.isPlayer)c=s||{};else if(d.remote)c=K(this,ps,Bh).call(this,d.remote);else{c=d.brain.update(t,o);let v=d.brain.threat;d.abilities.botThink(v,v?v.pos.distanceTo(d.ctrl.pos):1/0)}d.prop&&(c.dash?this.toggleProp(d):(c={...c,run:!1,jump:!1},d.ctrl.moveMul*=a.abilities.prop.walk)),d.ctrl.update(t,c,d.isPlayer?r:d.remote&&c.camYaw||0),(u=d.prop)!=null&&u.obj&&d.prop.obj.position.copy(d.ctrl.pos);let p=d.ctrl.pos;d.hidden=this.world.inBush(p.x,p.z,p.y)&&!d.ctrl.running||!!d.prop&&d.ctrl.speed<.6,d.protected=this.domes.some(v=>Math.hypot(p.x-v.x,p.z-v.z)<v.r),d.protected&&(d.ctrl.stamina=Math.min(1,d.ctrl.stamina+t*.25))}ep(this.agents);let l=Math.min(1,this.t/this.duration);for(let d of this.activeGhosts){d.speedMul=this.phase==="chase"&&!d.isPlayer&&!d.remote?a.round.chaseBotSpeed:1;let c=d.isPlayer?s||{}:d.remote?K(this,ps,Bh).call(this,d.remote):null;d.update(t,i,this.agents,l,{domes:this.domes},c,d.isPlayer?r:(c==null?void 0:c.camYaw)||0),d.poof&&(d.poof=!1,this.emit("poof",{x:d.pos.x,y:d.pos.y,z:d.pos.z,ghost:d}))}for(let d of this.activeGhosts)for(let c of this.agents)d.catches(c)&&K(this,ps,Sp).call(this,c,d);let h=this.agents.filter(d=>d.alive).length;(this.t>=this.duration||h===0)&&(this.phase==="hide"?K(this,ps,Mp).call(this):this.phase==="chase"&&(this.phase="over",this.emit("end",{result:this.result()})))}convertToBot(t){t.remote=null,t.brain=new Ia(t,this.world,this.navFor(t.hero.radius)),t.brain.allies=()=>this.agents}result(){let t=Ce.round.reward,i=this.agents.filter(r=>r.alive).map(r=>r.name),s=this.stats.pumpkins;return this.mode==="hunter"?s+=this.stats.found*t.found+this.stats.chaseCatches*t.catch:this.mode==="play"&&(this.stats.playerFoundAt===null&&(s+=t.survive),this.playerGhost?s+=this.caughtOrder.filter(r=>r.phase==="chase").length*t.catch:!this.stats.playerCaughtInChase&&this.player&&(s+=t.survive)),{mode:this.mode,alive:i,hideSurvivors:this.hideSurvivors||[],caught:this.caughtOrder.map(r=>r.agent.name),found:this.stats.found,chaseCatches:this.stats.chaseCatches,playerFoundAt:this.stats.playerFoundAt,playerWasGhost:!!this.playerGhost,playerCaughtInChase:this.stats.playerCaughtInChase,earn:s}}};ps=new WeakSet,Sp=function(t,i){t.alive=!1,t.prop&&this.toggleProp(t),t.char&&(t.char.root.visible=!1),i.reveal(),i.stun(Ce.ghost.grab),this.caughtOrder.push({agent:t,phase:this.phase,t:this.t}),this.phase==="hide"?(this.stats.found++,t.isPlayer&&(this.stats.playerFoundAt=this.t)):(this.stats.chaseCatches++,t.isPlayer&&(this.stats.playerCaughtInChase=!0)),this.emit("caught",{agent:t,ghost:i,byPlayer:i.isPlayer,byRemote:i.remote,phase:this.phase})},Mp=function(){var d;let t=(d=this.caughtOrder.find(c=>c.phase==="hide"))==null?void 0:d.agent,i=this.agents.filter(c=>c.alive).map(c=>c.name);this.hideSurvivors=i;let s=c=>new I(c[0],0,c[1]),r=this.playerGhost?this.playerGhost.pos.clone():null,a=this.activeGhosts.filter(c=>c.remote).map(c=>[c.remote,c.remoteName]);for(let c of this.ghosts)c.reveal(),c.reset(s(La[0])),c.isPlayer=!1,c.remote=null;let n=Math.min(this.ghosts.length,Ce.round.chaseGhosts);this.activeGhosts=this.ghosts.slice(0,n);let o=null,l=null;if(this.mode==="hunter")this.playerGhost=this.activeGhosts[0],this.playerGhost.isPlayer=!0,l="\u0442\u044B";else{let c=t||this.agents[Math.random()*this.agents.length|0];o=c,l=c.name,this.agents=this.agents.filter(p=>p!==c),c.prop&&this.toggleProp(c),c.char&&(c.char.root.visible=!1),this.activeGhosts[0].reset(c.ctrl.pos.clone()),c.remote&&(this.activeGhosts[0].remote=c.remote,this.activeGhosts[0].remoteName=c.name),c.isPlayer&&(this.player=null,this.playerGhost=this.activeGhosts[0],this.playerGhost.isPlayer=!0)}this.activeGhosts.forEach((c,p)=>{p>0&&c.reset(s(La[p%La.length]))}),this.mode==="hunter"&&this.playerGhost.reset(r);let h=1;for(let[c,p]of a){for(;h<this.activeGhosts.length&&this.activeGhosts[h].remote;)h++;let v=this.activeGhosts[h++];v&&(v.remote=c,v.remoteName=p)}let u=xp.slice();for(let c of this.agents)c.prop&&this.toggleProp(c),c.alive||(c.alive=!0,c.ctrl.spawn(s(u.pop()||[0,22]),Math.PI),c.char&&(c.char.root.visible=!0)),c.ctrl.stamina=1;this.setPhase("chase"),this.emit("phase",{phase:"chase",newGhostName:l,newGhostIsPlayer:!!this.playerGhost&&this.mode!=="hunter",agent:o}),this.agents.length||(this.phase="over",this.emit("end",{result:this.result()}))},Bh=function(t){let i=this.netIn.get(t);if(!i)return{};let s={...i};return i.jump=!1,i.dash=!1,s};var ni,bp,ao,Tp,Ep,no,oo=class{constructor(){Et(this,ni);this.ctx=null,this.muted=!1}unlock(){if(this.ctx){this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.55,this.master.connect(this.ctx.destination),K(this,ni,bp).call(this))}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.55)}jump(){if(!this.ctx)return;let t=this.ctx,i=t.currentTime,s=t.createOscillator();s.type="triangle",s.frequency.setValueAtTime(320,i),s.frequency.exponentialRampToValueAtTime(640,i+.12);let r=t.createGain();r.gain.setValueAtTime(.12,i),r.gain.exponentialRampToValueAtTime(.001,i+.18),s.connect(r).connect(this.master),s.start(i),s.stop(i+.2)}land(t){if(!this.ctx)return;let i=this.ctx,s=i.currentTime,r=K(this,ni,ao).call(this,.12),a=i.createBiquadFilter();a.type="lowpass",a.frequency.value=500;let n=i.createGain();n.gain.setValueAtTime(Math.min(.25,.05+t*.01),s),n.gain.exponentialRampToValueAtTime(.001,s+.12),r.connect(a).connect(n).connect(this.master),r.start(s)}step(){if(!this.ctx)return;let t=this.ctx,i=t.currentTime,s=K(this,ni,ao).call(this,.05),r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=900+Math.random()*300;let a=t.createGain();a.gain.setValueAtTime(.03,i),a.gain.exponentialRampToValueAtTime(.001,i+.05),s.connect(r).connect(a).connect(this.master),s.start(i)}ghostAppear(){if(!this.ctx)return;let t=this.ctx,i=t.currentTime,s=K(this,ni,ao).call(this,2.4),r=t.createBiquadFilter();r.type="bandpass",r.Q.value=3,r.frequency.setValueAtTime(200,i),r.frequency.exponentialRampToValueAtTime(700,i+1.2),r.frequency.exponentialRampToValueAtTime(150,i+2.3);let a=t.createGain();a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(.35,i+.8),a.gain.linearRampToValueAtTime(0,i+2.4),s.connect(r).connect(a).connect(this.master),s.start(i);for(let[n,o]of[[880,0],[1318,.35],[1046,.7]]){let l=t.createOscillator();l.type="sine",l.frequency.value=n;let h=t.createGain();h.gain.setValueAtTime(0,i+o),h.gain.linearRampToValueAtTime(.08,i+o+.02),h.gain.exponentialRampToValueAtTime(.001,i+o+1.6),l.connect(h).connect(this.master),l.start(i+o),l.stop(i+o+1.7)}}setTension(t){if(!this.ctx)return;this.tension.gain.setTargetAtTime(t*.07,this.ctx.currentTime,.3),this.amb.gain.setTargetAtTime(.05*(1-t*.6),this.ctx.currentTime,.5);let i=this.ctx.currentTime;t>.25&&(!this.nextBeat||i>this.nextBeat)&&(K(this,ni,Ep).call(this,t),this.nextBeat=i+1.1-t*.65)}chime(t){K(this,ni,no).call(this,t,.08,"sine")}win(){K(this,ni,no).call(this,[523,659,784,1046],.12,"triangle")}lose(){K(this,ni,no).call(this,[392,330,262,196],.18,"sine")}};ni=new WeakSet,bp=function(){let t=this.ctx;this.amb=t.createGain(),this.amb.gain.value=.05,this.amb.connect(this.master);for(let a of[110,164.8,220,277.2]){let n=t.createOscillator();n.type="sine",n.frequency.value=a;let o=t.createGain();o.gain.value=.25;let l=t.createOscillator();l.frequency.value=.07+Math.random()*.1;let h=t.createGain();h.gain.value=.2,l.connect(h).connect(o.gain),n.connect(o).connect(this.amb),n.start(),l.start()}let i=()=>{this.ctx&&(this.muted||K(this,ni,Tp).call(this),setTimeout(i,350+Math.random()*1400))};i(),this.tension=t.createGain(),this.tension.gain.value=0,this.tension.connect(this.master);let s=t.createOscillator();s.type="sawtooth",s.frequency.value=55;let r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=220,s.connect(r).connect(this.tension),s.start()},ao=function(t){let i=this.ctx,s=i.createBuffer(1,Math.max(1,i.sampleRate*t),i.sampleRate),r=s.getChannelData(0);for(let n=0;n<r.length;n++)r[n]=Math.random()*2-1;let a=i.createBufferSource();return a.buffer=s,a},Tp=function(){let t=this.ctx,i=t.currentTime;for(let s=0;s<3;s++){let r=t.createOscillator();r.frequency.value=4200+Math.random()*400;let a=t.createGain();a.gain.setValueAtTime(0,i+s*.06),a.gain.linearRampToValueAtTime(.012,i+s*.06+.01),a.gain.linearRampToValueAtTime(0,i+s*.06+.04),r.connect(a).connect(this.master),r.start(i+s*.06),r.stop(i+s*.06+.05)}},Ep=function(t){let i=this.ctx,s=i.currentTime;for(let r of[0,.16]){let a=i.createOscillator();a.type="sine",a.frequency.setValueAtTime(70,s+r),a.frequency.exponentialRampToValueAtTime(40,s+r+.12);let n=i.createGain();n.gain.setValueAtTime(.28*t,s+r),n.gain.exponentialRampToValueAtTime(.001,s+r+.15),a.connect(n).connect(this.master),a.start(s+r),a.stop(s+r+.16)}},no=function(t,i,s){if(!this.ctx)return;let r=this.ctx,a=r.currentTime;t.forEach((n,o)=>{let l=r.createOscillator();l.type=s,l.frequency.value=n;let h=r.createGain();h.gain.setValueAtTime(1e-4,a+o*i),h.gain.linearRampToValueAtTime(.14,a+o*i+.02),h.gain.exponentialRampToValueAtTime(.001,a+o*i+.5),l.connect(h).connect(this.master),l.start(a+o*i),l.stop(a+o*i+.55)})};var Je=e=>document.getElementById(e),wp={kid:"\u{1F431}",masha:"\u{1F9B6}",catbus:"\u{1F408}",moti:"\u{1F6E1}\uFE0F",noface:"\u{1F3AD}"},lo=class{constructor(){this.lastStatus="",this.hintTimer=null}on(t,i){Je(t).addEventListener("click",s=>{s.stopPropagation(),i()})}progress(t,i){document.querySelector(".load-bar i").style.width=Math.round(t*100)+"%",i&&(document.querySelector(".load-text").textContent=i,window.__bootStage=i)}hideLoading(){Je("loading").classList.remove("show")}show(t,i){Je(t).classList.toggle("show",i)}mode(t,i,s="play"){if(this.show("select",t==="select"),this.show("maps",t==="maps"),this.show("lobby",t==="lobby"),document.getElementById("watch-bar").classList.toggle("hidden",!(t==="play"&&s==="watch")),document.getElementById("abil-bar").classList.toggle("hidden",!(t==="play"&&s==="play")),document.querySelector(".hud-left .stamina").classList.toggle("hidden",s==="watch"),this.show("result",t==="result"),this.show("paused",!1),Je("ghost-view").classList.add("hidden"),Je("hud").classList.toggle("hidden",t!=="play"),Je("touch").classList.toggle("hidden",!(t==="play"&&s!=="watch")),Je("touch").classList.toggle("desktop",!i),document.querySelector(".stick-zone").classList.toggle("fixed",!i),Je("alive").classList.toggle("hidden",t!=="play"),t==="play"){let r=Je("hint");r.style.opacity=1,clearTimeout(this.hintTimer),this.hintTimer=setTimeout(()=>r.style.opacity=0,9e3)}}buildCards(t,i,s,r){let a=Je("cards");a.innerHTML="",this.cards=new Map;for(let l of t){let h=document.createElement("button");h.className="card",h.style.backgroundImage=`url(${s[l.id]})`,h.innerHTML=`<div class="c-body"><div class="c-name">${l.name}</div><span class="pill ${l.rarityClass}">${l.rarity}</span><br><span class="c-tag">${wp[l.id]||"\u2726"} ${l.tags[0]}</span></div>`,h.addEventListener("click",()=>r(l.id)),a.appendChild(h),this.cards.set(l.id,h)}let n=document.createElement("button");n.className="card",n.style.backgroundImage=`url(${s[i.id]})`,n.innerHTML=`<span class="c-lock">\u0412\u041E\u0414\u042F\u0429\u0418\u0419</span><div class="c-body"><div class="c-name">${i.name}</div><span class="pill ${i.rarityClass}">${i.rarity}</span><br><span class="c-tag">\u{1F3AD} ${i.tags[0]}</span></div>`,n.addEventListener("click",()=>r(i.id)),a.appendChild(n),this.cards.set(i.id,n);let o=document.createElement("div");o.className="card soon",o.innerHTML='<div class="q">?</div><div class="c-body" style="text-align:center"><div class="c-name">???</div><span class="pill common">\u0421\u041A\u041E\u0420\u041E</span></div>',a.appendChild(o)}onOptions(t,i){this.optCb=t;let s=(r,a,n)=>{let o=Je(r),l=h=>o.querySelectorAll("button").forEach(u=>u.classList.toggle("on",u.dataset.v===String(h)));l(a),o.querySelectorAll("button").forEach(h=>h.addEventListener("click",()=>{l(h.dataset.v),n(h.dataset.v)}))};s("opt-ghosts",i.ghosts,r=>t.ghosts(+r)),s("opt-bots",i.bots?1:0,r=>t.bots(r==="1"))}onAbility(t){this.abilityFn=t}abilityBar(t){let i=Je("abil-bar");i.innerHTML=t.map(s=>`<button class="ab" data-id="${s.id}" title="${s.name}"><i>${s.icon}</i><em>${s.key}</em><s></s><b class="ab-n"></b><small>${s.name}</small></button>`).join(""),i.querySelectorAll(".ab").forEach(s=>{s.addEventListener("mousedown",r=>r.stopPropagation()),s.addEventListener("click",r=>{var a;r.stopPropagation(),(a=this.abilityFn)==null||a.call(this,s.dataset.id)})}),this.abEls=[...i.querySelectorAll(".ab")]}cooldowns(t){if(this.abEls)for(let i of this.abEls){let{k:s=0,n:r=""}=t(i.dataset.id)||{};i.querySelector("s").style.height=(s*100).toFixed(0)+"%",i.classList.toggle("ready",s<=0);let a=i.querySelector(".ab-n");a.textContent!==String(r)&&(a.textContent=r)}}alive(t,i,s="\u0413\u0435\u0440\u043E\u0435\u0432"){Je("alive").textContent=`${s}: ${t}/${i}`}wallet(t){Je("wallet").textContent=t}pumpkins(t){Je("pumpkins").textContent=t}phase(t){let i=Je("phase");i.textContent=t==="chase"?"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438!":"\u041F\u0440\u044F\u0442\u043A\u0438",i.classList.toggle("chase",t==="chase")}mmLabel(t){let i=Je("mm-label");i.innerHTML=t,i.style.opacity=t?1:0}buildMaps(t,i){let s=Je("map-cards");s.innerHTML=t.map(r=>`<button class="map-card ${r.ready?"":"soon"}" data-id="${r.id}"><div class="m-title">${r.icon} ${r.name}</div><div class="m-pic" style="background-image:url(${r.pic})"></div><span class="m-diff ${r.hard?"hard":""}">${r.hard?"\u0421\u043B\u043E\u0436\u043D\u044B\u0439":"\u041E\u0431\u044B\u0447\u043D\u044B\u0439"}</span></button>`).join(""),s.querySelectorAll(".map-card").forEach(r=>r.addEventListener("click",()=>i(r.dataset.id)))}pickMap(t){document.querySelectorAll(".map-card").forEach(i=>i.classList.toggle("active",i.dataset.id===t))}minimapInit(t,i){let s=Je("minimap"),r=s.getContext("2d");this.mm={c:s,x:r,half:i,bg:document.createElement("canvas")};let a=this.mm.bg;a.width=a.height=300;let n=a.getContext("2d"),o=300/(i*2),l=h=>(h+i)*o;n.fillStyle="#6b5436",n.fillRect(0,0,300,300),n.fillStyle="#8a6d45",n.fillRect(l(-1.7),0,3.4*o,300),n.fillRect(0,l(-1.6),300,3.2*o),n.fillStyle="#3f6a3a";for(let h of t.bushes)n.beginPath(),n.arc(l(h.x),l(h.z),h.r*o,0,7),n.fill();n.fillStyle="#2b1a10";for(let h of t.boxes)h.top>1.2&&h.bottom<1&&n.fillRect(l(h.minX),l(h.minZ),(h.maxX-h.minX)*o,(h.maxZ-h.minZ)*o);n.fillStyle="#243a22";for(let h of t.circles)h.top>3&&(n.beginPath(),n.arc(l(h.x),l(h.z),Math.max(1.5,h.r*o),0,7),n.fill())}minimap(t,i,s){if(!this.mm)return;let{c:r,x:a,half:n,bg:o}=this.mm,l=300/(n*2),h=2.3;a.save(),a.clearRect(0,0,300,300),a.beginPath(),a.arc(150,150,150,0,7),a.clip(),a.translate(150,150),a.rotate(i),a.scale(h,h),a.translate(-(t.x+n)*l,-(t.z+n)*l),a.drawImage(o,0,0);for(let u of s){let d=(u.x+n)*l,c=(u.z+n)*l;if(u.kind==="pumpkin"){a.fillStyle="#ffa23a",a.beginPath(),a.arc(d,c,2.2,0,7),a.fill();continue}a.fillStyle=u.kind==="me"?"#ff8a3a":u.kind==="ghost"?"#b07aff":"#ffffff",a.strokeStyle="#2a170b",a.lineWidth=1,a.beginPath(),a.arc(d,c,u.kind==="me"?4.5:3.2,0,7),a.fill(),a.stroke()}a.restore()}toast(t){let i=Je("toast");i.textContent=t,i.classList.remove("on"),i.offsetWidth,i.classList.add("on")}buildCreator(t,i,s){let r=Je("creator"),a=(n,o,l,h)=>`<div class="cr-row"><span>${o}</span><div class="cr-opts" data-k="${n}">${l.map(([u,d])=>h?`<button data-v="${u}" class="sw ${t[n]===u?"on":""}" style="--c:${u}"></button>`:`<button data-v="${u}" class="${t[n]===u?"on":""}">${d}</button>`).join("")}</div></div>`;r.innerHTML=a("gender","\u041A\u0442\u043E",i.gender)+a("hairStyle","\u041F\u0440\u0438\u0447\u0451\u0441\u043A\u0430",i.hairStyle[t.gender])+a("hair","\u0412\u043E\u043B\u043E\u0441\u044B",i.hair.map(n=>[n,n]),!0)+a("sweater","\u0421\u0432\u0438\u0442\u0435\u0440",i.sweater.map(n=>[n,n]),!0)+a("emblem","\u0417\u043D\u0430\u0447\u043E\u043A",i.emblem)+a("ears","\u0423\u0448\u043A\u0438 \u043A\u043E\u0442\u0438\u043A\u0430",i.ears)+a("tail","\u0425\u0432\u043E\u0441\u0442\u0438\u043A",i.tail),r.querySelectorAll(".cr-opts button").forEach(n=>n.addEventListener("click",()=>s(n.parentElement.dataset.k,n.dataset.v)))}showHero(t,i){var a;Je("creator").classList.toggle("hidden",!t.custom),document.querySelector(".sel-info").classList.toggle("custom",!!t.custom);let s=Je("skins");s.classList.toggle("hidden",!t.skins),t.skins&&(s.innerHTML=Object.entries(t.skins).map(([n,o])=>`<button data-s="${n}" class="${n===i?"on":""}" style="--c:#${o.hat.toString(16).padStart(6,"0")}">${o.name}</button>`).join(""),s.querySelectorAll("button").forEach(n=>n.addEventListener("click",()=>{var o;return(o=this.optCb)==null?void 0:o.skin(n.dataset.s)}))),Je("hero-name").innerHTML=`${t.name} <span class="paw">\u{1F43E}</span>`;let r=Je("hero-rarity");r.textContent=t.rarity,r.className="pill "+t.rarityClass,Je("hero-about").textContent=t.about,Je("hero-ab").textContent=t.ability,Je("hero-ab-text").textContent=t.abilityText,Je("hero-ab-icon").textContent=wp[t.id]||"\u2726",Je("hero-tags").innerHTML=t.tags.map(n=>`<span class="tag">${n}</span>`).join(""),(a=this.cards)==null||a.forEach((n,o)=>n.classList.toggle("active",o===t.id))}status(t,i){let s=t+i;if(s===this.lastStatus)return;this.lastStatus=s;let r=Je("status");r.textContent=t,r.className="status "+(i||"")}hud({left:t,stamina:i,tired:s,hidden:r}){let a=Math.ceil(t),n=`${String(Math.floor(a/60)).padStart(2,"0")}:${String(a%60).padStart(2,"0")}`,o=Je("timer");o.textContent!==n&&(o.textContent=n,o.parentElement.classList.toggle("warn",a<=10));let l=Je("stamina");l.style.width=(i*100).toFixed(1)+"%",l.classList.toggle("tired",!!s),Je("hidden-badge").classList.toggle("on",!!r)}vignette(t){Je("vignette").style.opacity=t.toFixed(2)}setShield(t){let i=Je("shield");i.classList.toggle("hidden",t===null),i.classList.toggle("used",t===0)}setMute(t){Je("btn-mute").textContent=t?"\u{1F507}":"\u{1F50A}"}result(t){let i=Je("res-earn");i.textContent=t.earn?`+${t.earn} \u{1F383} \u0442\u044B\u043A\u043E\u0432\u043E\u043A`:"";let s=a=>a.join(", ");if(t.mode==="watch"){Je("res-emoji").textContent=t.alive.length?"\u{1F3EE}":"\u{1F47A}",Je("res-title").textContent=t.alive.length?"\u0420\u0430\u0441\u0441\u0432\u0435\u0442!":"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u043F\u043E\u0439\u043C\u0430\u043B\u0438 \u0432\u0441\u0435\u0445",Je("res-text").textContent=`\u041F\u043E\u0441\u043B\u0435 \u043F\u0440\u044F\u0442\u043E\u043A \u043E\u0441\u0442\u0430\u043B\u0438\u0441\u044C: ${s(t.hideSurvivors)||"\u043D\u0438\u043A\u0442\u043E"}. \u041F\u043E\u0441\u043B\u0435 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043E\u043A: ${s(t.alive)||"\u043D\u0438\u043A\u0442\u043E"}.`;return}if(t.mode==="hunter"||t.playerWasGhost){let a=t.found+t.chaseCatches;Je("res-emoji").textContent=a?"\u{1F3AD}":"\u{1F319}",Je("res-title").textContent=t.mode==="hunter"?t.alive.length?"\u041A\u0442\u043E-\u0442\u043E \u0443\u0441\u043A\u043E\u043B\u044C\u0437\u043D\u0443\u043B!":"\u0422\u044B \u043D\u0430\u0448\u0451\u043B \u0432\u0441\u0435\u0445!":t.alive.length?"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438 \u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C":"\u0422\u044B \u0434\u043E\u0433\u043D\u0430\u043B \u0432\u0441\u0435\u0445!",Je("res-text").textContent=t.mode==="hunter"?`\u0412 \u043F\u0440\u044F\u0442\u043A\u0430\u0445 \u043D\u0430\u0448\u0451\u043B: ${t.found}. \u0412 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0430\u0445 \u043F\u043E\u0439\u043C\u0430\u043B: ${t.chaseCatches}.${t.alive.length?` \u0421\u043F\u0430\u0441\u043B\u0438\u0441\u044C: ${s(t.alive)}.`:""}`:`\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438 \u043F\u0435\u0440\u0432\u044B\u043C \u2014 \u0438 \u0442\u044B \u0441\u0442\u0430\u043B \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u043C! \u0412 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0430\u0445 \u043F\u043E\u0439\u043C\u0430\u043D\u043E: ${t.chaseCatches}.`;return}let r=!t.playerCaughtInChase;Je("res-emoji").textContent=r?"\u{1F3EE}":"\u{1F47A}",Je("res-title").textContent=r?"\u0422\u044B \u043F\u0440\u043E\u0434\u0435\u0440\u0436\u0430\u043B\u0441\u044F!":"\u0422\u0435\u0431\u044F \u0434\u043E\u0433\u043D\u0430\u043B\u0438",Je("res-text").textContent=(t.playerFoundAt===null?"\u0412 \u043F\u0440\u044F\u0442\u043A\u0430\u0445 \u0442\u0435\u0431\u044F \u0442\u0430\u043A \u0438 \u043D\u0435 \u043D\u0430\u0448\u043B\u0438! ":"\u0412 \u043F\u0440\u044F\u0442\u043A\u0430\u0445 \u0442\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438. ")+(r?"\u0418 \u0432 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0430\u0445 \u0442\u044B \u0443\u0431\u0435\u0436\u0430\u043B \u043E\u0442 \u0432\u0441\u0435\u0445 \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u0432.":"\u041F\u0440\u044F\u0447\u044C\u0441\u044F \u0432 \u0434\u043E\u043C\u0430\u0445, \u0437\u0430 \u0448\u0438\u0440\u043C\u0430\u043C\u0438 \u0438 \u043D\u0430 \u043A\u0440\u044B\u0448\u0430\u0445, \u043F\u0440\u0438\u0441\u0435\u0434\u0430\u0439 \u0437\u0430 \u044F\u0449\u0438\u043A\u0430\u043C\u0438.")}};var Cp="masha-game-physics-v2",Pp=[["walk","\u0428\u0430\u0433, \u043C/\u0441",2,10,.1],["run","\u0411\u0435\u0433, \u043C/\u0441",4,16,.1],["accel","\u0420\u0430\u0437\u0433\u043E\u043D",5,120,1],["decel","\u0422\u043E\u0440\u043C\u043E\u0436\u0435\u043D\u0438\u0435",5,120,1],["air","\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u0432\u043E\u0437\u0434\u0443\u0445\u0435",0,40,1],["jump","\u041F\u0440\u044B\u0436\u043E\u043A, \u043C",.5,4,.05],["gravity","\u0422\u044F\u0436\u0435\u0441\u0442\u044C \xD7",.4,2.5,.05],["turn","\u041F\u043E\u0432\u043E\u0440\u043E\u0442",2,30,.5],["stamina","\u0411\u0435\u0433 \u0431\u0435\u0437 \u043E\u0442\u0434\u044B\u0445\u0430, \u0441",1,15,.5],["regen","\u041E\u0442\u0434\u044B\u0445 (\u0434\u043E\u043B\u044F/\u0441)",.05,.6,.01],["mass","\u0412\u0435\u0441 \u043F\u0440\u0438 \u0442\u043E\u043B\u043A\u0430\u043D\u0438\u0438",.3,6,.1],["reach","\u0414\u043E\u0442\u044F\u0433\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0434\u043E \u0443\u0441\u0442\u0443\u043F\u0430, \u043C",0,2.5,.05],["climb","\u041B\u0435\u0437\u0435\u0442 \u043F\u043E \u043B\u0435\u0441\u0442\u043D\u0438\u0446\u0435, \u043C/\u0441",0,6,.1],["dash.mul","\u0420\u044B\u0432\u043E\u043A: \u0441\u0438\u043B\u0430 \xD7",1,2.5,.05],["dash.time","\u0420\u044B\u0432\u043E\u043A: \u0434\u043B\u0438\u0442\u0441\u044F, \u0441",.1,1.5,.05],["dash.cooldown","\u0420\u044B\u0432\u043E\u043A: \u043F\u0435\u0440\u0435\u0437\u0430\u0440\u044F\u0434\u043A\u0430, \u0441",.5,12,.5]],o1=[...Pp.filter(([e])=>!["jump","reach","climb","dash.cooldown"].includes(e)),["dash.charges","\u0420\u044B\u0432\u043A\u043E\u0432 \u0432 \u0437\u0430\u043F\u0430\u0441\u0435",1,6,1],["dash.recharge","\u041D\u043E\u0432\u044B\u0439 \u0440\u044B\u0432\u043E\u043A \u043A\u043E\u043F\u0438\u0442\u0441\u044F, \u0441",2,30,1],["fly.speed","\u041F\u0430\u0440\u0438\u0442 \u0432\u0432\u0435\u0440\u0445, \u043C/\u0441",.5,6,.1],["fly.time","\u041F\u0430\u0440\u0438\u0442 \u0431\u0435\u0437 \u043E\u0442\u0434\u044B\u0445\u0430, \u0441",.5,6,.1]],l1=[["sightRange","\u0412\u0438\u0434\u0438\u0442 \u043D\u0430, \u043C",5,40,1],["hearRunRange","\u0421\u043B\u044B\u0448\u0438\u0442 \u0431\u0435\u0433 \u043D\u0430, \u043C",0,20,.5],["loseSightTime","\u0422\u0435\u0440\u044F\u0435\u0442 \u0438\u0437 \u0432\u0438\u0434\u0443 \u0437\u0430, \u0441",.5,6,.1],["catchRadius","\u0420\u0430\u0434\u0438\u0443\u0441 \u043F\u043E\u0438\u043C\u043A\u0438, \u043C",.5,2.5,.05],["burstRange","\u0420\u044B\u0432\u043E\u043A \u0441 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u044F (\u0431\u043E\u0442), \u043C",2,15,.5],["lateBoost","\u0411\u044B\u0441\u0442\u0440\u0435\u0435 \u043A \u043A\u043E\u043D\u0446\u0443 \u0440\u0430\u0443\u043D\u0434\u0430 (\u0434\u043E\u043B\u044F)",0,.4,.01],["spawnGap","\u0412\u044B\u0445\u043E\u0434\u044F\u0442 \u0441 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u043E\u043C, \u0441",0,15,1],["disguise.time","\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u0434\u043B\u0438\u0442\u0441\u044F, \u0441",2,20,.5],["disguise.cd","\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u0435\u0440\u0435\u0437\u0430\u0440\u044F\u0434\u043A\u0430, \u0441",4,40,1]],h1=[["gravity","\u0413\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u044F",10,60,1],["stepHeight","\u0421\u0442\u0443\u043F\u0435\u043D\u044C\u043A\u0430 \u0431\u0435\u0437 \u043F\u0440\u044B\u0436\u043A\u0430, \u043C",.1,1,.05],["pushStrength","\u0422\u043E\u043B\u043A\u0430\u043D\u0438\u0435 \u0433\u0435\u0440\u043E\u0435\u0432",0,1.5,.05]],Fh=(e,t)=>t.split(".").reduce((i,s)=>i[s],e),c1=(e,t,i)=>{let s=t.split("."),r=s.pop();s.reduce((a,n)=>a[n],e)[r]=i};function Ip(){var e;try{let t=JSON.parse(localStorage.getItem(Cp)||"null");if(!t)return;for(let i of Object.keys(Ce.heroes))(e=t.heroes)!=null&&e[i]&&er(Ce.heroes[i],t.heroes[i]);t.ghost&&er(Ce.ghost,t.ghost),t.world&&er(Ce.world,t.world)}catch{}}function er(e,t){for(let i of Object.keys(t))typeof t[i]=="object"&&t[i]&&typeof e[i]=="object"?er(e[i],t[i]):typeof t[i]==typeof e[i]&&(e[i]=t[i])}function Ap(){try{localStorage.setItem(Cp,JSON.stringify({heroes:Ce.heroes,ghost:Ce.ghost,world:Ce.world}))}catch{}}var _i,ho,Lp,Np,zh,co=class{constructor(t,i){Et(this,_i);this.heroes=t,this.getCurrentHero=i,this.el=document.getElementById("tuner"),this.tab=null,this.el.querySelector(".tn-close").addEventListener("click",()=>this.toggle(!1)),this.el.querySelector(".tn-copy").addEventListener("click",()=>K(this,_i,Lp).call(this)),this.el.querySelector(".tn-reset").addEventListener("click",()=>K(this,_i,Np).call(this));for(let s of["keydown","mousedown","touchstart","pointerdown","wheel"])this.el.addEventListener(s,r=>r.stopPropagation());addEventListener("keydown",s=>{(s.code==="F2"||s.code==="Backquote")&&(s.preventDefault(),this.toggle())})}get open(){return this.el.classList.contains("show")}toggle(t=!this.open){this.el.classList.toggle("show",t),t&&K(this,_i,ho).call(this,this.tab||this.getCurrentHero()),t&&document.pointerLockElement&&document.exitPointerLock()}};_i=new WeakSet,ho=function(t){this.tab=t;let i=this.el.querySelector(".tn-tabs"),s=[...this.heroes.map(l=>[l.id,l.name]),["noface","\u0411\u0435\u0437\u043B\u0438\u043A"],["ghost","\u0427\u0443\u0442\u044C\u0451 \u0411\u0435\u0437\u043B\u0438\u043A\u0430"],["world","\u041C\u0438\u0440"]];i.innerHTML=s.map(([l,h])=>`<button data-t="${l}" class="${l===t?"on":""}">${h}</button>`).join(""),i.querySelectorAll("button").forEach(l=>l.addEventListener("click",()=>K(this,_i,ho).call(this,l.dataset.t)));let[r,a,n]=t==="ghost"?[Ce.ghost,l1,Js.ghost]:t==="world"?[Ce.world,h1,Js.world]:[Ce.heroes[t],t==="noface"?o1:Pp,Js.heroes[t]],o=this.el.querySelector(".tn-fields");o.innerHTML=a.map(([l,h,u,d,c])=>{let p=Fh(r,l),v=Fh(n,l);return`<label class="${p!==v?"changed":""}"><span>${h}</span><input type="range" min="${u}" max="${d}" step="${c}" value="${p}" data-k="${l}"><b>${Rp(p)}</b></label>`}).join(""),o.querySelectorAll("input").forEach(l=>l.addEventListener("input",()=>{let h=parseFloat(l.value);c1(r,l.dataset.k,h),l.nextElementSibling.textContent=Rp(h),l.parentElement.classList.toggle("changed",h!==Fh(n,l.dataset.k)),Ap()}))},Lp=function(){var r;let t=this.tab,i=t==="ghost"?Ce.ghost:t==="world"?Ce.world:Ce.heroes[t],s=`${t}: ${JSON.stringify(i).replace(/"(\w+)":/g,"$1: ").replace(/,/g,", ")},`;(r=navigator.clipboard)==null||r.writeText(s).then(()=>K(this,_i,zh).call(this,"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u2014 \u0432\u0441\u0442\u0430\u0432\u044C \u0432 config.js"),()=>prompt("\u0421\u043A\u043E\u043F\u0438\u0440\u0443\u0439:",s))},Np=function(){let t=this.tab;t==="ghost"?er(Ce.ghost,Js.ghost):t==="world"?er(Ce.world,Js.world):er(Ce.heroes[t],Js.heroes[t]),Ap(),K(this,_i,ho).call(this,t),K(this,_i,zh).call(this,"\u0412\u0435\u0440\u043D\u0443\u043B \u043A\u0430\u043A \u0431\u044B\u043B\u043E")},zh=function(t){let i=this.el.querySelector(".tn-flash");i.textContent=t,i.classList.add("on"),setTimeout(()=>i.classList.remove("on"),1600)};var Rp=e=>Math.abs(e)>=10?e.toFixed(0):e.toFixed(2).replace(/0$/,"");function Up(e){var c;let s=new Gn({antialias:!0,preserveDrawingBuffer:!0});s.setSize(240,320,!1),s.setPixelRatio(1),s.toneMapping=Dr,s.toneMappingExposure=1.2;let r=new On,a=document.createElement("canvas");a.width=8,a.height=256;let n=a.getContext("2d"),o=n.createLinearGradient(0,0,0,256);o.addColorStop(0,"#1a1a4a"),o.addColorStop(.6,"#3a2e6a"),o.addColorStop(1,"#2a1b2e"),n.fillStyle=o,n.fillRect(0,0,8,256),r.background=new As(a),r.background.colorSpace=Zt,r.add(new Fn(10134783,2758704,1.3));let l=new zn(16769720,2.2);l.position.set(2,4,5),r.add(l);let h=new zr(16752720,20,12);h.position.set(-2.5,2.5,-1.5),r.add(h);let u=new Kt(32,240/320,.1,50),d={};for(let p of e){let v=p.build();v.update(.016,{t:1,speed:0,grounded:!0,landed:!1,mode:"search",appear:1}),v.root.rotation.y=p.id==="catbus"?.75:.35,r.add(v.root);let S=p.height,m=S*2.5+(p.id==="catbus"?1.6:.5);u.position.set(0,S*.6,m),u.lookAt(0,S*.4,0),s.render(r,u),d[p.id]=s.domElement.toDataURL("image/jpeg",.85),r.remove(v.root)}return s.dispose(),(c=s.forceContextLoss)==null||c.call(s),d}var qr,uo,Na=class{constructor(){Et(this,qr);this.ws=null,this.id=null,this.host=null,this.players=[],this.handlers=new Map,this.code=null,this.heartbeat=null}get isHost(){return!!this.id&&this.id===this.host}get connected(){var t;return((t=this.ws)==null?void 0:t.readyState)===1}on(t,i){(this.handlers.get(t)||this.handlers.set(t,[]).get(t)).push(i)}static newCode(){let t="ABCDEFGHJKLMNPRSTUVWXYZ23456789";return Array.from({length:4},()=>t[Math.random()*t.length|0]).join("")}connect(t,i){return this.code=t.toUpperCase(),this.hello=i,new Promise(s=>{let r=!1,a=l=>{r||(r=!0,s(l))},n;try{n=new WebSocket(`${location.protocol==="https:"?"wss":"ws"}://${location.host}/room/${this.code}`)}catch{return a(!1)}this.ws=n;let o=setTimeout(()=>{a(!1);try{n.close()}catch{}},6e3);n.onmessage=l=>{let h;try{h=JSON.parse(l.data)}catch{return}h.t==="welcome"&&(this.id=h.id,clearTimeout(o),this.send({t:"hello",...this.hello}),clearInterval(this.heartbeat),this.heartbeat=setInterval(()=>this.send({t:"ping"}),25e3),a(!0)),h.t==="lobby"&&(this.players=h.players,this.host=h.host),K(this,qr,uo).call(this,h.t,h),K(this,qr,uo).call(this,"*",h)},n.onclose=()=>{clearTimeout(o),clearInterval(this.heartbeat),this.heartbeat=null,a(!1),this.ws===n&&(this.ws=null,K(this,qr,uo).call(this,"close",{}))},n.onerror=()=>{}})}send(t){this.connected&&this.ws.send(JSON.stringify(t))}update(t){this.hello={...this.hello,...t},this.send({t:"hello",...this.hello})}leave(){let t=this.ws;clearInterval(this.heartbeat),this.heartbeat=null,this.ws=null,this.id=null,this.host=null,this.players=[],this.code=null;try{t==null||t.close()}catch{}}name(t){var i;return((i=this.players.find(s=>s.id===t))==null?void 0:i.name)||"\u0418\u0433\u0440\u043E\u043A"}};qr=new WeakSet,uo=function(t,i){for(let s of this.handlers.get(t)||[])s(i)};var jt=e=>Math.round(e*100)/100,Dp=Ps.map(e=>e.id);function kh(e){return e.agents.map(t=>({k:t.key,hero:t.hero.id,skin:t.skin,name:t.name,pid:t.isPlayer?"host":t.remote||null}))}function Op(e){let t=e.agents.map(s=>{let r=s.ctrl,a=s.action;return[s.key,jt(r.pos.x),jt(r.pos.y),jt(r.pos.z),jt(r.yaw),jt(r.speed),r.grounded?1:0,jt(r.vel.y),r.running||r.dashT>0?1:0,r.crouching?1:0,s.alive?1:0,s.prop?Dp.indexOf(s.prop.kind.id)+1:0,a?a.name:0,a?jt(a.t/a.dur):0,s.hidden?1:0,jt(r.stamina),r.exhausted?1:0,jt(r.dashCd/r.phys.dash.cooldown)]}),i=e.activeGhosts.map((s,r)=>{let a=s.disguise;return[r,jt(s.pos.x),jt(s.pos.y),jt(s.pos.z),jt(s.yaw),s.state==="hidden"?0:s.state==="appear"?1:2,jt(s.appear),s.state==="hunt"?1:0,jt(s.ctrl.speed),s.stunT>0?1:0,a!=null&&a.hero?a.hero.id:0,a!=null&&a.prop?a.prop.id:0,s.isPlayer?"host":s.remote||0,jt(s.ctrl.stamina),s.ctrl.dashCharges,jt(s.ctrl.flyEnergy),jt(s.disguiseCd)]});return{t:"s",ph:e.phase,left:jt(e.left),sp:e.spawned,a:t,g:i}}var po=class{constructor(t){this.env=t,this.agents=new Map,this.snap=null,this.ghostDz=new Map}setRoster(t){let i=new Set(t.map(s=>s.k));for(let[s,r]of this.agents)i.has(s)||(this.env.scene.remove(r.char.root),r.propObj&&this.env.scene.remove(r.propObj),this.agents.delete(s));for(let s of t){if(this.agents.has(s.k))continue;let r=this.env.heroes.find(n=>n.id===s.hero)||this.env.heroes[0],a=this.env.acquire(r,s.skin);this.agents.set(s.k,{def:r,char:a,name:s.name,pid:s.pid,pos:null,yaw:0,s:null,propObj:null,propKind:0})}}apply(t){this.snap=t;for(let i of t.a){let s=this.agents.get(i[0]);s&&(s.s=i)}}me(t){var s;for(let r of this.agents.values())if(r.pid===t&&r.s&&r.s[10])return{kind:"agent",v:r,pos:r.pos||new I(r.s[1],r.s[2],r.s[3])};let i=(s=this.snap)==null?void 0:s.g.find(r=>r[12]===t);return i?{kind:"ghost",g:i,pos:this.env.ghosts[i[0]].root.position}:null}render(t,i){var a;let s=1-Math.exp(-t*14);for(let n of this.agents.values()){let o=n.s;if(!o){n.char.root.visible=!1;continue}let l=new I(o[1],o[2],o[3]);!n.pos||n.pos.distanceTo(l)>6?n.pos=l.clone():n.pos.lerp(l,s),n.yaw+=Math.atan2(Math.sin(o[4]-n.yaw),Math.cos(o[4]-n.yaw))*s;let h=!!o[10],u=o[11];u!==n.propKind&&(n.propObj&&(this.env.scene.remove(n.propObj),n.propObj=null),u&&(n.propObj=$s(Dp[u-1]),n.propObj.rotation.y=Math.random()*6,this.env.scene.add(n.propObj)),n.propKind=u),n.propObj&&(n.propObj.position.copy(n.pos),n.propObj.visible=h);let d=n.char.root;d.visible=h&&!u,d.position.copy(n.pos),d.rotation.y=n.yaw,d.scale.y+=((o[9]?.62:1)-d.scale.y)*Math.min(1,t*14),n.char.update(t,{t:i,speed:o[5],grounded:!!o[6],vy:o[7],running:!!o[8],landed:!1,landSpeed:0,crouch:!!o[9],action:o[12]?{name:o[12],k:o[13]}:null})}let r=((a=this.snap)==null?void 0:a.g)||[];this.env.ghosts.forEach((n,o)=>{let l=r.find(c=>c[0]===o),h=l&&l[5]!==0,u=l&&(l[10]?"hero:"+l[10]:l[11]?"prop:"+l[11]:null);for(let[c,p]of this.ghostDz)c.endsWith("#"+o)&&c!==u+"#"+o&&(p.root.visible=!1);if(n.root.visible=!!h&&!u,!l)return;let d=new I(l[1],l[2],l[3]);if(n.root.position.distanceTo(d)>6?n.root.position.copy(d):n.root.position.lerp(d,s),n.root.rotation.y+=Math.atan2(Math.sin(l[4]-n.root.rotation.y),Math.cos(l[4]-n.root.rotation.y))*s,h&&!u&&n.char.update(t,{t:i,speed:l[8],mode:l[7]?"hunt":"search",appear:l[5]===1?l[6]:1,stunned:!!l[9]}),h&&u){let c=u+"#"+o,p=this.ghostDz.get(c);p||(l[10]?p=this.env.heroes.find(S=>S.id===l[10]).build("classic"):p={root:$s(l[11]),update(){}},this.env.scene.add(p.root),this.ghostDz.set(c,p)),p.root.visible=!0,p.root.position.copy(n.root.position),l[10]&&(p.root.rotation.y=n.root.rotation.y),p.update(t,{t:i,speed:l[8],grounded:!0,vy:0,running:l[8]>6,landed:!1})}})}clear(){for(let t of this.agents.values())this.env.scene.remove(t.char.root),t.propObj&&this.env.scene.remove(t.propObj);this.agents.clear();for(let t of this.ghostDz.values())this.env.scene.remove(t.root);this.ghostDz.clear(),this.env.ghosts.forEach(t=>{t.root.visible=!1}),this.snap=null}};var es=e=>document.getElementById(e),Bp="masha-game-name",u1={kid:"\u{1F431}",masha:"\u{1F9B6}",catbus:"\u{1F408}",moti:"\u{1F6E1}\uFE0F",noface:"\u{1F3AD}"},Fp=e=>ai.find(t=>t.id===e)||(e===Vt.id?Vt:ai[0]),Ot,zp,kp,Hp,Gp,Vp,Ua,Wp,jp,fo=class{constructor(t){Et(this,Ot);this.g=t,this.net=new Na,this.sendT=0,this.inT=0,this.latch={jump:!1,dash:!1},this.guest=null,K(this,Ot,zp).call(this)}get inRoom(){return!!this.net.code&&this.net.connected}get isHost(){return this.inRoom&&this.net.isHost}get isGuestPlaying(){return!!this.guest}get myName(){try{return localStorage.getItem(Bp)||""}catch{return""}}hello(){let t=this.g.hero;return{name:this.myName||"\u0418\u0433\u0440\u043E\u043A",hero:t.id,skin:t.custom?JSON.stringify(this.g.look):this.g.skin}}get url(){return`${location.origin}${location.pathname}?room=${this.net.code}`}async createRoom(){return this.join(Na.newCode())}async join(t){let i=this.g.ui;if(i.toast("\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u0441\u044F \u043A \u043A\u043E\u043C\u043D\u0430\u0442\u0435\u2026"),!await this.net.connect(t,this.hello()))return i.toast("\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F. \u0421\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u0430\u044F \u0438\u0433\u0440\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0430 \u0430\u0434\u0440\u0435\u0441\u0435 \u0438\u0433\u0440\u044B \u0432 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0435."),!1;try{history.replaceState(null,"",`?room=${this.net.code}`)}catch{}return this.showLobby(),!0}leave(){this.isHost&&this.g.state==="play"&&this.net.send({t:"lobbyBack"}),this.net.leave(),K(this,Ot,Ua).call(this);try{history.replaceState(null,"",location.pathname)}catch{}this.g.toSelect()}showLobby(){let t=this.g;this.isHost&&["play","result"].includes(t.state)&&this.net.send({t:"lobbyBack"}),t.state="lobby",t.input.enabled=!1,t.input.releasePointer(),t.ui.mode("lobby",!0),this.net.update(this.hello()),es("lb-code").textContent=this.net.code,es("lb-url").value=this.url,K(this,Ot,kp).call(this),this.renderLobby()}renderLobby(){var l;let t=this.net,i=t.host;es("lb-count").textContent=`${t.players.length}/8`,es("lb-players").innerHTML=t.players.map(h=>`<div class="lb-p ${h.id===t.id?"me":""}"><span class="ic">${u1[h.hero]||"\u{1F43E}"}</span><span class="nm">${d1(h.name)}${h.id===i?" \u{1F451}":""}</span><span class="hr">${Fp(h.hero).name}</span></div>`).join("");let s={};for(let h of t.players)s[h.vote]=(s[h.vote]||0)+1;let r=this.g.maps,a=es("lb-maps");a.innerHTML=r.map(h=>`<button class="map-card ${h.ready?"":"soon"}" data-id="${h.id}"><div class="m-title">${h.icon} ${h.name}</div><div class="m-pic" style="background-image:url(${h.pic})"></div><span class="m-diff ${h.hard?"hard":""}">${h.hard?"\u0421\u043B\u043E\u0436\u043D\u044B\u0439":"\u041E\u0431\u044B\u0447\u043D\u044B\u0439"}</span><div class="m-votes">${"\u{1F43E}".repeat(s[h.id]||0)}</div></button>`).join("");let n=(l=t.players.find(h=>h.id===t.id))==null?void 0:l.vote;a.querySelectorAll(".map-card").forEach(h=>{h.classList.toggle("active",h.dataset.id===n),h.addEventListener("click",()=>{let u=r.find(d=>d.id===h.dataset.id);if(!u.ready){this.g.ui.toast(`\xAB${u.name}\xBB \u0441\u043A\u043E\u0440\u043E \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F!`);return}t.send({t:"vote",map:u.id})})});let o=t.isHost;es("lb-start").classList.toggle("hidden",!o),es("lb-wait").classList.toggle("hidden",o)}remotes(){return this.isHost?this.net.players.filter(t=>t.id!==this.net.id).map(t=>({id:t.id,name:t.name,hero:Fp(t.hero),skin:t.skin})):[]}hostStart(){if(!this.isHost)return;let t=this.g;t.beginRound(t.hero.id===Vt.id?"hunter":"play")}hostStarted(){if(!this.isHost)return;let t=this.g.round;t.player&&(t.player.name=this.myName||t.player.name),this.net.send({t:"start",roster:kh(t),mode:t.mode}),this.sendT=0}hostTick(t){this.isHost&&(this.sendT-=t,!(this.sendT>0)&&(this.sendT=1/15,this.net.send(Op(this.g.round))))}hostEvent(t){if(!this.isHost)return;let i=s=>s!=null&&s.isPlayer?"host":(s==null?void 0:s.remote)||null;t.type==="caught"?this.net.send({t:"ev",k:"caught",name:t.agent.name,pid:i(t.agent),phase:t.phase,by:t.ghost.isPlayer?"host":t.ghost.remote||null}):t.type==="ghostSpawn"?this.net.send({t:"ev",k:"spawn",i:t.i,phase:this.g.round.phase,pid:t.ghost.isPlayer?"host":t.ghost.remote||null}):t.type==="phase"?(this.net.send({t:"roster",roster:kh(this.g.round)}),this.net.send({t:"ev",k:"phase",name:t.newGhostName,pid:t.agent?i(t.agent):null})):t.type==="poof"&&this.net.send({t:"ev",k:"poof",x:t.x,y:t.y,z:t.z,ghost:!!t.ghost})}hostEnd(t){this.isHost&&this.net.send({t:"end",r:{hideSurvivors:t.hideSurvivors,alive:t.alive,caught:t.caught}})}hostPumpkin(t){this.isHost&&t&&t!=="host"&&this.net.send({t:"ev",k:"pk",to:t})}guestTick(t,i){var w,A;let s=this.g,r=this.guest;if(!r)return;let a=s.input.read();a.jump&&(this.latch.jump=!0),a.dash&&(this.latch.dash=!0),this.inT-=t,this.inT<=0&&(this.inT=1/20,this.net.send({t:"in",x:+a.x.toFixed(2),y:+a.y.toFixed(2),run:a.run,crouch:a.crouch,jumpHold:a.jumpHold,jump:this.latch.jump,dash:this.latch.dash,camYaw:+s.cam.yaw.toFixed(3)}),this.latch.jump=this.latch.dash=!1),r.render(t,i);let n=r.snap,o=r.me(this.net.id),l=[...r.agents.values()].filter(g=>{var x;return(x=g.s)==null?void 0:x[10]}),h=!o&&l.length>0,u=h?l[this.guestFocus%l.length]:null,d=(o==null?void 0:o.pos)||(u==null?void 0:u.pos)||((w=r.agents.values().next().value)==null?void 0:w.pos)||new I(0,0,22);if(s.mainFirstPersonTarget=h?u:null,(o==null?void 0:o.kind)!==this.lastKind&&(s.cam.configure((o==null?void 0:o.kind)==="ghost"?Vt.cam:((A=o==null?void 0:o.v)==null?void 0:A.def.cam)||ai[0].cam),this.lastKind=o==null?void 0:o.kind),h?s.firstPerson({ctrl:{pos:u.pos,yaw:u.yaw},hero:u.def}):s.cam.update(t,d,a),this.focusPos=d,!n)return;document.getElementById("watch-bar").classList.toggle("hidden",!h),document.getElementById("touch").classList.toggle("hidden",h),h&&(document.getElementById("btn-next").textContent="\u0414\u0440\u0443\u0433\u043E\u0439 \u0433\u0435\u0440\u043E\u0439 \u203A");let c=f&&n.ph==="hide"&&(f[9]||f[11]||f[14])?n.g.filter(g=>g[5]).sort((g,x)=>Math.hypot(g[1]-d.x,g[3]-d.z)-Math.hypot(x[1]-d.x,x[3]-d.z))[0]:null,p=c&&s.ghostPool[c[0]],v=c&&(c[10]?`hero:${c[10]}`:c[11]?`prop:${c[11]}`:null),S=v&&this.guest.ghostDz.get(`${v}#${c[0]}`);s.ghostViewTarget=p?{ctrl:{pos:new I(c[1],c[2],c[3]),yaw:c[4]},def:p.def,root:p.root,disguiseRoot:S==null?void 0:S.root}:null,document.getElementById("ghost-view").classList.toggle("hidden",!s.ghostViewTarget),s.ui.phase(n.ph==="chase"?"chase":"hide");let m=n.a.filter(g=>g[10]).length;s.ui.alive(m,n.a.length,n.ph==="hide"?"\u0421\u043F\u0440\u044F\u0442\u0430\u043B\u0438\u0441\u044C":"\u0423\u0431\u0435\u0433\u0430\u044E\u0442");let f=(o==null?void 0:o.kind)==="agent"?o.v.s:null,y=(o==null?void 0:o.kind)==="ghost"?o.g:null;s.ui.hud({left:n.left,stamina:f?f[15]:y?y[13]:1,tired:f?!!f[16]:!1,hidden:f?!!f[14]:!1});let b;n.ph==="hide"&&n.sp===0?b=y?"\u0417\u0430\u043A\u0440\u043E\u0439 \u0433\u043B\u0430\u0437\u0430 \u0438 \u0441\u0447\u0438\u0442\u0430\u0439\u2026 \u0413\u0435\u0440\u043E\u0438 \u043F\u0440\u044F\u0447\u0443\u0442\u0441\u044F!":"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0441\u043A\u043E\u0440\u043E \u0432\u044B\u0439\u0434\u0443\u0442 \u2014 \u043F\u0440\u044F\u0447\u044C\u0441\u044F!":y?b=y[10]||y[11]?"\u0422\u044B \u0437\u0430\u043C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u0430\u043D \u2014 \u043F\u043E\u0434\u043A\u0440\u0430\u0434\u0438\u0441\u044C!":n.ph==="hide"?`\u041D\u0430\u0439\u0434\u0438 \u0441\u043F\u0440\u044F\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044F! \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C: ${m}`:`\u0414\u043E\u0433\u043E\u043D\u0438 \u0432\u0441\u0435\u0445! \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C: ${m}`:o?f[11]?b="\u0422\u044B \u2014 \u043F\u0440\u0435\u0434\u043C\u0435\u0442. \u041D\u0435 \u0448\u0435\u0432\u0435\u043B\u0438\u0441\u044C! (Q \u2014 \u0441\u043D\u043E\u0432\u0430 \u0441\u0442\u0430\u0442\u044C \u0441\u043E\u0431\u043E\u0439)":b=f[14]?"\u0422\u0438\u0445\u043E\u2026 \u0442\u0435\u0431\u044F \u0438\u0449\u0443\u0442":n.ph==="chase"?"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438! \u041D\u0435 \u043F\u043E\u043F\u0430\u0434\u0438\u0441\u044C!":"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0438\u0449\u0443\u0442. \u0421\u043F\u0440\u044F\u0447\u044C\u0441\u044F \u0438\u043B\u0438 \u0437\u0430\u043C\u0430\u0441\u043A\u0438\u0440\u0443\u0439\u0441\u044F!":b="\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438! \u0421\u043C\u043E\u0442\u0440\u0438, \u043A\u0430\u043A \u043F\u0440\u044F\u0447\u0443\u0442\u0441\u044F \u0434\u0440\u0443\u0433\u0438\u0435\u2026",s.ui.status(b,"calm"),s.ui.mmLabel(n.ph==="hide"&&n.sp===0&&!y?"\u041D\u0430\u0439\u0434\u0438 \u043C\u0435\u0441\u0442\u043E<br>\u0438 \u0441\u043F\u0440\u044F\u0447\u044C\u0441\u044F!":"");let _=y?"ghost":f?"hero:"+o.v.def.id:"none";_!==this.lastBar&&(this.lastBar=_,s.ui.abilityBar(y?s.ghostAbilities:f?s.heroAbilities(o.v.def.id):[])),y?s.ui.cooldowns(g=>g==="dash"?{k:y[14]>0?0:1,n:y[14]}:g==="fly"?{k:1-y[15]}:{k:y[10]||y[11]?0:y[16]/Ce.ghost.disguise.cd}):f&&s.ui.cooldowns(g=>g==="dash"?{k:f[17]}:{k:0});let M=[];for(let g of r.agents.values())g.s&&g.s[10]&&g!==(o==null?void 0:o.v)&&!y&&M.push({x:g.s[1],z:g.s[3],kind:"ally"});for(let g of n.g)g[5]&&g!==y&&(y||!g[10]&&!g[11]&&Math.hypot(g[1]-d.x,g[3]-d.z)<18)&&M.push({x:g[1],z:g[3],kind:"ghost"});M.push({x:d.x,z:d.z,kind:"me"}),s.ui.minimap(d,s.cam.yaw,M)}nextGuestFocus(){var t;this.g.state!=="guest"||(t=this.guest)!=null&&t.me(this.net.id)||this.guestFocus++}guestKey(t){var i;if(this.lastBar==="ghost"){t==="1"&&this.guestAbility("mask-hero"),t==="2"&&this.guestAbility("mask-prop");return}if((i=this.lastBar)!=null&&i.startsWith("hero:")){let s=this.g.heroAbilities(this.lastBar.slice(5)).find(r=>r.key===t);s&&this.guestAbility(s.id)}}guestAbility(t){if(t==="dash"){this.latch.dash=!0;return}if(t==="fly"){this.latch.jump=!0;return}this.net.send({t:"ab",id:t})}};Ot=new WeakSet,zp=function(){let t=this.g.ui,i=this.net;this.seenHost=null,t.on("lb-leave",()=>this.leave()),t.on("lb-hero",()=>this.g.toSelect()),t.on("lb-start",()=>this.hostStart()),t.on("lb-copy",()=>{var r;(r=navigator.clipboard)==null||r.writeText(this.url).then(()=>t.toast("\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430!"),()=>{}),es("lb-url").select()}),t.on("lb-share",()=>{var r;navigator.share?navigator.share({title:"\u041F\u0440\u044F\u0442\u043A\u0438 \u0441 \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u043C",text:"\u0418\u0433\u0440\u0430\u0435\u043C \u0432\u043C\u0435\u0441\u0442\u0435! \u041A\u043E\u043C\u043D\u0430\u0442\u0430 "+i.code,url:this.url}).catch(()=>{}):((r=navigator.clipboard)==null||r.writeText(this.url),t.toast("\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430!"))});let s=es("lb-name");s.value=this.myName,s.addEventListener("keydown",r=>r.stopPropagation()),s.addEventListener("change",()=>{try{localStorage.setItem(Bp,s.value.trim())}catch{}i.update(this.hello())}),i.on("lobby",r=>{this.g.state==="lobby"&&this.renderLobby(),K(this,Ot,Hp).call(this,r)}),i.on("left",r=>{if(this.isHost&&this.g.state==="play"){let a=this.g.round,n=a.agents.find(o=>o.remote===r.id);n&&(this.g.ui.toast(`${n.name} \u0432\u044B\u0448\u0435\u043B \u2014 \u0437\u0430 \u043D\u0435\u0433\u043E \u0438\u0433\u0440\u0430\u0435\u0442 \u0431\u043E\u0442`),a.convertToBot(n));for(let o of a.activeGhosts)o.remote===r.id&&(o.remote=null)}}),i.on("close",()=>{this.g.state!=="loading"&&(this.g.ui.toast("\u0421\u0432\u044F\u0437\u044C \u0441 \u043A\u043E\u043C\u043D\u0430\u0442\u043E\u0439 \u043F\u043E\u0442\u0435\u0440\u044F\u043D\u0430"),K(this,Ot,Ua).call(this),["lobby","guest"].includes(this.g.state)&&this.g.toSelect())}),i.on("start",r=>K(this,Ot,Vp).call(this,r)),i.on("roster",r=>{var a;return(a=this.guest)==null?void 0:a.setRoster(r.roster)}),i.on("s",r=>{var a;return(a=this.guest)==null?void 0:a.apply(r)}),i.on("ev",r=>K(this,Ot,Wp).call(this,r)),i.on("end",r=>K(this,Ot,jp).call(this,r)),i.on("lobbyBack",()=>{K(this,Ot,Ua).call(this),this.showLobby()}),i.on("in",r=>{if(!this.isHost)return;let a=this.g.round.netIn.get(r.from)||{};this.g.round.netIn.set(r.from,{...r,jump:a.jump||r.jump,dash:a.dash||r.dash})}),i.on("ab",r=>K(this,Ot,Gp).call(this,r))},kp=function(){let t=es("lb-qr"),i=()=>{try{let r=window.qrcode(0,"M");r.addData(this.url),r.make(),t.src=r.createDataURL(4,2)}catch{t.removeAttribute("src")}};if(window.qrcode)return i();if(t.removeAttribute("src"),this.qrLoading)return;this.qrLoading=!0;let s=document.createElement("script");s.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js",s.onload=i,document.head.appendChild(s)},Hp=function(t){let i=this.seenHost;this.seenHost=t.host,!(!this.guest||i==null||t.host===i)&&(K(this,Ot,Ua).call(this),this.g.ui.toast(t.host===this.net.id?"\u0425\u043E\u0437\u044F\u0438\u043D \u0432\u044B\u0448\u0435\u043B \u2014 \u0442\u0435\u043F\u0435\u0440\u044C \u0442\u044B \u0445\u043E\u0437\u044F\u0438\u043D. \u0420\u0430\u0443\u043D\u0434 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D.":"\u0425\u043E\u0437\u044F\u0438\u043D \u0432\u044B\u0448\u0435\u043B \u2014 \u0440\u0430\u0443\u043D\u0434 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D, \u0432\u0435\u0440\u043D\u0443\u043B\u0438\u0441\u044C \u0432 \u043B\u043E\u0431\u0431\u0438."),this.showLobby())},Gp=function(t){if(!this.isHost||this.g.state!=="play")return;let i=this.g.round,s=i.agents.find(a=>a.remote===t.from&&a.alive);if(s){s.abilities.use(t.id);return}let r=i.activeGhosts.find(a=>a.remote===t.from);r&&(t.id==="mask-hero"||t.id==="mask-prop")&&(r.disguised?r.reveal():r.useDisguise(i.agents,t.id==="mask-prop"?"prop":"hero"))},Vp=function(t){let i=this.g;i.releaseAll(),this.guest||(this.guest=new po({scene:i.scene,heroes:[...ai,Vt],ghosts:i.ghostPool,acquire:(s,r)=>i.acquireChar(s,r)})),this.guest.clear(),this.guest.setRoster(t.roster),this.guestMode=t.mode,this.guestFocus=0,this.pk=0,i.showGhost.root.visible=!1,i.showcase=null,i.input.reset(),i.state="guest",i.input.enabled=!0,i.input.lookOnly=!1,i.cam.yaw=0,i.cam.pitch=.3,i.ui.mode("play",i.isTouch,"play"),i.ui.phase("hide"),i.ui.pumpkins(0),i.ui.abilityBar([]),this.lastBar=null,i.showLight.intensity=0,document.getElementById("btn-again").classList.add("hidden")},Ua=function(){this.guest&&(this.guest.clear(),this.g.releaseAll(),this.guest=null,document.getElementById("btn-again").classList.remove("hidden"))},Wp=function(t){let i=this.g,s=i.ui,r=this.net.id;this.guest&&(t.k==="caught"?(t.pid===r?s.toast(t.phase==="hide"?"\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438! \u041F\u043E\u0434\u043E\u0436\u0434\u0438 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043E\u043A.":"\u0422\u0435\u0431\u044F \u0434\u043E\u0433\u043D\u0430\u043B\u0438!"):t.by===r?s.toast(`\u041F\u043E\u043F\u0430\u043B\u0441\u044F: ${t.name}!`):s.toast(`${t.phase==="hide"?"\u041D\u0430\u0448\u043B\u0438":"\u0414\u043E\u0433\u043D\u0430\u043B\u0438"}: ${t.name}`),i.sound.chime([392,330])):t.k==="spawn"?(i.sound.ghostAppear(),i.cam.shake=.6,t.pid===r?s.toast("\u0422\u044B \u0432\u044B\u0448\u0435\u043B \u043D\u0430 \u043E\u0445\u043E\u0442\u0443! \u0418\u0449\u0438!"):t.i===0&&s.toast(t.phase==="hide"?"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0432\u044B\u0448\u043B\u0438 \u0438\u0441\u043A\u0430\u0442\u044C!":"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438 \u043D\u0430\u0447\u0430\u043B\u0438\u0441\u044C!")):t.k==="phase"?(i.sound.ghostAppear(),s.phase("chase"),s.toast(t.pid===r?"\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438 \u043F\u0435\u0440\u0432\u044B\u043C \u2014 \u0442\u0435\u043F\u0435\u0440\u044C \u0422\u042B \u0411\u0435\u0437\u043B\u0438\u043A! \u0414\u043E\u0433\u043E\u043D\u044F\u0439!":`\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438! \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u043C \u0441\u0442\u0430\u043B(\u0430): ${t.name}. \u0411\u0435\u0433\u0438!`)):t.k==="poof"?i.addFx(i.poofFx(t.x,t.y,t.z,t.ghost)):t.k==="pk"&&t.to===r&&(this.pk++,s.pumpkins(this.pk),i.sound.chime([784,1046,1318])))},jp=function(t){let i=this.g,s=t.r;i.state="result",i.input.enabled=!1,i.input.releasePointer();let r=this.pk;r&&i.ui.wallet(Vr.add(r)),i.ui.result({mode:"watch",alive:s.alive,hideSurvivors:s.hideSurvivors,caught:s.caught,earn:r}),i.ui.mode("result",i.isTouch),document.getElementById("btn-again").classList.add("hidden")};var d1=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);var Yr=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,Da=Yr&&Math.min(screen.width,screen.height)<820,p1=4,Oa=new I(0,0,22),Xp=[{id:"dash",key:"E",icon:"\u{1F4A8}",name:"\u0420\u044B\u0432\u043E\u043A"},{id:"mask-hero",key:"1",icon:"\u{1F3AD}",name:"\u0421\u0442\u0430\u0442\u044C \u0433\u0435\u0440\u043E\u0435\u043C"},{id:"mask-prop",key:"2",icon:"\u{1F4E6}",name:"\u0421\u0442\u0430\u0442\u044C \u0432\u0435\u0449\u044C\u044E"},{id:"fly",key:"\u2423",icon:"\u{1FAB6}",name:"\u0412\u0437\u043B\u0435\u0442\u0435\u0442\u044C"}],Me,qp,Hh,mo,Gh,Yp,Vh,go,vo,Ns,Fa,Wh,Zr,yo,jh,Zp,Xh,Jp,$p,Kp,Qp,ef,tf,sf,fs,_o=class{constructor(t){Et(this,Me);this.canvas=t,this.ui=new lo,this.sound=new oo,this.state="loading",this.t=0,this.fx=[],this.navs=new Map,this.pool=new Map,this.acquired=[],this.skin="classic",this.withBots=!0,this.ghostCount=Ce.ghost.count,this.mapId="village",this.look=Ca()}get agents(){var t;return((t=this.round)==null?void 0:t.agents)||[]}get isTouch(){return Yr}get ghostAbilities(){return Xp}heroAbilities(t){return Oh[t]||[]}acquireChar(t,i){return K(this,Me,Hh).call(this,t,i)}releaseAll(){K(this,Me,mo).call(this)}poofFx(t,i,s,r){return wh(this.scene,t,i,s,r?13215999:16773590)}get ghosts(){var t;return((t=this.round)==null?void 0:t.activeGhosts)||[]}async start(){var o,l,h,u;Ip();let t=this.ui;t.progress(.1,"\u0421\u0442\u0440\u043E\u0438\u043C \u0434\u0435\u0440\u0435\u0432\u043D\u044E\u2026"),await Ba();let i=this.renderer=new Gn({canvas:this.canvas,antialias:!Da||devicePixelRatio<2,powerPreference:"high-performance"});i.setPixelRatio(Math.min(devicePixelRatio,Da?Ce.graphics.maxPixelRatioMobile:Ce.graphics.maxPixelRatioDesktop)),i.setSize(innerWidth,innerHeight,!1),i.toneMapping=Dr,i.toneMappingExposure=1.15,i.shadowMap.enabled=Ce.graphics.shadows,i.shadowMap.type=Er,this.scene=new On,this.camera=new Kt(Ce.camera.fov,innerWidth/innerHeight,.1,400),this.insetCamera=new Kt(72,16/9,.08,180),this.map=jd(this.scene,{isMobile:Da}),this.world=this.map.world,t.progress(.4,"\u0417\u0430\u0436\u0438\u0433\u0430\u0435\u043C \u0444\u043E\u043D\u0430\u0440\u0438\u043A\u0438\u2026"),await Ba(),this.fireflies=Xd(this.scene,Da?50:Ce.graphics.fireflies,28),this.soot=qd(this.scene,this.world,Da?10:16);let s=this.navFor(Vt.radius);this.ghostPool=Array.from({length:p1},()=>new eo(Vt,this.world,this.scene,s,{heroes:ai})),this.input=new Jn(this.canvas,document.getElementById("touch")),this.cam=new $n(this.camera,this.map.cameraBlockers),this.showLight=new zr(16769200,14,9,1.6),this.scene.add(this.showLight),t.progress(.6,"\u041F\u0440\u043E\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u043C \u0442\u0440\u043E\u043F\u0438\u043D\u043A\u0438\u2026"),await Ba();for(let d=0;d<ai.length;d++)this.navFor(ai[d].radius),t.progress(.6+.04*(d+1),"\u041F\u0440\u043E\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u043C \u0442\u0440\u043E\u043F\u0438\u043D\u043A\u0438\u2026"),await Ba();this.pumpkins=new Yn(this.scene,this.navFor(.42)),t.progress(.8,"\u0417\u043E\u0432\u0451\u043C \u0434\u0443\u0445\u043E\u0432\u2026"),await Ba(),this.ghostPool.forEach(d=>{d.root.visible=!0,d.char.update(.016,{t:0,speed:0,mode:"hunt",appear:1})}),this.renderer.compile(this.scene,this.camera),this.ghostPool.forEach(d=>{d.root.visible=!1}),this.showGhost=Vt.build(),this.showGhost.root.visible=!1,this.scene.add(this.showGhost.root),this.round=new ro({world:this.world,scene:this.scene,navFor:d=>this.navFor(d),ghosts:this.ghostPool,heroes:ai,makeChar:(d,c)=>K(this,Me,Hh).call(this,d,c),makeProp:d=>$s(d),sound:this.sound,cam:this.cam}),this.round.addFx=d=>this.fx.push(d);let r=Up([...ai,Vt]);K(this,Me,qp).call(this),t.progress(1,"\u0413\u043E\u0442\u043E\u0432\u043E!"),t.buildCards(ai,Vt,r,d=>this.selectHero(d)),t.on("btn-choose",()=>this.mp.inRoom?this.mp.showLobby():this.toMaps()),t.on("btn-friends",()=>this.mp.inRoom?this.mp.showLobby():this.mp.createRoom()),t.on("btn-maps-back",()=>this.toSelect()),t.on("btn-maps-go",()=>this.beginRound(this.hero.id==="noface"?"hunter":"play")),t.on("btn-watch",()=>this.beginRound("watch")),t.on("btn-again",()=>this.beginRound(this.mode)),t.on("btn-change",()=>this.mp.inRoom?this.mp.showLobby():this.toSelect()),t.on("btn-resume",()=>this.resume()),t.on("btn-quit",()=>{this.ui.show("paused",!1),this.toSelect()}),t.on("btn-pause",()=>this.pause()),t.on("btn-next",()=>this.state==="guest"?this.mp.nextGuestFocus():K(this,Me,Wh).call(this)),t.on("btn-tuner",()=>this.tuner.toggle()),t.on("btn-tuner2",()=>this.tuner.toggle()),t.on("btn-mute",()=>{this.sound.setMuted(!this.sound.muted),t.setMute(this.sound.muted)}),t.onOptions({ghosts:d=>{this.ghostCount=d},bots:d=>{this.withBots=d},skin:d=>{this.skin=d,this.selectHero("moti")}},{ghosts:this.ghostCount,bots:this.withBots}),this.tuner=new co(ai,()=>{var d;return((d=this.hero)==null?void 0:d.id)||"masha"}),t.minimapInit(this.world,Wt),this.mp=new fo(this),t.wallet(Vr.get()),addEventListener("keydown",d=>{var v;if(this.tuner.open)return;if(this.state==="play"&&(d.code==="KeyP"||d.code==="Escape"&&!document.pointerLockElement))return this.pause();if(this.state==="paused"&&(d.code==="KeyP"||d.code==="Escape"))return this.resume();if(this.state==="play"&&this.mode==="watch"&&(d.code==="Tab"||d.code==="KeyN"))return d.preventDefault(),K(this,Me,Wh).call(this);if(this.state==="guest"&&!d.repeat)return this.mp.guestKey(d.code.replace("Digit","").replace("Key",""));if(this.state!=="play"||d.repeat)return;let c=d.code.replace("Digit","").replace("Key","");if(this.round.playerGhost)c==="1"&&K(this,Me,go).call(this,"mask-hero"),c==="2"&&K(this,Me,go).call(this,"mask-prop");else if((v=this.round.player)!=null&&v.alive){let S=this.round.player.abilities.list.find(m=>m.key===c);S&&this.round.player.abilities.use(S.id)}}),t.onAbility(d=>K(this,Me,go).call(this,d)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="play"&&this.pause()}),addEventListener("resize",()=>K(this,Me,fs).call(this)),addEventListener("orientationchange",()=>{K(this,Me,fs).call(this),setTimeout(()=>K(this,Me,fs).call(this),180),setTimeout(()=>K(this,Me,fs).call(this),600)}),(h=(l=(o=window.screen)==null?void 0:o.orientation)==null?void 0:l.addEventListener)==null||h.call(l,"change",()=>K(this,Me,fs).call(this)),(u=window.visualViewport)==null||u.addEventListener("resize",()=>K(this,Me,fs).call(this)),addEventListener("pageshow",()=>K(this,Me,fs).call(this)),K(this,Me,fs).call(this);let a=()=>this.sound.unlock();addEventListener("pointerdown",a),addEventListener("keydown",a),this.hero=ai[0],this.toSelect(),t.hideLoading();let n=new URLSearchParams(location.search).get("room");n&&this.mp.join(n),this.last=performance.now(),this.renderer.setAnimationLoop(()=>K(this,Me,Jp).call(this)),window.__game=this}navFor(t){let i=Math.round(t*10);return this.navs.has(i)||this.navs.set(i,new Wr(this.world,t+.1)),this.navs.get(i)}addFx(t){this.fx.push(t)}selectHero(t){this.hero=t===Vt.id?Vt:ai.find(i=>i.id===t),K(this,Me,mo).call(this);for(let i of this.ghostPool)i.reveal(),i.reset(new I(0,0,-21));this.showGhost.root.visible=t===Vt.id,this.showcase=t===Vt.id?null:this.round.makeAgent(this.hero,!0,Oa,K(this,Me,Gh).call(this,this.hero)),this.ui.showHero(this.hero,this.skin),this.hero.custom&&this.ui.buildCreator(this.look,Eh,(i,s)=>K(this,Me,Yp).call(this,i,s)),this.cam.configure(this.hero.cam)}toSelect(){this.state="select",this.input.enabled=!1,this.input.lookOnly=!1,this.input.releasePointer(),this.selectHero(this.hero.id),this.sound.setTension(0),this.ui.mode("select",Yr),this.ui.wallet(Vr.get()),this.showLight.intensity=14}toMaps(){this.state="maps",this.ui.mode("maps",Yr)}beginRound(t){this.mode=t,this.sound.unlock(),K(this,Me,mo).call(this),this.showGhost.root.visible=!1,this.showcase=null,this.input.reset();let i=this.hero.id===Vt.id?ai[0]:this.hero;this.round.start({mode:t,hero:i,skin:K(this,Me,Gh).call(this,i),mSkin:this.skin,ghosts:this.ghostCount,withBots:this.withBots,remotes:this.mp.remotes()}),this.mp.hostStarted(),this.pumpkins.spawn(Ce.round.pumpkins),this.focus=0,this.cam.yaw=t==="hunter"?Math.PI:0,this.cam.pitch=.3;let s=K(this,Me,Ns).call(this);K(this,Me,Fa).call(this,s),this.cam.snap(K(this,Me,Zr).call(this,s)),this.state="play",this.input.enabled=!0,this.input.lookOnly=t==="watch",this.ui.mode("play",Yr,t),this.ui.phase("hide"),K(this,Me,Vh).call(this),K(this,Me,vo).call(this),this.ui.pumpkins(0),this.showLight.intensity=0}firstPerson(t,i=this.camera){K(this,Me,yo).call(this,t,i)}pause(){this.state==="play"&&(this.state="paused",this.input.enabled=!1,this.input.releasePointer(),this.ui.show("paused",!0))}resume(){this.state==="paused"&&(this.state="play",this.input.enabled=!0,this.last=performance.now(),this.ui.show("paused",!1))}};Me=new WeakSet,qp=function(){let t=(i,s)=>(this.camera.position.set(...i),this.camera.lookAt(...s),this.map.updateLights(new I(s[0],0,s[2])),this.renderer.render(this.scene,this.camera),this.renderer.domElement.toDataURL("image/jpeg",.72));this.maps=[{id:"forest",name:"\u041B\u0435\u0441 \u0434\u0443\u0445\u043E\u0432",icon:"\u{1F332}",ready:!1,pic:t([-26,3.2,-26],[-36,2.4,-36])},{id:"village",name:"\u0414\u0435\u0440\u0435\u0432\u043D\u044F \u0434\u0443\u0445\u043E\u0432",icon:"\u{1F3E0}",ready:!0,pic:t([0,5,30],[0,1.5,4])},{id:"temple",name:"\u0417\u0430\u0431\u0440\u043E\u0448\u0435\u043D\u043D\u044B\u0439 \u0445\u0440\u0430\u043C",icon:"\u26E9\uFE0F",ready:!1,hard:!0,pic:t([0,3.5,-8],[0,2.4,-24])}],this.ui.buildMaps(this.maps,i=>{let s=this.maps.find(r=>r.id===i);if(!s.ready){this.ui.toast(`\xAB${s.name}\xBB \u0441\u043A\u043E\u0440\u043E \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F!`);return}this.mapId=i,this.ui.pickMap(i)}),this.ui.pickMap(this.mapId)},Hh=function(t,i){let s=t.id+":"+(t.skins||t.custom?i:""),r=this.pool.get(s)||[];this.pool.set(s,r);let a=r.find(n=>!n.inUse);return a||(a=t.build(i),r.push(a)),a.inUse=!0,a.root.visible=!0,a.root.scale.set(1,1,1),this.scene.add(a.root),this.acquired.push(a),a},mo=function(){var t;for(let i of this.acquired)i.inUse=!1,this.scene.remove(i.root);this.acquired=[];for(let i of this.agents)(t=i.prop)!=null&&t.obj&&this.scene.remove(i.prop.obj);this.round.agents=[],this.round.player=null,this.round.playerGhost=null,this.round.domes=[];for(let i of this.fx)for(;i.update(99)!==!1;);this.fx=[],this.pumpkins.clear()},Gh=function(t){return t.custom?JSON.stringify(this.look):this.skin},Yp=function(t,i){this.look={...this.look,[t]:i},t==="gender"&&(this.look.hairStyle=Eh.hairStyle[i][0][0]),kd(this.look);for(let s of[...this.pool.keys()])s.startsWith("kid:")&&this.pool.delete(s);this.sound.chime([660,880]),this.selectHero("kid")},Vh=function(){let t=this.round;t.playerGhost?this.ui.abilityBar(Xp):t.player?this.ui.abilityBar(t.player.abilities.list):this.ui.abilityBar([]),document.getElementById("abil-bar").classList.toggle("hidden",this.mode==="watch")},go=function(t){var r;if(this.state==="guest")return this.mp.guestAbility(t);let i=this.round,s=i.playerGhost;if(t==="dash"){this.input.dashQueued=!0;return}if(s){t==="fly"?this.input.jumpQueued=!0:(t==="mask-hero"||t==="mask-prop")&&(s.disguised?s.reveal():s.useDisguise(i.agents,t==="mask-prop"?"prop":"hero")||this.ui.toast(s.active?"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u0435\u0449\u0451 \u043A\u043E\u043F\u0438\u0442\u0441\u044F\u2026":"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E\u0436\u0434\u0438\u0441\u044C \u0441\u0432\u043E\u0435\u0433\u043E \u0432\u044B\u0445\u043E\u0434\u0430"));return}(r=i.player)!=null&&r.alive&&i.player.abilities.use(t)},vo=function(){let t=this.round,i=t.agents.filter(s=>s.alive).length;this.ui.alive(i,t.agents.length,t.phase==="hide"?"\u0421\u043F\u0440\u044F\u0442\u0430\u043B\u0438\u0441\u044C":"\u0423\u0431\u0435\u0433\u0430\u044E\u0442")},Ns=function(){var r;let t=this.round;if((r=t.player)!=null&&r.alive)return t.player;if(t.playerGhost)return t.playerGhost;let i=t.agents.filter(a=>a.alive),s=i.length?i:t.activeGhosts.filter(a=>a.state!=="hidden");return s[this.focus%Math.max(1,s.length)]||t.agents[0]||t.activeGhosts[0]},Fa=function(t){t!=null&&t.hero?this.cam.configure(t.hero.cam):this.cam.configure(Vt.cam)},Wh=function(){var i;(this.mode==="watch"||!((i=this.round.player)!=null&&i.alive)&&!this.round.playerGhost)&&(this.focus++,K(this,Me,Fa).call(this,K(this,Me,Ns).call(this)))},Zr=function(t){return t?t.ctrl.pos:Oa},yo=function(t,i){var o,l,h,u;if(!(t!=null&&t.ctrl))return;let s=t.ctrl.pos,a=((u=(h=(o=t.hero)==null?void 0:o.height)!=null?h:(l=t.def)==null?void 0:l.height)!=null?u:1.7)*.84,n=t.ctrl.yaw;i.position.set(s.x,s.y+a,s.z),i.lookAt(s.x+Math.sin(n),s.y+a-.03,s.z+Math.cos(n))},jh=function(t){var i,s,r,a;return((i=t==null?void 0:t.prop)==null?void 0:i.obj)||(t==null?void 0:t.propObj)||(t==null?void 0:t.disguiseRoot)||((r=(s=t==null?void 0:t.disguise)==null?void 0:s.char)==null?void 0:r.root)||(t==null?void 0:t.root)||((a=t==null?void 0:t.char)==null?void 0:a.root)||null},Zp=function(){let t=document.getElementById("ghost-view"),i=this.ghostViewTarget;if(!i||t.classList.contains("hidden"))return;let s=t.getBoundingClientRect();if(!s.width||!s.height)return;this.insetCamera.aspect=s.width/s.height,this.insetCamera.updateProjectionMatrix(),K(this,Me,yo).call(this,i,this.insetCamera);let r=this.renderer.domElement.clientWidth||innerWidth,a=this.renderer.domElement.clientHeight||innerHeight,n=s.left,o=a-s.bottom;this.renderer.setScissorTest(!0),this.renderer.setViewport(n,o,s.width,s.height),this.renderer.setScissor(n,o,s.width,s.height);let l=K(this,Me,jh).call(this,i),h=l==null?void 0:l.visible;l&&(l.visible=!1),this.renderer.render(this.scene,this.insetCamera),l&&(l.visible=h),this.renderer.setScissorTest(!1),this.renderer.setViewport(0,0,r,a)},Xh=function(t){this.state="result",this.input.enabled=!1,this.input.releasePointer(),this.sound.setTension(0),(t.mode==="watch"?t.alive.length>0:t.mode==="hunter"||t.playerWasGhost?t.alive.length===0:!t.playerCaughtInChase)?this.sound.win():this.sound.lose(),t.mode!=="watch"&&t.earn?this.ui.wallet(Vr.add(t.earn)):t.earn=0,this.ui.result(t),this.ui.mode("result",Yr),this.mp.hostEnd(t)},Jp=function(){let t=performance.now(),i=Math.min(.05,(t-this.last)/1e3);this.last=t,this.t+=i;let s=this.t;if(this.state==="play")K(this,Me,Kp).call(this,i,s);else if(this.state==="guest")this.mp.guestTick(i,s);else if(this.state==="select"||this.state==="maps")K(this,Me,$p).call(this,i,s);else if(this.state==="result"){for(let o of this.agents)o.alive&&o.char&&o.char.update(i,{...o.ctrl.animState(s),speed:0,grounded:!0,landed:!1,action:o.abilities.pose()});for(let o of this.ghosts)o.state!=="hidden"&&!o.disguised&&o.char.update(i,{t:s,speed:0,mode:"hunt",appear:1})}this.fx=this.fx.filter(o=>o.update(i)!==!1);let r=this.state==="play"?K(this,Me,Zr).call(this,K(this,Me,Ns).call(this)):this.state==="guest"&&this.mp.focusPos||Oa;this.map.updateLights(r),this.fireflies(s),this.soot(i,s,r);let a=K(this,Me,jh).call(this,this.mainFirstPersonTarget),n=a==null?void 0:a.visible;a&&(a.visible=!1),this.renderer.render(this.scene,this.camera),a&&(a.visible=n),K(this,Me,Zp).call(this)},$p=function(t,i){let s=this.hero.id===Vt.id,r=Oa;if(s){let d=this.showGhost.root;d.position.copy(r),d.rotation.y=-.35+Math.sin(i*.4)*.3,this.showGhost.update(t,{t:i,speed:0,mode:Math.sin(i*.5)>.3?"hunt":"search",appear:1})}else if(this.showcase){let d=this.showcase;if(d.abilities.update(t),!d.action&&Math.random()<t*.25){let c=d.abilities.list.filter(p=>["wave","cast","swing","summon"].includes(p.anim));if(c.length){let p=c[Math.random()*c.length|0];d.action={name:p.anim,t:0,dur:p.dur,lock:0,fired:!0}}}d.char.root.position.copy(r),d.char.root.rotation.y=-.35+Math.sin(i*.4)*.3,d.char.update(t,{t:i,speed:0,grounded:!0,landed:!1,action:d.abilities.pose()})}let a=this.hero.height,n=innerWidth<760,o=a*(n?2.9:2)+1.4,l=.12+Math.sin(i*.15)*.06,h=(n?.55:1.25)*(a/1.7)+(n?0:.3),u=new I(r.x+h,r.y+a*.6,r.z);this.camera.position.set(u.x+Math.sin(l)*o,u.y+a*.18,u.z+Math.cos(l)*o),this.camera.lookAt(u),this.showLight.position.set(r.x+.8,r.y+a*.9,r.z+2.4)},Kp=function(t,i){var _,M,w,A,g;let s=this.round,r=Ce,a=this.input.read(),n=K(this,Me,Ns).call(this),o=this.mode!=="watch"&&!((_=s.player)!=null&&_.alive)&&!s.playerGhost;if(o)K(this,Me,yo).call(this,n,this.camera),document.getElementById("touch").classList.add("hidden");else if(this.mode==="watch"||!((M=s.player)!=null&&M.alive||s.playerGhost)){let x=n.ctrl.yaw+Math.PI;Math.abs(a.lookX)+Math.abs(a.lookY)<1e-5&&(this.cam.yaw+=Math.atan2(Math.sin(x-this.cam.yaw),Math.cos(x-this.cam.yaw))*Math.min(1,t*1.2)),this.cam.update(t,K(this,Me,Zr).call(this,n),a)}else this.cam.update(t,K(this,Me,Zr).call(this,n),a);s.step(t,i,a,this.cam.yaw);for(let x of s.events)K(this,Me,Qp).call(this,x);if(s.events.length=0,this.mp.hostTick(t),this.state!=="play")return;n=K(this,Me,Ns).call(this),this.mainFirstPersonTarget=o?n:null;let l=s.player,h=l!=null&&l.alive&&s.phase==="hide"&&(l.hidden||l.prop||l.ctrl.crouching)?s.activeGhosts.filter(x=>x.state!=="hidden").sort((x,U)=>x.pos.distanceTo(l.ctrl.pos)-U.pos.distanceTo(l.ctrl.pos))[0]:null;this.ghostViewTarget=h||null,document.getElementById("ghost-view").classList.toggle("hidden",!this.ghostViewTarget);let u=this.mode==="watch"||o;document.getElementById("watch-bar").classList.toggle("hidden",!u),document.getElementById("abil-bar").classList.toggle("hidden",u),o?document.getElementById("btn-next").textContent="\u0414\u0440\u0443\u0433\u043E\u0439 \u0433\u0435\u0440\u043E\u0439 \u203A":this.mode==="watch"&&(document.getElementById("btn-next").textContent="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u203A"),o||document.getElementById("touch").classList.toggle("hidden",this.mode==="watch");for(let x of s.agents){if(!x.alive||!x.char)continue;let U=x.char.root;U.visible=!x.prop,U.position.copy(x.ctrl.pos),U.rotation.y=x.ctrl.yaw,U.scale.y+=((x.ctrl.crouching?.62:1)-U.scale.y)*Math.min(1,t*14),x.char.update(t,{...x.ctrl.animState(i),action:x.abilities.pose()})}let d=(w=s.player)!=null&&w.alive?s.player:s.playerGhost,c=[d,...s.agents.filter(x=>x.remote&&x.alive),...s.activeGhosts.filter(x=>x.remote&&x.active)].filter(Boolean);for(let x of this.pumpkins.update(t,i,c))x===d?(s.stats.pumpkins++,this.ui.pumpkins(s.stats.pumpkins),this.sound.chime([784,1046,1318])):this.mp.hostPumpkin(x.remote);if(d){let x=d.ctrl;x.jumped&&this.sound.jump(),x.dashed&&this.sound.chime([880,1320]),x.landed&&x.landSpeed<-8&&(this.sound.land(-x.landSpeed),x.stagger>0&&(this.cam.shake=Math.max(this.cam.shake,.5))),x.grounded&&x.speed>1&&!x.crouching&&(this.stepDist=(this.stepDist||0)+x.speed*t,this.stepDist>(x.running?2.2:1.6)&&(this.stepDist=0,this.sound.step()))}let p=(A=s.player)!=null&&A.alive?s.player:this.mode==="watch"&&n.hero&&n.alive!==void 0?n:null,v=p?K(this,Me,sf).call(this,p.ctrl.pos):null,S=v?v.d:99,m=!!(v&&v.g.sees&&v.g.target===p&&!v.g.disguised),f=Math.ceil(r.round.headStart-s.t);if(s.phase==="hide"&&s.spawned===0)s.playerGhost?this.ui.status(`\u0417\u0430\u043A\u0440\u043E\u0439 \u0433\u043B\u0430\u0437\u0430 \u0438 \u0441\u0447\u0438\u0442\u0430\u0439: ${f}\u2026 \u0413\u0435\u0440\u043E\u0438 \u043F\u0440\u044F\u0447\u0443\u0442\u0441\u044F!`,"calm"):this.ui.status(`\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0432\u044B\u0439\u0434\u0443\u0442 \u0447\u0435\u0440\u0435\u0437 ${f} \u2014 \u043F\u0440\u044F\u0447\u044C\u0441\u044F!`,"calm");else if(s.playerGhost){let x=s.playerGhost,U=s.agents.filter(R=>R.alive).length;this.ui.status(x.disguised?`\u0422\u044B \u0437\u0430\u043C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u0430\u043D${x.disguise.prop?` \u043F\u043E\u0434 ${x.disguise.prop.name}`:` \u043F\u043E\u0434 \xAB${x.disguise.hero.name}\xBB`} \u2014 \u043F\u043E\u0434\u043A\u0440\u0430\u0434\u0438\u0441\u044C!`:s.phase==="hide"?`\u041D\u0430\u0439\u0434\u0438 \u0441\u043F\u0440\u044F\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044F! \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C: ${U}`:`\u0414\u043E\u0433\u043E\u043D\u0438 \u0432\u0441\u0435\u0445! \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C: ${U}`,"")}else this.mode==="watch"?this.ui.status(n.hero&&n.alive!==void 0?`\u0421\u043C\u043E\u0442\u0440\u0438\u043C: ${n.name}${n.hidden?" \xB7 \u0432 \u0443\u043A\u0440\u044B\u0442\u0438\u0438":""}${n.prop?` \xB7 \u043F\u0440\u0438\u0442\u0432\u043E\u0440\u0438\u043B\u0441\u044F: ${n.prop.kind.name}`:""}`:"\u0421\u043C\u043E\u0442\u0440\u0438\u043C: \u0411\u0435\u0437\u043B\u0438\u043A",m?"danger":""):(g=s.player)!=null&&g.alive?m?this.ui.status("\u041E\u043D \u0442\u0435\u0431\u044F \u0432\u0438\u0434\u0438\u0442! \u0411\u0435\u0433\u0438!","danger"):s.player.protected?this.ui.status("\u0422\u044B \u043F\u043E\u0434 \u043A\u0443\u043F\u043E\u043B\u043E\u043C \u2014 \u0437\u0434\u0435\u0441\u044C \u043D\u0435 \u043F\u043E\u0439\u043C\u0430\u044E\u0442","calm"):s.player.prop?this.ui.status(`\u0422\u044B \u2014 ${s.player.prop.kind.name}. \u041D\u0435 \u0448\u0435\u0432\u0435\u043B\u0438\u0441\u044C! (Q \u2014 \u0441\u043D\u043E\u0432\u0430 \u0441\u0442\u0430\u0442\u044C \u0441\u043E\u0431\u043E\u0439)`,"calm"):v&&v.g.state==="hunt"&&v.g.target===s.player&&!v.g.disguised?this.ui.status("\u0411\u0435\u0437\u043B\u0438\u043A \u0438\u0434\u0451\u0442 \u043F\u043E \u0441\u043B\u0435\u0434\u0443\u2026",""):this.ui.status(s.player.hidden?"\u0422\u0438\u0445\u043E\u2026 \u043E\u043D \u0442\u0435\u0431\u044F \u0438\u0449\u0435\u0442":s.phase==="chase"?"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438! \u041D\u0435 \u043F\u043E\u043F\u0430\u0434\u0438\u0441\u044C!":"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0438\u0449\u0443\u0442. \u0421\u043F\u0440\u044F\u0447\u044C\u0441\u044F \u0438\u043B\u0438 \u0437\u0430\u043C\u0430\u0441\u043A\u0438\u0440\u0443\u0439\u0441\u044F!","calm"):this.ui.status("\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438! \u0421\u043C\u043E\u0442\u0440\u0438, \u043A\u0430\u043A \u043F\u0440\u044F\u0447\u0443\u0442\u0441\u044F \u0434\u0440\u0443\u0433\u0438\u0435\u2026","");let y=s.spawned&&p?wt.clamp(1-S/16,0,1):0;this.sound.setTension(this.mode==="watch"?y*.5:y),this.ui.vignette(y*(m?1:.6));let b=d?d.ctrl:n.ctrl;this.ui.hud({left:s.left,stamina:b.stamina,tired:b.exhausted,hidden:d==null?void 0:d.hidden}),this.ui.mmLabel(s.phase==="hide"&&s.spawned===0&&!s.playerGhost?"\u041D\u0430\u0439\u0434\u0438 \u043C\u0435\u0441\u0442\u043E<br>\u0438 \u0441\u043F\u0440\u044F\u0447\u044C\u0441\u044F!":""),K(this,Me,ef).call(this,n),K(this,Me,tf).call(this)},Qp=function(t){var s;let i=this.round;if(this.mp.hostEvent(t),t.type==="ghostSpawn")this.sound.ghostAppear(),this.cam.shake=Math.max(this.cam.shake,.6),t.ghost.isPlayer?this.ui.toast("\u0422\u044B \u0432\u044B\u0448\u0435\u043B \u043D\u0430 \u043E\u0445\u043E\u0442\u0443! \u0418\u0449\u0438!"):t.i===0&&this.ui.toast(i.phase==="hide"?"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0432\u044B\u0448\u043B\u0438 \u0438\u0441\u043A\u0430\u0442\u044C!":"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438 \u043D\u0430\u0447\u0430\u043B\u0438\u0441\u044C!");else if(t.type==="caught"){let r=t.agent;if(this.addFx(to(this.scene,r.ctrl.pos.x,r.ctrl.pos.z,2.5,10115808)),K(this,Me,vo).call(this),r.isPlayer){if(this.cam.shake=1,t.phase==="hide"){let a=i.caughtOrder.filter(n=>n.phase==="hide").length===1;this.ui.toast(a?"\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438 \u043F\u0435\u0440\u0432\u044B\u043C \u2014 \u0432 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0430\u0445 \u0422\u042B \u0431\u0443\u0434\u0435\u0448\u044C \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u043C!":"\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438! \u041F\u043E\u0434\u043E\u0436\u0434\u0438 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043E\u043A."),this.focus=0,K(this,Me,Fa).call(this,K(this,Me,Ns).call(this))}}else this.ui.toast(t.byPlayer?`\u041F\u043E\u043F\u0430\u043B\u0441\u044F: ${r.name}! \u{1F383}+${t.phase==="hide"?Ce.round.reward.found:Ce.round.reward.catch}`:`${t.phase==="hide"?"\u041D\u0430\u0448\u043B\u0438":"\u0414\u043E\u0433\u043D\u0430\u043B\u0438"}: ${r.name}`);r.isPlayer&&t.phase==="chase"&&(this.round.phase="over",K(this,Me,Xh).call(this,i.result()))}else if(t.type==="poof")this.addFx(wh(this.scene,t.x,t.y,t.z,t.ghost?13215999:16773590)),(s=t.agent)!=null&&s.isPlayer&&t.kind&&this.ui.toast(`\u0422\u044B \u043F\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u043B\u0441\u044F: ${t.kind}!`);else if(t.type==="phase"){this.ui.phase("chase"),this.sound.ghostAppear(),this.cam.shake=.8,t.newGhostIsPlayer?this.ui.toast("\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438 \u043F\u0435\u0440\u0432\u044B\u043C \u2014 \u0442\u0435\u043F\u0435\u0440\u044C \u0422\u042B \u0411\u0435\u0437\u043B\u0438\u043A! \u0414\u043E\u0433\u043E\u043D\u044F\u0439 \u0432\u0441\u0435\u0445!"):i.mode==="hunter"?this.ui.toast("\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438! \u0421 \u0442\u043E\u0431\u043E\u0439 \u0435\u0449\u0451 3 \u0411\u0435\u0437\u043B\u0438\u043A\u0430 \u2014 \u043B\u043E\u0432\u0438 \u0432\u0441\u0435\u0445!"):this.ui.toast(`\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438! \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u043C \u0441\u0442\u0430\u043B(\u0430): ${t.newGhostName}. \u0411\u0435\u0433\u0438!`),K(this,Me,Vh).call(this),K(this,Me,vo).call(this);let r=K(this,Me,Ns).call(this);K(this,Me,Fa).call(this,r),this.cam.snap(K(this,Me,Zr).call(this,r))}else t.type==="end"&&K(this,Me,Xh).call(this,t.result)},ef=function(t){let i=this.round,s=t,r=[];for(let n of this.pumpkins.list)r.push({x:n.x,z:n.z,kind:"pumpkin"});let a=!!i.playerGhost;for(let n of i.agents)n.alive&&n!==s&&(!a||this.mode==="watch")&&r.push({x:n.ctrl.pos.x,z:n.ctrl.pos.z,kind:"ally"});for(let n of i.activeGhosts){if(n.state==="hidden"||n===s)continue;(a||this.mode==="watch"||!n.disguised&&this.world.lineOfSight(s.ctrl.pos.x,s.ctrl.pos.z,n.pos.x,n.pos.z,!0,s.ctrl.pos.y+1.4,n.eyeY))&&r.push({x:n.pos.x,z:n.pos.z,kind:"ghost"})}r.push({x:s.ctrl.pos.x,z:s.ctrl.pos.z,kind:"me"}),this.ui.minimap(s.ctrl.pos,this.cam.yaw,r)},tf=function(){let t=this.round,i=t.playerGhost;if(i){let s=i.ctrl,r=s.phys.dash;this.ui.cooldowns(a=>{if(a==="dash")return{k:s.dashCharges>0?s.dashCd/r.cooldown:1-s.chargeT/r.recharge,n:s.dashCharges};if(a==="mask-hero"||a==="mask-prop")return{k:i.disguised?0:i.disguiseCd/Ce.ghost.disguise.cd,n:i.disguised?Math.ceil(i.disguise.t):""};if(a==="fly")return{k:1-s.flyEnergy}})}else if(t.player){let s=t.player.ctrl,r=t.player.abilities;this.ui.cooldowns(a=>{if(a==="dash")return{k:s.dashCd/s.phys.dash.cooldown};let n=r.get(a);return{k:n?n.cdLeft/r.cooldown(n):0}})}},sf=function(t){let i=null;for(let s of this.ghosts){if(s.state==="hidden")continue;let r=Math.hypot(s.pos.x-t.x,s.pos.z-t.z);(!i||r<i.d)&&(i={g:s,d:r})}return i},fs=function(){var r,a,n;let t=Math.max(1,document.documentElement.clientWidth||innerWidth),i=Math.max(1,document.documentElement.clientHeight||innerHeight),s=t!==i?t>i:typeof window.orientation=="number"?Math.abs(window.orientation)===90:!!((n=(a=(r=window.screen)==null?void 0:r.orientation)==null?void 0:a.type)!=null&&n.startsWith("landscape"));document.documentElement.classList.toggle("landscape",s),requestAnimationFrame(()=>{let o=Math.max(1,document.documentElement.clientWidth||innerWidth),l=Math.max(1,document.documentElement.clientHeight||innerHeight);this.camera.aspect=o/l,this.camera.updateProjectionMatrix(),this.insetCamera.aspect=o/l,this.insetCamera.updateProjectionMatrix(),this.renderer.setSize(o,l,!1)})};var Ba=()=>new Promise(e=>setTimeout(e,0));async function f1(){window.__bootStage="\u0433\u043E\u0442\u043E\u0432\u0438\u043C \u0438\u0433\u0440\u0443";try{typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.roundRect&&(CanvasRenderingContext2D.prototype.roundRect=function(t,i,s,r,a=0){return a=Math.min(Array.isArray(a)?a[0]||0:a,s/2,r/2),this.moveTo(t+a,i),this.arcTo(t+s,i,t+s,i+r,a),this.arcTo(t+s,i+r,t,i+r,a),this.arcTo(t,i+r,t,i,a),this.arcTo(t,i,t+s,i,a),this.closePath(),this}),await new _o(document.getElementById("scene")).start(),window.__started=!0}catch(e){window.__bootFailed=!0,console.error(e);let t=document.querySelector(".load-text");t&&(t.textContent="\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0438\u0433\u0440\u0443: "+((e==null?void 0:e.message)||String(e)))}}window.__bootEntered=!0;f1();})();
/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/
