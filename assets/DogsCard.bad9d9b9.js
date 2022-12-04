import{h as b,r as l,o as m,_ as v,a as n,e as _,i as o,j as p,u as d,c as y,t as h,p as S,k,l as $,n as D,d as L,m as T}from"./index.ab26c4f6.js";const I=b("breedStore",()=>{const s=l(!1),e=()=>{s.value=!0},t=()=>{s.value=!1},a=l(""),r=c=>{a.value=c},i=l([]),g=()=>{localStorage.setItem("favourites",JSON.stringify(i.value))},u=()=>{const c=JSON.parse(localStorage.getItem("favourites")||"[]");i.value=c};return m(()=>{u()}),{isLoading:s,error:a,favouriteImages:i,startLoading:e,stopLoading:t,setError:r,saveFavouriteImages:g}});const B={},C={class:"loader"};function F(s,e){return n(),_("div",C)}const U=v(B,[["render",F],["__scopeId","data-v-6fa2c17c"]]);const x=s=>(S("data-v-e6c0080b"),s=s(),k(),s),G={class:"dogs"},N={class:"container"},w={class:"dogs__title"},A=x(()=>o("p",{class:"dogs__hint"},"Tap twice to toggle favourite!",-1)),E={key:1,class:"dogs__error"},J={key:2,class:"dogs__grid"},O={__name:"TheGrid",setup(s){const e=I();return(t,a)=>(n(),_("section",G,[o("div",N,[o("h1",w,[p(t.$slots,"title",{},void 0,!0)]),A,d(e).isLoading?(n(),y(U,{key:0})):!d(e).isLoading&&d(e).error?(n(),_("p",E,h(d(e).error),1)):(n(),_("div",J,[p(t.$slots,"default",{},void 0,!0)]))])]))}},Q=v(O,[["__scopeId","data-v-e6c0080b"]]),V=(s,e)=>{let t=!1;const a=r=>{if(!t)return t=!0,setTimeout(()=>{t=!1},500),!1;r.preventDefault(),e()};s.addEventListener("touchstart",a)},j=s=>s.substring(30).split("/")[0];const q={class:"card__image ibg"},z=["src"],H={class:"card__footer"},M={class:"breed-title"},K={__name:"DogsCard",props:{imageUrl:{type:String,required:!0},favourite:{type:Boolean,default:!1}},setup(s){const e=s,t=l(!1),a=I(),r=()=>{if(a.favouriteImages.includes(e.imageUrl)){const c=a.favouriteImages.filter(f=>f!==e.imageUrl);a.favouriteImages=c,t.value=!1}else a.favouriteImages.push(e.imageUrl),t.value=!0;a.saveFavouriteImages()},i=()=>{a.favouriteImages.includes(e.imageUrl)?t.value=!0:t.value=!1},g=$(()=>j(e.imageUrl)),u=l(null);return m(()=>{i(),V(u.value,r)}),(c,f)=>(n(),_("article",{class:"card",ref_key:"dogsCard",ref:u},[o("div",q,[o("img",{src:s.imageUrl,alt:""},null,8,z)]),o("div",H,[o("h2",M,h(d(g)),1),o("button",{type:"button",class:D(["like-button",{"like-button--favourite":t.value||e.favourite}]),onClick:r},[L(T)],2)])],512))}},R=v(K,[["__scopeId","data-v-32287ba8"]]);export{R as D,Q as T,I as u};
