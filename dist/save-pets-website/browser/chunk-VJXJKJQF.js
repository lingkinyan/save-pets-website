import{a as T}from"./chunk-EA4V3Q6A.js";import{ga as O,ha as M,ia as F,k as x,l as P}from"./chunk-YPQ2GT7G.js";import{Jb as t,Kb as o,Lb as m,Mb as f,Nb as v,Sb as g,Vc as _,ac as l,bb as y,cc as S,dc as C,eb as s,fb as h,qa as d,sb as w,wb as u,yb as c}from"./chunk-BYFAMN2J.js";var I=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["app-welcome-banner"]],decls:7,vars:0,consts:[[1,"container"],["src","home-page/banner.jpg",1,"banner"],[1,"text-wrapper"],[1,"px-4","text-white","font-bold","title"]],template:function(n,r){n&1&&(t(0,"div",0),m(1,"img",1),t(2,"div",2)(3,"div",3),l(4," Saving Lives, "),m(5,"br"),l(6,"One Paw at a Time "),o()()())},styles:['.container[_ngcontent-%COMP%]{position:relative;color:#fff}.text-wrapper[_ngcontent-%COMP%]{position:absolute;top:50%;left:15%;transform:translate(-15%,-50%)}.banner-bg[_ngcontent-%COMP%]{background-image:url("./media/banner-CFQGKIBZ.jpg");background-repeat:no-repeat;background-size:cover}@media only screen and (min-width: 520px){.title[_ngcontent-%COMP%]{font-size:2.5rem}}@media only screen and (min-width: 1000px){.title[_ngcontent-%COMP%]{font-size:3rem}}.banner[_ngcontent-%COMP%]{width:100vw!important;max-width:100vw!important}']});let i=e;return i})();var j=(()=>{let e=class e{constructor(){this.content="",this.imgSrc=""}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["app-bubble"]],inputs:{content:"content",imgSrc:"imgSrc"},decls:4,vars:3,consts:[[1,"flex","justify-center"],[3,"src","alt"],[1,"text-grey","my-2"]],template:function(n,r){n&1&&(t(0,"div",0),m(1,"img",1),o(),t(2,"div",2),l(3),o()),n&2&&(s(),c("src",r.imgSrc,y)("alt",r.content),s(2),S(" ",r.content,`
`))},styles:["img[_ngcontent-%COMP%]{border-radius:50%;object-fit:cover;width:10rem;height:10rem}@media only screen and (min-width: 520px){img[_ngcontent-%COMP%]{width:15rem;height:15rem}}"]});let i=e;return i})();function D(i,e){if(i&1&&(t(0,"div",10),m(1,"app-bubble",11),o()),i&2){let p=e.$implicit;s(),c("imgSrc",p.imgSrc)("content",p.content)}}function H(i,e){if(i&1&&(f(0),t(1,"div",12),l(2),o(),v()),i&2){let p=e.$implicit,a=e.index;s(2),C(" ",a+1,". ",p," ")}}var G=(()=>{let e=class e extends T{constructor(a,n){super(),this.title=a,this.metaService=n,this.goalsList=[{imgSrc:"home-page/circle-1.jpeg",content:"Rescue stray and abandoned animals"},{imgSrc:"home-page/circle-3.webp",content:"Find a suitable home by issuing adoption notices"},{imgSrc:"home-page/circle-2.webp",content:"Promote respect for domestic animals"},{imgSrc:"home-page/circle-4.jpeg",content:"Provide low-cost temporary foster care for animals in need"}],this.proposesList=["Rescue abandoned, sick, and/or injured animals ","Find permanent owners for homeless animals ","Provide safe, reliable, and low-cost medical services for cats and dogs ","Provide low-cost temporary foster care for animals in need ","Provide basic knowledge of animal rescue to the public ","Relocate neglected pets to more responsible and caring homes ","Provide correct guides to raising animals, bring animals back to their home countries, and identify the best veterinary hospitals We have a very strict adoption and foster review process to ensure that all animals go to high-quality foster families ","The team will follow up on the adopted animals on a regular basis and do their best to identify irresponsible behaviours after adoption ","We reserve the right to recall animals","permanently and put irresponsible adopters on the blacklist","Cooperate with related agencies to raise funds for animal rescue","We operate 24/7!"],this.title.setTitle("Home | Pet Save"),this.metaService.updateTag({name:"Pet Save",content:"Pet Save, adopt, adopters, animals, home visit, Rescue animals, abandoned animals, homeless animals, medical service, animal rescue, Saving Lives, One Paw at a Time"})}};e.\u0275fac=function(n){return new(n||e)(h(P),h(x))},e.\u0275cmp=d({type:e,selectors:[["app-home-landing"]],features:[w],decls:17,vars:6,consts:[[1,"grid","gap-12"],[1,"px-4","md:px-24","text-center","grid","gap-12"],["appIntersectionObserver","",1,"save-pets-intro","hide-content",3,"visible","title","content","imgSrc","imgAlt"],["appIntersectionObserver","",1,"text-center","our-goals","hide-content",3,"visible"],[1,"grid","grid-cols-2","xl:grid-cols-4","my-4","gap-4"],["class","text-center",4,"ngFor","ngForOf"],["appIntersectionObserver","",1,"text-center","our-missions","hide-content",3,"visible"],[1,"my-4"],["src","home-page/propose.webp","alt","Pet Save - Our Proposes",1,"proposes-image"],[4,"ngFor","ngForOf"],[1,"text-center"],[3,"imgSrc","content"],[1,"text-grey","text-left","my-2"]],template:function(n,r){n&1&&(t(0,"div",0),m(1,"app-welcome-banner"),t(2,"div",1)(3,"left-right-card",2),g("visible",function(){return r.onVisible("save-pets-intro")}),o(),t(4,"div",3),g("visible",function(){return r.onVisible("our-goals")}),t(5,"h1"),l(6,"Our Goals"),o(),t(7,"div",4),u(8,D,2,2,"div",5),o()(),t(9,"div",6),g("visible",function(){return r.onVisible("our-missions")}),t(10,"white-card"),f(11),t(12,"h1"),l(13,"Our Proposes"),o(),t(14,"div",7),m(15,"img",8),u(16,H,3,2,"ng-container",9),o(),v(),o()()()()),n&2&&(s(3),c("title","Pet Save")("content","Our mission is to provide forever homes for the hundreds of animals that need our help. <br><br>But, as important as it is to ensure that the animals are a suitable match for you, we also want to ensure that you\u2019re in the right position to adopt one. <br><br>Our adoption process is simple: select which animal you\u2019re interested in, fill out an application form and if selected, there will be a home visit to get to know you a bit more and for further instructions. <br><br>Note that due to the high volume of adopters we get, you may not hear back from us unless you are selected to move forward with the home visit. <br><br>However, this doesn\u2019t mean that you don\u2019t meet the criteria. <br><br>We encourage you to stay updated on our \u201Cadopted\u201D to check whether an adopter has already been found.")("imgSrc","save-pets-icon.jpeg")("imgAlt","Pet Save Icon"),s(5),c("ngForOf",r.goalsList),s(8),c("ngForOf",r.proposesList))},dependencies:[_,O,M,F,I,j],styles:[".proposes-image[_ngcontent-%COMP%]{width:100%;object-fit:cover;border-radius:.5rem}@media only screen and (max-width: 700px){.proposes-image[_ngcontent-%COMP%]{width:100%;object-fit:contain;height:auto}}"]});let i=e;return i})();export{G as a};