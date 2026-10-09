(()=>{var Dc=s=>{throw TypeError(s)};var lf=(s,t,e)=>t.has(s)||Dc("Cannot "+e);var de=(s,t,e)=>t.has(s)?Dc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e);var Y=(s,t,e)=>(lf(s,t,"access private method"),e);var cf=0,Uc=1,hf=2;var Ba=1,uf=2,qn=3,On=0,je=1,xn=2;var hi=0,ys=1,Ne=2,Nc=3,Oc=4,df=5,Li=100,ff=101,pf=102,Fc=103,zc=104,mf=200,gf=201,xf=202,yf=203,al=204,ol=205,_f=206,vf=207,Mf=208,bf=209,Sf=210,Ef=211,wf=212,Tf=213,Af=214,Rf=0,Cf=1,Pf=2,la=3,Lf=4,If=5,Df=6,Uf=7,du=0,Nf=1,Of=2,ui=0,Ff=1,zf=2,Bf=3,_r=4,kf=5,Hf=6;var fu=300,Ms=301,bs=302,ll=303,cl=304,ka=306,An=1e3,wn=1001,hl=1002,sn=1003,Bc=1004;var wo=1005;var gn=1006,Gf=1007;var sr=1008;var di=1009,Vf=1010,Wf=1011,tc=1012,pu=1013,li=1014,ci=1015,rr=1016,mu=1017,gu=1018,Ui=1020,Xf=1021,Tn=1023,qf=1024,Yf=1025,Ni=1026,Ss=1027,$f=1028,xu=1029,Zf=1030,yu=1031,_u=1033,To=33776,Ao=33777,Ro=33778,Co=33779,kc=35840,Hc=35841,Gc=35842,Vc=35843,vu=36196,Wc=37492,Xc=37496,qc=37808,Yc=37809,$c=37810,Zc=37811,Jc=37812,jc=37813,Kc=37814,Qc=37815,th=37816,eh=37817,nh=37818,ih=37819,sh=37820,rh=37821,Po=36492,ah=36494,oh=36495,Jf=36283,lh=36284,ch=36285,hh=36286;var ca=2300,ha=2301,Lo=2302,uh=2400,dh=2401,fh=2402;var Mu=3e3,Oi=3001,jf=3200,Kf=3201,bu=0,Qf=1,yn="",Me="srgb",Zn="srgb-linear",ec="display-p3",Ha="display-p3-linear",ua="linear",me="srgb",da="rec709",fa="p3";var Zi=7680;var ph=519,tp=512,ep=513,np=514,Su=515,ip=516,sp=517,rp=518,ap=519,ul=35044;var mh="300 es",dl=1035,$n=2e3,pa=2001,fi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gh=1234567,js=Math.PI/180,ar=180/Math.PI;function Nn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[s&255]+Ze[s>>8&255]+Ze[s>>16&255]+Ze[s>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function qe(s,t,e){return Math.max(t,Math.min(e,s))}function nc(s,t){return(s%t+t)%t}function op(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function lp(s,t,e){return s!==t?(e-s)/(t-s):0}function Ks(s,t,e){return(1-e)*s+e*t}function cp(s,t,e,n){return Ks(s,t,1-Math.exp(-e*n))}function hp(s,t=1){return t-Math.abs(nc(s,t*2)-t)}function up(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function dp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function fp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function pp(s,t){return s+Math.random()*(t-s)}function mp(s){return s*(.5-Math.random())}function gp(s){s!==void 0&&(gh=s);let t=gh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xp(s){return s*js}function yp(s){return s*ar}function fl(s){return(s&s-1)===0&&s!==0}function _p(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ma(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function vp(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Un(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function he(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var fe={DEG2RAD:js,RAD2DEG:ar,generateUUID:Nn,clamp:qe,euclideanModulo:nc,mapLinear:op,inverseLerp:lp,lerp:Ks,damp:cp,pingpong:hp,smoothstep:up,smootherstep:dp,randInt:fp,randFloat:pp,randFloatSpread:mp,seededRandom:gp,degToRad:xp,radToDeg:yp,isPowerOfTwo:fl,ceilPowerOfTwo:_p,floorPowerOfTwo:ma,setQuaternionFromProperEuler:vp,normalize:he,denormalize:Un},mt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ee=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],x=i[4],M=i[7],E=i[2],T=i[5],w=i[8];return r[0]=a*_+o*y+l*E,r[3]=a*m+o*x+l*T,r[6]=a*p+o*M+l*w,r[1]=c*_+h*y+u*E,r[4]=c*m+h*x+u*T,r[7]=c*p+h*M+u*w,r[2]=d*_+f*y+g*E,r[5]=d*m+f*x+g*T,r[8]=d*p+f*M+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Io.makeScale(t,e)),this}rotate(t){return this.premultiply(Io.makeRotation(-t)),this}translate(t,e){return this.premultiply(Io.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Io=new ee;function Eu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ga(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Mp(){let s=ga("canvas");return s.style.display="block",s}var xh={};function Qs(s){s in xh||(xh[s]=!0,console.warn(s))}var yh=new ee().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_h=new ee().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Lr={[Zn]:{transfer:ua,primaries:da,toReference:s=>s,fromReference:s=>s},[Me]:{transfer:me,primaries:da,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ha]:{transfer:ua,primaries:fa,toReference:s=>s.applyMatrix3(_h),fromReference:s=>s.applyMatrix3(yh)},[ec]:{transfer:me,primaries:fa,toReference:s=>s.convertSRGBToLinear().applyMatrix3(_h),fromReference:s=>s.applyMatrix3(yh).convertLinearToSRGB()}},bp=new Set([Zn,Ha]),ue={enabled:!0,_workingColorSpace:Zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!bp.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=Lr[t].toReference,i=Lr[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Lr[s].primaries},getTransfer:function(s){return s===yn?ua:Lr[s].transfer}};function _s(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Do(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ji,xa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=ga("canvas")),Ji.width=t.width,Ji.height=t.height;let n=Ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ga("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=_s(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_s(e[n]/255)*255):e[n]=_s(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Sp=0,ya=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Nn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Uo(i[a].image)):r.push(Uo(i[a]))}else r=Uo(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Uo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?xa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ep=0,_n=class s extends fi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=wn,i=wn,r=gn,a=sr,o=Tn,l=di,c=s.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Nn(),this.name="",this.source=new ya(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Oi?Me:yn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case An:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case hl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case An:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case hl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Me?Oi:Mu}set encoding(t){Qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Oi?Me:yn}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=fu;_n.DEFAULT_ANISOTROPY=1;var xe=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,M=(f+1)/2,E=(p+1)/2,T=(h+d)/4,w=(u+_)/4,C=(g+m)/4;return x>M&&x>E?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=w/n):M>E?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=T/i,r=C/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=w/r,i=C/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pl=class extends fi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(Qs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Oi?Me:yn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new _n(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ya(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=class extends pl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},_a=class extends _n{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ml=class extends _n{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let E=Math.sqrt(x),T=Math.atan2(E,p*y);m=Math.sin(m*T)/E,o=Math.sin(o*T)/E}let M=o*y;if(l=l*m+d*M,c=c*m+f*M,h=h*m+g*M,u=u*m+_*M,m===1-o){let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return No.copy(this).projectOnVector(t),this.sub(No)}reflect(t){return this.sub(No.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},No=new I,vh=new pi,Fi=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,bn):bn.fromBufferAttribute(r,a),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),Dr.subVectors(this.max,Vs),ji.subVectors(t.a,Vs),Ki.subVectors(t.b,Vs),Qi.subVectors(t.c,Vs),ii.subVectors(Ki,ji),si.subVectors(Qi,Ki),Ti.subVectors(ji,Qi);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-Ti.z,Ti.y,ii.z,0,-ii.x,si.z,0,-si.x,Ti.z,0,-Ti.x,-ii.y,ii.x,0,-si.y,si.x,0,-Ti.y,Ti.x,0];return!Oo(e,ji,Ki,Qi,Dr)||(e=[1,0,0,0,1,0,0,0,1],!Oo(e,ji,Ki,Qi,Dr))?!1:(Ur.crossVectors(ii,si),e=[Ur.x,Ur.y,Ur.z],Oo(e,ji,Ki,Qi,Dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Hn=[new I,new I,new I,new I,new I,new I,new I,new I],bn=new I,Ir=new Fi,ji=new I,Ki=new I,Qi=new I,ii=new I,si=new I,Ti=new I,Vs=new I,Dr=new I,Ur=new I,Ai=new I;function Oo(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ai.fromArray(s,r);let o=i.x*Math.abs(Ai.x)+i.y*Math.abs(Ai.y)+i.z*Math.abs(Ai.z),l=t.dot(Ai),c=e.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var wp=new Fi,Ws=new I,Fo=new I,Es=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):wp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);let e=Ws.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ws,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(Fo)),this.expandByPoint(Ws.copy(t.center).sub(Fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gn=new I,zo=new I,Nr=new I,ri=new I,Bo=new I,Or=new I,ko=new I,or=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){zo.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(zo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Nr),o=ri.dot(this.direction),l=-ri.dot(Nr),c=ri.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(zo).addScaledVector(Nr,d),f}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);let n=Gn.dot(this.direction),i=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,i,r){Bo.subVectors(e,t),Or.subVectors(n,t),ko.crossVectors(Bo,Or);let a=this.direction.dot(ko),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,t);let l=o*this.direction.dot(Or.crossVectors(ri,Or));if(l<0)return null;let c=o*this.direction.dot(Bo.cross(ri));if(c<0||l+c>a)return null;let h=-o*ri.dot(ko);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},we=class s{constructor(t,e,n,i,r,a,o,l,c,h,u,d,f,g,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,f,g,_,m)}set(t,e,n,i,r,a,o,l,c,h,u,d,f,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ts.setFromMatrixColumn(t,0).length(),r=1/ts.setFromMatrixColumn(t,1).length(),a=1/ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tp,t,Ap)}lookAt(t,e,n){let i=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),ai.crossVectors(n,on),ai.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ai.crossVectors(n,on)),ai.normalize(),Fr.crossVectors(on,ai),i[0]=ai.x,i[4]=Fr.x,i[8]=on.x,i[1]=ai.y,i[5]=Fr.y,i[9]=on.y,i[2]=ai.z,i[6]=Fr.z,i[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],M=n[11],E=n[15],T=i[0],w=i[4],C=i[8],v=i[12],b=i[1],L=i[5],F=i[9],q=i[13],U=i[2],G=i[6],$=i[10],it=i[14],rt=i[3],tt=i[7],ht=i[11],ut=i[15];return r[0]=a*T+o*b+l*U+c*rt,r[4]=a*w+o*L+l*G+c*tt,r[8]=a*C+o*F+l*$+c*ht,r[12]=a*v+o*q+l*it+c*ut,r[1]=h*T+u*b+d*U+f*rt,r[5]=h*w+u*L+d*G+f*tt,r[9]=h*C+u*F+d*$+f*ht,r[13]=h*v+u*q+d*it+f*ut,r[2]=g*T+_*b+m*U+p*rt,r[6]=g*w+_*L+m*G+p*tt,r[10]=g*C+_*F+m*$+p*ht,r[14]=g*v+_*q+m*it+p*ut,r[3]=y*T+x*b+M*U+E*rt,r[7]=y*w+x*L+M*G+E*tt,r[11]=y*C+x*F+M*$+E*ht,r[15]=y*v+x*q+M*it+E*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+_*(+e*l*f-e*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,x=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,M=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,E=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,T=e*y+n*x+i*M+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return t[0]=y*w,t[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*w,t[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*w,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*w,t[4]=x*w,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*w,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*p-e*l*p)*w,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*f+e*l*f)*w,t[8]=M*w,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*w,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*w,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*w,t[12]=E*w,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*w,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*w,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,y=l*c,x=l*h,M=l*u,E=n.x,T=n.y,w=n.z;return i[0]=(1-(_+p))*E,i[1]=(f+M)*E,i[2]=(g-x)*E,i[3]=0,i[4]=(f-M)*T,i[5]=(1-(d+p))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(g+x)*w,i[9]=(m-y)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=ts.set(i[0],i[1],i[2]).length(),a=ts.set(i[4],i[5],i[6]).length(),o=ts.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Sn.copy(this);let c=1/r,h=1/a,u=1/o;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,e.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=$n){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,g;if(o===$n)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===pa)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=$n){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,f=(n+i)*h,g,_;if(o===$n)g=(a+r)*u,_=-2*u;else if(o===pa)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ts=new I,Sn=new we,Tp=new I(0,0,0),Ap=new I(1,1,1),ai=new I,Fr=new I,on=new I,Mh=new we,bh=new pi,va=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bh.setFromEuler(this),this.setFromQuaternion(bh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};va.DEFAULT_ORDER="XYZ";var lr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Rp=0,Sh=new I,es=new pi,Vn=new we,zr=new I,Xs=new I,Cp=new I,Pp=new pi,Eh=new I(1,0,0),wh=new I(0,1,0),Th=new I(0,0,1),Lp={type:"added"},Ip={type:"removed"},Ye=class s extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new I,e=new va,n=new pi,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new we},normalMatrix:{value:new ee}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(Eh,t)}rotateY(t){return this.rotateOnAxis(wh,t)}rotateZ(t){return this.rotateOnAxis(Th,t)}translateOnAxis(t,e){return Sh.copy(t).applyQuaternion(this.quaternion),this.position.add(Sh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Eh,t)}translateY(t){return this.translateOnAxis(wh,t)}translateZ(t){return this.translateOnAxis(Th,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zr.copy(t):zr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Xs,zr,this.up):Vn.lookAt(zr,Xs,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),es.setFromRotationMatrix(Vn),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Lp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ip)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,Cp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Pp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ye.DEFAULT_UP=new I(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new I,Wn=new I,Ho=new I,Xn=new I,ns=new I,is=new I,Ah=new I,Go=new I,Vo=new I,Wo=new I,Br=!1,Di=class s{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),En.subVectors(t,e),i.cross(En);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){En.subVectors(i,e),Wn.subVectors(n,e),Ho.subVectors(t,e);let a=En.dot(En),o=En.dot(Wn),l=En.dot(Ho),c=Wn.dot(Wn),h=Wn.dot(Ho),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getUV(t,e,n,i,r,a,o,l){return Br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Br=!0),this.getInterpolation(t,e,n,i,r,a,o,l)}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static isFrontFacing(t,e,n,i){return En.subVectors(n,e),Wn.subVectors(t,e),En.cross(Wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),En.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Br=!0),s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;ns.subVectors(i,n),is.subVectors(r,n),Go.subVectors(t,n);let l=ns.dot(Go),c=is.dot(Go);if(l<=0&&c<=0)return e.copy(n);Vo.subVectors(t,i);let h=ns.dot(Vo),u=is.dot(Vo);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ns,a);Wo.subVectors(t,r);let f=ns.dot(Wo),g=is.dot(Wo);if(g>=0&&f<=g)return e.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(is,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ah.subVectors(r,i),o=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(Ah,o);let p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(ns,a).addScaledVector(is,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},kr={h:0,s:0,l:0};function Xo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ue.workingColorSpace){if(t=nc(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Xo(a,r,t+1/3),this.g=Xo(a,r,t),this.b=Xo(a,r,t-1/3)}return ue.toWorkingColorSpace(this,i),this}setStyle(t,e=Me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){let n=wu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}copyLinearToSRGB(t){return this.r=Do(t.r),this.g=Do(t.g),this.b=Do(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return ue.fromWorkingColorSpace(Je.copy(this),t),Math.round(qe(Je.r*255,0,255))*65536+Math.round(qe(Je.g*255,0,255))*256+Math.round(qe(Je.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(Je.copy(this),e);let n=Je.r,i=Je.g,r=Je.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Me){ue.fromWorkingColorSpace(Je.copy(this),t);let e=Je.r,n=Je.g,i=Je.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(kr);let n=Ks(oi.h,kr.h,e),i=Ks(oi.s,kr.s,e),r=Ks(oi.l,kr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Je=new Yt;Yt.NAMES=wu;var Dp=0,jn=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=ys,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ol,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==al&&(n.blendSrc=this.blendSrc),this.blendDst!==ol&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==la&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ph&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},cn=class extends jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ie=new I,Hr=new mt,Ce=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ul,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Un(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Un(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Un(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ul&&(t.usage=this.usage),t}};var Ma=class extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ba=class extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Up=0,mn=new we,qo=new Ye,ss=new I,ln=new Fi,qs=new Fi,Xe=new I,ye=class s extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eu(t)?ba:Ma)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return qo.lookAt(t),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(ln.min,qs.min),ln.expandByPoint(Xe),Xe.addVectors(ln.max,qs.max),ln.expandByPoint(Xe)):(ln.expandByPoint(qs.min),ln.expandByPoint(qs.max))}ln.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xe.fromBufferAttribute(o,c),l&&(ss.fromBufferAttribute(t,c),Xe.add(ss)),i=Math.max(i,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<o;b++)c[b]=new I,h[b]=new I;let u=new I,d=new I,f=new I,g=new mt,_=new mt,m=new mt,p=new I,y=new I;function x(b,L,F){u.fromArray(i,b*3),d.fromArray(i,L*3),f.fromArray(i,F*3),g.fromArray(a,b*2),_.fromArray(a,L*2),m.fromArray(a,F*2),d.sub(u),f.sub(u),_.sub(g),m.sub(g);let q=1/(_.x*m.y-m.x*_.y);isFinite(q)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(q),y.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(q),c[b].add(p),c[L].add(p),c[F].add(p),h[b].add(y),h[L].add(y),h[F].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let b=0,L=M.length;b<L;++b){let F=M[b],q=F.start,U=F.count;for(let G=q,$=q+U;G<$;G+=3)x(n[G+0],n[G+1],n[G+2])}let E=new I,T=new I,w=new I,C=new I;function v(b){w.fromArray(r,b*3),C.copy(w);let L=c[b];E.copy(L),E.sub(w.multiplyScalar(w.dot(L))).normalize(),T.crossVectors(C,L);let q=T.dot(h[b])<0?-1:1;l[b*4]=E.x,l[b*4+1]=E.y,l[b*4+2]=E.z,l[b*4+3]=q}for(let b=0,L=M.length;b<L;++b){let F=M[b],q=F.start,U=F.count;for(let G=q,$=q+U;G<$;G+=3)v(n[G+0]),v(n[G+1]),v(n[G+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ce(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rh=new we,Ri=new or,Gr=new Es,Ch=new I,rs=new I,as=new I,os=new I,Yo=new I,Vr=new I,Wr=new mt,Xr=new mt,qr=new mt,Ph=new I,Lh=new I,Ih=new I,Yr=new I,$r=new I,oe=class extends Ye{constructor(t=new ye,e=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Yo.fromBufferAttribute(u,t),a?Vr.addScaledVector(Yo,h):Vr.addScaledVector(Yo.sub(e),h))}e.add(Vr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(r),Ri.copy(t.ray).recast(t.near),!(Gr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Gr,Ch)===null||Ri.origin.distanceToSquared(Ch)>(t.far-t.near)**2))&&(Rh.copy(r).invert(),Ri.copy(t.ray).applyMatrix4(Rh),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,E=x;M<E;M+=3){let T=o.getX(M),w=o.getX(M+1),C=o.getX(M+2);i=Zr(this,p,t,n,c,h,u,T,w,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let y=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);i=Zr(this,a,t,n,c,h,u,y,x,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,E=x;M<E;M+=3){let T=M,w=M+1,C=M+2;i=Zr(this,p,t,n,c,h,u,T,w,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let y=m,x=m+1,M=m+2;i=Zr(this,a,t,n,c,h,u,y,x,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Np(s,t,e,n,i,r,a,o){let l;if(t.side===je?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===On,o),l===null)return null;$r.copy(o),$r.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo($r);return c<e.near||c>e.far?null:{distance:c,point:$r.clone(),object:s}}function Zr(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,rs),s.getVertexPosition(l,as),s.getVertexPosition(c,os);let h=Np(s,t,e,n,rs,as,os,Yr);if(h){i&&(Wr.fromBufferAttribute(i,o),Xr.fromBufferAttribute(i,l),qr.fromBufferAttribute(i,c),h.uv=Di.getInterpolation(Yr,rs,as,os,Wr,Xr,qr,new mt)),r&&(Wr.fromBufferAttribute(r,o),Xr.fromBufferAttribute(r,l),qr.fromBufferAttribute(r,c),h.uv1=Di.getInterpolation(Yr,rs,as,os,Wr,Xr,qr,new mt),h.uv2=h.uv1),a&&(Ph.fromBufferAttribute(a,o),Lh.fromBufferAttribute(a,l),Ih.fromBufferAttribute(a,c),h.normal=Di.getInterpolation(Yr,rs,as,os,Ph,Lh,Ih,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};Di.getNormal(rs,as,os,u.normal),h.face=u}return h}var Kn=class s extends ye{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function g(_,m,p,y,x,M,E,T,w,C,v){let b=M/w,L=E/C,F=M/2,q=E/2,U=T/2,G=w+1,$=C+1,it=0,rt=0,tt=new I;for(let ht=0;ht<$;ht++){let ut=ht*L-q;for(let bt=0;bt<G;bt++){let K=bt*b-F;tt[_]=K*y,tt[m]=ut*x,tt[p]=U,c.push(tt.x,tt.y,tt.z),tt[_]=0,tt[m]=0,tt[p]=T>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(bt/w),u.push(1-ht/C),it+=1}}for(let ht=0;ht<C;ht++)for(let ut=0;ut<w;ut++){let bt=d+ut+G*ht,K=d+ut+G*(ht+1),ct=d+(ut+1)+G*(ht+1),Tt=d+(ut+1)+G*ht;l.push(bt,K,Tt),l.push(K,ct,Tt),rt+=6}o.addGroup(f,rt,v),f+=rt,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ws(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function nn(s){let t={};for(let e=0;e<s.length;e++){let n=ws(s[e]);for(let i in n)t[i]=n[i]}return t}function Op(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Tu(s){return s.getRenderTarget()===null?s.outputColorSpace:ue.workingColorSpace}var Fp={clone:ws,merge:nn},zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zp,this.fragmentShader=Bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=Op(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Sa=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=$n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ue=class extends Sa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(js*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ls=-90,cs=1,gl=class extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ue(ls,cs,t,e);i.layers=this.layers,this.add(i);let r=new Ue(ls,cs,t,e);r.layers=this.layers,this.add(r);let a=new Ue(ls,cs,t,e);a.layers=this.layers,this.add(a);let o=new Ue(ls,cs,t,e);o.layers=this.layers,this.add(o);let l=new Ue(ls,cs,t,e);l.layers=this.layers,this.add(l);let c=new Ue(ls,cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ea=class extends _n{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ms,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xl=class extends Jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Qs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Oi?Me:yn),this.texture=new Ea(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Kn(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:hi});r.uniforms.tEquirect.value=e;let a=new oe(i,r),o=e.minFilter;return e.minFilter===sr&&(e.minFilter=gn),new gl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},$o=new I,kp=new I,Hp=new ee,Yn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=$o.subVectors(n,e).cross(kp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta($o),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Hp.getNormalMatrix(t),i=this.coplanarPoint($o).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ci=new Es,Jr=new I,cr=class{constructor(t=new Yn,e=new Yn,n=new Yn,i=new Yn,r=new Yn,a=new Yn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],y=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-r,d-c,m-f,M-p).normalize(),n[1].setComponents(l+r,d+c,m+f,M+p).normalize(),n[2].setComponents(l+a,d+h,m+g,M+y).normalize(),n[3].setComponents(l-a,d-h,m-g,M-y).normalize(),n[4].setComponents(l-o,d-u,m-_,M-x).normalize(),e===$n)n[5].setComponents(l+o,d+u,m+_,M+x).normalize();else if(e===pa)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Jr.x=i.normal.x>0?t.max.x:t.min.x,Jr.y=i.normal.y>0?t.max.y:t.min.y,Jr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Au(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Gp(s,t){let e=t.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,d=c.usage,f=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),f.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];e?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var mi=class s extends ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let x=0;x<c;x++){let M=x*u-r;g.push(M,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let x=y+c*p,M=y+c*(p+1),E=y+1+c*(p+1),T=y+1+c*p;f.push(x,M,T),f.push(M,E,T)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wp=`#ifdef USE_ALPHAHASH
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
#endif`,Xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zp=`#ifdef USE_AOMAP
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
#endif`,Jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nm=`#ifdef USE_IRIDESCENCE
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
#endif`,im=`#ifdef USE_BUMPMAP
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
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dm=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pm=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_m="gl_FragColor = linearToOutputTexel( gl_FragColor );",vm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pm=`#ifdef USE_GRADIENTMAP
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
}`,Lm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nm=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,Om=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Gm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vm=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ym=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qm=`#if defined( USE_POINTS_UV )
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
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,s0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,r0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,a0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,o0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u0=`#ifdef USE_NORMALMAP
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
#endif`,d0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,A0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,R0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C0=`#ifdef USE_SKINNING
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
#endif`,P0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,I0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N0=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,O0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,F0=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,G0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V0=`uniform sampler2D t2D;
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`#include <common>
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
}`,Z0=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,J0=`#define DISTANCE
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
}`,j0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ng=`#include <common>
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
}`,ig=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,sg=`#define LAMBERT
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
}`,rg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ag=`#define MATCAP
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
}`,og=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,lg=`#define NORMAL
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
}`,cg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hg=`#define PHONG
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
}`,ug=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,dg=`#define STANDARD
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
}`,fg=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,pg=`#define TOON
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
}`,mg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,gg=`uniform float size;
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
}`,xg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,yg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,_g=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,vg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Mg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Kt={alphahash_fragment:Vp,alphahash_pars_fragment:Wp,alphamap_fragment:Xp,alphamap_pars_fragment:qp,alphatest_fragment:Yp,alphatest_pars_fragment:$p,aomap_fragment:Zp,aomap_pars_fragment:Jp,batching_pars_vertex:jp,batching_vertex:Kp,begin_vertex:Qp,beginnormal_vertex:tm,bsdfs:em,iridescence_fragment:nm,bumpmap_pars_fragment:im,clipping_planes_fragment:sm,clipping_planes_pars_fragment:rm,clipping_planes_pars_vertex:am,clipping_planes_vertex:om,color_fragment:lm,color_pars_fragment:cm,color_pars_vertex:hm,color_vertex:um,common:dm,cube_uv_reflection_fragment:fm,defaultnormal_vertex:pm,displacementmap_pars_vertex:mm,displacementmap_vertex:gm,emissivemap_fragment:xm,emissivemap_pars_fragment:ym,colorspace_fragment:_m,colorspace_pars_fragment:vm,envmap_fragment:Mm,envmap_common_pars_fragment:bm,envmap_pars_fragment:Sm,envmap_pars_vertex:Em,envmap_physical_pars_fragment:Om,envmap_vertex:wm,fog_vertex:Tm,fog_pars_vertex:Am,fog_fragment:Rm,fog_pars_fragment:Cm,gradientmap_pars_fragment:Pm,lightmap_fragment:Lm,lightmap_pars_fragment:Im,lights_lambert_fragment:Dm,lights_lambert_pars_fragment:Um,lights_pars_begin:Nm,lights_toon_fragment:Fm,lights_toon_pars_fragment:zm,lights_phong_fragment:Bm,lights_phong_pars_fragment:km,lights_physical_fragment:Hm,lights_physical_pars_fragment:Gm,lights_fragment_begin:Vm,lights_fragment_maps:Wm,lights_fragment_end:Xm,logdepthbuf_fragment:qm,logdepthbuf_pars_fragment:Ym,logdepthbuf_pars_vertex:$m,logdepthbuf_vertex:Zm,map_fragment:Jm,map_pars_fragment:jm,map_particle_fragment:Km,map_particle_pars_fragment:Qm,metalnessmap_fragment:t0,metalnessmap_pars_fragment:e0,morphcolor_vertex:n0,morphnormal_vertex:i0,morphtarget_pars_vertex:s0,morphtarget_vertex:r0,normal_fragment_begin:a0,normal_fragment_maps:o0,normal_pars_fragment:l0,normal_pars_vertex:c0,normal_vertex:h0,normalmap_pars_fragment:u0,clearcoat_normal_fragment_begin:d0,clearcoat_normal_fragment_maps:f0,clearcoat_pars_fragment:p0,iridescence_pars_fragment:m0,opaque_fragment:g0,packing:x0,premultiplied_alpha_fragment:y0,project_vertex:_0,dithering_fragment:v0,dithering_pars_fragment:M0,roughnessmap_fragment:b0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:E0,shadowmap_pars_vertex:w0,shadowmap_vertex:T0,shadowmask_pars_fragment:A0,skinbase_vertex:R0,skinning_pars_vertex:C0,skinning_vertex:P0,skinnormal_vertex:L0,specularmap_fragment:I0,specularmap_pars_fragment:D0,tonemapping_fragment:U0,tonemapping_pars_fragment:N0,transmission_fragment:O0,transmission_pars_fragment:F0,uv_pars_fragment:z0,uv_pars_vertex:B0,uv_vertex:k0,worldpos_vertex:H0,background_vert:G0,background_frag:V0,backgroundCube_vert:W0,backgroundCube_frag:X0,cube_vert:q0,cube_frag:Y0,depth_vert:$0,depth_frag:Z0,distanceRGBA_vert:J0,distanceRGBA_frag:j0,equirect_vert:K0,equirect_frag:Q0,linedashed_vert:tg,linedashed_frag:eg,meshbasic_vert:ng,meshbasic_frag:ig,meshlambert_vert:sg,meshlambert_frag:rg,meshmatcap_vert:ag,meshmatcap_frag:og,meshnormal_vert:lg,meshnormal_frag:cg,meshphong_vert:hg,meshphong_frag:ug,meshphysical_vert:dg,meshphysical_frag:fg,meshtoon_vert:pg,meshtoon_frag:mg,points_vert:gg,points_frag:xg,shadow_vert:yg,shadow_frag:_g,sprite_vert:vg,sprite_frag:Mg},_t={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Dn={basic:{uniforms:nn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:nn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:nn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:nn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:nn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:nn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:nn([_t.points,_t.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:nn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:nn([_t.common,_t.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:nn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:nn([_t.sprite,_t.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:nn([_t.common,_t.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:nn([_t.lights,_t.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Dn.physical={uniforms:nn([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var jr={r:0,b:0,g:0};function bg(s,t,e,n,i,r,a){let o=new Yt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),y=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ka)?(h===void 0&&(h=new oe(new Kn(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:ws(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ue.getTransfer(x.colorSpace)!==me,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new oe(new mi(2,2),new hn({name:"BackgroundMaterial",uniforms:ws(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ue.getTransfer(x.colorSpace)!==me,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(jr,Tu(s)),n.buffers.color.setClear(jr.r,jr.g,jr.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function Sg(s,t,e,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(U,G,$,it,rt){let tt=!1;if(a){let ht=_(it,$,G);c!==ht&&(c=ht,f(c.object)),tt=p(U,it,$,rt),tt&&y(U,it,$,rt)}else{let ht=G.wireframe===!0;(c.geometry!==it.id||c.program!==$.id||c.wireframe!==ht)&&(c.geometry=it.id,c.program=$.id,c.wireframe=ht,tt=!0)}rt!==null&&e.update(rt,s.ELEMENT_ARRAY_BUFFER),(tt||h)&&(h=!1,C(U,G,$,it),rt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(rt).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(U){return n.isWebGL2?s.bindVertexArray(U):r.bindVertexArrayOES(U)}function g(U){return n.isWebGL2?s.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function _(U,G,$){let it=$.wireframe===!0,rt=o[U.id];rt===void 0&&(rt={},o[U.id]=rt);let tt=rt[G.id];tt===void 0&&(tt={},rt[G.id]=tt);let ht=tt[it];return ht===void 0&&(ht=m(d()),tt[it]=ht),ht}function m(U){let G=[],$=[],it=[];for(let rt=0;rt<i;rt++)G[rt]=0,$[rt]=0,it[rt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:$,attributeDivisors:it,object:U,attributes:{},index:null}}function p(U,G,$,it){let rt=c.attributes,tt=G.attributes,ht=0,ut=$.getAttributes();for(let bt in ut)if(ut[bt].location>=0){let ct=rt[bt],Tt=tt[bt];if(Tt===void 0&&(bt==="instanceMatrix"&&U.instanceMatrix&&(Tt=U.instanceMatrix),bt==="instanceColor"&&U.instanceColor&&(Tt=U.instanceColor)),ct===void 0||ct.attribute!==Tt||Tt&&ct.data!==Tt.data)return!0;ht++}return c.attributesNum!==ht||c.index!==it}function y(U,G,$,it){let rt={},tt=G.attributes,ht=0,ut=$.getAttributes();for(let bt in ut)if(ut[bt].location>=0){let ct=tt[bt];ct===void 0&&(bt==="instanceMatrix"&&U.instanceMatrix&&(ct=U.instanceMatrix),bt==="instanceColor"&&U.instanceColor&&(ct=U.instanceColor));let Tt={};Tt.attribute=ct,ct&&ct.data&&(Tt.data=ct.data),rt[bt]=Tt,ht++}c.attributes=rt,c.attributesNum=ht,c.index=it}function x(){let U=c.newAttributes;for(let G=0,$=U.length;G<$;G++)U[G]=0}function M(U){E(U,0)}function E(U,G){let $=c.newAttributes,it=c.enabledAttributes,rt=c.attributeDivisors;$[U]=1,it[U]===0&&(s.enableVertexAttribArray(U),it[U]=1),rt[U]!==G&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,G),rt[U]=G)}function T(){let U=c.newAttributes,G=c.enabledAttributes;for(let $=0,it=G.length;$<it;$++)G[$]!==U[$]&&(s.disableVertexAttribArray($),G[$]=0)}function w(U,G,$,it,rt,tt,ht){ht===!0?s.vertexAttribIPointer(U,G,$,rt,tt):s.vertexAttribPointer(U,G,$,it,rt,tt)}function C(U,G,$,it){if(n.isWebGL2===!1&&(U.isInstancedMesh||it.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let rt=it.attributes,tt=$.getAttributes(),ht=G.defaultAttributeValues;for(let ut in tt){let bt=tt[ut];if(bt.location>=0){let K=rt[ut];if(K===void 0&&(ut==="instanceMatrix"&&U.instanceMatrix&&(K=U.instanceMatrix),ut==="instanceColor"&&U.instanceColor&&(K=U.instanceColor)),K!==void 0){let ct=K.normalized,Tt=K.itemSize,Ot=e.get(K);if(Ot===void 0)continue;let Mt=Ot.buffer,Ht=Ot.type,$t=Ot.bytesPerElement,St=n.isWebGL2===!0&&(Ht===s.INT||Ht===s.UNSIGNED_INT||K.gpuType===pu);if(K.isInterleavedBufferAttribute){let Xt=K.data,N=Xt.stride,yt=K.offset;if(Xt.isInstancedInterleavedBuffer){for(let nt=0;nt<bt.locationSize;nt++)E(bt.location+nt,Xt.meshPerAttribute);U.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=Xt.meshPerAttribute*Xt.count)}else for(let nt=0;nt<bt.locationSize;nt++)M(bt.location+nt);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let nt=0;nt<bt.locationSize;nt++)w(bt.location+nt,Tt/bt.locationSize,Ht,ct,N*$t,(yt+Tt/bt.locationSize*nt)*$t,St)}else{if(K.isInstancedBufferAttribute){for(let Xt=0;Xt<bt.locationSize;Xt++)E(bt.location+Xt,K.meshPerAttribute);U.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Xt=0;Xt<bt.locationSize;Xt++)M(bt.location+Xt);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let Xt=0;Xt<bt.locationSize;Xt++)w(bt.location+Xt,Tt/bt.locationSize,Ht,ct,Tt*$t,Tt/bt.locationSize*Xt*$t,St)}}else if(ht!==void 0){let ct=ht[ut];if(ct!==void 0)switch(ct.length){case 2:s.vertexAttrib2fv(bt.location,ct);break;case 3:s.vertexAttrib3fv(bt.location,ct);break;case 4:s.vertexAttrib4fv(bt.location,ct);break;default:s.vertexAttrib1fv(bt.location,ct)}}}}T()}function v(){F();for(let U in o){let G=o[U];for(let $ in G){let it=G[$];for(let rt in it)g(it[rt].object),delete it[rt];delete G[$]}delete o[U]}}function b(U){if(o[U.id]===void 0)return;let G=o[U.id];for(let $ in G){let it=G[$];for(let rt in it)g(it[rt].object),delete it[rt];delete G[$]}delete o[U.id]}function L(U){for(let G in o){let $=o[G];if($[U.id]===void 0)continue;let it=$[U.id];for(let rt in it)g(it[rt].object),delete it[rt];delete $[U.id]}}function F(){q(),h=!0,c!==l&&(c=l,f(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:F,resetDefaultState:q,dispose:v,releaseStatesOfGeometry:b,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:M,disableUnusedAttributes:T}}function Eg(s,t,e,n){let i=n.isWebGL2,r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function wg(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,M=a||t.has("OES_texture_float"),E=x&&M,T=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:E,maxSamples:T}}function Tg(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Yn,o=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,x=y*4,M=p.clippingState||null;l.value=M,M=h(g,d,x,f);for(let E=0;E!==x;++E)M[E]=e[E];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=f;x!==_;++x,M+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Ag(s){let t=new WeakMap;function e(a,o){return o===ll?a.mapping=Ms:o===cl&&(a.mapping=bs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ll||o===cl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new xl(l.height/2);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var wa=class extends Sa{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ms=4,Dh=[.125,.215,.35,.446,.526,.582],Ii=20,Zo=new wa,Uh=new Yt,Jo=null,jo=0,Ko=0,Pi=(1+Math.sqrt(5))/2,hs=1/Pi,Nh=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Pi,hs),new I(0,Pi,-hs),new I(hs,0,Pi),new I(-hs,0,Pi),new I(Pi,hs,0),new I(-Pi,hs,0)],Ta=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Jo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jo,jo,Ko),t.scissorTest=!1,Kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ms||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:rr,format:Tn,colorSpace:Zn,depthBuffer:!1},i=Oh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rg(r)),this._blurMaterial=Cg(r,t,e)}return i}_compileMaterial(t){let e=new oe(this._lodPlanes[0],t);this._renderer.compile(e,Zo)}_sceneToCubeUV(t,e,n,i){let o=new Ue(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Uh),h.toneMapping=ui,h.autoClear=!1;let f=new cn({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new oe(new Kn,f),_=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Uh),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let x=this._cubeSize;Kr(i,y*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ms||t.mapping===bs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fh());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new oe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Kr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Zo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Nh[(i-1)%Nh.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new oe(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ii-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ii;m>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);let p=[],y=0;for(let w=0;w<Ii;++w){let C=w/_,v=Math.exp(-C*C/2);p.push(v),w===0?y+=v:w<m&&(y+=2*v)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let M=this._sizeLods[i],E=3*M*(i>x-ms?i-x+ms:0),T=4*(this._cubeSize-M);Kr(e,E,T,3*M,2*M),l.setRenderTarget(e),l.render(u,Zo)}};function Rg(s){let t=[],e=[],n=[],i=s,r=s-ms+1+Dh.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-ms?l=Dh[a-s+ms-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),x=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let T=0;T<f;T++){let w=T%3*2/3-1,C=T>2?0:-1,v=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(v,_*g*T),x.set(d,m*g*T);let b=[T,T,T,T,T,T];M.set(b,p*g*T)}let E=new ye;E.setAttribute("position",new Ce(y,_)),E.setAttribute("uv",new Ce(x,m)),E.setAttribute("faceIndex",new Ce(M,p)),t.push(E),i>ms&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Oh(s,t,e){let n=new Jn(s,t,e);return n.texture.mapping=ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Cg(s,t,e){let n=new Float32Array(Ii),i=new I(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Fh(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function zh(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function ic(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pg(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ll||l===cl,h=l===Ms||l===bs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Ta(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Ta(s));let d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Lg(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ig(s,t,e,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let y=f.array;_=f.version;for(let x=0,M=y.length;x<M;x+=3){let E=y[x+0],T=y[x+1],w=y[x+2];d.push(E,T,T,w,w,E)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,M=y.length/3-1;x<M;x+=3){let E=x+0,T=x+1,w=x+2;d.push(E,T,T,w,w,E)}}else return;let m=new(Eu(d)?ba:Ma)(d,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Dg(s,t,e,n){let i=n.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,g){s.drawElements(r,g,o,f*l),e.update(g,r,1)}function u(f,g,_){if(_===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*l,_),e.update(g,r,_)}function d(f,g,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,_);let p=0;for(let y=0;y<_;y++)p+=g[y];e.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Ug(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ng(s,t){return s[0]-t[0]}function Og(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Fg(s,t,e){let n={},i=new Float32Array(8),r=new WeakMap,a=new xe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,_=r.get(h);if(_===void 0||_.count!==g){let U=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",U)};_!==void 0&&_.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],C=0;y===!0&&(C=1),x===!0&&(C=2),M===!0&&(C=3);let v=h.attributes.position.count*C,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let L=new Float32Array(v*b*4*g),F=new _a(L,v,b,g);F.type=ci,F.needsUpdate=!0;let q=C*4;for(let G=0;G<g;G++){let $=E[G],it=T[G],rt=w[G],tt=v*b*4*G;for(let ht=0;ht<$.count;ht++){let ut=ht*q;y===!0&&(a.fromBufferAttribute($,ht),L[tt+ut+0]=a.x,L[tt+ut+1]=a.y,L[tt+ut+2]=a.z,L[tt+ut+3]=0),x===!0&&(a.fromBufferAttribute(it,ht),L[tt+ut+4]=a.x,L[tt+ut+5]=a.y,L[tt+ut+6]=a.z,L[tt+ut+7]=0),M===!0&&(a.fromBufferAttribute(rt,ht),L[tt+ut+8]=a.x,L[tt+ut+9]=a.y,L[tt+ut+10]=a.z,L[tt+ut+11]=rt.itemSize===4?a.w:1)}}_={count:g,texture:F,size:new mt(v,b)},r.set(h,_),h.addEventListener("dispose",U)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{let f=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<f;x++){let M=g[x];M[0]=x,M[1]=d[x]}g.sort(Og);for(let x=0;x<8;x++)x<f&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Ng);let _=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let M=o[x],E=M[0],T=M[1];E!==Number.MAX_SAFE_INTEGER&&T?(_&&h.getAttribute("morphTarget"+x)!==_[E]&&h.setAttribute("morphTarget"+x,_[E]),m&&h.getAttribute("morphNormal"+x)!==m[E]&&h.setAttribute("morphNormal"+x,m[E]),i[x]=T,p+=T):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function zg(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Aa=class extends _n{constructor(t,e,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:Ni,h!==Ni&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ni&&(n=li),n===void 0&&h===Ss&&(n=Ui),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ru=new _n,Cu=new Aa(1,1);Cu.compareFunction=Su;var Pu=new _a,Lu=new ml,Iu=new Ea,Bh=[],kh=[],Hh=new Float32Array(16),Gh=new Float32Array(9),Vh=new Float32Array(4);function Is(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Bh[i];if(r===void 0&&(r=new Float32Array(i),Bh[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Oe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Fe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ga(s,t){let e=kh[t];e===void 0&&(e=new Int32Array(t),kh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Bg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function kg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2fv(this.addr,t),Fe(e,t)}}function Hg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;s.uniform3fv(this.addr,t),Fe(e,t)}}function Gg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4fv(this.addr,t),Fe(e,t)}}function Vg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;Vh.set(n),s.uniformMatrix2fv(this.addr,!1,Vh),Fe(e,n)}}function Wg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;Gh.set(n),s.uniformMatrix3fv(this.addr,!1,Gh),Fe(e,n)}}function Xg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;Hh.set(n),s.uniformMatrix4fv(this.addr,!1,Hh),Fe(e,n)}}function qg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Yg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2iv(this.addr,t),Fe(e,t)}}function $g(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;s.uniform3iv(this.addr,t),Fe(e,t)}}function Zg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4iv(this.addr,t),Fe(e,t)}}function Jg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function jg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2uiv(this.addr,t),Fe(e,t)}}function Kg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;s.uniform3uiv(this.addr,t),Fe(e,t)}}function Qg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4uiv(this.addr,t),Fe(e,t)}}function tx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Cu:Ru;e.setTexture2D(t||r,i)}function ex(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Lu,i)}function nx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Iu,i)}function ix(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Pu,i)}function sx(s){switch(s){case 5126:return Bg;case 35664:return kg;case 35665:return Hg;case 35666:return Gg;case 35674:return Vg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return qg;case 35667:case 35671:return Yg;case 35668:case 35672:return $g;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return jg;case 36295:return Kg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}function rx(s,t){s.uniform1fv(this.addr,t)}function ax(s,t){let e=Is(t,this.size,2);s.uniform2fv(this.addr,e)}function ox(s,t){let e=Is(t,this.size,3);s.uniform3fv(this.addr,e)}function lx(s,t){let e=Is(t,this.size,4);s.uniform4fv(this.addr,e)}function cx(s,t){let e=Is(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function hx(s,t){let e=Is(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ux(s,t){let e=Is(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function dx(s,t){s.uniform1iv(this.addr,t)}function fx(s,t){s.uniform2iv(this.addr,t)}function px(s,t){s.uniform3iv(this.addr,t)}function mx(s,t){s.uniform4iv(this.addr,t)}function gx(s,t){s.uniform1uiv(this.addr,t)}function xx(s,t){s.uniform2uiv(this.addr,t)}function yx(s,t){s.uniform3uiv(this.addr,t)}function _x(s,t){s.uniform4uiv(this.addr,t)}function vx(s,t,e){let n=this.cache,i=t.length,r=Ga(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Ru,r[a])}function Mx(s,t,e){let n=this.cache,i=t.length,r=Ga(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Lu,r[a])}function bx(s,t,e){let n=this.cache,i=t.length,r=Ga(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Iu,r[a])}function Sx(s,t,e){let n=this.cache,i=t.length,r=Ga(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Pu,r[a])}function Ex(s){switch(s){case 5126:return rx;case 35664:return ax;case 35665:return ox;case 35666:return lx;case 35674:return cx;case 35675:return hx;case 35676:return ux;case 5124:case 35670:return dx;case 35667:case 35671:return fx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return xx;case 36295:return yx;case 36296:return _x;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return Sx}}var yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sx(e.type)}},_l=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ex(e.type)}},vl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Qo=/(\w+)(\])?(\[|\.)?/g;function Wh(s,t){s.seq.push(t),s.map[t.id]=t}function wx(s,t,e){let n=s.name,i=n.length;for(Qo.lastIndex=0;;){let r=Qo.exec(n),a=Qo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Wh(e,c===void 0?new yl(o,s,t):new _l(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new vl(o),Wh(e,u)),e=u}}}var vs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);wx(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Xh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Tx=37297,Ax=0;function Rx(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Cx(s){let t=ue.getPrimaries(ue.workingColorSpace),e=ue.getPrimaries(s),n;switch(t===e?n="":t===fa&&e===da?n="LinearDisplayP3ToLinearSRGB":t===da&&e===fa&&(n="LinearSRGBToLinearDisplayP3"),s){case Zn:case Ha:return[n,"LinearTransferOETF"];case Me:case ec:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function qh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Rx(s.getShaderSource(t),a)}else return i}function Px(s,t){let e=Cx(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Lx(s,t){let e;switch(t){case Ff:e="Linear";break;case zf:e="Reinhard";break;case Bf:e="OptimizedCineon";break;case _r:e="ACESFilmic";break;case Hf:e="AgX";break;case kf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ix(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gs).join(`
`)}function Dx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(gs).join(`
`)}function Ux(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Nx(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function gs(s){return s!==""}function Yh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $h(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(s){return s.replace(Ox,zx)}var Fx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zx(s,t){let e=Kt[t];if(e===void 0){let n=Fx.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ml(e)}var Bx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zh(s){return s.replace(Bx,kx)}function kx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Jh(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ba?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===uf?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function Gx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ms:case bs:t="ENVMAP_TYPE_CUBE";break;case ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case bs:t="ENVMAP_MODE_REFRACTION";break}return t}function Wx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case du:t="ENVMAP_BLENDING_MULTIPLY";break;case Nf:t="ENVMAP_BLENDING_MIX";break;case Of:t="ENVMAP_BLENDING_ADD";break}return t}function Xx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function qx(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Hx(e),c=Gx(e),h=Vx(e),u=Wx(e),d=Xx(e),f=e.isWebGL2?"":Ix(e),g=Dx(e),_=Ux(r),m=i.createProgram(),p,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(gs).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(gs).join(`
`),y.length>0&&(y+=`
`)):(p=[Jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),y=[f,Jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?Kt.tonemapping_pars_fragment:"",e.toneMapping!==ui?Lx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Px("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),a=Ml(a),a=Yh(a,e),a=$h(a,e),o=Ml(o),o=Yh(o,e),o=$h(o,e),a=Zh(a),o=Zh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=x+p+a,E=x+y+o,T=Xh(i,i.VERTEX_SHADER,M),w=Xh(i,i.FRAGMENT_SHADER,E);i.attachShader(m,T),i.attachShader(m,w),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function C(F){if(s.debug.checkShaderErrors){let q=i.getProgramInfoLog(m).trim(),U=i.getShaderInfoLog(T).trim(),G=i.getShaderInfoLog(w).trim(),$=!0,it=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,T,w);else{let rt=qh(i,T,"vertex"),tt=qh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+rt+`
`+tt)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(U===""||G==="")&&(it=!1);it&&(F.diagnostics={runnable:$,programLog:q,vertexShader:{log:U,prefix:p},fragmentShader:{log:G,prefix:y}})}i.deleteShader(T),i.deleteShader(w),v=new vs(i,m),b=Nx(i,m)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(m,Tx)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ax++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=w,this}var Yx=0,bl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Sl(t),e.set(t,n)),n}},Sl=class{constructor(t){this.id=Yx++,this.code=t,this.usedTimes=0}};function $x(s,t,e,n,i,r,a){let o=new lr,l=new bl,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,b,L,F,q){let U=F.fog,G=q.geometry,$=v.isMeshStandardMaterial?F.environment:null,it=(v.isMeshStandardMaterial?e:t).get(v.envMap||$),rt=it&&it.mapping===ka?it.image.height:null,tt=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let ht=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ut=ht!==void 0?ht.length:0,bt=0;G.morphAttributes.position!==void 0&&(bt=1),G.morphAttributes.normal!==void 0&&(bt=2),G.morphAttributes.color!==void 0&&(bt=3);let K,ct,Tt,Ot;if(tt){let le=Dn[tt];K=le.vertexShader,ct=le.fragmentShader}else K=v.vertexShader,ct=v.fragmentShader,l.update(v),Tt=l.getVertexShaderID(v),Ot=l.getFragmentShaderID(v);let Mt=s.getRenderTarget(),Ht=q.isInstancedMesh===!0,$t=q.isBatchedMesh===!0,St=!!v.map,Xt=!!v.matcap,N=!!it,yt=!!v.aoMap,nt=!!v.lightMap,ft=!!v.bumpMap,et=!!v.normalMap,Ft=!!v.displacementMap,Et=!!v.emissiveMap,R=!!v.metalnessMap,S=!!v.roughnessMap,X=v.anisotropy>0,dt=v.clearcoat>0,lt=v.iridescence>0,at=v.sheen>0,Ut=v.transmission>0,vt=X&&!!v.anisotropyMap,Pt=dt&&!!v.clearcoatMap,kt=dt&&!!v.clearcoatNormalMap,Zt=dt&&!!v.clearcoatRoughnessMap,P=lt&&!!v.iridescenceMap,B=lt&&!!v.iridescenceThicknessMap,z=at&&!!v.sheenColorMap,H=at&&!!v.sheenRoughnessMap,V=!!v.specularMap,pt=!!v.specularColorMap,wt=!!v.specularIntensityMap,It=Ut&&!!v.transmissionMap,zt=Ut&&!!v.thicknessMap,Lt=!!v.gradientMap,ot=!!v.alphaMap,D=v.alphaTest>0,st=!!v.alphaHash,gt=!!v.extensions,Dt=!!G.attributes.uv1,Nt=!!G.attributes.uv2,Rt=!!G.attributes.uv3,Wt=ui;return v.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Wt=s.toneMapping),{isWebGL2:h,shaderID:tt,shaderType:v.type,shaderName:v.name,vertexShader:K,fragmentShader:ct,defines:v.defines,customVertexShaderID:Tt,customFragmentShaderID:Ot,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:$t,instancing:Ht,instancingColor:Ht&&q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Mt===null?s.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Zn,map:St,matcap:Xt,envMap:N,envMapMode:N&&it.mapping,envMapCubeUVHeight:rt,aoMap:yt,lightMap:nt,bumpMap:ft,normalMap:et,displacementMap:d&&Ft,emissiveMap:Et,normalMapObjectSpace:et&&v.normalMapType===Qf,normalMapTangentSpace:et&&v.normalMapType===bu,metalnessMap:R,roughnessMap:S,anisotropy:X,anisotropyMap:vt,clearcoat:dt,clearcoatMap:Pt,clearcoatNormalMap:kt,clearcoatRoughnessMap:Zt,iridescence:lt,iridescenceMap:P,iridescenceThicknessMap:B,sheen:at,sheenColorMap:z,sheenRoughnessMap:H,specularMap:V,specularColorMap:pt,specularIntensityMap:wt,transmission:Ut,transmissionMap:It,thicknessMap:zt,gradientMap:Lt,opaque:v.transparent===!1&&v.blending===ys,alphaMap:ot,alphaTest:D,alphaHash:st,combine:v.combine,mapUv:St&&_(v.map.channel),aoMapUv:yt&&_(v.aoMap.channel),lightMapUv:nt&&_(v.lightMap.channel),bumpMapUv:ft&&_(v.bumpMap.channel),normalMapUv:et&&_(v.normalMap.channel),displacementMapUv:Ft&&_(v.displacementMap.channel),emissiveMapUv:Et&&_(v.emissiveMap.channel),metalnessMapUv:R&&_(v.metalnessMap.channel),roughnessMapUv:S&&_(v.roughnessMap.channel),anisotropyMapUv:vt&&_(v.anisotropyMap.channel),clearcoatMapUv:Pt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:kt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:P&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:B&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:z&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:H&&_(v.sheenRoughnessMap.channel),specularMapUv:V&&_(v.specularMap.channel),specularColorMapUv:pt&&_(v.specularColorMap.channel),specularIntensityMapUv:wt&&_(v.specularIntensityMap.channel),transmissionMapUv:It&&_(v.transmissionMap.channel),thicknessMapUv:zt&&_(v.thicknessMap.channel),alphaMapUv:ot&&_(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(et||X),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Dt,vertexUv2s:Nt,vertexUv3s:Rt,pointsUvs:q.isPoints===!0&&!!G.attributes.uv&&(St||ot),fog:!!U,useFog:v.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:q.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:bt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Wt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:St&&v.map.isVideoTexture===!0&&ue.getTransfer(v.map.colorSpace)===me,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===xn,flipSided:v.side===je,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:gt&&v.extensions.derivatives===!0,extensionFragDepth:gt&&v.extensions.fragDepth===!0,extensionDrawBuffers:gt&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:gt&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:gt&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let L in v.defines)b.push(L),b.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(y(b,v),x(b,v),b.push(s.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function y(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function x(v,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function M(v){let b=g[v.type],L;if(b){let F=Dn[b];L=Fp.clone(F.uniforms)}else L=v.uniforms;return L}function E(v,b){let L;for(let F=0,q=c.length;F<q;F++){let U=c[F];if(U.cacheKey===b){L=U,++L.usedTimes;break}}return L===void 0&&(L=new qx(s,b,v,r),c.push(L)),L}function T(v){if(--v.usedTimes===0){let b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),v.destroy()}}function w(v){l.remove(v)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:E,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:C}}function Zx(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Jx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function jh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Kh(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Jx),n.length>1&&n.sort(d||jh),i.length>1&&i.sort(d||jh)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function jx(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Kh,s.set(n,[a])):i>=r.length?(a=new Kh,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Kx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Yt};break;case"SpotLight":e={position:new I,direction:new I,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function Qx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var ty=0;function ey(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ny(s,t){let e=new Kx,n=Qx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new I);let r=new I,a=new we,o=new we;function l(h,u){let d=0,f=0,g=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let _=0,m=0,p=0,y=0,x=0,M=0,E=0,T=0,w=0,C=0,v=0;h.sort(ey);let b=u===!0?Math.PI:1;for(let F=0,q=h.length;F<q;F++){let U=h[F],G=U.color,$=U.intensity,it=U.distance,rt=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=G.r*$*b,f+=G.g*$*b,g+=G.b*$*b;else if(U.isLightProbe){for(let tt=0;tt<9;tt++)i.probe[tt].addScaledVector(U.sh.coefficients[tt],$);v++}else if(U.isDirectionalLight){let tt=e.get(U);if(tt.color.copy(U.color).multiplyScalar(U.intensity*b),U.castShadow){let ht=U.shadow,ut=n.get(U);ut.shadowBias=ht.bias,ut.shadowNormalBias=ht.normalBias,ut.shadowRadius=ht.radius,ut.shadowMapSize=ht.mapSize,i.directionalShadow[_]=ut,i.directionalShadowMap[_]=rt,i.directionalShadowMatrix[_]=U.shadow.matrix,M++}i.directional[_]=tt,_++}else if(U.isSpotLight){let tt=e.get(U);tt.position.setFromMatrixPosition(U.matrixWorld),tt.color.copy(G).multiplyScalar($*b),tt.distance=it,tt.coneCos=Math.cos(U.angle),tt.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),tt.decay=U.decay,i.spot[p]=tt;let ht=U.shadow;if(U.map&&(i.spotLightMap[w]=U.map,w++,ht.updateMatrices(U),U.castShadow&&C++),i.spotLightMatrix[p]=ht.matrix,U.castShadow){let ut=n.get(U);ut.shadowBias=ht.bias,ut.shadowNormalBias=ht.normalBias,ut.shadowRadius=ht.radius,ut.shadowMapSize=ht.mapSize,i.spotShadow[p]=ut,i.spotShadowMap[p]=rt,T++}p++}else if(U.isRectAreaLight){let tt=e.get(U);tt.color.copy(G).multiplyScalar($),tt.halfWidth.set(U.width*.5,0,0),tt.halfHeight.set(0,U.height*.5,0),i.rectArea[y]=tt,y++}else if(U.isPointLight){let tt=e.get(U);if(tt.color.copy(U.color).multiplyScalar(U.intensity*b),tt.distance=U.distance,tt.decay=U.decay,U.castShadow){let ht=U.shadow,ut=n.get(U);ut.shadowBias=ht.bias,ut.shadowNormalBias=ht.normalBias,ut.shadowRadius=ht.radius,ut.shadowMapSize=ht.mapSize,ut.shadowCameraNear=ht.camera.near,ut.shadowCameraFar=ht.camera.far,i.pointShadow[m]=ut,i.pointShadowMap[m]=rt,i.pointShadowMatrix[m]=U.shadow.matrix,E++}i.point[m]=tt,m++}else if(U.isHemisphereLight){let tt=e.get(U);tt.skyColor.copy(U.color).multiplyScalar($*b),tt.groundColor.copy(U.groundColor).multiplyScalar($*b),i.hemi[x]=tt,x++}}y>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;let L=i.hash;(L.directionalLength!==_||L.pointLength!==m||L.spotLength!==p||L.rectAreaLength!==y||L.hemiLength!==x||L.numDirectionalShadows!==M||L.numPointShadows!==E||L.numSpotShadows!==T||L.numSpotMaps!==w||L.numLightProbes!==v)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=T+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=v,L.directionalLength=_,L.pointLength=m,L.spotLength=p,L.rectAreaLength=y,L.hemiLength=x,L.numDirectionalShadows=M,L.numPointShadows=E,L.numSpotShadows=T,L.numSpotMaps=w,L.numLightProbes=v,i.version=ty++)}function c(h,u){let d=0,f=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let M=h[y];if(M.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(M.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let E=i.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Qh(s,t){let e=new ny(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function iy(s,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new Qh(s,t),e.set(r,[l])):a>=o.length?(l=new Qh(s,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}var El=class extends jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wl=class extends jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},sy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ry=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ay(s,t,e){let n=new cr,i=new mt,r=new mt,a=new xe,o=new El({depthPacking:Kf}),l=new wl,c={},h=e.maxTextureSize,u={[On]:je,[je]:On,[xn]:xn},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:sy,fragmentShader:ry}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ye;g.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new oe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ba;let p=this.type;this.render=function(T,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let v=s.getRenderTarget(),b=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),F=s.state;F.setBlending(hi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let q=p!==qn&&this.type===qn,U=p===qn&&this.type!==qn;for(let G=0,$=T.length;G<$;G++){let it=T[G],rt=it.shadow;if(rt===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(rt.autoUpdate===!1&&rt.needsUpdate===!1)continue;i.copy(rt.mapSize);let tt=rt.getFrameExtents();if(i.multiply(tt),r.copy(rt.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,rt.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,rt.mapSize.y=r.y)),rt.map===null||q===!0||U===!0){let ut=this.type!==qn?{minFilter:sn,magFilter:sn}:{};rt.map!==null&&rt.map.dispose(),rt.map=new Jn(i.x,i.y,ut),rt.map.texture.name=it.name+".shadowMap",rt.camera.updateProjectionMatrix()}s.setRenderTarget(rt.map),s.clear();let ht=rt.getViewportCount();for(let ut=0;ut<ht;ut++){let bt=rt.getViewport(ut);a.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),F.viewport(a),rt.updateMatrices(it,ut),n=rt.getFrustum(),M(w,C,rt.camera,it,this.type)}rt.isPointLightShadow!==!0&&this.type===qn&&y(rt,C),rt.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,b,L)};function y(T,w){let C=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Jn(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(w,null,C,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(w,null,C,f,_,null)}function x(T,w,C,v){let b=null,L=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)b=L;else if(b=C.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let F=b.uuid,q=w.uuid,U=c[F];U===void 0&&(U={},c[F]=U);let G=U[q];G===void 0&&(G=b.clone(),U[q]=G,w.addEventListener("dispose",E)),b=G}if(b.visible=w.visible,b.wireframe=w.wireframe,v===qn?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:u[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let F=s.properties.get(b);F.light=C}return b}function M(T,w,C,v,b){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===qn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let q=t.update(T),U=T.material;if(Array.isArray(U)){let G=q.groups;for(let $=0,it=G.length;$<it;$++){let rt=G[$],tt=U[rt.materialIndex];if(tt&&tt.visible){let ht=x(T,tt,v,b);T.onBeforeShadow(s,T,w,C,q,ht,rt),s.renderBufferDirect(C,null,q,ht,T,rt),T.onAfterShadow(s,T,w,C,q,ht,rt)}}}else if(U.visible){let G=x(T,U,v,b);T.onBeforeShadow(s,T,w,C,q,G,null),s.renderBufferDirect(C,null,q,G,T,null),T.onAfterShadow(s,T,w,C,q,G,null)}}let F=T.children;for(let q=0,U=F.length;q<U;q++)M(F[q],w,C,v,b)}function E(T){T.target.removeEventListener("dispose",E);for(let C in c){let v=c[C],b=T.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}function oy(s,t,e){let n=e.isWebGL2;function i(){let D=!1,st=new xe,gt=null,Dt=new xe(0,0,0,0);return{setMask:function(Nt){gt!==Nt&&!D&&(s.colorMask(Nt,Nt,Nt,Nt),gt=Nt)},setLocked:function(Nt){D=Nt},setClear:function(Nt,Rt,Wt,se,le){le===!0&&(Nt*=se,Rt*=se,Wt*=se),st.set(Nt,Rt,Wt,se),Dt.equals(st)===!1&&(s.clearColor(Nt,Rt,Wt,se),Dt.copy(st))},reset:function(){D=!1,gt=null,Dt.set(-1,0,0,0)}}}function r(){let D=!1,st=null,gt=null,Dt=null;return{setTest:function(Nt){Nt?$t(s.DEPTH_TEST):St(s.DEPTH_TEST)},setMask:function(Nt){st!==Nt&&!D&&(s.depthMask(Nt),st=Nt)},setFunc:function(Nt){if(gt!==Nt){switch(Nt){case Rf:s.depthFunc(s.NEVER);break;case Cf:s.depthFunc(s.ALWAYS);break;case Pf:s.depthFunc(s.LESS);break;case la:s.depthFunc(s.LEQUAL);break;case Lf:s.depthFunc(s.EQUAL);break;case If:s.depthFunc(s.GEQUAL);break;case Df:s.depthFunc(s.GREATER);break;case Uf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=Nt}},setLocked:function(Nt){D=Nt},setClear:function(Nt){Dt!==Nt&&(s.clearDepth(Nt),Dt=Nt)},reset:function(){D=!1,st=null,gt=null,Dt=null}}}function a(){let D=!1,st=null,gt=null,Dt=null,Nt=null,Rt=null,Wt=null,se=null,le=null;return{setTest:function(ie){D||(ie?$t(s.STENCIL_TEST):St(s.STENCIL_TEST))},setMask:function(ie){st!==ie&&!D&&(s.stencilMask(ie),st=ie)},setFunc:function(ie,Se,fn){(gt!==ie||Dt!==Se||Nt!==fn)&&(s.stencilFunc(ie,Se,fn),gt=ie,Dt=Se,Nt=fn)},setOp:function(ie,Se,fn){(Rt!==ie||Wt!==Se||se!==fn)&&(s.stencilOp(ie,Se,fn),Rt=ie,Wt=Se,se=fn)},setLocked:function(ie){D=ie},setClear:function(ie){le!==ie&&(s.clearStencil(ie),le=ie)},reset:function(){D=!1,st=null,gt=null,Dt=null,Nt=null,Rt=null,Wt=null,se=null,le=null}}}let o=new i,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,M=null,E=null,T=null,w=null,C=null,v=new Yt(0,0,0),b=0,L=!1,F=null,q=null,U=null,G=null,$=null,it=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),rt=!1,tt=0,ht=s.getParameter(s.VERSION);ht.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(ht)[1]),rt=tt>=1):ht.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(ht)[1]),rt=tt>=2);let ut=null,bt={},K=s.getParameter(s.SCISSOR_BOX),ct=s.getParameter(s.VIEWPORT),Tt=new xe().fromArray(K),Ot=new xe().fromArray(ct);function Mt(D,st,gt,Dt){let Nt=new Uint8Array(4),Rt=s.createTexture();s.bindTexture(D,Rt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Wt=0;Wt<gt;Wt++)n&&(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)?s.texImage3D(st,0,s.RGBA,1,1,Dt,0,s.RGBA,s.UNSIGNED_BYTE,Nt):s.texImage2D(st+Wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Nt);return Rt}let Ht={};Ht[s.TEXTURE_2D]=Mt(s.TEXTURE_2D,s.TEXTURE_2D,1),Ht[s.TEXTURE_CUBE_MAP]=Mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ht[s.TEXTURE_2D_ARRAY]=Mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ht[s.TEXTURE_3D]=Mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),$t(s.DEPTH_TEST),l.setFunc(la),Et(!1),R(Uc),$t(s.CULL_FACE),et(hi);function $t(D){d[D]!==!0&&(s.enable(D),d[D]=!0)}function St(D){d[D]!==!1&&(s.disable(D),d[D]=!1)}function Xt(D,st){return f[D]!==st?(s.bindFramebuffer(D,st),f[D]=st,n&&(D===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=st),D===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=st)),!0):!1}function N(D,st){let gt=_,Dt=!1;if(D)if(gt=g.get(st),gt===void 0&&(gt=[],g.set(st,gt)),D.isWebGLMultipleRenderTargets){let Nt=D.texture;if(gt.length!==Nt.length||gt[0]!==s.COLOR_ATTACHMENT0){for(let Rt=0,Wt=Nt.length;Rt<Wt;Rt++)gt[Rt]=s.COLOR_ATTACHMENT0+Rt;gt.length=Nt.length,Dt=!0}}else gt[0]!==s.COLOR_ATTACHMENT0&&(gt[0]=s.COLOR_ATTACHMENT0,Dt=!0);else gt[0]!==s.BACK&&(gt[0]=s.BACK,Dt=!0);Dt&&(e.isWebGL2?s.drawBuffers(gt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(gt))}function yt(D){return m!==D?(s.useProgram(D),m=D,!0):!1}let nt={[Li]:s.FUNC_ADD,[ff]:s.FUNC_SUBTRACT,[pf]:s.FUNC_REVERSE_SUBTRACT};if(n)nt[Fc]=s.MIN,nt[zc]=s.MAX;else{let D=t.get("EXT_blend_minmax");D!==null&&(nt[Fc]=D.MIN_EXT,nt[zc]=D.MAX_EXT)}let ft={[mf]:s.ZERO,[gf]:s.ONE,[xf]:s.SRC_COLOR,[al]:s.SRC_ALPHA,[Sf]:s.SRC_ALPHA_SATURATE,[Mf]:s.DST_COLOR,[_f]:s.DST_ALPHA,[yf]:s.ONE_MINUS_SRC_COLOR,[ol]:s.ONE_MINUS_SRC_ALPHA,[bf]:s.ONE_MINUS_DST_COLOR,[vf]:s.ONE_MINUS_DST_ALPHA,[Ef]:s.CONSTANT_COLOR,[wf]:s.ONE_MINUS_CONSTANT_COLOR,[Tf]:s.CONSTANT_ALPHA,[Af]:s.ONE_MINUS_CONSTANT_ALPHA};function et(D,st,gt,Dt,Nt,Rt,Wt,se,le,ie){if(D===hi){p===!0&&(St(s.BLEND),p=!1);return}if(p===!1&&($t(s.BLEND),p=!0),D!==df){if(D!==y||ie!==L){if((x!==Li||T!==Li)&&(s.blendEquation(s.FUNC_ADD),x=Li,T=Li),ie)switch(D){case ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ne:s.blendFunc(s.ONE,s.ONE);break;case Nc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ne:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Nc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,E=null,w=null,C=null,v.set(0,0,0),b=0,y=D,L=ie}return}Nt=Nt||st,Rt=Rt||gt,Wt=Wt||Dt,(st!==x||Nt!==T)&&(s.blendEquationSeparate(nt[st],nt[Nt]),x=st,T=Nt),(gt!==M||Dt!==E||Rt!==w||Wt!==C)&&(s.blendFuncSeparate(ft[gt],ft[Dt],ft[Rt],ft[Wt]),M=gt,E=Dt,w=Rt,C=Wt),(se.equals(v)===!1||le!==b)&&(s.blendColor(se.r,se.g,se.b,le),v.copy(se),b=le),y=D,L=!1}function Ft(D,st){D.side===xn?St(s.CULL_FACE):$t(s.CULL_FACE);let gt=D.side===je;st&&(gt=!gt),Et(gt),D.blending===ys&&D.transparent===!1?et(hi):et(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);let Dt=D.stencilWrite;c.setTest(Dt),Dt&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),X(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?$t(s.SAMPLE_ALPHA_TO_COVERAGE):St(s.SAMPLE_ALPHA_TO_COVERAGE)}function Et(D){F!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),F=D)}function R(D){D!==cf?($t(s.CULL_FACE),D!==q&&(D===Uc?s.cullFace(s.BACK):D===hf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):St(s.CULL_FACE),q=D}function S(D){D!==U&&(rt&&s.lineWidth(D),U=D)}function X(D,st,gt){D?($t(s.POLYGON_OFFSET_FILL),(G!==st||$!==gt)&&(s.polygonOffset(st,gt),G=st,$=gt)):St(s.POLYGON_OFFSET_FILL)}function dt(D){D?$t(s.SCISSOR_TEST):St(s.SCISSOR_TEST)}function lt(D){D===void 0&&(D=s.TEXTURE0+it-1),ut!==D&&(s.activeTexture(D),ut=D)}function at(D,st,gt){gt===void 0&&(ut===null?gt=s.TEXTURE0+it-1:gt=ut);let Dt=bt[gt];Dt===void 0&&(Dt={type:void 0,texture:void 0},bt[gt]=Dt),(Dt.type!==D||Dt.texture!==st)&&(ut!==gt&&(s.activeTexture(gt),ut=gt),s.bindTexture(D,st||Ht[D]),Dt.type=D,Dt.texture=st)}function Ut(){let D=bt[ut];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function vt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function kt(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Zt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function z(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function H(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(D){Tt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Tt.copy(D))}function It(D){Ot.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Ot.copy(D))}function zt(D,st){let gt=u.get(st);gt===void 0&&(gt=new WeakMap,u.set(st,gt));let Dt=gt.get(D);Dt===void 0&&(Dt=s.getUniformBlockIndex(st,D.name),gt.set(D,Dt))}function Lt(D,st){let Dt=u.get(st).get(D);h.get(st)!==Dt&&(s.uniformBlockBinding(st,Dt,D.__bindingPointIndex),h.set(st,Dt))}function ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ut=null,bt={},f={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,M=null,E=null,T=null,w=null,C=null,v=new Yt(0,0,0),b=0,L=!1,F=null,q=null,U=null,G=null,$=null,Tt.set(0,0,s.canvas.width,s.canvas.height),Ot.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:$t,disable:St,bindFramebuffer:Xt,drawBuffers:N,useProgram:yt,setBlending:et,setMaterial:Ft,setFlipSided:Et,setCullFace:R,setLineWidth:S,setPolygonOffset:X,setScissorTest:dt,activeTexture:lt,bindTexture:at,unbindTexture:Ut,compressedTexImage2D:vt,compressedTexImage3D:Pt,texImage2D:V,texImage3D:pt,updateUBOMapping:zt,uniformBlockBinding:Lt,texStorage2D:z,texStorage3D:H,texSubImage2D:kt,texSubImage3D:Zt,compressedTexSubImage2D:P,compressedTexSubImage3D:B,scissor:wt,viewport:It,reset:ot}}function ly(s,t,e,n,i,r,a){let o=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return f?new OffscreenCanvas(R,S):ga("canvas")}function _(R,S,X,dt){let lt=1;if((R.width>dt||R.height>dt)&&(lt=dt/Math.max(R.width,R.height)),lt<1||S===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let at=S?ma:Math.floor,Ut=at(lt*R.width),vt=at(lt*R.height);u===void 0&&(u=g(Ut,vt));let Pt=X?g(Ut,vt):u;return Pt.width=Ut,Pt.height=vt,Pt.getContext("2d").drawImage(R,0,0,Ut,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ut+"x"+vt+")."),Pt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return fl(R.width)&&fl(R.height)}function p(R){return o?!1:R.wrapS!==wn||R.wrapT!==wn||R.minFilter!==sn&&R.minFilter!==gn}function y(R,S){return R.generateMipmaps&&S&&R.minFilter!==sn&&R.minFilter!==gn}function x(R){s.generateMipmap(R)}function M(R,S,X,dt,lt=!1){if(o===!1)return S;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let at=S;if(S===s.RED&&(X===s.FLOAT&&(at=s.R32F),X===s.HALF_FLOAT&&(at=s.R16F),X===s.UNSIGNED_BYTE&&(at=s.R8)),S===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(at=s.R8UI),X===s.UNSIGNED_SHORT&&(at=s.R16UI),X===s.UNSIGNED_INT&&(at=s.R32UI),X===s.BYTE&&(at=s.R8I),X===s.SHORT&&(at=s.R16I),X===s.INT&&(at=s.R32I)),S===s.RG&&(X===s.FLOAT&&(at=s.RG32F),X===s.HALF_FLOAT&&(at=s.RG16F),X===s.UNSIGNED_BYTE&&(at=s.RG8)),S===s.RGBA){let Ut=lt?ua:ue.getTransfer(dt);X===s.FLOAT&&(at=s.RGBA32F),X===s.HALF_FLOAT&&(at=s.RGBA16F),X===s.UNSIGNED_BYTE&&(at=Ut===me?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(at=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(at=s.RGB5_A1)}return(at===s.R16F||at===s.R32F||at===s.RG16F||at===s.RG32F||at===s.RGBA16F||at===s.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function E(R,S,X){return y(R,X)===!0||R.isFramebufferTexture&&R.minFilter!==sn&&R.minFilter!==gn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function T(R){return R===sn||R===Bc||R===wo?s.NEAREST:s.LINEAR}function w(R){let S=R.target;S.removeEventListener("dispose",w),v(S),S.isVideoTexture&&h.delete(S)}function C(R){let S=R.target;S.removeEventListener("dispose",C),L(S)}function v(R){let S=n.get(R);if(S.__webglInit===void 0)return;let X=R.source,dt=d.get(X);if(dt){let lt=dt[S.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&b(R),Object.keys(dt).length===0&&d.delete(X)}n.remove(R)}function b(R){let S=n.get(R);s.deleteTexture(S.__webglTexture);let X=R.source,dt=d.get(X);delete dt[S.__cacheKey],a.memory.textures--}function L(R){let S=R.texture,X=n.get(R),dt=n.get(S);if(dt.__webglTexture!==void 0&&(s.deleteTexture(dt.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(X.__webglFramebuffer[lt]))for(let at=0;at<X.__webglFramebuffer[lt].length;at++)s.deleteFramebuffer(X.__webglFramebuffer[lt][at]);else s.deleteFramebuffer(X.__webglFramebuffer[lt]);X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer[lt])}else{if(Array.isArray(X.__webglFramebuffer))for(let lt=0;lt<X.__webglFramebuffer.length;lt++)s.deleteFramebuffer(X.__webglFramebuffer[lt]);else s.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&s.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let lt=0;lt<X.__webglColorRenderbuffer.length;lt++)X.__webglColorRenderbuffer[lt]&&s.deleteRenderbuffer(X.__webglColorRenderbuffer[lt]);X.__webglDepthRenderbuffer&&s.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let lt=0,at=S.length;lt<at;lt++){let Ut=n.get(S[lt]);Ut.__webglTexture&&(s.deleteTexture(Ut.__webglTexture),a.memory.textures--),n.remove(S[lt])}n.remove(S),n.remove(R)}let F=0;function q(){F=0}function U(){let R=F;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),F+=1,R}function G(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function $(R,S){let X=n.get(R);if(R.isVideoTexture&&Ft(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){let dt=R.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(X,R,S);return}}e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+S)}function it(R,S){let X=n.get(R);if(R.version>0&&X.__version!==R.version){Tt(X,R,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+S)}function rt(R,S){let X=n.get(R);if(R.version>0&&X.__version!==R.version){Tt(X,R,S);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+S)}function tt(R,S){let X=n.get(R);if(R.version>0&&X.__version!==R.version){Ot(X,R,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+S)}let ht={[An]:s.REPEAT,[wn]:s.CLAMP_TO_EDGE,[hl]:s.MIRRORED_REPEAT},ut={[sn]:s.NEAREST,[Bc]:s.NEAREST_MIPMAP_NEAREST,[wo]:s.NEAREST_MIPMAP_LINEAR,[gn]:s.LINEAR,[Gf]:s.LINEAR_MIPMAP_NEAREST,[sr]:s.LINEAR_MIPMAP_LINEAR},bt={[tp]:s.NEVER,[ap]:s.ALWAYS,[ep]:s.LESS,[Su]:s.LEQUAL,[np]:s.EQUAL,[rp]:s.GEQUAL,[ip]:s.GREATER,[sp]:s.NOTEQUAL};function K(R,S,X){if(X?(s.texParameteri(R,s.TEXTURE_WRAP_S,ht[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ht[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ht[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ut[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ut[S.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==wn||S.wrapT!==wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,T(S.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==sn&&S.minFilter!==gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,bt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let dt=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===sn||S.minFilter!==wo&&S.minFilter!==sr||S.type===ci&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===rr&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(R,dt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function ct(R,S){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",w));let dt=S.source,lt=d.get(dt);lt===void 0&&(lt={},d.set(dt,lt));let at=G(S);if(at!==R.__cacheKey){lt[at]===void 0&&(lt[at]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,X=!0),lt[at].usedTimes++;let Ut=lt[R.__cacheKey];Ut!==void 0&&(lt[R.__cacheKey].usedTimes--,Ut.usedTimes===0&&b(S)),R.__cacheKey=at,R.__webglTexture=lt[at].texture}return X}function Tt(R,S,X){let dt=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(dt=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(dt=s.TEXTURE_3D);let lt=ct(R,S),at=S.source;e.bindTexture(dt,R.__webglTexture,s.TEXTURE0+X);let Ut=n.get(at);if(at.version!==Ut.__version||lt===!0){e.activeTexture(s.TEXTURE0+X);let vt=ue.getPrimaries(ue.workingColorSpace),Pt=S.colorSpace===yn?null:ue.getPrimaries(S.colorSpace),kt=S.colorSpace===yn||vt===Pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let Zt=p(S)&&m(S.image)===!1,P=_(S.image,Zt,!1,i.maxTextureSize);P=Et(S,P);let B=m(P)||o,z=r.convert(S.format,S.colorSpace),H=r.convert(S.type),V=M(S.internalFormat,z,H,S.colorSpace,S.isVideoTexture);K(dt,S,B);let pt,wt=S.mipmaps,It=o&&S.isVideoTexture!==!0&&V!==vu,zt=Ut.__version===void 0||lt===!0,Lt=E(S,P,B);if(S.isDepthTexture)V=s.DEPTH_COMPONENT,o?S.type===ci?V=s.DEPTH_COMPONENT32F:S.type===li?V=s.DEPTH_COMPONENT24:S.type===Ui?V=s.DEPTH24_STENCIL8:V=s.DEPTH_COMPONENT16:S.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ni&&V===s.DEPTH_COMPONENT&&S.type!==tc&&S.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=li,H=r.convert(S.type)),S.format===Ss&&V===s.DEPTH_COMPONENT&&(V=s.DEPTH_STENCIL,S.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ui,H=r.convert(S.type))),zt&&(It?e.texStorage2D(s.TEXTURE_2D,1,V,P.width,P.height):e.texImage2D(s.TEXTURE_2D,0,V,P.width,P.height,0,z,H,null));else if(S.isDataTexture)if(wt.length>0&&B){It&&zt&&e.texStorage2D(s.TEXTURE_2D,Lt,V,wt[0].width,wt[0].height);for(let ot=0,D=wt.length;ot<D;ot++)pt=wt[ot],It?e.texSubImage2D(s.TEXTURE_2D,ot,0,0,pt.width,pt.height,z,H,pt.data):e.texImage2D(s.TEXTURE_2D,ot,V,pt.width,pt.height,0,z,H,pt.data);S.generateMipmaps=!1}else It?(zt&&e.texStorage2D(s.TEXTURE_2D,Lt,V,P.width,P.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,P.width,P.height,z,H,P.data)):e.texImage2D(s.TEXTURE_2D,0,V,P.width,P.height,0,z,H,P.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){It&&zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,V,wt[0].width,wt[0].height,P.depth);for(let ot=0,D=wt.length;ot<D;ot++)pt=wt[ot],S.format!==Tn?z!==null?It?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,pt.width,pt.height,P.depth,z,pt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ot,V,pt.width,pt.height,P.depth,0,pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?e.texSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,pt.width,pt.height,P.depth,z,H,pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ot,V,pt.width,pt.height,P.depth,0,z,H,pt.data)}else{It&&zt&&e.texStorage2D(s.TEXTURE_2D,Lt,V,wt[0].width,wt[0].height);for(let ot=0,D=wt.length;ot<D;ot++)pt=wt[ot],S.format!==Tn?z!==null?It?e.compressedTexSubImage2D(s.TEXTURE_2D,ot,0,0,pt.width,pt.height,z,pt.data):e.compressedTexImage2D(s.TEXTURE_2D,ot,V,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?e.texSubImage2D(s.TEXTURE_2D,ot,0,0,pt.width,pt.height,z,H,pt.data):e.texImage2D(s.TEXTURE_2D,ot,V,pt.width,pt.height,0,z,H,pt.data)}else if(S.isDataArrayTexture)It?(zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,V,P.width,P.height,P.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,P.width,P.height,P.depth,z,H,P.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,V,P.width,P.height,P.depth,0,z,H,P.data);else if(S.isData3DTexture)It?(zt&&e.texStorage3D(s.TEXTURE_3D,Lt,V,P.width,P.height,P.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,P.width,P.height,P.depth,z,H,P.data)):e.texImage3D(s.TEXTURE_3D,0,V,P.width,P.height,P.depth,0,z,H,P.data);else if(S.isFramebufferTexture){if(zt)if(It)e.texStorage2D(s.TEXTURE_2D,Lt,V,P.width,P.height);else{let ot=P.width,D=P.height;for(let st=0;st<Lt;st++)e.texImage2D(s.TEXTURE_2D,st,V,ot,D,0,z,H,null),ot>>=1,D>>=1}}else if(wt.length>0&&B){It&&zt&&e.texStorage2D(s.TEXTURE_2D,Lt,V,wt[0].width,wt[0].height);for(let ot=0,D=wt.length;ot<D;ot++)pt=wt[ot],It?e.texSubImage2D(s.TEXTURE_2D,ot,0,0,z,H,pt):e.texImage2D(s.TEXTURE_2D,ot,V,z,H,pt);S.generateMipmaps=!1}else It?(zt&&e.texStorage2D(s.TEXTURE_2D,Lt,V,P.width,P.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,z,H,P)):e.texImage2D(s.TEXTURE_2D,0,V,z,H,P);y(S,B)&&x(dt),Ut.__version=at.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ot(R,S,X){if(S.image.length!==6)return;let dt=ct(R,S),lt=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+X);let at=n.get(lt);if(lt.version!==at.__version||dt===!0){e.activeTexture(s.TEXTURE0+X);let Ut=ue.getPrimaries(ue.workingColorSpace),vt=S.colorSpace===yn?null:ue.getPrimaries(S.colorSpace),Pt=S.colorSpace===yn||Ut===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let kt=S.isCompressedTexture||S.image[0].isCompressedTexture,Zt=S.image[0]&&S.image[0].isDataTexture,P=[];for(let ot=0;ot<6;ot++)!kt&&!Zt?P[ot]=_(S.image[ot],!1,!0,i.maxCubemapSize):P[ot]=Zt?S.image[ot].image:S.image[ot],P[ot]=Et(S,P[ot]);let B=P[0],z=m(B)||o,H=r.convert(S.format,S.colorSpace),V=r.convert(S.type),pt=M(S.internalFormat,H,V,S.colorSpace),wt=o&&S.isVideoTexture!==!0,It=at.__version===void 0||dt===!0,zt=E(S,B,z);K(s.TEXTURE_CUBE_MAP,S,z);let Lt;if(kt){wt&&It&&e.texStorage2D(s.TEXTURE_CUBE_MAP,zt,pt,B.width,B.height);for(let ot=0;ot<6;ot++){Lt=P[ot].mipmaps;for(let D=0;D<Lt.length;D++){let st=Lt[D];S.format!==Tn?H!==null?wt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,D,0,0,st.width,st.height,H,st.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,D,pt,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,D,0,0,st.width,st.height,H,V,st.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,D,pt,st.width,st.height,0,H,V,st.data)}}}else{Lt=S.mipmaps,wt&&It&&(Lt.length>0&&zt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,zt,pt,P[0].width,P[0].height));for(let ot=0;ot<6;ot++)if(Zt){wt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,P[ot].width,P[ot].height,H,V,P[ot].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,pt,P[ot].width,P[ot].height,0,H,V,P[ot].data);for(let D=0;D<Lt.length;D++){let gt=Lt[D].image[ot].image;wt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,D+1,0,0,gt.width,gt.height,H,V,gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,D+1,pt,gt.width,gt.height,0,H,V,gt.data)}}else{wt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,H,V,P[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,pt,H,V,P[ot]);for(let D=0;D<Lt.length;D++){let st=Lt[D];wt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,D+1,0,0,H,V,st.image[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,D+1,pt,H,V,st.image[ot])}}}y(S,z)&&x(s.TEXTURE_CUBE_MAP),at.__version=lt.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Mt(R,S,X,dt,lt,at){let Ut=r.convert(X.format,X.colorSpace),vt=r.convert(X.type),Pt=M(X.internalFormat,Ut,vt,X.colorSpace);if(!n.get(S).__hasExternalTextures){let Zt=Math.max(1,S.width>>at),P=Math.max(1,S.height>>at);lt===s.TEXTURE_3D||lt===s.TEXTURE_2D_ARRAY?e.texImage3D(lt,at,Pt,Zt,P,S.depth,0,Ut,vt,null):e.texImage2D(lt,at,Pt,Zt,P,0,Ut,vt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),et(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,lt,n.get(X).__webglTexture,0,ft(S)):(lt===s.TEXTURE_2D||lt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,dt,lt,n.get(X).__webglTexture,at),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(R,S,X){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let dt=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(X||et(S)){let lt=S.depthTexture;lt&&lt.isDepthTexture&&(lt.type===ci?dt=s.DEPTH_COMPONENT32F:lt.type===li&&(dt=s.DEPTH_COMPONENT24));let at=ft(S);et(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,dt,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,at,dt,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,dt,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){let dt=ft(S);X&&et(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,s.DEPTH24_STENCIL8,S.width,S.height):et(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{let dt=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let lt=0;lt<dt.length;lt++){let at=dt[lt],Ut=r.convert(at.format,at.colorSpace),vt=r.convert(at.type),Pt=M(at.internalFormat,Ut,vt,at.colorSpace),kt=ft(S);X&&et(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,Pt,S.width,S.height):et(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt,Pt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Pt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function $t(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);let dt=n.get(S.depthTexture).__webglTexture,lt=ft(S);if(S.depthTexture.format===Ni)et(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,dt,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,dt,0);else if(S.depthTexture.format===Ss)et(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,dt,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function St(R){let S=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");$t(S.__webglFramebuffer,R)}else if(X){S.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[dt]),S.__webglDepthbuffer[dt]=s.createRenderbuffer(),Ht(S.__webglDepthbuffer[dt],R,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),Ht(S.__webglDepthbuffer,R,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(R,S,X){let dt=n.get(R);S!==void 0&&Mt(dt.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&St(R)}function N(R){let S=R.texture,X=n.get(R),dt=n.get(S);R.addEventListener("dispose",C),R.isWebGLMultipleRenderTargets!==!0&&(dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture()),dt.__version=S.version,a.memory.textures++);let lt=R.isWebGLCubeRenderTarget===!0,at=R.isWebGLMultipleRenderTargets===!0,Ut=m(R)||o;if(lt){X.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(o&&S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[vt]=[];for(let Pt=0;Pt<S.mipmaps.length;Pt++)X.__webglFramebuffer[vt][Pt]=s.createFramebuffer()}else X.__webglFramebuffer[vt]=s.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let vt=0;vt<S.mipmaps.length;vt++)X.__webglFramebuffer[vt]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(at)if(i.drawBuffers){let vt=R.texture;for(let Pt=0,kt=vt.length;Pt<kt;Pt++){let Zt=n.get(vt[Pt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&et(R)===!1){let vt=at?S:[S];X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Pt=0;Pt<vt.length;Pt++){let kt=vt[Pt];X.__webglColorRenderbuffer[Pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[Pt]);let Zt=r.convert(kt.format,kt.colorSpace),P=r.convert(kt.type),B=M(kt.internalFormat,Zt,P,kt.colorSpace,R.isXRRenderTarget===!0),z=ft(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,z,B,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,X.__webglColorRenderbuffer[Pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Ht(X.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(lt){e.bindTexture(s.TEXTURE_CUBE_MAP,dt.__webglTexture),K(s.TEXTURE_CUBE_MAP,S,Ut);for(let vt=0;vt<6;vt++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let Pt=0;Pt<S.mipmaps.length;Pt++)Mt(X.__webglFramebuffer[vt][Pt],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Pt);else Mt(X.__webglFramebuffer[vt],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);y(S,Ut)&&x(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){let vt=R.texture;for(let Pt=0,kt=vt.length;Pt<kt;Pt++){let Zt=vt[Pt],P=n.get(Zt);e.bindTexture(s.TEXTURE_2D,P.__webglTexture),K(s.TEXTURE_2D,Zt,Ut),Mt(X.__webglFramebuffer,R,Zt,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,0),y(Zt,Ut)&&x(s.TEXTURE_2D)}e.unbindTexture()}else{let vt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?vt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,dt.__webglTexture),K(vt,S,Ut),o&&S.mipmaps&&S.mipmaps.length>0)for(let Pt=0;Pt<S.mipmaps.length;Pt++)Mt(X.__webglFramebuffer[Pt],R,S,s.COLOR_ATTACHMENT0,vt,Pt);else Mt(X.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,vt,0);y(S,Ut)&&x(vt),e.unbindTexture()}R.depthBuffer&&St(R)}function yt(R){let S=m(R)||o,X=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let dt=0,lt=X.length;dt<lt;dt++){let at=X[dt];if(y(at,S)){let Ut=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,vt=n.get(at).__webglTexture;e.bindTexture(Ut,vt),x(Ut),e.unbindTexture()}}}function nt(R){if(o&&R.samples>0&&et(R)===!1){let S=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],X=R.width,dt=R.height,lt=s.COLOR_BUFFER_BIT,at=[],Ut=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=n.get(R),Pt=R.isWebGLMultipleRenderTargets===!0;if(Pt)for(let kt=0;kt<S.length;kt++)e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let kt=0;kt<S.length;kt++){at.push(s.COLOR_ATTACHMENT0+kt),R.depthBuffer&&at.push(Ut);let Zt=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if(Zt===!1&&(R.depthBuffer&&(lt|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(lt|=s.STENCIL_BUFFER_BIT)),Pt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,vt.__webglColorRenderbuffer[kt]),Zt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ut]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ut])),Pt){let P=n.get(S[kt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,P,0)}s.blitFramebuffer(0,0,X,dt,0,0,X,dt,lt,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Pt)for(let kt=0;kt<S.length;kt++){e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.RENDERBUFFER,vt.__webglColorRenderbuffer[kt]);let Zt=n.get(S[kt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.TEXTURE_2D,Zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function ft(R){return Math.min(i.maxSamples,R.samples)}function et(R){let S=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ft(R){let S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Et(R,S){let X=R.colorSpace,dt=R.format,lt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===dl||X!==Zn&&X!==yn&&(ue.getTransfer(X)===me?o===!1?t.has("EXT_sRGB")===!0&&dt===Tn?(R.format=dl,R.minFilter=gn,R.generateMipmaps=!1):S=xa.sRGBToLinear(S):(dt!==Tn||lt!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}this.allocateTextureUnit=U,this.resetTextureUnits=q,this.setTexture2D=$,this.setTexture2DArray=it,this.setTexture3D=rt,this.setTextureCube=tt,this.rebindTextures=Xt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=et}function cy(s,t,e){let n=e.isWebGL2;function i(r,a=yn){let o,l=ue.getTransfer(a);if(r===di)return s.UNSIGNED_BYTE;if(r===mu)return s.UNSIGNED_SHORT_4_4_4_4;if(r===gu)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Vf)return s.BYTE;if(r===Wf)return s.SHORT;if(r===tc)return s.UNSIGNED_SHORT;if(r===pu)return s.INT;if(r===li)return s.UNSIGNED_INT;if(r===ci)return s.FLOAT;if(r===rr)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Xf)return s.ALPHA;if(r===Tn)return s.RGBA;if(r===qf)return s.LUMINANCE;if(r===Yf)return s.LUMINANCE_ALPHA;if(r===Ni)return s.DEPTH_COMPONENT;if(r===Ss)return s.DEPTH_STENCIL;if(r===dl)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===$f)return s.RED;if(r===xu)return s.RED_INTEGER;if(r===Zf)return s.RG;if(r===yu)return s.RG_INTEGER;if(r===_u)return s.RGBA_INTEGER;if(r===To||r===Ao||r===Ro||r===Co)if(l===me)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===To)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===To)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ao)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ro)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Co)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===kc||r===Hc||r===Gc||r===Vc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===kc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vu)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Wc||r===Xc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Wc)return l===me?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Xc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===qc||r===Yc||r===$c||r===Zc||r===Jc||r===jc||r===Kc||r===Qc||r===th||r===eh||r===nh||r===ih||r===sh||r===rh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===qc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$c)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Qc)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===th)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===eh)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nh)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ih)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===sh)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rh)return l===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Po||r===ah||r===oh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Po)return l===me?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ah)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===oh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Jf||r===lh||r===ch||r===hh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Po)return o.COMPRESSED_RED_RGTC1_EXT;if(r===lh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ch)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===hh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ui?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Tl=class extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ne=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},hy={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hy)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Al=class extends fi{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=e.getContextAttributes(),m=null,p=null,y=[],x=[],M=new mt,E=null,T=new Ue;T.layers.enable(1),T.viewport=new xe;let w=new Ue;w.layers.enable(2),w.viewport=new xe;let C=[T,w],v=new Tl;v.layers.enable(1),v.layers.enable(2);let b=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ct=y[K];return ct===void 0&&(ct=new tr,y[K]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(K){let ct=y[K];return ct===void 0&&(ct=new tr,y[K]=ct),ct.getGripSpace()},this.getHand=function(K){let ct=y[K];return ct===void 0&&(ct=new tr,y[K]=ct),ct.getHandSpace()};function F(K){let ct=x.indexOf(K.inputSource);if(ct===-1)return;let Tt=y[ct];Tt!==void 0&&(Tt.update(K.inputSource,K.frame,c||a),Tt.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",U);for(let K=0;K<y.length;K++){let ct=x[K];ct!==null&&(x[K]=null,y[K].disconnect(ct))}b=null,L=null,t.setRenderTarget(m),f=null,d=null,u=null,i=null,p=null,bt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",q),i.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(M),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let ct={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,ct),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Jn(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:di,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let ct=null,Tt=null,Ot=null;_.depth&&(Ot=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=_.stencil?Ss:Ni,Tt=_.stencil?Ui:li);let Mt={colorFormat:e.RGBA8,depthFormat:Ot,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Mt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new Jn(d.textureWidth,d.textureHeight,{format:Tn,type:di,depthTexture:new Aa(d.textureWidth,d.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Ht=t.properties.get(p);Ht.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),bt.setContext(i),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function U(K){for(let ct=0;ct<K.removed.length;ct++){let Tt=K.removed[ct],Ot=x.indexOf(Tt);Ot>=0&&(x[Ot]=null,y[Ot].disconnect(Tt))}for(let ct=0;ct<K.added.length;ct++){let Tt=K.added[ct],Ot=x.indexOf(Tt);if(Ot===-1){for(let Ht=0;Ht<y.length;Ht++)if(Ht>=x.length){x.push(Tt),Ot=Ht;break}else if(x[Ht]===null){x[Ht]=Tt,Ot=Ht;break}if(Ot===-1)break}let Mt=y[Ot];Mt&&Mt.connect(Tt)}}let G=new I,$=new I;function it(K,ct,Tt){G.setFromMatrixPosition(ct.matrixWorld),$.setFromMatrixPosition(Tt.matrixWorld);let Ot=G.distanceTo($),Mt=ct.projectionMatrix.elements,Ht=Tt.projectionMatrix.elements,$t=Mt[14]/(Mt[10]-1),St=Mt[14]/(Mt[10]+1),Xt=(Mt[9]+1)/Mt[5],N=(Mt[9]-1)/Mt[5],yt=(Mt[8]-1)/Mt[0],nt=(Ht[8]+1)/Ht[0],ft=$t*yt,et=$t*nt,Ft=Ot/(-yt+nt),Et=Ft*-yt;ct.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Et),K.translateZ(Ft),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();let R=$t+Ft,S=St+Ft,X=ft-Et,dt=et+(Ot-Et),lt=Xt*St/S*R,at=N*St/S*R;K.projectionMatrix.makePerspective(X,dt,lt,at,R,S),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function rt(K,ct){ct===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ct.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;v.near=w.near=T.near=K.near,v.far=w.far=T.far=K.far,(b!==v.near||L!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,L=v.far);let ct=K.parent,Tt=v.cameras;rt(v,ct);for(let Ot=0;Ot<Tt.length;Ot++)rt(Tt[Ot],ct);Tt.length===2?it(v,T,w):v.projectionMatrix.copy(T.projectionMatrix),tt(K,v,ct)};function tt(K,ct,Tt){Tt===null?K.matrix.copy(ct.matrixWorld):(K.matrix.copy(Tt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ct.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ct.projectionMatrix),K.projectionMatrixInverse.copy(ct.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ar*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)};let ht=null;function ut(K,ct){if(h=ct.getViewerPose(c||a),g=ct,h!==null){let Tt=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let Ot=!1;Tt.length!==v.cameras.length&&(v.cameras.length=0,Ot=!0);for(let Mt=0;Mt<Tt.length;Mt++){let Ht=Tt[Mt],$t=null;if(f!==null)$t=f.getViewport(Ht);else{let Xt=u.getViewSubImage(d,Ht);$t=Xt.viewport,Mt===0&&(t.setRenderTargetTextures(p,Xt.colorTexture,d.ignoreDepthValues?void 0:Xt.depthStencilTexture),t.setRenderTarget(p))}let St=C[Mt];St===void 0&&(St=new Ue,St.layers.enable(Mt),St.viewport=new xe,C[Mt]=St),St.matrix.fromArray(Ht.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(Ht.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set($t.x,$t.y,$t.width,$t.height),Mt===0&&(v.matrix.copy(St.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Ot===!0&&v.cameras.push(St)}}for(let Tt=0;Tt<y.length;Tt++){let Ot=x[Tt],Mt=y[Tt];Ot!==null&&Mt!==void 0&&Mt.update(Ot,ct,c||a)}ht&&ht(K,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),g=null}let bt=new Au;bt.setAnimationLoop(ut),this.setAnimationLoop=function(K){ht=K},this.dispose=function(){}}};function uy(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Tu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dy(s,t,e,n){let i={},r={},a=[],o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){let M=x.program;n.uniformBlockBinding(y,M)}function c(y,x){let M=i[y.id];M===void 0&&(g(y),M=h(y),i[y.id]=M,y.addEventListener("dispose",m));let E=x.program;n.updateUBOMapping(y,E);let T=t.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){let x=u();y.__bindingPointIndex=x;let M=s.createBuffer(),E=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,E,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,M),M}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=i[y.id],M=y.uniforms,E=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,w=M.length;T<w;T++){let C=Array.isArray(M[T])?M[T]:[M[T]];for(let v=0,b=C.length;v<b;v++){let L=C[v];if(f(L,T,v,E)===!0){let F=L.__offset,q=Array.isArray(L.value)?L.value:[L.value],U=0;for(let G=0;G<q.length;G++){let $=q[G],it=_($);typeof $=="number"||typeof $=="boolean"?(L.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,F+U,L.__data)):$.isMatrix3?(L.__data[0]=$.elements[0],L.__data[1]=$.elements[1],L.__data[2]=$.elements[2],L.__data[3]=0,L.__data[4]=$.elements[3],L.__data[5]=$.elements[4],L.__data[6]=$.elements[5],L.__data[7]=0,L.__data[8]=$.elements[6],L.__data[9]=$.elements[7],L.__data[10]=$.elements[8],L.__data[11]=0):($.toArray(L.__data,U),U+=it.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,x,M,E){let T=y.value,w=x+"_"+M;if(E[w]===void 0)return typeof T=="number"||typeof T=="boolean"?E[w]=T:E[w]=T.clone(),!0;{let C=E[w];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return E[w]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(y){let x=y.uniforms,M=0,E=16;for(let w=0,C=x.length;w<C;w++){let v=Array.isArray(x[w])?x[w]:[x[w]];for(let b=0,L=v.length;b<L;b++){let F=v[b],q=Array.isArray(F.value)?F.value:[F.value];for(let U=0,G=q.length;U<G;U++){let $=q[U],it=_($),rt=M%E;rt!==0&&E-rt<it.boundary&&(M+=E-rt),F.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=it.storage}}}let T=M%E;return T>0&&(M+=E-T),y.__size=M,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(let y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}var zi=class{constructor(t={}){let{canvas:e=Mp(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Me,this._useLegacyLights=!1,this.toneMapping=ui,this.toneMappingExposure=1;let x=this,M=!1,E=0,T=0,w=null,C=-1,v=null,b=new xe,L=new xe,F=null,q=new Yt(0),U=0,G=e.width,$=e.height,it=1,rt=null,tt=null,ht=new xe(0,0,G,$),ut=new xe(0,0,G,$),bt=!1,K=new cr,ct=!1,Tt=!1,Ot=null,Mt=new we,Ht=new mt,$t=new I,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xt(){return w===null?it:1}let N=n;function yt(A,W){for(let J=0;J<A.length;J++){let j=A[J],Z=e.getContext(j,W);if(Z!==null)return Z}return null}try{let A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",st,!1),N===null){let W=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&W.shift(),N=yt(W,A),N===null)throw yt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let nt,ft,et,Ft,Et,R,S,X,dt,lt,at,Ut,vt,Pt,kt,Zt,P,B,z,H,V,pt,wt,It;function zt(){nt=new Lg(N),ft=new wg(N,nt,t),nt.init(ft),pt=new cy(N,nt,ft),et=new oy(N,nt,ft),Ft=new Ug(N),Et=new Zx,R=new ly(N,nt,et,Et,ft,pt,Ft),S=new Ag(x),X=new Pg(x),dt=new Gp(N,ft),wt=new Sg(N,nt,dt,ft),lt=new Ig(N,dt,Ft,wt),at=new zg(N,lt,dt,Ft),z=new Fg(N,ft,R),Zt=new Tg(Et),Ut=new $x(x,S,X,nt,ft,wt,Zt),vt=new uy(x,Et),Pt=new jx,kt=new iy(nt,ft),B=new bg(x,S,X,et,at,d,l),P=new ay(x,at,ft),It=new dy(N,Ft,ft,et),H=new Eg(N,nt,Ft,ft),V=new Dg(N,nt,Ft,ft),Ft.programs=Ut.programs,x.capabilities=ft,x.extensions=nt,x.properties=Et,x.renderLists=Pt,x.shadowMap=P,x.state=et,x.info=Ft}zt();let Lt=new Al(x,N);this.xr=Lt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let A=nt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=nt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(A){A!==void 0&&(it=A,this.setSize(G,$,!1))},this.getSize=function(A){return A.set(G,$)},this.setSize=function(A,W,J=!0){if(Lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,$=W,e.width=Math.floor(A*it),e.height=Math.floor(W*it),J===!0&&(e.style.width=A+"px",e.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(G*it,$*it).floor()},this.setDrawingBufferSize=function(A,W,J){G=A,$=W,it=J,e.width=Math.floor(A*J),e.height=Math.floor(W*J),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(ht)},this.setViewport=function(A,W,J,j){A.isVector4?ht.set(A.x,A.y,A.z,A.w):ht.set(A,W,J,j),et.viewport(b.copy(ht).multiplyScalar(it).floor())},this.getScissor=function(A){return A.copy(ut)},this.setScissor=function(A,W,J,j){A.isVector4?ut.set(A.x,A.y,A.z,A.w):ut.set(A,W,J,j),et.scissor(L.copy(ut).multiplyScalar(it).floor())},this.getScissorTest=function(){return bt},this.setScissorTest=function(A){et.setScissorTest(bt=A)},this.setOpaqueSort=function(A){rt=A},this.setTransparentSort=function(A){tt=A},this.getClearColor=function(A){return A.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor.apply(B,arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha.apply(B,arguments)},this.clear=function(A=!0,W=!0,J=!0){let j=0;if(A){let Z=!1;if(w!==null){let Ct=w.texture.format;Z=Ct===_u||Ct===yu||Ct===xu}if(Z){let Ct=w.texture.type,Bt=Ct===di||Ct===li||Ct===tc||Ct===Ui||Ct===mu||Ct===gu,Gt=B.getClearColor(),qt=B.getClearAlpha(),Qt=Gt.r,Jt=Gt.g,jt=Gt.b;Bt?(f[0]=Qt,f[1]=Jt,f[2]=jt,f[3]=qt,N.clearBufferuiv(N.COLOR,0,f)):(g[0]=Qt,g[1]=Jt,g[2]=jt,g[3]=qt,N.clearBufferiv(N.COLOR,0,g))}else j|=N.COLOR_BUFFER_BIT}W&&(j|=N.DEPTH_BUFFER_BIT),J&&(j|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",st,!1),Pt.dispose(),kt.dispose(),Et.dispose(),S.dispose(),X.dispose(),at.dispose(),wt.dispose(),It.dispose(),Ut.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",le),Lt.removeEventListener("sessionend",ie),Ot&&(Ot.dispose(),Ot=null),Se.stop()};function ot(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let A=Ft.autoReset,W=P.enabled,J=P.autoUpdate,j=P.needsUpdate,Z=P.type;zt(),Ft.autoReset=A,P.enabled=W,P.autoUpdate=J,P.needsUpdate=j,P.type=Z}function st(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function gt(A){let W=A.target;W.removeEventListener("dispose",gt),Dt(W)}function Dt(A){Nt(A),Et.remove(A)}function Nt(A){let W=Et.get(A).programs;W!==void 0&&(W.forEach(function(J){Ut.releaseProgram(J)}),A.isShaderMaterial&&Ut.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,J,j,Z,Ct){W===null&&(W=St);let Bt=Z.isMesh&&Z.matrixWorld.determinant()<0,Gt=bi(A,W,J,j,Z);et.setMaterial(j,Bt);let qt=J.index,Qt=1;if(j.wireframe===!0){if(qt=lt.getWireframeAttribute(J),qt===void 0)return;Qt=2}let Jt=J.drawRange,jt=J.attributes.position,Re=Jt.start*Qt,an=(Jt.start+Jt.count)*Qt;Ct!==null&&(Re=Math.max(Re,Ct.start*Qt),an=Math.min(an,(Ct.start+Ct.count)*Qt)),qt!==null?(Re=Math.max(Re,0),an=Math.min(an,qt.count)):jt!=null&&(Re=Math.max(Re,0),an=Math.min(an,jt.count));let We=an-Re;if(We<0||We===1/0)return;wt.setup(Z,j,Gt,J,qt);let kn,ve=H;if(qt!==null&&(kn=dt.get(qt),ve=V,ve.setIndex(kn)),Z.isMesh)j.wireframe===!0?(et.setLineWidth(j.wireframeLinewidth*Xt()),ve.setMode(N.LINES)):ve.setMode(N.TRIANGLES);else if(Z.isLine){let te=j.linewidth;te===void 0&&(te=1),et.setLineWidth(te*Xt()),Z.isLineSegments?ve.setMode(N.LINES):Z.isLineLoop?ve.setMode(N.LINE_LOOP):ve.setMode(N.LINE_STRIP)}else Z.isPoints?ve.setMode(N.POINTS):Z.isSprite&&ve.setMode(N.TRIANGLES);if(Z.isBatchedMesh)ve.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)ve.renderInstances(Re,We,Z.count);else if(J.isInstancedBufferGeometry){let te=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Mo=Math.min(J.instanceCount,te);ve.renderInstances(Re,We,Mo)}else ve.render(Re,We)};function Rt(A,W,J){A.transparent===!0&&A.side===xn&&A.forceSinglePass===!1?(A.side=je,A.needsUpdate=!0,Ge(A,W,J),A.side=On,A.needsUpdate=!0,Ge(A,W,J),A.side=xn):Ge(A,W,J)}this.compile=function(A,W,J=null){J===null&&(J=A),m=kt.get(J),m.init(),y.push(m),J.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),A!==J&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights(x._useLegacyLights);let j=new Set;return A.traverse(function(Z){let Ct=Z.material;if(Ct)if(Array.isArray(Ct))for(let Bt=0;Bt<Ct.length;Bt++){let Gt=Ct[Bt];Rt(Gt,J,Z),j.add(Gt)}else Rt(Ct,J,Z),j.add(Ct)}),y.pop(),m=null,j},this.compileAsync=function(A,W,J=null){let j=this.compile(A,W,J);return new Promise(Z=>{function Ct(){if(j.forEach(function(Bt){Et.get(Bt).currentProgram.isReady()&&j.delete(Bt)}),j.size===0){Z(A);return}setTimeout(Ct,10)}nt.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Wt=null;function se(A){Wt&&Wt(A)}function le(){Se.stop()}function ie(){Se.start()}let Se=new Au;Se.setAnimationLoop(se),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(A){Wt=A,Lt.setAnimationLoop(A),A===null?Se.stop():Se.start()},Lt.addEventListener("sessionstart",le),Lt.addEventListener("sessionend",ie),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(W),W=Lt.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,W,w),m=kt.get(A,y.length),m.init(),y.push(m),Mt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),K.setFromProjectionMatrix(Mt),Tt=this.localClippingEnabled,ct=Zt.init(this.clippingPlanes,Tt),_=Pt.get(A,p.length),_.init(),p.push(_),fn(A,W,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(rt,tt),this.info.render.frame++,ct===!0&&Zt.beginShadows();let J=m.state.shadowsArray;if(P.render(J,A,W),ct===!0&&Zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),B.render(_,A),m.setupLights(x._useLegacyLights),W.isArrayCamera){let j=W.cameras;for(let Z=0,Ct=j.length;Z<Ct;Z++){let Bt=j[Z];Pr(_,A,Bt,Bt.viewport)}}else Pr(_,A,W);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(x,A,W),wt.resetDefaultState(),C=-1,v=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function fn(A,W,J,j){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){j&&$t.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Mt);let Bt=at.update(A),Gt=A.material;Gt.visible&&_.push(A,Bt,Gt,J,$t.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){let Bt=at.update(A),Gt=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),$t.copy(A.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),$t.copy(Bt.boundingSphere.center)),$t.applyMatrix4(A.matrixWorld).applyMatrix4(Mt)),Array.isArray(Gt)){let qt=Bt.groups;for(let Qt=0,Jt=qt.length;Qt<Jt;Qt++){let jt=qt[Qt],Re=Gt[jt.materialIndex];Re&&Re.visible&&_.push(A,Bt,Re,J,$t.z,jt)}}else Gt.visible&&_.push(A,Bt,Gt,J,$t.z,null)}}let Ct=A.children;for(let Bt=0,Gt=Ct.length;Bt<Gt;Bt++)fn(Ct[Bt],W,J,j)}function Pr(A,W,J,j){let Z=A.opaque,Ct=A.transmissive,Bt=A.transparent;m.setupLightsView(J),ct===!0&&Zt.setGlobalState(x.clippingPlanes,J),Ct.length>0&&ce(Z,Ct,W,J),j&&et.viewport(b.copy(j)),Z.length>0&&Le(Z,W,J),Ct.length>0&&Le(Ct,W,J),Bt.length>0&&Le(Bt,W,J),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function ce(A,W,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;let Ct=ft.isWebGL2;Ot===null&&(Ot=new Jn(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")?rr:di,minFilter:sr,samples:Ct?4:0})),x.getDrawingBufferSize(Ht),Ct?Ot.setSize(Ht.x,Ht.y):Ot.setSize(ma(Ht.x),ma(Ht.y));let Bt=x.getRenderTarget();x.setRenderTarget(Ot),x.getClearColor(q),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear();let Gt=x.toneMapping;x.toneMapping=ui,Le(A,J,j),R.updateMultisampleRenderTarget(Ot),R.updateRenderTargetMipmap(Ot);let qt=!1;for(let Qt=0,Jt=W.length;Qt<Jt;Qt++){let jt=W[Qt],Re=jt.object,an=jt.geometry,We=jt.material,kn=jt.group;if(We.side===xn&&Re.layers.test(j.layers)){let ve=We.side;We.side=je,We.needsUpdate=!0,rn(Re,J,j,an,We,kn),We.side=ve,We.needsUpdate=!0,qt=!0}}qt===!0&&(R.updateMultisampleRenderTarget(Ot),R.updateRenderTargetMipmap(Ot)),x.setRenderTarget(Bt),x.setClearColor(q,U),x.toneMapping=Gt}function Le(A,W,J){let j=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,Ct=A.length;Z<Ct;Z++){let Bt=A[Z],Gt=Bt.object,qt=Bt.geometry,Qt=j===null?Bt.material:j,Jt=Bt.group;Gt.layers.test(J.layers)&&rn(Gt,W,J,qt,Qt,Jt)}}function rn(A,W,J,j,Z,Ct){A.onBeforeRender(x,W,J,j,Z,Ct),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(x,W,J,j,A,Ct),Z.transparent===!0&&Z.side===xn&&Z.forceSinglePass===!1?(Z.side=je,Z.needsUpdate=!0,x.renderBufferDirect(J,W,j,Z,A,Ct),Z.side=On,Z.needsUpdate=!0,x.renderBufferDirect(J,W,j,Z,A,Ct),Z.side=xn):x.renderBufferDirect(J,W,j,Z,A,Ct),A.onAfterRender(x,W,J,j,Z,Ct)}function Ge(A,W,J){W.isScene!==!0&&(W=St);let j=Et.get(A),Z=m.state.lights,Ct=m.state.shadowsArray,Bt=Z.state.version,Gt=Ut.getParameters(A,Z.state,Ct,W,J),qt=Ut.getProgramCacheKey(Gt),Qt=j.programs;j.environment=A.isMeshStandardMaterial?W.environment:null,j.fog=W.fog,j.envMap=(A.isMeshStandardMaterial?X:S).get(A.envMap||j.environment),Qt===void 0&&(A.addEventListener("dispose",gt),Qt=new Map,j.programs=Qt);let Jt=Qt.get(qt);if(Jt!==void 0){if(j.currentProgram===Jt&&j.lightsStateVersion===Bt)return Ve(A,Gt),Jt}else Gt.uniforms=Ut.getUniforms(A),A.onBuild(J,Gt,x),A.onBeforeCompile(Gt,x),Jt=Ut.acquireProgram(Gt,qt),Qt.set(qt,Jt),j.uniforms=Gt.uniforms;let jt=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(jt.clippingPlanes=Zt.uniform),Ve(A,Gt),j.needsLights=Si(A),j.lightsStateVersion=Bt,j.needsLights&&(jt.ambientLightColor.value=Z.state.ambient,jt.lightProbe.value=Z.state.probe,jt.directionalLights.value=Z.state.directional,jt.directionalLightShadows.value=Z.state.directionalShadow,jt.spotLights.value=Z.state.spot,jt.spotLightShadows.value=Z.state.spotShadow,jt.rectAreaLights.value=Z.state.rectArea,jt.ltc_1.value=Z.state.rectAreaLTC1,jt.ltc_2.value=Z.state.rectAreaLTC2,jt.pointLights.value=Z.state.point,jt.pointLightShadows.value=Z.state.pointShadow,jt.hemisphereLights.value=Z.state.hemi,jt.directionalShadowMap.value=Z.state.directionalShadowMap,jt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,jt.spotShadowMap.value=Z.state.spotShadowMap,jt.spotLightMatrix.value=Z.state.spotLightMatrix,jt.spotLightMap.value=Z.state.spotLightMap,jt.pointShadowMap.value=Z.state.pointShadowMap,jt.pointShadowMatrix.value=Z.state.pointShadowMatrix),j.currentProgram=Jt,j.uniformsList=null,Jt}function In(A){if(A.uniformsList===null){let W=A.currentProgram.getUniforms();A.uniformsList=vs.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Ve(A,W){let J=Et.get(A);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function bi(A,W,J,j,Z){W.isScene!==!0&&(W=St),R.resetTextureUnits();let Ct=W.fog,Bt=j.isMeshStandardMaterial?W.environment:null,Gt=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Zn,qt=(j.isMeshStandardMaterial?X:S).get(j.envMap||Bt),Qt=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Jt=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),jt=!!J.morphAttributes.position,Re=!!J.morphAttributes.normal,an=!!J.morphAttributes.color,We=ui;j.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(We=x.toneMapping);let kn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ve=kn!==void 0?kn.length:0,te=Et.get(j),Mo=m.state.lights;if(ct===!0&&(Tt===!0||A!==v)){let pn=A===v&&j.id===C;Zt.setState(j,A,pn)}let Ee=!1;j.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Mo.state.version||te.outputColorSpace!==Gt||Z.isBatchedMesh&&te.batching===!1||!Z.isBatchedMesh&&te.batching===!0||Z.isInstancedMesh&&te.instancing===!1||!Z.isInstancedMesh&&te.instancing===!0||Z.isSkinnedMesh&&te.skinning===!1||!Z.isSkinnedMesh&&te.skinning===!0||Z.isInstancedMesh&&te.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&te.instancingColor===!1&&Z.instanceColor!==null||te.envMap!==qt||j.fog===!0&&te.fog!==Ct||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Zt.numPlanes||te.numIntersection!==Zt.numIntersection)||te.vertexAlphas!==Qt||te.vertexTangents!==Jt||te.morphTargets!==jt||te.morphNormals!==Re||te.morphColors!==an||te.toneMapping!==We||ft.isWebGL2===!0&&te.morphTargetsCount!==ve)&&(Ee=!0):(Ee=!0,te.__version=j.version);let Ei=te.currentProgram;Ee===!0&&(Ei=Ge(j,W,Z));let Lc=!1,Gs=!1,bo=!1,$e=Ei.getUniforms(),wi=te.uniforms;if(et.useProgram(Ei.program)&&(Lc=!0,Gs=!0,bo=!0),j.id!==C&&(C=j.id,Gs=!0),Lc||v!==A){$e.setValue(N,"projectionMatrix",A.projectionMatrix),$e.setValue(N,"viewMatrix",A.matrixWorldInverse);let pn=$e.map.cameraPosition;pn!==void 0&&pn.setValue(N,$t.setFromMatrixPosition(A.matrixWorld)),ft.logarithmicDepthBuffer&&$e.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&$e.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),v!==A&&(v=A,Gs=!0,bo=!0)}if(Z.isSkinnedMesh){$e.setOptional(N,Z,"bindMatrix"),$e.setOptional(N,Z,"bindMatrixInverse");let pn=Z.skeleton;pn&&(ft.floatVertexTextures?(pn.boneTexture===null&&pn.computeBoneTexture(),$e.setValue(N,"boneTexture",pn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&($e.setOptional(N,Z,"batchingTexture"),$e.setValue(N,"batchingTexture",Z._matricesTexture,R));let So=J.morphAttributes;if((So.position!==void 0||So.normal!==void 0||So.color!==void 0&&ft.isWebGL2===!0)&&z.update(Z,J,Ei),(Gs||te.receiveShadow!==Z.receiveShadow)&&(te.receiveShadow=Z.receiveShadow,$e.setValue(N,"receiveShadow",Z.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(wi.envMap.value=qt,wi.flipEnvMap.value=qt.isCubeTexture&&qt.isRenderTargetTexture===!1?-1:1),Gs&&($e.setValue(N,"toneMappingExposure",x.toneMappingExposure),te.needsLights&&Bn(wi,bo),Ct&&j.fog===!0&&vt.refreshFogUniforms(wi,Ct),vt.refreshMaterialUniforms(wi,j,it,$,Ot),vs.upload(N,In(te),wi,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(vs.upload(N,In(te),wi,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&$e.setValue(N,"center",Z.center),$e.setValue(N,"modelViewMatrix",Z.modelViewMatrix),$e.setValue(N,"normalMatrix",Z.normalMatrix),$e.setValue(N,"modelMatrix",Z.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let pn=j.uniformsGroups;for(let Eo=0,of=pn.length;Eo<of;Eo++)if(ft.isWebGL2){let Ic=pn[Eo];It.update(Ic,Ei),It.bind(Ic,Ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ei}function Bn(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Si(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,W,J){Et.get(A.texture).__webglTexture=W,Et.get(A.depthTexture).__webglTexture=J;let j=Et.get(A);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=J===void 0,j.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,W){let J=Et.get(A);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,J=0){w=A,E=W,T=J;let j=!0,Z=null,Ct=!1,Bt=!1;if(A){let qt=Et.get(A);qt.__useDefaultFramebuffer!==void 0?(et.bindFramebuffer(N.FRAMEBUFFER,null),j=!1):qt.__webglFramebuffer===void 0?R.setupRenderTarget(A):qt.__hasExternalTextures&&R.rebindTextures(A,Et.get(A.texture).__webglTexture,Et.get(A.depthTexture).__webglTexture);let Qt=A.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Bt=!0);let Jt=Et.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Jt[W])?Z=Jt[W][J]:Z=Jt[W],Ct=!0):ft.isWebGL2&&A.samples>0&&R.useMultisampledRTT(A)===!1?Z=Et.get(A).__webglMultisampledFramebuffer:Array.isArray(Jt)?Z=Jt[J]:Z=Jt,b.copy(A.viewport),L.copy(A.scissor),F=A.scissorTest}else b.copy(ht).multiplyScalar(it).floor(),L.copy(ut).multiplyScalar(it).floor(),F=bt;if(et.bindFramebuffer(N.FRAMEBUFFER,Z)&&ft.drawBuffers&&j&&et.drawBuffers(A,Z),et.viewport(b),et.scissor(L),et.setScissorTest(F),Ct){let qt=Et.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+W,qt.__webglTexture,J)}else if(Bt){let qt=Et.get(A.texture),Qt=W||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,qt.__webglTexture,J||0,Qt)}C=-1},this.readRenderTargetPixels=function(A,W,J,j,Z,Ct,Bt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=Et.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Bt!==void 0&&(Gt=Gt[Bt]),Gt){et.bindFramebuffer(N.FRAMEBUFFER,Gt);try{let qt=A.texture,Qt=qt.format,Jt=qt.type;if(Qt!==Tn&&pt.convert(Qt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let jt=Jt===rr&&(nt.has("EXT_color_buffer_half_float")||ft.isWebGL2&&nt.has("EXT_color_buffer_float"));if(Jt!==di&&pt.convert(Jt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Jt===ci&&(ft.isWebGL2||nt.has("OES_texture_float")||nt.has("WEBGL_color_buffer_float")))&&!jt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-j&&J>=0&&J<=A.height-Z&&N.readPixels(W,J,j,Z,pt.convert(Qt),pt.convert(Jt),Ct)}finally{let qt=w!==null?Et.get(w).__webglFramebuffer:null;et.bindFramebuffer(N.FRAMEBUFFER,qt)}}},this.copyFramebufferToTexture=function(A,W,J=0){let j=Math.pow(2,-J),Z=Math.floor(W.image.width*j),Ct=Math.floor(W.image.height*j);R.setTexture2D(W,0),N.copyTexSubImage2D(N.TEXTURE_2D,J,0,0,A.x,A.y,Z,Ct),et.unbindTexture()},this.copyTextureToTexture=function(A,W,J,j=0){let Z=W.image.width,Ct=W.image.height,Bt=pt.convert(J.format),Gt=pt.convert(J.type);R.setTexture2D(J,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,J.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,J.unpackAlignment),W.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,j,A.x,A.y,Z,Ct,Bt,Gt,W.image.data):W.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,j,A.x,A.y,W.mipmaps[0].width,W.mipmaps[0].height,Bt,W.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,j,A.x,A.y,Bt,Gt,W.image),j===0&&J.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),et.unbindTexture()},this.copyTextureToTexture3D=function(A,W,J,j,Z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ct=A.max.x-A.min.x+1,Bt=A.max.y-A.min.y+1,Gt=A.max.z-A.min.z+1,qt=pt.convert(j.format),Qt=pt.convert(j.type),Jt;if(j.isData3DTexture)R.setTexture3D(j,0),Jt=N.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)R.setTexture2DArray(j,0),Jt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,j.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,j.unpackAlignment);let jt=N.getParameter(N.UNPACK_ROW_LENGTH),Re=N.getParameter(N.UNPACK_IMAGE_HEIGHT),an=N.getParameter(N.UNPACK_SKIP_PIXELS),We=N.getParameter(N.UNPACK_SKIP_ROWS),kn=N.getParameter(N.UNPACK_SKIP_IMAGES),ve=J.isCompressedTexture?J.mipmaps[Z]:J.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ve.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ve.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,A.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,A.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,A.min.z),J.isDataTexture||J.isData3DTexture?N.texSubImage3D(Jt,Z,W.x,W.y,W.z,Ct,Bt,Gt,qt,Qt,ve.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Jt,Z,W.x,W.y,W.z,Ct,Bt,Gt,qt,ve.data)):N.texSubImage3D(Jt,Z,W.x,W.y,W.z,Ct,Bt,Gt,qt,Qt,ve),N.pixelStorei(N.UNPACK_ROW_LENGTH,jt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Re),N.pixelStorei(N.UNPACK_SKIP_PIXELS,an),N.pixelStorei(N.UNPACK_SKIP_ROWS,We),N.pixelStorei(N.UNPACK_SKIP_IMAGES,kn),Z===0&&j.generateMipmaps&&N.generateMipmap(Jt),et.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),et.unbindTexture()},this.resetState=function(){E=0,T=0,w=null,et.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ec?"display-p3":"srgb",e.unpackColorSpace=ue.workingColorSpace===Ha?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Me?Oi:Mu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Oi?Me:Zn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Rl=class extends zi{};Rl.prototype.isWebGL1Renderer=!0;var Ra=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Yt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ts=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Cl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ul,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},en=new I,Ca=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},un=class extends jn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},us,Ys=new I,ds=new I,fs=new I,ps=new mt,$s=new mt,Du=new we,Qr=new I,Zs=new I,ta=new I,tu=new mt,tl=new mt,eu=new mt,vn=class extends Ye{constructor(t=new un){if(super(),this.isSprite=!0,this.type="Sprite",us===void 0){us=new ye;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Cl(e,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new Ca(n,3,0,!1)),us.setAttribute("uv",new Ca(n,2,3,!1))}this.geometry=us,this.material=t,this.center=new mt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ds.setFromMatrixScale(this.matrixWorld),Du.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ds.multiplyScalar(-fs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;ea(Qr.set(-.5,-.5,0),fs,a,ds,i,r),ea(Zs.set(.5,-.5,0),fs,a,ds,i,r),ea(ta.set(.5,.5,0),fs,a,ds,i,r),tu.set(0,0),tl.set(1,0),eu.set(1,1);let o=t.ray.intersectTriangle(Qr,Zs,ta,!1,Ys);if(o===null&&(ea(Zs.set(-.5,.5,0),fs,a,ds,i,r),tl.set(0,1),o=t.ray.intersectTriangle(Qr,ta,Zs,!1,Ys),o===null))return;let l=t.ray.origin.distanceTo(Ys);l<t.near||l>t.far||e.push({distance:l,point:Ys.clone(),uv:Di.getInterpolation(Ys,Qr,Zs,ta,tu,tl,eu,new mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ea(s,t,e,n,i,r){ps.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?($s.x=r*ps.x-i*ps.y,$s.y=i*ps.x+r*ps.y):$s.copy(ps),s.copy(t),s.x+=$s.x,s.y+=$s.y,s.applyMatrix4(Du)}var Qn=class extends jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},nu=new we,Pl=new or,na=new Es,ia=new I,gi=class extends Ye{constructor(t=new ye,e=new Qn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(i),na.radius+=r,t.ray.intersectsSphere(na)===!1)return;nu.copy(i).invert(),Pl.copy(t.ray).applyMatrix4(nu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){let m=c.getX(g);ia.fromBufferAttribute(u,m),iu(ia,m,l,i,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)ia.fromBufferAttribute(u,g),iu(ia,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function iu(s,t,e,n,i,r,a){let o=Pl.distanceSqToPoint(s);if(o<e){let l=new I;Pl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}var Fn=class extends _n{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new mt:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new I,i=[],r=[],a=[],o=new I,l=new we;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(qe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(qe(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},hr=class extends Mn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let n=e||new mt,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ll=class extends hr{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function sc(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var sa=new I,el=new sc,nl=new sc,il=new sc,Il=class extends Mn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(sa.subVectors(i[0],i[1]).add(i[0]),c=sa);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(sa.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=sa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),el.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),nl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),il.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(el.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),nl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),il.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(el.calc(l),nl.calc(l),il.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function su(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function fy(s,t){let e=1-s;return e*e*t}function py(s,t){return 2*(1-s)*s*t}function my(s,t){return s*s*t}function er(s,t,e,n){return fy(s,t)+py(s,e)+my(s,n)}function gy(s,t){let e=1-s;return e*e*e*t}function xy(s,t){let e=1-s;return 3*e*e*s*t}function yy(s,t){return 3*(1-s)*s*s*t}function _y(s,t){return s*s*s*t}function nr(s,t,e,n,i){return gy(s,t)+xy(s,e)+yy(s,n)+_y(s,i)}var Pa=class extends Mn{constructor(t=new mt,e=new mt,n=new mt,i=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new mt){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(nr(t,i.x,r.x,a.x,o.x),nr(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Dl=class extends Mn{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(nr(t,i.x,r.x,a.x,o.x),nr(t,i.y,r.y,a.y,o.y),nr(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},La=class extends Mn{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ul=class extends Mn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ia=class extends Mn{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(er(t,i.x,r.x,a.x),er(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nl=class extends Mn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(er(t,i.x,r.x,a.x),er(t,i.y,r.y,a.y),er(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Da=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(su(o,l.x,c.x,h.x,u.x),su(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new mt().fromArray(i))}return this}},Ol=Object.freeze({__proto__:null,ArcCurve:Ll,CatmullRomCurve3:Il,CubicBezierCurve:Pa,CubicBezierCurve3:Dl,EllipseCurve:hr,LineCurve:La,LineCurve3:Ul,QuadraticBezierCurve:Ia,QuadraticBezierCurve3:Nl,SplineCurve:Da}),Fl=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ol[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Ol[i.type]().fromJSON(i))}return this}},ur=class extends Fl{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new La(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Ia(this.currentPoint.clone(),new mt(t,e),new mt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new Pa(this.currentPoint.clone(),new mt(t,e),new mt(n,i),new mt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Da(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){let c=new hr(t,e,n,i,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},dr=class s extends ye{constructor(t=[new mt(0,-.5),new mt(.5,0),new mt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=qe(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new I,d=new mt,f=new I,g=new I,_=new I,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let y=0;y<=e;y++){let x=n+y*h*i,M=Math.sin(x),E=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*M,u.y=t[T].y,u.z=t[T].x*E,a.push(u.x,u.y,u.z),d.x=y/e,d.y=T/(t.length-1),o.push(d.x,d.y);let w=l[3*T+0]*M,C=l[3*T+1],v=l[3*T+0]*E;c.push(w,C,v)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){let M=x+y*t.length,E=M,T=M+t.length,w=M+t.length+1,C=M+1;r.push(E,T,C),r.push(w,C,T)}this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("uv",new re(o,2)),this.setAttribute("normal",new re(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},Ua=class s extends dr{constructor(t=1,e=1,n=4,i=8){let r=new ur;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}};var Bi=class s extends ye{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;y(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(f,2));function y(){let M=new I,E=new I,T=0,w=(e-t)/n;for(let C=0;C<=r;C++){let v=[],b=C/r,L=b*(e-t)+t;for(let F=0;F<=i;F++){let q=F/i,U=q*l+o,G=Math.sin(U),$=Math.cos(U);E.x=L*G,E.y=-b*n+m,E.z=L*$,u.push(E.x,E.y,E.z),M.set(G,w,$).normalize(),d.push(M.x,M.y,M.z),f.push(q,1-b),v.push(g++)}_.push(v)}for(let C=0;C<i;C++)for(let v=0;v<r;v++){let b=_[v][C],L=_[v+1][C],F=_[v+1][C+1],q=_[v][C+1];h.push(b,L,q),h.push(L,F,q),T+=6}c.addGroup(p,T,0),p+=T}function x(M){let E=g,T=new mt,w=new I,C=0,v=M===!0?t:e,b=M===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;let L=g;for(let F=0;F<=i;F++){let U=F/i*l+o,G=Math.cos(U),$=Math.sin(U);w.x=v*$,w.y=m*b,w.z=v*G,u.push(w.x,w.y,w.z),d.push(0,b,0),T.x=G*.5+.5,T.y=$*.5*b+.5,f.push(T.x,T.y),g++}for(let F=0;F<i;F++){let q=E+F,U=L+F;M===!0?h.push(U,U+1,q):h.push(U+1,U,q),C+=3}c.addGroup(p,C,M===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},As=class s extends Bi{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},zl=class s extends ye{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let x=new I,M=new I,E=new I;for(let T=0;T<e.length;T+=3)f(e[T+0],x),f(e[T+1],M),f(e[T+2],E),l(x,M,E,y)}function l(y,x,M,E){let T=E+1,w=[];for(let C=0;C<=T;C++){w[C]=[];let v=y.clone().lerp(M,C/T),b=x.clone().lerp(M,C/T),L=T-C;for(let F=0;F<=L;F++)F===0&&C===T?w[C][F]=v:w[C][F]=v.clone().lerp(b,F/L)}for(let C=0;C<T;C++)for(let v=0;v<2*(T-C)-1;v++){let b=Math.floor(v/2);v%2===0?(d(w[C][b+1]),d(w[C+1][b]),d(w[C][b])):(d(w[C][b+1]),d(w[C+1][b+1]),d(w[C+1][b]))}}function c(y){let x=new I;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(y),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){let y=new I;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let M=m(y)/2/Math.PI+.5,E=p(y)/Math.PI+.5;a.push(M,1-E)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let x=a[y+0],M=a[y+2],E=a[y+4],T=Math.max(x,M,E),w=Math.min(x,M,E);T>.9&&w<.1&&(x<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,x){let M=y*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function g(){let y=new I,x=new I,M=new I,E=new I,T=new mt,w=new mt,C=new mt;for(let v=0,b=0;v<r.length;v+=9,b+=6){y.set(r[v+0],r[v+1],r[v+2]),x.set(r[v+3],r[v+4],r[v+5]),M.set(r[v+6],r[v+7],r[v+8]),T.set(a[b+0],a[b+1]),w.set(a[b+2],a[b+3]),C.set(a[b+4],a[b+5]),E.copy(y).add(x).add(M).divideScalar(3);let L=m(E);_(T,b+0,y,L),_(w,b+2,x,L),_(C,b+4,M,L)}}function _(y,x,M,E){E<0&&y.x===1&&(a[x]=y.x-1),M.x===0&&M.z===0&&(a[x]=E/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var ki=class extends ur{constructor(t){super(t),this.uuid=Nn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new ur().fromJSON(i))}return this}},vy={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Uu(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=wy(s,t,r,e)),s.length>80*e){o=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return fr(r,a,e,o,l,f,0),a}};function Uu(s,t,e,n,i){let r,a;if(i===Oy(s,t,e,n)>0)for(r=t;r<e;r+=n)a=ru(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=ru(r,s[r],s[r+1],a);return a&&Va(a,a.next)&&(mr(a),a=a.next),a}function Hi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Va(e,e.next)||be(e.prev,e,e.next)===0)){if(mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function fr(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Py(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?by(s,n,i,r):My(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),mr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Sy(Hi(s),t,e),fr(s,t,e,n,i,r,2)):a===2&&Ey(s,t,e,n,i,r):fr(Hi(s),t,e,n,i,r,1);break}}}function My(s){let t=s.prev,e=s,n=s.next;if(be(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=i>r?i>a?i:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&xs(i,o,r,l,a,c,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function by(s,t,e,n){let i=s.prev,r=s,a=s.next;if(be(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Bl(f,g,t,e,n),y=Bl(_,m,t,e,n),x=s.prevZ,M=s.nextZ;for(;x&&x.z>=p&&M&&M.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&xs(o,h,l,u,c,d,x.x,x.y)&&be(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==a&&xs(o,h,l,u,c,d,M.x,M.y)&&be(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&xs(o,h,l,u,c,d,x.x,x.y)&&be(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==a&&xs(o,h,l,u,c,d,M.x,M.y)&&be(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Sy(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!Va(i,r)&&Nu(i,n,n.next,r)&&pr(i,r)&&pr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),mr(n),mr(n.next),n=s=r),n=n.next}while(n!==s);return Hi(n)}function Ey(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Dy(a,o)){let l=Ou(a,o);a=Hi(a,a.next),l=Hi(l,l.next),fr(a,t,e,n,i,r,0),fr(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function wy(s,t,e,n){let i=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Uu(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Iy(c));for(i.sort(Ty),r=0;r<i.length;r++)e=Ay(i[r],e);return e}function Ty(s,t){return s.x-t.x}function Ay(s,t){let e=Ry(s,t);if(!e)return t;let n=Ou(e,s);return Hi(n,n.next),Hi(e,e.next)}function Ry(s,t){let e=t,n=-1/0,i,r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;let o=i,l=i.x,c=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&xs(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),pr(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Cy(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function Cy(s,t){return be(s.prev,s,t.prev)<0&&be(t.next,s,s.next)<0}function Py(s,t,e,n){let i=s;do i.z===0&&(i.z=Bl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Ly(i)}function Ly(s){let t,e,n,i,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(a>1);return s}function Bl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Iy(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function xs(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Dy(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Uy(s,t)&&(pr(s,t)&&pr(t,s)&&Ny(s,t)&&(be(s.prev,s,t.prev)||be(s,t.prev,t))||Va(s,t)&&be(s.prev,s,s.next)>0&&be(t.prev,t,t.next)>0)}function be(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Va(s,t){return s.x===t.x&&s.y===t.y}function Nu(s,t,e,n){let i=aa(be(s,t,e)),r=aa(be(s,t,n)),a=aa(be(e,n,s)),o=aa(be(e,n,t));return!!(i!==r&&a!==o||i===0&&ra(s,e,t)||r===0&&ra(s,n,t)||a===0&&ra(e,s,n)||o===0&&ra(e,t,n))}function ra(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function aa(s){return s>0?1:s<0?-1:0}function Uy(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Nu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function pr(s,t){return be(s.prev,s,s.next)<0?be(s,t,s.next)>=0&&be(s,s.prev,t)>=0:be(s,t,s.prev)<0||be(s,s.next,t)<0}function Ny(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Ou(s,t){let e=new kl(s.i,s.x,s.y),n=new kl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ru(s,t,e,n){let i=new kl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function mr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function kl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Oy(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var ir=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];au(t),ou(n,t);let a=t.length;e.forEach(au);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,ou(n,e[l]);let o=vy.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function au(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function ou(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Rs=class s extends ye{constructor(t=new ki([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new re(i,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Fy,x,M=!1,E,T,w,C;p&&(x=p.getSpacedPoints(h),M=!0,d=!1,E=p.computeFrenetFrames(h,!1),T=new I,w=new I,C=new I),d||(m=0,f=0,g=0,_=0);let v=o.extractPoints(c),b=v.shape,L=v.holes;if(!ir.isClockWise(b)){b=b.reverse();for(let N=0,yt=L.length;N<yt;N++){let nt=L[N];ir.isClockWise(nt)&&(L[N]=nt.reverse())}}let q=ir.triangulateShape(b,L),U=b;for(let N=0,yt=L.length;N<yt;N++){let nt=L[N];b=b.concat(nt)}function G(N,yt,nt){return yt||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(yt,nt)}let $=b.length,it=q.length;function rt(N,yt,nt){let ft,et,Ft,Et=N.x-yt.x,R=N.y-yt.y,S=nt.x-N.x,X=nt.y-N.y,dt=Et*Et+R*R,lt=Et*X-R*S;if(Math.abs(lt)>Number.EPSILON){let at=Math.sqrt(dt),Ut=Math.sqrt(S*S+X*X),vt=yt.x-R/at,Pt=yt.y+Et/at,kt=nt.x-X/Ut,Zt=nt.y+S/Ut,P=((kt-vt)*X-(Zt-Pt)*S)/(Et*X-R*S);ft=vt+Et*P-N.x,et=Pt+R*P-N.y;let B=ft*ft+et*et;if(B<=2)return new mt(ft,et);Ft=Math.sqrt(B/2)}else{let at=!1;Et>Number.EPSILON?S>Number.EPSILON&&(at=!0):Et<-Number.EPSILON?S<-Number.EPSILON&&(at=!0):Math.sign(R)===Math.sign(X)&&(at=!0),at?(ft=-R,et=Et,Ft=Math.sqrt(dt)):(ft=Et,et=R,Ft=Math.sqrt(dt/2))}return new mt(ft/Ft,et/Ft)}let tt=[];for(let N=0,yt=U.length,nt=yt-1,ft=N+1;N<yt;N++,nt++,ft++)nt===yt&&(nt=0),ft===yt&&(ft=0),tt[N]=rt(U[N],U[nt],U[ft]);let ht=[],ut,bt=tt.concat();for(let N=0,yt=L.length;N<yt;N++){let nt=L[N];ut=[];for(let ft=0,et=nt.length,Ft=et-1,Et=ft+1;ft<et;ft++,Ft++,Et++)Ft===et&&(Ft=0),Et===et&&(Et=0),ut[ft]=rt(nt[ft],nt[Ft],nt[Et]);ht.push(ut),bt=bt.concat(ut)}for(let N=0;N<m;N++){let yt=N/m,nt=f*Math.cos(yt*Math.PI/2),ft=g*Math.sin(yt*Math.PI/2)+_;for(let et=0,Ft=U.length;et<Ft;et++){let Et=G(U[et],tt[et],ft);Mt(Et.x,Et.y,-nt)}for(let et=0,Ft=L.length;et<Ft;et++){let Et=L[et];ut=ht[et];for(let R=0,S=Et.length;R<S;R++){let X=G(Et[R],ut[R],ft);Mt(X.x,X.y,-nt)}}}let K=g+_;for(let N=0;N<$;N++){let yt=d?G(b[N],bt[N],K):b[N];M?(w.copy(E.normals[0]).multiplyScalar(yt.x),T.copy(E.binormals[0]).multiplyScalar(yt.y),C.copy(x[0]).add(w).add(T),Mt(C.x,C.y,C.z)):Mt(yt.x,yt.y,0)}for(let N=1;N<=h;N++)for(let yt=0;yt<$;yt++){let nt=d?G(b[yt],bt[yt],K):b[yt];M?(w.copy(E.normals[N]).multiplyScalar(nt.x),T.copy(E.binormals[N]).multiplyScalar(nt.y),C.copy(x[N]).add(w).add(T),Mt(C.x,C.y,C.z)):Mt(nt.x,nt.y,u/h*N)}for(let N=m-1;N>=0;N--){let yt=N/m,nt=f*Math.cos(yt*Math.PI/2),ft=g*Math.sin(yt*Math.PI/2)+_;for(let et=0,Ft=U.length;et<Ft;et++){let Et=G(U[et],tt[et],ft);Mt(Et.x,Et.y,u+nt)}for(let et=0,Ft=L.length;et<Ft;et++){let Et=L[et];ut=ht[et];for(let R=0,S=Et.length;R<S;R++){let X=G(Et[R],ut[R],ft);M?Mt(X.x,X.y+x[h-1].y,x[h-1].x+nt):Mt(X.x,X.y,u+nt)}}}ct(),Tt();function ct(){let N=i.length/3;if(d){let yt=0,nt=$*yt;for(let ft=0;ft<it;ft++){let et=q[ft];Ht(et[2]+nt,et[1]+nt,et[0]+nt)}yt=h+m*2,nt=$*yt;for(let ft=0;ft<it;ft++){let et=q[ft];Ht(et[0]+nt,et[1]+nt,et[2]+nt)}}else{for(let yt=0;yt<it;yt++){let nt=q[yt];Ht(nt[2],nt[1],nt[0])}for(let yt=0;yt<it;yt++){let nt=q[yt];Ht(nt[0]+$*h,nt[1]+$*h,nt[2]+$*h)}}n.addGroup(N,i.length/3-N,0)}function Tt(){let N=i.length/3,yt=0;Ot(U,yt),yt+=U.length;for(let nt=0,ft=L.length;nt<ft;nt++){let et=L[nt];Ot(et,yt),yt+=et.length}n.addGroup(N,i.length/3-N,1)}function Ot(N,yt){let nt=N.length;for(;--nt>=0;){let ft=nt,et=nt-1;et<0&&(et=N.length-1);for(let Ft=0,Et=h+m*2;Ft<Et;Ft++){let R=$*Ft,S=$*(Ft+1),X=yt+ft+R,dt=yt+et+R,lt=yt+et+S,at=yt+ft+S;$t(X,dt,lt,at)}}}function Mt(N,yt,nt){l.push(N),l.push(yt),l.push(nt)}function Ht(N,yt,nt){St(N),St(yt),St(nt);let ft=i.length/3,et=y.generateTopUV(n,i,ft-3,ft-2,ft-1);Xt(et[0]),Xt(et[1]),Xt(et[2])}function $t(N,yt,nt,ft){St(N),St(yt),St(ft),St(yt),St(nt),St(ft);let et=i.length/3,Ft=y.generateSideWallUV(n,i,et-6,et-3,et-2,et-1);Xt(Ft[0]),Xt(Ft[1]),Xt(Ft[3]),Xt(Ft[1]),Xt(Ft[2]),Xt(Ft[3])}function St(N){i.push(l[N*3+0]),i.push(l[N*3+1]),i.push(l[N*3+2])}function Xt(N){r.push(N.x),r.push(N.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return zy(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ol[i.type]().fromJSON(i)),new s(n,t.options)}},Fy={generateTopUV:function(s,t,e,n,i){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new mt(r,a),new mt(o,l),new mt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new mt(a,1-l),new mt(c,1-u),new mt(d,1-g),new mt(_,1-p)]:[new mt(o,1-l),new mt(h,1-u),new mt(f,1-g),new mt(m,1-p)]}};function zy(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Na=class s extends zl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var gr=class s extends ye{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/i,f=new I,g=new mt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){let m=_*(n+1);for(let p=0;p<n;p++){let y=p+m,x=y,M=y+n+1,E=y+n+2,T=y+1;o.push(x,M,T),o.push(M,E,T)}}this.setIndex(o),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ze=class s extends ye{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new I,d=new I,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let y=[],x=p/n,M=0;p===0&&a===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let E=0;E<=e;E++){let T=E/e;u.x=-t*Math.cos(i+T*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(i+T*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+M,1-x),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let x=h[p][y+1],M=h[p][y],E=h[p+1][y],T=h[p+1][y+1];(p!==0||a>0)&&f.push(x,M,T),(p!==n-1||l<Math.PI)&&f.push(M,E,T)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Oa=class s extends ye{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let _=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;a.push(_,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var _e=class extends jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bu,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function oa(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function By(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Cs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Hl=class extends Cs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uh,endingEnd:uh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case dh:r=t,o=2*e-n;break;case fh:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case dh:a=t,l=2*n-e;break;case fh:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,M=f*m-f*_;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+y*a[c+E]+x*a[l+E]+M*a[u+E];return r}},Gl=class extends Cs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Vl=class extends Cs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Rn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=oa(e,this.TimeBufferType),this.values=oa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:oa(t.times,Array),values:oa(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Vl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Gl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Hl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ca:e=this.InterpolantFactoryMethodDiscrete;break;case ha:e=this.InterpolantFactoryMethodLinear;break;case Lo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ca;case this.InterpolantFactoryMethodLinear:return ha;case this.InterpolantFactoryMethodSmooth:return Lo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&By(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Lo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=ha;var Gi=class extends Rn{};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=ca;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wl=class extends Rn{};Wl.prototype.ValueTypeName="color";var Xl=class extends Rn{};Xl.prototype.ValueTypeName="number";var ql=class extends Cs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)pi.slerpFlat(r,0,a,c-o,a,c,l);return r}},xr=class extends Rn{InterpolantFactoryMethodLinear(t){return new ql(this.times,this.values,this.getValueSize(),t)}};xr.prototype.ValueTypeName="quaternion";xr.prototype.DefaultInterpolation=ha;xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends Rn{};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=ca;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yl=class extends Rn{};Yl.prototype.ValueTypeName="vector";var $l=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},ky=new $l,Zl=class{constructor(t){this.manager=t!==void 0?t:ky,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Zl.DEFAULT_MATERIAL_NAME="__DEFAULT";var yr=class extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Ps=class extends yr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},sl=new we,lu=new I,cu=new I,Fa=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cr,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;lu.setFromMatrixPosition(t.matrixWorld),e.position.copy(lu),cu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cu),e.updateMatrixWorld(),sl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var hu=new we,Js=new I,rl=new I,Jl=class extends Fa{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new mt(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Js.setFromMatrixPosition(t.matrixWorld),n.position.copy(Js),rl.copy(n.position),rl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(rl),n.updateMatrixWorld(),i.makeTranslation(-Js.x,-Js.y,-Js.z),hu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hu)}},xi=class extends yr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Jl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},jl=class extends Fa{constructor(){super(new wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ls=class extends yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new jl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var rc="\\[\\]\\.:\\/",Hy=new RegExp("["+rc+"]","g"),ac="[^"+rc+"]",Gy="[^"+rc.replace("\\.","")+"]",Vy=/((?:WC+[\/:])*)/.source.replace("WC",ac),Wy=/(WCOD+)?/.source.replace("WCOD",Gy),Xy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ac),qy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ac),Yy=new RegExp("^"+Vy+Wy+Xy+qy+"$"),$y=["material","materials","bones","map"],Kl=class{constructor(t,e,n){let i=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ge=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Hy,"")}static parseTrackName(t){let e=Yy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);$y.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=Kl;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var u_=new Float32Array(1);var za=class{constructor(t,e,n=0,i=1/0){this.ray=new or(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new lr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Ql(t,this,n,e),n.sort(uu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Ql(t[i],this,n,e);return n.sort(uu),n}};function uu(s,t){return s.distance-t.distance}function Ql(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){let i=s.children;for(let r=0,a=i.length;r<a;r++)Ql(i[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var At={world:{gravity:34,maxFall:40,coyoteTime:.12,jumpBuffer:.14,stepHeight:.45,pushStrength:1},heroes:{kid:{walk:5.2,run:9.2,accel:58,decel:42,air:20,jump:2.15,gravity:1,turn:15,stamina:7,regen:.22,mass:1,reach:1.25,climb:3.6,dash:{mul:1.45,time:.35,cooldown:4}},masha:{walk:5.2,run:9,accel:60,decel:42,air:20,jump:2.2,gravity:1,turn:16,stamina:6.5,regen:.22,mass:1,reach:1.25,climb:3.6,dash:{mul:1.45,time:.35,cooldown:4}},catbus:{walk:5.8,run:11,accel:32,decel:22,air:10,jump:1.8,gravity:1.15,turn:7,stamina:5,regen:.18,mass:3,reach:1,climb:2.6,dash:{mul:1.3,time:.6,cooldown:6}},moti:{walk:4.6,run:8.2,accel:26,decel:30,air:8,jump:1.6,gravity:1.3,turn:9,stamina:8,regen:.25,mass:4,reach:1.35,climb:2.4,dash:{mul:1.25,time:.5,cooldown:7}},noface:{walk:4.6,run:8.4,accel:14,decel:12,air:8,jump:0,gravity:1,turn:5,stamina:9,regen:.16,mass:5,reach:0,climb:0,dash:{mul:1.55,time:.8,cooldown:1.2,charges:3,recharge:12},fly:{speed:2.6,time:2.6,regen:.25}}},camera:{distance:6.5,minDistance:1.2,height:1.5,fov:62,mouseSens:.0026,touchSens:.0055,pitchMin:-.35,pitchMax:1.15,follow:12},ghost:{count:1,spawnGap:4,lateBoost:.08,burstRange:7,catchRadius:1.05,catchHeight:2.2,sightRange:22,hearRunRange:9,loseSightTime:2.2,repathEvery:.35,disguise:{cd:18,time:9,noticeRange:2.6},grab:1.1},abilities:{shelter:{cd:22,time:5,radius:3.4},light:{cd:14,radius:6,boost:1.2,boostTime:3},wisps:{cd:24,count:3,slow:4,stun:.6},path:{cd:18,time:8},swing:{cd:2.5,range:2.6,stun:1.6,knock:3.5},wave:{cd:1.5},dash:{},prop:{cd:4,walk:.45}},bots:{fleeRange:13,hideChance:.55,think:.25,restless:[7,15],helpRange:20,calmRun:.55,jukeRange:3.2,roofChance:.45},round:{hide:120,headStart:15,chase:60,chaseGhosts:4,chaseBotSpeed:.9,pumpkins:14,reward:{found:3,survive:5,catch:2}},graphics:{maxPixelRatioDesktop:1.75,maxPixelRatioMobile:1.35,shadows:!0,shadowMapSize:1024,fireflies:90}},Wi=JSON.parse(JSON.stringify({world:At.world,heroes:At.heroes,ghost:At.ghost,abilities:At.abilities,bots:At.bots}));var oc=new Map;function Q(s,t={}){var i,r,a,o,l,c,h;let e=s+JSON.stringify(t);if(oc.has(e))return oc.get(e);let n=new _e({color:s,roughness:(i=t.roughness)!=null?i:.72,metalness:(r=t.metalness)!=null?r:0,emissive:(a=t.emissive)!=null?a:0,emissiveIntensity:(o=t.emissiveIntensity)!=null?o:1,transparent:t.opacity!==void 0&&t.opacity<1,opacity:(l=t.opacity)!=null?l:1,flatShading:!!t.flat,side:(c=t.side)!=null?c:On,map:(h=t.map)!=null?h:null});return oc.set(e,n),n}function O(s,t,{x:e=0,y:n=0,z:i=0,sx:r=1,sy:a=1,sz:o=1,rx:l=0,ry:c=0,rz:h=0,shadow:u=!0}={}){let d=new oe(s,t);return d.position.set(e,n,i),d.scale.set(r,a,o),d.rotation.set(l,c,h),d.castShadow=u,d.receiveShadow=!1,d}var k={sphere:(s=1,t=24,e=16)=>new ze(s,t,e),capsule:(s,t,e=6,n=12)=>new Ua(s,t,e,n),cyl:(s,t,e,n=20,i=!1)=>new Bi(s,t,e,n,1,i),box:(s,t,e)=>new Kn(s,t,e),cone:(s,t,e=20)=>new As(s,t,e),torus:(s,t,e=10,n=24,i=Math.PI*2)=>new Oa(s,t,e,n,i)};function ae(s,t,e){let n=new ne;return n.position.set(s,t,e),n}function Ke(s,t,e){let n=document.createElement("canvas");n.width=s,n.height=t,e(n.getContext("2d"),s,t);let i=new Fn(n);return i.colorSpace=Me,i.anisotropy=4,i}function Wa(s=.07,t=2759188){let e=new ne,n=O(k.sphere(1,16,12),Q(t,{roughness:.3}),{sx:s*.8,sy:s,sz:s*.35,shadow:!1}),i=O(k.sphere(1,8,6),Q(16777215,{emissive:16777215,emissiveIntensity:.6}),{x:s*.25,y:s*.35,z:s*.3,sx:s*.28,sy:s*.28,sz:s*.1,shadow:!1}),r=O(k.sphere(1,8,6),Q(16777215,{emissive:16777215,emissiveIntensity:.6}),{x:-s*.25,y:-s*.35,z:s*.3,sx:s*.14,sy:s*.14,sz:s*.08,shadow:!1});return e.add(n,i,r),e}function Te(s,t=3,e=.08,n=1,i=!0){let r=new Na(s,t),a=r.attributes.position,o=new I,l=[];for(let c=0;c<a.count;c++){o.fromBufferAttribute(a,c),l.push(`${o.x.toFixed(4)},${o.y.toFixed(4)},${o.z.toFixed(4)}`);let h=o.clone().normalize(),u=Math.sin(h.x*9.1+n)*Math.cos(h.y*7.3+n*2)*Math.sin(h.z*8.7+n*3)+.5*Math.sin(h.x*23+h.y*17+n*5)*Math.cos(h.z*19-n);o.multiplyScalar(1+u*e),a.setXYZ(c,o.x,o.y,o.z)}if(r.computeVertexNormals(),i){let c=r.attributes.normal,h=new Map;for(let u=0;u<a.count;u++){let d=h.get(l[u])||[0,0,0];d[0]+=c.getX(u),d[1]+=c.getY(u),d[2]+=c.getZ(u),h.set(l[u],d)}for(let u=0;u<a.count;u++){let d=h.get(l[u]),f=Math.hypot(d[0],d[1],d[2])||1;c.setXYZ(u,d[0]/f,d[1]/f,d[2]/f)}}return r}function Ds(s,t,e,{stride:n=.9,armSwing:i=.7,bob:r=.05,freq:a=1}={}){let o=t.speed,l=Math.min(1,o/4);s.phase=(s.phase||0)+e*(4+o*1.15)*a*(l>.05?1:0);let c=Math.sin(s.phase),h=s.blend=fe.lerp(s.blend||0,l,1-Math.exp(-e*10)),u=t.grounded?0:1;s.air=fe.lerp(s.air||0,u,1-Math.exp(-e*12));let d=c*n*h;if(s.legL&&(s.legL.rotation.x=fe.lerp(d,-.5,s.air)),s.legR&&(s.legR.rotation.x=fe.lerp(-d,.35,s.air)),s.armL&&(s.armL.rotation.x=fe.lerp(-c*i*h,-2.4,s.air*.8),s.armL.rotation.z=fe.lerp(.12,.5,s.air)),s.armR&&(s.armR.rotation.x=fe.lerp(c*i*h,-2.4,s.air*.8),s.armR.rotation.z=fe.lerp(-.12,-.5,s.air)),s.body){let f=Math.sin(t.t*2.2)*.012*(1-h);s.body.position.y=s.bodyY+Math.abs(Math.cos(s.phase))*r*h+f,s.body.rotation.x=.12*h*Math.min(1,o/7)-s.air*.1}s.head&&(s.head.rotation.x=-.08*h+Math.sin(t.t*1.7)*.02)}function Us(s,t,e){var i;s.userData.sq=(i=s.userData.sq)!=null?i:0,t.landed&&(s.userData.sq=Math.min(.22,.06+Math.abs(t.landSpeed)*.012)),s.userData.sq=fe.lerp(s.userData.sq,0,1-Math.exp(-e*12));let n=s.userData.sq;s.scale.set(1+n*.6,1-n,1+n*.6)}function Fu(){let s=new ne,t=new ne;s.add(t);let e=Q(16175803,{roughness:.6}),n=Q(3809815,{roughness:.55}),i=Q(15305370,{roughness:.8}),r=Q(16052714),a=Q(14240063,{roughness:.45}),o=Ke(64,64,(y,x,M)=>{y.fillStyle="#f4f2ea",y.fillRect(0,0,x,M),y.fillStyle="#6ea77a";for(let E=0;E<M;E+=16)y.fillRect(0,E,x,8)});o.wrapS=o.wrapT=An,o.repeat.set(3,2.2);let l=Q(16777215,{map:o,roughness:.85}),c=o.clone();c.repeat.set(2,1),c.needsUpdate=!0;let h=Q(16777215,{map:c,roughness:.85}),u={bodyY:.62};for(let y of[-1,1]){let x=ae(y*.095,.62,0);x.add(O(k.capsule(.066,.36),e,{y:-.25})),x.add(O(k.cyl(.07,.068,.12),r,{y:-.49})),x.add(O(k.sphere(1,16,12),a,{y:-.57,z:.035,sx:.085,sy:.06,sz:.13})),t.add(x),y<0?u.legR=x:u.legL=x}let d=ae(0,u.bodyY,0);t.add(d),u.body=d,d.add(O(k.cyl(.175,.205,.17,20),i,{y:0})),d.add(O(k.cyl(.15,.19,.36,20),l,{y:.24})),d.add(O(k.sphere(.152,20,10),l,{y:.41,sy:.45})),d.add(O(k.cyl(.05,.055,.08),e,{y:.47}));for(let y of[-1,1]){let x=ae(y*.19,.38,0);x.add(O(k.capsule(.058,.1),h,{y:-.08})),x.add(O(k.capsule(.043,.16),e,{y:-.26})),x.add(O(k.sphere(.05,12,10),e,{y:-.39})),d.add(x),y<0?u.armR=x:u.armL=x}let f=ae(0,.5,0);d.add(f),u.head=f,f.add(O(k.sphere(.24,32,24),e,{y:.2,sy:.96}));for(let y of[-1,1])f.add(O(k.sphere(.045,10,8),e,{x:y*.235,y:.18,sz:.6}));for(let y of[-1,1]){let x=Wa(.052);x.position.set(y*.088,.19,.214),x.rotation.y=y*.28,f.add(x),f.add(O(k.sphere(1,10,8),Q(15899290,{opacity:.65,roughness:1}),{x:y*.15,y:.115,z:.18,sx:.045,sy:.022,sz:.02,ry:y*.6,shadow:!1})),f.add(O(k.capsule(.007,.04,2,6),n,{x:y*.09,y:.265,z:.215,rz:Math.PI/2+y*.18,shadow:!1}))}f.add(O(k.torus(.022,.006,6,12,Math.PI),Q(10107701),{y:.1,z:.232,rz:Math.PI,shadow:!1}));let g=new ze(.262,32,20,0,Math.PI*2,0,Math.PI*.62);f.add(O(g,n,{y:.2,z:-.01,rx:-.78})),f.add(O(k.sphere(.25,24,16),n,{y:.13,z:-.08,sx:1.03,sy:.9,sz:.92}));let _=[[-.12,.3],[-.04,.315],[.05,.31],[.13,.295]];for(let[y,x]of _)f.add(O(k.sphere(1,12,10),n,{x:y,y:x,z:.19,sx:.07,sy:.075,sz:.05,rz:y*1.4}));for(let y of[-1,1])f.add(O(k.capsule(.045,.14,4,8),n,{x:y*.215,y:.1,z:.07,rz:y*.12}));let m=ae(0,.26,-.22);f.add(m),m.add(O(k.torus(.035,.016,8,16),Q(9329368,{roughness:.3,emissive:3807856,emissiveIntensity:.6}),{rx:Math.PI/2-.4})),m.add(O(k.capsule(.045,.12,4,8),n,{y:-.09,z:-.04,rx:.5})),u.tail=m,t.scale.setScalar(1.12);function p(y,x){Ds(u,x,y,{stride:.95,armSwing:.85,bob:.045});let M=x.action;if(M&&M.name==="wave"){let E=Math.sin(Math.min(1,M.k)*Math.PI);u.armL.rotation.z=2.7*E+Math.sin(x.t*14)*.3*E,u.armL.rotation.x=-.2*E,u.head.rotation.z=Math.sin(x.t*4)*.1*E}else u.head.rotation.z=0;u.tail.rotation.x=.25+Math.sin(u.phase*2)*.15*u.blend+u.air*.5,Us(s,x,y)}return{root:s,update:p,height:1.72}}function zu(){let s=new ne,t=new ne;s.add(t);let e=Ke(256,128,(w,C,v)=>{w.fillStyle="#ecd6ad",w.fillRect(0,0,C,v);let b=7,L=()=>(b=(b*9301+49297)%233280)/233280;w.fillStyle="#7d4f2e";for(let F=0;F<16;F++)w.beginPath(),w.ellipse(L()*C,L()*v,10+L()*18,7+L()*12,L()*3,0,Math.PI*2),w.fill();w.globalAlpha=.15,w.strokeStyle="#6b4526";for(let F=0;F<400;F++){let q=L()*C,U=L()*v;w.beginPath(),w.moveTo(q,U),w.lineTo(q+3,U+5),w.stroke()}}),n=Q(16777215,{map:e,roughness:.9}),i=Q(15719606,{roughness:.9}),r=Q(8212270,{roughness:.9}),a=Q(5978658,{roughness:.7}),o=Q(16761946,{emissive:16754224,emissiveIntensity:1.6,roughness:.4}),l=Q(5795898,{roughness:1,flat:!0}),c={},h=ae(0,1,0);t.add(h),c.body=h,h.add(O(k.capsule(.62,1.3,8,20),n,{rx:Math.PI/2}));for(let w of[-1,1])for(let C of[-.55,0,.55])h.add(O(k.box(.04,.4,.4),a,{x:w*.605,y:.12,z:C})),h.add(O(k.box(.03,.32,.32),o,{x:w*.625,y:.12,z:C,shadow:!1}));h.add(O(k.box(.34,.3,.04),o,{y:.15,z:-1.25,shadow:!1})),h.add(O(k.sphere(1,16,10),l,{y:.52,sx:.5,sy:.14,sz:1.05}));let u=Ke(128,64,(w,C,v)=>{w.fillStyle="#6a4125",w.fillRect(0,0,C,v),w.fillStyle="#f7d992",w.fillRect(6,6,C-12,v-12),w.fillStyle="#3a2112",w.font="bold 44px serif",w.textAlign="center",w.textBaseline="middle",w.fillText("\u732B",C/2,v/2+2)});h.add(O(k.box(.5,.24,.05),Q(16777215,{map:u,emissive:4465152,emissiveIntensity:.4}),{y:.74,z:.55})),h.add(O(k.box(.04,.12,.04),a,{y:.6,z:.55}));let d=Q(16756810,{emissive:16747040,emissiveIntensity:2.2});for(let[w,C]of[[-.4,.75],[.4,.75],[-.4,-.75],[.4,-.75]])h.add(O(k.sphere(.07,10,8),d,{x:w,y:.55,z:C,sy:1.3,shadow:!1}));let f=ae(0,.05,1.05);h.add(f),c.head=f,f.add(O(k.sphere(.52,28,20),n,{sx:1.05,sy:.95,sz:.85}));for(let w of[-1,1]){f.add(O(k.cone(.16,.3,4),i,{x:w*.32,y:.48,z:-.02,rz:-w*.35,ry:Math.PI/4})),f.add(O(k.cone(.1,.18,4),Q(14129802),{x:w*.31,y:.47,z:.02,rz:-w*.35,ry:Math.PI/4,shadow:!1}));let C=O(k.sphere(.13,20,14),Q(16765498,{emissive:16757760,emissiveIntensity:.9,roughness:.2}),{x:w*.21,y:.17,z:.36,sz:.6,shadow:!1});C.add(O(k.sphere(1,10,8),Q(1313797),{z:.105,sx:.026,sy:.1,sz:.03,shadow:!1})),f.add(C);for(let v of[-1,0,1])f.add(O(k.cyl(.006,.006,.55,4),Q(16183264),{x:w*.5,y:0+v*.05,z:.3,rz:Math.PI/2+v*.12*w,ry:-w*.25,shadow:!1}))}f.add(O(k.sphere(.045,10,8),Q(13068906),{y:.04,z:.45,shadow:!1})),f.add(O(k.torus(.27,.07,8,28,Math.PI),Q(2757132),{y:-.02,z:.33,rz:Math.PI,sz:.6,shadow:!1})),f.add(O(k.torus(.27,.052,8,28,Math.PI),Q(16512746,{roughness:.3}),{y:-.02,z:.37,rz:Math.PI,sz:.5,shadow:!1}));let g=[];for(let w of[.6,0,-.6])for(let C of[-1,1]){let v=ae(C*.42,.62,w);v.add(O(k.capsule(.13,.3,4,10),n,{y:-.25})),v.add(O(k.sphere(.15,12,10),i,{y:-.5,z:.05,sy:.7})),t.add(v),g.push({l:v,phase:(w===0?Math.PI:0)+(C>0?Math.PI:0)})}let _=ae(0,1.05,-1.2);t.add(_);let m=[],p=_;for(let w=0;w<6;w++){let C=ae(0,w===0?0:.2,0);C.add(O(k.sphere(.13-w*.008,12,10),w%2?i:r,{y:.1,sy:1.3})),C.rotation.x=-.35,p.add(C),p=C,m.push(C)}t.scale.setScalar(.92);let y=0,x=0,M=0,E=0;function T(w,C){let v=Math.min(1,C.speed/4);x=fe.lerp(x,v,1-Math.exp(-w*10)),M=fe.lerp(M,C.grounded?0:1,1-Math.exp(-w*12)),y+=w*(5+C.speed*1.3)*(v>.05?1:0),g.forEach(({l:b,phase:L})=>{b.rotation.x=fe.lerp(Math.sin(y+L)*.8*x,L?-.7:.7,M)}),h.position.y=1+Math.abs(Math.sin(y))*.07*x+Math.sin(C.t*2)*.015,h.rotation.x=-M*.15+.05*x,f.rotation.y=Math.sin(C.t*.7)*.1*(1-x),m.forEach((b,L)=>{b.rotation.z=Math.sin(C.t*3+L*.6)*.15*(.5+x)}),o.emissiveIntensity=1.5+Math.sin(C.t*3)*.1,C.landed&&(E=Math.min(.2,.06+Math.abs(C.landSpeed)*.01)),E=fe.lerp(E,0,1-Math.exp(-w*12)),s.scale.set(1+E*.5,1-E,1+E*.5)}return{root:s,update:T,height:1.9}}var Xa={classic:{name:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439",fur:15920611,shade:14933197,hat:12857642,hatBand:9314588,cloth:12857642},winter:{name:"\u0417\u0438\u043C\u043D\u0438\u0439",fur:15331578,shade:13622510,hat:8365784,hatBand:4153237,cloth:4880568},forest:{name:"\u041B\u0435\u0441\u043D\u043E\u0439",fur:15788760,shade:14537659,hat:5212730,hatBand:3037730,cloth:14251819},holiday:{name:"\u041F\u0440\u0430\u0437\u0434\u043D\u0438\u0447\u043D\u044B\u0439",fur:16183270,shade:15129034,hat:14168634,hatBand:15251018,cloth:12067884}};function Bu(s="classic"){let t=Xa[s]||Xa.classic,e=new ne,n=new ne;e.add(n);let i=Q(t.fur,{roughness:.95}),r=Q(t.shade,{roughness:1}),a=Q(t.hat,{roughness:.7}),o=Q(t.cloth,{roughness:.75}),l=Q(2825495),c=Q(7030054,{roughness:.85}),h=Q(4138774,{roughness:.9}),u=Q(16763248,{emissive:16754240,emissiveIntensity:2.4}),d={bodyY:.45};for(let L of[-1,1]){let F=ae(L*.36,.45,0);F.add(O(Te(.28,2,.1,L+3),i,{y:-.2,sy:1.1})),F.add(O(k.sphere(.22,12,10),r,{y:-.4,z:.08,sy:.55}));for(let q of[-1,0,1])F.add(O(k.sphere(.035,6,4),Q(7166538),{x:q*.08,y:-.43,z:.27,sz:1.4,shadow:!1}));n.add(F),L<0?d.legR=F:d.legL=F}let f=ae(0,d.bodyY,0);n.add(f),d.body=f,f.add(O(Te(.86,4,.06,1.3),i,{y:.74,sy:1.1,sz:.92})),f.add(O(k.torus(.76,.08,8,32),o,{y:.2,rx:Math.PI/2,sy:.92})),f.add(O(k.box(.52,.42,.08),o,{y:0,z:.7,rx:-.14}));let g=ae(0,1.3,.68);f.add(g),d.head=g;let _=[];for(let L of[-1,1]){let F=O(k.sphere(1,12,8),l,{x:L*.14,y:.05,z:.08,sx:.038,sy:.022,sz:.02,shadow:!1});g.add(F),_.push(F),g.add(O(k.sphere(1,10,8),Q(15771296,{opacity:.55,roughness:1}),{x:L*.26,y:-.03,z:.05,sx:.08,sy:.04,sz:.02,shadow:!1})),g.add(O(k.capsule(.013,.09,2,6),Q(13616821),{x:L*.14,y:.15,z:.07,rz:Math.PI/2-L*.15,shadow:!1})),g.add(O(Te(.19,2,.14,L*5),i,{x:L*.15,y:-.13,z:.08,sx:1.3,sy:.8,sz:.7})),g.add(O(Te(.2,2,.16,L*11),i,{x:L*.46,y:-.05,z:-.1,sy:1.3}))}g.add(O(k.sphere(.055,10,8),Q(15321528),{y:-.02,z:.15,shadow:!1})),g.add(O(Te(.16,2,.16,9),i,{y:-.33,z:.05,sy:1.4}));let m=O(k.sphere(1,10,8),Q(5909026),{y:-.2,z:.16,sx:.06,sy:.001,sz:.02,shadow:!1});g.add(m);let p=ae(0,1.66,.02);if(f.add(p),p.add(O(k.cyl(.66,.7,.05,32),a,{rx:.08})),p.add(O(new ze(.42,24,12,0,Math.PI*2,0,Math.PI/2),a,{y:.02,sy:.72})),p.add(O(k.cyl(.425,.425,.07,24),Q(t.hatBand),{y:.05})),s==="holiday")for(let L=0;L<8;L++){let F=L/8*Math.PI*2;p.add(O(k.sphere(.035,8,6),Q(16769162,{emissive:16760896,emissiveIntensity:1.5}),{x:Math.cos(F)*.43,y:.06,z:Math.sin(F)*.43,shadow:!1}))}s==="winter"&&p.add(O(Te(.1,1,.2,2),Q(16777215),{y:.33})),s==="forest"&&p.add(O(k.sphere(1,8,6),Q(7909450,{flat:!0}),{x:.3,y:.2,z:.1,sx:.14,sy:.04,sz:.08,rz:.4}));let y=ae(0,.95,-.72);f.add(y),d.pack=y,y.add(O(k.box(1.15,1.3,.62),h,{z:-.3}));for(let L of[-1,1])for(let F of[-1,1])y.add(O(k.box(.1,.1,.68),c,{x:L*.58,y:F*.65,z:-.3}));for(let L of[-1,1])y.add(O(k.box(.1,1.4,.1),c,{x:L*.58,z:-.62}));for(let L of[-.2,.25])y.add(O(k.box(1.1,.06,.58),c,{y:L,z:-.3}));let x=new ki;x.moveTo(-.78,0),x.lineTo(0,.42),x.lineTo(.78,0),x.closePath();let M=O(new Rs(x,{depth:.86,bevelEnabled:!1}),Q(3878984,{roughness:.6}),{y:.66,z:-.73});y.add(M);let E=Ke(128,160,(L,F,q)=>{L.fillStyle="#b7473c",L.fillRect(0,0,F,q),L.fillStyle="#f1dcc0",L.fillRect(10,10,F-20,q-20),L.fillStyle="#8a3a2e",L.beginPath(),L.ellipse(64,95,26,22,0,0,Math.PI*2),L.fill();for(let[U,G]of[[36,60],[54,48],[74,48],[92,60]])L.beginPath(),L.ellipse(U,G,9,11,0,0,Math.PI*2),L.fill()});y.add(O(k.box(.62,.78,.02),Q(16777215,{map:E,roughness:.9}),{y:-.05,z:-.63})),y.add(O(k.box(.36,.28,.02),u,{y:.42,z:-.63,shadow:!1}));for(let L of[-1,1]){let F=ae(L*.7,.3,-.35);F.add(O(k.cyl(.004,.004,.14,4),l,{y:-.07,shadow:!1})),F.add(O(k.cyl(.09,.09,.2,10),Q(16747082,{emissive:16738858,emissiveIntensity:2}),{y:-.24,shadow:!1})),y.add(F)}y.add(O(k.cyl(.12,.1,.18,10),Q(9067066),{x:-.35,y:-.5,z:-.62})),y.add(O(k.cyl(.09,.09,.5,10),Q(14206106),{x:.3,y:-.52,z:-.66,rz:Math.PI/2}));for(let L of[-1,1])y.add(O(k.box(.12,1.1,.05),Q(5913122),{x:L*.42,y:.1,z:.18,rx:.15}));let T=Ke(64,64,(L,F,q)=>{L.fillStyle="#ffe2a0",L.fillRect(0,0,F,q),L.fillStyle="#a0461e",L.beginPath(),L.ellipse(32,40,13,11,0,0,Math.PI*2),L.fill();for(let[U,G]of[[17,22],[27,15],[38,15],[48,22]])L.beginPath(),L.ellipse(U,G,5,6,0,0,Math.PI*2),L.fill()}),w=new _e({map:T,emissive:16754240,emissiveMap:T,emissiveIntensity:2.2});for(let L of[-1,1]){let F=ae(L*.8,1.08,.05);if(F.add(O(Te(.22,2,.12,L*7),i,{y:-.3,sy:1.7})),F.add(O(Te(.15,1,.1,L*8),r,{y:-.64})),f.add(F),L<0){d.armR=F;let q=ae(0,-.74,.08);q.add(O(k.cyl(.02,.02,.3,6),c,{y:-.05,shadow:!1})),q.add(O(k.cyl(.15,.15,.34,14),w,{y:-.36,shadow:!1})),q.add(O(k.cyl(.17,.17,.04,14),h,{y:-.18})),q.add(O(k.cyl(.17,.17,.04,14),h,{y:-.54})),F.add(q),d.lantern=q,d.lampMat=w}else d.armL=F}let C=[],v=Q(16765066,{emissive:16751162,emissiveIntensity:2.4});for(let L=0;L<2;L++){let F=new ne;F.add(O(k.sphere(.1,10,8),v,{shadow:!1})),F.add(O(k.cone(.08,.2,8),v,{y:.13,shadow:!1}));for(let q of[-1,1])F.add(O(k.sphere(.014,6,4),l,{x:q*.035,y:.01,z:.09,shadow:!1}));n.add(F),C.push(F)}n.scale.setScalar(1.02);function b(L,F){Ds(d,{...F,speed:F.speed*.8},L,{stride:.55,armSwing:.35,bob:.06,freq:.8}),f.rotation.z=Math.sin(d.phase)*.06*d.blend,f.rotation.y=0,m.scale.y=.001,_.forEach(U=>U.scale.y=.022);let q=F.action;if(q){let U=q.k,G=Math.sin(Math.min(1,U)*Math.PI);if(q.name==="swing"){let $=U<.3?-U/.3:-1+(U-.3)/.7*2.6;d.armR.rotation.x=fe.lerp(d.armR.rotation.x,-1.2*$-.3,.6),d.armR.rotation.z=-.3-G*.5,f.rotation.y=-$*.35,m.scale.y=.03*G}else if(q.name==="cast"||q.name==="summon"||q.name==="path"){let $=q.name==="summon"?-1.5:q.name==="path"?-1.1:-2.6;d.armL.rotation.x=$*G,d.armR.rotation.x=$*G,d.armL.rotation.z=.5*G,d.armR.rotation.z=-.5*G,f.position.y+=G*.08,f.rotation.x=-.12*G,m.scale.y=.04*G,_.forEach(it=>it.scale.y=.022-.015*G)}else q.name==="wave"&&(d.armL.rotation.x=-.3*G,d.armL.rotation.z=2.5*G+Math.sin(F.t*12)*.35*G,g.rotation.z=Math.sin(F.t*3)*.08*G,m.scale.y=.05*G,_.forEach($=>$.scale.y=.022-.016*G))}else g.rotation.z=0;(!q||q.name!=="swing")&&(d.lantern.rotation.x=-d.armR.rotation.x+Math.sin(F.t*2.4)*.12),d.lampMat.emissiveIntensity=2.2+(q&&q.name!=="wave"?Math.sin(Math.min(1,q.k)*Math.PI)*2.5:0),d.pack.rotation.x=Math.sin(d.phase*2)*.03*d.blend,C.forEach((U,G)=>{let $=F.t*(1.1+G*.3)+G*Math.PI,it=q&&q.name==="summon"?1.2+Math.sin(Math.min(1,q.k)*Math.PI)*1.2:1.15;U.position.set(Math.cos($)*it,1.7+Math.sin(F.t*2+G)*.2,Math.sin($)*it),U.rotation.y=-$+Math.PI}),Us(e,F,L)}return{root:e,update:b,height:2.4}}function ku(){let s=new ne,t=new ne;s.add(t);let e=new _e({color:789010,roughness:.35,metalness:.1,transparent:!0,opacity:.93,emissive:1444388,emissiveIntensity:.6}),n=[[0,0],[.5,0],[.58,.12],[.56,.5],[.5,1],[.46,1.5],[.43,1.8],[.42,2.05],[.38,2.28],[.28,2.44],[.12,2.52],[0,2.54]].map(([E,T])=>new mt(E,T)),i=O(new dr(n,32),e);t.add(i);let r=Q(15986662,{roughness:.45}).clone(),a=.29,o=.36,l=.13,c=2.06,h=.3;t.add(O(k.sphere(1,32,24),r,{y:c,z:h,sx:a,sy:o,sz:l}));let u=(E,T)=>{let w=1-E*E/(a*a)-T*T/(o*o);return h+l*Math.sqrt(Math.max(0,w))-.004},d=(E,T,w,C,v,b=0)=>{let L=O(k.sphere(1,16,10),v,{x:E,y:c+T,z:u(E,T),sx:w,sy:C,sz:.012,rz:b,shadow:!1});return L.lookAt(new I(E*2.2,c+T*1.4,2)),L.rotation.z+=b,t.add(L),L},f=Q(7290771,{roughness:.6}),g=new _e({color:328456,emissive:5974666,emissiveIntensity:0,roughness:1}),_=[];for(let E of[-1,1])_.push(d(E*.1,.05,.05,.03,g)),d(E*.1,.15,.028,.045,f,E*.3),d(E*.1,-.07,.022,.075,f);d(0,-.2,.05,.012,Q(3877427));let m=[];for(let E of[-1,1]){let T=ae(E*.4,1.55,.1);T.add(O(k.capsule(.05,.7,4,8),e,{y:-.4})),T.add(O(k.sphere(.07,10,8),e,{y:-.8})),T.rotation.z=E*.06,t.add(T),m.push(T)}let p=Cn("rgba(150,90,220,0.55)","rgba(80,30,140,0)"),y=new vn(new un({map:p,transparent:!0,depthWrite:!1,blending:Ne,opacity:0}));y.scale.set(3.4,4.2,1),y.position.set(0,1.4,-.2),t.add(y);let x=0;function M(E,T){var v,b;let w=T.t;x=fe.lerp(x,T.mode==="hunt"?1:0,1-Math.exp(-E*4)),t.position.y=.12+Math.sin(w*1.6)*.07,t.rotation.x=Math.min(.22,T.speed*.028),t.rotation.z=Math.sin(w*.9)*.03,m.forEach((L,F)=>{let q=F?1:-1;L.rotation.x=fe.lerp(.05,-1.35+Math.sin(w*5+F)*.08,x),L.rotation.z=q*(.06+.1*(1-x))}),g.emissiveIntensity=x*(.9+Math.sin(w*6)*.3),y.material.opacity=(.25+x*.5)*((v=T.appear)!=null?v:1);let C=(b=T.appear)!=null?b:1;e.opacity=.93*C,r.opacity=C,r.transparent=C<1,t.scale.set(.6+.4*C,C,.6+.4*C)}return{root:s,update:M,height:2.5}}function Cn(s,t,e=128){let n=document.createElement("canvas");n.width=n.height=e;let i=n.getContext("2d"),r=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);r.addColorStop(0,s),r.addColorStop(1,t),i.fillStyle=r,i.fillRect(0,0,e,e);let a=new Fn(n);return a.colorSpace=Me,a}var cc={gender:[["girl","\u0414\u0435\u0432\u043E\u0447\u043A\u0430"],["boy","\u041C\u0430\u043B\u044C\u0447\u0438\u043A"]],hairStyle:{girl:[["braids","\u041A\u043E\u0441\u0438\u0447\u043A\u0438"],["pony","\u0425\u0432\u043E\u0441\u0442\u0438\u043A"],["bob","\u041A\u0430\u0440\u0435"]],boy:[["messy","\u041B\u043E\u0445\u043C\u0430\u0442\u0430\u044F"],["spiky","\u0401\u0436\u0438\u043A"],["bob","\u0427\u0451\u043B\u043A\u0430"]]},hair:["#7a4a2a","#3a2217","#e8b86a","#c8683a","#f4f0f8","#9a6ad8"],sweater:["#b78ae8","#f07a5a","#6ab0e8","#f4c64a","#7ac88a","#f49ac0"],emblem:[["star","\u2B50"],["heart","\u2764\uFE0F"],["paw","\u{1F43E}"],["none","\u2014"]],ears:[["1","\u0414\u0430"],["0","\u041D\u0435\u0442"]],tail:[["1","\u0414\u0430"],["0","\u041D\u0435\u0442"]]},lc={gender:"girl",hairStyle:"braids",hair:"#7a4a2a",sweater:"#b78ae8",emblem:"star",ears:"1",tail:"1"},Gu="masha-game-look-v1";function vr(){try{return{...lc,...JSON.parse(localStorage.getItem(Gu)||"{}")}}catch{return{...lc}}}function Vu(s){try{localStorage.setItem(Gu,JSON.stringify(s))}catch{}}var qa=s=>new Yt(s),Zy=(s,t)=>"#"+qa(s).lerp(new Yt(16777215),t).getHexString(),Wu=(s,t)=>"#"+qa(s).lerp(new Yt(0),t).getHexString();function Hu(s,t){return Ke(256,256,(e,n,i)=>{e.fillStyle=s,e.fillRect(0,0,n,i),e.strokeStyle=Wu(s,.18),e.lineWidth=3;for(let l=8;l<n;l+=16)for(let c=0;c<i;c+=12)e.beginPath(),e.moveTo(l-5,c),e.lineTo(l,c+8),e.lineTo(l+5,c),e.stroke();e.fillStyle=Zy(s,.18);for(let l=0;l<300;l++)e.fillRect(Math.random()*n,Math.random()*i,2,2);let r=n*.5,a=i*.42,o=44;if(t==="star"){e.fillStyle="#f7d65a",e.strokeStyle="#c8962a",e.lineWidth=3,e.beginPath();for(let l=0;l<10;l++){let c=-Math.PI/2+l*Math.PI/5,h=l%2?o*.45:o;e.lineTo(r+Math.cos(c)*h,a+Math.sin(c)*h)}e.closePath(),e.fill(),e.stroke()}else if(t==="heart")e.fillStyle="#f0506a",e.beginPath(),e.moveTo(r,a+o*.8),e.bezierCurveTo(r-o*1.4,a-o*.2,r-o*.5,a-o*1.1,r,a-o*.35),e.bezierCurveTo(r+o*.5,a-o*1.1,r+o*1.4,a-o*.2,r,a+o*.8),e.fill();else if(t==="paw"){e.fillStyle="#fff4e8",e.beginPath(),e.ellipse(r,a+8,15,12,0,0,7),e.fill();for(let[l,c]of[[-16,-10],[-6,-20],[6,-20],[16,-10]])e.beginPath(),e.ellipse(r+l,a+c,6,7,0,0,7),e.fill()}})}function Jy(){return Ke(128,128,(s,t,e)=>{s.fillStyle="#7fa6d6",s.fillRect(0,0,t,e);for(let n=0;n<900;n++)s.fillStyle=Math.random()<.5?"rgba(255,255,255,.18)":"rgba(30,60,120,.18)",s.fillRect(Math.random()*t,Math.random()*e,1,3)})}function Xu(s){let t={...lc,...s||{}},e=t.gender==="girl",n=new ne,i=new ne;n.add(i);let r=Q(16308420,{roughness:.6}),a=Q(qa(t.hair).getHex(),{roughness:.55}),o=Q(qa(Wu(t.hair,.2)).getHex(),{roughness:.6}),l=Hu(t.sweater,t.emblem);l.wrapS=An;let c=new _e({map:l,roughness:.95}),h=Hu(t.sweater,"none");h.wrapS=h.wrapT=An,h.repeat.set(1,1);let u=new _e({map:h,roughness:.95}),d=new _e({map:Jy(),roughness:.9}),f=Q(16184568,{roughness:.5}),g=Q(14207210,{roughness:.6}),_=Q(16447476,{roughness:.9}),m=Q(16103624,{roughness:.9}),p={bodyY:.52};for(let C of[-1,1]){let v=ae(C*.1,.52,0);v.add(O(k.capsule(.078,.3),d,{y:-.2})),v.add(O(k.cyl(.085,.09,.06,14),d,{y:-.39})),v.add(O(k.sphere(1,16,12),f,{y:-.46,z:.04,sx:.095,sy:.07,sz:.14})),v.add(O(k.box(.17,.03,.26),g,{y:-.515,z:.04})),e&&v.add(O(k.torus(.02,.008,6,10),Q(12101872),{y:-.41,z:.12,rx:.3,shadow:!1})),i.add(v),C<0?p.legR=v:p.legL=v}let y=ae(0,p.bodyY,0);i.add(y),p.body=y,y.add(O(k.cyl(.19,.2,.1,20),d,{y:0}));let x=O(k.cyl(.19,.225,.34,24),c,{y:.2});x.rotation.y=Math.PI,y.add(x),y.add(O(k.torus(.2,.035,8,24),u,{y:.04,rx:Math.PI/2})),y.add(O(k.sphere(.19,20,10),u,{y:.37,sy:.42})),y.add(O(k.torus(.075,.03,8,16),u,{y:.42,rx:Math.PI/2}));for(let C of[-1,1]){let v=ae(C*.22,.34,0);v.add(O(k.capsule(.075,.16),u,{y:-.12})),v.add(O(k.torus(.06,.025,6,12),u,{y:-.26,rx:Math.PI/2})),v.add(O(k.sphere(.055,12,10),r,{y:-.31})),y.add(v),C<0?p.armR=v:p.armL=v}if(t.tail==="1"){let C=ae(0,.06,-.2);y.add(C);let v=Te(1,2,.12,4),b=[],L=C;for(let F=0;F<5;F++){let q=ae(0,.05,-.07);L.add(q),q.add(O(v,_,{sx:.085+F*.012,sy:.085+F*.012,sz:.1+F*.012})),b.push(q),L=q}p.tailSegs=b}let M=ae(0,.44,0);y.add(M),p.head=M,M.add(O(k.sphere(.27,32,24),r,{y:.24,sy:.95}));for(let C of[-1,1]){let v=Wa(.062,4860442);v.position.set(C*.1,.22,.24),v.rotation.y=C*.28,M.add(v),M.add(O(k.sphere(1,10,8),Q(15899290,{opacity:.7,roughness:1}),{x:C*.17,y:.14,z:.2,sx:.05,sy:.025,sz:.02,ry:C*.6,shadow:!1}))}M.add(O(k.torus(.024,.007,6,12,Math.PI),Q(10107701),{y:.12,z:.262,rz:Math.PI,shadow:!1})),M.add(O(k.sphere(.012,8,6),Q(15245456),{y:.17,z:.268,shadow:!1}));let E=new ze(.29,32,20,0,Math.PI*2,0,Math.PI*.6);M.add(O(E,a,{y:.24,z:-.01,rx:-.72})),M.add(O(k.sphere(.28,24,16),a,{y:.17,z:-.09,sx:1.04,sy:.92,sz:.94}));let T=t.hairStyle;if(T==="messy"||T==="spiky"){let C=Te(1,1,.25,9),v=T==="spiky"?14:10;for(let b=0;b<v;b++){let L=b/v*Math.PI*2,F=.35+b%3*.12,q=Math.cos(L)*.2,U=Math.sin(L)*.2-.03;U>.14&&Math.abs(q)<.12||M.add(T==="spiky"?O(k.cone(.05,.14,6),a,{x:q,y:.36+F*.1,z:U,rx:U*2.5,rz:-q*2.5}):O(C,b%2?a:o,{x:q*1.1,y:.3+F*.12,z:U,sx:.09,sy:.07,sz:.09}))}for(let[b,L]of[[-.12,.34],[-.03,.36],[.07,.355],[.15,.33]])M.add(O(k.sphere(1,10,8),a,{x:b,y:L,z:.22,sx:.075,sy:.07,sz:.05,rz:b*2}))}else{for(let[C,v]of[[-.14,.34],[-.05,.355],[.05,.35],[.14,.335]])M.add(O(k.sphere(1,12,10),a,{x:C,y:v,z:.215,sx:.08,sy:.08,sz:.055,rz:C*1.4}));for(let C of[-1,1])M.add(O(k.capsule(.05,.16,4,8),a,{x:C*.245,y:.13,z:.07,rz:C*.12}))}if(p.braids=[],T==="braids")for(let C of[-1,1]){let v=ae(C*.2,.12,-.12);M.add(v);for(let b=0;b<4;b++)v.add(O(k.sphere(1,10,8),a,{x:C*.02*b,y:-.07*b-.02,z:-.02*b,sx:.05-b*.004,sy:.055,sz:.05-b*.004}));v.add(O(k.sphere(.03,10,8),Q(10124008,{roughness:.3,emissive:3807856,emissiveIntensity:.4}),{x:C*.07,y:-.31,z:-.07})),v.add(O(k.cone(.04,.09,8),a,{x:C*.075,y:-.37,z:-.08,rx:Math.PI})),p.braids.push(v)}else if(T==="pony"){let C=ae(0,.32,-.25);M.add(C),C.add(O(k.torus(.04,.016,8,16),Q(10124008,{roughness:.3}),{rx:Math.PI/2-.4})),C.add(O(k.capsule(.055,.16,4,8),a,{y:-.11,z:-.05,rx:.5})),p.braids.push(C)}if(e){let C=new ne;for(let v=0;v<6;v++){let b=v*Math.PI/3;C.add(O(k.sphere(1,8,6),Q(16777215,{roughness:.5}),{x:Math.cos(b)*.035,y:Math.sin(b)*.035,sx:.028,sy:.028,sz:.012,shadow:!1}))}C.add(O(k.sphere(.018,8,6),Q(16238666),{z:.01,shadow:!1})),C.position.set(.2,.38,.12),C.rotation.set(-.3,.7,0),M.add(C)}if(t.ears==="1"){p.ears=[];for(let C of[-1,1]){let v=ae(C*.16,.44,-.02);v.rotation.z=-C*.35,v.add(O(k.cone(.085,.19,4),_,{y:.07,sz:.55,ry:Math.PI/4})),v.add(O(k.cone(.05,.13,4),m,{y:.06,z:.02,sz:.3,ry:Math.PI/4})),v.add(O(Te(1,1,.2,C+3),_,{y:.005,sx:.07,sy:.04,sz:.05})),M.add(v),p.ears.push(v)}}i.scale.setScalar(1.05);function w(C,v){Ds(p,v,C,{stride:.9,armSwing:.9,bob:.05});let b=v.action;if(b&&b.name==="wave"){let L=Math.sin(Math.min(1,b.k)*Math.PI);p.armL.rotation.z=2.7*L+Math.sin(v.t*14)*.3*L,p.armL.rotation.x=-.2*L,p.head.rotation.z=Math.sin(v.t*4)*.1*L}else p.head.rotation.z=0;p.tailSegs&&p.tailSegs.forEach((L,F)=>{L.rotation.y=Math.sin(v.t*3-F*.6)*(.25-p.blend*.15),L.rotation.x=-.25+p.blend*.2+p.air*.3}),p.ears&&p.ears.forEach((L,F)=>{L.rotation.x=Math.max(0,Math.sin(v.t*1.3+F*2))**8*.4}),p.braids.forEach((L,F)=>{L.rotation.x=.1+Math.sin(p.phase*2+F)*.18*p.blend+p.air*.4}),Us(n,v,C)}return{root:n,update:w,height:1.55}}var jy=s=>{try{return s&&s!=="classic"?JSON.parse(s):vr()}catch{return vr()}},Qe=[{id:"kid",name:"\u041C\u043E\u0439 \u043A\u043E\u0442\u0438\u043A",rarity:"\u041C\u041E\u0419 \u0413\u0415\u0420\u041E\u0419",rarityClass:"rare",about:"\u0422\u0432\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0433\u0435\u0440\u043E\u0439! \u0412\u044B\u0431\u0435\u0440\u0438, \u0434\u0435\u0432\u043E\u0447\u043A\u0430 \u0438\u043B\u0438 \u043C\u0430\u043B\u044C\u0447\u0438\u043A, \u043F\u0440\u0438\u0447\u0451\u0441\u043A\u0443, \u0441\u0432\u0438\u0442\u0435\u0440, \u0443\u0448\u043A\u0438 \u0438 \u0445\u0432\u043E\u0441\u0442\u0438\u043A \u043A\u043E\u0442\u0438\u043A\u0430.",ability:"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430",abilityText:"Q \u2014 \u043F\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u0432 \u043F\u0440\u0435\u0434\u043C\u0435\u0442, G \u2014 \u043F\u043E\u043C\u0430\u0445\u0430\u0442\u044C. \u041F\u0440\u044B\u0433\u0443\u0447\u0438\u0439 \u0438 \u043B\u043E\u0432\u043A\u0438\u0439, \u043A\u0430\u043A \u041C\u0430\u0448\u0430.",tags:["\u0421\u0432\u043E\u0439 \u0441\u043A\u0438\u043D","\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430"],build:s=>Xu(jy(s)),radius:.42,height:1.6,custom:!0,bot:!1,cam:{distance:6,height:1.4}},{id:"masha",name:"\u041C\u0430\u0448\u0430",rarity:"\u0413\u0415\u0420\u041E\u0419",rarityClass:"hero",about:"\u0421\u043C\u0435\u043B\u0430\u044F \u0434\u0435\u0432\u043E\u0447\u043A\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043D\u0430\u0448\u043B\u0430 \u0434\u043E\u0440\u043E\u0433\u0443 \u0432 \u043C\u0438\u0440 \u0434\u0443\u0445\u043E\u0432. \u041B\u0451\u0433\u043A\u0430\u044F, \u043F\u0440\u044B\u0433\u0443\u0447\u0430\u044F \u0438 \u043E\u0447\u0435\u043D\u044C \u0431\u044B\u0441\u0442\u0440\u0430\u044F \u043D\u0430 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430\u0445.",ability:"\u041B\u0451\u0433\u043A\u0438\u0435 \u043D\u043E\u0433\u0438",abilityText:"\u041F\u0440\u044B\u0433\u0430\u0435\u0442 \u0432\u044B\u0448\u0435 \u0432\u0441\u0435\u0445 \u0438 \u0440\u0435\u0437\u043A\u043E \u0441\u0442\u0430\u0440\u0442\u0443\u0435\u0442. E \u2014 \u0440\u044B\u0432\u043E\u043A, G \u2014 \u043F\u043E\u043C\u0430\u0445\u0430\u0442\u044C.",tags:["\u041F\u0440\u044B\u0436\u043E\u043A","\u0412\u044B\u043D\u043E\u0441\u043B\u0438\u0432\u043E\u0441\u0442\u044C"],build:Fu,radius:.42,height:1.72,cam:{distance:6.2,height:1.45}},{id:"catbus",name:"\u041D\u044D\u043A\u043E\u0411\u0443\u0441",rarity:"\u042D\u041F\u0418\u0427\u0415\u0421\u041A\u0418\u0419",rarityClass:"epic",about:"\u0414\u0443\u0445-\u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0443\u0432\u0435\u0437\u0451\u0442 \u0442\u0435\u0431\u044F \u0432 \u0441\u0430\u043C\u044B\u0435 \u0443\u0434\u0438\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043C\u0435\u0441\u0442\u0430. \u0412\u0441\u0435\u0433\u0434\u0430 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442, \u043A\u043E\u0433\u0434\u0430 \u0442\u044B \u0432 \u043F\u0443\u0442\u0438.",ability:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u043D\u043E\u0439 \u0440\u0435\u0439\u0441",abilityText:"\u0421\u0430\u043C\u044B\u0439 \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u043D\u0430 \u043F\u0440\u044F\u043C\u043E\u0439, \u043D\u043E \u0442\u044F\u0436\u0451\u043B\u044B\u0439 \u0438 \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E \u043F\u043E\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442. E \u2014 \u0434\u043B\u0438\u043D\u043D\u044B\u0439 \u0440\u044B\u0432\u043E\u043A.",tags:["\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C","\u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435"],build:zu,radius:.85,height:1.9,cam:{distance:8.2,height:2.1,side:.6}},{id:"moti",name:"\u0414\u044F\u0434\u044E\u0448\u043A\u0430 \u041C\u043E\u0442\u0438",rarity:"\u042D\u041F\u0418\u0427\u0415\u0421\u041A\u0418\u0419",rarityClass:"epic",about:"\u0414\u043E\u0431\u0440\u043E\u0434\u0443\u0448\u043D\u044B\u0439 \u0432\u0435\u043B\u0438\u043A\u0430\u043D, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u043E\u0441\u0438\u0442 \u043D\u0430 \u0441\u043F\u0438\u043D\u0435 \u0443\u044E\u0442\u043D\u044B\u0439 \u043F\u0440\u0438\u044E\u0442 \u0434\u043B\u044F \u0434\u0443\u0445\u043E\u0432. \u0422\u0430\u043C \u0432\u0441\u0435\u0433\u0434\u0430 \u043D\u0430\u0439\u0434\u0451\u0442\u0441\u044F \u043C\u0435\u0441\u0442\u043E \u0434\u043B\u044F \u043D\u043E\u0432\u044B\u0445 \u0434\u0440\u0443\u0437\u0435\u0439.",ability:"\u0423\u044E\u0442\u043D\u044B\u0439 \u043F\u0440\u0438\u044E\u0442",abilityText:"\u041A\u0443\u043F\u043E\u043B, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0411\u0435\u0437\u043B\u0438\u043A \u043D\u0438\u043A\u043E\u0433\u043E \u043D\u0435 \u043F\u043E\u0439\u043C\u0430\u0435\u0442. \u0415\u0449\u0451 3 \u0443\u043C\u0435\u043D\u0438\u044F: 2, 3, 4, F.",tags:["\u0417\u0430\u0449\u0438\u0442\u0430","\u041B\u0435\u0447\u0435\u043D\u0438\u0435","\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430","\u041A\u043E\u043C\u0430\u043D\u0434\u0430"],build:s=>Bu(s),radius:.85,height:2.4,skins:Xa,helper:!0,cam:{distance:8.4,height:3,side:1.3}}],Be={id:"noface",name:"\u0411\u0435\u0437\u043B\u0438\u043A",rarity:"\u041E\u0425\u041E\u0422\u041D\u0418\u041A",rarityClass:"hunter",about:"\u0422\u0438\u0445\u0438\u0439 \u0434\u0443\u0445 \u0432 \u0431\u0435\u043B\u043E\u0439 \u043C\u0430\u0441\u043A\u0435. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0438\u0449\u0435\u0442 \u0441\u043F\u0440\u044F\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044F, \u043F\u043E\u0442\u043E\u043C \u0434\u043E\u0433\u043E\u043D\u044F\u0435\u0442. \u0423\u043C\u0435\u0435\u0442 \u043F\u0440\u0438\u0442\u0432\u043E\u0440\u044F\u0442\u044C\u0441\u044F \u0433\u0435\u0440\u043E\u044F\u043C\u0438 \u0438 \u0432\u0435\u0449\u0430\u043C\u0438.",ability:"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430",abilityText:"\u0418\u0433\u0440\u0430\u0435\u0448\u044C \u0432\u043E\u0434\u044F\u0449\u0438\u043C! 1 \u2014 \u0441\u0442\u0430\u0442\u044C \u0433\u0435\u0440\u043E\u0435\u043C, 2 \u2014 \u0441\u0442\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u043C, E \u2014 \u0440\u044B\u0432\u043E\u043A (3 \u0437\u0430\u0440\u044F\u0434\u0430), \u041F\u0440\u043E\u0431\u0435\u043B \u2014 \u0432\u0437\u043B\u0435\u0442\u0435\u0442\u044C.",tags:["\u041E\u0445\u043E\u0442\u0430","\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430","\u041F\u043E\u043B\u0451\u0442"],build:ku,radius:.55,height:2.5,cam:{distance:7.6,height:2.3,side:.6}};var $a,qu,Ya=class{constructor(t=32){de(this,$a);this.half=t,this.boxes=[],this.circles=[],this.bushes=[],this.ladders=[],this.grid=null}addBox(t,e,n,i,r,a={}){var c,h,u;let o=(c=a.bottom)!=null?c:0,l={minX:t-n/2,maxX:t+n/2,minZ:e-i/2,maxZ:e+i/2,bottom:o,top:r,topAt:a.topAt||null,sight:(h=a.sight)!=null?h:r-o>1.4,nav:(u=a.nav)!=null?u:o<1.2};return this.boxes.push(l),this.grid=null,l}addRoof(t,e,n,i,r,a,o="x"){let l=(o==="x"?i:n)/2,c=o==="x"?(h,u)=>r+(a-r)*Math.max(0,1-Math.abs(u-e)/l):(h,u)=>r+(a-r)*Math.max(0,1-Math.abs(h-t)/l);return this.addBox(t,e,n,i,a,{bottom:r-.25,topAt:c,sight:!0,nav:!1})}addCircle(t,e,n,i,r={}){var o,l,c;let a={x:t,z:e,r:n,bottom:(o=r.bottom)!=null?o:0,top:i,sight:(l=r.sight)!=null?l:i>1.4,nav:(c=r.nav)!=null?c:!0};return this.circles.push(a),this.grid=null,a}addBush(t,e,n,i="bush"){this.bushes.push({x:t,z:e,r:n,kind:i})}addLadder(t,e,n,i,r,a){this.ladders.push({x:t,z:e,nx:n,nz:i,w:r,top:a})}near(t,e){this.grid||Y(this,$a,qu).call(this);let{n,cells:i,idx:r}=this.grid;return i[r(e)*n+r(t)]}topOf(t,e,n){return t.topAt?t.topAt(e,n):t.top}inBush(t,e,n=0){return n>1.2?!1:this.bushes.some(i=>(t-i.x)**2+(e-i.z)**2<(i.r*.9)**2)}groundAt(t,e,n,i){let r=0,a=n*.7,o=this.near(t,e);for(let l of o.boxes){if(!(t+a>l.minX&&t-a<l.maxX&&e+a>l.minZ&&e-a<l.maxZ))continue;let c=Math.max(l.minX,Math.min(t,l.maxX)),h=Math.max(l.minZ,Math.min(e,l.maxZ)),u=this.topOf(l,c,h);u>i||u<=r||(r=u)}for(let l of o.circles)l.top>i||l.top<=r||(t-l.x)**2+(e-l.z)**2<(l.r+a)**2&&(r=l.top);return r}ceilingAt(t,e,n,i){let r=1/0,a=n*.7,o=this.near(t,e);for(let l of o.boxes)l.bottom<=i+.05||l.bottom>=r||t+a>l.minX&&t-a<l.maxX&&e+a>l.minZ&&e-a<l.maxZ&&(r=l.bottom);for(let l of o.circles)l.bottom<=i+.05||l.bottom>=r||(t-l.x)**2+(e-l.z)**2<(l.r+a)**2&&(r=l.bottom);return r}resolve(t,e,n,i=1/0){let r=!1,a=this.near(t.x,t.z);for(let l=0;l<3;l++){let c=!1;for(let h of a.boxes){if(h.bottom>=i)continue;let u=Math.max(h.minX,Math.min(t.x,h.maxX)),d=Math.max(h.minZ,Math.min(t.z,h.maxZ)),f=t.x-u,g=t.z-d,_=f*f+g*g;if(!(_>=e*e)&&!(this.topOf(h,u,d)<=n)){if(_>1e-8){let m=Math.sqrt(_);t.x+=f/m*(e-m),t.z+=g/m*(e-m)}else{let m=[[t.x-h.minX,-1,0],[h.maxX-t.x,1,0],[t.z-h.minZ,0,-1],[h.maxZ-t.z,0,1]];m.sort((M,E)=>M[0]-E[0]);let[p,y,x]=m[0];t.x+=y*(p+e),t.z+=x*(p+e)}r=c=!0}}for(let h of a.circles){if(h.top<=n||h.bottom>=i)continue;let u=t.x-h.x,d=t.z-h.z,f=e+h.r,g=u*u+d*d;if(g>=f*f)continue;let _=Math.sqrt(g)||1e-4;t.x=h.x+u/_*f,t.z=h.z+d/_*f,r=c=!0}if(!c)break}let o=this.half-e-.3;return t.x=Math.max(-o,Math.min(o,t.x)),t.z=Math.max(-o,Math.min(o,t.z)),r}ledgeAt(t,e,n,i,r){let a=this.near(t,e),o=-1/0;for(let l of a.boxes){if(t<=l.minX||t>=l.maxX||e<=l.minZ||e>=l.maxZ)continue;let c=this.topOf(l,t,e);c>n+.3&&c<=n+i&&l.bottom<n+r&&c>o&&(o=c)}for(let l of a.circles)(t-l.x)**2+(e-l.z)**2>=l.r*l.r||l.top>n+.3&&l.top<=n+i&&l.bottom<n+r&&l.top>o&&(o=l.top);if(o===-1/0)return null;for(let l of a.boxes)if(!(t<=l.minX||t>=l.maxX||e<=l.minZ||e>=l.maxZ)&&this.topOf(l,t,e)>o+.05&&l.bottom<o+r*.8)return null;for(let l of a.circles)if(!((t-l.x)**2+(e-l.z)**2>=l.r*l.r)&&l.top>o+.05&&l.bottom<o+r*.8)return null;return o}ladderAt(t,e,n,i){for(let r of this.ladders){let a=t-r.x,o=e-r.z,l=a*r.nx+o*r.nz,c=Math.abs(a*-r.nz+o*r.nx);if(l>-.2&&l<n+.45&&c<r.w/2&&i<r.top-.1)return r}return null}lineOfSight(t,e,n,i,r=!1,a=1.5,o=1.5){let l=n-t,c=i-e,h=Math.hypot(l,c),u=Math.ceil(h/.4);for(let d=1;d<u;d++){let f=d/u,g=t+l*f,_=e+c*f,m=a+(o-a)*f,p=this.near(g,_);for(let y of p.boxes)if(!(!y.sight||g<=y.minX||g>=y.maxX||_<=y.minZ||_>=y.maxZ)&&m>y.bottom&&m<this.topOf(y,g,_))return!1;for(let y of p.circles)if(y.sight&&m>y.bottom&&m<y.top&&(g-y.x)**2+(_-y.z)**2<y.r*y.r)return!1;if(!r&&m<1.6){for(let y of this.bushes)if((g-y.x)**2+(_-y.z)**2<(y.r*.8)**2)return!1}}return!0}};$a=new WeakSet,qu=function(){let t=Math.ceil((this.half*2+8)/4),e=Array.from({length:t*t},()=>({boxes:[],circles:[]})),n=i=>Math.max(0,Math.min(t-1,Math.floor((i+this.half+4)/4)));for(let i of this.boxes)for(let r=n(i.minZ-1.5);r<=n(i.maxZ+1.5);r++)for(let a=n(i.minX-1.5);a<=n(i.maxX+1.5);a++)e[r*t+a].boxes.push(i);for(let i of this.circles)for(let r=n(i.z-i.r-1.5);r<=n(i.z+i.r+1.5);r++)for(let a=n(i.x-i.r-1.5);a<=n(i.x+i.r+1.5);a++)e[r*t+a].circles.push(i);this.grid={n:t,cells:e,idx:n}};function Yu(s,t=()=>!1){let e=new Map,n=[];s.updateMatrixWorld(!0),s.traverse(r=>{if(!r.isMesh||r.userData.keep||t(r)||!(r.material instanceof _e))return;let a=r.material.uuid+(r.castShadow?":s":":n");e.has(a)||e.set(a,{material:r.material,cast:r.castShadow,geos:[]});let o=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();for(let l of Object.keys(o.attributes))["position","normal","uv"].includes(l)||o.deleteAttribute(l);o.attributes.uv||o.setAttribute("uv",new re(new Float32Array(o.attributes.position.count*2),2)),o.applyMatrix4(r.matrixWorld),e.get(a).geos.push(o),n.push(r)});for(let r of n)r.parent.remove(r);let i=0;for(let{material:r,cast:a,geos:o}of e.values()){let l=o.reduce((_,m)=>_+m.attributes.position.count,0),c=new Float32Array(l*3),h=new Float32Array(l*3),u=new Float32Array(l*2),d=0;for(let _ of o)c.set(_.attributes.position.array,d*3),h.set(_.attributes.normal.array,d*3),u.set(_.attributes.uv.array,d*2),d+=_.attributes.position.count,_.dispose();let f=new ye;f.setAttribute("position",new Ce(c,3)),f.setAttribute("normal",new Ce(h,3)),f.setAttribute("uv",new Ce(u,2)),f.computeBoundingSphere();let g=new oe(f,r);g.castShadow=a,g.receiveShadow=!0,g.matrixAutoUpdate=!1,s.add(g),i++}return{merged:n.length,calls:i}}var ke=44;function $u(s,{isMobile:t}){let e=new Ya(ke),n=[],i=new cn,r=(P,B,z,H,V,pt)=>{let wt=new oe(new Kn(H,V,pt),i);wt.position.set(P,B,z),wt.updateMatrixWorld(!0),n.push(wt)},a=Cn("rgba(255,190,110,0.9)","rgba(255,140,40,0)"),o=[];s.background=new Yt(856112),s.fog=new Ra(1382974,.022);let l=new ze(180,32,16),c=new hn({side:je,depthWrite:!1,fog:!1,uniforms:{top:{value:new Yt(461346)},bottom:{value:new Yt(3814512)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying vec3 vP; void main(){ float h = smoothstep(-0.05, 0.55, vP.y); gl_FragColor = vec4(mix(bottom, top, h), 1.); }"});s.add(new oe(l,c));let h=new oe(new ze(7,32,16),new cn({color:16052700,fog:!1}));h.position.set(-60,70,-120),s.add(h);let u=new vn(new un({map:Cn("rgba(220,225,255,0.55)","rgba(120,130,220,0)"),fog:!1,depthWrite:!1,blending:Ne}));u.scale.set(60,60,1),u.position.copy(h.position),s.add(u);let d=new ye,f=[];for(let P=0;P<700;P++){let B=Math.random()*Math.PI*2,z=Math.random()*1.2+.15;f.push(Math.cos(B)*Math.cos(z)*170,Math.sin(z)*170,Math.sin(B)*Math.cos(z)*170)}d.setAttribute("position",new re(f,3)),s.add(new gi(d,new Qn({color:14673151,size:1.1,fog:!1,sizeAttenuation:!1,transparent:!0,opacity:.8}))),s.add(new Ps(8029912,1906736,1.05));let g=new Ls(12766463,1.35);g.position.set(-18,30,-14),g.castShadow=!0,g.shadow.mapSize.set(t?1024:2048,t?1024:2048);let _=g.shadow.camera;_.left=-26,_.right=26,_.top=26,_.bottom=-26,_.near=1,_.far=90,g.shadow.bias=-8e-4,g.shadow.normalBias=.03,s.add(g,g.target);let m=Ke(256,256,(P,B,z)=>{P.fillStyle="#26402f",P.fillRect(0,0,B,z);for(let H=0;H<2600;H++){let V=50+Math.random()*40;P.fillStyle=`rgba(${V*.55|0},${V+20|0},${V*.7|0},${.25+Math.random()*.35})`,P.fillRect(Math.random()*B,Math.random()*z,2,3+Math.random()*4)}});m.wrapS=m.wrapT=An,m.repeat.set(18,18);let p=new oe(new mi(ke*4,ke*4),new _e({map:m,roughness:1}));p.rotation.x=-Math.PI/2,p.receiveShadow=!0,p.userData.keep=!0,s.add(p);let y=Ke(256,256,(P,B,z)=>{P.fillStyle="#3b3a44",P.fillRect(0,0,B,z);for(let H=0;H<z;H+=32)for(let V=H/32%2?-24:0;V<B;V+=48){let pt=88+Math.random()*40;P.fillStyle=`rgb(${pt},${pt-4},${pt+8})`,P.beginPath(),P.roundRect(V+3,H+3,42,26,8),P.fill()}});y.wrapS=y.wrapT=An;let x=(P,B)=>{let z=y.clone();return z.needsUpdate=!0,z.repeat.set(P,B),new _e({map:z,roughness:.95})},M=(P,B,z,H)=>{let V=new oe(new mi(z,H),x(z/2.2,H/2.2));V.rotation.x=-Math.PI/2,V.position.set(P,.015,B),V.receiveShadow=!0,s.add(V)};M(0,0,3.4,58),M(0,0,56,3.2),M(0,-21,9,7);let E=Ke(128,128,(P,B,z)=>{P.fillStyle="#ffd58a",P.fillRect(0,0,B,z);let H=P.createRadialGradient(B/2,z/2,10,B/2,z/2,80);H.addColorStop(0,"rgba(255,240,190,1)"),H.addColorStop(1,"rgba(255,160,60,0.4)"),P.fillStyle=H,P.fillRect(0,0,B,z),P.strokeStyle="#4a2e1c",P.lineWidth=5;for(let V=0;V<=4;V++)P.beginPath(),P.moveTo(V*B/4,0),P.lineTo(V*B/4,z),P.stroke(),P.beginPath(),P.moveTo(0,V*z/4),P.lineTo(B,V*z/4),P.stroke()}),T=new _e({map:E,emissive:16753226,emissiveMap:E,emissiveIntensity:1.25,roughness:.8}),w=Q(7227955,{roughness:.85}),C=Q(13482908,{roughness:.95}),v=Q(3093328,{roughness:.6}),b=Q(1908531,{roughness:.6}),L=Q(4139549,{roughness:.8});function F(P,B,z,H,V=3.2,pt="z",wt={}){let It=new ne;It.position.set(P,0,B);let zt=.35+V;It.add(O(k.box(z+.3,.35,H+.3),Q(4933714),{y:.17})),e.addBox(P,B,z+.3,H+.3,.35,{sight:!1,nav:!1});let Lt=.28,ot=2.5,D=2.95,st=pt==="z";if(wt.enter){let ce=(Ve,bi,Bn,Si,A=.35,W=zt)=>{It.add(O(k.box(Bn,W-A,Si),C,{x:Ve-P,y:(A+W)/2,z:bi-B})),e.addBox(Ve,bi,Bn,Si,W,{bottom:A>.35?A:0,sight:!0,nav:A<=.35}),r(Ve,(A+W)/2,bi,Bn,W-A,Si)},Le=Ve=>{let bi=st?z:H,Bn=(bi-ot)/2;for(let Si of[-1,1]){let A=Si*(ot/2+Bn/2);st?ce(P+A,B+Ve*(H/2-Lt/2),Bn,Lt):ce(P+Ve*(z/2-Lt/2),B+A,Lt,Bn)}st?ce(P,B+Ve*(H/2-Lt/2),ot,Lt,D):ce(P+Ve*(z/2-Lt/2),B,Lt,ot,D)};if(Le(1),Le(-1),st)for(let Ve of[-1,1])ce(P+Ve*(z/2-Lt/2),B,Lt,H-2*Lt);else for(let Ve of[-1,1])ce(P,B+Ve*(H/2-Lt/2),z-2*Lt,Lt);It.add(O(k.box(z-.1,.04,H-.1),Q(12100712,{roughness:1}),{y:.37,shadow:!1})),It.add(O(k.box(z-.1,.08,H-.1),L,{y:zt-.05,shadow:!1}));let rn=(st?1:.5)*(z/2-1),Ge=(st?.5:1)*(H/2-1),In=O(k.box(1.6,1.5,.08),Q(15852740,{roughness:.9,emissive:3810320,emissiveIntensity:.3}),{x:rn,y:1.1,z:Ge-.5,ry:.5});It.add(In),It.add(O(k.box(.9,.35,.9),Q(8076106),{x:rn,y:.55,z:Ge})),e.addBush(P+rn,B+Ge,1,"screen"),It.add(O(k.sphere(.2,12,8),G,{x:-rn*.6,y:zt-.6,z:-Ge*.6,sy:1.3,shadow:!1})),o.push(new I(P-rn*.6,zt-.6,B-Ge*.6))}else{let ce=O(k.box(z,V,H),C,{y:.35+V/2});ce.receiveShadow=!0,It.add(ce),e.addBox(P,B,z,H,zt,{sight:!0}),r(P,.35+V/2,B,z,V,H)}for(let ce of[-1,1])for(let Le of[-1,1])It.add(O(k.box(.22,V,.22),L,{x:ce*z/2,y:.35+V/2,z:Le*H/2}));It.add(O(k.box(z+.05,.16,H+.05),L,{y:.35+V*.62}));let gt=.35+V*.38;for(let ce of[-1,1])for(let Le=-1;Le<=1;Le+=2){let rn=wt.enter&&st,Ge=wt.enter&&!st;z>3.5&&!rn&&It.add(O(k.box(z*.26,V*.34,.06),T,{x:Le*z*.24,y:gt,z:ce*(H/2+.02),shadow:!1})),H>3.5&&!Ge&&It.add(O(k.box(.06,V*.34,H*.26),T,{x:ce*(z/2+.02),y:gt,z:Le*H*.24,shadow:!1}))}if(wt.enter)for(let ce of[-1,1])It.add(O(st?k.box(ot+.3,.2,.34):k.box(.34,.2,ot+.3),L,{x:st?0:ce*z/2,y:D+.1,z:st?ce*H/2:0}));else{let ce=st?{x:0,z:H/2+.03,sx:1.1,sz:.06}:{x:z/2+.03,z:0,sx:.06,sz:1.1};It.add(O(k.box(ce.sx,1.9,ce.sz),T,{x:ce.x,y:1.3,z:ce.z,shadow:!1}))}let Dt=.7,Nt=Math.min(z,H)*.42,Rt=st?z:H,Wt=st?H:z,se=new ki;se.moveTo(-Wt/2-Dt,0),se.lineTo(0,Nt),se.lineTo(Wt/2+Dt,0),se.lineTo(Wt/2+Dt-.25,-.12),se.lineTo(0,Nt-.28),se.lineTo(-Wt/2-Dt+.25,-.12),se.closePath();let le=new oe(new Rs(se,{depth:Rt+Dt*2,bevelEnabled:!1}),v);le.castShadow=!0,le.position.set(0,zt,0),st?(le.rotation.y=Math.PI/2,le.position.x=-(Rt/2+Dt)):le.position.z=-(Rt/2+Dt),It.add(le),It.add(O(k.box(st?Rt+Dt*2:.3,.25,st?.3:Rt+Dt*2),b,{y:zt+Nt-.05})),s.add(It);let ie=Wt/2+Dt,Se=st?(ce,Le)=>zt+Nt*Math.max(0,1-Math.abs(Le-B)/ie):(ce,Le)=>zt+Nt*Math.max(0,1-Math.abs(ce-P)/ie);e.addBox(P,B,z+.3,H+.3,zt+Nt,{bottom:zt-.25,topAt:Se,sight:!0,nav:!1}),r(P,zt+Nt/2,B,z+Dt,Nt,H+Dt);let fn=P+(st?z/2-.6:z/2+.5),Pr=B+(st?H/2+.5:H/2-.6);if(wt.enter?it(P+(st?ot/2+.5:z/2+.5),B+(st?H/2+.5:ot/2+.5),2.6,16738874):it(fn,Pr,2.6,16738874),wt.ladder){let ce=wt.ladder,Le,rn,Ge,In;if(ce==="back")Ge=st?0:-1,In=st?-1:0;else{let Ve=ce==="left"?-1:1;Ge=st?Ve:0,In=st?0:Ve}Le=P+Ge*(z/2+.02)+(In!==0?z*.25:0),rn=B+In*(H/2+.02)+(Ge!==0?H*.25:0),q(Le,rn,Ge,In,zt+.2)}}function q(P,B,z,H,V){let pt=Q(6965804,{roughness:.9}),wt=-H,It=z;for(let zt of[-1,1])s.add(O(k.box(.08,V,.08),pt,{x:P+z*.12+wt*zt*.4,y:V/2,z:B+H*.12+It*zt*.4}));for(let zt=.35;zt<V;zt+=.4)s.add(O(z?k.box(.06,.06,.8):k.box(.8,.06,.06),pt,{x:P+z*.12,y:zt,z:B+H*.12}));e.addLadder(P,B,z,H,1.1,V)}let U=Q(14701114,{emissive:16734762,emissiveIntensity:1.8,roughness:.6}),G=Q(16761450,{emissive:16752704,emissiveIntensity:2.2,roughness:.6});function $(P,B,z,H=2.2,V){let pt=new un({map:a,transparent:!0,depthWrite:!1,blending:Ne,color:V!=null?V:16777215,opacity:.8}),wt=new vn(pt);return wt.scale.set(H,H,1),wt.position.set(P,B,z),s.add(wt),wt}function it(P,B,z,H){let V=O(k.sphere(.24,14,10),H===16738874?U:G,{x:P,y:z,z:B,sy:1.35,shadow:!1});s.add(V),s.add(O(k.cyl(.18,.18,.05,10),L,{x:P,y:z+.33,z:B,shadow:!1})),s.add(O(k.cyl(.18,.18,.05,10),L,{x:P,y:z-.33,z:B,shadow:!1})),$(P,z,B,2.4),o.push(new I(P,z,B))}function rt(P,B){s.add(O(k.cyl(.08,.1,3,8),L,{x:P,y:1.5,z:B})),s.add(O(k.box(.8,.08,.08),L,{x:P+.35,y:2.95,z:B})),it(P+.7,B,2.45,16761450),e.addCircle(P,B,.14,3.2,{sight:!1})}function tt(P,B){let z=Q(7697534,{roughness:1});s.add(O(k.cyl(.35,.45,.25,6),z,{x:P,y:.12,z:B})),s.add(O(k.cyl(.14,.18,.7,8),z,{x:P,y:.6,z:B})),s.add(O(k.box(.55,.42,.55),z,{x:P,y:1.15,z:B})),s.add(O(k.box(.3,.24,.6),G,{x:P,y:1.16,z:B,shadow:!1})),s.add(O(k.cone(.55,.36,6),z,{x:P,y:1.54,z:B})),$(P,1.16,B,1.8),e.addCircle(P,B,.42,1.75,{sight:!1}),o.push(new I(P,1.2,B))}let ht=Q(3877408,{roughness:1}),ut=[Q(2047276,{roughness:1,flat:!0}),Q(2771509,{roughness:1,flat:!0}),Q(6962012,{roughness:1,flat:!0})],bt=[Te(1,1,.18,1),Te(1,1,.2,2),Te(1,1,.16,3)];function K(P,B,z=1,H=!1){s.add(O(k.cyl(.18*z,.28*z,2.6*z,7),ht,{x:P,y:1.3*z,z:B}));let V=H?Q(14191021,{roughness:1,flat:!0,emissive:3805232,emissiveIntensity:.4}):ut[(P*7+B*3&255)%2];for(let pt=0;pt<3;pt++){let wt=pt*2.1+P;s.add(O(bt[pt],V,{x:P+Math.cos(wt)*.6*z,y:(2.8+pt*.5)*z,z:B+Math.sin(wt)*.6*z,sx:1.4*z,sy:1.1*z,sz:1.4*z}))}e.addCircle(P,B,.35*z,6,{sight:z>1.1})}let ct=Q(2377775,{roughness:1,flat:!0}),Tt=Te(1,1,.22,7),Ot=[];function Mt(P,B,z=1.4){let H=new ne;H.position.set(P,0,B);for(let V=0;V<4;V++){let pt=V*1.7;H.add(O(Tt,ct,{x:Math.cos(pt)*z*.45,y:.8,z:Math.sin(pt)*z*.45,sx:z*.75,sy:.95,sz:z*.75}))}s.add(H),Ot.push(H),e.addBush(P,B,z)}let Ht=Q(9068088,{roughness:.85}),$t=Q(5913378);function St(P,B,z,H){let V=z;s.add(O(k.box(z,V,z),Ht,{x:P,y:H-V/2,z:B})),s.add(O(k.box(z+.04,.08,z+.04),$t,{x:P,y:H-.04,z:B})),e.addBox(P,B,z,z,H,{sight:!1})}function Xt(P,B,z,H,V){s.add(O(k.box(z,.2,H),Q(8015923),{x:P,y:V-.1,z:B}));for(let pt of[-1,1])for(let wt of[-1,1])s.add(O(k.box(.2,V,.2),L,{x:P+pt*(z/2-.15),y:V/2,z:B+wt*(H/2-.15)}));e.addBox(P,B,z,H,V,{sight:!1})}function N(P,B){let z=Q(12728874,{roughness:.55});for(let H of[-1,1])s.add(O(k.cyl(.2,.24,4.6,12),z,{x:P+H*2.1,y:2.3,z:B})),e.addCircle(P+H*2.1,B,.26,5);s.add(O(k.box(5.8,.32,.4),Q(1841698),{x:P,y:4.7,z:B})),s.add(O(k.box(5.2,.25,.3),z,{x:P,y:4.35,z:B})),s.add(O(k.box(4.8,.22,.26),z,{x:P,y:3.7,z:B}))}F(-10,12,7,5,3.2,"x",{enter:!0,ladder:"left"}),F(11,13,6,6,3.4,"x",{enter:!0}),F(-12,-7,6,7,3,"x",{ladder:"back"}),F(11,-8,7,5,3.2,"z",{enter:!0,ladder:"right"}),F(-21,21,5,5,2.8,"z"),F(22,2,5,6,3,"x",{enter:!0}),F(-22,-18,6,5,3,"z"),F(20,-21,5,5,2.8,"z"),F(0,-26,7,4,3.6,"z"),N(0,-17),St(4.2,5.2,.9,.6),St(5.3,6.4,1,1.1),St(5.4,7.7,1,1.6),Xt(7.8,7.4,3.2,3,2),St(-5.5,-3.8,1.2,1),St(-6.6,-4.6,1,1.7),St(16,8,1.2,1.2),St(-16,3,1.1,.9),St(-16.9,3.9,.9,1.5),St(13.2,16.9,1.1,.9),St(12.2,17.2,1,1.7),St(25.4,5.8,1.1,1),St(24.3,5.8,1,1.8),St(-20.6,24.3,1,1.1);let yt=Q(2050602,{roughness:1,flat:!0}),nt=Q(2976314,{roughness:1,flat:!0});function ft(P,B,z,H,V=2.5){s.add(O(k.box(z,V,H),yt,{x:P,y:V/2,z:B})),s.add(O(k.box(z+.12,.25,H+.12),nt,{x:P,y:V-.05,z:B})),e.addBox(P,B,z,H,V,{sight:!0}),r(P,V/2,B,z,V,H)}(function(B,z,H,V){let pt=20260925,wt=()=>(pt=pt*1664525+1013904223>>>0)/4294967296,It=new Uint8Array(H*H),zt=Array.from({length:H*H},()=>!0),Lt=Array.from({length:H*H},()=>!0),ot=[0];for(It[0]=1;ot.length;){let Rt=ot[ot.length-1],Wt=Rt%H,se=Rt/H|0,le=[];if(Wt>0&&!It[Rt-1]&&le.push([Rt-1,"L"]),Wt<H-1&&!It[Rt+1]&&le.push([Rt+1,"R"]),se>0&&!It[Rt-H]&&le.push([Rt-H,"U"]),se<H-1&&!It[Rt+H]&&le.push([Rt+H,"D"]),!le.length){ot.pop();continue}let[ie,Se]=le[wt()*le.length|0];Se==="L"&&(zt[ie]=!1),Se==="R"&&(zt[Rt]=!1),Se==="U"&&(Lt[ie]=!1),Se==="D"&&(Lt[Rt]=!1),It[ie]=1,ot.push(ie)}for(let Rt=0;Rt<5;Rt++){let Wt=wt()*H*(H-1)|0;Wt%H<H-1?zt[Wt]=!1:Lt[Wt]=!1}let D=.55,st=2.5,gt=H*V;for(let Rt=0;Rt<H;Rt++)Rt!==H-1&&ft(B+Rt*V+V/2,z,V+D,D,st),ft(B+Rt*V+V/2,z+gt,V+D,D,st);for(let Rt=0;Rt<H;Rt++)ft(B,z+Rt*V+V/2,D,V+D,st),Rt!==0&&ft(B+gt,z+Rt*V+V/2,D,V+D,st);for(let Rt=0;Rt<H;Rt++)for(let Wt=0;Wt<H;Wt++){let se=Rt*H+Wt;Wt<H-1&&zt[se]&&ft(B+(Wt+1)*V,z+Rt*V+V/2,D,V+D,st),Rt<H-1&&Lt[se]&&ft(B+Wt*V+V/2,z+(Rt+1)*V,V+D,D,st)}let Dt=B+gt/2,Nt=z+gt/2;tt(Dt,Nt),Mt(B+V/2,z+gt-V/2,1.1),Mt(B+gt-V/2,z+gt-V/2,1.1),Mt(B+V/2,z+V*1.5,1.1)})(-43,26.5,5,3.3);let et=Q(7248458,{roughness:.7}),Ft=Q(4094522,{roughness:1,flat:!0});for(let P=0;P<22;P++){let B=-41+P%5*3.1+P*7%3*.6,z=-41+Math.floor(P/5)*3.2+P*5%3*.5;for(let H=0;H<5;H++){let V=H*1.3+P,pt=.3+H%2*.2,wt=B+Math.cos(V)*pt,It=z+Math.sin(V)*pt,zt=6+(P+H)%3;s.add(O(k.cyl(.07,.09,zt,6),et,{x:wt,y:zt/2,z:It})),s.add(O(bt[H%3],Ft,{x:wt,y:zt,z:It,sx:.9,sy:.5,sz:.9}))}e.addCircle(B,z,.62,7,{sight:!0})}Mt(-37.5,-35.5,1.3),Mt(-32,-39,1.2),Mt(-40,-30.5,1.3);let Et=Q(5914154,{roughness:.9}),R=Q(4015200,{roughness:.5});function S(P,B,z,H,V,pt){if(pt){let zt=(Lt,ot,D,st,gt=0)=>{s.add(O(k.box(D,V-gt,st),Et,{x:Lt,y:(gt+V)/2,z:ot})),e.addBox(Lt,ot,D,st,V,{bottom:gt,sight:!0}),r(Lt,(gt+V)/2,ot,D,V-gt,st)};for(let Lt of[-1,1]){let ot=(H-2.6)/2;for(let D of[-1,1])zt(P+Lt*(z/2-.3/2),B+D*(2.6/2+ot/2),.3,ot);zt(P+Lt*(z/2-.3/2),B,.3,2.6,2.95),zt(P,B+Lt*(H/2-.3/2),z-2*.3,.3)}s.add(O(k.box(z,.3,H),R,{x:P,y:V-.15,z:B})),e.addBox(P,B,z,H,V,{bottom:V-.3,sight:!0,nav:!1}),r(P,V-.15,B,z,.3,H),s.add(O(k.box(1.4,.9,1),Q(13482382,{roughness:1}),{x:P+z/2-1.3,y:.45,z:B-H/2+1.1})),e.addBush(P+z/2-1.3,B-H/2+1.4,1.1,"sacks"),o.push(new I(P,V-.7,B)),s.add(O(k.sphere(.22,12,8),G,{x:P,y:V-.7,z:B,sy:1.3,shadow:!1}))}else{s.add(O(k.box(z,V,H),Et,{x:P,y:V/2,z:B})),s.add(O(k.box(z+.2,.2,H+.2),R,{x:P,y:V+.1,z:B})),e.addBox(P,B,z,H,V+.2,{sight:!0}),r(P,V/2,B,z,V,H);for(let wt of[-1,1])s.add(O(k.box(z*.3,.8,.06),T,{x:P,y:V*.55,z:B+wt*(H/2+.02),shadow:!1}))}}S(38,-14,7,7,4,!1),S(38,0,7,8,4,!0),S(38,14,7,7,4,!1);for(let P of[-7,7])s.add(O(k.box(1.6,.15,7.2),Et,{x:38,y:4.05,z:P})),e.addBox(38,P,1.6,7.2,4.12,{bottom:3.95,sight:!1,nav:!1});q(34.5-.02,-16,-1,0,4.2),q(34.5-.02,16,-1,0,4.2),St(32.4,3,1,1),St(33.5,3,1.1,2);let X=Q(15237418,{roughness:.6,emissive:4200448,emissiveIntensity:.3}),dt=Q(3889700);for(let P=0;P<5;P++)for(let B=0;B<4;B++){let z=30+P*2.6+B%2*1.2,H=30+B*3;s.add(O(k.sphere(.45,12,8),X,{x:z,y:.35,z:H,sy:.75})),s.add(O(k.cyl(.05,.06,.25,5),dt,{x:z,y:.75,z:H})),e.addCircle(z,H,.45,.4,{sight:!1,nav:!1})}let lt=Q(13215306,{roughness:1});s.add(O(k.cyl(1.6,1.9,2.2,10),lt,{x:26,y:1.1,z:38})),s.add(O(k.cone(1.7,1.2,10),lt,{x:26,y:2.8,z:38})),e.addCircle(26,38,1.8,3.4,{sight:!0}),St(27.9,36.6,1.1,1.2),Mt(34,40,1.4),Mt(41,33,1.3),F(36,-36,9,7,3.4,"z",{enter:!0,ladder:"left"});for(let[P,B,z,H]of[[-36,-10,1.2,!1],[-38,6,1.1,!0],[-34,18,1.2,!1],[-14,-38,1.1,!1],[-4,-40,1.2,!0],[10,-38,1.1,!1],[22,-40,1.2,!1],[36,-24,1.1,!0],[30,22,1.2,!1],[14,38,1.1,!0],[0,40,1.2,!1],[-14,40,1.1,!1]])K(P,B,z,H);for(let[P,B,z]of[[-38,-18,1.4],[-40,12,1.4],[-20,-38,1.5],[6,-40,1.4],[24,-34,1.4],[30,10,1.3],[20,38,1.4],[-6,38,1.5],[-22,34,1.4],[40,-26,1.3]])Mt(P,B,z);for(let[P,B]of[[2.6,17],[-2.6,8],[2.6,-6],[-2.6,-12],[8,2.4],[-9,-2.4],[18,-2.4],[-19,2.4]])tt(P,B);for(let[P,B]of[[-2.8,22],[-2.8,-2.8],[14,2.8],[-14,-2.8]])rt(P,B);for(let P=-ke+3;P<=ke-3;P+=4.3)for(let[B,z]of[[P,-ke+2],[P,ke-2],[-ke+2,P],[ke-2,P]])Math.abs(P)<2.5||K(B+(Math.random()-.5)*1.2,z+(Math.random()-.5)*1.2,1.1+Math.random()*.4);for(let[P,B,z,H]of[[-6,17,1,!0],[6,20,1.2,!1],[16,16,1.1,!0],[-17,11,1.2,!1],[-5,-18,1,!0],[7,-15,1.1,!1],[24,-10,1.2,!1],[-25,-6,1.1,!0],[15,-27,1,!1],[-15,-26,1.1,!0],[25,24,1.2,!1]])K(P,B,z,H);for(let[P,B,z]of[[-4.5,-12,1.5],[15,-15,1.6],[-17.5,6,1.5],[18,18,1.5],[-6,21,1.4],[25,-24,1.4],[6.5,-3.8,1.3],[-25,13,1.5],[9,24,1.4],[-10,-24,1.5],[26,12,1.4]])Mt(P,B,z);let at=Q(4862754,{roughness:1});for(let P of[-1,1]){for(let B=-ke+1;B<ke;B+=2)s.add(O(k.box(.14,1.2,.14),at,{x:B,y:.6,z:P*(ke-.6)})),s.add(O(k.box(.14,1.2,.14),at,{x:P*(ke-.6),y:.6,z:B}));s.add(O(k.box(ke*2,.1,.08),at,{y:.9,z:P*(ke-.6)})),s.add(O(k.box(.08,.1,ke*2),at,{x:P*(ke-.6),y:.9}))}let Ut=Ke(64,192,(P,B,z)=>{P.fillStyle="#5a3a26",P.fillRect(0,0,B,z),P.fillStyle="#e9d6b0",P.fillRect(5,5,B-10,z-10),P.fillStyle="#2a170c",P.font="bold 42px serif",P.textAlign="center",["\u306E","\u308A","\u3070"].forEach((H,V)=>P.fillText(H,B/2,55+V*55))});s.add(O(k.cyl(.07,.07,2.8,6),L,{x:-2.6,y:1.4,z:20.5})),s.add(O(k.box(.5,1.5,.08),Q(16777215,{map:Ut,emissive:2101256,emissiveIntensity:.5}),{x:-2.6,y:2.3,z:20.55})),e.addCircle(-2.6,20.5,.12,3,{sight:!1});let vt=[],Pt=t?2:4;for(let P=0;P<Pt;P++){let B=new xi(16752714,18,11,1.8);s.add(B),vt.push(B)}function kt(P){let B=o.slice().sort((z,H)=>z.distanceToSquared(P)-H.distanceToSquared(P));vt.forEach((z,H)=>{B[H]&&z.position.copy(B[H])}),g.position.set(P.x-18,30,P.z-14),g.target.position.set(P.x,0,P.z)}return{stats:Yu(s),world:e,cameraBlockers:n,bushMeshes:Ot,updateLights:kt,playerSpawn:new I(0,0,22),ghostSpawn:new I(0,0,-21)}}function Zu(s,t,e){let n=new ye,i=new Float32Array(t*3),r=[];for(let l=0;l<t;l++){let c={x:(Math.random()*2-1)*e,z:(Math.random()*2-1)*e,y:.6+Math.random()*3,p:Math.random()*10,r:.5+Math.random()*1.5};r.push(c)}n.setAttribute("position",new Ce(i,3));let a=Cn("rgba(255,245,190,1)","rgba(255,200,80,0)",64),o=new gi(n,new Qn({size:.35,map:a,transparent:!0,depthWrite:!1,blending:Ne,color:16773296}));return o.frustumCulled=!1,s.add(o),l=>{for(let c=0;c<t;c++){let h=r[c];i[c*3]=h.x+Math.sin(l*.3+h.p)*h.r,i[c*3+1]=h.y+Math.sin(l*.8+h.p*2)*.4,i[c*3+2]=h.z+Math.cos(l*.25+h.p)*h.r}n.attributes.position.needsUpdate=!0}}function Ju(s,t,e=14){let n=Q(723727,{roughness:1,flat:!0}),i=Q(16777215,{emissive:16777215,emissiveIntensity:.4}),r=Q(0),a=Te(.2,1,.35,4),o=[];for(let c=0;c<e;c++){let h=new ne;h.add(O(a,n));for(let f of[-1,1])h.add(O(k.sphere(.06,8,6),i,{x:f*.07,y:.04,z:.15,shadow:!1})),h.add(O(k.sphere(.03,6,4),r,{x:f*.07,y:.04,z:.2,shadow:!1}));let u,d;do u=(Math.random()*2-1)*26,d=(Math.random()*2-1)*26;while(t.groundAt(u,d,.3,99)>0||Math.hypot(u,d-22)<5);h.position.set(u,.2,d),s.add(h),o.push({g:h,home:new mt(u,d),vx:0,vz:0,hop:Math.random()*6})}let l={x:0,y:0,z:0};return(c,h,u)=>{for(let d of o){let f=d.g.position.x-u.x,g=d.g.position.z-u.z,_=Math.hypot(f,g);_<3.2?(d.vx+=f/_*30*c,d.vz+=g/_*30*c):(d.vx+=(d.home.x-d.g.position.x)*.4*c,d.vz+=(d.home.y-d.g.position.z)*.4*c),d.vx*=1-3*c,d.vz*=1-3*c,l.x=d.g.position.x+d.vx*c,l.z=d.g.position.z+d.vz*c,t.resolve(l,.2,0),d.g.position.x=l.x,d.g.position.z=l.z;let m=Math.hypot(d.vx,d.vz);d.hop+=c*(4+m*2),d.g.position.y=.2+Math.abs(Math.sin(d.hop))*(.08+Math.min(.35,m*.08)),m>.3?d.g.rotation.y=Math.atan2(d.vx,d.vz):d.g.lookAt(u.x,.2,u.z)}}}var yi=[{id:"crate",name:"\u044F\u0449\u0438\u043A",icon:"\u{1F4E6}"},{id:"lantern",name:"\u0444\u043E\u043D\u0430\u0440\u044C",icon:"\u{1F3EE}"},{id:"pumpkin",name:"\u0442\u044B\u043A\u0432\u0430",icon:"\u{1F383}"},{id:"barrel",name:"\u0431\u043E\u0447\u043A\u0430",icon:"\u{1F6E2}\uFE0F"},{id:"bush",name:"\u043A\u0443\u0441\u0442",icon:"\u{1F33F}"}],ju=null;function Xi(s){let t=new ne;if(s==="crate")t.add(O(k.box(1,1,1),Q(9068088,{roughness:.85}),{y:.5})),t.add(O(k.box(1.04,.08,1.04),Q(5913378),{y:.96}));else if(s==="lantern"){let e=Q(7697534,{roughness:1});t.add(O(k.cyl(.35,.45,.25,6),e,{y:.12})),t.add(O(k.cyl(.14,.18,.7,8),e,{y:.6})),t.add(O(k.box(.55,.42,.55),e,{y:1.15})),t.add(O(k.box(.3,.24,.6),Q(16761450,{emissive:16752704,emissiveIntensity:2.2,roughness:.6}),{y:1.16,shadow:!1})),t.add(O(k.cone(.55,.36,6),e,{y:1.54}))}else if(s==="pumpkin")t.add(O(k.sphere(.55,14,10),Q(15237418,{roughness:.6,emissive:4200448,emissiveIntensity:.3}),{y:.42,sy:.75})),t.add(O(k.cyl(.05,.07,.3,5),Q(3889700),{y:.9}));else if(s==="barrel"){t.add(O(k.cyl(.42,.42,1.1,14),Q(8015660,{roughness:.8}),{y:.55}));for(let e of[.2,.9])t.add(O(k.cyl(.44,.44,.07,14),Q(3816004,{metalness:.4}),{y:e}))}else{ju||(ju=Te(1,1,.22,7));for(let e=0;e<3;e++)t.add(O(ju,Q(2377775,{roughness:1,flat:!0}),{x:Math.cos(e*2.1)*.35,y:.6,z:Math.sin(e*2.1)*.35,sx:.75,sy:.7,sz:.75}))}return t}function hc(s,t,e,n,i=15260927){let r=new ne,a=new cn({color:i,transparent:!0,opacity:.8,depthWrite:!1}),o=[];for(let c=0;c<9;c++){let h=new oe(new ze(.35,8,6),a),u=c/9*Math.PI*2;h.position.set(Math.cos(u)*.3,.6+c%3*.3,Math.sin(u)*.3),h.userData.v=new I(Math.cos(u)*1.6,.8+Math.random(),Math.sin(u)*1.6),r.add(h),o.push(h)}r.position.set(t,e,n),s.add(r);let l=0;return{update(c){l+=c;for(let h of o)h.position.addScaledVector(h.userData.v,c),h.scale.setScalar(1+l*1.5);if(a.opacity=Math.max(0,.8-l*1.6),l>.5)return s.remove(r),a.dispose(),!1}}}var Ku="masha-game-pumpkins",Ns={get(){try{return+(localStorage.getItem(Ku)||0)}catch{return 0}},add(s){let t=this.get()+s;try{localStorage.setItem(Ku,String(t))}catch{}return t}},Za=class{constructor(t,e){this.scene=t,this.nav=e,this.list=[],this.geo=new ze(.28,12,8),this.mat=new _e({color:16753210,emissive:16742928,emissiveIntensity:.9,roughness:.4}),this.stem=new Bi(.03,.04,.14,5),this.stemMat=new _e({color:3889700})}clear(){for(let t of this.list)this.scene.remove(t.g);this.list=[]}spawn(t){this.clear();for(let e=0;e<t;e++){let n=0,i=0;for(let o=0;o<30;o++){n=(Math.random()*2-1)*(this.nav.half-3),i=(Math.random()*2-1)*(this.nav.half-3);let[l,c]=this.nav.toCell(n,i);if(this.nav.free(l,c)&&!this.list.some(h=>Math.hypot(h.x-n,h.z-i)<6))break}let r=new ne;r.add(new oe(this.geo,this.mat));let a=new oe(this.stem,this.stemMat);a.position.y=.26,r.add(a),r.children[0].scale.y=.8,r.position.set(n,.8,i),this.scene.add(r),this.list.push({g:r,x:n,z:i,ph:Math.random()*6})}}update(t,e,n){let i=[];for(let r=this.list.length-1;r>=0;r--){let a=this.list[r];a.g.rotation.y+=t*2,a.g.position.y=.8+Math.sin(e*3+a.ph)*.12;for(let o of n){let l=o.ctrl.pos;if(Math.hypot(l.x-a.x,l.z-a.z)<1&&l.y<1.8){this.scene.remove(a.g),this.list.splice(r,1),i.push(o);break}}}return i}};var _i,Ja,Qu,ja=class{constructor(t,e){de(this,_i);this.keys=new Set,this.move={x:0,y:0},this.look={x:0,y:0},this.jumpQueued=!1,this.dashQueued=!1,this.jumpHeldBtn=!1,this.lookOnly=!1,this.touchRun=!1,this.touchCrouch=!1,this.enabled=!1,this.canvas=t,addEventListener("keydown",i=>{i.code==="Space"&&(i.repeat||(this.jumpQueued=!0),i.preventDefault()),i.code==="KeyE"&&!i.repeat&&(this.dashQueued=!0),i.code==="KeyC"&&!i.repeat&&Y(this,_i,Ja).call(this,!this.touchCrouch),this.keys.add(i.code)}),addEventListener("keyup",i=>this.keys.delete(i.code)),addEventListener("blur",()=>this.keys.clear());let n=!1;t.addEventListener("mousedown",()=>{if(this.enabled){if(document.pointerLockElement!==t&&t.requestPointerLock)try{let i=t.requestPointerLock();i&&i.catch&&i.catch(()=>{})}catch{}n=!0}}),addEventListener("mouseup",()=>n=!1),addEventListener("mousemove",i=>{this.enabled&&(document.pointerLockElement===t||n)&&(this.look.x+=i.movementX*At.camera.mouseSens,this.look.y+=i.movementY*At.camera.mouseSens)}),this.root=e,Y(this,_i,Qu).call(this,e)}reset(){var t,e;this.touchRun=!1,Y(this,_i,Ja).call(this,!1),this.jumpHeldBtn=!1,(e=(t=this.root)==null?void 0:t.querySelector(".btn-run"))==null||e.classList.remove("active"),this.move.x=this.move.y=0}read(){let t=this.keys,e=this.move.x,n=this.move.y;(t.has("KeyW")||t.has("ArrowUp"))&&(n+=1),(t.has("KeyS")||t.has("ArrowDown"))&&(n-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(e+=1),(t.has("KeyA")||t.has("ArrowLeft"))&&(e-=1);let i=Math.hypot(e,n);i>1&&(e/=i,n/=i);let r={x:e,y:n,run:t.has("ShiftLeft")||t.has("ShiftRight")||this.touchRun||this.stickRun,crouch:this.touchCrouch||t.has("ControlLeft"),jump:this.jumpQueued,jumpHold:t.has("Space")||this.jumpHeldBtn,dash:this.dashQueued,lookX:this.look.x,lookY:this.look.y};return this.jumpQueued=!1,this.dashQueued=!1,this.look.x=this.look.y=0,this.enabled||(r.x=r.y=0,r.jump=r.dash=r.jumpHold=!1,r.lookX=r.lookY=0),this.lookOnly&&(r.x=r.y=0,r.jump=r.dash=r.run=r.jumpHold=r.crouch=!1),r}releasePointer(){document.pointerLockElement&&document.exitPointerLock()}};_i=new WeakSet,Ja=function(t){var e,n;this.touchCrouch=t,(n=(e=this.root)==null?void 0:e.querySelector(".btn-crouch"))==null||n.classList.toggle("active",t)},Qu=function(t){let e=t.querySelector(".stick"),n=t.querySelector(".stick-knob"),i=t.querySelector(".stick-zone"),r=t.querySelector(".look-zone"),a=y=>{y.preventDefault(),y.stopPropagation()},o=(y,x,M)=>{let E=t.querySelector(y);E.addEventListener("pointerdown",w=>{a(w),E.classList.add("down"),x();try{E.setPointerCapture(w.pointerId)}catch{}});let T=()=>{E.classList.remove("down"),M==null||M()};E.addEventListener("pointerup",T),E.addEventListener("pointercancel",T),E.addEventListener("mousedown",w=>w.stopPropagation())};o(".btn-jump",()=>{this.jumpQueued=!0,this.jumpHeldBtn=!0},()=>{this.jumpHeldBtn=!1}),o(".btn-dash",()=>{this.dashQueued=!0}),o(".btn-run",()=>{this.touchRun=!this.touchRun,t.querySelector(".btn-run").classList.toggle("active",this.touchRun)}),o(".btn-crouch",()=>Y(this,_i,Ja).call(this,!this.touchCrouch));let l=null,c=0,h=0,u=52;i.addEventListener("pointerdown",y=>{a(y),l=y.pointerId;let x=i.getBoundingClientRect(),M=i.classList.contains("fixed");c=M?x.left+x.width/2:y.clientX,h=M?x.top+x.height/2:y.clientY,M||(e.style.left=c+"px",e.style.top=h+"px"),e.classList.add("on");try{i.setPointerCapture(y.pointerId)}catch{}d(y)});let d=y=>{if(y.pointerId!==l)return;let x=y.clientX-c,M=y.clientY-h,E=Math.hypot(x,M);E>u&&(x*=u/E,M*=u/E),n.style.transform=`translate(${x}px, ${M}px)`,this.move.x=x/u,this.move.y=-M/u,this.stickRun=E>u*1.35,y.preventDefault()},f=y=>{y.pointerId===l&&(l=null,this.move.x=this.move.y=0,this.stickRun=!1,n.style.transform="",e.classList.remove("on"))};i.addEventListener("pointermove",d),i.addEventListener("pointerup",f),i.addEventListener("pointercancel",f),i.addEventListener("mousedown",y=>y.stopPropagation());let g=null,_=0,m=0;r.addEventListener("pointerdown",y=>{if(y.pointerType!=="mouse"){g=y.pointerId,_=y.clientX,m=y.clientY;try{r.setPointerCapture(y.pointerId)}catch{}y.preventDefault()}}),r.addEventListener("pointermove",y=>{y.pointerId===g&&(this.look.x+=(y.clientX-_)*At.camera.touchSens,this.look.y+=(y.clientY-m)*At.camera.touchSens,_=y.clientX,m=y.clientY,y.preventDefault())});let p=y=>{y.pointerId===g&&(g=null)};r.addEventListener("pointerup",p),r.addEventListener("pointercancel",p)};var Pn=At.camera,vi,uc,dc,Ka=class{constructor(t,e){de(this,vi);this.cam=t,this.blockers=e,this.yaw=0,this.pitch=.32,this.distance=Pn.distance,this.baseDistance=Pn.distance,this.lookHeight=Pn.height,this.curDist=Pn.distance,this.focus=new I,this.ray=new za,this.mode="third",this.shake=0}configure(t){var e,n,i;this.baseDistance=(e=t==null?void 0:t.distance)!=null?e:Pn.distance,this.lookHeight=(n=t==null?void 0:t.height)!=null?n:Pn.height,this.side=(i=t==null?void 0:t.side)!=null?i:0}snap(t){this.focus.set(t.x,t.y+this.lookHeight,t.z),this.curDist=this.baseDistance,Y(this,vi,dc).call(this)}update(t,e,n){this.yaw-=n.lookX,this.pitch=fe.clamp(this.pitch+n.lookY,Pn.pitchMin,Pn.pitchMax);let i=new I(e.x,e.y+this.lookHeight,e.z),r=1-Math.exp(-t*Pn.follow*1.6),a=1-Math.exp(-t*Pn.follow*.6);this.focus.x+=(i.x-this.focus.x)*r,this.focus.z+=(i.z-this.focus.z)*r,this.focus.y+=(i.y-this.focus.y)*a;let o=Y(this,vi,uc).call(this);this.ray.set(this.focus,o),this.ray.far=this.baseDistance;let l=this.ray.intersectObjects(this.blockers,!1)[0],c=l?Math.max(Pn.minDistance,l.distance-.35):this.baseDistance;this.curDist=c<this.curDist?c:this.curDist+(c-this.curDist)*(1-Math.exp(-t*4)),this.shake=Math.max(0,this.shake-t*1.5),Y(this,vi,dc).call(this)}};vi=new WeakSet,uc=function(){return new I(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch)).normalize()},dc=function(){let t=Math.cos(this.yaw),e=-Math.sin(this.yaw),n=this.focus.clone();n.x+=t*this.side,n.z+=e*this.side;let i=n.clone().addScaledVector(Y(this,vi,uc).call(this),this.curDist);if(i.y=Math.max(.35,i.y),this.shake>0){let r=this.shake*.12;i.x+=(Math.random()-.5)*r,i.y+=(Math.random()-.5)*r,i.z+=(Math.random()-.5)*r}this.cam.position.copy(i),this.cam.lookAt(n)};var Os=class{constructor(t,e=.55,n=.5){this.cell=n,this.half=t.half,this.n=Math.round(t.half*2/n),this.blocked=new Uint8Array(this.n*this.n);for(let i=0;i<this.n;i++)for(let r=0;r<this.n;r++){let a=-this.half+(r+.5)*n,o=-this.half+(i+.5)*n,l=Math.abs(a)>this.half-1.4||Math.abs(o)>this.half-1.4,c=t.near(a,o);if(!l){for(let h of c.boxes)if(!(!h.nav||h.top<.35)&&a>h.minX-e&&a<h.maxX+e&&o>h.minZ-e&&o<h.maxZ+e){l=!0;break}}if(!l){for(let h of c.circles)if(!(!h.nav||h.top<.35)&&(a-h.x)**2+(o-h.z)**2<(h.r+e)**2){l=!0;break}}this.blocked[i*this.n+r]=l?1:0}this.g=new Float32Array(this.n*this.n),this.from=new Int32Array(this.n*this.n),this.closed=new Uint8Array(this.n*this.n)}toCell(t,e){let n=Math.max(0,Math.min(this.n-1,Math.floor((t+this.half)/this.cell))),i=Math.max(0,Math.min(this.n-1,Math.floor((e+this.half)/this.cell)));return[n,i]}center(t,e){return[-this.half+(t+.5)*this.cell,-this.half+(e+.5)*this.cell]}free(t,e){return t>=0&&e>=0&&t<this.n&&e<this.n&&!this.blocked[e*this.n+t]}nearestFree(t,e){if(this.free(t,e))return[t,e];for(let n=1;n<14;n++){let i=null,r=1e9;for(let a=-n;a<=n;a++)for(let o=-n;o<=n;o++){if(Math.max(Math.abs(o),Math.abs(a))!==n||!this.free(t+o,e+a))continue;let l=o*o+a*a;l<r&&(r=l,i=[t+o,e+a])}if(i)return i}return[t,e]}find(t,e,n,i){let r=this.n,[a,o]=this.nearestFree(...this.toCell(t,e)),[l,c]=this.nearestFree(...this.toCell(n,i)),h=o*r+a,u=c*r+l;this.g.fill(1/0),this.closed.fill(0),this.from.fill(-1),this.g[h]=0;let d=new fc,f=(E,T)=>{let w=Math.abs(E-l),C=Math.abs(T-c);return w+C+(Math.SQRT2-2)*Math.min(w,C)};d.push(h,f(a,o));let g=!1,_=0;for(;d.size&&_++<4e4;){let E=d.pop();if(E===u){g=!0;break}if(this.closed[E])continue;this.closed[E]=1;let T=E%r,w=E/r|0;for(let C=-1;C<=1;C++)for(let v=-1;v<=1;v++){if(!v&&!C)continue;let b=T+v,L=w+C;if(!this.free(b,L)||v&&C&&(!this.free(T+v,w)||!this.free(T,w+C)))continue;let F=L*r+b,q=this.g[E]+(v&&C?Math.SQRT2:1);q<this.g[F]&&(this.g[F]=q,this.from[F]=E,d.push(F,q+f(b,L)))}}if(!g)return null;let m=[];for(let E=u;E!==-1;E=this.from[E])m.push(E);m.reverse();let p=m.map(E=>this.center(E%r,E/r|0));p[p.length-1]=[n,i];let y=[],x=[t,e],M=0;for(;M<p.length-1;){let E=M+1;for(let T=p.length-1;T>M+1;T--)if(this.clear(x[0],x[1],p[T][0],p[T][1])){E=T;break}y.push(p[E]),x=p[E],M=E}return y.length||y.push([n,i]),y}clear(t,e,n,i){let r=Math.hypot(n-t,i-e),a=Math.ceil(r/(this.cell*.4));for(let o=1;o<a;o++){let l=o/a,[c,h]=this.toCell(t+(n-t)*l,e+(i-e)*l);if(this.blocked[h*this.n+c])return!1}return!0}},fc=class{constructor(){this.a=[],this.p=[]}get size(){return this.a.length}push(t,e){let n=this.a,i=this.p;n.push(t),i.push(e);let r=n.length-1;for(;r>0;){let a=r-1>>1;if(i[a]<=i[r])break;[n[a],n[r]]=[n[r],n[a]],[i[a],i[r]]=[i[r],i[a]],r=a}}pop(){let t=this.a,e=this.p,n=t[0],i=t.pop(),r=e.pop();if(t.length){t[0]=i,e[0]=r;let a=0;for(;;){let o=a*2+1,l=o+1,c=a;if(o<t.length&&e[o]<e[c]&&(c=o),l<t.length&&e[l]<e[c]&&(c=l),c===a)break;[t[c],t[a]]=[t[a],t[c]],[e[c],e[a]]=[e[a],e[c]],a=c}}return n}};var ti=At.world,Qa=new I,td=new I,qi=new I,Mr=new I,zs,ed,nd,Fs=class{constructor(t,e){de(this,zs);this.hero=t,this.world=e,this.pos=new I,this.vel=new I,this.yaw=0,this.grounded=!0,this.coyote=0,this.jumpBuf=0,this.stamina=1,this.exhausted=!1,this.running=!1,this.landed=!1,this.landSpeed=0,this.dashT=0,this.dashCd=0,this.boostT=0,this.boostMul=1,this.moveMul=1,this.slowMul=1,this.speed=0,this.stagger=0,this.mantle=null,this.climbing=!1,this.flying=!1,this.flyEnergy=1,this.dashCharges=0,this.chargeT=0,this.crouching=!1}get phys(){return At.heroes[this.hero.id]}get radius(){return this.hero.radius}get height(){return this.hero.height*(this.crouching?.58:1)}get elevated(){return this.pos.y>1.3}spawn(t,e=Math.PI){var n;this.pos.copy(t),this.vel.set(0,0,0),this.yaw=e,this.stamina=1,this.exhausted=!1,this.grounded=!0,this.dashT=this.dashCd=this.boostT=this.stagger=0,this.mantle=null,this.climbing=this.flying=this.crouching=!1,this.flyEnergy=1,this.dashCharges=(n=this.phys.dash.charges)!=null?n:0,this.chargeT=0}get dashReady(){return this.dashCd<=0&&(this.phys.dash.charges?this.dashCharges>0:!0)}update(t,e,n){var M;let i=this.phys;Qa.set(-Math.sin(n),0,-Math.cos(n)),td.set(-Qa.z,0,Qa.x),qi.set(0,0,0).addScaledVector(Qa,e.y||0).addScaledVector(td,e.x||0);let r=Math.min(1,qi.length());r>.001&&qi.normalize();let a=qi.x,o=qi.z;if(this.dashed=!1,this.jumped=!1,this.landed=!1,this.mantle)return Y(this,zs,ed).call(this,t);e.crouch&&this.grounded&&i.jump>0?this.crouching=!0:this.crouching&&(!e.crouch||!this.grounded)&&this.world.ceilingAt(this.pos.x,this.pos.z,this.radius,this.pos.y+.1)>this.pos.y+this.hero.height&&(this.crouching=!1);let l=e.run&&r>.2&&!this.crouching;this.exhausted&&this.stamina>.35&&(this.exhausted=!1),this.running=l&&!this.exhausted,this.running?(this.stamina-=t/i.stamina,this.stamina<=0&&(this.stamina=0,this.exhausted=!0,this.running=!1)):this.stamina=Math.min(1,this.stamina+t*i.regen*(r<.1?1.4:1)),this.dashCd=Math.max(0,this.dashCd-t),this.dashT=Math.max(0,this.dashT-t),i.dash.charges&&(this.dashCharges<i.dash.charges?(this.chargeT+=t,this.chargeT>=i.dash.recharge&&(this.chargeT=0,this.dashCharges++)):this.chargeT=0),e.dash&&this.dashReady&&(r>.2||this.speed>1)&&(this.dashT=i.dash.time,this.dashCd=i.dash.cooldown,i.dash.charges&&this.dashCharges--,this.dashed=!0);let c=this.dashT>0;this.boostT=Math.max(0,this.boostT-t),this.stagger=Math.max(0,this.stagger-t);let h=this.exhausted?.85:1,u=this.moveMul*this.slowMul*(this.boostT>0?this.boostMul:1)*(this.stagger>0?.45:1),d=(this.running?i.run:i.walk*h*(this.crouching?.5:1))*r*u;c&&(d=i.run*i.dash.mul*this.moveMul*this.slowMul);let f=(c&&r<.2?qi.set(Math.sin(this.yaw),0,Math.cos(this.yaw)):qi).multiplyScalar(d);Mr.set(this.vel.x,0,this.vel.z);let g=this.grounded?r>.01?i.accel:i.decel:i.air;if(this.grounded&&r>.2){let E=Mr.length();if(E>i.walk){let T=(Mr.x*f.x+Mr.z*f.z)/(E*(f.length()||1));T<.3&&(g*=fe.lerp(.55,1,(T+1)/1.3)**(i.mass>2?1.6:1))}}c&&(g=i.accel*3);let _=f.sub(Mr),m=g*t;_.length()>m&&_.setLength(m),this.vel.x+=_.x,this.vel.z+=_.z;let p=this.world.ladderAt(this.pos.x,this.pos.z,this.radius,this.pos.y);this.climbing=!!(p&&r>.3&&a*-p.nx+o*-p.nz>.4);let y=ti.gravity*i.gravity;if(e.jump?this.jumpBuf=ti.jumpBuffer:this.jumpBuf-=t,this.coyote=this.grounded||this.climbing?ti.coyoteTime:this.coyote-t,this.jumpBuf>0&&this.coyote>0&&i.jump>0&&!this.crouching&&(this.vel.y=Math.sqrt(2*y*i.jump),this.climbing&&p&&(this.vel.x+=p.nx*4,this.vel.z+=p.nz*4),this.grounded=!1,this.climbing=!1,this.coyote=0,this.jumpBuf=0,this.jumped=!0,this.stamina=Math.max(0,this.stamina-.03)),this.flying=!1,i.fly&&((e.jumpHold||e.jump)&&this.flyEnergy>0?(this.flying=!0,this.vel.y+=(i.fly.speed-this.vel.y)*Math.min(1,t*8),this.flyEnergy=Math.max(0,this.flyEnergy-t/i.fly.time),this.grounded=!1):this.grounded&&(this.flyEnergy=Math.min(1,this.flyEnergy+t*i.fly.regen))),this.climbing?(this.vel.y=(M=i.climb)!=null?M:3.2,this.vel.x*=.5,this.vel.z*=.5,this.grounded=!1):this.flying||(this.vel.y=Math.max(-ti.maxFall*(i.fly?.3:1),this.vel.y-y*t*(i.fly&&this.vel.y<0?.35:1))),Y(this,zs,nd).call(this,t),!this.grounded&&!this.mantle&&r>.3&&this.vel.y<4&&i.reach>0){let E=this.radius+.3,T=this.pos.x+a*E,w=this.pos.z+o*E,C=this.world.ledgeAt(T,w,this.pos.y,i.reach,this.height);if(C!==null){let v=new I(this.pos.x+a*(this.radius+.35),C,this.pos.z+o*(this.radius+.35));this.mantle={t:0,dur:.22+(C-this.pos.y)*.12*(i.mass>2?1.4:1),from:this.pos.clone(),to:v},this.vel.set(0,0,0),this.stamina=Math.max(0,this.stamina-.05),this.climbing=!1}}let x=Math.hypot(this.vel.x,this.vel.z);if(x>.4&&(r>.05||c)){let E=Math.atan2(this.vel.x,this.vel.z),T=Math.atan2(Math.sin(E-this.yaw),Math.cos(E-this.yaw));this.yaw+=T*Math.min(1,i.turn*t)}else this.climbing&&p&&(this.yaw=Math.atan2(-p.nx,-p.nz));this.speed=x}animState(t){let e=this.mantle;return{t,speed:e?0:this.speed||0,grounded:this.grounded&&!e,vy:e||this.climbing?3:this.vel.y,running:this.running||this.dashT>0,landed:this.landed,landSpeed:this.landSpeed,crouch:this.crouching}}};zs=new WeakSet,ed=function(t){let e=this.mantle;e.t+=t;let n=Math.min(1,e.t/e.dur),i=Math.min(1,n/.65),r=Math.max(0,(n-.35)/.65),a=o=>o*o*(3-2*o);if(this.pos.y=e.from.y+(e.to.y-e.from.y)*a(i),this.pos.x=e.from.x+(e.to.x-e.from.x)*a(r),this.pos.z=e.from.z+(e.to.z-e.from.z)*a(r),this.grounded=!1,this.speed=0,n>=1){this.mantle=null;let o={x:this.pos.x,y:this.pos.y,z:this.pos.z};this.world.resolve(o,this.radius,this.pos.y+ti.stepHeight,this.pos.y+this.height*.9),this.pos.x=o.x,this.pos.z=o.z,this.pos.y=Math.max(this.pos.y,this.world.groundAt(this.pos.x,this.pos.z,this.radius,this.pos.y+.1)),this.grounded=!0,this.vel.set(0,0,0)}},nd=function(t){let e=this.pos.y+(this.grounded?ti.stepHeight:.08),n=this.pos.y+this.height*.9,i={x:this.pos.x+this.vel.x*t,y:this.pos.y,z:this.pos.z+this.vel.z*t},r=i.x,a=i.z;this.hitWall=this.world.resolve(i,this.radius,e,n);let o=i.x-r,l=i.z-a,c=Math.hypot(o,l);if(c>1e-5){let d=o/c,f=l/c,g=this.vel.x*d+this.vel.z*f;g<0&&(this.vel.x-=g*d,this.vel.z-=g*f)}this.pos.x=i.x,this.pos.z=i.z;let h=this.grounded,u=this.world.groundAt(this.pos.x,this.pos.z,this.radius,e);if(this.pos.y+=this.vel.y*t,this.vel.y>0){let d=this.world.ceilingAt(this.pos.x,this.pos.z,this.radius,this.pos.y-this.vel.y*t+this.height*.5);this.pos.y+this.height>d&&(this.pos.y=Math.max(u,d-this.height),this.vel.y=0)}this.pos.y<=u?(h||(this.landed=!0,this.landSpeed=this.vel.y,this.vel.y<-15&&!this.phys.fly&&(this.stagger=Math.min(.6,(-this.vel.y-15)*.06+.2))),this.pos.y=u,this.vel.y=0,this.grounded=!0):h&&this.vel.y<=0&&this.pos.y-u<ti.stepHeight?(this.pos.y=u,this.vel.y=0,this.grounded=!0):this.grounded=!1};function id(s){let t=At.world.pushStrength;for(let e=0;e<s.length;e++){let n=s[e];if(n.alive)for(let i=e+1;i<s.length;i++){let r=s[i];if(!r.alive)continue;let a=n.ctrl,o=r.ctrl;if(a.mantle||o.mantle||Math.abs(a.pos.y-o.pos.y)>1.4)continue;let l=o.pos.x-a.pos.x,c=o.pos.z-a.pos.z,h=a.radius+o.radius,u=l*l+c*c;if(u>=h*h||u<1e-8)continue;let d=Math.sqrt(u),f=(h-d)*t,g=a.phys.mass,_=o.phys.mass,m=g+_,p=l/d,y=c/d,x={x:a.pos.x-p*f*(_/m),y:a.pos.y,z:a.pos.z-y*f*(_/m)},M={x:o.pos.x+p*f*(g/m),y:o.pos.y,z:o.pos.z+y*f*(g/m)};a.world.resolve(x,a.radius,a.pos.y+ti.stepHeight,a.pos.y+a.height*.9),o.world.resolve(M,o.radius,o.pos.y+ti.stepHeight,o.pos.y+o.height*.9),a.pos.x=x.x,a.pos.z=x.z,o.pos.x=M.x,o.pos.z=M.z}}}var Ln=At.ghost,Ky=2.1,pc=null,Ae,mc,rd,ad,od,ld,to,cd,gc,eo=class{constructor(t,e,n,i,{heroes:r=[]}={}){de(this,Ae);this.def=t,this.world=e,this.scene=n,this.heroes=r,this.char=t.build(),this.root=this.char.root,this.root.visible=!1,n.add(this.root),this.nav=i||new Os(e,t.radius+.1),this.ctrl=new Fs(t,e),this.pos=this.ctrl.pos,this.vel=this.ctrl.vel,this.disguises=new Map,this.isPlayer=!1,this.reset(new I)}get radius(){return this.def.radius}get human(){return this.isPlayer||!!this.remote}get yaw(){return this.ctrl.yaw}reset(t){this.ctrl.spawn(t,0),this.state="hidden",this.appear=0,this.root.visible=!1,this.path=null,this.repath=0,this.lastSeen=null,this.target=null,this.unseen=0,this.wanderTarget=null,this.sees=!1,this.stunT=0,this.slowT=0,this.stuckT=0,this.stuckFrom=null,this.disguise=null,this.disguiseCd=6,this.caughtN=0,Y(this,Ae,mc).call(this)}spawn(){this.state="appear",this.appear=0,this.root.visible=!0}get active(){return this.state==="search"||this.state==="hunt"}get disguised(){return!!this.disguise}get eyeY(){return this.pos.y+Ky}stun(t){this.stunT=Math.max(this.stunT,t),this.ctrl.dashT=0,this.reveal()}slow(t){this.slowT=Math.max(this.slowT,t)}knock(t,e,n){let i={x:this.pos.x+t*n,y:this.pos.y,z:this.pos.z+e*n};this.world.resolve(i,this.radius,this.pos.y+.3,this.pos.y+2.2),this.pos.x=i.x,this.pos.z=i.z,this.vel.set(0,0,0),this.path=null}get disguiseReady(){return this.disguiseCd<=0&&!this.disguise&&this.active&&this.stunT<=0}useDisguise(t=[],e="hero"){if(!this.disguiseReady)return!1;if(e==="prop"){let n=yi[Math.random()*yi.length|0],i=this.disguises.get("prop:"+n.id);i||(i={root:Xi(n.id),update(){}},this.disguises.set("prop:"+n.id,i)),this.scene.add(i.root),i.root.visible=!0,this.disguise={prop:n,char:i,t:Ln.disguise.time}}else{if(!this.heroes.length)return!1;let n=new Set(t.filter(l=>l.alive).map(l=>l.hero.id)),i=this.heroes.filter(l=>!n.has(l.id)),r=i.length?i:this.heroes,a=r[Math.random()*r.length|0],o=this.disguises.get(a.id);if(!o){o=a.build("classic"),pc||(pc=Cn("rgba(150,80,230,0.55)","rgba(90,30,160,0)"));let l=new vn(new un({map:pc,transparent:!0,depthWrite:!1,blending:Ne,opacity:.5}));l.scale.set(a.radius*3,.9,1),l.position.y=.35,o.root.add(l),o.shimmer=l,this.disguises.set(a.id,o)}this.scene.add(o.root),o.root.visible=!0,this.disguise={hero:a,char:o,t:Ln.disguise.time}}return this.root.visible=!1,this.poof=!0,!0}reveal(){this.disguise&&(Y(this,Ae,mc).call(this),this.disguise=null,this.disguiseCd=Ln.disguise.cd,this.root.visible=this.state!=="hidden",this.poof=!0)}update(t,e,n,i,r={},a=null,o=0){var f,g;let l={t:e,speed:0,mode:"search",appear:1};if(this.state==="hidden")return l;if(this.state==="appear")return this.appear=Math.min(1,this.appear+t/2.2),l.appear=this.appear,l.mode="hunt",this.appear>=1&&(this.state=this.human?"hunt":"search"),Y(this,Ae,gc).call(this,l,t),l;this.stunT=Math.max(0,this.stunT-t),this.slowT=Math.max(0,this.slowT-t),this.disguiseCd=Math.max(0,this.disguiseCd-t),this.disguise&&(this.disguise.t-=t,this.disguise.t<=0&&this.reveal());let c=Y(this,Ae,rd).call(this,t,n),h;this.human?h=a:h=Y(this,Ae,ad).call(this,t,c,n);let u=this.ctrl;u.moveMul=this.stunT>0?0:1,(f=this.disguise)!=null&&f.prop&&h&&(u.moveMul*=At.abilities.prop.walk,h={...h,run:!1,jumpHold:!1,jump:!1}),u.slowMul=(this.slowT>0?.45:1)*(1+Ln.lateBoost*i)*((g=this.speedMul)!=null?g:1);let d=u.dashT>0;u.update(t,this.stunT>0?{x:0,y:0}:h,this.human?o:0),u.dashT>0&&!d&&this.reveal(),this.dashed=u.dashed;for(let _ of r.domes||[]){let m=this.pos.x-_.x,p=this.pos.z-_.z,y=_.r+this.radius,x=Math.hypot(m,p);if(x<y){let M=x||.001;this.pos.x=_.x+m/M*y,this.pos.z=_.z+p/M*y;let E=(this.vel.x*m+this.vel.z*p)/M;E<0&&(this.vel.x-=E*m/M,this.vel.z-=E*p/M)}}return this.human||Y(this,Ae,cd).call(this,t),l.mode=this.stunT>0?"search":this.state==="hunt"?"hunt":"search",l.speed=u.speed,l.stunned=this.stunT>0,Y(this,Ae,gc).call(this,l,t),l}catches(t){if(!this.active||this.stunT>0||!t.alive||t.protected)return!1;let e=t.ctrl.pos;return Math.hypot(e.x-this.pos.x,e.z-this.pos.z)<Ln.catchRadius+t.ctrl.radius*.6&&e.y-this.pos.y<Ln.catchHeight&&this.pos.y-e.y<1.5}};Ae=new WeakSet,mc=function(){for(let t of this.disguises.values())t.root.visible=!1,this.scene.remove(t.root)},rd=function(t,e){let n=null,i=1/0,r=null,a=Math.sin(this.yaw),o=Math.cos(this.yaw);for(let c of e){if(!c.alive||c.protected)continue;let h=c.ctrl.pos,u=h.x-this.pos.x,d=h.z-this.pos.z,f=Math.hypot(u,d),g=f<Ln.sightRange&&this.world.lineOfSight(this.pos.x,this.pos.z,h.x,h.z,!1,this.eyeY,h.y+c.ctrl.height*.75);c.hidden&&f>2.6&&(g=!1),c.prop&&!(c.ctrl.speed>.8&&f<14)&&(g=!1),g&&f>8&&(u*a+d*o)/(f||1)<-.35&&(g=!1);let _=c.ctrl.running&&f<Ln.hearRunRange&&!c.hidden&&!c.prop;if(!(g||_||f<2.2))continue;let m=f*(g?1:1.6);c===this.target&&(r={a:c,d:f,sees:g}),m<i&&(i=m,n={a:c,d:f,sees:g})}let l=r&&r.d<i*1.5+3?r:n;return this.sees=!!(l&&l.sees),l?(this.target=l.a,this.lastSeen=l.a.ctrl.pos.clone(),this.unseen=0,this.state!=="hunt"&&!this.disguise&&(this.state="hunt")):(this.unseen+=t,this.state==="hunt"&&this.unseen>Ln.loseSightTime&&(this.target=null,this.human||(this.state="search"))),l},ad=function(t,e,n){var _,m;let i=this.ctrl,r={x:0,y:0,run:!1,jump:!1,jumpHold:!1,dash:!1};if(!e&&this.disguiseReady&&Math.random()<t*.25&&this.useDisguise(n,Math.random()<.3?"prop":"hero"),(_=this.disguise)!=null&&_.prop){let p=sd(n,this.pos);if(p&&p.ctrl.pos.distanceTo(this.pos)<4.5)this.reveal(),this.target=p,this.state="hunt",this.lastSeen=p.ctrl.pos.clone();else return r}let a,o=!1;if(this.disguise){let p=(e==null?void 0:e.a)||sd(n,this.pos);p&&(a=p.ctrl.pos,this.target=p,o=p.ctrl.pos.distanceTo(this.pos)>3)}if(!a)if(this.state==="hunt"&&this.target)a=this.sees?this.target.ctrl.pos:this.lastSeen;else if(this.lastSeen&&this.pos.distanceTo(this.lastSeen)>1.5)a=this.lastSeen;else{if(this.lastSeen=null,!this.wanderTarget||this.pos.distanceTo(this.wanderTarget)<1.5){let p=n.filter(M=>M.alive),y=p.filter(M=>M.prop&&M.ctrl.pos.distanceTo(this.pos)<16&&this.world.lineOfSight(this.pos.x,this.pos.z,M.ctrl.pos.x,M.ctrl.pos.z,!0,this.eyeY,1)),x=Math.random();y.length&&x<.2?this.wanderTarget=y[Math.random()*y.length|0].ctrl.pos.clone():x<.6?this.wanderTarget=Y(this,Ae,ld).call(this):x<.75&&p.length?this.wanderTarget=Y(this,Ae,to).call(this,p[Math.random()*p.length|0].ctrl.pos):this.wanderTarget=Y(this,Ae,to).call(this,this.pos)}a=this.wanderTarget}if(!a)return r;let l=Math.hypot(a.x-this.pos.x,a.z-this.pos.z),c=!1;if(this.target&&this.target.alive&&!o){let p=this.target.ctrl.pos;c=p.y-this.pos.y>.8&&Math.hypot(p.x-this.pos.x,p.z-this.pos.z)<3.2}let h=c?this.target.ctrl.pos:Y(this,Ae,od).call(this,a,this.sees&&e&&e.d<7,t),u=h.x-this.pos.x,d=h.z-this.pos.z,f=Math.hypot(u,d);f>.05&&(r.x=u/f,r.y=-d/f);let g=this.state==="hunt"&&!!this.target&&!o;return r.run=g&&(this.sees||l<10)&&!i.exhausted,g&&this.sees&&e&&e.d<Ln.burstRange&&e.d>1.6&&i.dashReady&&!this.target.hidden&&(this.target.ctrl.running||this.target.ctrl.dashT>0||e.d<4||i.dashCharges>=((m=i.phys.dash.charges)!=null?m:1))&&(r.dash=!0),r.jumpHold=c,r},od=function(t,e,n){if(this.repath-=n,e&&this.nav.clear(this.pos.x,this.pos.z,t.x,t.z))return this.path=null,t;if((!this.path||this.repath<=0)&&(this.path=this.nav.find(this.pos.x,this.pos.z,t.x,t.z),this.repath=Ln.repathEvery*(.8+Math.random()*.4)),this.path&&this.path.length){let[i,r]=this.path[0];return Math.hypot(i-this.pos.x,r-this.pos.z)<.7&&this.path.length>1&&this.path.shift(),{x:this.path[0][0],z:this.path[0][1]}}return t},ld=function(){this.checked||(this.checked=new Map);let t=performance.now(),e=null,n=-1/0;for(let i of this.world.bushes){let r=Math.hypot(i.x-this.pos.x,i.z-this.pos.z),a=(t-(this.checked.get(i)||-1e9))/1e3,o=Math.min(a,60)*.5-r+Math.random()*8;o>n&&(n=o,e=i)}return e?(this.checked.set(e,t),new I(e.x,0,e.z)):Y(this,Ae,to).call(this,this.pos)},to=function(t){for(let e=0;e<20;e++){let n=t.x+(Math.random()-.5)*22,i=t.z+(Math.random()-.5)*22,[r,a]=this.nav.toCell(n,i);if(this.nav.free(r,a))return new I(n,0,i)}return t.clone()},cd=function(t){if(this.stunT>0){this.stuckT=0,this.stuckFrom=null;return}this.stuckFrom||(this.stuckFrom=this.pos.clone()),this.stuckT+=t,this.stuckT>1.5&&(this.pos.distanceTo(this.stuckFrom)<.6&&(this.wanderTarget=null,this.path=null,this.sees||(this.lastSeen=null,this.state==="hunt"&&(this.state="search",this.target=null))),this.stuckT=0,this.stuckFrom=this.pos.clone())},gc=function(t,e){let n=this.disguise;if(n){let i=n.char.root;i.position.copy(this.pos),n.prop||(i.rotation.y=this.yaw),n.char.update(e,this.ctrl.animState(t.t)),n.char.shimmer&&(n.char.shimmer.material.opacity=.35+Math.sin(t.t*3)*.15);return}this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,this.root.rotation.z=t.stunned?Math.sin(t.t*18)*.06:0,this.char.update(e,t)};function sd(s,t){let e=null,n=1/0;for(let i of s){if(!i.alive||i.protected||i.hidden)continue;let r=i.ctrl.pos.distanceTo(t);r<n&&(n=r,e=i)}return e}var hd=Cn("rgba(255,210,130,1)","rgba(255,150,40,0)",64);function ud(s,t,e,n,i){let r=new hn({transparent:!0,depthWrite:!1,side:xn,blending:Ne,uniforms:{uT:{value:0},uA:{value:0}},vertexShader:`varying vec3 vN; varying vec3 vV; varying vec3 vP;
      void main(){ vec4 w = modelMatrix*vec4(position,1.); vP = position; vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition - w.xyz); gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`uniform float uT; uniform float uA; varying vec3 vN; varying vec3 vV; varying vec3 vP;
      void main(){ float f = pow(1. - abs(dot(vN, vV)), 2.2);
        float hex = step(0.92, fract(vP.y*3.5 + uT*0.4)) * 0.25;
        vec3 c = mix(vec3(1.,.72,.3), vec3(1.,.9,.6), f);
        gl_FragColor = vec4(c, (0.06 + f*0.75 + hex*f) * uA); }`}),a=new oe(new ze(n,40,20,0,Math.PI*2,0,Math.PI/2),r);a.position.set(t,0,e),s.add(a);let o=dd(s,t,e,n,16760928),l=0;return{x:t,z:e,r:n,update(c){l+=c;let h=Math.min(1,l/.4);return a.scale.setScalar(.2+.8*(1-(1-h)**3)),r.uniforms.uT.value=l,r.uniforms.uA.value=Math.min(1,l/.3)*Math.min(1,(i-l)/.6),o.material.opacity=r.uniforms.uA.value*.6,l>=i?(s.remove(a,o),r.dispose(),!1):!0}}}function dd(s,t,e,n,i){let r=new oe(new gr(n*.94,n,48),new cn({color:i,transparent:!0,opacity:.6,depthWrite:!1,blending:Ne}));return r.rotation.x=-Math.PI/2,r.position.set(t,.05,e),s.add(r),r}function no(s,t,e,n,i=16748442){let r=dd(s,t,e,1,i),a=24,o=new ye,l=new Float32Array(a*3),c=[];for(let d=0;d<a;d++){let f=Math.random()*Math.PI*2,g=Math.random()*n*.8;l.set([t+Math.cos(f)*g,.3+Math.random(),e+Math.sin(f)*g],d*3),c.push(.8+Math.random()*1.5)}o.setAttribute("position",new Ce(l,3));let h=new gi(o,new Qn({size:.4,map:hd,color:i,transparent:!0,depthWrite:!1,blending:Ne}));s.add(h);let u=0;return{update(d){u+=d,r.scale.setScalar(1+u*n*1.6),r.material.opacity=Math.max(0,.8-u);for(let f=0;f<a;f++)l[f*3+1]+=c[f]*d;return o.attributes.position.needsUpdate=!0,h.material.opacity=Math.max(0,1-u/1.4),u>1.4?(s.remove(r,h),o.dispose(),!1):!0}}}function fd(s,t,e,n,i=6){let r=new ne,a=new _e({color:16765066,emissive:16751162,emissiveIntensity:2.6});r.add(new oe(new ze(.14,10,8),a));let o=new oe(new As(.11,.28,8),a);o.position.y=.18,r.add(o);let l=new vn(new un({map:hd,transparent:!0,depthWrite:!1,blending:Ne}));l.scale.set(1.1,1.1,1),r.add(l),r.position.copy(t),s.add(r);let c=new I((Math.random()-.5)*4,3,(Math.random()-.5)*4),h=0;return{update(u){h+=u;let d=e();if(d){let f=new I(d.x,1.6,d.z).sub(r.position);if(f.length()<.8)return n(d),s.remove(r),!1;c.lerp(f.setLength(11),Math.min(1,u*2.5))}else c.y+=u*1.5;return r.position.addScaledVector(c,u),r.rotation.y+=u*6,l.material.opacity=.6+Math.sin(h*20)*.2,h>i?(s.remove(r),!1):!0}}}function pd(s,t,e){let n=new Fn((()=>{let c=document.createElement("canvas");c.width=c.height=64;let h=c.getContext("2d");h.fillStyle="#ffd98a",h.beginPath(),h.ellipse(32,40,13,11,0,0,Math.PI*2),h.fill();for(let[u,d]of[[17,22],[27,15],[38,15],[48,22]])h.beginPath(),h.ellipse(u,d,5,6,0,0,Math.PI*2),h.fill();return c})()),i=new cn({map:n,transparent:!0,depthWrite:!1,blending:Ne}),r=new mi(.5,.5),a=[],o=1;for(let c=0;c<t.length-1;c++){let[h,u]=t[c],[d,f]=t[c+1],g=Math.hypot(d-h,f-u),_=Math.atan2(d-h,f-u);for(let m=0;m<g;m+=.8){let p=m/g,y=new oe(r,i);y.rotation.set(-Math.PI/2,0,_+Math.PI),y.position.set(h+(d-h)*p+Math.cos(_)*.18*o,.04,u+(f-u)*p-Math.sin(_)*.18*o),o=-o,y.userData.delay=a.length*.04,y.visible=!1,s.add(y),a.push(y)}}let l=0;return{update(c){l+=c;for(let h of a)h.visible=l>h.userData.delay;return i.opacity=Math.min(1,(e-l)/1)*(.75+Math.sin(l*5)*.25),l>e?(a.forEach(h=>s.remove(h)),r.dispose(),!1):!0}}}function md(s,t,e){let n=new vn(new un({map:Cn("rgba(190,120,255,1)","rgba(120,40,200,0)",64),depthTest:!1,transparent:!0,blending:Ne}));n.scale.set(1.6,1.6,1),n.renderOrder=10,s.add(n);let i=0;return{update(r){i+=r;let a=t();return n.position.set(a.x,3.3+Math.sin(i*4)*.15,a.z),n.material.opacity=Math.min(1,e-i),i>e?(s.remove(n),!1):!0}}}function gd(s,t,e,n,i){let r=new cn({color:16760928,transparent:!0,opacity:.9,side:xn,depthWrite:!1,blending:Ne}),a=new oe(new gr(1.4,2,32,1,-Math.PI*.85,Math.PI*.7),r);a.rotation.x=-Math.PI/2;let o=new ne;o.add(a),o.rotation.y=i,o.position.set(t,e+1.1,n),s.add(o);let l=0;return{update(c){return l+=c,r.opacity=Math.max(0,.9-l*2.5),a.scale.setScalar(1+l*.6),l>.4?(s.remove(o),!1):!0}}}var pe,xc,xd,yd,_d,Yi,yc,vd,_c,br=class{constructor(t,e,n){de(this,pe);this.agent=t,this.world=e,this.nav=n,this.mode="wander",this.goal=null,this.path=null,this.think=Math.random()*.3,this.stuck=0,this.idle=0,this.sat=0,this.patience=Y(this,pe,xc).call(this),this.juke=null,this.ladder=null}update(t,e){var y;this.ghosts=e;let n=At.bots,i=this.agent,r=i.ctrl,a=r.pos,o=null,l=1/0;for(let x of e){let M=Math.hypot(x.pos.x-a.x,x.pos.z-a.z);M<l&&Y(this,pe,xd).call(this,x,a,M)&&(l=M,o=x)}this.threat=o,this.td=l,this.think-=t,this.think<=0&&(this.think=n.think*(.7+Math.random()*.6),Y(this,pe,yd).call(this,o,l));let c={x:0,y:0,run:!1,jump:!1,dash:!1};if(i.prop)return c;if(o&&l<n.jukeRange&&!r.elevated&&o.pos.y<a.y+1&&(!this.juke||this.juke.t<=0)){let x=a.x-o.pos.x,M=a.z-o.pos.z,E=Math.hypot(x,M)||1,T=Math.random()<.5?1:-1,w=-M/E*T*.85+x/E*.5,C=x/E*T*.85+M/E*.5,[v,b]=this.nav.toCell(a.x+w*2.5,a.z+C*2.5);this.nav.free(v,b)||(w=M/E*T*.85+x/E*.5,C=-x/E*T*.85+M/E*.5),this.juke={x:w,z:C,t:.45}}if(this.juke&&this.juke.t>0)return this.juke.t-=t,c.x=this.juke.x,c.y=-this.juke.z,c.run=!r.exhausted,c.dash=r.dashReady,this.juke.t<=0&&(this.path=null,this.think=0),c;if(r.elevated&&r.grounded&&this.mode!=="ladder"){if(this.mode="roof",o){let x=a.x-o.pos.x,M=a.z-o.pos.z,E=Math.hypot(x,M)||1;return c.x=x/E,c.y=-M/E,c.run=l<7&&!r.exhausted,c.jump=o.pos.y>a.y-1.2&&l<3.5,c}if(this.sat+=t,this.sat>this.patience){let x=(y=this.roofDir)!=null?y:this.roofDir=Math.random()*Math.PI*2;c.x=Math.cos(x),c.y=Math.sin(x)}return c}if(this.mode==="roof"&&!r.elevated&&(this.mode="wander",this.roofDir=null,this.sat=0,this.path=null),this.mode==="ladder"&&this.ladder){let x=this.ladder,M=x.x+x.nx*(r.radius+.25),E=x.z+x.nz*(r.radius+.25),T=M-a.x,w=E-a.z;if(Math.hypot(T,w)>.5&&!r.climbing&&a.y<.5)(!this.path||!this.path.length)&&Y(this,pe,Yi).call(this,M,E);else return c.x=-x.nx,c.y=x.nz,c.run=!1,r.elevated&&r.grounded&&(this.mode="roof",this.ladder=null,this.sat=0),c}let h=this.world.inBush(a.x,a.z,a.y);if(this.mode==="hide"&&h&&(!o||o.target!==i||l>4))return this.sat+=t,!o&&this.sat>this.patience&&(this.sat=0,this.patience=Y(this,pe,xc).call(this),this.mode="wander",this.path=null,this.think=0),c;if(this.mode!=="roof"&&(this.sat=0),this.mode==="wander"&&this.idle>0)return this.idle-=t,c;if(!this.path||!this.path.length)return c;let[u,d]=this.path[0],f=u-a.x,g=d-a.z,_=Math.hypot(f,g);if(_<.6)return this.path.shift(),!this.path.length&&this.mode==="wander"&&(this.idle=Math.random()*2),c;f/=_,g/=_,c.x=f,c.y=-g;let m=this.mode==="flee"||this.mode==="help"||this.mode==="ladder"||this.mode==="hide"&&o,p=o&&(l<8||o.target===i&&o.sees);return c.run=m&&!r.exhausted&&(p||r.stamina>n.calmRun&&o&&l<12||this.mode==="help"),c.dash=m&&o&&l<4.5&&r.dashReady,r.speed<.6&&!r.mantle?this.stuck+=t:this.stuck=0,this.stuck>.5&&(c.jump=!0,this.stuck=0,this.path=null,this.think=0),c}};pe=new WeakSet,xc=function(){var i,r,a;let[t,e]=At.bots.restless,n=((a=(r=(i=this.agent)==null?void 0:i.abilities)==null?void 0:r.game)==null?void 0:a.phase)==="hide"?2.5:1;return(t+Math.random()*(e-t))*n},xd=function(t,e,n){let i=this.agent.ctrl;if(!t.active)return!1;if(t.disguised){let r=t.ctrl.speed>6.5||t.ctrl.dashT>0;if(!(n<At.ghost.disguise.noticeRange||r&&n<8))return!1}return t.target===this.agent&&t.sees?!0:n<At.bots.fleeRange&&this.world.lineOfSight(e.x,e.z,t.pos.x,t.pos.z,!0,e.y+i.height*.8,t.eyeY)},yd=function(t,e){var a,o;let n=this.agent,i=n.ctrl,r=i.pos;if(!(n.prop||this.mode==="roof"||this.mode==="ladder"&&(i.climbing||i.elevated))){if(!t&&n.hero.helper&&this.allies){let l=Y(this,pe,_d).call(this);if(l){this.mode="help",Y(this,pe,Yi).call(this,l.ctrl.pos.x,l.ctrl.pos.z);return}this.mode==="help"&&(this.mode="wander")}if(t){if(this.mode==="hide"&&this.world.inBush(r.x,r.z,r.y)&&t.target!==n||this.mode==="ladder"&&this.ladder)return;if(e>5&&Math.random()<At.bots.roofChance){let c=Y(this,pe,yc).call(this,t);if(c){this.mode="ladder",this.ladder=c,this.path=null;return}}let l=Math.random()<At.bots.hideChance?Y(this,pe,_c).call(this,t):null;if(l){this.mode="hide",Y(this,pe,Yi).call(this,l.x,l.z);return}this.mode="flee",Y(this,pe,Yi).call(this,...Y(this,pe,vd).call(this,t));return}if(this.mode==="flee"&&(this.mode="wander"),this.mode!=="ladder"&&!(this.mode==="hide"&&this.world.inBush(r.x,r.z,r.y))&&(!this.path||!this.path.length)){let l=Math.random();if(l<.1){let g=Y(this,pe,yc).call(this,null);if(g){this.mode="ladder",this.ladder=g;return}}let c=((o=(a=this.agent.abilities)==null?void 0:a.game)==null?void 0:o.phase)==="hide";if(this.mode=l<(c?.75:.4)?"hide":"wander",this.mode==="hide"){let g=Y(this,pe,_c).call(this,null);if(g)return Y(this,pe,Yi).call(this,g.x,g.z)}let[h,u]=this.nav.toCell(r.x+(Math.random()-.5)*26,r.z+(Math.random()-.5)*26),[d,f]=this.nav.nearestFree(h,u);Y(this,pe,Yi).call(this,...this.nav.center(d,f))}}},_d=function(){let t=this.agent.ctrl.pos,e=null,n=At.bots.helpRange;for(let i of this.allies()){if(i===this.agent||!i.alive||!this.ghosts||!this.ghosts.some(a=>a.active&&!a.disguised&&a.target===i))continue;let r=i.ctrl.pos.distanceTo(t);r<n&&(n=r,e=i)}return e},Yi=function(t,e){let n=this.agent.ctrl.pos;this.path=this.nav.find(n.x,n.z,t,e)||[[t,e]]},yc=function(t){let e=this.agent.ctrl.pos,n=null,i=12;for(let r of this.world.ladders){let a=Math.hypot(r.x-e.x,r.z-e.z);a>i||t&&Math.hypot(r.x-t.pos.x,r.z-t.pos.z)<a+2||(i=a,n=r)}return n},vd=function(t){let e=this.agent.ctrl.pos,n=null,i=-1/0;for(let r=0;r<16;r++){let a=r/16*Math.PI*2,o=7+r%2*4,l=e.x+Math.cos(a)*o,c=e.z+Math.sin(a)*o,[h,u]=this.nav.toCell(l,c);if(!this.nav.free(h,u)||!this.nav.clear(e.x,e.z,l,c))continue;let d=Math.hypot(l-e.x,c-e.z),f=Math.hypot(l-t.pos.x,c-t.pos.z),g=f-d,_=this.world.lineOfSight(t.pos.x,t.pos.z,l,c,!1,t.eyeY,1.4)?0:5,m=g*1.2+f*.4+_+Math.random()*1.5;m>i&&(i=m,n=[l,c])}return n||[e.x-(t.pos.x-e.x),e.z-(t.pos.z-e.z)]},_c=function(t){let e=this.agent.ctrl.pos,n=null,i=-1/0;for(let r of this.world.bushes){let a=Math.hypot(r.x-e.x,r.z-e.z);if(a>20||!t&&a<r.r+1||this.agent.ctrl.radius>r.r*.9)continue;let o=-a;if(t){let l=Math.hypot(r.x-t.pos.x,r.z-t.pos.z);if(l<a+1)continue;o+=l*.8}o>i&&(i=o,n=r)}return n};var Md=()=>At.abilities,vc={moti:[{id:"shelter",key:"1",name:"\u0423\u044E\u0442\u043D\u044B\u0439 \u043F\u0440\u0438\u044E\u0442",icon:"\u{1F6E1}\uFE0F",tag:"\u0417\u0430\u0449\u0438\u0442\u0430",anim:"cast",dur:.9,lock:.7},{id:"light",key:"2",name:"\u0422\u0451\u043F\u043B\u044B\u0439 \u0441\u0432\u0435\u0442",icon:"\u2764\uFE0F",tag:"\u041B\u0435\u0447\u0435\u043D\u0438\u0435",anim:"cast",dur:.8,lock:.5},{id:"wisps",key:"3",name:"\u0414\u0443\u0445\u0438-\u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A\u0438",icon:"\u{1F525}",tag:"\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430",anim:"summon",dur:1,lock:.6},{id:"path",key:"4",name:"\u041F\u0443\u0442\u044C \u0444\u043E\u043D\u0430\u0440\u0435\u0439",icon:"\u{1F43E}",tag:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430",anim:"path",dur:.8,lock:.4},{id:"swing",key:"F",name:"\u0423\u0434\u0430\u0440 \u0444\u043E\u043D\u0430\u0440\u0451\u043C",icon:"\u{1F3EE}",tag:"\u0410\u0442\u0430\u043A\u0430",anim:"swing",dur:.55,lock:0},{id:"wave",key:"G",name:"\u041F\u0440\u0438\u0432\u0435\u0442!",icon:"\u{1F44B}",tag:"\u042D\u043C\u043E\u0446\u0438\u044F",anim:"wave",dur:1.6,lock:0}],kid:[{id:"prop",key:"Q",name:"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430",icon:"\u{1F3AD}",tag:"\u041F\u0440\u044F\u0442\u043A\u0438",anim:"poof",dur:.25,lock:0},{id:"wave",key:"G",name:"\u041F\u0440\u0438\u0432\u0435\u0442!",icon:"\u{1F44B}",tag:"\u042D\u043C\u043E\u0446\u0438\u044F",anim:"wave",dur:1.4,lock:0}],masha:[{id:"prop",key:"Q",name:"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430",icon:"\u{1F3AD}",tag:"\u041F\u0440\u044F\u0442\u043A\u0438",anim:"poof",dur:.25,lock:0},{id:"wave",key:"G",name:"\u041F\u0440\u0438\u0432\u0435\u0442!",icon:"\u{1F44B}",tag:"\u042D\u043C\u043E\u0446\u0438\u044F",anim:"wave",dur:1.4,lock:0}],catbus:[{id:"prop",key:"Q",name:"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430",icon:"\u{1F3AD}",tag:"\u041F\u0440\u044F\u0442\u043A\u0438",anim:"poof",dur:.25,lock:0}]},so,bd,io=class{constructor(t,e){de(this,so);this.agent=t,this.game=e,this.list=(vc[t.ctrl.hero.id]||[]).map(n=>({...n,cdLeft:0})),t.action=null}get(t){return this.list.find(e=>e.id===t)}ready(t){let e=this.get(t);return!!e&&e.cdLeft<=0}cooldown(t){var e,n;return(n=(e=Md()[t.id])==null?void 0:e.cd)!=null?n:1}use(t){let e=this.get(t);return!e||e.cdLeft>0||!this.agent.alive||this.agent.action&&this.agent.action.lock>0?!1:(e.cdLeft=this.cooldown(e),this.agent.action={name:e.anim,t:0,dur:e.dur,lock:e.lock,id:e.id,fired:!1},!0)}update(t){for(let i of this.list)i.cdLeft=Math.max(0,i.cdLeft-t);let e=this.agent.action;if(this.agent.ctrl.moveMul=1,!e)return;e.t+=t,e.lock=Math.max(0,e.lock-t),e.lock>0&&(this.agent.ctrl.moveMul=.15);let n=e.name==="swing"?.3:e.name==="wave"?99:e.name==="poof"?0:.45;!e.fired&&e.t/e.dur>=n&&(e.fired=!0,Y(this,so,bd).call(this,e.id)),e.t>=e.dur&&(this.agent.action=null)}pose(){let t=this.agent.action;return t?{name:t.name,k:t.t/t.dur}:null}botThink(t,e){var a;let n=this.agent.ctrl,i=this.game,r=n.pos;if(this.get("prop")){let o=this.agent;if(o.prop&&t&&e<At.bots.jukeRange+.8){(a=i.toggleProp)==null||a.call(i,o);return}if(!o.prop&&!t&&i.phase==="hide"&&this.ready("prop")&&!n.elevated&&Math.random()<.006)return this.use("prop");if(o.prop)return}for(let o of i.agents){if(o===this.agent||!o.alive)continue;let l=i.ghosts.find(h=>h.active&&h.target===o),c=o.ctrl.pos.distanceTo(r);if(l&&l.pos.distanceTo(r)<16&&this.ready("wisps"))return this.use("wisps");if(l&&c<At.abilities.shelter.radius&&l.pos.distanceTo(o.ctrl.pos)<8&&this.ready("shelter"))return this.use("shelter");if(o.ctrl.exhausted&&c<At.abilities.light.radius&&this.ready("light"))return this.use("light")}if(t&&e<2.8&&this.ready("swing"))return this.use("swing");if(t&&e<7&&this.ready("shelter"))return this.use("shelter");if(t&&e<16&&this.ready("wisps"))return this.use("wisps");if(n.stamina<.25&&this.ready("light"))return this.use("light");if(t&&e<12&&this.ready("path")&&Math.random()<.02)return this.use("path");if(!t&&this.ready("wave")&&Math.random()<.002)return this.use("wave")}};so=new WeakSet,bd=function(t){var l,c,h,u,d,f;let e=this.game,n=this.agent,i=n.ctrl,r=Md()[t],a=i.pos,o=e.sound;if(t==="prop")(l=e.toggleProp)==null||l.call(e,n);else if(t==="shelter"){let g=ud(e.scene,a.x,a.z,r.radius,r.time);e.addFx(g),e.domes.push(g),setTimeout(()=>{e.domes=e.domes.filter(_=>_!==g)},r.time*1e3),(c=o.chime)==null||c.call(o,[523,784,1046])}else if(t==="light"){e.addFx(no(e.scene,a.x,a.z,r.radius));for(let g of e.agents)!g.alive||g.ctrl.pos.distanceTo(a)>r.radius||(g.ctrl.stamina=1,g.ctrl.exhausted=!1,g.ctrl.boostT=r.boostTime,g.ctrl.boostMul=r.boost);(h=o.chime)==null||h.call(o,[659,880,1318])}else if(t==="wisps"){let g=new I(a.x,a.y+2,a.z);for(let _=0;_<r.count;_++){let m=null;e.addFx(fd(e.scene,g,()=>((!m||!m.active)&&(m=t_(e.ghosts,a,30)),m?m.pos:null),()=>{var p,y;m.slow(r.slow),m.stun(r.stun),(y=(p=e.sound).land)==null||y.call(p,6)},7))}(u=o.chime)==null||u.call(o,[440,660,880])}else if(t==="path"){let g=e_(e.world,e.ghosts,a);if(g){let _=e.navFor(i.radius).find(a.x,a.z,g.x,g.z);_&&e.addFx(pd(e.scene,[[a.x,a.z],..._],r.time))}for(let _ of e.ghosts)_.state!=="hidden"&&e.addFx(md(e.scene,()=>_.pos,r.time));(d=o.chime)==null||d.call(o,[392,523,659,784])}else if(t==="swing"){e.addFx(gd(e.scene,a.x,a.y,a.z,i.yaw));let g=Math.sin(i.yaw),_=Math.cos(i.yaw);for(let m of e.ghosts){if(!m.active)continue;let p=m.pos.x-a.x,y=m.pos.z-a.z,x=Math.hypot(p,y);x>r.range+m.radius||(p*g+y*_)/(x||1)<-.2||(m.stun(r.stun),m.knock(p/(x||1),y/(x||1),r.knock),e.cam.shake=Math.max(e.cam.shake,.4))}(f=o.land)==null||f.call(o,12)}};function t_(s,t,e){let n=null,i=e;for(let r of s){if(!r.active)continue;let a=r.pos.distanceTo(t);a<i&&(i=a,n=r)}return n}function e_(s,t,e){let n=null,i=-1/0;for(let r of s.bushes){let a=Math.hypot(r.x-e.x,r.z-e.z),o=40;for(let c of t)c.state!=="hidden"&&(o=Math.min(o,Math.hypot(r.x-c.pos.x,r.z-c.pos.z)));let l=o*1.2-a;l>i&&(i=l,n=r)}return n}var Sd=[[-5,19],[5.5,17],[-9,23],[9,21],[-3,14],[3,25]],Sr=[[0,-21],[-7,-20],[7,-20],[0,-14]],ei,Ed,wd,Mc,ro=class{constructor(t){de(this,ei);Object.assign(this,t),this.agents=[],this.domes=[],this.fx=[],this.events=[],this.phase="none",this.activeGhosts=[],this.netIn=new Map}addFx(t){this.fx.push(t)}emit(t,e={}){this.events.push({type:t,...e})}makeAgent(t,e,n,i,r=null,a=null){let o=new Fs(t,this.world);o.spawn(n,e||r?Math.PI:Math.random()*Math.PI*2);let l={hero:t,name:a||t.name,ctrl:o,char:this.makeChar(t,i),isPlayer:e,remote:r,alive:!0,hidden:!1,protected:!1,prop:null,skin:i};return l.key=this.keySeq=(this.keySeq||0)+1,l.abilities=new io(l,this),!e&&!r&&(l.brain=new br(l,this.world,this.navFor(t.radius)),l.brain.allies=()=>this.agents),this.agents.push(l),l}start(t){this.opts=t,this.mode=t.mode,this.agents=[],this.domes=[],this.caughtOrder=[],this.stats={found:0,chaseCatches:0,pumpkins:0,playerFoundAt:null,playerCaughtInChase:!1},this.player=null,this.playerGhost=null;let e=Sd.slice().sort(()=>Math.random()-.5),n=c=>new I(c[0],0,c[1]),i=t.remotes||[],r=i.filter(c=>c.hero.id==="noface");if(t.mode==="play"||t.mode==="hunter"&&i.length){t.mode==="play"&&(this.player=this.makeAgent(t.hero,!0,new I(0,0,22),t.skin)),i.filter(h=>h.hero.id!=="noface").forEach((h,u)=>this.makeAgent(h.hero,!1,new I(-3+u*2,0,23),h.skin,h.id,h.name));let c=new Set([t.hero.id,...i.map(h=>h.hero.id)]);if(t.withBots)for(let h of this.heroes)!c.has(h.id)&&h.bot!==!1&&this.makeAgent(h,!1,n(e.pop()),"classic")}else for(let c of this.heroes)c.bot!==!1&&this.makeAgent(c,!1,n(e.pop()),c.id==="moti"&&t.mSkin||"classic");for(let c of this.ghosts)c.isPlayer=!1,c.remote=null,c.reset(n(Sr[0]));let a=(t.mode==="hunter"?1:0)+r.length,o=Math.min(this.ghosts.length,Math.max(1,Math.min(3,t.ghosts),a));this.activeGhosts=this.ghosts.slice(0,o),this.activeGhosts.forEach((c,h)=>c.reset(n(Sr[h])));let l=0;t.mode==="hunter"&&(this.playerGhost=this.activeGhosts[l++],this.playerGhost.isPlayer=!0);for(let c of r){let h=this.activeGhosts[l++];h.remote=c.id,h.remoteName=c.name}this.netIn.clear(),this.setPhase("hide")}setPhase(t){this.phase=t,this.t=0,this.spawned=0,this.duration=t==="hide"?At.round.hide:At.round.chase}get left(){return Math.max(0,this.duration-this.t)}toggleProp(t){if(t.prop){this.emit("poof",{x:t.ctrl.pos.x,y:t.ctrl.pos.y,z:t.ctrl.pos.z}),t.prop.obj&&this.scene.remove(t.prop.obj),t.prop=null,t.char&&(t.char.root.visible=!0);return}if(t.ctrl.elevated||!t.alive)return;let e=yi[Math.random()*yi.length|0],n=this.makeProp(e.id);n&&(n.position.copy(t.ctrl.pos),n.rotation.y=Math.random()*6,this.scene.add(n)),t.prop={kind:e,obj:n},t.char&&(t.char.root.visible=!1),this.emit("poof",{x:t.ctrl.pos.x,y:t.ctrl.pos.y,z:t.ctrl.pos.z,kind:e.name,agent:t})}step(t,e,n=null,i=0){var h;this.t+=t;let r=At,a=this.phase==="hide"?r.round.headStart:.3;this.activeGhosts.forEach((u,d)=>{u.state==="hidden"&&this.t>=a+d*(this.phase==="hide"?r.ghost.spawnGap:.4)&&(u.spawn(),this.spawned++,this.emit("ghostSpawn",{i:d,ghost:u}))});let o=this.activeGhosts.filter(u=>u.active);for(let u of this.agents){if(!u.alive)continue;u.abilities.update(t);let d;if(u.isPlayer)d=n||{};else if(u.remote)d=Y(this,ei,Mc).call(this,u.remote);else{d=u.brain.update(t,o);let g=u.brain.threat;u.abilities.botThink(g,g?g.pos.distanceTo(u.ctrl.pos):1/0)}u.prop&&(d.dash?this.toggleProp(u):(d={...d,run:!1,jump:!1},u.ctrl.moveMul*=r.abilities.prop.walk)),u.ctrl.update(t,d,u.isPlayer?i:u.remote&&d.camYaw||0),(h=u.prop)!=null&&h.obj&&u.prop.obj.position.copy(u.ctrl.pos);let f=u.ctrl.pos;u.hidden=this.world.inBush(f.x,f.z,f.y)&&!u.ctrl.running||!!u.prop&&u.ctrl.speed<.6,u.protected=this.domes.some(g=>Math.hypot(f.x-g.x,f.z-g.z)<g.r),u.protected&&(u.ctrl.stamina=Math.min(1,u.ctrl.stamina+t*.25))}id(this.agents);let l=Math.min(1,this.t/this.duration);for(let u of this.activeGhosts){u.speedMul=this.phase==="chase"&&!u.isPlayer&&!u.remote?r.round.chaseBotSpeed:1;let d=u.isPlayer?n||{}:u.remote?Y(this,ei,Mc).call(this,u.remote):null;u.update(t,e,this.agents,l,{domes:this.domes},d,u.isPlayer?i:(d==null?void 0:d.camYaw)||0),u.poof&&(u.poof=!1,this.emit("poof",{x:u.pos.x,y:u.pos.y,z:u.pos.z,ghost:u}))}for(let u of this.activeGhosts)for(let d of this.agents)u.catches(d)&&Y(this,ei,Ed).call(this,d,u);let c=this.agents.filter(u=>u.alive).length;(this.t>=this.duration||c===0)&&(this.phase==="hide"?Y(this,ei,wd).call(this):this.phase==="chase"&&(this.phase="over",this.emit("end",{result:this.result()})))}convertToBot(t){t.remote=null,t.brain=new br(t,this.world,this.navFor(t.hero.radius)),t.brain.allies=()=>this.agents}result(){let t=At.round.reward,e=this.agents.filter(i=>i.alive).map(i=>i.name),n=this.stats.pumpkins;return this.mode==="hunter"?n+=this.stats.found*t.found+this.stats.chaseCatches*t.catch:this.mode==="play"&&(this.stats.playerFoundAt===null&&(n+=t.survive),this.playerGhost?n+=this.caughtOrder.filter(i=>i.phase==="chase").length*t.catch:!this.stats.playerCaughtInChase&&this.player&&(n+=t.survive)),{mode:this.mode,alive:e,hideSurvivors:this.hideSurvivors||[],caught:this.caughtOrder.map(i=>i.agent.name),found:this.stats.found,chaseCatches:this.stats.chaseCatches,playerFoundAt:this.stats.playerFoundAt,playerWasGhost:!!this.playerGhost,playerCaughtInChase:this.stats.playerCaughtInChase,earn:n}}};ei=new WeakSet,Ed=function(t,e){t.alive=!1,t.prop&&this.toggleProp(t),t.char&&(t.char.root.visible=!1),e.reveal(),e.stun(At.ghost.grab),this.caughtOrder.push({agent:t,phase:this.phase,t:this.t}),this.phase==="hide"?(this.stats.found++,t.isPlayer&&(this.stats.playerFoundAt=this.t)):(this.stats.chaseCatches++,t.isPlayer&&(this.stats.playerCaughtInChase=!0)),this.emit("caught",{agent:t,ghost:e,byPlayer:e.isPlayer,byRemote:e.remote,phase:this.phase})},wd=function(){var u;let t=(u=this.caughtOrder.find(d=>d.phase==="hide"))==null?void 0:u.agent,e=this.agents.filter(d=>d.alive).map(d=>d.name);this.hideSurvivors=e;let n=d=>new I(d[0],0,d[1]),i=this.playerGhost?this.playerGhost.pos.clone():null,r=this.activeGhosts.filter(d=>d.remote).map(d=>[d.remote,d.remoteName]);for(let d of this.ghosts)d.reveal(),d.reset(n(Sr[0])),d.isPlayer=!1,d.remote=null;let a=Math.min(this.ghosts.length,At.round.chaseGhosts);this.activeGhosts=this.ghosts.slice(0,a);let o=null,l=null;if(this.mode==="hunter")this.playerGhost=this.activeGhosts[0],this.playerGhost.isPlayer=!0,l="\u0442\u044B";else{let d=t||this.agents[Math.random()*this.agents.length|0];o=d,l=d.name,this.agents=this.agents.filter(f=>f!==d),d.prop&&this.toggleProp(d),d.char&&(d.char.root.visible=!1),this.activeGhosts[0].reset(d.ctrl.pos.clone()),d.remote&&(this.activeGhosts[0].remote=d.remote,this.activeGhosts[0].remoteName=d.name),d.isPlayer&&(this.player=null,this.playerGhost=this.activeGhosts[0],this.playerGhost.isPlayer=!0)}this.activeGhosts.forEach((d,f)=>{f>0&&d.reset(n(Sr[f%Sr.length]))}),this.mode==="hunter"&&this.playerGhost.reset(i);let c=1;for(let[d,f]of r){for(;c<this.activeGhosts.length&&this.activeGhosts[c].remote;)c++;let g=this.activeGhosts[c++];g&&(g.remote=d,g.remoteName=f)}let h=Sd.slice();for(let d of this.agents)d.prop&&this.toggleProp(d),d.alive||(d.alive=!0,d.ctrl.spawn(n(h.pop()||[0,22]),Math.PI),d.char&&(d.char.root.visible=!0)),d.ctrl.stamina=1;this.setPhase("chase"),this.emit("phase",{phase:"chase",newGhostName:l,newGhostIsPlayer:!!this.playerGhost&&this.mode!=="hunter",agent:o}),this.agents.length||(this.phase="over",this.emit("end",{result:this.result()}))},Mc=function(t){let e=this.netIn.get(t);if(!e)return{};let n={...e};return e.jump=!1,e.dash=!1,n};var tn,Td,ao,Ad,Rd,oo,lo=class{constructor(){de(this,tn);this.ctx=null,this.muted=!1}unlock(){if(this.ctx){this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.55,this.master.connect(this.ctx.destination),Y(this,tn,Td).call(this))}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.55)}jump(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,n=t.createOscillator();n.type="triangle",n.frequency.setValueAtTime(320,e),n.frequency.exponentialRampToValueAtTime(640,e+.12);let i=t.createGain();i.gain.setValueAtTime(.12,e),i.gain.exponentialRampToValueAtTime(.001,e+.18),n.connect(i).connect(this.master),n.start(e),n.stop(e+.2)}land(t){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,i=Y(this,tn,ao).call(this,.12),r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=500;let a=e.createGain();a.gain.setValueAtTime(Math.min(.25,.05+t*.01),n),a.gain.exponentialRampToValueAtTime(.001,n+.12),i.connect(r).connect(a).connect(this.master),i.start(n)}step(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,n=Y(this,tn,ao).call(this,.05),i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=900+Math.random()*300;let r=t.createGain();r.gain.setValueAtTime(.03,e),r.gain.exponentialRampToValueAtTime(.001,e+.05),n.connect(i).connect(r).connect(this.master),n.start(e)}ghostAppear(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime,n=Y(this,tn,ao).call(this,2.4),i=t.createBiquadFilter();i.type="bandpass",i.Q.value=3,i.frequency.setValueAtTime(200,e),i.frequency.exponentialRampToValueAtTime(700,e+1.2),i.frequency.exponentialRampToValueAtTime(150,e+2.3);let r=t.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.35,e+.8),r.gain.linearRampToValueAtTime(0,e+2.4),n.connect(i).connect(r).connect(this.master),n.start(e);for(let[a,o]of[[880,0],[1318,.35],[1046,.7]]){let l=t.createOscillator();l.type="sine",l.frequency.value=a;let c=t.createGain();c.gain.setValueAtTime(0,e+o),c.gain.linearRampToValueAtTime(.08,e+o+.02),c.gain.exponentialRampToValueAtTime(.001,e+o+1.6),l.connect(c).connect(this.master),l.start(e+o),l.stop(e+o+1.7)}}setTension(t){if(!this.ctx)return;this.tension.gain.setTargetAtTime(t*.07,this.ctx.currentTime,.3),this.amb.gain.setTargetAtTime(.05*(1-t*.6),this.ctx.currentTime,.5);let e=this.ctx.currentTime;t>.25&&(!this.nextBeat||e>this.nextBeat)&&(Y(this,tn,Rd).call(this,t),this.nextBeat=e+1.1-t*.65)}chime(t){Y(this,tn,oo).call(this,t,.08,"sine")}win(){Y(this,tn,oo).call(this,[523,659,784,1046],.12,"triangle")}lose(){Y(this,tn,oo).call(this,[392,330,262,196],.18,"sine")}};tn=new WeakSet,Td=function(){let t=this.ctx;this.amb=t.createGain(),this.amb.gain.value=.05,this.amb.connect(this.master);for(let r of[110,164.8,220,277.2]){let a=t.createOscillator();a.type="sine",a.frequency.value=r;let o=t.createGain();o.gain.value=.25;let l=t.createOscillator();l.frequency.value=.07+Math.random()*.1;let c=t.createGain();c.gain.value=.2,l.connect(c).connect(o.gain),a.connect(o).connect(this.amb),a.start(),l.start()}let e=()=>{this.ctx&&(this.muted||Y(this,tn,Ad).call(this),setTimeout(e,350+Math.random()*1400))};e(),this.tension=t.createGain(),this.tension.gain.value=0,this.tension.connect(this.master);let n=t.createOscillator();n.type="sawtooth",n.frequency.value=55;let i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=220,n.connect(i).connect(this.tension),n.start()},ao=function(t){let e=this.ctx,n=e.createBuffer(1,Math.max(1,e.sampleRate*t),e.sampleRate),i=n.getChannelData(0);for(let a=0;a<i.length;a++)i[a]=Math.random()*2-1;let r=e.createBufferSource();return r.buffer=n,r},Ad=function(){let t=this.ctx,e=t.currentTime;for(let n=0;n<3;n++){let i=t.createOscillator();i.frequency.value=4200+Math.random()*400;let r=t.createGain();r.gain.setValueAtTime(0,e+n*.06),r.gain.linearRampToValueAtTime(.012,e+n*.06+.01),r.gain.linearRampToValueAtTime(0,e+n*.06+.04),i.connect(r).connect(this.master),i.start(e+n*.06),i.stop(e+n*.06+.05)}},Rd=function(t){let e=this.ctx,n=e.currentTime;for(let i of[0,.16]){let r=e.createOscillator();r.type="sine",r.frequency.setValueAtTime(70,n+i),r.frequency.exponentialRampToValueAtTime(40,n+i+.12);let a=e.createGain();a.gain.setValueAtTime(.28*t,n+i),a.gain.exponentialRampToValueAtTime(.001,n+i+.15),r.connect(a).connect(this.master),r.start(n+i),r.stop(n+i+.16)}},oo=function(t,e,n){if(!this.ctx)return;let i=this.ctx,r=i.currentTime;t.forEach((a,o)=>{let l=i.createOscillator();l.type=n,l.frequency.value=a;let c=i.createGain();c.gain.setValueAtTime(1e-4,r+o*e),c.gain.linearRampToValueAtTime(.14,r+o*e+.02),c.gain.exponentialRampToValueAtTime(.001,r+o*e+.5),l.connect(c).connect(this.master),l.start(r+o*e),l.stop(r+o*e+.55)})};var Vt=s=>document.getElementById(s),Cd={kid:"\u{1F431}",masha:"\u{1F9B6}",catbus:"\u{1F408}",moti:"\u{1F6E1}\uFE0F",noface:"\u{1F3AD}"},co=class{constructor(){this.lastStatus="",this.hintTimer=null}on(t,e){Vt(t).addEventListener("click",n=>{n.stopPropagation(),e()})}progress(t,e){document.querySelector(".load-bar i").style.width=Math.round(t*100)+"%",e&&(document.querySelector(".load-text").textContent=e,window.__bootStage=e)}hideLoading(){Vt("loading").classList.remove("show")}show(t,e){Vt(t).classList.toggle("show",e)}mode(t,e,n="play"){if(this.show("select",t==="select"),this.show("maps",t==="maps"),this.show("lobby",t==="lobby"),document.getElementById("watch-bar").classList.toggle("hidden",!(t==="play"&&n==="watch")),document.getElementById("abil-bar").classList.toggle("hidden",!(t==="play"&&n==="play")),document.querySelector(".hud-left .stamina").classList.toggle("hidden",n==="watch"),this.show("result",t==="result"),this.show("paused",!1),Vt("ghost-view").classList.add("hidden"),Vt("hud").classList.toggle("hidden",t!=="play"),Vt("touch").classList.toggle("hidden",!(t==="play"&&n!=="watch")),Vt("touch").classList.toggle("desktop",!e),document.querySelector(".stick-zone").classList.toggle("fixed",!e),Vt("alive").classList.toggle("hidden",t!=="play"),t==="play"){let i=Vt("hint");i.style.opacity=1,clearTimeout(this.hintTimer),this.hintTimer=setTimeout(()=>i.style.opacity=0,9e3)}}buildCards(t,e,n,i){let r=Vt("cards");r.innerHTML="",this.cards=new Map;for(let l of t){let c=document.createElement("button");c.className="card",c.style.backgroundImage=`url(${n[l.id]})`,c.innerHTML=`<div class="c-body"><div class="c-name">${l.name}</div><span class="pill ${l.rarityClass}">${l.rarity}</span><br><span class="c-tag">${Cd[l.id]||"\u2726"} ${l.tags[0]}</span></div>`,c.addEventListener("click",()=>i(l.id)),r.appendChild(c),this.cards.set(l.id,c)}let a=document.createElement("button");a.className="card",a.style.backgroundImage=`url(${n[e.id]})`,a.innerHTML=`<span class="c-lock">\u0412\u041E\u0414\u042F\u0429\u0418\u0419</span><div class="c-body"><div class="c-name">${e.name}</div><span class="pill ${e.rarityClass}">${e.rarity}</span><br><span class="c-tag">\u{1F3AD} ${e.tags[0]}</span></div>`,a.addEventListener("click",()=>i(e.id)),r.appendChild(a),this.cards.set(e.id,a);let o=document.createElement("div");o.className="card soon",o.innerHTML='<div class="q">?</div><div class="c-body" style="text-align:center"><div class="c-name">???</div><span class="pill common">\u0421\u041A\u041E\u0420\u041E</span></div>',r.appendChild(o)}onOptions(t,e){this.optCb=t;let n=(i,r,a)=>{let o=Vt(i),l=c=>o.querySelectorAll("button").forEach(h=>h.classList.toggle("on",h.dataset.v===String(c)));l(r),o.querySelectorAll("button").forEach(c=>c.addEventListener("click",()=>{l(c.dataset.v),a(c.dataset.v)}))};n("opt-ghosts",e.ghosts,i=>t.ghosts(+i)),n("opt-bots",e.bots?1:0,i=>t.bots(i==="1"))}onAbility(t){this.abilityFn=t}abilityBar(t){let e=Vt("abil-bar");e.innerHTML=t.map(n=>`<button class="ab" data-id="${n.id}" title="${n.name}"><i>${n.icon}</i><em>${n.key}</em><s></s><b class="ab-n"></b><small>${n.name}</small></button>`).join(""),e.querySelectorAll(".ab").forEach(n=>{n.addEventListener("mousedown",i=>i.stopPropagation()),n.addEventListener("click",i=>{var r;i.stopPropagation(),(r=this.abilityFn)==null||r.call(this,n.dataset.id)})}),this.abEls=[...e.querySelectorAll(".ab")]}cooldowns(t){if(this.abEls)for(let e of this.abEls){let{k:n=0,n:i=""}=t(e.dataset.id)||{};e.querySelector("s").style.height=(n*100).toFixed(0)+"%",e.classList.toggle("ready",n<=0);let r=e.querySelector(".ab-n");r.textContent!==String(i)&&(r.textContent=i)}}alive(t,e,n="\u0413\u0435\u0440\u043E\u0435\u0432"){Vt("alive").textContent=`${n}: ${t}/${e}`}wallet(t){Vt("wallet").textContent=t}pumpkins(t){Vt("pumpkins").textContent=t}phase(t){let e=Vt("phase");e.textContent=t==="chase"?"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438!":"\u041F\u0440\u044F\u0442\u043A\u0438",e.classList.toggle("chase",t==="chase")}mmLabel(t){let e=Vt("mm-label");e.innerHTML=t,e.style.opacity=t?1:0}buildMaps(t,e){let n=Vt("map-cards");n.innerHTML=t.map(i=>`<button class="map-card ${i.ready?"":"soon"}" data-id="${i.id}"><div class="m-title">${i.icon} ${i.name}</div><div class="m-pic" style="background-image:url(${i.pic})"></div><span class="m-diff ${i.hard?"hard":""}">${i.hard?"\u0421\u043B\u043E\u0436\u043D\u044B\u0439":"\u041E\u0431\u044B\u0447\u043D\u044B\u0439"}</span></button>`).join(""),n.querySelectorAll(".map-card").forEach(i=>i.addEventListener("click",()=>e(i.dataset.id)))}pickMap(t){document.querySelectorAll(".map-card").forEach(e=>e.classList.toggle("active",e.dataset.id===t))}minimapInit(t,e){let n=Vt("minimap"),i=n.getContext("2d");this.mm={c:n,x:i,half:e,bg:document.createElement("canvas")};let r=this.mm.bg;r.width=r.height=300;let a=r.getContext("2d"),o=300/(e*2),l=c=>(c+e)*o;a.fillStyle="#6b5436",a.fillRect(0,0,300,300),a.fillStyle="#8a6d45",a.fillRect(l(-1.7),0,3.4*o,300),a.fillRect(0,l(-1.6),300,3.2*o),a.fillStyle="#3f6a3a";for(let c of t.bushes)a.beginPath(),a.arc(l(c.x),l(c.z),c.r*o,0,7),a.fill();a.fillStyle="#2b1a10";for(let c of t.boxes)c.top>1.2&&c.bottom<1&&a.fillRect(l(c.minX),l(c.minZ),(c.maxX-c.minX)*o,(c.maxZ-c.minZ)*o);a.fillStyle="#243a22";for(let c of t.circles)c.top>3&&(a.beginPath(),a.arc(l(c.x),l(c.z),Math.max(1.5,c.r*o),0,7),a.fill())}minimap(t,e,n){if(!this.mm)return;let{c:i,x:r,half:a,bg:o}=this.mm,l=300/(a*2),c=2.3;r.save(),r.clearRect(0,0,300,300),r.beginPath(),r.arc(150,150,150,0,7),r.clip(),r.translate(150,150),r.rotate(e),r.scale(c,c),r.translate(-(t.x+a)*l,-(t.z+a)*l),r.drawImage(o,0,0);for(let h of n){let u=(h.x+a)*l,d=(h.z+a)*l;if(h.kind==="pumpkin"){r.fillStyle="#ffa23a",r.beginPath(),r.arc(u,d,2.2,0,7),r.fill();continue}r.fillStyle=h.kind==="me"?"#ff8a3a":h.kind==="ghost"?"#b07aff":"#ffffff",r.strokeStyle="#2a170b",r.lineWidth=1,r.beginPath(),r.arc(u,d,h.kind==="me"?4.5:3.2,0,7),r.fill(),r.stroke()}r.restore()}toast(t){let e=Vt("toast");e.textContent=t,e.classList.remove("on"),e.offsetWidth,e.classList.add("on")}buildCreator(t,e,n){let i=Vt("creator"),r=(a,o,l,c)=>`<div class="cr-row"><span>${o}</span><div class="cr-opts" data-k="${a}">${l.map(([h,u])=>c?`<button data-v="${h}" class="sw ${t[a]===h?"on":""}" style="--c:${h}"></button>`:`<button data-v="${h}" class="${t[a]===h?"on":""}">${u}</button>`).join("")}</div></div>`;i.innerHTML=r("gender","\u041A\u0442\u043E",e.gender)+r("hairStyle","\u041F\u0440\u0438\u0447\u0451\u0441\u043A\u0430",e.hairStyle[t.gender])+r("hair","\u0412\u043E\u043B\u043E\u0441\u044B",e.hair.map(a=>[a,a]),!0)+r("sweater","\u0421\u0432\u0438\u0442\u0435\u0440",e.sweater.map(a=>[a,a]),!0)+r("emblem","\u0417\u043D\u0430\u0447\u043E\u043A",e.emblem)+r("ears","\u0423\u0448\u043A\u0438 \u043A\u043E\u0442\u0438\u043A\u0430",e.ears)+r("tail","\u0425\u0432\u043E\u0441\u0442\u0438\u043A",e.tail),i.querySelectorAll(".cr-opts button").forEach(a=>a.addEventListener("click",()=>n(a.parentElement.dataset.k,a.dataset.v)))}showHero(t,e){var r;Vt("creator").classList.toggle("hidden",!t.custom),document.querySelector(".sel-info").classList.toggle("custom",!!t.custom);let n=Vt("skins");n.classList.toggle("hidden",!t.skins),t.skins&&(n.innerHTML=Object.entries(t.skins).map(([a,o])=>`<button data-s="${a}" class="${a===e?"on":""}" style="--c:#${o.hat.toString(16).padStart(6,"0")}">${o.name}</button>`).join(""),n.querySelectorAll("button").forEach(a=>a.addEventListener("click",()=>{var o;return(o=this.optCb)==null?void 0:o.skin(a.dataset.s)}))),Vt("hero-name").innerHTML=`${t.name} <span class="paw">\u{1F43E}</span>`;let i=Vt("hero-rarity");i.textContent=t.rarity,i.className="pill "+t.rarityClass,Vt("hero-about").textContent=t.about,Vt("hero-ab").textContent=t.ability,Vt("hero-ab-text").textContent=t.abilityText,Vt("hero-ab-icon").textContent=Cd[t.id]||"\u2726",Vt("hero-tags").innerHTML=t.tags.map(a=>`<span class="tag">${a}</span>`).join(""),(r=this.cards)==null||r.forEach((a,o)=>a.classList.toggle("active",o===t.id))}status(t,e){let n=t+e;if(n===this.lastStatus)return;this.lastStatus=n;let i=Vt("status");i.textContent=t,i.className="status "+(e||"")}hud({left:t,stamina:e,tired:n,hidden:i}){let r=Math.ceil(t),a=`${String(Math.floor(r/60)).padStart(2,"0")}:${String(r%60).padStart(2,"0")}`,o=Vt("timer");o.textContent!==a&&(o.textContent=a,o.parentElement.classList.toggle("warn",r<=10));let l=Vt("stamina");l.style.width=(e*100).toFixed(1)+"%",l.classList.toggle("tired",!!n),Vt("hidden-badge").classList.toggle("on",!!i)}vignette(t){Vt("vignette").style.opacity=t.toFixed(2)}setShield(t){let e=Vt("shield");e.classList.toggle("hidden",t===null),e.classList.toggle("used",t===0)}setMute(t){Vt("btn-mute").textContent=t?"\u{1F507}":"\u{1F50A}"}result(t){let e=Vt("res-earn");e.textContent=t.earn?`+${t.earn} \u{1F383} \u0442\u044B\u043A\u043E\u0432\u043E\u043A`:"";let n=r=>r.join(", ");if(t.mode==="watch"){Vt("res-emoji").textContent=t.alive.length?"\u{1F3EE}":"\u{1F47A}",Vt("res-title").textContent=t.alive.length?"\u0420\u0430\u0441\u0441\u0432\u0435\u0442!":"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u043F\u043E\u0439\u043C\u0430\u043B\u0438 \u0432\u0441\u0435\u0445",Vt("res-text").textContent=`\u041F\u043E\u0441\u043B\u0435 \u043F\u0440\u044F\u0442\u043E\u043A \u043E\u0441\u0442\u0430\u043B\u0438\u0441\u044C: ${n(t.hideSurvivors)||"\u043D\u0438\u043A\u0442\u043E"}. \u041F\u043E\u0441\u043B\u0435 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043E\u043A: ${n(t.alive)||"\u043D\u0438\u043A\u0442\u043E"}.`;return}if(t.mode==="hunter"||t.playerWasGhost){let r=t.found+t.chaseCatches;Vt("res-emoji").textContent=r?"\u{1F3AD}":"\u{1F319}",Vt("res-title").textContent=t.mode==="hunter"?t.alive.length?"\u041A\u0442\u043E-\u0442\u043E \u0443\u0441\u043A\u043E\u043B\u044C\u0437\u043D\u0443\u043B!":"\u0422\u044B \u043D\u0430\u0448\u0451\u043B \u0432\u0441\u0435\u0445!":t.alive.length?"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438 \u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C":"\u0422\u044B \u0434\u043E\u0433\u043D\u0430\u043B \u0432\u0441\u0435\u0445!",Vt("res-text").textContent=t.mode==="hunter"?`\u0412 \u043F\u0440\u044F\u0442\u043A\u0430\u0445 \u043D\u0430\u0448\u0451\u043B: ${t.found}. \u0412 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0430\u0445 \u043F\u043E\u0439\u043C\u0430\u043B: ${t.chaseCatches}.${t.alive.length?` \u0421\u043F\u0430\u0441\u043B\u0438\u0441\u044C: ${n(t.alive)}.`:""}`:`\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438 \u043F\u0435\u0440\u0432\u044B\u043C \u2014 \u0438 \u0442\u044B \u0441\u0442\u0430\u043B \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u043C! \u0412 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0430\u0445 \u043F\u043E\u0439\u043C\u0430\u043D\u043E: ${t.chaseCatches}.`;return}let i=!t.playerCaughtInChase;Vt("res-emoji").textContent=i?"\u{1F3EE}":"\u{1F47A}",Vt("res-title").textContent=i?"\u0422\u044B \u043F\u0440\u043E\u0434\u0435\u0440\u0436\u0430\u043B\u0441\u044F!":"\u0422\u0435\u0431\u044F \u0434\u043E\u0433\u043D\u0430\u043B\u0438",Vt("res-text").textContent=(t.playerFoundAt===null?"\u0412 \u043F\u0440\u044F\u0442\u043A\u0430\u0445 \u0442\u0435\u0431\u044F \u0442\u0430\u043A \u0438 \u043D\u0435 \u043D\u0430\u0448\u043B\u0438! ":"\u0412 \u043F\u0440\u044F\u0442\u043A\u0430\u0445 \u0442\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438. ")+(i?"\u0418 \u0432 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0430\u0445 \u0442\u044B \u0443\u0431\u0435\u0436\u0430\u043B \u043E\u0442 \u0432\u0441\u0435\u0445 \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u0432.":"\u041F\u0440\u044F\u0447\u044C\u0441\u044F \u0432 \u0434\u043E\u043C\u0430\u0445, \u0437\u0430 \u0448\u0438\u0440\u043C\u0430\u043C\u0438 \u0438 \u043D\u0430 \u043A\u0440\u044B\u0448\u0430\u0445, \u043F\u0440\u0438\u0441\u0435\u0434\u0430\u0439 \u0437\u0430 \u044F\u0449\u0438\u043A\u0430\u043C\u0438.")}};var Id="masha-game-physics-v2",Dd=[["walk","\u0428\u0430\u0433, \u043C/\u0441",2,10,.1],["run","\u0411\u0435\u0433, \u043C/\u0441",4,16,.1],["accel","\u0420\u0430\u0437\u0433\u043E\u043D",5,120,1],["decel","\u0422\u043E\u0440\u043C\u043E\u0436\u0435\u043D\u0438\u0435",5,120,1],["air","\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u0432\u043E\u0437\u0434\u0443\u0445\u0435",0,40,1],["jump","\u041F\u0440\u044B\u0436\u043E\u043A, \u043C",.5,4,.05],["gravity","\u0422\u044F\u0436\u0435\u0441\u0442\u044C \xD7",.4,2.5,.05],["turn","\u041F\u043E\u0432\u043E\u0440\u043E\u0442",2,30,.5],["stamina","\u0411\u0435\u0433 \u0431\u0435\u0437 \u043E\u0442\u0434\u044B\u0445\u0430, \u0441",1,15,.5],["regen","\u041E\u0442\u0434\u044B\u0445 (\u0434\u043E\u043B\u044F/\u0441)",.05,.6,.01],["mass","\u0412\u0435\u0441 \u043F\u0440\u0438 \u0442\u043E\u043B\u043A\u0430\u043D\u0438\u0438",.3,6,.1],["reach","\u0414\u043E\u0442\u044F\u0433\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0434\u043E \u0443\u0441\u0442\u0443\u043F\u0430, \u043C",0,2.5,.05],["climb","\u041B\u0435\u0437\u0435\u0442 \u043F\u043E \u043B\u0435\u0441\u0442\u043D\u0438\u0446\u0435, \u043C/\u0441",0,6,.1],["dash.mul","\u0420\u044B\u0432\u043E\u043A: \u0441\u0438\u043B\u0430 \xD7",1,2.5,.05],["dash.time","\u0420\u044B\u0432\u043E\u043A: \u0434\u043B\u0438\u0442\u0441\u044F, \u0441",.1,1.5,.05],["dash.cooldown","\u0420\u044B\u0432\u043E\u043A: \u043F\u0435\u0440\u0435\u0437\u0430\u0440\u044F\u0434\u043A\u0430, \u0441",.5,12,.5]],n_=[...Dd.filter(([s])=>!["jump","reach","climb","dash.cooldown"].includes(s)),["dash.charges","\u0420\u044B\u0432\u043A\u043E\u0432 \u0432 \u0437\u0430\u043F\u0430\u0441\u0435",1,6,1],["dash.recharge","\u041D\u043E\u0432\u044B\u0439 \u0440\u044B\u0432\u043E\u043A \u043A\u043E\u043F\u0438\u0442\u0441\u044F, \u0441",2,30,1],["fly.speed","\u041F\u0430\u0440\u0438\u0442 \u0432\u0432\u0435\u0440\u0445, \u043C/\u0441",.5,6,.1],["fly.time","\u041F\u0430\u0440\u0438\u0442 \u0431\u0435\u0437 \u043E\u0442\u0434\u044B\u0445\u0430, \u0441",.5,6,.1]],i_=[["sightRange","\u0412\u0438\u0434\u0438\u0442 \u043D\u0430, \u043C",5,40,1],["hearRunRange","\u0421\u043B\u044B\u0448\u0438\u0442 \u0431\u0435\u0433 \u043D\u0430, \u043C",0,20,.5],["loseSightTime","\u0422\u0435\u0440\u044F\u0435\u0442 \u0438\u0437 \u0432\u0438\u0434\u0443 \u0437\u0430, \u0441",.5,6,.1],["catchRadius","\u0420\u0430\u0434\u0438\u0443\u0441 \u043F\u043E\u0438\u043C\u043A\u0438, \u043C",.5,2.5,.05],["burstRange","\u0420\u044B\u0432\u043E\u043A \u0441 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u044F (\u0431\u043E\u0442), \u043C",2,15,.5],["lateBoost","\u0411\u044B\u0441\u0442\u0440\u0435\u0435 \u043A \u043A\u043E\u043D\u0446\u0443 \u0440\u0430\u0443\u043D\u0434\u0430 (\u0434\u043E\u043B\u044F)",0,.4,.01],["spawnGap","\u0412\u044B\u0445\u043E\u0434\u044F\u0442 \u0441 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u043E\u043C, \u0441",0,15,1],["disguise.time","\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u0434\u043B\u0438\u0442\u0441\u044F, \u0441",2,20,.5],["disguise.cd","\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u0435\u0440\u0435\u0437\u0430\u0440\u044F\u0434\u043A\u0430, \u0441",4,40,1]],s_=[["gravity","\u0413\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u044F",10,60,1],["stepHeight","\u0421\u0442\u0443\u043F\u0435\u043D\u044C\u043A\u0430 \u0431\u0435\u0437 \u043F\u0440\u044B\u0436\u043A\u0430, \u043C",.1,1,.05],["pushStrength","\u0422\u043E\u043B\u043A\u0430\u043D\u0438\u0435 \u0433\u0435\u0440\u043E\u0435\u0432",0,1.5,.05]],bc=(s,t)=>t.split(".").reduce((e,n)=>e[n],s),r_=(s,t,e)=>{let n=t.split("."),i=n.pop();n.reduce((r,a)=>r[a],s)[i]=e};function Ud(){var s;try{let t=JSON.parse(localStorage.getItem(Id)||"null");if(!t)return;for(let e of Object.keys(At.heroes))(s=t.heroes)!=null&&s[e]&&$i(At.heroes[e],t.heroes[e]);t.ghost&&$i(At.ghost,t.ghost),t.world&&$i(At.world,t.world)}catch{}}function $i(s,t){for(let e of Object.keys(t))typeof t[e]=="object"&&t[e]&&typeof s[e]=="object"?$i(s[e],t[e]):typeof t[e]==typeof s[e]&&(s[e]=t[e])}function Pd(){try{localStorage.setItem(Id,JSON.stringify({heroes:At.heroes,ghost:At.ghost,world:At.world}))}catch{}}var dn,ho,Nd,Od,Sc,uo=class{constructor(t,e){de(this,dn);this.heroes=t,this.getCurrentHero=e,this.el=document.getElementById("tuner"),this.tab=null,this.el.querySelector(".tn-close").addEventListener("click",()=>this.toggle(!1)),this.el.querySelector(".tn-copy").addEventListener("click",()=>Y(this,dn,Nd).call(this)),this.el.querySelector(".tn-reset").addEventListener("click",()=>Y(this,dn,Od).call(this));for(let n of["keydown","mousedown","touchstart","pointerdown","wheel"])this.el.addEventListener(n,i=>i.stopPropagation());addEventListener("keydown",n=>{(n.code==="F2"||n.code==="Backquote")&&(n.preventDefault(),this.toggle())})}get open(){return this.el.classList.contains("show")}toggle(t=!this.open){this.el.classList.toggle("show",t),t&&Y(this,dn,ho).call(this,this.tab||this.getCurrentHero()),t&&document.pointerLockElement&&document.exitPointerLock()}};dn=new WeakSet,ho=function(t){this.tab=t;let e=this.el.querySelector(".tn-tabs"),n=[...this.heroes.map(l=>[l.id,l.name]),["noface","\u0411\u0435\u0437\u043B\u0438\u043A"],["ghost","\u0427\u0443\u0442\u044C\u0451 \u0411\u0435\u0437\u043B\u0438\u043A\u0430"],["world","\u041C\u0438\u0440"]];e.innerHTML=n.map(([l,c])=>`<button data-t="${l}" class="${l===t?"on":""}">${c}</button>`).join(""),e.querySelectorAll("button").forEach(l=>l.addEventListener("click",()=>Y(this,dn,ho).call(this,l.dataset.t)));let[i,r,a]=t==="ghost"?[At.ghost,i_,Wi.ghost]:t==="world"?[At.world,s_,Wi.world]:[At.heroes[t],t==="noface"?n_:Dd,Wi.heroes[t]],o=this.el.querySelector(".tn-fields");o.innerHTML=r.map(([l,c,h,u,d])=>{let f=bc(i,l),g=bc(a,l);return`<label class="${f!==g?"changed":""}"><span>${c}</span><input type="range" min="${h}" max="${u}" step="${d}" value="${f}" data-k="${l}"><b>${Ld(f)}</b></label>`}).join(""),o.querySelectorAll("input").forEach(l=>l.addEventListener("input",()=>{let c=parseFloat(l.value);r_(i,l.dataset.k,c),l.nextElementSibling.textContent=Ld(c),l.parentElement.classList.toggle("changed",c!==bc(a,l.dataset.k)),Pd()}))},Nd=function(){var i;let t=this.tab,e=t==="ghost"?At.ghost:t==="world"?At.world:At.heroes[t],n=`${t}: ${JSON.stringify(e).replace(/"(\w+)":/g,"$1: ").replace(/,/g,", ")},`;(i=navigator.clipboard)==null||i.writeText(n).then(()=>Y(this,dn,Sc).call(this,"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u2014 \u0432\u0441\u0442\u0430\u0432\u044C \u0432 config.js"),()=>prompt("\u0421\u043A\u043E\u043F\u0438\u0440\u0443\u0439:",n))},Od=function(){let t=this.tab;t==="ghost"?$i(At.ghost,Wi.ghost):t==="world"?$i(At.world,Wi.world):$i(At.heroes[t],Wi.heroes[t]),Pd(),Y(this,dn,ho).call(this,t),Y(this,dn,Sc).call(this,"\u0412\u0435\u0440\u043D\u0443\u043B \u043A\u0430\u043A \u0431\u044B\u043B\u043E")},Sc=function(t){let e=this.el.querySelector(".tn-flash");e.textContent=t,e.classList.add("on"),setTimeout(()=>e.classList.remove("on"),1600)};var Ld=s=>Math.abs(s)>=10?s.toFixed(0):s.toFixed(2).replace(/0$/,"");function Fd(s){var d;let n=new zi({antialias:!0,preserveDrawingBuffer:!0});n.setSize(240,320,!1),n.setPixelRatio(1),n.toneMapping=_r,n.toneMappingExposure=1.2;let i=new Ts,r=document.createElement("canvas");r.width=8,r.height=256;let a=r.getContext("2d"),o=a.createLinearGradient(0,0,0,256);o.addColorStop(0,"#1a1a4a"),o.addColorStop(.6,"#3a2e6a"),o.addColorStop(1,"#2a1b2e"),a.fillStyle=o,a.fillRect(0,0,8,256),i.background=new Fn(r),i.background.colorSpace=Me,i.add(new Ps(10134783,2758704,1.3));let l=new Ls(16769720,2.2);l.position.set(2,4,5),i.add(l);let c=new xi(16752720,20,12);c.position.set(-2.5,2.5,-1.5),i.add(c);let h=new Ue(32,240/320,.1,50),u={};for(let f of s){let g=f.build();g.update(.016,{t:1,speed:0,grounded:!0,landed:!1,mode:"search",appear:1}),g.root.rotation.y=f.id==="catbus"?.75:.35,i.add(g.root);let _=f.height,m=_*2.5+(f.id==="catbus"?1.6:.5);h.position.set(0,_*.6,m),h.lookAt(0,_*.4,0),n.render(i,h),u[f.id]=n.domElement.toDataURL("image/jpeg",.85),i.remove(g.root)}return n.dispose(),(d=n.forceContextLoss)==null||d.call(n),u}var Bs,fo,Er=class{constructor(){de(this,Bs);this.ws=null,this.id=null,this.host=null,this.players=[],this.handlers=new Map,this.code=null,this.heartbeat=null}get isHost(){return!!this.id&&this.id===this.host}get connected(){var t;return((t=this.ws)==null?void 0:t.readyState)===1}on(t,e){(this.handlers.get(t)||this.handlers.set(t,[]).get(t)).push(e)}static newCode(){let t="ABCDEFGHJKLMNPRSTUVWXYZ23456789";return Array.from({length:4},()=>t[Math.random()*t.length|0]).join("")}connect(t,e){return this.code=t.toUpperCase(),this.hello=e,new Promise(n=>{let i=!1,r=l=>{i||(i=!0,n(l))},a;try{a=new WebSocket(`${location.protocol==="https:"?"wss":"ws"}://${location.host}/room/${this.code}`)}catch{return r(!1)}this.ws=a;let o=setTimeout(()=>{r(!1);try{a.close()}catch{}},6e3);a.onmessage=l=>{let c;try{c=JSON.parse(l.data)}catch{return}c.t==="welcome"&&(this.id=c.id,clearTimeout(o),this.send({t:"hello",...this.hello}),clearInterval(this.heartbeat),this.heartbeat=setInterval(()=>this.send({t:"ping"}),25e3),r(!0)),c.t==="lobby"&&(this.players=c.players,this.host=c.host),Y(this,Bs,fo).call(this,c.t,c),Y(this,Bs,fo).call(this,"*",c)},a.onclose=()=>{clearTimeout(o),clearInterval(this.heartbeat),this.heartbeat=null,r(!1),this.ws===a&&(this.ws=null,Y(this,Bs,fo).call(this,"close",{}))},a.onerror=()=>{}})}send(t){this.connected&&this.ws.send(JSON.stringify(t))}update(t){this.hello={...this.hello,...t},this.send({t:"hello",...this.hello})}leave(){let t=this.ws;clearInterval(this.heartbeat),this.heartbeat=null,this.ws=null,this.id=null,this.host=null,this.players=[],this.code=null;try{t==null||t.close()}catch{}}name(t){var e;return((e=this.players.find(n=>n.id===t))==null?void 0:e.name)||"\u0418\u0433\u0440\u043E\u043A"}};Bs=new WeakSet,fo=function(t,e){for(let n of this.handlers.get(t)||[])n(e)};var He=s=>Math.round(s*100)/100,zd=yi.map(s=>s.id);function Ec(s){return s.agents.map(t=>({k:t.key,hero:t.hero.id,skin:t.skin,name:t.name,pid:t.isPlayer?"host":t.remote||null}))}function Bd(s){let t=s.agents.map(n=>{let i=n.ctrl,r=n.action;return[n.key,He(i.pos.x),He(i.pos.y),He(i.pos.z),He(i.yaw),He(i.speed),i.grounded?1:0,He(i.vel.y),i.running||i.dashT>0?1:0,i.crouching?1:0,n.alive?1:0,n.prop?zd.indexOf(n.prop.kind.id)+1:0,r?r.name:0,r?He(r.t/r.dur):0,n.hidden?1:0,He(i.stamina),i.exhausted?1:0,He(i.dashCd/i.phys.dash.cooldown)]}),e=s.activeGhosts.map((n,i)=>{let r=n.disguise;return[i,He(n.pos.x),He(n.pos.y),He(n.pos.z),He(n.yaw),n.state==="hidden"?0:n.state==="appear"?1:2,He(n.appear),n.state==="hunt"?1:0,He(n.ctrl.speed),n.stunT>0?1:0,r!=null&&r.hero?r.hero.id:0,r!=null&&r.prop?r.prop.id:0,n.isPlayer?"host":n.remote||0,He(n.ctrl.stamina),n.ctrl.dashCharges,He(n.ctrl.flyEnergy),He(n.disguiseCd)]});return{t:"s",ph:s.phase,left:He(s.left),sp:s.spawned,a:t,g:e}}var po=class{constructor(t){this.env=t,this.agents=new Map,this.snap=null,this.ghostDz=new Map}setRoster(t){let e=new Set(t.map(n=>n.k));for(let[n,i]of this.agents)e.has(n)||(this.env.scene.remove(i.char.root),i.propObj&&this.env.scene.remove(i.propObj),this.agents.delete(n));for(let n of t){if(this.agents.has(n.k))continue;let i=this.env.heroes.find(a=>a.id===n.hero)||this.env.heroes[0],r=this.env.acquire(i,n.skin);this.agents.set(n.k,{def:i,char:r,name:n.name,pid:n.pid,pos:null,yaw:0,s:null,propObj:null,propKind:0})}}apply(t){this.snap=t;for(let e of t.a){let n=this.agents.get(e[0]);n&&(n.s=e)}}me(t){var n;for(let i of this.agents.values())if(i.pid===t&&i.s&&i.s[10])return{kind:"agent",v:i,pos:i.pos||new I(i.s[1],i.s[2],i.s[3])};let e=(n=this.snap)==null?void 0:n.g.find(i=>i[12]===t);return e?{kind:"ghost",g:e,pos:this.env.ghosts[e[0]].root.position}:null}render(t,e){var r;let n=1-Math.exp(-t*14);for(let a of this.agents.values()){let o=a.s;if(!o){a.char.root.visible=!1;continue}let l=new I(o[1],o[2],o[3]);!a.pos||a.pos.distanceTo(l)>6?a.pos=l.clone():a.pos.lerp(l,n),a.yaw+=Math.atan2(Math.sin(o[4]-a.yaw),Math.cos(o[4]-a.yaw))*n;let c=!!o[10],h=o[11];h!==a.propKind&&(a.propObj&&(this.env.scene.remove(a.propObj),a.propObj=null),h&&(a.propObj=Xi(zd[h-1]),a.propObj.rotation.y=Math.random()*6,this.env.scene.add(a.propObj)),a.propKind=h),a.propObj&&(a.propObj.position.copy(a.pos),a.propObj.visible=c);let u=a.char.root;u.visible=c&&!h,u.position.copy(a.pos),u.rotation.y=a.yaw,u.scale.y+=((o[9]?.62:1)-u.scale.y)*Math.min(1,t*14),a.char.update(t,{t:e,speed:o[5],grounded:!!o[6],vy:o[7],running:!!o[8],landed:!1,landSpeed:0,crouch:!!o[9],action:o[12]?{name:o[12],k:o[13]}:null})}let i=((r=this.snap)==null?void 0:r.g)||[];this.env.ghosts.forEach((a,o)=>{let l=i.find(d=>d[0]===o),c=l&&l[5]!==0,h=l&&(l[10]?"hero:"+l[10]:l[11]?"prop:"+l[11]:null);for(let[d,f]of this.ghostDz)d.endsWith("#"+o)&&d!==h+"#"+o&&(f.root.visible=!1);if(a.root.visible=!!c&&!h,!l)return;let u=new I(l[1],l[2],l[3]);if(a.root.position.distanceTo(u)>6?a.root.position.copy(u):a.root.position.lerp(u,n),a.root.rotation.y+=Math.atan2(Math.sin(l[4]-a.root.rotation.y),Math.cos(l[4]-a.root.rotation.y))*n,c&&!h&&a.char.update(t,{t:e,speed:l[8],mode:l[7]?"hunt":"search",appear:l[5]===1?l[6]:1,stunned:!!l[9]}),c&&h){let d=h+"#"+o,f=this.ghostDz.get(d);f||(l[10]?f=this.env.heroes.find(_=>_.id===l[10]).build("classic"):f={root:Xi(l[11]),update(){}},this.env.scene.add(f.root),this.ghostDz.set(d,f)),f.root.visible=!0,f.root.position.copy(a.root.position),l[10]&&(f.root.rotation.y=a.root.rotation.y),f.update(t,{t:e,speed:l[8],grounded:!0,vy:0,running:l[8]>6,landed:!1})}})}clear(){for(let t of this.agents.values())this.env.scene.remove(t.char.root),t.propObj&&this.env.scene.remove(t.propObj);this.agents.clear();for(let t of this.ghostDz.values())this.env.scene.remove(t.root);this.ghostDz.clear(),this.env.ghosts.forEach(t=>{t.root.visible=!1}),this.snap=null}};var zn=s=>document.getElementById(s),kd="masha-game-name",a_={kid:"\u{1F431}",masha:"\u{1F9B6}",catbus:"\u{1F408}",moti:"\u{1F6E1}\uFE0F",noface:"\u{1F3AD}"},Hd=s=>Qe.find(t=>t.id===s)||(s===Be.id?Be:Qe[0]),Pe,Gd,Vd,Wd,Xd,qd,wr,Yd,$d,mo=class{constructor(t){de(this,Pe);this.g=t,this.net=new Er,this.sendT=0,this.inT=0,this.latch={jump:!1,dash:!1},this.guest=null,Y(this,Pe,Gd).call(this)}get inRoom(){return!!this.net.code&&this.net.connected}get isHost(){return this.inRoom&&this.net.isHost}get isGuestPlaying(){return!!this.guest}get myName(){try{return localStorage.getItem(kd)||""}catch{return""}}hello(){let t=this.g.hero;return{name:this.myName||"\u0418\u0433\u0440\u043E\u043A",hero:t.id,skin:t.custom?JSON.stringify(this.g.look):this.g.skin}}get url(){return`${location.origin}${location.pathname}?room=${this.net.code}`}async createRoom(){return this.join(Er.newCode())}async join(t){let e=this.g.ui;if(e.toast("\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u0441\u044F \u043A \u043A\u043E\u043C\u043D\u0430\u0442\u0435\u2026"),!await this.net.connect(t,this.hello()))return e.toast("\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F. \u0421\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u0430\u044F \u0438\u0433\u0440\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0430 \u0430\u0434\u0440\u0435\u0441\u0435 \u0438\u0433\u0440\u044B \u0432 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0435."),!1;try{history.replaceState(null,"",`?room=${this.net.code}`)}catch{}return this.showLobby(),!0}leave(){this.isHost&&this.g.state==="play"&&this.net.send({t:"lobbyBack"}),this.net.leave(),Y(this,Pe,wr).call(this);try{history.replaceState(null,"",location.pathname)}catch{}this.g.toSelect()}showLobby(){let t=this.g;this.isHost&&["play","result"].includes(t.state)&&this.net.send({t:"lobbyBack"}),t.state="lobby",t.input.enabled=!1,t.input.releasePointer(),t.ui.mode("lobby",!0),this.net.update(this.hello()),zn("lb-code").textContent=this.net.code,zn("lb-url").value=this.url,Y(this,Pe,Vd).call(this),this.renderLobby()}renderLobby(){var l;let t=this.net,e=t.host;zn("lb-count").textContent=`${t.players.length}/8`,zn("lb-players").innerHTML=t.players.map(c=>`<div class="lb-p ${c.id===t.id?"me":""}"><span class="ic">${a_[c.hero]||"\u{1F43E}"}</span><span class="nm">${o_(c.name)}${c.id===e?" \u{1F451}":""}</span><span class="hr">${Hd(c.hero).name}</span></div>`).join("");let n={};for(let c of t.players)n[c.vote]=(n[c.vote]||0)+1;let i=this.g.maps,r=zn("lb-maps");r.innerHTML=i.map(c=>`<button class="map-card ${c.ready?"":"soon"}" data-id="${c.id}"><div class="m-title">${c.icon} ${c.name}</div><div class="m-pic" style="background-image:url(${c.pic})"></div><span class="m-diff ${c.hard?"hard":""}">${c.hard?"\u0421\u043B\u043E\u0436\u043D\u044B\u0439":"\u041E\u0431\u044B\u0447\u043D\u044B\u0439"}</span><div class="m-votes">${"\u{1F43E}".repeat(n[c.id]||0)}</div></button>`).join("");let a=(l=t.players.find(c=>c.id===t.id))==null?void 0:l.vote;r.querySelectorAll(".map-card").forEach(c=>{c.classList.toggle("active",c.dataset.id===a),c.addEventListener("click",()=>{let h=i.find(u=>u.id===c.dataset.id);if(!h.ready){this.g.ui.toast(`\xAB${h.name}\xBB \u0441\u043A\u043E\u0440\u043E \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F!`);return}t.send({t:"vote",map:h.id})})});let o=t.isHost;zn("lb-start").classList.toggle("hidden",!o),zn("lb-wait").classList.toggle("hidden",o)}remotes(){return this.isHost?this.net.players.filter(t=>t.id!==this.net.id).map(t=>({id:t.id,name:t.name,hero:Hd(t.hero),skin:t.skin})):[]}hostStart(){if(!this.isHost)return;let t=this.g;t.beginRound(t.hero.id===Be.id?"hunter":"play")}hostStarted(){if(!this.isHost)return;let t=this.g.round;t.player&&(t.player.name=this.myName||t.player.name),this.net.send({t:"start",roster:Ec(t),mode:t.mode}),this.sendT=0}hostTick(t){this.isHost&&(this.sendT-=t,!(this.sendT>0)&&(this.sendT=1/15,this.net.send(Bd(this.g.round))))}hostEvent(t){if(!this.isHost)return;let e=n=>n!=null&&n.isPlayer?"host":(n==null?void 0:n.remote)||null;t.type==="caught"?this.net.send({t:"ev",k:"caught",name:t.agent.name,pid:e(t.agent),phase:t.phase,by:t.ghost.isPlayer?"host":t.ghost.remote||null}):t.type==="ghostSpawn"?this.net.send({t:"ev",k:"spawn",i:t.i,phase:this.g.round.phase,pid:t.ghost.isPlayer?"host":t.ghost.remote||null}):t.type==="phase"?(this.net.send({t:"roster",roster:Ec(this.g.round)}),this.net.send({t:"ev",k:"phase",name:t.newGhostName,pid:t.agent?e(t.agent):null})):t.type==="poof"&&this.net.send({t:"ev",k:"poof",x:t.x,y:t.y,z:t.z,ghost:!!t.ghost})}hostEnd(t){this.isHost&&this.net.send({t:"end",r:{hideSurvivors:t.hideSurvivors,alive:t.alive,caught:t.caught}})}hostPumpkin(t){this.isHost&&t&&t!=="host"&&this.net.send({t:"ev",k:"pk",to:t})}guestTick(t,e){var T,w;let n=this.g,i=this.guest;if(!i)return;let r=n.input.read();r.jump&&(this.latch.jump=!0),r.dash&&(this.latch.dash=!0),this.inT-=t,this.inT<=0&&(this.inT=1/20,this.net.send({t:"in",x:+r.x.toFixed(2),y:+r.y.toFixed(2),run:r.run,crouch:r.crouch,jumpHold:r.jumpHold,jump:this.latch.jump,dash:this.latch.dash,camYaw:+n.cam.yaw.toFixed(3)}),this.latch.jump=this.latch.dash=!1),i.render(t,e);let a=i.snap,o=i.me(this.net.id),l=[...i.agents.values()].filter(C=>{var v;return(v=C.s)==null?void 0:v[10]}),c=!o&&l.length>0,h=c?l[this.guestFocus%l.length]:null,u=(o==null?void 0:o.pos)||(h==null?void 0:h.pos)||((T=i.agents.values().next().value)==null?void 0:T.pos)||new I(0,0,22);if(n.mainFirstPersonTarget=c?h:null,(o==null?void 0:o.kind)!==this.lastKind&&(n.cam.configure((o==null?void 0:o.kind)==="ghost"?Be.cam:((w=o==null?void 0:o.v)==null?void 0:w.def.cam)||Qe[0].cam),this.lastKind=o==null?void 0:o.kind),c?n.firstPerson({ctrl:{pos:h.pos,yaw:h.yaw},hero:h.def}):n.cam.update(t,u,r),this.focusPos=u,!a)return;document.getElementById("watch-bar").classList.toggle("hidden",!c),document.getElementById("touch").classList.toggle("hidden",c),c&&(document.getElementById("btn-next").textContent="\u0414\u0440\u0443\u0433\u043E\u0439 \u0433\u0435\u0440\u043E\u0439 \u203A");let d=p&&a.ph==="hide"&&(p[9]||p[11]||p[14])?a.g.filter(C=>C[5]).sort((C,v)=>Math.hypot(C[1]-u.x,C[3]-u.z)-Math.hypot(v[1]-u.x,v[3]-u.z))[0]:null,f=d&&n.ghostPool[d[0]],g=d&&(d[10]?`hero:${d[10]}`:d[11]?`prop:${d[11]}`:null),_=g&&this.guest.ghostDz.get(`${g}#${d[0]}`);n.ghostViewTarget=f?{ctrl:{pos:new I(d[1],d[2],d[3]),yaw:d[4]},def:f.def,root:f.root,disguiseRoot:_==null?void 0:_.root}:null,document.getElementById("ghost-view").classList.toggle("hidden",!n.ghostViewTarget),n.ui.phase(a.ph==="chase"?"chase":"hide");let m=a.a.filter(C=>C[10]).length;n.ui.alive(m,a.a.length,a.ph==="hide"?"\u0421\u043F\u0440\u044F\u0442\u0430\u043B\u0438\u0441\u044C":"\u0423\u0431\u0435\u0433\u0430\u044E\u0442");let p=(o==null?void 0:o.kind)==="agent"?o.v.s:null,y=(o==null?void 0:o.kind)==="ghost"?o.g:null;n.ui.hud({left:a.left,stamina:p?p[15]:y?y[13]:1,tired:p?!!p[16]:!1,hidden:p?!!p[14]:!1});let x;a.ph==="hide"&&a.sp===0?x=y?"\u0417\u0430\u043A\u0440\u043E\u0439 \u0433\u043B\u0430\u0437\u0430 \u0438 \u0441\u0447\u0438\u0442\u0430\u0439\u2026 \u0413\u0435\u0440\u043E\u0438 \u043F\u0440\u044F\u0447\u0443\u0442\u0441\u044F!":"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0441\u043A\u043E\u0440\u043E \u0432\u044B\u0439\u0434\u0443\u0442 \u2014 \u043F\u0440\u044F\u0447\u044C\u0441\u044F!":y?x=y[10]||y[11]?"\u0422\u044B \u0437\u0430\u043C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u0430\u043D \u2014 \u043F\u043E\u0434\u043A\u0440\u0430\u0434\u0438\u0441\u044C!":a.ph==="hide"?`\u041D\u0430\u0439\u0434\u0438 \u0441\u043F\u0440\u044F\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044F! \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C: ${m}`:`\u0414\u043E\u0433\u043E\u043D\u0438 \u0432\u0441\u0435\u0445! \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C: ${m}`:o?p[11]?x="\u0422\u044B \u2014 \u043F\u0440\u0435\u0434\u043C\u0435\u0442. \u041D\u0435 \u0448\u0435\u0432\u0435\u043B\u0438\u0441\u044C! (Q \u2014 \u0441\u043D\u043E\u0432\u0430 \u0441\u0442\u0430\u0442\u044C \u0441\u043E\u0431\u043E\u0439)":x=p[14]?"\u0422\u0438\u0445\u043E\u2026 \u0442\u0435\u0431\u044F \u0438\u0449\u0443\u0442":a.ph==="chase"?"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438! \u041D\u0435 \u043F\u043E\u043F\u0430\u0434\u0438\u0441\u044C!":"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0438\u0449\u0443\u0442. \u0421\u043F\u0440\u044F\u0447\u044C\u0441\u044F \u0438\u043B\u0438 \u0437\u0430\u043C\u0430\u0441\u043A\u0438\u0440\u0443\u0439\u0441\u044F!":x="\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438! \u0421\u043C\u043E\u0442\u0440\u0438, \u043A\u0430\u043A \u043F\u0440\u044F\u0447\u0443\u0442\u0441\u044F \u0434\u0440\u0443\u0433\u0438\u0435\u2026",n.ui.status(x,"calm"),n.ui.mmLabel(a.ph==="hide"&&a.sp===0&&!y?"\u041D\u0430\u0439\u0434\u0438 \u043C\u0435\u0441\u0442\u043E<br>\u0438 \u0441\u043F\u0440\u044F\u0447\u044C\u0441\u044F!":"");let M=y?"ghost":p?"hero:"+o.v.def.id:"none";M!==this.lastBar&&(this.lastBar=M,n.ui.abilityBar(y?n.ghostAbilities:p?n.heroAbilities(o.v.def.id):[])),y?n.ui.cooldowns(C=>C==="dash"?{k:y[14]>0?0:1,n:y[14]}:C==="fly"?{k:1-y[15]}:{k:y[10]||y[11]?0:y[16]/At.ghost.disguise.cd}):p&&n.ui.cooldowns(C=>C==="dash"?{k:p[17]}:{k:0});let E=[];for(let C of i.agents.values())C.s&&C.s[10]&&C!==(o==null?void 0:o.v)&&!y&&E.push({x:C.s[1],z:C.s[3],kind:"ally"});for(let C of a.g)C[5]&&C!==y&&(y||!C[10]&&!C[11]&&Math.hypot(C[1]-u.x,C[3]-u.z)<18)&&E.push({x:C[1],z:C[3],kind:"ghost"});E.push({x:u.x,z:u.z,kind:"me"}),n.ui.minimap(u,n.cam.yaw,E)}nextGuestFocus(){var t;this.g.state!=="guest"||(t=this.guest)!=null&&t.me(this.net.id)||this.guestFocus++}guestKey(t){var e;if(this.lastBar==="ghost"){t==="1"&&this.guestAbility("mask-hero"),t==="2"&&this.guestAbility("mask-prop");return}if((e=this.lastBar)!=null&&e.startsWith("hero:")){let n=this.g.heroAbilities(this.lastBar.slice(5)).find(i=>i.key===t);n&&this.guestAbility(n.id)}}guestAbility(t){if(t==="dash"){this.latch.dash=!0;return}if(t==="fly"){this.latch.jump=!0;return}this.net.send({t:"ab",id:t})}};Pe=new WeakSet,Gd=function(){let t=this.g.ui,e=this.net;this.seenHost=null,t.on("lb-leave",()=>this.leave()),t.on("lb-hero",()=>this.g.toSelect()),t.on("lb-start",()=>this.hostStart()),t.on("lb-copy",()=>{var i;(i=navigator.clipboard)==null||i.writeText(this.url).then(()=>t.toast("\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430!"),()=>{}),zn("lb-url").select()}),t.on("lb-share",()=>{var i;navigator.share?navigator.share({title:"\u041F\u0440\u044F\u0442\u043A\u0438 \u0441 \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u043C",text:"\u0418\u0433\u0440\u0430\u0435\u043C \u0432\u043C\u0435\u0441\u0442\u0435! \u041A\u043E\u043C\u043D\u0430\u0442\u0430 "+e.code,url:this.url}).catch(()=>{}):((i=navigator.clipboard)==null||i.writeText(this.url),t.toast("\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430!"))});let n=zn("lb-name");n.value=this.myName,n.addEventListener("keydown",i=>i.stopPropagation()),n.addEventListener("change",()=>{try{localStorage.setItem(kd,n.value.trim())}catch{}e.update(this.hello())}),e.on("lobby",i=>{this.g.state==="lobby"&&this.renderLobby(),Y(this,Pe,Wd).call(this,i)}),e.on("left",i=>{if(this.isHost&&this.g.state==="play"){let r=this.g.round,a=r.agents.find(o=>o.remote===i.id);a&&(this.g.ui.toast(`${a.name} \u0432\u044B\u0448\u0435\u043B \u2014 \u0437\u0430 \u043D\u0435\u0433\u043E \u0438\u0433\u0440\u0430\u0435\u0442 \u0431\u043E\u0442`),r.convertToBot(a));for(let o of r.activeGhosts)o.remote===i.id&&(o.remote=null)}}),e.on("close",()=>{this.g.state!=="loading"&&(this.g.ui.toast("\u0421\u0432\u044F\u0437\u044C \u0441 \u043A\u043E\u043C\u043D\u0430\u0442\u043E\u0439 \u043F\u043E\u0442\u0435\u0440\u044F\u043D\u0430"),Y(this,Pe,wr).call(this),["lobby","guest"].includes(this.g.state)&&this.g.toSelect())}),e.on("start",i=>Y(this,Pe,qd).call(this,i)),e.on("roster",i=>{var r;return(r=this.guest)==null?void 0:r.setRoster(i.roster)}),e.on("s",i=>{var r;return(r=this.guest)==null?void 0:r.apply(i)}),e.on("ev",i=>Y(this,Pe,Yd).call(this,i)),e.on("end",i=>Y(this,Pe,$d).call(this,i)),e.on("lobbyBack",()=>{Y(this,Pe,wr).call(this),this.showLobby()}),e.on("in",i=>{if(!this.isHost)return;let r=this.g.round.netIn.get(i.from)||{};this.g.round.netIn.set(i.from,{...i,jump:r.jump||i.jump,dash:r.dash||i.dash})}),e.on("ab",i=>Y(this,Pe,Xd).call(this,i))},Vd=function(){let t=zn("lb-qr"),e=()=>{try{let i=window.qrcode(0,"M");i.addData(this.url),i.make(),t.src=i.createDataURL(4,2)}catch{t.removeAttribute("src")}};if(window.qrcode)return e();if(t.removeAttribute("src"),this.qrLoading)return;this.qrLoading=!0;let n=document.createElement("script");n.src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js",n.onload=e,document.head.appendChild(n)},Wd=function(t){let e=this.seenHost;this.seenHost=t.host,!(!this.guest||e==null||t.host===e)&&(Y(this,Pe,wr).call(this),this.g.ui.toast(t.host===this.net.id?"\u0425\u043E\u0437\u044F\u0438\u043D \u0432\u044B\u0448\u0435\u043B \u2014 \u0442\u0435\u043F\u0435\u0440\u044C \u0442\u044B \u0445\u043E\u0437\u044F\u0438\u043D. \u0420\u0430\u0443\u043D\u0434 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D.":"\u0425\u043E\u0437\u044F\u0438\u043D \u0432\u044B\u0448\u0435\u043B \u2014 \u0440\u0430\u0443\u043D\u0434 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D, \u0432\u0435\u0440\u043D\u0443\u043B\u0438\u0441\u044C \u0432 \u043B\u043E\u0431\u0431\u0438."),this.showLobby())},Xd=function(t){if(!this.isHost||this.g.state!=="play")return;let e=this.g.round,n=e.agents.find(r=>r.remote===t.from&&r.alive);if(n){n.abilities.use(t.id);return}let i=e.activeGhosts.find(r=>r.remote===t.from);i&&(t.id==="mask-hero"||t.id==="mask-prop")&&(i.disguised?i.reveal():i.useDisguise(e.agents,t.id==="mask-prop"?"prop":"hero"))},qd=function(t){let e=this.g;e.releaseAll(),this.guest||(this.guest=new po({scene:e.scene,heroes:[...Qe,Be],ghosts:e.ghostPool,acquire:(n,i)=>e.acquireChar(n,i)})),this.guest.clear(),this.guest.setRoster(t.roster),this.guestMode=t.mode,this.guestFocus=0,this.pk=0,e.showGhost.root.visible=!1,e.showcase=null,e.input.reset(),e.state="guest",e.input.enabled=!0,e.input.lookOnly=!1,e.cam.yaw=0,e.cam.pitch=.3,e.ui.mode("play",e.isTouch,"play"),e.ui.phase("hide"),e.ui.pumpkins(0),e.ui.abilityBar([]),this.lastBar=null,e.showLight.intensity=0,document.getElementById("btn-again").classList.add("hidden")},wr=function(){this.guest&&(this.guest.clear(),this.g.releaseAll(),this.guest=null,document.getElementById("btn-again").classList.remove("hidden"))},Yd=function(t){let e=this.g,n=e.ui,i=this.net.id;this.guest&&(t.k==="caught"?(t.pid===i?n.toast(t.phase==="hide"?"\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438! \u041F\u043E\u0434\u043E\u0436\u0434\u0438 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043E\u043A.":"\u0422\u0435\u0431\u044F \u0434\u043E\u0433\u043D\u0430\u043B\u0438!"):t.by===i?n.toast(`\u041F\u043E\u043F\u0430\u043B\u0441\u044F: ${t.name}!`):n.toast(`${t.phase==="hide"?"\u041D\u0430\u0448\u043B\u0438":"\u0414\u043E\u0433\u043D\u0430\u043B\u0438"}: ${t.name}`),e.sound.chime([392,330])):t.k==="spawn"?(e.sound.ghostAppear(),e.cam.shake=.6,t.pid===i?n.toast("\u0422\u044B \u0432\u044B\u0448\u0435\u043B \u043D\u0430 \u043E\u0445\u043E\u0442\u0443! \u0418\u0449\u0438!"):t.i===0&&n.toast(t.phase==="hide"?"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0432\u044B\u0448\u043B\u0438 \u0438\u0441\u043A\u0430\u0442\u044C!":"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438 \u043D\u0430\u0447\u0430\u043B\u0438\u0441\u044C!")):t.k==="phase"?(e.sound.ghostAppear(),n.phase("chase"),n.toast(t.pid===i?"\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438 \u043F\u0435\u0440\u0432\u044B\u043C \u2014 \u0442\u0435\u043F\u0435\u0440\u044C \u0422\u042B \u0411\u0435\u0437\u043B\u0438\u043A! \u0414\u043E\u0433\u043E\u043D\u044F\u0439!":`\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438! \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u043C \u0441\u0442\u0430\u043B(\u0430): ${t.name}. \u0411\u0435\u0433\u0438!`)):t.k==="poof"?e.addFx(e.poofFx(t.x,t.y,t.z,t.ghost)):t.k==="pk"&&t.to===i&&(this.pk++,n.pumpkins(this.pk),e.sound.chime([784,1046,1318])))},$d=function(t){let e=this.g,n=t.r;e.state="result",e.input.enabled=!1,e.input.releasePointer();let i=this.pk;i&&e.ui.wallet(Ns.add(i)),e.ui.result({mode:"watch",alive:n.alive,hideSurvivors:n.hideSurvivors,caught:n.caught,earn:i}),e.ui.mode("result",e.isTouch),document.getElementById("btn-again").classList.add("hidden")};var o_=s=>String(s).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);var ks=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,Tr=ks&&Math.min(screen.width,screen.height)<820,l_=4,Ar=new I(0,0,22),Zd=[{id:"dash",key:"E",icon:"\u{1F4A8}",name:"\u0420\u044B\u0432\u043E\u043A"},{id:"mask-hero",key:"1",icon:"\u{1F3AD}",name:"\u0421\u0442\u0430\u0442\u044C \u0433\u0435\u0440\u043E\u0435\u043C"},{id:"mask-prop",key:"2",icon:"\u{1F4E6}",name:"\u0421\u0442\u0430\u0442\u044C \u0432\u0435\u0449\u044C\u044E"},{id:"fly",key:"\u2423",icon:"\u{1FAB6}",name:"\u0412\u0437\u043B\u0435\u0442\u0435\u0442\u044C"}],xt,Jd,wc,go,Tc,jd,Ac,xo,yo,Mi,Cr,Rc,Hs,_o,Cc,Kd,Pc,Qd,tf,ef,nf,sf,rf,af,ni,vo=class{constructor(t){de(this,xt);this.canvas=t,this.ui=new co,this.sound=new lo,this.state="loading",this.t=0,this.fx=[],this.navs=new Map,this.pool=new Map,this.acquired=[],this.skin="classic",this.withBots=!0,this.ghostCount=At.ghost.count,this.mapId="village",this.look=vr()}get agents(){var t;return((t=this.round)==null?void 0:t.agents)||[]}get isTouch(){return ks}get ghostAbilities(){return Zd}heroAbilities(t){return vc[t]||[]}acquireChar(t,e){return Y(this,xt,wc).call(this,t,e)}releaseAll(){Y(this,xt,go).call(this)}poofFx(t,e,n,i){return hc(this.scene,t,e,n,i?13215999:16773590)}get ghosts(){var t;return((t=this.round)==null?void 0:t.activeGhosts)||[]}async start(){var o,l,c,h;Ud();let t=this.ui;t.progress(.1,"\u0421\u0442\u0440\u043E\u0438\u043C \u0434\u0435\u0440\u0435\u0432\u043D\u044E\u2026"),await Rr();let e=this.renderer=new zi({canvas:this.canvas,antialias:!Tr||devicePixelRatio<2,powerPreference:"high-performance"});e.setPixelRatio(Math.min(devicePixelRatio,Tr?At.graphics.maxPixelRatioMobile:At.graphics.maxPixelRatioDesktop)),e.setSize(innerWidth,innerHeight,!1),e.toneMapping=_r,e.toneMappingExposure=1.15,e.shadowMap.enabled=At.graphics.shadows,e.shadowMap.type=Ba,this.scene=new Ts,this.camera=new Ue(At.camera.fov,innerWidth/innerHeight,.1,400),this.insetCamera=new Ue(72,16/9,.08,180),this.map=$u(this.scene,{isMobile:Tr}),this.world=this.map.world,t.progress(.4,"\u0417\u0430\u0436\u0438\u0433\u0430\u0435\u043C \u0444\u043E\u043D\u0430\u0440\u0438\u043A\u0438\u2026"),await Rr(),this.fireflies=Zu(this.scene,Tr?50:At.graphics.fireflies,28),this.soot=Ju(this.scene,this.world,Tr?10:16);let n=this.navFor(Be.radius);this.ghostPool=Array.from({length:l_},()=>new eo(Be,this.world,this.scene,n,{heroes:Qe})),this.input=new ja(this.canvas,document.getElementById("touch")),this.cam=new Ka(this.camera,this.map.cameraBlockers),this.showLight=new xi(16769200,14,9,1.6),this.scene.add(this.showLight),t.progress(.6,"\u041F\u0440\u043E\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u043C \u0442\u0440\u043E\u043F\u0438\u043D\u043A\u0438\u2026"),await Rr();for(let u=0;u<Qe.length;u++)this.navFor(Qe[u].radius),t.progress(.6+.04*(u+1),"\u041F\u0440\u043E\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u043C \u0442\u0440\u043E\u043F\u0438\u043D\u043A\u0438\u2026"),await Rr();this.pumpkins=new Za(this.scene,this.navFor(.42)),t.progress(.8,"\u0417\u043E\u0432\u0451\u043C \u0434\u0443\u0445\u043E\u0432\u2026"),await Rr(),this.ghostPool.forEach(u=>{u.root.visible=!0,u.char.update(.016,{t:0,speed:0,mode:"hunt",appear:1})}),this.renderer.compile(this.scene,this.camera),this.ghostPool.forEach(u=>{u.root.visible=!1}),this.showGhost=Be.build(),this.showGhost.root.visible=!1,this.scene.add(this.showGhost.root),this.round=new ro({world:this.world,scene:this.scene,navFor:u=>this.navFor(u),ghosts:this.ghostPool,heroes:Qe,makeChar:(u,d)=>Y(this,xt,wc).call(this,u,d),makeProp:u=>Xi(u),sound:this.sound,cam:this.cam}),this.round.addFx=u=>this.fx.push(u);let i=Fd([...Qe,Be]);Y(this,xt,Jd).call(this),t.progress(1,"\u0413\u043E\u0442\u043E\u0432\u043E!"),t.buildCards(Qe,Be,i,u=>this.selectHero(u)),t.on("btn-choose",()=>this.mp.inRoom?this.mp.showLobby():this.toMaps()),t.on("btn-friends",()=>this.mp.inRoom?this.mp.showLobby():this.mp.createRoom()),t.on("btn-maps-back",()=>this.toSelect()),t.on("btn-maps-go",()=>this.beginRound(this.hero.id==="noface"?"hunter":"play")),t.on("btn-watch",()=>this.beginRound("watch")),t.on("btn-again",()=>this.beginRound(this.mode)),t.on("btn-change",()=>this.mp.inRoom?this.mp.showLobby():this.toSelect()),t.on("btn-resume",()=>this.resume()),t.on("btn-quit",()=>{this.ui.show("paused",!1),this.toSelect()}),t.on("btn-pause",()=>this.pause()),t.on("btn-next",()=>this.state==="guest"?this.mp.nextGuestFocus():Y(this,xt,Rc).call(this)),t.on("btn-tuner",()=>this.tuner.toggle()),t.on("btn-tuner2",()=>this.tuner.toggle()),t.on("btn-mute",()=>{this.sound.setMuted(!this.sound.muted),t.setMute(this.sound.muted)}),t.onOptions({ghosts:u=>{this.ghostCount=u},bots:u=>{this.withBots=u},skin:u=>{this.skin=u,this.selectHero("moti")}},{ghosts:this.ghostCount,bots:this.withBots}),this.tuner=new uo(Qe,()=>{var u;return((u=this.hero)==null?void 0:u.id)||"masha"}),t.minimapInit(this.world,ke),this.mp=new mo(this),t.wallet(Ns.get()),addEventListener("keydown",u=>{var g;if(this.tuner.open)return;if(this.state==="play"&&(u.code==="KeyP"||u.code==="Escape"&&!document.pointerLockElement))return this.pause();if(this.state==="paused"&&(u.code==="KeyP"||u.code==="Escape"))return this.resume();if(this.state==="play"&&this.mode==="watch"&&(u.code==="Tab"||u.code==="KeyN"))return u.preventDefault(),Y(this,xt,Rc).call(this);if(this.state==="guest"&&!u.repeat)return this.mp.guestKey(u.code.replace("Digit","").replace("Key",""));if(this.state!=="play"||u.repeat)return;let d=u.code.replace("Digit","").replace("Key","");if(this.round.playerGhost)d==="1"&&Y(this,xt,xo).call(this,"mask-hero"),d==="2"&&Y(this,xt,xo).call(this,"mask-prop");else if((g=this.round.player)!=null&&g.alive){let _=this.round.player.abilities.list.find(m=>m.key===d);_&&this.round.player.abilities.use(_.id)}}),t.onAbility(u=>Y(this,xt,xo).call(this,u)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="play"&&this.pause()}),addEventListener("resize",()=>Y(this,xt,ni).call(this)),addEventListener("orientationchange",()=>{Y(this,xt,ni).call(this),setTimeout(()=>Y(this,xt,ni).call(this),180),setTimeout(()=>Y(this,xt,ni).call(this),600)}),(c=(l=(o=window.screen)==null?void 0:o.orientation)==null?void 0:l.addEventListener)==null||c.call(l,"change",()=>Y(this,xt,ni).call(this)),(h=window.visualViewport)==null||h.addEventListener("resize",()=>Y(this,xt,ni).call(this)),addEventListener("pageshow",()=>Y(this,xt,ni).call(this)),Y(this,xt,ni).call(this);let r=()=>this.sound.unlock();addEventListener("pointerdown",r),addEventListener("keydown",r),this.hero=Qe[0],this.toSelect(),t.hideLoading();let a=new URLSearchParams(location.search).get("room");a&&this.mp.join(a),this.last=performance.now(),this.renderer.setAnimationLoop(()=>Y(this,xt,Qd).call(this)),window.__game=this}navFor(t){let e=Math.round(t*10);return this.navs.has(e)||this.navs.set(e,new Os(this.world,t+.1)),this.navs.get(e)}addFx(t){this.fx.push(t)}selectHero(t){this.hero=t===Be.id?Be:Qe.find(e=>e.id===t),Y(this,xt,go).call(this);for(let e of this.ghostPool)e.reveal(),e.reset(new I(0,0,-21));this.showGhost.root.visible=t===Be.id,this.showcase=t===Be.id?null:this.round.makeAgent(this.hero,!0,Ar,Y(this,xt,Tc).call(this,this.hero)),this.ui.showHero(this.hero,this.skin),this.hero.custom&&this.ui.buildCreator(this.look,cc,(e,n)=>Y(this,xt,jd).call(this,e,n)),this.cam.configure(this.hero.cam)}toSelect(){this.state="select",this.input.enabled=!1,this.input.lookOnly=!1,this.input.releasePointer(),this.selectHero(this.hero.id),this.sound.setTension(0),this.ui.mode("select",ks),this.ui.wallet(Ns.get()),this.showLight.intensity=14}toMaps(){this.state="maps",this.ui.mode("maps",ks)}beginRound(t){this.mode=t,this.sound.unlock(),Y(this,xt,go).call(this),this.showGhost.root.visible=!1,this.showcase=null,this.input.reset();let e=this.hero.id===Be.id?Qe[0]:this.hero;this.round.start({mode:t,hero:e,skin:Y(this,xt,Tc).call(this,e),mSkin:this.skin,ghosts:this.ghostCount,withBots:this.withBots,remotes:this.mp.remotes()}),this.mp.hostStarted(),this.pumpkins.spawn(At.round.pumpkins),this.focus=0,this.cam.yaw=t==="hunter"?Math.PI:0,this.cam.pitch=.3;let n=Y(this,xt,Mi).call(this);Y(this,xt,Cr).call(this,n),this.cam.snap(Y(this,xt,Hs).call(this,n)),this.state="play",this.input.enabled=!0,this.input.lookOnly=t==="watch",this.ui.mode("play",ks,t),this.ui.phase("hide"),Y(this,xt,Ac).call(this),Y(this,xt,yo).call(this),this.ui.pumpkins(0),this.showLight.intensity=0}firstPerson(t,e=this.camera){Y(this,xt,_o).call(this,t,e)}pause(){this.state==="play"&&(this.state="paused",this.input.enabled=!1,this.input.releasePointer(),this.ui.show("paused",!0))}resume(){this.state==="paused"&&(this.state="play",this.input.enabled=!0,this.last=performance.now(),this.ui.show("paused",!1))}};xt=new WeakSet,Jd=function(){let t=(e,n)=>(this.camera.position.set(...e),this.camera.lookAt(...n),this.map.updateLights(new I(n[0],0,n[2])),this.renderer.render(this.scene,this.camera),this.renderer.domElement.toDataURL("image/jpeg",.72));this.maps=[{id:"forest",name:"\u041B\u0435\u0441 \u0434\u0443\u0445\u043E\u0432",icon:"\u{1F332}",ready:!1,pic:t([-26,3.2,-26],[-36,2.4,-36])},{id:"village",name:"\u0414\u0435\u0440\u0435\u0432\u043D\u044F \u0434\u0443\u0445\u043E\u0432",icon:"\u{1F3E0}",ready:!0,pic:t([0,5,30],[0,1.5,4])},{id:"temple",name:"\u0417\u0430\u0431\u0440\u043E\u0448\u0435\u043D\u043D\u044B\u0439 \u0445\u0440\u0430\u043C",icon:"\u26E9\uFE0F",ready:!1,hard:!0,pic:t([0,3.5,-8],[0,2.4,-24])}],this.ui.buildMaps(this.maps,e=>{let n=this.maps.find(i=>i.id===e);if(!n.ready){this.ui.toast(`\xAB${n.name}\xBB \u0441\u043A\u043E\u0440\u043E \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F!`);return}this.mapId=e,this.ui.pickMap(e)}),this.ui.pickMap(this.mapId)},wc=function(t,e){let n=t.id+":"+(t.skins||t.custom?e:""),i=this.pool.get(n)||[];this.pool.set(n,i);let r=i.find(a=>!a.inUse);return r||(r=t.build(e),i.push(r)),r.inUse=!0,r.root.visible=!0,r.root.scale.set(1,1,1),this.scene.add(r.root),this.acquired.push(r),r},go=function(){var t;for(let e of this.acquired)e.inUse=!1,this.scene.remove(e.root);this.acquired=[];for(let e of this.agents)(t=e.prop)!=null&&t.obj&&this.scene.remove(e.prop.obj);this.round.agents=[],this.round.player=null,this.round.playerGhost=null,this.round.domes=[];for(let e of this.fx)for(;e.update(99)!==!1;);this.fx=[],this.pumpkins.clear()},Tc=function(t){return t.custom?JSON.stringify(this.look):this.skin},jd=function(t,e){this.look={...this.look,[t]:e},t==="gender"&&(this.look.hairStyle=cc.hairStyle[e][0][0]),Vu(this.look);for(let n of[...this.pool.keys()])n.startsWith("kid:")&&this.pool.delete(n);this.sound.chime([660,880]),this.selectHero("kid")},Ac=function(){let t=this.round;t.playerGhost?this.ui.abilityBar(Zd):t.player?this.ui.abilityBar(t.player.abilities.list):this.ui.abilityBar([]),document.getElementById("abil-bar").classList.toggle("hidden",this.mode==="watch")},xo=function(t){var i;if(this.state==="guest")return this.mp.guestAbility(t);let e=this.round,n=e.playerGhost;if(t==="dash"){this.input.dashQueued=!0;return}if(n){t==="fly"?this.input.jumpQueued=!0:(t==="mask-hero"||t==="mask-prop")&&(n.disguised?n.reveal():n.useDisguise(e.agents,t==="mask-prop"?"prop":"hero")||this.ui.toast(n.active?"\u041C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u0435\u0449\u0451 \u043A\u043E\u043F\u0438\u0442\u0441\u044F\u2026":"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E\u0436\u0434\u0438\u0441\u044C \u0441\u0432\u043E\u0435\u0433\u043E \u0432\u044B\u0445\u043E\u0434\u0430"));return}(i=e.player)!=null&&i.alive&&e.player.abilities.use(t)},yo=function(){let t=this.round,e=t.agents.filter(n=>n.alive).length;this.ui.alive(e,t.agents.length,t.phase==="hide"?"\u0421\u043F\u0440\u044F\u0442\u0430\u043B\u0438\u0441\u044C":"\u0423\u0431\u0435\u0433\u0430\u044E\u0442")},Mi=function(){var i;let t=this.round;if((i=t.player)!=null&&i.alive)return t.player;if(t.playerGhost)return t.playerGhost;let e=t.agents.filter(r=>r.alive),n=e.length?e:t.activeGhosts.filter(r=>r.state!=="hidden");return n[this.focus%Math.max(1,n.length)]||t.agents[0]||t.activeGhosts[0]},Cr=function(t){t!=null&&t.hero?this.cam.configure(t.hero.cam):this.cam.configure(Be.cam)},Rc=function(){var e;(this.mode==="watch"||!((e=this.round.player)!=null&&e.alive)&&!this.round.playerGhost)&&(this.focus++,Y(this,xt,Cr).call(this,Y(this,xt,Mi).call(this)))},Hs=function(t){return t?t.ctrl.pos:Ar},_o=function(t,e){var o,l,c,h;if(!(t!=null&&t.ctrl))return;let n=t.ctrl.pos,r=((h=(c=(o=t.hero)==null?void 0:o.height)!=null?c:(l=t.def)==null?void 0:l.height)!=null?h:1.7)*.84,a=t.ctrl.yaw;e.position.set(n.x,n.y+r,n.z),e.lookAt(n.x+Math.sin(a),n.y+r-.03,n.z+Math.cos(a))},Cc=function(t){var e,n,i,r;return((e=t==null?void 0:t.prop)==null?void 0:e.obj)||(t==null?void 0:t.propObj)||(t==null?void 0:t.disguiseRoot)||((i=(n=t==null?void 0:t.disguise)==null?void 0:n.char)==null?void 0:i.root)||(t==null?void 0:t.root)||((r=t==null?void 0:t.char)==null?void 0:r.root)||null},Kd=function(){let t=document.getElementById("ghost-view"),e=this.ghostViewTarget;if(!e||t.classList.contains("hidden"))return;let n=t.getBoundingClientRect();if(!n.width||!n.height)return;this.insetCamera.aspect=n.width/n.height,this.insetCamera.updateProjectionMatrix(),Y(this,xt,_o).call(this,e,this.insetCamera);let i=this.renderer.domElement.clientWidth||innerWidth,r=this.renderer.domElement.clientHeight||innerHeight,a=n.left,o=r-n.bottom;this.renderer.setScissorTest(!0),this.renderer.setViewport(a,o,n.width,n.height),this.renderer.setScissor(a,o,n.width,n.height);let l=Y(this,xt,Cc).call(this,e),c=l==null?void 0:l.visible;l&&(l.visible=!1),this.renderer.render(this.scene,this.insetCamera),l&&(l.visible=c),this.renderer.setScissorTest(!1),this.renderer.setViewport(0,0,i,r)},Pc=function(t){this.state="result",this.input.enabled=!1,this.input.releasePointer(),this.sound.setTension(0),(t.mode==="watch"?t.alive.length>0:t.mode==="hunter"||t.playerWasGhost?t.alive.length===0:!t.playerCaughtInChase)?this.sound.win():this.sound.lose(),t.mode!=="watch"&&t.earn?this.ui.wallet(Ns.add(t.earn)):t.earn=0,this.ui.result(t),this.ui.mode("result",ks),this.mp.hostEnd(t)},Qd=function(){let t=performance.now(),e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.t+=e;let n=this.t;if(this.state==="play")Y(this,xt,ef).call(this,e,n);else if(this.state==="guest")this.mp.guestTick(e,n);else if(this.state==="select"||this.state==="maps")Y(this,xt,tf).call(this,e,n);else if(this.state==="result"){for(let o of this.agents)o.alive&&o.char&&o.char.update(e,{...o.ctrl.animState(n),speed:0,grounded:!0,landed:!1,action:o.abilities.pose()});for(let o of this.ghosts)o.state!=="hidden"&&!o.disguised&&o.char.update(e,{t:n,speed:0,mode:"hunt",appear:1})}this.fx=this.fx.filter(o=>o.update(e)!==!1);let i=this.state==="play"?Y(this,xt,Hs).call(this,Y(this,xt,Mi).call(this)):this.state==="guest"&&this.mp.focusPos||Ar;this.map.updateLights(i),this.fireflies(n),this.soot(e,n,i);let r=Y(this,xt,Cc).call(this,this.mainFirstPersonTarget),a=r==null?void 0:r.visible;r&&(r.visible=!1),this.renderer.render(this.scene,this.camera),r&&(r.visible=a),Y(this,xt,Kd).call(this)},tf=function(t,e){let n=this.hero.id===Be.id,i=Ar;if(n){let u=this.showGhost.root;u.position.copy(i),u.rotation.y=-.35+Math.sin(e*.4)*.3,this.showGhost.update(t,{t:e,speed:0,mode:Math.sin(e*.5)>.3?"hunt":"search",appear:1})}else if(this.showcase){let u=this.showcase;if(u.abilities.update(t),!u.action&&Math.random()<t*.25){let d=u.abilities.list.filter(f=>["wave","cast","swing","summon"].includes(f.anim));if(d.length){let f=d[Math.random()*d.length|0];u.action={name:f.anim,t:0,dur:f.dur,lock:0,fired:!0}}}u.char.root.position.copy(i),u.char.root.rotation.y=-.35+Math.sin(e*.4)*.3,u.char.update(t,{t:e,speed:0,grounded:!0,landed:!1,action:u.abilities.pose()})}let r=this.hero.height,a=innerWidth<760,o=r*(a?2.9:2)+1.4,l=.12+Math.sin(e*.15)*.06,c=(a?.55:1.25)*(r/1.7)+(a?0:.3),h=new I(i.x+c,i.y+r*.6,i.z);this.camera.position.set(h.x+Math.sin(l)*o,h.y+r*.18,h.z+Math.cos(l)*o),this.camera.lookAt(h),this.showLight.position.set(i.x+.8,i.y+r*.9,i.z+2.4)},ef=function(t,e){var M,E,T,w,C;let n=this.round,i=At,r=this.input.read(),a=Y(this,xt,Mi).call(this),o=this.mode!=="watch"&&!((M=n.player)!=null&&M.alive)&&!n.playerGhost;if(o)Y(this,xt,_o).call(this,a,this.camera),document.getElementById("touch").classList.add("hidden");else if(this.mode==="watch"||!((E=n.player)!=null&&E.alive||n.playerGhost)){let v=a.ctrl.yaw+Math.PI;Math.abs(r.lookX)+Math.abs(r.lookY)<1e-5&&(this.cam.yaw+=Math.atan2(Math.sin(v-this.cam.yaw),Math.cos(v-this.cam.yaw))*Math.min(1,t*1.2)),this.cam.update(t,Y(this,xt,Hs).call(this,a),r)}else this.cam.update(t,Y(this,xt,Hs).call(this,a),r);n.step(t,e,r,this.cam.yaw);for(let v of n.events)Y(this,xt,nf).call(this,v);if(n.events.length=0,this.mp.hostTick(t),this.state!=="play")return;a=Y(this,xt,Mi).call(this),this.mainFirstPersonTarget=o?a:null;let l=n.player,c=l!=null&&l.alive&&n.phase==="hide"&&(l.hidden||l.prop||l.ctrl.crouching)?n.activeGhosts.filter(v=>v.state!=="hidden").sort((v,b)=>v.pos.distanceTo(l.ctrl.pos)-b.pos.distanceTo(l.ctrl.pos))[0]:null;this.ghostViewTarget=c||null,document.getElementById("ghost-view").classList.toggle("hidden",!this.ghostViewTarget);let h=this.mode==="watch"||o;document.getElementById("watch-bar").classList.toggle("hidden",!h),document.getElementById("abil-bar").classList.toggle("hidden",h),o?document.getElementById("btn-next").textContent="\u0414\u0440\u0443\u0433\u043E\u0439 \u0433\u0435\u0440\u043E\u0439 \u203A":this.mode==="watch"&&(document.getElementById("btn-next").textContent="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u203A"),o||document.getElementById("touch").classList.toggle("hidden",this.mode==="watch");for(let v of n.agents){if(!v.alive||!v.char)continue;let b=v.char.root;b.visible=!v.prop,b.position.copy(v.ctrl.pos),b.rotation.y=v.ctrl.yaw,b.scale.y+=((v.ctrl.crouching?.62:1)-b.scale.y)*Math.min(1,t*14),v.char.update(t,{...v.ctrl.animState(e),action:v.abilities.pose()})}let u=(T=n.player)!=null&&T.alive?n.player:n.playerGhost,d=[u,...n.agents.filter(v=>v.remote&&v.alive),...n.activeGhosts.filter(v=>v.remote&&v.active)].filter(Boolean);for(let v of this.pumpkins.update(t,e,d))v===u?(n.stats.pumpkins++,this.ui.pumpkins(n.stats.pumpkins),this.sound.chime([784,1046,1318])):this.mp.hostPumpkin(v.remote);if(u){let v=u.ctrl;v.jumped&&this.sound.jump(),v.dashed&&this.sound.chime([880,1320]),v.landed&&v.landSpeed<-8&&(this.sound.land(-v.landSpeed),v.stagger>0&&(this.cam.shake=Math.max(this.cam.shake,.5))),v.grounded&&v.speed>1&&!v.crouching&&(this.stepDist=(this.stepDist||0)+v.speed*t,this.stepDist>(v.running?2.2:1.6)&&(this.stepDist=0,this.sound.step()))}let f=(w=n.player)!=null&&w.alive?n.player:this.mode==="watch"&&a.hero&&a.alive!==void 0?a:null,g=f?Y(this,xt,af).call(this,f.ctrl.pos):null,_=g?g.d:99,m=!!(g&&g.g.sees&&g.g.target===f&&!g.g.disguised),p=Math.ceil(i.round.headStart-n.t);if(n.phase==="hide"&&n.spawned===0)n.playerGhost?this.ui.status(`\u0417\u0430\u043A\u0440\u043E\u0439 \u0433\u043B\u0430\u0437\u0430 \u0438 \u0441\u0447\u0438\u0442\u0430\u0439: ${p}\u2026 \u0413\u0435\u0440\u043E\u0438 \u043F\u0440\u044F\u0447\u0443\u0442\u0441\u044F!`,"calm"):this.ui.status(`\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0432\u044B\u0439\u0434\u0443\u0442 \u0447\u0435\u0440\u0435\u0437 ${p} \u2014 \u043F\u0440\u044F\u0447\u044C\u0441\u044F!`,"calm");else if(n.playerGhost){let v=n.playerGhost,b=n.agents.filter(L=>L.alive).length;this.ui.status(v.disguised?`\u0422\u044B \u0437\u0430\u043C\u0430\u0441\u043A\u0438\u0440\u043E\u0432\u0430\u043D${v.disguise.prop?` \u043F\u043E\u0434 ${v.disguise.prop.name}`:` \u043F\u043E\u0434 \xAB${v.disguise.hero.name}\xBB`} \u2014 \u043F\u043E\u0434\u043A\u0440\u0430\u0434\u0438\u0441\u044C!`:n.phase==="hide"?`\u041D\u0430\u0439\u0434\u0438 \u0441\u043F\u0440\u044F\u0442\u0430\u0432\u0448\u0438\u0445\u0441\u044F! \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C: ${b}`:`\u0414\u043E\u0433\u043E\u043D\u0438 \u0432\u0441\u0435\u0445! \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C: ${b}`,"")}else this.mode==="watch"?this.ui.status(a.hero&&a.alive!==void 0?`\u0421\u043C\u043E\u0442\u0440\u0438\u043C: ${a.name}${a.hidden?" \xB7 \u0432 \u0443\u043A\u0440\u044B\u0442\u0438\u0438":""}${a.prop?` \xB7 \u043F\u0440\u0438\u0442\u0432\u043E\u0440\u0438\u043B\u0441\u044F: ${a.prop.kind.name}`:""}`:"\u0421\u043C\u043E\u0442\u0440\u0438\u043C: \u0411\u0435\u0437\u043B\u0438\u043A",m?"danger":""):(C=n.player)!=null&&C.alive?m?this.ui.status("\u041E\u043D \u0442\u0435\u0431\u044F \u0432\u0438\u0434\u0438\u0442! \u0411\u0435\u0433\u0438!","danger"):n.player.protected?this.ui.status("\u0422\u044B \u043F\u043E\u0434 \u043A\u0443\u043F\u043E\u043B\u043E\u043C \u2014 \u0437\u0434\u0435\u0441\u044C \u043D\u0435 \u043F\u043E\u0439\u043C\u0430\u044E\u0442","calm"):n.player.prop?this.ui.status(`\u0422\u044B \u2014 ${n.player.prop.kind.name}. \u041D\u0435 \u0448\u0435\u0432\u0435\u043B\u0438\u0441\u044C! (Q \u2014 \u0441\u043D\u043E\u0432\u0430 \u0441\u0442\u0430\u0442\u044C \u0441\u043E\u0431\u043E\u0439)`,"calm"):g&&g.g.state==="hunt"&&g.g.target===n.player&&!g.g.disguised?this.ui.status("\u0411\u0435\u0437\u043B\u0438\u043A \u0438\u0434\u0451\u0442 \u043F\u043E \u0441\u043B\u0435\u0434\u0443\u2026",""):this.ui.status(n.player.hidden?"\u0422\u0438\u0445\u043E\u2026 \u043E\u043D \u0442\u0435\u0431\u044F \u0438\u0449\u0435\u0442":n.phase==="chase"?"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438! \u041D\u0435 \u043F\u043E\u043F\u0430\u0434\u0438\u0441\u044C!":"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0438\u0449\u0443\u0442. \u0421\u043F\u0440\u044F\u0447\u044C\u0441\u044F \u0438\u043B\u0438 \u0437\u0430\u043C\u0430\u0441\u043A\u0438\u0440\u0443\u0439\u0441\u044F!","calm"):this.ui.status("\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438! \u0421\u043C\u043E\u0442\u0440\u0438, \u043A\u0430\u043A \u043F\u0440\u044F\u0447\u0443\u0442\u0441\u044F \u0434\u0440\u0443\u0433\u0438\u0435\u2026","");let y=n.spawned&&f?fe.clamp(1-_/16,0,1):0;this.sound.setTension(this.mode==="watch"?y*.5:y),this.ui.vignette(y*(m?1:.6));let x=u?u.ctrl:a.ctrl;this.ui.hud({left:n.left,stamina:x.stamina,tired:x.exhausted,hidden:u==null?void 0:u.hidden}),this.ui.mmLabel(n.phase==="hide"&&n.spawned===0&&!n.playerGhost?"\u041D\u0430\u0439\u0434\u0438 \u043C\u0435\u0441\u0442\u043E<br>\u0438 \u0441\u043F\u0440\u044F\u0447\u044C\u0441\u044F!":""),Y(this,xt,sf).call(this,a),Y(this,xt,rf).call(this)},nf=function(t){var n;let e=this.round;if(this.mp.hostEvent(t),t.type==="ghostSpawn")this.sound.ghostAppear(),this.cam.shake=Math.max(this.cam.shake,.6),t.ghost.isPlayer?this.ui.toast("\u0422\u044B \u0432\u044B\u0448\u0435\u043B \u043D\u0430 \u043E\u0445\u043E\u0442\u0443! \u0418\u0449\u0438!"):t.i===0&&this.ui.toast(e.phase==="hide"?"\u0411\u0435\u0437\u043B\u0438\u043A\u0438 \u0432\u044B\u0448\u043B\u0438 \u0438\u0441\u043A\u0430\u0442\u044C!":"\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438 \u043D\u0430\u0447\u0430\u043B\u0438\u0441\u044C!");else if(t.type==="caught"){let i=t.agent;if(this.addFx(no(this.scene,i.ctrl.pos.x,i.ctrl.pos.z,2.5,10115808)),Y(this,xt,yo).call(this),i.isPlayer){if(this.cam.shake=1,t.phase==="hide"){let r=e.caughtOrder.filter(a=>a.phase==="hide").length===1;this.ui.toast(r?"\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438 \u043F\u0435\u0440\u0432\u044B\u043C \u2014 \u0432 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0430\u0445 \u0422\u042B \u0431\u0443\u0434\u0435\u0448\u044C \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u043C!":"\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438! \u041F\u043E\u0434\u043E\u0436\u0434\u0438 \u0434\u043E\u0433\u043E\u043D\u044F\u043B\u043E\u043A."),this.focus=0,Y(this,xt,Cr).call(this,Y(this,xt,Mi).call(this))}}else this.ui.toast(t.byPlayer?`\u041F\u043E\u043F\u0430\u043B\u0441\u044F: ${i.name}! \u{1F383}+${t.phase==="hide"?At.round.reward.found:At.round.reward.catch}`:`${t.phase==="hide"?"\u041D\u0430\u0448\u043B\u0438":"\u0414\u043E\u0433\u043D\u0430\u043B\u0438"}: ${i.name}`);i.isPlayer&&t.phase==="chase"&&(this.round.phase="over",Y(this,xt,Pc).call(this,e.result()))}else if(t.type==="poof")this.addFx(hc(this.scene,t.x,t.y,t.z,t.ghost?13215999:16773590)),(n=t.agent)!=null&&n.isPlayer&&t.kind&&this.ui.toast(`\u0422\u044B \u043F\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u043B\u0441\u044F: ${t.kind}!`);else if(t.type==="phase"){this.ui.phase("chase"),this.sound.ghostAppear(),this.cam.shake=.8,t.newGhostIsPlayer?this.ui.toast("\u0422\u0435\u0431\u044F \u043D\u0430\u0448\u043B\u0438 \u043F\u0435\u0440\u0432\u044B\u043C \u2014 \u0442\u0435\u043F\u0435\u0440\u044C \u0422\u042B \u0411\u0435\u0437\u043B\u0438\u043A! \u0414\u043E\u0433\u043E\u043D\u044F\u0439 \u0432\u0441\u0435\u0445!"):e.mode==="hunter"?this.ui.toast("\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438! \u0421 \u0442\u043E\u0431\u043E\u0439 \u0435\u0449\u0451 3 \u0411\u0435\u0437\u043B\u0438\u043A\u0430 \u2014 \u043B\u043E\u0432\u0438 \u0432\u0441\u0435\u0445!"):this.ui.toast(`\u0414\u043E\u0433\u043E\u043D\u044F\u043B\u043A\u0438! \u0411\u0435\u0437\u043B\u0438\u043A\u043E\u043C \u0441\u0442\u0430\u043B(\u0430): ${t.newGhostName}. \u0411\u0435\u0433\u0438!`),Y(this,xt,Ac).call(this),Y(this,xt,yo).call(this);let i=Y(this,xt,Mi).call(this);Y(this,xt,Cr).call(this,i),this.cam.snap(Y(this,xt,Hs).call(this,i))}else t.type==="end"&&Y(this,xt,Pc).call(this,t.result)},sf=function(t){let e=this.round,n=t,i=[];for(let a of this.pumpkins.list)i.push({x:a.x,z:a.z,kind:"pumpkin"});let r=!!e.playerGhost;for(let a of e.agents)a.alive&&a!==n&&(!r||this.mode==="watch")&&i.push({x:a.ctrl.pos.x,z:a.ctrl.pos.z,kind:"ally"});for(let a of e.activeGhosts){if(a.state==="hidden"||a===n)continue;(r||this.mode==="watch"||!a.disguised&&this.world.lineOfSight(n.ctrl.pos.x,n.ctrl.pos.z,a.pos.x,a.pos.z,!0,n.ctrl.pos.y+1.4,a.eyeY))&&i.push({x:a.pos.x,z:a.pos.z,kind:"ghost"})}i.push({x:n.ctrl.pos.x,z:n.ctrl.pos.z,kind:"me"}),this.ui.minimap(n.ctrl.pos,this.cam.yaw,i)},rf=function(){let t=this.round,e=t.playerGhost;if(e){let n=e.ctrl,i=n.phys.dash;this.ui.cooldowns(r=>{if(r==="dash")return{k:n.dashCharges>0?n.dashCd/i.cooldown:1-n.chargeT/i.recharge,n:n.dashCharges};if(r==="mask-hero"||r==="mask-prop")return{k:e.disguised?0:e.disguiseCd/At.ghost.disguise.cd,n:e.disguised?Math.ceil(e.disguise.t):""};if(r==="fly")return{k:1-n.flyEnergy}})}else if(t.player){let n=t.player.ctrl,i=t.player.abilities;this.ui.cooldowns(r=>{if(r==="dash")return{k:n.dashCd/n.phys.dash.cooldown};let a=i.get(r);return{k:a?a.cdLeft/i.cooldown(a):0}})}},af=function(t){let e=null;for(let n of this.ghosts){if(n.state==="hidden")continue;let i=Math.hypot(n.pos.x-t.x,n.pos.z-t.z);(!e||i<e.d)&&(e={g:n,d:i})}return e},ni=function(){var i,r,a;let t=Math.max(1,document.documentElement.clientWidth||innerWidth),e=Math.max(1,document.documentElement.clientHeight||innerHeight),n=t!==e?t>e:typeof window.orientation=="number"?Math.abs(window.orientation)===90:!!((a=(r=(i=window.screen)==null?void 0:i.orientation)==null?void 0:r.type)!=null&&a.startsWith("landscape"));document.documentElement.classList.toggle("landscape",n),requestAnimationFrame(()=>{let o=Math.max(1,document.documentElement.clientWidth||innerWidth),l=Math.max(1,document.documentElement.clientHeight||innerHeight);this.camera.aspect=o/l,this.camera.updateProjectionMatrix(),this.insetCamera.aspect=o/l,this.insetCamera.updateProjectionMatrix(),this.renderer.setSize(o,l,!1)})};var Rr=()=>new Promise(s=>setTimeout(s,0));async function c_(){window.__bootStage="\u0433\u043E\u0442\u043E\u0432\u0438\u043C \u0438\u0433\u0440\u0443";try{typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.roundRect&&(CanvasRenderingContext2D.prototype.roundRect=function(t,e,n,i,r=0){return r=Math.min(Array.isArray(r)?r[0]||0:r,n/2,i/2),this.moveTo(t+r,e),this.arcTo(t+n,e,t+n,e+i,r),this.arcTo(t+n,e+i,t,e+i,r),this.arcTo(t,e+i,t,e,r),this.arcTo(t,e,t+n,e,r),this.closePath(),this}),await new vo(document.getElementById("scene")).start(),window.__started=!0}catch(s){window.__bootFailed=!0,console.error(s);let t=document.querySelector(".load-text");t&&(t.textContent="\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0438\u0433\u0440\u0443: "+((s==null?void 0:s.message)||String(s)))}}window.__bootEntered=!0;c_();})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
