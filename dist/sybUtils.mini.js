!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.aUtils=n():t.aUtils=n()}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";function r(t,n,...e){null==n&&(n=window),n.tempFn=t;const r=n.tempFn(...e);return delete n.tempFn,r}function o(t,n,e){null==n&&(n=window),n.tempFn=t;const r=n.tempFn(...e);return delete n.tempFn,r}function u(t,n,...e){return(...o)=>r(t,n,...e,...o)}function i(t,n){let e=0;return function(r){console.log("事件 throttle");const o=Date.now();o-e>n&&(t.call(this,r),e=o)}}function c(t,n){return function(e){t.hasOwnProperty("setTimeoutId")&&clearTimeout(t.setTimeoutId),t.setTimeoutId=setTimeout(()=>{t.call(this,e),delete t.setTimeoutId},n)}}function f(t,n){let e=[];for(let r=0;r<t.length;r++){const o=n(t[r],r);e.push(o)}return e}function s(t,n,e){let r=e;for(let e=0;e<t.length;e++){r=n(r,t[e],e)}return r}function l(t,n){let e=[];for(let r=0;r<t.length;r++){const o=t[r];n(o,r)&&e.push(o)}return e}function a(t,n){for(let e=0;e<t.length;e++){const r=t[e];if(n(r,e))return r}}function p(t,n){for(let e=0;e<t.length;e++){if(n(t[e],e))return e}return-1}function d(t,n){for(let e=0;e<t.length;e++){if(!n(t[e],e))return!1}return!0}function h(t,n){for(let e=0;e<t.length;e++){if(n(t[e],e))return!0}return!1}function y(t){let n=[];return t.forEach(t=>{-1===n.indexOf(t)&&n.push(t)}),n}function g(t){let n=[],e={};return t.forEach(t=>{e.hasOwnProperty(t)||(n.push(t),e[t]=!0)}),n}function m(t){return[...new Set(t)]}function b(t,...n){let e=[...t];return n.forEach(t=>{Array.isArray(t)?e.push(...t):e.push(t)}),e}function O(t,n,e){let r=[];if(0===t.length)return r;(n=n||0)<0&&(n=0),(e=e||t.length)>t.length&&(e=t.length);for(let o=n;o<e;o++)r.push(t[o]);return r}function w(t){return s(t,(t,n)=>(Array.isArray(n)?t=b(t,w(n)):t.push(n),t),[])}function j(t){let n=b([],...t);for(;h(n,t=>Array.isArray(t));)n=b([],...n);return n}function v(t){return l(t,t=>t)}function E(t,n=1){const e=[];let r=[];return n<1&&(n=1),t.length?(t.forEach(t=>{r.length||e.push(r),r.push(t),r.length===n&&(r=[])}),e):e}function T(t,n){return 0===t.length?[]:0===n.length?[...t]:l(t,t=>-1===n.indexOf(t))}function _(t,...n){return 0===t.length?[]:0===n.length?[...t]:l(t,t=>{let e=!0;for(let r=0;r<n.length;r++){if(-1!==n[r].indexOf(t)){e=!1;break}}return e})}function P(t,...n){const e=[...t];return 0===n.length||n.forEach(t=>{t.forEach(t=>{-1===e.indexOf(t)&&e.push(t)})}),e}function x(t,...n){const e=[];for(let r=0;r<t.length;r++){const o=t[r];-1!==n.indexOf(o)&&(t.splice(r,1),e.push(o),r--)}return e}function S(t,n){return x(t,...n)}function A(t,n=1){return t.length?(n<1&&(n=1),l(t,(t,e)=>e>=n)):[]}function k(t,n=1){return t.length?(n<1&&(n=1),l(t,(e,r)=>r<t.length-n)):[]}function q(t,...n){let e={};const r=o(t,e,n);return r instanceof Object?r:(e.__proto__=t.prototype,e)}function B(t,n){let e=t.__proto__;for(;null!==e;){if(e===n.prototype)return!0;e=e.__proto__}return!1}function I(...t){let n={};return t.forEach(t=>{Object.keys(t).forEach(e=>{const r=t[e];n.hasOwnProperty(e)?n[e]=b([],n[e],r):n[e]=r})}),n}function M(t){return t instanceof Array?[...t]:null!==t&&"object"==typeof t?{...t}:t}function R(t){if(t instanceof Array||null!==t&&"object"==typeof t){const n=t instanceof Array?[]:{};for(const e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return n}return t}function C(t){return JSON.parse(JSON.stringify(t))}function F(t){if(t instanceof Array||null!==t&&"object"==typeof t){const n=t instanceof Array?[]:{};for(const e in t)t.hasOwnProperty(e)&&(n[e]=F(t[e]));return n}return t}function U(t,n=new Map){if(t instanceof Array||null!==t&&"object"==typeof t){let e=n.get(t);if(e)return e;e=t instanceof Array?[]:{},n.set(t,e);for(const r in t)t.hasOwnProperty(r)&&(e[r]=U(t[r],n));return e}return t}function D(t,n=new Map){if(t instanceof Array||null!==t&&"object"==typeof t){let e=n.get(t);if(e)return e;if(t instanceof Array)e=[],n.set(t,e),t.forEach((t,r)=>{e[r]=D(t,n)});else{e={},n.set(t,e);for(const r in t)t.hasOwnProperty(r)&&(e[r]=D(t[r],n))}return e}return t}function J(t){return t.split("").reverse().join("")}function N(t){return t===J(t)}function Q(t,n){return t.length>n?t.substring(0,n)+"...":t}function $(){this.arr=[]}function z(){this.arr=[]}function L(){this.arr=[],this.QueueElement=function(t,n){this.data=t,this.priority=n}}function G(t){for(let n=t.length;n>0;n--)for(let e=0;e<n-1;e++)t[e]>t[e+1]&&([t[e+1],t[e]]=[t[e],t[e+1]]);return t}function H(t){const n=t.length;for(let e=1;e<n;e++){const n=t[e];let r=e-1;for(;r>=0&&t[r]>n;)t[r+1]=t[r],r--;t[r+1]=n}return t}function X({method:t="GET",url:n,params:e={},data:r={}}){let o="";return Object.keys(e).forEach(t=>{o+=`&${t}=${e[t]}`}),o&&(n+="?"+o.substring(1)),r=JSON.stringify(r),new Promise((e,o)=>{const u=new XMLHttpRequest;u.open(t,n),"POST"===(t=t.toUpperCase())||"PUT"===t?(u.setRequestHeader("Content-Type","appLication/json;charset=utf-8"),u.send(r)):u.send(),u.onreadystatechange=()=>{const{status:t,readyState:n,statusText:r}=u;if(4===n)if(t>=200&&t<300){const n={data:JSON.parse(u.response),status:t,statusText:r};e(n)}else o(new Error("request error status is "+t))}})}e.r(n),$.prototype.push=function(t){return this.arr.push(t)},$.prototype.pop=function(){return this.arr.pop()},$.prototype.peek=function(){return this.arr[this.arr.length-1]},$.prototype.size=function(){return this.arr.length},$.prototype.isEmpty=function(){return!this.arr.length},z.prototype.enqueue=function(t){return this.arr.push(t)},z.prototype.dequeue=function(){return this.arr.shift()},z.prototype.front=function(){return this.arr[0]},z.prototype.size=function(){return this.arr.length},z.prototype.isEmpty=function(){return!this.arr.length},L.prototype.enqueue=function(t,n){if(n<0||n>100)throw new Error("优先级值必须在0到100之间");const e=new this.QueueElement(t,n);if(this.arr.length){for(let t=0;t<this.arr.length;t++)if(this.arr[t].priority>n)return void this.arr.splice(t,0,e);this.arr.push(e)}else this.arr.push(e)},L.prototype.dequeue=function(){return this.arr.shift()},L.prototype.front=function(){return this.arr[0]},L.prototype.size=function(){return this.arr.length},L.prototype.isEmpty=function(){return!this.arr.length},X.get=function(t,n){return X(Object.assign(n,{url:t,method:"GET"}))},X.post=function(t,n){return X({url:t,method:"POST",data:{...n}})},X.put=function(t,n){return X({url:t,method:"PUT",data:{...n}})},X.delete=function(t){return X({url:t,method:"DELETE"})};var K=X;const V={};let W={},Y=0;V.subscribe=function(t,n){if(!W[t]){const n={};W[t]=n}const e=`uid_${++Y}_${t}`;return W[t][e]=n,e},V.publish=function(t,n){if(W[t]){const e=W[t];Object.values(e).forEach(e=>{setTimeout(()=>{e(t,n)})})}},V.publishSync=function(t,n){if(W[t]&&"undefined"!==W[t]){const e=W[t];Object.values(e).forEach(e=>{e(t,n)})}},V.unsubscribe=function(t){void 0===t?W={}:"string"==typeof t&&0===t.indexOf("uid_")?Object.values(W).forEach(n=>{delete n[t]}):delete W[t]};var Z=V;let tt={},nt={};tt.on=function(t,n){let e=nt[t];e||(nt[t]=e=[]),e.push(n)},tt.emit=function(t,n){const e=nt[t];e&&"undefinde"!==e&&e.forEach(t=>{setTimeout(()=>{t(n)})})},tt.off=function(t){void 0===t?nt={}:delete nt[t]};var et=tt;function rt(t){const n=this;function e(t){"pending"===n.status&&(n.status="rejected",n.data=t,n.callBacks.length&&setTimeout(()=>{n.callBacks.forEach(n=>{n.onRejected(t)})}))}n.status="pending",n.data=void 0,n.callBacks=[];try{t((function(t){"pending"===n.status&&(n.status="resolved",n.data=t,n.callBacks.length&&setTimeout(()=>{n.callBacks.forEach(n=>{n.onResolved(t)})}))}),e)}catch(t){e(t)}}rt.prototype.then=function(t,n){const e=this;return t="function"==typeof t?t:t=>t,n="function"==typeof n?n:t=>{throw t},new rt((r,o)=>{function u(t){try{const n=t(e.data);n instanceof rt?n.then(t=>r(t),t=>o(t)):r(n)}catch(t){o(t)}}"resolved"===e.status?setTimeout(()=>{u(t)}):"rejected"===e.status?setTimeout(()=>{u(n)}):e.callBacks.push({onResolved(){u(t)},onRejected(){u(n)}})})},rt.prototype.catch=function(t){return this.then(void 0,t)},rt.resolve=function(t){return new rt((n,e)=>{t instanceof rt?t.then(n,e):n(t)})},rt.reject=function(t){return new rt((n,e)=>{e(t)})},rt.all=function(t){return new rt((n,e)=>{const r=new Array(t.length);let o=0;t.forEach((u,i)=>{u.then(e=>{o++,r[i]=e,o===t.length&&n(r)},t=>{e(t)})})})},rt.race=function(t){return new rt((n,e)=>{t.forEach(t=>{t.then(n,e)})})},rt.resolveDelay=function(t,n){return new rt((e,r)=>{setTimeout(()=>{t instanceof rt?t.then(e,r):e(t)},n)})},rt.rejectDelay=function(t,n){return new rt((e,r)=>{setTimeout(()=>{r(t)},n)})};var ot=rt;e.d(n,"call",(function(){return r})),e.d(n,"apply",(function(){return o})),e.d(n,"bind",(function(){return u})),e.d(n,"throttle",(function(){return i})),e.d(n,"debounce",(function(){return c})),e.d(n,"map",(function(){return f})),e.d(n,"filter",(function(){return l})),e.d(n,"find",(function(){return a})),e.d(n,"findIndex",(function(){return p})),e.d(n,"some",(function(){return h})),e.d(n,"every",(function(){return d})),e.d(n,"reduce",(function(){return s})),e.d(n,"unique1",(function(){return y})),e.d(n,"unique2",(function(){return g})),e.d(n,"unique3",(function(){return m})),e.d(n,"concat",(function(){return b})),e.d(n,"slice",(function(){return O})),e.d(n,"flatten1",(function(){return w})),e.d(n,"flatten2",(function(){return j})),e.d(n,"flatten3",(function(){})),e.d(n,"compact",(function(){return v})),e.d(n,"chunk",(function(){return E})),e.d(n,"difference",(function(){return T})),e.d(n,"differences",(function(){return _})),e.d(n,"mergeArray",(function(){return P})),e.d(n,"pull",(function(){return x})),e.d(n,"pullAll",(function(){return S})),e.d(n,"drop",(function(){return A})),e.d(n,"dropRight",(function(){return k})),e.d(n,"newInstance",(function(){return q})),e.d(n,"myInstanceOf",(function(){return B})),e.d(n,"mergeObject",(function(){return I})),e.d(n,"clone1",(function(){return M})),e.d(n,"clone2",(function(){return R})),e.d(n,"deepClone1",(function(){return C})),e.d(n,"deepClone2",(function(){return F})),e.d(n,"deepClone3",(function(){return U})),e.d(n,"deepClone4",(function(){return D})),e.d(n,"reverseString",(function(){return J})),e.d(n,"palindrome",(function(){return N})),e.d(n,"truncate",(function(){return Q})),e.d(n,"Stack",(function(){return $})),e.d(n,"Queue",(function(){return z})),e.d(n,"PriorityQueue",(function(){return L})),e.d(n,"bubbleSort",(function(){return G})),e.d(n,"insertSort",(function(){return H})),e.d(n,"axios",(function(){return K})),e.d(n,"PubSub",(function(){return Z})),e.d(n,"eventBus",(function(){return et})),e.d(n,"Promise",(function(){return ot}))}])}));