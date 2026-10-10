(()=>{var _c=e=>{throw TypeError(e)};var Cf=(e,t,i)=>t.has(e)||_c("Cannot "+i);var Ot=(e,t,i)=>t.has(e)?_c("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i);var ae=(e,t,i)=>(Cf(e,t,"access private method"),i);var No,Uo,Do,Oo,sn,Bo;var Pf=0,Sc=1,If=2;var zr=1,Lf=2,Sa=3,gs=0,ci=1,Gt=2,fs=0,Ea=1,Bt=2,Mc=3,bc=4,Nf=5;var Dr=100,Uf=101,Df=102,Of=103,Bf=104,Ff=200,zf=201,kf=202,Hf=203,Bu=204,Fu=205,Gf=206,Vf=207,Wf=208,jf=209,Xf=210,qf=211,Yf=212,Zf=213,$f=214,bl=0,El=1,Tl=2,Ra=3,wl=4,Al=5,Rl=6,Cl=7,zu=0,Jf=1,Kf=2,Ki=0,ku=1,Hu=2,Gu=3,Zr=4,Vu=5,Wu=6,ju=7;var Xu=300,sr=301,Vr=302,Fo=303,zo=304,Jn=306,Ri=1e3,ps=1001,Pl=1002,mi=1003,Qf=1004;var rn=1005;var Si=1006,ko=1007;var er=1008;var Li=1009,qu=1010,Yu=1011,Ca=1012,mh=1013,es=1014,$i=1015,ts=1016,gh=1017,vh=1018,Pa=1020,Zu=35902,$u=35899,Ju=1021,Ku=1022,Hi=1023,vs=1026,tr=1027,Qu=1028,yh=1029,rr=1030,xh=1031;var _h=1033,On=33776,Bn=33777,Fn=33778,zn=33779,Il=35840,Ll=35841,Nl=35842,Ul=35843,Dl=36196,Ol=37492,Bl=37496,Fl=37488,zl=37489,Vn=37490,kl=37491,Hl=37808,Gl=37809,Vl=37810,Wl=37811,jl=37812,Xl=37813,ql=37814,Yl=37815,Zl=37816,$l=37817,Jl=37818,Kl=37819,Ql=37820,eh=37821,th=36492,ih=36494,sh=36495,rh=36283,ah=36284,Wn=36285,nh=36286;var jn=2300,oh=2301,Ho=2302,Ec=2303,Tc=2400,wc=2401,Ac=2402;var em=3200;var lh=0,tm=1,Ds="",ii="srgb",Xn="srgb-linear",qn="linear",wt="srgb";var Go=7680;var im=519,sm=512,rm=513,am=514,Sh=515,nm=516,om=517,Mh=518,lm=519,ed=35044;var Rc="300 es",Gi=2e3,Ia=2001;function hm(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function cm(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function La(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function um(){let e=La("canvas");return e.style.display="block",e}var Cc={},Wr=null;function Yn(...e){let t="THREE."+e.shift();Wr?Wr("log",t,...e):console.log(t,...e)}function td(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function st(...e){e=td(e);let t="THREE."+e.shift();if(Wr)Wr("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function it(...e){e=td(e);let t="THREE."+e.shift();if(Wr)Wr("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function kr(...e){let t=e.join(" ");t in Cc||(Cc[t]=!0,st(...e))}function dm(e,t,i){return new Promise(function(s,r){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(a,i);break;default:s()}}setTimeout(a,i)})}var pm={[bl]:El,[Tl]:Rl,[wl]:Cl,[Ra]:Al,[El]:bl,[Rl]:Tl,[Cl]:wl,[Al]:Ra},nr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},xi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pc=1234567,Hr=Math.PI/180,Na=180/Math.PI;function Qi(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(xi[e&255]+xi[e>>8&255]+xi[e>>16&255]+xi[e>>24&255]+"-"+xi[t&255]+xi[t>>8&255]+"-"+xi[t>>16&15|64]+xi[t>>24&255]+"-"+xi[i&63|128]+xi[i>>8&255]+"-"+xi[i>>16&255]+xi[i>>24&255]+xi[s&255]+xi[s>>8&255]+xi[s>>16&255]+xi[s>>24&255]).toLowerCase()}function pt(e,t,i){return Math.max(t,Math.min(i,e))}function bh(e,t){return(e%t+t)%t}function fm(e,t,i,s,r){return s+(e-t)*(r-s)/(i-t)}function mm(e,t,i){return e!==t?(i-e)/(t-e):0}function Ta(e,t,i){return(1-i)*e+i*t}function gm(e,t,i,s){return Ta(e,t,1-Math.exp(-i*s))}function vm(e,t=1){return t-Math.abs(bh(e,t*2)-t)}function ym(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function xm(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function _m(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Sm(e,t){return e+Math.random()*(t-e)}function Mm(e){return e*(.5-Math.random())}function bm(e){e!==void 0&&(Pc=e);let t=Pc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Em(e){return e*Hr}function Tm(e){return e*Na}function wm(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Am(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Rm(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Cm(e,t,i,s,r){let a=Math.cos,n=Math.sin,l=a(i/2),o=n(i/2),h=a((t+s)/2),u=n((t+s)/2),d=a((t-s)/2),c=n((t-s)/2),p=a((s-t)/2),v=n((s-t)/2);switch(r){case"XYX":e.set(l*u,o*d,o*c,l*h);break;case"YZY":e.set(o*c,l*u,o*d,l*h);break;case"ZXZ":e.set(o*d,o*c,l*u,l*h);break;case"XZX":e.set(l*u,o*v,o*p,l*h);break;case"YXY":e.set(o*p,l*u,o*v,l*h);break;case"ZYZ":e.set(o*v,o*p,l*u,l*h);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ki(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function At(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var It={DEG2RAD:Hr,RAD2DEG:Na,generateUUID:Qi,clamp:pt,euclideanModulo:bh,mapLinear:fm,inverseLerp:mm,lerp:Ta,damp:gm,pingpong:vm,smoothstep:ym,smootherstep:xm,randInt:_m,randFloat:Sm,randFloatSpread:Mm,seededRandom:bm,degToRad:Em,radToDeg:Tm,isPowerOfTwo:wm,ceilPowerOfTwo:Am,floorPowerOfTwo:Rm,setQuaternionFromProperEuler:Cm,normalize:At,denormalize:ki},be=(No=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},No.prototype.isVector2=!0,No),ys=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,n){let l=i[s+0],o=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],c=r[a+1],p=r[a+2],v=r[a+3];if(u!==v||l!==d||o!==c||h!==p){let _=l*d+o*c+h*p+u*v;_<0&&(d=-d,c=-c,p=-p,v=-v,_=-_);let g=1-n;if(_<.9995){let f=Math.acos(_),x=Math.sin(f);g=Math.sin(g*f)/x,n=Math.sin(n*f)/x,l=l*g+d*n,o=o*g+c*n,h=h*g+p*n,u=u*g+v*n}else{l=l*g+d*n,o=o*g+c*n,h=h*g+p*n,u=u*g+v*n;let f=1/Math.sqrt(l*l+o*o+h*h+u*u);l*=f,o*=f,h*=f,u*=f}}e[t]=l,e[t+1]=o,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let n=i[s],l=i[s+1],o=i[s+2],h=i[s+3],u=r[a],d=r[a+1],c=r[a+2],p=r[a+3];return e[t]=n*p+h*u+l*c-o*d,e[t+1]=l*p+h*d+o*u-n*c,e[t+2]=o*p+h*c+n*d-l*u,e[t+3]=h*p-n*u-l*d-o*c,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,n=Math.cos,l=Math.sin,o=n(i/2),h=n(s/2),u=n(r/2),d=l(i/2),c=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+o*c*p,this._y=o*c*u-d*h*p,this._z=o*h*p+d*c*u,this._w=o*h*u-d*c*p;break;case"YXZ":this._x=d*h*u+o*c*p,this._y=o*c*u-d*h*p,this._z=o*h*p-d*c*u,this._w=o*h*u+d*c*p;break;case"ZXY":this._x=d*h*u-o*c*p,this._y=o*c*u+d*h*p,this._z=o*h*p+d*c*u,this._w=o*h*u-d*c*p;break;case"ZYX":this._x=d*h*u-o*c*p,this._y=o*c*u+d*h*p,this._z=o*h*p-d*c*u,this._w=o*h*u+d*c*p;break;case"YZX":this._x=d*h*u+o*c*p,this._y=o*c*u+d*h*p,this._z=o*h*p-d*c*u,this._w=o*h*u-d*c*p;break;case"XZY":this._x=d*h*u-o*c*p,this._y=o*c*u-d*h*p,this._z=o*h*p+d*c*u,this._w=o*h*u+d*c*p;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],n=t[5],l=t[9],o=t[2],h=t[6],u=t[10],d=i+n+u;if(d>0){let c=.5/Math.sqrt(d+1);this._w=.25/c,this._x=(h-l)*c,this._y=(r-o)*c,this._z=(a-s)*c}else if(i>n&&i>u){let c=2*Math.sqrt(1+i-n-u);this._w=(h-l)/c,this._x=.25*c,this._y=(s+a)/c,this._z=(r+o)/c}else if(n>u){let c=2*Math.sqrt(1+n-i-u);this._w=(r-o)/c,this._x=(s+a)/c,this._y=.25*c,this._z=(l+h)/c}else{let c=2*Math.sqrt(1+u-i-n);this._w=(a-s)/c,this._x=(r+o)/c,this._y=(l+h)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,n=t._x,l=t._y,o=t._z,h=t._w;return this._x=i*h+a*n+s*o-r*l,this._y=s*h+a*l+r*n-i*o,this._z=r*h+a*o+i*l-s*n,this._w=a*h-i*n-s*l-r*o,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,n=this.dot(e);n<0&&(i=-i,s=-s,r=-r,a=-a,n=-n);let l=1-t;if(n<.9995){let o=Math.acos(n),h=Math.sin(o);l=Math.sin(l*o)/h,t=Math.sin(t*o)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=(Uo=class{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ic.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ic.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,n=e.z,l=e.w,o=2*(a*s-n*i),h=2*(n*t-r*s),u=2*(r*i-a*t);return this.x=t+l*o+a*u-n*h,this.y=i+l*h+n*o-r*u,this.z=s+l*u+r*h-a*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,n=t.y,l=t.z;return this.x=s*l-r*n,this.y=r*a-i*l,this.z=i*n-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vo.copy(this).projectOnVector(e),this.sub(Vo)}reflect(e){return this.sub(Vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Uo.prototype.isVector3=!0,Uo),Vo=new U,Ic=new ys,lt=(Do=class{constructor(e,t,i,s,r,a,n,l,o){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,n,l,o)}set(e,t,i,s,r,a,n,l,o){let h=this.elements;return h[0]=e,h[1]=s,h[2]=n,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],n=i[3],l=i[6],o=i[1],h=i[4],u=i[7],d=i[2],c=i[5],p=i[8],v=s[0],_=s[3],g=s[6],f=s[1],x=s[4],b=s[7],y=s[2],S=s[5],A=s[8];return r[0]=a*v+n*f+l*y,r[3]=a*_+n*x+l*S,r[6]=a*g+n*b+l*A,r[1]=o*v+h*f+u*y,r[4]=o*_+h*x+u*S,r[7]=o*g+h*b+u*A,r[2]=d*v+c*f+p*y,r[5]=d*_+c*x+p*S,r[8]=d*g+c*b+p*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],n=e[5],l=e[6],o=e[7],h=e[8];return t*a*h-t*n*o-i*r*h+i*n*l+s*r*o-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],n=e[5],l=e[6],o=e[7],h=e[8],u=h*a-n*o,d=n*l-h*r,c=o*r-a*l,p=t*u+i*d+s*c;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=u*v,e[1]=(s*o-h*i)*v,e[2]=(n*i-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-n*t)*v,e[6]=c*v,e[7]=(i*l-o*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,n){let l=Math.cos(r),o=Math.sin(r);return this.set(i*l,i*o,-i*(l*a+o*n)+a+e,-s*o,s*l,-s*(-o*a+l*n)+n+t,0,0,1),this}scale(e,t){return kr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wo.makeScale(e,t)),this}rotate(e){return kr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wo.makeRotation(-e)),this}translate(e,t){return kr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Do.prototype.isMatrix3=!0,Do),Wo=new lt,Lc=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nc=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pm(){let e={enabled:!0,workingColorSpace:Xn,spaces:{},convert:function(r,a,n){return this.enabled===!1||a===n||!a||!n||(this.spaces[a].transfer===wt&&(r.r=ms(r.r),r.g=ms(r.g),r.b=ms(r.b)),this.spaces[a].primaries!==this.spaces[n].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===wt&&(r.r=Gr(r.r),r.g=Gr(r.g),r.b=Gr(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ds?qn:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,n){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return kr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return kr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(r,a)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return e.define({[Xn]:{primaries:t,whitePoint:s,transfer:qn,toXYZ:Lc,fromXYZ:Nc,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:t,whitePoint:s,transfer:wt,toXYZ:Lc,fromXYZ:Nc,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),e}var _t=Pm();function ms(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Gr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var gr,Im=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gr===void 0&&(gr=La("canvas")),gr.width=e.width,gr.height=e.height;let s=gr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=gr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=La("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ms(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ms(t[i]/255)*255):t[i]=ms(t[i]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Lm=0,Eh=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=Qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,n=s.length;a<n;a++)s[a].isDataTexture?r.push(jo(s[a].image)):r.push(jo(s[a]))}else r=jo(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function jo(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Im.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}var Nm=0,Xo=new U,Ni=class kn extends nr{constructor(t=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,s=ps,r=ps,a=Si,n=er,l=Hi,o=Li,h=kn.DEFAULT_ANISOTROPY,u=Ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Qi(),this.name="",this.source=new Eh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=r,this.magFilter=a,this.minFilter=n,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=o,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xo).x}get height(){return this.source.getSize(Xo).y}get depth(){return this.source.getSize(Xo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let s=t[i];if(s===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let r=this[i];if(r===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}r&&s&&r.isVector2&&s.isVector2||r&&s&&r.isVector3&&s.isVector3||r&&s&&r.isMatrix3&&s.isMatrix3?r.copy(s):this[i]=s}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ri:t.x=t.x-Math.floor(t.x);break;case ps:t.x=t.x<0?0:1;break;case Pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ri:t.y=t.y-Math.floor(t.y);break;case ps:t.y=t.y<0?0:1;break;case Pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ni.DEFAULT_IMAGE=null,Ni.DEFAULT_MAPPING=Xu,Ni.DEFAULT_ANISOTROPY=1;var kt=(Oo=class{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,a=e.elements,n=a[0],l=a[4],o=a[8],h=a[1],u=a[5],d=a[9],c=a[2],p=a[6],v=a[10];if(Math.abs(l-h)<.01&&Math.abs(o-c)<.01&&Math.abs(d-p)<.01){if(Math.abs(l+h)<.1&&Math.abs(o+c)<.1&&Math.abs(d+p)<.1&&Math.abs(n+u+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(n+1)/2,f=(u+1)/2,x=(v+1)/2,b=(l+h)/4,y=(o+c)/4,S=(d+p)/4;return g>f&&g>x?g<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(g),s=b/i,r=y/i):f>x?f<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(f),i=b/s,r=S/s):x<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(x),i=y/r,s=S/r),this.set(i,s,r,t),this}let _=Math.sqrt((p-d)*(p-d)+(o-c)*(o-c)+(h-l)*(h-l));return Math.abs(_)<.001&&(_=1),this.x=(p-d)/_,this.y=(o-c)/_,this.z=(h-l)/_,this.w=Math.acos((n+u+v-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oo.prototype.isVector4=!0,Oo),Um=class extends nr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Ni(s),a=i.count;for(let n=0;n<a;n++)this.textures[n]=r.clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Si,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Eh(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vi=class extends Um{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},id=class extends Ni{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=mi,this.minFilter=mi,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Dm=class extends Ni{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=mi,this.minFilter=mi,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ft=(sn=class{constructor(e,t,i,s,r,a,n,l,o,h,u,d,c,p,v,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,n,l,o,h,u,d,c,p,v,_)}set(e,t,i,s,r,a,n,l,o,h,u,d,c,p,v,_){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=n,g[13]=l,g[2]=o,g[6]=h,g[10]=u,g[14]=d,g[3]=c,g[7]=p,g[11]=v,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/vr.setFromMatrixColumn(e,0).length(),r=1/vr.setFromMatrixColumn(e,1).length(),a=1/vr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),n=Math.sin(i),l=Math.cos(s),o=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,c=a*u,p=n*h,v=n*u;t[0]=l*h,t[4]=-l*u,t[8]=o,t[1]=c+p*o,t[5]=d-v*o,t[9]=-n*l,t[2]=v-d*o,t[6]=p+c*o,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,c=l*u,p=o*h,v=o*u;t[0]=d+v*n,t[4]=p*n-c,t[8]=a*o,t[1]=a*u,t[5]=a*h,t[9]=-n,t[2]=c*n-p,t[6]=v+d*n,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,c=l*u,p=o*h,v=o*u;t[0]=d-v*n,t[4]=-a*u,t[8]=p+c*n,t[1]=c+p*n,t[5]=a*h,t[9]=v-d*n,t[2]=-a*o,t[6]=n,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,c=a*u,p=n*h,v=n*u;t[0]=l*h,t[4]=p*o-c,t[8]=d*o+v,t[1]=l*u,t[5]=v*o+d,t[9]=c*o-p,t[2]=-o,t[6]=n*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,c=a*o,p=n*l,v=n*o;t[0]=l*h,t[4]=v-d*u,t[8]=p*u+c,t[1]=u,t[5]=a*h,t[9]=-n*h,t[2]=-o*h,t[6]=c*u+p,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,c=a*o,p=n*l,v=n*o;t[0]=l*h,t[4]=-u,t[8]=o*h,t[1]=d*u+v,t[5]=a*h,t[9]=c*u-p,t[2]=p*u-c,t[6]=n*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Om,e,Bm)}lookAt(e,t,i){let s=this.elements;return Pi.subVectors(e,t),Pi.lengthSq()===0&&(Pi.z=1),Pi.normalize(),Cs.crossVectors(i,Pi),Cs.lengthSq()===0&&(Math.abs(i.z)===1?Pi.x+=1e-4:Pi.z+=1e-4,Pi.normalize(),Cs.crossVectors(i,Pi)),Cs.normalize(),an.crossVectors(Pi,Cs),s[0]=Cs.x,s[4]=an.x,s[8]=Pi.x,s[1]=Cs.y,s[5]=an.y,s[9]=Pi.y,s[2]=Cs.z,s[6]=an.z,s[10]=Pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],n=i[4],l=i[8],o=i[12],h=i[1],u=i[5],d=i[9],c=i[13],p=i[2],v=i[6],_=i[10],g=i[14],f=i[3],x=i[7],b=i[11],y=i[15],S=s[0],A=s[4],w=s[8],m=s[12],M=s[1],D=s[5],C=s[9],B=s[13],J=s[2],z=s[6],k=s[10],X=s[14],Z=s[3],he=s[7],ee=s[11],te=s[15];return r[0]=a*S+n*M+l*J+o*Z,r[4]=a*A+n*D+l*z+o*he,r[8]=a*w+n*C+l*k+o*ee,r[12]=a*m+n*B+l*X+o*te,r[1]=h*S+u*M+d*J+c*Z,r[5]=h*A+u*D+d*z+c*he,r[9]=h*w+u*C+d*k+c*ee,r[13]=h*m+u*B+d*X+c*te,r[2]=p*S+v*M+_*J+g*Z,r[6]=p*A+v*D+_*z+g*he,r[10]=p*w+v*C+_*k+g*ee,r[14]=p*m+v*B+_*X+g*te,r[3]=f*S+x*M+b*J+y*Z,r[7]=f*A+x*D+b*z+y*he,r[11]=f*w+x*C+b*k+y*ee,r[15]=f*m+x*B+b*X+y*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],n=e[5],l=e[9],o=e[13],h=e[2],u=e[6],d=e[10],c=e[14],p=e[3],v=e[7],_=e[11],g=e[15],f=l*c-o*d,x=n*c-o*u,b=n*d-l*u,y=a*c-o*h,S=a*d-l*h,A=a*u-n*h;return t*(v*f-_*x+g*b)-i*(p*f-_*y+g*S)+s*(p*x-v*y+g*A)-r*(p*b-v*S+_*A)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],n=e[9],l=e[2],o=e[6],h=e[10];return t*(a*h-n*o)-i*(r*h-n*l)+s*(r*o-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],n=e[5],l=e[6],o=e[7],h=e[8],u=e[9],d=e[10],c=e[11],p=e[12],v=e[13],_=e[14],g=e[15],f=t*n-i*a,x=t*l-s*a,b=t*o-r*a,y=i*l-s*n,S=i*o-r*n,A=s*o-r*l,w=h*v-u*p,m=h*_-d*p,M=h*g-c*p,D=u*_-d*v,C=u*g-c*v,B=d*g-c*_,J=f*B-x*C+b*D+y*M-S*m+A*w;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/J;return e[0]=(n*B-l*C+o*D)*z,e[1]=(s*C-i*B-r*D)*z,e[2]=(v*A-_*S+g*y)*z,e[3]=(d*S-u*A-c*y)*z,e[4]=(l*M-a*B-o*m)*z,e[5]=(t*B-s*M+r*m)*z,e[6]=(_*b-p*A-g*x)*z,e[7]=(h*A-d*b+c*x)*z,e[8]=(a*C-n*M+o*w)*z,e[9]=(i*M-t*C-r*w)*z,e[10]=(p*S-v*b+g*f)*z,e[11]=(u*b-h*S-c*f)*z,e[12]=(n*m-a*D-l*w)*z,e[13]=(t*D-i*m+s*w)*z,e[14]=(v*x-p*y-_*f)*z,e[15]=(h*y-u*x+d*f)*z,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,n=e.y,l=e.z,o=r*a,h=r*n;return this.set(o*a+i,o*n-s*l,o*l+s*n,0,o*n+s*l,h*n+i,h*l-s*a,0,o*l-s*n,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,n=t._z,l=t._w,o=r+r,h=a+a,u=n+n,d=r*o,c=r*h,p=r*u,v=a*h,_=a*u,g=n*u,f=l*o,x=l*h,b=l*u,y=i.x,S=i.y,A=i.z;return s[0]=(1-(v+g))*y,s[1]=(c+b)*y,s[2]=(p-x)*y,s[3]=0,s[4]=(c-b)*S,s[5]=(1-(d+g))*S,s[6]=(_+f)*S,s[7]=0,s[8]=(p+x)*A,s[9]=(_-f)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=vr.set(s[0],s[1],s[2]).length(),n=vr.set(s[4],s[5],s[6]).length(),l=vr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Bi.copy(this);let o=1/a,h=1/n,u=1/l;return Bi.elements[0]*=o,Bi.elements[1]*=o,Bi.elements[2]*=o,Bi.elements[4]*=h,Bi.elements[5]*=h,Bi.elements[6]*=h,Bi.elements[8]*=u,Bi.elements[9]*=u,Bi.elements[10]*=u,t.setFromRotationMatrix(Bi),i.x=a,i.y=n,i.z=l,this}makePerspective(e,t,i,s,r,a,n=Gi,l=!1){let o=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),c=(i+s)/(i-s),p,v;if(l)p=r/(a-r),v=a*r/(a-r);else if(n===Gi)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(n===Ia)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+n);return o[0]=h,o[4]=0,o[8]=d,o[12]=0,o[1]=0,o[5]=u,o[9]=c,o[13]=0,o[2]=0,o[6]=0,o[10]=p,o[14]=v,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,s,r,a,n=Gi,l=!1){let o=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),c=-(i+s)/(i-s),p,v;if(l)p=1/(a-r),v=a/(a-r);else if(n===Gi)p=-2/(a-r),v=-(a+r)/(a-r);else if(n===Ia)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+n);return o[0]=h,o[4]=0,o[8]=0,o[12]=d,o[1]=0,o[5]=u,o[9]=0,o[13]=c,o[2]=0,o[6]=0,o[10]=p,o[14]=v,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},sn.prototype.isMatrix4=!0,sn),vr=new U,Bi=new ft,Om=new U(0,0,0),Bm=new U(1,1,1),Cs=new U,an=new U,Pi=new U,Uc=new ft,Dc=new ys,jr=class sd{constructor(t=0,i=0,s=0,r=sd.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,r=this._order){return this._x=t,this._y=i,this._z=s,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){let r=t.elements,a=r[0],n=r[4],l=r[8],o=r[1],h=r[5],u=r[9],d=r[2],c=r[6],p=r[10];switch(i){case"XYZ":this._y=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-n,a)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(o,h)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-n,h)):(this._y=0,this._z=Math.atan2(o,a));break;case"ZYX":this._y=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,p),this._z=Math.atan2(o,a)):(this._x=0,this._z=Math.atan2(-n,h));break;case"YZX":this._z=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-pt(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uc,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jr.DEFAULT_ORDER="XYZ";var Th=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fm=0,Oc=new U,yr=new ys,ls=new ft,nn=new U,ca=new U,zm=new U,km=new ys,Bc=new U(1,0,0),Fc=new U(0,1,0),zc=new U(0,0,1),kc={type:"added"},Hm={type:"removed"},xr={type:"childadded",child:null},qo={type:"childremoved",child:null},Ai=class Hn extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();let t=new U,i=new jr,s=new ys,r=new U(1,1,1);function a(){s.setFromEuler(i,!1)}function n(){i.setFromQuaternion(s,void 0,!1)}i._onChange(a),s._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new lt}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.multiply(yr),this}rotateOnWorldAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.premultiply(yr),this}rotateX(t){return this.rotateOnAxis(Bc,t)}rotateY(t){return this.rotateOnAxis(Fc,t)}rotateZ(t){return this.rotateOnAxis(zc,t)}translateOnAxis(t,i){return Oc.copy(t).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Bc,t)}translateY(t){return this.translateOnAxis(Fc,t)}translateZ(t){return this.translateOnAxis(zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ls.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?nn.copy(t):nn.set(t,i,s);let r=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ls.lookAt(ca,nn,this.up):ls.lookAt(nn,ca,this.up),this.quaternion.setFromRotationMatrix(ls),r&&(ls.extractRotation(r.matrixWorld),yr.setFromRotationMatrix(ls),this.quaternion.premultiply(yr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(it("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kc),xr.child=t,this.dispatchEvent(xr),xr.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Hm),qo.child=t,this.dispatchEvent(qo),qo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ls.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ls.multiply(t.parent.matrixWorld)),t.applyMatrix4(ls),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kc),xr.child=t,this.dispatchEvent(xr),xr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,r=this.children.length;s<r;s++){let a=this.children[s].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);let r=this.children;for(let a=0,n=r.length;a<n;a++)r[a].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,t,zm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,km,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,s=t.y,r=t.z,a=this.matrix.elements;a[12]+=i-a[0]*i-a[4]*s-a[8]*r,a[13]+=s-a[1]*i-a[5]*s-a[9]*r,a[14]+=r-a[2]*i-a[6]*s-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){let a=this.children;for(let n=0,l=a.length;n<l;n++)a[n].updateWorldMatrix(!1,!0,s)}}toJSON(t){let i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let o=l.shapes;if(Array.isArray(o))for(let h=0,u=o.length;h<u;h++){let d=o[h];a(t.shapes,d)}else a(t.shapes,o)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let o=0,h=this.material.length;o<h;o++)l.push(a(t.materials,this.material[o]));r.material=l}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){let o=this.animations[l];r.animations.push(a(t.animations,o))}}if(i){let l=n(t.geometries),o=n(t.materials),h=n(t.textures),u=n(t.images),d=n(t.shapes),c=n(t.skeletons),p=n(t.animations),v=n(t.nodes);l.length>0&&(s.geometries=l),o.length>0&&(s.materials=o),h.length>0&&(s.textures=h),u.length>0&&(s.images=u),d.length>0&&(s.shapes=d),c.length>0&&(s.skeletons=c),p.length>0&&(s.animations=p),v.length>0&&(s.nodes=v)}return s.object=r,s;function n(l){let o=[];for(let h in l){let u=l[h];delete u.metadata,o.push(u)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){let r=t.children[s];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ai.DEFAULT_UP=new U(0,1,0),Ai.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ht=class extends Ai{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gm={type:"move"},Yo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,n=this._targetRay,l=this._grip,o=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(o&&e.hand){a=!0;for(let v of e.hand.values()){let _=t.getJointPose(v,i),g=this._getHandJoint(o,v);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}let h=o.joints["index-finger-tip"],u=o.joints["thumb-tip"],d=h.position.distanceTo(u.position),c=.02,p=.005;o.inputState.pinching&&d>c+p?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&d<=c-p&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));n!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(n.matrix.fromArray(s.transform.matrix),n.matrix.decompose(n.position,n.rotation,n.scale),n.matrixWorldNeedsUpdate=!0,s.linearVelocity?(n.hasLinearVelocity=!0,n.linearVelocity.copy(s.linearVelocity)):n.hasLinearVelocity=!1,s.angularVelocity?(n.hasAngularVelocity=!0,n.angularVelocity.copy(s.angularVelocity)):n.hasAngularVelocity=!1,this.dispatchEvent(Gm)))}return n!==null&&(n.visible=s!==null),l!==null&&(l.visible=r!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ht;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ps={h:0,s:0,l:0},on={h:0,s:0,l:0};function Zo(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=_t.workingColorSpace){if(e=bh(e,1),t=pt(t,0,1),i=pt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Zo(a,r,e+1/3),this.g=Zo(a,r,e),this.b=Zo(a,r,e-1/3)}return _t.colorSpaceToWorking(this,s),this}setStyle(e,t=ii){function i(r){r!==void 0&&parseFloat(r)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],n=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ii){let i=rd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return _t.workingToColorSpace(_i.copy(this),e),Math.round(pt(_i.r*255,0,255))*65536+Math.round(pt(_i.g*255,0,255))*256+Math.round(pt(_i.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(_i.copy(this),t);let i=_i.r,s=_i.g,r=_i.b,a=Math.max(i,s,r),n=Math.min(i,s,r),l,o,h=(n+a)/2;if(n===a)l=0,o=0;else{let u=a-n;switch(o=h<=.5?u/(a+n):u/(2-a-n),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=o,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(_i.copy(this),t),e.r=_i.r,e.g=_i.g,e.b=_i.b,e}getStyle(e=ii){_t.workingToColorSpace(_i.copy(this),e);let t=_i.r,i=_i.g,s=_i.b;return e!==ii?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ps),this.setHSL(Ps.h+e,Ps.s+t,Ps.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ps),e.getHSL(on);let i=Ta(Ps.h,on.h,t),s=Ta(Ps.s,on.s,t),r=Ta(Ps.l,on.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_i=new Qe;Qe.NAMES=rd;var Kn=class ad{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qe(t),this.density=i}clone(){return new ad(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Fa=class extends Ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jr,this.environmentIntensity=1,this.environmentRotation=new jr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fi=new U,hs=new U,$o=new U,cs=new U,_r=new U,Sr=new U,Hc=new U,Jo=new U,Ko=new U,Qo=new U,el=new kt,tl=new kt,il=new kt,Qs=class Or{constructor(t=new U,i=new U,s=new U){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,r){r.subVectors(s,i),Fi.subVectors(t,i),r.cross(Fi);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(t,i,s,r,a){Fi.subVectors(r,i),hs.subVectors(s,i),$o.subVectors(t,i);let n=Fi.dot(Fi),l=Fi.dot(hs),o=Fi.dot($o),h=hs.dot(hs),u=hs.dot($o),d=n*h-l*l;if(d===0)return a.set(0,0,0),null;let c=1/d,p=(h*o-l*u)*c,v=(n*u-l*o)*c;return a.set(1-p-v,v,p)}static containsPoint(t,i,s,r){return this.getBarycoord(t,i,s,r,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getInterpolation(t,i,s,r,a,n,l,o){return this.getBarycoord(t,i,s,r,cs)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(a,cs.x),o.addScaledVector(n,cs.y),o.addScaledVector(l,cs.z),o)}static getInterpolatedAttribute(t,i,s,r,a,n){return el.setScalar(0),tl.setScalar(0),il.setScalar(0),el.fromBufferAttribute(t,i),tl.fromBufferAttribute(t,s),il.fromBufferAttribute(t,r),n.setScalar(0),n.addScaledVector(el,a.x),n.addScaledVector(tl,a.y),n.addScaledVector(il,a.z),n}static isFrontFacing(t,i,s,r){return Fi.subVectors(s,i),hs.subVectors(t,i),Fi.cross(hs).dot(r)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,r){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,i,s,r){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fi.subVectors(this.c,this.b),hs.subVectors(this.a,this.b),Fi.cross(hs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Or.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Or.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,r,a){return Or.getInterpolation(t,this.a,this.b,this.c,i,s,r,a)}containsPoint(t){return Or.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Or.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let s=this.a,r=this.b,a=this.c,n,l;_r.subVectors(r,s),Sr.subVectors(a,s),Jo.subVectors(t,s);let o=_r.dot(Jo),h=Sr.dot(Jo);if(o<=0&&h<=0)return i.copy(s);Ko.subVectors(t,r);let u=_r.dot(Ko),d=Sr.dot(Ko);if(u>=0&&d<=u)return i.copy(r);let c=o*d-u*h;if(c<=0&&o>=0&&u<=0)return n=o/(o-u),i.copy(s).addScaledVector(_r,n);Qo.subVectors(t,a);let p=_r.dot(Qo),v=Sr.dot(Qo);if(v>=0&&p<=v)return i.copy(a);let _=p*h-o*v;if(_<=0&&h>=0&&v<=0)return l=h/(h-v),i.copy(s).addScaledVector(Sr,l);let g=u*v-p*d;if(g<=0&&d-u>=0&&p-v>=0)return Hc.subVectors(a,r),l=(d-u)/(d-u+(p-v)),i.copy(r).addScaledVector(Hc,l);let f=1/(g+_+c);return n=_*f,l=c*f,i.copy(s).addScaledVector(_r,n).addScaledVector(Sr,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Os=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,n=r.count;a<n;a++)e.isMesh===!0?e.getVertexPosition(a,zi):zi.fromBufferAttribute(r,a),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ln.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ln.copy(i.boundingBox)),ln.applyMatrix4(e.matrixWorld),this.union(ln)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),hn.subVectors(this.max,ua),Mr.subVectors(e.a,ua),br.subVectors(e.b,ua),Er.subVectors(e.c,ua),Is.subVectors(br,Mr),Ls.subVectors(Er,br),Ys.subVectors(Mr,Er);let t=[0,-Is.z,Is.y,0,-Ls.z,Ls.y,0,-Ys.z,Ys.y,Is.z,0,-Is.x,Ls.z,0,-Ls.x,Ys.z,0,-Ys.x,-Is.y,Is.x,0,-Ls.y,Ls.x,0,-Ys.y,Ys.x,0];return!sl(t,Mr,br,Er,hn)||(t=[1,0,0,0,1,0,0,0,1],!sl(t,Mr,br,Er,hn))?!1:(cn.crossVectors(Is,Ls),t=[cn.x,cn.y,cn.z],sl(t,Mr,br,Er,hn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(us[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),us[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),us[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),us[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),us[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),us[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),us[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),us[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(us),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},us=[new U,new U,new U,new U,new U,new U,new U,new U],zi=new U,ln=new Os,Mr=new U,br=new U,Er=new U,Is=new U,Ls=new U,Ys=new U,ua=new U,hn=new U,cn=new U,Zs=new U;function sl(e,t,i,s,r){for(let a=0,n=e.length-3;a<=n;a+=3){Zs.fromArray(e,a);let l=r.x*Math.abs(Zs.x)+r.y*Math.abs(Zs.y)+r.z*Math.abs(Zs.z),o=t.dot(Zs),h=i.dot(Zs),u=s.dot(Zs);if(Math.max(-Math.max(o,h,u),Math.min(o,h,u))>l)return!1}return!0}var z_=Vm();function Vm(){let e=new ArrayBuffer(4),t=new Float32Array(e),i=new Uint32Array(e),s=new Uint32Array(512),r=new Uint32Array(512);for(let o=0;o<256;++o){let h=o-127;h<-27?(s[o]=0,s[o|256]=32768,r[o]=24,r[o|256]=24):h<-14?(s[o]=1024>>-h-14,s[o|256]=1024>>-h-14|32768,r[o]=-h-1,r[o|256]=-h-1):h<=15?(s[o]=h+15<<10,s[o|256]=h+15<<10|32768,r[o]=13,r[o|256]=13):h<128?(s[o]=31744,s[o|256]=64512,r[o]=24,r[o|256]=24):(s[o]=31744,s[o|256]=64512,r[o]=13,r[o|256]=13)}let a=new Uint32Array(2048),n=new Uint32Array(64),l=new Uint32Array(64);for(let o=1;o<1024;++o){let h=o<<13,u=0;for(;!(h&8388608);)h<<=1,u-=8388608;h&=-8388609,u+=947912704,a[o]=h|u}for(let o=1024;o<2048;++o)a[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)n[o]=o<<23;n[31]=1199570944,n[32]=2147483648;for(let o=33;o<63;++o)n[o]=2147483648+(o-32<<23);n[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(l[o]=1024);return{floatView:t,uint32View:i,baseTable:s,shiftTable:r,mantissaTable:a,exponentTable:n,offsetTable:l}}var ti=new U,un=new be,Wm=0,$t=class extends nr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ed,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXY(t,un.x,un.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix3(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix4(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyNormalMatrix(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.transformDirection(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ki(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var nd=class extends $t{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var od=class extends $t{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var $e=class extends $t{constructor(e,t,i){super(new Float32Array(e),t,i)}},jm=new Os,da=new U,rl=new U,Bs=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):jm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);let t=da.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(da,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(rl)),this.expandByPoint(da.copy(e.center).sub(rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Xm=0,Oi=new ft,al=new Ai,Tr=new U,Ii=new Os,pa=new Os,hi=new U,yt=class ld extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hm(t)?od:nd)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let s=this.attributes.normal;if(s!==void 0){let a=new lt().getNormalMatrix(t);s.applyNormalMatrix(a),s.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Oi.makeRotationFromQuaternion(t),this.applyMatrix4(Oi),this}rotateX(t){return Oi.makeRotationX(t),this.applyMatrix4(Oi),this}rotateY(t){return Oi.makeRotationY(t),this.applyMatrix4(Oi),this}rotateZ(t){return Oi.makeRotationZ(t),this.applyMatrix4(Oi),this}translate(t,i,s){return Oi.makeTranslation(t,i,s),this.applyMatrix4(Oi),this}scale(t,i,s){return Oi.makeScale(t,i,s),this.applyMatrix4(Oi),this}lookAt(t){return al.lookAt(t),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let s=[];for(let r=0,a=t.length;r<a;r++){let n=t[r];s.push(n.x,n.y,n.z||0)}this.setAttribute("position",new $e(s,3))}else{let s=Math.min(t.length,i.count);for(let r=0;r<s;r++){let a=t[r];i.setXYZ(r,a.x,a.y,a.z||0)}t.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Os);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,r=i.length;s<r;s++){let a=i[s];Ii.setFromBufferAttribute(a),this.morphTargetsRelative?(hi.addVectors(this.boundingBox.min,Ii.min),this.boundingBox.expandByPoint(hi),hi.addVectors(this.boundingBox.max,Ii.max),this.boundingBox.expandByPoint(hi)):(this.boundingBox.expandByPoint(Ii.min),this.boundingBox.expandByPoint(Ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let s=this.boundingSphere.center;if(Ii.setFromBufferAttribute(t),i)for(let a=0,n=i.length;a<n;a++){let l=i[a];pa.setFromBufferAttribute(l),this.morphTargetsRelative?(hi.addVectors(Ii.min,pa.min),Ii.expandByPoint(hi),hi.addVectors(Ii.max,pa.max),Ii.expandByPoint(hi)):(Ii.expandByPoint(pa.min),Ii.expandByPoint(pa.max))}Ii.getCenter(s);let r=0;for(let a=0,n=t.count;a<n;a++)hi.fromBufferAttribute(t,a),r=Math.max(r,s.distanceToSquared(hi));if(i)for(let a=0,n=i.length;a<n;a++){let l=i[a],o=this.morphTargetsRelative;for(let h=0,u=l.count;h<u;h++)hi.fromBufferAttribute(l,h),o&&(Tr.fromBufferAttribute(t,h),hi.add(Tr)),r=Math.max(r,s.distanceToSquared(hi))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let s=i.position,r=i.normal,a=i.uv,n=this.getAttribute("tangent");(n===void 0||n.count!==s.count)&&(n=new $t(new Float32Array(4*s.count),4),this.setAttribute("tangent",n));let l=[],o=[];for(let m=0;m<s.count;m++)l[m]=new U,o[m]=new U;let h=new U,u=new U,d=new U,c=new be,p=new be,v=new be,_=new U,g=new U;function f(m,M,D){h.fromBufferAttribute(s,m),u.fromBufferAttribute(s,M),d.fromBufferAttribute(s,D),c.fromBufferAttribute(a,m),p.fromBufferAttribute(a,M),v.fromBufferAttribute(a,D),u.sub(h),d.sub(h),p.sub(c),v.sub(c);let C=1/(p.x*v.y-v.x*p.y);isFinite(C)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(C),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(C),l[m].add(_),l[M].add(_),l[D].add(_),o[m].add(g),o[M].add(g),o[D].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let m=0,M=x.length;m<M;++m){let D=x[m],C=D.start,B=D.count;for(let J=C,z=C+B;J<z;J+=3)f(t.getX(J+0),t.getX(J+1),t.getX(J+2))}let b=new U,y=new U,S=new U,A=new U;function w(m){S.fromBufferAttribute(r,m),A.copy(S);let M=l[m];b.copy(M),b.sub(S.multiplyScalar(S.dot(M))).normalize(),y.crossVectors(A,M);let D=y.dot(o[m])<0?-1:1;n.setXYZW(m,b.x,b.y,b.z,D)}for(let m=0,M=x.length;m<M;++m){let D=x[m],C=D.start,B=D.count;for(let J=C,z=C+B;J<z;J+=3)w(t.getX(J+0)),w(t.getX(J+1)),w(t.getX(J+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new $t(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let c=0,p=s.count;c<p;c++)s.setXYZ(c,0,0,0);let r=new U,a=new U,n=new U,l=new U,o=new U,h=new U,u=new U,d=new U;if(t)for(let c=0,p=t.count;c<p;c+=3){let v=t.getX(c+0),_=t.getX(c+1),g=t.getX(c+2);r.fromBufferAttribute(i,v),a.fromBufferAttribute(i,_),n.fromBufferAttribute(i,g),u.subVectors(n,a),d.subVectors(r,a),u.cross(d),l.fromBufferAttribute(s,v),o.fromBufferAttribute(s,_),h.fromBufferAttribute(s,g),l.add(u),o.add(u),h.add(u),s.setXYZ(v,l.x,l.y,l.z),s.setXYZ(_,o.x,o.y,o.z),s.setXYZ(g,h.x,h.y,h.z)}else for(let c=0,p=i.count;c<p;c+=3)r.fromBufferAttribute(i,c+0),a.fromBufferAttribute(i,c+1),n.fromBufferAttribute(i,c+2),u.subVectors(n,a),d.subVectors(r,a),u.cross(d),s.setXYZ(c+0,u.x,u.y,u.z),s.setXYZ(c+1,u.x,u.y,u.z),s.setXYZ(c+2,u.x,u.y,u.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)hi.fromBufferAttribute(t,i),hi.normalize(),t.setXYZ(i,hi.x,hi.y,hi.z)}toNonIndexed(){function t(l,o){let h=l.array,u=l.itemSize,d=l.normalized,c=new h.constructor(o.length*u),p=0,v=0;for(let _=0,g=o.length;_<g;_++){l.isInterleavedBufferAttribute?p=o[_]*l.data.stride+l.offset:p=o[_]*u;for(let f=0;f<u;f++)c[v++]=h[p++]}return new $t(c,u,d)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new ld,s=this.index.array,r=this.attributes;for(let l in r){let o=r[l],h=t(o,s);i.setAttribute(l,h)}let a=this.morphAttributes;for(let l in a){let o=[],h=a[l];for(let u=0,d=h.length;u<d;u++){let c=h[u],p=t(c,s);o.push(p)}i.morphAttributes[l]=o}i.morphTargetsRelative=this.morphTargetsRelative;let n=this.groups;for(let l=0,o=n.length;l<o;l++){let h=n[l];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let h in o)o[h]!==void 0&&(t[h]=o[h]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let s=this.attributes;for(let o in s){let h=s[o];t.data.attributes[o]=h.toJSON(t.data)}let r={},a=!1;for(let o in this.morphAttributes){let h=this.morphAttributes[o],u=[];for(let d=0,c=h.length;d<c;d++){let p=h[d];u.push(p.toJSON(t.data))}u.length>0&&(r[o]=u,a=!0)}a&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let n=this.groups;n.length>0&&(t.data.groups=JSON.parse(JSON.stringify(n)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let s=t.index;s!==null&&this.setIndex(s.clone());let r=t.attributes;for(let h in r){let u=r[h];this.setAttribute(h,u.clone(i))}let a=t.morphAttributes;for(let h in a){let u=[],d=a[h];for(let c=0,p=d.length;c<p;c++)u.push(d[c].clone(i));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let n=t.groups;for(let h=0,u=n.length;h<u;h++){let d=n[h];this.addGroup(d.start,d.count,d.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},qm=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ed,this.updateRanges=[],this.version=0,this.uuid=Qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Ti=new U,Gc=class hd{constructor(t,i,s,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Ti.fromBufferAttribute(this,i),Ti.applyMatrix4(t),this.setXYZ(i,Ti.x,Ti.y,Ti.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Ti.fromBufferAttribute(this,i),Ti.applyNormalMatrix(t),this.setXYZ(i,Ti.x,Ti.y,Ti.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Ti.fromBufferAttribute(this,i),Ti.transformDirection(t),this.setXYZ(i,Ti.x,Ti.y,Ti.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=ki(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=At(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=At(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=At(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=At(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=At(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=ki(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=ki(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=ki(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=ki(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=At(i,this.array),s=At(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=r,this}setXYZW(t,i,s,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=At(i,this.array),s=At(s,this.array),r=At(r,this.array),a=At(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=r,this.data.array[t+3]=a,this}clone(t){if(t===void 0){Yn("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let s=0;s<this.count;s++){let r=s*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)i.push(this.data.array[r+a])}return new $t(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new hd(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Yn("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let s=0;s<this.count;s++){let r=s*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)i.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},nl=new U,Ym=new U,Zm=new lt,Us=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=nl.subVectors(i,t).cross(Ym.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(nl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Zm.getNormalMatrix(e),s=this.coplanarPoint(nl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},$m=0,or=class extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=Ea,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bu,this.blendDst=Fu,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=im,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let n in r){let l=r[n];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Us().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new be().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ui=class extends or{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wr,fa=new U,Ar=new U,Rr=new U,Cr=new be,ma=new be,cd=new ft,dn=new U,ga=new U,pn=new U,Vc=new be,ol=new be,Wc=new be,gi=class extends Ai{constructor(e=new ui){if(super(),this.isSprite=!0,this.type="Sprite",wr===void 0){wr=new yt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new qm(t,5);wr.setIndex([0,1,2,0,2,3]),wr.setAttribute("position",new Gc(i,3,0,!1)),wr.setAttribute("uv",new Gc(i,2,3,!1))}this.geometry=wr,this.material=e,this.center=new be(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&it('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ar.setFromMatrixScale(this.matrixWorld),cd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ar.multiplyScalar(-Rr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;fn(dn.set(-.5,-.5,0),Rr,a,Ar,s,r),fn(ga.set(.5,-.5,0),Rr,a,Ar,s,r),fn(pn.set(.5,.5,0),Rr,a,Ar,s,r),Vc.set(0,0),ol.set(1,0),Wc.set(1,1);let n=e.ray.intersectTriangle(dn,ga,pn,!1,fa);if(n===null&&(fn(ga.set(-.5,.5,0),Rr,a,Ar,s,r),ol.set(0,1),n=e.ray.intersectTriangle(dn,pn,ga,!1,fa),n===null))return;let l=e.ray.origin.distanceTo(fa);l<e.near||l>e.far||t.push({distance:l,point:fa.clone(),uv:Qs.getInterpolation(fa,dn,ga,pn,Vc,ol,Wc,new be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function fn(e,t,i,s,r,a){Cr.subVectors(e,i).addScalar(.5).multiply(s),r!==void 0?(ma.x=a*Cr.x-r*Cr.y,ma.y=r*Cr.x+a*Cr.y):ma.copy(Cr),e.copy(t),e.x+=ma.x,e.y+=ma.y,e.applyMatrix4(cd)}var k_=new U,H_=new U;var ds=new U,ll=new U,mn=new U,gn=new U,za=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ds)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ds.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ds.copy(this.origin).addScaledVector(this.direction,t),ds.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ll.copy(e).add(t).multiplyScalar(.5),mn.copy(t).sub(e).normalize(),gn.copy(this.origin).sub(ll);let r=e.distanceTo(t)*.5,a=-this.direction.dot(mn),n=gn.dot(this.direction),l=-gn.dot(mn),o=gn.lengthSq(),h=Math.abs(1-a*a),u,d,c,p;if(h>0)if(u=a*l-n,d=a*n-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let v=1/h;u*=v,d*=v,c=u*(u+a*d+2*n)+d*(a*u+d+2*l)+o}else d=r,u=Math.max(0,-(a*d+n)),c=-u*u+d*(d+2*l)+o;else d=-r,u=Math.max(0,-(a*d+n)),c=-u*u+d*(d+2*l)+o;else d<=-p?(u=Math.max(0,-(-a*r+n)),d=u>0?-r:Math.min(Math.max(-r,-l),r),c=-u*u+d*(d+2*l)+o):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),c=d*(d+2*l)+o):(u=Math.max(0,-(a*r+n)),d=u>0?r:Math.min(Math.max(-r,-l),r),c=-u*u+d*(d+2*l)+o);else d=a>0?-r:r,u=Math.max(0,-(a*d+n)),c=-u*u+d*(d+2*l)+o;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ll).addScaledVector(mn,d),c}intersectSphere(e,t){if(e.radius<0)return null;ds.subVectors(e.center,this.origin);let i=ds.dot(this.direction),s=ds.dot(ds)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),n=i-a,l=i+a;return l<0?null:n<0?this.at(l,t):this.at(n,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,n,l,o=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return o>=0?(i=(e.min.x-d.x)*o,s=(e.max.x-d.x)*o):(i=(e.max.x-d.x)*o,s=(e.min.x-d.x)*o),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(n=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(n=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||n>s)||((n>i||i!==i)&&(i=n),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ds)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,n=this.direction,l=n.x,o=n.y,h=n.z,u=e.x-a.x,d=e.y-a.y,c=e.z-a.z,p=t.x-a.x,v=t.y-a.y,_=t.z-a.z,g=i.x-a.x,f=i.y-a.y,x=i.z-a.z,b=Math.abs(l),y=Math.abs(o),S=Math.abs(h),A,w,m,M,D,C,B,J,z,k,X,Z;if(b>=y&&b>=S?(m=l,C=u,z=p,Z=g,l>=0?(A=o,w=h,M=d,D=c,B=v,J=_,k=f,X=x):(A=h,w=o,M=c,D=d,B=_,J=v,k=x,X=f)):y>=S?(m=o,C=d,z=v,Z=f,o>=0?(A=h,w=l,M=c,D=u,B=_,J=p,k=x,X=g):(A=l,w=h,M=u,D=c,B=p,J=_,k=g,X=x)):(m=h,C=c,z=_,Z=x,h>=0?(A=l,w=o,M=u,D=d,B=p,J=v,k=g,X=f):(A=o,w=l,M=d,D=u,B=v,J=p,k=f,X=g)),m===0)return null;let he=A/m,ee=w/m,te=1/m,pe=M-he*C,ke=D-ee*C,Le=B-he*z,xt=J-ee*z,rt=k-he*Z,le=X-ee*Z,ge=rt*xt-le*Le,xe=pe*le-ke*rt,We=Le*ke-xt*pe;if(s){if(ge<0||xe<0||We<0)return null}else if((ge<0||xe<0||We<0)&&(ge>0||xe>0||We>0))return null;let Fe=ge+xe+We;if(Fe===0)return null;let Ee=te*(ge*C+xe*z+We*Z);return(Fe>0?Ee<0:Ee>0)?null:this.at(Ee/Fe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},di=class extends or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jr,this.combine=zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},jc=new ft,$s=new za,vn=new Bs,Xc=new U,yn=new U,xn=new U,_n=new U,hl=new U,Sn=new U,qc=new U,Mn=new U,vt=class extends Ai{constructor(e=new yt,t=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let n=this.morphTargetInfluences;if(r&&n){Sn.set(0,0,0);for(let l=0,o=r.length;l<o;l++){let h=n[l],u=r[l];h!==0&&(hl.fromBufferAttribute(u,e),a?Sn.addScaledVector(hl,h):Sn.addScaledVector(hl.sub(t),h))}t.add(Sn)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vn.copy(i.boundingSphere),vn.applyMatrix4(r),$s.copy(e.ray).recast(e.near),!(vn.containsPoint($s.origin)===!1&&($s.intersectSphere(vn,Xc)===null||$s.origin.distanceToSquared(Xc)>(e.far-e.near)**2))&&(jc.copy(r).invert(),$s.copy(e.ray).applyMatrix4(jc),!(i.boundingBox!==null&&$s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$s)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,n=r.index,l=r.attributes.position,o=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,c=r.drawRange;if(n!==null)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){let _=d[p],g=a[_.materialIndex],f=Math.max(_.start,c.start),x=Math.min(n.count,Math.min(_.start+_.count,c.start+c.count));for(let b=f,y=x;b<y;b+=3){let S=n.getX(b),A=n.getX(b+1),w=n.getX(b+2);s=bn(this,g,e,i,o,h,u,S,A,w),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{let p=Math.max(0,c.start),v=Math.min(n.count,c.start+c.count);for(let _=p,g=v;_<g;_+=3){let f=n.getX(_),x=n.getX(_+1),b=n.getX(_+2);s=bn(this,a,e,i,o,h,u,f,x,b),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){let _=d[p],g=a[_.materialIndex],f=Math.max(_.start,c.start),x=Math.min(l.count,Math.min(_.start+_.count,c.start+c.count));for(let b=f,y=x;b<y;b+=3){let S=b,A=b+1,w=b+2;s=bn(this,g,e,i,o,h,u,S,A,w),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{let p=Math.max(0,c.start),v=Math.min(l.count,c.start+c.count);for(let _=p,g=v;_<g;_+=3){let f=_,x=_+1,b=_+2;s=bn(this,a,e,i,o,h,u,f,x,b),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}};function Jm(e,t,i,s,r,a,n,l){let o;if(t.side===ci?o=s.intersectTriangle(n,a,r,!0,l):o=s.intersectTriangle(r,a,n,t.side===gs,l),o===null)return null;Mn.copy(l),Mn.applyMatrix4(e.matrixWorld);let h=i.ray.origin.distanceTo(Mn);return h<i.near||h>i.far?null:{distance:h,point:Mn.clone(),object:e}}function bn(e,t,i,s,r,a,n,l,o,h){e.getVertexPosition(l,yn),e.getVertexPosition(o,xn),e.getVertexPosition(h,_n);let u=Jm(e,t,i,s,yn,xn,_n,qc);if(u){let d=new U;Qs.getBarycoord(qc,yn,xn,_n,d),r&&(u.uv=Qs.getInterpolatedAttribute(r,l,o,h,d,new be)),a&&(u.uv1=Qs.getInterpolatedAttribute(a,l,o,h,d,new be)),n&&(u.normal=Qs.getInterpolatedAttribute(n,l,o,h,d,new U),u.normal.dot(s.direction)>0&&u.normal.multiplyScalar(-1));let c={a:l,b:o,c:h,normal:new U,materialIndex:0};Qs.getNormal(yn,xn,_n,c.normal),u.face=c,u.barycoord=d}return u}var G_=new kt,V_=new kt,W_=new kt,j_=new kt,X_=new ft,q_=new U,Y_=new Bs,Z_=new ft,$_=new za;var Km=class extends Ni{constructor(e=null,t=1,i=1,s,r,a,n,l,o=mi,h=mi,u,d){super(null,a,n,l,o,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},J_=new ft,K_=new ft;var Q_=new ft,eS=new ft;var tS=new Os,iS=new ft,sS=new vt,rS=new Bs;var Js=new Bs,Qm=new be(.5,.5),En=new U,Xr=class{constructor(e=new Us,t=new Us,i=new Us,s=new Us,r=new Us,a=new Us){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let n=this.planes;return n[0].copy(e),n[1].copy(t),n[2].copy(i),n[3].copy(s),n[4].copy(r),n[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gi,i=!1){let s=this.planes,r=e.elements,a=r[0],n=r[1],l=r[2],o=r[3],h=r[4],u=r[5],d=r[6],c=r[7],p=r[8],v=r[9],_=r[10],g=r[11],f=r[12],x=r[13],b=r[14],y=r[15];if(s[0].setComponents(o-a,c-h,g-p,y-f).normalize(),s[1].setComponents(o+a,c+h,g+p,y+f).normalize(),s[2].setComponents(o+n,c+u,g+v,y+x).normalize(),s[3].setComponents(o-n,c-u,g-v,y-x).normalize(),i)s[4].setComponents(l,d,_,b).normalize(),s[5].setComponents(o-l,c-d,g-_,y-b).normalize();else if(s[4].setComponents(o-l,c-d,g-_,y-b).normalize(),t===Gi)s[5].setComponents(o+l,c+d,g+_,y+b).normalize();else if(t===Ia)s[5].setComponents(l,d,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){Js.center.set(0,0,0);let t=Qm.distanceTo(e.center);return Js.radius=.7071067811865476+t,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(En.x=s.normal.x>0?e.max.x:e.min.x,En.y=s.normal.y>0?e.max.y:e.min.y,En.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(En)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Yc=new ft,e0=class ud{constructor(){this.coordinateSystem=Gi,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,s=this._frustums;for(let r=0;r<i.length;r++){let a=i[r];Yc.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),s[r]===void 0&&(s[r]=new Xr),s[r].setFromProjectionMatrix(Yc,a.coordinateSystem,a.reversedDepth)}return this._count=i.length,this}intersectsObject(t){let i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let s=0;s<this._count;s++)if(i[s].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,s=t._frustums;for(let r=0;r<t._count;r++)i[r]===void 0&&(i[r]=new Xr),i[r].copy(s[r]);return this._count=t._count,this}clone(){return new ud().copy(this)}};var t0=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,s){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let n=r[this.index];a.push(n),this.index++,n.start=e,n.count=t,n.z=i,n.index=s}reset(){this.list.length=0,this.index=0}},aS=new ft,nS=new Qe(1,1,1),oS=new Xr,lS=new e0,hS=new Os,cS=new Bs,uS=new U,dS=new U,pS=new U,fS=new t0,mS=new vt;var gS=new U,vS=new U,yS=new ft,xS=new za,_S=new Bs,SS=new U,MS=new U;var bS=new U,ES=new U;var is=class extends or{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zc=new ft,hh=new za,Tn=new Bs,wn=new U,xs=class extends Ai{constructor(e=new yt,t=new is){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Tn.copy(i.boundingSphere),Tn.applyMatrix4(s),Tn.radius+=r,e.ray.intersectsSphere(Tn)===!1)return;Zc.copy(s).invert(),hh.copy(e.ray).applyMatrix4(Zc);let n=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=n*n,o=i.index,h=i.attributes.position;if(o!==null){let u=Math.max(0,a.start),d=Math.min(o.count,a.start+a.count);for(let c=u,p=d;c<p;c++){let v=o.getX(c);wn.fromBufferAttribute(h,v),$c(wn,v,l,s,e,t,this)}}else{let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let c=u,p=d;c<p;c++)wn.fromBufferAttribute(h,c),$c(wn,c,l,s,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function $c(e,t,i,s,r,a,n){let l=hh.distanceSqToPoint(e);if(l<i){let o=new U;hh.closestPointToPoint(e,o),o.applyMatrix4(s);let h=r.ray.origin.distanceTo(o);if(h<r.near||h>r.far)return;a.push({distance:h,distanceToRay:Math.sqrt(l),point:o,index:t,face:null,faceIndex:null,barycoord:null,object:n})}}var dd=class extends Ni{constructor(e=[],t=sr,i,s,r,a,n,l,o,h){super(e,t,i,s,r,a,n,l,o,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fs=class extends Ni{constructor(e,t,i,s,r,a,n,l,o){super(e,t,i,s,r,a,n,l,o),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ua=class extends Ni{constructor(e,t,i=es,s,r,a,n=mi,l=mi,o,h=vs,u=1){if(h!==vs&&h!==tr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,n,l,h,i,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Eh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},i0=class extends Ua{constructor(e,t=es,i=sr,s,r,a=mi,n=mi,l,o=vs){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,n,l,o),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},pd=class extends Ni{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},zs=class fd extends yt{constructor(t=1,i=1,s=1,r=1,a=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:r,heightSegments:a,depthSegments:n};let l=this;r=Math.floor(r),a=Math.floor(a),n=Math.floor(n);let o=[],h=[],u=[],d=[],c=0,p=0;v("z","y","x",-1,-1,s,i,t,n,a,0),v("z","y","x",1,-1,s,i,-t,n,a,1),v("x","z","y",1,1,t,s,i,r,n,2),v("x","z","y",1,-1,t,s,-i,r,n,3),v("x","y","z",1,-1,t,i,s,r,a,4),v("x","y","z",-1,-1,t,i,-s,r,a,5),this.setIndex(o),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(d,2));function v(_,g,f,x,b,y,S,A,w,m,M){let D=y/w,C=S/m,B=y/2,J=S/2,z=A/2,k=w+1,X=m+1,Z=0,he=0,ee=new U;for(let te=0;te<X;te++){let pe=te*C-J;for(let ke=0;ke<k;ke++){let Le=ke*D-B;ee[_]=Le*x,ee[g]=pe*b,ee[f]=z,h.push(ee.x,ee.y,ee.z),ee[_]=0,ee[g]=0,ee[f]=A>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(ke/w),d.push(1-te/m),Z+=1}}for(let te=0;te<m;te++)for(let pe=0;pe<w;pe++){let ke=c+pe+k*te,Le=c+pe+k*(te+1),xt=c+(pe+1)+k*(te+1),rt=c+(pe+1)+k*te;o.push(ke,Le,rt),o.push(Le,xt,rt),he+=6}l.addGroup(p,he,M),p+=he,c+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fd(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},wh=class md extends yt{constructor(t=1,i=1,s=4,r=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:s,radialSegments:r,heightSegments:a},i=Math.max(0,i),s=Math.max(1,Math.floor(s)),r=Math.max(3,Math.floor(r)),a=Math.max(1,Math.floor(a));let n=[],l=[],o=[],h=[],u=i/2,d=Math.PI/2*t,c=i,p=2*d+c,v=s*2+a,_=r+1,g=new U,f=new U;for(let x=0;x<=v;x++){let b=0,y=0,S=0,A=0;if(x<=s){let M=x/s,D=M*Math.PI/2;y=-u-t*Math.cos(D),S=t*Math.sin(D),A=-t*Math.cos(D),b=M*d}else if(x<=s+a){let M=(x-s)/a;y=-u+M*i,S=t,A=0,b=d+M*c}else{let M=(x-s-a)/s,D=M*Math.PI/2;y=u+t*Math.sin(D),S=t*Math.cos(D),A=t*Math.sin(D),b=d+c+M*d}let w=Math.max(0,Math.min(1,b/p)),m=0;x===0?m=.5/r:x===v&&(m=-.5/r);for(let M=0;M<=r;M++){let D=M/r,C=D*Math.PI*2,B=Math.sin(C),J=Math.cos(C);f.x=-S*J,f.y=y,f.z=S*B,l.push(f.x,f.y,f.z),g.set(-S*J,A,S*B),g.normalize(),o.push(g.x,g.y,g.z),h.push(D+m,w)}if(x>0){let M=(x-1)*_;for(let D=0;D<r;D++){let C=M+D,B=M+D+1,J=x*_+D,z=x*_+D+1;n.push(C,B,J),n.push(B,z,J)}}}this.setIndex(n),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(o,3)),this.setAttribute("uv",new $e(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new md(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Qn=class gd extends yt{constructor(t=1,i=32,s=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:s,thetaLength:r},i=Math.max(3,i);let a=[],n=[],l=[],o=[],h=new U,u=new be;n.push(0,0,0),l.push(0,0,1),o.push(.5,.5);for(let d=0,c=3;d<=i;d++,c+=3){let p=s+d/i*r;h.x=t*Math.cos(p),h.y=t*Math.sin(p),n.push(h.x,h.y,h.z),l.push(0,0,1),u.x=(n[c]/t+1)/2,u.y=(n[c+1]/t+1)/2,o.push(u.x,u.y)}for(let d=1;d<=i;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new $e(n,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gd(t.radius,t.segments,t.thetaStart,t.thetaLength)}},$r=class vd extends yt{constructor(t=1,i=1,s=1,r=32,a=1,n=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:l,thetaLength:o};let h=this;r=Math.floor(r),a=Math.floor(a);let u=[],d=[],c=[],p=[],v=0,_=[],g=s/2,f=0;x(),n===!1&&(t>0&&b(!0),i>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new $e(d,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(p,2));function x(){let y=new U,S=new U,A=0,w=(i-t)/s;for(let m=0;m<=a;m++){let M=[],D=m/a,C=D*(i-t)+t;for(let B=0;B<=r;B++){let J=B/r,z=J*o+l,k=Math.sin(z),X=Math.cos(z);S.x=C*k,S.y=-D*s+g,S.z=C*X,d.push(S.x,S.y,S.z),y.set(k,w,X).normalize(),c.push(y.x,y.y,y.z),p.push(J,1-D),M.push(v++)}_.push(M)}for(let m=0;m<r;m++)for(let M=0;M<a;M++){let D=_[M][m],C=_[M+1][m],B=_[M+1][m+1],J=_[M][m+1];(t>0||M!==0)&&(u.push(D,C,J),A+=3),(i>0||M!==a-1)&&(u.push(C,B,J),A+=3)}h.addGroup(f,A,0),f+=A}function b(y){let S=v,A=new be,w=new U,m=0,M=y===!0?t:i,D=y===!0?1:-1;for(let B=1;B<=r;B++)d.push(0,g*D,0),c.push(0,D,0),p.push(.5,.5),v++;let C=v;for(let B=0;B<=r;B++){let J=B/r*o+l,z=Math.cos(J),k=Math.sin(J);w.x=M*k,w.y=g*D,w.z=M*z,d.push(w.x,w.y,w.z),c.push(0,D,0),A.x=z*.5+.5,A.y=k*.5*D+.5,p.push(A.x,A.y),v++}for(let B=0;B<r;B++){let J=S+B,z=C+B;y===!0?u.push(z,z+1,J):u.push(z+1,z,J),m+=3}h.addGroup(f,m,y===!0?1:2),f+=m}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vd(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ka=class yd extends $r{constructor(t=1,i=1,s=32,r=1,a=!1,n=0,l=Math.PI*2){super(0,t,i,s,r,a,n,l),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:n,thetaLength:l}}static fromJSON(t){return new yd(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ha=class xd extends yt{constructor(t=[],i=[],s=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:r};let a=[],n=[];l(r),h(s),u(),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(a.slice(),3)),this.setAttribute("uv",new $e(n,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function l(x){let b=new U,y=new U,S=new U;for(let A=0;A<i.length;A+=3)p(i[A+0],b),p(i[A+1],y),p(i[A+2],S),o(b,y,S,x)}function o(x,b,y,S){let A=S+1,w=[];for(let m=0;m<=A;m++){w[m]=[];let M=x.clone().lerp(y,m/A),D=b.clone().lerp(y,m/A),C=A-m;for(let B=0;B<=C;B++)B===0&&m===A?w[m][B]=M:w[m][B]=M.clone().lerp(D,B/C)}for(let m=0;m<A;m++)for(let M=0;M<2*(A-m)-1;M++){let D=Math.floor(M/2);M%2===0?(c(w[m][D+1]),c(w[m+1][D]),c(w[m][D])):(c(w[m][D+1]),c(w[m+1][D+1]),c(w[m+1][D]))}}function h(x){let b=new U;for(let y=0;y<a.length;y+=3)b.x=a[y+0],b.y=a[y+1],b.z=a[y+2],b.normalize().multiplyScalar(x),a[y+0]=b.x,a[y+1]=b.y,a[y+2]=b.z}function u(){let x=new U;for(let b=0;b<a.length;b+=3){x.x=a[b+0],x.y=a[b+1],x.z=a[b+2];let y=g(x)/2/Math.PI+.5,S=f(x)/Math.PI+.5;n.push(y,1-S)}v(),d()}function d(){for(let x=0;x<n.length;x+=6){let b=n[x+0],y=n[x+2],S=n[x+4],A=Math.max(b,y,S),w=Math.min(b,y,S);A>.9&&w<.1&&(b<.2&&(n[x+0]+=1),y<.2&&(n[x+2]+=1),S<.2&&(n[x+4]+=1))}}function c(x){a.push(x.x,x.y,x.z)}function p(x,b){let y=x*3;b.x=t[y+0],b.y=t[y+1],b.z=t[y+2]}function v(){let x=new U,b=new U,y=new U,S=new U,A=new be,w=new be,m=new be;for(let M=0,D=0;M<a.length;M+=9,D+=6){x.set(a[M+0],a[M+1],a[M+2]),b.set(a[M+3],a[M+4],a[M+5]),y.set(a[M+6],a[M+7],a[M+8]),A.set(n[D+0],n[D+1]),w.set(n[D+2],n[D+3]),m.set(n[D+4],n[D+5]),S.copy(x).add(b).add(y).divideScalar(3);let C=g(S);_(A,D+0,x,C),_(w,D+2,b,C),_(m,D+4,y,C)}}function _(x,b,y,S){S<0&&x.x===1&&(n[b]=x.x-1),y.x===0&&y.z===0&&(n[b]=S/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xd(t.vertices,t.indices,t.radius,t.detail)}},s0=class _d extends Ha{constructor(t=1,i=0){let s=(1+Math.sqrt(5))/2,r=1/s,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-s,0,-r,s,0,r,-s,0,r,s,-r,-s,0,-r,s,0,r,-s,0,r,s,0,-s,0,-r,s,0,-r,-s,0,r,s,0,r],n=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,n,t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new _d(t.radius,t.detail)}},An=new U,Rn=new U,cl=new U,Cn=new Qs,r0=class extends yt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(Hr*t),r=e.getIndex(),a=e.getAttribute("position"),n=r?r.count:a.count,l=[0,0,0],o=["a","b","c"],h=new Array(3),u={},d=[];for(let c=0;c<n;c+=3){r?(l[0]=r.getX(c),l[1]=r.getX(c+1),l[2]=r.getX(c+2)):(l[0]=c,l[1]=c+1,l[2]=c+2);let{a:p,b:v,c:_}=Cn;if(p.fromBufferAttribute(a,l[0]),v.fromBufferAttribute(a,l[1]),_.fromBufferAttribute(a,l[2]),Cn.getNormal(cl),h[0]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[1]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,h[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let g=0;g<3;g++){let f=(g+1)%3,x=h[g],b=h[f],y=Cn[o[g]],S=Cn[o[f]],A=`${x}_${b}`,w=`${b}_${x}`;w in u&&u[w]?(cl.dot(u[w].normal)<=s&&(d.push(y.x,y.y,y.z),d.push(S.x,S.y,S.z)),u[w]=null):A in u||(u[A]={index0:l[g],index1:l[f],normal:cl.clone()})}}for(let c in u)if(u[c]){let{index0:p,index1:v}=u[c];An.fromBufferAttribute(a,p),Rn.fromBufferAttribute(a,v),d.push(An.x,An.y,An.z),d.push(Rn.x,Rn.y,Rn.z)}this.setAttribute("position",new $e(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ss=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){st("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let n=0,l=r-1,o;for(;n<=l;)if(s=Math.floor(n+(l-n)/2),o=i[s]-a,o<0)n=s+1;else if(o>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let r=this.getPoint(i),a=this.getPoint(s),n=t||(r.isVector2?new be:new U);return n.copy(a).sub(r).normalize(),n}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new U,s=[],r=[],a=[],n=new U,l=new ft;for(let c=0;c<=e;c++){let p=c/e;s[c]=this.getTangentAt(p,new U)}r[0]=new U,a[0]=new U;let o=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=o&&(o=h,i.set(1,0,0)),u<=o&&(o=u,i.set(0,1,0)),d<=o&&i.set(0,0,1),n.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],n),a[0].crossVectors(s[0],r[0]);for(let c=1;c<=e;c++){if(r[c]=r[c-1].clone(),a[c]=a[c-1].clone(),n.crossVectors(s[c-1],s[c]),n.length()>Number.EPSILON){n.normalize();let p=Math.acos(pt(s[c-1].dot(s[c]),-1,1));r[c].applyMatrix4(l.makeRotationAxis(n,p))}a[c].crossVectors(s[c],r[c])}if(t===!0){let c=Math.acos(pt(r[0].dot(r[e]),-1,1));c/=e,s[0].dot(n.crossVectors(r[0],r[e]))>0&&(c=-c);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],c*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ah=class extends ss{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,n=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=n,this.aRotation=l}getPoint(e,t=new be){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let n=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(n),o=this.aY+this.yRadius*Math.sin(n);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,c=o-this.aY;l=d*h-c*u+this.aX,o=d*u+c*h+this.aY}return i.set(l,o)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},a0=class extends Ah{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Rh(){let e=0,t=0,i=0,s=0;function r(a,n,l,o){e=a,t=l,i=-3*a+3*n-2*l-o,s=2*a-2*n+l+o}return{initCatmullRom:function(a,n,l,o,h){r(n,l,h*(l-a),h*(o-n))},initNonuniformCatmullRom:function(a,n,l,o,h,u,d){let c=(n-a)/h-(l-a)/(h+u)+(l-n)/u,p=(l-n)/u-(o-n)/(u+d)+(o-l)/d;c*=u,p*=u,r(n,l,c,p)},calc:function(a){let n=a*a,l=n*a;return e+t*a+i*n+s*l}}}var Jc=new U,Kc=new U,ul=new Rh,dl=new Rh,pl=new Rh,Ch=class extends ss{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new U){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,n=Math.floor(a),l=a-n;this.closed?n+=n>0?0:(Math.floor(Math.abs(n)/r)+1)*r:l===0&&n===r-1&&(n=r-2,l=1);let o,h;this.closed||n>0?o=s[(n-1)%r]:(Kc.subVectors(s[0],s[1]).add(s[0]),o=Kc);let u=s[n%r],d=s[(n+1)%r];if(this.closed||n+2<r?h=s[(n+2)%r]:(Jc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Jc),this.curveType==="centripetal"||this.curveType==="chordal"){let c=this.curveType==="chordal"?.5:.25,p=Math.pow(o.distanceToSquared(u),c),v=Math.pow(u.distanceToSquared(d),c),_=Math.pow(d.distanceToSquared(h),c);v<1e-4&&(v=1),p<1e-4&&(p=v),_<1e-4&&(_=v),ul.initNonuniformCatmullRom(o.x,u.x,d.x,h.x,p,v,_),dl.initNonuniformCatmullRom(o.y,u.y,d.y,h.y,p,v,_),pl.initNonuniformCatmullRom(o.z,u.z,d.z,h.z,p,v,_)}else this.curveType==="catmullrom"&&(ul.initCatmullRom(o.x,u.x,d.x,h.x,this.tension),dl.initCatmullRom(o.y,u.y,d.y,h.y,this.tension),pl.initCatmullRom(o.z,u.z,d.z,h.z,this.tension));return i.set(ul.calc(l),dl.calc(l),pl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Qc(e,t,i,s,r){let a=(s-t)*.5,n=(r-i)*.5,l=e*e,o=e*l;return(2*i-2*s+a+n)*o+(-3*i+3*s-2*a-n)*l+a*e+i}function n0(e,t){let i=1-e;return i*i*t}function o0(e,t){return 2*(1-e)*e*t}function l0(e,t){return e*e*t}function wa(e,t,i,s){return n0(e,t)+o0(e,i)+l0(e,s)}function h0(e,t){let i=1-e;return i*i*i*t}function c0(e,t){let i=1-e;return 3*i*i*e*t}function u0(e,t){return 3*(1-e)*e*e*t}function d0(e,t){return e*e*e*t}function Aa(e,t,i,s,r){return h0(e,t)+c0(e,i)+u0(e,s)+d0(e,r)}var Sd=class extends ss{constructor(e=new be,t=new be,i=new be,s=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new be){let i=t,s=this.v0,r=this.v1,a=this.v2,n=this.v3;return i.set(Aa(e,s.x,r.x,a.x,n.x),Aa(e,s.y,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},p0=class extends ss{constructor(e=new U,t=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new U){let i=t,s=this.v0,r=this.v1,a=this.v2,n=this.v3;return i.set(Aa(e,s.x,r.x,a.x,n.x),Aa(e,s.y,r.y,a.y,n.y),Aa(e,s.z,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Md=class extends ss{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},f0=class extends ss{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bd=class extends ss{constructor(e=new be,t=new be,i=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new be){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(wa(e,s.x,r.x,a.x),wa(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ed=class extends ss{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(wa(e,s.x,r.x,a.x),wa(e,s.y,r.y,a.y),wa(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Td=class extends ss{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),n=r-a,l=s[a===0?a:a-1],o=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Qc(n,l.x,o.x,h.x,u.x),Qc(n,l.y,o.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new be().fromArray(s))}return this}},Zn=Object.freeze({__proto__:null,ArcCurve:a0,CatmullRomCurve3:Ch,CubicBezierCurve:Sd,CubicBezierCurve3:p0,EllipseCurve:Ah,LineCurve:Md,LineCurve3:f0,QuadraticBezierCurve:bd,QuadraticBezierCurve3:Ed,SplineCurve:Td}),m0=class extends ss{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zn[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,n=this.curves[r],l=n.getLength(),o=l===0?0:1-a/l;return n.getPointAt(o,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],n=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(n);for(let o=0;o<l.length;o++){let h=l[o];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Zn[s.type]().fromJSON(s))}return this}},$n=class extends m0{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Md(this.currentPoint.clone(),new be(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new bd(this.currentPoint.clone(),new be(e,t),new be(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let n=new Sd(this.currentPoint.clone(),new be(e,t),new be(i,s),new be(r,a));return this.curves.push(n),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Td(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let n=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+n,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,n,l){let o=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+o,t+h,i,s,r,a,n,l),this}absellipse(e,t,i,s,r,a,n,l){let o=new Ah(e,t,i,s,r,a,n,l);if(this.curves.length>0){let u=o.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(o);let h=o.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ks=class extends $n{constructor(e){super(e),this.uuid=Qi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new $n().fromJSON(s))}return this}};function g0(e,t,i=2){let s=t&&t.length,r=s?t[0]*i:e.length,a=wd(e,0,r,i,!0),n=[];if(!a||a.next===a.prev)return n;let l,o,h;if(s&&(a=S0(e,t,a,i)),e.length>80*i){l=e[0],o=e[1];let u=l,d=o;for(let c=i;c<r;c+=i){let p=e[c],v=e[c+1];p<l&&(l=p),v<o&&(o=v),p>u&&(u=p),v>d&&(d=v)}h=Math.max(u-l,d-o),h=h!==0?32767/h:0}return Da(a,n,i,l,o,h,0),n}function wd(e,t,i,s,r){let a;if(r===L0(e,t,i,s)>0)for(let n=t;n<i;n+=s)a=eu(n/s|0,e[n],e[n+1],a);else for(let n=i-s;n>=t;n-=s)a=eu(n/s|0,e[n],e[n+1],a);return a&&qr(a,a.next)&&(Ba(a),a=a.next),a}function ar(e,t){if(!e)return e;t||(t=e);let i=e,s;do if(s=!1,!i.steiner&&(qr(i,i.next)||Vt(i.prev,i,i.next)===0)){if(Ba(i),i=t=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==t);return t}function Da(e,t,i,s,r,a,n){if(!e)return;!n&&a&&w0(e,s,r,a);let l=e;for(;e.prev!==e.next;){let o=e.prev,h=e.next;if(a?y0(e,s,r,a):v0(e)){t.push(o.i,e.i,h.i),Ba(e),e=h.next,l=h.next;continue}if(e=h,e===l){n?n===1?(e=x0(ar(e),t),Da(e,t,i,s,r,a,2)):n===2&&_0(e,t,i,s,r,a):Da(ar(e),t,i,s,r,a,1);break}}}function v0(e){let t=e.prev,i=e,s=e.next;if(Vt(t,i,s)>=0)return!1;let r=t.x,a=i.x,n=s.x,l=t.y,o=i.y,h=s.y,u=Math.min(r,a,n),d=Math.min(l,o,h),c=Math.max(r,a,n),p=Math.max(l,o,h),v=s.next;for(;v!==t;){if(v.x>=u&&v.x<=c&&v.y>=d&&v.y<=p&&Ma(r,l,a,o,n,h,v.x,v.y)&&Vt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function y0(e,t,i,s){let r=e.prev,a=e,n=e.next;if(Vt(r,a,n)>=0)return!1;let l=r.x,o=a.x,h=n.x,u=r.y,d=a.y,c=n.y,p=Math.min(l,o,h),v=Math.min(u,d,c),_=Math.max(l,o,h),g=Math.max(u,d,c),f=ch(p,v,t,i,s),x=ch(_,g,t,i,s),b=e.prevZ,y=e.nextZ;for(;b&&b.z>=f&&y&&y.z<=x;){if(b.x>=p&&b.x<=_&&b.y>=v&&b.y<=g&&b!==r&&b!==n&&Ma(l,u,o,d,h,c,b.x,b.y)&&Vt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=p&&y.x<=_&&y.y>=v&&y.y<=g&&y!==r&&y!==n&&Ma(l,u,o,d,h,c,y.x,y.y)&&Vt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=f;){if(b.x>=p&&b.x<=_&&b.y>=v&&b.y<=g&&b!==r&&b!==n&&Ma(l,u,o,d,h,c,b.x,b.y)&&Vt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=x;){if(y.x>=p&&y.x<=_&&y.y>=v&&y.y<=g&&y!==r&&y!==n&&Ma(l,u,o,d,h,c,y.x,y.y)&&Vt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function x0(e,t){let i=e;do{let s=i.prev,r=i.next.next;!qr(s,r)&&Rd(s,i,i.next,r)&&Oa(s,r)&&Oa(r,s)&&(t.push(s.i,i.i,r.i),Ba(i),Ba(i.next),i=e=r),i=i.next}while(i!==e);return ar(i)}function _0(e,t,i,s,r,a){let n=e;do{let l=n.next.next;for(;l!==n.prev;){if(n.i!==l.i&&C0(n,l)){let o=Cd(n,l);n=ar(n,n.next),o=ar(o,o.next),Da(n,t,i,s,r,a,0),Da(o,t,i,s,r,a,0);return}l=l.next}n=n.next}while(n!==e)}function S0(e,t,i,s){let r=[];for(let a=0,n=t.length;a<n;a++){let l=t[a]*s,o=a<n-1?t[a+1]*s:e.length,h=wd(e,l,o,s,!1);h===h.next&&(h.steiner=!0),r.push(R0(h))}r.sort(M0);for(let a=0;a<r.length;a++)i=b0(r[a],i);return i}function M0(e,t){let i=e.x-t.x;if(i===0&&(i=e.y-t.y,i===0)){let s=(e.next.y-e.y)/(e.next.x-e.x),r=(t.next.y-t.y)/(t.next.x-t.x);i=s-r}return i}function b0(e,t){let i=E0(e,t);if(!i)return t;let s=Cd(i,e);return ar(s,s.next),ar(i,i.next)}function E0(e,t){let i=t,s=e.x,r=e.y,a=-1/0,n;if(qr(e,i))return i;do{if(qr(e,i.next))return i.next;if(r<=i.y&&r>=i.next.y&&i.next.y!==i.y){let d=i.x+(r-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=s&&d>a&&(a=d,n=i.x<i.next.x?i:i.next,d===s))return n}i=i.next}while(i!==t);if(!n)return null;let l=n,o=n.x,h=n.y,u=1/0;i=n;do{if(s>=i.x&&i.x>=o&&s!==i.x&&Ad(r<h?s:a,r,o,h,r<h?a:s,r,i.x,i.y)){let d=Math.abs(r-i.y)/(s-i.x);Oa(i,e)&&(d<u||d===u&&(i.x>n.x||i.x===n.x&&T0(n,i)))&&(n=i,u=d)}i=i.next}while(i!==l);return n}function T0(e,t){return Vt(e.prev,e,t.prev)<0&&Vt(t.next,e,e.next)<0}function w0(e,t,i,s){let r=e;do r.z===0&&(r.z=ch(r.x,r.y,t,i,s)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,A0(r)}function A0(e){let t,i=1;do{let s=e,r;e=null;let a=null;for(t=0;s;){t++;let n=s,l=0;for(let h=0;h<i&&(l++,n=n.nextZ,!!n);h++);let o=i;for(;l>0||o>0&&n;)l!==0&&(o===0||!n||s.z<=n.z)?(r=s,s=s.nextZ,l--):(r=n,n=n.nextZ,o--),a?a.nextZ=r:e=r,r.prevZ=a,a=r;s=n}a.nextZ=null,i*=2}while(t>1);return e}function ch(e,t,i,s,r){return e=(e-i)*r|0,t=(t-s)*r|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function R0(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function Ad(e,t,i,s,r,a,n,l){return(r-n)*(t-l)>=(e-n)*(a-l)&&(e-n)*(s-l)>=(i-n)*(t-l)&&(i-n)*(a-l)>=(r-n)*(s-l)}function Ma(e,t,i,s,r,a,n,l){return!(e===n&&t===l)&&Ad(e,t,i,s,r,a,n,l)}function C0(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!P0(e,t)&&(Oa(e,t)&&Oa(t,e)&&I0(e,t)&&(Vt(e.prev,e,t.prev)||Vt(e,t.prev,t))||qr(e,t)&&Vt(e.prev,e,e.next)>0&&Vt(t.prev,t,t.next)>0)}function Vt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function qr(e,t){return e.x===t.x&&e.y===t.y}function Rd(e,t,i,s){let r=In(Vt(e,t,i)),a=In(Vt(e,t,s)),n=In(Vt(i,s,e)),l=In(Vt(i,s,t));return!!(r!==a&&n!==l||r===0&&Pn(e,i,t)||a===0&&Pn(e,s,t)||n===0&&Pn(i,e,s)||l===0&&Pn(i,t,s))}function Pn(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function In(e){return e>0?1:e<0?-1:0}function P0(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Rd(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Oa(e,t){return Vt(e.prev,e,e.next)<0?Vt(e,t,e.next)>=0&&Vt(e,e.prev,t)>=0:Vt(e,t,e.prev)<0||Vt(e,e.next,t)<0}function I0(e,t){let i=e,s=!1,r=(e.x+t.x)/2,a=(e.y+t.y)/2;do i.y>a!=i.next.y>a&&i.next.y!==i.y&&r<(i.next.x-i.x)*(a-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==e);return s}function Cd(e,t){let i=uh(e.i,e.x,e.y),s=uh(t.i,t.x,t.y),r=e.next,a=t.prev;return e.next=t,t.prev=e,i.next=r,r.prev=i,s.next=i,i.prev=s,a.next=s,s.prev=a,s}function eu(e,t,i,s){let r=uh(e,t,i);return s?(r.next=s.next,r.prev=s,s.next.prev=r,s.next=r):(r.prev=r,r.next=r),r}function Ba(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function uh(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function L0(e,t,i,s){let r=0;for(let a=t,n=i-s;a<i;a+=s)r+=(e[n]-e[a])*(e[a+1]+e[n+1]),n=a;return r}var N0=class{static triangulate(e,t,i=2){return g0(e,t,i)}},ir=class Pd{static area(t){let i=t.length,s=0;for(let r=i-1,a=0;a<i;r=a++)s+=t[r].x*t[a].y-t[a].x*t[r].y;return s*.5}static isClockWise(t){return Pd.area(t)<0}static triangulateShape(t,i){let s=[],r=[],a=[];tu(t),iu(s,t);let n=t.length;i.forEach(tu);for(let o=0;o<i.length;o++)r.push(n),n+=i[o].length,iu(s,i[o]);let l=N0.triangulate(s,r);for(let o=0;o<l.length;o+=3)a.push(l.slice(o,o+3));return a}};function tu(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function iu(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var Ga=class Id extends yt{constructor(t=new ks([new be(.5,.5),new be(-.5,.5),new be(-.5,-.5),new be(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let s=this,r=[],a=[];for(let l=0,o=t.length;l<o;l++){let h=t[l];n(h)}this.setAttribute("position",new $e(r,3)),this.setAttribute("uv",new $e(a,2)),this.computeVertexNormals();function n(l){let o=[],h=i.curveSegments!==void 0?i.curveSegments:12,u=i.steps!==void 0?i.steps:1,d=i.depth!==void 0?i.depth:1,c=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:.2,v=i.bevelSize!==void 0?i.bevelSize:p-.1,_=i.bevelOffset!==void 0?i.bevelOffset:0,g=i.bevelSegments!==void 0?i.bevelSegments:3,f=i.extrudePath,x=i.UVGenerator!==void 0?i.UVGenerator:U0,b,y=!1,S,A,w,m;if(f){b=f.getSpacedPoints(u),y=!0,c=!1;let me=f.isCatmullRomCurve3?f.closed:!1;S=f.computeFrenetFrames(u,me),A=new U,w=new U,m=new U}c||(g=0,p=0,v=0,_=0);let M=l.extractPoints(h),D=M.shape,C=M.holes;if(!ir.isClockWise(D)){D=D.reverse();for(let me=0,de=C.length;me<de;me++){let _e=C[me];ir.isClockWise(_e)&&(C[me]=_e.reverse())}}function B(me){let de=10000000000000001e-36,_e=me[0];for(let Ne=1;Ne<=me.length;Ne++){let Ie=Ne%me.length,ze=me[Ie],Ze=ze.x-_e.x,et=ze.y-_e.y,Ke=Ze*Ze+et*et,j=Math.max(Math.abs(ze.x),Math.abs(ze.y),Math.abs(_e.x),Math.abs(_e.y)),Mt=de*j*j;if(Ke<=Mt){me.splice(Ie,1),Ne--;continue}_e=ze}}B(D),C.forEach(B);let J=C.length,z=D;for(let me=0;me<J;me++){let de=C[me];D=D.concat(de)}function k(me,de,_e){return de||it("ExtrudeGeometry: vec does not exist"),me.clone().addScaledVector(de,_e)}let X=D.length;function Z(me,de,_e){let Ne,Ie,ze,Ze=me.x-de.x,et=me.y-de.y,Ke=_e.x-me.x,j=_e.y-me.y,Mt=Ze*Ze+et*et,ot=Ze*j-et*Ke;if(Math.abs(ot)>Number.EPSILON){let ct=Math.sqrt(Mt),L=Math.sqrt(Ke*Ke+j*j),E=de.x-et/ct,q=de.y+Ze/ct,se=_e.x-j/L,O=_e.y+Ke/L,H=((se-E)*j-(O-q)*Ke)/(Ze*j-et*Ke);Ne=E+Ze*H-me.x,Ie=q+et*H-me.y;let G=Ne*Ne+Ie*Ie;if(G<=2)return new be(Ne,Ie);ze=Math.sqrt(G/2)}else{let ct=!1;Ze>Number.EPSILON?Ke>Number.EPSILON&&(ct=!0):Ze<-Number.EPSILON?Ke<-Number.EPSILON&&(ct=!0):Math.sign(et)===Math.sign(j)&&(ct=!0),ct?(Ne=-et,Ie=Ze,ze=Math.sqrt(Mt)):(Ne=Ze,Ie=et,ze=Math.sqrt(Mt/2))}return new be(Ne/ze,Ie/ze)}let he=[];for(let me=0,de=z.length,_e=de-1,Ne=me+1;me<de;me++,_e++,Ne++)_e===de&&(_e=0),Ne===de&&(Ne=0),he[me]=Z(z[me],z[_e],z[Ne]);let ee=[],te,pe=he.concat();for(let me=0,de=J;me<de;me++){let _e=C[me];te=[];for(let Ne=0,Ie=_e.length,ze=Ie-1,Ze=Ne+1;Ne<Ie;Ne++,ze++,Ze++)ze===Ie&&(ze=0),Ze===Ie&&(Ze=0),te[Ne]=Z(_e[Ne],_e[ze],_e[Ze]);ee.push(te),pe=pe.concat(te)}let ke;if(g===0)ke=ir.triangulateShape(z,C);else{let me=[],de=[];for(let _e=0;_e<g;_e++){let Ne=_e/g,Ie=p*Math.cos(Ne*Math.PI/2),ze=v*Math.sin(Ne*Math.PI/2)+_;for(let Ze=0,et=z.length;Ze<et;Ze++){let Ke=k(z[Ze],he[Ze],ze);xe(Ke.x,Ke.y,-Ie),Ne===0&&me.push(Ke)}for(let Ze=0,et=J;Ze<et;Ze++){let Ke=C[Ze];te=ee[Ze];let j=[];for(let Mt=0,ot=Ke.length;Mt<ot;Mt++){let ct=k(Ke[Mt],te[Mt],ze);xe(ct.x,ct.y,-Ie),Ne===0&&j.push(ct)}Ne===0&&de.push(j)}}ke=ir.triangulateShape(me,de)}let Le=ke.length,xt=v+_;for(let me=0;me<X;me++){let de=c?k(D[me],pe[me],xt):D[me];y?(w.copy(S.normals[0]).multiplyScalar(de.x),A.copy(S.binormals[0]).multiplyScalar(de.y),m.copy(b[0]).add(w).add(A),xe(m.x,m.y,m.z)):xe(de.x,de.y,0)}for(let me=1;me<=u;me++)for(let de=0;de<X;de++){let _e=c?k(D[de],pe[de],xt):D[de];y?(w.copy(S.normals[me]).multiplyScalar(_e.x),A.copy(S.binormals[me]).multiplyScalar(_e.y),m.copy(b[me]).add(w).add(A),xe(m.x,m.y,m.z)):xe(_e.x,_e.y,d/u*me)}for(let me=g-1;me>=0;me--){let de=me/g,_e=p*Math.cos(de*Math.PI/2),Ne=v*Math.sin(de*Math.PI/2)+_;for(let Ie=0,ze=z.length;Ie<ze;Ie++){let Ze=k(z[Ie],he[Ie],Ne);xe(Ze.x,Ze.y,d+_e)}for(let Ie=0,ze=C.length;Ie<ze;Ie++){let Ze=C[Ie];te=ee[Ie];for(let et=0,Ke=Ze.length;et<Ke;et++){let j=k(Ze[et],te[et],Ne);y?xe(j.x,j.y+b[u-1].y,b[u-1].x+_e):xe(j.x,j.y,d+_e)}}}rt(),le();function rt(){let me=r.length/3;if(c){let de=0,_e=X*de;for(let Ne=0;Ne<Le;Ne++){let Ie=ke[Ne];We(Ie[2]+_e,Ie[1]+_e,Ie[0]+_e)}de=u+g*2,_e=X*de;for(let Ne=0;Ne<Le;Ne++){let Ie=ke[Ne];We(Ie[0]+_e,Ie[1]+_e,Ie[2]+_e)}}else{for(let de=0;de<Le;de++){let _e=ke[de];We(_e[2],_e[1],_e[0])}for(let de=0;de<Le;de++){let _e=ke[de];We(_e[0]+X*u,_e[1]+X*u,_e[2]+X*u)}}s.addGroup(me,r.length/3-me,0)}function le(){let me=r.length/3,de=0;ge(z,de),de+=z.length;for(let _e=0,Ne=C.length;_e<Ne;_e++){let Ie=C[_e];ge(Ie,de),de+=Ie.length}s.addGroup(me,r.length/3-me,1)}function ge(me,de){let _e=me.length;for(;--_e>=0;){let Ne=_e,Ie=_e-1;Ie<0&&(Ie=me.length-1);for(let ze=0,Ze=u+g*2;ze<Ze;ze++){let et=X*ze,Ke=X*(ze+1),j=de+Ne+et,Mt=de+Ie+et,ot=de+Ie+Ke,ct=de+Ne+Ke;Fe(j,Mt,ot,ct)}}}function xe(me,de,_e){o.push(me),o.push(de),o.push(_e)}function We(me,de,_e){Ee(me),Ee(de),Ee(_e);let Ne=r.length/3,Ie=x.generateTopUV(s,r,Ne-3,Ne-2,Ne-1);at(Ie[0]),at(Ie[1]),at(Ie[2])}function Fe(me,de,_e,Ne){Ee(me),Ee(de),Ee(Ne),Ee(de),Ee(_e),Ee(Ne);let Ie=r.length/3,ze=x.generateSideWallUV(s,r,Ie-6,Ie-3,Ie-2,Ie-1);at(ze[0]),at(ze[1]),at(ze[3]),at(ze[1]),at(ze[2]),at(ze[3])}function Ee(me){r.push(o[me*3+0]),r.push(o[me*3+1]),r.push(o[me*3+2])}function at(me){a.push(me.x),a.push(me.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,s=this.parameters.options;return D0(i,s,t)}static fromJSON(t,i){let s=[];for(let a=0,n=t.shapes.length;a<n;a++){let l=i[t.shapes[a]];s.push(l)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Zn[r.type]().fromJSON(r)),new Id(s,t.options)}},U0={generateTopUV:function(e,t,i,s,r){let a=t[i*3],n=t[i*3+1],l=t[s*3],o=t[s*3+1],h=t[r*3],u=t[r*3+1];return[new be(a,n),new be(l,o),new be(h,u)]},generateSideWallUV:function(e,t,i,s,r,a){let n=t[i*3],l=t[i*3+1],o=t[i*3+2],h=t[s*3],u=t[s*3+1],d=t[s*3+2],c=t[r*3],p=t[r*3+1],v=t[r*3+2],_=t[a*3],g=t[a*3+1],f=t[a*3+2];return Math.abs(l-u)<Math.abs(n-h)?[new be(n,1-o),new be(h,1-d),new be(c,1-v),new be(_,1-f)]:[new be(l,1-o),new be(u,1-d),new be(p,1-v),new be(g,1-f)]}};function D0(e,t,i){if(i.shapes=[],Array.isArray(e))for(let s=0,r=e.length;s<r;s++){let a=e[s];i.shapes.push(a.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var Ph=class Ld extends Ha{constructor(t=1,i=0){let s=(1+Math.sqrt(5))/2,r=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,a,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Ld(t.radius,t.detail)}},Ih=class Nd extends yt{constructor(t=[new be(0,-.5),new be(.5,0),new be(0,.5)],i=12,s=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:s,phiLength:r},i=Math.floor(i),r=pt(r,0,Math.PI*2);let a=[],n=[],l=[],o=[],h=[],u=1/i,d=new U,c=new be,p=new U,v=new U,_=new U,g=0,f=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,p.x=f*1,p.y=-g,p.z=f*0,_.copy(p),p.normalize(),o.push(p.x,p.y,p.z);break;case t.length-1:o.push(_.x,_.y,_.z);break;default:g=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,p.x=f*1,p.y=-g,p.z=f*0,v.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),o.push(p.x,p.y,p.z),_.copy(v)}for(let x=0;x<=i;x++){let b=s+x*u*r,y=Math.sin(b),S=Math.cos(b);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*y,d.y=t[A].y,d.z=t[A].x*S,n.push(d.x,d.y,d.z),c.x=x/i,c.y=A/(t.length-1),l.push(c.x,c.y);let w=o[3*A+0]*y,m=o[3*A+1],M=o[3*A+0]*S;h.push(w,m,M)}}for(let x=0;x<i;x++)for(let b=0;b<t.length-1;b++){let y=b+x*t.length,S=y,A=y+t.length,w=y+t.length+1,m=y+1;a.push(S,A,m),a.push(w,m,A)}this.setIndex(a),this.setAttribute("position",new $e(n,3)),this.setAttribute("uv",new $e(l,2)),this.setAttribute("normal",new $e(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nd(t.points,t.segments,t.phiStart,t.phiLength)}},O0=class Ud extends Ha{constructor(t=1,i=0){let s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,r,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Ud(t.radius,t.detail)}},Ci=class Dd extends yt{constructor(t=1,i=1,s=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:r};let a=t/2,n=i/2,l=Math.floor(s),o=Math.floor(r),h=l+1,u=o+1,d=t/l,c=i/o,p=[],v=[],_=[],g=[];for(let f=0;f<u;f++){let x=f*c-n;for(let b=0;b<h;b++){let y=b*d-a;v.push(y,-x,0),_.push(0,0,1),g.push(b/l),g.push(1-f/o)}}for(let f=0;f<o;f++)for(let x=0;x<l;x++){let b=x+h*f,y=x+h*(f+1),S=x+1+h*(f+1),A=x+1+h*f;p.push(b,y,A),p.push(y,S,A)}this.setIndex(p),this.setAttribute("position",new $e(v,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dd(t.width,t.height,t.widthSegments,t.heightSegments)}},lr=class Od extends yt{constructor(t=.5,i=1,s=32,r=1,a=0,n=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:r,thetaStart:a,thetaLength:n},s=Math.max(3,s),r=Math.max(1,r);let l=[],o=[],h=[],u=[],d=t,c=(i-t)/r,p=new U,v=new be;for(let _=0;_<=r;_++){for(let g=0;g<=s;g++){let f=a+g/s*n;p.x=d*Math.cos(f),p.y=d*Math.sin(f),o.push(p.x,p.y,p.z),h.push(0,0,1),v.x=(p.x/i+1)/2,v.y=(p.y/i+1)/2,u.push(v.x,v.y)}d+=c}for(let _=0;_<r;_++){let g=_*(s+1);for(let f=0;f<s;f++){let x=f+g,b=x,y=x+s+1,S=x+s+2,A=x+1;l.push(b,y,A),l.push(y,S,A)}}this.setIndex(l),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Od(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Lh=class Bd extends yt{constructor(t=new ks([new be(0,.5),new be(-.5,-.5),new be(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let s=[],r=[],a=[],n=[],l=0,o=0;if(Array.isArray(t)===!1)h(t);else for(let u=0;u<t.length;u++)h(t[u]),this.addGroup(l,o,u),l+=o,o=0;this.setIndex(s),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(a,3)),this.setAttribute("uv",new $e(n,2));function h(u){let d=r.length/3,c=u.extractPoints(i),p=c.shape,v=c.holes;ir.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,f=v.length;g<f;g++){let x=v[g];ir.isClockWise(x)===!0&&(v[g]=x.reverse())}let _=ir.triangulateShape(p,v);for(let g=0,f=v.length;g<f;g++){let x=v[g];p=p.concat(x)}for(let g=0,f=p.length;g<f;g++){let x=p[g];r.push(x.x,x.y,0),a.push(0,0,1),n.push(x.x,x.y)}for(let g=0,f=_.length;g<f;g++){let x=_[g],b=x[0]+d,y=x[1]+d,S=x[2]+d;s.push(b,y,S),o+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return B0(i,t)}static fromJSON(t,i){let s=[];for(let r=0,a=t.shapes.length;r<a;r++){let n=i[t.shapes[r]];s.push(n)}return new Bd(s,t.curveSegments)}};function B0(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,s=e.length;i<s;i++){let r=e[i];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var si=class Fd extends yt{constructor(t=1,i=32,s=16,r=0,a=Math.PI*2,n=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:r,phiLength:a,thetaStart:n,thetaLength:l},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));let o=Math.min(n+l,Math.PI),h=0,u=[],d=new U,c=new U,p=[],v=[],_=[],g=[];for(let f=0;f<=s;f++){let x=[],b=f/s,y=n+b*l,S=t*Math.cos(y),A=Math.sqrt(t*t-S*S),w=0;f===0&&n===0?w=.5/i:f===s&&o===Math.PI&&(w=-.5/i);for(let m=0;m<=i;m++){let M=m/i,D=r+M*a;d.x=-A*Math.cos(D),d.y=S,d.z=A*Math.sin(D),v.push(d.x,d.y,d.z),c.copy(d).normalize(),_.push(c.x,c.y,c.z),g.push(M+w,1-b),x.push(h++)}u.push(x)}for(let f=0;f<s;f++)for(let x=0;x<i;x++){let b=u[f][x+1],y=u[f][x],S=u[f+1][x],A=u[f+1][x+1];(f!==0||n>0)&&p.push(b,y,A),(f!==s-1||o<Math.PI)&&p.push(y,S,A)}this.setIndex(p),this.setAttribute("position",new $e(v,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fd(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},F0=class zd extends Ha{constructor(t=1,i=0){let s=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(s,r,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new zd(t.radius,t.detail)}},Nh=class kd extends yt{constructor(t=1,i=.4,s=12,r=48,a=Math.PI*2,n=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:r,arc:a,thetaStart:n,thetaLength:l},s=Math.floor(s),r=Math.floor(r);let o=[],h=[],u=[],d=[],c=new U,p=new U,v=new U;for(let _=0;_<=s;_++){let g=n+_/s*l;for(let f=0;f<=r;f++){let x=f/r*a;p.x=(t+i*Math.cos(g))*Math.cos(x),p.y=(t+i*Math.cos(g))*Math.sin(x),p.z=i*Math.sin(g),h.push(p.x,p.y,p.z),c.x=t*Math.cos(x),c.y=t*Math.sin(x),v.subVectors(p,c).normalize(),u.push(v.x,v.y,v.z),d.push(f/r),d.push(_/s)}}for(let _=1;_<=s;_++)for(let g=1;g<=r;g++){let f=(r+1)*_+g-1,x=(r+1)*(_-1)+g-1,b=(r+1)*(_-1)+g,y=(r+1)*_+g;o.push(f,x,y),o.push(x,b,y)}this.setIndex(o),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kd(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},z0=class Hd extends yt{constructor(t=1,i=.4,s=64,r=8,a=2,n=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:s,radialSegments:r,p:a,q:n},s=Math.floor(s),r=Math.floor(r);let l=[],o=[],h=[],u=[],d=new U,c=new U,p=new U,v=new U,_=new U,g=new U,f=new U;for(let b=0;b<=s;++b){let y=b/s*a*Math.PI*2;x(y,a,n,t,p),x(y+.01,a,n,t,v),g.subVectors(v,p),f.addVectors(v,p),_.crossVectors(g,f),f.crossVectors(_,g),_.normalize(),f.normalize();for(let S=0;S<=r;++S){let A=S/r*Math.PI*2,w=-i*Math.cos(A),m=i*Math.sin(A);d.x=p.x+(w*f.x+m*_.x),d.y=p.y+(w*f.y+m*_.y),d.z=p.z+(w*f.z+m*_.z),o.push(d.x,d.y,d.z),c.subVectors(d,p).normalize(),h.push(c.x,c.y,c.z),u.push(b/s),u.push(S/r)}}for(let b=1;b<=s;b++)for(let y=1;y<=r;y++){let S=(r+1)*(b-1)+(y-1),A=(r+1)*b+(y-1),w=(r+1)*b+y,m=(r+1)*(b-1)+y;l.push(S,A,m),l.push(A,w,m)}this.setIndex(l),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function x(b,y,S,A,w){let m=Math.cos(b),M=Math.sin(b),D=S/y*b,C=Math.cos(D);w.x=A*(2+C)*.5*m,w.y=A*(2+C)*M*.5,w.z=A*Math.sin(D)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hd(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Uh=class Gd extends yt{constructor(t=new Ed(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),i=64,s=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:r,closed:a};let n=t.computeFrenetFrames(i,a);this.tangents=n.tangents,this.normals=n.normals,this.binormals=n.binormals;let l=new U,o=new U,h=new be,u=new U,d=[],c=[],p=[],v=[];_(),this.setIndex(v),this.setAttribute("position",new $e(d,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(p,2));function _(){for(let b=0;b<i;b++)g(b);g(a===!1?i:0),x(),f()}function g(b){u=t.getPointAt(b/i,u);let y=n.normals[b],S=n.binormals[b];for(let A=0;A<=r;A++){let w=A/r*Math.PI*2,m=Math.sin(w),M=-Math.cos(w);o.x=M*y.x+m*S.x,o.y=M*y.y+m*S.y,o.z=M*y.z+m*S.z,o.normalize(),c.push(o.x,o.y,o.z),l.x=u.x+s*o.x,l.y=u.y+s*o.y,l.z=u.z+s*o.z,d.push(l.x,l.y,l.z)}}function f(){for(let b=1;b<=i;b++)for(let y=1;y<=r;y++){let S=(r+1)*(b-1)+(y-1),A=(r+1)*b+(y-1),w=(r+1)*b+y,m=(r+1)*(b-1)+y;v.push(S,A,m),v.push(A,w,m)}}function x(){for(let b=0;b<=i;b++)for(let y=0;y<=r;y++)h.x=b/i,h.y=y/r,p.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Gd(new Zn[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},k0=class extends yt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new U,r=new U;if(e.index!==null){let a=e.attributes.position,n=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:n.count,materialIndex:0}]);for(let o=0,h=l.length;o<h;++o){let u=l[o],d=u.start,c=u.count;for(let p=d,v=d+c;p<v;p+=3)for(let _=0;_<3;_++){let g=n.getX(p+_),f=n.getX(p+(_+1)%3);s.fromBufferAttribute(a,g),r.fromBufferAttribute(a,f),su(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let n=0,l=a.count/3;n<l;n++)for(let o=0;o<3;o++){let h=3*n+o,u=3*n+(o+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),su(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new $e(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function su(e,t,i){let s=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return i.has(s)===!0||i.has(r)===!0?!1:(i.add(s),i.add(r),!0)}var TS=Object.freeze({__proto__:null,BoxGeometry:zs,CapsuleGeometry:wh,CircleGeometry:Qn,ConeGeometry:ka,CylinderGeometry:$r,DodecahedronGeometry:s0,EdgesGeometry:r0,ExtrudeGeometry:Ga,IcosahedronGeometry:Ph,LatheGeometry:Ih,OctahedronGeometry:O0,PlaneGeometry:Ci,PolyhedronGeometry:Ha,RingGeometry:lr,ShapeGeometry:Lh,SphereGeometry:si,TetrahedronGeometry:F0,TorusGeometry:Nh,TorusKnotGeometry:z0,TubeGeometry:Uh,WireframeGeometry:k0});function Yr(e){let t={};for(let i in e){t[i]={};for(let s in e[i]){let r=e[i][s];if(ru(r))r.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=r.clone();else if(Array.isArray(r))if(ru(r[0])){let a=[];for(let n=0,l=r.length;n<l;n++)a[n]=r[n].clone();t[i][s]=a}else t[i][s]=r.slice();else t[i][s]=r}}return t}function wi(e){let t={};for(let i=0;i<e.length;i++){let s=Yr(e[i]);for(let r in s)t[r]=s[r]}return t}function ru(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function H0(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Vd(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_t.workingColorSpace}var G0={clone:Yr,merge:wi},V0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mi=class extends or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V0,this.fragmentShader=W0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=H0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Qe().setHex(s.value);break;case"v2":this.uniforms[i].value=new be().fromArray(s.value);break;case"v3":this.uniforms[i].value=new U().fromArray(s.value);break;case"v4":this.uniforms[i].value=new kt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new lt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ft().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},j0=class extends Mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},St=class extends or{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lh,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var X0=class extends or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=em,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},q0=class extends or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Pr(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function fl(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Va=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];i:{e:{let a;t:{s:if(!(e<s)){for(let n=i+2;;){if(s===void 0){if(e<r)break s;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===n)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let n=t[1];e<n&&(i=2,r=n);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){let n=i+a>>>1;e<t[n]?a=n:i=n+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Y0=class extends Va{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tc,endingEnd:Tc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,n=s[r],l=s[a];if(n===void 0)switch(this.getSettings_().endingStart){case wc:r=e,n=2*t-i;break;case Ac:r=s.length-2,n=t+s[r]-s[r+1];break;default:r=e,n=i}if(l===void 0)switch(this.getSettings_().endingEnd){case wc:a=e,l=2*i-t;break;case Ac:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let o=(i-t)*.5,h=this.valueSize;this._weightPrev=o/(t-n),this._weightNext=o/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,n=this.valueSize,l=e*n,o=l-n,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,c=this._weightNext,p=(i-t)/(s-t),v=p*p,_=v*p,g=-d*_+2*d*v-d*p,f=(1+d)*_+(-1.5-2*d)*v+(-.5+d)*p+1,x=(-1-c)*_+(1.5+c)*v+.5*p,b=c*_-c*v;for(let y=0;y!==n;++y)r[y]=g*a[h+y]+f*a[o+y]+x*a[l+y]+b*a[u+y];return r}},Z0=class extends Va{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,n=this.valueSize,l=e*n,o=l-n,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==n;++d)r[d]=a[o+d]*u+a[l+d]*h;return r}},$0=class extends Va{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},J0=class extends Va{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,n=this.valueSize,l=e*n,o=l-n,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-t)/(s-t),v=1-p;for(let _=0;_!==n;++_)r[_]=a[o+_]*v+a[l+_]*p;return r}let d=n*2,c=e-1;for(let p=0;p!==n;++p){let v=a[o+p],_=a[l+p],g=c*d+p*2,f=u[g],x=u[g+1],b=e*d+p*2,y=h[b],S=h[b+1],A=Q0(i,t,f,y,s);r[p]=Wd(A,v,x,S,_)}return r}};function Wd(e,t,i,s,r){let a=1-e;return a*a*a*t+3*a*a*e*i+3*a*e*e*s+e*e*e*r}function K0(e,t,i,s,r){let a=1-e;return 3*a*a*(i-t)+6*a*e*(s-i)+3*e*e*(r-s)}function Q0(e,t,i,s,r){let a=(e-t)/(r-t);for(let n=0;n<8;n++){let l=Wd(a,t,i,s,r)-e;if(Math.abs(l)<1e-10)break;let o=K0(a,t,i,s,r);if(Math.abs(o)<1e-10)break;a=Math.max(0,Math.min(1,a-l/o))}return a}var Ji=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pr(t,this.TimeBufferType),this.values=Pr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Pr(e.times,Array),values:Pr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),fl(e.settings)&&(i.settings={inTangents:Pr(e.settings.inTangents,Array),outTangents:Pr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new $0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Z0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Y0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new J0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case jn:t=this.InterpolantFactoryMethodDiscrete;break;case oh:t=this.InterpolantFactoryMethodLinear;break;case Ho:t=this.InterpolantFactoryMethodSmooth;break;case Ec:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return st("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jn;case this.InterpolantFactoryMethodLinear:return oh;case this.InterpolantFactoryMethodSmooth:return Ho;case this.InterpolantFactoryMethodBezier:return Ec}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;fl(this.settings)&&(au(this.settings.inTangents,e),au(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let n=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*n,a*n)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(it("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(it("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let n=0;n!==r;n++){let l=i[n];if(typeof l=="number"&&isNaN(l)){it("KeyframeTrack: Time is not a valid number.",this,n,l),e=!1;break}if(a!==null&&a>l){it("KeyframeTrack: Out of order keys.",this,n,l,a),e=!1;break}a=l}if(s!==void 0&&cm(s))for(let n=0,l=s.length;n!==l;++n){let o=s[n];if(isNaN(o)){it("KeyframeTrack: Value is not a valid number.",this,n,o),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ho,r=e.length-1,a=1;for(let n=1;n<r;++n){let l=!1,o=e[n],h=e[n+1];if(o!==h&&(n!==1||o!==e[0]))if(s)l=!0;else{let u=n*i,d=u-i,c=u+i;for(let p=0;p!==i;++p){let v=t[u+p];if(v!==t[d+p]||v!==t[c+p]){l=!0;break}}}if(l){if(n!==a){e[a]=e[n];let u=n*i,d=a*i;for(let c=0;c!==i;++c)t[d+c]=t[u+c]}++a}}if(r>0){e[a]=e[r];for(let n=r*i,l=a*i,o=0;o!==i;++o)t[l+o]=t[n+o];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,fl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function au(e,t){for(let i=0,s=e.length;i!==s;i+=2)e[i]*=t}Ji.prototype.ValueTypeName="",Ji.prototype.TimeBufferType=Float32Array,Ji.prototype.ValueBufferType=Float32Array,Ji.prototype.DefaultInterpolation=oh;var va=class extends Ji{constructor(e,t,i){super(e,t,i)}};va.prototype.ValueTypeName="bool",va.prototype.ValueBufferType=Array,va.prototype.DefaultInterpolation=jn,va.prototype.InterpolantFactoryMethodLinear=void 0,va.prototype.InterpolantFactoryMethodSmooth=void 0;var eg=class extends Ji{constructor(e,t,i,s){super(e,t,i,s)}};eg.prototype.ValueTypeName="color";var tg=class extends Ji{constructor(e,t,i,s){super(e,t,i,s)}};tg.prototype.ValueTypeName="number";var ig=class extends Va{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,n=this.valueSize,l=(i-t)/(s-t),o=e*n;for(let h=o+n;o!==h;o+=4)ys.slerpFlat(r,0,a,o-n,a,o,l);return r}},nu=class extends Ji{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new ig(this.times,this.values,this.getValueSize(),e)}};nu.prototype.ValueTypeName="quaternion",nu.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends Ji{constructor(e,t,i){super(e,t,i)}};ya.prototype.ValueTypeName="string",ya.prototype.ValueBufferType=Array,ya.prototype.DefaultInterpolation=jn,ya.prototype.InterpolantFactoryMethodLinear=void 0,ya.prototype.InterpolantFactoryMethodSmooth=void 0;var sg=class extends Ji{constructor(e,t,i,s){super(e,t,i,s)}};sg.prototype.ValueTypeName="vector";var ml={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(ou(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!ou(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function ou(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var rg=class{constructor(e,t,i){let s=this,r=!1,a=0,n=0,l,o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){n++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,n),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,n),a===n&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return o.push(h,u),this},this.removeHandler=function(h){let u=o.indexOf(h);return u!==-1&&o.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=o.length;u<d;u+=2){let c=o[u],p=o[u+1];if(c.global&&(c.lastIndex=0),c.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ag=new rg,Dh=class{constructor(e){this.manager=e!==void 0?e:ag,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Dh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ir=new WeakMap,ng=class extends Dh{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ml.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Ir.get(a);u===void 0&&(u=[],Ir.set(a,u)),u.push({onLoad:t,onError:s})}return a}let n=La("img");function l(){h(),t&&t(this);let u=Ir.get(this)||[];for(let d=0;d<u.length;d++){let c=u[d];c.onLoad&&c.onLoad(this)}Ir.delete(this),r.manager.itemEnd(e)}function o(u){h(),s&&s(u),ml.remove(`image:${e}`);let d=Ir.get(this)||[];for(let c=0;c<d.length;c++){let p=d[c];p.onError&&p.onError(u)}Ir.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){n.removeEventListener("load",l,!1),n.removeEventListener("error",o,!1)}return n.addEventListener("load",l,!1),n.addEventListener("error",o,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(n.crossOrigin=this.crossOrigin),ml.add(`image:${e}`,n),r.manager.itemStart(e),n.src=e,n}};var jd=class extends Dh{constructor(e){super(e)}load(e,t,i,s){let r=new Ni,a=new ng(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(n){r.image=n,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Oh=class extends Ai{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Jr=class extends Oh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ai.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},gl=new ft,lu=new U,hu=new U,Xd=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=Li,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(lu),hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){gl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(gl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,n=s?s.w/r.y:1,l=s?s.x/r.x:0,o=s?s.y/r.y:0;e.coordinateSystem===Ia||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*n,0,.5*n+o,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*n,0,.5*n+o,0,0,.5,.5,0,0,0,1),t.multiply(gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ln=new U,Nn=new ys,qi=new U,Bh=class extends Ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ln,Nn,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ln,Nn,qi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ln,Nn,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ln,Nn,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ns=new U,cu=new be,uu=new be,fi=class extends Bh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Na*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Na*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z),Ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z)}getViewSize(e,t){return this.getViewBounds(e,cu,uu),t.subVectors(uu,cu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Hr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,o=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/o,s*=a.width/l,i*=a.height/o}let n=this.filmOffset;n!==0&&(r+=e*n/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var og=class extends Xd{constructor(){super(new fi(90,1,.5,500)),this.isPointLightShadow=!0}},_s=class extends Oh{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new og}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Fh=class extends Bh{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,n=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let o=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=o*this.view.offsetX,a=r+o*this.view.width,n-=h*this.view.offsetY,l=n-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,n,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},lg=class extends Xd{constructor(){super(new Fh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kr=class extends Oh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ai.DEFAULT_UP),this.updateMatrix(),this.target=new Ai,this.shadow=new lg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var wS=new ft,AS=new ft,RS=new ft;var Lr=-90,Nr=1,hg=class extends Ai{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fi(Lr,Nr,e,t);s.layers=this.layers,this.add(s);let r=new fi(Lr,Nr,e,t);r.layers=this.layers,this.add(r);let a=new fi(Lr,Nr,e,t);a.layers=this.layers,this.add(a);let n=new fi(Lr,Nr,e,t);n.layers=this.layers,this.add(n);let l=new fi(Lr,Nr,e,t);l.layers=this.layers,this.add(l);let o=new fi(Lr,Nr,e,t);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,n,l]=t;for(let o of t)this.remove(o);if(e===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),n.up.set(0,1,0),n.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),n.up.set(0,-1,0),n.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let o of t)this.add(o),o.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,n,l,o,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),c=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,c),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},cg=class extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var CS=new U,PS=new ys,IS=new U,LS=new U,NS=new U;var US=new U,DS=new ys,OS=new U,BS=new U;var zh="\\[\\]\\.:\\/",ug=new RegExp("["+zh+"]","g"),kh="[^"+zh+"]",dg="[^"+zh.replace("\\.","")+"]",pg=/((?:WC+[\/:])*)/.source.replace("WC",kh),fg=/(WCOD+)?/.source.replace("WCOD",dg),mg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),gg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),vg=new RegExp("^"+pg+fg+mg+gg+"$"),yg=["material","materials","bones","map"],xg=class{constructor(e,t,i){let s=i||qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},qt=class Br{constructor(t,i,s){this.path=i,this.parsedPath=s||Br.parseTrackName(i),this.node=Br.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,s){return t&&t.isAnimationObjectGroup?new Br.Composite(t,i,s):new Br(t,i,s)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ug,"")}static parseTrackName(t){let i=vg.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let s={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},r=s.nodeName&&s.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=s.nodeName.substring(r+1);yg.indexOf(a)!==-1&&(s.nodeName=s.nodeName.substring(0,r),s.objectName=a)}if(s.propertyName===null||s.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return s}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let s=t.skeleton.getBoneByName(i);if(s!==void 0)return s}if(t.children){let s=function(a){for(let n=0;n<a.length;n++){let l=a[n];if(l.name===i||l.uuid===i)return l;let o=s(l.children);if(o)return o}return null},r=s(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let s=this.resolvedProperty;for(let r=0,a=s.length;r!==a;++r)t[i++]=s[r]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let s=this.resolvedProperty;for(let r=0,a=s.length;r!==a;++r)s[r]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let s=this.resolvedProperty;for(let r=0,a=s.length;r!==a;++r)s[r]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let s=this.resolvedProperty;for(let r=0,a=s.length;r!==a;++r)s[r]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,s=i.objectName,r=i.propertyName,a=i.propertyIndex;if(t||(t=Br.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){st("PropertyBinding: No target node found for track: "+this.path+".");return}if(s){let h=i.objectIndex;switch(s){case"materials":if(!t.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){it("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){it("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){it("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[s]===void 0){it("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[s]}if(h!==void 0){if(t[h]===void 0){it("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let n=t[r];if(n===void 0){let h=i.nodeName;it("PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}o=this.BindingType.ArrayElement,this.resolvedProperty=n,this.propertyIndex=a}else n.fromArray!==void 0&&n.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=n):Array.isArray(n)?(o=this.BindingType.EntireArray,this.resolvedProperty=n):this.propertyName=r;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qt.Composite=xg,qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},qt.prototype.GetterByBindingType=[qt.prototype._getValue_direct,qt.prototype._getValue_array,qt.prototype._getValue_arrayElement,qt.prototype._getValue_toArray],qt.prototype.SetterByBindingTypeAndVersioning=[[qt.prototype._setValue_direct,qt.prototype._setValue_direct_setNeedsUpdate,qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_array,qt.prototype._setValue_array_setNeedsUpdate,qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_arrayElement,qt.prototype._setValue_arrayElement_setNeedsUpdate,qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_fromArray,qt.prototype._setValue_fromArray_setNeedsUpdate,qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var FS=new Float32Array(1);var du=new ft,qd=class{constructor(e,t,i=0,s=1/0){this.ray=new za(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Th,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):it("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return du.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(du),this}intersectObject(e,t=!0,i=[]){return dh(e,this,i,t),i.sort(pu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)dh(e[s],this,i,t);return i.sort(pu),i}};function pu(e,t){return e.distance-t.distance}function dh(e,t,i,s){let r=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(r=!1),r===!0&&s===!0){let a=e.children;for(let n=0,l=a.length;n<l;n++)dh(a[n],t,i,!0)}}var zS=(Bo=class{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}},Bo.prototype.isMatrix2=!0,Bo),kS=new be;var HS=new U,GS=new U,VS=new U,WS=new U,jS=new U,XS=new U,qS=new U;var YS=new U;var ZS=new U,$S=new ft,JS=new ft;var KS=new U,QS=new Qe,eM=new Qe;var tM=new U,iM=new U,sM=new U;var rM=new U,aM=new Bh;var nM=new Os;var oM=new U;function fu(e,t,i,s){let r=_g(s);switch(i){case Ju:return e*t;case Qu:return e*t/r.components*r.byteLength;case yh:return e*t/r.components*r.byteLength;case rr:return e*t*2/r.components*r.byteLength;case xh:return e*t*2/r.components*r.byteLength;case Ku:return e*t*3/r.components*r.byteLength;case Hi:return e*t*4/r.components*r.byteLength;case _h:return e*t*4/r.components*r.byteLength;case On:case Bn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Fn:case zn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ll:case Ul:return Math.max(e,16)*Math.max(t,8)/4;case Il:case Nl:return Math.max(e,8)*Math.max(t,8)/2;case Dl:case Ol:case Fl:case zl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Bl:case Vn:case kl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Vl:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case jl:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ql:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Zl:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case $l:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Kl:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ql:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case eh:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case th:case ih:case sh:return Math.ceil(e/4)*Math.ceil(t/4)*16;case rh:case ah:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Wn:case nh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function _g(e){switch(e){case Li:case qu:return{byteLength:1,components:1};case Ca:case Yu:case ts:return{byteLength:2,components:1};case gh:case vh:return{byteLength:2,components:4};case es:case mh:case $i:return{byteLength:4,components:1};case Zu:case $u:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}})),typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Yd(){let e=null,t=!1,i=null,s=null;function r(a,n){s=e.requestAnimationFrame(r),i(a,n)}return{start:function(){t!==!0&&i!==null&&e!==null&&(s=e.requestAnimationFrame(r),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(a){i=a},setContext:function(a){e=a}}}function Sg(e){let t=new WeakMap;function i(l,o){let h=l.array,u=l.usage,d=h.byteLength,c=e.createBuffer();e.bindBuffer(o,c),e.bufferData(o,h,u),l.onUploadCallback();let p;if(h instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=e.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=e.SHORT;else if(h instanceof Uint32Array)p=e.UNSIGNED_INT;else if(h instanceof Int32Array)p=e.INT;else if(h instanceof Int8Array)p=e.BYTE;else if(h instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:d}}function s(l,o,h){let u=o.array,d=o.updateRanges;if(e.bindBuffer(h,l),d.length===0)e.bufferSubData(h,0,u);else{d.sort((p,v)=>p.start-v.start);let c=0;for(let p=1;p<d.length;p++){let v=d[c],_=d[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++c,d[c]=_)}d.length=c+1;for(let p=0,v=d.length;p<v;p++){let _=d[p];e.bufferSubData(h,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}o.clearUpdateRanges()}o.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let o=t.get(l);o&&(e.deleteBuffer(o.buffer),t.delete(l))}function n(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let u=t.get(l);(!u||u.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let h=t.get(l);if(h===void 0)t.set(l,i(l,o));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,l,o),h.version=l.version}}return{get:r,remove:a,update:n}}var Mg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bg=`#ifdef USE_ALPHAHASH
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
#endif`,Eg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ag=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rg=`#ifdef USE_AOMAP
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
#endif`,Cg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pg=`#ifdef USE_BATCHING
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
#endif`,Ig=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ng=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ug=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dg=`#ifdef USE_IRIDESCENCE
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
#endif`,Og=`#ifdef USE_BUMPMAP
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
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jg=`#define PI 3.141592653589793
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
} // validated`,Xg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qg=`vec3 transformedNormal = objectNormal;
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
#endif`,Yg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ev=`#ifdef USE_ENVMAP
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
#endif`,tv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
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
#endif`,sv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rv=`#ifdef USE_ENVMAP
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
#endif`,av=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ov=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hv=`#ifdef USE_GRADIENTMAP
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
}`,cv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fv=`#ifdef USE_ENVMAP
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
#endif`,mv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xv=`PhysicalMaterial material;
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
#endif`,_v=`uniform sampler2D dfgLUT;
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
}`,Sv=`
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
#endif`,Mv=`#if defined( RE_IndirectDiffuse )
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
#endif`,bv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ev=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Av=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lv=`#if defined( USE_POINTS_UV )
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
#endif`,Nv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ov=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fv=`#ifdef USE_MORPHTARGETS
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
#endif`,zv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jv=`#ifdef USE_NORMALMAP
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
#endif`,Xv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$v=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,o1=`float getShadowMask() {
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
}`,l1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h1=`#ifdef USE_SKINNING
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
#endif`,c1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u1=`#ifdef USE_SKINNING
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
#endif`,d1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,g1=`#ifdef USE_TRANSMISSION
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
#endif`,v1=`#ifdef USE_TRANSMISSION
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
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,M1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b1=`uniform sampler2D t2D;
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
}`,E1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`#include <common>
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
}`,C1=`#if DEPTH_PACKING == 3200
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
}`,P1=`#define DISTANCE
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
}`,I1=`#define DISTANCE
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
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U1=`uniform float scale;
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
}`,D1=`uniform vec3 diffuse;
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
}`,O1=`#include <common>
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
}`,B1=`uniform vec3 diffuse;
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
}`,F1=`#define LAMBERT
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
}`,z1=`#define LAMBERT
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
}`,k1=`#define MATCAP
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
}`,H1=`#define MATCAP
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
}`,G1=`#define NORMAL
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
}`,V1=`#define NORMAL
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
}`,W1=`#define PHONG
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
}`,j1=`#define PHONG
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
}`,X1=`#define STANDARD
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
}`,q1=`#define STANDARD
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
}`,Y1=`#define TOON
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
}`,Z1=`#define TOON
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
}`,$1=`uniform float size;
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
}`,J1=`uniform vec3 diffuse;
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
}`,K1=`#include <common>
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
}`,Q1=`uniform vec3 color;
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
}`,ey=`uniform float rotation;
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
}`,ty=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:Mg,alphahash_pars_fragment:bg,alphamap_fragment:Eg,alphamap_pars_fragment:Tg,alphatest_fragment:wg,alphatest_pars_fragment:Ag,aomap_fragment:Rg,aomap_pars_fragment:Cg,batching_pars_vertex:Pg,batching_vertex:Ig,begin_vertex:Lg,beginnormal_vertex:Ng,bsdfs:Ug,iridescence_fragment:Dg,bumpmap_pars_fragment:Og,clipping_planes_fragment:Bg,clipping_planes_pars_fragment:Fg,clipping_planes_pars_vertex:zg,clipping_planes_vertex:kg,color_fragment:Hg,color_pars_fragment:Gg,color_pars_vertex:Vg,color_vertex:Wg,common:jg,cube_uv_reflection_fragment:Xg,defaultnormal_vertex:qg,displacementmap_pars_vertex:Yg,displacementmap_vertex:Zg,emissivemap_fragment:$g,emissivemap_pars_fragment:Jg,colorspace_fragment:Kg,colorspace_pars_fragment:Qg,envmap_fragment:ev,envmap_common_pars_fragment:tv,envmap_pars_fragment:iv,envmap_pars_vertex:sv,envmap_physical_pars_fragment:fv,envmap_vertex:rv,fog_vertex:av,fog_pars_vertex:nv,fog_fragment:ov,fog_pars_fragment:lv,gradientmap_pars_fragment:hv,lightmap_pars_fragment:cv,lights_lambert_fragment:uv,lights_lambert_pars_fragment:dv,lights_pars_begin:pv,lights_toon_fragment:mv,lights_toon_pars_fragment:gv,lights_phong_fragment:vv,lights_phong_pars_fragment:yv,lights_physical_fragment:xv,lights_physical_pars_fragment:_v,lights_fragment_begin:Sv,lights_fragment_maps:Mv,lights_fragment_end:bv,lightprobes_pars_fragment:Ev,logdepthbuf_fragment:Tv,logdepthbuf_pars_fragment:wv,logdepthbuf_pars_vertex:Av,logdepthbuf_vertex:Rv,map_fragment:Cv,map_pars_fragment:Pv,map_particle_fragment:Iv,map_particle_pars_fragment:Lv,metalnessmap_fragment:Nv,metalnessmap_pars_fragment:Uv,morphinstance_vertex:Dv,morphcolor_vertex:Ov,morphnormal_vertex:Bv,morphtarget_pars_vertex:Fv,morphtarget_vertex:zv,normal_fragment_begin:kv,normal_fragment_maps:Hv,normal_pars_fragment:Gv,normal_pars_vertex:Vv,normal_vertex:Wv,normalmap_pars_fragment:jv,clearcoat_normal_fragment_begin:Xv,clearcoat_normal_fragment_maps:qv,clearcoat_pars_fragment:Yv,iridescence_pars_fragment:Zv,opaque_fragment:$v,packing:Jv,premultiplied_alpha_fragment:Kv,project_vertex:Qv,dithering_fragment:e1,dithering_pars_fragment:t1,roughnessmap_fragment:i1,roughnessmap_pars_fragment:s1,shadowmap_pars_fragment:r1,shadowmap_pars_vertex:a1,shadowmap_vertex:n1,shadowmask_pars_fragment:o1,skinbase_vertex:l1,skinning_pars_vertex:h1,skinning_vertex:c1,skinnormal_vertex:u1,specularmap_fragment:d1,specularmap_pars_fragment:p1,tonemapping_fragment:f1,tonemapping_pars_fragment:m1,transmission_fragment:g1,transmission_pars_fragment:v1,uv_pars_fragment:y1,uv_pars_vertex:x1,uv_vertex:_1,worldpos_vertex:S1,background_vert:M1,background_frag:b1,backgroundCube_vert:E1,backgroundCube_frag:T1,cube_vert:w1,cube_frag:A1,depth_vert:R1,depth_frag:C1,distance_vert:P1,distance_frag:I1,equirect_vert:L1,equirect_frag:N1,linedashed_vert:U1,linedashed_frag:D1,meshbasic_vert:O1,meshbasic_frag:B1,meshlambert_vert:F1,meshlambert_frag:z1,meshmatcap_vert:k1,meshmatcap_frag:H1,meshnormal_vert:G1,meshnormal_frag:V1,meshphong_vert:W1,meshphong_frag:j1,meshphysical_vert:X1,meshphysical_frag:q1,meshtoon_vert:Y1,meshtoon_frag:Z1,points_vert:$1,points_frag:J1,shadow_vert:K1,shadow_frag:Q1,sprite_vert:ey,sprite_frag:ty},Ue={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Zi={basic:{uniforms:wi([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:wi([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:wi([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:wi([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:wi([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Qe(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:wi([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:wi([Ue.points,Ue.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:wi([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:wi([Ue.common,Ue.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:wi([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:wi([Ue.sprite,Ue.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:wi([Ue.common,Ue.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:wi([Ue.lights,Ue.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Zi.physical={uniforms:wi([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var Un={r:0,b:0,g:0},iy=new ft,Zd=new lt;Zd.set(-1,0,0,0,1,0,0,0,1);function sy(e,t,i,s,r,a){let n=new Qe(0),l=r===!0?0:1,o,h,u=null,d=0,c=null;function p(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){let y=x.backgroundBlurriness>0;b=t.get(b,y)}return b}function v(x){let b=!1,y=p(x);y===null?g(n,l):y&&y.isColor&&(g(y,1),b=!0);let S=e.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(e.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function _(x,b){let y=p(b);y&&(y.isCubeTexture||y.mapping===Jn)?(h===void 0&&(h=new vt(new zs(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Yr(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(iy.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Zd),h.material.toneMapped=_t.getTransfer(y.colorSpace)!==wt,(u!==y||d!==y.version||c!==e.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,c=e.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(o===void 0&&(o=new vt(new Ci(2,2),new Mi({name:"BackgroundMaterial",uniforms:Yr(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(o)),o.material.uniforms.t2D.value=y,o.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,o.material.toneMapped=_t.getTransfer(y.colorSpace)!==wt,y.matrixAutoUpdate===!0&&y.updateMatrix(),o.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||c!==e.toneMapping)&&(o.material.needsUpdate=!0,u=y,d=y.version,c=e.toneMapping),o.layers.enableAll(),x.unshift(o,o.geometry,o.material,0,0,null))}function g(x,b){x.getRGB(Un,Vd(e)),i.buffers.color.setClear(Un.r,Un.g,Un.b,b,a)}function f(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return n},setClearColor:function(x,b=1){n.set(x),l=b,g(n,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(n,l)},render:v,addToRenderList:_,dispose:f}}function ry(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),s={},r=c(null),a=r,n=!1;function l(C,B,J,z,k){let X=!1,Z=d(C,z,J,B);a!==Z&&(a=Z,h(a.object)),X=p(C,z,J,k),X&&v(C,z,J,k),k!==null&&t.update(k,e.ELEMENT_ARRAY_BUFFER),(X||n)&&(n=!1,y(C,B,J,z),k!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function o(){return e.createVertexArray()}function h(C){return e.bindVertexArray(C)}function u(C){return e.deleteVertexArray(C)}function d(C,B,J,z){let k=z.wireframe===!0,X=s[B.id];X===void 0&&(X={},s[B.id]=X);let Z=C.isInstancedMesh===!0?C.id:0,he=X[Z];he===void 0&&(he={},X[Z]=he);let ee=he[J.id];ee===void 0&&(ee={},he[J.id]=ee);let te=ee[k];return te===void 0&&(te=c(o()),ee[k]=te),te}function c(C){let B=[],J=[],z=[];for(let k=0;k<i;k++)B[k]=0,J[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:J,attributeDivisors:z,object:C,attributes:{},index:null}}function p(C,B,J,z){let k=a.attributes,X=B.attributes,Z=0,he=J.getAttributes();for(let ee in he)if(he[ee].location>=0){let te=k[ee],pe=X[ee];if(pe===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(pe=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(pe=C.instanceColor)),te===void 0||te.attribute!==pe||pe&&te.data!==pe.data)return!0;Z++}return a.attributesNum!==Z||a.index!==z}function v(C,B,J,z){let k={},X=B.attributes,Z=0,he=J.getAttributes();for(let ee in he)if(he[ee].location>=0){let te=X[ee];te===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(te=C.instanceColor));let pe={};pe.attribute=te,te&&te.data&&(pe.data=te.data),k[ee]=pe,Z++}a.attributes=k,a.attributesNum=Z,a.index=z}function _(){let C=a.newAttributes;for(let B=0,J=C.length;B<J;B++)C[B]=0}function g(C){f(C,0)}function f(C,B){let J=a.newAttributes,z=a.enabledAttributes,k=a.attributeDivisors;J[C]=1,z[C]===0&&(e.enableVertexAttribArray(C),z[C]=1),k[C]!==B&&(e.vertexAttribDivisor(C,B),k[C]=B)}function x(){let C=a.newAttributes,B=a.enabledAttributes;for(let J=0,z=B.length;J<z;J++)B[J]!==C[J]&&(e.disableVertexAttribArray(J),B[J]=0)}function b(C,B,J,z,k,X,Z){Z===!0?e.vertexAttribIPointer(C,B,J,k,X):e.vertexAttribPointer(C,B,J,z,k,X)}function y(C,B,J,z){_();let k=z.attributes,X=J.getAttributes(),Z=B.defaultAttributeValues;for(let he in X){let ee=X[he];if(ee.location>=0){let te=k[he];if(te===void 0&&(he==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),he==="instanceColor"&&C.instanceColor&&(te=C.instanceColor)),te!==void 0){let pe=te.normalized,ke=te.itemSize,Le=t.get(te);if(Le===void 0)continue;let xt=Le.buffer,rt=Le.type,le=Le.bytesPerElement,ge=rt===e.INT||rt===e.UNSIGNED_INT||te.gpuType===mh;if(te.isInterleavedBufferAttribute){let xe=te.data,We=xe.stride,Fe=te.offset;if(xe.isInstancedInterleavedBuffer){for(let Ee=0;Ee<ee.locationSize;Ee++)f(ee.location+Ee,xe.meshPerAttribute);C.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ee=0;Ee<ee.locationSize;Ee++)g(ee.location+Ee);e.bindBuffer(e.ARRAY_BUFFER,xt);for(let Ee=0;Ee<ee.locationSize;Ee++)b(ee.location+Ee,ke/ee.locationSize,rt,pe,We*le,(Fe+ke/ee.locationSize*Ee)*le,ge)}else{if(te.isInstancedBufferAttribute){for(let xe=0;xe<ee.locationSize;xe++)f(ee.location+xe,te.meshPerAttribute);C.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let xe=0;xe<ee.locationSize;xe++)g(ee.location+xe);e.bindBuffer(e.ARRAY_BUFFER,xt);for(let xe=0;xe<ee.locationSize;xe++)b(ee.location+xe,ke/ee.locationSize,rt,pe,ke*le,ke/ee.locationSize*xe*le,ge)}}else if(Z!==void 0){let pe=Z[he];if(pe!==void 0)switch(pe.length){case 2:e.vertexAttrib2fv(ee.location,pe);break;case 3:e.vertexAttrib3fv(ee.location,pe);break;case 4:e.vertexAttrib4fv(ee.location,pe);break;default:e.vertexAttrib1fv(ee.location,pe)}}}}x()}function S(){M();for(let C in s){let B=s[C];for(let J in B){let z=B[J];for(let k in z){let X=z[k];for(let Z in X)u(X[Z].object),delete X[Z];delete z[k]}}delete s[C]}}function A(C){if(s[C.id]===void 0)return;let B=s[C.id];for(let J in B){let z=B[J];for(let k in z){let X=z[k];for(let Z in X)u(X[Z].object),delete X[Z];delete z[k]}}delete s[C.id]}function w(C){for(let B in s){let J=s[B];for(let z in J){let k=J[z];if(k[C.id]===void 0)continue;let X=k[C.id];for(let Z in X)u(X[Z].object),delete X[Z];delete k[C.id]}}}function m(C){for(let B in s){let J=s[B],z=C.isInstancedMesh===!0?C.id:0,k=J[z];if(k!==void 0){for(let X in k){let Z=k[X];for(let he in Z)u(Z[he].object),delete Z[he];delete k[X]}delete J[z],Object.keys(J).length===0&&delete s[B]}}}function M(){D(),n=!0,a!==r&&(a=r,h(a.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:M,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfObject:m,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function ay(e,t,i){let s;function r(o){s=o}function a(o,h){e.drawArrays(s,o,h),i.update(h,s,1)}function n(o,h,u){u!==0&&(e.drawArraysInstanced(s,o,h,u),i.update(h,s,u))}function l(o,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,o,0,h,0,u);let d=0;for(let c=0;c<u;c++)d+=h[c];i.update(d,s,1)}this.setMode=r,this.render=a,this.renderInstances=n,this.renderMultiDraw=l}function ny(e,t,i,s){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function n(w){return!(w!==Hi&&s.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){let m=w===ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Li&&w!==$i&&!m&&s.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function o(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",u=o(h);u!==h&&(st("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let d=i.logarithmicDepthBuffer===!0,c=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&c===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),x=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),S=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:o,textureFormatReadable:n,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:c,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:y,maxSamples:S,samples:A}}function oy(e){let t=this,i=null,s=0,r=!1,a=!1,n=new Us,l=new lt,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c){let p=d.length!==0||c||s!==0||r;return r=c,s=d.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,c){i=u(d,c,0)},this.setState=function(d,c,p){let v=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,f=e.get(d);if(!r||v===null||v.length===0||a&&!g)a?u(null):h();else{let x=a?0:s,b=x*4,y=f.clippingState||null;o.value=y,y=u(v,c,b,p);for(let S=0;S!==b;++S)y[S]=i[S];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function h(){o.value!==i&&(o.value=i,o.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function u(d,c,p,v){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=o.value,v!==!0||g===null){let f=p+_*4,x=c.matrixWorldInverse;l.getNormalMatrix(x),(g===null||g.length<f)&&(g=new Float32Array(f));for(let b=0,y=p;b!==_;++b,y+=4)n.copy(d[b]).applyMatrix4(x,l),n.normal.toArray(g,y),g[y+3]=n.constant}o.value=g,o.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var Fr=4,ly=6,hy=20,cy=256,xa=new Fh,mu=new Qe,vl=null,yl=0,xl=0,_l=!1,uy=new U,Ks=new U,gu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:n=uy}=r;vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,n),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vl,yl,xl),this._renderer.xr.enabled=_l,e.scissorTest=!1,Ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===Vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:ts,format:Hi,colorSpace:Xn,depthBuffer:!1},s=vu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vu(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=dy(r)),this._blurMaterial=fy(r,e,t),this._ggxMaterial=py(r,e,t)}return s}_compileMaterial(e){let t=new vt(new yt,e);this._renderer.compile(t,xa)}_sceneToCubeUV(e,t,i,s,r){let a=new fi(90,1,t,i),n=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],o=this._renderer,h=o.autoClear,u=o.toneMapping;o.getClearColor(mu),o.toneMapping=Ki,o.autoClear=!1,o.state.buffers.depth.getReversed()&&(o.setRenderTarget(s),o.clearDepth(),o.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vt(new zs,new di({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,c=d.material,p=!1,v=e.background;v?v.isColor&&(c.color.copy(v),e.background=null,p=!0):(c.color.copy(mu),p=!0);for(let _=0;_<6;_++){let g=_%3;g===0?(a.up.set(0,n[_],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x+l[_],r.y,r.z)):g===1?(a.up.set(0,0,n[_]),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y+l[_],r.z)):(a.up.set(0,n[_],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y,r.z+l[_]));let f=this._cubeSize;Ur(s,g*f,_>2?f:0,f,f),o.setRenderTarget(s),p&&o.render(d,a),o.render(e,a)}o.toneMapping=u,o.autoClear=h,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===sr||e.mapping===Vr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let n=r.uniforms;n.envMap.value=e;let l=this._cubeSize;Ur(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,xa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,n=this._lodMeshes[i];n.material=a;let l=a.uniforms,o=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(o*o-h*h),d=o*1.25,c=u*d,{_lodMax:p}=this,v=this._sizeLods[i],_=3*v*(i>p-Fr?i-p+Fr:0),g=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=c,l.mipInt.value=p-t,Ur(r,_,g,3*v,2*v),s.setRenderTarget(r),s.render(n,xa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,Ur(e,_,g,3*v,2*v),s.setRenderTarget(e),s.render(n,xa)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,n=this._blurMaterial,l=this._lodMeshes[s];l.material=n;let o=n.uniforms;o.envMap.value=e.texture,o.sigma.value=r,o.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Fr?s-this._lodMax+Fr:0),d=4*(this._cubeSize-h);Ur(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,xa)}};function dy(e){let t=[],i=[],s=e,r=e-Fr+1+ly;for(let a=0;a<r;a++){let n=Math.pow(2,s);t.push(n);let l=1/(n-2),o=-l,h=1+l,u=[o,o,h,o,h,h,o,o,h,h,o,h],d=6,c=6,p=3,v=new Float32Array(p*c*d),_=new Float32Array(p*c*d);for(let f=0;f<d;f++){let x=f%3*2/3-1,b=f>2?0:-1,y=[x,b,0,x+2/3,b,0,x+2/3,b+1,0,x,b,0,x+2/3,b+1,0,x,b+1,0];v.set(y,p*c*f);for(let S=0;S<c;S++){let A=u[S*2]*2-1,w=u[S*2+1]*2-1;f===0?Ks.set(1,w,A):f===1?Ks.set(-A,1,-w):f===2?Ks.set(-A,w,1):f===3?Ks.set(-1,w,-A):f===4?Ks.set(-A,-1,w):Ks.set(A,w,-1),Ks.toArray(_,(f*c+S)*p)}}let g=new yt;g.setAttribute("position",new $t(v,p)),g.setAttribute("outputDirection",new $t(_,p)),i.push(new vt(g,null)),s>Fr&&s--}return{lodMeshes:i,sizeLods:t}}function vu(e,t,i){let s=new Vi(e,t,i);return s.texture.mapping=Jn,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ur(e,t,i,s,r){e.viewport.set(t,i,s,r),e.scissor.set(t,i,s,r)}function py(e,t,i){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:eo(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function fy(e,t,i){return new Mi({name:"SphericalGaussianBlur",defines:{SAMPLES:hy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:eo(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function yu(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eo(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function xu(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function eo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var $d=class extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new dd(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zs(5,5,5),r=new Mi({name:"CubemapFromEquirect",uniforms:Yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ci,blending:fs});r.uniforms.tEquirect.value=t;let a=new vt(s,r),n=t.minFilter;return t.minFilter===er&&(t.minFilter=Si),new hg(1,10,this).update(e,a),t.minFilter=n,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function my(e){let t=new WeakMap,i=new WeakMap,s=null;function r(c,p=!1){return c==null?null:p?n(c):a(c)}function a(c){if(c&&c.isTexture){let p=c.mapping;if(p===Fo||p===zo)if(t.has(c)){let v=t.get(c).texture;return l(v,c.mapping)}else{let v=c.image;if(v&&v.height>0){let _=new $d(v.height);return _.fromEquirectangularTexture(e,c),t.set(c,_),c.addEventListener("dispose",h),l(_.texture,c.mapping)}else return null}}return c}function n(c){if(c&&c.isTexture){let p=c.mapping,v=p===Fo||p===zo,_=p===sr||p===Vr;if(v||_){let g=i.get(c),f=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return s===null&&(s=new gu(e)),g=v?s.fromEquirectangular(c,g):s.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,i.set(c,g),g.texture;if(g!==void 0)return g.texture;{let x=c.image;return v&&x&&x.height>0||_&&x&&o(x)?(s===null&&(s=new gu(e)),g=v?s.fromEquirectangular(c):s.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,i.set(c,g),c.addEventListener("dispose",u),g.texture):null}}}return c}function l(c,p){return p===Fo?c.mapping=sr:p===zo&&(c.mapping=Vr),c}function o(c){let p=0,v=6;for(let _=0;_<v;_++)c[_]!==void 0&&p++;return p===v}function h(c){let p=c.target;p.removeEventListener("dispose",h);let v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function u(c){let p=c.target;p.removeEventListener("dispose",u);let v=i.get(p);v!==void 0&&(i.delete(p),v.dispose())}function d(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:r,dispose:d}}function gy(e){let t={};function i(s){if(t[s]!==void 0)return t[s];let r=e.getExtension(s);return t[s]=r,r}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){let r=i(s);return r===null&&kr("WebGLRenderer: "+s+" extension not supported."),r}}}function vy(e,t,i,s){let r={},a=new WeakMap;function n(d){let c=d.target;c.index!==null&&t.remove(c.index);for(let v in c.attributes)t.remove(c.attributes[v]);c.removeEventListener("dispose",n),delete r[c.id];let p=a.get(c);p&&(t.remove(p),a.delete(c)),s.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,i.memory.geometries--}function l(d,c){return r[c.id]===!0||(c.addEventListener("dispose",n),r[c.id]=!0,i.memory.geometries++),c}function o(d){let c=d.attributes;for(let p in c)t.update(c[p],e.ARRAY_BUFFER)}function h(d){let c=[],p=d.index,v=d.attributes.position,_=0;if(v===void 0)return;if(p!==null){let x=p.array;_=p.version;for(let b=0,y=x.length;b<y;b+=3){let S=x[b+0],A=x[b+1],w=x[b+2];c.push(S,A,A,w,w,S)}}else{let x=v.array;_=v.version;for(let b=0,y=x.length/3-1;b<y;b+=3){let S=b+0,A=b+1,w=b+2;c.push(S,A,A,w,w,S)}}let g=new(v.count>=65535?od:nd)(c,1);g.version=_;let f=a.get(d);f&&t.remove(f),a.set(d,g)}function u(d){let c=a.get(d);if(c){let p=d.index;p!==null&&c.version<p.version&&h(d)}else h(d);return a.get(d)}return{get:l,update:o,getWireframeAttribute:u}}function yy(e,t,i){let s;function r(d){s=d}let a,n;function l(d){a=d.type,n=d.bytesPerElement}function o(d,c){e.drawElements(s,c,a,d*n),i.update(c,s,1)}function h(d,c,p){p!==0&&(e.drawElementsInstanced(s,c,a,d*n,p),i.update(c,s,p))}function u(d,c,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,c,0,a,d,0,p);let v=0;for(let _=0;_<p;_++)v+=c[_];i.update(v,s,1)}this.setMode=r,this.setIndex=l,this.render=o,this.renderInstances=h,this.renderMultiDraw=u}function xy(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(a,n,l){switch(i.calls++,n){case e.TRIANGLES:i.triangles+=l*(a/3);break;case e.LINES:i.lines+=l*(a/2);break;case e.LINE_STRIP:i.lines+=l*(a-1);break;case e.LINE_LOOP:i.lines+=l*a;break;case e.POINTS:i.points+=l*a;break;default:it("WebGLInfo: Unknown draw mode:",n);break}}function r(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:r,update:s}}function _y(e,t,i){let s=new WeakMap,r=new kt;function a(n,l,o){let h=n.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=u!==void 0?u.length:0,c=s.get(l);if(c===void 0||c.count!==d){let p=function(){m.dispose(),s.delete(l),l.removeEventListener("dispose",p)};c!==void 0&&c.texture.dispose();let v=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,g=l.morphAttributes.color!==void 0,f=l.morphAttributes.position||[],x=l.morphAttributes.normal||[],b=l.morphAttributes.color||[],y=0;v===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let S=l.attributes.position.count*y,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let w=new Float32Array(S*A*4*d),m=new id(w,S,A,d);m.type=$i,m.needsUpdate=!0;let M=y*4;for(let D=0;D<d;D++){let C=f[D],B=x[D],J=b[D],z=S*A*4*D;for(let k=0;k<C.count;k++){let X=k*M;v===!0&&(r.fromBufferAttribute(C,k),w[z+X+0]=r.x,w[z+X+1]=r.y,w[z+X+2]=r.z,w[z+X+3]=0),_===!0&&(r.fromBufferAttribute(B,k),w[z+X+4]=r.x,w[z+X+5]=r.y,w[z+X+6]=r.z,w[z+X+7]=0),g===!0&&(r.fromBufferAttribute(J,k),w[z+X+8]=r.x,w[z+X+9]=r.y,w[z+X+10]=r.z,w[z+X+11]=J.itemSize===4?r.w:1)}}c={count:d,texture:m,size:new be(S,A)},s.set(l,c),l.addEventListener("dispose",p)}if(n.isInstancedMesh===!0&&n.morphTexture!==null)o.getUniforms().setValue(e,"morphTexture",n.morphTexture,i);else{let p=0;for(let _=0;_<h.length;_++)p+=h[_];let v=l.morphTargetsRelative?1:1-p;o.getUniforms().setValue(e,"morphTargetBaseInfluence",v),o.getUniforms().setValue(e,"morphTargetInfluences",h)}o.getUniforms().setValue(e,"morphTargetsTexture",c.texture,i),o.getUniforms().setValue(e,"morphTargetsTextureSize",c.size)}return{update:a}}function Sy(e,t,i,s,r){let a=new WeakMap;function n(h){let u=r.render.frame,d=h.geometry,c=t.get(h,d);if(a.get(c)!==u&&(t.update(c),a.set(c,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),a.get(h)!==u&&(i.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,e.ARRAY_BUFFER),a.set(h,u))),h.isSkinnedMesh){let p=h.skeleton;a.get(p)!==u&&(p.update(),a.set(p,u))}return c}function l(){a=new WeakMap}function o(h){let u=h.target;u.removeEventListener("dispose",o),s.releaseStatesOfObject(u),i.remove(u.instanceMatrix),u.instanceColor!==null&&i.remove(u.instanceColor)}return{update:n,dispose:l}}var My={[ku]:"LINEAR_TONE_MAPPING",[Hu]:"REINHARD_TONE_MAPPING",[Gu]:"CINEON_TONE_MAPPING",[Zr]:"ACES_FILMIC_TONE_MAPPING",[Wu]:"AGX_TONE_MAPPING",[ju]:"NEUTRAL_TONE_MAPPING",[Vu]:"CUSTOM_TONE_MAPPING"};function by(e,t,i,s,r,a){let n=new Vi(t,i,{type:e,depthBuffer:r,stencilBuffer:a,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,o=null,h=new yt;h.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new $e([0,2,0,0,2,0],2));let u=new j0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new vt(h,u),c=new Fh(-1,1,1,-1,0,1),p=null,v=null,_=!1,g,f=null,x=[],b=!1;this.setSize=function(y,S){n.setSize(y,S),l!==null&&l.setSize(y,S),o!==null&&o.setSize(y,S);for(let A=0;A<x.length;A++){let w=x[A];w.setSize&&w.setSize(y,S)}},this.setEffects=function(y){x=y,b=x.length>0&&x[0].isRenderPass===!0;let S=n.width,A=n.height;x.length>0&&l===null&&(l=new Vi(S,A,{type:ts,depthBuffer:!1,stencilBuffer:!1}),o=new Vi(S,A,{type:ts,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<x.length;w++){let m=x[w];m.setSize&&m.setSize(S,A)}},this.begin=function(y,S){if(_||y.toneMapping===Ki&&x.length===0)return!1;if(f=S,S!==null){let A=S.width,w=S.height;(n.width!==A||n.height!==w)&&this.setSize(A,w)}return b===!1&&y.setRenderTarget(n),g=y.toneMapping,y.toneMapping=Ki,!0},this.hasRenderPass=function(){return b},this.end=function(y,S){y.toneMapping=g,_=!0;let A=n,w=l;for(let m=0;m<x.length;m++){let M=x[m];M.enabled!==!1&&(M.render(y,w,A,S),M.needsSwap!==!1&&(A=w,w=w===l?o:l))}if(p!==y.outputColorSpace||v!==y.toneMapping){p=y.outputColorSpace,v=y.toneMapping,u.defines={},_t.getTransfer(p)===wt&&(u.defines.SRGB_TRANSFER="");let m=My[v];m&&(u.defines[m]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,y.setRenderTarget(f),y.render(d,c),f=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){n.dispose(),l!==null&&l.dispose(),o!==null&&o.dispose(),h.dispose(),u.dispose()}}var Jd=new Ni,ph=new Ua(1,1),Kd=new id,Qd=new Dm,ep=new dd,_u=[],Su=[],Mu=new Float32Array(16),bu=new Float32Array(9),Eu=new Float32Array(4);function Qr(e,t,i){let s=e[0];if(s<=0||s>0)return e;let r=t*i,a=_u[r];if(a===void 0&&(a=new Float32Array(r),_u[r]=a),t!==0){s.toArray(a,0);for(let n=1,l=0;n!==t;++n)l+=i,e[n].toArray(a,l)}return a}function ai(e,t){if(e.length!==t.length)return!1;for(let i=0,s=e.length;i<s;i++)if(e[i]!==t[i])return!1;return!0}function ni(e,t){for(let i=0,s=t.length;i<s;i++)e[i]=t[i]}function to(e,t){let i=Su[t];i===void 0&&(i=new Int32Array(t),Su[t]=i);for(let s=0;s!==t;++s)i[s]=e.allocateTextureUnit();return i}function Ey(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Ty(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ai(i,t))return;e.uniform2fv(this.addr,t),ni(i,t)}}function wy(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(ai(i,t))return;e.uniform3fv(this.addr,t),ni(i,t)}}function Ay(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ai(i,t))return;e.uniform4fv(this.addr,t),ni(i,t)}}function Ry(e,t){let i=this.cache,s=t.elements;if(s===void 0){if(ai(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),ni(i,t)}else{if(ai(i,s))return;Eu.set(s),e.uniformMatrix2fv(this.addr,!1,Eu),ni(i,s)}}function Cy(e,t){let i=this.cache,s=t.elements;if(s===void 0){if(ai(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),ni(i,t)}else{if(ai(i,s))return;bu.set(s),e.uniformMatrix3fv(this.addr,!1,bu),ni(i,s)}}function Py(e,t){let i=this.cache,s=t.elements;if(s===void 0){if(ai(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),ni(i,t)}else{if(ai(i,s))return;Mu.set(s),e.uniformMatrix4fv(this.addr,!1,Mu),ni(i,s)}}function Iy(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Ly(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ai(i,t))return;e.uniform2iv(this.addr,t),ni(i,t)}}function Ny(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ai(i,t))return;e.uniform3iv(this.addr,t),ni(i,t)}}function Uy(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ai(i,t))return;e.uniform4iv(this.addr,t),ni(i,t)}}function Dy(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Oy(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ai(i,t))return;e.uniform2uiv(this.addr,t),ni(i,t)}}function By(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ai(i,t))return;e.uniform3uiv(this.addr,t),ni(i,t)}}function Fy(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ai(i,t))return;e.uniform4uiv(this.addr,t),ni(i,t)}}function zy(e,t,i){let s=this.cache,r=i.allocateTextureUnit();s[0]!==r&&(e.uniform1i(this.addr,r),s[0]=r);let a;this.type===e.SAMPLER_2D_SHADOW?(ph.compareFunction=i.isReversedDepthBuffer()?Mh:Sh,a=ph):a=Jd,i.setTexture2D(t||a,r)}function ky(e,t,i){let s=this.cache,r=i.allocateTextureUnit();s[0]!==r&&(e.uniform1i(this.addr,r),s[0]=r),i.setTexture3D(t||Qd,r)}function Hy(e,t,i){let s=this.cache,r=i.allocateTextureUnit();s[0]!==r&&(e.uniform1i(this.addr,r),s[0]=r),i.setTextureCube(t||ep,r)}function Gy(e,t,i){let s=this.cache,r=i.allocateTextureUnit();s[0]!==r&&(e.uniform1i(this.addr,r),s[0]=r),i.setTexture2DArray(t||Kd,r)}function Vy(e){switch(e){case 5126:return Ey;case 35664:return Ty;case 35665:return wy;case 35666:return Ay;case 35674:return Ry;case 35675:return Cy;case 35676:return Py;case 5124:case 35670:return Iy;case 35667:case 35671:return Ly;case 35668:case 35672:return Ny;case 35669:case 35673:return Uy;case 5125:return Dy;case 36294:return Oy;case 36295:return By;case 36296:return Fy;case 35678:case 36198:case 36298:case 36306:case 35682:return zy;case 35679:case 36299:case 36307:return ky;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Gy}}function Wy(e,t){e.uniform1fv(this.addr,t)}function jy(e,t){let i=Qr(t,this.size,2);e.uniform2fv(this.addr,i)}function Xy(e,t){let i=Qr(t,this.size,3);e.uniform3fv(this.addr,i)}function qy(e,t){let i=Qr(t,this.size,4);e.uniform4fv(this.addr,i)}function Yy(e,t){let i=Qr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Zy(e,t){let i=Qr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function $y(e,t){let i=Qr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Jy(e,t){e.uniform1iv(this.addr,t)}function Ky(e,t){e.uniform2iv(this.addr,t)}function Qy(e,t){e.uniform3iv(this.addr,t)}function ex(e,t){e.uniform4iv(this.addr,t)}function tx(e,t){e.uniform1uiv(this.addr,t)}function ix(e,t){e.uniform2uiv(this.addr,t)}function sx(e,t){e.uniform3uiv(this.addr,t)}function rx(e,t){e.uniform4uiv(this.addr,t)}function ax(e,t,i){let s=this.cache,r=t.length,a=to(i,r);ai(s,a)||(e.uniform1iv(this.addr,a),ni(s,a));let n;this.type===e.SAMPLER_2D_SHADOW?n=ph:n=Jd;for(let l=0;l!==r;++l)i.setTexture2D(t[l]||n,a[l])}function nx(e,t,i){let s=this.cache,r=t.length,a=to(i,r);ai(s,a)||(e.uniform1iv(this.addr,a),ni(s,a));for(let n=0;n!==r;++n)i.setTexture3D(t[n]||Qd,a[n])}function ox(e,t,i){let s=this.cache,r=t.length,a=to(i,r);ai(s,a)||(e.uniform1iv(this.addr,a),ni(s,a));for(let n=0;n!==r;++n)i.setTextureCube(t[n]||ep,a[n])}function lx(e,t,i){let s=this.cache,r=t.length,a=to(i,r);ai(s,a)||(e.uniform1iv(this.addr,a),ni(s,a));for(let n=0;n!==r;++n)i.setTexture2DArray(t[n]||Kd,a[n])}function hx(e){switch(e){case 5126:return Wy;case 35664:return jy;case 35665:return Xy;case 35666:return qy;case 35674:return Yy;case 35675:return Zy;case 35676:return $y;case 5124:case 35670:return Jy;case 35667:case 35671:return Ky;case 35668:case 35672:return Qy;case 35669:case 35673:return ex;case 5125:return tx;case 36294:return ix;case 36295:return sx;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return lx}}var cx=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Vy(t.type)}},ux=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hx(t.type)}},dx=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let n=s[r];n.setValue(e,t[n.id],i)}}},Sl=/(\w+)(\])?(\[|\.)?/g;function Tu(e,t){e.seq.push(t),e.map[t.id]=t}function px(e,t,i){let s=e.name,r=s.length;for(Sl.lastIndex=0;;){let a=Sl.exec(s),n=Sl.lastIndex,l=a[1],o=a[2]==="]",h=a[3];if(o&&(l=l|0),h===void 0||h==="["&&n+2===r){Tu(i,h===void 0?new cx(l,e,t):new ux(l,e,t));break}else{let u=i.map[l];u===void 0&&(u=new dx(l),Tu(i,u)),i=u}}}var Gn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let n=e.getActiveUniform(t,a),l=e.getUniformLocation(t,n.name);px(n,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let n=t[r],l=i[n.id];l.needsUpdate!==!1&&n.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function wu(e,t,i){let s=e.createShader(t);return e.shaderSource(s,i),e.compileShader(s),s}var fx=37297,mx=0;function gx(e,t){let i=e.split(`
`),s=[],r=Math.max(t-6,0),a=Math.min(t+6,i.length);for(let n=r;n<a;n++){let l=n+1;s.push(`${l===t?">":" "} ${l}: ${i[n]}`)}return s.join(`
`)}var Au=new lt;function vx(e){_t._getMatrix(Au,_t.workingColorSpace,e);let t=`mat3( ${Au.elements.map(i=>i.toFixed(4))} )`;switch(_t.getTransfer(e)){case qn:return[t,"LinearTransferOETF"];case wt:return[t,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Ru(e,t,i){let s=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(s&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let n=parseInt(a[1]);return i.toUpperCase()+`

`+r+`

`+gx(e.getShaderSource(t),n)}else return r}function yx(e,t){let i=vx(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var xx={[ku]:"Linear",[Hu]:"Reinhard",[Gu]:"Cineon",[Zr]:"ACESFilmic",[Wu]:"AgX",[ju]:"Neutral",[Vu]:"Custom"};function _x(e,t){let i=xx[t];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Dn=new U;function Sx(){_t.getLuminanceCoefficients(Dn);let e=Dn.x.toFixed(4),t=Dn.y.toFixed(4),i=Dn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mx(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ba).join(`
`)}function bx(e){let t=[];for(let i in e){let s=e[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function Ex(e,t){let i={},s=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<s;r++){let a=e.getActiveAttrib(t,r),n=a.name,l=1;a.type===e.FLOAT_MAT2&&(l=2),a.type===e.FLOAT_MAT3&&(l=3),a.type===e.FLOAT_MAT4&&(l=4),i[n]={type:a.type,location:e.getAttribLocation(t,n),locationSize:l}}return i}function ba(e){return e!==""}function Cu(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Tx=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(e){return e.replace(Tx,Ax)}var wx=new Map;function Ax(e,t){let i=dt[t];if(i===void 0){let s=wx.get(t);if(s!==void 0)i=dt[s],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return fh(i)}var Rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iu(e){return e.replace(Rx,Cx)}function Cx(e,t,i,s){let r="";for(let a=parseInt(t);a<parseInt(i);a++)r+=s.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Lu(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var Px={[zr]:"SHADOWMAP_TYPE_PCF",[Sa]:"SHADOWMAP_TYPE_VSM"};function Ix(e){return Px[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Lx={[sr]:"ENVMAP_TYPE_CUBE",[Vr]:"ENVMAP_TYPE_CUBE",[Jn]:"ENVMAP_TYPE_CUBE_UV"};function Nx(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":Lx[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ux={[Vr]:"ENVMAP_MODE_REFRACTION"};function Dx(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":Ux[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ox={[zu]:"ENVMAP_BLENDING_MULTIPLY",[Jf]:"ENVMAP_BLENDING_MIX",[Kf]:"ENVMAP_BLENDING_ADD"};function Bx(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Ox[e.combine]||"ENVMAP_BLENDING_NONE"}function Fx(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function zx(e,t,i,s){let r=e.getContext(),a=i.defines,n=i.vertexShader,l=i.fragmentShader,o=Ix(i),h=Nx(i),u=Dx(i),d=Bx(i),c=Fx(i),p=Mx(i),v=bx(a),_=r.createProgram(),g,f,x=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v].filter(ba).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v].filter(ba).join(`
`),f.length>0&&(f+=`
`)):(g=[Lu(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+o:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ba).join(`
`),f=[Lu(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,v,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+u:"",i.envMap?"#define "+d:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+o:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ki?"#define TONE_MAPPING":"",i.toneMapping!==Ki?dt.tonemapping_pars_fragment:"",i.toneMapping!==Ki?_x("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,yx("linearToOutputTexel",i.outputColorSpace),Sx(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ba).join(`
`)),n=fh(n),n=Cu(n,i),n=Pu(n,i),l=fh(l),l=Cu(l,i),l=Pu(l,i),n=Iu(n),l=Iu(l),i.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",i.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=x+g+n,y=x+f+l,S=wu(r,r.VERTEX_SHADER,b),A=wu(r,r.FRAGMENT_SHADER,y);r.attachShader(_,S),r.attachShader(_,A),i.index0AttributeName!==void 0?r.bindAttribLocation(_,0,i.index0AttributeName):i.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(C){if(e.debug.checkShaderErrors){let B=r.getProgramInfoLog(_)||"",J=r.getShaderInfoLog(S)||"",z=r.getShaderInfoLog(A)||"",k=B.trim(),X=J.trim(),Z=z.trim(),he=!0,ee=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(he=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,_,S,A);else{let te=Ru(r,S,"vertex"),pe=Ru(r,A,"fragment");it("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+te+`
`+pe)}else k!==""?st("WebGLProgram: Program Info Log:",k):(X===""||Z==="")&&(ee=!1);ee&&(C.diagnostics={runnable:he,programLog:k,vertexShader:{log:X,prefix:g},fragmentShader:{log:Z,prefix:f}})}r.deleteShader(S),r.deleteShader(A),m=new Gn(r,_),M=Ex(r,_)}let m;this.getUniforms=function(){return m===void 0&&w(this),m};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(_,fx)),D},this.destroy=function(){s.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=mx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=A,this}var kx=0,Hx=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Gx(e),t.set(e,i)),i}},Gx=class{constructor(e){this.id=kx++,this.code=e,this.usedTimes=0}};function Vx(e){return e===rr||e===Vn||e===Wn}function Wx(e,t,i,s,r,a){let n=new Th,l=new Hx,o=new Set,h=[],u=new Map,d=s.logarithmicDepthBuffer,c=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(m){return o.add(m),m===0?"uv":`uv${m}`}function _(m,M,D,C,B,J){let z=C.fog,k=B.geometry,X=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?C.environment:null,Z=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,he=t.get(m.envMap||X,Z),ee=he&&he.mapping===Jn?he.image.height:null,te=p[m.type];m.precision!==null&&(c=s.getMaxPrecision(m.precision),c!==m.precision&&st("WebGLProgram.getParameters:",m.precision,"not supported, using",c,"instead."));let pe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ke=pe!==void 0?pe.length:0,Le=0;k.morphAttributes.position!==void 0&&(Le=1),k.morphAttributes.normal!==void 0&&(Le=2),k.morphAttributes.color!==void 0&&(Le=3);let xt,rt,le,ge;if(te){let re=Zi[te];xt=re.vertexShader,rt=re.fragmentShader}else{xt=m.vertexShader,rt=m.fragmentShader;let re=l.getVertexShaderStage(m),ne=l.getFragmentShaderStage(m);l.update(m,re,ne),le=re.id,ge=ne.id}let xe=e.getRenderTarget(),We=e.state.buffers.depth.getReversed(),Fe=B.isInstancedMesh===!0,Ee=B.isBatchedMesh===!0,at=!!m.map,me=!!m.matcap,de=!!he,_e=!!m.aoMap,Ne=!!m.lightMap,Ie=!!m.bumpMap&&m.wireframe===!1,ze=!!m.normalMap,Ze=!!m.displacementMap,et=!!m.emissiveMap,Ke=!!m.metalnessMap,j=!!m.roughnessMap,Mt=m.anisotropy>0,ot=m.clearcoat>0,ct=m.dispersion>0,L=m.retroreflectivity>0,E=m.iridescence>0,q=m.sheen>0,se=m.transmission>0,O=Mt&&!!m.anisotropyMap,H=ot&&!!m.clearcoatMap,G=ot&&!!m.clearcoatNormalMap,P=ot&&!!m.clearcoatRoughnessMap,Y=E&&!!m.iridescenceMap,ve=E&&!!m.iridescenceThicknessMap,Me=q&&!!m.sheenColorMap,ue=q&&!!m.sheenRoughnessMap,Te=!!m.specularMap,Ae=!!m.specularColorMap,Be=!!m.specularIntensityMap,qe=se&&!!m.transmissionMap,W=se&&!!m.thicknessMap,ce=!!m.gradientMap,fe=!!m.alphaMap,Ce=m.alphaTest>0,ye=!!m.alphaHash,T=!!m.extensions,N=Ki;m.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(N=e.toneMapping);let I={shaderID:te,shaderType:m.type,shaderName:m.name,vertexShader:xt,fragmentShader:rt,defines:m.defines,customVertexShaderID:le,customFragmentShaderID:ge,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:c,batching:Ee,batchingColor:Ee&&B._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&B.instanceColor!==null,instancingMorph:Fe&&B.morphTexture!==null,outputColorSpace:xe===null?e.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:at,matcap:me,envMap:de,envMapMode:de&&he.mapping,envMapCubeUVHeight:ee,aoMap:_e,lightMap:Ne,bumpMap:Ie,normalMap:ze,displacementMap:Ze,emissiveMap:et,normalMapObjectSpace:ze&&m.normalMapType===tm,normalMapTangentSpace:ze&&m.normalMapType===lh,packedNormalMap:ze&&m.normalMapType===lh&&Vx(m.normalMap.format),metalnessMap:Ke,roughnessMap:j,anisotropy:Mt,anisotropyMap:O,clearcoat:ot,clearcoatMap:H,clearcoatNormalMap:G,clearcoatRoughnessMap:P,dispersion:ct,retroreflection:L,iridescence:E,iridescenceMap:Y,iridescenceThicknessMap:ve,sheen:q,sheenColorMap:Me,sheenRoughnessMap:ue,specularMap:Te,specularColorMap:Ae,specularIntensityMap:Be,transmission:se,transmissionMap:qe,thicknessMap:W,gradientMap:ce,opaque:m.transparent===!1&&m.blending===Ea&&m.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ce,alphaHash:ye,combine:m.combine,mapUv:at&&v(m.map.channel),aoMapUv:_e&&v(m.aoMap.channel),lightMapUv:Ne&&v(m.lightMap.channel),bumpMapUv:Ie&&v(m.bumpMap.channel),normalMapUv:ze&&v(m.normalMap.channel),displacementMapUv:Ze&&v(m.displacementMap.channel),emissiveMapUv:et&&v(m.emissiveMap.channel),metalnessMapUv:Ke&&v(m.metalnessMap.channel),roughnessMapUv:j&&v(m.roughnessMap.channel),anisotropyMapUv:O&&v(m.anisotropyMap.channel),clearcoatMapUv:H&&v(m.clearcoatMap.channel),clearcoatNormalMapUv:G&&v(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:P&&v(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&v(m.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&v(m.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&v(m.sheenColorMap.channel),sheenRoughnessMapUv:ue&&v(m.sheenRoughnessMap.channel),specularMapUv:Te&&v(m.specularMap.channel),specularColorMapUv:Ae&&v(m.specularColorMap.channel),specularIntensityMapUv:Be&&v(m.specularIntensityMap.channel),transmissionMapUv:qe&&v(m.transmissionMap.channel),thicknessMapUv:W&&v(m.thicknessMap.channel),alphaMapUv:fe&&v(m.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ze||Mt),vertexNormals:!!k.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(at||fe),fog:!!z,useFog:m.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||k.attributes.normal===void 0&&ze===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:We,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:Le,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:N,decodeVideoTexture:at&&m.map.isVideoTexture===!0&&_t.getTransfer(m.map.colorSpace)===wt,decodeVideoTextureEmissive:et&&m.emissiveMap.isVideoTexture===!0&&_t.getTransfer(m.emissiveMap.colorSpace)===wt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Gt,flipSided:m.side===ci,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:T&&m.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(T&&m.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return I.vertexUv1s=o.has(1),I.vertexUv2s=o.has(2),I.vertexUv3s=o.has(3),o.clear(),I}function g(m){let M=[];if(m.shaderID?M.push(m.shaderID):(M.push(m.customVertexShaderID),M.push(m.customFragmentShaderID)),m.defines!==void 0)for(let D in m.defines)M.push(D),M.push(m.defines[D]);return m.isRawShaderMaterial===!1&&(f(M,m),x(M,m),M.push(e.outputColorSpace)),M.push(m.customProgramCacheKey),M.join()}function f(m,M){m.push(M.precision),m.push(M.outputColorSpace),m.push(M.envMapMode),m.push(M.envMapCubeUVHeight),m.push(M.mapUv),m.push(M.alphaMapUv),m.push(M.lightMapUv),m.push(M.aoMapUv),m.push(M.bumpMapUv),m.push(M.normalMapUv),m.push(M.displacementMapUv),m.push(M.emissiveMapUv),m.push(M.metalnessMapUv),m.push(M.roughnessMapUv),m.push(M.anisotropyMapUv),m.push(M.clearcoatMapUv),m.push(M.clearcoatNormalMapUv),m.push(M.clearcoatRoughnessMapUv),m.push(M.iridescenceMapUv),m.push(M.iridescenceThicknessMapUv),m.push(M.sheenColorMapUv),m.push(M.sheenRoughnessMapUv),m.push(M.specularMapUv),m.push(M.specularColorMapUv),m.push(M.specularIntensityMapUv),m.push(M.transmissionMapUv),m.push(M.thicknessMapUv),m.push(M.combine),m.push(M.fogExp2),m.push(M.sizeAttenuation),m.push(M.morphTargetsCount),m.push(M.morphAttributeCount),m.push(M.numSunLights),m.push(M.numDirLights),m.push(M.numPointLights),m.push(M.numSpotLights),m.push(M.numSpotLightMaps),m.push(M.numHemiLights),m.push(M.numRectAreaLights),m.push(M.numSunLightShadows),m.push(M.numDirLightShadows),m.push(M.numPointLightShadows),m.push(M.numSpotLightShadows),m.push(M.numSpotLightShadowsWithMaps),m.push(M.numLightProbes),m.push(M.shadowMapType),m.push(M.toneMapping),m.push(M.numClippingPlanes),m.push(M.numClipIntersection),m.push(M.depthPacking)}function x(m,M){n.disableAll(),M.instancing&&n.enable(0),M.instancingColor&&n.enable(1),M.instancingMorph&&n.enable(2),M.matcap&&n.enable(3),M.envMap&&n.enable(4),M.normalMapObjectSpace&&n.enable(5),M.normalMapTangentSpace&&n.enable(6),M.clearcoat&&n.enable(7),M.iridescence&&n.enable(8),M.alphaTest&&n.enable(9),M.vertexColors&&n.enable(10),M.vertexAlphas&&n.enable(11),M.vertexUv1s&&n.enable(12),M.vertexUv2s&&n.enable(13),M.vertexUv3s&&n.enable(14),M.vertexTangents&&n.enable(15),M.anisotropy&&n.enable(16),M.alphaHash&&n.enable(17),M.batching&&n.enable(18),M.dispersion&&n.enable(19),M.retroreflection&&n.enable(24),M.batchingColor&&n.enable(20),M.gradientMap&&n.enable(21),M.packedNormalMap&&n.enable(22),M.vertexNormals&&n.enable(23),m.push(n.mask),n.disableAll(),M.fog&&n.enable(0),M.useFog&&n.enable(1),M.flatShading&&n.enable(2),M.logarithmicDepthBuffer&&n.enable(3),M.reversedDepthBuffer&&n.enable(4),M.skinning&&n.enable(5),M.morphTargets&&n.enable(6),M.morphNormals&&n.enable(7),M.morphColors&&n.enable(8),M.premultipliedAlpha&&n.enable(9),M.shadowMapEnabled&&n.enable(10),M.doubleSided&&n.enable(11),M.flipSided&&n.enable(12),M.useDepthPacking&&n.enable(13),M.dithering&&n.enable(14),M.transmission&&n.enable(15),M.sheen&&n.enable(16),M.opaque&&n.enable(17),M.pointsUvs&&n.enable(18),M.decodeVideoTexture&&n.enable(19),M.decodeVideoTextureEmissive&&n.enable(20),M.alphaToCoverage&&n.enable(21),M.numLightProbeGrids>0&&n.enable(22),M.hasPositionAttribute&&n.enable(23),m.push(n.mask)}function b(m){let M=p[m.type],D;if(M){let C=Zi[M];D=G0.clone(C.uniforms)}else D=m.uniforms;return D}function y(m,M){let D=u.get(M);return D!==void 0?++D.usedTimes:(D=new zx(e,M,m,r),h.push(D),u.set(M,D)),D}function S(m){if(--m.usedTimes===0){let M=h.indexOf(m);h[M]=h[h.length-1],h.pop(),u.delete(m.cacheKey),m.destroy()}}function A(m){l.remove(m)}function w(){l.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:b,acquireProgram:y,releaseProgram:S,releaseShaderCache:A,programs:h,dispose:w}}function jx(){let e=new WeakMap;function t(n){return e.has(n)}function i(n){let l=e.get(n);return l===void 0&&(l={},e.set(n,l)),l}function s(n){e.delete(n)}function r(n,l,o){e.get(n)[l]=o}function a(){e=new WeakMap}return{has:t,get:i,remove:s,update:r,dispose:a}}function Xx(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Nu(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Uu(){let e=[],t=0,i=[],s=[],r=[];function a(){t=0,i.length=0,s.length=0,r.length=0}function n(c){let p=0;return c.isInstancedMesh&&(p+=2),c.isSkinnedMesh&&(p+=1),p}function l(c,p,v,_,g,f){let x=e[t];return x===void 0?(x={id:c.id,object:c,geometry:p,material:v,materialVariant:n(c),groupOrder:_,renderOrder:c.renderOrder,z:g,group:f},e[t]=x):(x.id=c.id,x.object=c,x.geometry=p,x.material=v,x.materialVariant=n(c),x.groupOrder=_,x.renderOrder=c.renderOrder,x.z=g,x.group=f),t++,x}function o(c,p,v,_,g,f,x){x.reversedDepth===!0&&(g=-g);let b=l(c,p,v,_,g,f);v.transmission>0?s.push(b):v.transparent===!0?r.push(b):i.push(b)}function h(c,p,v,_,g,f){let x=l(c,p,v,_,g,f);v.transmission>0?s.unshift(x):v.transparent===!0?r.unshift(x):i.unshift(x)}function u(c,p){i.length>1&&i.sort(c||Xx),s.length>1&&s.sort(p||Nu),r.length>1&&r.sort(p||Nu)}function d(){for(let c=t,p=e.length;c<p;c++){let v=e[c];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:i,transmissive:s,transparent:r,init:a,push:o,unshift:h,finish:d,sort:u}}function qx(){let e=new WeakMap;function t(s,r){let a=e.get(s),n;return a===void 0?(n=new Uu,e.set(s,[n])):r>=a.length?(n=new Uu,a.push(n)):n=a[r],n}function i(){e=new WeakMap}return{get:t,dispose:i}}function Yx(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new U,color:new Qe};break;case"SpotLight":i={position:new U,direction:new U,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new U,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new U,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":i={color:new Qe,position:new U,halfWidth:new U,halfHeight:new U};break}return e[t.id]=i,i}}}function Zx(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var $x=0;function Jx(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Kx(e){let t=new Yx,i=Zx(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,a=new ft,n=new ft;function l(h){let u=0,d=0,c=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let p=0,v=0,_=0,g=0,f=0,x=0,b=0,y=0,S=0,A=0,w=0,m=0,M=0,D=0;h.sort(Jx);for(let B=0,J=h.length;B<J;B++){let z=h[B],k=z.color,X=z.intensity,Z=z.distance,he=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===rr?he=z.shadow.map.texture:he=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)u+=k.r*X,d+=k.g*X,c+=k.b*X;else if(z.isLightProbe){for(let ee=0;ee<9;ee++)s.probe[ee].addScaledVector(z.sh.coefficients[ee],X);D++}else if(z.isSunLight){let ee=t.get(z);if(ee.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let te=z.shadow,pe=i.get(z);pe.shadowIntensity=te.intensity,pe.shadowBias=te.bias,pe.shadowNormalBias=te.normalBias,pe.shadowRadius=te.radius,pe.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),s.sunShadow[v]=pe,s.sunShadowMap[v]=he;let ke=te.getViewportCount();for(let Le=0;Le<ke;Le++)s.sunShadowMatrix[_+Le]=te.getMatrix(Le),s.sunShadowCascade[_+Le]=te._cascadeData[Le];_+=ke,v++}s.sun[p]=ee,p++}else if(z.isDirectionalLight){let ee=t.get(z);if(ee.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let te=z.shadow,pe=i.get(z);pe.shadowIntensity=te.intensity,pe.shadowBias=te.bias,pe.shadowNormalBias=te.normalBias,pe.shadowRadius=te.radius,pe.shadowMapSize=te.mapSize,s.directionalShadow[g]=pe,s.directionalShadowMap[g]=he,s.directionalShadowMatrix[g]=z.shadow.matrix,S++}s.directional[g]=ee,g++}else if(z.isSpotLight){let ee=t.get(z);ee.position.setFromMatrixPosition(z.matrixWorld),ee.color.copy(k).multiplyScalar(X),ee.distance=Z,ee.coneCos=Math.cos(z.angle),ee.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ee.decay=z.decay,s.spot[x]=ee;let te=z.shadow;if(z.map&&(s.spotLightMap[m]=z.map,m++,te.updateMatrices(z),z.castShadow&&M++),s.spotLightMatrix[x]=te.matrix,z.castShadow){let pe=i.get(z);pe.shadowIntensity=te.intensity,pe.shadowBias=te.bias,pe.shadowNormalBias=te.normalBias,pe.shadowRadius=te.radius,pe.shadowMapSize=te.mapSize,s.spotShadow[x]=pe,s.spotShadowMap[x]=he,w++}x++}else if(z.isRectAreaLight){let ee=t.get(z);ee.color.copy(k).multiplyScalar(X),ee.halfWidth.set(z.width*.5,0,0),ee.halfHeight.set(0,z.height*.5,0),s.rectArea[b]=ee,b++}else if(z.isPointLight){let ee=t.get(z);if(ee.color.copy(z.color).multiplyScalar(z.intensity),ee.distance=z.distance,ee.decay=z.decay,z.castShadow){let te=z.shadow,pe=i.get(z);pe.shadowIntensity=te.intensity,pe.shadowBias=te.bias,pe.shadowNormalBias=te.normalBias,pe.shadowRadius=te.radius,pe.shadowMapSize=te.mapSize,pe.shadowCameraNear=te.camera.near,pe.shadowCameraFar=te.camera.far,s.pointShadow[f]=pe,s.pointShadowMap[f]=he,s.pointShadowMatrix[f]=z.shadow.matrix,A++}s.point[f]=ee,f++}else if(z.isHemisphereLight){let ee=t.get(z);ee.skyColor.copy(z.color).multiplyScalar(X),ee.groundColor.copy(z.groundColor).multiplyScalar(X),s.hemi[y]=ee,y++}}b>0&&(e.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ue.LTC_FLOAT_1,s.rectAreaLTC2=Ue.LTC_FLOAT_2):(s.rectAreaLTC1=Ue.LTC_HALF_1,s.rectAreaLTC2=Ue.LTC_HALF_2)),s.ambient[0]=u,s.ambient[1]=d,s.ambient[2]=c;let C=s.hash;(C.sunLength!==p||C.directionalLength!==g||C.pointLength!==f||C.spotLength!==x||C.rectAreaLength!==b||C.hemiLength!==y||C.numSunShadows!==v||C.numDirectionalShadows!==S||C.numPointShadows!==A||C.numSpotShadows!==w||C.numSpotMaps!==m||C.numLightProbes!==D)&&(s.sun.length=p,s.directional.length=g,s.spot.length=x,s.rectArea.length=b,s.point.length=f,s.hemi.length=y,s.sunShadow.length=v,s.sunShadowMap.length=v,s.sunShadowMatrix.length=_,s.sunShadowCascade.length=_,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.directionalShadowMatrix.length=S,s.pointShadow.length=A,s.pointShadowMap.length=A,s.pointShadowMatrix.length=A,s.spotShadow.length=w,s.spotShadowMap.length=w,s.spotLightMatrix.length=w+m-M,s.spotLightMap.length=m,s.numSpotLightShadowsWithMaps=M,s.numLightProbes=D,C.sunLength=p,C.directionalLength=g,C.pointLength=f,C.spotLength=x,C.rectAreaLength=b,C.hemiLength=y,C.numSunShadows=v,C.numDirectionalShadows=S,C.numPointShadows=A,C.numSpotShadows=w,C.numSpotMaps=m,C.numLightProbes=D,s.version=$x++)}function o(h,u){let d=0,c=0,p=0,v=0,_=0,g=0,f=u.matrixWorldInverse;for(let x=0,b=h.length;x<b;x++){let y=h[x];if(y.isSunLight){let S=s.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(f),d++}else if(y.isDirectionalLight){let S=s.directional[c];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),c++}else if(y.isSpotLight){let S=s.spot[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),v++}else if(y.isRectAreaLight){let S=s.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),n.identity(),a.copy(y.matrixWorld),a.premultiply(f),n.extractRotation(a),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(n),S.halfHeight.applyMatrix4(n),_++}else if(y.isPointLight){let S=s.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){let S=s.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(f),g++}}}return{setup:l,setupView:o,state:s}}function Du(e){let t=new Kx(e),i=[],s=[],r=[];function a(c){d.camera=c,i.length=0,s.length=0,r.length=0}function n(c){i.push(c)}function l(c){s.push(c)}function o(c){r.push(c)}function h(){t.setup(i)}function u(c){t.setupView(i,c)}let d={lightsArray:i,shadowsArray:s,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:h,setupLightsView:u,pushLight:n,pushShadow:l,pushLightProbeGrid:o}}function Qx(e){let t=new WeakMap;function i(r,a=0){let n=t.get(r),l;return n===void 0?(l=new Du(e),t.set(r,[l])):a>=n.length?(l=new Du(e),n.push(l)):l=n[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var e_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t_=`uniform sampler2D shadow_pass;
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
}`,i_=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],s_=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Ou=new ft,_a=new U,Ml=new U;function r_(e,t,i){let s=new Xr,r=new be,a=new be,n=new kt,l=new X0,o=new q0,h={},u=i.maxTextureSize,d={[gs]:ci,[ci]:gs,[Gt]:Gt},c=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:e_,fragmentShader:t_}),p=c.clone();p.defines.HORIZONTAL_PASS=1;let v=new yt;v.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new vt(v,c),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zr;let f=this.type;this.render=function(A,w,m){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===Lf&&(st("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zr);let M=e.getRenderTarget(),D=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),B=e.state;B.setBlending(fs),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let J=f!==this.type;J&&w.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(k=>k.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,k=A.length;z<k;z++){let X=A[z],Z=X.shadow;if(Z===void 0){st("WebGLShadowMap:",X,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);let he=Z.getFrameExtents();r.multiply(he),a.copy(Z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/he.x),r.x=a.x*he.x,Z.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/he.y),r.y=a.y*he.y,Z.mapSize.y=a.y));let ee=e.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=ee,Z.map===null||J===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Sa){if(X.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Vi(r.x,r.y,{format:rr,type:ts,minFilter:Si,magFilter:Si,generateMipmaps:!1}),Z.map.texture.name=X.name+".shadowMap",Z.map.depthTexture=new Ua(r.x,r.y,$i),Z.map.depthTexture.name=X.name+".shadowMapDepth",Z.map.depthTexture.format=vs,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=mi,Z.map.depthTexture.magFilter=mi}else X.isPointLight?(Z.map=new $d(r.x),Z.map.depthTexture=new i0(r.x,es)):(Z.map=new Vi(r.x,r.y),Z.map.depthTexture=new Ua(r.x,r.y,es)),Z.map.depthTexture.name=X.name+".shadowMap",Z.map.depthTexture.format=vs,this.type===zr?(Z.map.depthTexture.compareFunction=ee?Mh:Sh,Z.map.depthTexture.minFilter=Si,Z.map.depthTexture.magFilter=Si):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=mi,Z.map.depthTexture.magFilter=mi);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==r.x||Z.map.height!==r.y)&&Z.map.setSize(r.x,r.y);let te=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();X.isPointLight!==!0&&Z.updateMatrices(X,m);for(let pe=0;pe<te;pe++){let ke=Z.getCamera(pe);if(X.isPointLight){let Le=Z.camera,xt=Z.matrix,rt=X.distance||Le.far;rt!==Le.far&&(Le.far=rt,Le.updateProjectionMatrix()),_a.setFromMatrixPosition(X.matrixWorld),Le.position.copy(_a),Ml.copy(Le.position),Ml.add(i_[pe]),Le.up.copy(s_[pe]),Le.lookAt(Ml),Le.updateMatrixWorld(),xt.makeTranslation(-_a.x,-_a.y,-_a.z),Ou.multiplyMatrices(Le.projectionMatrix,Le.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Ou,Le.coordinateSystem,Le.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)e.setRenderTarget(Z.map,pe),e.clear();else{pe===0&&(e.setRenderTarget(Z.map),e.clear());let Le=Z.getViewport(pe);n.set(a.x*Le.x,a.y*Le.y,a.x*Le.z,a.y*Le.w),B.viewport(n)}s=Z.getFrustum(pe),y(w,m,ke,X,this.type)}Z.isPointLightShadow!==!0&&this.type===Sa&&x(Z,m),Z.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(M,D,C)};function x(A,w){let m=t.update(_);c.defines.VSM_SAMPLES!==A.blurSamples&&(c.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,c.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null?A.mapPass=new Vi(r.x,r.y,{format:rr,type:ts}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),c.uniforms.shadow_pass.value=A.map.depthTexture,c.uniforms.resolution.value.set(A.map.width,A.map.height),c.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(w,null,m,c,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(w,null,m,p,_,null)}function b(A,w,m,M){let D=null,C=m.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)D=C;else if(D=m.isPointLight===!0?o:l,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let B=D.uuid,J=w.uuid,z=h[B];z===void 0&&(z={},h[B]=z);let k=z[J];k===void 0&&(k=D.clone(),z[J]=k,w.addEventListener("dispose",S)),D=k}if(D.visible=w.visible,D.wireframe=w.wireframe,M===Sa?D.side=w.shadowSide!==null?w.shadowSide:w.side:D.side=w.shadowSide!==null?w.shadowSide:d[w.side],D.alphaMap=w.alphaMap,D.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,D.map=w.map,D.clipShadows=w.clipShadows,D.clippingPlanes=w.clippingPlanes,D.clipIntersection=w.clipIntersection,D.displacementMap=w.displacementMap,D.displacementScale=w.displacementScale,D.displacementBias=w.displacementBias,D.wireframeLinewidth=w.wireframeLinewidth,D.linewidth=w.linewidth,m.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let B=e.properties.get(D);B.light=m}return D}function y(A,w,m,M,D){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===Sa)&&(!A.frustumCulled||A.intersectsFrustum(s))){A.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,A.matrixWorld);let B=t.update(A),J=A.material;if(Array.isArray(J)){let z=B.groups;for(let k=0,X=z.length;k<X;k++){let Z=z[k],he=J[Z.materialIndex];if(he&&he.visible){let ee=b(A,he,M,D);A.onBeforeShadow(e,A,w,m,B,ee,Z),e.renderBufferDirect(m,null,B,ee,A,Z),A.onAfterShadow(e,A,w,m,B,ee,Z)}}}else if(J.visible){let z=b(A,J,M,D);A.onBeforeShadow(e,A,w,m,B,z,null),e.renderBufferDirect(m,null,B,z,A,null),A.onAfterShadow(e,A,w,m,B,z,null)}}let C=A.children;for(let B=0,J=C.length;B<J;B++)y(C[B],w,m,M,D)}function S(A){A.target.removeEventListener("dispose",S);for(let w in h){let m=h[w],M=A.target.uuid;M in m&&(m[M].dispose(),delete m[M])}}}function a_(e,t){function i(){let W=!1,ce=new kt,fe=null,Ce=new kt(0,0,0,0);return{setMask:function(ye){fe!==ye&&!W&&(e.colorMask(ye,ye,ye,ye),fe=ye)},setLocked:function(ye){W=ye},setClear:function(ye,T,N,I,re){re===!0&&(ye*=I,T*=I,N*=I),ce.set(ye,T,N,I),Ce.equals(ce)===!1&&(e.clearColor(ye,T,N,I),Ce.copy(ce))},reset:function(){W=!1,fe=null,Ce.set(-1,0,0,0)}}}function s(){let W=!1,ce=!1,fe=null,Ce=null,ye=null;return{setReversed:function(T){if(ce!==T){let N=t.get("EXT_clip_control");T?N.clipControlEXT(N.LOWER_LEFT_EXT,N.ZERO_TO_ONE_EXT):N.clipControlEXT(N.LOWER_LEFT_EXT,N.NEGATIVE_ONE_TO_ONE_EXT),ce=T;let I=ye;ye=null,this.setClear(I)}},getReversed:function(){return ce},setTest:function(T){T?xe(e.DEPTH_TEST):We(e.DEPTH_TEST)},setMask:function(T){fe!==T&&!W&&(e.depthMask(T),fe=T)},setFunc:function(T){if(ce&&(T=pm[T]),Ce!==T){switch(T){case bl:e.depthFunc(e.NEVER);break;case El:e.depthFunc(e.ALWAYS);break;case Tl:e.depthFunc(e.LESS);break;case Ra:e.depthFunc(e.LEQUAL);break;case wl:e.depthFunc(e.EQUAL);break;case Al:e.depthFunc(e.GEQUAL);break;case Rl:e.depthFunc(e.GREATER);break;case Cl:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Ce=T}},setLocked:function(T){W=T},setClear:function(T){ye!==T&&(ye=T,ce&&(T=1-T),e.clearDepth(T))},reset:function(){W=!1,fe=null,Ce=null,ye=null,ce=!1}}}function r(){let W=!1,ce=null,fe=null,Ce=null,ye=null,T=null,N=null,I=null,re=null;return{setTest:function(ne){W||(ne?xe(e.STENCIL_TEST):We(e.STENCIL_TEST))},setMask:function(ne){ce!==ne&&!W&&(e.stencilMask(ne),ce=ne)},setFunc:function(ne,Se,je){(fe!==ne||Ce!==Se||ye!==je)&&(e.stencilFunc(ne,Se,je),fe=ne,Ce=Se,ye=je)},setOp:function(ne,Se,je){(T!==ne||N!==Se||I!==je)&&(e.stencilOp(ne,Se,je),T=ne,N=Se,I=je)},setLocked:function(ne){W=ne},setClear:function(ne){re!==ne&&(e.clearStencil(ne),re=ne)},reset:function(){W=!1,ce=null,fe=null,Ce=null,ye=null,T=null,N=null,I=null,re=null}}}let a=new i,n=new s,l=new r,o=new WeakMap,h=new WeakMap,u={},d={},c={},p=new WeakMap,v=[],_=null,g=!1,f=null,x=null,b=null,y=null,S=null,A=null,w=null,m=new Qe(0,0,0),M=0,D=!1,C=null,B=null,J=null,z=null,k=null,X=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,he=0,ee=e.getParameter(e.VERSION);ee.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Z=he>=1):ee.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Z=he>=2);let te=null,pe={},ke=e.getParameter(e.SCISSOR_BOX),Le=e.getParameter(e.VIEWPORT),xt=new kt().fromArray(ke),rt=new kt().fromArray(Le);function le(W,ce,fe,Ce){let ye=new Uint8Array(4),T=e.createTexture();e.bindTexture(W,T),e.texParameteri(W,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(W,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let N=0;N<fe;N++)W===e.TEXTURE_3D||W===e.TEXTURE_2D_ARRAY?e.texImage3D(ce,0,e.RGBA,1,1,Ce,0,e.RGBA,e.UNSIGNED_BYTE,ye):e.texImage2D(ce+N,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ye);return T}let ge={};ge[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ge[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ge[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),n.setClear(1),l.setClear(0),xe(e.DEPTH_TEST),n.setFunc(Ra),Ie(!1),ze(Sc),xe(e.CULL_FACE),_e(fs);function xe(W){u[W]!==!0&&(e.enable(W),u[W]=!0)}function We(W){u[W]!==!1&&(e.disable(W),u[W]=!1)}function Fe(W,ce){return c[W]!==ce?(e.bindFramebuffer(W,ce),c[W]=ce,W===e.DRAW_FRAMEBUFFER&&(c[e.FRAMEBUFFER]=ce),W===e.FRAMEBUFFER&&(c[e.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ee(W,ce){let fe=v,Ce=!1;if(W){fe=p.get(ce),fe===void 0&&(fe=[],p.set(ce,fe));let ye=W.textures;if(fe.length!==ye.length||fe[0]!==e.COLOR_ATTACHMENT0){for(let T=0,N=ye.length;T<N;T++)fe[T]=e.COLOR_ATTACHMENT0+T;fe.length=ye.length,Ce=!0}}else fe[0]!==e.BACK&&(fe[0]=e.BACK,Ce=!0);Ce&&e.drawBuffers(fe)}function at(W){return _!==W?(e.useProgram(W),_=W,!0):!1}let me={[Dr]:e.FUNC_ADD,[Uf]:e.FUNC_SUBTRACT,[Df]:e.FUNC_REVERSE_SUBTRACT};me[Of]=e.MIN,me[Bf]=e.MAX;let de={[Ff]:e.ZERO,[zf]:e.ONE,[kf]:e.SRC_COLOR,[Bu]:e.SRC_ALPHA,[Xf]:e.SRC_ALPHA_SATURATE,[Wf]:e.DST_COLOR,[Gf]:e.DST_ALPHA,[Hf]:e.ONE_MINUS_SRC_COLOR,[Fu]:e.ONE_MINUS_SRC_ALPHA,[jf]:e.ONE_MINUS_DST_COLOR,[Vf]:e.ONE_MINUS_DST_ALPHA,[qf]:e.CONSTANT_COLOR,[Yf]:e.ONE_MINUS_CONSTANT_COLOR,[Zf]:e.CONSTANT_ALPHA,[$f]:e.ONE_MINUS_CONSTANT_ALPHA};function _e(W,ce,fe,Ce,ye,T,N,I,re,ne){if(W===fs){g===!0&&(We(e.BLEND),g=!1);return}if(g===!1&&(xe(e.BLEND),g=!0),W!==Nf){if(W!==f||ne!==D){if((x!==Dr||S!==Dr)&&(e.blendEquation(e.FUNC_ADD),x=Dr,S=Dr),ne)switch(W){case Ea:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Bt:e.blendFunc(e.ONE,e.ONE);break;case Mc:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case bc:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:it("WebGLState: Invalid blending: ",W);break}else switch(W){case Ea:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Bt:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Mc:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bc:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",W);break}b=null,y=null,A=null,w=null,m.set(0,0,0),M=0,f=W,D=ne}return}ye=ye||ce,T=T||fe,N=N||Ce,(ce!==x||ye!==S)&&(e.blendEquationSeparate(me[ce],me[ye]),x=ce,S=ye),(fe!==b||Ce!==y||T!==A||N!==w)&&(e.blendFuncSeparate(de[fe],de[Ce],de[T],de[N]),b=fe,y=Ce,A=T,w=N),(I.equals(m)===!1||re!==M)&&(e.blendColor(I.r,I.g,I.b,re),m.copy(I),M=re),f=W,D=!1}function Ne(W,ce){W.side===Gt?We(e.CULL_FACE):xe(e.CULL_FACE);let fe=W.side===ci;ce&&(fe=!fe),Ie(fe),W.blending===Ea&&W.transparent===!1?_e(fs):_e(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),n.setFunc(W.depthFunc),n.setTest(W.depthTest),n.setMask(W.depthWrite),a.setMask(W.colorWrite);let Ce=W.stencilWrite;l.setTest(Ce),Ce&&(l.setMask(W.stencilWriteMask),l.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),l.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),et(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?xe(e.SAMPLE_ALPHA_TO_COVERAGE):We(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(W){C!==W&&(W?e.frontFace(e.CW):e.frontFace(e.CCW),C=W)}function ze(W){W!==Pf?(xe(e.CULL_FACE),W!==B&&(W===Sc?e.cullFace(e.BACK):W===If?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):We(e.CULL_FACE),B=W}function Ze(W){W!==J&&(Z&&e.lineWidth(W),J=W)}function et(W,ce,fe){W?(xe(e.POLYGON_OFFSET_FILL),(z!==ce||k!==fe)&&(z=ce,k=fe,n.getReversed()&&(ce=-ce),e.polygonOffset(ce,fe))):We(e.POLYGON_OFFSET_FILL)}function Ke(W){W?xe(e.SCISSOR_TEST):We(e.SCISSOR_TEST)}function j(W){W===void 0&&(W=e.TEXTURE0+X-1),te!==W&&(e.activeTexture(W),te=W)}function Mt(W,ce,fe){fe===void 0&&(te===null?fe=e.TEXTURE0+X-1:fe=te);let Ce=pe[fe];Ce===void 0&&(Ce={type:void 0,texture:void 0},pe[fe]=Ce),(Ce.type!==W||Ce.texture!==ce)&&(te!==fe&&(e.activeTexture(fe),te=fe),e.bindTexture(W,ce||ge[W]),Ce.type=W,Ce.texture=ce)}function ot(){let W=pe[te];W!==void 0&&W.type!==void 0&&(e.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ct(){try{e.compressedTexImage2D(...arguments)}catch(W){it("WebGLState:",W)}}function L(){try{e.compressedTexImage3D(...arguments)}catch(W){it("WebGLState:",W)}}function E(){try{e.texSubImage2D(...arguments)}catch(W){it("WebGLState:",W)}}function q(){try{e.texSubImage3D(...arguments)}catch(W){it("WebGLState:",W)}}function se(){try{e.compressedTexSubImage2D(...arguments)}catch(W){it("WebGLState:",W)}}function O(){try{e.compressedTexSubImage3D(...arguments)}catch(W){it("WebGLState:",W)}}function H(){try{e.texStorage2D(...arguments)}catch(W){it("WebGLState:",W)}}function G(){try{e.texStorage3D(...arguments)}catch(W){it("WebGLState:",W)}}function P(){try{e.texImage2D(...arguments)}catch(W){it("WebGLState:",W)}}function Y(){try{e.texImage3D(...arguments)}catch(W){it("WebGLState:",W)}}function ve(W){return d[W]!==void 0?d[W]:e.getParameter(W)}function Me(W,ce){d[W]!==ce&&(e.pixelStorei(W,ce),d[W]=ce)}function ue(W){xt.equals(W)===!1&&(e.scissor(W.x,W.y,W.z,W.w),xt.copy(W))}function Te(W){rt.equals(W)===!1&&(e.viewport(W.x,W.y,W.z,W.w),rt.copy(W))}function Ae(W,ce){let fe=h.get(ce);fe===void 0&&(fe=new WeakMap,h.set(ce,fe));let Ce=fe.get(W);Ce===void 0&&(Ce=e.getUniformBlockIndex(ce,W.name),fe.set(W,Ce))}function Be(W,ce){let fe=h.get(ce).get(W);o.get(ce)!==fe&&(e.uniformBlockBinding(ce,fe,W.__bindingPointIndex),o.set(ce,fe))}function qe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),n.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},te=null,pe={},c={},p=new WeakMap,v=[],_=null,g=!1,f=null,x=null,b=null,y=null,S=null,A=null,w=null,m=new Qe(0,0,0),M=0,D=!1,C=null,B=null,J=null,z=null,k=null,xt.set(0,0,e.canvas.width,e.canvas.height),rt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),n.reset(),l.reset()}return{buffers:{color:a,depth:n,stencil:l},enable:xe,disable:We,bindFramebuffer:Fe,drawBuffers:Ee,useProgram:at,setBlending:_e,setMaterial:Ne,setFlipSided:Ie,setCullFace:ze,setLineWidth:Ze,setPolygonOffset:et,setScissorTest:Ke,activeTexture:j,bindTexture:Mt,unbindTexture:ot,compressedTexImage2D:ct,compressedTexImage3D:L,texImage2D:P,texImage3D:Y,pixelStorei:Me,getParameter:ve,updateUBOMapping:Ae,uniformBlockBinding:Be,texStorage2D:H,texStorage3D:G,texSubImage2D:E,texSubImage3D:q,compressedTexSubImage2D:se,compressedTexSubImage3D:O,scissor:ue,viewport:Te,reset:qe}}function n_(e,t,i,s,r,a,n){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new be,u=new WeakMap,d=new Set,c,p=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,E){return v?new OffscreenCanvas(L,E):La("canvas")}function g(L,E,q){let se=1,O=ct(L);if((O.width>q||O.height>q)&&(se=q/Math.max(O.width,O.height)),se<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let H=Math.floor(se*O.width),G=Math.floor(se*O.height);c===void 0&&(c=_(H,G));let P=E?_(H,G):c;return P.width=H,P.height=G,P.getContext("2d").drawImage(L,0,0,H,G),st("WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+H+"x"+G+")."),P}else return"data"in L&&st("WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),L;return L}function f(L){return L.generateMipmaps}function x(L){e.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?e.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(L,E,q,se,O,H=!1){if(L!==null){if(e[L]!==void 0)return e[L];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let G;se&&(G=t.get("EXT_texture_norm16"),G||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let P=E;if(E===e.RED&&(q===e.FLOAT&&(P=e.R32F),q===e.HALF_FLOAT&&(P=e.R16F),q===e.UNSIGNED_BYTE&&(P=e.R8),q===e.UNSIGNED_SHORT&&G&&(P=G.R16_EXT),q===e.SHORT&&G&&(P=G.R16_SNORM_EXT)),E===e.RED_INTEGER&&(q===e.UNSIGNED_BYTE&&(P=e.R8UI),q===e.UNSIGNED_SHORT&&(P=e.R16UI),q===e.UNSIGNED_INT&&(P=e.R32UI),q===e.BYTE&&(P=e.R8I),q===e.SHORT&&(P=e.R16I),q===e.INT&&(P=e.R32I)),E===e.RG&&(q===e.FLOAT&&(P=e.RG32F),q===e.HALF_FLOAT&&(P=e.RG16F),q===e.UNSIGNED_BYTE&&(P=e.RG8),q===e.UNSIGNED_SHORT&&G&&(P=G.RG16_EXT),q===e.SHORT&&G&&(P=G.RG16_SNORM_EXT)),E===e.RG_INTEGER&&(q===e.UNSIGNED_BYTE&&(P=e.RG8UI),q===e.UNSIGNED_SHORT&&(P=e.RG16UI),q===e.UNSIGNED_INT&&(P=e.RG32UI),q===e.BYTE&&(P=e.RG8I),q===e.SHORT&&(P=e.RG16I),q===e.INT&&(P=e.RG32I)),E===e.RGB_INTEGER&&(q===e.UNSIGNED_BYTE&&(P=e.RGB8UI),q===e.UNSIGNED_SHORT&&(P=e.RGB16UI),q===e.UNSIGNED_INT&&(P=e.RGB32UI),q===e.BYTE&&(P=e.RGB8I),q===e.SHORT&&(P=e.RGB16I),q===e.INT&&(P=e.RGB32I)),E===e.RGBA_INTEGER&&(q===e.UNSIGNED_BYTE&&(P=e.RGBA8UI),q===e.UNSIGNED_SHORT&&(P=e.RGBA16UI),q===e.UNSIGNED_INT&&(P=e.RGBA32UI),q===e.BYTE&&(P=e.RGBA8I),q===e.SHORT&&(P=e.RGBA16I),q===e.INT&&(P=e.RGBA32I)),E===e.RGB&&(q===e.UNSIGNED_SHORT&&G&&(P=G.RGB16_EXT),q===e.SHORT&&G&&(P=G.RGB16_SNORM_EXT),q===e.UNSIGNED_INT_5_9_9_9_REV&&(P=e.RGB9_E5),q===e.UNSIGNED_INT_10F_11F_11F_REV&&(P=e.R11F_G11F_B10F)),E===e.RGBA){let Y=H?qn:_t.getTransfer(O);q===e.FLOAT&&(P=e.RGBA32F),q===e.HALF_FLOAT&&(P=e.RGBA16F),q===e.UNSIGNED_BYTE&&(P=Y===wt?e.SRGB8_ALPHA8:e.RGBA8),q===e.UNSIGNED_SHORT&&G&&(P=G.RGBA16_EXT),q===e.SHORT&&G&&(P=G.RGBA16_SNORM_EXT),q===e.UNSIGNED_SHORT_4_4_4_4&&(P=e.RGBA4),q===e.UNSIGNED_SHORT_5_5_5_1&&(P=e.RGB5_A1)}return(P===e.R16F||P===e.R32F||P===e.RG16F||P===e.RG32F||P===e.RGBA16F||P===e.RGBA32F)&&t.get("EXT_color_buffer_float"),P}function S(L,E){let q;return L?E===null||E===es||E===Pa?q=e.DEPTH24_STENCIL8:E===$i?q=e.DEPTH32F_STENCIL8:E===Ca&&(q=e.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===es||E===Pa?q=e.DEPTH_COMPONENT24:E===$i?q=e.DEPTH_COMPONENT32F:E===Ca&&(q=e.DEPTH_COMPONENT16),q}function A(L,E){return f(L)===!0||L.isFramebufferTexture&&L.minFilter!==mi&&L.minFilter!==Si?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function w(L){let E=L.target;E.removeEventListener("dispose",w),M(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&d.delete(E)}function m(L){let E=L.target;E.removeEventListener("dispose",m),C(E)}function M(L){let E=s.get(L);if(E.__webglInit===void 0)return;let q=L.source,se=p.get(q);if(se){let O=se[E.__cacheKey];O.usedTimes--,O.usedTimes===0&&D(L),Object.keys(se).length===0&&p.delete(q)}s.remove(L)}function D(L){let E=s.get(L);e.deleteTexture(E.__webglTexture);let q=L.source,se=p.get(q);delete se[E.__cacheKey],n.memory.textures--}function C(L){let E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let O=0;O<E.__webglFramebuffer[se].length;O++)e.deleteFramebuffer(E.__webglFramebuffer[se][O]);else e.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&e.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)e.deleteFramebuffer(E.__webglFramebuffer[se]);else e.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&e.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&e.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&e.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&e.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let q=L.textures;for(let se=0,O=q.length;se<O;se++){let H=s.get(q[se]);H.__webglTexture&&(e.deleteTexture(H.__webglTexture),n.memory.textures--),s.remove(q[se])}s.remove(L)}let B=0;function J(){B=0}function z(){return B}function k(L){B=L}function X(){let L=B;return L>=r.maxTextures&&st("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+r.maxTextures),B+=1,L}function Z(L){let E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function he(L,E){let q=s.get(L);if(L.isVideoTexture&&Mt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){let se=L.image;if(se===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{We(q,L,E);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,q.__webglTexture,e.TEXTURE0+E)}function ee(L,E){let q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){We(q,L,E);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,q.__webglTexture,e.TEXTURE0+E)}function te(L,E){let q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){We(q,L,E);return}i.bindTexture(e.TEXTURE_3D,q.__webglTexture,e.TEXTURE0+E)}function pe(L,E){let q=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&q.__version!==L.version){Fe(q,L,E);return}i.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture,e.TEXTURE0+E)}let ke={[Ri]:e.REPEAT,[ps]:e.CLAMP_TO_EDGE,[Pl]:e.MIRRORED_REPEAT},Le={[mi]:e.NEAREST,[Qf]:e.NEAREST_MIPMAP_NEAREST,[rn]:e.NEAREST_MIPMAP_LINEAR,[Si]:e.LINEAR,[ko]:e.LINEAR_MIPMAP_NEAREST,[er]:e.LINEAR_MIPMAP_LINEAR},xt={[sm]:e.NEVER,[lm]:e.ALWAYS,[rm]:e.LESS,[Sh]:e.LEQUAL,[am]:e.EQUAL,[Mh]:e.GEQUAL,[nm]:e.GREATER,[om]:e.NOTEQUAL};function rt(L,E){if(E.type===$i&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Si||E.magFilter===ko||E.magFilter===rn||E.magFilter===er||E.minFilter===Si||E.minFilter===ko||E.minFilter===rn||E.minFilter===er)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(L,e.TEXTURE_WRAP_S,ke[E.wrapS]),e.texParameteri(L,e.TEXTURE_WRAP_T,ke[E.wrapT]),(L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY)&&e.texParameteri(L,e.TEXTURE_WRAP_R,ke[E.wrapR]),e.texParameteri(L,e.TEXTURE_MAG_FILTER,Le[E.magFilter]),e.texParameteri(L,e.TEXTURE_MIN_FILTER,Le[E.minFilter]),E.compareFunction&&(e.texParameteri(L,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(L,e.TEXTURE_COMPARE_FUNC,xt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===mi||E.minFilter!==rn&&E.minFilter!==er||E.type===$i&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");e.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function le(L,E){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",w));let se=E.source,O=p.get(se);O===void 0&&(O={},p.set(se,O));let H=Z(E);if(H!==L.__cacheKey){O[H]===void 0&&(O[H]={texture:e.createTexture(),usedTimes:0},n.memory.textures++,q=!0),O[H].usedTimes++;let G=O[L.__cacheKey];G!==void 0&&(O[L.__cacheKey].usedTimes--,G.usedTimes===0&&D(E)),L.__cacheKey=H,L.__webglTexture=O[H].texture}return q}function ge(L,E,q){return Math.floor(Math.floor(L/q)/E)}function xe(L,E,q,se){let O=L.updateRanges;if(O.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,E.width,E.height,q,se,E.data);else{O.sort((ve,Me)=>ve.start-Me.start);let H=0;for(let ve=1;ve<O.length;ve++){let Me=O[H],ue=O[ve],Te=Me.start+Me.count,Ae=ge(ue.start,E.width,4),Be=ge(Me.start,E.width,4);ue.start<=Te+1&&Ae===Be&&ge(ue.start+ue.count-1,E.width,4)===Ae?Me.count=Math.max(Me.count,ue.start+ue.count-Me.start):(++H,O[H]=ue)}O.length=H+1;let G=i.getParameter(e.UNPACK_ROW_LENGTH),P=i.getParameter(e.UNPACK_SKIP_PIXELS),Y=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,E.width);for(let ve=0,Me=O.length;ve<Me;ve++){let ue=O[ve],Te=Math.floor(ue.start/4),Ae=Math.ceil(ue.count/4),Be=Te%E.width,qe=Math.floor(Te/E.width),W=Ae;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(e.UNPACK_SKIP_ROWS,qe),i.texSubImage2D(e.TEXTURE_2D,0,Be,qe,W,1,q,se,E.data)}L.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,G),i.pixelStorei(e.UNPACK_SKIP_PIXELS,P),i.pixelStorei(e.UNPACK_SKIP_ROWS,Y)}}function We(L,E,q){let se=e.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=e.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=e.TEXTURE_3D);let O=le(L,E),H=E.source;i.bindTexture(se,L.__webglTexture,e.TEXTURE0+q);let G=s.get(H);if(H.version!==G.__version||O===!0){if(i.activeTexture(e.TEXTURE0+q),!(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)){let ce=_t.getPrimaries(_t.workingColorSpace),fe=E.colorSpace===Ds?null:_t.getPrimaries(E.colorSpace),Ce=E.colorSpace===Ds||ce===fe?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}i.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment);let P=g(E.image,!1,r.maxTextureSize);P=ot(E,P);let Y=a.convert(E.format,E.colorSpace),ve=a.convert(E.type),Me=y(E.internalFormat,Y,ve,E.normalized,E.colorSpace,E.isVideoTexture);rt(se,E);let ue,Te=E.mipmaps,Ae=E.isVideoTexture!==!0,Be=G.__version===void 0||O===!0,qe=H.dataReady,W=A(E,P);if(E.isDepthTexture)Me=S(E.format===tr,E.type),Be&&(Ae?i.texStorage2D(e.TEXTURE_2D,1,Me,P.width,P.height):i.texImage2D(e.TEXTURE_2D,0,Me,P.width,P.height,0,Y,ve,null));else if(E.isDataTexture)if(Te.length>0){Ae&&Be&&i.texStorage2D(e.TEXTURE_2D,W,Me,Te[0].width,Te[0].height);for(let ce=0,fe=Te.length;ce<fe;ce++)ue=Te[ce],Ae?qe&&i.texSubImage2D(e.TEXTURE_2D,ce,0,0,ue.width,ue.height,Y,ve,ue.data):i.texImage2D(e.TEXTURE_2D,ce,Me,ue.width,ue.height,0,Y,ve,ue.data);E.generateMipmaps=!1}else Ae?(Be&&i.texStorage2D(e.TEXTURE_2D,W,Me,P.width,P.height),qe&&xe(E,P,Y,ve)):i.texImage2D(e.TEXTURE_2D,0,Me,P.width,P.height,0,Y,ve,P.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ae&&Be&&i.texStorage3D(e.TEXTURE_2D_ARRAY,W,Me,Te[0].width,Te[0].height,P.depth);for(let ce=0,fe=Te.length;ce<fe;ce++)if(ue=Te[ce],E.format!==Hi)if(Y!==null)if(Ae){if(qe)if(E.layerUpdates.size>0){let Ce=fu(ue.width,ue.height,E.format,E.type);for(let ye of E.layerUpdates){let T=ue.data.subarray(ye*Ce/ue.data.BYTES_PER_ELEMENT,(ye+1)*Ce/ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ce,0,0,ye,ue.width,ue.height,1,Y,T)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ce,0,0,0,ue.width,ue.height,P.depth,Y,ue.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ce,Me,ue.width,ue.height,P.depth,0,ue.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?qe&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,ce,0,0,0,ue.width,ue.height,P.depth,Y,ve,ue.data):i.texImage3D(e.TEXTURE_2D_ARRAY,ce,Me,ue.width,ue.height,P.depth,0,Y,ve,ue.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ae&&Be&&i.texStorage2D(e.TEXTURE_2D,W,Me,Te[0].width,Te[0].height);for(let ce=0,fe=Te.length;ce<fe;ce++)ue=Te[ce],E.format!==Hi?Y!==null?Ae?qe&&i.compressedTexSubImage2D(e.TEXTURE_2D,ce,0,0,ue.width,ue.height,Y,ue.data):i.compressedTexImage2D(e.TEXTURE_2D,ce,Me,ue.width,ue.height,0,ue.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?qe&&i.texSubImage2D(e.TEXTURE_2D,ce,0,0,ue.width,ue.height,Y,ve,ue.data):i.texImage2D(e.TEXTURE_2D,ce,Me,ue.width,ue.height,0,Y,ve,ue.data)}else if(E.isDataArrayTexture)if(Ae){if(Be&&i.texStorage3D(e.TEXTURE_2D_ARRAY,W,Me,P.width,P.height,P.depth),qe)if(E.layerUpdates.size>0){let ce=fu(P.width,P.height,E.format,E.type);for(let fe of E.layerUpdates){let Ce=P.data.subarray(fe*ce/P.data.BYTES_PER_ELEMENT,(fe+1)*ce/P.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,fe,P.width,P.height,1,Y,ve,Ce)}E.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,P.width,P.height,P.depth,Y,ve,P.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Me,P.width,P.height,P.depth,0,Y,ve,P.data);else if(E.isData3DTexture)Ae?(Be&&i.texStorage3D(e.TEXTURE_3D,W,Me,P.width,P.height,P.depth),qe&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,P.width,P.height,P.depth,Y,ve,P.data)):i.texImage3D(e.TEXTURE_3D,0,Me,P.width,P.height,P.depth,0,Y,ve,P.data);else if(E.isFramebufferTexture){if(Be)if(Ae)i.texStorage2D(e.TEXTURE_2D,W,Me,P.width,P.height);else{let ce=P.width,fe=P.height;for(let Ce=0;Ce<W;Ce++)i.texImage2D(e.TEXTURE_2D,Ce,Me,ce,fe,0,Y,ve,null),ce>>=1,fe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in e){let ce=e.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),P.parentNode!==ce){ce.appendChild(P),d.add(E),ce.onpaint=fe=>{let Ce=fe.changedElements;for(let ye of d)Ce.includes(ye.image)&&(ye.needsUpdate=!0)},ce.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,P);else{let fe=e.RGBA,Ce=e.RGBA,ye=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,fe,Ce,ye,P)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Ae&&Be){let ce=ct(Te[0]);i.texStorage2D(e.TEXTURE_2D,W,Me,ce.width,ce.height)}for(let ce=0,fe=Te.length;ce<fe;ce++)ue=Te[ce],Ae?qe&&i.texSubImage2D(e.TEXTURE_2D,ce,0,0,Y,ve,ue):i.texImage2D(e.TEXTURE_2D,ce,Me,Y,ve,ue);E.generateMipmaps=!1}else if(Ae){if(Be){let ce=ct(P);i.texStorage2D(e.TEXTURE_2D,W,Me,ce.width,ce.height)}qe&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,Y,ve,P)}else i.texImage2D(e.TEXTURE_2D,0,Me,Y,ve,P);f(E)&&x(se),G.__version=H.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Fe(L,E,q){if(E.image.length!==6)return;let se=le(L,E),O=E.source;i.bindTexture(e.TEXTURE_CUBE_MAP,L.__webglTexture,e.TEXTURE0+q);let H=s.get(O);if(O.version!==H.__version||se===!0){i.activeTexture(e.TEXTURE0+q);let G=_t.getPrimaries(_t.workingColorSpace),P=E.colorSpace===Ds?null:_t.getPrimaries(E.colorSpace),Y=E.colorSpace===Ds||G===P?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let ve=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,ue=[];for(let T=0;T<6;T++)!ve&&!Me?ue[T]=g(E.image[T],!0,r.maxCubemapSize):ue[T]=Me?E.image[T].image:E.image[T],ue[T]=ot(E,ue[T]);let Te=ue[0],Ae=a.convert(E.format,E.colorSpace),Be=a.convert(E.type),qe=y(E.internalFormat,Ae,Be,E.normalized,E.colorSpace),W=E.isVideoTexture!==!0,ce=H.__version===void 0||se===!0,fe=O.dataReady,Ce=A(E,Te);rt(e.TEXTURE_CUBE_MAP,E);let ye;if(ve){W&&ce&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Ce,qe,Te.width,Te.height);for(let T=0;T<6;T++){ye=ue[T].mipmaps;for(let N=0;N<ye.length;N++){let I=ye[N];E.format!==Hi?Ae!==null?W?fe&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+T,N,0,0,I.width,I.height,Ae,I.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+T,N,qe,I.width,I.height,0,I.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?fe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+T,N,0,0,I.width,I.height,Ae,Be,I.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+T,N,qe,I.width,I.height,0,Ae,Be,I.data)}}}else{if(ye=E.mipmaps,W&&ce){ye.length>0&&Ce++;let T=ct(ue[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Ce,qe,T.width,T.height)}for(let T=0;T<6;T++)if(Me){W?fe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,ue[T].width,ue[T].height,Ae,Be,ue[T].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,qe,ue[T].width,ue[T].height,0,Ae,Be,ue[T].data);for(let N=0;N<ye.length;N++){let I=ye[N].image[T].image;W?fe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+T,N+1,0,0,I.width,I.height,Ae,Be,I.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+T,N+1,qe,I.width,I.height,0,Ae,Be,I.data)}}else{W?fe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,Ae,Be,ue[T]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,qe,Ae,Be,ue[T]);for(let N=0;N<ye.length;N++){let I=ye[N];W?fe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+T,N+1,0,0,Ae,Be,I.image[T]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+T,N+1,qe,Ae,Be,I.image[T])}}}f(E)&&x(e.TEXTURE_CUBE_MAP),H.__version=O.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ee(L,E,q,se,O,H){let G=a.convert(q.format,q.colorSpace),P=a.convert(q.type),Y=y(q.internalFormat,G,P,q.normalized,q.colorSpace),ve=s.get(E),Me=s.get(q);if(Me.__renderTarget=E,!ve.__hasExternalTextures){let ue=Math.max(1,E.width>>H),Te=Math.max(1,E.height>>H);O===e.TEXTURE_3D||O===e.TEXTURE_2D_ARRAY?i.texImage3D(O,H,Y,ue,Te,E.depth,0,G,P,null):i.texImage2D(O,H,Y,ue,Te,0,G,P,null)}i.bindFramebuffer(e.FRAMEBUFFER,L),j(E)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,se,O,Me.__webglTexture,0,Ke(E)):(O===e.TEXTURE_2D||O>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,se,O,Me.__webglTexture,H),i.bindFramebuffer(e.FRAMEBUFFER,null)}function at(L,E,q){if(e.bindRenderbuffer(e.RENDERBUFFER,L),E.depthBuffer){let se=E.depthTexture,O=se&&se.isDepthTexture?se.type:null,H=S(E.stencilBuffer,O),G=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;j(E)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ke(E),H,E.width,E.height):q?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ke(E),H,E.width,E.height):e.renderbufferStorage(e.RENDERBUFFER,H,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,G,e.RENDERBUFFER,L)}else{let se=E.textures;for(let O=0;O<se.length;O++){let H=se[O],G=a.convert(H.format,H.colorSpace),P=a.convert(H.type),Y=y(H.internalFormat,G,P,H.normalized,H.colorSpace);j(E)?l.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ke(E),Y,E.width,E.height):q?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ke(E),Y,E.width,E.height):e.renderbufferStorage(e.RENDERBUFFER,Y,E.width,E.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function me(L,E,q){let se=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let O=s.get(E.depthTexture);if(O.__renderTarget=E,(!O.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),se){if(O.__webglInit===void 0&&(O.__webglInit=!0,E.depthTexture.addEventListener("dispose",w)),O.__webglTexture===void 0){O.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,O.__webglTexture),rt(e.TEXTURE_CUBE_MAP,E.depthTexture);let ve=a.convert(E.depthTexture.format),Me=a.convert(E.depthTexture.type),ue;E.depthTexture.format===vs?ue=e.DEPTH_COMPONENT24:E.depthTexture.format===tr&&(ue=e.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ue,E.width,E.height,0,ve,Me,null)}}else he(E.depthTexture,0);let H=O.__webglTexture,G=Ke(E),P=se?e.TEXTURE_CUBE_MAP_POSITIVE_X+q:e.TEXTURE_2D,Y=E.depthTexture.format===tr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(E.depthTexture.format===vs)j(E)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,P,H,0,G):e.framebufferTexture2D(e.FRAMEBUFFER,Y,P,H,0);else if(E.depthTexture.format===tr)j(E)?l.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,P,H,0,G):e.framebufferTexture2D(e.FRAMEBUFFER,Y,P,H,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function de(L){let E=s.get(L),q=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){let se=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),se){let O=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,se.removeEventListener("dispose",O)};se.addEventListener("dispose",O),E.__depthDisposeCallback=O}E.__boundDepthTexture=se}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let se=0;se<6;se++)me(E.__webglFramebuffer[se],L,se);else{let se=L.texture.mipmaps;se&&se.length>0?me(E.__webglFramebuffer[0],L,0):me(E.__webglFramebuffer,L,0)}else if(q){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]===void 0)E.__webglDepthbuffer[se]=e.createRenderbuffer(),at(E.__webglDepthbuffer[se],L,!1);else{let O=L.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,H=E.__webglDepthbuffer[se];e.bindRenderbuffer(e.RENDERBUFFER,H),e.framebufferRenderbuffer(e.FRAMEBUFFER,O,e.RENDERBUFFER,H)}}else{let se=L.texture.mipmaps;if(se&&se.length>0?i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=e.createRenderbuffer(),at(E.__webglDepthbuffer,L,!1);else{let O=L.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,H=E.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,H),e.framebufferRenderbuffer(e.FRAMEBUFFER,O,e.RENDERBUFFER,H)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function _e(L,E,q){let se=s.get(L);E!==void 0&&Ee(se.__webglFramebuffer,L,L.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),q!==void 0&&de(L)}function Ne(L){let E=L.texture,q=s.get(L),se=s.get(E);L.addEventListener("dispose",m);let O=L.textures,H=L.isWebGLCubeRenderTarget===!0,G=O.length>1;if(G||(se.__webglTexture===void 0&&(se.__webglTexture=e.createTexture()),se.__version=E.version,n.memory.textures++),H){q.__webglFramebuffer=[];for(let P=0;P<6;P++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[P]=[];for(let Y=0;Y<E.mipmaps.length;Y++)q.__webglFramebuffer[P][Y]=e.createFramebuffer()}else q.__webglFramebuffer[P]=e.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let P=0;P<E.mipmaps.length;P++)q.__webglFramebuffer[P]=e.createFramebuffer()}else q.__webglFramebuffer=e.createFramebuffer();if(G)for(let P=0,Y=O.length;P<Y;P++){let ve=s.get(O[P]);ve.__webglTexture===void 0&&(ve.__webglTexture=e.createTexture(),n.memory.textures++)}if(L.samples>0&&j(L)===!1){q.__webglMultisampledFramebuffer=e.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let P=0;P<O.length;P++){let Y=O[P];q.__webglColorRenderbuffer[P]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,q.__webglColorRenderbuffer[P]);let ve=a.convert(Y.format,Y.colorSpace),Me=a.convert(Y.type),ue=y(Y.internalFormat,ve,Me,Y.normalized,Y.colorSpace,L.isXRRenderTarget===!0),Te=Ke(L);e.renderbufferStorageMultisample(e.RENDERBUFFER,Te,ue,L.width,L.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+P,e.RENDERBUFFER,q.__webglColorRenderbuffer[P])}e.bindRenderbuffer(e.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=e.createRenderbuffer(),at(q.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(H){i.bindTexture(e.TEXTURE_CUBE_MAP,se.__webglTexture),rt(e.TEXTURE_CUBE_MAP,E);for(let P=0;P<6;P++)if(E.mipmaps&&E.mipmaps.length>0)for(let Y=0;Y<E.mipmaps.length;Y++)Ee(q.__webglFramebuffer[P][Y],L,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+P,Y);else Ee(q.__webglFramebuffer[P],L,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+P,0);f(E)&&x(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(G){for(let P=0,Y=O.length;P<Y;P++){let ve=O[P],Me=s.get(ve),ue=e.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ue=L.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(ue,Me.__webglTexture),rt(ue,ve),Ee(q.__webglFramebuffer,L,ve,e.COLOR_ATTACHMENT0+P,ue,0),f(ve)&&x(ue)}i.unbindTexture()}else{let P=e.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(P=L.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(P,se.__webglTexture),rt(P,E),E.mipmaps&&E.mipmaps.length>0)for(let Y=0;Y<E.mipmaps.length;Y++)Ee(q.__webglFramebuffer[Y],L,E,e.COLOR_ATTACHMENT0,P,Y);else Ee(q.__webglFramebuffer,L,E,e.COLOR_ATTACHMENT0,P,0);f(E)&&x(P),i.unbindTexture()}L.depthBuffer&&de(L)}function Ie(L){let E=L.textures;for(let q=0,se=E.length;q<se;q++){let O=E[q];if(f(O)){let H=b(L),G=s.get(O).__webglTexture;i.bindTexture(H,G),x(H),i.unbindTexture()}}}let ze=[],Ze=[];function et(L){if(L.samples>0){if(j(L)===!1){let E=L.textures,q=L.width,se=L.height,O=e.COLOR_BUFFER_BIT,H=L.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,G=s.get(L),P=E.length>1;if(P)for(let ve=0;ve<E.length;ve++)i.bindFramebuffer(e.FRAMEBUFFER,G.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,G.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,G.__webglMultisampledFramebuffer);let Y=L.texture.mipmaps;Y&&Y.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,G.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,G.__webglFramebuffer);for(let ve=0;ve<E.length;ve++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(O|=e.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(O|=e.STENCIL_BUFFER_BIT)),P){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,G.__webglColorRenderbuffer[ve]);let Me=s.get(E[ve]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Me,0)}e.blitFramebuffer(0,0,q,se,0,0,q,se,O,e.NEAREST),o===!0&&(ze.length=0,Ze.length=0,ze.push(e.COLOR_ATTACHMENT0+ve),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(ze.push(H),Ze.push(H),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ze)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ze))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),P)for(let ve=0;ve<E.length;ve++){i.bindFramebuffer(e.FRAMEBUFFER,G.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,G.__webglColorRenderbuffer[ve]);let Me=s.get(E[ve]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,G.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,Me,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,G.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&o){let E=L.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[E])}}}function Ke(L){return Math.min(r.maxSamples,L.samples)}function j(L){let E=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Mt(L){let E=n.render.frame;u.get(L)!==E&&(u.set(L,E),L.update())}function ot(L,E){let q=L.colorSpace,se=L.format,O=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Xn&&q!==Ds&&(_t.getTransfer(q)===wt?(se!==Hi||O!==Li)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",q)),E}function ct(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=J,this.getTextureUnits=z,this.setTextureUnits=k,this.setTexture2D=he,this.setTexture2DArray=ee,this.setTexture3D=te,this.setTextureCube=pe,this.rebindTextures=_e,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=j,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function o_(e,t){function i(s,r=Ds){let a,n=_t.getTransfer(r);if(s===Li)return e.UNSIGNED_BYTE;if(s===gh)return e.UNSIGNED_SHORT_4_4_4_4;if(s===vh)return e.UNSIGNED_SHORT_5_5_5_1;if(s===Zu)return e.UNSIGNED_INT_5_9_9_9_REV;if(s===$u)return e.UNSIGNED_INT_10F_11F_11F_REV;if(s===qu)return e.BYTE;if(s===Yu)return e.SHORT;if(s===Ca)return e.UNSIGNED_SHORT;if(s===mh)return e.INT;if(s===es)return e.UNSIGNED_INT;if(s===$i)return e.FLOAT;if(s===ts)return e.HALF_FLOAT;if(s===Ju)return e.ALPHA;if(s===Ku)return e.RGB;if(s===Hi)return e.RGBA;if(s===vs)return e.DEPTH_COMPONENT;if(s===tr)return e.DEPTH_STENCIL;if(s===Qu)return e.RED;if(s===yh)return e.RED_INTEGER;if(s===rr)return e.RG;if(s===xh)return e.RG_INTEGER;if(s===_h)return e.RGBA_INTEGER;if(s===On||s===Bn||s===Fn||s===zn)if(n===wt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===On)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===On)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bn)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fn)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zn)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Il||s===Ll||s===Nl||s===Ul)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Il)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ll)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Nl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ul)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Dl||s===Ol||s===Bl||s===Fl||s===zl||s===Vn||s===kl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Dl||s===Ol)return n===wt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Bl)return n===wt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(s===Fl)return a.COMPRESSED_R11_EAC;if(s===zl)return a.COMPRESSED_SIGNED_R11_EAC;if(s===Vn)return a.COMPRESSED_RG11_EAC;if(s===kl)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Hl||s===Gl||s===Vl||s===Wl||s===jl||s===Xl||s===ql||s===Yl||s===Zl||s===$l||s===Jl||s===Kl||s===Ql||s===eh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Hl)return n===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Gl)return n===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vl)return n===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Wl)return n===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jl)return n===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xl)return n===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ql)return n===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Yl)return n===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zl)return n===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$l)return n===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jl)return n===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kl)return n===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ql)return n===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===eh)return n===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===th||s===ih||s===sh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===th)return n===wt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ih)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===sh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===rh||s===ah||s===Wn||s===nh)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===rh)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ah)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wn)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===nh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Pa?e.UNSIGNED_INT_24_8:e[s]!==void 0?e[s]:null}return{convert:i}}var l_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h_=`
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

}`,c_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new pd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Mi({vertexShader:l_,fragmentShader:h_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new Ci(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},u_=class extends nr{constructor(e,t){super();let i=this,s=null,r=1,a=null,n="local-floor",l=1,o=null,h=null,u=null,d=null,c=null,p=null,v=typeof XRWebGLBinding<"u",_=new c_,g={},f=t.getContextAttributes(),x=null,b=null,y=[],S=[],A=new be,w=null,m=null,M=new fi;M.viewport=new kt;let D=new fi;D.viewport=new kt;let C=[M,D],B=new cg,J=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let ge=y[le];return ge===void 0&&(ge=new Yo,y[le]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(le){let ge=y[le];return ge===void 0&&(ge=new Yo,y[le]=ge),ge.getGripSpace()},this.getHand=function(le){let ge=y[le];return ge===void 0&&(ge=new Yo,y[le]=ge),ge.getHandSpace()};function k(le){let ge=S.indexOf(le.inputSource);if(ge===-1)return;let xe=y[ge];xe!==void 0&&(xe.update(le.inputSource,le.frame,o||a),xe.dispatchEvent({type:le.type,data:le.inputSource}))}function X(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Z);for(let le=0;le<y.length;le++){let ge=S[le];ge!==null&&(S[le]=null,y[le].disconnect(ge))}J=null,z=null,_.reset();for(let le in g)delete g[le];if(e.setRenderTarget(x),c=null,d=null,u=null,s=null,b=null,rt.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),m!==null){let le=m.camera;le.fov=m.fov,le.zoom=m.zoom,le.updateProjectionMatrix(),m=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){r=le,i.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){n=le,i.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function(le){o=le},this.getBaseLayer=function(){return d!==null?d:c},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Z),f.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,xe=null,We=null;f.depth&&(We=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=f.stencil?tr:vs,xe=f.stencil?Pa:es);let Fe={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Fe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Vi(d.textureWidth,d.textureHeight,{format:Hi,type:Li,depthTexture:new Ua(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ge={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};c=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:c}),e.setPixelRatio(1),e.setSize(c.framebufferWidth,c.framebufferHeight,!1),b=new Vi(c.framebufferWidth,c.framebufferHeight,{format:Hi,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),o=null,a=await s.requestReferenceSpace(n),rt.setContext(s),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(le){for(let ge=0;ge<le.removed.length;ge++){let xe=le.removed[ge],We=S.indexOf(xe);We>=0&&(S[We]=null,y[We].disconnect(xe))}for(let ge=0;ge<le.added.length;ge++){let xe=le.added[ge],We=S.indexOf(xe);if(We===-1){for(let Ee=0;Ee<y.length;Ee++)if(Ee>=S.length){S.push(xe),We=Ee;break}else if(S[Ee]===null){S[Ee]=xe,We=Ee;break}if(We===-1)break}let Fe=y[We];Fe&&Fe.connect(xe)}}let he=new U,ee=new U;function te(le,ge,xe){he.setFromMatrixPosition(ge.matrixWorld),ee.setFromMatrixPosition(xe.matrixWorld);let We=he.distanceTo(ee),Fe=ge.projectionMatrix.elements,Ee=xe.projectionMatrix.elements,at=Fe[14]/(Fe[10]-1),me=Fe[14]/(Fe[10]+1),de=(Fe[9]+1)/Fe[5],_e=(Fe[9]-1)/Fe[5],Ne=(Fe[8]-1)/Fe[0],Ie=(Ee[8]+1)/Ee[0],ze=at*Ne,Ze=at*Ie,et=We/(-Ne+Ie),Ke=et*-Ne;if(ge.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Ke),le.translateZ(et),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),Fe[10]===-1)le.projectionMatrix.copy(ge.projectionMatrix),le.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{let j=at+et,Mt=me+et,ot=ze-Ke,ct=Ze+(We-Ke),L=de*me/Mt*j,E=_e*me/Mt*j;le.projectionMatrix.makePerspective(ot,ct,L,E,j,Mt),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function pe(le,ge){ge===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(ge.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let ge=le.near,xe=le.far;_.texture!==null&&(_.depthNear>0&&(ge=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),B.near=D.near=M.near=ge,B.far=D.far=M.far=xe,(J!==B.near||z!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),J=B.near,z=B.far),B.layers.mask=le.layers.mask|6,M.layers.mask=B.layers.mask&-5,D.layers.mask=B.layers.mask&-3;let We=le.parent,Fe=B.cameras;pe(B,We);for(let Ee=0;Ee<Fe.length;Ee++)pe(Fe[Ee],We);Fe.length===2?te(B,M,D):B.projectionMatrix.copy(M.projectionMatrix),m===null&&le.isPerspectiveCamera&&(m={camera:le,fov:le.fov,zoom:le.zoom}),ke(le,B,We)};function ke(le,ge,xe){xe===null?le.matrix.copy(ge.matrixWorld):(le.matrix.copy(xe.matrixWorld),le.matrix.invert(),le.matrix.multiply(ge.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(ge.projectionMatrix),le.projectionMatrixInverse.copy(ge.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Na*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&c===null))return l},this.setFoveation=function(le){l=le,d!==null&&(d.fixedFoveation=le),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=le)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(B)},this.getCameraTexture=function(le){return g[le]};let Le=null;function xt(le,ge){if(h=ge.getViewerPose(o||a),p=ge,h!==null){let xe=h.views;c!==null&&(e.setRenderTargetFramebuffer(b,c.framebuffer),e.setRenderTarget(b));let We=!1;xe.length!==B.cameras.length&&(B.cameras.length=0,We=!0);for(let Ee=0;Ee<xe.length;Ee++){let at=xe[Ee],me=null;if(c!==null)me=c.getViewport(at);else{let _e=u.getViewSubImage(d,at);me=_e.viewport,Ee===0&&(e.setRenderTargetTextures(b,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(b))}let de=C[Ee];de===void 0&&(de=new fi,de.layers.enable(Ee),de.viewport=new kt,C[Ee]=de),de.matrix.fromArray(at.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(at.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(me.x,me.y,me.width,me.height),Ee===0&&(B.matrix.copy(de.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),We===!0&&B.cameras.push(de)}let Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();let Ee=u.getDepthInformation(xe[0]);Ee&&Ee.isValid&&Ee.texture&&_.init(Ee,s.renderState)}if(Fe&&Fe.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let Ee=0;Ee<xe.length;Ee++){let at=xe[Ee].camera;if(at){let me=g[at];me||(me=new pd,g[at]=me);let de=u.getCameraImage(at);me.sourceTexture=de}}}}for(let xe=0;xe<y.length;xe++){let We=S[xe],Fe=y[xe];We!==null&&Fe!==void 0&&Fe.update(We,ge,o||a)}Le&&Le(le,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),p=null}let rt=new Yd;rt.setAnimationLoop(xt),this.setAnimationLoop=function(le){Le=le},this.dispose=function(){}}},d_=new ft,tp=new lt;tp.set(-1,0,0,0,1,0,0,0,1);function p_(e,t){function i(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function s(g,f){f.color.getRGB(g.fogColor.value,Vd(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,x,b,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?a(g,f):f.isMeshLambertMaterial?(a(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(a(g,f),d(g,f)):f.isMeshPhongMaterial?(a(g,f),u(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(a(g,f),c(g,f),f.isMeshPhysicalMaterial&&p(g,f,y)):f.isMeshMatcapMaterial?(a(g,f),v(g,f)):f.isMeshDepthMaterial?a(g,f):f.isMeshDistanceMaterial?(a(g,f),_(g,f)):f.isMeshNormalMaterial?a(g,f):f.isLineBasicMaterial?(n(g,f),f.isLineDashedMaterial&&l(g,f)):f.isPointsMaterial?o(g,f,x,b):f.isSpriteMaterial?h(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,i(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,i(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,i(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===ci&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,i(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===ci&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,i(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,i(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let x=t.get(f),b=x.envMap,y=x.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(d_.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(tp),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,g.aoMapTransform))}function n(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,i(f.map,g.mapTransform))}function l(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function o(g,f,x,b){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*x,g.scale.value=b*.5,f.map&&(g.map.value=f.map,i(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,i(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,i(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,i(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function c(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,x){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ci&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function _(g,f){let x=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:r}}function f_(e,t,i,s){let r={},a={},n=[],l=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function o(y,S){let A=S.program;s.uniformBlockBinding(y,A)}function h(y,S){let A=r[y.id];A===void 0&&(g(y),A=u(y),r[y.id]=A,y.addEventListener("dispose",x));let w=S.program;s.updateUBOMapping(y,w);let m=t.render.frame;a[y.id]!==m&&(c(y),a[y.id]=m)}function u(y){let S=d();y.__bindingPointIndex=S;let A=e.createBuffer(),w=y.__size,m=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,w,m),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,S,A),A}function d(){for(let y=0;y<l;y++)if(n.indexOf(y)===-1)return n.push(y),y;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(y){let S=r[y.id],A=y.uniforms,w=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,S);for(let m=0,M=A.length;m<M;m++){let D=A[m];if(Array.isArray(D))for(let C=0,B=D.length;C<B;C++)p(D[C],m,C,w);else p(D,m,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(y,S,A,w){if(_(y,S,A,w)===!0){let m=y.__offset,M=y.value;if(Array.isArray(M)){let D=0;for(let C=0;C<M.length;C++){let B=M[C],J=f(B);v(B,y.__data,D),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(D+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(M,y.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,m,y.__data)}}function v(y,S,A){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,A)}function _(y,S,A,w){let m=y.value,M=S+"_"+A;if(w[M]===void 0)return typeof m=="number"||typeof m=="boolean"?w[M]=m:ArrayBuffer.isView(m)?w[M]=m.slice():w[M]=m.clone(),!0;{let D=w[M];if(typeof m=="number"||typeof m=="boolean"){if(D!==m)return w[M]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(D.equals(m)===!1)return D.copy(m),!0}}return!1}function g(y){let S=y.uniforms,A=0,w=16;for(let M=0,D=S.length;M<D;M++){let C=Array.isArray(S[M])?S[M]:[S[M]];for(let B=0,J=C.length;B<J;B++){let z=C[B],k=Array.isArray(z.value)?z.value:[z.value];for(let X=0,Z=k.length;X<Z;X++){let he=k[X],ee=f(he),te=A%w,pe=te%ee.boundary,ke=te+pe;A+=pe,ke!==0&&w-ke<ee.storage&&(A+=w-ke),z.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=A,A+=ee.storage}}}let m=A%w;return m>0&&(A+=w-m),y.__size=A,y.__cache={},this}function f(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):st("WebGLRenderer: Unsupported uniform value type.",y),S}function x(y){let S=y.target;S.removeEventListener("dispose",x);let A=n.indexOf(S.__bindingPointIndex);n.splice(A,1),e.deleteBuffer(r[S.id]),delete r[S.id],delete a[S.id]}function b(){for(let y in r)e.deleteBuffer(r[y]);n=[],r={},a={}}return{bind:o,update:h,dispose:b}}var m_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yi=null;function g_(){return Yi===null&&(Yi=new Km(m_,16,16,rr,ts),Yi.name="DFG_LUT",Yi.minFilter=Si,Yi.magFilter=Si,Yi.wrapS=ps,Yi.wrapT=ps,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}var io=class{constructor(e={}){let{canvas:t=um(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:n=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:o=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:c=Li}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let v=c,_=new Set([_h,xh,yh]),g=new Set([Li,es,Ca,Pa,gh,vh]),f=new Uint32Array(4),x=new Int32Array(4),b=new U,y=null,S=null,A=[],w=[],m=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,D=!1,C=null,B=null,J=null,z=null;this._outputColorSpace=ii;let k=0,X=0,Z=null,he=-1,ee=null,te=new kt,pe=new kt,ke=null,Le=new Qe(0),xt=0,rt=t.width,le=t.height,ge=1,xe=null,We=null,Fe=new kt(0,0,rt,le),Ee=new kt(0,0,rt,le),at=!1,me=new Xr,de=!1,_e=!1,Ne=new ft,Ie=new U,ze=new kt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function Ke(){return Z===null?ge:1}let j=i;function Mt(R,$){return t.getContext(R,$)}let ot,ct,L,E,q,se,O,H,G,P,Y,ve,Me,ue,Te,Ae,Be,qe,W,ce,fe,Ce,ye;try{let R={alpha:!0,depth:s,stencil:r,antialias:n,premultipliedAlpha:l,preserveDrawingBuffer:o,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",I,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",ne,!1),j===null){let $="webgl2";if(j=Mt($,R),j===null)throw Mt($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}T()}catch(R){throw t.removeEventListener("webglcontextlost",I,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),it("WebGLRenderer: "+R.message),R}function T(){ot=new gy(j),ot.init(),fe=new o_(j,ot),ct=new ny(j,ot,e,fe),L=new a_(j,ot),ct.reversedDepthBuffer&&d&&L.buffers.depth.setReversed(!0),B=j.createFramebuffer(),J=j.createFramebuffer(),z=j.createFramebuffer(),E=new xy(j),q=new jx,se=new n_(j,ot,L,q,ct,fe,E),O=new my(M),H=new Sg(j),Ce=new ry(j,H),G=new vy(j,H,E,Ce),P=new Sy(j,G,H,Ce,E),qe=new _y(j,ct,se),Te=new oy(q),Y=new Wx(M,O,ot,ct,Ce,Te),ve=new p_(M,q),Me=new qx,ue=new Qx(ot),Be=new sy(M,O,L,P,p,l),Ae=new r_(M,P,ct),ye=new f_(j,E,ct,L),W=new ay(j,ot,E),ce=new yy(j,ot,E),E.programs=Y.programs,M.capabilities=ct,M.extensions=ot,M.properties=q,M.renderLists=Me,M.shadowMap=Ae,M.state=L,M.info=E}v!==Li&&(m=new by(v,t.width,t.height,n,s,r));let N=new u_(M,j);this.xr=N,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let R=ot.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ot.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(R){R!==void 0&&(ge=R,this.setSize(rt,le,!1))},this.getSize=function(R){return R.set(rt,le)},this.setSize=function(R,$,oe=!0){if(N.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=R,le=$,t.width=Math.floor(R*ge),t.height=Math.floor($*ge),oe===!0&&(t.style.width=R+"px",t.style.height=$+"px"),m!==null&&m.setSize(t.width,t.height),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(rt*ge,le*ge).floor()},this.setDrawingBufferSize=function(R,$,oe){rt=R,le=$,ge=oe,t.width=Math.floor(R*oe),t.height=Math.floor($*oe),this.setViewport(0,0,R,$)},this.setEffects=function(R){if(v===Li){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let $=0;$<R.length;$++)if(R[$].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}m.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(te)},this.getViewport=function(R){return R.copy(Fe)},this.setViewport=function(R,$,oe,ie){R.isVector4?Fe.set(R.x,R.y,R.z,R.w):Fe.set(R,$,oe,ie),L.viewport(te.copy(Fe).multiplyScalar(ge).round())},this.getScissor=function(R){return R.copy(Ee)},this.setScissor=function(R,$,oe,ie){R.isVector4?Ee.set(R.x,R.y,R.z,R.w):Ee.set(R,$,oe,ie),L.scissor(pe.copy(Ee).multiplyScalar(ge).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(R){L.setScissorTest(at=R)},this.setOpaqueSort=function(R){xe=R},this.setTransparentSort=function(R){We=R},this.getClearColor=function(R){return R.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(R=!0,$=!0,oe=!0){let ie=0;if(R){let K=!1;if(Z!==null){let Re=Z.texture.format;K=_.has(Re)}if(K){let Re=Z.texture.type,De=g.has(Re),He=Be.getClearColor(),Ve=Be.getClearAlpha(),tt=He.r,gt=He.g,bt=He.b;De?(f[0]=tt,f[1]=gt,f[2]=bt,f[3]=Ve,j.clearBufferuiv(j.COLOR,0,f)):(x[0]=tt,x[1]=gt,x[2]=bt,x[3]=Ve,j.clearBufferiv(j.COLOR,0,x))}else ie|=j.COLOR_BUFFER_BIT}$&&(ie|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ie|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&j.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),C=R},this.dispose=function(){t.removeEventListener("webglcontextlost",I,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),Be.dispose(),Me.dispose(),ue.dispose(),q.dispose(),O.dispose(),P.dispose(),Ce.dispose(),ye.dispose(),Y.dispose(),N.dispose(),N.removeEventListener("sessionstart",zt),N.removeEventListener("sessionend",Tt),Lt.stop()};function I(R){R.preventDefault(),Yn("WebGLRenderer: Context Lost."),D=!0}function re(){Yn("WebGLRenderer: Context Restored."),D=!1;let R=E.autoReset,$=Ae.enabled,oe=Ae.autoUpdate,ie=Ae.needsUpdate,K=Ae.type;T(),E.autoReset=R,Ae.enabled=$,Ae.autoUpdate=oe,Ae.needsUpdate=ie,Ae.type=K}function ne(R){it("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Se(R){let $=R.target;$.removeEventListener("dispose",Se),je($)}function je(R){Pe(R),q.remove(R)}function Pe(R){let $=q.get(R).programs;$!==void 0&&($.forEach(function(oe){Y.releaseProgram(oe)}),R.isShaderMaterial&&Y.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,oe,ie,K,Re){$===null&&($=Ze);let De=K.isMesh&&K.matrixWorld.determinantAffine()<0,He=wf(R,$,oe,ie,K);L.setMaterial(ie,De);let Ve=oe.index,tt=1;if(ie.wireframe===!0){if(Ve=G.getWireframeAttribute(oe),Ve===void 0)return;tt=2}let gt=oe.drawRange,bt=oe.attributes.position,Ye=gt.start*tt,Rt=(gt.start+gt.count)*tt;Re!==null&&(Ye=Math.max(Ye,Re.start*tt),Rt=Math.min(Rt,(Re.start+Re.count)*tt)),Ve!==null?(Ye=Math.max(Ye,0),Rt=Math.min(Rt,Ve.count)):bt!=null&&(Ye=Math.max(Ye,0),Rt=Math.min(Rt,bt.count));let ei=Rt-Ye;if(ei<0||ei===1/0)return;Ce.setup(K,ie,He,oe,Ve);let Ut,Dt=W;if(Ve!==null&&(Ut=H.get(Ve),Dt=ce,Dt.setIndex(Ut)),K.isMesh)ie.wireframe===!0?(L.setLineWidth(ie.wireframeLinewidth*Ke()),Dt.setMode(j.LINES)):Dt.setMode(j.TRIANGLES);else if(K.isLine){let Xt=ie.linewidth;Xt===void 0&&(Xt=1),L.setLineWidth(Xt*Ke()),K.isLineSegments?Dt.setMode(j.LINES):K.isLineLoop?Dt.setMode(j.LINE_LOOP):Dt.setMode(j.LINE_STRIP)}else K.isPoints?Dt.setMode(j.POINTS):K.isSprite&&Dt.setMode(j.TRIANGLES);if(K.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))Dt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Xt=K._multiDrawStarts,Xe=K._multiDrawCounts,Ei=K._multiDrawCount,qs=Ve?H.get(Ve).bytesPerElement:1,Di=q.get(ie).currentProgram.getUniforms();for(let Xi=0;Xi<Ei;Xi++)Di.setValue(j,"_gl_DrawID",Xi),Dt.render(Xt[Xi]/qs,Xe[Xi])}else if(K.isInstancedMesh)Dt.renderInstances(Ye,ei,K.count);else if(oe.isInstancedBufferGeometry){let Xt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Xe=Math.min(oe.instanceCount,Xt);Dt.renderInstances(Ye,ei,Xe)}else Dt.render(Ye,ei)};function Ge(R,$,oe,ie){C!==null&&R.isNodeMaterial&&C.setObject(ie,R),de===!0&&Te.setState(R,oe,!1),R.transparent===!0&&R.side===Gt&&R.forceSinglePass===!1?(R.side=ci,R.needsUpdate=!0,pr(R,$,ie),R.side=gs,R.needsUpdate=!0,pr(R,$,ie),R.side=Gt):pr(R,$,ie)}this.compile=function(R,$,oe=null){oe===null&&(oe=R),C!==null&&C.renderStart(R,$,oe),S=ue.get(oe),S.init($),w.push(S),oe.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),R!==oe&&R.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights(),C!==null&&C.updateLights(S.state.lightsArray),_e=this.localClippingEnabled,de=Te.init(this.clippingPlanes,_e),de===!0&&Te.setGlobalState(this.clippingPlanes,$),C!==null&&Ae.render(S.state.shadowsArray,oe,$);let ie=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Re=K.material;if(Re)if(Array.isArray(Re))for(let De=0;De<Re.length;De++){let He=Re[De];Ge(He,oe,$,K),ie.add(He)}else Ge(Re,oe,$,K),ie.add(Re)}),S=w.pop(),C!==null&&C.renderEnd(),ie},this.compileAsync=function(R,$,oe=null){let ie=this.compile(R,$,oe);return new Promise(K=>{function Re(){if(ie.forEach(function(De){let He=q.get(De).currentProgram;(He===void 0||He.isReady())&&ie.delete(De)}),ie.size===0){K(R);return}setTimeout(Re,10)}ot.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Je=null;function ut(R){Je&&Je(R)}function zt(){Lt.stop()}function Tt(){Lt.start()}let Lt=new Yd;Lt.setAnimationLoop(ut),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(R){Je=R,N.setAnimationLoop(R),R===null?Lt.stop():Lt.start()},N.addEventListener("sessionstart",zt),N.addEventListener("sessionend",Tt),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;C!==null&&C.renderStart(R,$);let oe=N.enabled===!0&&N.isPresenting===!0,ie=m!==null&&(Z===null||oe)&&m.begin(M,Z);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(m===null||m.isCompositing()===!1)&&(N.cameraAutoUpdate===!0&&N.updateCamera($),$=N.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,$,Z),S=ue.get(R,w.length),S.init($),S.state.textureUnits=se.getTextureUnits(),w.push(S),Ne.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),me.setFromProjectionMatrix(Ne,Gi,$.reversedDepth),_e=this.localClippingEnabled,de=Te.init(this.clippingPlanes,_e),y=Me.get(R,A.length),y.init(),A.push(y),N.enabled===!0&&N.isPresenting===!0){let Re=M.xr.getDepthSensingMesh();Re!==null&&Qt(Re,$,-1/0,M.sortObjects)}Qt(R,$,0,M.sortObjects),y.finish(),C!==null&&C.updateLights(S.state.lightsArray),M.sortObjects===!0&&y.sort(xe,We),et=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1,et&&Be.addToRenderList(y,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),de===!0&&Te.beginShadows();let K=S.state.shadowsArray;if(Ae.render(K,R,$),de===!0&&Te.endShadows(),(ie&&m.hasRenderPass())===!1){let Re=y.opaque,De=y.transmissive;if(S.setupLights(),$.isArrayCamera){let He=$.cameras;if(De.length>0)for(let Ve=0,tt=He.length;Ve<tt;Ve++){let gt=He[Ve];Et(Re,De,R,gt)}et&&Be.render(R);for(let Ve=0,tt=He.length;Ve<tt;Ve++){let gt=He[Ve];yi(y,R,gt,gt.viewport)}}else De.length>0&&Et(Re,De,R,$),et&&Be.render(R),yi(y,R,$)}Z!==null&&X===0&&(se.updateMultisampleRenderTarget(Z),se.updateRenderTargetMipmap(Z)),ie&&m.end(M),R.isScene===!0&&R.onAfterRender(M,R,$),Ce.resetDefaultState(),he=-1,ee=null,w.pop(),w.length>0?(S=w[w.length-1],se.setTextureUnits(S.state.textureUnits),de===!0&&Te.setGlobalState(M.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?y=A[A.length-1]:y=null,C!==null&&C.renderEnd()};function Qt(R,$,oe,ie){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLightProbeGrid)S.pushLightProbeGrid(R);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(me)){ie&&ze.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ne);let Re=P.update(R),De=R.material;De.visible&&y.push(R,Re,De,oe,ze.z,null,$)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(me))){let Re=P.update(R),De=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ze.copy(R.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ze.copy(Re.boundingSphere.center)),ze.applyMatrix4(R.matrixWorld).applyMatrix4(Ne)),Array.isArray(De)){let He=Re.groups;for(let Ve=0,tt=He.length;Ve<tt;Ve++){let gt=He[Ve],bt=De[gt.materialIndex];bt&&bt.visible&&y.push(R,Re,bt,oe,ze.z,gt,$)}}else De.visible&&y.push(R,Re,De,oe,ze.z,null,$)}}let K=R.children;for(let Re=0,De=K.length;Re<De;Re++)Qt(K[Re],$,oe,ie)}function yi(R,$,oe,ie){let{opaque:K,transmissive:Re,transparent:De}=R;S.setupLightsView(oe),de===!0&&Te.setGlobalState(M.clippingPlanes,oe),ie&&L.viewport(te.copy(ie)),K.length>0&&li(K,$,oe),Re.length>0&&li(Re,$,oe),De.length>0&&li(De,$,oe),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function Et(R,$,oe,ie){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[ie.id]===void 0){let bt=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[ie.id]=new Vi(1,1,{generateMipmaps:!0,type:bt?ts:Li,minFilter:er,samples:Math.max(4,ct.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_t.workingColorSpace})}let K=S.state.transmissionRenderTarget[ie.id],Re=ie.viewport||te;K.setSize(Re.z*M.transmissionResolutionScale,Re.w*M.transmissionResolutionScale);let De=M.getRenderTarget(),He=M.getActiveCubeFace(),Ve=M.getActiveMipmapLevel();M.setRenderTarget(K),M.getClearColor(Le),xt=M.getClearAlpha(),xt<1&&M.setClearColor(16777215,.5),M.clear(),et&&Be.render(oe);let tt=M.toneMapping;M.toneMapping=Ki;let gt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),S.setupLightsView(ie),de===!0&&Te.setGlobalState(M.clippingPlanes,ie),li(R,oe,ie),se.updateMultisampleRenderTarget(K),se.updateRenderTargetMipmap(K),ot.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let Ye=0,Rt=$.length;Ye<Rt;Ye++){let ei=$[Ye],{object:Ut,geometry:Dt,material:Xt,group:Xe}=ei;if(Xt.side===Gt&&Ut.layers.test(ie.layers)){let Ei=Xt.side;Xt.side=ci,Xt.needsUpdate=!0,ws(Ut,oe,ie,Dt,Xt,Xe),Xt.side=Ei,Xt.needsUpdate=!0,bt=!0}}bt===!0&&(se.updateMultisampleRenderTarget(K),se.updateRenderTargetMipmap(K))}M.setRenderTarget(De,He,Ve),M.setClearColor(Le,xt),gt!==void 0&&(ie.viewport=gt),M.toneMapping=tt}function li(R,$,oe){let ie=$.isScene===!0?$.overrideMaterial:null;for(let K=0,Re=R.length;K<Re;K++){let De=R[K],{object:He,geometry:Ve,group:tt}=De,gt=De.material;gt.allowOverride===!0&&ie!==null&&(gt=ie),He.layers.test(oe.layers)&&ws(He,$,oe,Ve,gt,tt)}}function ws(R,$,oe,ie,K,Re){C!==null&&K.isNodeMaterial&&C.setObject(R,K),R.onBeforeRender(M,$,oe,ie,K,Re),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(M,$,oe,ie,R,Re),K.transparent===!0&&K.side===Gt&&K.forceSinglePass===!1?(K.side=ci,K.needsUpdate=!0,M.renderBufferDirect(oe,$,ie,K,R,Re),K.side=gs,K.needsUpdate=!0,M.renderBufferDirect(oe,$,ie,K,R,Re),K.side=Gt):M.renderBufferDirect(oe,$,ie,K,R,Re),R.onAfterRender(M,$,oe,ie,K,Re)}function pr(R,$,oe){$.isScene!==!0&&($=Ze);let ie=q.get(R),K=S.state.lights,Re=S.state.shadowsArray,De=K.state.version,He=Y.getParameters(R,K.state,Re,$,oe,S.state.lightProbeGridArray),Ve=Y.getProgramCacheKey(He),tt=ie.programs;ie.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?$.environment:null,ie.fog=$.fog;let gt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ie.envMap=O.get(R.envMap||ie.environment,gt),ie.envMapRotation=ie.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,tt===void 0&&(R.addEventListener("dispose",Se),tt=new Map,ie.programs=tt);let bt=tt.get(Ve);if(bt!==void 0){if(ie.currentProgram===bt&&ie.lightsStateVersion===De)return vc(R,He),bt}else He.uniforms=Y.getUniforms(R),C!==null&&R.isNodeMaterial&&C.build(R,oe,He),R.onBeforeCompile(He,M),bt=Y.acquireProgram(He,Ve),tt.set(Ve,bt),ie.uniforms=He.uniforms;let Ye=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=Te.uniform),vc(R,He),ie.needsLights=Rf(R),ie.lightsStateVersion=De,ie.needsLights&&(Ye.ambientLightColor.value=K.state.ambient,Ye.lightProbe.value=K.state.probe,Ye.sunLights.value=K.state.sun,Ye.sunLightShadows.value=K.state.sunShadow,Ye.directionalLights.value=K.state.directional,Ye.directionalLightShadows.value=K.state.directionalShadow,Ye.spotLights.value=K.state.spot,Ye.spotLightShadows.value=K.state.spotShadow,Ye.rectAreaLights.value=K.state.rectArea,Ye.ltc_1.value=K.state.rectAreaLTC1,Ye.ltc_2.value=K.state.rectAreaLTC2,Ye.pointLights.value=K.state.point,Ye.pointLightShadows.value=K.state.pointShadow,Ye.hemisphereLights.value=K.state.hemi,Ye.sunShadowMatrix.value=K.state.sunShadowMatrix,Ye.sunShadowCascade.value=K.state.sunShadowCascade,Ye.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ye.spotLightMatrix.value=K.state.spotLightMatrix,Ye.spotLightMap.value=K.state.spotLightMap,Ye.pointShadowMatrix.value=K.state.pointShadowMatrix),ie.lightProbeGrid=S.state.lightProbeGridArray.length>0,ie.currentProgram=bt,ie.uniformsList=null,bt}function os(R){if(R.uniformsList===null){let $=R.currentProgram.getUniforms();R.uniformsList=Gn.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function vc(R,$){let oe=q.get(R);oe.outputColorSpace=$.outputColorSpace,oe.batching=$.batching,oe.batchingColor=$.batchingColor,oe.instancing=$.instancing,oe.instancingColor=$.instancingColor,oe.instancingMorph=$.instancingMorph,oe.skinning=$.skinning,oe.morphTargets=$.morphTargets,oe.morphNormals=$.morphNormals,oe.morphColors=$.morphColors,oe.morphTargetsCount=$.morphTargetsCount,oe.numClippingPlanes=$.numClippingPlanes,oe.numIntersection=$.numClipIntersection,oe.vertexAlphas=$.vertexAlphas,oe.vertexTangents=$.vertexTangents,oe.toneMapping=$.toneMapping}function Tf(R,$){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;b.setFromMatrixPosition($.matrixWorld);for(let oe=0,ie=R.length;oe<ie;oe++){let K=R[oe];if(K.texture!==null&&K.boundingBox.containsPoint(b))return K}return null}function wf(R,$,oe,ie,K){$.isScene!==!0&&($=Ze),se.resetTextureUnits();let Re=$.fog,De=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?$.environment:null,He=Z===null?M.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:_t.workingColorSpace,Ve=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,tt=O.get(ie.envMap||De,Ve),gt=ie.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,bt=!!oe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ye=!!oe.morphAttributes.position,Rt=!!oe.morphAttributes.normal,ei=!!oe.morphAttributes.color,Ut=Ki;ie.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ut=M.toneMapping);let Dt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Xt=Dt!==void 0?Dt.length:0,Xe=q.get(ie),Ei=S.state.lights;if(de===!0&&(_e===!0||R!==ee)){let Pt=R===ee&&ie.id===he;Te.setState(ie,R,Pt)}let qs=!1;ie.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Ei.state.version||Xe.outputColorSpace!==He||K.isBatchedMesh&&Xe.batching===!1||!K.isBatchedMesh&&Xe.batching===!0||K.isBatchedMesh&&Xe.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Xe.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Xe.instancing===!1||!K.isInstancedMesh&&Xe.instancing===!0||K.isSkinnedMesh&&Xe.skinning===!1||!K.isSkinnedMesh&&Xe.skinning===!0||K.isInstancedMesh&&Xe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Xe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Xe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Xe.instancingMorph===!1&&K.morphTexture!==null||Xe.envMap!==tt||ie.fog===!0&&Xe.fog!==Re||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Te.numPlanes||Xe.numIntersection!==Te.numIntersection)||Xe.vertexAlphas!==gt||Xe.vertexTangents!==bt||Xe.morphTargets!==Ye||Xe.morphNormals!==Rt||Xe.morphColors!==ei||Xe.toneMapping!==Ut||Xe.morphTargetsCount!==Xt||!!Xe.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(qs=!0):(qs=!0,Xe.__version=ie.version);let Di=Xe.currentProgram;qs===!0&&(Di=pr(ie,$,K),C&&ie.isNodeMaterial&&C.onUpdateProgram(ie,Di,Xe));let Xi=!1,As=!1,fr=!1,Ct=Di.getUniforms(),Zt=Xe.uniforms;if(L.useProgram(Di.program)&&(Xi=!0,As=!0,fr=!0),ie.id!==he&&(he=ie.id,As=!0),Xe.needsLights){let Pt=Tf(S.state.lightProbeGridArray,K);Xe.lightProbeGrid!==Pt&&(Xe.lightProbeGrid=Pt,As=!0)}if(Xi||ee!==R){L.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ct.setValue(j,"projectionMatrix",R.projectionMatrix),Ct.setValue(j,"viewMatrix",R.matrixWorldInverse);let Pt=Ct.map.cameraPosition;Pt!==void 0&&Pt.setValue(j,Ie.setFromMatrixPosition(R.matrixWorld)),ct.logarithmicDepthBuffer&&Ct.setValue(j,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ct.setValue(j,"isOrthographic",R.isOrthographicCamera===!0),ee!==R&&(ee=R,As=!0,fr=!0)}if(Xe.needsLights&&(Ei.state.sunShadowMap.length>0&&Ct.setValue(j,"sunShadowMap",Ei.state.sunShadowMap,se),Ei.state.directionalShadowMap.length>0&&Ct.setValue(j,"directionalShadowMap",Ei.state.directionalShadowMap,se),Ei.state.spotShadowMap.length>0&&Ct.setValue(j,"spotShadowMap",Ei.state.spotShadowMap,se),Ei.state.pointShadowMap.length>0&&Ct.setValue(j,"pointShadowMap",Ei.state.pointShadowMap,se)),K.isSkinnedMesh){Ct.setOptional(j,K,"bindMatrix"),Ct.setOptional(j,K,"bindMatrixInverse");let Pt=K.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),Ct.setValue(j,"boneTexture",Pt.boneTexture,se))}K.isBatchedMesh&&(Ct.setOptional(j,K,"batchingTexture"),Ct.setValue(j,"batchingTexture",K._matricesTexture,se),Ct.setOptional(j,K,"batchingIdTexture"),Ct.setValue(j,"batchingIdTexture",K._indirectTexture,se),Ct.setOptional(j,K,"batchingColorTexture"),K._colorsTexture!==null&&Ct.setValue(j,"batchingColorTexture",K._colorsTexture,se));let Rs=oe.morphAttributes;if((Rs.position!==void 0||Rs.normal!==void 0||Rs.color!==void 0)&&qe.update(K,oe,Di),(As||Xe.receiveShadow!==K.receiveShadow)&&(Xe.receiveShadow=K.receiveShadow,Ct.setValue(j,"receiveShadow",K.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&$.environment!==null&&(Zt.envMapIntensity.value=$.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=g_()),As){if(Ct.setValue(j,"toneMappingExposure",M.toneMappingExposure),Xe.needsLights&&Af(Zt,fr),Re&&ie.fog===!0&&ve.refreshFogUniforms(Zt,Re),ve.refreshMaterialUniforms(Zt,ie,ge,le,S.state.transmissionRenderTarget[R.id]),Xe.needsLights&&Xe.lightProbeGrid){let Pt=Xe.lightProbeGrid;Zt.probesSH.value=Pt.texture,Zt.probesMin.value.copy(Pt.boundingBox.min),Zt.probesMax.value.copy(Pt.boundingBox.max),Zt.probesResolution.value.copy(Pt.resolution)}Gn.upload(j,os(Xe),Zt,se)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Gn.upload(j,os(Xe),Zt,se),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ct.setValue(j,"center",K.center),Ct.setValue(j,"modelViewMatrix",K.modelViewMatrix),Ct.setValue(j,"normalMatrix",K.normalMatrix),Ct.setValue(j,"modelMatrix",K.matrixWorld),ie.uniformsGroups!==void 0){let Pt=ie.uniformsGroups;for(let ha=0,mr=Pt.length;ha<mr;ha++){let xc=Pt[ha];ye.update(xc,Di),ye.bind(xc,Di)}}return Di}function Af(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.sunLights.needsUpdate=$,R.sunLightShadows.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function Rf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(R,$,oe){let ie=q.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),q.get(R.texture).__webglTexture=$,q.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:oe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,$){let oe=q.get(R);oe.__webglFramebuffer=$,oe.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(R,$=0,oe=0){Z=R,k=$,X=oe;let ie=null,K=!1,Re=!1;if(R){let De=q.get(R);if(De.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(j.FRAMEBUFFER,De.__webglFramebuffer),te.copy(R.viewport),pe.copy(R.scissor),ke=R.scissorTest,L.viewport(te),L.scissor(pe),L.setScissorTest(ke),he=-1;return}else if(De.__webglFramebuffer===void 0)se.setupRenderTarget(R);else if(De.__hasExternalTextures)se.rebindTextures(R,q.get(R.texture).__webglTexture,q.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let tt=R.depthTexture;if(De.__boundDepthTexture!==tt){if(tt!==null&&q.has(tt)&&(R.width!==tt.image.width||R.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(R)}}let He=R.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Re=!0);let Ve=q.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ve[$])?ie=Ve[$][oe]:ie=Ve[$],K=!0):R.samples>0&&se.useMultisampledRTT(R)===!1?ie=q.get(R).__webglMultisampledFramebuffer:Array.isArray(Ve)?ie=Ve[oe]:ie=Ve,te.copy(R.viewport),pe.copy(R.scissor),ke=R.scissorTest}else te.copy(Fe).multiplyScalar(ge).floor(),pe.copy(Ee).multiplyScalar(ge).floor(),ke=at;if(oe!==0&&(ie=B),L.bindFramebuffer(j.FRAMEBUFFER,ie)&&L.drawBuffers(R,ie),L.viewport(te),L.scissor(pe),L.setScissorTest(ke),K){let De=q.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+$,De.__webglTexture,oe)}else if(Re){let De=$;for(let He=0;He<R.textures.length;He++){let Ve=q.get(R.textures[He]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+He,Ve.__webglTexture,oe,De)}}else if(R!==null&&oe!==0){let De=q.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,De.__webglTexture,oe)}he=-1};function yc(R){let $=q.get(R);return($.__readFormat!==R.format||$.__readType!==R.type)&&($.__readFormat=R.format,$.__readType=R.type,$.__formatReadable=ct.textureFormatReadable(R.format),$.__typeReadable=ct.textureTypeReadable(R.type)),$}this.readRenderTargetPixels=function(R,$,oe,ie,K,Re,De,He=0){if(!(R&&R.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Ve=Ve[De]),Ve){L.bindFramebuffer(j.FRAMEBUFFER,Ve);try{let tt=R.textures[He],gt=tt.format,bt=tt.type;R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+He);let Ye=yc(tt);if(Ye.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-ie&&oe>=0&&oe<=R.height-K&&j.readPixels($,oe,ie,K,fe.convert(gt),fe.convert(bt),Re)}finally{let tt=Z!==null?q.get(Z).__webglFramebuffer:null;L.bindFramebuffer(j.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(R,$,oe,ie,K,Re,De,He=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Ve=Ve[De]),Ve)if($>=0&&$<=R.width-ie&&oe>=0&&oe<=R.height-K){L.bindFramebuffer(j.FRAMEBUFFER,Ve);let tt=R.textures[He],gt=tt.format,bt=tt.type;R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+He);let Ye=yc(tt);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Rt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Rt),j.bufferData(j.PIXEL_PACK_BUFFER,Re.byteLength,j.STREAM_READ),j.readPixels($,oe,ie,K,fe.convert(gt),fe.convert(bt),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);let ei=Z!==null?q.get(Z).__webglFramebuffer:null;L.bindFramebuffer(j.FRAMEBUFFER,ei);let Ut=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await dm(j,Ut,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Rt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Re),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(Rt),j.deleteSync(Ut),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,$=null,oe=0){let ie=Math.pow(2,-oe),K=Math.floor(R.image.width*ie),Re=Math.floor(R.image.height*ie),De=$!==null?$.x:0,He=$!==null?$.y:0;se.setTexture2D(R,0),j.copyTexSubImage2D(j.TEXTURE_2D,oe,0,0,De,He,K,Re),L.unbindTexture()},this.copyTextureToTexture=function(R,$,oe=null,ie=null,K=0,Re=0){let De,He,Ve,tt,gt,bt,Ye,Rt,ei,Ut=R.isCompressedTexture?R.mipmaps[Re]:R.image;if(oe!==null)De=oe.max.x-oe.min.x,He=oe.max.y-oe.min.y,Ve=oe.isBox3?oe.max.z-oe.min.z:1,tt=oe.min.x,gt=oe.min.y,bt=oe.isBox3?oe.min.z:0;else{let Zt=Math.pow(2,-K);De=Math.floor(Ut.width*Zt),He=Math.floor(Ut.height*Zt),R.isDataArrayTexture?Ve=Ut.depth:R.isData3DTexture?Ve=Math.floor(Ut.depth*Zt):Ve=1,tt=0,gt=0,bt=0}ie!==null?(Ye=ie.x,Rt=ie.y,ei=ie.z):(Ye=0,Rt=0,ei=0);let Dt=fe.convert($.format),Xt=fe.convert($.type),Xe;$.isData3DTexture?(se.setTexture3D($,0),Xe=j.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(se.setTexture2DArray($,0),Xe=j.TEXTURE_2D_ARRAY):(se.setTexture2D($,0),Xe=j.TEXTURE_2D),L.activeTexture(j.TEXTURE0),L.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,$.flipY),L.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),L.pixelStorei(j.UNPACK_ALIGNMENT,$.unpackAlignment);let Ei=L.getParameter(j.UNPACK_ROW_LENGTH),qs=L.getParameter(j.UNPACK_IMAGE_HEIGHT),Di=L.getParameter(j.UNPACK_SKIP_PIXELS),Xi=L.getParameter(j.UNPACK_SKIP_ROWS),As=L.getParameter(j.UNPACK_SKIP_IMAGES);L.pixelStorei(j.UNPACK_ROW_LENGTH,Ut.width),L.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ut.height),L.pixelStorei(j.UNPACK_SKIP_PIXELS,tt),L.pixelStorei(j.UNPACK_SKIP_ROWS,gt),L.pixelStorei(j.UNPACK_SKIP_IMAGES,bt);let fr=R.isDataArrayTexture||R.isData3DTexture,Ct=$.isDataArrayTexture||$.isData3DTexture;if(R.isDepthTexture){let Zt=q.get(R),Rs=q.get($),Pt=q.get(Zt.__renderTarget),ha=q.get(Rs.__renderTarget);L.bindFramebuffer(j.READ_FRAMEBUFFER,Pt.__webglFramebuffer),L.bindFramebuffer(j.DRAW_FRAMEBUFFER,ha.__webglFramebuffer);for(let mr=0;mr<Ve;mr++)fr&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,q.get(R).__webglTexture,K,bt+mr),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,q.get($).__webglTexture,Re,ei+mr)),j.blitFramebuffer(tt,gt,De,He,Ye,Rt,De,He,j.DEPTH_BUFFER_BIT,j.NEAREST);L.bindFramebuffer(j.READ_FRAMEBUFFER,null),L.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||q.has(R)){let Zt=q.get(R),Rs=q.get($);L.bindFramebuffer(j.READ_FRAMEBUFFER,J),L.bindFramebuffer(j.DRAW_FRAMEBUFFER,z);for(let Pt=0;Pt<Ve;Pt++)fr?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Zt.__webglTexture,K,bt+Pt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Zt.__webglTexture,K),Ct?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Rs.__webglTexture,Re,ei+Pt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Rs.__webglTexture,Re),K!==0?j.blitFramebuffer(tt,gt,De,He,Ye,Rt,De,He,j.COLOR_BUFFER_BIT,j.NEAREST):Ct?j.copyTexSubImage3D(Xe,Re,Ye,Rt,ei+Pt,tt,gt,De,He):j.copyTexSubImage2D(Xe,Re,Ye,Rt,tt,gt,De,He);L.bindFramebuffer(j.READ_FRAMEBUFFER,null),L.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Ct?R.isDataTexture||R.isData3DTexture?j.texSubImage3D(Xe,Re,Ye,Rt,ei,De,He,Ve,Dt,Xt,Ut.data):$.isCompressedArrayTexture?j.compressedTexSubImage3D(Xe,Re,Ye,Rt,ei,De,He,Ve,Dt,Ut.data):j.texSubImage3D(Xe,Re,Ye,Rt,ei,De,He,Ve,Dt,Xt,Ut):R.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Re,Ye,Rt,De,He,Dt,Xt,Ut.data):R.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Re,Ye,Rt,Ut.width,Ut.height,Dt,Ut.data):j.texSubImage2D(j.TEXTURE_2D,Re,Ye,Rt,De,He,Dt,Xt,Ut);L.pixelStorei(j.UNPACK_ROW_LENGTH,Ei),L.pixelStorei(j.UNPACK_IMAGE_HEIGHT,qs),L.pixelStorei(j.UNPACK_SKIP_PIXELS,Di),L.pixelStorei(j.UNPACK_SKIP_ROWS,Xi),L.pixelStorei(j.UNPACK_SKIP_IMAGES,As),Re===0&&$.generateMipmaps&&j.generateMipmap(Xe),L.unbindTexture()},this.initRenderTarget=function(R){q.get(R).__webglFramebuffer===void 0&&se.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?se.setTextureCube(R,0):R.isData3DTexture?se.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?se.setTexture2DArray(R,0):se.setTexture2D(R,0),L.unbindTexture()},this.resetState=function(){k=0,X=0,Z=null,L.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}};var Oe={world:{gravity:34,maxFall:40,coyoteTime:.12,jumpBuffer:.14,stepHeight:.45,pushStrength:1},heroes:{kid:{walk:5.2,run:9.2,accel:58,decel:42,air:20,jump:2.15,gravity:1,turn:15,stamina:7,regen:.22,mass:1,reach:1.25,climb:3.6,dash:{mul:1.45,time:.35,cooldown:4}},masha:{walk:5.2,run:9,accel:60,decel:42,air:20,jump:2.2,gravity:1,turn:16,stamina:6.5,regen:.22,mass:1,reach:1.25,climb:3.6,dash:{mul:1.45,time:.35,cooldown:4}},catbus:{walk:5.8,run:11,accel:32,decel:22,air:10,jump:1.8,gravity:1.15,turn:7,stamina:5,regen:.18,mass:3,reach:1,climb:2.6,dash:{mul:1.3,time:.6,cooldown:6}},moti:{walk:4.6,run:8.2,accel:26,decel:30,air:8,jump:1.6,gravity:1.3,turn:9,stamina:8,regen:.25,mass:4,reach:1.35,climb:2.4,dash:{mul:1.25,time:.5,cooldown:7}},brothers:{walk:4.7,run:8,accel:28,decel:32,air:9,jump:1.55,gravity:1.2,turn:10,stamina:7,regen:.23,mass:3.5,reach:1.4,climb:2.5,dash:{mul:1.3,time:.46,cooldown:6}},noface:{walk:4.6,run:8.4,accel:14,decel:12,air:8,jump:0,gravity:1,turn:5,stamina:9,regen:.16,mass:5,reach:0,climb:0,dash:{mul:1.55,time:.8,cooldown:1.2,charges:3,recharge:12},fly:{speed:2.6,time:2.6,regen:.25}}},camera:{distance:6.5,minDistance:1.2,height:1.5,fov:62,mouseSens:.0026,touchSens:.0055,pitchMin:-.35,pitchMax:1.15,follow:12},ghost:{count:1,spawnGap:4,lateBoost:.08,burstRange:7,catchRadius:1.05,catchHeight:2.2,sightRange:22,hearRunRange:9,loseSightTime:2.2,repathEvery:.35,disguise:{cd:18,time:9,noticeRange:2.6},grab:1.1},abilities:{shelter:{cd:22,time:5,radius:3.4},light:{cd:14,radius:6,boost:1.2,boostTime:3},wisps:{cd:24,count:3,slow:4,stun:.6},path:{cd:18,time:8},swing:{cd:2.5,range:2.6,stun:1.6,knock:3.5},wave:{cd:1.5},dash:{},prop:{cd:4,walk:.45},fear:{cd:22,radius:5.8,stun:1.15,slow:2.4},hypnosis:{cd:19,radius:8.5,time:3.1},glare:{cd:15,radius:12,mark:4.5,stun:.35}},bots:{fleeRange:13,hideChance:.55,think:.25,restless:[7,15],helpRange:20,calmRun:.55,jukeRange:3.2,roofChance:.45},round:{hide:120,headStart:15,chase:60,chaseGhosts:4,chaseBotSpeed:.9,pumpkins:14,reward:{found:3,survive:5,catch:2}},graphics:{maxPixelRatioDesktop:1.75,maxPixelRatioMobile:1.35,shadows:!0,shadowMapSize:1024,fireflies:90}},hr=JSON.parse(JSON.stringify({world:Oe.world,heroes:Oe.heroes,ghost:Oe.ghost,abilities:Oe.abilities,bots:Oe.bots}));var Hh=new Map;function Q(e,t={}){var r,a,n,l,o,h,u;let i=e+JSON.stringify(t);if(Hh.has(i))return Hh.get(i);let s=new St({color:e,roughness:(r=t.roughness)!=null?r:.72,metalness:(a=t.metalness)!=null?a:0,emissive:(n=t.emissive)!=null?n:0,emissiveIntensity:(l=t.emissiveIntensity)!=null?l:1,transparent:t.opacity!==void 0&&t.opacity<1,opacity:(o=t.opacity)!=null?o:1,flatShading:!!t.flat,side:(h=t.side)!=null?h:gs,map:(u=t.map)!=null?u:null});return Hh.set(i,s),s}function V(e,t,{x:i=0,y:s=0,z:r=0,sx:a=1,sy:n=1,sz:l=1,rx:o=0,ry:h=0,rz:u=0,shadow:d=!0}={}){let c=new vt(e,t);return c.position.set(i,s,r),c.scale.set(a,n,l),c.rotation.set(o,h,u),c.castShadow=d,c.receiveShadow=!1,c}var F={sphere:(e=1,t=24,i=16)=>new si(e,t,i),capsule:(e,t,i=6,s=12)=>new wh(e,t,i,s),cyl:(e,t,i,s=20,r=!1)=>new $r(e,t,i,s,1,r),box:(e,t,i)=>new zs(e,t,i),cone:(e,t,i=20)=>new ka(e,t,i),torus:(e,t,i=10,s=24,r=Math.PI*2)=>new Nh(e,t,i,s,r)};function mt(e,t,i){let s=new ht;return s.position.set(e,t,i),s}function jt(e,t,i){let s=document.createElement("canvas");s.width=e,s.height=t,i(s.getContext("2d"),e,t);let r=new Fs(s);return r.colorSpace=ii,r.anisotropy=4,r}function so(e=.07,t=2759188){let i=new ht,s=V(F.sphere(1,16,12),Q(t,{roughness:.3}),{sx:e*.8,sy:e,sz:e*.35,shadow:!1}),r=V(F.sphere(1,8,6),Q(16777215,{emissive:16777215,emissiveIntensity:.6}),{x:e*.25,y:e*.35,z:e*.3,sx:e*.28,sy:e*.28,sz:e*.1,shadow:!1}),a=V(F.sphere(1,8,6),Q(16777215,{emissive:16777215,emissiveIntensity:.6}),{x:-e*.25,y:-e*.35,z:e*.3,sx:e*.14,sy:e*.14,sz:e*.08,shadow:!1});return i.add(s,r,a),i}function Ht(e,t=3,i=.08,s=1,r=!0){let a=new Ph(e,t),n=a.attributes.position,l=new U,o=[];for(let h=0;h<n.count;h++){l.fromBufferAttribute(n,h),o.push(`${l.x.toFixed(4)},${l.y.toFixed(4)},${l.z.toFixed(4)}`);let u=l.clone().normalize(),d=Math.sin(u.x*9.1+s)*Math.cos(u.y*7.3+s*2)*Math.sin(u.z*8.7+s*3)+.5*Math.sin(u.x*23+u.y*17+s*5)*Math.cos(u.z*19-s);l.multiplyScalar(1+d*i),n.setXYZ(h,l.x,l.y,l.z)}if(a.computeVertexNormals(),r){let h=a.attributes.normal,u=new Map;for(let d=0;d<n.count;d++){let c=u.get(o[d])||[0,0,0];c[0]+=h.getX(d),c[1]+=h.getY(d),c[2]+=h.getZ(d),u.set(o[d],c)}for(let d=0;d<n.count;d++){let c=u.get(o[d]),p=Math.hypot(c[0],c[1],c[2])||1;h.setXYZ(d,c[0]/p,c[1]/p,c[2]/p)}}return a}function Ss(e,t,i,{stride:s=.9,armSwing:r=.7,bob:a=.05,freq:n=1}={}){let l=t.speed,o=Math.min(1,l/4);e.phase=(e.phase||0)+i*(4+l*1.15)*n*(o>.05?1:0);let h=Math.sin(e.phase),u=e.blend=It.lerp(e.blend||0,o,1-Math.exp(-i*10)),d=t.grounded?0:1;e.air=It.lerp(e.air||0,d,1-Math.exp(-i*12));let c=h*s*u;if(e.legL&&(e.legL.rotation.x=It.lerp(c,-.5,e.air)),e.legR&&(e.legR.rotation.x=It.lerp(-c,.35,e.air)),e.armL&&(e.armL.rotation.x=It.lerp(-h*r*u,-2.4,e.air*.8),e.armL.rotation.z=It.lerp(.12,.5,e.air)),e.armR&&(e.armR.rotation.x=It.lerp(h*r*u,-2.4,e.air*.8),e.armR.rotation.z=It.lerp(-.12,-.5,e.air)),e.body){let p=Math.sin(t.t*2.2)*.012*(1-u);e.body.position.y=e.bodyY+Math.abs(Math.cos(e.phase))*a*u+p,e.body.rotation.x=.12*u*Math.min(1,l/7)-e.air*.1}e.head&&(e.head.rotation.x=-.08*u+Math.sin(t.t*1.7)*.02)}function Hs(e,t,i,s={}){Ss(e,{...t,grounded:!0,speed:t.speed*.28},i,{stride:.16,armSwing:.12,bob:.025,freq:.75});let r=t.t*4.2;e.legL&&(e.legL.rotation.x=.24+Math.sin(r)*.22),e.legR&&(e.legR.rotation.x=.24+Math.sin(r+Math.PI)*.22),e.armL&&(e.armL.rotation.x=-1.05+Math.sin(r+Math.PI)*.24,e.armL.rotation.z=.32),e.armR&&(e.armR.rotation.x=-1.05+Math.sin(r)*.24,e.armR.rotation.z=-.32),e.body&&(e.body.rotation.x=t.diving?.3:-.12)}function Gs(e,t,i){var r;e.userData.sq=(r=e.userData.sq)!=null?r:0,t.landed&&(e.userData.sq=Math.min(.22,.06+Math.abs(t.landSpeed)*.012)),e.userData.sq=It.lerp(e.userData.sq,0,1-Math.exp(-i*12));let s=e.userData.sq;e.scale.set(1+s*.6,1-s,1+s*.6)}function ip(){let e=new ht,t=new ht;e.add(t);let i=Q(16175803,{roughness:.6}),s=Q(3809815,{roughness:.55}),r=Q(15305370,{roughness:.8}),a=Q(16052714),n=Q(14240063,{roughness:.45}),l=jt(64,64,(x,b,y)=>{x.fillStyle="#f4f2ea",x.fillRect(0,0,b,y),x.fillStyle="#6ea77a";for(let S=0;S<y;S+=16)x.fillRect(0,S,b,8)});l.wrapS=l.wrapT=Ri,l.repeat.set(3,2.2);let o=Q(16777215,{map:l,roughness:.85}),h=l.clone();h.repeat.set(2,1),h.needsUpdate=!0;let u=Q(16777215,{map:h,roughness:.85}),d={bodyY:.62};for(let x of[-1,1]){let b=mt(x*.095,.62,0);b.add(V(F.capsule(.066,.36),i,{y:-.25})),b.add(V(F.cyl(.07,.068,.12),a,{y:-.49})),b.add(V(F.sphere(1,16,12),n,{y:-.57,z:.035,sx:.085,sy:.06,sz:.13})),t.add(b),x<0?d.legR=b:d.legL=b}let c=mt(0,d.bodyY,0);t.add(c),d.body=c,c.add(V(F.cyl(.175,.205,.17,20),r,{y:0})),c.add(V(F.cyl(.15,.19,.36,20),o,{y:.24})),c.add(V(F.sphere(.152,20,10),o,{y:.41,sy:.45})),c.add(V(F.cyl(.05,.055,.08),i,{y:.47}));for(let x of[-1,1]){let b=mt(x*.19,.38,0);b.add(V(F.capsule(.058,.1),u,{y:-.08})),b.add(V(F.capsule(.043,.16),i,{y:-.26})),b.add(V(F.sphere(.05,12,10),i,{y:-.39})),c.add(b),x<0?d.armR=b:d.armL=b}let p=mt(0,.5,0);c.add(p),d.head=p,p.add(V(F.sphere(.24,32,24),i,{y:.2,sy:.96}));for(let x of[-1,1])p.add(V(F.sphere(.045,10,8),i,{x:x*.235,y:.18,sz:.6}));for(let x of[-1,1]){let b=so(.052);b.position.set(x*.088,.19,.214),b.rotation.y=x*.28,p.add(b),p.add(V(F.sphere(1,10,8),Q(15899290,{opacity:.65,roughness:1}),{x:x*.15,y:.115,z:.18,sx:.045,sy:.022,sz:.02,ry:x*.6,shadow:!1})),p.add(V(F.capsule(.007,.04,2,6),s,{x:x*.09,y:.265,z:.215,rz:Math.PI/2+x*.18,shadow:!1}))}p.add(V(F.torus(.022,.006,6,12,Math.PI),Q(10107701),{y:.1,z:.232,rz:Math.PI,shadow:!1}));let v=new si(.262,32,20,0,Math.PI*2,0,Math.PI*.62);p.add(V(v,s,{y:.2,z:-.01,rx:-.78})),p.add(V(F.sphere(.25,24,16),s,{y:.13,z:-.08,sx:1.03,sy:.9,sz:.92}));let _=[[-.12,.3],[-.04,.315],[.05,.31],[.13,.295]];for(let[x,b]of _)p.add(V(F.sphere(1,12,10),s,{x,y:b,z:.19,sx:.07,sy:.075,sz:.05,rz:x*1.4}));for(let x of[-1,1])p.add(V(F.capsule(.045,.14,4,8),s,{x:x*.215,y:.1,z:.07,rz:x*.12}));let g=mt(0,.26,-.22);p.add(g),g.add(V(F.torus(.035,.016,8,16),Q(9329368,{roughness:.3,emissive:3807856,emissiveIntensity:.6}),{rx:Math.PI/2-.4})),g.add(V(F.capsule(.045,.12,4,8),s,{y:-.09,z:-.04,rx:.5})),d.tail=g,t.scale.setScalar(1.12);function f(x,b){b.swimming?Hs(d,b,x):Ss(d,b,x,{stride:.95,armSwing:.85,bob:.045});let y=b.action;if(y&&y.name==="wave"){let S=Math.sin(Math.min(1,y.k)*Math.PI);d.armL.rotation.z=2.7*S+Math.sin(b.t*14)*.3*S,d.armL.rotation.x=-.2*S,d.head.rotation.z=Math.sin(b.t*4)*.1*S}else d.head.rotation.z=0;d.tail.rotation.x=.25+Math.sin(d.phase*2)*.15*d.blend+d.air*.5,Gs(e,b,x)}return{root:e,update:f,height:1.72}}function sp(){let e=new ht,t=new ht;e.add(t);let i=jt(256,128,(w,m,M)=>{w.fillStyle="#ecd6ad",w.fillRect(0,0,m,M);let D=7,C=()=>(D=(D*9301+49297)%233280)/233280;w.fillStyle="#7d4f2e";for(let B=0;B<16;B++)w.beginPath(),w.ellipse(C()*m,C()*M,10+C()*18,7+C()*12,C()*3,0,Math.PI*2),w.fill();w.globalAlpha=.15,w.strokeStyle="#6b4526";for(let B=0;B<400;B++){let J=C()*m,z=C()*M;w.beginPath(),w.moveTo(J,z),w.lineTo(J+3,z+5),w.stroke()}}),s=Q(16777215,{map:i,roughness:.9}),r=Q(15719606,{roughness:.9}),a=Q(8212270,{roughness:.9}),n=Q(5978658,{roughness:.7}),l=Q(16761946,{emissive:16754224,emissiveIntensity:1.6,roughness:.4}),o=Q(5795898,{roughness:1,flat:!0}),h={},u=mt(0,1,0);t.add(u),h.body=u,u.add(V(F.capsule(.62,1.3,8,20),s,{rx:Math.PI/2}));for(let w of[-1,1])for(let m of[-.55,0,.55])u.add(V(F.box(.04,.4,.4),n,{x:w*.605,y:.12,z:m})),u.add(V(F.box(.03,.32,.32),l,{x:w*.625,y:.12,z:m,shadow:!1}));u.add(V(F.box(.34,.3,.04),l,{y:.15,z:-1.25,shadow:!1})),u.add(V(F.sphere(1,16,10),o,{y:.52,sx:.5,sy:.14,sz:1.05}));let d=jt(128,64,(w,m,M)=>{w.fillStyle="#6a4125",w.fillRect(0,0,m,M),w.fillStyle="#f7d992",w.fillRect(6,6,m-12,M-12),w.fillStyle="#3a2112",w.font="bold 44px serif",w.textAlign="center",w.textBaseline="middle",w.fillText("\u732B",m/2,M/2+2)});u.add(V(F.box(.5,.24,.05),Q(16777215,{map:d,emissive:4465152,emissiveIntensity:.4}),{y:.74,z:.55})),u.add(V(F.box(.04,.12,.04),n,{y:.6,z:.55}));let c=Q(16756810,{emissive:16747040,emissiveIntensity:2.2});for(let[w,m]of[[-.4,.75],[.4,.75],[-.4,-.75],[.4,-.75]])u.add(V(F.sphere(.07,10,8),c,{x:w,y:.55,z:m,sy:1.3,shadow:!1}));let p=mt(0,.05,1.05);u.add(p),h.head=p,p.add(V(F.sphere(.52,28,20),s,{sx:1.05,sy:.95,sz:.85}));for(let w of[-1,1]){p.add(V(F.cone(.16,.3,4),r,{x:w*.32,y:.48,z:-.02,rz:-w*.35,ry:Math.PI/4})),p.add(V(F.cone(.1,.18,4),Q(14129802),{x:w*.31,y:.47,z:.02,rz:-w*.35,ry:Math.PI/4,shadow:!1}));let m=V(F.sphere(.13,20,14),Q(16765498,{emissive:16757760,emissiveIntensity:.9,roughness:.2}),{x:w*.21,y:.17,z:.36,sz:.6,shadow:!1});m.add(V(F.sphere(1,10,8),Q(1313797),{z:.105,sx:.026,sy:.1,sz:.03,shadow:!1})),p.add(m);for(let M of[-1,0,1])p.add(V(F.cyl(.006,.006,.55,4),Q(16183264),{x:w*.5,y:0+M*.05,z:.3,rz:Math.PI/2+M*.12*w,ry:-w*.25,shadow:!1}))}p.add(V(F.sphere(.045,10,8),Q(13068906),{y:.04,z:.45,shadow:!1})),p.add(V(F.torus(.27,.07,8,28,Math.PI),Q(2757132),{y:-.02,z:.33,rz:Math.PI,sz:.6,shadow:!1})),p.add(V(F.torus(.27,.052,8,28,Math.PI),Q(16512746,{roughness:.3}),{y:-.02,z:.37,rz:Math.PI,sz:.5,shadow:!1}));let v=[];for(let w of[.6,0,-.6])for(let m of[-1,1]){let M=mt(m*.42,.62,w);M.add(V(F.capsule(.13,.3,4,10),s,{y:-.25})),M.add(V(F.sphere(.15,12,10),r,{y:-.5,z:.05,sy:.7})),t.add(M),v.push({l:M,phase:(w===0?Math.PI:0)+(m>0?Math.PI:0)})}let _=mt(0,1.05,-1.2);t.add(_);let g=[],f=_;for(let w=0;w<6;w++){let m=mt(0,w===0?0:.2,0);m.add(V(F.sphere(.13-w*.008,12,10),w%2?r:a,{y:.1,sy:1.3})),m.rotation.x=-.35,f.add(m),f=m,g.push(m)}t.scale.setScalar(.92);let x=0,b=0,y=0,S=0;function A(w,m){let M=Math.min(1,m.speed/4);b=It.lerp(b,M,1-Math.exp(-w*10)),y=It.lerp(y,m.grounded?0:1,1-Math.exp(-w*12)),x+=w*(5+m.speed*1.3)*(M>.05?1:0),v.forEach(({l:D,phase:C})=>{D.rotation.x=It.lerp(Math.sin(x+C)*.8*b,C?-.7:.7,y)}),u.position.y=1+Math.abs(Math.sin(x))*.07*b+Math.sin(m.t*2)*.015,u.rotation.x=-y*.15+.05*b,p.rotation.y=Math.sin(m.t*.7)*.1*(1-b),g.forEach((D,C)=>{D.rotation.z=Math.sin(m.t*3+C*.6)*.15*(.5+b)}),l.emissiveIntensity=1.5+Math.sin(m.t*3)*.1,m.landed&&(S=Math.min(.2,.06+Math.abs(m.landSpeed)*.01)),S=It.lerp(S,0,1-Math.exp(-w*12)),e.scale.set(1+S*.5,1-S,1+S*.5)}return{root:e,update:A,height:1.9}}var ro={classic:{name:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439",fur:15920611,shade:14933197,hat:12857642,hatBand:9314588,cloth:12857642},winter:{name:"\u0417\u0438\u043C\u043D\u0438\u0439",fur:15331578,shade:13622510,hat:8365784,hatBand:4153237,cloth:4880568},forest:{name:"\u041B\u0435\u0441\u043D\u043E\u0439",fur:15788760,shade:14537659,hat:5212730,hatBand:3037730,cloth:14251819},holiday:{name:"\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u0447\u043D\u044B\u0439",fur:16183270,shade:15129034,hat:14168634,hatBand:15251018,cloth:12067884}};function rp(e="classic"){let t=ro[e]||ro.classic,i=new ht,s=new ht;i.add(s);let r=Q(t.fur,{roughness:.95}),a=Q(t.shade,{roughness:1}),n=Q(t.hat,{roughness:.7}),l=Q(t.cloth,{roughness:.75}),o=Q(2825495),h=Q(7030054,{roughness:.85}),u=Q(4138774,{roughness:.9}),d=Q(16763248,{emissive:16754240,emissiveIntensity:2.4}),c={bodyY:.45};for(let C of[-1,1]){let B=mt(C*.36,.45,0);B.add(V(Ht(.28,2,.1,C+3),r,{y:-.2,sy:1.1})),B.add(V(F.sphere(.22,12,10),a,{y:-.4,z:.08,sy:.55}));for(let J of[-1,0,1])B.add(V(F.sphere(.035,6,4),Q(7166538),{x:J*.08,y:-.43,z:.27,sz:1.4,shadow:!1}));s.add(B),C<0?c.legR=B:c.legL=B}let p=mt(0,c.bodyY,0);s.add(p),c.body=p,p.add(V(Ht(.86,4,.06,1.3),r,{y:.74,sy:1.1,sz:.92})),p.add(V(F.torus(.76,.08,8,32),l,{y:.2,rx:Math.PI/2,sy:.92})),p.add(V(F.box(.52,.42,.08),l,{y:0,z:.7,rx:-.14}));let v=mt(0,1.3,.68);p.add(v),c.head=v;let _=[];for(let C of[-1,1]){let B=V(F.sphere(1,12,8),o,{x:C*.14,y:.05,z:.08,sx:.038,sy:.022,sz:.02,shadow:!1});v.add(B),_.push(B),v.add(V(F.sphere(1,10,8),Q(15771296,{opacity:.55,roughness:1}),{x:C*.26,y:-.03,z:.05,sx:.08,sy:.04,sz:.02,shadow:!1})),v.add(V(F.capsule(.013,.09,2,6),Q(13616821),{x:C*.14,y:.15,z:.07,rz:Math.PI/2-C*.15,shadow:!1})),v.add(V(Ht(.19,2,.14,C*5),r,{x:C*.15,y:-.13,z:.08,sx:1.3,sy:.8,sz:.7})),v.add(V(Ht(.2,2,.16,C*11),r,{x:C*.46,y:-.05,z:-.1,sy:1.3}))}v.add(V(F.sphere(.055,10,8),Q(15321528),{y:-.02,z:.15,shadow:!1})),v.add(V(Ht(.16,2,.16,9),r,{y:-.33,z:.05,sy:1.4}));let g=V(F.sphere(1,10,8),Q(5909026),{y:-.2,z:.16,sx:.06,sy:.001,sz:.02,shadow:!1});v.add(g);let f=mt(0,1.66,.02);if(p.add(f),f.add(V(F.cyl(.66,.7,.05,32),n,{rx:.08})),f.add(V(new si(.42,24,12,0,Math.PI*2,0,Math.PI/2),n,{y:.02,sy:.72})),f.add(V(F.cyl(.425,.425,.07,24),Q(t.hatBand),{y:.05})),e==="holiday")for(let C=0;C<8;C++){let B=C/8*Math.PI*2;f.add(V(F.sphere(.035,8,6),Q(16769162,{emissive:16760896,emissiveIntensity:1.5}),{x:Math.cos(B)*.43,y:.06,z:Math.sin(B)*.43,shadow:!1}))}e==="winter"&&f.add(V(Ht(.1,1,.2,2),Q(16777215),{y:.33})),e==="forest"&&f.add(V(F.sphere(1,8,6),Q(7909450,{flat:!0}),{x:.3,y:.2,z:.1,sx:.14,sy:.04,sz:.08,rz:.4}));let x=mt(0,.95,-.72);p.add(x),c.pack=x,x.add(V(F.box(1.15,1.3,.62),u,{z:-.3}));for(let C of[-1,1])for(let B of[-1,1])x.add(V(F.box(.1,.1,.68),h,{x:C*.58,y:B*.65,z:-.3}));for(let C of[-1,1])x.add(V(F.box(.1,1.4,.1),h,{x:C*.58,z:-.62}));for(let C of[-.2,.25])x.add(V(F.box(1.1,.06,.58),h,{y:C,z:-.3}));let b=new ks;b.moveTo(-.78,0),b.lineTo(0,.42),b.lineTo(.78,0),b.closePath();let y=V(new Ga(b,{depth:.86,bevelEnabled:!1}),Q(3878984,{roughness:.6}),{y:.66,z:-.73});x.add(y);let S=jt(128,160,(C,B,J)=>{C.fillStyle="#b7473c",C.fillRect(0,0,B,J),C.fillStyle="#f1dcc0",C.fillRect(10,10,B-20,J-20),C.fillStyle="#8a3a2e",C.beginPath(),C.ellipse(64,95,26,22,0,0,Math.PI*2),C.fill();for(let[z,k]of[[36,60],[54,48],[74,48],[92,60]])C.beginPath(),C.ellipse(z,k,9,11,0,0,Math.PI*2),C.fill()});x.add(V(F.box(.62,.78,.02),Q(16777215,{map:S,roughness:.9}),{y:-.05,z:-.63})),x.add(V(F.box(.36,.28,.02),d,{y:.42,z:-.63,shadow:!1}));for(let C of[-1,1]){let B=mt(C*.7,.3,-.35);B.add(V(F.cyl(.004,.004,.14,4),o,{y:-.07,shadow:!1})),B.add(V(F.cyl(.09,.09,.2,10),Q(16747082,{emissive:16738858,emissiveIntensity:2}),{y:-.24,shadow:!1})),x.add(B)}x.add(V(F.cyl(.12,.1,.18,10),Q(9067066),{x:-.35,y:-.5,z:-.62})),x.add(V(F.cyl(.09,.09,.5,10),Q(14206106),{x:.3,y:-.52,z:-.66,rz:Math.PI/2}));for(let C of[-1,1])x.add(V(F.box(.12,1.1,.05),Q(5913122),{x:C*.42,y:.1,z:.18,rx:.15}));let A=jt(64,64,(C,B,J)=>{C.fillStyle="#ffe2a0",C.fillRect(0,0,B,J),C.fillStyle="#a0461e",C.beginPath(),C.ellipse(32,40,13,11,0,0,Math.PI*2),C.fill();for(let[z,k]of[[17,22],[27,15],[38,15],[48,22]])C.beginPath(),C.ellipse(z,k,5,6,0,0,Math.PI*2),C.fill()}),w=new St({map:A,emissive:16754240,emissiveMap:A,emissiveIntensity:2.2});for(let C of[-1,1]){let B=mt(C*.8,1.08,.05);if(B.add(V(Ht(.22,2,.12,C*7),r,{y:-.3,sy:1.7})),B.add(V(Ht(.15,1,.1,C*8),a,{y:-.64})),p.add(B),C<0){c.armR=B;let J=mt(0,-.74,.08);J.add(V(F.cyl(.02,.02,.3,6),h,{y:-.05,shadow:!1})),J.add(V(F.cyl(.15,.15,.34,14),w,{y:-.36,shadow:!1})),J.add(V(F.cyl(.17,.17,.04,14),u,{y:-.18})),J.add(V(F.cyl(.17,.17,.04,14),u,{y:-.54})),B.add(J),c.lantern=J,c.lampMat=w}else c.armL=B}let m=[],M=Q(16765066,{emissive:16751162,emissiveIntensity:2.4});for(let C=0;C<2;C++){let B=new ht;B.add(V(F.sphere(.1,10,8),M,{shadow:!1})),B.add(V(F.cone(.08,.2,8),M,{y:.13,shadow:!1}));for(let J of[-1,1])B.add(V(F.sphere(.014,6,4),o,{x:J*.035,y:.01,z:.09,shadow:!1}));s.add(B),m.push(B)}s.scale.setScalar(1.02);function D(C,B){B.swimming?Hs(c,B,C):Ss(c,{...B,speed:B.speed*.8},C,{stride:.55,armSwing:.35,bob:.06,freq:.8}),p.rotation.z=Math.sin(c.phase)*.06*c.blend,p.rotation.y=0,g.scale.y=.001,_.forEach(z=>z.scale.y=.022);let J=B.action;if(J){let z=J.k,k=Math.sin(Math.min(1,z)*Math.PI);if(J.name==="swing"){let X=z<.3?-z/.3:-1+(z-.3)/.7*2.6;c.armR.rotation.x=It.lerp(c.armR.rotation.x,-1.2*X-.3,.6),c.armR.rotation.z=-.3-k*.5,p.rotation.y=-X*.35,g.scale.y=.03*k}else if(J.name==="cast"||J.name==="summon"||J.name==="path"){let X=J.name==="summon"?-1.5:J.name==="path"?-1.1:-2.6;c.armL.rotation.x=X*k,c.armR.rotation.x=X*k,c.armL.rotation.z=.5*k,c.armR.rotation.z=-.5*k,p.position.y+=k*.08,p.rotation.x=-.12*k,g.scale.y=.04*k,_.forEach(Z=>Z.scale.y=.022-.015*k)}else J.name==="wave"&&(c.armL.rotation.x=-.3*k,c.armL.rotation.z=2.5*k+Math.sin(B.t*12)*.35*k,v.rotation.z=Math.sin(B.t*3)*.08*k,g.scale.y=.05*k,_.forEach(X=>X.scale.y=.022-.016*k))}else v.rotation.z=0;(!J||J.name!=="swing")&&(c.lantern.rotation.x=-c.armR.rotation.x+Math.sin(B.t*2.4)*.12),c.lampMat.emissiveIntensity=2.2+(J&&J.name!=="wave"?Math.sin(Math.min(1,J.k)*Math.PI)*2.5:0),c.pack.rotation.x=Math.sin(c.phase*2)*.03*c.blend,m.forEach((z,k)=>{let X=B.t*(1.1+k*.3)+k*Math.PI,Z=J&&J.name==="summon"?1.2+Math.sin(Math.min(1,J.k)*Math.PI)*1.2:1.15;z.position.set(Math.cos(X)*Z,1.7+Math.sin(B.t*2+k)*.2,Math.sin(X)*Z),z.rotation.y=-X+Math.PI}),Gs(i,B,C)}return{root:i,update:D,height:2.4}}function ap(){let e=new ht,t=new ht;e.add(t);let i=new St({color:789010,roughness:.35,metalness:.1,transparent:!0,opacity:.93,emissive:1444388,emissiveIntensity:.6}),s=[[0,0],[.5,0],[.58,.12],[.56,.5],[.5,1],[.46,1.5],[.43,1.8],[.42,2.05],[.38,2.28],[.28,2.44],[.12,2.52],[0,2.54]].map(([S,A])=>new be(S,A)),r=V(new Ih(s,32),i);t.add(r);let a=Q(15986662,{roughness:.45}).clone(),n=.29,l=.36,o=.13,h=2.06,u=.3;t.add(V(F.sphere(1,32,24),a,{y:h,z:u,sx:n,sy:l,sz:o}));let d=(S,A)=>{let w=1-S*S/(n*n)-A*A/(l*l);return u+o*Math.sqrt(Math.max(0,w))-.004},c=(S,A,w,m,M,D=0)=>{let C=V(F.sphere(1,16,10),M,{x:S,y:h+A,z:d(S,A),sx:w,sy:m,sz:.012,rz:D,shadow:!1});return C.lookAt(new U(S*2.2,h+A*1.4,2)),C.rotation.z+=D,t.add(C),C},p=Q(7290771,{roughness:.6}),v=new St({color:328456,emissive:5974666,emissiveIntensity:0,roughness:1}),_=[];for(let S of[-1,1])_.push(c(S*.1,.05,.05,.03,v)),c(S*.1,.15,.028,.045,p,S*.3),c(S*.1,-.07,.022,.075,p);c(0,-.2,.05,.012,Q(3877427));let g=[];for(let S of[-1,1]){let A=mt(S*.4,1.55,.1);A.add(V(F.capsule(.05,.7,4,8),i,{y:-.4})),A.add(V(F.sphere(.07,10,8),i,{y:-.8})),A.rotation.z=S*.06,t.add(A),g.push(A)}let f=vi("rgba(150,90,220,0.55)","rgba(80,30,140,0)"),x=new gi(new ui({map:f,transparent:!0,depthWrite:!1,blending:Bt,opacity:0}));x.scale.set(3.4,4.2,1),x.position.set(0,1.4,-.2),t.add(x);let b=0;function y(S,A){var M,D;let w=A.t;b=It.lerp(b,A.mode==="hunt"?1:0,1-Math.exp(-S*4)),t.position.y=.12+Math.sin(w*1.6)*.07,t.rotation.x=Math.min(.22,A.speed*.028),t.rotation.z=Math.sin(w*.9)*.03,g.forEach((C,B)=>{let J=B?1:-1;C.rotation.x=It.lerp(.05,-1.35+Math.sin(w*5+B)*.08,b),C.rotation.z=J*(.06+.1*(1-b))}),v.emissiveIntensity=b*(.9+Math.sin(w*6)*.3),x.material.opacity=(.25+b*.5)*((M=A.appear)!=null?M:1);let m=(D=A.appear)!=null?D:1;i.opacity=.93*m,a.opacity=m,a.transparent=m<1,t.scale.set(.6+.4*m,m,.6+.4*m)}return{root:e,update:y,height:2.5}}function vi(e,t,i=128){let s=document.createElement("canvas");s.width=s.height=i;let r=s.getContext("2d"),a=r.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);a.addColorStop(0,e),a.addColorStop(1,t),r.fillStyle=a,r.fillRect(0,0,i,i);let n=new Fs(s);return n.colorSpace=ii,n}var Vh={gender:[["girl","\u0414\u0435\u0432\u043E\u0447\u043A\u0430"],["boy","\u041C\u0430\u043B\u044C\u0447\u0438\u043A"]],hairStyle:{girl:[["braids","\u041A\u043E\u0441\u0438\u0447\u043A\u0438"],["pony","\u0425\u0432\u043E\u0441\u0442\u0438\u043A"],["bob","\u041A\u0430\u0440\u0435"]],boy:[["messy","\u041B\u043E\u0445\u043C\u0430\u0442\u0430\u044F"],["spiky","\u0401\u0436\u0438\u043A"],["bob","\u0427\u0451\u043B\u043A\u0430"]]},hair:["#7a4a2a","#3a2217","#e8b86a","#c8683a","#f4f0f8","#9a6ad8"],sweater:["#b78ae8","#f07a5a","#6ab0e8","#f4c64a","#7ac88a","#f49ac0"],emblem:[["star","\u2B50"],["heart","\u2764\uFE0F"],["paw","\u{1F43E}"],["none","\u2014"]],ears:[["1","\u0414\u0430"],["0","\u041D\u0435\u0442"]],tail:[["1","\u0414\u0430"],["0","\u041D\u0435\u0442"]]},Gh={gender:"girl",hairStyle:"braids",hair:"#7a4a2a",sweater:"#b78ae8",emblem:"star",ears:"1",tail:"1"},op="masha-game-look-v1";function Wa(){try{return{...Gh,...JSON.parse(localStorage.getItem(op)||"{}")}}catch{return{...Gh}}}function lp(e){try{localStorage.setItem(op,JSON.stringify(e))}catch{}}var ao=e=>new Qe(e),v_=(e,t)=>"#"+ao(e).lerp(new Qe(16777215),t).getHexString(),hp=(e,t)=>"#"+ao(e).lerp(new Qe(0),t).getHexString();function np(e,t){return jt(256,256,(i,s,r)=>{i.fillStyle=e,i.fillRect(0,0,s,r),i.strokeStyle=hp(e,.18),i.lineWidth=3;for(let o=8;o<s;o+=16)for(let h=0;h<r;h+=12)i.beginPath(),i.moveTo(o-5,h),i.lineTo(o,h+8),i.lineTo(o+5,h),i.stroke();i.fillStyle=v_(e,.18);for(let o=0;o<300;o++)i.fillRect(Math.random()*s,Math.random()*r,2,2);let a=s*.5,n=r*.42,l=44;if(t==="star"){i.fillStyle="#f7d65a",i.strokeStyle="#c8962a",i.lineWidth=3,i.beginPath();for(let o=0;o<10;o++){let h=-Math.PI/2+o*Math.PI/5,u=o%2?l*.45:l;i.lineTo(a+Math.cos(h)*u,n+Math.sin(h)*u)}i.closePath(),i.fill(),i.stroke()}else if(t==="heart")i.fillStyle="#f0506a",i.beginPath(),i.moveTo(a,n+l*.8),i.bezierCurveTo(a-l*1.4,n-l*.2,a-l*.5,n-l*1.1,a,n-l*.35),i.bezierCurveTo(a+l*.5,n-l*1.1,a+l*1.4,n-l*.2,a,n+l*.8),i.fill();else if(t==="paw"){i.fillStyle="#fff4e8",i.beginPath(),i.ellipse(a,n+8,15,12,0,0,7),i.fill();for(let[o,h]of[[-16,-10],[-6,-20],[6,-20],[16,-10]])i.beginPath(),i.ellipse(a+o,n+h,6,7,0,0,7),i.fill()}})}function y_(){return jt(128,128,(e,t,i)=>{e.fillStyle="#7fa6d6",e.fillRect(0,0,t,i);for(let s=0;s<900;s++)e.fillStyle=Math.random()<.5?"rgba(255,255,255,.18)":"rgba(30,60,120,.18)",e.fillRect(Math.random()*t,Math.random()*i,1,3)})}function cp(e){let t={...Gh,...e||{}},i=t.gender==="girl",s=new ht,r=new ht;s.add(r);let a=Q(16308420,{roughness:.6}),n=Q(ao(t.hair).getHex(),{roughness:.55}),l=Q(ao(hp(t.hair,.2)).getHex(),{roughness:.6}),o=np(t.sweater,t.emblem);o.wrapS=Ri;let h=new St({map:o,roughness:.95}),u=np(t.sweater,"none");u.wrapS=u.wrapT=Ri,u.repeat.set(1,1);let d=new St({map:u,roughness:.95}),c=new St({map:y_(),roughness:.9}),p=Q(16184568,{roughness:.5}),v=Q(14207210,{roughness:.6}),_=Q(16447476,{roughness:.9}),g=Q(16103624,{roughness:.9}),f={bodyY:.52};for(let m of[-1,1]){let M=mt(m*.1,.52,0);M.add(V(F.capsule(.078,.3),c,{y:-.2})),M.add(V(F.cyl(.085,.09,.06,14),c,{y:-.39})),M.add(V(F.sphere(1,16,12),p,{y:-.46,z:.04,sx:.095,sy:.07,sz:.14})),M.add(V(F.box(.17,.03,.26),v,{y:-.515,z:.04})),i&&M.add(V(F.torus(.02,.008,6,10),Q(12101872),{y:-.41,z:.12,rx:.3,shadow:!1})),r.add(M),m<0?f.legR=M:f.legL=M}let x=mt(0,f.bodyY,0);r.add(x),f.body=x,x.add(V(F.cyl(.19,.2,.1,20),c,{y:0}));let b=V(F.cyl(.19,.225,.34,24),h,{y:.2});b.rotation.y=Math.PI,x.add(b),x.add(V(F.torus(.2,.035,8,24),d,{y:.04,rx:Math.PI/2})),x.add(V(F.sphere(.19,20,10),d,{y:.37,sy:.42})),x.add(V(F.torus(.075,.03,8,16),d,{y:.42,rx:Math.PI/2}));for(let m of[-1,1]){let M=mt(m*.22,.34,0);M.add(V(F.capsule(.075,.16),d,{y:-.12})),M.add(V(F.torus(.06,.025,6,12),d,{y:-.26,rx:Math.PI/2})),M.add(V(F.sphere(.055,12,10),a,{y:-.31})),x.add(M),m<0?f.armR=M:f.armL=M}if(t.tail==="1"){let m=mt(0,.06,-.2);x.add(m);let M=Ht(1,2,.12,4),D=[],C=m;for(let B=0;B<5;B++){let J=mt(0,.05,-.07);C.add(J),J.add(V(M,_,{sx:.085+B*.012,sy:.085+B*.012,sz:.1+B*.012})),D.push(J),C=J}f.tailSegs=D}let y=mt(0,.44,0);x.add(y),f.head=y,y.add(V(F.sphere(.27,32,24),a,{y:.24,sy:.95}));for(let m of[-1,1]){let M=so(.062,4860442);M.position.set(m*.1,.22,.24),M.rotation.y=m*.28,y.add(M),y.add(V(F.sphere(1,10,8),Q(15899290,{opacity:.7,roughness:1}),{x:m*.17,y:.14,z:.2,sx:.05,sy:.025,sz:.02,ry:m*.6,shadow:!1}))}y.add(V(F.torus(.024,.007,6,12,Math.PI),Q(10107701),{y:.12,z:.262,rz:Math.PI,shadow:!1})),y.add(V(F.sphere(.012,8,6),Q(15245456),{y:.17,z:.268,shadow:!1}));let S=new si(.29,32,20,0,Math.PI*2,0,Math.PI*.6);y.add(V(S,n,{y:.24,z:-.01,rx:-.72})),y.add(V(F.sphere(.28,24,16),n,{y:.17,z:-.09,sx:1.04,sy:.92,sz:.94}));let A=t.hairStyle;if(A==="messy"||A==="spiky"){let m=Ht(1,1,.25,9),M=A==="spiky"?14:10;for(let D=0;D<M;D++){let C=D/M*Math.PI*2,B=.35+D%3*.12,J=Math.cos(C)*.2,z=Math.sin(C)*.2-.03;z>.14&&Math.abs(J)<.12||y.add(A==="spiky"?V(F.cone(.05,.14,6),n,{x:J,y:.36+B*.1,z,rx:z*2.5,rz:-J*2.5}):V(m,D%2?n:l,{x:J*1.1,y:.3+B*.12,z,sx:.09,sy:.07,sz:.09}))}for(let[D,C]of[[-.12,.34],[-.03,.36],[.07,.355],[.15,.33]])y.add(V(F.sphere(1,10,8),n,{x:D,y:C,z:.22,sx:.075,sy:.07,sz:.05,rz:D*2}))}else{for(let[m,M]of[[-.14,.34],[-.05,.355],[.05,.35],[.14,.335]])y.add(V(F.sphere(1,12,10),n,{x:m,y:M,z:.215,sx:.08,sy:.08,sz:.055,rz:m*1.4}));for(let m of[-1,1])y.add(V(F.capsule(.05,.16,4,8),n,{x:m*.245,y:.13,z:.07,rz:m*.12}))}if(f.braids=[],A==="braids")for(let m of[-1,1]){let M=mt(m*.2,.12,-.12);y.add(M);for(let D=0;D<4;D++)M.add(V(F.sphere(1,10,8),n,{x:m*.02*D,y:-.07*D-.02,z:-.02*D,sx:.05-D*.004,sy:.055,sz:.05-D*.004}));M.add(V(F.sphere(.03,10,8),Q(10124008,{roughness:.3,emissive:3807856,emissiveIntensity:.4}),{x:m*.07,y:-.31,z:-.07})),M.add(V(F.cone(.04,.09,8),n,{x:m*.075,y:-.37,z:-.08,rx:Math.PI})),f.braids.push(M)}else if(A==="pony"){let m=mt(0,.32,-.25);y.add(m),m.add(V(F.torus(.04,.016,8,16),Q(10124008,{roughness:.3}),{rx:Math.PI/2-.4})),m.add(V(F.capsule(.055,.16,4,8),n,{y:-.11,z:-.05,rx:.5})),f.braids.push(m)}if(i){let m=new ht;for(let M=0;M<6;M++){let D=M*Math.PI/3;m.add(V(F.sphere(1,8,6),Q(16777215,{roughness:.5}),{x:Math.cos(D)*.035,y:Math.sin(D)*.035,sx:.028,sy:.028,sz:.012,shadow:!1}))}m.add(V(F.sphere(.018,8,6),Q(16238666),{z:.01,shadow:!1})),m.position.set(.2,.38,.12),m.rotation.set(-.3,.7,0),y.add(m)}if(t.ears==="1"){f.ears=[];for(let m of[-1,1]){let M=mt(m*.16,.44,-.02);M.rotation.z=-m*.35,M.add(V(F.cone(.085,.19,4),_,{y:.07,sz:.55,ry:Math.PI/4})),M.add(V(F.cone(.05,.13,4),g,{y:.06,z:.02,sz:.3,ry:Math.PI/4})),M.add(V(Ht(1,1,.2,m+3),_,{y:.005,sx:.07,sy:.04,sz:.05})),y.add(M),f.ears.push(M)}}r.scale.setScalar(1.05);function w(m,M){M.swimming?Hs(f,M,m):Ss(f,M,m,{stride:.9,armSwing:.9,bob:.05});let D=M.action;if(D&&D.name==="wave"){let C=Math.sin(Math.min(1,D.k)*Math.PI);f.armL.rotation.z=2.7*C+Math.sin(M.t*14)*.3*C,f.armL.rotation.x=-.2*C,f.head.rotation.z=Math.sin(M.t*4)*.1*C}else f.head.rotation.z=0;f.tailSegs&&f.tailSegs.forEach((C,B)=>{C.rotation.y=Math.sin(M.t*3-B*.6)*(.25-f.blend*.15),C.rotation.x=-.25+f.blend*.2+f.air*.3}),f.ears&&f.ears.forEach((C,B)=>{C.rotation.x=Math.max(0,Math.sin(M.t*1.3+B*2))**8*.4}),f.braids.forEach((C,B)=>{C.rotation.x=.1+Math.sin(f.phase*2+B)*.18*f.blend+f.air*.4}),Gs(s,M,m)}return{root:s,update:w,height:1.55}}var x_=F.sphere(1,16,12),__=F.sphere(1,10,8),up=(e,t,i,s=12)=>F.cyl(e,t,i,s),no,Wh,jh=new Map;function ea(e,t,i,s){let r=new Ch(i.map(n=>new U(...n))),a=V(new Uh(r,8,s,5,!1),t);return e.add(a),a}function S_(){return no||(no=jt(256,256,(e,t,i)=>{e.fillStyle="#392b49",e.fillRect(0,0,t,i);for(let s=0;s<1200;s++)e.fillStyle=s%4?"rgba(10,7,20,.13)":"rgba(168,117,179,.12)",e.fillRect(s*137.51%t,s*71.37%i,s%5?2:4,1+s%3)}),no)}function dp(e,t){let i=e+t;if(jh.has(i))return jh.get(i);let s=jt(64,64,(r,a,n)=>{let l=r.createRadialGradient(a/2,n/2,2,a/2,n/2,a/2);l.addColorStop(0,e),l.addColorStop(.26,t),l.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=l,r.fillRect(0,0,a,n)});return jh.set(i,s),s}function M_(){if(Wh)return Wh;let e=24,t=[],i=[],s=[];for(let a=0;a<=e;a++){let n=a/e*Math.PI*2,l=Math.sin(n),o=Math.cos(n),h=[.03,.01,.1,.06,0,.12,.035,.09][a%8];t.push(l*.62,1.12,o*.52,l*(.78+h*.2),h,o*(.67+h*.2)),i.push(a/e,1,a/e,0)}for(let a=0;a<e;a++){let n=a*2;s.push(n,n+1,n+2,n+1,n+3,n+2)}let r=new yt;return r.setAttribute("position",new $e(t,3)),r.setAttribute("uv",new $e(i,2)),r.setIndex(s),r.computeVertexNormals(),Wh=r,r}function pp(){let e=new ht,t=new ht;e.add(t);let i=[15184013,14260855,15776920].map(k=>Q(k,{roughness:.9})),s=Q(13201255,{roughness:1}),r=Q(1512213,{roughness:.93}),a=Q(3744801,{roughness:1}),n=Q(16772832,{roughness:.45}),l=Q(9724222,{roughness:.36}),o=Q(2103319,{roughness:.35}),h=Q(16777215,{emissive:16777215,emissiveIntensity:.5}),u=Q(16777215,{roughness:.98,map:S_()}),d=Q(4797016,{roughness:.96}),c=Q(1775401,{roughness:.95}),p=Q(7888512,{roughness:1}),v=Q(10121290,{roughness:.95}),_=Q(9529407,{roughness:.4,metalness:.55}),g=Q(12154165,{roughness:.38,emissive:16754750,emissiveIntensity:.8}),f=Q(16772524,{roughness:.3,emissive:16754750,emissiveIntensity:2.7}),x=Q(14283263,{emissive:5217535,emissiveIntensity:2.5,roughness:.35}),b=Q(2573164,{roughness:.7}),y=dp("rgba(255,255,255,.95)","rgba(255,191,89,.48)"),S=dp("rgba(255,255,255,.95)","rgba(92,167,255,.55)"),A={bodyY:.48},w=(k,X,Z,he,ee,te,pe,ke,Le=!0)=>{let xt=V(Le?x_:__,X,{x:Z,y:he,z:ee,sx:te,sy:pe,sz:ke,shadow:Le});return k.add(xt),xt};for(let k of[-1,1]){let X=mt(k*.34,.49,0);X.add(V(up(.19,.23,.53),c,{y:-.22})),w(X,c,0,-.46,.15,.3,.16,.39),X.add(V(F.box(.4,.045,.5),_,{y:-.57,z:.15})),t.add(X),k<0?A.legR=X:A.legL=X}let m=mt(0,A.bodyY,0);A.body=m,t.add(m),m.add(V(M_(),u)),w(m,d,0,1.02,-.04,.7,.39,.49);for(let k of[-1,1])m.add(V(F.cone(.19,.85,5),c,{x:k*.66,y:.4,z:-.05,rz:k*.08})),m.add(V(F.cone(.18,.46,5),d,{x:k*.48,y:1.13,z:-.28,rz:-k*.22}));for(let k=0;k<12;k++){let X=k/12*Math.PI*2;m.add(V(F.cone(.14+k%3*.02,.32+k%4*.045,5),k%3?c:d,{x:Math.sin(X)*.66,y:.04,z:Math.cos(X)*.55,ry:X,rz:Math.sin(X)*.13}))}m.add(V(F.torus(.62,.065,8,28),v,{y:.57,rx:Math.PI/2,sy:.85}));for(let k of[-1,1]){ea(m,v,[[k*.55,1.36,.15],[k*.4,1.11,.47],[k*.26,.85,.6],[k*.32,.56,.6]],.035),w(m,_,k*.36,.3,.57,.07,.085,.06),m.add(V(F.box(.17,.3,.012),d,{x:k*.48,y:.38,z:.53,rz:k*.2}));for(let X=0;X<3;X++)m.add(V(F.box(.1,.012,.013),p,{x:k*.48,y:.28+X*.08,z:.541,rz:k*.2}))}ea(m,v,[[-.37,1.12,.51],[-.1,.95,.64],[.19,.78,.64],[.45,.57,.5]],.027),ea(m,v,[[-.52,1.08,-.31],[-.22,.87,-.56],[.17,.66,-.65],[.5,.44,-.46]],.03),ea(m,v,[[.51,1.07,-.32],[.23,.86,-.56],[-.15,.63,-.67],[-.46,.43,-.48]],.03);let M=jt(128,128,(k,X,Z)=>{k.clearRect(0,0,X,Z),k.strokeStyle="#ab74d2",k.lineWidth=13,k.lineCap="round",k.beginPath();for(let he=0;he<=80;he++){let ee=he/80,te=ee*Math.PI*5.2,pe=4+ee*47,ke=X/2+Math.cos(te)*pe,Le=Z/2+Math.sin(te)*pe;he?k.lineTo(ke,Le):k.moveTo(ke,Le)}k.stroke()});m.add(V(new Ci(.56,.56),new di({map:M,transparent:!0,side:Gt}),{y:.54,z:.78,shadow:!1}));let D=[],C=[];for(let k=0;k<3;k++){let X=mt([0,.05,-.04][k],[1.4,1.94,2.43][k],[.13,-.035,-.16][k]);X.scale.setScalar([1,.87,.78][k]),m.add(X),D.push(X),w(X,i[k],0,0,0,.49,.43,.38),w(X,r,0,.03,-.3,.48,.38,.22);for(let he of[-1,1]){w(X,r,he*.43,.16,-.09,.14,.28,.25),w(X,a,he*.42,-.06,-.22,.15,.19,.2),w(X,i[k],he*.51,-.04,-.02,.12,.17,.08),w(X,s,he*.53,-.05,.05,.045,.065,.012,!1),w(X,i[k],he*.27,-.14,.28,.17,.105,.095),w(X,s,he*.29,-.12,.37,.1,.055,.012,!1);let ee=w(X,n,he*.2,.08,.35,.135,.14,.065,!1);ee.rotation.z=-he*.08;let te=k===1?.02:0;w(X,l,he*.2+te,.079,.407,.074,.09,.03,!1),w(X,o,he*.2+te,.08,.435,.047,.073,.018,!1),w(X,h,he*.2+te-.023,.12,.45,.02,.026,.009,!1),ea(X,r,[[he*.05,.195,.4],[he*.17,.235,.43],[he*.315,.29,.38],[he*.39,.3,.32]],.062),w(X,r,he*.32,.285,.34,.13,.065,.07),w(X,r,he*.14,-.205,.43,.19,.085,.12),ea(X,r,[[he*.07,-.2,.47],[he*.22,-.21,.47],[he*.39,-.19,.4],[he*.51,-.11,.3]],.073),X.add(V(F.cone(.065,.19,8),r,{x:he*.52,y:-.09,z:.29,rz:-he*.48}));for(let pe=0;pe<3;pe++)X.add(V(F.cone(.08,.24-pe*.025,7),pe===1?a:r,{x:he*(.15+pe*.105),y:-.36-pe*.02,z:.3-pe*.045,rz:Math.PI+he*.13}))}w(X,i[k],0,-.07,.41,.14,.15,.15),w(X,s,0,-.13,.54,.075,.03,.018,!1);let Z=w(X,Q(5386032),0,-.275,.42,.105,.024,.02,!1);if(C.push(Z),w(X,r,0,-.33,.27,.37,.17,.18),X.add(V(F.cone(.22,.32,9),r,{y:-.52,z:.32,rz:Math.PI})),w(X,a,0,-.38,.44,.1,.15,.055),k===2)for(let[he,ee,te]of[[-.09,.08,.05],[.16,-.04,.04],[.02,-.2,.03]])w(X,a,he,.4,ee,te,te*.4,te,!1)}for(let k of[-1,1]){let X=mt(k*.69,1.11,.02);m.add(X),X.add(V(F.capsule(.2,.49,6,10),d,{y:-.28,rz:k*.24})),w(X,c,k*.1,-.55,.08,.23,.12,.22),w(X,i[0],k*.09,-.66,.21,.24,.2,.24);for(let ee=0;ee<3;ee++)w(X,i[0],k*.09+(ee-1)*.11,-.68,.43,.07,.095,.07);k<0?A.armR=X:A.armL=X;let Z=mt(k*.91,.58,.08);m.add(Z),Z.add(V(up(.025,.025,.2,6),v,{y:-.1})),Z.add(V(F.torus(.13,.018,5,12,Math.PI),_,{y:-.2,rz:Math.PI})),Z.add(V(F.box(.31,.36,.3),g,{y:-.43,shadow:!1}));for(let ee of[-.64,-.22])Z.add(V(F.box(.38,.055,.36),_,{y:ee}));Z.add(V(F.cone(.29,.13,4),_,{y:-.16,ry:Math.PI/4}));for(let ee of[-.175,.175])for(let te of[-.165,.165])Z.add(V(F.box(.03,.43,.03),_,{x:ee,y:-.43,z:te}));for(let ee of[-.185,.185])Z.add(V(F.box(.35,.025,.025),_,{y:-.43,z:ee}));w(Z,f,0,-.43,.19,.065,.12,.015,!1);let he=new gi(new ui({map:y,color:16761963,transparent:!0,opacity:.65,blending:Bt,depthWrite:!1}));he.position.set(0,-.43,.04),he.scale.set(.85,.85,1),Z.add(he)}let B=[];for(let k=0;k<3;k++){let X=new ht,Z=new gi(new ui({map:S,transparent:!0,opacity:.76,blending:Bt,depthWrite:!1}));Z.scale.set(.72,.8,1),X.add(Z),w(X,x,0,0,.02,.16,.2,.11,!1),X.add(V(F.cone(.1,.26,8),x,{y:.24,z:.02,rz:-.16,shadow:!1}));for(let he of[-1,1])w(X,b,he*.045,.01,.13,.014,.02,.01,!1);t.add(X),B.push(X)}let J=[[-1.2,2.49,.02],[1.2,2.2,.02],[-1.22,1.72,.02]];function z(k,X){X.swimming?Hs(A,X,k):Ss(A,{...X,speed:X.speed*.8},k,{stride:.48,armSwing:.5,bob:.032,freq:.82});let Z=X.action,he=Z&&["fear","hypnosis","glare"].includes(Z.name)?Math.sin(Math.min(1,Z.k)*Math.PI):0;he&&(A.armL.rotation.x=-1.8*he,A.armR.rotation.x=-1.8*he,A.armL.rotation.z=-.75*he,A.armR.rotation.z=.75*he),D.forEach((ee,te)=>{ee.rotation.y=Math.sin(X.t*(1.1+te*.18)+te*1.6)*.06+(te-1)*.07,ee.rotation.z=Math.sin(X.t*1.7+te*2)*.028+he*(te-1)*.09,C[te].scale.y=.024+he*.045}),B.forEach((ee,te)=>{let pe=X.t*(.85+te*.08)+te*Math.PI*2/3,ke=J[te];ee.position.set(ke[0]+Math.sin(pe)*(.09+he*.14),ke[1]+Math.sin(X.t*2+te)*.12,ke[2]+Math.cos(pe)*.06),ee.rotation.z=Math.sin(X.t*2.5+te)*.15}),Gs(e,X,k)}return{root:e,update:z,height:3.25}}var b_=e=>{try{return e&&e!=="classic"?JSON.parse(e):Wa()}catch{return Wa()}},ri=[{id:"kid",name:"\u041C\u043E\u0439 \u043A\u043E\u0442\u0438\u043A",rarity:"\u041C\u041E\u0419 \u0413\u0415\u0420\u041E\u0419",rarityClass:"rare",about:"\u0422\u0432\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0433\u0435\u0440\u043E\u0439! \u0412\u044B\u0431\u0435\u0440\u0438, \u0434\u0435\u0432\u043E\u0447\u043A\u0430 \u0438\u043B\u0438 \u043C\u0430\u043B\u044C\u0447\u0438\u043A, \u043F\u0440\u0438\u0447\u0451\u0441\u043A\u0443, \u0441\u0432\u0438\u0442\u0435\u0440, \u0443\u0448\u043A\u0438 \u0438 \u0445\u0432\u043E\u0441\u0442\u0438\u043A \u043A\u043E\u0442\u0438\u043A\u0430.",ability:"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430",abilityText:"Q \u2014 \u043F\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u0432 \u043F\u0440\u0435\u0434\u043C\u0435\u0442, G \u2014 \u043F\u043E\u043C\u0430\u0445\u0430\u0442\u044C. \u041F\u0440\u044B\u0433\u0443\u0447\u0438\u0439 \u0438 \u043B\u043E\u0432\u043A\u0438\u0439, \u043A\u0430\u043A \u041C\u0430\u0448\u0430.",tags:["\u0421\u0432\u043E\u0439 \u0441\u043A\u0438\u043D","\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430"],build:e=>cp(b_(e)),radius:.42,height:1.6,custom:!0,bot:!1,cam:{distance:6,height:1.4}},{id:"masha",name:"\u041C\u0430\u0448\u0430",rarity:"\u0413\u0415\u0420\u041E\u0419",rarityClass:"hero",about:"\u0421\u043C\u0435\u043B\u0430\u044F \u0434\u0435\u0432\u043E\u0447\u043A\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043D\u0430\u0448\u043B\u0430 \u0434\u043E\u0440\u043E\u0433\u0443 \u0432 \u043C\u0438\u0440 \u0434\u0443\u0445\u043E\u0432. \u041B\u0451\u0433\u043A\u0430\u044F, \u043F\u0440\u044B\u0433\u0443\u0447\u0430\u044F \u0438 \u043E\u0447\u0435\u043D\u044C \u0431\u044B\u0441\u0442\u0440\u0430\u044F \u043D\u0430 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430\u0445.",ability:"\u041B\u0451\u0433\u043A\u0438\u0435 \u043D\u043E\u0433\u0438",abilityText:"\u041F\u0440\u044B\u0433\u0430\u0435\u0442 \u0432\u044B\u0448\u0435 \u0432\u0441\u0435\u0445 \u0438 \u0440\u0435\u0437\u043A\u043E \u0441\u0442\u0430\u0440\u0442\u0443\u0435\u0442. E \u2014 \u0440\u044B\u0432\u043E\u043A, G \u2014 \u043F\u043E\u043C\u0430\u0445\u0430\u0442\u044C.",tags:["\u041F\u0440\u044B\u0436\u043E\u043A","\u0412\u044B\u043D\u043E\u0441\u043B\u0438\u0432\u043E\u0441\u0442\u044C"],build:ip,radius:.42,height:1.72,cam:{distance:6.2,height:1.45}},{id:"catbus",name:"\u041D\u044D\u043A\u043E\u0411\u0443\u0441",rarity:"\u042D\u041F\u0418\u0427\u0415\u0421\u041A\u0418\u0419",rarityClass:"epic",about:"\u0414\u0443\u0445-\u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0443\u0432\u0435\u0437\u0451\u0442 \u0442\u0435\u0431\u044F \u0432 \u0441\u0430\u043C\u044B\u0435 \u0443\u0434\u0438\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043C\u0435\u0441\u0442\u0430. \u0412\u0441\u0435\u0433\u0434\u0430 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442, \u043A\u043E\u0433\u0434\u0430 \u0442\u044B \u0432 \u043F\u0443\u0442\u0438.",ability:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u043D\u043E\u0439 \u0440\u0435\u0439\u0441",abilityText:"\u0421\u0430\u043C\u044B\u0439 \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u043D\u0430 \u043F\u0440\u044F\u043C\u043E\u0439, \u043D\u043E \u0442\u044F\u0436\u0451\u043B\u044B\u0439 \u0438 \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E \u043F\u043E\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442. E \u2014 \u0434\u043B\u0438\u043D\u043D\u044B\u0439 \u0440\u044B\u0432\u043E\u043A.",tags:["\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C","\u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435"],build:sp,radius:.85,height:1.9,cam:{distance:8.2,height:2.1,side:.6}},{id:"moti",name:"\u0414\u044F\u0434\u044E\u0448\u043A\u0430 \u041C\u043E\u0442\u0438",rarity:"\u042D\u041F\u0418\u0427\u0415\u0421\u041A\u0418\u0419",rarityClass:"epic",about:"\u0414\u043E\u0431\u0440\u043E\u0434\u0443\u0448\u043D\u044B\u0439 \u0432\u0435\u043B\u0438\u043A\u0430\u043D, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u043E\u0441\u0438\u0442 \u043D\u0430 \u0441\u043F\u0438\u043D\u0435 \u0443\u044E\u0442\u043D\u044B\u0439 \u043F\u0440\u0438\u044E\u0442 \u0434\u043B\u044F \u0434\u0443\u0445\u043E\u0432. \u0422\u0430\u043C \u0432\u0441\u0435\u0433\u0434\u0430 \u043D\u0430\u0439\u0434\u0451\u0442\u0441\u044F \u043C\u0435\u0441\u0442\u043E \u0434\u043B\u044F \u043D\u043E\u0432\u044B\u0445 \u0434\u0440\u0443\u0437\u0435\u0439.",ability:"\u0423\u044E\u0442\u043D\u044B\u0439 \u043F\u0440\u0438\u044E\u0442",abilityText:"\u041A\u0443\u043F\u043E\u043B, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0411\u0435\u0437\u043B\u0438\u043A \u043D\u0438\u043A\u043E\u0433\u043E \u043D\u0435 \u043F\u043E\u0439\u043C\u0430\u0435\u0442. \u0415\u0449\u0451 3 \u0443\u043C\u0435\u043D\u0438\u044F: 2, 3, 4, F.",tags:["\u0417\u0430\u0449\u0438\u0442\u0430","\u041B\u0435\u0447\u0435\u043D\u0438\u0435","\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430","\u041A\u043E\u043C\u0430\u043D\u0434\u0430"],build:e=>rp(e),radius:.85,height:2.4,skins:ro,helper:!0,cam:{distance:8.4,height:3,side:1.3}},{id:"brothers",name:"\u0422\u0440\u0438 \u0411\u0440\u0430\u0442\u0430",rarity:"\u0420\u0415\u0414\u041A\u0418\u0419",rarityClass:"rare",about:"\u0422\u0440\u0438 \u0443\u043F\u0440\u044F\u043C\u044B\u0445 \u0434\u0443\u0445\u0430 \u0432 \u043E\u0434\u043D\u043E\u043C \u043F\u043B\u0430\u0449\u0435. \u0421\u043F\u043E\u0440\u044F\u0442 \u043C\u0435\u0436\u0434\u0443 \u0441\u043E\u0431\u043E\u0439, \u043F\u0443\u0433\u0430\u044E\u0442 \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u0432 \u0438 \u043E\u0434\u0438\u043D \u0440\u0430\u0437 \u0437\u0430 \u0444\u0430\u0437\u0443 \u0432\u044B\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0438\u0437 \u043F\u043E\u0438\u043C\u043A\u0438.",ability:"\u0421\u0442\u0440\u0430\u0445 \u0438 \u0433\u0438\u043F\u043D\u043E\u0437",abilityText:"1 \u2014 \u0432\u043E\u043B\u043D\u0430 \u0441\u0442\u0440\u0430\u0445\u0430; 2 \u2014 \u0433\u0438\u043F\u043D\u043E\u0437 \u0441\u0431\u0438\u0432\u0430\u0435\u0442 \u043F\u0440\u0435\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0441 \u043F\u0443\u0442\u0438; 3 \u2014 \u0433\u0440\u043E\u0437\u043D\u044B\u0439 \u0432\u0437\u0433\u043B\u044F\u0434 \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0443. \u0423\u043F\u0440\u044F\u043C\u0441\u0442\u0432\u043E \u0441\u043F\u0430\u0441\u0430\u0435\u0442 \u043E\u0442 \u043F\u0435\u0440\u0432\u043E\u0439 \u043F\u043E\u0438\u043C\u043A\u0438 \u0432 \u043A\u0430\u0436\u0434\u043E\u0439 \u0444\u0430\u0437\u0435.",tags:["\u0421\u0442\u0440\u0430\u0445","\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C","\u041A\u043E\u043C\u0430\u043D\u0434\u0430"],build:pp,radius:.7,height:3.25,cam:{distance:8.6,height:3,side:.9}}],Jt={id:"noface",name:"\u0411\u0435\u0437\u043B\u0438\u043A",rarity:"\u041E\u0425\u041E\u0422\u041D\u0418\u041A",rarityClass:"hunter",about:"\u0422\u0438\u0445\u0438\u0439 \u0434\u0443\u0445 \u0432 \u0431\u0435\u043B\u043E\u0439 \u043C\u0430\u0441\u043A\u0435. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0438\u0449\u0435\u0442 \u0441\u043F\u0440\u044F\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044F, \u043F\u043E\u0442\u043E\u043C \u0434\u043E\u0433\u043E\u043D\u044F\u0435\u0442. \u0423\u043C\u0435\u0435\u0442 \u043F\u0440\u0438\u0442\u0432\u043E\u0440\u044F\u0442\u044C\u0441\u044F \u0433\u0435\u0440\u043E\u044F\u043C\u0438 \u0438 \u0432\u0435\u0449\u0430\u043C\u0438.",ability:"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430",abilityText:"\u0418\u0433\u0440\u0430\u0435\u0448\u044C \u0432\u043E\u0434\u044F\u0449\u0438\u043C! 1 \u2014 \u0441\u0442\u0430\u0442\u044C \u0433\u0435\u0440\u043E\u0435\u043C, 2 \u2014 \u0441\u0442\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u043C, E \u2014 \u0440\u044B\u0432\u043E\u043A (3 \u0437\u0430\u0440\u044F\u0434\u0430), \u041F\u0440\u043E\u0431\u0435\u043B \u2014 \u0432\u0437\u043B\u0435\u0442\u0435\u0442\u044C.",tags:["\u041E\u0445\u043E\u0442\u0430","\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430","\u041F\u043E\u043B\u0451\u0442"],build:ap,radius:.55,height:2.5,cam:{distance:7.6,height:2.3,side:.6}};var oo,fp,ta=class{constructor(t=32){Ot(this,oo);this.half=t,this.boxes=[],this.circles=[],this.bushes=[],this.ladders=[],this.grid=null}addBox(t,i,s,r,a,n={}){var h,u,d;let l=(h=n.bottom)!=null?h:0,o={minX:t-s/2,maxX:t+s/2,minZ:i-r/2,maxZ:i+r/2,bottom:l,top:a,topAt:n.topAt||null,sight:(u=n.sight)!=null?u:a-l>1.4,nav:(d=n.nav)!=null?d:l<1.2};return this.boxes.push(o),this.grid=null,o}addRoof(t,i,s,r,a,n,l="x"){let o=(l==="x"?r:s)/2,h=l==="x"?(u,d)=>a+(n-a)*Math.max(0,1-Math.abs(d-i)/o):(u,d)=>a+(n-a)*Math.max(0,1-Math.abs(u-t)/o);return this.addBox(t,i,s,r,n,{bottom:a-.25,topAt:h,sight:!0,nav:!1})}addCircle(t,i,s,r,a={}){var l,o,h;let n={x:t,z:i,r:s,bottom:(l=a.bottom)!=null?l:0,top:r,sight:(o=a.sight)!=null?o:r>1.4,nav:(h=a.nav)!=null?h:!0};return this.circles.push(n),this.grid=null,n}addBush(t,i,s,r="bush"){this.bushes.push({x:t,z:i,r:s,kind:r})}addLadder(t,i,s,r,a,n){this.ladders.push({x:t,z:i,nx:s,nz:r,w:a,top:n})}near(t,i){this.grid||ae(this,oo,fp).call(this);let{n:s,cells:r,idx:a}=this.grid;return r[a(i)*s+a(t)]}topOf(t,i,s){return t.topAt?t.topAt(i,s):t.top}inBush(t,i,s=0){return s>1.2?!1:this.bushes.some(r=>(t-r.x)**2+(i-r.z)**2<(r.r*.9)**2)}groundAt(t,i,s,r){let a=0,n=s*.7,l=this.near(t,i);for(let o of l.boxes){if(!(t+n>o.minX&&t-n<o.maxX&&i+n>o.minZ&&i-n<o.maxZ))continue;let h=Math.max(o.minX,Math.min(t,o.maxX)),u=Math.max(o.minZ,Math.min(i,o.maxZ)),d=this.topOf(o,h,u);d>r||d<=a||(a=d)}for(let o of l.circles)o.top>r||o.top<=a||(t-o.x)**2+(i-o.z)**2<(o.r+n)**2&&(a=o.top);return a}ceilingAt(t,i,s,r){let a=1/0,n=s*.7,l=this.near(t,i);for(let o of l.boxes)o.bottom<=r+.05||o.bottom>=a||t+n>o.minX&&t-n<o.maxX&&i+n>o.minZ&&i-n<o.maxZ&&(a=o.bottom);for(let o of l.circles)o.bottom<=r+.05||o.bottom>=a||(t-o.x)**2+(i-o.z)**2<(o.r+n)**2&&(a=o.bottom);return a}resolve(t,i,s,r=1/0){let a=!1,n=this.near(t.x,t.z);for(let o=0;o<3;o++){let h=!1;for(let u of n.boxes){if(u.bottom>=r)continue;let d=Math.max(u.minX,Math.min(t.x,u.maxX)),c=Math.max(u.minZ,Math.min(t.z,u.maxZ)),p=t.x-d,v=t.z-c,_=p*p+v*v;if(!(_>=i*i)&&!(this.topOf(u,d,c)<=s)){if(_>1e-8){let g=Math.sqrt(_);t.x+=p/g*(i-g),t.z+=v/g*(i-g)}else{let g=[[t.x-u.minX,-1,0],[u.maxX-t.x,1,0],[t.z-u.minZ,0,-1],[u.maxZ-t.z,0,1]];g.sort((y,S)=>y[0]-S[0]);let[f,x,b]=g[0];t.x+=x*(f+i),t.z+=b*(f+i)}a=h=!0}}for(let u of n.circles){if(u.top<=s||u.bottom>=r)continue;let d=t.x-u.x,c=t.z-u.z,p=i+u.r,v=d*d+c*c;if(v>=p*p)continue;let _=Math.sqrt(v)||1e-4;t.x=u.x+d/_*p,t.z=u.z+c/_*p,a=h=!0}if(!h)break}let l=this.half-i-.3;return t.x=Math.max(-l,Math.min(l,t.x)),t.z=Math.max(-l,Math.min(l,t.z)),a}ledgeAt(t,i,s,r,a){let n=this.near(t,i),l=-1/0;for(let o of n.boxes){if(t<=o.minX||t>=o.maxX||i<=o.minZ||i>=o.maxZ)continue;let h=this.topOf(o,t,i);h>s+.3&&h<=s+r&&o.bottom<s+a&&h>l&&(l=h)}for(let o of n.circles)(t-o.x)**2+(i-o.z)**2>=o.r*o.r||o.top>s+.3&&o.top<=s+r&&o.bottom<s+a&&o.top>l&&(l=o.top);if(l===-1/0)return null;for(let o of n.boxes)if(!(t<=o.minX||t>=o.maxX||i<=o.minZ||i>=o.maxZ)&&this.topOf(o,t,i)>l+.05&&o.bottom<l+a*.8)return null;for(let o of n.circles)if(!((t-o.x)**2+(i-o.z)**2>=o.r*o.r)&&o.top>l+.05&&o.bottom<l+a*.8)return null;return l}ladderAt(t,i,s,r){for(let a of this.ladders){let n=t-a.x,l=i-a.z,o=n*a.nx+l*a.nz,h=Math.abs(n*-a.nz+l*a.nx);if(o>-.2&&o<s+.45&&h<a.w/2&&r<a.top-.1)return a}return null}lineOfSight(t,i,s,r,a=!1,n=1.5,l=1.5){let o=s-t,h=r-i,u=Math.hypot(o,h),d=Math.ceil(u/.4);for(let c=1;c<d;c++){let p=c/d,v=t+o*p,_=i+h*p,g=n+(l-n)*p,f=this.near(v,_);for(let x of f.boxes)if(!(!x.sight||v<=x.minX||v>=x.maxX||_<=x.minZ||_>=x.maxZ)&&g>x.bottom&&g<this.topOf(x,v,_))return!1;for(let x of f.circles)if(x.sight&&g>x.bottom&&g<x.top&&(v-x.x)**2+(_-x.z)**2<x.r*x.r)return!1;if(!a&&g<1.6){for(let x of this.bushes)if((v-x.x)**2+(_-x.z)**2<(x.r*.8)**2)return!1}}return!0}};oo=new WeakSet,fp=function(){let t=Math.ceil((this.half*2+8)/4),i=Array.from({length:t*t},()=>({boxes:[],circles:[]})),s=r=>Math.max(0,Math.min(t-1,Math.floor((r+this.half+4)/4)));for(let r of this.boxes)for(let a=s(r.minZ-1.5);a<=s(r.maxZ+1.5);a++)for(let n=s(r.minX-1.5);n<=s(r.maxX+1.5);n++)i[a*t+n].boxes.push(r);for(let r of this.circles)for(let a=s(r.z-r.r-1.5);a<=s(r.z+r.r+1.5);a++)for(let n=s(r.x-r.r-1.5);n<=s(r.x+r.r+1.5);n++)i[a*t+n].circles.push(r);this.grid={n:t,cells:i,idx:s}};function lo(e,t=()=>!1){let i=new Map,s=[];e.updateMatrixWorld(!0),e.traverse(a=>{if(!a.isMesh||a.userData.keep||t(a)||!(a.material instanceof St))return;let n=a.material.uuid+(a.castShadow?":s":":n");i.has(n)||i.set(n,{material:a.material,cast:a.castShadow,geos:[]});let l=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();for(let o of Object.keys(l.attributes))["position","normal","uv"].includes(o)||l.deleteAttribute(o);l.attributes.uv||l.setAttribute("uv",new $e(new Float32Array(l.attributes.position.count*2),2)),l.applyMatrix4(a.matrixWorld),i.get(n).geos.push(l),s.push(a)});for(let a of s)a.parent.remove(a);let r=0;for(let{material:a,cast:n,geos:l}of i.values()){let o=l.reduce((_,g)=>_+g.attributes.position.count,0),h=new Float32Array(o*3),u=new Float32Array(o*3),d=new Float32Array(o*2),c=0;for(let _ of l)h.set(_.attributes.position.array,c*3),u.set(_.attributes.normal.array,c*3),d.set(_.attributes.uv.array,c*2),c+=_.attributes.position.count,_.dispose();let p=new yt;p.setAttribute("position",new $t(h,3)),p.setAttribute("normal",new $t(u,3)),p.setAttribute("uv",new $t(d,2)),p.computeBoundingSphere();let v=new vt(p,a);v.castShadow=n,v.receiveShadow=!0,v.matrixAutoUpdate=!1,e.add(v),r++}return{merged:s.length,calls:r}}var Nt=44;function Xh(e,{isMobile:t}){let i=new ta(Nt),s=[],r=new di,a=(O,H,G,P,Y,ve)=>{let Me=new vt(new zs(P,Y,ve),r);Me.position.set(O,H,G),Me.updateMatrixWorld(!0),s.push(Me)},n=vi("rgba(255,190,110,0.9)","rgba(255,140,40,0)"),l=[];e.background=new Qe(856112),e.fog=new Kn(1382974,.022);let o=new si(180,32,16),h=new Mi({side:ci,depthWrite:!1,fog:!1,uniforms:{top:{value:new Qe(461346)},bottom:{value:new Qe(3814512)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying vec3 vP; void main(){ float h = smoothstep(-0.05, 0.55, vP.y); gl_FragColor = vec4(mix(bottom, top, h), 1.); }"});e.add(new vt(o,h));let u=new vt(new si(7,32,16),new di({color:16052700,fog:!1}));u.position.set(-60,70,-120),e.add(u);let d=new gi(new ui({map:vi("rgba(220,225,255,0.55)","rgba(120,130,220,0)"),fog:!1,depthWrite:!1,blending:Bt}));d.scale.set(60,60,1),d.position.copy(u.position),e.add(d);let c=new yt,p=[];for(let O=0;O<700;O++){let H=Math.random()*Math.PI*2,G=Math.random()*1.2+.15;p.push(Math.cos(H)*Math.cos(G)*170,Math.sin(G)*170,Math.sin(H)*Math.cos(G)*170)}c.setAttribute("position",new $e(p,3)),e.add(new xs(c,new is({color:14673151,size:1.1,fog:!1,sizeAttenuation:!1,transparent:!0,opacity:.8}))),e.add(new Jr(8029912,1906736,1.05));let v=new Kr(12766463,1.35);v.position.set(-18,30,-14),v.castShadow=!0,v.shadow.mapSize.set(t?1024:2048,t?1024:2048);let _=v.shadow.camera;_.left=-26,_.right=26,_.top=26,_.bottom=-26,_.near=1,_.far=90,v.shadow.bias=-8e-4,v.shadow.normalBias=.03,e.add(v,v.target);let g=jt(256,256,(O,H,G)=>{O.fillStyle="#26402f",O.fillRect(0,0,H,G);for(let P=0;P<2600;P++){let Y=50+Math.random()*40;O.fillStyle=`rgba(${Y*.55|0},${Y+20|0},${Y*.7|0},${.25+Math.random()*.35})`,O.fillRect(Math.random()*H,Math.random()*G,2,3+Math.random()*4)}});g.wrapS=g.wrapT=Ri,g.repeat.set(18,18);let f=new vt(new Ci(Nt*4,Nt*4),new St({map:g,roughness:1}));f.rotation.x=-Math.PI/2,f.receiveShadow=!0,f.userData.keep=!0,e.add(f);let x=jt(256,256,(O,H,G)=>{O.fillStyle="#3b3a44",O.fillRect(0,0,H,G);for(let P=0;P<G;P+=32)for(let Y=P/32%2?-24:0;Y<H;Y+=48){let ve=88+Math.random()*40;O.fillStyle=`rgb(${ve},${ve-4},${ve+8})`,O.beginPath(),O.roundRect(Y+3,P+3,42,26,8),O.fill()}});x.wrapS=x.wrapT=Ri;let b=(O,H)=>{let G=x.clone();return G.needsUpdate=!0,G.repeat.set(O,H),new St({map:G,roughness:.95})},y=(O,H,G,P)=>{let Y=new vt(new Ci(G,P),b(G/2.2,P/2.2));Y.rotation.x=-Math.PI/2,Y.position.set(O,.015,H),Y.receiveShadow=!0,e.add(Y)};y(0,0,3.4,58),y(0,0,56,3.2),y(0,-21,9,7);let S=jt(128,128,(O,H,G)=>{O.fillStyle="#ffd58a",O.fillRect(0,0,H,G);let P=O.createRadialGradient(H/2,G/2,10,H/2,G/2,80);P.addColorStop(0,"rgba(255,240,190,1)"),P.addColorStop(1,"rgba(255,160,60,0.4)"),O.fillStyle=P,O.fillRect(0,0,H,G),O.strokeStyle="#4a2e1c",O.lineWidth=5;for(let Y=0;Y<=4;Y++)O.beginPath(),O.moveTo(Y*H/4,0),O.lineTo(Y*H/4,G),O.stroke(),O.beginPath(),O.moveTo(0,Y*G/4),O.lineTo(H,Y*G/4),O.stroke()}),A=new St({map:S,emissive:16753226,emissiveMap:S,emissiveIntensity:1.25,roughness:.8}),w=Q(7227955,{roughness:.85}),m=Q(13482908,{roughness:.95}),M=Q(3093328,{roughness:.6}),D=Q(1908531,{roughness:.6}),C=Q(4139549,{roughness:.8});function B(O,H,G,P,Y=3.2,ve="z",Me={}){let ue=new ht;ue.position.set(O,0,H);let Te=.35+Y;ue.add(V(F.box(G+.3,.35,P+.3),Q(4933714),{y:.17})),i.addBox(O,H,G+.3,P+.3,.35,{sight:!1,nav:!1});let Ae=.28,Be=2.5,qe=2.95,W=ve==="z";if(Me.enter){let Pe=(Tt,Lt,Qt,yi,Et=.35,li=Te)=>{ue.add(V(F.box(Qt,li-Et,yi),m,{x:Tt-O,y:(Et+li)/2,z:Lt-H})),i.addBox(Tt,Lt,Qt,yi,li,{bottom:Et>.35?Et:0,sight:!0,nav:Et<=.35}),a(Tt,(Et+li)/2,Lt,Qt,li-Et,yi)},Ge=Tt=>{let Lt=W?G:P,Qt=(Lt-Be)/2;for(let yi of[-1,1]){let Et=yi*(Be/2+Qt/2);W?Pe(O+Et,H+Tt*(P/2-Ae/2),Qt,Ae):Pe(O+Tt*(G/2-Ae/2),H+Et,Ae,Qt)}W?Pe(O,H+Tt*(P/2-Ae/2),Be,Ae,qe):Pe(O+Tt*(G/2-Ae/2),H,Ae,Be,qe)};if(Ge(1),Ge(-1),W)for(let Tt of[-1,1])Pe(O+Tt*(G/2-Ae/2),H,Ae,P-2*Ae);else for(let Tt of[-1,1])Pe(O,H+Tt*(P/2-Ae/2),G-2*Ae,Ae);ue.add(V(F.box(G-.1,.04,P-.1),Q(12100712,{roughness:1}),{y:.37,shadow:!1})),ue.add(V(F.box(G-.1,.08,P-.1),C,{y:Te-.05,shadow:!1}));let Je=(W?1:.5)*(G/2-1),ut=(W?.5:1)*(P/2-1),zt=V(F.box(1.6,1.5,.08),Q(15852740,{roughness:.9,emissive:3810320,emissiveIntensity:.3}),{x:Je,y:1.1,z:ut-.5,ry:.5});ue.add(zt),ue.add(V(F.box(.9,.35,.9),Q(8076106),{x:Je,y:.55,z:ut})),i.addBush(O+Je,H+ut,1,"screen"),ue.add(V(F.sphere(.2,12,8),k,{x:-Je*.6,y:Te-.6,z:-ut*.6,sy:1.3,shadow:!1})),l.push(new U(O-Je*.6,Te-.6,H-ut*.6))}else{let Pe=V(F.box(G,Y,P),m,{y:.35+Y/2});Pe.receiveShadow=!0,ue.add(Pe),i.addBox(O,H,G,P,Te,{sight:!0}),a(O,.35+Y/2,H,G,Y,P)}for(let Pe of[-1,1])for(let Ge of[-1,1])ue.add(V(F.box(.22,Y,.22),C,{x:Pe*G/2,y:.35+Y/2,z:Ge*P/2}));ue.add(V(F.box(G+.05,.16,P+.05),C,{y:.35+Y*.62}));let ce=.35+Y*.38;for(let Pe of[-1,1])for(let Ge=-1;Ge<=1;Ge+=2){let Je=Me.enter&&W,ut=Me.enter&&!W;G>3.5&&!Je&&ue.add(V(F.box(G*.26,Y*.34,.06),A,{x:Ge*G*.24,y:ce,z:Pe*(P/2+.02),shadow:!1})),P>3.5&&!ut&&ue.add(V(F.box(.06,Y*.34,P*.26),A,{x:Pe*(G/2+.02),y:ce,z:Ge*P*.24,shadow:!1}))}if(Me.enter)for(let Pe of[-1,1])ue.add(V(W?F.box(Be+.3,.2,.34):F.box(.34,.2,Be+.3),C,{x:W?0:Pe*G/2,y:qe+.1,z:W?Pe*P/2:0}));else{let Pe=W?{x:0,z:P/2+.03,sx:1.1,sz:.06}:{x:G/2+.03,z:0,sx:.06,sz:1.1};ue.add(V(F.box(Pe.sx,1.9,Pe.sz),A,{x:Pe.x,y:1.3,z:Pe.z,shadow:!1}))}let fe=.7,Ce=Math.min(G,P)*.42,ye=W?G:P,T=W?P:G,N=new ks;N.moveTo(-T/2-fe,0),N.lineTo(0,Ce),N.lineTo(T/2+fe,0),N.lineTo(T/2+fe-.25,-.12),N.lineTo(0,Ce-.28),N.lineTo(-T/2-fe+.25,-.12),N.closePath();let I=new vt(new Ga(N,{depth:ye+fe*2,bevelEnabled:!1}),M);I.castShadow=!0,I.position.set(0,Te,0),W?(I.rotation.y=Math.PI/2,I.position.x=-(ye/2+fe)):I.position.z=-(ye/2+fe),ue.add(I),ue.add(V(F.box(W?ye+fe*2:.3,.25,W?.3:ye+fe*2),D,{y:Te+Ce-.05})),e.add(ue);let re=T/2+fe,ne=W?(Pe,Ge)=>Te+Ce*Math.max(0,1-Math.abs(Ge-H)/re):(Pe,Ge)=>Te+Ce*Math.max(0,1-Math.abs(Pe-O)/re);i.addBox(O,H,G+.3,P+.3,Te+Ce,{bottom:Te-.25,topAt:ne,sight:!0,nav:!1}),a(O,Te+Ce/2,H,G+fe,Ce,P+fe);let Se=O+(W?G/2-.6:G/2+.5),je=H+(W?P/2+.5:P/2-.6);if(Me.enter?Z(O+(W?Be/2+.5:G/2+.5),H+(W?P/2+.5:Be/2+.5),2.6,16738874):Z(Se,je,2.6,16738874),Me.ladder){let Pe=Me.ladder,Ge,Je,ut,zt;if(Pe==="back")ut=W?0:-1,zt=W?-1:0;else{let Tt=Pe==="left"?-1:1;ut=W?Tt:0,zt=W?0:Tt}Ge=O+ut*(G/2+.02)+(zt!==0?G*.25:0),Je=H+zt*(P/2+.02)+(ut!==0?P*.25:0),J(Ge,Je,ut,zt,Te+.2)}}function J(O,H,G,P,Y){let ve=Q(6965804,{roughness:.9}),Me=-P,ue=G;for(let Te of[-1,1])e.add(V(F.box(.08,Y,.08),ve,{x:O+G*.12+Me*Te*.4,y:Y/2,z:H+P*.12+ue*Te*.4}));for(let Te=.35;Te<Y;Te+=.4)e.add(V(G?F.box(.06,.06,.8):F.box(.8,.06,.06),ve,{x:O+G*.12,y:Te,z:H+P*.12}));i.addLadder(O,H,G,P,1.1,Y)}let z=Q(14701114,{emissive:16734762,emissiveIntensity:1.8,roughness:.6}),k=Q(16761450,{emissive:16752704,emissiveIntensity:2.2,roughness:.6});function X(O,H,G,P=2.2,Y){let ve=new ui({map:n,transparent:!0,depthWrite:!1,blending:Bt,color:Y!=null?Y:16777215,opacity:.8}),Me=new gi(ve);return Me.scale.set(P,P,1),Me.position.set(O,H,G),e.add(Me),Me}function Z(O,H,G,P){let Y=V(F.sphere(.24,14,10),P===16738874?z:k,{x:O,y:G,z:H,sy:1.35,shadow:!1});e.add(Y),e.add(V(F.cyl(.18,.18,.05,10),C,{x:O,y:G+.33,z:H,shadow:!1})),e.add(V(F.cyl(.18,.18,.05,10),C,{x:O,y:G-.33,z:H,shadow:!1})),X(O,G,H,2.4),l.push(new U(O,G,H))}function he(O,H){e.add(V(F.cyl(.08,.1,3,8),C,{x:O,y:1.5,z:H})),e.add(V(F.box(.8,.08,.08),C,{x:O+.35,y:2.95,z:H})),Z(O+.7,H,2.45,16761450),i.addCircle(O,H,.14,3.2,{sight:!1})}function ee(O,H){let G=Q(7697534,{roughness:1});e.add(V(F.cyl(.35,.45,.25,6),G,{x:O,y:.12,z:H})),e.add(V(F.cyl(.14,.18,.7,8),G,{x:O,y:.6,z:H})),e.add(V(F.box(.55,.42,.55),G,{x:O,y:1.15,z:H})),e.add(V(F.box(.3,.24,.6),k,{x:O,y:1.16,z:H,shadow:!1})),e.add(V(F.cone(.55,.36,6),G,{x:O,y:1.54,z:H})),X(O,1.16,H,1.8),i.addCircle(O,H,.42,1.75,{sight:!1}),l.push(new U(O,1.2,H))}let te=Q(3877408,{roughness:1}),pe=[Q(2047276,{roughness:1,flat:!0}),Q(2771509,{roughness:1,flat:!0}),Q(6962012,{roughness:1,flat:!0})],ke=[Ht(1,1,.18,1),Ht(1,1,.2,2),Ht(1,1,.16,3)];function Le(O,H,G=1,P=!1){e.add(V(F.cyl(.18*G,.28*G,2.6*G,7),te,{x:O,y:1.3*G,z:H}));let Y=P?Q(14191021,{roughness:1,flat:!0,emissive:3805232,emissiveIntensity:.4}):pe[(O*7+H*3&255)%2];for(let ve=0;ve<3;ve++){let Me=ve*2.1+O;e.add(V(ke[ve],Y,{x:O+Math.cos(Me)*.6*G,y:(2.8+ve*.5)*G,z:H+Math.sin(Me)*.6*G,sx:1.4*G,sy:1.1*G,sz:1.4*G}))}i.addCircle(O,H,.35*G,6,{sight:G>1.1})}let xt=Q(2377775,{roughness:1,flat:!0}),rt=Ht(1,1,.22,7),le=[];function ge(O,H,G=1.4){let P=new ht;P.position.set(O,0,H);for(let Y=0;Y<4;Y++){let ve=Y*1.7;P.add(V(rt,xt,{x:Math.cos(ve)*G*.45,y:.8,z:Math.sin(ve)*G*.45,sx:G*.75,sy:.95,sz:G*.75}))}e.add(P),le.push(P),i.addBush(O,H,G)}let xe=Q(9068088,{roughness:.85}),We=Q(5913378);function Fe(O,H,G,P){let Y=G;e.add(V(F.box(G,Y,G),xe,{x:O,y:P-Y/2,z:H})),e.add(V(F.box(G+.04,.08,G+.04),We,{x:O,y:P-.04,z:H})),i.addBox(O,H,G,G,P,{sight:!1})}function Ee(O,H,G,P,Y){e.add(V(F.box(G,.2,P),Q(8015923),{x:O,y:Y-.1,z:H}));for(let ve of[-1,1])for(let Me of[-1,1])e.add(V(F.box(.2,Y,.2),C,{x:O+ve*(G/2-.15),y:Y/2,z:H+Me*(P/2-.15)}));i.addBox(O,H,G,P,Y,{sight:!1})}function at(O,H){let G=Q(12728874,{roughness:.55});for(let P of[-1,1])e.add(V(F.cyl(.2,.24,4.6,12),G,{x:O+P*2.1,y:2.3,z:H})),i.addCircle(O+P*2.1,H,.26,5);e.add(V(F.box(5.8,.32,.4),Q(1841698),{x:O,y:4.7,z:H})),e.add(V(F.box(5.2,.25,.3),G,{x:O,y:4.35,z:H})),e.add(V(F.box(4.8,.22,.26),G,{x:O,y:3.7,z:H}))}B(-10,12,7,5,3.2,"x",{enter:!0,ladder:"left"}),B(11,13,6,6,3.4,"x",{enter:!0}),B(-12,-7,6,7,3,"x",{ladder:"back"}),B(11,-8,7,5,3.2,"z",{enter:!0,ladder:"right"}),B(-21,21,5,5,2.8,"z"),B(22,2,5,6,3,"x",{enter:!0}),B(-22,-18,6,5,3,"z"),B(20,-21,5,5,2.8,"z"),B(0,-26,7,4,3.6,"z"),at(0,-17),Fe(4.2,5.2,.9,.6),Fe(5.3,6.4,1,1.1),Fe(5.4,7.7,1,1.6),Ee(7.8,7.4,3.2,3,2),Fe(-5.5,-3.8,1.2,1),Fe(-6.6,-4.6,1,1.7),Fe(16,8,1.2,1.2),Fe(-16,3,1.1,.9),Fe(-16.9,3.9,.9,1.5),Fe(13.2,16.9,1.1,.9),Fe(12.2,17.2,1,1.7),Fe(25.4,5.8,1.1,1),Fe(24.3,5.8,1,1.8),Fe(-20.6,24.3,1,1.1);let me=Q(2050602,{roughness:1,flat:!0}),de=Q(2976314,{roughness:1,flat:!0});function _e(O,H,G,P,Y=2.5){e.add(V(F.box(G,Y,P),me,{x:O,y:Y/2,z:H})),e.add(V(F.box(G+.12,.25,P+.12),de,{x:O,y:Y-.05,z:H})),i.addBox(O,H,G,P,Y,{sight:!0}),a(O,Y/2,H,G,Y,P)}(function(H,G,P,Y){let ve=20260925,Me=()=>(ve=ve*1664525+1013904223>>>0)/4294967296,ue=new Uint8Array(P*P),Te=Array.from({length:P*P},()=>!0),Ae=Array.from({length:P*P},()=>!0),Be=[0];for(ue[0]=1;Be.length;){let ye=Be[Be.length-1],T=ye%P,N=ye/P|0,I=[];if(T>0&&!ue[ye-1]&&I.push([ye-1,"L"]),T<P-1&&!ue[ye+1]&&I.push([ye+1,"R"]),N>0&&!ue[ye-P]&&I.push([ye-P,"U"]),N<P-1&&!ue[ye+P]&&I.push([ye+P,"D"]),!I.length){Be.pop();continue}let[re,ne]=I[Me()*I.length|0];ne==="L"&&(Te[re]=!1),ne==="R"&&(Te[ye]=!1),ne==="U"&&(Ae[re]=!1),ne==="D"&&(Ae[ye]=!1),ue[re]=1,Be.push(re)}for(let ye=0;ye<5;ye++){let T=Me()*P*(P-1)|0;T%P<P-1?Te[T]=!1:Ae[T]=!1}let qe=.55,W=2.5,ce=P*Y;for(let ye=0;ye<P;ye++)ye!==P-1&&_e(H+ye*Y+Y/2,G,Y+qe,qe,W),_e(H+ye*Y+Y/2,G+ce,Y+qe,qe,W);for(let ye=0;ye<P;ye++)_e(H,G+ye*Y+Y/2,qe,Y+qe,W),ye!==0&&_e(H+ce,G+ye*Y+Y/2,qe,Y+qe,W);for(let ye=0;ye<P;ye++)for(let T=0;T<P;T++){let N=ye*P+T;T<P-1&&Te[N]&&_e(H+(T+1)*Y,G+ye*Y+Y/2,qe,Y+qe,W),ye<P-1&&Ae[N]&&_e(H+T*Y+Y/2,G+(ye+1)*Y,Y+qe,qe,W)}let fe=H+ce/2,Ce=G+ce/2;ee(fe,Ce),ge(H+Y/2,G+ce-Y/2,1.1),ge(H+ce-Y/2,G+ce-Y/2,1.1),ge(H+Y/2,G+Y*1.5,1.1)})(-43,26.5,5,3.3);let Ne=Q(7248458,{roughness:.7}),Ie=Q(4094522,{roughness:1,flat:!0});for(let O=0;O<22;O++){let H=-41+O%5*3.1+O*7%3*.6,G=-41+Math.floor(O/5)*3.2+O*5%3*.5;for(let P=0;P<5;P++){let Y=P*1.3+O,ve=.3+P%2*.2,Me=H+Math.cos(Y)*ve,ue=G+Math.sin(Y)*ve,Te=6+(O+P)%3;e.add(V(F.cyl(.07,.09,Te,6),Ne,{x:Me,y:Te/2,z:ue})),e.add(V(ke[P%3],Ie,{x:Me,y:Te,z:ue,sx:.9,sy:.5,sz:.9}))}i.addCircle(H,G,.62,7,{sight:!0})}ge(-37.5,-35.5,1.3),ge(-32,-39,1.2),ge(-40,-30.5,1.3);let ze=Q(5914154,{roughness:.9}),Ze=Q(4015200,{roughness:.5});function et(O,H,G,P,Y,ve){if(ve){let Te=(Ae,Be,qe,W,ce=0)=>{e.add(V(F.box(qe,Y-ce,W),ze,{x:Ae,y:(ce+Y)/2,z:Be})),i.addBox(Ae,Be,qe,W,Y,{bottom:ce,sight:!0}),a(Ae,(ce+Y)/2,Be,qe,Y-ce,W)};for(let Ae of[-1,1]){let Be=(P-2.6)/2;for(let qe of[-1,1])Te(O+Ae*(G/2-.3/2),H+qe*(2.6/2+Be/2),.3,Be);Te(O+Ae*(G/2-.3/2),H,.3,2.6,2.95),Te(O,H+Ae*(P/2-.3/2),G-2*.3,.3)}e.add(V(F.box(G,.3,P),Ze,{x:O,y:Y-.15,z:H})),i.addBox(O,H,G,P,Y,{bottom:Y-.3,sight:!0,nav:!1}),a(O,Y-.15,H,G,.3,P),e.add(V(F.box(1.4,.9,1),Q(13482382,{roughness:1}),{x:O+G/2-1.3,y:.45,z:H-P/2+1.1})),i.addBush(O+G/2-1.3,H-P/2+1.4,1.1,"sacks"),l.push(new U(O,Y-.7,H)),e.add(V(F.sphere(.22,12,8),k,{x:O,y:Y-.7,z:H,sy:1.3,shadow:!1}))}else{e.add(V(F.box(G,Y,P),ze,{x:O,y:Y/2,z:H})),e.add(V(F.box(G+.2,.2,P+.2),Ze,{x:O,y:Y+.1,z:H})),i.addBox(O,H,G,P,Y+.2,{sight:!0}),a(O,Y/2,H,G,Y,P);for(let Me of[-1,1])e.add(V(F.box(G*.3,.8,.06),A,{x:O,y:Y*.55,z:H+Me*(P/2+.02),shadow:!1}))}}et(38,-14,7,7,4,!1),et(38,0,7,8,4,!0),et(38,14,7,7,4,!1);for(let O of[-7,7])e.add(V(F.box(1.6,.15,7.2),ze,{x:38,y:4.05,z:O})),i.addBox(38,O,1.6,7.2,4.12,{bottom:3.95,sight:!1,nav:!1});J(34.5-.02,-16,-1,0,4.2),J(34.5-.02,16,-1,0,4.2),Fe(32.4,3,1,1),Fe(33.5,3,1.1,2);let Ke=Q(15237418,{roughness:.6,emissive:4200448,emissiveIntensity:.3}),j=Q(3889700);for(let O=0;O<5;O++)for(let H=0;H<4;H++){let G=30+O*2.6+H%2*1.2,P=30+H*3;e.add(V(F.sphere(.45,12,8),Ke,{x:G,y:.35,z:P,sy:.75})),e.add(V(F.cyl(.05,.06,.25,5),j,{x:G,y:.75,z:P})),i.addCircle(G,P,.45,.4,{sight:!1,nav:!1})}let Mt=Q(13215306,{roughness:1});e.add(V(F.cyl(1.6,1.9,2.2,10),Mt,{x:26,y:1.1,z:38})),e.add(V(F.cone(1.7,1.2,10),Mt,{x:26,y:2.8,z:38})),i.addCircle(26,38,1.8,3.4,{sight:!0}),Fe(27.9,36.6,1.1,1.2),ge(34,40,1.4),ge(41,33,1.3),B(36,-36,9,7,3.4,"z",{enter:!0,ladder:"left"});for(let[O,H,G,P]of[[-36,-10,1.2,!1],[-38,6,1.1,!0],[-34,18,1.2,!1],[-14,-38,1.1,!1],[-4,-40,1.2,!0],[10,-38,1.1,!1],[22,-40,1.2,!1],[36,-24,1.1,!0],[30,22,1.2,!1],[14,38,1.1,!0],[0,40,1.2,!1],[-14,40,1.1,!1]])Le(O,H,G,P);for(let[O,H,G]of[[-38,-18,1.4],[-40,12,1.4],[-20,-38,1.5],[6,-40,1.4],[24,-34,1.4],[30,10,1.3],[20,38,1.4],[-6,38,1.5],[-22,34,1.4],[40,-26,1.3]])ge(O,H,G);for(let[O,H]of[[2.6,17],[-2.6,8],[2.6,-6],[-2.6,-12],[8,2.4],[-9,-2.4],[18,-2.4],[-19,2.4]])ee(O,H);for(let[O,H]of[[-2.8,22],[-2.8,-2.8],[14,2.8],[-14,-2.8]])he(O,H);for(let O=-Nt+3;O<=Nt-3;O+=4.3)for(let[H,G]of[[O,-Nt+2],[O,Nt-2],[-Nt+2,O],[Nt-2,O]])Math.abs(O)<2.5||Le(H+(Math.random()-.5)*1.2,G+(Math.random()-.5)*1.2,1.1+Math.random()*.4);for(let[O,H,G,P]of[[-6,17,1,!0],[6,20,1.2,!1],[16,16,1.1,!0],[-17,11,1.2,!1],[-5,-18,1,!0],[7,-15,1.1,!1],[24,-10,1.2,!1],[-25,-6,1.1,!0],[15,-27,1,!1],[-15,-26,1.1,!0],[25,24,1.2,!1]])Le(O,H,G,P);for(let[O,H,G]of[[-4.5,-12,1.5],[15,-15,1.6],[-17.5,6,1.5],[18,18,1.5],[-6,21,1.4],[25,-24,1.4],[6.5,-3.8,1.3],[-25,13,1.5],[9,24,1.4],[-10,-24,1.5],[26,12,1.4]])ge(O,H,G);let ot=Q(4862754,{roughness:1});for(let O of[-1,1]){for(let H=-Nt+1;H<Nt;H+=2)e.add(V(F.box(.14,1.2,.14),ot,{x:H,y:.6,z:O*(Nt-.6)})),e.add(V(F.box(.14,1.2,.14),ot,{x:O*(Nt-.6),y:.6,z:H}));e.add(V(F.box(Nt*2,.1,.08),ot,{y:.9,z:O*(Nt-.6)})),e.add(V(F.box(.08,.1,Nt*2),ot,{x:O*(Nt-.6),y:.9}))}let ct=jt(64,192,(O,H,G)=>{O.fillStyle="#5a3a26",O.fillRect(0,0,H,G),O.fillStyle="#e9d6b0",O.fillRect(5,5,H-10,G-10),O.fillStyle="#2a170c",O.font="bold 42px serif",O.textAlign="center",["\u306E","\u308A","\u3070"].forEach((P,Y)=>O.fillText(P,H/2,55+Y*55))});e.add(V(F.cyl(.07,.07,2.8,6),C,{x:-2.6,y:1.4,z:20.5})),e.add(V(F.box(.5,1.5,.08),Q(16777215,{map:ct,emissive:2101256,emissiveIntensity:.5}),{x:-2.6,y:2.3,z:20.55})),i.addCircle(-2.6,20.5,.12,3,{sight:!1});let L=[],E=t?2:4;for(let O=0;O<E;O++){let H=new _s(16752714,18,11,1.8);e.add(H),L.push(H)}function q(O){let H=l.slice().sort((G,P)=>G.distanceToSquared(O)-P.distanceToSquared(O));L.forEach((G,P)=>{H[P]&&G.position.copy(H[P])}),v.position.set(O.x-18,30,O.z-14),v.target.position.set(O.x,0,O.z)}return{stats:lo(e),world:i,cameraBlockers:s,bushMeshes:le,updateLights:q,playerSpawn:new U(0,0,22),ghostSpawn:new U(0,0,-21)}}var Vs=[{id:"crate",name:"\u044F\u0449\u0438\u043A",icon:"\u{1F4E6}"},{id:"lantern",name:"\u0444\u043E\u043D\u0430\u0440\u044C",icon:"\u{1F3EE}"},{id:"pumpkin",name:"\u0442\u044B\u043A\u0432\u0430",icon:"\u{1F383}"},{id:"barrel",name:"\u0431\u043E\u0447\u043A\u0430",icon:"\u{1F6E2}\uFE0F"},{id:"bush",name:"\u043A\u0443\u0441\u0442",icon:"\u{1F33F}"}],mp=null;function rs(e){let t=new ht;if(e==="crate")t.add(V(F.box(1,1,1),Q(9068088,{roughness:.85}),{y:.5})),t.add(V(F.box(1.04,.08,1.04),Q(5913378),{y:.96}));else if(e==="lantern"){let i=Q(7697534,{roughness:1});t.add(V(F.cyl(.35,.45,.25,6),i,{y:.12})),t.add(V(F.cyl(.14,.18,.7,8),i,{y:.6})),t.add(V(F.box(.55,.42,.55),i,{y:1.15})),t.add(V(F.box(.3,.24,.6),Q(16761450,{emissive:16752704,emissiveIntensity:2.2,roughness:.6}),{y:1.16,shadow:!1})),t.add(V(F.cone(.55,.36,6),i,{y:1.54}))}else if(e==="pumpkin")t.add(V(F.sphere(.55,14,10),Q(15237418,{roughness:.6,emissive:4200448,emissiveIntensity:.3}),{y:.42,sy:.75})),t.add(V(F.cyl(.05,.07,.3,5),Q(3889700),{y:.9}));else if(e==="barrel"){t.add(V(F.cyl(.42,.42,1.1,14),Q(8015660,{roughness:.8}),{y:.55}));for(let i of[.2,.9])t.add(V(F.cyl(.44,.44,.07,14),Q(3816004,{metalness:.4}),{y:i}))}else{mp||(mp=Ht(1,1,.22,7));for(let i=0;i<3;i++)t.add(V(mp,Q(2377775,{roughness:1,flat:!0}),{x:Math.cos(i*2.1)*.35,y:.6,z:Math.sin(i*2.1)*.35,sx:.75,sy:.7,sz:.75}))}return t}function qh(e,t,i,s,r=15260927){let a=new ht,n=new di({color:r,transparent:!0,opacity:.8,depthWrite:!1}),l=[];for(let h=0;h<9;h++){let u=new vt(new si(.35,8,6),n),d=h/9*Math.PI*2;u.position.set(Math.cos(d)*.3,.6+h%3*.3,Math.sin(d)*.3),u.userData.v=new U(Math.cos(d)*1.6,.8+Math.random(),Math.sin(d)*1.6),a.add(u),l.push(u)}a.position.set(t,i,s),e.add(a);let o=0;return{update(h){o+=h;for(let u of l)u.position.addScaledVector(u.userData.v,h),u.scale.setScalar(1+o*1.5);if(n.opacity=Math.max(0,.8-o*1.6),o>.5)return e.remove(a),n.dispose(),!1}}}var gp="masha-game-pumpkins",ia={get(){try{return+(localStorage.getItem(gp)||0)}catch{return 0}},add(e){let t=this.get()+e;try{localStorage.setItem(gp,String(t))}catch{}return t}},ja=class{constructor(t,i){this.scene=t,this.nav=i,this.list=[],this.geo=new si(.28,12,8),this.mat=new St({color:16753210,emissive:16742928,emissiveIntensity:.9,roughness:.4}),this.stem=new $r(.03,.04,.14,5),this.stemMat=new St({color:3889700})}clear(){for(let t of this.list)this.scene.remove(t.g);this.list=[]}spawn(t){this.clear();for(let i=0;i<t;i++){let s=0,r=0;for(let l=0;l<30;l++){s=(Math.random()*2-1)*(this.nav.half-3),r=(Math.random()*2-1)*(this.nav.half-3);let[o,h]=this.nav.toCell(s,r);if(this.nav.free(o,h)&&!this.list.some(u=>Math.hypot(u.x-s,u.z-r)<6))break}let a=new ht;a.add(new vt(this.geo,this.mat));let n=new vt(this.stem,this.stemMat);n.position.y=.26,a.add(n),a.children[0].scale.y=.8,a.position.set(s,.8,r),this.scene.add(a),this.list.push({g:a,x:s,z:r,ph:Math.random()*6})}}update(t,i,s){let r=[];for(let a=this.list.length-1;a>=0;a--){let n=this.list[a];n.g.rotation.y+=t*2,n.g.position.y=.8+Math.sin(i*3+n.ph)*.12;for(let l of s){let o=l.ctrl.pos;if(Math.hypot(o.x-n.x,o.z-n.z)<1&&o.y<1.8){this.scene.remove(n.g),this.list.splice(a,1),r.push(l);break}}}return r}};var E_={ground:"forest-floor.webp",rock:"moss-rock.webp",wood:"aged-wood.webp",roof:"indigo-roof.webp",water:"pond-water.webp",maple:"maple-foliage.webp",cedar:"cedar-foliage.webp"},ho={},Yh;function vp(){if(!Yh){let e=new jd,t=Promise.allSettled(Object.entries(E_).map(async([i,s])=>{let r=await e.loadAsync(`/assets/environment/forest/${s}`);r.colorSpace=ii,r.anisotropy=4,i!=="maple"&&i!=="cedar"&&(r.wrapS=r.wrapT=Ri),ho[i]=r})).then(i=>(i.some(s=>s.status==="rejected")&&console.warn("\u0427\u0430\u0441\u0442\u044C \u0442\u0435\u043A\u0441\u0442\u0443\u0440 \u043B\u0435\u0441\u0430 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430; \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0431\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B"),ho));Yh=Promise.race([t,new Promise(i=>setTimeout(()=>i(ho),8e3))])}return Yh}function pi(e,t=1,i=1){let s=ho[e];if(!s)return null;if(t===1&&i===1)return s;let r=s.clone();return r.repeat.set(t,i),r.needsUpdate=!0,r}function yp(e,{isMobile:t}){let i=new ta(Nt);i.theme="forest",i.paths=[[[-31,34],[-29,17],[-28,1],[-16,8],[8,8],[13,-7],[-7,-29]],[[-31,34],[-12,29],[2,23],[9,9],[17,-6],[25,-20]],[[2,23],[24,26],[31,9],[25,-20]]],i.waterZones=[{x:0,z:23,rx:17,rz:10,level:.06,bottom:-2.25},{x:-4,z:8.7,rx:13,rz:4.3,level:.06,bottom:-1.9}],i.waterAt=(T,N)=>i.waterZones.find(I=>((T-I.x)/I.rx)**2+((N-I.z)/I.rz)**2<1)||null,i.inWater=(T,N)=>!!i.waterAt(T,N);let s=i.groundAt.bind(i);i.groundAt=(T,N,I,re)=>{let ne=s(T,N,I,re),Se=i.waterAt(T,N);return Se&&ne<=.25?Se.bottom:ne};let r=[],a=new di,n=(T,N,I,re,ne,Se)=>{let je=new vt(F.box(re,ne,Se),a);je.position.set(T,N,I),je.updateMatrixWorld(!0),r.push(je)},l=74627,o=()=>(l=l*1664525+1013904223>>>0)/4294967296,h=(T,N,I={})=>{let re=V(T,N,I);return e.add(re),re},u=Q(1522231,{roughness:1,flat:!0}),d=Q(2313286,{roughness:1,flat:!0}),c=Q(3893588,{roughness:1,flat:!0}),p=Q(10436975,{roughness:1,flat:!0,emissive:3149092,emissiveIntensity:.3}),v=Q(4403240,{roughness:1}),_=Q(6374192,{roughness:1}),g=new St({color:pi("rock")?12830679:4343636,map:pi("rock"),roughness:1,flatShading:!0}),f=new St({color:pi("rock")?15788253:6713722,map:pi("rock"),roughness:1,flatShading:!0}),x=new St({color:pi("wood")?14468780:7950647,map:pi("wood"),roughness:.94}),b=new St({color:pi("wood")?10846320:4993066,map:pi("wood"),roughness:.95}),y=Q(10432562,{roughness:.75}),S=Q(4528938,{roughness:.72}),A=new St({color:pi("roof")?12700651:2435916,map:pi("roof",3,3),roughness:.84,side:Gt}),w=Q(14137739,{roughness:.92}),m=Q(16760166,{emissive:16748340,emissiveIntensity:2.4,roughness:.5}),M=Q(9885951,{emissive:7122687,emissiveIntensity:2.8,roughness:.45}),D=pi("maple")&&new St({map:pi("maple"),side:Gt,alphaTest:.3,roughness:1,depthWrite:!0}),C=pi("cedar")&&new St({map:pi("cedar"),side:Gt,alphaTest:.3,roughness:1,depthWrite:!0}),B=vi("rgba(255,191,104,0.95)","rgba(255,131,38,0)",64),J=vi("rgba(175,181,237,0.25)","rgba(135,142,213,0)",64),z=[],k=Ht(1,1,.2,7),X=Ht(1,1,.26,18);e.background=new Qe(593709),e.fog=new Kn(1517387,.018),e.add(new Jr(9018074,1320222,1.28));let Z=new Kr(13358079,1.48);Z.position.set(-22,32,-14),Z.castShadow=!0,Z.shadow.mapSize.set(t?1024:2048,t?1024:2048),Z.shadow.camera.left=Z.shadow.camera.bottom=-27,Z.shadow.camera.right=Z.shadow.camera.top=27,Z.shadow.camera.near=1,Z.shadow.camera.far=95,Z.shadow.bias=-8e-4,e.add(Z,Z.target);let he=new vt(new si(185,24,12),new Mi({side:ci,depthWrite:!1,fog:!1,uniforms:{top:{value:new Qe(461349)},bottom:{value:new Qe(4342390)}},vertexShader:"varying vec3 v; void main(){v=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying vec3 v; void main(){gl_FragColor=vec4(mix(bottom,top,smoothstep(-.2,.65,v.y)),1.);}"}));e.add(he),h(F.sphere(7.2,24,16),new di({color:15198461,fog:!1}),{x:53,y:70,z:-122,shadow:!1});let ee=new gi(new ui({map:vi("rgba(200,210,255,0.5)","rgba(110,125,230,0)"),blending:Bt,depthWrite:!1,fog:!1}));ee.position.set(53,70,-122),ee.scale.set(62,62,1),e.add(ee);let te=new Float32Array(420*3);for(let T=0;T<420;T++){let N=o()*Math.PI*2,I=.12+o()*1.25;te[T*3]=Math.cos(N)*Math.cos(I)*170,te[T*3+1]=Math.sin(I)*170,te[T*3+2]=Math.sin(N)*Math.cos(I)*170}let pe=new yt;pe.setAttribute("position",new $t(te,3)),e.add(new xs(pe,new is({color:14214399,size:1,sizeAttenuation:!1,fog:!1})));let ke=pi("ground",22,22)||jt(256,256,(T,N,I)=>{T.fillStyle="#1e3838",T.fillRect(0,0,N,I);for(let re=0;re<2100;re++){let ne=48+(o()*38|0);T.fillStyle=`rgba(${ne/2|0},${ne},${ne*.85|0},${.2+o()*.3})`,T.fillRect(o()*N,o()*I,1+o()*3,2+o()*5)}});ke.wrapS=ke.wrapT=Ri,pi("ground")||ke.repeat.set(20,20);let Le=new ks;Le.moveTo(-Nt*2,-Nt*2),Le.lineTo(Nt*2,-Nt*2),Le.lineTo(Nt*2,Nt*2),Le.lineTo(-Nt*2,Nt*2),Le.closePath();for(let T of i.waterZones){let N=new $n;N.absellipse(T.x,-T.z,T.rx,T.rz,0,Math.PI*2,!0,0),Le.holes.push(N)}let xt=h(new Lh(Le,8),new St({map:ke,roughness:1}),{rx:-Math.PI/2,shadow:!1});xt.receiveShadow=!0,xt.userData.keep=!0;let rt=Q(4802104,{roughness:1});function le(T,N,I,re,ne,Se=rt,je=.025){let Pe=I-T,Ge=re-N,Je=Math.hypot(Pe,Ge);if(h(F.box(Je,.045,ne),Se,{x:(T+I)/2,y:je,z:(N+re)/2,ry:-Math.atan2(Ge,Pe),shadow:!1}),Se===rt)for(let ut=.65;ut<Je-.4;ut+=1.55){let zt=ut/Je,Tt=(o()-.5)*ne*.48,Lt=T+Pe*zt-Ge/Je*Tt,Qt=N+Ge*zt+Pe/Je*Tt;h(F.box(.75+o()*.55,.075,.45+o()*.4),f,{x:Lt,y:je+.045,z:Qt,ry:-Math.atan2(Ge,Pe)+(o()-.5)*.36,shadow:!1})}}for(let T of i.paths)for(let N=1;N<T.length;N++)le(...T[N-1],...T[N],N===1?3.3:2.8);le(-29,17,-10,22,2.4),le(9,9,31,9,2.5),le(-8,-28,24,-25,2.6),le(-28,1,-8,-28,2.3);let ge=pi("water",3,3),xe=new St({color:11655391,map:ge,bumpMap:ge,bumpScale:.045,metalness:.12,roughness:.24,transparent:!0,opacity:.88,emissive:668744,emissiveIntensity:.45,depthWrite:!1,side:Gt}),We=new St({map:ke,color:4347232,roughness:1,side:Gt});for(let T of i.waterZones){h(new Qn(1,64),We,{x:T.x,y:T.bottom,z:T.z,sx:T.rx*.96,sy:T.rz*.96,rx:-Math.PI/2,shadow:!1}),h(new Qn(1,64),xe,{x:T.x,y:T.level,z:T.z,sx:T.rx,sy:T.rz,rx:-Math.PI/2,shadow:!1});for(let N=0;N<7;N++){let I=N*Math.PI*2/7,re=T.x+Math.cos(I)*T.rx*.86,ne=T.z+Math.sin(I)*T.rz*.86;h(X,N%2?g:f,{x:re,y:.12,z:ne,sx:.85,sy:.38,sz:.7})}}let Fe=Q(4484695,{roughness:.85,flat:!0});for(let T=0;T<20;T++){let N=o()*Math.PI*2,I=Math.sqrt(o())*.83,re=Math.cos(N)*15*I,ne=23+Math.sin(N)*9*I;h(F.cyl(.35+o()*.26,.35,.035,8),Fe,{x:re,y:.08,z:ne,shadow:!1})}let Ee=Q(14724200,{roughness:.7,metalness:.22}),at=Q(12142396,{roughness:.75}),me=Q(15245496,{roughness:1,side:Gt});function de(T,N,I,re,ne=7){let Se=new U(...T),je=new U(...N),Pe=je.clone().sub(Se),Ge=Pe.length(),Je=h(F.cyl(I,I*1.08,Ge,ne),re,{x:(Se.x+je.x)/2,y:(Se.y+je.y)/2,z:(Se.z+je.z)/2});return Je.quaternion.setFromUnitVectors(new U(0,1,0),Pe.multiplyScalar(1/Ge)),Je}function _e(T,N,I,re,ne,Se){let je=I/2,Pe=re/2,Ge=I*.29,Je=[[-je,ne+.4,-Pe],[je,ne+.4,-Pe],[je,ne+.4,Pe],[-je,ne+.4,Pe]],ut=[-Ge,ne+Se,0],zt=[Ge,ne+Se,0],Tt=[[Je[0],Je[1],zt,ut],[Je[3],Je[2],zt,ut],[Je[0],Je[3],ut],[Je[1],Je[2],zt]],Lt=[],Qt=[];for(let Et of Tt){let li=Et.length===4?[[0,1,2],[0,2,3]]:[[0,1,2]];for(let ws of li)for(let pr of ws){let os=Et[pr];Lt.push(T+os[0],os[1],N+os[2]),Qt.push((os[0]/I+.5)*2,(os[2]/re+.5)*2+(os[1]-ne)/Se)}}let yi=new yt;yi.setAttribute("position",new $e(Lt,3)),yi.setAttribute("uv",new $e(Qt,2)),yi.computeVertexNormals(),h(yi,A);for(let Et=0;Et<4;Et++){let li=Je[Et],ws=Je[(Et+1)%4];de([T+li[0],li[1],N+li[2]],[T+ws[0],ws[1],N+ws[2]],.095,S)}de([T-Ge,ne+Se+.04,N],[T+Ge,ne+Se+.04,N],.13,Ee);for(let Et of[-1,1])h(F.sphere(.25,9,7),Ee,{x:T+Et*Ge,y:ne+Se+.05,z:N}),de([T+Et*(je-.9),ne+.1,N-Pe],[T+Et*Ge,ne+Se,N],.07,S),de([T+Et*(je-.9),ne+.1,N+Pe],[T+Et*Ge,ne+Se,N],.07,S)}let Ne=(T,N,I,re=2.6,ne=!1)=>{let Se=new gi(new ui({map:ne?vi("rgba(140,220,255,0.9)","rgba(50,135,255,0)"):B,transparent:!0,blending:Bt,depthWrite:!1}));Se.position.set(T,N,I),Se.scale.set(re,re,1),e.add(Se)};function Ie(T,N,I=2,re=!1){re&&(h(F.cyl(.13,.19,I+.25,8),b,{x:T,y:(I+.25)/2,z:N}),h(F.cyl(.31,.36,.18,9),g,{x:T,y:.09,z:N}),de([T,I+.1,N],[T+.7,I+.22,N],.095,b),i.addCircle(T,N,.18,I+.2,{sight:!1}),T+=.7),h(F.box(.54,.64,.54),m,{x:T,y:I,z:N,shadow:!1});for(let ne of[-1,1])for(let Se of[-1,1])h(F.box(.055,.72,.055),S,{x:T+ne*.29,y:I,z:N+Se*.29,shadow:!1});for(let ne of[-.14,.13])h(F.box(.63,.035,.035),S,{x:T,y:I+ne,z:N+.3,shadow:!1}),h(F.box(.035,.035,.63),S,{x:T+.3,y:I+ne,z:N,shadow:!1});h(F.box(.76,.09,.76),S,{x:T,y:I+.38,z:N}),h(F.cone(.52,.3,4),A,{x:T,y:I+.55,z:N,ry:Math.PI/4}),h(F.box(.7,.08,.7),S,{x:T,y:I-.39,z:N}),h(F.sphere(.11,7,5),Ee,{x:T,y:I-.51,z:N}),Ne(T,I,N,3.7),z.push(new U(T,I,N))}function ze(T,N,I=1){for(let re of[-1,1])h(F.cyl(.39*I,.48*I,.3*I,10),g,{x:T+re*2*I,y:.15*I,z:N}),h(F.cyl(.23*I,.3*I,4.5*I,9),at,{x:T+re*2*I,y:2.25*I,z:N}),h(F.cyl(.32*I,.32*I,.13*I,9),Ee,{x:T+re*2*I,y:3.55*I,z:N}),i.addCircle(T+re*2*I,N,.27*I,4.5*I);h(F.box(5.8*I,.32*I,.62*I),S,{x:T,y:4.48*I,z:N}),h(F.box(5.15*I,.24*I,.3*I),at,{x:T,y:3.83*I,z:N});for(let re of[-1,1])h(F.box(.85*I,.12*I,.72*I),at,{x:T+re*2.78*I,y:4.63*I,z:N,rz:re*.18}),de([T+re*1.2*I,3.7*I,N],[T+re*1.75*I,4.28*I,N],.07*I,Ee);h(F.box(.76*I,.66*I,.1*I),Ee,{x:T,y:4.08*I,z:N+.36*I})}ze(-31,31,1.15),ze(25,-17,.88),ze(-8,-23,.65);for(let[T,N]of[[-34,28],[-28,28],[-28,14],[-27,-5],[-19,7],[8,9],[14,-3],[18,-12],[27,-16],[4,28],[24,22],[29,14],[-2,-25],[-10,-31]])Ie(T,N,1.95,!0);function Ze(T,N,I,re,ne=3.8){let Se=Math.hypot(I-T,re-N),je=-Math.atan2(re-N,I-T),Pe=new ht;Pe.position.set((T+I)/2,0,(N+re)/2),Pe.rotation.y=je;let Ge=F.box(.73,.17,ne);for(let Je=-Se/2+.35;Je<Se/2;Je+=.78){let ut=.32+.12*(1-Math.abs(Je)/(Se/2));Pe.add(V(Ge,x,{x:Je,y:ut,z:0}));for(let zt of[-1,1])Pe.add(V(F.box(.62,.018,.055),Ee,{x:Je,y:ut+.09,z:zt*(ne/2-.11),shadow:!1}))}for(let Je of[-1,1]){Pe.add(V(F.box(Se+.7,.2,.22),b,{y:.16,z:Je*(ne/2-.18)}));for(let ut=-Se/2;ut<=Se/2;ut+=2.35)Pe.add(V(F.box(.16,1.35,.16),b,{x:ut,y:.87,z:Je*ne/2})),Pe.add(V(F.sphere(.14,8,5),Ee,{x:ut,y:1.6,z:Je*ne/2}));for(let ut=-Se/2;ut<Se/2;ut+=1.15){let zt=Math.min(Se/2,ut+1.15),Tt=li=>1.4+.19*Math.sin((li+Se/2)*Math.PI/2.35),Lt=new U(ut,Tt(ut),Je*ne/2),Qt=new U(zt,Tt(zt),Je*ne/2),yi=Qt.clone().sub(Lt),Et=V(F.cyl(.037,.037,yi.length(),6),Ee,{x:(Lt.x+Qt.x)/2,y:(Lt.y+Qt.y)/2,z:Lt.z,shadow:!1});Et.quaternion.setFromUnitVectors(new U(0,1,0),yi.normalize()),Pe.add(Et)}}e.add(Pe),i.addBox((T+I)/2,(N+re)/2,Se+1,ne,.44,{sight:!1,nav:!1});for(let Je of[T,I])h(F.box(1.4,.16,ne+.25),x,{x:Je,y:.08,z:N,shadow:!1});Ie(T+1.5,N+ne/2+.6,1.9,!0),Ie(I-1.5,re-ne/2-.6,1.9,!0)}Ze(-17,8,8,8),le(-12,29,-1,23,2.1,x,.12),le(-1,23,13,19,2.1,x,.12),le(13,19,24,26,2.1,x,.12);function et(T,N,I=1,re=!1,ne=!0){let Se=4.8*I;h(F.cyl(.31*I,.58*I,Se,9),v,{x:T,y:Se/2,z:N});for(let Pe=0;Pe<5;Pe++){let Ge=Pe*Math.PI*2/5+T*.14;de([T,2.7*I,N],[T+Math.cos(Ge)*1.6*I,(4.3+Pe%2*.45)*I,N+Math.sin(Ge)*1.6*I],.16*I,_),Pe<4&&de([T+Math.cos(Ge)*.3*I,.6*I,N+Math.sin(Ge)*.3*I],[T+Math.cos(Ge)*.95*I,.08,N+Math.sin(Ge)*.95*I],.12*I,_)}let je=re?p:o()>.4?d:u;for(let Pe=0;Pe<3;Pe++){let Ge=Pe*2.15+T,Je=T+Math.cos(Ge)*1*I,ut=N+Math.sin(Ge)*1*I,zt=(4.5+Pe*.32)*I;h(k,je,{x:Je,y:zt,z:ut,sx:1.7*I,sy:1.14*I,sz:1.65*I});let Tt=re?D:C;if(Tt)for(let Lt=0;Lt<(t?2:3);Lt++)h(new Ci(4.4*I,3.5*I),Tt,{x:Je,y:zt+.15*I,z:ut,ry:Lt*Math.PI/(t?2:3)+Ge,shadow:!1})}ne&&i.addCircle(T,N,.52*I,Se,{sight:!0})}let Ke=-29,j=0;for(let T of[-1,1]){h(F.cyl(1,1.42,7.2,10),_,{x:Ke+T*1.15,y:3.6,z:j}),i.addCircle(Ke+T*1.15,j,1,7.2,{sight:!0}),n(Ke+T*1.15,3.5,j,2,7,2);for(let N of[-1,1])de([Ke+T*1.2,1,j+N*.5],[Ke+T*3.5,.1,j+N*2.8],.29,_,9)}h(F.box(4.1,1.8,3),_,{x:Ke,y:7.7,z:j});for(let T=0;T<7;T++){let N=T*Math.PI*2/7,I=Ke+Math.cos(N)*3.4,re=j+Math.sin(N)*2.8,ne=8.6+T%3*.8;h(k,T%4===0?p:d,{x:I,y:ne,z:re,sx:3.1,sy:2.3,sz:3});let Se=T%4===0?D:C;if(Se)for(let je=0;je<2;je++)h(new Ci(7.5,5.7),Se,{x:I,y:ne+.35,z:re,ry:N+je*Math.PI/2,shadow:!1})}for(let[T,N]of[[-31,3],[-27,3],[-32,-2],[-26,-2]])h(F.box(.65,.1,.8),g,{x:T,y:.06,z:N,ry:o()*.5});i.addBush(Ke,j,2,"tree-hollow"),Ie(Ke-3.5,j+3,1.35);function Mt(T,N,I=1.3,re=!0){h(X,o()>.45?g:f,{x:T,y:I*.56,z:N,sx:I,sy:I*.72,sz:I*(.7+o()*.4)}),re&&i.addCircle(T,N,I*.68,I*1.3,{sight:!0})}for(let[T,N,I]of[[-21,-19,1.7],[-16,-16,1.5],[-10,-12,1.6],[2,-18,1.6],[7,-17,1.5],[12,-21,1.7],[33,-6,1.8],[36,18,1.8],[-35,-18,1.8]])Mt(T,N,I);function ot(T,N,I,re){for(let ne=0;ne<4;ne++){let Se=ne*Math.PI/2+.3,je=I*(.55+o()*.25),Pe=T+Math.cos(Se)*I*.46,Ge=N+Math.sin(Se)*I*.46,Je=re*(.67+o()*.38);h(F.cyl(je*.7,je,Je,7),ne%2?f:g,{x:Pe,y:Je/2-.08,z:Ge,ry:o()}),h(X,f,{x:Pe,y:Je-.14,z:Ge,sx:je*.8,sy:.34,sz:je*.7})}h(k,c,{x:T,y:re*.92,z:N,sx:I*.8,sy:.28,sz:I*.76}),i.addCircle(T,N,I*.8,re,{sight:!0})}for(let[T,N,I,re]of[[-40,18,2.6,3.6],[-40,-13,2.7,4.4],[-19,-37,2.7,4.7],[5,-40,3,5],[17,-38,2.8,5.4],[36,-36,3,6.1],[39,2,2.4,3.6],[17,34,2.1,3.8],[-18,34,2,2.9]])ot(T,N,I,re);let ct=jt(128,256,(T,N,I)=>{T.clearRect(0,0,N,I);for(let re=0;re<28;re++){let ne=o()*N,Se=1+o()*5;T.strokeStyle=`rgba(164,220,255,${.13+o()*.38})`,T.lineWidth=Se,T.beginPath(),T.moveTo(ne,0),T.bezierCurveTo(ne+o()*9,I*.35,ne-o()*9,I*.66,ne+o()*5,I),T.stroke()}}),L=h(new Ci(3.2,3.8),new di({map:ct,transparent:!0,opacity:.82,depthWrite:!1,side:Gt,color:10276607}),{x:15.35,y:1.94,z:33.3,ry:-Math.PI/2,shadow:!1});L.renderOrder=2,Ne(15.3,.35,33.3,4.2,!0);let E=31,q=28;for(let T of[-1,1])Mt(E+T*3.1,q,2.3),h(F.box(2.4,1.1,4.8),g,{x:E+T*3.15,y:3.5,z:q}),n(E+T*3.15,2,q,2.6,4,4.8),Mt(E+T*3,q-2.5,1.2);h(F.box(8.4,1.2,5.5),g,{x:E,y:4.7,z:q}),i.addBox(E,q,8.4,5.5,5.3,{bottom:4.1,sight:!0,nav:!1}),n(E,4.7,q,8.4,1.2,5.5),h(F.box(7.5,3.7,.45),g,{x:E,y:1.85,z:q+2.65}),i.addBox(E,q+2.65,7.5,.45,3.7,{sight:!0});for(let T=0;T<6;T++){let N=E-3.7+T*1.5;h(X,f,{x:N,y:5.1+o()*.24,z:q-2.35,sx:1.25,sy:.7,sz:.9}),h(F.cone(.24+o()*.18,.6+o()*.65,5),g,{x:N,y:3.83,z:q-2.35,rx:Math.PI,shadow:!1})}h(F.box(7.1,.07,4.8),f,{x:E,y:.035,z:q});for(let[T,N,I]of[[-2.2,-1.3,1.2],[-1.4,1.1,.8],[2.1,.6,1.5]])h(F.cone(.28,I,5),M,{x:E+T,y:I/2,z:q+N,rz:.15,shadow:!1}),Ne(E+T,I*.6,q+N,2.3,!0);i.addBush(E,q+1,1.6,"cave"),i.addBush(E-1.2,q-1.2,1,"cave"),Ne(E,2.4,q-1.9,5,!0),Ie(E+4.2,q+2.8,1.4);function se(T,N,I=1){h(F.cyl(.91*I,1.14*I,.42*I,8),g,{x:T,y:.21*I,z:N}),h(F.cyl(.72*I,.88*I,.15*I,8),Ee,{x:T,y:.46*I,z:N}),h(F.sphere(.54*I,12,10),f,{x:T,y:1.04*I,z:N,sy:1.32}),h(F.sphere(.43*I,12,10),f,{x:T,y:1.69*I,z:N+.13*I}),h(F.cone(.36*I,1.25*I,7),f,{x:T+.5*I,y:1.32*I,z:N-.42*I,rz:-.5}),h(F.cone(.24*I,.42*I,7),f,{x:T,y:1.51*I,z:N+.51*I,rx:Math.PI/2});for(let re of[-1,1])h(F.cone(.2*I,.59*I,6),f,{x:T+re*.29*I,y:2.07*I,z:N}),h(F.cone(.095*I,.33*I,6),p,{x:T+re*.29*I,y:2.09*I,z:N+.08*I}),h(F.sphere(.084*I,7,5),M,{x:T+re*.2*I,y:1.73*I,z:N+.5*I,shadow:!1}),h(F.box(.18*I,.05*I,.08*I),S,{x:T+re*.22*I,y:.52*I,z:N+.5*I});i.addCircle(T,N,.9*I,2.3*I,{sight:!0})}se(26,9,1.2),se(34,10,1.15);function O(T,N){h(F.box(13.3,.14,10.8),S,{x:T,y:.07,z:N}),h(F.box(12.4,.36,10),f,{x:T,y:.18,z:N}),i.addBox(T,N,12.4,10,.36,{sight:!1,nav:!1});for(let re=0;re<3;re++){let ne=N+5.4+re*.55,Se=.31-re*.1;h(F.box(7.5+re*.6,Se,.62),f,{x:T,y:Se/2,z:ne}),i.addBox(T,ne,7.5+re*.6,.62,Se,{sight:!1,nav:!1})}for(let re of[-1,1])for(let ne of[-1,1]){let Se=T+re*5.2,je=N+ne*3.9;h(F.cyl(.5,.55,.34,10),g,{x:Se,y:.48,z:je}),h(F.cyl(.3,.36,4.7,10),at,{x:Se,y:2.7,z:je}),h(F.cyl(.42,.42,.14,10),Ee,{x:Se,y:4.83,z:je});for(let Pe of[-1,1])de([Se,4.43,je],[Se+Pe*.85,5.05,je],.13,S);i.addCircle(Se,je,.36,5.1,{sight:!1})}h(F.box(12.9,.3,10.8),S,{x:T,y:5.05,z:N}),_e(T,N,14.2,12,5.15,2.25),_e(T,N-.3,8.6,6.4,6.95,1.52),_e(T,N+5.45,8.2,3.4,3.82,1.18);for(let re of[-1,1]){let ne=T+re*3.3;h(F.cyl(.18,.23,3.35,8),at,{x:ne,y:1.95,z:N+6}),h(F.cyl(.25,.25,.12,8),Ee,{x:ne,y:3.6,z:N+6})}h(F.box(6.4,3.3,.26),w,{x:T,y:2.3,z:N-4.6}),i.addBox(T,N-4.6,6.4,.26,4,{sight:!0}),n(T,2.3,N-4.6,6.4,3.3,.26);for(let re of[-1,1]){h(F.box(.22,2.4,5.5),w,{x:T+re*5.8,y:1.55,z:N}),i.addBox(T+re*5.8,N,.22,5.5,2.8,{sight:!0});let ne=new St({color:16765600,emissive:15828026,emissiveIntensity:.65,roughness:1});for(let Se of[-2,0,2]){h(F.box(.045,1.74,1.42),ne,{x:T+re*5.94,y:2.2,z:N+Se,shadow:!1});for(let je of[1.53,2.16,2.8])h(F.box(.09,.055,1.52),S,{x:T+re*5.97,y:je,z:N+Se})}}h(F.box(2.9,.92,1.5),S,{x:T,y:.82,z:N-2.4}),i.addBox(T,N-2.4,2.4,1.2,1.3,{sight:!0});let I=Q(1315622,{roughness:.95});h(F.cone(1.02,2.48,14),I,{x:T,y:2.56,z:N-2.4}),h(F.sphere(.56,16,12),I,{x:T,y:3.73,z:N-2.4,sy:1.35}),h(F.sphere(.31,16,12),w,{x:T,y:3.82,z:N-1.89,sx:.82,sy:1.2,sz:.34,shadow:!1});for(let re of[-1,1])h(F.sphere(.047,7,5),I,{x:T+re*.12,y:3.89,z:N-1.77,shadow:!1}),h(F.box(.16,.7,.08),Ee,{x:T+re*1.14,y:1.4,z:N-2.1});Ne(T,3.3,N-1.9,5.5,!0),Ie(T-4.4,N+4.2,1.8),Ie(T+4.4,N+4.2,1.8),i.addBush(T-3.7,N-2.3,1,"shrine-screen")}O(26,-27);function H(T,N){for(let I of[-1,1])for(let re of[-1,1]){let ne=T+I*2.7,Se=N+re*2.7;h(F.cyl(.4,.45,.32,8),g,{x:ne,y:.16,z:Se}),h(F.box(.34,7.3,.34),at,{x:ne,y:3.65,z:Se}),h(F.cyl(.39,.39,.15,8),Ee,{x:ne,y:6.8,z:Se}),i.addBox(ne,Se,.34,.34,7.3,{sight:!1})}for(let I of[-1,1])for(let re of[-1,1])de([T+re*2.7,1.15,N+I*2.7],[T+re*2.7,3.75,N-I*2.7],.13,S);h(F.box(6.6,.27,6.6),x,{x:T,y:3.8,z:N}),i.addBox(T,N,6.6,6.6,3.93,{bottom:3.65,sight:!1,nav:!1});for(let I of[-1,1]){h(F.box(6.5,.13,.16),S,{x:T,y:4.9,z:N+I*3.14}),i.addBox(T,N+I*3.14,6.5,.16,5,{bottom:3.95,sight:!1,nav:!1});for(let re=-2;re<=2;re++)h(F.box(.11,1,.12),at,{x:T+re*1.25,y:4.45,z:N+I*3.14})}h(F.box(.16,.13,6.3),S,{x:T+3.14,y:4.9,z:N}),i.addBox(T+3.14,N,.16,6.3,5,{bottom:3.95,sight:!1,nav:!1});for(let I of[-1,1])h(F.box(.16,.13,2.05),S,{x:T-3.14,y:4.9,z:N+I*2.15}),i.addBox(T-3.14,N+I*2.15,.16,2.05,5,{bottom:3.95,sight:!1,nav:!1});h(F.box(7.4,.2,7.4),S,{x:T,y:7.35,z:N}),_e(T,N,8.3,8.3,7.45,1.55),i.addBox(T,N,7.4,7.4,7.55,{bottom:7.25,sight:!0,nav:!1}),n(T,7.45,N,7.4,.45,7.4);for(let I=0;I<9;I++){let re=.42+I*.42;h(F.box(.9,.09,.12),x,{x:T-3.02,y:re,z:N})}i.addLadder(T-3.08,N,-1,0,1.4,4.05),Ie(T-2.1,N+2.2,4.7),Ie(T+2.1,N+2.2,4.7)}H(-7,-32);for(let T=-40;T<=40;T+=5.1)for(let[N,I]of[[T,-41],[T,41],[-41,T],[41,T]])Math.abs(T+31)<5&&I>0||et(N+(o()-.5)*1.4,I+(o()-.5)*1.4,1.1+o()*.45,o()>.88);for(let[T,N,I,re]of[[-35,-27,1.3,!1],[-26,-31,1.2,!1],[-34,13,1.1,!0],[-19,23,1,!1],[-11,16,1.1,!0],[-17,-1,1,!1],[2,-3,1.3,!0],[8,-27,1,!1],[16,29,1,!0],[22,36,1.1,!1],[35,-13,1.2,!0],[13,-35,1,!1],[-28,-13,1.1,!1]])et(T,N,I,re);function G(T,N,I=1.5){for(let ne=0;ne<3;ne++){let Se=ne*2.1;h(k,ne===1?c:d,{x:T+Math.cos(Se)*I*.35,y:.75,z:N+Math.sin(Se)*I*.35,sx:I*.7,sy:.8,sz:I*.7})}let re=o()>.6?D:C;if(re)for(let ne=0;ne<2;ne++)h(new Ci(I*2.35,I*1.65),re,{x:T,y:.85,z:N,ry:ne*Math.PI/2+.28,shadow:!1});i.addBush(T,N,I)}for(let[T,N]of[[-36,7],[-35,-7],[-22,13],[-16,21],[-3,30],[7,31],[19,31],[23,18],[34,19],[37,-8],[14,-30],[-19,-29],[-27,-24],[2,-34]])G(T,N);for(let[T,N,I,re]of[["crate",-37,30,.2],["crate",20,-30,-.3],["crate",34,24,.5],["barrel",-35,23,.1],["barrel",33,-27,-.2],["barrel",-10,-35,.4],["lantern",-23,15,0],["lantern",17,-10,0],["lantern",27,33,0],["pumpkin",-17,-27,.2],["pumpkin",18,19,-.5],["pumpkin",35,-15,.3],["bush",-32,-9,.1],["bush",37,7,-.2]]){let ne=rs(T);ne.position.set(N,0,I),ne.rotation.y=re,e.add(ne),(T==="crate"||T==="barrel")&&i.addCircle(N,I,T==="crate"?.57:.46,1.1,{sight:!1})}let P=F.cone(.16,.74,3),Y=F.sphere(.08,6,5);for(let[T,N]of[[-33,19],[-25,5],[-18,12],[-13,-23],[4,2],[14,13],[21,32],[32,3],[16,-32],[-4,-35]])for(let I=0;I<(t?12:18);I++){let re=o()*Math.PI*2,ne=1.8+o()*3.4,Se=T+Math.cos(re)*ne,je=N+Math.sin(re)*ne;if(Math.abs(Se)>39||Math.abs(je)>39||i.inWater(Se,je))continue;let Pe=.32+o()*.55;for(let Ge=0;Ge<3;Ge++)h(P,Ge===0?d:c,{x:Se+(Ge-1)*.12,y:Pe/2,z:je,sx:.72,sy:Pe/.74,sz:.7,rz:(Ge-1)*.42,shadow:!1});if(I%3===0){h(Y,me,{x:Se,y:Pe+.08,z:je,shadow:!1});for(let Ge=0;Ge<4;Ge++)h(Y,p,{x:Se+Math.cos(Ge*Math.PI/2)*.13,y:Pe+.08,z:je+Math.sin(Ge*Math.PI/2)*.13,shadow:!1})}}let ve=Q(4352850,{roughness:1});for(let T=0;T<26;T++){let N=T*2.399,I=.74+o()*.26,re=Math.cos(N)*17*I,ne=23+Math.sin(N)*10*I;h(F.cyl(.045,.07,.9+o()*.8,5),ve,{x:re,y:.7,z:ne}),T%4===0&&i.addBush(re,ne,.75,"reeds")}for(let[T,N]of[[-7,18],[6,20],[14,22],[30,33],[-13,9]]){let I=new gi(new ui({map:J,transparent:!0,depthWrite:!1,fog:!1,opacity:.55}));I.position.set(T,.9,N),I.scale.set(10,3.8,1),e.add(I)}let Me=[];for(let[T,N]of[[-10,19],[4,27],[17,24],[-19,10],[20,-9]]){let I=h(F.sphere(.24,9,7),M,{x:T,y:.7,z:N,shadow:!1});I.userData.keep=!0,Me.push(I),Ne(T,.7,N,2.4,!0)}let ue=t?48:88,Te=new Float32Array(ue*3),Ae=[],Be=[[-29,0,6],[-12,9,8],[12,14,7],[26,-26,8]];for(let T=0;T<ue;T++){let[N,I,re]=Be[T%Be.length],ne=o()*Math.PI*2,Se=o()*re,je=N+Math.cos(ne)*Se,Pe=I+Math.sin(ne)*Se,Ge=.8+o()*6.1;Te.set([je,Ge,Pe],T*3),Ae.push([je,Ge,Pe,o()*Math.PI*2])}let qe=new yt;qe.setAttribute("position",new $t(Te,3)),e.add(new xs(qe,new is({color:16759247,map:vi("rgba(255,245,240,1)","rgba(255,180,205,0)",32),size:.28,sizeAttenuation:!0,transparent:!0,alphaTest:.08,depthWrite:!1})));let W=new St({color:9755121,emissive:3973832,emissiveIntensity:.7,transparent:!0,opacity:.38,side:Gt,depthWrite:!1});for(let T of i.waterZones)for(let N=0;N<11;N++){let I=o()*Math.PI*2,re=Math.sqrt(o())*.8,ne=T.x+Math.cos(I)*T.rx*re,Se=T.z+Math.sin(I)*T.rz*re;h(new lr(.45+o()*.5,.5+o()*.58,20),W,{x:ne,y:.077,z:Se,rx:-Math.PI/2,shadow:!1})}let ce=[];for(let T=0;T<(t?2:4);T++){let N=new _s(16755810,16,12,1.9);e.add(N),ce.push(N)}function fe(T){let N=z.slice().sort((I,re)=>I.distanceToSquared(T)-re.distanceToSquared(T));ce.forEach((I,re)=>{N[re]&&I.position.copy(N[re])}),Z.position.set(T.x-22,32,T.z-14),Z.target.position.set(T.x,0,T.z)}function Ce(T){L.material.opacity=.73+Math.sin(T*3.3)*.09,xe.map&&(xe.map.offset.x=T*.012%1,xe.map.offset.y=T*-.008%1,xe.bumpMap.offset.copy(xe.map.offset));for(let N=0;N<Me.length;N++)Me[N].position.y=.7+Math.sin(T*1.4+N*2.1)*.28;for(let N=0;N<ue;N++){let[I,re,ne,Se]=Ae[N];Te[N*3]=I+Math.sin(T*.48+Se)*.6,Te[N*3+1]=.5+((re-.5-T*(.34+N%5*.055))%6.6+6.6)%6.6,Te[N*3+2]=ne+Math.cos(T*.37+Se)*.37}qe.attributes.position.needsUpdate=!0}return{stats:lo(e),world:i,cameraBlockers:r,bushMeshes:[],updateLights:fe,updateVisuals:Ce,playerSpawn:new U(-31,0,34),botSpawns:[[-34,33],[-27,36],[-31,27],[-23,32],[-36,26],[-20,27]],ghostSpawn:new U(26,0,-20),ghostSpawns:[[26,-20],[20,-26],[31,-20],[24,-33]]}}function Zh(e,t,i){let s=new yt,r=new Float32Array(t*3),a=[];for(let o=0;o<t;o++){let h={x:(Math.random()*2-1)*i,z:(Math.random()*2-1)*i,y:.6+Math.random()*3,p:Math.random()*10,r:.5+Math.random()*1.5};a.push(h)}s.setAttribute("position",new $t(r,3));let n=vi("rgba(255,245,190,1)","rgba(255,200,80,0)",64),l=new xs(s,new is({size:.35,map:n,transparent:!0,depthWrite:!1,blending:Bt,color:16773296}));return l.frustumCulled=!1,e.add(l),o=>{for(let h=0;h<t;h++){let u=a[h];r[h*3]=u.x+Math.sin(o*.3+u.p)*u.r,r[h*3+1]=u.y+Math.sin(o*.8+u.p*2)*.4,r[h*3+2]=u.z+Math.cos(o*.25+u.p)*u.r}s.attributes.position.needsUpdate=!0}}function $h(e,t,i=14){let s=Q(723727,{roughness:1,flat:!0}),r=Q(16777215,{emissive:16777215,emissiveIntensity:.4}),a=Q(0),n=Ht(.2,1,.35,4),l=[];for(let h=0;h<i;h++){let u=new ht;u.add(V(n,s));for(let p of[-1,1])u.add(V(F.sphere(.06,8,6),r,{x:p*.07,y:.04,z:.15,shadow:!1})),u.add(V(F.sphere(.03,6,4),a,{x:p*.07,y:.04,z:.2,shadow:!1}));let d,c;do d=(Math.random()*2-1)*26,c=(Math.random()*2-1)*26;while(t.groundAt(d,c,.3,99)>0||Math.hypot(d,c-22)<5);u.position.set(d,.2,c),e.add(u),l.push({g:u,home:new be(d,c),vx:0,vz:0,hop:Math.random()*6})}let o={x:0,y:0,z:0};return(h,u,d)=>{for(let c of l){let p=c.g.position.x-d.x,v=c.g.position.z-d.z,_=Math.hypot(p,v);_<3.2?(c.vx+=p/_*30*h,c.vz+=v/_*30*h):(c.vx+=(c.home.x-c.g.position.x)*.4*h,c.vz+=(c.home.y-c.g.position.z)*.4*h),c.vx*=1-3*h,c.vz*=1-3*h,o.x=c.g.position.x+c.vx*h,o.z=c.g.position.z+c.vz*h,t.resolve(o,.2,0),c.g.position.x=o.x,c.g.position.z=o.z;let g=Math.hypot(c.vx,c.vz);c.hop+=h*(4+g*2),c.g.position.y=.2+Math.abs(Math.sin(c.hop))*(.08+Math.min(.35,g*.08)),g>.3?c.g.rotation.y=Math.atan2(c.vx,c.vz):c.g.lookAt(d.x,.2,d.z)}}}var Ws,co,xp,uo=class{constructor(t,i){Ot(this,Ws);this.keys=new Set,this.move={x:0,y:0},this.look={x:0,y:0},this.jumpQueued=!1,this.dashQueued=!1,this.jumpHeldBtn=!1,this.lookOnly=!1,this.touchRun=!1,this.touchCrouch=!1,this.enabled=!1,this.canvas=t,addEventListener("keydown",r=>{r.code==="Space"&&(r.repeat||(this.jumpQueued=!0),r.preventDefault()),r.code==="KeyE"&&!r.repeat&&(this.dashQueued=!0),r.code==="KeyC"&&!r.repeat&&ae(this,Ws,co).call(this,!this.touchCrouch),this.keys.add(r.code)}),addEventListener("keyup",r=>this.keys.delete(r.code)),addEventListener("blur",()=>this.keys.clear());let s=!1;t.addEventListener("mousedown",()=>{if(this.enabled){if(document.pointerLockElement!==t&&t.requestPointerLock)try{let r=t.requestPointerLock();r&&r.catch&&r.catch(()=>{})}catch{}s=!0}}),addEventListener("mouseup",()=>s=!1),addEventListener("mousemove",r=>{this.enabled&&(document.pointerLockElement===t||s)&&(this.look.x+=r.movementX*Oe.camera.mouseSens,this.look.y+=r.movementY*Oe.camera.mouseSens)}),this.root=i,ae(this,Ws,xp).call(this,i)}reset(){var t,i;this.touchRun=!1,ae(this,Ws,co).call(this,!1),this.jumpHeldBtn=!1,(i=(t=this.root)==null?void 0:t.querySelector(".btn-run"))==null||i.classList.remove("active"),this.move.x=this.move.y=0}read(){let t=this.keys,i=this.move.x,s=this.move.y;(t.has("KeyW")||t.has("ArrowUp"))&&(s+=1),(t.has("KeyS")||t.has("ArrowDown"))&&(s-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(i+=1),(t.has("KeyA")||t.has("ArrowLeft"))&&(i-=1);let r=Math.hypot(i,s);r>1&&(i/=r,s/=r);let a={x:i,y:s,run:t.has("ShiftLeft")||t.has("ShiftRight")||this.touchRun||this.stickRun,crouch:this.touchCrouch||t.has("ControlLeft"),jump:this.jumpQueued,jumpHold:t.has("Space")||this.jumpHeldBtn,dash:this.dashQueued,lookX:this.look.x,lookY:this.look.y};return this.jumpQueued=!1,this.dashQueued=!1,this.look.x=this.look.y=0,this.enabled||(a.x=a.y=0,a.jump=a.dash=a.jumpHold=!1,a.lookX=a.lookY=0),this.lookOnly&&(a.x=a.y=0,a.jump=a.dash=a.run=a.jumpHold=a.crouch=!1),a}releasePointer(){document.pointerLockElement&&document.exitPointerLock()}};Ws=new WeakSet,co=function(t){var i,s;this.touchCrouch=t,(s=(i=this.root)==null?void 0:i.querySelector(".btn-crouch"))==null||s.classList.toggle("active",t)},xp=function(t){let i=t.querySelector(".stick"),s=t.querySelector(".stick-knob"),r=t.querySelector(".stick-zone"),a=t.querySelector(".look-zone"),n=x=>{x.preventDefault(),x.stopPropagation()},l=(x,b,y)=>{let S=t.querySelector(x);S.addEventListener("pointerdown",w=>{n(w),S.classList.add("down"),b();try{S.setPointerCapture(w.pointerId)}catch{}});let A=()=>{S.classList.remove("down"),y==null||y()};S.addEventListener("pointerup",A),S.addEventListener("pointercancel",A),S.addEventListener("mousedown",w=>w.stopPropagation())};l(".btn-jump",()=>{this.jumpQueued=!0,this.jumpHeldBtn=!0},()=>{this.jumpHeldBtn=!1}),l(".btn-dash",()=>{this.dashQueued=!0}),l(".btn-run",()=>{this.touchRun=!this.touchRun,t.querySelector(".btn-run").classList.toggle("active",this.touchRun)}),l(".btn-crouch",()=>ae(this,Ws,co).call(this,!this.touchCrouch));let o=null,h=0,u=0,d=52;r.addEventListener("pointerdown",x=>{n(x),o=x.pointerId;let b=r.getBoundingClientRect(),y=r.classList.contains("fixed");h=y?b.left+b.width/2:x.clientX,u=y?b.top+b.height/2:x.clientY,y||(i.style.left=h+"px",i.style.top=u+"px"),i.classList.add("on");try{r.setPointerCapture(x.pointerId)}catch{}c(x)});let c=x=>{if(x.pointerId!==o)return;let b=x.clientX-h,y=x.clientY-u,S=Math.hypot(b,y);S>d&&(b*=d/S,y*=d/S),s.style.transform=`translate(${b}px, ${y}px)`,this.move.x=b/d,this.move.y=-y/d,this.stickRun=S>d*1.35,x.preventDefault()},p=x=>{x.pointerId===o&&(o=null,this.move.x=this.move.y=0,this.stickRun=!1,s.style.transform="",i.classList.remove("on"))};r.addEventListener("pointermove",c),r.addEventListener("pointerup",p),r.addEventListener("pointercancel",p),r.addEventListener("mousedown",x=>x.stopPropagation());let v=null,_=0,g=0;a.addEventListener("pointerdown",x=>{if(x.pointerType!=="mouse"){v=x.pointerId,_=x.clientX,g=x.clientY;try{a.setPointerCapture(x.pointerId)}catch{}x.preventDefault()}}),a.addEventListener("pointermove",x=>{x.pointerId===v&&(this.look.x+=(x.clientX-_)*Oe.camera.touchSens,this.look.y+=(x.clientY-g)*Oe.camera.touchSens,_=x.clientX,g=x.clientY,x.preventDefault())});let f=x=>{x.pointerId===v&&(v=null)};a.addEventListener("pointerup",f),a.addEventListener("pointercancel",f)};var Wi=Oe.camera,js,Jh,Kh,po=class{constructor(t,i){Ot(this,js);this.cam=t,this.blockers=i,this.yaw=0,this.pitch=.32,this.distance=Wi.distance,this.baseDistance=Wi.distance,this.lookHeight=Wi.height,this.curDist=Wi.distance,this.focus=new U,this.ray=new qd,this.mode="third",this.shake=0}configure(t){var i,s,r;this.baseDistance=(i=t==null?void 0:t.distance)!=null?i:Wi.distance,this.lookHeight=(s=t==null?void 0:t.height)!=null?s:Wi.height,this.side=(r=t==null?void 0:t.side)!=null?r:0}snap(t){this.focus.set(t.x,t.y+this.lookHeight,t.z),this.curDist=this.baseDistance,ae(this,js,Kh).call(this)}update(t,i,s){this.yaw-=s.lookX,this.pitch=It.clamp(this.pitch+s.lookY,Wi.pitchMin,Wi.pitchMax);let r=new U(i.x,i.y+this.lookHeight,i.z),a=1-Math.exp(-t*Wi.follow*1.6),n=1-Math.exp(-t*Wi.follow*.6);this.focus.x+=(r.x-this.focus.x)*a,this.focus.z+=(r.z-this.focus.z)*a,this.focus.y+=(r.y-this.focus.y)*n;let l=ae(this,js,Jh).call(this);this.ray.set(this.focus,l),this.ray.far=this.baseDistance;let o=this.ray.intersectObjects(this.blockers,!1)[0],h=o?Math.max(Wi.minDistance,o.distance-.35):this.baseDistance;this.curDist=h<this.curDist?h:this.curDist+(h-this.curDist)*(1-Math.exp(-t*4)),this.shake=Math.max(0,this.shake-t*1.5),ae(this,js,Kh).call(this)}};js=new WeakSet,Jh=function(){return new U(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch)).normalize()},Kh=function(){let t=Math.cos(this.yaw),i=-Math.sin(this.yaw),s=this.focus.clone();s.x+=t*this.side,s.z+=i*this.side;let r=s.clone().addScaledVector(ae(this,js,Jh).call(this),this.curDist);if(r.y=Math.max(.35,r.y),this.shake>0){let a=this.shake*.12;r.x+=(Math.random()-.5)*a,r.y+=(Math.random()-.5)*a,r.z+=(Math.random()-.5)*a}this.cam.position.copy(r),this.cam.lookAt(s)};var sa=class{constructor(t,i=.55,s=.5){this.cell=s,this.half=t.half,this.n=Math.round(t.half*2/s),this.blocked=new Uint8Array(this.n*this.n);for(let r=0;r<this.n;r++)for(let a=0;a<this.n;a++){let n=-this.half+(a+.5)*s,l=-this.half+(r+.5)*s,o=Math.abs(n)>this.half-1.4||Math.abs(l)>this.half-1.4,h=t.near(n,l);if(!o){for(let u of h.boxes)if(!(!u.nav||u.top<.35)&&n>u.minX-i&&n<u.maxX+i&&l>u.minZ-i&&l<u.maxZ+i){o=!0;break}}if(!o){for(let u of h.circles)if(!(!u.nav||u.top<.35)&&(n-u.x)**2+(l-u.z)**2<(u.r+i)**2){o=!0;break}}this.blocked[r*this.n+a]=o?1:0}this.g=new Float32Array(this.n*this.n),this.from=new Int32Array(this.n*this.n),this.closed=new Uint8Array(this.n*this.n)}toCell(t,i){let s=Math.max(0,Math.min(this.n-1,Math.floor((t+this.half)/this.cell))),r=Math.max(0,Math.min(this.n-1,Math.floor((i+this.half)/this.cell)));return[s,r]}center(t,i){return[-this.half+(t+.5)*this.cell,-this.half+(i+.5)*this.cell]}free(t,i){return t>=0&&i>=0&&t<this.n&&i<this.n&&!this.blocked[i*this.n+t]}nearestFree(t,i){if(this.free(t,i))return[t,i];for(let s=1;s<14;s++){let r=null,a=1e9;for(let n=-s;n<=s;n++)for(let l=-s;l<=s;l++){if(Math.max(Math.abs(l),Math.abs(n))!==s||!this.free(t+l,i+n))continue;let o=l*l+n*n;o<a&&(a=o,r=[t+l,i+n])}if(r)return r}return[t,i]}find(t,i,s,r){let a=this.n,[n,l]=this.nearestFree(...this.toCell(t,i)),[o,h]=this.nearestFree(...this.toCell(s,r)),u=l*a+n,d=h*a+o;this.g.fill(1/0),this.closed.fill(0),this.from.fill(-1),this.g[u]=0;let c=new Qh,p=(S,A)=>{let w=Math.abs(S-o),m=Math.abs(A-h);return w+m+(Math.SQRT2-2)*Math.min(w,m)};c.push(u,p(n,l));let v=!1,_=0;for(;c.size&&_++<4e4;){let S=c.pop();if(S===d){v=!0;break}if(this.closed[S])continue;this.closed[S]=1;let A=S%a,w=S/a|0;for(let m=-1;m<=1;m++)for(let M=-1;M<=1;M++){if(!M&&!m)continue;let D=A+M,C=w+m;if(!this.free(D,C)||M&&m&&(!this.free(A+M,w)||!this.free(A,w+m)))continue;let B=C*a+D,J=this.g[S]+(M&&m?Math.SQRT2:1);J<this.g[B]&&(this.g[B]=J,this.from[B]=S,c.push(B,J+p(D,C)))}}if(!v)return null;let g=[];for(let S=d;S!==-1;S=this.from[S])g.push(S);g.reverse();let f=g.map(S=>this.center(S%a,S/a|0));f[f.length-1]=[s,r];let x=[],b=[t,i],y=0;for(;y<f.length-1;){let S=y+1;for(let A=f.length-1;A>y+1;A--)if(this.clear(b[0],b[1],f[A][0],f[A][1])){S=A;break}x.push(f[S]),b=f[S],y=S}return x.length||x.push([s,r]),x}clear(t,i,s,r){let a=Math.hypot(s-t,r-i),n=Math.ceil(a/(this.cell*.4));for(let l=1;l<n;l++){let o=l/n,[h,u]=this.toCell(t+(s-t)*o,i+(r-i)*o);if(this.blocked[u*this.n+h])return!1}return!0}},Qh=class{constructor(){this.a=[],this.p=[]}get size(){return this.a.length}push(t,i){let s=this.a,r=this.p;s.push(t),r.push(i);let a=s.length-1;for(;a>0;){let n=a-1>>1;if(r[n]<=r[a])break;[s[n],s[a]]=[s[a],s[n]],[r[n],r[a]]=[r[a],r[n]],a=n}}pop(){let t=this.a,i=this.p,s=t[0],r=t.pop(),a=i.pop();if(t.length){t[0]=r,i[0]=a;let n=0;for(;;){let l=n*2+1,o=l+1,h=n;if(l<t.length&&i[l]<i[h]&&(h=l),o<t.length&&i[o]<i[h]&&(h=o),h===n)break;[t[h],t[n]]=[t[n],t[h]],[i[h],i[n]]=[i[n],i[h]],n=h}}return s}};var as=Oe.world,fo=new U,_p=new U,cr=new U,Xa=new U,aa,Sp,Mp,ra=class{constructor(t,i){Ot(this,aa);this.hero=t,this.world=i,this.pos=new U,this.vel=new U,this.yaw=0,this.grounded=!0,this.coyote=0,this.jumpBuf=0,this.stamina=1,this.exhausted=!1,this.running=!1,this.landed=!1,this.landSpeed=0,this.dashT=0,this.dashCd=0,this.boostT=0,this.boostMul=1,this.moveMul=1,this.slowMul=1,this.speed=0,this.stagger=0,this.mantle=null,this.climbing=!1,this.flying=!1,this.flyEnergy=1,this.swimming=!1,this.diving=!1,this.dashCharges=0,this.chargeT=0,this.crouching=!1}get phys(){return Oe.heroes[this.hero.id]}get radius(){return this.hero.radius}get height(){return this.hero.height*(this.crouching?.58:1)}get elevated(){return this.pos.y>1.3}spawn(t,i=Math.PI){var s;this.pos.copy(t),this.vel.set(0,0,0),this.yaw=i,this.stamina=1,this.exhausted=!1,this.grounded=!0,this.dashT=this.dashCd=this.boostT=this.stagger=0,this.mantle=null,this.climbing=this.flying=this.crouching=this.swimming=this.diving=!1,this.flyEnergy=1,this.dashCharges=(s=this.phys.dash.charges)!=null?s:0,this.chargeT=0}get dashReady(){return this.dashCd<=0&&(this.phys.dash.charges?this.dashCharges>0:!0)}update(t,i,s){var w,m,M,D,C,B,J;let r=this.phys;fo.set(-Math.sin(s),0,-Math.cos(s)),_p.set(-fo.z,0,fo.x),cr.set(0,0,0).addScaledVector(fo,i.y||0).addScaledVector(_p,i.x||0);let a=Math.min(1,cr.length());a>.001&&cr.normalize();let n=cr.x,l=cr.z;this.dashed=!1,this.jumped=!1,this.landed=!1;let o=((m=(w=this.world).waterAt)==null?void 0:m.call(w,this.pos.x,this.pos.z))||null,h=this.swimming;if(this.swimming=!!o&&this.pos.y<o.level+.18,this.mantle)return ae(this,aa,Sp).call(this,t);i.crouch&&(this.grounded||this.swimming)&&(r.jump>0||this.swimming)?this.crouching=!0:this.crouching&&(!i.crouch||!this.grounded&&!this.swimming)&&this.world.ceilingAt(this.pos.x,this.pos.z,this.radius,this.pos.y+.1)>this.pos.y+this.hero.height&&(this.crouching=!1);let u=i.run&&a>.2&&!this.crouching;this.exhausted&&this.stamina>.35&&(this.exhausted=!1),this.running=u&&!this.exhausted,this.running?(this.stamina-=t/r.stamina,this.stamina<=0&&(this.stamina=0,this.exhausted=!0,this.running=!1)):this.stamina=Math.min(1,this.stamina+t*r.regen*(a<.1?1.4:1)),this.dashCd=Math.max(0,this.dashCd-t),this.dashT=Math.max(0,this.dashT-t),r.dash.charges&&(this.dashCharges<r.dash.charges?(this.chargeT+=t,this.chargeT>=r.dash.recharge&&(this.chargeT=0,this.dashCharges++)):this.chargeT=0),i.dash&&this.dashReady&&(a>.2||this.speed>1)&&(this.dashT=r.dash.time,this.dashCd=r.dash.cooldown,r.dash.charges&&this.dashCharges--,this.dashed=!0);let d=this.dashT>0;this.boostT=Math.max(0,this.boostT-t),this.stagger=Math.max(0,this.stagger-t);let c=this.exhausted?.85:1,p=this.swimming?this.running?.92:.68:1,v=this.moveMul*this.slowMul*p*(this.boostT>0?this.boostMul:1)*(this.stagger>0?.45:1),_=(this.running?r.run:r.walk*c*(this.crouching?.5:1))*a*v;d&&(_=r.run*r.dash.mul*this.moveMul*this.slowMul*p);let g=(d&&a<.2?cr.set(Math.sin(this.yaw),0,Math.cos(this.yaw)):cr).multiplyScalar(_);Xa.set(this.vel.x,0,this.vel.z);let f=this.grounded?a>.01?r.accel:r.decel:r.air;if(this.grounded&&a>.2){let z=Xa.length();if(z>r.walk){let k=(Xa.x*g.x+Xa.z*g.z)/(z*(g.length()||1));k<.3&&(f*=It.lerp(.55,1,(k+1)/1.3)**(r.mass>2?1.6:1))}}d&&(f=r.accel*3);let x=g.sub(Xa),b=f*t;x.length()>b&&x.setLength(b),this.vel.x+=x.x,this.vel.z+=x.z;let y=this.world.ladderAt(this.pos.x,this.pos.z,this.radius,this.pos.y);this.climbing=!!(y&&a>.3&&n*-y.nx+l*-y.nz>.4);let S=as.gravity*r.gravity;if(i.jump?this.jumpBuf=as.jumpBuffer:this.jumpBuf-=t,this.coyote=this.grounded||this.climbing?as.coyoteTime:this.coyote-t,!this.swimming&&this.jumpBuf>0&&this.coyote>0&&r.jump>0&&!this.crouching&&(this.vel.y=Math.sqrt(2*S*r.jump),this.climbing&&y&&(this.vel.x+=y.nx*4,this.vel.z+=y.nz*4),this.grounded=!1,this.climbing=!1,this.coyote=0,this.jumpBuf=0,this.jumped=!0,this.stamina=Math.max(0,this.stamina-.03)),this.flying=!1,this.swimming){this.jumpBuf=0,this.climbing=!1,this.diving=!!i.crouch;let z=o.level-this.hero.height*.46,X=((this.diving?o.bottom+.38:z)-this.pos.y)*7.5-this.vel.y*3.5;this.vel.y+=It.clamp(X*t,-5*t,5*t),(i.jump||i.jumpHold)&&(this.vel.y=Math.min(4.2,this.vel.y+13*t)),this.diving&&(this.vel.y=Math.max(-3.2,this.vel.y-10*t)),this.vel.y=It.clamp(this.vel.y,-3.2,4.2),this.grounded=!1}else r.fly&&((i.jumpHold||i.jump)&&this.flyEnergy>0?(this.flying=!0,this.vel.y+=(r.fly.speed-this.vel.y)*Math.min(1,t*8),this.flyEnergy=Math.max(0,this.flyEnergy-t/r.fly.time),this.grounded=!1):this.grounded&&(this.flyEnergy=Math.min(1,this.flyEnergy+t*r.fly.regen)));if(this.climbing?(this.vel.y=(M=r.climb)!=null?M:3.2,this.vel.x*=.5,this.vel.z*=.5,this.grounded=!1):!this.flying&&!this.swimming&&(this.vel.y=Math.max(-as.maxFall*(r.fly?.3:1),this.vel.y-S*t*(r.fly&&this.vel.y<0?.35:1))),ae(this,aa,Mp).call(this,t),this.swimming&&!((C=(D=this.world).waterAt)!=null&&C.call(D,this.pos.x,this.pos.z))){let z=this.world.groundAt(this.pos.x,this.pos.z,this.radius,this.pos.y+as.stepHeight);this.pos.y<z&&(this.pos.y=z),this.vel.y=0,this.grounded=!0,this.swimming=this.diving=!1,this.crouching=!1}if(h&&!((J=(B=this.world).waterAt)!=null&&J.call(B,this.pos.x,this.pos.z))&&(this.crouching=!1),!this.grounded&&!this.mantle&&a>.3&&this.vel.y<4&&r.reach>0){let z=this.radius+.3,k=this.pos.x+n*z,X=this.pos.z+l*z,Z=this.world.ledgeAt(k,X,this.pos.y,r.reach,this.height);if(Z!==null){let he=new U(this.pos.x+n*(this.radius+.35),Z,this.pos.z+l*(this.radius+.35));this.mantle={t:0,dur:.22+(Z-this.pos.y)*.12*(r.mass>2?1.4:1),from:this.pos.clone(),to:he},this.vel.set(0,0,0),this.stamina=Math.max(0,this.stamina-.05),this.climbing=!1}}let A=Math.hypot(this.vel.x,this.vel.z);if(A>.4&&(a>.05||d)){let z=Math.atan2(this.vel.x,this.vel.z),k=Math.atan2(Math.sin(z-this.yaw),Math.cos(z-this.yaw));this.yaw+=k*Math.min(1,r.turn*t)}else this.climbing&&y&&(this.yaw=Math.atan2(-y.nx,-y.nz));this.speed=A}animState(t){let i=this.mantle;return{t,speed:i?0:this.speed||0,grounded:this.grounded&&!i,vy:i||this.climbing?3:this.vel.y,running:this.running||this.dashT>0,landed:this.landed,landSpeed:this.landSpeed,crouch:this.crouching,swimming:this.swimming,diving:this.diving}}};aa=new WeakSet,Sp=function(t){let i=this.mantle;i.t+=t;let s=Math.min(1,i.t/i.dur),r=Math.min(1,s/.65),a=Math.max(0,(s-.35)/.65),n=l=>l*l*(3-2*l);if(this.pos.y=i.from.y+(i.to.y-i.from.y)*n(r),this.pos.x=i.from.x+(i.to.x-i.from.x)*n(a),this.pos.z=i.from.z+(i.to.z-i.from.z)*n(a),this.grounded=!1,this.speed=0,s>=1){this.mantle=null;let l={x:this.pos.x,y:this.pos.y,z:this.pos.z};this.world.resolve(l,this.radius,this.pos.y+as.stepHeight,this.pos.y+this.height*.9),this.pos.x=l.x,this.pos.z=l.z,this.pos.y=Math.max(this.pos.y,this.world.groundAt(this.pos.x,this.pos.z,this.radius,this.pos.y+.1)),this.grounded=!0,this.vel.set(0,0,0)}},Mp=function(t){let i=this.pos.y+(this.grounded?as.stepHeight:.08),s=this.pos.y+this.height*.9,r={x:this.pos.x+this.vel.x*t,y:this.pos.y,z:this.pos.z+this.vel.z*t},a=r.x,n=r.z;this.hitWall=this.world.resolve(r,this.radius,i,s);let l=r.x-a,o=r.z-n,h=Math.hypot(l,o);if(h>1e-5){let c=l/h,p=o/h,v=this.vel.x*c+this.vel.z*p;v<0&&(this.vel.x-=v*c,this.vel.z-=v*p)}this.pos.x=r.x,this.pos.z=r.z;let u=this.grounded,d=this.world.groundAt(this.pos.x,this.pos.z,this.radius,i);if(this.pos.y+=this.vel.y*t,this.vel.y>0){let c=this.world.ceilingAt(this.pos.x,this.pos.z,this.radius,this.pos.y-this.vel.y*t+this.height*.5);this.pos.y+this.height>c&&(this.pos.y=Math.max(d,c-this.height),this.vel.y=0)}this.pos.y<=d?(u||(this.landed=!0,this.landSpeed=this.vel.y,this.vel.y<-15&&!this.phys.fly&&(this.stagger=Math.min(.6,(-this.vel.y-15)*.06+.2))),this.pos.y=d,this.vel.y=0,this.grounded=!0):u&&this.vel.y<=0&&this.pos.y-d<as.stepHeight?(this.pos.y=d,this.vel.y=0,this.grounded=!0):this.grounded=!1};function bp(e){let t=Oe.world.pushStrength;for(let i=0;i<e.length;i++){let s=e[i];if(s.alive)for(let r=i+1;r<e.length;r++){let a=e[r];if(!a.alive)continue;let n=s.ctrl,l=a.ctrl;if(n.mantle||l.mantle||Math.abs(n.pos.y-l.pos.y)>1.4)continue;let o=l.pos.x-n.pos.x,h=l.pos.z-n.pos.z,u=n.radius+l.radius,d=o*o+h*h;if(d>=u*u||d<1e-8)continue;let c=Math.sqrt(d),p=(u-c)*t,v=n.phys.mass,_=l.phys.mass,g=v+_,f=o/c,x=h/c,b={x:n.pos.x-f*p*(_/g),y:n.pos.y,z:n.pos.z-x*p*(_/g)},y={x:l.pos.x+f*p*(v/g),y:l.pos.y,z:l.pos.z+x*p*(v/g)};n.world.resolve(b,n.radius,n.pos.y+as.stepHeight,n.pos.y+n.height*.9),l.world.resolve(y,l.radius,l.pos.y+as.stepHeight,l.pos.y+l.height*.9),n.pos.x=b.x,n.pos.z=b.z,l.pos.x=y.x,l.pos.z=y.z}}}var ji=Oe.ghost,T_=2.1,ec=null,Yt,tc,Tp,wp,Ap,Rp,mo,Cp,ic,qa=class{constructor(t,i,s,r,{heroes:a=[]}={}){Ot(this,Yt);this.def=t,this.world=i,this.scene=s,this.heroes=a,this.char=t.build(),this.root=this.char.root,this.root.visible=!1,s.add(this.root),this.nav=r||new sa(i,t.radius+.1),this.ctrl=new ra(t,i),this.pos=this.ctrl.pos,this.vel=this.ctrl.vel,this.disguises=new Map,this.isPlayer=!1,this.reset(new U)}get radius(){return this.def.radius}get human(){return this.isPlayer||!!this.remote}get yaw(){return this.ctrl.yaw}reset(t){this.ctrl.spawn(t,0),this.state="hidden",this.appear=0,this.root.visible=!1,this.path=null,this.repath=0,this.lastSeen=null,this.target=null,this.unseen=0,this.wanderTarget=null,this.sees=!1,this.stunT=0,this.slowT=0,this.confusedT=0,this.stuckT=0,this.stuckFrom=null,this.aiFlightT=0,this.disguise=null,this.disguiseCd=6,this.caughtN=0,ae(this,Yt,tc).call(this)}spawn(){this.state="appear",this.appear=0,this.root.visible=!0}get active(){return this.state==="search"||this.state==="hunt"}get disguised(){return!!this.disguise}get eyeY(){return this.pos.y+T_}stun(t){this.stunT=Math.max(this.stunT,t),this.ctrl.dashT=0,this.reveal()}slow(t){this.slowT=Math.max(this.slowT,t)}confuse(t){this.confusedT=Math.max(this.confusedT,t),this.reveal()}knock(t,i,s){let r={x:this.pos.x+t*s,y:this.pos.y,z:this.pos.z+i*s};this.world.resolve(r,this.radius,this.pos.y+.3,this.pos.y+2.2),this.pos.x=r.x,this.pos.z=r.z,this.vel.set(0,0,0),this.path=null}get disguiseReady(){return this.disguiseCd<=0&&!this.disguise&&this.active&&this.stunT<=0}useDisguise(t=[],i="hero"){if(!this.disguiseReady)return!1;if(i==="prop"){let s=Vs[Math.random()*Vs.length|0],r=this.disguises.get("prop:"+s.id);r||(r={root:rs(s.id),update(){}},this.disguises.set("prop:"+s.id,r)),this.scene.add(r.root),r.root.visible=!0,this.disguise={prop:s,char:r,t:ji.disguise.time}}else{if(!this.heroes.length)return!1;let s=new Set(t.filter(o=>o.alive).map(o=>o.hero.id)),r=this.heroes.filter(o=>!s.has(o.id)),a=r.length?r:this.heroes,n=a[Math.random()*a.length|0],l=this.disguises.get(n.id);if(!l){l=n.build("classic"),ec||(ec=vi("rgba(150,80,230,0.55)","rgba(90,30,160,0)"));let o=new gi(new ui({map:ec,transparent:!0,depthWrite:!1,blending:Bt,opacity:.5}));o.scale.set(n.radius*3,.9,1),o.position.y=.35,l.root.add(o),l.shimmer=o,this.disguises.set(n.id,l)}this.scene.add(l.root),l.root.visible=!0,this.disguise={hero:n,char:l,t:ji.disguise.time}}return this.root.visible=!1,this.poof=!0,!0}reveal(){this.disguise&&(ae(this,Yt,tc).call(this),this.disguise=null,this.disguiseCd=ji.disguise.cd,this.root.visible=this.state!=="hidden",this.poof=!0)}update(t,i,s,r,a={},n=null,l=0){var p,v;let o={t:i,speed:0,mode:"search",appear:1};if(this.state==="hidden")return o;if(this.state==="appear")return this.appear=Math.min(1,this.appear+t/2.2),o.appear=this.appear,o.mode="hunt",this.appear>=1&&(this.state=this.human?"hunt":"search"),ae(this,Yt,ic).call(this,o,t),o;this.stunT=Math.max(0,this.stunT-t),this.slowT=Math.max(0,this.slowT-t),this.confusedT=Math.max(0,this.confusedT-t),this.disguiseCd=Math.max(0,this.disguiseCd-t),this.disguise&&(this.disguise.t-=t,this.disguise.t<=0&&this.reveal());let h=ae(this,Yt,Tp).call(this,t,s),u;this.human?u=n:u=ae(this,Yt,wp).call(this,t,h,s),this.confusedT>0&&u&&(u={...u,x:-(u.y||0),y:u.x||0,run:!1,dash:!1});let d=this.ctrl;d.moveMul=this.stunT>0?0:1,(p=this.disguise)!=null&&p.prop&&u&&(d.moveMul*=Oe.abilities.prop.walk,u={...u,run:!1,jumpHold:!1,jump:!1}),d.slowMul=(this.slowT>0?.45:1)*(1+ji.lateBoost*r)*((v=this.speedMul)!=null?v:1);let c=d.dashT>0;d.update(t,this.stunT>0?{x:0,y:0}:u,this.human?l:0),d.dashT>0&&!c&&this.reveal(),this.dashed=d.dashed;for(let _ of a.domes||[]){let g=this.pos.x-_.x,f=this.pos.z-_.z,x=_.r+this.radius,b=Math.hypot(g,f);if(b<x){let y=b||.001;this.pos.x=_.x+g/y*x,this.pos.z=_.z+f/y*x;let S=(this.vel.x*g+this.vel.z*f)/y;S<0&&(this.vel.x-=S*g/y,this.vel.z-=S*f/y)}}return this.human||ae(this,Yt,Cp).call(this,t),o.mode=this.stunT>0?"search":this.state==="hunt"?"hunt":"search",o.speed=d.speed,o.stunned=this.stunT>0,ae(this,Yt,ic).call(this,o,t),o}catches(t){if(!this.active||this.stunT>0||!t.alive||t.protected)return!1;let i=t.ctrl.pos;return Math.hypot(i.x-this.pos.x,i.z-this.pos.z)<ji.catchRadius+t.ctrl.radius*.6&&i.y-this.pos.y<ji.catchHeight&&this.pos.y-i.y<1.5}};Yt=new WeakSet,tc=function(){for(let t of this.disguises.values())t.root.visible=!1,this.scene.remove(t.root)},Tp=function(t,i){let s=null,r=1/0,a=null,n=Math.sin(this.yaw),l=Math.cos(this.yaw);for(let h of i){if(!h.alive||h.protected)continue;let u=h.ctrl.pos,d=u.x-this.pos.x,c=u.z-this.pos.z,p=Math.hypot(d,c),v=p<ji.sightRange&&this.world.lineOfSight(this.pos.x,this.pos.z,u.x,u.z,!1,this.eyeY,u.y+h.ctrl.height*.75);h.hidden&&p>2.6&&(v=!1),h.prop&&!(h.ctrl.speed>.8&&p<14)&&(v=!1),v&&p>8&&(d*n+c*l)/(p||1)<-.35&&(v=!1);let _=h.ctrl.running&&p<ji.hearRunRange&&!h.hidden&&!h.prop;if(!(v||_||p<2.2))continue;let g=p*(v?1:1.6);h===this.target&&(a={a:h,d:p,sees:v}),g<r&&(r=g,s={a:h,d:p,sees:v})}let o=a&&a.d<r*1.5+3?a:s;return this.sees=!!(o&&o.sees),o?(this.target=o.a,this.lastSeen=o.a.ctrl.pos.clone(),this.unseen=0,this.state!=="hunt"&&!this.disguise&&(this.state="hunt")):(this.unseen+=t,this.state==="hunt"&&this.unseen>ji.loseSightTime&&(this.target=null,this.human||(this.state="search"))),o},wp=function(t,i,s){var _,g;let r=this.ctrl,a={x:0,y:0,run:!1,jump:!1,jumpHold:!1,dash:!1};if(!i&&this.disguiseReady&&Math.random()<t*.25&&this.useDisguise(s,Math.random()<.3?"prop":"hero"),(_=this.disguise)!=null&&_.prop){let f=Ep(s,this.pos);if(f&&f.ctrl.pos.distanceTo(this.pos)<4.5)this.reveal(),this.target=f,this.state="hunt",this.lastSeen=f.ctrl.pos.clone();else return a}let n,l=!1;if(this.disguise){let f=(i==null?void 0:i.a)||Ep(s,this.pos);f&&(n=f.ctrl.pos,this.target=f,l=f.ctrl.pos.distanceTo(this.pos)>3)}if(!n)if(this.state==="hunt"&&this.target)n=this.sees?this.target.ctrl.pos:this.lastSeen;else if(this.lastSeen&&this.pos.distanceTo(this.lastSeen)>1.5)n=this.lastSeen;else{if(this.lastSeen=null,!this.wanderTarget||this.pos.distanceTo(this.wanderTarget)<1.5){let f=s.filter(y=>y.alive),x=f.filter(y=>y.prop&&y.ctrl.pos.distanceTo(this.pos)<16&&this.world.lineOfSight(this.pos.x,this.pos.z,y.ctrl.pos.x,y.ctrl.pos.z,!0,this.eyeY,1)),b=Math.random();x.length&&b<.2?this.wanderTarget=x[Math.random()*x.length|0].ctrl.pos.clone():b<.6?this.wanderTarget=ae(this,Yt,Rp).call(this):b<.75&&f.length?this.wanderTarget=ae(this,Yt,mo).call(this,f[Math.random()*f.length|0].ctrl.pos):this.wanderTarget=ae(this,Yt,mo).call(this,this.pos)}n=this.wanderTarget}if(!n)return a;let o=Math.hypot(n.x-this.pos.x,n.z-this.pos.z),h=!1;if(this.target&&this.target.alive&&!l){let f=this.target.ctrl.pos;h=f.y-this.pos.y>.8&&Math.hypot(f.x-this.pos.x,f.z-this.pos.z)<3.2}let u=h?this.target.ctrl.pos:ae(this,Yt,Ap).call(this,n,this.sees&&i&&i.d<7,t),d=u.x-this.pos.x,c=u.z-this.pos.z,p=Math.hypot(d,c);p>.05&&(a.x=d/p,a.y=-c/p);let v=this.state==="hunt"&&!!this.target&&!l;return a.run=v&&(this.sees||o<10)&&!r.exhausted,v&&this.sees&&i&&i.d<ji.burstRange&&i.d>1.6&&r.dashReady&&!this.target.hidden&&(this.target.ctrl.running||this.target.ctrl.dashT>0||i.d<4||r.dashCharges>=((g=r.phys.dash.charges)!=null?g:1))&&(a.dash=!0),!this.disguise&&r.flyEnergy>.18&&(this.stuckT>.38||r.hitWall&&this.stuckT>.15)&&(this.aiFlightT=Math.max(this.aiFlightT,1.05)),a.jumpHold=h||this.aiFlightT>0,this.aiFlightT=Math.max(0,this.aiFlightT-t),a},Ap=function(t,i,s){if(this.repath-=s,i&&this.nav.clear(this.pos.x,this.pos.z,t.x,t.z))return this.path=null,t;if((!this.path||this.repath<=0)&&(this.path=this.nav.find(this.pos.x,this.pos.z,t.x,t.z),this.repath=ji.repathEvery*(.8+Math.random()*.4)),this.path&&this.path.length){let[r,a]=this.path[0];return Math.hypot(r-this.pos.x,a-this.pos.z)<.7&&this.path.length>1&&this.path.shift(),{x:this.path[0][0],z:this.path[0][1]}}return t},Rp=function(){this.checked||(this.checked=new Map);let t=performance.now(),i=null,s=-1/0;for(let r of this.world.bushes){let a=Math.hypot(r.x-this.pos.x,r.z-this.pos.z),n=(t-(this.checked.get(r)||-1e9))/1e3,l=Math.min(n,60)*.5-a+Math.random()*8;l>s&&(s=l,i=r)}return i?(this.checked.set(i,t),new U(i.x,0,i.z)):ae(this,Yt,mo).call(this,this.pos)},mo=function(t){for(let i=0;i<20;i++){let s=t.x+(Math.random()-.5)*22,r=t.z+(Math.random()-.5)*22,[a,n]=this.nav.toCell(s,r);if(this.nav.free(a,n))return new U(s,0,r)}return t.clone()},Cp=function(t){if(this.stunT>0){this.stuckT=0,this.stuckFrom=null;return}if(this.stuckFrom||(this.stuckFrom=this.pos.clone()),this.pos.distanceTo(this.stuckFrom)>=.6){this.stuckFrom.copy(this.pos),this.stuckT=0;return}this.stuckT+=t,this.stuckT>1.5&&(this.wanderTarget=null,this.path=null,this.sees||(this.lastSeen=null,this.state==="hunt"&&(this.state="search",this.target=null)),this.stuckT=0,this.stuckFrom=this.pos.clone())},ic=function(t,i){let s=this.disguise;if(s){let r=s.char.root;r.position.copy(this.pos),s.prop||(r.rotation.y=this.yaw),s.char.update(i,this.ctrl.animState(t.t)),s.char.shimmer&&(s.char.shimmer.material.opacity=.35+Math.sin(t.t*3)*.15);return}this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,this.root.rotation.z=t.stunned?Math.sin(t.t*18)*.06:0,this.char.update(i,t)};function Ep(e,t){let i=null,s=1/0;for(let r of e){if(!r.alive||r.protected||r.hidden)continue;let a=r.ctrl.pos.distanceTo(t);a<s&&(s=a,i=r)}return i}var Pp=vi("rgba(255,210,130,1)","rgba(255,150,40,0)",64);function Ip(e,t,i,s,r){let a=new Mi({transparent:!0,depthWrite:!1,side:Gt,blending:Bt,uniforms:{uT:{value:0},uA:{value:0}},vertexShader:`varying vec3 vN; varying vec3 vV; varying vec3 vP;
      void main(){ vec4 w = modelMatrix*vec4(position,1.); vP = position; vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition - w.xyz); gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`uniform float uT; uniform float uA; varying vec3 vN; varying vec3 vV; varying vec3 vP;
      void main(){ float f = pow(1. - abs(dot(vN, vV)), 2.2);
        float hex = step(0.92, fract(vP.y*3.5 + uT*0.4)) * 0.25;
        vec3 c = mix(vec3(1.,.72,.3), vec3(1.,.9,.6), f);
        gl_FragColor = vec4(c, (0.06 + f*0.75 + hex*f) * uA); }`}),n=new vt(new si(s,40,20,0,Math.PI*2,0,Math.PI/2),a);n.position.set(t,0,i),e.add(n);let l=Lp(e,t,i,s,16760928),o=0;return{x:t,z:i,r:s,update(h){o+=h;let u=Math.min(1,o/.4);return n.scale.setScalar(.2+.8*(1-(1-u)**3)),a.uniforms.uT.value=o,a.uniforms.uA.value=Math.min(1,o/.3)*Math.min(1,(r-o)/.6),l.material.opacity=a.uniforms.uA.value*.6,o>=r?(e.remove(n,l),a.dispose(),!1):!0}}}function Lp(e,t,i,s,r){let a=new vt(new lr(s*.94,s,48),new di({color:r,transparent:!0,opacity:.6,depthWrite:!1,blending:Bt}));return a.rotation.x=-Math.PI/2,a.position.set(t,.05,i),e.add(a),a}function go(e,t,i,s,r,a,n=!1){let l=new di({color:a,transparent:!0,opacity:.9,side:Gt,depthWrite:!1,blending:Bt}),o=new lr(.86,1,48),h=[0,1].map(d=>{let c=new vt(o,l);return c.rotation.x=-Math.PI/2,c.position.set(t,i+.12+d*.05,s),e.add(c),c}),u=0;return{update(d){return u+=d,h.forEach((c,p)=>{let v=Math.min(1,Math.max(0,(u-p*.12)/.62)),_=.3+r*v;c.scale.set(_,_,_),n&&(c.rotation.z=u*(p?-7:6))}),l.opacity=Math.max(0,.9-u*1.25),u>.75?(h.forEach(c=>e.remove(c)),o.dispose(),l.dispose(),!1):!0}}}function Ya(e,t,i,s,r=16748442){let a=Lp(e,t,i,1,r),n=24,l=new yt,o=new Float32Array(n*3),h=[];for(let c=0;c<n;c++){let p=Math.random()*Math.PI*2,v=Math.random()*s*.8;o.set([t+Math.cos(p)*v,.3+Math.random(),i+Math.sin(p)*v],c*3),h.push(.8+Math.random()*1.5)}l.setAttribute("position",new $t(o,3));let u=new xs(l,new is({size:.4,map:Pp,color:r,transparent:!0,depthWrite:!1,blending:Bt}));e.add(u);let d=0;return{update(c){d+=c,a.scale.setScalar(1+d*s*1.6),a.material.opacity=Math.max(0,.8-d);for(let p=0;p<n;p++)o[p*3+1]+=h[p]*c;return l.attributes.position.needsUpdate=!0,u.material.opacity=Math.max(0,1-d/1.4),d>1.4?(e.remove(a,u),l.dispose(),!1):!0}}}function Np(e,t,i,s,r=6){let a=new ht,n=new St({color:16765066,emissive:16751162,emissiveIntensity:2.6});a.add(new vt(new si(.14,10,8),n));let l=new vt(new ka(.11,.28,8),n);l.position.y=.18,a.add(l);let o=new gi(new ui({map:Pp,transparent:!0,depthWrite:!1,blending:Bt}));o.scale.set(1.1,1.1,1),a.add(o),a.position.copy(t),e.add(a);let h=new U((Math.random()-.5)*4,3,(Math.random()-.5)*4),u=0;return{update(d){u+=d;let c=i();if(c){let p=new U(c.x,1.6,c.z).sub(a.position);if(p.length()<.8)return s(c),e.remove(a),!1;h.lerp(p.setLength(11),Math.min(1,d*2.5))}else h.y+=d*1.5;return a.position.addScaledVector(h,d),a.rotation.y+=d*6,o.material.opacity=.6+Math.sin(u*20)*.2,u>r?(e.remove(a),!1):!0}}}function Up(e,t,i){let s=new Fs((()=>{let h=document.createElement("canvas");h.width=h.height=64;let u=h.getContext("2d");u.fillStyle="#ffd98a",u.beginPath(),u.ellipse(32,40,13,11,0,0,Math.PI*2),u.fill();for(let[d,c]of[[17,22],[27,15],[38,15],[48,22]])u.beginPath(),u.ellipse(d,c,5,6,0,0,Math.PI*2),u.fill();return h})()),r=new di({map:s,transparent:!0,depthWrite:!1,blending:Bt}),a=new Ci(.5,.5),n=[],l=1;for(let h=0;h<t.length-1;h++){let[u,d]=t[h],[c,p]=t[h+1],v=Math.hypot(c-u,p-d),_=Math.atan2(c-u,p-d);for(let g=0;g<v;g+=.8){let f=g/v,x=new vt(a,r);x.rotation.set(-Math.PI/2,0,_+Math.PI),x.position.set(u+(c-u)*f+Math.cos(_)*.18*l,.04,d+(p-d)*f-Math.sin(_)*.18*l),l=-l,x.userData.delay=n.length*.04,x.visible=!1,e.add(x),n.push(x)}}let o=0;return{update(h){o+=h;for(let u of n)u.visible=o>u.userData.delay;return r.opacity=Math.min(1,(i-o)/1)*(.75+Math.sin(o*5)*.25),o>i?(n.forEach(u=>e.remove(u)),a.dispose(),!1):!0}}}function sc(e,t,i){let s=new gi(new ui({map:vi("rgba(190,120,255,1)","rgba(120,40,200,0)",64),depthTest:!1,transparent:!0,blending:Bt}));s.scale.set(1.6,1.6,1),s.renderOrder=10,e.add(s);let r=0;return{update(a){r+=a;let n=t();return s.position.set(n.x,3.3+Math.sin(r*4)*.15,n.z),s.material.opacity=Math.min(1,i-r),r>i?(e.remove(s),!1):!0}}}function Dp(e,t,i,s,r){let a=new di({color:16760928,transparent:!0,opacity:.9,side:Gt,depthWrite:!1,blending:Bt}),n=new vt(new lr(1.4,2,32,1,-Math.PI*.85,Math.PI*.7),a);n.rotation.x=-Math.PI/2;let l=new ht;l.add(n),l.rotation.y=r,l.position.set(t,i+1.1,s),e.add(l);let o=0;return{update(h){return o+=h,a.opacity=Math.max(0,.9-o*2.5),n.scale.setScalar(1+o*.6),o>.4?(e.remove(l),!1):!0}}}var Ft,rc,Op,Bp,Fp,ur,ac,zp,nc,Za=class{constructor(t,i,s){Ot(this,Ft);this.agent=t,this.world=i,this.nav=s,this.mode="wander",this.goal=null,this.path=null,this.think=Math.random()*.3,this.stuck=0,this.idle=0,this.sat=0,this.patience=ae(this,Ft,rc).call(this),this.juke=null,this.ladder=null}update(t,i){var x;this.ghosts=i;let s=Oe.bots,r=this.agent,a=r.ctrl,n=a.pos,l=null,o=1/0;for(let b of i){let y=Math.hypot(b.pos.x-n.x,b.pos.z-n.z);y<o&&ae(this,Ft,Op).call(this,b,n,y)&&(o=y,l=b)}this.threat=l,this.td=o,this.think-=t,this.think<=0&&(this.think=s.think*(.7+Math.random()*.6),ae(this,Ft,Bp).call(this,l,o));let h={x:0,y:0,run:!1,jump:!1,dash:!1};if(r.prop)return h;if(l&&o<s.jukeRange&&!a.elevated&&l.pos.y<n.y+1&&(!this.juke||this.juke.t<=0)){let b=n.x-l.pos.x,y=n.z-l.pos.z,S=Math.hypot(b,y)||1,A=Math.random()<.5?1:-1,w=-y/S*A*.85+b/S*.5,m=b/S*A*.85+y/S*.5,[M,D]=this.nav.toCell(n.x+w*2.5,n.z+m*2.5);this.nav.free(M,D)||(w=y/S*A*.85+b/S*.5,m=-b/S*A*.85+y/S*.5),this.juke={x:w,z:m,t:.45}}if(this.juke&&this.juke.t>0)return this.juke.t-=t,h.x=this.juke.x,h.y=-this.juke.z,h.run=!a.exhausted,h.dash=a.dashReady,this.juke.t<=0&&(this.path=null,this.think=0),h;if(a.elevated&&a.grounded&&this.mode!=="ladder"){if(this.mode="roof",l){let b=n.x-l.pos.x,y=n.z-l.pos.z,S=Math.hypot(b,y)||1;return h.x=b/S,h.y=-y/S,h.run=o<7&&!a.exhausted,h.jump=l.pos.y>n.y-1.2&&o<3.5,h}if(this.sat+=t,this.sat>this.patience){let b=(x=this.roofDir)!=null?x:this.roofDir=Math.random()*Math.PI*2;h.x=Math.cos(b),h.y=Math.sin(b)}return h}if(this.mode==="roof"&&!a.elevated&&(this.mode="wander",this.roofDir=null,this.sat=0,this.path=null),this.mode==="ladder"&&this.ladder){let b=this.ladder,y=b.x+b.nx*(a.radius+.25),S=b.z+b.nz*(a.radius+.25),A=y-n.x,w=S-n.z;if(Math.hypot(A,w)>.5&&!a.climbing&&n.y<.5)(!this.path||!this.path.length)&&ae(this,Ft,ur).call(this,y,S);else return h.x=-b.nx,h.y=b.nz,h.run=!1,a.elevated&&a.grounded&&(this.mode="roof",this.ladder=null,this.sat=0),h}let u=this.world.inBush(n.x,n.z,n.y);if(this.mode==="hide"&&u&&(!l||l.target!==r||o>4))return this.sat+=t,!l&&this.sat>this.patience&&(this.sat=0,this.patience=ae(this,Ft,rc).call(this),this.mode="wander",this.path=null,this.think=0),h;if(this.mode!=="roof"&&(this.sat=0),this.mode==="wander"&&this.idle>0)return this.idle-=t,h;if(!this.path||!this.path.length)return h;let[d,c]=this.path[0],p=d-n.x,v=c-n.z,_=Math.hypot(p,v);if(_<.6)return this.path.shift(),!this.path.length&&this.mode==="wander"&&(this.idle=Math.random()*2),h;p/=_,v/=_,h.x=p,h.y=-v;let g=this.mode==="flee"||this.mode==="help"||this.mode==="ladder"||this.mode==="hide"&&l,f=l&&(o<8||l.target===r&&l.sees);return h.run=g&&!a.exhausted&&(f||a.stamina>s.calmRun&&l&&o<12||this.mode==="help"),h.dash=g&&l&&o<4.5&&a.dashReady,a.speed<.6&&!a.mantle?this.stuck+=t:this.stuck=0,this.stuck>.5&&(h.jump=!0,this.stuck=0,this.path=null,this.think=0),h}};Ft=new WeakSet,rc=function(){var r,a,n;let[t,i]=Oe.bots.restless,s=((n=(a=(r=this.agent)==null?void 0:r.abilities)==null?void 0:a.game)==null?void 0:n.phase)==="hide"?2.5:1;return(t+Math.random()*(i-t))*s},Op=function(t,i,s){let r=this.agent.ctrl;if(!t.active)return!1;if(t.disguised){let a=t.ctrl.speed>6.5||t.ctrl.dashT>0;if(!(s<Oe.ghost.disguise.noticeRange||a&&s<8))return!1}return t.target===this.agent&&t.sees?!0:s<Oe.bots.fleeRange&&this.world.lineOfSight(i.x,i.z,t.pos.x,t.pos.z,!0,i.y+r.height*.8,t.eyeY)},Bp=function(t,i){var n,l;let s=this.agent,r=s.ctrl,a=r.pos;if(!(s.prop||this.mode==="roof"||this.mode==="ladder"&&(r.climbing||r.elevated))){if(!t&&s.hero.helper&&this.allies){let o=ae(this,Ft,Fp).call(this);if(o){this.mode="help",ae(this,Ft,ur).call(this,o.ctrl.pos.x,o.ctrl.pos.z);return}this.mode==="help"&&(this.mode="wander")}if(t){if(this.mode==="hide"&&this.world.inBush(a.x,a.z,a.y)&&t.target!==s||this.mode==="ladder"&&this.ladder)return;if(i>5&&Math.random()<Oe.bots.roofChance){let h=ae(this,Ft,ac).call(this,t);if(h){this.mode="ladder",this.ladder=h,this.path=null;return}}let o=Math.random()<Oe.bots.hideChance?ae(this,Ft,nc).call(this,t):null;if(o){this.mode="hide",ae(this,Ft,ur).call(this,o.x,o.z);return}this.mode="flee",ae(this,Ft,ur).call(this,...ae(this,Ft,zp).call(this,t));return}if(this.mode==="flee"&&(this.mode="wander"),this.mode!=="ladder"&&!(this.mode==="hide"&&this.world.inBush(a.x,a.z,a.y))&&(!this.path||!this.path.length)){let o=Math.random();if(o<.1){let v=ae(this,Ft,ac).call(this,null);if(v){this.mode="ladder",this.ladder=v;return}}let h=((l=(n=this.agent.abilities)==null?void 0:n.game)==null?void 0:l.phase)==="hide";if(this.mode=o<(h?.75:.4)?"hide":"wander",this.mode==="hide"){let v=ae(this,Ft,nc).call(this,null);if(v)return ae(this,Ft,ur).call(this,v.x,v.z)}let[u,d]=this.nav.toCell(a.x+(Math.random()-.5)*26,a.z+(Math.random()-.5)*26),[c,p]=this.nav.nearestFree(u,d);ae(this,Ft,ur).call(this,...this.nav.center(c,p))}}},Fp=function(){let t=this.agent.ctrl.pos,i=null,s=Oe.bots.helpRange;for(let r of this.allies()){if(r===this.agent||!r.alive||!this.ghosts||!this.ghosts.some(n=>n.active&&!n.disguised&&n.target===r))continue;let a=r.ctrl.pos.distanceTo(t);a<s&&(s=a,i=r)}return i},ur=function(t,i){let s=this.agent.ctrl.pos;this.path=this.nav.find(s.x,s.z,t,i)||[[t,i]]},ac=function(t){let i=this.agent.ctrl.pos,s=null,r=12;for(let a of this.world.ladders){let n=Math.hypot(a.x-i.x,a.z-i.z);n>r||t&&Math.hypot(a.x-t.pos.x,a.z-t.pos.z)<n+2||(r=n,s=a)}return s},zp=function(t){let i=this.agent.ctrl.pos,s=null,r=-1/0;for(let a=0;a<16;a++){let n=a/16*Math.PI*2,l=7+a%2*4,o=i.x+Math.cos(n)*l,h=i.z+Math.sin(n)*l,[u,d]=this.nav.toCell(o,h);if(!this.nav.free(u,d)||!this.nav.clear(i.x,i.z,o,h))continue;let c=Math.hypot(o-i.x,h-i.z),p=Math.hypot(o-t.pos.x,h-t.pos.z),v=p-c,_=this.world.lineOfSight(t.pos.x,t.pos.z,o,h,!1,t.eyeY,1.4)?0:5,g=v*1.2+p*.4+_+Math.random()*1.5;g>r&&(r=g,s=[o,h])}return s||[i.x-(t.pos.x-i.x),i.z-(t.pos.z-i.z)]},nc=function(t){let i=this.agent.ctrl.pos,s=null,r=-1/0;for(let a of this.world.bushes){let n=Math.hypot(a.x-i.x,a.z-i.z);if(n>20||!t&&n<a.r+1||this.agent.ctrl.radius>a.r*.9)continue;let l=-n;if(t){let o=Math.hypot(a.x-t.pos.x,a.z-t.pos.z);if(o<n+1)continue;l+=o*.8}l>r&&(r=l,s=a)}return s};var $a=()=>Oe.abilities,oc={moti:[{id:"shelter",key:"1",name:"\u0423\u044E\u0442\u043D\u044B\u0439 \u043F\u0440\u0438\u044E\u0442",icon:"\u{1F6E1}\uFE0F",tag:"\u0417\u0430\u0449\u0438\u0442\u0430",anim:"cast",dur:.9,lock:.7},{id:"light",key:"2",name:"\u0422\u0451\u043F\u043B\u044B\u0439 \u0441\u0432\u0435\u0442",icon:"\u2764\uFE0F",tag:"\u041B\u0435\u0447\u0435\u043D\u0438\u0435",anim:"cast",dur:.8,lock:.5},{id:"wisps",key:"3",name:"\u0414\u0443\u0445\u0438-\u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A\u0438",icon:"\u{1F525}",tag:"\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430",anim:"summon",dur:1,lock:.6},{id:"path",key:"4",name:"\u041F\u0443\u0442\u044C \u0444\u043E\u043D\u0430\u0440\u0435\u0439",icon:"\u{1F43E}",tag:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430",anim:"path",dur:.8,lock:.4},{id:"swing",key:"F",name:"\u0423\u0434\u0430\u0440 \u0444\u043E\u043D\u0430\u0440\u0451\u043C",icon:"\u{1F3EE}",tag:"\u0410\u0442\u0430\u043A\u0430",anim:"swing",dur:.55,lock:0},{id:"wave",key:"G",name:"\u041F\u0440\u0438\u0432\u0435\u0442!",icon:"\u{1F44B}",tag:"\u042D\u043C\u043E\u0446\u0438\u044F",anim:"wave",dur:1.6,lock:0}],kid:[{id:"prop",key:"Q",name:"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430",icon:"\u{1F3AD}",tag:"\u041F\u0440\u044F\u0442\u043A\u0438",anim:"poof",dur:.25,lock:0},{id:"wave",key:"G",name:"\u041F\u0440\u0438\u0432\u0435\u0442!",icon:"\u{1F44B}",tag:"\u042D\u043C\u043E\u0446\u0438\u044F",anim:"wave",dur:1.4,lock:0}],masha:[{id:"prop",key:"Q",name:"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430",icon:"\u{1F3AD}",tag:"\u041F\u0440\u044F\u0442\u043A\u0438",anim:"poof",dur:.25,lock:0},{id:"wave",key:"G",name:"\u041F\u0440\u0438\u0432\u0435\u0442!",icon:"\u{1F44B}",tag:"\u042D\u043C\u043E\u0446\u0438\u044F",anim:"wave",dur:1.4,lock:0}],catbus:[{id:"prop",key:"Q",name:"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430",icon:"\u{1F3AD}",tag:"\u041F\u0440\u044F\u0442\u043A\u0438",anim:"poof",dur:.25,lock:0}],brothers:[{id:"fear",key:"1",name:"\u0421\u0442\u0440\u0430\u0445",icon:"\u{1F525}",tag:"\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C",anim:"fear",dur:.75,lock:.3},{id:"hypnosis",key:"2",name:"\u0413\u0438\u043F\u043D\u043E\u0437",icon:"\u{1F300}",tag:"\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C",anim:"hypnosis",dur:.85,lock:.35},{id:"glare",key:"3",name:"\u0413\u0440\u043E\u0437\u043D\u044B\u0439 \u0432\u0437\u0433\u043B\u044F\u0434",icon:"\u{1F441}\uFE0F",tag:"\u041F\u043E\u0438\u0441\u043A",anim:"glare",dur:.6,lock:.15}]},yo,kp,vo=class{constructor(t,i){Ot(this,yo);this.agent=t,this.game=i,this.list=(oc[t.ctrl.hero.id]||[]).map(s=>({...s,cdLeft:0})),t.action=null}get(t){return this.list.find(i=>i.id===t)}ready(t){let i=this.get(t);return!!i&&i.cdLeft<=0}cooldown(t){var i,s;return(s=(i=$a()[t.id])==null?void 0:i.cd)!=null?s:1}use(t){var s,r;let i=this.get(t);return!i||i.cdLeft>0||!this.agent.alive||this.agent.action&&this.agent.action.lock>0?!1:(i.cdLeft=this.cooldown(i),this.agent.action={name:i.anim,t:0,dur:i.dur,lock:i.lock,id:i.id,fired:!1},this.agent.ctrl.hero.id==="brothers"&&((r=(s=this.game).emit)==null||r.call(s,"ability",{agent:this.agent,id:t})),!0)}update(t){for(let r of this.list)r.cdLeft=Math.max(0,r.cdLeft-t);let i=this.agent.action;if(this.agent.ctrl.moveMul=1,!i)return;i.t+=t,i.lock=Math.max(0,i.lock-t),i.lock>0&&(this.agent.ctrl.moveMul=.15);let s=i.name==="swing"?.3:i.name==="wave"?99:i.name==="poof"?0:.45;!i.fired&&i.t/i.dur>=s&&(i.fired=!0,ae(this,yo,kp).call(this,i.id)),i.t>=i.dur&&(this.agent.action=null)}pose(){let t=this.agent.action;return t?{name:t.name,k:t.t/t.dur}:null}botThink(t,i){var n;let s=this.agent.ctrl,r=this.game,a=s.pos;if(this.get("fear")){if(t&&i<$a().fear.radius&&this.ready("fear"))return this.use("fear");if(t&&i<$a().hypnosis.radius&&this.ready("hypnosis"))return this.use("hypnosis");if(t&&i<$a().glare.radius&&this.ready("glare"))return this.use("glare")}if(this.get("prop")){let l=this.agent;if(l.prop&&t&&i<Oe.bots.jukeRange+.8){(n=r.toggleProp)==null||n.call(r,l);return}if(!l.prop&&!t&&r.phase==="hide"&&this.ready("prop")&&!s.elevated&&Math.random()<.006)return this.use("prop");if(l.prop)return}for(let l of r.agents){if(l===this.agent||!l.alive)continue;let o=r.ghosts.find(u=>u.active&&u.target===l),h=l.ctrl.pos.distanceTo(a);if(o&&o.pos.distanceTo(a)<16&&this.ready("wisps"))return this.use("wisps");if(o&&h<Oe.abilities.shelter.radius&&o.pos.distanceTo(l.ctrl.pos)<8&&this.ready("shelter"))return this.use("shelter");if(l.ctrl.exhausted&&h<Oe.abilities.light.radius&&this.ready("light"))return this.use("light")}if(t&&i<2.8&&this.ready("swing"))return this.use("swing");if(t&&i<7&&this.ready("shelter"))return this.use("shelter");if(t&&i<16&&this.ready("wisps"))return this.use("wisps");if(s.stamina<.25&&this.ready("light"))return this.use("light");if(t&&i<12&&this.ready("path")&&Math.random()<.02)return this.use("path");if(!t&&this.ready("wave")&&Math.random()<.002)return this.use("wave")}};yo=new WeakSet,kp=function(t){var o,h,u,d,c,p,v,_,g;let i=this.game,s=this.agent,r=s.ctrl,a=$a()[t],n=r.pos,l=i.sound;if(t==="prop")(o=i.toggleProp)==null||o.call(i,s);else if(t==="shelter"){let f=Ip(i.scene,n.x,n.z,a.radius,a.time);i.addFx(f),i.domes.push(f),setTimeout(()=>{i.domes=i.domes.filter(x=>x!==f)},a.time*1e3),(h=l.chime)==null||h.call(l,[523,784,1046])}else if(t==="light"){i.addFx(Ya(i.scene,n.x,n.z,a.radius));for(let f of i.agents)!f.alive||f.ctrl.pos.distanceTo(n)>a.radius||(f.ctrl.stamina=1,f.ctrl.exhausted=!1,f.ctrl.boostT=a.boostTime,f.ctrl.boostMul=a.boost);(u=l.chime)==null||u.call(l,[659,880,1318])}else if(t==="wisps"){let f=new U(n.x,n.y+2,n.z);for(let x=0;x<a.count;x++){let b=null;i.addFx(Np(i.scene,f,()=>((!b||!b.active)&&(b=A_(i.ghosts,n,30)),b?b.pos:null),()=>{var y,S;b.slow(a.slow),b.stun(a.stun),(S=(y=i.sound).land)==null||S.call(y,6)},7))}(d=l.chime)==null||d.call(l,[440,660,880])}else if(t==="path"){let f=R_(i.world,i.ghosts,n);if(f){let x=i.navFor(r.radius).find(n.x,n.z,f.x,f.z);x&&i.addFx(Up(i.scene,[[n.x,n.z],...x],a.time))}for(let x of i.ghosts)x.state!=="hidden"&&i.addFx(sc(i.scene,()=>x.pos,a.time));(c=l.chime)==null||c.call(l,[392,523,659,784])}else if(t==="swing"){i.addFx(Dp(i.scene,n.x,n.y,n.z,r.yaw));let f=Math.sin(r.yaw),x=Math.cos(r.yaw);for(let b of i.ghosts){if(!b.active)continue;let y=b.pos.x-n.x,S=b.pos.z-n.z,A=Math.hypot(y,S);A>a.range+b.radius||(y*f+S*x)/(A||1)<-.2||(b.stun(a.stun),b.knock(y/(A||1),S/(A||1),a.knock),i.cam.shake=Math.max(i.cam.shake,.4))}(p=l.land)==null||p.call(l,12)}else if(t==="fear"){i.addFx(go(i.scene,n.x,n.y,n.z,a.radius,16735608));for(let f of i.ghosts)f.active&&Math.hypot(f.pos.x-n.x,f.pos.z-n.z)<=a.radius&&(f.stun(a.stun),f.slow(a.slow));(v=l.brothersCue)==null||v.call(l,"fear")}else if(t==="hypnosis"){i.addFx(go(i.scene,n.x,n.y,n.z,a.radius,12155135,!0));for(let f of i.ghosts)f.active&&Math.hypot(f.pos.x-n.x,f.pos.z-n.z)<=a.radius&&f.confuse(a.time);(_=l.brothersCue)==null||_.call(l,"hypnosis")}else if(t==="glare"){i.addFx(go(i.scene,n.x,n.y,n.z,a.radius,16761966));for(let f of i.ghosts)f.active&&Math.hypot(f.pos.x-n.x,f.pos.z-n.z)<=a.radius&&(f.reveal(),f.stun(a.stun),i.addFx(sc(i.scene,()=>f.pos,a.mark)));(g=l.brothersCue)==null||g.call(l,"glare")}};function A_(e,t,i){let s=null,r=i;for(let a of e){if(!a.active)continue;let n=a.pos.distanceTo(t);n<r&&(r=n,s=a)}return s}function R_(e,t,i){let s=null,r=-1/0;for(let a of e.bushes){let n=Math.hypot(a.x-i.x,a.z-i.z),l=40;for(let h of t)h.state!=="hidden"&&(l=Math.min(l,Math.hypot(a.x-h.pos.x,a.z-h.pos.z)));let o=l*1.2-n;o>r&&(r=o,s=a)}return s}var C_=[[-5,19],[5.5,17],[-9,23],[9,21],[-3,14],[3,25]],P_=[[0,-21],[-7,-20],[7,-20],[0,-14]],Ms,Hp,Gp,lc,Ja=class{constructor(t){Ot(this,Ms);Object.assign(this,t),this.playerSpawn=t.playerSpawn||new U(0,0,22),this.botSpawns=t.botSpawns||C_,this.ghostSpawns=t.ghostSpawns||P_,this.agents=[],this.domes=[],this.fx=[],this.events=[],this.phase="none",this.activeGhosts=[],this.netIn=new Map}addFx(t){this.fx.push(t)}emit(t,i={}){this.events.push({type:t,...i})}makeAgent(t,i,s,r,a=null,n=null){let l=new ra(t,this.world);l.spawn(s,i||a?Math.PI:Math.random()*Math.PI*2);let o={hero:t,name:n||t.name,ctrl:l,char:this.makeChar(t,r),isPlayer:i,remote:a,alive:!0,hidden:!1,protected:!1,prop:null,skin:r,brothersRevives:t.id==="brothers"?1:0,invulnerableT:0};return o.key=this.keySeq=(this.keySeq||0)+1,o.abilities=new vo(o,this),!i&&!a&&(o.brain=new Za(o,this.world,this.navFor(t.radius)),o.brain.allies=()=>this.agents),this.agents.push(o),o}start(t){this.opts=t,this.mode=t.mode,this.agents=[],this.domes=[],this.caughtOrder=[],this.stats={found:0,chaseCatches:0,pumpkins:0,playerFoundAt:null,playerCaughtInChase:!1},this.player=null,this.playerGhost=null;let i=this.botSpawns.slice().sort(()=>Math.random()-.5),s=h=>new U(h[0],0,h[1]),r=t.remotes||[],a=r.filter(h=>h.hero.id==="noface");if(t.mode==="play"||t.mode==="hunter"&&r.length){t.mode==="play"&&(this.player=this.makeAgent(t.hero,!0,this.playerSpawn.clone(),t.skin)),r.filter(u=>u.hero.id!=="noface").forEach((u,d)=>this.makeAgent(u.hero,!1,s(this.botSpawns[d%this.botSpawns.length]),u.skin,u.id,u.name));let h=new Set([t.hero.id,...r.map(u=>u.hero.id)]);if(t.withBots)for(let u of this.heroes)!h.has(u.id)&&u.bot!==!1&&this.makeAgent(u,!1,s(i.pop()),"classic")}else for(let h of this.heroes)h.bot!==!1&&this.makeAgent(h,!1,s(i.pop()),h.id==="moti"&&t.mSkin||"classic");for(let h of this.ghosts)h.isPlayer=!1,h.remote=null,h.reset(s(this.ghostSpawns[0]));let n=(t.mode==="hunter"?1:0)+a.length,l=Math.min(this.ghosts.length,Math.max(1,Math.min(3,t.ghosts),n));this.activeGhosts=this.ghosts.slice(0,l),this.activeGhosts.forEach((h,u)=>h.reset(s(this.ghostSpawns[u%this.ghostSpawns.length])));let o=0;t.mode==="hunter"&&(this.playerGhost=this.activeGhosts[o++],this.playerGhost.isPlayer=!0);for(let h of a){let u=this.activeGhosts[o++];u.remote=h.id,u.remoteName=h.name}this.netIn.clear(),this.setPhase("hide")}setPhase(t){this.phase=t,this.t=0,this.spawned=0,this.duration=t==="hide"?Oe.round.hide:Oe.round.chase}get left(){return Math.max(0,this.duration-this.t)}toggleProp(t){if(t.prop){this.emit("poof",{x:t.ctrl.pos.x,y:t.ctrl.pos.y,z:t.ctrl.pos.z}),t.prop.obj&&this.scene.remove(t.prop.obj),t.prop=null,t.char&&(t.char.root.visible=!0);return}if(t.ctrl.elevated||!t.alive)return;let i=Vs[Math.random()*Vs.length|0],s=this.makeProp(i.id);s&&(s.position.copy(t.ctrl.pos),s.rotation.y=Math.random()*6,this.scene.add(s)),t.prop={kind:i,obj:s},t.char&&(t.char.root.visible=!1),this.emit("poof",{x:t.ctrl.pos.x,y:t.ctrl.pos.y,z:t.ctrl.pos.z,kind:i.name,agent:t})}step(t,i,s=null,r=0){var u,d,c;this.t+=t;let a=Oe,n=this.phase==="hide"?a.round.headStart:.3;this.activeGhosts.forEach((p,v)=>{p.state==="hidden"&&this.t>=n+v*(this.phase==="hide"?a.ghost.spawnGap:.4)&&(p.spawn(),this.spawned++,this.emit("ghostSpawn",{i:v,ghost:p}))});let l=this.activeGhosts.filter(p=>p.active);for(let p of this.agents){if(!p.alive)continue;p.invulnerableT=Math.max(0,p.invulnerableT-t),p.abilities.update(t);let v;if(p.isPlayer)v=s||{};else if(p.remote)v=ae(this,Ms,lc).call(this,p.remote);else{v=p.brain.update(t,l);let f=p.brain.threat;p.abilities.botThink(f,f?f.pos.distanceTo(p.ctrl.pos):1/0)}p.prop&&(v.dash?this.toggleProp(p):(v={...v,run:!1,jump:!1},p.ctrl.moveMul*=a.abilities.prop.walk)),p.ctrl.update(t,v,p.isPlayer?r:p.remote&&v.camYaw||0),(u=p.prop)!=null&&u.obj&&p.prop.obj.position.copy(p.ctrl.pos);let _=p.ctrl.pos,g=(c=(d=this.world).waterAt)==null?void 0:c.call(d,_.x,_.z);p.hidden=this.world.inBush(_.x,_.z,_.y)&&!p.ctrl.running||!!g&&p.ctrl.diving&&_.y<g.level-.55&&p.ctrl.speed<1||!!p.prop&&p.ctrl.speed<.6,p.protected=p.invulnerableT>0||this.domes.some(f=>Math.hypot(_.x-f.x,_.z-f.z)<f.r),p.protected&&(p.ctrl.stamina=Math.min(1,p.ctrl.stamina+t*.25))}bp(this.agents);let o=Math.min(1,this.t/this.duration);for(let p of this.activeGhosts){p.speedMul=this.phase==="chase"&&!p.isPlayer&&!p.remote?a.round.chaseBotSpeed:1;let v=p.isPlayer?s||{}:p.remote?ae(this,Ms,lc).call(this,p.remote):null;p.update(t,i,this.agents,o,{domes:this.domes},v,p.isPlayer?r:(v==null?void 0:v.camYaw)||0),p.poof&&(p.poof=!1,this.emit("poof",{x:p.pos.x,y:p.pos.y,z:p.pos.z,ghost:p}))}for(let p of this.activeGhosts)for(let v of this.agents)p.catches(v)&&ae(this,Ms,Hp).call(this,v,p);let h=this.agents.filter(p=>p.alive).length;(this.t>=this.duration||h===0)&&(this.phase==="hide"?ae(this,Ms,Gp).call(this):this.phase==="chase"&&(this.phase="over",this.emit("end",{result:this.result()})))}convertToBot(t){t.remote=null,t.brain=new Za(t,this.world,this.navFor(t.hero.radius)),t.brain.allies=()=>this.agents}result(){let t=Oe.round.reward,i=this.agents.filter(r=>r.alive).map(r=>r.name),s=this.stats.pumpkins;return this.mode==="hunter"?s+=this.stats.found*t.found+this.stats.chaseCatches*t.catch:this.mode==="play"&&(this.stats.playerFoundAt===null&&(s+=t.survive),this.playerGhost?s+=this.caughtOrder.filter(r=>r.phase==="chase").length*t.catch:!this.stats.playerCaughtInChase&&this.player&&(s+=t.survive)),{mode:this.mode,alive:i,hideSurvivors:this.hideSurvivors||[],caught:this.caughtOrder.map(r=>r.agent.name),found:this.stats.found,chaseCatches:this.stats.chaseCatches,playerFoundAt:this.stats.playerFoundAt,playerWasGhost:!!this.playerGhost,playerCaughtInChase:this.stats.playerCaughtInChase,earn:s}}};Ms=new WeakSet,Hp=function(t,i){var s,r;if(t.brothersRevives>0){t.brothersRevives--,t.invulnerableT=1.8,t.protected=!0,t.ctrl.stamina=1,t.ctrl.exhausted=!1,i.stun(.75),(r=(s=this.sound)==null?void 0:s.brothersCue)==null||r.call(s,"resist"),this.emit("resisted",{agent:t,ghost:i});return}t.alive=!1,t.prop&&this.toggleProp(t),t.char&&(t.char.root.visible=!1),i.reveal(),i.stun(Oe.ghost.grab),this.caughtOrder.push({agent:t,phase:this.phase,t:this.t}),this.phase==="hide"?(this.stats.found++,t.isPlayer&&(this.stats.playerFoundAt=this.t)):(this.stats.chaseCatches++,t.isPlayer&&(this.stats.playerCaughtInChase=!0)),this.emit("caught",{agent:t,ghost:i,byPlayer:i.isPlayer,byRemote:i.remote,phase:this.phase})},Gp=function(){var d;let t=(d=this.caughtOrder.find(c=>c.phase==="hide"))==null?void 0:d.agent,i=this.agents.filter(c=>c.alive).map(c=>c.name);this.hideSurvivors=i;let s=c=>new U(c[0],0,c[1]),r=this.playerGhost?this.playerGhost.pos.clone():null,a=this.activeGhosts.filter(c=>c.remote).map(c=>[c.remote,c.remoteName]);for(let c of this.ghosts)c.reveal(),c.reset(s(this.ghostSpawns[0])),c.isPlayer=!1,c.remote=null;let n=Math.min(this.ghosts.length,Oe.round.chaseGhosts);this.activeGhosts=this.ghosts.slice(0,n);let l=null,o=null;if(this.mode==="hunter")this.playerGhost=this.activeGhosts[0],this.playerGhost.isPlayer=!0,o="\u0442\u044B";else{let c=t||this.agents[Math.random()*this.agents.length|0];l=c,o=c.name,this.agents=this.agents.filter(p=>p!==c),c.prop&&this.toggleProp(c),c.char&&(c.char.root.visible=!1),this.activeGhosts[0].reset(c.ctrl.pos.clone()),c.remote&&(this.activeGhosts[0].remote=c.remote,this.activeGhosts[0].remoteName=c.name),c.isPlayer&&(this.player=null,this.playerGhost=this.activeGhosts[0],this.playerGhost.isPlayer=!0)}this.activeGhosts.forEach((c,p)=>{p>0&&c.reset(s(this.ghostSpawns[p%this.ghostSpawns.length]))}),this.mode==="hunter"&&this.playerGhost.reset(r);let h=1;for(let[c,p]of a){for(;h<this.activeGhosts.length&&this.activeGhosts[h].remote;)h++;let v=this.activeGhosts[h++];v&&(v.remote=c,v.remoteName=p)}let u=this.botSpawns.slice();for(let c of this.agents)c.prop&&this.toggleProp(c),c.alive||(c.alive=!0,c.ctrl.spawn(s(u.pop()||[this.playerSpawn.x,this.playerSpawn.z]),Math.PI),c.char&&(c.char.root.visible=!0)),c.ctrl.stamina=1,c.brothersRevives=c.hero.id==="brothers"?1:0,c.invulnerableT=0;this.setPhase("chase"),this.emit("phase",{phase:"chase",newGhostName:o,newGhostIsPlayer:!!this.playerGhost&&this.mode!=="hunter",agent:l}),this.agents.length||(this.phase="over",this.emit("end",{result:this.result()}))},lc=function(t){let i=this.netIn.get(t);if(!i)return{};let s={...i};return i.jump=!1,i.dash=!1,s};var bi,Vp,xo,Wp,jp,_o,So=class{constructor(){Ot(this,bi);this.ctx=null,this.muted=!1,this.voiceCache=new Map,this.voiceLast=0}unlock(){if(this.ctx){this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.55,this.master.connect(this.ctx.destination),ae(this,bi,Vp).call(this))}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.55)}async brothersCue(t){if(!["select","fear","hypnosis","glare","resist"].includes(t)||this.muted||(this.ctx||this.unlock(),!this.ctx))return;let i=performance.now();if(i-this.voiceLast<550&&t!=="resist")return;this.voiceLast=i;let s=this.voiceCache.get(t);s||(s=fetch(`/assets/audio/brothers/${t}.m4a?v=2026101004`).then(r=>{if(!r.ok)throw new Error("voice");return r.arrayBuffer()}).then(r=>this.ctx.decodeAudioData(r)),this.voiceCache.set(t,s));try{let r=await s;if(this.muted||!this.ctx)return;let a=this.ctx.currentTime;for(let[n,l,o,h]of[[.76,.27,0,2100],[.87,.18,.07,3100],[.98,.12,.13,4400]]){let u=this.ctx.createBufferSource();u.buffer=r,u.playbackRate.value=n;let d=this.ctx.createBiquadFilter();d.type="lowpass",d.frequency.value=h;let c=this.ctx.createGain();c.gain.value=l,u.connect(d).connect(c).connect(this.master),u.start(a+o)}}catch{this.voiceCache.delete(t),this.chime([220,260,196])}}jump(){if(!this.ctx)return;let t=this.ctx,i=t.currentTime,s=t.createOscillator();s.type="triangle",s.frequency.setValueAtTime(320,i),s.frequency.exponentialRampToValueAtTime(640,i+.12);let r=t.createGain();r.gain.setValueAtTime(.12,i),r.gain.exponentialRampToValueAtTime(.001,i+.18),s.connect(r).connect(this.master),s.start(i),s.stop(i+.2)}land(t){if(!this.ctx)return;let i=this.ctx,s=i.currentTime,r=ae(this,bi,xo).call(this,.12),a=i.createBiquadFilter();a.type="lowpass",a.frequency.value=500;let n=i.createGain();n.gain.setValueAtTime(Math.min(.25,.05+t*.01),s),n.gain.exponentialRampToValueAtTime(.001,s+.12),r.connect(a).connect(n).connect(this.master),r.start(s)}step(){if(!this.ctx)return;let t=this.ctx,i=t.currentTime,s=ae(this,bi,xo).call(this,.05),r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=900+Math.random()*300;let a=t.createGain();a.gain.setValueAtTime(.03,i),a.gain.exponentialRampToValueAtTime(.001,i+.05),s.connect(r).connect(a).connect(this.master),s.start(i)}ghostAppear(){if(!this.ctx)return;let t=this.ctx,i=t.currentTime,s=ae(this,bi,xo).call(this,2.4),r=t.createBiquadFilter();r.type="bandpass",r.Q.value=3,r.frequency.setValueAtTime(200,i),r.frequency.exponentialRampToValueAtTime(700,i+1.2),r.frequency.exponentialRampToValueAtTime(150,i+2.3);let a=t.createGain();a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(.35,i+.8),a.gain.linearRampToValueAtTime(0,i+2.4),s.connect(r).connect(a).connect(this.master),s.start(i);for(let[n,l]of[[880,0],[1318,.35],[1046,.7]]){let o=t.createOscillator();o.type="sine",o.frequency.value=n;let h=t.createGain();h.gain.setValueAtTime(0,i+l),h.gain.linearRampToValueAtTime(.08,i+l+.02),h.gain.exponentialRampToValueAtTime(.001,i+l+1.6),o.connect(h).connect(this.master),o.start(i+l),o.stop(i+l+1.7)}}setTension(t){if(!this.ctx)return;this.tension.gain.setTargetAtTime(t*.07,this.ctx.currentTime,.3),this.amb.gain.setTargetAtTime(.05*(1-t*.6),this.ctx.currentTime,.5);let i=this.ctx.currentTime;t>.25&&(!this.nextBeat||i>this.nextBeat)&&(ae(this,bi,jp).call(this,t),this.nextBeat=i+1.1-t*.65)}chime(t){ae(this,bi,_o).call(this,t,.08,"sine")}win(){ae(this,bi,_o).call(this,[523,659,784,1046],.12,"triangle")}lose(){ae(this,bi,_o).call(this,[392,330,262,196],.18,"sine")}};bi=new WeakSet,Vp=function(){let t=this.ctx;this.amb=t.createGain(),this.amb.gain.value=.05,this.amb.connect(this.master);for(let a of[110,164.8,220,277.2]){let n=t.createOscillator();n.type="sine",n.frequency.value=a;let l=t.createGain();l.gain.value=.25;let o=t.createOscillator();o.frequency.value=.07+Math.random()*.1;let h=t.createGain();h.gain.value=.2,o.connect(h).connect(l.gain),n.connect(l).connect(this.amb),n.start(),o.start()}let i=()=>{this.ctx&&(this.muted||ae(this,bi,Wp).call(this),setTimeout(i,350+Math.random()*1400))};i(),this.tension=t.createGain(),this.tension.gain.value=0,this.tension.connect(this.master);let s=t.createOscillator();s.type="sawtooth",s.frequency.value=55;let r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=220,s.connect(r).connect(this.tension),s.start()},xo=function(t){let i=this.ctx,s=i.createBuffer(1,Math.max(1,i.sampleRate*t),i.sampleRate),r=s.getChannelData(0);for(let n=0;n<r.length;n++)r[n]=Math.random()*2-1;let a=i.createBufferSource();return a.buffer=s,a},Wp=function(){let t=this.ctx,i=t.currentTime;for(let s=0;s<3;s++){let r=t.createOscillator();r.frequency.value=4200+Math.random()*400;let a=t.createGain();a.gain.setValueAtTime(0,i+s*.06),a.gain.linearRampToValueAtTime(.012,i+s*.06+.01),a.gain.linearRampToValueAtTime(0,i+s*.06+.04),r.connect(a).connect(this.master),r.start(i+s*.06),r.stop(i+s*.06+.05)}},jp=function(t){let i=this.ctx,s=i.currentTime;for(let r of[0,.16]){let a=i.createOscillator();a.type="sine",a.frequency.setValueAtTime(70,s+r),a.frequency.exponentialRampToValueAtTime(40,s+r+.12);let n=i.createGain();n.gain.setValueAtTime(.28*t,s+r),n.gain.exponentialRampToValueAtTime(.001,s+r+.15),a.connect(n).connect(this.master),a.start(s+r),a.stop(s+r+.16)}},_o=function(t,i,s){if(!this.ctx)return;let r=this.ctx,a=r.currentTime;t.forEach((n,l)=>{let o=r.createOscillator();o.type=s,o.frequency.value=n;let h=r.createGain();h.gain.setValueAtTime(1e-4,a+l*i),h.gain.linearRampToValueAtTime(.14,a+l*i+.02),h.gain.exponentialRampToValueAtTime(.001,a+l*i+.5),o.connect(h).connect(this.master),o.start(a+l*i),o.stop(a+l*i+.55)})};var nt=e=>document.getElementById(e),Xp={kid:"\u{1F431}",masha:"\u{1F9B6}",catbus:"\u{1F408}",moti:"\u{1F6E1}\uFE0F",brothers:"\u{1F465}",noface:"\u{1F3AD}"},Mo=class{constructor(){this.lastStatus="",this.hintTimer=null}on(t,i){nt(t).addEventListener("click",s=>{s.stopPropagation(),i()})}progress(t,i){document.querySelector(".load-bar i").style.width=Math.round(t*100)+"%",i&&(document.querySelector(".load-text").textContent=i,window.__bootStage=i)}hideLoading(){nt("loading").classList.remove("show")}show(t,i){nt(t).classList.toggle("show",i)}mode(t,i,s="play"){if(this.show("select",t==="select"),this.show("maps",t==="maps"),this.show("lobby",t==="lobby"),document.getElementById("watch-bar").classList.toggle("hidden",!(t==="play"&&s==="watch")),document.getElementById("abil-bar").classList.toggle("hidden",!(t==="play"&&s==="play")),document.querySelector(".hud-left .stamina").classList.toggle("hidden",s==="watch"),this.show("result",t==="result"),this.show("paused",!1),nt("ghost-view").classList.add("hidden"),nt("hud").classList.toggle("hidden",t!=="play"),nt("touch").classList.toggle("hidden",!(t==="play"&&s!=="watch")),nt("touch").classList.toggle("desktop",!i),document.querySelector(".stick-zone").classList.toggle("fixed",!i),nt("alive").classList.toggle("hidden",t!=="play"),t==="play"){let r=nt("hint");r.style.opacity=1,clearTimeout(this.hintTimer),this.hintTimer=setTimeout(()=>r.style.opacity=0,9e3)}}buildCards(t,i,s,r){let a=nt("cards");a.innerHTML="",this.cards=new Map;for(let o of t){let h=document.createElement("button");h.className="card",h.style.backgroundImage=`url(${s[o.id]})`,h.innerHTML=`<div class="c-body"><div class="c-name">${o.name}</div><span class="pill ${o.rarityClass}">${o.rarity}</span><br><span class="c-tag">${Xp[o.id]||"\u2726"} ${o.tags[0]}</span></div>`,h.addEventListener("click",()=>r(o.id)),a.appendChild(h),this.cards.set(o.id,h)}let n=document.createElement("button");n.className="card",n.style.backgroundImage=`url(${s[i.id]})`,n.innerHTML=`<span class="c-lock">\u0412\u041E\u0414\u042F\u0429\u0418\u0419</span><div class="c-body"><div class="c-name">${i.name}</div><span class="pill ${i.rarityClass}">${i.rarity}</span><br><span class="c-tag">\u{1F3AD} ${i.tags[0]}</span></div>`,n.addEventListener("click",()=>r(i.id)),a.appendChild(n),this.cards.set(i.id,n);let l=document.createElement("div");l.className="card soon",l.innerHTML='<div class="q">?</div><div class="c-body" style="text-align:center"><div class="c-name">???</div><span class="pill common">\u0421\u041A\u041E\u0420\u041E</span></div>',a.appendChild(l)}onOptions(t,i){this.optCb=t;let s=(r,a,n)=>{let l=nt(r),o=h=>l.querySelectorAll("button").forEach(u=>u.classList.toggle("on",u.dataset.v===String(h)));o(a),l.querySelectorAll("button").forEach(h=>h.addEventListener("click",()=>{o(h.dataset.v),n(h.dataset.v)}))};s("opt-ghosts",i.ghosts,r=>t.ghosts(+r)),s("opt-bots",i.bots?1:0,r=>t.bots(r==="1"))}onAbility(t){this.abilityFn=t}abilityBar(t){let i=nt("abil-bar");i.innerHTML=t.map(s=>`<button class="ab" data-id="${s.id}" title="${s.name}"><i>${s.icon}</i><em>${s.key}</em><s></s><b class="ab-n"></b><small>${s.name}</small></button>`).join(""),i.querySelectorAll(".ab").forEach(s=>{s.addEventListener("mousedown",r=>r.stopPropagation()),s.addEventListener("click",r=>{var a;r.stopPropagation(),(a=this.abilityFn)==null||a.call(this,s.dataset.id)})}),this.abEls=[...i.querySelectorAll(".ab")]}cooldowns(t){if(this.abEls)for(let i of this.abEls){let{k:s=0,n:r=""}=t(i.dataset.id)||{};i.querySelector("s").style.height=(s*100).toFixed(0)+"%",i.classList.toggle("ready",s<=0);let a=i.querySelector(".ab-n");a.textContent!==String(r)&&(a.textContent=r)}}alive(t,i,s="\u0413\u0435\u0440\u043E\u0435\u0432"){nt("alive").textContent=`${s}: ${t}/${i}`}wallet(t){nt("wallet").textContent=t}pumpkins(t){nt("pumpkins").textContent=t}phase(t){let i=nt("phase");i.textContent=t==="chase"?"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438!":"\u041F\u0440\u044F\u0442\u043A\u0438",i.classList.toggle("chase",t==="chase")}mmLabel(t){let i=nt("mm-label");i.innerHTML=t,i.style.opacity=t?1:0}buildMaps(t,i){let s=nt("map-cards");s.innerHTML=t.map(r=>`<button class="map-card ${r.ready?"":"soon"}" data-id="${r.id}"><div class="m-title">${r.icon} ${r.name}</div><div class="m-pic" style="background-image:url(${r.pic})"></div><span class="m-diff ${r.hard?"hard":""}">${r.hard?"\u0421\u043B\u043E\u0436\u043D\u044B\u0439":"\u041E\u0431\u044B\u0447\u043D\u044B\u0439"}</span></button>`).join(""),s.querySelectorAll(".map-card").forEach(r=>r.addEventListener("click",()=>i(r.dataset.id)))}pickMap(t){document.querySelectorAll(".map-card").forEach(i=>i.classList.toggle("active",i.dataset.id===t))}minimapInit(t,i){let s=nt("minimap"),r=s.getContext("2d");this.mm={c:s,x:r,half:i,bg:document.createElement("canvas")};let a=this.mm.bg;a.width=a.height=300;let n=a.getContext("2d"),l=300/(i*2),o=h=>(h+i)*l;if(n.fillStyle=t.theme==="forest"?"#264840":"#6b5436",n.fillRect(0,0,300,300),t.theme==="forest"){n.fillStyle="#2e7890";for(let h of t.waterZones||[])n.beginPath(),n.ellipse(o(h.x),o(h.z),h.rx*l,h.rz*l,0,0,Math.PI*2),n.fill();n.strokeStyle="#aa8960",n.lineWidth=2.8*l,n.lineCap="round",n.lineJoin="round";for(let h of t.paths||[])n.beginPath(),h.forEach(([u,d],c)=>c?n.lineTo(o(u),o(d)):n.moveTo(o(u),o(d))),n.stroke()}else n.fillStyle="#8a6d45",n.fillRect(o(-1.7),0,3.4*l,300),n.fillRect(0,o(-1.6),300,3.2*l);n.fillStyle="#3f6a3a";for(let h of t.bushes)n.beginPath(),n.arc(o(h.x),o(h.z),h.r*l,0,7),n.fill();n.fillStyle="#2b1a10";for(let h of t.boxes)h.top>1.2&&h.bottom<1&&n.fillRect(o(h.minX),o(h.minZ),(h.maxX-h.minX)*l,(h.maxZ-h.minZ)*l);n.fillStyle="#243a22";for(let h of t.circles)h.top>3&&(n.beginPath(),n.arc(o(h.x),o(h.z),Math.max(1.5,h.r*l),0,7),n.fill())}minimap(t,i,s){if(!this.mm)return;let{c:r,x:a,half:n,bg:l}=this.mm,o=300/(n*2),h=2.3;a.save(),a.clearRect(0,0,300,300),a.beginPath(),a.arc(150,150,150,0,7),a.clip(),a.translate(150,150),a.rotate(i),a.scale(h,h),a.translate(-(t.x+n)*o,-(t.z+n)*o),a.drawImage(l,0,0);for(let u of s){let d=(u.x+n)*o,c=(u.z+n)*o;if(u.kind==="pumpkin"){a.fillStyle="#ffa23a",a.beginPath(),a.arc(d,c,2.2,0,7),a.fill();continue}a.fillStyle=u.kind==="me"?"#ff8a3a":u.kind==="ghost"?"#b07aff":"#ffffff",a.strokeStyle="#2a170b",a.lineWidth=1,a.beginPath(),a.arc(d,c,u.kind==="me"?4.5:3.2,0,7),a.fill(),a.stroke()}a.restore()}toast(t){let i=nt("toast");i.textContent=t,i.classList.remove("on"),i.offsetWidth,i.classList.add("on")}buildCreator(t,i,s){let r=nt("creator"),a=(n,l,o,h)=>`<div class="cr-row"><span>${l}</span><div class="cr-opts" data-k="${n}">${o.map(([u,d])=>h?`<button data-v="${u}" class="sw ${t[n]===u?"on":""}" style="--c:${u}"></button>`:`<button data-v="${u}" class="${t[n]===u?"on":""}">${d}</button>`).join("")}</div></div>`;r.innerHTML=a("gender","\u041A\u0442\u043E",i.gender)+a("hairStyle","\u041F\u0440\u0438\u0447\u0451\u0441\u043A\u0430",i.hairStyle[t.gender])+a("hair","\u0412\u043E\u043B\u043E\u0441\u044B",i.hair.map(n=>[n,n]),!0)+a("sweater","\u0421\u0432\u0438\u0442\u0435\u0440",i.sweater.map(n=>[n,n]),!0)+a("emblem","\u0417\u043D\u0430\u0447\u043E\u043A",i.emblem)+a("ears","\u0423\u0448\u043A\u0438 \u043A\u043E\u0442\u0438\u043A\u0430",i.ears)+a("tail","\u0425\u0432\u043E\u0441\u0442\u0438\u043A",i.tail),r.querySelectorAll(".cr-opts button").forEach(n=>n.addEventListener("click",()=>s(n.parentElement.dataset.k,n.dataset.v)))}showHero(t,i){var a;nt("creator").classList.toggle("hidden",!t.custom),document.querySelector(".sel-info").classList.toggle("custom",!!t.custom);let s=nt("skins");s.classList.toggle("hidden",!t.skins),t.skins&&(s.innerHTML=Object.entries(t.skins).map(([n,l])=>`<button data-s="${n}" class="${n===i?"on":""}" style="--c:#${l.hat.toString(16).padStart(6,"0")}">${l.name}</button>`).join(""),s.querySelectorAll("button").forEach(n=>n.addEventListener("click",()=>{var l;return(l=this.optCb)==null?void 0:l.skin(n.dataset.s)}))),nt("hero-name").innerHTML=`${t.name} <span class="paw">\u{1F43E}</span>`;let r=nt("hero-rarity");r.textContent=t.rarity,r.className="pill "+t.rarityClass,nt("hero-about").textContent=t.about,nt("hero-ab").textContent=t.ability,nt("hero-ab-text").textContent=t.abilityText,nt("hero-ab-icon").textContent=Xp[t.id]||"\u2726",nt("hero-tags").innerHTML=t.tags.map(n=>`<span class="tag">${n}</span>`).join(""),(a=this.cards)==null||a.forEach((n,l)=>n.classList.toggle("active",l===t.id))}status(t,i){let s=t+i;if(s===this.lastStatus)return;this.lastStatus=s;let r=nt("status");r.textContent=t,r.className="status "+(i||"")}hud({left:t,stamina:i,tired:s,hidden:r}){let a=Math.ceil(t),n=`${String(Math.floor(a/60)).padStart(2,"0")}:${String(a%60).padStart(2,"0")}`,l=nt("timer");l.textContent!==n&&(l.textContent=n,l.parentElement.classList.toggle("warn",a<=10));let o=nt("stamina");o.style.width=(i*100).toFixed(1)+"%",o.classList.toggle("tired",!!s),nt("hidden-badge").classList.toggle("on",!!r)}vignette(t){nt("vignette").style.opacity=t.toFixed(2)}setShield(t){let i=nt("shield");i.classList.toggle("hidden",t===null),i.classList.toggle("used",t===0)}setMute(t){nt("btn-mute").textContent=t?"\u{1F507}":"\u{1F50A}"}result(t){let i=nt("res-earn");i.textContent=t.earn?`+${t.earn} \u{1F383} \u0442\u044B\u043A\u043E\u0432\u043E\u043A`:"";let s=a=>a.join(", ");if(t.mode==="watch"){nt("res-emoji").textContent=t.alive.length?"\u{1F3EE}":"\u{1F47A}",nt("res-title").textContent=t.alive.length?"\u0420\u0430\u0441\u0441\u0432\u0435\u0442!":"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u043F\u043E\u0439\u043C\u0430\u043B\u0438 \u0432\u0441\u0435\u0445",nt("res-text").textContent=`\u041F\u043E\u0441\u043B\u0435 \u043F\u0440\u044F\u0442\u043E\u043A \u043E\u0441\u0442\u0430\u043B\u0438\u0441\u044C: ${s(t.hideSurvivors)||"\u043D\u0438\u043A\u0442\u043E"}. \u041F\u043E\u0441\u043B\u0435 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043E\u043A: ${s(t.alive)||"\u043D\u0438\u043A\u0442\u043E"}.`;return}if(t.mode==="hunter"||t.playerWasGhost){let a=t.found+t.chaseCatches;nt("res-emoji").textContent=a?"\u{1F3AD}":"\u{1F319}",nt("res-title").textContent=t.mode==="hunter"?t.alive.length?"\u041A\u0442\u043E-\u0442\u043E \u0443\u0441\u043A\u043E\u043B\u044C\u0437\u043D\u0443\u043B!":"\u0422\u044B \u043D\u0430\u0448\u0451\u043B \u0432\u0441\u0435\u0445!":t.alive.length?"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438 \u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C":"\u0422\u044B \u0434\u043E\u0433\u043D\u0430\u043B \u0432\u0441\u0435\u0445!",nt("res-text").textContent=t.mode==="hunter"?`\u0412 \u043F\u0440\u044F\u0442\u043A\u0430\u0445 \u043D\u0430\u0448\u0451\u043B: ${t.found}. \u0412 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0430\u0445 \u043F\u043E\u0439\u043C\u0430\u043B: ${t.chaseCatches}.${t.alive.length?` \u0421\u043F\u0430\u0441\u043B\u0438\u0441\u044C: ${s(t.alive)}.`:""}`:`\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438 \u043F\u0435\u0440\u0432\u044B\u043C \u2014 \u0438 \u0442\u044B \u0441\u0442\u0430\u043B \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u043C! \u0412 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0430\u0445 \u043F\u043E\u0439\u043C\u0430\u043D\u043E: ${t.chaseCatches}.`;return}let r=!t.playerCaughtInChase;nt("res-emoji").textContent=r?"\u{1F3EE}":"\u{1F47A}",nt("res-title").textContent=r?"\u0422\u044B \u043F\u0440\u043E\u0434\u0435\u0440\u0436\u0430\u043B\u0441\u044F!":"\u0422\u0435\u0431\u044F \u0434\u043E\u0433\u043D\u0430\u043B\u0438",nt("res-text").textContent=(t.playerFoundAt===null?"\u0412 \u043F\u0440\u044F\u0442\u043A\u0430\u0445 \u0442\u0435\u0431\u044F \u0442\u0430\u043A \u0438 \u043D\u0435 \u043D\u0430\u0448\u043B\u0438! ":"\u0412 \u043F\u0440\u044F\u0442\u043A\u0430\u0445 \u0442\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438. ")+(r?"\u0418 \u0432 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0430\u0445 \u0442\u044B \u0443\u0431\u0435\u0436\u0430\u043B \u043E\u0442 \u0432\u0441\u0435\u0445 \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u0432.":"\u041F\u0440\u044F\u0447\u044C\u0441\u044F \u0432 \u0434\u043E\u043C\u0430\u0445, \u0437\u0430 \u0448\u0438\u0440\u043C\u0430\u043C\u0438 \u0438 \u043D\u0430 \u043A\u0440\u044B\u0448\u0430\u0445, \u043F\u0440\u0438\u0441\u0435\u0434\u0430\u0439 \u0437\u0430 \u044F\u0449\u0438\u043A\u0430\u043C\u0438.")}};var Zp="masha-game-physics-v2",$p=[["walk","\u0428\u0430\u0433, \u043C/\u0441",2,10,.1],["run","\u0411\u0435\u0433, \u043C/\u0441",4,16,.1],["accel","\u0420\u0430\u0437\u0433\u043E\u043D",5,120,1],["decel","\u0422\u043E\u0440\u043C\u043E\u0436\u0435\u043D\u0438\u0435",5,120,1],["air","\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u0432\u043E\u0437\u0434\u0443\u0445\u0435",0,40,1],["jump","\u041F\u0440\u044B\u0436\u043E\u043A, \u043C",.5,4,.05],["gravity","\u0422\u044F\u0436\u0435\u0441\u0442\u044C \xD7",.4,2.5,.05],["turn","\u041F\u043E\u0432\u043E\u0440\u043E\u0442",2,30,.5],["stamina","\u0411\u0435\u0433 \u0431\u0435\u0437 \u043E\u0442\u0434\u044B\u0445\u0430, \u0441",1,15,.5],["regen","\u041E\u0442\u0434\u044B\u0445 (\u0434\u043E\u043B\u044F/\u0441)",.05,.6,.01],["mass","\u0412\u0435\u0441 \u043F\u0440\u0438 \u0442\u043E\u043B\u043A\u0430\u043D\u0438\u0438",.3,6,.1],["reach","\u0414\u043E\u0442\u044F\u0433\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0434\u043E \u0443\u0441\u0442\u0443\u043F\u0430, \u043C",0,2.5,.05],["climb","\u041B\u0435\u0437\u0435\u0442 \u043F\u043E \u043B\u0435\u0441\u0442\u043D\u0438\u0446\u0435, \u043C/\u0441",0,6,.1],["dash.mul","\u0420\u044B\u0432\u043E\u043A: \u0441\u0438\u043B\u0430 \xD7",1,2.5,.05],["dash.time","\u0420\u044B\u0432\u043E\u043A: \u0434\u043B\u0438\u0442\u0441\u044F, \u0441",.1,1.5,.05],["dash.cooldown","\u0420\u044B\u0432\u043E\u043A: \u043F\u0435\u0440\u0435\u0437\u0430\u0440\u044F\u0434\u043A\u0430, \u0441",.5,12,.5]],I_=[...$p.filter(([e])=>!["jump","reach","climb","dash.cooldown"].includes(e)),["dash.charges","\u0420\u044B\u0432\u043A\u043E\u0432 \u0432 \u0437\u0430\u043F\u0430\u0441\u0435",1,6,1],["dash.recharge","\u041D\u043E\u0432\u044B\u0439 \u0440\u044B\u0432\u043E\u043A \u043A\u043E\u043F\u0438\u0442\u0441\u044F, \u0441",2,30,1],["fly.speed","\u041F\u0430\u0440\u0438\u0442 \u0432\u0432\u0435\u0440\u0445, \u043C/\u0441",.5,6,.1],["fly.time","\u041F\u0430\u0440\u0438\u0442 \u0431\u0435\u0437 \u043E\u0442\u0434\u044B\u0445\u0430, \u0441",.5,6,.1]],L_=[["sightRange","\u0412\u0438\u0434\u0438\u0442 \u043D\u0430, \u043C",5,40,1],["hearRunRange","\u0421\u043B\u044B\u0448\u0438\u0442 \u0431\u0435\u0433 \u043D\u0430, \u043C",0,20,.5],["loseSightTime","\u0422\u0435\u0440\u044F\u0435\u0442 \u0438\u0437 \u0432\u0438\u0434\u0443 \u0437\u0430, \u0441",.5,6,.1],["catchRadius","\u0420\u0430\u0434\u0438\u0443\u0441 \u043F\u043E\u0438\u043C\u043A\u0438, \u043C",.5,2.5,.05],["burstRange","\u0420\u044B\u0432\u043E\u043A \u0441 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u044F (\u0431\u043E\u0442), \u043C",2,15,.5],["lateBoost","\u0411\u044B\u0441\u0442\u0440\u0435\u0435 \u043A \u043A\u043E\u043D\u0446\u0443 \u0440\u0430\u0443\u043D\u0434\u0430 (\u0434\u043E\u043B\u044F)",0,.4,.01],["spawnGap","\u0412\u044B\u0445\u043E\u0434\u044F\u0442 \u0441 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u043E\u043C, \u0441",0,15,1],["disguise.time","\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u0434\u043B\u0438\u0442\u0441\u044F, \u0441",2,20,.5],["disguise.cd","\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u0435\u0440\u0435\u0437\u0430\u0440\u044F\u0434\u043A\u0430, \u0441",4,40,1]],N_=[["gravity","\u0413\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u044F",10,60,1],["stepHeight","\u0421\u0442\u0443\u043F\u0435\u043D\u044C\u043A\u0430 \u0431\u0435\u0437 \u043F\u0440\u044B\u0436\u043A\u0430, \u043C",.1,1,.05],["pushStrength","\u0422\u043E\u043B\u043A\u0430\u043D\u0438\u0435 \u0433\u0435\u0440\u043E\u0435\u0432",0,1.5,.05]],hc=(e,t)=>t.split(".").reduce((i,s)=>i[s],e),U_=(e,t,i)=>{let s=t.split("."),r=s.pop();s.reduce((a,n)=>a[n],e)[r]=i};function Jp(){var e;try{let t=JSON.parse(localStorage.getItem(Zp)||"null");if(!t)return;for(let i of Object.keys(Oe.heroes))(e=t.heroes)!=null&&e[i]&&dr(Oe.heroes[i],t.heroes[i]);t.ghost&&dr(Oe.ghost,t.ghost),t.world&&dr(Oe.world,t.world)}catch{}}function dr(e,t){for(let i of Object.keys(t))typeof t[i]=="object"&&t[i]&&typeof e[i]=="object"?dr(e[i],t[i]):typeof t[i]==typeof e[i]&&(e[i]=t[i])}function qp(){try{localStorage.setItem(Zp,JSON.stringify({heroes:Oe.heroes,ghost:Oe.ghost,world:Oe.world}))}catch{}}var Ui,bo,Kp,Qp,cc,Eo=class{constructor(t,i){Ot(this,Ui);this.heroes=t,this.getCurrentHero=i,this.el=document.getElementById("tuner"),this.tab=null,this.el.querySelector(".tn-close").addEventListener("click",()=>this.toggle(!1)),this.el.querySelector(".tn-copy").addEventListener("click",()=>ae(this,Ui,Kp).call(this)),this.el.querySelector(".tn-reset").addEventListener("click",()=>ae(this,Ui,Qp).call(this));for(let s of["keydown","mousedown","touchstart","pointerdown","wheel"])this.el.addEventListener(s,r=>r.stopPropagation());addEventListener("keydown",s=>{(s.code==="F2"||s.code==="Backquote")&&(s.preventDefault(),this.toggle())})}get open(){return this.el.classList.contains("show")}toggle(t=!this.open){this.el.classList.toggle("show",t),t&&ae(this,Ui,bo).call(this,this.tab||this.getCurrentHero()),t&&document.pointerLockElement&&document.exitPointerLock()}};Ui=new WeakSet,bo=function(t){this.tab=t;let i=this.el.querySelector(".tn-tabs"),s=[...this.heroes.map(o=>[o.id,o.name]),["noface","\u0411\u0435\u0437\u043B\u0438\u043A"],["ghost","\u0427\u0443\u0442\u044C\u0451 \u0411\u0435\u0437\u043B\u0438\u043A\u0430"],["world","\u041C\u0438\u0440"]];i.innerHTML=s.map(([o,h])=>`<button data-t="${o}" class="${o===t?"on":""}">${h}</button>`).join(""),i.querySelectorAll("button").forEach(o=>o.addEventListener("click",()=>ae(this,Ui,bo).call(this,o.dataset.t)));let[r,a,n]=t==="ghost"?[Oe.ghost,L_,hr.ghost]:t==="world"?[Oe.world,N_,hr.world]:[Oe.heroes[t],t==="noface"?I_:$p,hr.heroes[t]],l=this.el.querySelector(".tn-fields");l.innerHTML=a.map(([o,h,u,d,c])=>{let p=hc(r,o),v=hc(n,o);return`<label class="${p!==v?"changed":""}"><span>${h}</span><input type="range" min="${u}" max="${d}" step="${c}" value="${p}" data-k="${o}"><b>${Yp(p)}</b></label>`}).join(""),l.querySelectorAll("input").forEach(o=>o.addEventListener("input",()=>{let h=parseFloat(o.value);U_(r,o.dataset.k,h),o.nextElementSibling.textContent=Yp(h),o.parentElement.classList.toggle("changed",h!==hc(n,o.dataset.k)),qp()}))},Kp=function(){var r;let t=this.tab,i=t==="ghost"?Oe.ghost:t==="world"?Oe.world:Oe.heroes[t],s=`${t}: ${JSON.stringify(i).replace(/"(\w+)":/g,"$1: ").replace(/,/g,", ")},`;(r=navigator.clipboard)==null||r.writeText(s).then(()=>ae(this,Ui,cc).call(this,"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u2014 \u0432\u0441\u0442\u0430\u0432\u044C \u0432 config.js"),()=>prompt("\u0421\u043A\u043E\u043F\u0438\u0440\u0443\u0439:",s))},Qp=function(){let t=this.tab;t==="ghost"?dr(Oe.ghost,hr.ghost):t==="world"?dr(Oe.world,hr.world):dr(Oe.heroes[t],hr.heroes[t]),qp(),ae(this,Ui,bo).call(this,t),ae(this,Ui,cc).call(this,"\u0412\u0435\u0440\u043D\u0443\u043B \u043A\u0430\u043A \u0431\u044B\u043B\u043E")},cc=function(t){let i=this.el.querySelector(".tn-flash");i.textContent=t,i.classList.add("on"),setTimeout(()=>i.classList.remove("on"),1600)};var Yp=e=>Math.abs(e)>=10?e.toFixed(0):e.toFixed(2).replace(/0$/,"");function ef(e){var c;let s=new io({antialias:!0,preserveDrawingBuffer:!0});s.setSize(240,320,!1),s.setPixelRatio(1),s.toneMapping=Zr,s.toneMappingExposure=1.2;let r=new Fa,a=document.createElement("canvas");a.width=8,a.height=256;let n=a.getContext("2d"),l=n.createLinearGradient(0,0,0,256);l.addColorStop(0,"#1a1a4a"),l.addColorStop(.6,"#3a2e6a"),l.addColorStop(1,"#2a1b2e"),n.fillStyle=l,n.fillRect(0,0,8,256),r.background=new Fs(a),r.background.colorSpace=ii,r.add(new Jr(10134783,2758704,1.3));let o=new Kr(16769720,2.2);o.position.set(2,4,5),r.add(o);let h=new _s(16752720,20,12);h.position.set(-2.5,2.5,-1.5),r.add(h);let u=new fi(32,240/320,.1,50),d={};for(let p of e){let v=p.build();v.update(.016,{t:1,speed:0,grounded:!0,landed:!1,mode:"search",appear:1}),v.root.rotation.y=p.id==="catbus"?.75:.35,r.add(v.root);let _=p.height,g=_*2.5+(p.id==="catbus"?1.6:.5);u.position.set(0,_*.6,g),u.lookAt(0,_*.4,0),s.render(r,u),d[p.id]=s.domElement.toDataURL("image/jpeg",.85),r.remove(v.root)}return s.dispose(),(c=s.forceContextLoss)==null||c.call(s),d}var na,To,Ka=class{constructor(){Ot(this,na);this.ws=null,this.id=null,this.host=null,this.players=[],this.handlers=new Map,this.code=null,this.heartbeat=null}get isHost(){return!!this.id&&this.id===this.host}get connected(){var t;return((t=this.ws)==null?void 0:t.readyState)===1}on(t,i){(this.handlers.get(t)||this.handlers.set(t,[]).get(t)).push(i)}static newCode(){let t="ABCDEFGHJKLMNPRSTUVWXYZ23456789";return Array.from({length:4},()=>t[Math.random()*t.length|0]).join("")}connect(t,i){return this.code=t.toUpperCase(),this.hello=i,new Promise(s=>{let r=!1,a=o=>{r||(r=!0,s(o))},n;try{n=new WebSocket(`${location.protocol==="https:"?"wss":"ws"}://${location.host}/room/${this.code}`)}catch{return a(!1)}this.ws=n;let l=setTimeout(()=>{a(!1);try{n.close()}catch{}},6e3);n.onmessage=o=>{let h;try{h=JSON.parse(o.data)}catch{return}h.t==="welcome"&&(this.id=h.id,clearTimeout(l),this.send({t:"hello",...this.hello}),clearInterval(this.heartbeat),this.heartbeat=setInterval(()=>this.send({t:"ping"}),25e3),a(!0)),h.t==="lobby"&&(this.players=h.players,this.host=h.host),ae(this,na,To).call(this,h.t,h),ae(this,na,To).call(this,"*",h)},n.onclose=()=>{clearTimeout(l),clearInterval(this.heartbeat),this.heartbeat=null,a(!1),this.ws===n&&(this.ws=null,ae(this,na,To).call(this,"close",{}))},n.onerror=()=>{}})}send(t){this.connected&&this.ws.send(JSON.stringify(t))}update(t){this.hello={...this.hello,...t},this.send({t:"hello",...this.hello})}leave(){let t=this.ws;clearInterval(this.heartbeat),this.heartbeat=null,this.ws=null,this.id=null,this.host=null,this.players=[],this.code=null;try{t==null||t.close()}catch{}}name(t){var i;return((i=this.players.find(s=>s.id===t))==null?void 0:i.name)||"\u0418\u0433\u0440\u043E\u043A"}};na=new WeakSet,To=function(t,i){for(let s of this.handlers.get(t)||[])s(i)};var oi=e=>Math.round(e*100)/100,tf=Vs.map(e=>e.id);function uc(e){return e.agents.map(t=>({k:t.key,hero:t.hero.id,skin:t.skin,name:t.name,pid:t.isPlayer?"host":t.remote||null}))}function sf(e){let t=e.agents.map(s=>{let r=s.ctrl,a=s.action;return[s.key,oi(r.pos.x),oi(r.pos.y),oi(r.pos.z),oi(r.yaw),oi(r.speed),r.grounded?1:0,oi(r.vel.y),r.running||r.dashT>0?1:0,r.crouching?1:0,s.alive?1:0,s.prop?tf.indexOf(s.prop.kind.id)+1:0,a?a.name:0,a?oi(a.t/a.dur):0,s.hidden?1:0,oi(r.stamina),r.exhausted?1:0,oi(r.dashCd/r.phys.dash.cooldown)]}),i=e.activeGhosts.map((s,r)=>{let a=s.disguise;return[r,oi(s.pos.x),oi(s.pos.y),oi(s.pos.z),oi(s.yaw),s.state==="hidden"?0:s.state==="appear"?1:2,oi(s.appear),s.state==="hunt"?1:0,oi(s.ctrl.speed),s.stunT>0?1:0,a!=null&&a.hero?a.hero.id:0,a!=null&&a.prop?a.prop.id:0,s.isPlayer?"host":s.remote||0,oi(s.ctrl.stamina),s.ctrl.dashCharges,oi(s.ctrl.flyEnergy),oi(s.disguiseCd)]});return{t:"s",ph:e.phase,left:oi(e.left),sp:e.spawned,a:t,g:i}}var wo=class{constructor(t){this.env=t,this.agents=new Map,this.snap=null,this.ghostDz=new Map}setRoster(t){let i=new Set(t.map(s=>s.k));for(let[s,r]of this.agents)i.has(s)||(this.env.scene.remove(r.char.root),r.propObj&&this.env.scene.remove(r.propObj),this.agents.delete(s));for(let s of t){if(this.agents.has(s.k))continue;let r=this.env.heroes.find(n=>n.id===s.hero)||this.env.heroes[0],a=this.env.acquire(r,s.skin);this.agents.set(s.k,{def:r,char:a,name:s.name,pid:s.pid,pos:null,yaw:0,s:null,propObj:null,propKind:0})}}apply(t){this.snap=t;for(let i of t.a){let s=this.agents.get(i[0]);s&&(s.s=i)}}me(t){var s;for(let r of this.agents.values())if(r.pid===t&&r.s&&r.s[10])return{kind:"agent",v:r,pos:r.pos||new U(r.s[1],r.s[2],r.s[3])};let i=(s=this.snap)==null?void 0:s.g.find(r=>r[12]===t);return i?{kind:"ghost",g:i,pos:this.env.ghosts[i[0]].root.position}:null}render(t,i){var a;let s=1-Math.exp(-t*14);for(let n of this.agents.values()){let l=n.s;if(!l){n.char.root.visible=!1;continue}let o=new U(l[1],l[2],l[3]);!n.pos||n.pos.distanceTo(o)>6?n.pos=o.clone():n.pos.lerp(o,s),n.yaw+=Math.atan2(Math.sin(l[4]-n.yaw),Math.cos(l[4]-n.yaw))*s;let h=!!l[10],u=l[11];u!==n.propKind&&(n.propObj&&(this.env.scene.remove(n.propObj),n.propObj=null),u&&(n.propObj=rs(tf[u-1]),n.propObj.rotation.y=Math.random()*6,this.env.scene.add(n.propObj)),n.propKind=u),n.propObj&&(n.propObj.position.copy(n.pos),n.propObj.visible=h);let d=n.char.root;d.visible=h&&!u,d.position.copy(n.pos),d.rotation.y=n.yaw,d.scale.y+=((l[9]?.62:1)-d.scale.y)*Math.min(1,t*14),n.char.update(t,{t:i,speed:l[5],grounded:!!l[6],vy:l[7],running:!!l[8],landed:!1,landSpeed:0,crouch:!!l[9],action:l[12]?{name:l[12],k:l[13]}:null})}let r=((a=this.snap)==null?void 0:a.g)||[];this.env.ghosts.forEach((n,l)=>{let o=r.find(c=>c[0]===l),h=o&&o[5]!==0,u=o&&(o[10]?"hero:"+o[10]:o[11]?"prop:"+o[11]:null);for(let[c,p]of this.ghostDz)c.endsWith("#"+l)&&c!==u+"#"+l&&(p.root.visible=!1);if(n.root.visible=!!h&&!u,!o)return;let d=new U(o[1],o[2],o[3]);if(n.root.position.distanceTo(d)>6?n.root.position.copy(d):n.root.position.lerp(d,s),n.root.rotation.y+=Math.atan2(Math.sin(o[4]-n.root.rotation.y),Math.cos(o[4]-n.root.rotation.y))*s,h&&!u&&n.char.update(t,{t:i,speed:o[8],mode:o[7]?"hunt":"search",appear:o[5]===1?o[6]:1,stunned:!!o[9]}),h&&u){let c=u+"#"+l,p=this.ghostDz.get(c);p||(o[10]?p=this.env.heroes.find(_=>_.id===o[10]).build("classic"):p={root:rs(o[11]),update(){}},this.env.scene.add(p.root),this.ghostDz.set(c,p)),p.root.visible=!0,p.root.position.copy(n.root.position),o[10]&&(p.root.rotation.y=n.root.rotation.y),p.update(t,{t:i,speed:o[8],grounded:!0,vy:0,running:o[8]>6,landed:!1})}})}clear(){for(let t of this.agents.values())this.env.scene.remove(t.char.root),t.propObj&&this.env.scene.remove(t.propObj);this.agents.clear();for(let t of this.ghostDz.values())this.env.scene.remove(t.root);this.ghostDz.clear(),this.env.ghosts.forEach(t=>{t.root.visible=!1}),this.snap=null}};var ns=e=>document.getElementById(e),rf="masha-game-name",D_={kid:"\u{1F431}",masha:"\u{1F9B6}",catbus:"\u{1F408}",moti:"\u{1F6E1}\uFE0F",brothers:"\u{1F465}",noface:"\u{1F3AD}"},af=e=>ri.find(t=>t.id===e)||(e===Jt.id?Jt:ri[0]),Kt,nf,of,lf,hf,cf,Qa,uf,df,Ao=class{constructor(t){Ot(this,Kt);this.g=t,this.net=new Ka,this.sendT=0,this.inT=0,this.latch={jump:!1,dash:!1},this.guest=null,ae(this,Kt,nf).call(this)}get inRoom(){return!!this.net.code&&this.net.connected}get isHost(){return this.inRoom&&this.net.isHost}get isGuestPlaying(){return!!this.guest}get myName(){try{return localStorage.getItem(rf)||""}catch{return""}}hello(){let t=this.g.hero;return{name:this.myName||"\u0418\u0433\u0440\u043E\u043A",hero:t.id,skin:t.custom?JSON.stringify(this.g.look):this.g.skin}}get url(){return`${location.origin}${location.pathname}?room=${this.net.code}`}async createRoom(){return this.join(Ka.newCode())}async join(t){let i=this.g.ui;if(i.toast("\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u0441\u044F \u043A \u043A\u043E\u043C\u043D\u0430\u0442\u0435\u2026"),!await this.net.connect(t,this.hello()))return i.toast("\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F. \u0421\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u0430\u044F \u0438\u0433\u0440\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0430 \u0430\u0434\u0440\u0435\u0441\u0435 \u0438\u0433\u0440\u044B \u0432 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0435."),!1;try{history.replaceState(null,"",`?room=${this.net.code}`)}catch{}return this.showLobby(),!0}leave(){this.isHost&&this.g.state==="play"&&this.net.send({t:"lobbyBack"}),this.net.leave(),ae(this,Kt,Qa).call(this);try{history.replaceState(null,"",location.pathname)}catch{}this.g.toSelect()}showLobby(){let t=this.g;this.isHost&&["play","result"].includes(t.state)&&this.net.send({t:"lobbyBack"}),t.state="lobby",t.input.enabled=!1,t.input.releasePointer(),t.ui.mode("lobby",!0),this.net.update(this.hello()),ns("lb-code").textContent=this.net.code,ns("lb-url").value=this.url,ae(this,Kt,of).call(this),this.renderLobby()}renderLobby(){var o;let t=this.net,i=t.host;ns("lb-count").textContent=`${t.players.length}/8`,ns("lb-players").innerHTML=t.players.map(h=>`<div class="lb-p ${h.id===t.id?"me":""}"><span class="ic">${D_[h.hero]||"\u{1F43E}"}</span><span class="nm">${O_(h.name)}${h.id===i?" \u{1F451}":""}</span><span class="hr">${af(h.hero).name}</span></div>`).join("");let s={};for(let h of t.players)s[h.vote]=(s[h.vote]||0)+1;let r=this.g.maps,a=ns("lb-maps");a.innerHTML=r.map(h=>`<button class="map-card ${h.ready?"":"soon"}" data-id="${h.id}"><div class="m-title">${h.icon} ${h.name}</div><div class="m-pic" style="background-image:url(${h.pic})"></div><span class="m-diff ${h.hard?"hard":""}">${h.hard?"\u0421\u043B\u043E\u0436\u043D\u044B\u0439":"\u041E\u0431\u044B\u0447\u043D\u044B\u0439"}</span><div class="m-votes">${"\u{1F43E}".repeat(s[h.id]||0)}</div></button>`).join("");let n=(o=t.players.find(h=>h.id===t.id))==null?void 0:o.vote;a.querySelectorAll(".map-card").forEach(h=>{h.classList.toggle("active",h.dataset.id===n),h.addEventListener("click",()=>{let u=r.find(d=>d.id===h.dataset.id);if(!u.ready){this.g.ui.toast(`\xAB${u.name}\xBB \u0441\u043A\u043E\u0440\u043E \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F!`);return}t.send({t:"vote",map:u.id})})});let l=t.isHost;ns("lb-start").classList.toggle("hidden",!l),ns("lb-wait").classList.toggle("hidden",l)}remotes(){return this.isHost?this.net.players.filter(t=>t.id!==this.net.id).map(t=>({id:t.id,name:t.name,hero:af(t.hero),skin:t.skin})):[]}hostStart(){var s;if(!this.isHost)return;let t=this.g,i=new Map;for(let r of this.net.players)t.maps.some(a=>a.id===r.vote&&a.ready)&&i.set(r.vote,(i.get(r.vote)||0)+1);if(i.size){let r=(s=this.net.players.find(a=>a.id===this.net.id))==null?void 0:s.vote;t.mapId=[...i.keys()].sort((a,n)=>i.get(n)-i.get(a)||(a===r?-1:n===r?1:0))[0]}t.beginRound(t.hero.id===Jt.id?"hunter":"play")}hostStarted(){if(!this.isHost)return;let t=this.g.round;t.player&&(t.player.name=this.myName||t.player.name),this.net.send({t:"start",roster:uc(t),mode:t.mode,map:this.g.mapId}),this.sendT=0}hostTick(t){this.isHost&&(this.sendT-=t,!(this.sendT>0)&&(this.sendT=1/15,this.net.send(sf(this.g.round))))}hostEvent(t){if(!this.isHost)return;let i=s=>s!=null&&s.isPlayer?"host":(s==null?void 0:s.remote)||null;t.type==="caught"?this.net.send({t:"ev",k:"caught",name:t.agent.name,pid:i(t.agent),phase:t.phase,by:t.ghost.isPlayer?"host":t.ghost.remote||null}):t.type==="resisted"?this.net.send({t:"ev",k:"resisted",name:t.agent.name,pid:i(t.agent)}):t.type==="ability"?this.net.send({t:"ev",k:"ability",id:t.id,pid:i(t.agent)}):t.type==="ghostSpawn"?this.net.send({t:"ev",k:"spawn",i:t.i,phase:this.g.round.phase,pid:t.ghost.isPlayer?"host":t.ghost.remote||null}):t.type==="phase"?(this.net.send({t:"roster",roster:uc(this.g.round)}),this.net.send({t:"ev",k:"phase",name:t.newGhostName,pid:t.agent?i(t.agent):null})):t.type==="poof"&&this.net.send({t:"ev",k:"poof",x:t.x,y:t.y,z:t.z,ghost:!!t.ghost})}hostEnd(t){this.isHost&&this.net.send({t:"end",r:{hideSurvivors:t.hideSurvivors,alive:t.alive,caught:t.caught}})}hostPumpkin(t){this.isHost&&t&&t!=="host"&&this.net.send({t:"ev",k:"pk",to:t})}guestTick(t,i){var A,w;let s=this.g,r=this.guest;if(!r)return;let a=s.input.read();a.jump&&(this.latch.jump=!0),a.dash&&(this.latch.dash=!0),this.inT-=t,this.inT<=0&&(this.inT=1/20,this.net.send({t:"in",x:+a.x.toFixed(2),y:+a.y.toFixed(2),run:a.run,crouch:a.crouch,jumpHold:a.jumpHold,jump:this.latch.jump,dash:this.latch.dash,camYaw:+s.cam.yaw.toFixed(3)}),this.latch.jump=this.latch.dash=!1),r.render(t,i);let n=r.snap,l=r.me(this.net.id),o=[...r.agents.values()].filter(m=>{var M;return(M=m.s)==null?void 0:M[10]}),h=!l&&o.length>0,u=h?o[this.guestFocus%o.length]:null,d=(l==null?void 0:l.pos)||(u==null?void 0:u.pos)||((A=r.agents.values().next().value)==null?void 0:A.pos)||new U(0,0,22),c=(l==null?void 0:l.kind)==="agent"?l.v.s:null,p=(l==null?void 0:l.kind)==="ghost"?l.g:null;if(s.mainFirstPersonTarget=h?u:null,(l==null?void 0:l.kind)!==this.lastKind&&(s.cam.configure((l==null?void 0:l.kind)==="ghost"?Jt.cam:((w=l==null?void 0:l.v)==null?void 0:w.def.cam)||ri[0].cam),this.lastKind=l==null?void 0:l.kind),h?s.firstPerson({ctrl:{pos:u.pos,yaw:u.yaw},hero:u.def}):s.cam.update(t,d,a),this.focusPos=d,!n)return;document.getElementById("watch-bar").classList.toggle("hidden",!h),document.getElementById("touch").classList.toggle("hidden",h),h&&(document.getElementById("btn-next").textContent="\u0414\u0440\u0443\u0433\u043E\u0439 \u0433\u0435\u0440\u043E\u0439 \u203A");let v=c&&n.ph==="hide"&&(c[9]||c[11]||c[14])?n.g.filter(m=>m[5]).sort((m,M)=>Math.hypot(m[1]-d.x,m[3]-d.z)-Math.hypot(M[1]-d.x,M[3]-d.z))[0]:null,_=v&&s.ghostPool[v[0]],g=v&&(v[10]?`hero:${v[10]}`:v[11]?`prop:${v[11]}`:null),f=g&&this.guest.ghostDz.get(`${g}#${v[0]}`);s.ghostViewTarget=_?{ctrl:{pos:new U(v[1],v[2],v[3]),yaw:v[4]},def:_.def,root:_.root,disguiseRoot:f==null?void 0:f.root}:null,document.getElementById("ghost-view").classList.toggle("hidden",!s.ghostViewTarget),s.ui.phase(n.ph==="chase"?"chase":"hide");let x=n.a.filter(m=>m[10]).length;s.ui.alive(x,n.a.length,n.ph==="hide"?"\u0421\u043F\u0440\u044F\u0442\u0430\u043B\u0438\u0441\u044C":"\u0423\u0431\u0435\u0433\u0430\u044E\u0442"),s.ui.hud({left:n.left,stamina:c?c[15]:p?p[13]:1,tired:c?!!c[16]:!1,hidden:c?!!c[14]:!1});let b;n.ph==="hide"&&n.sp===0?b=p?"\u0417\u0430\u043A\u0440\u043E\u0439 \u0433\u043B\u0430\u0437\u0430 \u0438 \u0441\u0447\u0438\u0442\u0430\u0439\u2026 \u0413\u0435\u0440\u043E\u0438 \u043F\u0440\u044F\u0447\u0443\u0442\u0441\u044F!":"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0441\u043A\u043E\u0440\u043E \u0432\u044B\u0439\u0434\u0443\u0442 \u2014 \u043F\u0440\u044F\u0447\u044C\u0441\u044F!":p?b=p[10]||p[11]?"\u0422\u044B \u0437\u0430\u043C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u0430\u043D \u2014 \u043F\u043E\u0434\u043A\u0440\u0430\u0434\u0438\u0441\u044C!":n.ph==="hide"?`\u041D\u0430\u0439\u0434\u0438 \u0441\u043F\u0440\u044F\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044F! \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C: ${x}`:`\u0414\u043E\u0433\u043E\u043D\u0438 \u0432\u0441\u0435\u0445! \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C: ${x}`:l?c[11]?b="\u0422\u044B \u2014 \u043F\u0440\u0435\u0434\u043C\u0435\u0442. \u041D\u0435 \u0448\u0435\u0432\u0435\u043B\u0438\u0441\u044C! (Q \u2014 \u0441\u043D\u043E\u0432\u0430 \u0441\u0442\u0430\u0442\u044C \u0441\u043E\u0431\u043E\u0439)":b=c[14]?"\u0422\u0438\u0445\u043E\u2026 \u0442\u0435\u0431\u044F \u0438\u0449\u0443\u0442":n.ph==="chase"?"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438! \u041D\u0435 \u043F\u043E\u043F\u0430\u0434\u0438\u0441\u044C!":"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0438\u0449\u0443\u0442. \u0421\u043F\u0440\u044F\u0447\u044C\u0441\u044F \u0438\u043B\u0438 \u0437\u0430\u043C\u0430\u0441\u043A\u0438\u0440\u0443\u0439\u0441\u044F!":b="\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438! \u0421\u043C\u043E\u0442\u0440\u0438, \u043A\u0430\u043A \u043F\u0440\u044F\u0447\u0443\u0442\u0441\u044F \u0434\u0440\u0443\u0433\u0438\u0435\u2026",s.ui.status(b,"calm"),s.ui.mmLabel(n.ph==="hide"&&n.sp===0&&!p?"\u041D\u0430\u0439\u0434\u0438 \u043C\u0435\u0441\u0442\u043E<br>\u0438 \u0441\u043F\u0440\u044F\u0447\u044C\u0441\u044F!":"");let y=p?"ghost":c?"hero:"+l.v.def.id:"none";y!==this.lastBar&&(this.lastBar=y,s.ui.abilityBar(p?s.ghostAbilities:c?s.heroAbilities(l.v.def.id):[])),p?s.ui.cooldowns(m=>m==="dash"?{k:p[14]>0?0:1,n:p[14]}:m==="fly"?{k:1-p[15]}:{k:p[10]||p[11]?0:p[16]/Oe.ghost.disguise.cd}):c&&s.ui.cooldowns(m=>m==="dash"?{k:c[17]}:{k:0});let S=[];for(let m of r.agents.values())m.s&&m.s[10]&&m!==(l==null?void 0:l.v)&&!p&&S.push({x:m.s[1],z:m.s[3],kind:"ally"});for(let m of n.g)m[5]&&m!==p&&(p||!m[10]&&!m[11]&&Math.hypot(m[1]-d.x,m[3]-d.z)<18)&&S.push({x:m[1],z:m[3],kind:"ghost"});S.push({x:d.x,z:d.z,kind:"me"}),s.ui.minimap(d,s.cam.yaw,S)}nextGuestFocus(){var t;this.g.state!=="guest"||(t=this.guest)!=null&&t.me(this.net.id)||this.guestFocus++}guestKey(t){var i;if(this.lastBar==="ghost"){t==="1"&&this.guestAbility("mask-hero"),t==="2"&&this.guestAbility("mask-prop");return}if((i=this.lastBar)!=null&&i.startsWith("hero:")){let s=this.g.heroAbilities(this.lastBar.slice(5)).find(r=>r.key===t);s&&this.guestAbility(s.id)}}guestAbility(t){if(t==="dash"){this.latch.dash=!0;return}if(t==="fly"){this.latch.jump=!0;return}this.net.send({t:"ab",id:t})}};Kt=new WeakSet,nf=function(){let t=this.g.ui,i=this.net;this.seenHost=null,t.on("lb-leave",()=>this.leave()),t.on("lb-hero",()=>this.g.toSelect()),t.on("lb-start",()=>this.hostStart()),t.on("lb-copy",()=>{var r;(r=navigator.clipboard)==null||r.writeText(this.url).then(()=>t.toast("\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430!"),()=>{}),ns("lb-url").select()}),t.on("lb-share",()=>{var r;navigator.share?navigator.share({title:"\u041F\u0440\u044F\u0442\u043A\u0438 \u0441 \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u043C",text:"\u0418\u0433\u0440\u0430\u0435\u043C \u0432\u043C\u0435\u0441\u0442\u0435! \u041A\u043E\u043C\u043D\u0430\u0442\u0430 "+i.code,url:this.url}).catch(()=>{}):((r=navigator.clipboard)==null||r.writeText(this.url),t.toast("\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430!"))});let s=ns("lb-name");s.value=this.myName,s.addEventListener("keydown",r=>r.stopPropagation()),s.addEventListener("change",()=>{try{localStorage.setItem(rf,s.value.trim())}catch{}i.update(this.hello())}),i.on("lobby",r=>{this.g.state==="lobby"&&this.renderLobby(),ae(this,Kt,lf).call(this,r)}),i.on("left",r=>{if(this.isHost&&this.g.state==="play"){let a=this.g.round,n=a.agents.find(l=>l.remote===r.id);n&&(this.g.ui.toast(`${n.name} \u0432\u044B\u0448\u0435\u043B \u2014 \u0437\u0430 \u043D\u0435\u0433\u043E \u0438\u0433\u0440\u0430\u0435\u0442 \u0431\u043E\u0442`),a.convertToBot(n));for(let l of a.activeGhosts)l.remote===r.id&&(l.remote=null)}}),i.on("close",()=>{this.g.state!=="loading"&&(this.g.ui.toast("\u0421\u0432\u044F\u0437\u044C \u0441 \u043A\u043E\u043C\u043D\u0430\u0442\u043E\u0439 \u043F\u043E\u0442\u0435\u0440\u044F\u043D\u0430"),ae(this,Kt,Qa).call(this),["lobby","guest"].includes(this.g.state)&&this.g.toSelect())}),i.on("start",r=>ae(this,Kt,cf).call(this,r)),i.on("roster",r=>{var a;return(a=this.guest)==null?void 0:a.setRoster(r.roster)}),i.on("s",r=>{var a;return(a=this.guest)==null?void 0:a.apply(r)}),i.on("ev",r=>ae(this,Kt,uf).call(this,r)),i.on("end",r=>ae(this,Kt,df).call(this,r)),i.on("lobbyBack",()=>{ae(this,Kt,Qa).call(this),this.showLobby()}),i.on("in",r=>{if(!this.isHost)return;let a=this.g.round.netIn.get(r.from)||{};this.g.round.netIn.set(r.from,{...r,jump:a.jump||r.jump,dash:a.dash||r.dash})}),i.on("ab",r=>ae(this,Kt,hf).call(this,r))},of=function(){let t=ns("lb-qr"),i=()=>{try{let r=window.qrcode(0,"M");r.addData(this.url),r.make(),t.src=r.createDataURL(4,2)}catch{t.removeAttribute("src")}};if(window.qrcode)return i();if(t.removeAttribute("src"),this.qrLoading)return;this.qrLoading=!0;let s=document.createElement("script");s.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js",s.onload=i,document.head.appendChild(s)},lf=function(t){let i=this.seenHost;this.seenHost=t.host,!(!this.guest||i==null||t.host===i)&&(ae(this,Kt,Qa).call(this),this.g.ui.toast(t.host===this.net.id?"\u0425\u043E\u0437\u044F\u0438\u043D \u0432\u044B\u0448\u0435\u043B \u2014 \u0442\u0435\u043F\u0435\u0440\u044C \u0442\u044B \u0445\u043E\u0437\u044F\u0438\u043D. \u0420\u0430\u0443\u043D\u0434 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D.":"\u0425\u043E\u0437\u044F\u0438\u043D \u0432\u044B\u0448\u0435\u043B \u2014 \u0440\u0430\u0443\u043D\u0434 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D, \u0432\u0435\u0440\u043D\u0443\u043B\u0438\u0441\u044C \u0432 \u043B\u043E\u0431\u0431\u0438."),this.showLobby())},hf=function(t){if(!this.isHost||this.g.state!=="play")return;let i=this.g.round,s=i.agents.find(a=>a.remote===t.from&&a.alive);if(s){s.abilities.use(t.id);return}let r=i.activeGhosts.find(a=>a.remote===t.from);r&&(t.id==="mask-hero"||t.id==="mask-prop")&&(r.disguised?r.reveal():r.useDisguise(i.agents,t.id==="mask-prop"?"prop":"hero"))},cf=async function(t){var s;let i=this.g;i.mapId=t.map==="forest"?"forest":"village",(s=this.guest)==null||s.clear(),this.guest=null;try{await i.activateMap(i.mapId)}catch(r){console.error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u0443 \u043A\u043E\u043C\u043D\u0430\u0442\u044B",r),i.ui.toast("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u0443 \u043A\u043E\u043C\u043D\u0430\u0442\u044B");return}i.releaseAll(),this.guest=new wo({scene:i.scene,heroes:[...ri,Jt],ghosts:i.ghostPool,acquire:(r,a)=>i.acquireChar(r,a)}),this.guest.setRoster(t.roster),this.guestMode=t.mode,this.guestFocus=0,this.pk=0,i.showGhost.root.visible=!1,i.showcase=null,i.input.reset(),i.state="guest",i.input.enabled=!0,i.input.lookOnly=!1,i.cam.yaw=0,i.cam.pitch=.3,i.ui.mode("play",i.isTouch,"play"),i.ui.phase("hide"),i.ui.pumpkins(0),i.ui.abilityBar([]),this.lastBar=null,i.showLight.intensity=0,document.getElementById("btn-again").classList.add("hidden")},Qa=function(){this.guest&&(this.guest.clear(),this.g.releaseAll(),this.guest=null,document.getElementById("btn-again").classList.remove("hidden"))},uf=function(t){var a,n,l,o;let i=this.g,s=i.ui,r=this.net.id;this.guest&&(t.k==="caught"?(t.pid===r?s.toast(t.phase==="hide"?"\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438! \u041F\u043E\u0434\u043E\u0436\u0434\u0438 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043E\u043A.":"\u0422\u0435\u0431\u044F \u0434\u043E\u0433\u043D\u0430\u043B\u0438!"):t.by===r?s.toast(`\u041F\u043E\u043F\u0430\u043B\u0441\u044F: ${t.name}!`):s.toast(`${t.phase==="hide"?"\u041D\u0430\u0448\u043B\u0438":"\u0414\u043E\u0433\u043D\u0430\u043B\u0438"}: ${t.name}`),i.sound.chime([392,330])):t.k==="resisted"?(s.toast(t.pid===r?"\u0422\u044B \u0432\u044B\u0440\u0432\u0430\u043B\u0441\u044F \u0438\u0437 \u043F\u043E\u0438\u043C\u043A\u0438! \u0423\u043F\u0440\u044F\u043C\u0441\u0442\u0432\u043E \u043F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E.":`${t.name} \u0432\u044B\u0440\u0432\u0430\u043B\u0438\u0441\u044C \u0438\u0437 \u043F\u043E\u0438\u043C\u043A\u0438!`),t.pid===r&&((n=(a=i.sound).brothersCue)==null||n.call(a,"resist"))):t.k==="ability"&&["fear","hypnosis","glare"].includes(t.id)?(o=(l=i.sound).brothersCue)==null||o.call(l,t.id):t.k==="spawn"?(i.sound.ghostAppear(),i.cam.shake=.6,t.pid===r?s.toast("\u0422\u044B \u0432\u044B\u0448\u0435\u043B \u043D\u0430 \u043E\u0445\u043E\u0442\u0443! \u0418\u0449\u0438!"):t.i===0&&s.toast(t.phase==="hide"?"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0432\u044B\u0448\u043B\u0438 \u0438\u0441\u043A\u0430\u0442\u044C!":"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438 \u043D\u0430\u0447\u0430\u043B\u0438\u0441\u044C!")):t.k==="phase"?(i.sound.ghostAppear(),s.phase("chase"),s.toast(t.pid===r?"\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438 \u043F\u0435\u0440\u0432\u044B\u043C \u2014 \u0442\u0435\u043F\u0435\u0440\u044C \u0422\u042B \u0411\u0435\u0437\u043B\u0438\u043A! \u0414\u043E\u0433\u043E\u043D\u044F\u0439!":`\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438! \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u043C \u0441\u0442\u0430\u043B(\u0430): ${t.name}. \u0411\u0435\u0433\u0438!`)):t.k==="poof"?i.addFx(i.poofFx(t.x,t.y,t.z,t.ghost)):t.k==="pk"&&t.to===r&&(this.pk++,s.pumpkins(this.pk),i.sound.chime([784,1046,1318])))},df=function(t){let i=this.g,s=t.r;i.state="result",i.input.enabled=!1,i.input.releasePointer();let r=this.pk;r&&i.ui.wallet(ia.add(r)),i.ui.result({mode:"watch",alive:s.alive,hideSurvivors:s.hideSurvivors,caught:s.caught,earn:r}),i.ui.mode("result",i.isTouch),document.getElementById("btn-again").classList.add("hidden")};var O_=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);var oa=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,bs=oa&&Math.min(screen.width,screen.height)<820,pf=4,ff=[{id:"dash",key:"E",icon:"\u{1F4A8}",name:"\u0420\u044B\u0432\u043E\u043A"},{id:"mask-hero",key:"1",icon:"\u{1F3AD}",name:"\u0421\u0442\u0430\u0442\u044C \u0433\u0435\u0440\u043E\u0435\u043C"},{id:"mask-prop",key:"2",icon:"\u{1F4E6}",name:"\u0421\u0442\u0430\u0442\u044C \u0432\u0435\u0449\u044C\u044E"},{id:"fly",key:"\u2423",icon:"\u{1FAB6}",name:"\u0412\u0437\u043B\u0435\u0442\u0435\u0442\u044C"}],we,mf,Ro,en,dc,gf,pc,Co,Po,Xs,tn,fc,la,Io,mc,vf,gc,yf,xf,_f,Sf,Mf,bf,Ef,Ts,Lo=class{constructor(t){Ot(this,we);this.canvas=t,this.ui=new Mo,this.sound=new So,this.state="loading",this.t=0,this.fx=[],this.navs=new Map,this.pool=new Map,this.acquired=[],this.skin="classic",this.withBots=!0,this.ghostCount=Oe.ghost.count,this.mapId="village",this.activeMapId="village",this.look=Wa()}get agents(){var t;return((t=this.round)==null?void 0:t.agents)||[]}get isTouch(){return oa}get ghostAbilities(){return ff}heroAbilities(t){return oc[t]||[]}acquireChar(t,i){return ae(this,we,Ro).call(this,t,i)}releaseAll(){ae(this,we,en).call(this)}poofFx(t,i,s,r){return qh(this.scene,t,i,s,r?13215999:16773590)}get ghosts(){var t;return((t=this.round)==null?void 0:t.activeGhosts)||[]}async start(){var l,o,h,u;Jp();let t=this.ui;t.progress(.1,"\u0421\u0442\u0440\u043E\u0438\u043C \u0434\u0435\u0440\u0435\u0432\u043D\u044E\u2026"),await Es();let i=this.renderer=new io({canvas:this.canvas,antialias:!bs||devicePixelRatio<2,powerPreference:"high-performance"});i.setPixelRatio(Math.min(devicePixelRatio,bs?Oe.graphics.maxPixelRatioMobile:Oe.graphics.maxPixelRatioDesktop)),i.setSize(innerWidth,innerHeight,!1),i.toneMapping=Zr,i.toneMappingExposure=1.15,i.shadowMap.enabled=Oe.graphics.shadows,i.shadowMap.type=zr,this.scene=new Fa,this.camera=new fi(Oe.camera.fov,innerWidth/innerHeight,.1,400),this.insetCamera=new fi(72,16/9,.08,180),this.map=Xh(this.scene,{isMobile:bs}),this.world=this.map.world,t.progress(.4,"\u0417\u0430\u0436\u0438\u0433\u0430\u0435\u043C \u0444\u043E\u043D\u0430\u0440\u0438\u043A\u0438\u2026"),await Es(),this.fireflies=Zh(this.scene,bs?50:Oe.graphics.fireflies,28),this.soot=$h(this.scene,this.world,bs?10:16);let s=this.navFor(Jt.radius);this.ghostPool=Array.from({length:pf},()=>new qa(Jt,this.world,this.scene,s,{heroes:ri})),this.input=new uo(this.canvas,document.getElementById("touch")),this.cam=new po(this.camera,this.map.cameraBlockers),this.showLight=new _s(16769200,14,9,1.6),this.scene.add(this.showLight),t.progress(.6,"\u041F\u0440\u043E\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u043C \u0442\u0440\u043E\u043F\u0438\u043D\u043A\u0438\u2026"),await Es();for(let d=0;d<ri.length;d++)this.navFor(ri[d].radius),t.progress(.6+.04*(d+1),"\u041F\u0440\u043E\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u043C \u0442\u0440\u043E\u043F\u0438\u043D\u043A\u0438\u2026"),await Es();this.pumpkins=new ja(this.scene,this.navFor(.42)),t.progress(.8,"\u0417\u043E\u0432\u0451\u043C \u0434\u0443\u0445\u043E\u0432\u2026"),await Es(),this.ghostPool.forEach(d=>{d.root.visible=!0,d.char.update(.016,{t:0,speed:0,mode:"hunt",appear:1})}),this.renderer.compile(this.scene,this.camera),this.ghostPool.forEach(d=>{d.root.visible=!1}),this.showGhost=Jt.build(),this.showGhost.root.visible=!1,this.scene.add(this.showGhost.root),this.round=new Ja({world:this.world,scene:this.scene,navFor:d=>this.navFor(d),ghosts:this.ghostPool,heroes:ri,makeChar:(d,c)=>ae(this,we,Ro).call(this,d,c),makeProp:d=>rs(d),sound:this.sound,cam:this.cam,playerSpawn:this.map.playerSpawn,botSpawns:this.map.botSpawns,ghostSpawns:this.map.ghostSpawns}),this.round.addFx=d=>this.fx.push(d);let r=ef([...ri,Jt]);ae(this,we,mf).call(this),t.progress(1,"\u0413\u043E\u0442\u043E\u0432\u043E!"),t.buildCards(ri,Jt,r,d=>this.selectHero(d)),t.on("btn-choose",()=>this.mp.inRoom?this.mp.showLobby():this.toMaps()),t.on("btn-friends",()=>this.mp.inRoom?this.mp.showLobby():this.mp.createRoom()),t.on("btn-maps-back",()=>this.toSelect()),t.on("btn-maps-go",()=>this.beginRound(this.hero.id==="noface"?"hunter":"play")),t.on("btn-watch",()=>this.beginRound("watch")),t.on("btn-again",()=>this.beginRound(this.mode)),t.on("btn-change",()=>this.mp.inRoom?this.mp.showLobby():this.toSelect()),t.on("btn-resume",()=>this.resume()),t.on("btn-quit",()=>{this.ui.show("paused",!1),this.toSelect()}),t.on("btn-pause",()=>this.pause()),t.on("btn-next",()=>this.state==="guest"?this.mp.nextGuestFocus():ae(this,we,fc).call(this)),t.on("btn-tuner",()=>this.tuner.toggle()),t.on("btn-tuner2",()=>this.tuner.toggle()),t.on("btn-mute",()=>{this.sound.setMuted(!this.sound.muted),t.setMute(this.sound.muted)}),t.onOptions({ghosts:d=>{this.ghostCount=d},bots:d=>{this.withBots=d},skin:d=>{this.skin=d,this.selectHero("moti")}},{ghosts:this.ghostCount,bots:this.withBots}),this.tuner=new Eo(ri,()=>{var d;return((d=this.hero)==null?void 0:d.id)||"masha"}),t.minimapInit(this.world,this.world.half),this.mp=new Ao(this),t.wallet(ia.get()),addEventListener("keydown",d=>{var v;if(this.tuner.open)return;if(this.state==="play"&&(d.code==="KeyP"||d.code==="Escape"&&!document.pointerLockElement))return this.pause();if(this.state==="paused"&&(d.code==="KeyP"||d.code==="Escape"))return this.resume();if(this.state==="play"&&this.mode==="watch"&&(d.code==="Tab"||d.code==="KeyN"))return d.preventDefault(),ae(this,we,fc).call(this);if(this.state==="guest"&&!d.repeat)return this.mp.guestKey(d.code.replace("Digit","").replace("Key",""));if(this.state!=="play"||d.repeat)return;let c=d.code.replace("Digit","").replace("Key","");if(this.round.playerGhost)c==="1"&&ae(this,we,Co).call(this,"mask-hero"),c==="2"&&ae(this,we,Co).call(this,"mask-prop");else if((v=this.round.player)!=null&&v.alive){let _=this.round.player.abilities.list.find(g=>g.key===c);_&&this.round.player.abilities.use(_.id)}}),t.onAbility(d=>ae(this,we,Co).call(this,d)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="play"&&this.pause()}),addEventListener("resize",()=>ae(this,we,Ts).call(this)),addEventListener("orientationchange",()=>{ae(this,we,Ts).call(this),setTimeout(()=>ae(this,we,Ts).call(this),180),setTimeout(()=>ae(this,we,Ts).call(this),600)}),(h=(o=(l=window.screen)==null?void 0:l.orientation)==null?void 0:o.addEventListener)==null||h.call(o,"change",()=>ae(this,we,Ts).call(this)),(u=window.visualViewport)==null||u.addEventListener("resize",()=>ae(this,we,Ts).call(this)),addEventListener("pageshow",()=>ae(this,we,Ts).call(this)),ae(this,we,Ts).call(this);let a=()=>this.sound.unlock();addEventListener("pointerdown",a),addEventListener("keydown",a),this.hero=ri[0],this.toSelect(),t.hideLoading();let n=new URLSearchParams(location.search).get("room");n&&this.mp.join(n),this.last=performance.now(),this.renderer.setAnimationLoop(()=>ae(this,we,yf).call(this)),window.__game=this}navFor(t){let i=Math.round(t*10);return this.navs.has(i)||this.navs.set(i,new sa(this.world,t+.1)),this.navs.get(i)}addFx(t){this.fx.push(t)}async activateMap(t){if(t===this.activeMapId)return;if(t!=="forest"&&t!=="village")throw new Error(`\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430: ${t}`);let i=this.state;this.state="loading",this.ui.show("loading",!0);try{this.ui.progress(.12,t==="forest"?"\u041F\u0440\u043E\u0431\u0443\u0436\u0434\u0430\u0435\u043C \u041B\u0435\u0441 \u0434\u0443\u0445\u043E\u0432\u2026":"\u0421\u0442\u0440\u043E\u0438\u043C \u0434\u0435\u0440\u0435\u0432\u043D\u044E \u0434\u0443\u0445\u043E\u0432\u2026"),await Es(),t==="forest"&&(this.ui.progress(.24,"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u043B\u0435\u0441\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B\u2026"),await vp());let s=new Fa,r=t==="forest"?yp(s,{isMobile:bs}):Xh(s,{isMobile:bs});this.ui.progress(.43,"\u041F\u0440\u043E\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u043C \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u044B\u2026"),await Es(),ae(this,we,en).call(this);let a=this.scene;a.remove(this.showGhost.root);for(let l of this.ghostPool)a.remove(l.root);this.scene=s,this.map=r,this.world=r.world,this.navs.clear(),this.fireflies=Zh(this.scene,bs?50:Oe.graphics.fireflies,28),this.soot=$h(this.scene,this.world,bs?10:16);let n=this.navFor(Jt.radius);this.ghostPool=Array.from({length:pf},()=>new qa(Jt,this.world,this.scene,n,{heroes:ri})),this.cam.blockers=r.cameraBlockers,this.pumpkins=new ja(this.scene,this.navFor(.42)),this.showLight=new _s(16769200,14,9,1.6),this.scene.add(this.showLight,this.showGhost.root),this.round=new Ja({world:this.world,scene:this.scene,navFor:l=>this.navFor(l),ghosts:this.ghostPool,heroes:ri,makeChar:(l,o)=>ae(this,we,Ro).call(this,l,o),makeProp:l=>rs(l),sound:this.sound,cam:this.cam,playerSpawn:r.playerSpawn,botSpawns:r.botSpawns,ghostSpawns:r.ghostSpawns}),this.round.addFx=l=>this.fx.push(l),this.ui.progress(.68,"\u041E\u0436\u0438\u0432\u043B\u044F\u0435\u043C \u0443\u043A\u0440\u044B\u0442\u0438\u044F\u2026"),await Es();for(let l=0;l<ri.length;l++)this.navFor(ri[l].radius),this.ui.progress(.68+.06*(l+1),"\u041F\u0440\u043E\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u043C \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u044B\u2026"),await Es();this.ui.minimapInit(this.world,this.world.half),this.activeMapId=t,this.selectHero(this.hero.id),this.renderer.compile(this.scene,this.camera),a.traverse(l=>{var o;return(o=l.geometry)==null?void 0:o.dispose()})}finally{this.state=i,this.ui.hideLoading()}}selectHero(t){var i,s;this.hero=t===Jt.id?Jt:ri.find(r=>r.id===t),ae(this,we,en).call(this);for(let r of this.ghostPool)r.reveal(),r.reset(this.map.ghostSpawn);this.showGhost.root.visible=t===Jt.id,this.showcase=t===Jt.id?null:this.round.makeAgent(this.hero,!0,this.map.playerSpawn,ae(this,we,dc).call(this,this.hero)),this.ui.showHero(this.hero,this.skin),t==="brothers"&&((s=(i=this.sound).brothersCue)==null||s.call(i,"select")),this.hero.custom&&this.ui.buildCreator(this.look,Vh,(r,a)=>ae(this,we,gf).call(this,r,a)),this.cam.configure(this.hero.cam)}toSelect(){this.state="select",this.input.enabled=!1,this.input.lookOnly=!1,this.input.releasePointer(),this.selectHero(this.hero.id),this.sound.setTension(0),this.ui.mode("select",oa),this.ui.wallet(ia.get()),this.showLight.intensity=14}toMaps(){this.state="maps",this.ui.mode("maps",oa)}async beginRound(t){if(!this.roundStarting){this.roundStarting=!0;try{this.mode=t,this.sound.unlock(),await this.activateMap(this.mapId),ae(this,we,en).call(this),this.showGhost.root.visible=!1,this.showcase=null,this.input.reset();let i=this.hero.id===Jt.id?ri[0]:this.hero;this.round.start({mode:t,hero:i,skin:ae(this,we,dc).call(this,i),mSkin:this.skin,ghosts:this.ghostCount,withBots:this.withBots,remotes:this.mp.remotes()}),this.mp.hostStarted(),this.pumpkins.spawn(Oe.round.pumpkins),this.focus=0,this.cam.yaw=t==="hunter"?Math.PI:0,this.cam.pitch=.3;let s=ae(this,we,Xs).call(this);ae(this,we,tn).call(this,s),this.cam.snap(ae(this,we,la).call(this,s)),this.state="play",this.input.enabled=!0,this.input.lookOnly=t==="watch",this.ui.mode("play",oa,t),this.ui.phase("hide"),ae(this,we,pc).call(this),ae(this,we,Po).call(this),this.ui.pumpkins(0),this.showLight.intensity=0}catch(i){console.error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u0443",i),this.ui.hideLoading(),this.ui.toast("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u0443. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0435\u0451 \u0435\u0449\u0451 \u0440\u0430\u0437.")}finally{this.roundStarting=!1}}}firstPerson(t,i=this.camera){ae(this,we,Io).call(this,t,i)}pause(){this.state==="play"&&(this.state="paused",this.input.enabled=!1,this.input.releasePointer(),this.ui.show("paused",!0))}resume(){this.state==="paused"&&(this.state="play",this.input.enabled=!0,this.last=performance.now(),this.ui.show("paused",!1))}};we=new WeakSet,mf=function(){let t=(i,s)=>(this.camera.position.set(...i),this.camera.lookAt(...s),this.map.updateLights(new U(s[0],0,s[2])),this.renderer.render(this.scene,this.camera),this.renderer.domElement.toDataURL("image/jpeg",.72));this.maps=[{id:"forest",name:"\u041B\u0435\u0441 \u0434\u0443\u0445\u043E\u0432",icon:"\u{1F332}",ready:!0,pic:"/forest-preview.svg"},{id:"village",name:"\u0414\u0435\u0440\u0435\u0432\u043D\u044F \u0434\u0443\u0445\u043E\u0432",icon:"\u{1F3E0}",ready:!0,pic:t([0,5,30],[0,1.5,4])},{id:"temple",name:"\u0417\u0430\u0431\u0440\u043E\u0448\u0435\u043D\u043D\u044B\u0439 \u0445\u0440\u0430\u043C",icon:"\u26E9\uFE0F",ready:!1,hard:!0,pic:t([0,3.5,-8],[0,2.4,-24])}],this.ui.buildMaps(this.maps,i=>{let s=this.maps.find(r=>r.id===i);if(!s.ready){this.ui.toast(`\xAB${s.name}\xBB \u0441\u043A\u043E\u0440\u043E \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F!`);return}this.mapId=i,this.ui.pickMap(i)}),this.ui.pickMap(this.mapId)},Ro=function(t,i){let s=t.id+":"+(t.skins||t.custom?i:""),r=this.pool.get(s)||[];this.pool.set(s,r);let a=r.find(n=>!n.inUse);return a||(a=t.build(i),r.push(a)),a.inUse=!0,a.root.visible=!0,a.root.scale.set(1,1,1),this.scene.add(a.root),this.acquired.push(a),a},en=function(){var t;for(let i of this.acquired)i.inUse=!1,this.scene.remove(i.root);this.acquired=[];for(let i of this.agents)(t=i.prop)!=null&&t.obj&&this.scene.remove(i.prop.obj);this.round.agents=[],this.round.player=null,this.round.playerGhost=null,this.round.domes=[];for(let i of this.fx)for(;i.update(99)!==!1;);this.fx=[],this.pumpkins.clear()},dc=function(t){return t.custom?JSON.stringify(this.look):this.skin},gf=function(t,i){this.look={...this.look,[t]:i},t==="gender"&&(this.look.hairStyle=Vh.hairStyle[i][0][0]),lp(this.look);for(let s of[...this.pool.keys()])s.startsWith("kid:")&&this.pool.delete(s);this.sound.chime([660,880]),this.selectHero("kid")},pc=function(){let t=this.round;t.playerGhost?this.ui.abilityBar(ff):t.player?this.ui.abilityBar(t.player.abilities.list):this.ui.abilityBar([]),document.getElementById("abil-bar").classList.toggle("hidden",this.mode==="watch")},Co=function(t){var r;if(this.state==="guest")return this.mp.guestAbility(t);let i=this.round,s=i.playerGhost;if(t==="dash"){this.input.dashQueued=!0;return}if(s){t==="fly"?this.input.jumpQueued=!0:(t==="mask-hero"||t==="mask-prop")&&(s.disguised?s.reveal():s.useDisguise(i.agents,t==="mask-prop"?"prop":"hero")||this.ui.toast(s.active?"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u0435\u0449\u0451 \u043A\u043E\u043F\u0438\u0442\u0441\u044F\u2026":"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E\u0436\u0434\u0438\u0441\u044C \u0441\u0432\u043E\u0435\u0433\u043E \u0432\u044B\u0445\u043E\u0434\u0430"));return}(r=i.player)!=null&&r.alive&&i.player.abilities.use(t)},Po=function(){let t=this.round,i=t.agents.filter(s=>s.alive).length;this.ui.alive(i,t.agents.length,t.phase==="hide"?"\u0421\u043F\u0440\u044F\u0442\u0430\u043B\u0438\u0441\u044C":"\u0423\u0431\u0435\u0433\u0430\u044E\u0442")},Xs=function(){var r;let t=this.round;if((r=t.player)!=null&&r.alive)return t.player;if(t.playerGhost)return t.playerGhost;let i=t.agents.filter(a=>a.alive),s=i.length?i:t.activeGhosts.filter(a=>a.state!=="hidden");return s[this.focus%Math.max(1,s.length)]||t.agents[0]||t.activeGhosts[0]},tn=function(t){t!=null&&t.hero?this.cam.configure(t.hero.cam):this.cam.configure(Jt.cam)},fc=function(){var i;(this.mode==="watch"||!((i=this.round.player)!=null&&i.alive)&&!this.round.playerGhost)&&(this.focus++,ae(this,we,tn).call(this,ae(this,we,Xs).call(this)))},la=function(t){return t?t.ctrl.pos:this.map.playerSpawn},Io=function(t,i){var l,o,h,u;if(!(t!=null&&t.ctrl))return;let s=t.ctrl.pos,a=((u=(h=(l=t.hero)==null?void 0:l.height)!=null?h:(o=t.def)==null?void 0:o.height)!=null?u:1.7)*.84,n=t.ctrl.yaw;i.position.set(s.x,s.y+a,s.z),i.lookAt(s.x+Math.sin(n),s.y+a-.03,s.z+Math.cos(n))},mc=function(t){var i,s,r,a;return((i=t==null?void 0:t.prop)==null?void 0:i.obj)||(t==null?void 0:t.propObj)||(t==null?void 0:t.disguiseRoot)||((r=(s=t==null?void 0:t.disguise)==null?void 0:s.char)==null?void 0:r.root)||(t==null?void 0:t.root)||((a=t==null?void 0:t.char)==null?void 0:a.root)||null},vf=function(){let t=document.getElementById("ghost-view"),i=this.ghostViewTarget;if(!i||t.classList.contains("hidden"))return;let s=t.getBoundingClientRect();if(!s.width||!s.height)return;this.insetCamera.aspect=s.width/s.height,this.insetCamera.updateProjectionMatrix(),ae(this,we,Io).call(this,i,this.insetCamera);let r=this.renderer.domElement.clientWidth||innerWidth,a=this.renderer.domElement.clientHeight||innerHeight,n=s.left,l=a-s.bottom;this.renderer.setScissorTest(!0),this.renderer.setViewport(n,l,s.width,s.height),this.renderer.setScissor(n,l,s.width,s.height);let o=ae(this,we,mc).call(this,i),h=o==null?void 0:o.visible;o&&(o.visible=!1),this.renderer.render(this.scene,this.insetCamera),o&&(o.visible=h),this.renderer.setScissorTest(!1),this.renderer.setViewport(0,0,r,a)},gc=function(t){this.state="result",this.input.enabled=!1,this.input.releasePointer(),this.sound.setTension(0),(t.mode==="watch"?t.alive.length>0:t.mode==="hunter"||t.playerWasGhost?t.alive.length===0:!t.playerCaughtInChase)?this.sound.win():this.sound.lose(),t.mode!=="watch"&&t.earn?this.ui.wallet(ia.add(t.earn)):t.earn=0,this.ui.result(t),this.ui.mode("result",oa),this.mp.hostEnd(t)},yf=function(){var l,o;let t=performance.now(),i=Math.min(.05,(t-this.last)/1e3);this.last=t,this.t+=i;let s=this.t;if(this.state==="play")ae(this,we,_f).call(this,i,s);else if(this.state==="guest")this.mp.guestTick(i,s);else if(this.state==="select"||this.state==="maps")ae(this,we,xf).call(this,i,s);else if(this.state==="result"){for(let h of this.agents)h.alive&&h.char&&h.char.update(i,{...h.ctrl.animState(s),speed:0,grounded:!0,landed:!1,action:h.abilities.pose()});for(let h of this.ghosts)h.state!=="hidden"&&!h.disguised&&h.char.update(i,{t:s,speed:0,mode:"hunt",appear:1})}this.fx=this.fx.filter(h=>h.update(i)!==!1);let r=this.state==="play"?ae(this,we,la).call(this,ae(this,we,Xs).call(this)):this.state==="guest"?this.mp.focusPos||this.map.playerSpawn:this.map.playerSpawn;this.map.updateLights(r),(o=(l=this.map).updateVisuals)==null||o.call(l,s),this.fireflies(s),this.soot(i,s,r);let a=ae(this,we,mc).call(this,this.mainFirstPersonTarget),n=a==null?void 0:a.visible;a&&(a.visible=!1),this.renderer.render(this.scene,this.camera),a&&(a.visible=n),ae(this,we,vf).call(this)},xf=function(t,i){let s=this.hero.id===Jt.id,r=this.map.playerSpawn;if(s){let d=this.showGhost.root;d.position.copy(r),d.rotation.y=-.35+Math.sin(i*.4)*.3,this.showGhost.update(t,{t:i,speed:0,mode:Math.sin(i*.5)>.3?"hunt":"search",appear:1})}else if(this.showcase){let d=this.showcase;if(d.abilities.update(t),!d.action&&Math.random()<t*.25){let c=d.abilities.list.filter(p=>["wave","cast","swing","summon"].includes(p.anim));if(c.length){let p=c[Math.random()*c.length|0];d.action={name:p.anim,t:0,dur:p.dur,lock:0,fired:!0}}}d.char.root.position.copy(r),d.char.root.rotation.y=-.35+Math.sin(i*.4)*.3,d.char.update(t,{t:i,speed:0,grounded:!0,landed:!1,action:d.abilities.pose()})}let a=this.hero.height,n=innerWidth<760,l=a*(n?2.9:2)+1.4,o=.12+Math.sin(i*.15)*.06,h=(n?.55:1.25)*(a/1.7)+(n?0:.3),u=new U(r.x+h,r.y+a*.6,r.z);this.camera.position.set(u.x+Math.sin(o)*l,u.y+a*.18,u.z+Math.cos(o)*l),this.camera.lookAt(u),this.showLight.position.set(r.x+.8,r.y+a*.9,r.z+2.4)},_f=function(t,i){var S,A,w,m,M;let s=this.round,r=Oe,a=this.input.read(),n=ae(this,we,Xs).call(this),l=this.mode!=="watch"&&!((S=s.player)!=null&&S.alive)&&!s.playerGhost;if(l)ae(this,we,Io).call(this,n,this.camera),document.getElementById("touch").classList.add("hidden");else if(this.mode==="watch"||!((A=s.player)!=null&&A.alive||s.playerGhost)){let D=n.ctrl.yaw+Math.PI;Math.abs(a.lookX)+Math.abs(a.lookY)<1e-5&&(this.cam.yaw+=Math.atan2(Math.sin(D-this.cam.yaw),Math.cos(D-this.cam.yaw))*Math.min(1,t*1.2)),this.cam.update(t,ae(this,we,la).call(this,n),a)}else this.cam.update(t,ae(this,we,la).call(this,n),a);s.step(t,i,a,this.cam.yaw);for(let D of s.events)ae(this,we,Sf).call(this,D);if(s.events.length=0,this.mp.hostTick(t),this.state!=="play")return;n=ae(this,we,Xs).call(this),this.mainFirstPersonTarget=l?n:null;let o=s.player,h=document.querySelector("#touch .btn-crouch");h&&(h.title=o!=null&&o.ctrl.swimming?o.ctrl.diving?"\u0412\u0441\u043F\u043B\u044B\u0442\u044C (C)":"\u041D\u044B\u0440\u043D\u0443\u0442\u044C \u0438 \u0441\u043A\u0440\u044B\u0442\u044C\u0441\u044F (C)":"\u041F\u0440\u0438\u0441\u0435\u0441\u0442\u044C (C)");let u=o!=null&&o.alive&&s.phase==="hide"&&(o.hidden||o.prop||o.ctrl.crouching)?s.activeGhosts.filter(D=>D.state!=="hidden").sort((D,C)=>D.pos.distanceTo(o.ctrl.pos)-C.pos.distanceTo(o.ctrl.pos))[0]:null;this.ghostViewTarget=u||null,document.getElementById("ghost-view").classList.toggle("hidden",!this.ghostViewTarget);let d=this.mode==="watch"||l;document.getElementById("watch-bar").classList.toggle("hidden",!d),document.getElementById("abil-bar").classList.toggle("hidden",d),l?document.getElementById("btn-next").textContent="\u0414\u0440\u0443\u0433\u043E\u0439 \u0433\u0435\u0440\u043E\u0439 \u203A":this.mode==="watch"&&(document.getElementById("btn-next").textContent="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u203A"),l||document.getElementById("touch").classList.toggle("hidden",this.mode==="watch");for(let D of s.agents){if(!D.alive||!D.char)continue;let C=D.char.root;C.visible=!D.prop,C.position.copy(D.ctrl.pos),C.rotation.y=D.ctrl.yaw,C.scale.y+=((D.ctrl.crouching?.62:1)-C.scale.y)*Math.min(1,t*14),D.char.update(t,{...D.ctrl.animState(i),action:D.abilities.pose()})}let c=(w=s.player)!=null&&w.alive?s.player:s.playerGhost,p=[c,...s.agents.filter(D=>D.remote&&D.alive),...s.activeGhosts.filter(D=>D.remote&&D.active)].filter(Boolean);for(let D of this.pumpkins.update(t,i,p))D===c?(s.stats.pumpkins++,this.ui.pumpkins(s.stats.pumpkins),this.sound.chime([784,1046,1318])):this.mp.hostPumpkin(D.remote);if(c){let D=c.ctrl;D.jumped&&this.sound.jump(),D.dashed&&this.sound.chime([880,1320]),D.landed&&D.landSpeed<-8&&(this.sound.land(-D.landSpeed),D.stagger>0&&(this.cam.shake=Math.max(this.cam.shake,.5))),D.grounded&&D.speed>1&&!D.crouching&&(this.stepDist=(this.stepDist||0)+D.speed*t,this.stepDist>(D.running?2.2:1.6)&&(this.stepDist=0,this.sound.step()))}let v=(m=s.player)!=null&&m.alive?s.player:this.mode==="watch"&&n.hero&&n.alive!==void 0?n:null,_=v?ae(this,we,Ef).call(this,v.ctrl.pos):null,g=_?_.d:99,f=!!(_&&_.g.sees&&_.g.target===v&&!_.g.disguised),x=Math.ceil(r.round.headStart-s.t);if(s.phase==="hide"&&s.spawned===0)s.playerGhost?this.ui.status(`\u0417\u0430\u043A\u0440\u043E\u0439 \u0433\u043B\u0430\u0437\u0430 \u0438 \u0441\u0447\u0438\u0442\u0430\u0439: ${x}\u2026 \u0413\u0435\u0440\u043E\u0438 \u043F\u0440\u044F\u0447\u0443\u0442\u0441\u044F!`,"calm"):this.ui.status(`\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0432\u044B\u0439\u0434\u0443\u0442 \u0447\u0435\u0440\u0435\u0437 ${x} \u2014 \u043F\u0440\u044F\u0447\u044C\u0441\u044F!`,"calm");else if(s.playerGhost){let D=s.playerGhost,C=s.agents.filter(B=>B.alive).length;this.ui.status(D.disguised?`\u0422\u044B \u0437\u0430\u043C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u0430\u043D${D.disguise.prop?` \u043F\u043E\u0434 ${D.disguise.prop.name}`:` \u043F\u043E\u0434 \xAB${D.disguise.hero.name}\xBB`} \u2014 \u043F\u043E\u0434\u043A\u0440\u0430\u0434\u0438\u0441\u044C!`:s.phase==="hide"?`\u041D\u0430\u0439\u0434\u0438 \u0441\u043F\u0440\u044F\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044F! \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C: ${C}`:`\u0414\u043E\u0433\u043E\u043D\u0438 \u0432\u0441\u0435\u0445! \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C: ${C}`,"")}else this.mode==="watch"?this.ui.status(n.hero&&n.alive!==void 0?`\u0421\u043C\u043E\u0442\u0440\u0438\u043C: ${n.name}${n.hidden?" \xB7 \u0432 \u0443\u043A\u0440\u044B\u0442\u0438\u0438":""}${n.prop?` \xB7 \u043F\u0440\u0438\u0442\u0432\u043E\u0440\u0438\u043B\u0441\u044F: ${n.prop.kind.name}`:""}`:"\u0421\u043C\u043E\u0442\u0440\u0438\u043C: \u0411\u0435\u0437\u043B\u0438\u043A",f?"danger":""):(M=s.player)!=null&&M.alive?f?this.ui.status("\u041E\u043D \u0442\u0435\u0431\u044F \u0432\u0438\u0434\u0438\u0442! \u0411\u0435\u0433\u0438!","danger"):s.player.protected?this.ui.status("\u0422\u044B \u043F\u043E\u0434 \u043A\u0443\u043F\u043E\u043B\u043E\u043C \u2014 \u0437\u0434\u0435\u0441\u044C \u043D\u0435 \u043F\u043E\u0439\u043C\u0430\u044E\u0442","calm"):s.player.prop?this.ui.status(`\u0422\u044B \u2014 ${s.player.prop.kind.name}. \u041D\u0435 \u0448\u0435\u0432\u0435\u043B\u0438\u0441\u044C! (Q \u2014 \u0441\u043D\u043E\u0432\u0430 \u0441\u0442\u0430\u0442\u044C \u0441\u043E\u0431\u043E\u0439)`,"calm"):_&&_.g.state==="hunt"&&_.g.target===s.player&&!_.g.disguised?this.ui.status("\u0411\u0435\u0437\u043B\u0438\u043A \u0438\u0434\u0451\u0442 \u043F\u043E \u0441\u043B\u0435\u0434\u0443\u2026",""):this.ui.status(s.player.hidden?"\u0422\u0438\u0445\u043E\u2026 \u043E\u043D \u0442\u0435\u0431\u044F \u0438\u0449\u0435\u0442":s.phase==="chase"?"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438! \u041D\u0435 \u043F\u043E\u043F\u0430\u0434\u0438\u0441\u044C!":"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0438\u0449\u0443\u0442. \u0421\u043F\u0440\u044F\u0447\u044C\u0441\u044F \u0438\u043B\u0438 \u0437\u0430\u043C\u0430\u0441\u043A\u0438\u0440\u0443\u0439\u0441\u044F!","calm"):this.ui.status("\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438! \u0421\u043C\u043E\u0442\u0440\u0438, \u043A\u0430\u043A \u043F\u0440\u044F\u0447\u0443\u0442\u0441\u044F \u0434\u0440\u0443\u0433\u0438\u0435\u2026","");let b=s.spawned&&v?It.clamp(1-g/16,0,1):0;this.sound.setTension(this.mode==="watch"?b*.5:b),this.ui.vignette(b*(f?1:.6));let y=c?c.ctrl:n.ctrl;this.ui.hud({left:s.left,stamina:y.stamina,tired:y.exhausted,hidden:c==null?void 0:c.hidden}),this.ui.mmLabel(s.phase==="hide"&&s.spawned===0&&!s.playerGhost?"\u041D\u0430\u0439\u0434\u0438 \u043C\u0435\u0441\u0442\u043E<br>\u0438 \u0441\u043F\u0440\u044F\u0447\u044C\u0441\u044F!":""),ae(this,we,Mf).call(this,n),ae(this,we,bf).call(this)},Sf=function(t){var s;let i=this.round;if(this.mp.hostEvent(t),t.type==="ghostSpawn")this.sound.ghostAppear(),this.cam.shake=Math.max(this.cam.shake,.6),t.ghost.isPlayer?this.ui.toast("\u0422\u044B \u0432\u044B\u0448\u0435\u043B \u043D\u0430 \u043E\u0445\u043E\u0442\u0443! \u0418\u0449\u0438!"):t.i===0&&this.ui.toast(i.phase==="hide"?"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0432\u044B\u0448\u043B\u0438 \u0438\u0441\u043A\u0430\u0442\u044C!":"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438 \u043D\u0430\u0447\u0430\u043B\u0438\u0441\u044C!");else if(t.type==="caught"){let r=t.agent;if(this.addFx(Ya(this.scene,r.ctrl.pos.x,r.ctrl.pos.z,2.5,10115808)),ae(this,we,Po).call(this),r.isPlayer){if(this.cam.shake=1,t.phase==="hide"){let a=i.caughtOrder.filter(n=>n.phase==="hide").length===1;this.ui.toast(a?"\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438 \u043F\u0435\u0440\u0432\u044B\u043C \u2014 \u0432 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0430\u0445 \u0422\u042B \u0431\u0443\u0434\u0435\u0448\u044C \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u043C!":"\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438! \u041F\u043E\u0434\u043E\u0436\u0434\u0438 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043E\u043A."),this.focus=0,ae(this,we,tn).call(this,ae(this,we,Xs).call(this))}}else this.ui.toast(t.byPlayer?`\u041F\u043E\u043F\u0430\u043B\u0441\u044F: ${r.name}! \u{1F383}+${t.phase==="hide"?Oe.round.reward.found:Oe.round.reward.catch}`:`${t.phase==="hide"?"\u041D\u0430\u0448\u043B\u0438":"\u0414\u043E\u0433\u043D\u0430\u043B\u0438"}: ${r.name}`);r.isPlayer&&t.phase==="chase"&&(this.round.phase="over",ae(this,we,gc).call(this,i.result()))}else if(t.type==="resisted"){let r=t.agent;this.addFx(Ya(this.scene,r.ctrl.pos.x,r.ctrl.pos.z,3,7798736)),this.ui.toast(r.isPlayer?"\u0422\u0440\u0438 \u0411\u0440\u0430\u0442\u0430 \u0432\u044B\u0440\u0432\u0430\u043B\u0438\u0441\u044C! \u0423\u043F\u0440\u044F\u043C\u0441\u0442\u0432\u043E \u043F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E \u0434\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0444\u0430\u0437\u044B.":`${r.name} \u0432\u044B\u0440\u0432\u0430\u043B\u0438\u0441\u044C \u0438\u0437 \u043F\u043E\u0438\u043C\u043A\u0438!`)}else if(t.type==="poof")this.addFx(qh(this.scene,t.x,t.y,t.z,t.ghost?13215999:16773590)),(s=t.agent)!=null&&s.isPlayer&&t.kind&&this.ui.toast(`\u0422\u044B \u043F\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u043B\u0441\u044F: ${t.kind}!`);else if(t.type==="phase"){this.ui.phase("chase"),this.sound.ghostAppear(),this.cam.shake=.8,t.newGhostIsPlayer?this.ui.toast("\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438 \u043F\u0435\u0440\u0432\u044B\u043C \u2014 \u0442\u0435\u043F\u0435\u0440\u044C \u0422\u042B \u0411\u0435\u0437\u043B\u0438\u043A! \u0414\u043E\u0433\u043E\u043D\u044F\u0439 \u0432\u0441\u0435\u0445!"):i.mode==="hunter"?this.ui.toast("\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438! \u0421 \u0442\u043E\u0431\u043E\u0439 \u0435\u0449\u0451 3 \u0411\u0435\u0437\u043B\u0438\u043A\u0430 \u2014 \u043B\u043E\u0432\u0438 \u0432\u0441\u0435\u0445!"):this.ui.toast(`\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438! \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u043C \u0441\u0442\u0430\u043B(\u0430): ${t.newGhostName}. \u0411\u0435\u0433\u0438!`),ae(this,we,pc).call(this),ae(this,we,Po).call(this);let r=ae(this,we,Xs).call(this);ae(this,we,tn).call(this,r),this.cam.snap(ae(this,we,la).call(this,r))}else t.type==="end"&&ae(this,we,gc).call(this,t.result)},Mf=function(t){let i=this.round,s=t,r=[];for(let n of this.pumpkins.list)r.push({x:n.x,z:n.z,kind:"pumpkin"});let a=!!i.playerGhost;for(let n of i.agents)n.alive&&n!==s&&(!a||this.mode==="watch")&&r.push({x:n.ctrl.pos.x,z:n.ctrl.pos.z,kind:"ally"});for(let n of i.activeGhosts){if(n.state==="hidden"||n===s)continue;(a||this.mode==="watch"||!n.disguised&&this.world.lineOfSight(s.ctrl.pos.x,s.ctrl.pos.z,n.pos.x,n.pos.z,!0,s.ctrl.pos.y+1.4,n.eyeY))&&r.push({x:n.pos.x,z:n.pos.z,kind:"ghost"})}r.push({x:s.ctrl.pos.x,z:s.ctrl.pos.z,kind:"me"}),this.ui.minimap(s.ctrl.pos,this.cam.yaw,r)},bf=function(){let t=this.round,i=t.playerGhost;if(i){let s=i.ctrl,r=s.phys.dash;this.ui.cooldowns(a=>{if(a==="dash")return{k:s.dashCharges>0?s.dashCd/r.cooldown:1-s.chargeT/r.recharge,n:s.dashCharges};if(a==="mask-hero"||a==="mask-prop")return{k:i.disguised?0:i.disguiseCd/Oe.ghost.disguise.cd,n:i.disguised?Math.ceil(i.disguise.t):""};if(a==="fly")return{k:1-s.flyEnergy}})}else if(t.player){let s=t.player.ctrl,r=t.player.abilities;this.ui.cooldowns(a=>{if(a==="dash")return{k:s.dashCd/s.phys.dash.cooldown};let n=r.get(a);return{k:n?n.cdLeft/r.cooldown(n):0}})}},Ef=function(t){let i=null;for(let s of this.ghosts){if(s.state==="hidden")continue;let r=Math.hypot(s.pos.x-t.x,s.pos.z-t.z);(!i||r<i.d)&&(i={g:s,d:r})}return i},Ts=function(){var r,a,n;let t=Math.max(1,document.documentElement.clientWidth||innerWidth),i=Math.max(1,document.documentElement.clientHeight||innerHeight),s=t!==i?t>i:typeof window.orientation=="number"?Math.abs(window.orientation)===90:!!((n=(a=(r=window.screen)==null?void 0:r.orientation)==null?void 0:a.type)!=null&&n.startsWith("landscape"));document.documentElement.classList.toggle("landscape",s),requestAnimationFrame(()=>{let l=Math.max(1,document.documentElement.clientWidth||innerWidth),o=Math.max(1,document.documentElement.clientHeight||innerHeight);this.camera.aspect=l/o,this.camera.updateProjectionMatrix(),this.insetCamera.aspect=l/o,this.insetCamera.updateProjectionMatrix(),this.renderer.setSize(l,o,!1)})};var Es=()=>new Promise(e=>setTimeout(e,0));async function B_(){window.__bootStage="\u0433\u043E\u0442\u043E\u0432\u0438\u043C \u0438\u0433\u0440\u0443";try{typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.roundRect&&(CanvasRenderingContext2D.prototype.roundRect=function(t,i,s,r,a=0){return a=Math.min(Array.isArray(a)?a[0]||0:a,s/2,r/2),this.moveTo(t+a,i),this.arcTo(t+s,i,t+s,i+r,a),this.arcTo(t+s,i+r,t,i+r,a),this.arcTo(t,i+r,t,i,a),this.arcTo(t,i,t+s,i,a),this.closePath(),this}),await new Lo(document.getElementById("scene")).start(),window.__started=!0}catch(e){window.__bootFailed=!0,console.error(e);let t=document.querySelector(".load-text");t&&(t.textContent="\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0438\u0433\u0440\u0443: "+((e==null?void 0:e.message)||String(e)))}}window.__bootEntered=!0;B_();})();
/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/
