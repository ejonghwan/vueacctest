import{_ as b,o as h,c as r,w as $,v as g,a as t,F as x,r as y,n as w,b as f,t as v,d as S,p as C,e as k,f as p,g as l,S as L,h as D,i as e}from"./index-1f02d7c0.js";const A={name:"ListAdd",components:{},data(){return{listData:[],n:0,dataValue:null,dataUpdate:null}},methods:{addList(){this.dataValue===null?alert("말을 쳐야지"):(this.listData=this.listData.concat({id:this.n,conts:this.dataValue,status:!1,update:!1,updateTxt:this.dataValue}),this.n++,this.dataValue=null,console.log(this.dataValue))},statusChange(u,o){let i=this.listData.filter(_=>_.id===o);i[0].status=!i[0].status},handleDel(u,o){if(confirm("삭제?"))this.listData=this.listData.filter(_=>_.id!==o),console.log(this.listData);else return!1},handleUpdate(u,o){let i=this.listData.filter(_=>_.id===o);i[0].update=!i[0].update,i[0].conts=i[0].updateTxt,console.log(o)}}},m=u=>(C("data-v-5ec6b524"),u=u(),k(),u),M=m(()=>t("br",null,null,-1)),I=m(()=>t("br",null,null,-1)),T=m(()=>t("br",null,null,-1)),U=m(()=>t("br",null,null,-1)),P=m(()=>t("br",null,null,-1)),F=["onUpdate:modelValue"],B=["onClick"],N=["onClick"],z=["onClick"],E=m(()=>t("br",null,null,-1)),H=m(()=>t("br",null,null,-1)),O={class:"yesyes"},j={class:"nono"};function q(u,o,i,_,c,d){return h(),r("div",null,[$(t("textarea",{"onUpdate:modelValue":o[0]||(o[0]=s=>c.dataValue=s),name:"aa",id:"aa",cols:"30",rows:"10",label:"입력"},`
            기본글
        `,512),[[g,c.dataValue]]),t("button",{onClick:o[1]||(o[1]=(...s)=>d.addList&&d.addList(...s))},"submit"),M,I,t("ul",null,[(h(!0),r(x,null,y(c.listData,(s,n)=>(h(),r("li",{class:w(["lis",{active:!s.status,nones:s.status}]),key:n},[f(v(s.id)+" ",1),T,$(t("div",null,[f(v(s.conts)+" ",1),U,P],512),[[S,!s.update]]),$(t("div",null,[$(t("textarea",{"onUpdate:modelValue":a=>s.updateTxt=a,cols:"15",rows:"5",label:"입력"},null,8,F),[[g,s.updateTxt]])],512),[[S,s.update]]),t("button",{onClick:a=>d.statusChange(a,s.id)},"상태변경",8,B),t("button",{onClick:a=>d.handleUpdate(a,s.id)},"수정",8,N),t("button",{onClick:a=>d.handleDel(a,s.id)},"삭제",8,z),E,H,$(t("div",O,"완료",512),[[S,s.status]]),$(t("div",j,"비완료",512),[[S,!s.status]])],2))),128))])])}const G=b(A,[["render",q],["__scopeId","data-v-5ec6b524"]]),J={name:"List",components:{}};function K(u,o,i,_,c,d){return h(),r("div",null," list ")}const Q=b(J,[["render",K]]),R={name:"ListParent",components:{ListAdd:G,List:Q}},W=t("h2",null,"list",-1),X=t("h2",null,"listAdd",-1);function Y(u,o,i,_,c,d){const s=p("List"),n=p("ListAdd");return h(),r("div",null,[t("div",null,[W,l(s)]),t("div",null,[X,l(n)])])}const Z=b(R,[["render",Y]]);const tt={name:"MainSlider",components:{Splide:L,SplideSlide:D},data(){return{options:{type:"fade",rewind:!0,perPage:1,autoplay:!0,pauseOnHover:!1,arrows:!1,dots:!0,animatedDots:!0}}}},st={id:"mainslider"},lt=t("p",null,"피태그",-1),nt=t("button",null,"버튼태그",-1),et=t("a",null,"에이태그",-1),ot=t("h1",null,"에이치태그",-1),it=t("span",null,"슬라이드 1번째",-1),ut=t("img",{src:"https://picsum.photos/200/300?grayscale",alt:"main1"},null,-1),_t=t("p",null,"피태그",-1),at=t("button",null,"버튼태그",-1),dt=t("a",null,"에이태그",-1),ct=t("h1",null,"에이치태그",-1),pt=t("span",null,"슬라이드 2번째",-1),ht=t("img",{src:"https://picsum.photos/200/300?grayscale",alt:"main2"},null,-1),rt=t("p",null,"피태그",-1),mt=t("button",null,"버튼태그",-1),$t=t("a",null,"에이태그",-1),ft=t("h1",null,"에이치태그",-1),bt=t("span",null,"슬라이드 3번째",-1),St=t("img",{src:"https://picsum.photos/200/300?grayscale",alt:"main3"},null,-1);function gt(u,o,i,_,c,d){const s=p("splide-slide"),n=p("splide");return h(),r("div",st,[l(n,{options:c.options},{default:e(()=>[l(s,null,{default:e(()=>[lt,nt,et,ot,it,ut]),_:1}),l(s,null,{default:e(()=>[_t,at,dt,ct,pt,ht]),_:1}),l(s,null,{default:e(()=>[rt,mt,$t,ft,bt,St]),_:1})]),_:1},8,["options"])])}const vt=b(tt,[["render",gt]]),xt={name:"About",components:{ListParent:Z,Splide:L,SplideSlide:D,MainSlider:vt}},Lt=t("br",null,null,-1),Dt=t("br",null,null,-1),Vt=t("br",null,null,-1),yt=t("img",{src:"https://picsum.photos/seed/picsum/200/300",alt:"Sample 1"},null,-1),wt=t("button",null,null,-1),Ct=t("img",{src:"https://picsum.photos/seed/picsum/200/300",alt:"Sample 2"},null,-1),kt=t("img",{src:"https://picsum.photos/seed/picsum/200/300",alt:"Sample 2"},null,-1),At=t("img",{src:"https://picsum.photos/seed/picsum/200/300",alt:"Sample 2"},null,-1),Mt=t("img",{src:"https://picsum.photos/seed/picsum/200/300",alt:"Sample 2"},null,-1),It=t("br",null,null,-1),Tt=t("br",null,null,-1),Ut=t("br",null,null,-1),Pt=t("p",null,"피태그",-1),Ft=t("button",null,"버튼태그",-1),Bt=t("a",null,"에이태그",-1),Nt=t("h1",null,"에이치태그",-1),zt=t("span",null,"슬라이드 1번째",-1),Et=t("img",{src:"https://picsum.photos/seed/picsum/200/300",alt:"Sample 1"},null,-1),Ht=t("p",null,"피태그",-1),Ot=t("button",null,"버튼태그",-1),jt=t("a",null,"에이태그",-1),qt=t("h1",null,"에이치태그",-1),Gt=t("span",null,"슬라이드 2번째",-1),Jt=t("img",{src:"https://picsum.photos/seed/picsum/200/300",alt:"Sample 2"},null,-1),Kt=t("p",null,"피태그",-1),Qt=t("button",null,"버튼태그",-1),Rt=t("a",null,"에이태그",-1),Wt=t("h1",null,"에이치태그",-1),Xt=t("span",null,"슬라이드 3번째",-1),Yt=t("img",{src:"https://picsum.photos/seed/picsum/200/300",alt:"Sample 2"},null,-1),Zt=t("p",null,"피태그",-1),ts=t("button",null,"버튼태그",-1),ss=t("a",null,"에이태그",-1),ls=t("h1",null,"에이치태그",-1),ns=t("span",null,"슬라이드 4번째",-1),es=t("img",{src:"https://picsum.photos/seed/picsum/200/300",alt:"Sample 2"},null,-1),os=t("p",null,"피태그",-1),is=t("button",null,"버튼태그",-1),us=t("a",null,"에이태그",-1),_s=t("h1",null,"에이치태그",-1),as=t("span",null,"슬라이드 5번째",-1),ds=t("img",{src:"https://picsum.photos/seed/picsum/200/300",alt:"Sample 2"},null,-1),cs=t("br",null,null,-1),ps=t("br",null,null,-1),hs=t("br",null,null,-1);function rs(u,o,i,_,c,d){const s=p("ListParent"),n=p("SplideSlide"),a=p("Splide"),V=p("MainSlider");return h(),r(x,null,[t("div",null,[f(" About "),l(s)]),Lt,Dt,Vt,f(" slide1 "),l(a,{options:{rewind:!0},"aria-label":"My Favorite Images"},{default:e(()=>[l(n,null,{default:e(()=>[yt,wt]),_:1}),l(n,null,{default:e(()=>[Ct]),_:1}),l(n,null,{default:e(()=>[kt]),_:1}),l(n,null,{default:e(()=>[At]),_:1}),l(n,null,{default:e(()=>[Mt]),_:1})]),_:1}),It,Tt,Ut,f(" slide2 "),l(a,{options:{rewind:!0},"aria-label":"My Favorite Images"},{default:e(()=>[l(n,null,{default:e(()=>[Pt,Ft,Bt,Nt,zt,Et]),_:1}),l(n,null,{default:e(()=>[Ht,Ot,jt,qt,Gt,Jt]),_:1}),l(n,null,{default:e(()=>[Kt,Qt,Rt,Wt,Xt,Yt]),_:1}),l(n,null,{default:e(()=>[Zt,ts,ss,ls,ns,es]),_:1}),l(n,null,{default:e(()=>[os,is,us,_s,as,ds]),_:1})]),_:1}),cs,ps,hs,f(" slide3 "),l(V)],64)}const $s=b(xt,[["render",rs]]);export{$s as default};