(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l=document.querySelector("#dog-btn"),a=document.querySelector("#cat-btn"),f=document.querySelector("#surprise-btn"),c=document.querySelector("img"),d="https://dog.ceo/api/breeds/image/random",u="https://aws.random.cat/meow";l.addEventListener("click",n=>{n.preventDefault(),fetch(d).then(t=>t.json()).then(t=>{c.src=t.message})});a.addEventListener("click",n=>{n.preventDefault(),fetch(u).then(t=>t.json()).then(t=>{c.src=t.file})});f.addEventListener("click",n=>{n.preventDefault(),Promise.any([fetch(d),fetch(u)]).then(o=>o.json()).then(o=>{const t=o.message||o.file;c.src=t})});