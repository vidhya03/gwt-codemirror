function com_weborient_codemirror_CodemirrorGwt(){var l='',F='" for "gwt:onLoadErrorFn"',D='" for "gwt:onPropertyErrorFn"',n='"><\/script>',p='#',r='/',vb='002AC52A5E3FA0E27CCA368D484DA604.cache.html',tb='3F360FD5649B37C2D1768FC32A6107E9.cache.html',sb='4C3E1A7C9B632AA59B431F067CB8EA8E.cache.html',ub='4CB064A21361BD15BA33AB764D366A3D.cache.html',wb='539BE79404CF7D75DCC10244B88710B2.cache.html',fc='<script defer="defer">com_weborient_codemirror_CodemirrorGwt.onInjectionDone(\'com.weborient.codemirror.CodemirrorGwt\')<\/script>',ic='<script id="',cc='<script language="javascript" src="',A='=',q='?',C='Bad handler "',Eb='CodemirrorGwt.css',ac='DOMContentLoaded',o='SCRIPT',hc='__gwt_marker_com.weborient.codemirror.CodemirrorGwt',s='base',nb='begin',cb='bootstrap',u='clear.cache.gif',m='com.weborient.codemirror.CodemirrorGwt',z='content',Fb='css/editor.css',gc='end',lb='gecko',mb='gecko1_8',yb='gwt.hybrid',xb='gwt/standard/standard.css',E='gwt:onLoadErrorFn',B='gwt:onPropertyErrorFn',y='gwt:property',Db='head',rb='hosted.html?com_weborient_codemirror_CodemirrorGwt',Cb='href',kb='ie6',ab='iframe',t='img',bb="javascript:''",bc='js/codemirror.js',ec='js/codemirror.js"><\/script>',zb='link',pb='loadExternalRefs',v='meta',eb='moduleRequested',dc='moduleStartup',jb='msie',w='name',gb='opera',db='position:absolute;width:0;height:0;border:none',Ab='rel',ib='safari',qb='selectingPermutation',x='startup',Bb='stylesheet',ob='unknown',fb='user.agent',hb='webkit';var kc=window,k=document,jc=kc.__gwtStatsEvent?function(a){return kc.__gwtStatsEvent(a)}:null,Ec,uc,pc,oc=l,xc={},bd=[],Dc=[],nc=[],Ac,Cc;jc&&jc({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:nb});if(!kc.__gwt_stylesLoaded){kc.__gwt_stylesLoaded={}}if(!kc.__gwt_scriptsLoaded){kc.__gwt_scriptsLoaded={}}function tc(){try{return kc.external&&(kc.external.gwtOnLoad&&kc.location.search.indexOf(yb)==-1)}catch(a){return false}}
function wc(){if(Ec&&uc){var c=k.getElementById(m);var b=c.contentWindow;b.__gwt_initHandlers=com_weborient_codemirror_CodemirrorGwt.__gwt_initHandlers;if(tc()){b.__gwt_getProperty=function(a){return qc(a)}}com_weborient_codemirror_CodemirrorGwt=null;b.gwtOnLoad(Ac,m,oc);jc&&jc({moduleName:m,subSystem:x,evtGroup:dc,millis:(new Date()).getTime(),type:gc})}}
function rc(){var j,h=hc,i;k.write(ic+h+n);i=k.getElementById(h);j=i&&i.previousSibling;while(j&&j.tagName!=o){j=j.previousSibling}function f(b){var a=b.lastIndexOf(p);if(a==-1){a=b.length}var c=b.indexOf(q);if(c==-1){c=b.length}var d=b.lastIndexOf(r,Math.min(c,a));return d>=0?b.substring(0,d+1):l}
;if(j&&j.src){oc=f(j.src)}if(oc==l){var e=k.getElementsByTagName(s);if(e.length>0){oc=e[e.length-1].href}else{oc=f(k.location.href)}}else if(oc.match(/^\w+:\/\//)){}else{var g=k.createElement(t);g.src=oc+u;oc=f(g.src)}if(i){i.parentNode.removeChild(i)}}
function Bc(){var f=document.getElementsByTagName(v);for(var d=0,g=f.length;d<g;++d){var e=f[d],h=e.getAttribute(w),b;if(h){if(h==y){b=e.getAttribute(z);if(b){var i,c=b.indexOf(A);if(c>=0){h=b.substring(0,c);i=b.substring(c+1)}else{h=b;i=l}xc[h]=i}}else if(h==B){b=e.getAttribute(z);if(b){try{Cc=eval(b)}catch(a){alert(C+b+D)}}}else if(h==E){b=e.getAttribute(z);if(b){try{Ac=eval(b)}catch(a){alert(C+b+F)}}}}}}
function ad(d,e){var a=nc;for(var b=0,c=d.length-1;b<c;++b){a=a[d[b]]||(a[d[b]]=[])}a[d[c]]=e}
function qc(d){var e=Dc[d](),b=bd[d];if(e in b){return e}var a=[];for(var c in b){a[b[c]]=c}if(Cc){Cc(d,a,e)}throw null}
var sc;function vc(){if(!sc){sc=true;var a=k.createElement(ab);a.src=bb;a.id=m;a.style.cssText=db;a.tabIndex=-1;k.body.appendChild(a);jc&&jc({moduleName:m,subSystem:x,evtGroup:dc,millis:(new Date()).getTime(),type:eb});a.contentWindow.location.replace(oc+Fc)}}
Dc[fb]=function(){var d=navigator.userAgent.toLowerCase();var b=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(d.indexOf(gb)!=-1){return gb}else if(d.indexOf(hb)!=-1){return ib}else if(d.indexOf(jb)!=-1){var c=/msie ([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=6000){return kb}}}else if(d.indexOf(lb)!=-1){var c=/rv:([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=1008)return mb}return lb}return ob};bd[fb]={gecko:0,gecko1_8:1,ie6:2,opera:3,safari:4};com_weborient_codemirror_CodemirrorGwt.onScriptLoad=function(){if(sc){uc=true;wc()}};com_weborient_codemirror_CodemirrorGwt.onInjectionDone=function(){Ec=true;jc&&jc({moduleName:m,subSystem:x,evtGroup:pb,millis:(new Date()).getTime(),type:gc});wc()};rc();Bc();jc&&jc({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:qb});var Fc;if(tc()){Fc=rb}else{try{ad([kb],sb);ad([mb],tb);ad([gb],ub);ad([lb],vb);ad([ib],wb);Fc=nc[qc(fb)]}catch(a){return}}var zc;function yc(){if(!pc){pc=true;if(!__gwt_stylesLoaded[xb]){var a=k.createElement(zb);__gwt_stylesLoaded[xb]=a;a.setAttribute(Ab,Bb);a.setAttribute(Cb,oc+xb);k.getElementsByTagName(Db)[0].appendChild(a)}if(!__gwt_stylesLoaded[Eb]){var a=k.createElement(zb);__gwt_stylesLoaded[Eb]=a;a.setAttribute(Ab,Bb);a.setAttribute(Cb,oc+Eb);k.getElementsByTagName(Db)[0].appendChild(a)}if(!__gwt_stylesLoaded[Fb]){var a=k.createElement(zb);__gwt_stylesLoaded[Fb]=a;a.setAttribute(Ab,Bb);a.setAttribute(Cb,oc+Fb);k.getElementsByTagName(Db)[0].appendChild(a)}wc();if(k.removeEventListener){k.removeEventListener(ac,yc,false)}if(zc){clearInterval(zc)}}}
if(k.addEventListener){k.addEventListener(ac,function(){vc();yc()},false)}var zc=setInterval(function(){if(/loaded|complete/.test(k.readyState)){vc();yc()}},50);jc&&jc({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:gc});jc&&jc({moduleName:m,subSystem:x,evtGroup:pb,millis:(new Date()).getTime(),type:nb});if(!__gwt_scriptsLoaded[bc]){__gwt_scriptsLoaded[bc]=true;document.write(cc+oc+ec)}k.write(fc)}
com_weborient_codemirror_CodemirrorGwt.__gwt_initHandlers=function(i,e,j){var d=window,g=d.onresize,f=d.onbeforeunload,h=d.onunload;d.onresize=function(a){try{i()}finally{g&&g(a)}};d.onbeforeunload=function(a){var c,b;try{c=e()}finally{b=f&&f(a)}if(c!=null){return c}if(b!=null){return b}};d.onunload=function(a){try{j()}finally{h&&h(a);d.onresize=null;d.onbeforeunload=null;d.onunload=null}}};com_weborient_codemirror_CodemirrorGwt();