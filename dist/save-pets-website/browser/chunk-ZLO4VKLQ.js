import{a as le}from"./chunk-EA4V3Q6A.js";import{a as $,b as V}from"./chunk-BFTOJRRQ.js";import{a as ue}from"./chunk-I3USO5WE.js";import{B as ce,C as de,D as pe,g as A,h as se,i as me}from"./chunk-OHHS355W.js";import{$ as h,Ab as ee,Bb as te,Cb as N,Db as M,Eb as P,Fb as p,Gb as z,Hb as L,Ib as ne,Jb as ie,Kb as k,Mb as E,Qa as J,Ta as r,Ua as y,V as b,Vb as j,Xb as oe,_ as Y,eb as K,fb as X,ia as _,ib as c,j as U,ja as g,kb as s,l as W,lb as Z,lc as I,mb as x,mc as R,oc as ae,pb as l,pc as re,qb as m,ra as T,rb as f,sb as v,tb as C,ua as G,ub as O,wb as S,xb as u,yb as D,zb as F}from"./chunk-PZYGTS6J.js";var Ce=["template"],he=["*"];function _e(t,e){if(t&1&&(v(0),p(1),C()),t&2){let n=u(3);r(),z(n.nzLabel)}}function ze(t,e){if(t&1&&(l(0,"div",7),c(1,_e,2,1,"ng-container",5),m()),t&2){let n=u(2);r(),s("nzStringTemplateOutlet",n.nzLabel)}}function be(t,e){if(t&1&&(v(0),p(1),C()),t&2){let n=u(2);r(),z(n.nzDot)}}function xe(t,e){if(t&1&&(l(0,"li",1),c(1,ze,2,1,"div",2),f(2,"div",3),l(3,"div",4),c(4,be,2,1,"ng-container",5),m(),l(5,"div",6),F(6),m()()),t&2){let n=u();x("ant-timeline-item-right",(n.nzPosition||n.position)==="right")("ant-timeline-item-left",(n.nzPosition||n.position)==="left")("ant-timeline-item-last",n.isLast),r(),s("ngIf",n.nzLabel),r(2),Z("border-color",n.borderColor),x("ant-timeline-item-head-red",n.nzColor==="red")("ant-timeline-item-head-blue",n.nzColor==="blue")("ant-timeline-item-head-green",n.nzColor==="green")("ant-timeline-item-head-gray",n.nzColor==="gray")("ant-timeline-item-head-custom",!!n.nzDot),r(),s("nzStringTemplateOutlet",n.nzDot)}}function Ie(t,e){if(t&1&&O(0,4),t&2){u();let n=P(5);s("ngTemplateOutlet",n)}}function we(t,e){}function Te(t,e){if(t&1&&(v(0),c(1,we,0,0,"ng-template",4),C()),t&2){let n=e.$implicit;r(),s("ngTemplateOutlet",n.template)}}function Oe(t,e){if(t&1&&O(0,4),t&2){u();let n=P(5);s("ngTemplateOutlet",n)}}function Se(t,e){t&1&&f(0,"span",12)}function De(t,e){if(t&1&&(v(0),p(1),c(2,Se,1,0,"span",11),C()),t&2){let n=u(3);r(),L(" ",n.nzPendingDot," "),r(),s("ngIf",!n.nzPendingDot)}}function Fe(t,e){if(t&1&&(v(0),p(1),C()),t&2){let n=u(3);r(),L(" ",n.isPendingBoolean?"":n.nzPending," ")}}function Ne(t,e){if(t&1&&(l(0,"li",6),f(1,"div",7),l(2,"div",8),c(3,De,3,2,"ng-container",9),m(),l(4,"div",10),c(5,Fe,2,1,"ng-container",9),m()()),t&2){let n=u(2);r(3),s("nzStringTemplateOutlet",n.nzPendingDot),r(2),s("nzStringTemplateOutlet",n.nzPending)}}function Me(t,e){if(t&1&&c(0,Ne,6,2,"li",5),t&2){let n=u();s("ngIf",n.nzPending)}}var Pe=["red","blue","green","grey","gray"],q=(()=>{let e=class e{constructor(){this.check$=new W(1)}markForCheck(){this.check$.next()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=Y({token:e,factory:e.\u0275fac});let t=e;return t})();function Le(t){return Pe.findIndex(e=>e===t)!==-1}var w=(()=>{let e=class e{constructor(a,i){this.cdr=a,this.timelineService=i,this.nzColor="blue",this.isLast=!1,this.borderColor=null}ngOnChanges(a){this.timelineService.markForCheck(),a.nzColor&&this.updateCustomColor()}detectChanges(){this.cdr.detectChanges()}updateCustomColor(){this.borderColor=Le(this.nzColor)?null:this.nzColor}};e.\u0275fac=function(i){return new(i||e)(y(j),y(q))},e.\u0275cmp=_({type:e,selectors:[["nz-timeline-item"],["","nz-timeline-item",""]],viewQuery:function(i,o){if(i&1&&te(Ce,5),i&2){let d;N(d=M())&&(o.template=d.first)}},inputs:{nzPosition:"nzPosition",nzColor:"nzColor",nzDot:"nzDot",nzLabel:"nzLabel"},exportAs:["nzTimelineItem"],standalone:!0,features:[T,k],ngContentSelectors:he,decls:2,vars:0,consts:[["template",""],[1,"ant-timeline-item"],["class","ant-timeline-item-label",4,"ngIf"],[1,"ant-timeline-item-tail"],[1,"ant-timeline-item-head"],[4,"nzStringTemplateOutlet"],[1,"ant-timeline-item-content"],[1,"ant-timeline-item-label"]],template:function(i,o){i&1&&(D(),c(0,xe,7,20,"ng-template",null,0,E))},dependencies:[R,V,$],encapsulation:2,changeDetection:0});let t=e;return t})(),H=(()=>{let e=class e{constructor(a,i,o){this.cdr=a,this.timelineService=i,this.directionality=o,this.nzMode="left",this.nzReverse=!1,this.isPendingBoolean=!1,this.timelineItems=[],this.dir="ltr",this.hasLabelItem=!1,this.destroy$=new U}ngOnChanges(a){let{nzMode:i,nzReverse:o,nzPending:d}=a;(fe(i)||fe(o))&&this.updateChildren(),d&&(this.isPendingBoolean=d.currentValue===!0)}ngOnInit(){this.timelineService.check$.pipe(b(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()}),this.directionality.change?.pipe(b(this.destroy$)).subscribe(a=>{this.dir=a,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.updateChildren(),this.listOfItems.changes.pipe(b(this.destroy$)).subscribe(()=>{this.updateChildren()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}updateChildren(){if(this.listOfItems&&this.listOfItems.length){let a=this.listOfItems.length,i=!1;this.listOfItems.forEach((o,d)=>{o.isLast=this.nzReverse?d===0:d===a-1,o.position=ke(d,this.nzMode),!i&&o.nzLabel&&(i=!0),o.detectChanges()}),this.timelineItems=this.nzReverse?this.listOfItems.toArray().reverse():this.listOfItems.toArray(),this.hasLabelItem=i}else this.timelineItems=[],this.hasLabelItem=!1;this.cdr.markForCheck()}};e.\u0275fac=function(i){return new(i||e)(y(j),y(q),y(pe,8))},e.\u0275cmp=_({type:e,selectors:[["nz-timeline"]],contentQueries:function(i,o,d){if(i&1&&ee(d,w,4),i&2){let B;N(B=M())&&(o.listOfItems=B)}},inputs:{nzMode:"nzMode",nzPending:"nzPending",nzPendingDot:"nzPendingDot",nzReverse:[2,"nzReverse","nzReverse",oe]},exportAs:["nzTimeline"],standalone:!0,features:[ie([q]),X,T,k],ngContentSelectors:he,decls:7,vars:15,consts:[["pendingTemplate",""],[1,"ant-timeline"],[3,"ngTemplateOutlet",4,"ngIf"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["class","ant-timeline-item ant-timeline-item-pending",4,"ngIf"],[1,"ant-timeline-item","ant-timeline-item-pending"],[1,"ant-timeline-item-tail"],[1,"ant-timeline-item-head","ant-timeline-item-head-custom","ant-timeline-item-head-blue"],[4,"nzStringTemplateOutlet"],[1,"ant-timeline-item-content"],["nz-icon","","nzType","loading",4,"ngIf"],["nz-icon","","nzType","loading"]],template:function(i,o){i&1&&(D(),l(0,"ul",1),c(1,Ie,1,1,"ng-container",2)(2,Te,2,1,"ng-container",3)(3,Oe,1,1,"ng-container",2),m(),c(4,Me,1,1,"ng-template",null,0,E),F(6)),i&2&&(x("ant-timeline-label",o.hasLabelItem)("ant-timeline-right",!o.hasLabelItem&&o.nzMode==="right")("ant-timeline-alternate",o.nzMode==="alternate"||o.nzMode==="custom")("ant-timeline-pending",!!o.nzPending)("ant-timeline-reverse",o.nzReverse)("ant-timeline-rtl",o.dir==="rtl"),r(),s("ngIf",o.nzReverse),r(),s("ngForOf",o.timelineItems),r(),s("ngIf",!o.nzReverse))},dependencies:[R,ae,I,V,$,de,ce],encapsulation:2,changeDetection:0});let t=e;return t})();function fe(t){return!!(t&&(t.previousValue!==t.currentValue||t.isFirstChange()))}function ke(t,e){return e==="custom"?void 0:e==="left"?"left":e==="right"?"right":e==="alternate"&&t%2===0?"left":"right"}var ge=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=g({type:e}),e.\u0275inj=h({imports:[w,H]});let t=e;return t})();function je(t,e){if(t&1&&(l(0,"nz-timeline-item",12)(1,"div",13),p(2),m(),f(3,"div",14),m()),t&2){let n=e.$implicit;s("nzColor","#e9541c"),r(2),z(n.title),r(),s("innerHTML",n.content,J)}}function Re(t,e){if(t&1&&(l(0,"div",15),p(1),m()),t&2){let n=e.$implicit,a=e.index;r(),ne(" ",a+1,". ",n," ")}}var ye=(()=>{let e=class e extends le{constructor(){super(...arguments),this.stepList=[{title:"Finding your Furry Friend",content:"Our website and instagram page are constantly being updated with the most recent and past rescues. <br>Head to the \u201Cavailable for adoption\u201D pages to search for your perfect match. <br>Learn more about them and their rescue stories by selecting \u201Cread more.\u201D"},{title:"Filling out an Application",content:"Once you have selected your preferred animal, fill out an application form, also found at the end of each animal\u2019s description, to state your interest. <br>Due to the volume of applications we get, it may take up to 2 weeks for us to process the applications. <br>Again, you will only hear back from us if you have been selected to move on to step 3: home visit."},{title:"Arranging a Home Visit",content:"SDC will contact you via phone number or email to arrange a home visit if you have been selected to move forward with your application. <br>Under the circumstances, a virtual meet and greet will also be possible if you feel more comfortable with that option."},{title:"Meet and Greet",content:"During this stage, we will chat with you to get to know you a little more and your interest regarding the animal. <br>You may also ask questions and get to know the organization more as well."},{title:"Finalizing the Details of the Adoption",content:"If everything goes well during the meet and greet, we will forward you an adoption agreement form in which you would have to read and fill out.  <br>This includes details about payment and your responsibility and commitment towards the animal you\u2019re adopting. <br> Payments can be e-transferred to the SaveDogCat email. <br>Note that prices may vary between each adoption and will take into account any vaccination and medical records as well as flight fees if your animal is currently being fostered in a different country."},{title:"Arrival of your Furry Friend",content:"If your furry friend is located in a different country and needs to be transported to you via flight, we will give you details about the date and time of arrival as well as the preparations beforehand."}],this.adoptionRequirements=["Have a stable home and income","Do not abandon your pet due to reasons such as pregnancy, relocation, change of city and etc.","Regular feeding of small animals and taking the time to walk the animals if needed","Vaccinating on time, ensuring they\u2019re healthy and sterilizing at the right age (No adopted animals are for breeding)","Signing the adoption agreement and agreeing to visits regularly"]}};e.\u0275fac=(()=>{let a;return function(o){return(a||(a=G(e)))(o||e)}})(),e.\u0275cmp=_({type:e,selectors:[["app-adopt-landing"]],features:[K],decls:19,vars:2,consts:[[1,"text-center","mt-8","mb-4"],[1,"my-4","text-grey","px-4","md:px-24","lg:px-48"],[1,"text-center"],[1,"container"],["src","adopt/adoption.jpeg",1,"banner"],[1,"text-wrapper"],[1,"text-white","font-bold","title"],[1,"px-4","md:px-24","my-12","grid","gap-12"],["appIntersectionObserver","",1,"adoption-timeline","hide-content",3,"visible"],[3,"nzColor",4,"ngFor","ngForOf"],["appIntersectionObserver","",1,"adoption-requirement","hide-content",3,"visible"],["class","text-grey text-left my-1",4,"ngFor","ngForOf"],[3,"nzColor"],[1,"text-xl","font-bold","mx-2"],[1,"text-grey","mx-2",3,"innerHTML"],[1,"text-grey","text-left","my-1"]],template:function(i,o){i&1&&(l(0,"div",0)(1,"h1"),p(2,"Adopt"),m(),l(3,"div",1),p(4," SavePets\u2019s mission is to provide forever homes for the hundreds of animals that need our help. But, as important as it is to ensure that the animals are a suitable match for you, we also want to ensure that you\u2019re in the right position to adopt one. Our adoption process is simple: select which animal you\u2019re interested in, fill out an application form and if selected, there will be a home visit to get to know you a bit more and for further instructions. Note that due to the high volume of adopters we get, you may not hear back from us unless you are selected to move forward with the home visit. However, this doesn\u2019t mean that you don\u2019t meet the criteria. We encourage you to stay updated on our \u201Cadopted\u201D to check whether an adopter has already been found. "),m()(),l(5,"div",2)(6,"div",3),f(7,"img",4),l(8,"div",5)(9,"div",6),p(10," Thanks for adopting instead of buying! "),m()()(),l(11,"div",7)(12,"white-card",8),S("visible",function(){return o.onVisible("adoption-timeline")}),l(13,"nz-timeline"),c(14,je,4,3,"nz-timeline-item",9),m()(),l(15,"white-card",10),S("visible",function(){return o.onVisible("adoption-requirement")}),l(16,"h1"),p(17,"Adoption requirements"),m(),c(18,Re,2,2,"div",11),m()()()),i&2&&(r(14),s("ngForOf",o.stepList),r(4),s("ngForOf",o.adoptionRequirements))},dependencies:[I,se,me,w,H],styles:[".container[_ngcontent-%COMP%]{position:relative;color:#fff}.text-wrapper[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}@media only screen and (min-width: 1000px){.text-wrapper[_ngcontent-%COMP%]{top:50%;left:20%;transform:translateY(-50%)}}@media only screen and (min-width: 600px){.title[_ngcontent-%COMP%]{font-size:2rem}}@media only screen and (min-width: 1000px){.title[_ngcontent-%COMP%]{font-size:3rem}}.banner[_ngcontent-%COMP%]{width:100vw!important;max-width:100vw!important;height:auto;object-fit:cover}"]});let t=e;return t})();var Ae=[{path:"",component:ye}],ve=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=g({type:e}),e.\u0275inj=h({imports:[A.forChild(Ae),A]});let t=e;return t})();var vt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=g({type:e}),e.\u0275inj=h({imports:[re,ve,ue,ge]});let t=e;return t})();export{vt as AdoptModule};
