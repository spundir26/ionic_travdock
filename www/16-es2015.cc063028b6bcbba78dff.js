(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"ct+p":function(e,t,n){"use strict";n.r(t),n.d(t,"HomePageModule",(function(){return p}));var o=n("ofXK"),a=n("3Pt+"),r=n("TEn/"),i=n("tyNb"),l=n("eYLY"),u=n("fXoL"),b=n("n90K");let h=(()=>{class e{constructor(e,t){this.storageService=e,this.router=t}canActivate(){return new Promise(e=>{this.storageService.get(l.a.AUTH).then(t=>{t?e(!0):(this.router.navigate([""]),e(!1))}).catch(t=>{e(!1)})})}}return e.\u0275fac=function(t){return new(t||e)(u.Ob(b.a),u.Ob(i.g))},e.\u0275prov=u.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var c=n("lGQG");const s=[{path:"home",canActivate:[h],resolve:{userData:(()=>{class e{constructor(e){this.authService=e}resolve(){console.log("coming from home page"),this.authService.getUserData()}}return e.\u0275fac=function(t){return new(t||e)(u.Ob(c.a))},e.\u0275prov=u.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},children:[{path:"",component:(()=>{class e{constructor(e,t,n){this.authService=e,this.router=t,this.activatedRoute=n}ngOnInit(){this.authService.userData$.subscribe(e=>{this.uData=e})}goHomePage(){this.router.navigate(["../../home"],{relativeTo:this.activatedRoute.parent})}}return e.\u0275fac=function(t){return new(t||e)(u.Hb(c.a),u.Hb(i.g),u.Hb(i.a))},e.\u0275cmp=u.Bb({type:e,selectors:[["app-home"]],decls:24,vars:1,consts:[[1,"main-toolbar"],["slot","start"],["auto-hide","false","menu","main-menu"],[1,"ion-padding"],["slot","bottom"],["tab","tourcard"],["name","open-outline"],["tab","helpline"],["name","grid-outline"],["tab","feed"],["name","chatbubbles-outline"]],template:function(e,t){1&e&&(u.Kb(0,"ion-toolbar",0),u.Kb(1,"ion-buttons",1),u.Ib(2,"ion-menu-button",2),u.Jb(),u.Kb(3,"ion-title"),u.hc(4,"Caper Travel"),u.Jb(),u.Jb(),u.Kb(5,"ion-content",3),u.Ib(6,"br"),u.Ib(7,"br"),u.Kb(8,"ion-grid"),u.hc(9),u.Jb(),u.Jb(),u.Kb(10,"ion-tabs"),u.Kb(11,"ion-tab-bar",4),u.Kb(12,"ion-tab-button",5),u.Ib(13,"ion-icon",6),u.Kb(14,"ion-label"),u.hc(15,"Tour Card"),u.Jb(),u.Jb(),u.Kb(16,"ion-tab-button",7),u.Ib(17,"ion-icon",8),u.Kb(18,"ion-label"),u.hc(19,"Helpline"),u.Jb(),u.Jb(),u.Kb(20,"ion-tab-button",9),u.Ib(21,"ion-icon",10),u.Kb(22,"ion-label"),u.hc(23,"Support"),u.Jb(),u.Jb(),u.Jb(),u.Jb()),2&e&&(u.xb(9),u.jc("Welcome, ",null==t.uData?null:t.uData.name,""))},directives:[r.H,r.e,r.v,r.G,r.l,r.n,r.E,r.C,r.D,r.p,r.s],styles:["ion-title[_ngcontent-%COMP%]{font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif;font-size:20px;font-weight:600}.main-toolbar[_ngcontent-%COMP%]{--background:#00a85a;color:#fff}"]}),e})()},{path:"feed",loadChildren:()=>n.e(18).then(n.bind(null,"SwR0")).then(e=>e.FeedPageModule)},{path:"itinerary",loadChildren:()=>n.e(19).then(n.bind(null,"5azT")).then(e=>e.ItineraryPageModule)},{path:"tourcard",loadChildren:()=>n.e(21).then(n.bind(null,"uua9")).then(e=>e.TourcardPageModule)},{path:"vouchers",loadChildren:()=>n.e(22).then(n.bind(null,"m8FW")).then(e=>e.VouchersPageModule)},{path:"rvouchers",loadChildren:()=>n.e(5).then(n.bind(null,"qujD")).then(e=>e.RvoucherPageModule)},{path:"tvouchers",loadChildren:()=>n.e(7).then(n.bind(null,"1g9x")).then(e=>e.TvoucherPageModule)},{path:"helpline",loadChildren:()=>n.e(3).then(n.bind(null,"pPru")).then(e=>e.HelplinePageModule)},{path:"monuments",loadChildren:()=>n.e(4).then(n.bind(null,"y4x0")).then(e=>e.MonumentsPageModule)},{path:"train",loadChildren:()=>n.e(6).then(n.bind(null,"GgGd")).then(e=>e.TrainPageModule)},{path:"flight",loadChildren:()=>n.e(2).then(n.bind(null,"gqs4")).then(e=>e.FlightPageModule)}]}];let d=(()=>{class e{}return e.\u0275mod=u.Fb({type:e}),e.\u0275inj=u.Eb({factory:function(t){return new(t||e)},imports:[[i.i.forChild(s)],i.i]}),e})(),p=(()=>{class e{}return e.\u0275mod=u.Fb({type:e}),e.\u0275inj=u.Eb({factory:function(t){return new(t||e)},imports:[[o.b,a.b,r.I,d]]}),e})()}}]);