import{r as m,o as i,a as r,c,w as s,b as g,d as p,e as f,f as h,F as _,T,g as k}from"./index.3c252d2e.js";import{u as w,T as x,D as B}from"./DogsCard.db8d98f7.js";const I={__name:"HomeView",setup(F){const o=m([]),e=w(),d=new k("https://dog.ceo/api/"),l=()=>{e.startLoading(),d.get("breeds/image/random/21").then(n=>{var a;e.stopLoading(),(a=n.message)==null||a.forEach(t=>{o.value.push(t)})}).catch(()=>{e.error="Failed to fetch data. Please, try again later!"})};return i(()=>{l()}),(n,a)=>(r(),c(x,null,{title:s(()=>[g("Cute random dogs")]),default:s(()=>[p(T,{appear:"",name:"cards-scale"},{default:s(()=>[(r(!0),f(_,null,h(o.value,(t,u)=>(r(),c(B,{key:u,"image-url":t},null,8,["image-url"]))),128))]),_:1})]),_:1}))}};export{I as default};