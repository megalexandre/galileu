"use strict";(self.webpackChunkacal=self.webpackChunkacal||[]).push([[463],{89841:function(e,t,n){n.d(t,{I:function(){return o}});var r=n(25814),i=n(38583),a=n(37716);let o=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=a.\u0275\u0275defineInjector({imports:[[i.ez,r.T2N,r.KdK]]}),e})()},70319:function(e,t,n){n.d(t,{L:function(){return c}});var r=n(37716),i=n(38583),a=n(25814);function o(e,t){if(1&e&&(r.\u0275\u0275elementContainerStart(0),r.\u0275\u0275text(1,"\n    "),r.\u0275\u0275elementStart(2,"div",9),r.\u0275\u0275text(3),r.\u0275\u0275elementEnd(),r.\u0275\u0275text(4,"\n  "),r.\u0275\u0275elementContainerEnd()),2&e){const e=r.\u0275\u0275nextContext();r.\u0275\u0275advance(3),r.\u0275\u0275textInterpolate2("\n      Pagina: ",e.page.number+1," de ",e.page.totalPages,"\n    ")}}function s(e,t){if(1&e&&(r.\u0275\u0275elementContainerStart(0),r.\u0275\u0275text(1,"\n    "),r.\u0275\u0275elementStart(2,"div",9),r.\u0275\u0275text(3),r.\u0275\u0275elementEnd(),r.\u0275\u0275text(4,"\n  "),r.\u0275\u0275elementContainerEnd()),2&e){const e=r.\u0275\u0275nextContext();r.\u0275\u0275advance(3),r.\u0275\u0275textInterpolate1("\n      Total: ",e.page.totalElements,"\n    ")}}function l(e,t){1&e&&(r.\u0275\u0275elementContainerStart(0),r.\u0275\u0275text(1,"\n  "),r.\u0275\u0275elementStart(2,"div",9),r.\u0275\u0275text(3,"Nenhum registro atende aos criterios"),r.\u0275\u0275elementEnd(),r.\u0275\u0275text(4,"\n"),r.\u0275\u0275elementContainerEnd())}let c=(()=>{class e{constructor(){this.search=new r.EventEmitter,this.disableBackAction=!1,this.disableFowardAction=!1}ngOnInit(){this.disableBackAction=0==this.page.pageable.pageNumber,this.disableFowardAction=this.page.pageable.pageNumber==this.page.totalPages}fristPage(){0!=this.page.pageable.pageNumber&&this.searchAction(0)}backPage(){0!=this.page.pageable.pageNumber&&this.searchAction(this.page.pageable.pageNumber-1)}forwardPage(){this.page.pageable.pageNumber>=this.page.totalPages-1||this.searchAction(this.page.pageable.pageNumber+1)}lastPage(){this.page.pageable.pageNumber!=this.page.totalPages-1&&this.searchAction(this.page.totalPages-1)}searchAction(e){this.search.emit(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.\u0275\u0275defineComponent({type:e,selectors:[["ngx-app-table-footer"]],inputs:{page:"page"},outputs:{search:"search"},decls:50,vars:5,consts:[[1,"d-flex","justify-content-between"],[4,"ngIf"],[1,"d-flex","justify-content-center"],["nbButton","","outline","","status","basic","fullWidth","",3,"click"],["icon","arrowhead-left-outline"],["icon","arrow-ios-back-outline"],["nbButton","","outline","","status","basic","fullWidth","",3,"disabled"],["icon","arrow-ios-forward-outline"],["icon","arrowhead-right-outline"],[1,"caption"]],template:function(e,t){1&e&&(r.\u0275\u0275elementStart(0,"div",0),r.\u0275\u0275text(1,"\n\n  "),r.\u0275\u0275template(2,o,5,2,"ng-container",1),r.\u0275\u0275text(3,"\n\n  "),r.\u0275\u0275template(4,s,5,1,"ng-container",1),r.\u0275\u0275text(5,"\n\n"),r.\u0275\u0275elementEnd(),r.\u0275\u0275text(6,"\n\n\n"),r.\u0275\u0275template(7,l,5,0,"ng-container",1),r.\u0275\u0275text(8,"\n\n\n"),r.\u0275\u0275elementStart(9,"div",2),r.\u0275\u0275text(10,"\n  "),r.\u0275\u0275elementStart(11,"div"),r.\u0275\u0275text(12,"\n      "),r.\u0275\u0275elementStart(13,"button",3),r.\u0275\u0275listener("click",function(){return t.fristPage()}),r.\u0275\u0275text(14,"\n        "),r.\u0275\u0275element(15,"nb-icon",4),r.\u0275\u0275text(16,"\n      "),r.\u0275\u0275elementEnd(),r.\u0275\u0275text(17,"\n    "),r.\u0275\u0275elementEnd(),r.\u0275\u0275text(18,"\n\n    "),r.\u0275\u0275elementStart(19,"div"),r.\u0275\u0275text(20,"\n      "),r.\u0275\u0275elementStart(21,"button",3),r.\u0275\u0275listener("click",function(){return t.backPage()}),r.\u0275\u0275text(22,"\n        "),r.\u0275\u0275element(23,"nb-icon",5),r.\u0275\u0275text(24,"\n      "),r.\u0275\u0275elementEnd(),r.\u0275\u0275text(25,"\n    "),r.\u0275\u0275elementEnd(),r.\u0275\u0275text(26,"\n\n    "),r.\u0275\u0275elementStart(27,"div"),r.\u0275\u0275text(28,"\n      "),r.\u0275\u0275elementStart(29,"button",6),r.\u0275\u0275text(30),r.\u0275\u0275elementEnd(),r.\u0275\u0275text(31,"\n    "),r.\u0275\u0275elementEnd(),r.\u0275\u0275text(32,"\n\n    "),r.\u0275\u0275elementStart(33,"div"),r.\u0275\u0275text(34,"\n      "),r.\u0275\u0275elementStart(35,"button",3),r.\u0275\u0275listener("click",function(){return t.forwardPage()}),r.\u0275\u0275text(36,"\n        "),r.\u0275\u0275element(37,"nb-icon",7),r.\u0275\u0275text(38,"\n      "),r.\u0275\u0275elementEnd(),r.\u0275\u0275text(39,"\n    "),r.\u0275\u0275elementEnd(),r.\u0275\u0275text(40,"\n\n    "),r.\u0275\u0275elementStart(41,"div"),r.\u0275\u0275text(42,"\n      "),r.\u0275\u0275elementStart(43,"button",3),r.\u0275\u0275listener("click",function(){return t.lastPage()}),r.\u0275\u0275text(44,"\n        "),r.\u0275\u0275element(45,"nb-icon",8),r.\u0275\u0275text(46,"\n      "),r.\u0275\u0275elementEnd(),r.\u0275\u0275text(47,"\n    "),r.\u0275\u0275elementEnd(),r.\u0275\u0275text(48,"\n\n"),r.\u0275\u0275elementEnd(),r.\u0275\u0275text(49,"\n\n")),2&e&&(r.\u0275\u0275advance(2),r.\u0275\u0275property("ngIf",!t.page.empty),r.\u0275\u0275advance(2),r.\u0275\u0275property("ngIf",!t.page.empty),r.\u0275\u0275advance(3),r.\u0275\u0275property("ngIf",t.page.empty),r.\u0275\u0275advance(22),r.\u0275\u0275property("disabled",!0),r.\u0275\u0275advance(1),r.\u0275\u0275textInterpolate1("\n        ",t.page.number+1,"\n      "))},directives:[i.O5,a.DPz,a.fMN],styles:[""]}),e})()},35656:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(37716),i=n(38583);const a=function(e){return{"table-striped":e}},o=["*"];let s=(()=>{class e{constructor(){this.tableSize="table-sm",this.tableStriped=!0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.\u0275\u0275defineComponent({type:e,selectors:[["ngx-app-table"]],inputs:{tableSize:"tableSize",tableStriped:"tableStriped"},ngContentSelectors:o,decls:8,vars:3,consts:[[1,"table-responsive"],[1,"table","table-hover",3,"ngClass"]],template:function(e,t){1&e&&(r.\u0275\u0275projectionDef(),r.\u0275\u0275elementStart(0,"div",0),r.\u0275\u0275text(1,"\n  "),r.\u0275\u0275elementStart(2,"table",1),r.\u0275\u0275text(3,"\n    "),r.\u0275\u0275projection(4),r.\u0275\u0275text(5,"\n  "),r.\u0275\u0275elementEnd(),r.\u0275\u0275text(6,"\n"),r.\u0275\u0275elementEnd(),r.\u0275\u0275text(7,"\n")),2&e&&(r.\u0275\u0275advance(2),r.\u0275\u0275property("ngClass",r.\u0275\u0275pureFunction1(1,a,t.tableStriped)))},directives:[i.mk],styles:[".nb-theme-default   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}.nb-theme-dark   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#fff}.nb-theme-cosmic   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#fff}.nb-theme-corporate   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}.table[_ngcontent-%COMP%]    > {vertical-align:middle}"]}),e})()},59650:function(e,t,n){n.d(t,{d:function(){return a}});var r=n(38583),i=n(37716);let a=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=i.\u0275\u0275defineInjector({imports:[[r.ez]]}),e})()},65382:function(e,t,n){n.d(t,{D:function(){return i}});var r=n(37716);let i=(()=>{class e{constructor(){}set setId(e){this._id=e}get id(){return this._id}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},56603:function(e,t,n){n.d(t,{T:function(){return r}});class r{constructor(e){this.http=e}getPage(e){return this.http.post(this.env+"/paginate",e)}getById(e){return this.http.get(`${this.env+"/"}${e}`)}save(e){return this.http.post(`${this.env}`,e)}update(e){return this.http.put(this.env+"/update",e)}getAll(){return this.http.get(this.env+"/list")}}},63463:function(e,t,n){n.r(t),n.d(t,{AddressModule:function(){return k}});var r=n(38583),i=n(3679),a=n(25814),o=n(89841),s=n(59650),l=n(69129),c=n(99763),d=n(37716),m=n(80798),u=n(67426);let p=(()=>{class e{constructor(e,t,n,r,i){this.formBuilder=e,this.activatedRoute=t,this.router=n,this.service=r,this.toastrService=i,this.submmited=!1}ngOnInit(){this.form=this.formBuilder.group({name:[null,i.kI.required]})}submit(){this.submmited=!0,!this.form.invalid&&this.service.save(this.form.value).subscribe(()=>{this.toastrService.success("Sucesso","Novo Registro adicionado"),this.router.navigate(["../list"],{relativeTo:this.activatedRoute})},()=>{this.toastrService.danger("Erro ao salvar","N\xe3o foi possivel realizar a a\xe7\xe3o")})}back(){this.router.navigate(["../list"],{relativeTo:this.activatedRoute})}getStatus(e){return this.form.get(e).valid&&(this.form.get(e).touched||this.submmited)?"success":this.form.get(e).valid||!this.form.get(e).touched&&!this.submmited?"basic":"danger"}get name(){return this.form.get("name")}}return e.\u0275fac=function(t){return new(t||e)(d.\u0275\u0275directiveInject(i.qu),d.\u0275\u0275directiveInject(c.gz),d.\u0275\u0275directiveInject(c.F0),d.\u0275\u0275directiveInject(m.D),d.\u0275\u0275directiveInject(a.quB))},e.\u0275cmp=d.\u0275\u0275defineComponent({type:e,selectors:[["ngx-address-add"]],decls:47,vars:4,consts:[[3,"formGroup","submit"],[1,"row"],[1,"col-lg-12"],[1,"row","mb-3"],[1,"col-12"],["for","name",1,"label"],["id","name","type","text","nbInput","","fullWidth","","placeholder","Nome:","formControlName","name",3,"status"],[3,"message","show"],[1,"d-flex","justify-content-between"],["type","button","nbButton","","outline","","status","basic",3,"click"],["icon","arrow-back-outline"],["type","submit","nbButton","","outline","","status","success"],["icon","save-outline"]],template:function(e,t){1&e&&(d.\u0275\u0275elementStart(0,"form",0),d.\u0275\u0275listener("submit",function(){return t.submit()}),d.\u0275\u0275text(1,"\n  "),d.\u0275\u0275elementStart(2,"div",1),d.\u0275\u0275text(3,"\n    "),d.\u0275\u0275elementStart(4,"div",2),d.\u0275\u0275text(5,"\n      "),d.\u0275\u0275elementStart(6,"nb-card"),d.\u0275\u0275text(7,"\n\n        "),d.\u0275\u0275elementStart(8,"nb-card-header"),d.\u0275\u0275text(9,"\n          Novo Endereco\n        "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(10,"\n\n        "),d.\u0275\u0275elementStart(11,"nb-card-body"),d.\u0275\u0275text(12,"\n          "),d.\u0275\u0275elementStart(13,"div",3),d.\u0275\u0275text(14,"\n\n            "),d.\u0275\u0275elementStart(15,"div",4),d.\u0275\u0275text(16,"\n              "),d.\u0275\u0275elementStart(17,"label",5),d.\u0275\u0275text(18,"Nome:"),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(19,"\n              "),d.\u0275\u0275element(20,"input",6),d.\u0275\u0275text(21,"\n              "),d.\u0275\u0275element(22,"error-message",7),d.\u0275\u0275text(23,"\n            "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(24,"\n\n          "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(25,"\n\n        "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(26,"\n        "),d.\u0275\u0275elementStart(27,"nb-card-footer"),d.\u0275\u0275text(28,"\n\n          "),d.\u0275\u0275elementStart(29,"div",8),d.\u0275\u0275text(30,"\n            "),d.\u0275\u0275elementStart(31,"button",9),d.\u0275\u0275listener("click",function(){return t.back()}),d.\u0275\u0275text(32,"\n              "),d.\u0275\u0275element(33,"nb-icon",10),d.\u0275\u0275text(34,"\n            "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(35,"\n\n            "),d.\u0275\u0275elementStart(36,"button",11),d.\u0275\u0275text(37,"\n              "),d.\u0275\u0275element(38,"nb-icon",12),d.\u0275\u0275text(39,"\n            "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(40,"\n          "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(41,"\n\n        "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(42,"\n      "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(43,"\n\n    "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(44,"\n\n  "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(45,"\n"),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(46,"\n")),2&e&&(d.\u0275\u0275property("formGroup",t.form),d.\u0275\u0275advance(20),d.\u0275\u0275property("status",t.getStatus("name")),d.\u0275\u0275advance(2),d.\u0275\u0275property("message","Nome \xe9 obrigat\xf3rio")("show",(null==t.name.errors?null:t.name.errors.required)&&(t.submmited||t.form.touched)))},directives:[i._Y,i.JL,i.sg,a.Asz,a.ndF,a.yKW,a.h8i,i.Fj,i.JJ,i.u,u.H,a.XWE,a.DPz,a.fMN],styles:[""]}),e})(),f=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.\u0275\u0275defineComponent({type:e,selectors:[["ngx-address-delete"]],decls:3,vars:0,template:function(e,t){1&e&&(d.\u0275\u0275elementStart(0,"p"),d.\u0275\u0275text(1,"customer-delete works!"),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(2,"\n"))},styles:[""]}),e})();var g=n(65382);function h(e,t){if(1&e){const e=d.\u0275\u0275getCurrentView();d.\u0275\u0275elementStart(0,"div"),d.\u0275\u0275text(1,"\n  "),d.\u0275\u0275elementStart(2,"form",1),d.\u0275\u0275listener("submit",function(){return d.\u0275\u0275restoreView(e),d.\u0275\u0275nextContext().submit()}),d.\u0275\u0275text(3,"\n    "),d.\u0275\u0275elementStart(4,"div",2),d.\u0275\u0275text(5,"\n      "),d.\u0275\u0275elementStart(6,"div",3),d.\u0275\u0275text(7,"\n        "),d.\u0275\u0275elementStart(8,"nb-card"),d.\u0275\u0275text(9,"\n\n          "),d.\u0275\u0275elementStart(10,"nb-card-header"),d.\u0275\u0275text(11,"\n            Atualizar Endereco\n          "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(12,"\n\n          "),d.\u0275\u0275elementStart(13,"nb-card-body"),d.\u0275\u0275text(14,"\n            "),d.\u0275\u0275elementStart(15,"div",4),d.\u0275\u0275text(16,"\n\n              "),d.\u0275\u0275elementStart(17,"div",5),d.\u0275\u0275text(18,"\n                "),d.\u0275\u0275elementStart(19,"label",6),d.\u0275\u0275text(20,"Nome:"),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(21,"\n                "),d.\u0275\u0275element(22,"input",7),d.\u0275\u0275text(23,"\n                "),d.\u0275\u0275element(24,"error-message",8),d.\u0275\u0275text(25,"\n              "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(26,"\n\n            "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(27,"\n\n          "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(28,"\n          "),d.\u0275\u0275elementStart(29,"nb-card-footer"),d.\u0275\u0275text(30,"\n\n            "),d.\u0275\u0275elementStart(31,"div",9),d.\u0275\u0275text(32,"\n              "),d.\u0275\u0275elementStart(33,"button",10),d.\u0275\u0275listener("click",function(){return d.\u0275\u0275restoreView(e),d.\u0275\u0275nextContext().back()}),d.\u0275\u0275text(34,"\n                "),d.\u0275\u0275element(35,"nb-icon",11),d.\u0275\u0275text(36,"\n              "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(37,"\n\n              "),d.\u0275\u0275elementStart(38,"button",12),d.\u0275\u0275text(39,"\n                "),d.\u0275\u0275element(40,"nb-icon",13),d.\u0275\u0275text(41,"\n              "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(42,"\n            "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(43,"\n\n          "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(44,"\n        "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(45,"\n\n      "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(46,"\n\n    "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(47,"\n  "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(48,"\n\n"),d.\u0275\u0275elementEnd()}if(2&e){const e=d.\u0275\u0275nextContext();d.\u0275\u0275advance(2),d.\u0275\u0275property("formGroup",e.form),d.\u0275\u0275advance(20),d.\u0275\u0275property("status",e.getStatus("name")),d.\u0275\u0275advance(2),d.\u0275\u0275property("message","Nome \xe9 obrigat\xf3rio")("show",(null==e.name.errors?null:e.name.errors.required)&&(e.submmited||e.form.touched))}}let x=(()=>{class e{constructor(e,t,n,r,i,a){this.data=e,this.service=t,this.formBuilder=n,this.activatedRoute=r,this.router=i,this.toastrService=a,this.loaded=!1,this.submmited=!1}ngOnInit(){this.id=this.data.id,this.service.getById(this.id).subscribe(e=>{this.address=e,this.form=this.formBuilder.group({id:[e.id,i.kI.required],name:[e.name,i.kI.required]}),this.loaded=!0})}submit(){this.submmited=!0,!this.form.invalid&&this.service.update(this.form.value).subscribe(()=>{this.toastrService.success("Sucesso","Novo Registro adicionado"),this.router.navigate(["../list"],{relativeTo:this.activatedRoute})},()=>{this.toastrService.danger("Erro ao salvar","N\xe3o foi possivel realizar a a\xe7\xe3o")})}back(){this.router.navigate(["../list"],{relativeTo:this.activatedRoute})}getStatus(e){return this.form.get(e).valid&&(this.form.get(e).touched||this.submmited)?"success":this.form.get(e).valid||!this.form.get(e).touched&&!this.submmited?"basic":"danger"}get name(){return this.form.get("name")}}return e.\u0275fac=function(t){return new(t||e)(d.\u0275\u0275directiveInject(g.D),d.\u0275\u0275directiveInject(m.D),d.\u0275\u0275directiveInject(i.qu),d.\u0275\u0275directiveInject(c.gz),d.\u0275\u0275directiveInject(c.F0),d.\u0275\u0275directiveInject(a.quB))},e.\u0275cmp=d.\u0275\u0275defineComponent({type:e,selectors:[["ngx-address-edit"]],decls:3,vars:1,consts:[[4,"ngIf"],[3,"formGroup","submit"],[1,"row"],[1,"col-lg-12"],[1,"row","mb-3"],[1,"col-12"],["for","name",1,"label"],["id","name","type","text","nbInput","","fullWidth","","placeholder","Nome:","formControlName","name",3,"status"],[3,"message","show"],[1,"d-flex","justify-content-between"],["type","button","nbButton","","outline","","status","basic",3,"click"],["icon","arrow-back-outline"],["type","submit","nbButton","","outline","","status","success"],["icon","save-outline"]],template:function(e,t){1&e&&(d.\u0275\u0275text(0,"\n"),d.\u0275\u0275template(1,h,49,4,"div",0),d.\u0275\u0275text(2,"\n")),2&e&&(d.\u0275\u0275advance(1),d.\u0275\u0275property("ngIf",t.loaded))},directives:[r.O5,i._Y,i.JL,i.sg,a.Asz,a.ndF,a.yKW,a.h8i,i.Fj,i.JJ,i.u,u.H,a.XWE,a.DPz,a.fMN],styles:[""]}),e})();var b=n(35656),v=n(70319);function S(e,t){1&e&&d.\u0275\u0275element(0,"nb-icon",13)}function E(e,t){1&e&&d.\u0275\u0275element(0,"nb-icon",14)}function y(e,t){if(1&e){const e=d.\u0275\u0275getCurrentView();d.\u0275\u0275elementStart(0,"tr"),d.\u0275\u0275text(1,"\n          "),d.\u0275\u0275elementStart(2,"td",15),d.\u0275\u0275text(3),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(4,"\n\n          "),d.\u0275\u0275elementStart(5,"td",15),d.\u0275\u0275text(6,"\n            "),d.\u0275\u0275elementStart(7,"button",16),d.\u0275\u0275listener("click",function(){const t=d.\u0275\u0275restoreView(e).$implicit;return d.\u0275\u0275nextContext().edit(t.id)}),d.\u0275\u0275text(8,"\n              "),d.\u0275\u0275element(9,"nb-icon",17),d.\u0275\u0275text(10,"\n            "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(11,"\n          "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(12,"\n\n          "),d.\u0275\u0275elementStart(13,"td",15),d.\u0275\u0275text(14,"\n            "),d.\u0275\u0275elementStart(15,"button",18),d.\u0275\u0275listener("click",function(){const t=d.\u0275\u0275restoreView(e).$implicit;return d.\u0275\u0275nextContext().remove(t.id)}),d.\u0275\u0275text(16,"\n              "),d.\u0275\u0275element(17,"nb-icon",19),d.\u0275\u0275text(18,"\n            "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(19,"\n          "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(20,"\n        "),d.\u0275\u0275elementEnd()}if(2&e){const e=t.$implicit;d.\u0275\u0275advance(3),d.\u0275\u0275textInterpolate(e.name)}}function C(e,t){if(1&e){const e=d.\u0275\u0275getCurrentView();d.\u0275\u0275elementStart(0,"td",20),d.\u0275\u0275text(1,"\n              "),d.\u0275\u0275elementStart(2,"ngx-app-table-footer",21),d.\u0275\u0275listener("search",function(t){return d.\u0275\u0275restoreView(e),d.\u0275\u0275nextContext().paginate(t)}),d.\u0275\u0275text(3,"\n              "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(4,"\n          "),d.\u0275\u0275elementEnd()}if(2&e){const e=d.\u0275\u0275nextContext();d.\u0275\u0275advance(2),d.\u0275\u0275property("page",e.page)}}const w=[{path:"",component:(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.\u0275\u0275defineComponent({type:e,selectors:[["ngx-address"]],decls:1,vars:0,template:function(e,t){1&e&&d.\u0275\u0275element(0,"router-outlet")},directives:[c.lC],encapsulation:2}),e})(),children:[{path:"list",component:(()=>{class e{constructor(e,t,n,r){this.service=e,this.activatedRoute=t,this.router=n,this.data=r,this.filter={name:"",page:0,pageSize:10,direction:"ASC",sortedField:"name"},this.loading=!1}ngOnInit(){this.search()}add(){this.router.navigate(["../add"],{relativeTo:this.activatedRoute})}edit(e){this.data.setId=e,this.router.navigate(["../edit"],{relativeTo:this.activatedRoute})}remove(e){this.router.navigate(["../delete"],{relativeTo:this.activatedRoute})}order(e){this.filter.sortedField=e,this.filter.direction="ASC"===this.filter.direction?"DESC":"ASC",this.search()}paginate(e){this.filter.page=e,this.search("paginate")}search(e="serch"){"serch"===e&&(this.filter.page=0),this.loading=!0,this.service.getPage(this.filter).subscribe(e=>{this.page=e,this.loading=!1})}}return e.\u0275fac=function(t){return new(t||e)(d.\u0275\u0275directiveInject(m.D),d.\u0275\u0275directiveInject(c.gz),d.\u0275\u0275directiveInject(c.F0),d.\u0275\u0275directiveInject(g.D))},e.\u0275cmp=d.\u0275\u0275defineComponent({type:e,selectors:[["ngx-address-list"]],decls:65,vars:6,consts:[[3,"nbSpinner"],[1,"col-9","align-middle",3,"click"],["icon","arrow-ios-upward-outline",4,"ngIf"],["icon","arrow-ios-downward-outline",4,"ngIf"],["colspan","2",1,"col-1","align-middle"],["nbButton","","outline","","status","basic","fullWidth","",3,"click"],["icon","plus-outline"],["type","text","nbInput","","placeholder","Nome","fullWidth","",3,"ngModel","keydown.enter","ngModelChange"],["colspan","2"],["nbButton","","outline","","status","success","fullWidth","",3,"click"],["icon","search-outline"],[4,"ngFor","ngForOf"],["colspan","4",4,"ngIf"],["icon","arrow-ios-upward-outline"],["icon","arrow-ios-downward-outline"],[1,"align-middle"],["nbButton","","outline","","status","warning","fullWidth","",3,"click"],["icon","edit-2-outline"],["nbButton","","outline","","status","danger","fullWidth","",3,"click"],["icon","trash-2-outline"],["colspan","4"],[3,"page","search"]],template:function(e,t){1&e&&(d.\u0275\u0275elementStart(0,"nb-card"),d.\u0275\u0275text(1,"\n\n  "),d.\u0275\u0275elementStart(2,"nb-card-header"),d.\u0275\u0275text(3,"\n    Logradouros\n  "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(4,"\n\n  "),d.\u0275\u0275elementStart(5,"nb-card-body"),d.\u0275\u0275text(6,"\n\n    "),d.\u0275\u0275elementStart(7,"ngx-app-table",0),d.\u0275\u0275text(8,"\n      "),d.\u0275\u0275elementStart(9,"thead"),d.\u0275\u0275text(10,"\n        "),d.\u0275\u0275elementStart(11,"tr"),d.\u0275\u0275text(12,"\n          "),d.\u0275\u0275elementStart(13,"th",1),d.\u0275\u0275listener("click",function(){return t.order("name")}),d.\u0275\u0275text(14,"\n              Nome:\n              "),d.\u0275\u0275template(15,S,1,0,"nb-icon",2),d.\u0275\u0275text(16,"\n              "),d.\u0275\u0275template(17,E,1,0,"nb-icon",3),d.\u0275\u0275text(18,"\n          "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(19,"\n\n          "),d.\u0275\u0275elementStart(20,"th",4),d.\u0275\u0275text(21,"\n            "),d.\u0275\u0275elementStart(22,"button",5),d.\u0275\u0275listener("click",function(){return t.add()}),d.\u0275\u0275text(23,"\n              "),d.\u0275\u0275element(24,"nb-icon",6),d.\u0275\u0275text(25,"\n            "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(26,"\n          "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(27,"\n\n        "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(28,"\n      "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(29,"\n\n      "),d.\u0275\u0275elementStart(30,"thead"),d.\u0275\u0275text(31,"\n        "),d.\u0275\u0275elementStart(32,"tr"),d.\u0275\u0275text(33,"\n\n          "),d.\u0275\u0275elementStart(34,"th"),d.\u0275\u0275text(35,"\n            "),d.\u0275\u0275elementStart(36,"input",7),d.\u0275\u0275listener("keydown.enter",function(){return t.search()})("ngModelChange",function(e){return t.filter.name=e}),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(37,"\n          "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(38,"\n\n          "),d.\u0275\u0275elementStart(39,"th",8),d.\u0275\u0275text(40,"\n            "),d.\u0275\u0275elementStart(41,"button",9),d.\u0275\u0275listener("click",function(){return t.search()}),d.\u0275\u0275text(42,"\n              "),d.\u0275\u0275element(43,"nb-icon",10),d.\u0275\u0275text(44,"\n            "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(45,"\n          "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(46,"\n\n        "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(47,"\n      "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(48,"\n\n      "),d.\u0275\u0275elementStart(49,"tbody"),d.\u0275\u0275text(50,"\n        "),d.\u0275\u0275template(51,y,21,1,"tr",11),d.\u0275\u0275text(52,"\n      "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(53,"\n\n      "),d.\u0275\u0275elementStart(54,"tfoot"),d.\u0275\u0275text(55,"\n        "),d.\u0275\u0275elementStart(56,"tr"),d.\u0275\u0275text(57,"\n          "),d.\u0275\u0275template(58,C,5,1,"td",12),d.\u0275\u0275text(59,"\n        "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(60,"\n      "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(61,"\n\n    "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(62,"\n\n  "),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(63,"\n\n"),d.\u0275\u0275elementEnd(),d.\u0275\u0275text(64,"\n")),2&e&&(d.\u0275\u0275advance(7),d.\u0275\u0275property("nbSpinner",t.loading),d.\u0275\u0275advance(8),d.\u0275\u0275property("ngIf","name"===t.filter.sortedField&&"ASC"===t.filter.direction),d.\u0275\u0275advance(2),d.\u0275\u0275property("ngIf","name"===t.filter.sortedField&&"DESC"===t.filter.direction),d.\u0275\u0275advance(19),d.\u0275\u0275property("ngModel",t.filter.name),d.\u0275\u0275advance(15),d.\u0275\u0275property("ngForOf",null==t.page?null:t.page.content),d.\u0275\u0275advance(7),d.\u0275\u0275property("ngIf",t.page))},directives:[a.Asz,a.ndF,a.yKW,b.M,a.Q7R,r.O5,a.DPz,a.fMN,a.h8i,i.Fj,i.JJ,i.On,r.sg,v.L],styles:[".nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{border:none;padding-top:.5rem;padding-bottom:.5rem}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{border:none;padding-top:.5rem;padding-bottom:.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{border:none;padding-top:.5rem;padding-bottom:.5rem}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{border:none;padding-top:.5rem;padding-bottom:.5rem}nb-card-body[_ngcontent-%COMP%]{overflow:visible;padding-top:0}nb-card-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-top:1rem}.full-name-inputs[_ngcontent-%COMP%], .validation-checkboxes[_ngcontent-%COMP%]{display:flex;margin:0 -.5rem}.full-name-inputs[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .validation-checkboxes[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 .5rem}.checkbox-radio[_ngcontent-%COMP%]{display:flex}.demo-items[_ngcontent-%COMP%]{flex:1 0 33%}"]}),e})()},{path:"add",component:p},{path:"edit",component:x},{path:"delete:id",component:f},{path:"",redirectTo:"list",pathMatch:"full"},{path:"**",redirectTo:"list"}]}];let I=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=d.\u0275\u0275defineInjector({imports:[[c.Bz.forChild(w)],c.Bz]}),e})(),k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=d.\u0275\u0275defineInjector({providers:[m.D],imports:[[r.ez,I,a.zyh,a.nKr,a.T2N,o.I,a.uuI,i.u5,i.UX,a.KdK,s.d,a.V7y,l.yI.forChild()]]}),e})()},80798:function(e,t,n){n.d(t,{D:function(){return s}});var r=n(92340),i=n(56603),a=n(37716),o=n(91841);let s=(()=>{class e extends i.T{constructor(e){super(e)}get env(){return`${r.N.address}`}}return e.\u0275fac=function(t){return new(t||e)(a.\u0275\u0275inject(o.eN))},e.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})()}}]);