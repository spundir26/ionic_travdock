(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{m8FW:function(t,o,e){"use strict";e.r(o),e.d(o,"VouchersPageModule",(function(){return k}));var n=e("ofXK"),c=e("3Pt+"),i=e("TEn/"),r=e("tyNb"),s=e("mrSG"),a=e("gcOT"),b=e("fXoL"),h=e("lGQG"),l=e("2g2N");function u(t,o){if(1&t){const t=b.Lb();b.Kb(0,"ion-item"),b.Kb(1,"ion-label"),b.Kb(2,"h2"),b.hc(3),b.Jb(),b.Kb(4,"h3"),b.hc(5),b.Jb(),b.Kb(6,"p"),b.hc(7),b.Jb(),b.Jb(),b.Kb(8,"ion-icon",4),b.Sb("click",(function(){b.dc(t);const e=o.$implicit;return b.Ub(2).openBrowser(e.id)})),b.Jb(),b.Kb(9,"ion-icon",5),b.Sb("click",(function(){b.dc(t);const e=o.$implicit,n=b.Ub(2);return n.shareSocial(e.id,e.hotel_name,n.voData.tour_id)})),b.Jb(),b.Jb()}if(2&t){const t=o.$implicit;b.xb(3),b.ic(t.hotel_name),b.xb(2),b.kc("",t.room_type," :: ",t.meal,""),b.xb(2),b.lc("",t.city_name,", Checkin:",t.check_in,", Checkout:",t.check_out,"")}}function p(t,o){if(1&t&&(b.Kb(0,"ion-content"),b.Kb(1,"ion-list"),b.gc(2,u,10,6,"ion-item",3),b.Jb(),b.Jb()),2&t){const t=b.Ub();b.xb(2),b.Zb("ngForOf",t.voData.vo)}}const{Browser:d}=a.a,{Share:f}=a.a,m=[{path:"",component:(()=>{class t{constructor(t,o){this.authService=t,this.toastService=o,this.postData={id:0}}ngOnInit(){this.authService.userData$.subscribe(t=>{this.uData=t,this.postData.id=t.id,this.loadHotelVouchers()})}shareSocial(t,o,e){return Object(s.a)(this,void 0,void 0,(function*(){yield f.share({title:"File Code: "+e,text:"Hotel Voucher: "+o,dialogTitle:"Hotel Voucher: "+o,url:"https://travdock.com/tms/reports/hotel-voucher-app.php?vrcode="+t+"&type=p"})}))}loadHotelVouchers(){this.authService.getHotelVoucher(this.postData).subscribe(t=>{this.voData=t.data},t=>{this.toastService.presentToast("Network connection error!")})}openBrowser(t){d.open({url:"https://travdock.com/tms/reports/hotel-voucher-app.php?vrcode="+t+"&type=p"})}}return t.\u0275fac=function(o){return new(o||t)(b.Hb(h.a),b.Hb(l.a))},t.\u0275cmp=b.Bb({type:t,selectors:[["app-vouchers"]],decls:7,vars:1,consts:[["slot","start"],["defaultHref","home"],[4,"ngIf"],[4,"ngFor","ngForOf"],["name","eye-sharp","slot","end",3,"click"],["name","share-social-sharp","slot","end",3,"click"]],template:function(t,o){1&t&&(b.Kb(0,"ion-header"),b.Kb(1,"ion-toolbar"),b.Kb(2,"ion-title"),b.hc(3,"Hotel Vouchers"),b.Jb(),b.Kb(4,"ion-buttons",0),b.Ib(5,"ion-back-button",1),b.Jb(),b.Jb(),b.Jb(),b.gc(6,p,3,1,"ion-content",2)),2&t&&(b.xb(6),b.Zb("ngIf",o.voData))},directives:[i.o,i.H,i.G,i.e,i.b,i.c,n.k,i.l,i.t,n.j,i.r,i.s,i.p],styles:["h2[_ngcontent-%COMP%]{font-size:18px}ion-icon[_ngcontent-%COMP%]{cursor:pointer}"]}),t})()}];let v=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(o){return new(o||t)},imports:[[r.i.forChild(m)],r.i]}),t})(),k=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(o){return new(o||t)},imports:[[n.b,c.b,i.I,v]]}),t})()}}]);