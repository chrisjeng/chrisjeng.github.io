/*1468517652,,JIT Construction: v2444965,en_US*/

/**
 * Copyright Facebook Inc.
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
try {window.FB|| (function(window, fb_fif_window) {  var apply = Function.prototype.apply;  function bindContext(fn, thisArg) {    return function _sdkBound() {      return apply.call(fn, thisArg, arguments);    };  }  var global = {    __type: 'JS_SDK_SANDBOX',    window: window,    document: window.document  };  var sandboxWhitelist = [    'setTimeout',    'setInterval',    'clearTimeout',    'clearInterval'  ];  for (var i = 0; i < sandboxWhitelist.length; i++) {    global[sandboxWhitelist[i]] = bindContext(      window[sandboxWhitelist[i]],      window    );  }  (function() {    var self = window;    var __DEV__ = 0;    function emptyFunction() {};    var __transform_includes = {};    var __annotator, __bodyWrapper;    var __w, __t;    var undefined;    with (this) {      /** js/downstream/polyfill/GenericFunctionVisitor.js */



























(function(){
var a={},

b=function(i,j){
if(!i&&!j)
return null;


var k={};
if(typeof i!=='undefined')
k.type=i;


if(typeof j!=='undefined')
k.signature=j;


return k;},


c=function(i,j){
return b
(i&&/^[A-Z]/.test(i)?i:undefined,
j&&(j.params&&j.params.length||j.returns)?
'function('+
(j.params?j.params.map(function(k){
return (/\?/.test(k)?
'?'+k.replace('?',''):
k);}).
join(','):'')+
')'+
(j.returns?':'+j.returns:''):
undefined);},



d=function(i,j,k){
return i;},


e=function(i,j,k){
if('sourcemeta' in __transform_includes)
i.__SMmeta=j;


if('typechecks' in __transform_includes){
var l=c(j?j.name:undefined,k);
if(l)
__w(i,l);}


return i;},


f=function(i,j,k){
return k.apply(i,j);},


g=function(i,j,k,l){
if(l&&l.params)
__t.apply(i,l.params);


var m=k.apply(i,j);

if(l&&l.returns)
__t([m,l.returns]);


return m;},


h=function(i,j,k,l,m){
if(m){
if(!m.callId)


m.callId=m.module+':'+
(m.line||0)+':'+
(m.column||0);

var n=m.callId;
a[n]=(a[n]||0)+1;}

return k.apply(i,j);};



if(typeof __transform_includes==='undefined'){
__annotator=d;
__bodyWrapper=f;}else{

__annotator=e;

if('codeusage' in __transform_includes){
__annotator=d;
__bodyWrapper=h;
__bodyWrapper.getCodeUsage=function(){return a;};
__bodyWrapper.clearCodeUsage=function(){a={};};}else
if('typechecks' in __transform_includes){
__bodyWrapper=g;}else 

__bodyWrapper=f;}})();

/** js/downstream/polyfill/TypeChecker.js */
__t=function(a){return a[0];};__w=function(a){return a;};

/** js/downstream/require/require-lite.js */




























var require,__d;
(function(a){
var b={},c={},
d=
['global','require','requireDynamic','requireLazy','module','exports'];

require=function(e,f){
if(c.hasOwnProperty(e))
return c[e];

if(!b.hasOwnProperty(e)){
if(f)
return null;

throw new Error('Module '+e+' has not been defined');}

var g=b[e],
h=g.deps,
i=g.factory.length,
j,
k=[];

for(var l=0;l<i;l++){
switch(h[l]){
case 'module':j=g;break;
case 'exports':j=g.exports;break;
case 'global':j=a;break;
case 'require':j=require;break;
case 'requireDynamic':j=null;break;
case 'requireLazy':j=null;break;
default:j=require.call(null,h[l]);}

k.push(j);}

g.factory.apply(a,k);
c[e]=g.exports;
return g.exports;};




require.__markCompiled=function(){};

__d=function(e,f,g,
h){
if(typeof g=='function'){
b[e]=
{factory:g,
deps:d.concat(f),
exports:{}};



if(h===3)
require.call(null,e);}else 


c[e]=g;};})


(this);

/** js/sdk/ES5Array.js */




__d('ES5Array',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();

var h={};

h.isArray=function(i){
return Object.prototype.toString.call(i)=='[object Array]';};


f.exports=h;},null);

/** js/sdk/ES5ArrayPrototype.js */




__d('ES5ArrayPrototype',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();

var h={};




h.map=function(i,j){
if(typeof i!='function')
throw new TypeError();


var k,
l=this.length,
m=new Array(l);
for(k=0;k<l;++k)
if(k in this)
m[k]=i.call(j,this[k],k,this);



return m;};





h.forEach=function(i,j){
h.map.call(this,i,j);};





h.filter=function(i,j){
if(typeof i!='function')
throw new TypeError();


var k,l,m=this.length,n=[];
for(k=0;k<m;++k)
if(k in this){

l=this[k];
if(i.call(j,l,k,this))
n.push(l);}




return n;};





h.every=function(i,j){
if(typeof i!='function')
throw new TypeError();

var k=new Object(this),
l=k.length;
for(var m=0;m<l;m++)
if(m in k)
if(!i.call(j,k[m],m,k))
return false;



return true;};





h.some=function(i,j){
if(typeof i!='function')
throw new TypeError();

var k=new Object(this),
l=k.length;
for(var m=0;m<l;m++)
if(m in k)
if(i.call(j,k[m],m,k))
return true;



return false;};





h.indexOf=function(i,j){
var k=this.length;
j|=0;

if(j<0)
j+=k;


for(;j<k;j++)
if(j in this&&this[j]===i)
return j;


return -1;};


f.exports=h;},null);

/** js/sdk/ES5Date.js */




__d("ES5Date",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();

var h={};
h.now=function(){
return new Date().getTime();};


f.exports=h;},null);

/** js/sdk/ES5FunctionPrototype.js */




__d('ES5FunctionPrototype',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();

var h={};









h.bind=function(i){
if(typeof this!='function')
throw new TypeError('Bind must be called on a function');

var j=this,
k=Array.prototype.slice.call(arguments,1);
function l(){
return j.apply
(i,
k.concat(Array.prototype.slice.call(arguments)));}

l.displayName='bound:'+(j.displayName||j.name||'(?)');
l.toString=function m(){
return 'bound: '+j;};

return l;};


f.exports=h;},null);

/** js/ie8DontEnum.js */




__d('ie8DontEnum',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();



var h=
['toString',
'toLocaleString',
'valueOf',
'hasOwnProperty',
'isPrototypeOf',
'prototypeIsEnumerable',
'constructor'],


i={}.hasOwnProperty,





j=function(){};

if({toString:true}.propertyIsEnumerable('toString'))
j=function(k,l){
for(var m=0;m<h.length;m++){
var n=h[m];
if(i.call(k,n))
l(n);}};





f.exports=j;},null);

/** js/sdk/ES5Object.js */




__d('ES5Object',['ie8DontEnum'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();


var i={}.hasOwnProperty,

j={};



function k(){}






j.create=function(l){






var m=typeof l;
if(m!='object'&&m!='function')
throw new TypeError('Object prototype may only be a Object or null');

k.prototype=l;
return new k();};







j.keys=function(l){
var m=typeof l;
if(m!='object'&&m!='function'||l===null)
throw new TypeError('Object.keys called on non-object');


var n=[];
for(var o in l)
if(i.call(l,o))
n.push(o);




h(l,function(p){return n.push(p);});

return n;};


f.exports=j;},null);

/** js/sdk/ES5StringPrototype.js */




__d('ES5StringPrototype',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();

var h={};






h.trim=function(){
if(this==null)
throw new TypeError('String.prototype.trim called on null or undefined');

return String.prototype.replace.call(this,/^\s+|\s+$/g,'');};


h.startsWith=function(i){
var j=String(this);
if(this==null)
throw new TypeError
('String.prototype.startsWith called on null or undefined');

var k=arguments.length>1?Number(arguments[1]):0;
if(isNaN(k))
k=0;

var l=Math.min(Math.max(k,0),j.length);
return j.indexOf(String(i),k)==l;};


h.endsWith=function(i){
var j=String(this);
if(this==null)
throw new TypeError
('String.prototype.endsWith called on null or undefined');

var k=j.length,
l=String(i),
m=arguments.length>1?Number(arguments[1]):k;
if(isNaN(m))
m=0;

var n=Math.min(Math.max(m,0),k),
o=n-l.length;
if(o<0)
return false;

return j.lastIndexOf(l,o)==o;};


h.includes=function(i){
if(this==null)
throw new TypeError
('String.prototype.contains called on null or undefined');

var j=String(this),
k=arguments.length>1?Number(arguments[1]):0;
if(isNaN(k))
k=0;

return j.indexOf(String(i),k)!=-1;};


h.contains=h.includes;

h.repeat=function(i){
if(this==null)
throw new TypeError
('String.prototype.repeat called on null or undefined');

var j=String(this),
k=i?Number(i):0;
if(isNaN(k))
k=0;

if(k<0||k===Infinity)
throw RangeError();

if(k===1)
return j;

if(k===0)
return '';

var l='';
while(k){
if(k&1)
l+=j;

if(k>>=1)
j+=j;}


return l;};


f.exports=h;},null);

/** js/sdk/ES6Array.js */




__d('ES6Array',[],function a(b,c,d,e,f,g){

'use strict';if(c.__markCompiled)c.__markCompiled();

var h=

{from:function(i){
if(i==null)
throw new TypeError('Object is null or undefined');



var j=arguments[1],
k=arguments[2],

l=this,
m=Object(i),
n=typeof Symbol==='function'?typeof Symbol==='function'?
Symbol.iterator:'@@iterator':
'@@iterator',
o=typeof j==='function',
p=typeof m[n]==='function',
q=0,
r=void 0,
s=void 0;

if(p){
r=typeof l==='function'?
new l():
[];
var t=m[n](),
u=void 0;

while(!(u=t.next()).done){
s=u.value;

if(o)
s=j.call(k,s,q);


r[q]=s;
q+=1;}


r.length=q;
return r;}


var v=m.length;
if(isNaN(v)||v<0)
v=0;


r=typeof l==='function'?
new l(v):
new Array(v);

while(q<v){
s=m[q];

if(o)
s=j.call(k,s,q);


r[q]=s;

q+=1;}


r.length=q;
return r;}};




f.exports=h;},null);

/** js/sdk/ES6ArrayPrototype.js */




__d('ES6ArrayPrototype',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();




var h=




{find:function(i,j){
if(this==null)
throw new TypeError('Array.prototype.find called on null or undefined');

if(typeof i!=='function')
throw new TypeError('predicate must be a function');


var k=h.findIndex.call(this,i,j);
return k===-1?void 0:this[k];},






findIndex:function(i,j){
if(this==null)
throw new TypeError
('Array.prototype.findIndex called on null or undefined');


if(typeof i!=='function')
throw new TypeError('predicate must be a function');

var k=Object(this),
l=k.length>>>0;
for(var m=0;m<l;m++)
if(i.call(j,k[m],m,k))
return m;


return -1;},






fill:function(i){
if(this==null)
throw new TypeError('Array.prototype.fill called on null or undefined');

var j=Object(this),
k=j.length>>>0,
l=arguments[1],
m=l>>0,
n=m<0?
Math.max(k+m,0):
Math.min(m,k),
o=arguments[2],
p=o===undefined?
k:
o>>0,
q=p<0?
Math.max(k+p,0):
Math.min(p,k);
while(n<q){
j[n]=i;
n++;}

return j;}};



f.exports=h;},null);

/** js/sdk/ES6DatePrototype.js */




__d('ES6DatePrototype',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();

function h(j){
return (j<10?'0':'')+j;}


var i=



{toISOString:function(){
if(!isFinite(this))
throw new Error('Invalid time value');

var j=this.getUTCFullYear();
j=(j<0?'-':j>9999?'+':'')+
('00000'+Math.abs(j)).slice(0<=j&&j<=9999?-4:-6);
return j+
'-'+h(this.getUTCMonth()+1)+
'-'+h(this.getUTCDate())+
'T'+h(this.getUTCHours())+
':'+h(this.getUTCMinutes())+
':'+h(this.getUTCSeconds())+
'.'+(this.getUTCMilliseconds()/1000).toFixed(3).slice(2,5)+
'Z';}};



f.exports=i;},null);

/** js/sdk/ES6Number.js */




__d('ES6Number',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();

var h=Math.pow(2,-52),
i=Math.pow(2,53)-1,
j=-1*i,

k=
{isFinite:function(l){
return typeof l=='number'&&isFinite(l);},


isNaN:function(l){
return typeof l=='number'&&isNaN(l);},


isInteger:function(l){
return this.isFinite(l)&&
Math.floor(l)===l;},


isSafeInteger:function(l){
return this.isFinite(l)&&
l>=this.MIN_SAFE_INTEGER&&
l<=this.MAX_SAFE_INTEGER&&
Math.floor(l)===l;},


EPSILON:h,
MAX_SAFE_INTEGER:i,
MIN_SAFE_INTEGER:j};


f.exports=k;},null);

/** js/sdk/ES6Object.js */




__d('ES6Object',['ie8DontEnum'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();


var i={}.hasOwnProperty,

j=





{assign:function(k){
if(k==null)
throw new TypeError('Object.assign target cannot be null or undefined');


k=Object(k);for(var l=arguments.length,m=Array(l>1?l-1:0),n=1;n<l;n++)m[n-1]=arguments[n];

for(var o=0;o<m.length;o++){
var p=m[o];

if(p==null)
continue;


p=Object(p);

for(var q in p)
if(i.call(p,q))
k[q]=p[q];




h(p,function(r){return k[r]=p[r];});}


return k;},







is:function(k,l){
if(k===l){

return k!==0||1/k===1/l;}else 


return k!==k&&l!==l;}};




f.exports=j;},null);

/** js/sdk/ES7Object.js */




__d('ES7Object',['ie8DontEnum'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();


var i={}.hasOwnProperty,

j={};






j.entries=function(k){

if(k==null)
throw new TypeError('Object.entries called on non-object');


var l=[];
for(var m in k)
if(i.call(k,m))
l.push([m,k[m]]);




h(k,function(n){return l.push([n,k[n]]);});

return l;};







j.values=function(k){

if(k==null)
throw new TypeError('Object.values called on non-object');


var l=[];
for(var m in k)
if(i.call(k,m))
l.push(k[m]);




h(k,function(n){return l.push(k[n]);});

return l;};


f.exports=j;},null);

/** js/sdk/ES7StringPrototype.js */




__d('ES7StringPrototype',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();

var h={};

h.trimLeft=function(){
return this.replace(/^\s+/,'');};


h.trimRight=function(){
return this.replace(/\s+$/,'');};


f.exports=h;},null);

/** js/third_party/json3/json3.js */
/**
 * @providesModule JSON3
 * @preserve-header
 *
 *! JSON v3.2.3 | http://bestiejs.github.com/json3 | Copyright 2012, Kit Cambridge | http://kit.mit-license.org
 */





__d("JSON3",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();
(function(){

var h={}.toString,i,j,k,
l=f.exports={},


m='{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}',



n,o,p,q,r,
s,t,u,v,w,x,y,z,aa,ba,


ca=new Date(-3509827334573292),da,ea,fa;




try{ca=ca.getUTCFullYear()==-109252&&ca.getUTCMonth()===0&&ca.getUTCDate()==1&&



ca.getUTCHours()==10&&ca.getUTCMinutes()==37&&ca.getUTCSeconds()==6&&ca.getUTCMilliseconds()==708;}catch(
ga){}


if(!ca){
da=Math.floor;


ea=[0,31,59,90,120,151,181,212,243,273,304,334];


fa=function(ha,ia){
return ea[ia]+365*(ha-1970)+da((ha-1969+(ia=+(ia>1)))/4)-da((ha-1901+ia)/100)+da((ha-1601+ia)/400);};}



if(typeof JSON=="object"&&JSON){


l.stringify=JSON.stringify;
l.parse=JSON.parse;}



if((n=typeof l.stringify=="function"&&!fa)){

(ca=function(){
return 1;}).
toJSON=ca;

try{n=


l.stringify(0)==="0"&&


l.stringify(new Number())==="0"&&
l.stringify(new String())=='""'&&




l.stringify(h)===k&&


l.stringify(k)===k&&


l.stringify()===k&&





l.stringify(ca)==="1"&&
l.stringify([ca])=="[1]"&&


l.stringify([k])=="[null]"&&

l.stringify(null)=="null"&&





l.stringify([k,h,null])=="[null,null,null]"&&


l.stringify({result:[ca,true,false,null,"\0\b\n\f\r\t"]})==m&&

l.stringify(null,ca)==="1"&&
l.stringify([1,2],null,1)=="[\n 1,\n 2\n]"&&


l.stringify(new Date(-8.64e+15))=='"-271821-04-20T00:00:00.000Z"'&&

l.stringify(new Date(8.64e+15))=='"+275760-09-13T00:00:00.000Z"'&&


l.stringify(new Date(-62198755200000))=='"-000001-01-01T00:00:00.000Z"'&&


l.stringify(new Date(-1))=='"1969-12-31T23:59:59.999Z"';}catch(
ga){
n=false;}}




if(typeof l.parse=="function")




try{if(l.parse("0")===0&&!l.parse(false)){

ca=l.parse(m);
if((s=ca.A.length==5&&ca.A[0]==1)){


try{s=!l.parse('"\t"');}catch(
ga){}
if(s)




try{s=l.parse("01")!=1;}catch(
ga){}}}}catch(



ga){
s=false;}




ca=m=null;

if(!n||!s){


if(!(i={}.hasOwnProperty))
i=function(ha){
var ia={},ja;
if((ia.__proto__=null,ia.__proto__=


{toString:1},
ia).toString!=h){


i=function(ka){



var la=this.__proto__,ma=ka in (this.__proto__=null,this);

this.__proto__=la;
return ma;};}else{



ja=ia.constructor;


i=function(ka){
var la=(this.constructor||ja).prototype;
return ka in this&&!(ka in la&&this[ka]===la[ka]);};}


ia=null;
return i.call(this,ha);};





j=function(ha,ia){
var ja=0,ka,la,ma,na;




(ka=function(){
this.valueOf=0;}).
prototype.valueOf=0;


la=new ka();
for(ma in la)

if(i.call(la,ma))
ja++;


ka=la=null;


if(!ja){

la=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"];


na=function(oa,pa){
var qa=h.call(oa)=="[object Function]",ra,sa;
for(ra in oa)


if(!(qa&&ra=="prototype")&&i.call(oa,ra))
pa(ra);



for(sa=la.length;ra=la[--sa];i.call(oa,ra)&&pa(ra));};}else

if(ja==2){

na=function(oa,pa){

var qa={},ra=h.call(oa)=="[object Function]",sa;
for(sa in oa)



if(!(ra&&sa=="prototype")&&!i.call(qa,sa)&&(qa[sa]=1)&&i.call(oa,sa))
pa(sa);};}else 





na=function(oa,pa){
var qa=h.call(oa)=="[object Function]",ra,sa;
for(ra in oa)
if(!(qa&&ra=="prototype")&&i.call(oa,ra)&&!(sa=ra==="constructor"))
pa(ra);




if(sa||i.call(oa,(ra="constructor")))
pa(ra);};



return na(ha,ia);};








if(!n){

o=
{"\\":"\\\\",
'"':'\\"',
"\b":"\\b",
"\f":"\\f",
"\n":"\\n",
"\r":"\\r",
"\t":"\\t"};




p=function(ha,ia){


return ("000000"+(ia||0)).slice(-ha);};






q=function(ha){
var ia='"',ja=0,ka;
for(;ka=ha.charAt(ja);ja++)


ia+='\\"\b\f\n\r\t'.indexOf(ka)>-1?o[ka]:


ka<" "?"\\u00"+p(2,ka.charCodeAt(0).toString(16)):ka;

return ia+'"';};




r=function(ha,ia,ja,ka,la,ma,na){
var oa=ia[ha],pa,qa,ra,sa,ta,ua,va,wa,xa,ya,za,ab,bb,cb,db;
if(typeof oa=="object"&&oa){
pa=h.call(oa);
if(pa=="[object Date]"&&!i.call(oa,"toJSON")){
if(oa>-1/0&&oa<1/0){



if(fa){



sa=da(oa/86400000);
for(qa=da(sa/365.2425)+1970-1;fa(qa+1,0)<=sa;qa++);
for(ra=da((sa-fa(qa,0))/30.42);fa(qa,ra+1)<=sa;ra++);
sa=1+sa-fa(qa,ra);




ta=(oa%86400000+86400000)%86400000;


ua=da(ta/3600000)%24;
va=da(ta/60000)%60;
wa=da(ta/1000)%60;
xa=ta%1000;}else{

qa=oa.getUTCFullYear();
ra=oa.getUTCMonth();
sa=oa.getUTCDate();
ua=oa.getUTCHours();
va=oa.getUTCMinutes();
wa=oa.getUTCSeconds();
xa=oa.getUTCMilliseconds();}


oa=(qa<=0||qa>=10000?(qa<0?"-":"+")+p(6,qa<0?-qa:qa):p(4,qa))+
"-"+p(2,ra+1)+"-"+p(2,sa)+


"T"+p(2,ua)+":"+p(2,va)+":"+p(2,wa)+

"."+p(3,xa)+"Z";}else 

oa=null;}else

if(typeof oa.toJSON=="function"&&((pa!="[object Number]"&&pa!="[object String]"&&pa!="[object Array]")||i.call(oa,"toJSON")))




oa=oa.toJSON(ha);}


if(ja)


oa=ja.call(ia,ha,oa);

if(oa===null)
return "null";

pa=h.call(oa);
if(pa=="[object Boolean]"){

return ""+oa;}else
if(pa=="[object Number]"){


return oa>-1/0&&oa<1/0?""+oa:"null";}else
if(pa=="[object String]")

return q(oa);


if(typeof oa=="object"){


for(bb=na.length;bb--;)
if(na[bb]===oa)

throw TypeError();



na.push(oa);
ya=[];

cb=ma;
ma+=la;
if(pa=="[object Array]"){

for(ab=0,bb=oa.length;ab<bb;db||(db=true),ab++){
za=r(ab,oa,ja,ka,la,ma,na);
ya.push(za===k?"null":za);}

return db?(la?"[\n"+ma+ya.join(",\n"+ma)+"\n"+cb+"]":("["+ya.join(",")+"]")):"[]";}else{




j(ka||oa,function(eb){
var fb=r(eb,oa,ja,ka,la,ma,na);
if(fb!==k)






ya.push(q(eb)+":"+(la?" ":"")+fb);

db||(db=true);});

return db?(la?"{\n"+ma+ya.join(",\n"+ma)+"\n"+cb+"}":("{"+ya.join(",")+"}")):"{}";}


na.pop();}};




l.stringify=function(ha,ia,ja){
var ka,la,ma,na,oa,pa;
if(typeof ia=="function"||typeof ia=="object"&&ia)
if(h.call(ia)=="[object Function]"){
la=ia;}else
if(h.call(ia)=="[object Array]"){

ma={};
for(na=0,oa=ia.length;na<oa;pa=ia[na++],((h.call(pa)=="[object String]"||h.call(pa)=="[object Number]")&&(ma[pa]=1)));}


if(ja)
if(h.call(ja)=="[object Number]"){


if((ja-=ja%1)>0)
for(ka="",ja>10&&(ja=10);ka.length<ja;ka+=" ");}else

if(h.call(ja)=="[object String]")
ka=ja.length<=10?ja:ja.slice(0,10);





return r("",(pa={},pa[""]=ha,pa),la,ma,ka,"",[]);};}




if(!s){
t=String.fromCharCode;


u=
{"\\":"\\",
'"':'"',
"/":"/",
b:"\b",
t:"\t",
n:"\n",
f:"\f",
r:"\r"};



v=function(){
aa=ba=null;
throw SyntaxError();};





w=function(){
var ha=ba,ia=ha.length,ja,ka,la,ma,na;
while(aa<ia){
ja=ha.charAt(aa);
if("\t\r\n ".indexOf(ja)>-1){


aa++;}else
if("{}[]:,".indexOf(ja)>-1){

aa++;
return ja;}else
if(ja=='"'){



for(ka="@",aa++;aa<ia;){
ja=ha.charAt(aa);
if(ja<" "){

v();}else
if(ja=="\\"){


ja=ha.charAt(++aa);
if('\\"/btnfr'.indexOf(ja)>-1){

ka+=u[ja];
aa++;}else
if(ja=="u"){

la=++aa;

for(ma=aa+4;aa<ma;aa++){
ja=ha.charAt(aa);


if(!(ja>="0"&&ja<="9"||ja>="a"&&ja<="f"||ja>="A"&&ja<="F"))

v();}



ka+=t("0x"+ha.slice(la,aa));}else 


v();}else{


if(ja=='"')


break;


ka+=ja;
aa++;}}


if(ha.charAt(aa)=='"'){
aa++;

return ka;}


v();}else{


la=aa;


if(ja=="-"){
na=true;
ja=ha.charAt(++aa);}


if(ja>="0"&&ja<="9"){

if(ja=="0"&&(ja=ha.charAt(aa+1),ja>="0"&&ja<="9"))

v();

na=false;

for(;aa<ia&&(ja=ha.charAt(aa),ja>="0"&&ja<="9");aa++);


if(ha.charAt(aa)=="."){
ma=++aa;

for(;ma<ia&&(ja=ha.charAt(ma),ja>="0"&&ja<="9");ma++);
if(ma==aa)

v();

aa=ma;}


ja=ha.charAt(aa);
if(ja=="e"||ja=="E"){


ja=ha.charAt(++aa);
if(ja=="+"||ja=="-")
aa++;


for(ma=aa;ma<ia&&(ja=ha.charAt(ma),ja>="0"&&ja<="9");ma++);
if(ma==aa)

v();

aa=ma;}


return +ha.slice(la,aa);}


if(na)
v();


if(ha.slice(aa,aa+4)=="true"){
aa+=4;
return true;}else
if(ha.slice(aa,aa+5)=="false"){
aa+=5;
return false;}else
if(ha.slice(aa,aa+4)=="null"){
aa+=4;
return null;}


v();}}




return "$";};



x=function(ha){
var ia,ja,ka;
if(ha=="$")

v();

if(typeof ha=="string"){
if(ha.charAt(0)=="@")

return ha.slice(1);


if(ha=="["){

ia=[];
for(;;ja||(ja=true)){
ha=w();

if(ha=="]")
break;




if(ja)
if(ha==","){
ha=w();
if(ha=="]")

v();}else 



v();



if(ha==",")
v();

ia.push(x(ha));}

return ia;}else
if(ha=="{"){

ia={};
for(;;ja||(ja=true)){
ha=w();

if(ha=="}")
break;



if(ja)
if(ha==","){
ha=w();
if(ha=="}")

v();}else 



v();





if(ha==","||typeof ha!="string"||ha.charAt(0)!="@"||w()!=":")
v();

ia[ha.slice(1)]=x(w());}

return ia;}


v();}

return ha;};



z=function(ha,ia,ja){
var ka=y(ha,ia,ja);
if(ka===k){
delete ha[ia];}else 

ha[ia]=ka;};






y=function(ha,ia,ja){
var ka=ha[ia],la;
if(typeof ka=="object"&&ka)
if(h.call(ka)=="[object Array]"){
for(la=ka.length;la--;)
z(ka,la,ja);}else 





j(ka,function(ma){
z(ka,ma,ja);});



return ja.call(ha,ia,ka);};



l.parse=function(ha,ia){
aa=0;
ba=ha;
var ja=x(w());

if(w()!="$")
v();


aa=ba=null;
return ia&&h.call(ia)=="[object Function]"?y((ca={},ca[""]=ja,ca),"",ia):ja;};}}}).



call(this);},

null);

/** js/sdk/ES.js */







__d('ES',['ES5ArrayPrototype','ES5FunctionPrototype','ES5StringPrototype','ES5Array','ES5Object','ES5Date','JSON3','ES6Array','ES6Object','ES6ArrayPrototype','ES6DatePrototype','ES6Number','ES7StringPrototype','ES7Object'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();
















var v={}.toString,

w=


{'JSON.stringify':n.stringify,
'JSON.parse':n.parse},


x=
{'Array.prototype':h,
'Function.prototype':i,
'String.prototype':j,
Object:l,
Array:k,
Date:m},


y=
{Object:p,
'Array.prototype':q,
'Date.prototype':r,
Number:s,
Array:o},


z=
{Object:u,
'String.prototype':t};


function aa(ca){


for(var da in ca){
if(!ca.hasOwnProperty(da))continue;
var ea=ca[da],


fa=da.split('.');
if(fa.length===2){
var ga=fa[0],ha=fa[1];
if(!ga||!ha||!window[ga]||!window[ga][ha]){
var ia=ga?window[ga]:'-',
ja=ga&&window[ga]&&ha?
window[ga][ha]:
'-';
throw new Error
('Unexpected state (t11975770): '+
(ga+', '+ha+', '+ia+', '+ja+', '+da));}}




var ka=fa.length===2?
window[fa[0]][fa[1]]:
window[da];


for(var la in ea){
if(!ea.hasOwnProperty(la))continue;


if(typeof ea[la]!=='function'){
w[da+'.'+la]=ea[la];
continue;}


var ma=ka[la];


w[da+'.'+la]=
ma&&/\{\s+\[native code\]\s\}/.test(ma)?
ma:
ea[la];}}}





aa(x);
aa(y);
aa(z);

function ba(ca,da,ea){

var fa=ea?
v.call(ca).slice(8,-1)+'.prototype':
ca,


ga=w[fa+'.'+da]||ca[da];


if(typeof ga==='function'){for(var ha=arguments.length,ia=Array(ha>3?ha-3:0),ja=3;ja<ha;ja++)ia[ja-3]=arguments[ja];
return ga.apply(ca,ia);}else
if(ga)

return ga;


throw new Error('Polyfill '+fa+' does not have implementation of '+da);}


f.exports=ba;},null);

/** js/sdk/sdk.babelHelpers.js */




__d('sdk.babelHelpers',['ES5FunctionPrototype','ES5Object','ES6Object'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();











var k={},
l=Object.prototype.hasOwnProperty;




k.inherits=function(m,n){
j.assign(m,n);
m.prototype=i.create(n&&n.prototype);
m.prototype.constructor=m;
m.__superConstructor__=n;
return n;};





k._extends=j.assign;




k['extends']=k._extends;




k.objectWithoutProperties=function(m,n){
var o={};
for(var p in m){
if(!l.call(m,p)||n.indexOf(p)>=0)
continue;

o[p]=m[p];}

return o;};





k.taggedTemplateLiteralLoose=function(m,n){
m.raw=n;
return m;};





k.bind=h.bind;

f.exports=k;},null);
      var ES = require('ES');      var babelHelpers = require('sdk.babelHelpers');            /** js/downstream/error/eprintf.js */



















__d('eprintf',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();











var h=function(i){
var j=ES(Array.prototype.slice.call(arguments),'map',true,function(m){
return String(m);}),

k=i.split('%s').length-1;

if(k!==j.length-1)

return h('eprintf args number mismatch: %s',ES('JSON','stringify',false,j));


var l=1;
return i.replace(/%s/g,function(m){
return String(j[l++]);});};



f.exports=h;},null);

/** js/downstream/error/ex.js */



















__d('ex',['eprintf'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();

















var i=function(){for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];
k=ES(k,'map',true,function(m){return String(m);});
if(k[0].split('%s').length!==k.length)

return i('ex args number mismatch: %s',ES('JSON','stringify',false,k));





return i._prefix+ES('JSON','stringify',false,k)+i._suffix;};




i._prefix='<![EX[';
i._suffix=']]>';

f.exports=i;},null);

/** js/downstream/core/sprintf.js */


















__d("sprintf",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();










function h(i){for(var j=arguments.length,k=Array(j>1?j-1:0),l=1;l<j;l++)k[l-1]=arguments[l];
var m=0;
return i.replace(/%s/g,function(n){return k[m++];});}


f.exports=h;},null);

/** js/downstream/core/invariant.js */

















__d('invariant',['ex','sprintf'],function a(b,c,d,e,f,g,h,i){



'use strict';if(c.__markCompiled)c.__markCompiled();




var j=h;














function k(l,m){






if(!l){
var n=void 0;
if(m===undefined){
n=new Error
('Minified exception occurred; use the non-minified dev environment '+
'for the full error message and additional helpful warnings.');}else{


var o=[m];
for(var p=2,q=arguments.length;p<q;p++)
o.push(arguments[p]);

n=new Error(j.apply(null,o));
n.name='Invariant Violation';
n.messageWithParams=o;}


n.framesToPop=1;
throw n;}}



f.exports=k;},null);

/** js/downstream/fbjs/functional/forEachObject.js */


















__d('forEachObject',[],function a(b,c,d,e,f,g){

'use strict';if(c.__markCompiled)c.__markCompiled();

var h=Object.prototype.hasOwnProperty;



















function i(j,k,l){
for(var m in j)
if(h.call(j,m))
k.call(l,j[m],m,j);}




f.exports=i;},null);

/** js/downstream/page/TimerStorage.js */

















__d('TimerStorage',['forEachObject'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();







var i=
{ANIMATION_FRAME:'ANIMATION_FRAME',
IDLE_CALLBACK:'IDLE_CALLBACK',
IMMEDIATE:'IMMEDIATE',
INTERVAL:'INTERVAL',
TIMEOUT:'TIMEOUT'},


j={};

h(i,function(l,m){return j[m]={};});

var k=
{set:function(l,m){
j[l][m]=true;},


unset:function(l,m){
delete j[l][m];},


clearAll:function(l,m){
Object.keys(j[l]).forEach(m);
j[l]={};}};



Object.assign(k,i);

f.exports=k;},


null);

/** js/downstream/struct/CircularBuffer.js */

















__d('CircularBuffer',['invariant'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();




function i(j){'use strict';

!(j>0)?h(0,
'Buffer size should be a positive integer'):void 0;

this.$CircularBuffer_size=j;
this.$CircularBuffer_head=0;
this.$CircularBuffer_buffer=[];}i.prototype.


write=function(j){'use strict';
if(this.$CircularBuffer_buffer.length<this.$CircularBuffer_size){
this.$CircularBuffer_buffer.push(j);}else{

this.$CircularBuffer_buffer[this.$CircularBuffer_head]=j;
this.$CircularBuffer_head++;
this.$CircularBuffer_head%=this.$CircularBuffer_size;}

return this;};i.prototype.


read=function(){'use strict';
return this.$CircularBuffer_buffer.slice(this.$CircularBuffer_head).concat
(this.$CircularBuffer_buffer.slice(0,this.$CircularBuffer_head));};i.prototype.



clear=function(){'use strict';
this.$CircularBuffer_head=0;
this.$CircularBuffer_buffer=[];
return this;};



f.exports=i;},null);

/** js/modules/Env.js */




__d("Env",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();

var h=
{start:ES("Date","now",false)};




if(b.Env){
ES("Object","assign",false,h,b.Env);




b.Env=undefined;}


f.exports=h;},null);

/** js/downstream/error/erx.js */



















__d('erx',['ex'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();



















var i=function(j){
if(typeof j!=='string')

return j;


var k=ES(j,'indexOf',true,h._prefix),
l=j.lastIndexOf(h._suffix);
if(k<0||l<0)

return [j];


var m=k+h._prefix.length,
n=l+h._suffix.length;
if(m>=l)
return ['erx slice failure: %s',j];


var o=j.substring(0,k),
p=j.substring(n);
j=j.substring(m,l);

var q;

try{q=ES('JSON','parse',false,j);
q[0]=
o+q[0]+p;}catch(
r){
return ['erx parse failure: %s',j];}


return q;};


f.exports=i;},null);

/** js/downstream/core_windowless/removeFromArray.js */



















__d("removeFromArray",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();




function h(i,j){
var k=ES(i,"indexOf",true,j);
if(k!==-1)
i.splice(k,1);}



f.exports=h;},null);

/** js/downstream/error/ErrorUtils.js */



















__d('ErrorUtils',['Env','eprintf','erx','removeFromArray'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();









var l='<anonymous guard>',
m='<generated guard>',
n=typeof window==='undefined'?
'<self.onerror>':
'<window.onerror>',

o=/^https?:\/\//i,
p=/^Type Mismatch for/,




q=
['Unknown script code',
'Function code',
'eval code'],

r=
new RegExp('(.*?)\\s(?:'+q.join('|')+')$'),

s=/(.*)[@\s][^\s]+$/,


t=[],


u=void 0,


v=[],
w=50,

x=[],


y=false,



z=false,

aa=location.search.includes('nocatch');





function ba(fa){
if(!fa)
return [];

return ES(fa.split(/\n\n/)[0].
replace(/[\(\)]|\[.*?\]|^\w+:\s.*?\n/g,'').
split('\n'),'map',true,
function(ga){

ga=ES(ga,'trim',true);


var ha=void 0,
ia=void 0,
ja=ga.match(/:(\d+)(?::(\d+))?$/);
if(ja){
ha=ja[1];
ia=ja[2];
ga=ga.slice(0,-ja[0].length);}




var ka=void 0,
la=ga.match(r)||
ga.match(s);
if(la){
ga=ga.substring(la[1].length+1);
var ma=
la[1].match(/(?:at)?\s*(.*)(?:[^\s]+|$)/);
ka=ma?ma[1]:'';}


var na=
{column:ia,
identifier:ka,
line:ha,
script:ga};


if(u)
u(na);



na.text='    at'+
(na.identifier?' '+na.identifier+' (':' ')+
na.script+
(na.line?':'+na.line:'')+
(na.column?':'+na.column:'')+
(na.identifier?')':'');

return na;});}



function ca(fa){
x.unshift(fa);
y=true;}


function da(){
x.shift();
y=x.length!==0;}


var ea=
{ANONYMOUS_GUARD_TAG:l,
GENERATED_GUARD_TAG:m,
GLOBAL_ERROR_HANDLER_TAG:n,
history:v,









addListener:function(fa,ga){
t.push(fa);

if(!ga)
ES(v,'forEach',true,fa);},








removeListener:function(fa){
k(t,fa);},







setSourceResolver:function(fa){
u=fa;},














applyWithGuard:function(fa,ga,ha,ia,ja){
ca(ja||l);




if(h.nocatch)
aa=true;


if(aa){
var ka=void 0;

try{ka=fa.apply(ga,ha||[]);}finally{




da();}

return ka;}




try{return fa.apply(ga,ha||[]);}catch(
la){
var ma=ea.normalizeError(la);
if(ia)
ia(ma);



if(fa)
ma.callee=fa.toString().substring(0,100);

if(ha)
ma.args=ES('Array','from',false,ha).toString().substring(0,100);

ma.guard=x[0];
ma.guardList=x.slice();












ea.reportError(ma);}finally{

da();}},














guard:function(fa,ga,ha){
ga=ga||fa.name||m;
function ia(){
return ea.applyWithGuard
(fa,
ha||this,
arguments,
null,
ga);}



if(fa.__SMmeta)
ia.__SMmeta=fa.__SMmeta;






return ia;},



inGuard:function(){
return y;},










normalizeError:function(fa){
if(!fa){
return {};}else
if(fa._originalError)
return fa;


var ga=ba(fa.stackTrace||fa.stack),
ha=false;

if(fa.framesToPop){

var ia=fa.framesToPop,
ja=void 0;
while(ia>0&&ga.length>0){
ja=ga.shift();
ia--;
ha=true;}


if(p.test(fa.message)&&
fa.framesToPop===2&&
ja)






if(o.test(ja.script))
fa.message+=' at '+ja.script+
(ja.line?':'+ja.line:'')+
(ja.column?':'+ja.column:'');


delete fa.framesToPop;}


var ka=
{line:
fa.lineNumber||
fa.line,
column:
fa.columnNumber||
fa.column,
name:fa.name,
message:fa.message,
messageWithParams:fa.messageWithParams,
type:fa.type,
script:
fa.fileName||
fa.sourceURL||
fa.script,
stack:ES(ga,'map',true,function(ma){return ma.text;}).join('\n'),
stackFrames:ga,
guard:fa.guard,
guardList:fa.guardList,
extra:fa.extra,
snapshot:fa.snapshot};


if(typeof ka.message==='string'&&!ka.messageWithParams){
ka.messageWithParams=j(ka.message);
ka.message=i.apply(b,ka.messageWithParams);}else{

ka.messageObject=ka.message;
ka.message=String(ka.message);}




if(u)
u(ka);




if(ha){
delete ka.script;
delete ka.line;
delete ka.column;}



if(ga[0]){
ka.script=ka.script||ga[0].script;
ka.line=ka.line||ga[0].line;
ka.column=ka.column||ga[0].column;}



ka._originalError=fa;


for(var la in ka)
if(ka[la]==null)
delete ka[la];


return ka;},












onerror:function(fa,ga,ha,ia,ja){
ja=ja||{};
ja.message=ja.message||fa;
ja.script=ja.script||ga;
ja.line=ja.line||ha;
ja.column=ja.column||ia;
ja.guard=n;
ja.guardList=[n];
ea.reportError(ja,true);},






reportError:function(fa,ga){
if(z)


return false;




if(x.length>0){
fa.guard=fa.guard||x[0];
fa.guardList=x.slice();}


fa=ea.normalizeError(fa);
!ga;










if(v.length>w)
v.splice(w/2,1);

v.push(fa);

z=true;
for(var ha=0;ha<t.length;ha++)

try{t[ha](fa);}catch(
ia){
}


z=false;
return true;}};



b.onerror=ea.onerror;

f.exports=b.ErrorUtils=ea;


if(typeof __t==='function'&&__t.setHandler)
__t.setHandler(ea.reportError);},3);

/** js/downstream/logging/LogBuffer.js */














































__d('LogBuffer',['CircularBuffer'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();







var i=b.setTimeout.nativeBackup||b.setTimeout,



j=5000,


k={},

l={},

m=
{write:function(n,o){
var p=
k[n]=
k[n]||new h(j);

p.write(o);

if(l[n])
ES(l[n],'forEach',true,function(q){

try{q(o);}catch(
r){}});},






read:function(n){
if(!k[n]){
return [];}else 

return k[n].read();},



tail:function(n,o){
if(typeof o!=='function')
return;


l[n]=l[n]||[];
l[n].push(o);

if(k[n]){
var p=k[n];

ES(p.read(),'forEach',true,function(q){

try{o(q);}catch(
r){}});}},






clear:function(n){
if(k[n])

i(function(){
k[n].clear();},
0);}};




f.exports=m;},null);

/** js/downstream/core/ExecutionEnvironment.js */

















__d('ExecutionEnvironment',[],function a(b,c,d,e,f,g){

'use strict';if(c.__markCompiled)c.__markCompiled();

var h=
!!(typeof window!=='undefined'&&
window.document&&
window.document.createElement),








i=

{canUseDOM:h,

canUseWorkers:typeof Worker!=='undefined',

canUseEventListeners:
h&&!!(window.addEventListener||window.attachEvent),

canUseViewport:h&&!!window.screen,

isInWorker:!h};



f.exports=i;},null);

/** js/downstream/performance/performance.js */


















__d('performance',['ExecutionEnvironment'],function a(b,c,d,e,f,g,h){

'use strict';if(c.__markCompiled)c.__markCompiled();



var i;

if(h.canUseDOM)
i=
window.performance||
window.msPerformance||
window.webkitPerformance;


f.exports=i||{};},null);

/** js/downstream/performance/performanceAbsoluteNow.js */



























__d('performanceAbsoluteNow',['performance'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();



var i;


if(h.now&&
h.timing&&
h.timing.navigationStart){

var j=h.timing.navigationStart;
i=function(){return h.now()+j;};}else 

i=function(){return ES('Date','now',false);};


f.exports=i;},null);

/** js/downstream/error/wrapFunction.js */



























__d('wrapFunction',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();

var h={},

i=function j
(k,
l,
m){

var n=l||'default';
return function(){
var o=n in h?h[n](k,m):k;
return o.apply(this,arguments);};};



i.setWrapper=
function(j){

var k=arguments.length<=1||arguments[1]===undefined?'default':arguments[1];
h[k]=j;};


f.exports=i;},null);

/** js/downstream/core/TimeSlice.js */



















__d('TimeSlice',['CircularBuffer','ErrorUtils','Env','LogBuffer','invariant','performanceAbsoluteNow','wrapFunction'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();











var o=1,


p=false,
q=0,
r=void 0,
s=[],
t=void 0,


u=0,
v=1,
w=2,
x=u,
y=new h(100),
z=0,
aa=0,
ba='stackTraceLimit' in Error,
ca=30000,

da=
{_enabled:false,
_enabledStartTimeMs:null,
_delayMs:33,
_idleGapThresholdMs:60,
_lastEvent:{type:'unknown',timeMs:null},
_intervalHandle:null,
_ignoredNames:{},

enable:function(){
if(!this._enabled){
var fa=j.timeslice_heartbeat_config||{};
this._enabled=true;
this._enabledStartTimeMs=m();
this._delayMs=fa.pollIntervalMs||this._delayMs;
this._idleGapThresholdMs=
fa.idleGapThresholdMs||this._idleGapThresholdMs;
this._ignoredNames=fa.ignoredNames||this._ignoredNames;
this._intervalHandle=setInterval(ES(this._beat,'bind',true,this),this._delayMs);}},



disable:function(){
if(this._enabled){
this._enabled=false;
clearInterval(this._intervalHandle);
this._intervalHandle=null;}},



updateExecution:function(fa,ga,ha){
if(!this._enabled)
return;

if(this._ignoredNames[ha]){






this._updateState({type:'beat',timeMs:fa},true);
this._updateState({type:'beat',timeMs:ga},false);}else{


this._updateState({type:'exec',timeMs:fa},true);


this._updateState({type:'exec',timeMs:ga},false);}},



_updateState:function(fa,ga){
var ha=this._lastEvent.timeMs,
ia=fa.timeMs;
if(ga)
if(this._lastEvent.type==='exec'){
if(fa.type==='exec'){


this._outputBrowserBlock(ha,ia,'between_exec');}else
if(fa.type==='beat')


this._outputBrowserBlock(ha,ia,'post_exec');}else

if(this._lastEvent.type==='beat')
if(fa.type==='exec'){


this._outputBrowserBlock(ha,ia,'pre_exec');}else
if(fa.type==='beat')


if(ia-ha>this._idleGapThresholdMs)
this._outputBrowserBlock(ha,ia,'probably_busy');




this._lastEvent=fa;},


_outputBrowserBlock:function(fa,ga,ha){
if(fa<ga)
k.write('time_slice_heartbeat',
{begin:fa,
end:ga,
id:o++,
parentID:null,
guard:'browser time: '+ha});},




_beat:function(){
var fa=m();

if(!this._enabled||
fa-this._enabledStartTimeMs>ca){

this.disable();
return;}

this._updateState({type:'beat',timeMs:fa},true);}},







ea=





{guard:function(fa,ga,ha){
!(typeof fa==='function')?l(0,'Function fn is required'):void 0;
!(typeof ga==='string')?l(0,'String name is required'):void 0;
if(fa.__tsGuarded)

return fa;


if(!ha||!ha.root)
ea.checkCoverage();


var ia=void 0;
if(p)
ia=q;


var ja=function ka(){
if(p)

return fa.apply(this,arguments);


var la='TimeSlice'+(ga?': '+ga:''),
ma='TimeSlice Task'+(ga?': '+ga:''),

na=m();

p=true;
q=o++;
r=ga;
s.length=0;
t=0;

var oa=i.
applyWithGuard(fa,this,arguments,null,la);

while(s.length>0){
var pa=s.shift();
t=pa.depth;
i.
applyWithGuard(pa.fn,b,null,null,ma);}


p=false;

var qa=m();

aa+=qa-na;
k.write('time_slice',babelHelpers['extends']
({begin:na,
end:qa,
id:q,
parentID:ia,
guard:ga},
ha,
fa.__SMmeta));




da.updateExecution(na,qa,ga);


return oa;};


ja.__tsGuarded=true;
return ja;},



enqueue:function(fa){

!p?l(0,
'TimeSlice can\'t append tasks in non-guarded context'):void 0;


!(t<1000)?l(0,
'TimeSlice shouldn\'t be used for infinite deferred recursion'):void 0;

s.push
({fn:fa,
depth:t+1});},




inGuard:function(){
return p;},


checkCoverage:function(){
var fa=void 0;
if(x!==w&&!p){
if(ba){
fa=Error.stackTraceLimit;
Error.stackTraceLimit=50;}


var ga=new Error('Missing TimeSlice coverage');

if(ba)
Error.stackTraceLimit=fa;


ga.type='warn';

if(x===v&&Math.random()<z){
i.reportError(ga);}else
if(x===u)
y.write(ga);}},




setLogging:function(fa,ga){
if(x!==u)
return;

z=ga;
if(fa){
x=v;
ES(y.read(),'forEach',true,function(ha){
if(Math.random()<z)
i.reportError(ha);});}else 



x=w;

y.clear();
y=undefined;},


enableHeartbeat:function(){
da.enable();},


disableHeartbeat:function(){
da.disable();},


getContext:function(){
if(!p)
return null;


return {id:q,
name:r,
depth:t};},



getTotalTime:function(){
return aa;}};



n.setWrapper(ea.guard,'entry');
if(j.timeslice_heartbeat_config&&
j.timeslice_heartbeat_config.enableOnRequire)
ea.enableHeartbeat();

b.TimeSlice=ea;

f.exports=ea;},3);

/** js/downstream/core/immediate/ImmediateImplementation.js */
/**
 * @generated SignedSource<<4c94898b765e9ddb7bac02513e528723>>
 *
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !! This file is a check-in of a static_upstream project!      !!
 * !!                                                            !!
 * !! You should not modify this file directly. Instead:         !!
 * !! 1) Use `fjs use-upstream` to temporarily replace this with !!
 * !!    the latest version from upstream.                       !!
 * !! 2) Make your changes, test them, etc.                      !!
 * !! 3) Use `fjs push-upstream` to copy your changes back to    !!
 * !!    static_upstream.                                        !!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 * Copyright (c) 2012 Barnesandnoble.com, llc, Donavon West, and Domenic
 * Denicola
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @preserve-header
 * @providesModule ImmediateImplementation
 */





































__d("ImmediateImplementation",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();



(function(h,i){
"use strict";

var j=1,
k={},
l={},
m=l,
n=false,
o=h.document,
p=void 0;

function q(y){
var z=y[0];
y=Array.prototype.slice.call(y,1);
k[j]=function(){
z.apply(i,y);};

m=m.next={handle:j++};
return m.handle;}


function r(){
var y=void 0,z=void 0;
while(!n&&(y=l.next)){
l=y;
if(z=k[y.handle]){
n=true;

try{z();
n=false;}finally{

s(y.handle);
if(n){
n=false;






if(l.next)
p(r);}}}}}







function s(y){
delete k[y];}


function t(){var y;


if(h.postMessage&&!h.importScripts){var y=function(){
var z=true,

aa=function(){
z=false;
if(h.removeEventListener){
h.removeEventListener("message",aa,false);}else 

h.detachEvent("onmessage",aa);};



if(h.addEventListener){
h.addEventListener("message",aa,false);}else
if(h.attachEvent){
h.attachEvent("onmessage",aa);}else 

return {v:false};


h.postMessage("","*");
return {v:z};}();if(typeof y==="object")return y.v;}}



function u(){


var y="setImmediate$"+Math.random()+"$",
z=function(event){
if(event.source===h&&
typeof event.data==="string"&&
event.data.indexOf(y)===0)
r();};



if(h.addEventListener){
h.addEventListener("message",z,false);}else 

h.attachEvent("onmessage",z);


p=function(){
var aa=q(arguments);
h.postMessage(y+aa,"*");
return aa;};}



function v(){
var y=new MessageChannel();
y.port1.onmessage=r;
p=function(){
var z=q(arguments);
y.port2.postMessage(z);
return z;};}



function w(){
var y=o.documentElement;
p=function(){
var z=q(arguments),


aa=o.createElement("script");
aa.onreadystatechange=function(){
aa.onreadystatechange=null;
y.removeChild(aa);
aa=null;
r();};

y.appendChild(aa);
return z;};}



function x(){
p=function(){
setTimeout(r,0);
return q(arguments);};}



if(t()){

u();}else

if(h.MessageChannel){

v();}else

if(o&&o.createElement&&"onreadystatechange" in o.createElement("script")){

w();}else 



x();


g.setImmediate=p;
g.clearImmediate=s;})
(Function("return this")());},null);

/** js/downstream/core/setImmediatePolyfill.js */

















__d('setImmediatePolyfill',['invariant','ImmediateImplementation'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();









var i=b.setImmediate;
if(!i){
var j=c('ImmediateImplementation');
i=j.setImmediate;}


function k(){for(var l=arguments.length,m=Array(l),n=0;n<l;n++)m[n]=arguments[n];

!(typeof m[0]==='function')?h(0,'Callback must be a function'):void 0;
return i.apply(null,m);}


f.exports=k;},null);

/** js/downstream/page/setImmediateAcrossTransitions.js */

















__d('setImmediateAcrossTransitions',['TimeSlice','setImmediatePolyfill'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();









f.exports=function(){for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];
k[0]=h.guard(k[0],'setImmediate');
return i.apply(b,k);};},null);

/** js/downstream/page/setImmediate.js */

















__d('setImmediate',['TimerStorage','setImmediateAcrossTransitions'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();








f.exports=function(){for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];
var m,
n=k[0];
k[0]=function(){
h.unset(h.IMMEDIATE,m);
Function.prototype.apply.call(n,this,arguments);};

m=i.apply(b,k);
h.set(h.IMMEDIATE,m);
return m;}.bind(this);},null);

/** js/downstream/core/Promise.js */


















__d('Promise',['invariant','setImmediate'],function a(b,c,d,e,f,g,h,i){



'use strict';if(c.__markCompiled)c.__markCompiled();












function j(){}

















var k=null,
l={};
function m(ea){

try{return ea.then;}catch(
fa){
k=fa;
return l;}}



function n(ea,fa){

try{return ea(fa);}catch(
ga){
k=ga;
return l;}}


function o(ea,fa,ga){

try{ea(fa,ga);}catch(
ha){
k=ha;
return l;}}



function p(ea){
if(typeof this!=='object')
throw new TypeError('Promises must be constructed via new');

if(typeof ea!=='function')
throw new TypeError('not a function');

this._state=0;
this._value=null;
this._deferreds=[];
if(ea===j)return;
w(ea,this);}

p._noop=j;

p.prototype.then=function(ea,fa){
if(this.constructor!==p)
return q(this,ea,fa);

var ga=new p(j);
r(this,new v(ea,fa,ga));
return ga;};


function q(ea,fa,ga){
return new ea.constructor(function(ha,ia){
var ja=new p(j);
ja.then(ha,ia);
r(ea,new v(fa,ga,ja));});}


function r(ea,fa){
while(ea._state===3)
ea=ea._value;

if(ea._state===0){
ea._deferreds.push(fa);
return;}

i(function ga(){
var ha=ea._state===1?fa.onFulfilled:fa.onRejected;
if(ha===null){
if(ea._state===1){
s(fa.promise,ea._value);}else 

t(fa.promise,ea._value);

return;}

var ia=n(ha,ea._value);
if(ia===l){
t(fa.promise,k);}else 

s(fa.promise,ia);});}



function s(ea,fa){

if(fa===ea)
return t
(ea,
new TypeError('A promise cannot be resolved with itself.'));



if(fa&&
(typeof fa==='object'||typeof fa==='function')){

var ga=m(fa);
if(ga===l)
return t(ea,k);


if(ga===ea.then&&
fa instanceof p){

ea._state=3;
ea._value=fa;
u(ea);
return;}else
if(typeof ga==='function'){
w(ga.bind(fa),ea);
return;}}


ea._state=1;
ea._value=fa;
u(ea);}


function t(ea,fa){
ea._state=2;
ea._value=fa;
u(ea);}

function u(ea){
for(var fa=0;fa<ea._deferreds.length;fa++)
r(ea,ea._deferreds[fa]);

ea._deferreds=null;}


function v(ea,fa,ga){
this.onFulfilled=typeof ea==='function'?ea:null;
this.onRejected=typeof fa==='function'?fa:null;
this.promise=ga;}








function w(ea,fa){
var ga=false,
ha=o(ea,function(ia){
if(ga)return;
ga=true;
s(fa,ia);},
function(ia){
if(ga)return;
ga=true;
t(fa,ia);});

if(!ga&&ha===l){
ga=true;
t(fa,k);}}



p.prototype.done=function(ea,fa){
var ga=arguments.length?this.then.apply(this,arguments):this;
ga.then(null,function(ha){
setTimeout(function(){
throw ha;},
0);});};







var x=da(true),
y=da(false),
z=da(null),
aa=da(undefined),
ba=da(0),
ca=da('');

function da(ea){
var fa=new p(p._noop);
fa._state=1;
fa._value=ea;
return fa;}

p.resolve=function(ea){
if(ea instanceof p)return ea;

if(ea===null)return z;
if(ea===undefined)return aa;
if(ea===true)return x;
if(ea===false)return y;
if(ea===0)return ba;
if(ea==='')return ca;

if(typeof ea==='object'||typeof ea==='function')

try{var ga=ea.then;
if(typeof ga==='function')
return new p(ga.bind(ea));}catch(

fa){
return new p(function(ha,ia){
ia(fa);});}



return da(ea);};


p.all=function(ea){



if(!Array.isArray(ea))
ea=[new p(function(){
throw new TypeError('Promise.all must be passed an iterable.');})];




var fa=Array.prototype.slice.call(ea);

return new p(function(ga,ha){
if(fa.length===0)return ga([]);
var ia=fa.length;
function ja(la,ma){
if(ma&&(typeof ma==='object'||typeof ma==='function'))
if(ma instanceof p&&ma.then===p.prototype.then){
while(ma._state===3)
ma=ma._value;

if(ma._state===1)return ja(la,ma._value);
if(ma._state===2)ha(ma._value);
ma.then(function(pa){
ja(la,pa);},
ha);
return;}else{

var na=ma.then;
if(typeof na==='function'){
var oa=new p(na.bind(ma));
oa.then(function(pa){
ja(la,pa);},
ha);
return;}}



fa[la]=ma;
if(--ia===0)
ga(fa);}


for(var ka=0;ka<fa.length;ka++)
ja(ka,fa[ka]);});};




p.reject=function(ea){
return new p(function(fa,ga){
ga(ea);});};



p.race=function(ea){
return new p(function(fa,ga){
ea.forEach(function(ha){
p.resolve(ha).then(fa,ga);});});};






p.prototype['catch']=function(ea){
return this.then(null,ea);};


f.exports=p;},null);

/** js/games/fbinstant/event.js */









__d("fbinstant.event",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();

function h(){
var i=[];
this._handlers=i;
this.on=function(j){
this._handlers.push(j);};

this.unbind=function(){
var j=[];
this._handlers=j;};

this._callHandlers=function(j){
for(var k=0;k<this._handlers.length;k++)
this._handlers[k](j);};}




f.exports=h;},null);

/** js/games/fbinstant/messageSender.js */






__d('fbinstant.messageSender',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();

var h=






{_source:null,
_sender:null,

_parseData:function(i){
return i;},

init:function(){
var i=new RegExp('[?&]source(=([^&#]*)|&|#|$)','i'),
j=i.exec(window.location.href);

if(window.QuicksilverAndroid){

this._sender=window.QuicksilverAndroid;
this._source='Android';
this._parseData=function(k){
return JSON.stringify(k);};}else

if(window.webkit&&window.webkit.messageHandlers){

if(window.webkit.messageHandlers.quicksilver){
this._sender=window.webkit.messageHandlers.quicksilver;}else 

this._sender=parent;

this._source='iOS';}else{

this._sender=parent;

if(!j||!j[2])
return;


this._source=decodeURIComponent(j[2].replace(/\+/g,' '));}},


send:function(i,j){
if(!this._source)
return;


this._sender.postMessage(this._parseData
({type:i,
content:j,
destination:this._source}),
'*');}};



f.exports=h;},null);

/** js/games/fbinstant/performanceTracker.js */







__d('fbinstant.performanceTracker',['fbinstant.messageSender'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();



var i=





{_lastFrameTime:0,
_frameRenderingTimesSum:0,
_frameRenderingTimesCount:0,
init:function(){
var j=window.requestAnimationFrame;
this._lastFrameTime=window.performance.now();
window.requestAnimationFrame=function(k){
var l=window.performance.now();
this._frameRenderingTimesSum+=l-this._lastFrameTime;
this._frameRenderingTimesCount++;

this._lastFrameTime=l;
j(k);}.
bind(this);

window.setInterval(function(){
var k=
this._frameRenderingTimesSum/this._frameRenderingTimesCount;
this._frameRenderingTimesSum=0;
this._frameRenderingTimesCount=0;

h.send('averageframetime',k);}.
bind(this),1000);}};



f.exports=i;},null);

/** js/games/fbinstant/screenshotTaker.js */







__d('fbinstant.screenshotTaker',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();

var h=
{_findCanvas:function(){
var i=null,

j=document.getElementsByTagName('canvas'),
k=0;
for(var l=0;l<j.length;l++)
if(j[l].offsetWidth>=k){
k=j[l].offsetWidth;
i=j[l];}



return i;},


record:function(){
var i=this._findCanvas();
if(!i)
return null;


return i.toDataURL();}};



f.exports=h;},null);

/** js/games/fbinstant/fbinstant.js */







__d('fbinstant',['Promise','fbinstant.event','fbinstant.messageSender','fbinstant.performanceTracker','fbinstant.screenshotTaker'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();





var m=




{_init:
function(){
j.init();
j.send('onbeginload',100);
this._messageMap=
{restart:this.game._restartEvent._callHandlers.
bind(this.game._restartEvent,null)};

window.addEventListener
('message',
this._messageListener.bind(this));

this._initEnvironment();},


_messageListener:function(n){
if(n.data&&n.data.source){
var o=n.data.type;
if(!o)

return;


var p=this._messageMap[o];
if(!p)

return;


p(n.data.content);}},



_initEnvironment:function(){
if(window.webkit){
this.environment.platform='iOS';}else
if(window.QuicksilverAndroid){
this.environment.platform='Android';}else 

this.environment.platform='web';},



loading:





{setProgress:function(n){
j.send('onprogressload',n);},







complete:function(){
k.init();
j.send('ongameready');}},


game:






{setScore:function(n){
j.send('onscore',n);},







asyncYieldControl:function(){
j.send('onendgame');
return new h(function(n,o){
this._restartEvent.on(function(){
n();
this._restartEvent.unbind();}.
bind(this));}.
bind(this));},



_restartEvent:new i(),

pauseEvent:new i(),

resumeEvent:new i()},

environment:{},


media:



{takeScreenshot:function(){
var n=l.record();

if(n)
j.send('onscreenshot',n);}},




system:





{abort:function(n){
j.send('abort',n);}}};





f.exports=m;},null);

/** js/games/fbinstant/fbinstant_all.js */








__d('legacy:fbinstant.all',['fbinstant'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();

window.FBInstant=c('fbinstant');
window.FBInstant._init();},3);

/** js/games/fbinstant/fbinstant_meta.js */














    }  }).call(global);})(window.inDapIF ? parent.window : window, window);} catch (e) {new Image().src="https:\/\/www.facebook.com\/" + 'common/scribe_endpoint.php?c=jssdk_error&m='+encodeURIComponent('{"error":"LOAD", "extra": {"name":"'+e.name+'","line":"'+(e.lineNumber||e.line)+'","script":"'+(e.fileName||e.sourceURL||e.script)+'","stack":"'+(e.stackTrace||e.stack)+'","revision":"2444965","namespace":"FB","message":"'+e.message+'"}}');}