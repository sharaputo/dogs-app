import{a as p,q as g,b as m,o,d,w as n,e as f,t as h,u as _,f as B,c as b,g as T,F as k,T as w,i as x}from"./index.9213f854.js";import{u as D,T as F,D as I}from"./DogsCard.a70e8761.js";const v={__name:"BreedView",setup(y){const c=p([]),t=D(),u=new x("https://dog.ceo/api/"),e=g().params.breedId,i=()=>{t.startLoading();let r=e;e.includes("-")&&(r=e.replaceAll("-","/")),u.get(`breed/${r}/images`).then(l=>{var a;t.stopLoading(),(a=l.message)==null||a.forEach(s=>{c.value.push(s)})}).catch(()=>{t.error="Failed to fetch data. Please, try again later!"})};return m(()=>{i()}),(r,l)=>(o(),d(F,null,{title:n(()=>[f(h(_(e)),1)]),default:n(()=>[B(w,{appear:"",name:"cards-scale"},{default:n(()=>[(o(!0),b(k,null,T(c.value,(a,s)=>(o(),d(I,{key:s,"image-url":a},null,8,["image-url"]))),128))]),_:1})]),_:1}))}};export{v as default};
