!function(){"use strict";function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function t(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}(self.webpackChunkacal=self.webpackChunkacal||[]).push([[896],{96896:function(e,i,r){r.r(i),r.d(i,{PlaceModule:function(){return P}});var o,u=r(55051),s=r(80798),a=r(38583),c=r(3679),d=r(97142),l=r(89841),g=r(59650),f=r(50628),_=r(99763),m=r(37716),h=r(33132),U=r(94891),b=r(67426),p=((o=function(){function e(t,i,r,o,u){n(this,e),this.formBuilder=t,this.activatedRoute=i,this.router=r,this.service=o,this.toastrService=u,this.submmited=!1}return t(e,[{key:"ngOnInit",value:function(){this.form=this.formBuilder.group({number:[null,c.kI.required],letter:[null,c.kI.required],address:[null,c.kI.required]})}},{key:"selectAddress",value:function(n){this.address.setValue(n)}},{key:"submit",value:function(){var n=this;this.submmited=!0,!this.form.invalid&&this.service.save(this.form.value).subscribe(function(){n.toastrService.success("Sucesso","Novo Registro adicionado"),n.router.navigate(["../list"],{relativeTo:n.activatedRoute})},function(){n.toastrService.danger("Erro ao salvar","N\xe3o foi possivel realizar a a\xe7\xe3o")})}},{key:"back",value:function(){this.router.navigate(["../list"],{relativeTo:this.activatedRoute})}},{key:"getStatus",value:function(n){return this.form.get(n).valid&&(this.form.get(n).touched||this.submmited)?"success":this.form.get(n).valid||!this.form.get(n).touched&&!this.submmited?"basic":"danger"}},{key:"number",get:function(){return this.form.get("number")}},{key:"letter",get:function(){return this.form.get("letter")}},{key:"address",get:function(){return this.form.get("address")}}]),e}()).\u0275fac=function(n){return new(n||o)(m.Y36(c.qu),m.Y36(_.gz),m.Y36(_.F0),m.Y36(h.k),m.Y36(d.quB))},o.\u0275cmp=m.Xpm({type:o,selectors:[["ngx-place-add"]],decls:67,vars:10,consts:[[3,"formGroup","submit"],[1,"row"],[1,"col-lg-12"],[1,"row","mb-3"],[1,"col-12"],[3,"status","selectAddress"],[3,"message","show"],[1,"col-md-6","col-12"],["for","number",1,"label"],["id","number","mask","0*","nbInput","","fullWidth","","placeholder","N\xfamero:","formControlName","number",3,"status"],["for","letter",1,"label"],["id","letter","type","text","mask","A*","nbInput","","fullWidth","","placeholder","Letra:","formControlName","letter",3,"status"],[1,"d-flex","justify-content-between"],["type","button","nbButton","","outline","","status","basic",3,"click"],["icon","arrow-back-outline"],["type","submit","nbButton","","outline","","status","success"],["icon","save-outline"]],template:function(n,e){1&n&&(m.TgZ(0,"form",0),m.NdJ("submit",function(){return e.submit()}),m._uU(1,"\n  "),m.TgZ(2,"div",1),m._uU(3,"\n    "),m.TgZ(4,"div",2),m._uU(5,"\n      "),m.TgZ(6,"nb-card"),m._uU(7,"\n\n        "),m.TgZ(8,"nb-card-header"),m._uU(9,"\n          Novo Local\n        "),m.qZA(),m._uU(10,"\n\n        "),m.TgZ(11,"nb-card-body"),m._uU(12,"\n\n          "),m.TgZ(13,"div",3),m._uU(14,"\n\n            "),m.TgZ(15,"div",4),m._uU(16,"\n              "),m.TgZ(17,"ngx-select-address",5),m.NdJ("selectAddress",function(n){return e.selectAddress(n)}),m.qZA(),m._uU(18,"\n              "),m._UZ(19,"error-message",6),m._uU(20,"\n            "),m.qZA(),m._uU(21,"\n\n          "),m.qZA(),m._uU(22,"\n\n          "),m.TgZ(23,"div",3),m._uU(24,"\n\n            "),m.TgZ(25,"div",7),m._uU(26,"\n              "),m.TgZ(27,"label",8),m._uU(28,"N\xfamero:"),m.qZA(),m._uU(29,"\n              "),m._UZ(30,"input",9),m._uU(31,"\n              "),m._UZ(32,"error-message",6),m._uU(33,"\n            "),m.qZA(),m._uU(34,"\n\n            "),m.TgZ(35,"div",7),m._uU(36,"\n              "),m.TgZ(37,"label",10),m._uU(38,"Letra:"),m.qZA(),m._uU(39,"\n              "),m._UZ(40,"input",11),m._uU(41,"\n              "),m._UZ(42,"error-message",6),m._uU(43,"\n            "),m.qZA(),m._uU(44,"\n\n          "),m.qZA(),m._uU(45,"\n\n        "),m.qZA(),m._uU(46,"\n        "),m.TgZ(47,"nb-card-footer"),m._uU(48,"\n\n          "),m.TgZ(49,"div",12),m._uU(50,"\n            "),m.TgZ(51,"button",13),m.NdJ("click",function(){return e.back()}),m._uU(52,"\n              "),m._UZ(53,"nb-icon",14),m._uU(54,"\n            "),m.qZA(),m._uU(55,"\n\n            "),m.TgZ(56,"button",15),m._uU(57,"\n              "),m._UZ(58,"nb-icon",16),m._uU(59,"\n            "),m.qZA(),m._uU(60,"\n          "),m.qZA(),m._uU(61,"\n\n        "),m.qZA(),m._uU(62,"\n      "),m.qZA(),m._uU(63,"\n\n    "),m.qZA(),m._uU(64,"\n\n  "),m.qZA(),m._uU(65,"\n"),m.qZA(),m._uU(66,"\n")),2&n&&(m.Q6J("formGroup",e.form),m.xp6(17),m.Q6J("status",e.getStatus("address")),m.xp6(2),m.Q6J("message","Endere\xe7o \xe9 obrigat\xf3rio")("show",(null==e.address.errors?null:e.address.errors.required)&&(e.submmited||e.form.touched)),m.xp6(11),m.Q6J("status",e.getStatus("number")),m.xp6(2),m.Q6J("message","N\xfamero \xe9 obrigat\xf3rio")("show",(null==e.number.errors?null:e.number.errors.required)&&(e.submmited||e.form.touched)),m.xp6(8),m.Q6J("status",e.getStatus("letter")),m.xp6(2),m.Q6J("message","Letra \xe9 obrigat\xf3rio")("show",(null==e.letter.errors?null:e.letter.errors.required)&&(e.submmited||e.form.touched)))},directives:[c._Y,c.JL,c.sg,d.Asz,d.ndF,d.yKW,U.H,b.H,f.hx,d.h8i,c.Fj,c.JJ,c.u,d.XWE,d.DPz,d.fMN],styles:[""]}),o),Z=function(){var e=t(function e(){n(this,e)});return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m.Xpm({type:e,selectors:[["ngx-place-delete"]],decls:3,vars:0,template:function(n,e){1&n&&(m.TgZ(0,"p"),m._uU(1,"customer-delete works!"),m.qZA(),m._uU(2,"\n"))},styles:[""]}),e}(),v=r(65382);function A(n,e){if(1&n){var t=m.EpF();m.TgZ(0,"div"),m._uU(1,"\n  "),m.TgZ(2,"form",1),m.NdJ("submit",function(){return m.CHM(t),m.oxw().submit()}),m._uU(3,"\n    "),m.TgZ(4,"div",2),m._uU(5,"\n      "),m.TgZ(6,"div",3),m._uU(7,"\n        "),m.TgZ(8,"nb-card"),m._uU(9,"\n\n          "),m.TgZ(10,"nb-card-header"),m._uU(11,"\n            Atualizar Endereco\n          "),m.qZA(),m._uU(12,"\n\n          "),m.TgZ(13,"nb-card-body"),m._uU(14,"\n            "),m.TgZ(15,"div",4),m._uU(16,"\n\n              "),m.TgZ(17,"div",5),m._uU(18,"\n                "),m.TgZ(19,"label",6),m._uU(20,"Nome:"),m.qZA(),m._uU(21,"\n                "),m._UZ(22,"input",7),m._uU(23,"\n                "),m._UZ(24,"error-message",8),m._uU(25,"\n              "),m.qZA(),m._uU(26,"\n\n            "),m.qZA(),m._uU(27,"\n\n          "),m.qZA(),m._uU(28,"\n          "),m.TgZ(29,"nb-card-footer"),m._uU(30,"\n\n            "),m.TgZ(31,"div",9),m._uU(32,"\n              "),m.TgZ(33,"button",10),m.NdJ("click",function(){return m.CHM(t),m.oxw().back()}),m._uU(34,"\n                "),m._UZ(35,"nb-icon",11),m._uU(36,"\n              "),m.qZA(),m._uU(37,"\n\n              "),m.TgZ(38,"button",12),m._uU(39,"\n                "),m._UZ(40,"nb-icon",13),m._uU(41,"\n              "),m.qZA(),m._uU(42,"\n            "),m.qZA(),m._uU(43,"\n\n          "),m.qZA(),m._uU(44,"\n        "),m.qZA(),m._uU(45,"\n\n      "),m.qZA(),m._uU(46,"\n\n    "),m.qZA(),m._uU(47,"\n  "),m.qZA(),m._uU(48,"\n\n"),m.qZA()}if(2&n){var i=m.oxw();m.xp6(2),m.Q6J("formGroup",i.form),m.xp6(20),m.Q6J("status",i.getStatus("name")),m.xp6(2),m.Q6J("message","Nome \xe9 obrigat\xf3rio")("show",(null==i.name.errors?null:i.name.errors.required)&&(i.submmited||i.form.touched))}}var q=function(){var e=function(){function e(t,i,r,o,u,s){n(this,e),this.data=t,this.service=i,this.formBuilder=r,this.activatedRoute=o,this.router=u,this.toastrService=s,this.loaded=!1,this.submmited=!1}return t(e,[{key:"ngOnInit",value:function(){var n=this;this.id=this.data.id,this.service.getById(this.id).subscribe(function(e){n.place=e,n.form=n.formBuilder.group({id:[e.id,c.kI.required]}),n.loaded=!0})}},{key:"submit",value:function(){var n=this;this.submmited=!0,!this.form.invalid&&this.service.update(this.form.value).subscribe(function(){n.toastrService.success("Sucesso","Novo Registro adicionado"),n.router.navigate(["../list"],{relativeTo:n.activatedRoute})},function(){n.toastrService.danger("Erro ao salvar","N\xe3o foi possivel realizar a a\xe7\xe3o")})}},{key:"back",value:function(){this.router.navigate(["../list"],{relativeTo:this.activatedRoute})}},{key:"getStatus",value:function(n){return this.form.get(n).valid&&(this.form.get(n).touched||this.submmited)?"success":this.form.get(n).valid||!this.form.get(n).touched&&!this.submmited?"basic":"danger"}},{key:"name",get:function(){return this.form.get("name")}}]),e}();return e.\u0275fac=function(n){return new(n||e)(m.Y36(v.D),m.Y36(h.k),m.Y36(c.qu),m.Y36(_.gz),m.Y36(_.F0),m.Y36(d.quB))},e.\u0275cmp=m.Xpm({type:e,selectors:[["ngx-place-edit"]],decls:3,vars:1,consts:[[4,"ngIf"],[3,"formGroup","submit"],[1,"row"],[1,"col-lg-12"],[1,"row","mb-3"],[1,"col-12"],["for","name",1,"label"],["id","name","type","text","nbInput","","fullWidth","","placeholder","Nome:","formControlName","name",3,"status"],[3,"message","show"],[1,"d-flex","justify-content-between"],["type","button","nbButton","","outline","","status","basic",3,"click"],["icon","arrow-back-outline"],["type","submit","nbButton","","outline","","status","success"],["icon","save-outline"]],template:function(n,e){1&n&&(m._uU(0,"\n"),m.YNc(1,A,49,4,"div",0),m._uU(2,"\n")),2&n&&(m.xp6(1),m.Q6J("ngIf",e.loaded))},directives:[a.O5,c._Y,c.JL,c.sg,d.Asz,d.ndF,d.yKW,d.h8i,c.Fj,c.JJ,c.u,b.H,d.XWE,d.DPz,d.fMN],styles:[""]}),e}(),T=r(35656),y=r(70319);function k(n,e){1&n&&m._UZ(0,"nb-icon",16)}function x(n,e){1&n&&m._UZ(0,"nb-icon",17)}function w(n,e){1&n&&m._UZ(0,"nb-icon",16)}function J(n,e){1&n&&m._UZ(0,"nb-icon",17)}function C(n,e){1&n&&m._UZ(0,"nb-icon",16)}function N(n,e){1&n&&m._UZ(0,"nb-icon",17)}function M(n,e){if(1&n){var t=m.EpF();m.TgZ(0,"tr"),m._uU(1,"\n          "),m.TgZ(2,"td",18),m._uU(3),m.qZA(),m._uU(4,"\n          "),m.TgZ(5,"td",18),m._uU(6),m.qZA(),m._uU(7,"\n          "),m.TgZ(8,"td",18),m._uU(9),m.qZA(),m._uU(10,"\n\n          "),m.TgZ(11,"td",18),m._uU(12,"\n            "),m.TgZ(13,"button",19),m.NdJ("click",function(){var n=m.CHM(t).$implicit;return m.oxw().edit(n.id)}),m._uU(14,"\n              "),m._UZ(15,"nb-icon",20),m._uU(16,"\n            "),m.qZA(),m._uU(17,"\n          "),m.qZA(),m._uU(18,"\n\n          "),m.TgZ(19,"td",18),m._uU(20,"\n            "),m.TgZ(21,"button",21),m.NdJ("click",function(){var n=m.CHM(t).$implicit;return m.oxw().remove(n.id)}),m._uU(22,"\n              "),m._UZ(23,"nb-icon",22),m._uU(24,"\n            "),m.qZA(),m._uU(25,"\n          "),m.qZA(),m._uU(26,"\n        "),m.qZA()}if(2&n){var i=e.$implicit;m.xp6(3),m.Oqu(i.address.name),m.xp6(3),m.Oqu(i.number),m.xp6(3),m.Oqu(i.letter)}}function O(n,e){if(1&n){var t=m.EpF();m.TgZ(0,"td",23),m._uU(1,"\n              "),m.TgZ(2,"ngx-app-table-footer",24),m.NdJ("search",function(n){return m.CHM(t),m.oxw().paginate(n)}),m._uU(3,"\n              "),m.qZA(),m._uU(4,"\n          "),m.qZA()}if(2&n){var i=m.oxw();m.xp6(2),m.Q6J("page",i.page)}}var I=[{path:"",component:function(){var e=t(function e(){n(this,e)});return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m.Xpm({type:e,selectors:[["ngx-place"]],decls:1,vars:0,template:function(n,e){1&n&&m._UZ(0,"router-outlet")},directives:[_.lC],encapsulation:2}),e}(),children:[{path:"list",component:function(){var e=function(){function e(t,i,r,o){n(this,e),this.service=t,this.activatedRoute=i,this.router=r,this.data=o,this.filter={page:0,pageSize:10,direction:"ASC",sortedField:"letter"},this.loading=!1}return t(e,[{key:"ngOnInit",value:function(){this.search()}},{key:"add",value:function(){this.router.navigate(["../add"],{relativeTo:this.activatedRoute})}},{key:"edit",value:function(n){this.data.setId=n,this.router.navigate(["../edit"],{relativeTo:this.activatedRoute})}},{key:"remove",value:function(n){this.router.navigate(["../delete"],{relativeTo:this.activatedRoute})}},{key:"selectAddress",value:function(n){this.filter.address=n,this.search()}},{key:"order",value:function(n){this.filter.sortedField=n,this.filter.direction="ASC"===this.filter.direction?"DESC":"ASC",this.search()}},{key:"paginate",value:function(n){this.filter.page=n,this.search("paginate")}},{key:"search",value:function(){var n=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"serch";"serch"===e&&(this.filter.page=0),this.loading=!0,this.service.getPage(this.filter).subscribe(function(e){n.page=e,n.loading=!1})}}]),e}();return e.\u0275fac=function(n){return new(n||e)(m.Y36(h.k),m.Y36(_.gz),m.Y36(_.F0),m.Y36(v.D))},e.\u0275cmp=m.Xpm({type:e,selectors:[["ngx-place-list"]],decls:89,vars:13,consts:[[3,"nbSpinner"],[1,"col-9","align-middle",3,"click"],["icon","arrow-ios-upward-outline",4,"ngIf"],["icon","arrow-ios-downward-outline",4,"ngIf"],[1,"col-1","align-middle",3,"click"],["colspan","2",1,"col-1","align-middle"],["nbButton","","outline","","status","basic","fullWidth","",3,"click"],["icon","plus-outline"],[3,"showTitle","addSelectOption","selectAddress"],["type","text","mask","0*","nbInput","","placeholder","N\xfamero","fullWidth","",3,"ngModel","keydown.enter","ngModelChange"],["type","text","mask","A*","nbInput","","placeholder","Letra","fullWidth","",3,"ngModel","keydown.enter","ngModelChange"],["colspan","2"],["nbButton","","outline","","status","success","fullWidth","",3,"click"],["icon","search-outline"],[4,"ngFor","ngForOf"],["colspan","4",4,"ngIf"],["icon","arrow-ios-upward-outline"],["icon","arrow-ios-downward-outline"],[1,"align-middle"],["nbButton","","outline","","status","warning","fullWidth","",3,"click"],["icon","edit-2-outline"],["nbButton","","outline","","status","danger","fullWidth","",3,"click"],["icon","trash-2-outline"],["colspan","4"],[3,"page","search"]],template:function(n,e){1&n&&(m.TgZ(0,"nb-card"),m._uU(1,"\n\n  "),m.TgZ(2,"nb-card-header"),m._uU(3,"\n    Endere\xe7os\n  "),m.qZA(),m._uU(4,"\n\n  "),m.TgZ(5,"nb-card-body"),m._uU(6,"\n\n    "),m.TgZ(7,"ngx-app-table",0),m._uU(8,"\n      "),m.TgZ(9,"thead"),m._uU(10,"\n        "),m.TgZ(11,"tr"),m._uU(12,"\n          "),m.TgZ(13,"th",1),m.NdJ("click",function(){return e.order("address.name")}),m._uU(14,"\n            Logradouro:\n            "),m.YNc(15,k,1,0,"nb-icon",2),m._uU(16,"\n            "),m.YNc(17,x,1,0,"nb-icon",3),m._uU(18,"\n          "),m.qZA(),m._uU(19,"\n\n          "),m.TgZ(20,"th",4),m.NdJ("click",function(){return e.order("number")}),m._uU(21,"\n              N\xfamero:\n              "),m.YNc(22,w,1,0,"nb-icon",2),m._uU(23,"\n              "),m.YNc(24,J,1,0,"nb-icon",3),m._uU(25,"\n          "),m.qZA(),m._uU(26,"\n\n          "),m.TgZ(27,"th",4),m.NdJ("click",function(){return e.order("letter")}),m._uU(28,"\n            Letra:\n            "),m.YNc(29,C,1,0,"nb-icon",2),m._uU(30,"\n            "),m.YNc(31,N,1,0,"nb-icon",3),m._uU(32,"\n          "),m.qZA(),m._uU(33,"\n\n          "),m.TgZ(34,"th",5),m._uU(35,"\n            "),m.TgZ(36,"button",6),m.NdJ("click",function(){return e.add()}),m._uU(37,"\n              "),m._UZ(38,"nb-icon",7),m._uU(39,"\n            "),m.qZA(),m._uU(40,"\n          "),m.qZA(),m._uU(41,"\n\n        "),m.qZA(),m._uU(42,"\n      "),m.qZA(),m._uU(43,"\n\n      "),m.TgZ(44,"thead"),m._uU(45,"\n        "),m.TgZ(46,"tr"),m._uU(47,"\n\n          "),m.TgZ(48,"th"),m._uU(49,"\n            "),m.TgZ(50,"ngx-select-address",8),m.NdJ("selectAddress",function(n){return e.selectAddress(n)}),m.qZA(),m._uU(51,"\n          "),m.qZA(),m._uU(52,"\n\n          "),m.TgZ(53,"th"),m._uU(54,"\n            "),m.TgZ(55,"input",9),m.NdJ("keydown.enter",function(){return e.search()})("ngModelChange",function(n){return e.filter.number=n}),m.qZA(),m._uU(56,"\n          "),m.qZA(),m._uU(57,"\n\n          "),m.TgZ(58,"th"),m._uU(59,"\n            "),m.TgZ(60,"input",10),m.NdJ("keydown.enter",function(){return e.search()})("ngModelChange",function(n){return e.filter.letter=n}),m.qZA(),m._uU(61,"\n          "),m.qZA(),m._uU(62,"\n\n          "),m.TgZ(63,"th",11),m._uU(64,"\n            "),m.TgZ(65,"button",12),m.NdJ("click",function(){return e.search()}),m._uU(66,"\n              "),m._UZ(67,"nb-icon",13),m._uU(68,"\n            "),m.qZA(),m._uU(69,"\n          "),m.qZA(),m._uU(70,"\n\n        "),m.qZA(),m._uU(71,"\n      "),m.qZA(),m._uU(72,"\n\n      "),m.TgZ(73,"tbody"),m._uU(74,"\n        "),m.YNc(75,M,27,3,"tr",14),m._uU(76,"\n      "),m.qZA(),m._uU(77,"\n\n      "),m.TgZ(78,"tfoot"),m._uU(79,"\n        "),m.TgZ(80,"tr"),m._uU(81,"\n          "),m.YNc(82,O,5,1,"td",15),m._uU(83,"\n        "),m.qZA(),m._uU(84,"\n      "),m.qZA(),m._uU(85,"\n\n    "),m.qZA(),m._uU(86,"\n\n  "),m.qZA(),m._uU(87,"\n\n"),m.qZA(),m._uU(88,"\n")),2&n&&(m.xp6(7),m.Q6J("nbSpinner",e.loading),m.xp6(8),m.Q6J("ngIf","address.name"===e.filter.sortedField&&"ASC"===e.filter.direction),m.xp6(2),m.Q6J("ngIf","address.name"===e.filter.sortedField&&"DESC"===e.filter.direction),m.xp6(5),m.Q6J("ngIf","number"===e.filter.sortedField&&"ASC"===e.filter.direction),m.xp6(2),m.Q6J("ngIf","number"===e.filter.sortedField&&"DESC"===e.filter.direction),m.xp6(5),m.Q6J("ngIf","letter"===e.filter.sortedField&&"ASC"===e.filter.direction),m.xp6(2),m.Q6J("ngIf","letter"===e.filter.sortedField&&"DESC"===e.filter.direction),m.xp6(19),m.Q6J("showTitle",!1)("addSelectOption",!0),m.xp6(5),m.Q6J("ngModel",e.filter.number),m.xp6(5),m.Q6J("ngModel",e.filter.letter),m.xp6(15),m.Q6J("ngForOf",null==e.page?null:e.page.content),m.xp6(7),m.Q6J("ngIf",e.page))},directives:[d.Asz,d.ndF,d.yKW,T.M,d.Q7R,a.O5,d.DPz,d.fMN,U.H,f.hx,d.h8i,c.Fj,c.JJ,c.On,a.sg,y.L],styles:[".nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{border:none;padding-top:.5rem;padding-bottom:.5rem}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{border:none;padding-top:.5rem;padding-bottom:.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{border:none;padding-top:.5rem;padding-bottom:.5rem}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{border:none;padding-top:.5rem;padding-bottom:.5rem}nb-card-body[_ngcontent-%COMP%]{overflow:visible;padding-top:0}nb-card-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-top:1rem}.full-name-inputs[_ngcontent-%COMP%], .validation-checkboxes[_ngcontent-%COMP%]{display:flex;margin:0 -.5rem}.full-name-inputs[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .validation-checkboxes[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 .5rem}.checkbox-radio[_ngcontent-%COMP%]{display:flex}.demo-items[_ngcontent-%COMP%]{flex:1 0 33%}"]}),e}()},{path:"add",component:p},{path:"edit",component:q},{path:"delete:id",component:Z},{path:"",redirectTo:"list",pathMatch:"full"},{path:"**",redirectTo:"list"}]}],S=function(){var e=t(function e(){n(this,e)});return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[_.Bz.forChild(I)],_.Bz]}),e}(),P=function(){var e=t(function e(){n(this,e)});return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({providers:[h.k,s.D],imports:[[a.ez,S,d.zyh,d.nKr,d.T2N,l.I,d.uuI,c.u5,c.UX,d.KdK,g.d,d.V7y,f.yI.forChild(),d.IIj,u.D]]}),e}()}}])}();