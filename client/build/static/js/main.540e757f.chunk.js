(this.webpackJsonpwoof=this.webpackJsonpwoof||[]).push([[0],{24:function(e,t,a){e.exports=a(37)},29:function(e,t,a){},30:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),c=a.n(r),s=(a(29),a(4)),o=a(5),i=(a(30),a(2)),m=a.n(i),u=a(3),d=a(11),p=a(10),b=a(1),f=function(){var e=Object(n.useState)({name:"",email:"",password:""}),t=Object(b.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(b.a)(c,2),i=s[0],f=s[1],g=Object(n.useState)({type:"",message:""}),E=Object(b.a)(g,2),v=E[0],y=E[1],h=Object(n.useRef)(),x=Object(n.useRef)(),j=function(e){var t=e.target,n=t.id,l=t.value;r(Object(p.a)(Object(p.a)({},a),{},Object(d.a)({},n,l)))},w=function(){var e=Object(u.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==a.email){e.next=5;break}return h.current.focus(),y({type:"danger",message:"Please provide your Email!"}),e.abrupt("return");case 5:if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a.email)){e.next=9;break}return h.current.focus(),y({type:"danger",message:"Please provide a valid Email!"}),e.abrupt("return");case 9:if(""!==a.password){e.next=13;break}return x.current.focus(),y({type:"danger",message:"Please provide a password!"}),e.abrupt("return");case 13:if(!(a.password.length<8)){e.next=17;break}return x.current.focus(),y({type:"danger",message:"Please provide a longer password (8 characters min)!"}),e.abrupt("return");case 17:return localStorage.clear(),e.next=20,fetch("/api/user/registration",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()}));case 20:e.sent.message?(y({type:"success",message:"Thank you successfully registered!"}),setTimeout((function(){f(!0)}),1e3)):y({type:"danger",message:"Try again"}),r({name:"",email:"",password:""});case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",{style:{color:"black"}},i?l.a.createElement(o.a,{to:"/login"}):"",l.a.createElement("section",{class:" text-center"},l.a.createElement("div",{class:"container"},l.a.createElement("h1",null,"User Registration"),l.a.createElement("p",{class:"lead text-muted"},"Register and enjoy your stay at forum!"))),l.a.createElement("div",{className:v.type?"alert alert-".concat(v.type):"d-hide",role:"alert"},v.message),l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"card"},l.a.createElement("div",{class:"card-header"},"Register"),l.a.createElement("div",{class:"card-body"},l.a.createElement("form",{role:"form"},l.a.createElement("input",{type:"hidden",id:"db_id",value:""}),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"name"},"First Name"),l.a.createElement("input",{value:a.name,onChange:j,id:"name",type:"text",class:"form-control"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"email"},"Email Address"),l.a.createElement("input",{value:a.email,onChange:j,ref:h,id:"email",type:"email",class:"form-control"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"userPassword"},"Password"),l.a.createElement("input",{value:a.password,onChange:j,ref:x,id:"password",type:"password",class:"form-control"})),l.a.createElement("button",{onClick:w,class:"btn btn-primary submit"},"Register"))))))},g=function(){Object(o.f)();var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(b.a)(c,2),d=i[0],p=i[1],f=Object(n.useState)(""),g=Object(b.a)(f,2),E=g[0],v=g[1],y=Object(n.useState)(""),h=Object(b.a)(y,2),x=h[0],j=h[1],w=function(){var e=Object(u.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/walkdata").then((function(e){return e.json()}));case 2:t=e.sent,console.log("apigetwalk is",t),0==t.length?(v(""),j("")):(t.forEach((function(e){e.createdAt=new Date(e.createdAt).toString().substring(4,15),e.updatedAt=new Date(e.updatedAt).toString().substring(4,15)})),a=0,t.forEach((function(e){a+=e.userReply.length})),r(t),p(a),v(t[0].user.name),j(t[0].updatedAt));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){w()}),[]),l.a.createElement("div",{class:"container-fluid"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-lg-12 mx-auto",style:{height:"50px",backgroundColor:"#9f6934",padding:"0",margin:"0"}},l.a.createElement("h2",{style:{paddingTop:"10px",paddingLeft:"15px",color:"white"}},"Forum")),l.a.createElement("div",{class:"col-lg-12 mx-auto"},l.a.createElement("h2",{class:"my-4"},"Welcome To The Poems Forum!"),l.a.createElement("p",null,"Emily Dickinson is one of America\u2019s greatest and most original poets of all time.")),l.a.createElement("div",{class:"row ml-2 mt-4"},l.a.createElement("div",{class:"col-lg-10 mx-auto mt-4"},l.a.createElement("div",{class:"row py-2",style:{backgroundColor:"#90ee90",border:"1px solid #4ee44e"}},l.a.createElement("div",{class:"col-lg-8 my-2"},l.a.createElement("div",{class:"row my-auto"},l.a.createElement("div",{class:"col-lg-2 mt-4"},l.a.createElement("div",{class:"mt-4",style:{width:"80px",margin:"0 auto"}},l.a.createElement("i",{class:"fas fa-envelope-open-text fa-5x"})," ")),l.a.createElement("div",{class:"col-lg-10 mt-2"},l.a.createElement(s.b,{to:"/the-walks",className:"nav-link"},l.a.createElement("h3",null,"Poems by Emily Dickinson")),l.a.createElement("p",{class:"ml-3"},"Emily Dickinson is one of America\u2019s greatest and most original poets of all time."),l.a.createElement("p",{class:"ml-3"},l.a.createElement("b",null,"Discussions"),l.a.createElement("span",{class:"px-2"},a.length),l.a.createElement("b",null,"Messages"),l.a.createElement("span",{class:"px-2"},d))))),l.a.createElement("div",{class:"col-lg-4 my-2",style:{borderLeft:"2px solid #9f6934"}},l.a.createElement("div",{class:"row my-auto"},l.a.createElement("div",{class:"col-lg-12 ml-3 mt-4"},l.a.createElement("p",null,l.a.createElement("b",null,"Latest by:"),l.a.createElement("span",{class:"px-2"},E),l.a.createElement("b",null),l.a.createElement("span",{class:"px-2"},x))))))),l.a.createElement("div",{class:"col-lg-10 mx-auto"},l.a.createElement("div",{class:"row py-2",style:{backgroundColor:"#90ee90",border:"1px solid #4ee44e"}},l.a.createElement("div",{class:"col-lg-8 my-2"},l.a.createElement("div",{class:"row my-auto"},l.a.createElement("div",{class:"col-lg-2"},l.a.createElement("div",{class:"mt-4",style:{width:"80px",margin:"0 auto"}},l.a.createElement("i",{class:"fas fa-envelope-open-text fa-5x"})," ")),l.a.createElement("div",{class:"col-lg-10  mt-2"},l.a.createElement(s.b,{to:"/the-walks",className:"nav-link"},l.a.createElement("h3",null,"Life of Emily Dickinson")),l.a.createElement("p",{class:"ml-3"},"Emily Dickinson is one of America\u2019s greatest and most original poets of all time. "),l.a.createElement("p",{class:"ml-3"},l.a.createElement("b",null,"Discussions"),l.a.createElement("span",{class:"px-2"},"10"),l.a.createElement("b",null,"Messages"),l.a.createElement("span",{class:"px-2"},"10"))))),l.a.createElement("div",{class:"col-lg-4 my-2",style:{borderLeft:"2px solid #9f6934"}},l.a.createElement("div",{class:"row my-auto"},l.a.createElement("div",{class:"col-lg-12  ml-3 mt-4"},l.a.createElement("p",null,l.a.createElement("b",null,"Latest by:"),l.a.createElement("span",{class:"px-2"},E),l.a.createElement("b",null),l.a.createElement("span",{class:"px-2"},x))))))),l.a.createElement("div",{class:"col-lg-10 mx-auto"},l.a.createElement("div",{class:"row py-2",style:{backgroundColor:"#90ee90",border:"1px solid #4ee44e"}},l.a.createElement("div",{class:"col-lg-8 my-2"},l.a.createElement("div",{class:"row my-auto"},l.a.createElement("div",{class:"col-lg-2"},l.a.createElement("div",{class:"mt-4",style:{width:"80px",margin:"0 auto"}},l.a.createElement("i",{class:"fas fa-envelope-open-text fa-5x"}))),l.a.createElement("div",{class:"col-lg-10"},l.a.createElement(s.b,{to:"/the-walks",className:"nav-link"},l.a.createElement("h3",null,"Movie")),l.a.createElement("p",{class:"ml-3"},"Emily Dickinson is one of America\u2019s greatest and most original poets of all time."),l.a.createElement("p",{class:"ml-3"},l.a.createElement("b",null,"Discussions"),l.a.createElement("span",{class:"px-2"},"10"),l.a.createElement("b",null,"Messages"),l.a.createElement("span",{class:"px-2"},"10"))))),l.a.createElement("div",{class:"col-lg-4 my-2",style:{borderLeft:"2px solid #9f6934"}},l.a.createElement("div",{class:"row my-auto"},l.a.createElement("div",{class:"col-lg-12  ml-3 mt-4"},l.a.createElement("p",null,l.a.createElement("b",null,"Latest by:"),l.a.createElement("span",{class:"px-2"},E),l.a.createElement("b",null),l.a.createElement("span",{class:"px-2"},x))))))))))},E=(l.a.createContext(),function(){var e=Object(n.useState)({name:"",email:localStorage.email,password:"",rememberMe:!0}),t=Object(b.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),i=Object(b.a)(c,2),f=i[0],g=i[1],E=Object(n.useState)({type:"",message:""}),v=Object(b.a)(E,2),y=v[0],h=v[1],x=Object(n.useState)(""),j=Object(b.a)(x,2),w=(j[0],j[1]),k=Object(n.useState)(""),O=Object(b.a)(k,2),S=(O[0],O[1]),C=Object(n.useRef)(),D=Object(n.useRef)(),P=function(e){var t=e.target,n=t.id,l=t.value;r(Object(p.a)(Object(p.a)({},a),{},Object(d.a)({},n,l)))},N=function(){var e=Object(u.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r({name:"",email:localStorage.email,password:"",rememberMe:!0}),""!==a.email){e.next=6;break}return C.current.focus(),h({type:"danger",message:"Please provide your Email!"}),e.abrupt("return");case 6:if(!(""===a.password||a.password.length<8)){e.next=10;break}return D.current.focus(),h({type:"danger",message:"Please provide your password!"}),e.abrupt("return");case 10:return e.next=12,fetch("/api/user/login",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()}));case 12:if(n=e.sent,w(n.img),S(n.name),localStorage.setItem("email",n.email),localStorage.setItem("id",n.id),localStorage.setItem("name",n.name),localStorage.setItem("points",n.points),localStorage.setItem("type",n.type),n.message){e.next=23;break}return h({type:"danger",message:n.error}),e.abrupt("return");case 23:h({type:"success",message:"Loading, please wait..."}),localStorage.email=n.rememberMe?n.email:"",setTimeout((function(){g(!0)}),1e3);case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",null,l.a.createElement("div",{style:{color:"black"}},f?l.a.createElement(o.a,{to:"/"}):"",l.a.createElement("div",{className:y.type?"alert alert-".concat(y.type):"d-hide",role:"alert"},y.message),l.a.createElement("section",{class:"text-center"},l.a.createElement("div",{class:"container"},l.a.createElement("h1",null,"Login"),l.a.createElement("p",{class:"lead text-muted"},"Welcome back!"))),l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"card"},l.a.createElement("div",{class:"card-body"},l.a.createElement("form",{role:"form"},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"userEmail"},"Email Address"),l.a.createElement("input",{value:a.email,onChange:P,ref:C,id:"email",type:"email",class:"form-control"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"userPassword"},"Password"),l.a.createElement("input",{value:a.password,onChange:P,ref:D,id:"password",type:"password",class:"form-control"})),l.a.createElement("button",{onClick:N,type:"button",class:"btn btn-primary submit"},"Login"),"\xa0",l.a.createElement("input",{type:"checkbox",checked:a.rememberMe,onChange:function(){r(Object(p.a)(Object(p.a)({},a),{},{rememberMe:!a.rememberMe}))}}),l.a.createElement("label",{class:"text-secondary",for:"rememberMe"},"Remember Me")," \xa0",l.a.createElement(s.b,{to:"/registration"},"Need to Register?")))))))}),v=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){c()}),[]);var c=function(){var e=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.id="",localStorage.type="","april@test.com"==localStorage.email&&(localStorage.email=""),localStorage.points="",setTimeout((function(){r(!0)}),1e3);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",null,a?l.a.createElement(o.a,{to:"/login"}):"",l.a.createElement("section",{class:"jumbotron text-center"},l.a.createElement("div",{class:"container"},l.a.createElement("p",{class:"lead text-muted"},"Please wait, logging out..."))))};var y=function(){return l.a.createElement("div",null)};var h=function(){return l.a.createElement("div",null)},x=function(){Object(o.f)();var e=Object(n.useState)(!1),t=Object(b.a)(e,2),a=t[0],r=t[1],c=a?"collapse navbar-collapse show":"collapse navbar-collapse",i=localStorage.id,m=(localStorage.name,localStorage.email);return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(s.b,{to:"/",className:"navbar-brand",href:"#"},"Emily ",l.a.createElement("i",{class:"fas fa-book-reader"})," Dickinson"),l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){return r(!a)}},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:c,id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/",className:"nav-link"},"Home")),localStorage.id?"":l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/registration",className:"nav-link",href:"#"},"Register")),"april@test.com"==m?l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/admin",className:"nav-link",href:"#"},"Admin")):"",i?l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/user/".concat(i),className:"nav-link",href:"#"},"Dashboard")):l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/login",className:"nav-link",href:"#"},"Login")),i?l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/logout",className:"nav-link",href:"#"},"Logout")):""))))},j=function(){var e,t=Object(n.useState)(""),a=Object(b.a)(t,2),r=(a[0],a[1],Object(n.useState)("")),c=Object(b.a)(r,2),s=(c[0],c[1],Object(n.useState)("")),i=Object(b.a)(s,2),m=(i[0],i[1],Object(n.useState)([])),u=Object(b.a)(m,2);u[0],u[1],localStorage.id;return Object(n.useEffect)((function(){e()}),[]),""==localStorage.id?l.a.createElement(o.a,{to:"/login"}):""},w=a(12),k=function(e){var t=Object(n.useState)({title:"",message:""}),a=Object(b.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)({type:"",message:""}),o=Object(b.a)(s,2),i=o[0],f=o[1],g=function(e){e.preventDefault();var t=e.target.id,a=e.target.value,n=Object(p.a)(Object(p.a)({},r),{},Object(d.a)({},t,a));c(n)},E=function(){var t=Object(u.a)(m.a.mark((function t(a){var n,l,c,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),e.submitThread(a),n=r.title,l=n.trim().replace(/\s/g,"-").replace(/\'/g,""),""==r.message){t.next=13;break}return c={id:localStorage.id,data:r,slug:l,name:localStorage.name},t.next=8,fetch("/api/newthread",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()}));case 8:(s=t.sent).message?(f({type:"success",message:s.message}),setTimeout((function(){f({})}),1e3)):(f({type:"danger",message:s.message}),setTimeout((function(){f({})}),1e3)),e.loadPage(),t.next=14;break;case 13:alert("message is empty ");case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return l.a.createElement("div",{class:"col-lg-12"},l.a.createElement("div",{class:"row justify-content-center"},l.a.createElement("div",{class:i.type?"alert alert-".concat(i.type):"d-hide",role:"alert"},i.message),l.a.createElement("form",null,l.a.createElement("textarea",{type:"textarea",name:"",id:"title",value:r.title,onChange:g,placeholder:"Title",cols:"100",rows:"1"}),l.a.createElement("br",null),l.a.createElement("textarea",{type:"textarea",name:"",id:"message",value:r.message,onChange:g,placeholder:"Your Message",cols:"100",rows:"5"}),l.a.createElement("br",null),l.a.createElement("button",{class:"btn myBtnPink",type:"submit",onClick:E},"Add"),l.a.createElement("button",{class:"btn myBtnPink",type:"submit",onClick:function(t){e.submitThread(t)}},"Cancel"))))},O=function(){Object(o.f)();var e=Object(n.useState)(!1),t=Object(b.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),i=Object(b.a)(c,2),d=i[0],p=i[1],f=Object(n.useState)({type:"",message:""}),g=Object(b.a)(f,2),E=g[0],v=g[1],y=function(e){v({type:"danger",message:e}),setTimeout((function(){v({})}),2e3)},h=function(){var e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/walkdata").then((function(e){return e.json()}));case 2:(t=e.sent).forEach((function(e){e.createdAt=new Date(e.createdAt).toString().substring(4,15),e.updatedAt=new Date(e.updatedAt).toString().substring(4,15)})),p(Object(w.a)(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=localStorage.id,"admin"!=localStorage.type){e.next=6;break}r(!0),e.next=14;break;case 6:if(localStorage.id){e.next=10;break}y("Dear guest, feel free to visit, to participate please register"),e.next=14;break;case 10:return e.next=12,fetch("/api/points/".concat(a)).then((function(e){return e.json()}));case 12:(n=e.sent)>=5?r(!0):n<5&&y("Not Enough Points to Participate in the forum. Check your dashboard.");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){h()}),[]),l.a.createElement("div",null,l.a.createElement("div",{style:{textAlign:"center"},class:E.type?"alert alert-".concat(E.type):"d-hide",role:"alert"},E.message),l.a.createElement("div",{class:"container-fluid"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-lg-12",style:{height:"50px",backgroundColor:"#9f6934",padding:"0",margin:"0"}},l.a.createElement("h2",{style:{paddingTop:"10px",paddingLeft:"15px",color:"white"}},"Forum")),l.a.createElement("div",{class:"col-lg-12 mx-auto"},l.a.createElement("h2",{class:"my-4"},"Poems by Emily Dickinson"),l.a.createElement("p",null,"Like most writers, Emily Dickinson wrote about what she knew and about what intrigued her. ")),l.a.createElement("div",{class:"col-lg-10 mx-auto"},l.a.createElement("div",{class:"row mx-auto justify-content-end"},l.a.createElement("button",{style:{background:"#90ee90",border:"3px solid #9f6934",padding:"10px 15px",boxShadow:"3px 3px #9E9E9E"},onClick:x}," ",l.a.createElement("i",{class:"fas fa-pen-nib"})," New Post"),l.a.createElement("br",null),a?l.a.createElement(k,{submitThread:function(e){e.preventDefault(),r(!1)},loadPage:h}):"")),l.a.createElement("div",null,l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-lg-12 mx-auto justify-content-end",style:{border:"1px solid black"}}))),l.a.createElement("div",{class:"col-lg-10 mx-auto mt-4"},l.a.createElement("div",null,l.a.createElement("table",{class:"table table-sm"},l.a.createElement("thead",null,l.a.createElement("tr",{style:{height:"50px",border:"3px solid #9f6934",backgroundColor:"#9f6934",padding:"0",margin:"0",color:"white"}},l.a.createElement("th",{style:{width:"10%"}}),l.a.createElement("th",{style:{width:"30%"}},"Title"),l.a.createElement("th",{class:"text-center",style:{width:"20%"}},"Replies"),l.a.createElement("th",{class:"text-center",style:{width:"20%"}},"Views"),l.a.createElement("th",{class:"text-center",style:{width:"20%"}},"Last Activity"))),0!==d.length?d.map((function(e){return l.a.createElement("tbody",null,l.a.createElement("tr",{style:{height:"80px",border:"3px solid #9f6934"}},l.a.createElement("td",{style:{padding:"20px 0 0 20px"}},l.a.createElement("i",{class:"fas fa-envelope-open-text fa-2x"})),l.a.createElement("td",{style:{padding:"10px 0 0 0"},key:e._id},l.a.createElement("div",{style:{fontSize:"25px"}},l.a.createElement(s.b,{to:{pathname:"/the-walks/".concat(e.slug,"/").concat(e._id),info:{id:e._id}}},l.a.createElement("b",null,e.title)," "),l.a.createElement("br",null)),l.a.createElement("div",{class:"my-2"},e.user.name,l.a.createElement("br",null),e.createdAt)),l.a.createElement("td",{class:"text-center",style:{padding:"20px 0 0 0"}},e.userReply.length),l.a.createElement("td",{class:"text-center",style:{padding:"20px 0 0 0"}},"10"),l.a.createElement("td",{class:"text-center",style:{padding:"20px 0 0 0"}},e.updatedAt,l.a.createElement("br",null),(function(){return e.userReply.pop(),e.userReply[0].name}))))})):""))))))};var S=function(){return l.a.createElement("div",null)};var C=function(){return l.a.createElement("div",null)},D=function(e){var t=Object(n.useState)({reply:""}),a=Object(b.a)(t,2),r=a[0],c=a[1],s=function(){var t=Object(u.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),e.submitForm(a),localStorage.id,""==r.reply){t.next=12;break}return n={name:localStorage.name,postId:e.walkPost._id,userId:localStorage.id,post:r},t.next=7,fetch("/api/reply",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()}));case 7:t.sent.message?e.alertSuccess("Thank You! Your reply posted sucessfully."):e.alertFailure("Try again! Failed to post the message"),e.loadPage(),t.next=13;break;case 12:e.alertFailure("Reply is empty");case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return l.a.createElement("div",null,l.a.createElement("form",{class:"mt-2"},l.a.createElement("textarea",{type:"textarea",name:"",id:"message",value:r.reply,onChange:function(e){e.preventDefault();var t={reply:e.target.value};c(t)},placeholder:"Your Message",cols:"100",rows:"5"}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",onClick:s},"Submit"),l.a.createElement("button",{type:"submit",onClick:function(t){e.submitForm(t)}},"Cancel")))},P=function(e){var t=Object(n.useState)({comment:""}),a=Object(b.a)(t,2),r=a[0],c=a[1],s=e.reply._id,o=e.reply.postId,i=function(){var e=Object(u.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=t.target.value,c({comment:a});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var t=Object(u.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),e.submitReply(a,e.idx),""==r.comment){t.next=11;break}return n={postId:o,userId:localStorage.id,name:localStorage.name,replyId:s,comment:r.comment},t.next=6,fetch("/api/comment/",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()}));case 6:t.sent.message?e.alertSuccess("Thank You! Your comment posted sucessfully."):e.alertFailure("Try again! Failed to post the message"),e.loadPage(),t.next=12;break;case 11:e.alertFailure("Try again! The comment form is empty");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return l.a.createElement("div",{class:"col-lg-12 mt-4"},l.a.createElement("div",{class:"row justify-content-end"},l.a.createElement("form",null,l.a.createElement("textarea",{type:"text",name:"",id:"message",value:r.comment,onChange:i,placeholder:"Your Message",cols:"100",rows:"5"}),l.a.createElement("br",null),l.a.createElement("button",{class:"btn myBtnPink",type:"submit",onClick:d},"Add"),l.a.createElement("button",{class:"btn myBtnPink",type:"submit",onClick:function(t){e.submitReply(t)}},"Cancel"))))},N=function(e){return l.a.createElement("div",null,0!==e.comment.length?e.comment.map((function(e){return l.a.createElement("div",{class:"row justify-content-end"},l.a.createElement("div",{class:"col-lg-12",key:e._id,style:{border:"2px solid #9f6934"}},l.a.createElement("div",{class:"col-lg-12 my-2"},l.a.createElement("div",{key:e._id},l.a.createElement("b",null,e.commenterName)),l.a.createElement("div",null)),l.a.createElement("div",{class:"col-lg-12 mb-2",key:e._id},e.postcomment)))})):"")},A=function(e){var t=Object(n.useState)({message:e.reply.message}),a=Object(b.a)(t,2),r=a[0],c=a[1],s=function(){var t=Object(u.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={postId:e.reply.postId,userId:e.reply.postId,replyId:e.reply._id,edited:r.message},t.next=4,fetch("/api/editReply",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()}));case 4:t.sent,e.submitReply(a),e.loadPage();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return l.a.createElement("div",{class:"col-lg-12 ml-2 mt-4"},l.a.createElement("div",{class:"row"},l.a.createElement("form",null,l.a.createElement("textarea",{type:"text",name:"",id:"message",value:r.message,onChange:function(e){e.preventDefault();var t=e.target.value;c({message:t})},placeholder:"Your Message",cols:"100",rows:"5"}),l.a.createElement("br",null),l.a.createElement("button",{class:"btn myBtnPink",type:"submit",onClick:s},"submit"),l.a.createElement("button",{class:"btn myBtnPink",type:"submit",onClick:function(t){e.submitReply(t)}},"Cancel"))))},T=function(e){var t=Object(n.useState)({message:e.walkPost.message}),a=Object(b.a)(t,2),r=a[0],c=a[1],s=function(){var t=Object(u.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={postId:e.walkPost._id,userId:e.walkPost.userId,edited:r.message},t.next=4,fetch("/api/editPost",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()}));case 4:t.sent,e.submitForm(a),e.loadPage();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return l.a.createElement("div",null,l.a.createElement("div",{class:"col-lg-12 ml-2"},l.a.createElement("div",{class:"row justify-content-center"},l.a.createElement("form",null,l.a.createElement("textarea",{type:"textarea",name:"",id:"message",value:r.message,onChange:function(e){e.preventDefault();var t=e.target.value;c({message:t})},placeholder:"Your Message",cols:"100",rows:"5"}),l.a.createElement("br",null),l.a.createElement("button",{class:"btn myBtnPink",type:"submit",onClick:s},"Submit"),l.a.createElement("button",{class:"btn myBtnPink",type:"submit",onClick:function(t){e.submitForm(t),t.preventDefault()}},"Cancel")))))},I=function(e){var t=Object(n.useState)({}),a=Object(b.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(!1),i=Object(b.a)(s,2),d=i[0],p=i[1],f=Object(n.useState)(!1),g=Object(b.a)(f,2),E=g[0],v=g[1],y=Object(n.useState)(!1),h=Object(b.a)(y,2),x=h[0],j=h[1],w=Object(n.useState)(!1),k=Object(b.a)(w,2),O=k[0],S=k[1],C=Object(n.useState)([]),I=Object(b.a)(C,2),R=I[0],F=I[1],M=Object(n.useState)(),L=Object(b.a)(M,2),B=L[0],_=L[1],J=Object(n.useState)(),Y=Object(b.a)(J,2),W=(Y[0],Y[1]),z=Object(n.useState)(""),H=Object(b.a)(z,2),$=H[0],U=H[1],V=Object(n.useState)({type:"",message:""}),q=Object(b.a)(V,2),G=q[0],K=q[1],Q={mainPost:{boxShadow:"5px 3px #9E9E9E",border:"1px solid #9f6934",background:"#90ee90"},mainBtn:{display:"block",backgroundColor:"transparent",border:"none",color:"#9f6934",fontWeight:"bold"},btn:{backgroundColor:"transparent",border:"none",display:"inline",color:"#9f6934",fontWeight:"bold"}},X=Object(o.g)(),Z=(Object(o.g)().name,Object(o.g)().postId),ee=Object(o.f)();console.log("location is",ee),console.log("params is",X);var te=function(){var e=Object(u.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/walkpost/".concat(Z)).then((function(e){return e.json()}));case 2:return t=e.sent,c(t),U(t.user.name),e.next=7,fetch("/api/replydata/".concat(Z)).then((function(e){return e.json()}));case 7:(a=e.sent).forEach((function(e){e.createdAt=new Date(e.createdAt).toString().substring(4,15),e.updatedAt=new Date(e.updatedAt).toString().substring(4,15)})),F(a),n=a.length,_(n),W(t.likes);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(e){e.preventDefault(),p(!1),S(!1)},ne=function(e){K({type:"success",message:e}),setTimeout((function(){K({})}),1e3)},le=function(e){K({type:"danger",message:e}),setTimeout((function(){K({})}),1e3)},re=function(e,t){v({id:t,state:!1}),j({id:t,state:!1}),e.preventDefault()};Object(n.useEffect)((function(){te()}),[]);var ce=function(){var e=Object(u.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/likeInc/".concat(Z),{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify()}).then((function(e){return e.json()}));case 3:e.sent,te();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(u.a)(m.a.mark((function e(t,a,n){var l,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),l=t.target.id,localStorage.id!=l&&"admin"!==localStorage.type){e.next=7;break}return e.next=5,fetch("/api/deletereply/".concat(n),{method:"delete"}).then((function(e){return e.json()}));case 5:r=e.sent,console.log(r);case 7:te();case 8:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),oe=function(){var e=Object(u.a)(m.a.mark((function e(t,a,n){var l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/deletepost/".concat(a,"/").concat(n),{method:"delete"}).then((function(e){return e.json()}));case 3:l=e.sent,console.log(l),window.location.href="/the-walks";case 6:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();return l.a.createElement("div",null,l.a.createElement("div",{style:{textAlign:"center"},class:G.type?"alert alert-".concat(G.type):"d-hide",role:"alert"},G.message),l.a.createElement("div",{class:"container-fluid"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col",style:{height:"50px",backgroundColor:"#9f6934",padding:"0",margin:"0"}},l.a.createElement("h2",{style:{paddingTop:"10px",paddingLeft:"15px",color:"white"}},"Forum")),l.a.createElement("div",{class:"col-lg-12 mx-auto"},l.a.createElement("div",{class:"row justify-content-center"},l.a.createElement("div",{class:"col-10"},l.a.createElement("h2",{class:"my-4"},r.title)),l.a.createElement("div",{class:"col-10",style:Q.mainPost},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-lg-6"},l.a.createElement("p",{style:{padding:"0px",fontSize:"20px"}},l.a.createElement("b",null,$))),l.a.createElement("div",{class:"col-lg-3",style:{fontSize:"20px"}},l.a.createElement("small",null,l.a.createElement("b",null,r.createdAt))),l.a.createElement("div",{class:"col-lg-3",style:{fontSize:"20px"}},l.a.createElement("small",null,l.a.createElement("b",null,"Replies:",B))),O?l.a.createElement(T,{submitForm:ae,walkPost:r,loadPage:te}):l.a.createElement("div",{class:"col-12 mx-auto"},l.a.createElement("p",{class:"my-4",style:{fontSize:"20px"}},r.message)),l.a.createElement("div",{class:"col-12 mt-4"}))),l.a.createElement("div",{class:"col-lg-10 col-md-10 mt-2"},l.a.createElement("div",{class:"row justify-content-start"},l.a.createElement("div",{class:"col-lg-1 col-md-1"},l.a.createElement("div",null,l.a.createElement("button",{style:Q.btn,type:"submit",onClick:function(e){ce(e)}},l.a.createElement("i",{class:"fas fa-thumbs-up"})),r.likes)),l.a.createElement("div",{class:"col-lg-1 col-md-1"},l.a.createElement("button",{onClick:function(){localStorage.id?p(!0):p(!1)},style:Q.mainBtn},"Reply"),d?l.a.createElement(D,{submitForm:ae,walkPost:r,loadPage:te,alertSuccess:ne,alertFailure:le}):""),l.a.createElement("div",{class:"col-lg-1 col-md-1"},localStorage.id===r.userId||"moderator"===localStorage.type||"admin"===localStorage.type?l.a.createElement("button",{onClick:function(e){e.preventDefault(),S(!0)},style:Q.mainBtn},"Edit"):""),l.a.createElement("div",{class:"col-lg-1 col-md-1"},localStorage.id===r.userId||"admin"===localStorage.type?l.a.createElement("button",{onClick:function(e){return oe(e,r._id,r.userId)},style:Q.mainBtn},"Delete"):"")))))),l.a.createElement("div",{class:"row mt-4"},l.a.createElement("div",{class:"col-lg-12"},0!==R.length?R.map((function(e,t){return l.a.createElement("div",{class:"row justify-content-center my-4"},l.a.createElement("div",{class:"col-lg-10 py-2",style:{border:"2px solid #9f6934"}},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-lg-2"},l.a.createElement("b",null,e.createdAt)),l.a.createElement("div",{class:"col-lg-2"},l.a.createElement("b",null,e.user.name)))),l.a.createElement("div",{class:"col-lg-10"},l.a.createElement("div",{class:"row",style:{border:"1px solid #9f6934",background:"#D2B48C"}},l.a.createElement("div",{class:"col-lg-10"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-lg-4"}))),x.id==t&&x.state?l.a.createElement(A,{submitReply:re,idx:t,reply:e,loadPage:te}):l.a.createElement("div",{class:"col-lg-12 my-4"},e.message),l.a.createElement("div",{class:"col-lg-12"},l.a.createElement("div",{class:"row justify-content-end"},l.a.createElement("button",{class:"pr-4",type:"submit",id:t,onClick:function(e){return function(e,t){e.preventDefault(),localStorage.id?v({id:t,state:!0}):v({id:"",state:!1})}(e,t)},style:Q.btn},"Reply"),l.a.createElement("br",null),l.a.createElement("button",{class:"pr-4",type:"submit",id:e.userId,onClick:function(e){return function(e,t){var a=e.target.id;localStorage.id==a||"moderator"===localStorage.type||"admin"===localStorage.type?j({id:t,state:!0}):j({id:"",state:!1})}(e,t)},style:Q.btn},"Edit"),l.a.createElement("br",null),l.a.createElement("button",{class:"pr-4",type:"submit",id:e.userId,onClick:function(a){return se(a,t,e._id)},style:Q.btn},"Delete")," ",l.a.createElement("br",null),E.id==t&&E.state?l.a.createElement(P,{submitReply:re,idx:t,alertSuccess:ne,alertFailure:le,reply:e,loadPage:te}):""))),l.a.createElement(N,{comment:e.comment})))})):""))))};var R=function(){return""==localStorage.id?l.a.createElement(o.a,{to:"/login"}):""};var F=function(){return localStorage.id,l.a.createElement("div",{className:"App"},l.a.createElement(s.a,null,l.a.createElement(x,null),l.a.createElement("div",{className:"container-fluid",style:{minHeight:"80vh",padding:"0"}},l.a.createElement(o.b,{exact:!0,path:["/","/homepage"],component:g}),l.a.createElement(o.b,{exact:!0,path:"/Search",component:y}),l.a.createElement(o.b,{exact:!0,path:"/registration",component:f}),l.a.createElement(o.b,{exact:!0,path:"/login",component:E}),l.a.createElement(o.b,{exact:!0,path:"/logout",component:v}),l.a.createElement(o.b,{exact:!0,path:"user/:id",component:j}),l.a.createElement(o.b,{exact:!0,path:"/the-walks",component:O}),l.a.createElement(o.b,{exact:!0,path:"/yapping",component:S}),l.a.createElement(o.b,{exact:!0,path:"/treats",component:C}),l.a.createElement(o.b,{exact:!0,path:"/the-walks/:name/:postId",component:I}),l.a.createElement(o.b,{exact:!0,path:"/admin",component:R}),l.a.createElement(o.b,{exact:!0,path:"/user/:id",component:j})),l.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.540e757f.chunk.js.map