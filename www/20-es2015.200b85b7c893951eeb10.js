(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{F4UR:function(t,e,n){"use strict";n.r(e),n.d(e,"LoginPageModule",(function(){return u}));var o=n("ofXK"),s=n("3Pt+"),r=n("TEn/"),i=n("tyNb"),a=n("eYLY"),c=n("fXoL"),b=n("lGQG"),p=n("n90K"),d=n("2g2N");const h=[{path:"",component:(()=>{class t{constructor(t,e,n,o){this.authService=t,this.storageServece=e,this.router=n,this.toastService=o,this.postData={username:"",password:""},this.passwordType="password",this.passwordIcon="eye-off"}ngOnInit(){}validateInputs(){let t=this.postData.username.trim(),e=this.postData.password.trim();return this.postData.username&&this.postData.password&&t.length>0&&e.length>0}loginAction(){this.validateInputs()?this.authService.login(this.postData).subscribe(t=>{this.resData=t,t.userData?(this.storageServece.store(a.a.AUTH,t.userData),this.router.navigate(["home"])):this.toastService.presentToast("Incorrect Username or Password!")},t=>{this.errMsg=t,this.toastService.presentToast("Network connection error!")}):this.toastService.presentToast("Please input Username and Password!")}doRefresh(t){console.log("Begin async operation"),setTimeout(()=>{console.log("Async operation has ended"),t.target.complete()},2e3)}hideShowPassword(){this.passwordType="text"===this.passwordType?"password":"text",this.passwordIcon="eye-off"===this.passwordIcon?"eye":"eye-off"}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(b.a),c.Hb(p.a),c.Hb(i.g),c.Hb(d.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-login"]],decls:23,vars:4,consts:[["slot","start"],["slot","fixed",3,"ionRefresh"],["position","stacked"],["type","text","name","username",3,"ngModel","ngModelChange"],["color","grey","item-end","",3,"name","click"],["name","password",3,"type","ngModel","ngModelChange"],["shape","round","color","warning","expand","block",3,"click"]],template:function(t,e){1&t&&(c.Kb(0,"ion-header"),c.Kb(1,"ion-toolbar"),c.Kb(2,"ion-title"),c.hc(3,"Login"),c.Jb(),c.Kb(4,"ion-buttons",0),c.Ib(5,"ion-back-button"),c.Jb(),c.Jb(),c.Jb(),c.Kb(6,"ion-content"),c.Kb(7,"ion-refresher",1),c.Sb("ionRefresh",(function(t){return e.doRefresh(t)})),c.Ib(8,"ion-refresher-content"),c.Jb(),c.Ib(9,"br"),c.Ib(10,"br"),c.Kb(11,"ion-list"),c.Kb(12,"ion-items"),c.Kb(13,"ion-label",2),c.hc(14,"Username"),c.Jb(),c.Kb(15,"ion-input",3),c.Sb("ngModelChange",(function(t){return e.postData.username=t})),c.Jb(),c.Jb(),c.Kb(16,"ion-items"),c.Kb(17,"ion-label",2),c.hc(18,"Password "),c.Jb(),c.Kb(19,"ion-icon",4),c.Sb("click",(function(){return e.hideShowPassword()})),c.Jb(),c.Kb(20,"ion-input",5),c.Sb("ngModelChange",(function(t){return e.postData.password=t})),c.Jb(),c.Jb(),c.Kb(21,"ion-button",6),c.Sb("click",(function(){return e.loginAction()})),c.hc(22,"Sign in"),c.Jb(),c.Jb(),c.Jb()),2&t&&(c.xb(15),c.Zb("ngModel",e.postData.username),c.xb(4),c.Zb("name",e.passwordIcon),c.xb(1),c.Zb("type",e.passwordType)("ngModel",e.postData.password))},directives:[r.o,r.H,r.G,r.e,r.b,r.c,r.l,r.x,r.y,r.t,r.s,r.q,r.N,s.e,s.f,r.p,r.d],styles:["ion-content[_ngcontent-%COMP%]{--padding-start:10px;--padding-end:10px}ion-input[_ngcontent-%COMP%]{border-bottom:1px solid #6495ed;margin-bottom:10px}ion-icon[_ngcontent-%COMP%]{float:right;font-size:22px}ion-back-button[_ngcontent-%COMP%]{display:block}ion-button[_ngcontent-%COMP%]{text-align:center;font-weight:600;margin-top:50px}"]}),t})()}];let l=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(e){return new(e||t)},imports:[[i.i.forChild(h)],i.i]}),t})(),u=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(e){return new(e||t)},imports:[[o.b,s.b,r.I,l]]}),t})()}}]);