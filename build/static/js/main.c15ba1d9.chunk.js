(this.webpackJsonpflow=this.webpackJsonpflow||[]).push([[0],{71:function(e,t,a){e.exports=a(89)},79:function(e,t,a){},80:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(58),s=a.n(l),o=(a(79),a(9)),i=(a(80),a(81),a(30)),c=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],s=a[1],c=Object(n.useState)(5),u=Object(o.a)(c,2),h=u[0],m=u[1],b=Object(n.useState)(1),d=Object(o.a)(b,2),f=d[0],p=d[1],E=Object(n.useState)(!1),g=Object(o.a)(E,2),v=g[0],k=g[1];Object(n.useEffect)((function(){var t;return v&&l&&h<1e3*e.sessionLength*60*3?t=setInterval((function(){m((function(e){return e+1e3})),p(Math.floor(h/e.breakMultiplier))}),1e3):!v&&l&&f>0&&h>0&&(t=setInterval((function(){p((function(e){return e-1e3})),m(f*e.breakMultiplier)}),1e3)),function(){return clearInterval(t)}}),[v,h,f]);var j=("0"+Math.floor(h/1e3)%60).slice(-2),C=("0"+Math.floor(h/6e4)%60).slice(-2),O=("0"+Math.floor(h/36e5)%60).slice(-2),L=("0"+Math.floor(f/1e3)%60).slice(-2),M=("0"+Math.floor(f/6e4)%60).slice(-2);return Object(n.useEffect)((function(){document.title=v?"".concat(O,":").concat(C,":").concat(j):"".concat(M,":").concat(L),h>=1e3*e.sessionLength*60*3&&l&&v&&(document.title="Focus session finished \ud83c\udf89",alert("Focus session finished"),k(!1)),f<=0&&l&&!v&&(p(0),document.title="Pause finished!",alert("Pause finished"),s(!1))}),[j,L]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"stopwatch"},r.a.createElement("div",{style:{width:"30rem"}},r.a.createElement(i.CircularProgressbarWithChildren,{value:h/(1e3*e.sessionLength*60)*100,styles:Object(i.buildStyles)({textColor:"red",pathColor:"#007991",trailColor:"white",strokeLinecap:"round",pathTransitionDuration:.5,strokeWidth:"2"})},v?"00"!==O?r.a.createElement("span",{className:"timer"},O,":",C,":",j):r.a.createElement("span",{className:"timer"},C,":",j):r.a.createElement("span",{className:"timer"},M,":",L))),h>=1e3*e.sessionLength*60?r.a.createElement("div",{style:{width:"calc(30rem + 22%)",position:"relative",top:"calc((-30rem - 12%))",left:"-11%"}},r.a.createElement(i.CircularProgressbar,{value:h/(1e3*e.sessionLength*60)*100-100,styles:Object(i.buildStyles)({textColor:"red",pathColor:"#007991",trailColor:"transparent",strokeLinecap:"round",pathTransitionDuration:.5})})):null,h>=1e3*e.sessionLength*60*2?r.a.createElement("div",{style:{width:"calc(30rem + 48%)",position:"relative",top:"calc((-30rem - 24%) * 2)",left:"-24%"}},r.a.createElement(i.CircularProgressbar,{value:h/(1e3*e.sessionLength*60)*100-200,styles:Object(i.buildStyles)({textColor:"red",pathColor:"#007991",trailColor:"transparent",strokeLinecap:"round",pathTransitionDuration:.5})})):null),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){l||s(!0),k(!v),document.body.style.backgroundColor=v?"#131f52":"#E7E7DB",document.getElementsByClassName("timer")[0].style.color=v?"white":"black"}},v&&l?"Pause":"Focus"),r.a.createElement("button",{onClick:function(){return m(5)}},"Reset")))},u=a(133),h=function(e){return r.a.createElement("div",{className:"infobox"},r.a.createElement("p",{className:"info"},"Flowmodoro is technique where you study until you lose focus, at which point you take a break that's up to 1/5th the length of your focus time.",r.a.createElement("br",null),"The focus session ends when 3 rings are filled."),r.a.createElement("div",{className:"inputs"},r.a.createElement(u.a,{id:"session-length",label:"Minutes per ring",variant:"outlined",size:"small",defaultValue:e.sessionLength,onChange:e.handleSessionLength,error:e.sessionLengthError,helperText:e.sessionLengthError?"Must be above 1":null}),r.a.createElement(u.a,{id:"break-multiplier",label:"Break multiplier",variant:"outlined",size:"small",defaultValue:e.breakMultiplier,onChange:e.handleBreakMultiplier,error:e.breakMultiplierError,helperText:e.breakMultiplierError?"Must be between 1 and 10":null})))},m=a(134),b=a(61),d=a.n(b);var f=function(){var e=Object(n.useState)(30),t=Object(o.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(5),i=Object(o.a)(s,2),u=i[0],b=i[1],f=Object(n.useState)(!1),p=Object(o.a)(f,2),E=p[0],g=p[1],v=Object(n.useState)(!1),k=Object(o.a)(v,2),j=k[0],C=k[1],O=Object(n.useState)(!1),L=Object(o.a)(O,2),M=L[0],y=L[1];return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"info-button"},r.a.createElement(m.a,{value:"check",selected:M,onChange:function(){y(!M)}},r.a.createElement(d.a,null))),M?r.a.createElement(h,{sessionLength:a,handleSessionLength:function(e){e.target.value>0?(l(e.target.value),C(!1)):C(!0)},breakMultiplier:u,handleBreakMultiplier:function(e){e.target.value>0?(b(e.target.value),g(!1)):g(!0)},breakMultiplierError:E,sessionLengthError:j}):null,r.a.createElement("div",{className:"stopwatch-container"},r.a.createElement(c,{sessionLength:a,breakMultiplier:u})))},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,136)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),l(e),s(e)}))};s.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null))),p()}},[[71,1,2]]]);
//# sourceMappingURL=main.c15ba1d9.chunk.js.map