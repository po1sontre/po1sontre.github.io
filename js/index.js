const url=location.protocol+'//'+window.location.host;const conf={title:'Onies Land',browsers:true,source:{jQuery:'https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js'}}
function browser(){if(conf.browsers===true){const browser=((nav)=>{const object={Safari:nav.includes('Mac'),GoogleBot:nav.includes('Googlebot'),Firefox:nav.includes('Firefox'),Chrome:(!!window.chrome&&navigator.vendor=='Google Inc.'),}
for(let i in object){if(object[i])return i;}})(navigator.userAgent);if(browser){return null;}else{window.stop();window.location.redirect('https://api.onish.dev/err/403');}}else{return null;}}
function subtitle(){function subType(){if(true){let title='Welcome to my page!\, Must be pretty tired..?, Wish ya a great year!';let typed=new Typed('#subtitle',{strings:title.split(','),startDelay:300,typeSpeed:69,loop:false,backSpeed:40});}}
if(true){if(typeof Typed==='function'){subType();}else{getScript('./cdn/npm/typed.js/typed.min.js').then(subType);}}}
function player(){$(document).ready(function(){const ap=new APlayer({container:document.getElementById('aplayer'),fixed:true,autoplay:false,volume:0.4,mutex:true,order:'list',preload:'none',listFolded:true,theme:'#ee8fdf',audio:[{name:'千年の羽',artist:'小林未郁',url:`${url}/utils/media/audio/千年の羽%20(崩坏3符华印象曲).mp3`,cover:`${url}/utils/media/icon/千年の羽.jpg`,theme:'#e0a47b'},{name:'好きだから。',artist:'ユイカ',url:`${url}/utils/media/audio/好きだから。（feat.れん）%20%20『ユイカ』【MV】.mp3`,cover:`${url}/utils/media/icon/好きだから.png`,theme:'#fbc6ff'},{name:'たぶん',artist:'YOASOBI',url:`${url}/utils/media/audio/YOASOBI「たぶん」.mp3`,cover:`${url}/utils/media/icon/「たぶん」.webp`,theme:'#99eb34'},{name:'東方キャノンボール',artist:'山内真治 (Aniplex)',url:`${url}/utils/media/audio/「東方キャノンボール」OPアニメ.mp3`,cover:`${url}/utils/media/icon/「東方キャノンボール」.jpg`,theme:'#426cf5'}]});var element=document.querySelector('.aplayer-played');var observer=new MutationObserver(function(mutations){mutations.forEach(function(mutation){if(mutation.type==='attributes'){var theme=window.getComputedStyle(element).getPropertyValue('background-color');document.querySelector(':root').style=`--ptheme: {theme};`;}});});observer.observe(element,{attributes:true});});}
function lastUpdated(){try{let last=document.getElementById('last-push-date');let fulldate=new Date();let hours=fulldate.getHours();let ampm=hours>=12?'PM':'AM';hours=hours%12||12;let minutes=fulldate.getMinutes().toString().padStart(2,'0');let time=`${hours}:${minutes} ${ampm}`;let day=fulldate.getDate().toString().padStart(2,'0');let date=`${day}`;last.textContent=`${date} • ${time}`;}catch(err){return null;}}
window.addEventListener('scroll',function(){let pos=window.scrollY||document.documentElement.scrollTop;const fall=document.getElementById('fallmenu');if(pos>56){fall.style.cssText='opacity: 1; transform: translateX(-38px)';}else{fall.style.cssText='opacity: 0; transform: translateX()';}});document.getElementById('scroll-down').addEventListener('click',function(){window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});});document.getElementById('go-up').addEventListener('click',function(){window.scrollTo({top:document.body.scrollTop,behavior:'smooth'})});document.getElementById('cogwheel').addEventListener('click',function(){const extra=document.getElementById('hide');if(extra.style.opacity===0)extra.style.cssText='transform: translateX(0)';});lastUpdated();browser();player();subtitle();document.getElementsByClassName('copyright')[0].innerHTML='&copy; 2022 • '+new Date().getFullYear();