"use strict";(self.webpackChunkacal=self.webpackChunkacal||[]).push([[111],{11111:function(e,t,n){n.r(t),n.d(t,{NgxAuthModule:function(){return E}});var r=n(38583),a=n(3679),l=n(99763),o=n(86665),i=n(37716),s=n(25814);function d(e,t){if(1&e&&(i.\u0275\u0275elementStart(0,"li",21),i.\u0275\u0275text(1),i.\u0275\u0275elementEnd()),2&e){const e=t.$implicit;i.\u0275\u0275advance(1),i.\u0275\u0275textInterpolate(e)}}function u(e,t){if(1&e&&(i.\u0275\u0275elementStart(0,"nb-alert",17),i.\u0275\u0275text(1,"\n  "),i.\u0275\u0275elementStart(2,"p",18),i.\u0275\u0275elementStart(3,"b"),i.\u0275\u0275text(4,"Oh snap!"),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275text(5,"\n  "),i.\u0275\u0275elementStart(6,"ul",19),i.\u0275\u0275text(7,"\n    "),i.\u0275\u0275template(8,d,2,1,"li",20),i.\u0275\u0275text(9,"\n  "),i.\u0275\u0275elementEnd(),i.\u0275\u0275text(10,"\n"),i.\u0275\u0275elementEnd()),2&e){const e=i.\u0275\u0275nextContext();i.\u0275\u0275advance(8),i.\u0275\u0275property("ngForOf",e.errors)}}function m(e,t){if(1&e&&(i.\u0275\u0275elementStart(0,"li",21),i.\u0275\u0275text(1),i.\u0275\u0275elementEnd()),2&e){const e=t.$implicit;i.\u0275\u0275advance(1),i.\u0275\u0275textInterpolate(e)}}function c(e,t){if(1&e&&(i.\u0275\u0275elementStart(0,"nb-alert",22),i.\u0275\u0275text(1,"\n  "),i.\u0275\u0275elementStart(2,"p",18),i.\u0275\u0275elementStart(3,"b"),i.\u0275\u0275text(4,"Hooray!"),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementEnd(),i.\u0275\u0275text(5,"\n  "),i.\u0275\u0275elementStart(6,"ul",19),i.\u0275\u0275text(7,"\n    "),i.\u0275\u0275template(8,m,2,1,"li",20),i.\u0275\u0275text(9,"\n  "),i.\u0275\u0275elementEnd(),i.\u0275\u0275text(10,"\n"),i.\u0275\u0275elementEnd()),2&e){const e=i.\u0275\u0275nextContext();i.\u0275\u0275advance(8),i.\u0275\u0275property("ngForOf",e.messages)}}function p(e,t){1&e&&(i.\u0275\u0275elementStart(0,"p",24),i.\u0275\u0275text(1,"\n        Email is required!\n      "),i.\u0275\u0275elementEnd())}function g(e,t){1&e&&(i.\u0275\u0275elementStart(0,"p",24),i.\u0275\u0275text(1,"\n        Email should be the real one!\n      "),i.\u0275\u0275elementEnd())}function f(e,t){if(1&e&&(i.\u0275\u0275elementContainerStart(0),i.\u0275\u0275text(1,"\n      "),i.\u0275\u0275template(2,p,2,0,"p",23),i.\u0275\u0275text(3,"\n      "),i.\u0275\u0275template(4,g,2,0,"p",23),i.\u0275\u0275text(5,"\n    "),i.\u0275\u0275elementContainerEnd()),2&e){i.\u0275\u0275nextContext();const e=i.\u0275\u0275reference(16);i.\u0275\u0275advance(2),i.\u0275\u0275property("ngIf",null==e.errors?null:e.errors.required),i.\u0275\u0275advance(2),i.\u0275\u0275property("ngIf",null==e.errors?null:e.errors.pattern)}}function x(e,t){1&e&&(i.\u0275\u0275elementStart(0,"p",24),i.\u0275\u0275text(1,"\n        Password is required!\n      "),i.\u0275\u0275elementEnd())}function h(e,t){if(1&e&&(i.\u0275\u0275elementStart(0,"p",24),i.\u0275\u0275text(1),i.\u0275\u0275elementEnd()),2&e){const e=i.\u0275\u0275nextContext(2);i.\u0275\u0275advance(1),i.\u0275\u0275textInterpolate2("\n        Password should contains\n        from ",e.getConfigValue("forms.validation.password.minLength"),"\n        to ",e.getConfigValue("forms.validation.password.maxLength"),"\n        characters\n      ")}}function b(e,t){if(1&e&&(i.\u0275\u0275elementContainerStart(0),i.\u0275\u0275text(1,"\n      "),i.\u0275\u0275template(2,x,2,0,"p",23),i.\u0275\u0275text(3,"\n      "),i.\u0275\u0275template(4,h,2,2,"p",23),i.\u0275\u0275text(5,"\n    "),i.\u0275\u0275elementContainerEnd()),2&e){i.\u0275\u0275nextContext();const e=i.\u0275\u0275reference(27);i.\u0275\u0275advance(2),i.\u0275\u0275property("ngIf",null==e.errors?null:e.errors.required),i.\u0275\u0275advance(2),i.\u0275\u0275property("ngIf",(null==e.errors?null:e.errors.minlength)||(null==e.errors?null:e.errors.maxlength))}}function v(e,t){if(1&e){const e=i.\u0275\u0275getCurrentView();i.\u0275\u0275elementStart(0,"nb-checkbox",25),i.\u0275\u0275listener("ngModelChange",function(t){return i.\u0275\u0275restoreView(e),i.\u0275\u0275nextContext().user.rememberMe=t}),i.\u0275\u0275text(1,"Remember me"),i.\u0275\u0275elementEnd()}if(2&e){const e=i.\u0275\u0275nextContext();i.\u0275\u0275property("ngModel",e.user.rememberMe)}}const S=[{path:"",component:o.AC,children:[{path:"login",component:(()=>{class e extends o.Yx{}return e.\u0275fac=function(){let t;return function(n){return(t||(t=i.\u0275\u0275getInheritedFactory(e)))(n||e)}}(),e.\u0275cmp=i.\u0275\u0275defineComponent({type:e,selectors:[["ngx-login"]],features:[i.\u0275\u0275InheritDefinitionFeature],decls:44,vars:18,consts:[["id","title",1,"title"],["outline","danger","role","alert",4,"ngIf"],["outline","success","role","alert",4,"ngIf"],["aria-labelledby","title",3,"ngSubmit"],["form","ngForm"],[1,"form-control-group"],["for","input-email",1,"label"],["nbInput","","fullWidth","","name","email","id","input-email","placeholder","Us\xfaario","autofocus","",3,"ngModel","status","required","ngModelChange"],["email","ngModel"],[4,"ngIf"],["for","input-password",1,"label"],["nbInput","","fullWidth","","name","password","type","password","id","input-password","placeholder","Password",3,"ngModel","status","required","minlength","maxlength","ngModelChange"],["password","ngModel"],[1,"form-control-group","accept-group"],["name","rememberMe",3,"ngModel","ngModelChange",4,"ngIf"],["routerLink","../request-password",1,"forgot-password"],["nbButton","","fullWidth","","status","success",3,"disabled"],["outline","danger","role","alert"],[1,"alert-title"],[1,"alert-message-list"],["class","alert-message",4,"ngFor","ngForOf"],[1,"alert-message"],["outline","success","role","alert"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"],["name","rememberMe",3,"ngModel","ngModelChange"]],template:function(e,t){if(1&e&&(i.\u0275\u0275elementStart(0,"h1",0),i.\u0275\u0275text(1,"Sign In"),i.\u0275\u0275elementEnd(),i.\u0275\u0275text(2,"\n\n"),i.\u0275\u0275template(3,u,11,1,"nb-alert",1),i.\u0275\u0275text(4,"\n\n"),i.\u0275\u0275template(5,c,11,1,"nb-alert",2),i.\u0275\u0275text(6,"\n\n"),i.\u0275\u0275elementStart(7,"form",3,4),i.\u0275\u0275listener("ngSubmit",function(){return t.login()}),i.\u0275\u0275text(9,"\n\n  "),i.\u0275\u0275elementStart(10,"div",5),i.\u0275\u0275text(11,"\n    "),i.\u0275\u0275elementStart(12,"label",6),i.\u0275\u0275text(13,"Us\xfaario:"),i.\u0275\u0275elementEnd(),i.\u0275\u0275text(14,"\n    "),i.\u0275\u0275elementStart(15,"input",7,8),i.\u0275\u0275listener("ngModelChange",function(e){return t.user.username=e}),i.\u0275\u0275elementEnd(),i.\u0275\u0275text(17,"\n    "),i.\u0275\u0275template(18,f,6,2,"ng-container",9),i.\u0275\u0275text(19,"\n  "),i.\u0275\u0275elementEnd(),i.\u0275\u0275text(20,"\n\n  "),i.\u0275\u0275elementStart(21,"div",5),i.\u0275\u0275text(22,"\n    "),i.\u0275\u0275elementStart(23,"label",10),i.\u0275\u0275text(24,"Password:"),i.\u0275\u0275elementEnd(),i.\u0275\u0275text(25,"\n    "),i.\u0275\u0275elementStart(26,"input",11,12),i.\u0275\u0275listener("ngModelChange",function(e){return t.user.password=e}),i.\u0275\u0275elementEnd(),i.\u0275\u0275text(28,"\n    "),i.\u0275\u0275template(29,b,6,2,"ng-container",9),i.\u0275\u0275text(30,"\n  "),i.\u0275\u0275elementEnd(),i.\u0275\u0275text(31,"\n\n  "),i.\u0275\u0275elementStart(32,"div",13),i.\u0275\u0275text(33,"\n    "),i.\u0275\u0275template(34,v,2,1,"nb-checkbox",14),i.\u0275\u0275text(35,"\n    "),i.\u0275\u0275elementStart(36,"a",15),i.\u0275\u0275text(37,"Forgot Password?"),i.\u0275\u0275elementEnd(),i.\u0275\u0275text(38,"\n  "),i.\u0275\u0275elementEnd(),i.\u0275\u0275text(39,"\n\n  "),i.\u0275\u0275elementStart(40,"button",16),i.\u0275\u0275text(41,"\n    Sign In\n  "),i.\u0275\u0275elementEnd(),i.\u0275\u0275text(42,"\n"),i.\u0275\u0275elementEnd(),i.\u0275\u0275text(43,"\n\n")),2&e){const e=i.\u0275\u0275reference(8),n=i.\u0275\u0275reference(16),r=i.\u0275\u0275reference(27);i.\u0275\u0275advance(3),i.\u0275\u0275property("ngIf",t.showMessages.error&&(null==t.errors?null:t.errors.length)&&!t.submitted),i.\u0275\u0275advance(2),i.\u0275\u0275property("ngIf",t.showMessages.success&&(null==t.messages?null:t.messages.length)&&!t.submitted),i.\u0275\u0275advance(10),i.\u0275\u0275property("ngModel",t.user.username)("status",n.dirty?n.invalid?"danger":"success":"basic")("required",t.getConfigValue("forms.validation.email.required")),i.\u0275\u0275attribute("aria-invalid",!(!n.invalid||!n.touched)||null),i.\u0275\u0275advance(3),i.\u0275\u0275property("ngIf",n.invalid&&n.touched),i.\u0275\u0275advance(8),i.\u0275\u0275property("ngModel",t.user.password)("status",r.dirty?r.invalid?"danger":"success":"basic")("required",t.getConfigValue("forms.validation.password.required"))("minlength",t.getConfigValue("forms.validation.password.minLength"))("maxlength",t.getConfigValue("forms.validation.password.maxLength")),i.\u0275\u0275attribute("aria-invalid",!(!r.invalid||!r.touched)||null),i.\u0275\u0275advance(3),i.\u0275\u0275property("ngIf",r.invalid&&r.touched),i.\u0275\u0275advance(5),i.\u0275\u0275property("ngIf",t.rememberMe),i.\u0275\u0275advance(6),i.\u0275\u0275classProp("btn-pulse",t.submitted),i.\u0275\u0275property("disabled",t.submitted||!e.valid)}},directives:[r.O5,a._Y,a.JL,a.F,s.h8i,a.Fj,a.JJ,a.On,a.Q7,a.wO,a.nD,l.yS,s.DPz,s.$9b,r.sg,s.NTf],encapsulation:2}),e})()},{path:"",redirectTo:"login",pathMatch:"full"},{path:"**",redirectTo:"login"}]}];let C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=i.\u0275\u0275defineInjector({imports:[[l.Bz.forChild(S)],l.Bz]}),e})(),E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=i.\u0275\u0275defineInjector({imports:[[r.ez,a.u5,l.Bz,s.PYG,s.nKr,s.T2N,s.MfT,C,o.S]]}),e})()}}]);