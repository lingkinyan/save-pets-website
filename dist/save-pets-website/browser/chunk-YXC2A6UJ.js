import{e as A,f as H,g as R,h as O,i as W,k as Y,l as J,m as K,n as Q}from"./chunk-BAJDQO64.js";import{$ as k,L as D,M as u,O as V,P as j,T as L,W as U,Z as G,aa as q,ba as B}from"./chunk-X4B4AAE4.js";import{a as M}from"./chunk-CITOBFNM.js";import{S as E,T as w,U as T,V as P,d as _,i as I,l as h}from"./chunk-Q2VCSFCF.js";import{Db as o,Eb as r,Fb as a,Hc as F,Jb as y,Lb as b,Mb as p,Nc as S,Ub as s,bb as c,cb as v,ea as f,oa as N,pa as g,tb as x,vb as l,ya as z,za as C}from"./chunk-67UXXLWY.js";function tt(e,t){if(e&1){let m=y();o(0,"form",8),b("ngSubmit",function(){z(m);let i=p(2);return C(i.submitForm())}),o(1,"div",9)(2,"nz-form-item")(3,"nz-form-control",10)(4,"nz-input-group",11),a(5,"input",12),r()()(),o(6,"nz-form-item")(7,"nz-form-control",13)(8,"nz-input-group",11),a(9,"input",14),r()()(),o(10,"nz-form-item",15)(11,"nz-form-control",16)(12,"nz-input-group",17),a(13,"input",18),r()()(),o(14,"nz-form-item",15)(15,"nz-form-control",19),a(16,"textarea",20),r()(),o(17,"nz-form-item",15)(18,"nz-form-control")(19,"button",21),s(20," Submit "),r()()()()()}if(e&2){let m=p(2);l("formGroup",m.validateForm),c(19),l("disabled",!m.validateForm.valid)}}function et(e,t){if(e&1&&(o(0,"div",5)(1,"div",6),s(2," Please leave your message here and "),a(3,"br"),s(4," we will contact you as soon as possible! "),r(),x(5,tt,21,2,"form",7),r()),e&2){let m=p();c(5),l("ngIf",!m.isFormSubmitted)}}function it(e,t){if(e&1){let m=y();o(0,"div",22)(1,"div",23),s(2," Your form has been submitted successfully. "),a(3,"br"),s(4," We will contact you as soon as possible! "),r(),o(5,"div",15)(6,"button",24),b("click",function(){z(m);let i=p();return C(i.routeToHomePage())}),s(7," Back to Home Page "),r()()()}}var Z=(()=>{let t=class t{constructor(n,i,d){this.fb=n,this.router=i,this.title=d,this.validateForm=this.fb.group({firstName:["",[u.required]],lastName:["",[u.required]],email:["",[u.required]],message:["",[u.required]]}),this.isFormSubmitted=!1,this.title.setTitle("Contact Us | Pet Save")}submitForm(){this.validateForm.valid?(console.log("submit",this.validateForm.value),this.validateForm.reset(),this.isFormSubmitted=!0):Object.values(this.validateForm.controls).forEach(n=>{n.invalid&&(n.markAsDirty(),n.updateValueAndValidity({onlySelf:!0}))})}routeToHomePage(){this.router.navigate(["/home"])}};t.\u0275fac=function(i){return new(i||t)(v(k),v(I),v(_))},t.\u0275cmp=N({type:t,selectors:[["app-contact-us-landing"]],decls:7,vars:2,consts:[[1,"text-center","mt-8","mb-4"],[1,"px-4","md:px-24","text-center","grid","lg:grid-cols-2","gap-4"],["src","contact-us/contact-us.jpeg","alt","Contact Us"],["class","text-grey my-4 md:my-auto",4,"ngIf"],["class","my-auto",4,"ngIf"],[1,"text-grey","my-4","md:my-auto"],[1,"my-4"],["nz-form","","class","my-auto",3,"formGroup","ngSubmit",4,"ngIf"],["nz-form","",1,"my-auto",3,"ngSubmit","formGroup"],[1,"grid","lg:grid-cols-2","gap-4"],["nzErrorTip","Please input your first name"],["nzPrefixIcon","user"],["type","text","nz-input","","formControlName","firstName","placeholder","First Name"],["nzErrorTip","Please input your last name"],["type","text","nz-input","","formControlName","lastName","placeholder","Last Name"],[1,"col-span-full"],["nzErrorTip","Please input your email"],["nzPrefixIcon","mail"],["type","text","nz-input","","formControlName","email","placeholder","Email"],["nzErrorTip","Please input your message"],["nzPrefixIcon","message","rows","4","nz-input","","formControlName","message","placeholder","Message"],["nz-button","","nzSize","large",1,"ant-btn-orange",3,"disabled"],[1,"my-auto"],[1,"text-xl","font-bold"],["nz-button","","nzSize","large",1,"ant-btn-orange","my-4",3,"click"]],template:function(i,d){i&1&&(o(0,"div",0)(1,"h1"),s(2,"Contact Us"),r()(),o(3,"div",1),a(4,"img",2),x(5,et,6,1,"div",3)(6,it,8,0,"div",4),r()),i&2&&(c(5),l("ngIf",!d.isFormSubmitted),c(),l("ngIf",d.isFormSubmitted))},dependencies:[F,H,A,O,R,W,J,K,L,D,V,j,T,E,w,U,G],styles:["img[_ngcontent-%COMP%]{border-radius:1rem;min-height:25rem;width:100%;object-fit:cover}"]});let e=t;return e})();var ot=[{path:"",component:Z}],$=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=g({type:t}),t.\u0275inj=f({imports:[h.forChild(ot),h]});let e=t;return e})();var Et=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=g({type:t}),t.\u0275inj=f({imports:[S,$,M,Y,Q,q,P,B]});let e=t;return e})();export{Et as ContactUsModule};