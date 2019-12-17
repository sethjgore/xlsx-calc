!function(r,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e=t();for(var n in e)("object"==typeof exports?exports:r)[n]=e[n]}}(this,(function(){return function(r){var t={};function e(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=r,e.c=t,e.d=function(r,t,n){e.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:n})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,t){if(1&t&&(r=e(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var o in r)e.d(n,o,function(t){return r[t]}.bind(null,o));return n},e.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,"a",t),t},e.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},e.p="",e(e.s=8)}([function(r,t,e){"use strict";r.exports=function(r){this.setValue=function(t){r=t},this.calc=function(){return r}}},function(r,t,e){"use strict";r.exports=function(r){for(var t,e=r+1,n="",o=10;e>0&&o--;)t=(e-1)%26,n=String.fromCharCode(t+65)+n,e=(e-t-1)/26;return n}},function(r,t,e){"use strict";r.exports=function(r){for(var t=0,e=r.replace(/[0-9]+$/,""),n=e.length;n--;)t+=Math.pow(26,e.length-n-1)*(e.charCodeAt(n)-64);return t-1}},function(r,t,e){"use strict";const n=e(2),o=e(1),i=e(4);r.exports=function(r,t){this.calc=function(){var e,a,f;if(-1!=r.indexOf("!")){var u=r.split("!");a=i(u[0]),e=u[1]}else a=t.sheet_name,e=r;f=t.wb.Sheets[a];var s,l=e.split(":"),c=parseInt(l[0].replace(/^[A-Z]+/,""),10)||0,h=l[1].replace(/^[A-Z]+/,"");""===h&&f["!ref"]&&(h=f["!ref"].split(":")[1].replace(/^[A-Z]+/,"")),s=parseInt(""==h?"500000":h,10);for(var p=n(l[0]),g=n(l[1]),v=[],w=c;w<=s;w++){var m=[];v.push(m);for(var A=p;A<=g;A++){var x=o(A)+w,E=a+"!"+x;if(t.formula_ref[E]){if("new"===t.formula_ref[E].status)t.exec_formula(t.formula_ref[E]);else if("working"===t.formula_ref[E].status)throw new Error("Circular ref");"e"===f[x].t?m.push(f[x]):m.push(f[x].v)}else f[x]?"e"===f[x].t?m.push(f[x]):m.push(f[x].v):m.push(null)}}return v}}},function(r,t,e){"use strict";r.exports=function(r){var t=r.match(/^'(.*)'$/);return t?t[1]:r}},function(r,t,e){const n=e(0),o=e(6),i=e(12),a=e(3);r.exports=function r(t,e){if(!isNaN(t))return new n(+t);if("TRUE"===t)return new n(1);if("string"!=typeof t)return t;if((t=t.trim().replace(/\$/g,"")).match(/^[A-Z]+[0-9]+:[A-Z]+[0-9]+$/))return new a(t,e);if(t.match(/^[^!]+![A-Z]+[0-9]+:[A-Z]+[0-9]+$/))return new a(t,e);if(t.match(/^[A-Z]+:[A-Z]+$/))return new a(t,e);if(t.match(/^[^!]+![A-Z]+:[A-Z]+$/))return new a(t,e);if(t.match(/^[A-Z]+[0-9]+$/))return new o(t,e);if(t.match(/^[^!]+![A-Z]+[0-9]+$/))return new o(t,e);if(t.match(/%$/)){var f=r(t.substr(0,t.length-1),e);return new i(()=>f.calc()/100)}return t}},function(r,t,e){"use strict";const n=e(4);r.exports=function(r,t){var e=this;this.name="RefValue",this.str_expression=r,this.formula=t,e.parseRef=function(){var e,o,i;if(-1!=r.indexOf("!")){var a=r.split("!");o=n(a[0]),e=t.wb.Sheets[o],i=a[1]}else e=t.sheet,o=t.sheet_name,i=r;if(!e)throw Error("Sheet "+o+" not found.");return{sheet:e,sheet_name:o,cell_name:i,cell_full_name:o+"!"+i}},this.calc=function(){var r=e.parseRef(),n=r.sheet,o=r.cell_name,i=r.cell_full_name,a=n[o];if(!a)return null;var f=t.formula_ref[i];if(!f){if("e"===a.t)throw console.log("ref is an error with no formula",o),new Error(a.w);return a.v}if("new"===f.status){if(t.exec_formula(f),"e"===a.t)throw console.log("ref is an error with new formula",i,a.w),new Error(a.w);return a.v}if("working"===f.status)throw new Error("Circular ref");if("done"===f.status){if("e"===a.t)throw console.log("ref is an error after formula eval",i,a.w),new Error(a.w);return a.v}}}},function(r,t,e){"use strict";r.exports=function(r,t){let e={},n=[];for(let o in r.Sheets){let i=r.Sheets[o];for(let a in i)if(i[a]&&i[a].f){let f=e[o+"!"+a]={formula_ref:e,wb:r,sheet:i,sheet_name:o,cell:i[a],name:a,status:"new",exec_formula:t};n.push(f)}}return n}},function(r,t,e){"use strict";const n=e(1),o=e(2),i=e(9),a=e(7),f=e(17);var u=function(r){for(var t=a(r,i),e=t.length-1;e>=0;e--)i(t[e])};u.calculator=function(r){return new f(r,i)},u.set_fx=i.set_fx,u.exec_fx=i.exec_fx,u.col_str_2_int=o,u.int_2_col_str=n,u.import_functions=i.import_functions,u.import_raw_functions=i.import_raw_functions,u.xlsx_Fx=i.xlsx_Fx,u.localizeFunctions=i.localizeFunctions,u.XLSX_CALC=u,r.exports=u},function(r,t,e){"use strict";const n=e(10);let o={},i={};function a(r,t){for(var e in r)i[e]=r[e]}function f(r,t){var e=(t=t||{}).prefix||"";for(var n in r){var i=r[n];"function"==typeof i?!t.override&&o[e+n]||(o[e+n]=i):"object"==typeof i&&f(i,u(t,{prefix:n+"."}))}}function u(r,t){var e=JSON.parse(JSON.stringify(r));for(var n in t)e[n]=t[n];return e}function s(r){return n(r,{xlsx_Fx:o,xlsx_raw_Fx:i})}function l(r){s(r).update_cell_value()}f(e(15)),a(e(16)),l.set_fx=function(r,t){o[r]=t},l.exec_fx=function(r,t){return o[r].apply(this,t)},l.localizeFunctions=function(r){for(let t in r){let e=r[t];o[e]&&(o[t]=o[e]),i[e]&&(i[t]=i[e])}},l.import_functions=f,l.import_raw_functions=a,l.build_expression=s,l.xlsx_Fx=o,r.exports=l},function(r,t,e){const n=e(11),o=e(0),i=e(13),a=e(14),f={"*":"multiply","+":"plus","-":"minus","/":"divide","^":"power","&":"concat","<":"lt",">":"gt","=":"eq"};r.exports=function(r,t){r.status="working";var e,u=t.xlsx_Fx||{},s=t.xlsx_raw_Fx||{},l=r.cell.f;"="==l[0]&&(l=l.substr(1));var c=e=new n(r),h="",p=!1,g=[{exp:c}];function v(r){'"'===r?(c.push(new o(h)),p=!0,h="",A=m):h+=r}function w(r){"'"===r&&(A=m),h+=r}function m(t){var e,o;'"'===t?(A=v,h=""):"'"===t?(A=w,h="'"):"("===t?function(){var t,e=h.trim(),o=u[e],f=s[e];if(f)o=new a(f,r);else if(o)o=new i(o,r);else if(e)throw new Error('"'+r.sheet_name+'"!'+r.name+": Function "+h+" not found");t=new n(r),g.push({exp:t,special:o}),c=t,h=""}():")"===t?(o=g.pop(),(c=o.exp).push(h),e=c,h="",c=g[g.length-1].exp,o.special?(o.special.push(e),c.push(o.special)):c.push(e)):f[t]?function(r){p||c.push(h),p=!1,c.push(r),h=""}(t):","===t&&g[g.length-1].special?(p=!1,g[g.length-1].exp.push(h),g[g.length-1].special.push(g[g.length-1].exp),g[g.length-1].exp=c=new n(r),h=""):h+=t}for(var A=m,x=0;x<l.length;x++)A(l[x]);return e.push(h),e}},function(r,t,e){"use strict";const n=e(0),o=e(3),i=e(5),a=864e5;var f=0;r.exports=function(r){var t,e=this;function u(r){return null==r||""===r}function s(r){if("function"!=typeof r.calc)throw new Error("Undefined "+r)}function l(r,t,e){for(var o=0;o<t.length;o++)if(t[o]===r)try{if(0===o&&"+"===r){s(t[o+1]);let r=t[o+1].calc();t.splice(o,2,new n(r))}else{s(t[o-1]),s(t[o+1]);let r=e(t[o-1].calc(),t[o+1].calc());t.splice(o-1,3,new n(r)),o--}}catch(r){throw r}}e.id=++f,e.args=[],e.name="Expression",e.update_cell_value=function(){try{if(Array.isArray(e.args)&&1===e.args.length&&e.args[0]instanceof o)throw Error("#VALUE!");r.cell.v=e.calc(),"string"==typeof r.cell.v?r.cell.t="s":"number"==typeof r.cell.v&&(r.cell.t="n")}catch(e){var t={"#NULL!":0,"#DIV/0!":7,"#VALUE!":15,"#REF!":23,"#NAME?":29,"#NUM!":36,"#N/A":42,"#GETTING_DATA":43};if(void 0===t[e.message])throw e;r.cell.t="e",r.cell.w=e.message,r.cell.v=t[e.message]}finally{r.status="done"}},e.formula=r,e.calc=function(){let r=e.args.concat();if(function(r){for(var t=r.length;t--;)if("-"===r[t]){s(r[t+1]);var e=r[t+1].calc();if(t>0&&"string"!=typeof r[t-1]){if(r.splice(t,1,"+"),e instanceof Date){e=Date.parse(e),s(r[t-1]);var o=r[t-1].calc();o instanceof Date&&(o=Date.parse(o)/a,e/=a,r.splice(t-1,1,new n(o)))}r.splice(t+1,1,new n(-e))}else{if("string"==typeof e)throw new Error("#VALUE!");r.splice(t,2,new n(-e))}}}(r),l("^",r,(function(r,t){return Math.pow(+r,+t)})),l("/",r,(function(r,t){if(0==t)throw Error("#DIV/0!");return+r/+t})),l("*",r,(function(r,t){return+r*+t})),l("+",r,(function(r,t){return r instanceof Date&&"number"==typeof t&&(t*=a),+r+ +t})),l("&",r,(function(r,t){return""+r+t})),l("<",r,(function(r,t){return r<t})),l(">",r,(function(r,t){return r>t})),l(">=",r,(function(r,t){return r>=t})),l("<=",r,(function(r,t){return r<=t})),l("<>",r,(function(r,t){return r instanceof Date&&t instanceof Date?r.getTime()!==t.getTime():(!u(r)||!u(t))&&r!=t})),l("=",r,(function(r,t){return r instanceof Date&&t instanceof Date?r.getTime()===t.getTime():!(!u(r)||!u(t))||(null==r&&0===t||0===r&&null==t||("string"==typeof r&&"string"==typeof t&&r.toLowerCase()===t.toLowerCase()||r==t))})),1==r.length)return"function"!=typeof r[0].calc?r[0]:r[0].calc()},e.push=function(n){if(n){var o=i(n,r);"="===o&&(">"==t||"<"==t)||"<"==t&&">"===o?e.args[e.args.length-1]+=o:e.args.push(o),t=o}}}},function(r,t,e){"use strict";r.exports=function(r){this.calc=function(){return r()}}},function(r,t,e){"use strict";r.exports=function(r){var t=this;t.name="UserFn",t.args=[],t.calc=function(){var e,n={"#NULL!":0,"#DIV/0!":7,"#VALUE!":15,"#REF!":23,"#NAME?":29,"#NUM!":36,"#N/A":42,"#GETTING_DATA":43};try{e=r.apply(t,t.args.map(r=>r.calc()))}catch(t){if("is_blank"===r.name&&void 0!==n[t.message])e=0;else{if("iserror"!==r.name||void 0===n[t.message])throw t;e=!0}}return e},t.push=function(r){t.args.push(r)}}},function(r,t,e){"use strict";r.exports=function(r,t){var e=this;e.name="UserRawFn",e.args=[],e.calc=function(){try{return r.apply(e,e.args)}catch(r){throw r}},e.push=function(r){e.args.push(r)}}},function(r,t,e){"use strict";let n={FLOOR:Math.floor,"_xlfn.FLOOR.MATH":Math.floor,ABS:Math.abs,SQRT:Math.sqrt,VLOOKUP:function(r,t,e){for(var n=0;n<t.length;n++)if(t[n][0]==r)return t[n][e-1];throw Error("#N/A")},MAX:function(){for(var r=null,t=arguments.length;t--;){var e=arguments[t];if(Array.isArray(e))for(var n=e,o=n.length;o--;){var i=n[o];if(Array.isArray(i))for(var a=i.length;a--;)(null==r||null!=i[a]&&r<i[a])&&(r=i[a]);else(null==r||null!=i&&r<i)&&(r=i)}else!isNaN(e)&&(null==r||null!=e&&r<e)&&(r=e)}return r},SUM:c,MIN:function(){for(var r=null,t=arguments.length;t--;){var e=arguments[t];if(Array.isArray(e))for(var n=e,o=n.length;o--;){var i=n[o];if(Array.isArray(i))for(var a=i.length;a--;)(null==r||null!=i[a]&&r>i[a])&&(r=i[a]);else(null==r||null!=i&&r>i)&&(r=i)}else!isNaN(e)&&(null==r||null!=e&&r>e)&&(r=e)}return r},CONCATENATE:function(){for(var r="",t=0;t<arguments.length;t++){var e=arguments[t];null!=e&&(r+=e)}return r},PMT:function(r,t,e,n,o){if(o=o||0,n=n||0,0!=r){var i=Math.pow(1+r,t);return-r*(n+i*e)/((-1+i)*(1+r*o))}if(0!=t)return-(n+e)/t;return 0},COUNTA:l,IRR:function(r,t){var e=-2,n=1,o=0;do{for(var i=(e+n)/2,a=0,f=0;f<r.length;f++){var u=r[f];a+=u[0]/Math.pow(1+i,f)}a>0?(e===n&&(n+=Math.abs(i)),e=i):n=i,o++}while(Math.abs(a)>1e-6&&o<1e5);return i},"NORM.INV":s,"_xlfn.NORM.INV":s,STDEV:function(){var r=a(arguments);var t=function(r){return r.reduce((function(r,t){return r+t}))/r.length}(r),e=r.map((function(r){return(r-t)*(r-t)}));return Math.sqrt(e.reduce((function(r,t){return r+t}))/(r.length-1))},AVERAGE:u,EXP:function(r){return Math.pow(Math.E,r)},LN:Math.log,"_xlfn.VAR.P":f,"VAR.P":f,"_xlfn.COVARIANCE.P":i,"COVARIANCE.P":i,TRIM:function(r){return(""+r).trim()},LEN:function(r){return(""+r).length},ISBLANK:o,HLOOKUP:function(r,t,e,n){if(void 0===r||o(r))throw Error("#N/A");e=e||0;let i,a,f=t[0];if("string"==typeof r){for(a=r.toLowerCase(),i=0;i<f.length;i++)if(n&&f[i]===a||-1!==f[i].toLowerCase().indexOf(a))return e<t.length+1?t[e-1][i]:t[0][i]}else for(a=r,i=0;i<f.length;i++)if(n&&f[i]===a||f[i]===a)return e<t.length+1?t[e-1][i]:t[0][i];throw Error("#N/A")},INDEX:function(r,t,e){if(t<=r.length){var n=r[t-1];if(!Array.isArray(n))return r[t];if(!e)return n;if(e<=n.length)return n[e-1]}throw Error("#REF!")},MATCH:function(r,t,e){Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]);if(!r&&!t)throw Error("#N/A");2===arguments.length&&(e=1);if(!(t instanceof Array))throw Error("#N/A");if(0===e)return"string"==typeof r?function(r,t){for(var e=0;e<r.length;e++)if(t=t.replace(/\?/g,"."),Array.isArray(r[e])){if(1===r[e].length&&"string"==typeof r[e][0]&&r[e][0].toLowerCase()===t.toLowerCase())return e+1}else if("string"==typeof r[e]&&r[e].toLowerCase()===t.toLowerCase())return e+1;throw Error("#N/A")}(t,r):function(r,t){for(var e=0;e<r.length;e++)if(Array.isArray(r[e])){if(1===r[e].length&&r[e][0]===t)return e+1}else if(r[e]===t)return e+1;throw Error("#N/A")}(t,r);if(1===e)return function(r,t){for(var e,n,o=0;o<r.length;o++){if(r[o]===t)return o+1;r[o]<t&&(n?r[o]>n&&(e=o+1,n=r[o]):(e=o+1,n=r[o]))}if(!e)throw Error("#N/A");return e}(t,r);if(-1===e)return function(r,t){for(var e,n,o=0;o<r.length;o++){if(r[o]===t)return o+1;r[o]>t&&(n?r[o]<n&&(e=o+1,n=r[o]):(e=o+1,n=r[o]))}if(!e)throw Error("#N/A");return e}(t,r);throw Error("#N/A")},SUMPRODUCT:function(){var r=function(r){return void 0===r||""===r||null===r?0:isNaN(r)?0:parseFloat(r)};if(!arguments||0===arguments.length)throw Error("#VALUE!");if(!function(r){for(var t=function(r){return r.length},e=function(r){return r[0].length},n=t(r[0]),o=e(r[0]),i=1;i<r.length;i++)if(t(r[i])!==n||e(r[i])!==o)return!1;return!0}(arguments))throw Error("#VALUE!");for(var t=0;t<arguments.length;t++){var e=arguments[t];if(Array.isArray(e))for(var n=0;n<e.length;n++){var o=e[n];if(Array.isArray(o))for(var i=0;i<o.length;i++){var a;if((a=o[i])&&"object"==typeof a&&"e"===a.t)throw Error(a.w)}else if((a=o)&&"object"==typeof a&&"e"===a.t)throw Error(a.w)}else if((a=e)&&"object"==typeof a&&"e"===a.t)throw Error(a.w)}var f,u,s,l=arguments.length+1,c=0;for(t=0;t<arguments[0].length;t++)if(arguments[0][t]instanceof Array)for(n=0;n<arguments[0][t].length;n++){for(f=1,i=1;i<l;i++)s=r(arguments[i-1][t][n]),f*=s;c+=f}else{for(f=1,i=1;i<l;i++)u=r(arguments[i-1][t]),f*=u;c+=f}return c},ISNUMBER:function(r){return!isNaN(r)},TODAY:function(){var r=new Date;return r.setHours(0,0,0,0),r},ISERROR:function(){return!1},TIME:function(r,t,e){return 1e3*(60*(60*r+t)+e)/864e5},DAY:function(r){if(!r.getDate)throw Error("#VALUE!");var t=r.getDate();if(isNaN(t))throw Error("#VALUE!");return t},MONTH:function(r){if(!r.getMonth)throw Error("#VALUE!");var t=r.getMonth();if(isNaN(t))throw Error("#VALUE!");return t+1},YEAR:function(r){if(!r.getFullYear)throw Error("#VALUE!");var t=r.getFullYear();if(isNaN(t))throw Error("#VALUE!");return t},RIGHT:function(r,t){if(t=void 0===t?1:parseFloat(t),isNaN(t))throw Error("#VALUE!");r=null==r?"":""+r;return r.substring(r.length-t)},LEFT:function(r,t){if(t=void 0===t?1:parseFloat(t),isNaN(t))throw Error("#VALUE!");r=null==r?"":""+r;return r.substring(0,t)},IFS:function(){for(var r=0;r+1<arguments.length;r+=2){var t=arguments[r],e=arguments[r+1];if(t)return e}throw Error("#N/A")},ROUND:function(r,t){if(0===arguments.length)throw new Error("Err:511");if(1===arguments.length)return Math.round(r);let e=Math.pow(10,t);return Math.round(e*r)/e},CORREL:function(r,t){if(r=a(r),t=a(t),r.length!==t.length)return"N/D";for(var e=1/(r.length-1),n=c.apply(this,r)/r.length,o=c.apply(this,t)/t.length,i=0,f=0,u=0,s=0;s<r.length;s++)i+=(r[s]-n)*(t[s]-o),f+=Math.pow(r[s],2),u+=Math.pow(t[s],2);return f=Math.sqrt(f/e),u=Math.sqrt(u/e),i/(e*f*u)},SUMIF:function(){let r=arguments[1],t=0;return[].slice.call(arguments)[0][0].forEach((e,n)=>{null!==e&&e.replace(/\'/g,"")===r&&(isNaN([].slice.call(arguments)[2][0][n])||(t+=[].slice.call(arguments)[2][0][n]))}),t},CHOOSE:function(r){return arguments[r]},SUBSTITUTE:function(r,t,e,n){if(0===n)throw Error("#VALUE!");if(!r||!t||!e&&""!==e)return r;if(void 0===n)return r.replace(new RegExp(t,"g"),e);for(var o=0,i=0;r.indexOf(t,o)>0;)if(o=r.indexOf(t,o+1),++i===n)return r.substring(0,o)+e+r.substring(o+t.length)}};function o(r){return console.log(r),!r}function i(r,t){if(r=a(r),t=a(t),r.length!=t.length)return"N/D";for(var e=1/r.length,n=c.apply(this,r)/r.length,o=c.apply(this,t)/t.length,i=0,f=0;f<r.length;f++)i+=(r[f]-n)*(t[f]-o);return i*e}function a(r){for(var t=[],e=0;e<r.length;e++){var n=r[e];if(Array.isArray(n)){for(var o=n,i=o.length;i--;)if("number"==typeof o[i])t.push(o[i]);else if(Array.isArray(o[i]))for(var a=o[i].length;a--;)"number"==typeof o[i][a]&&t.push(o[i][a])}else"number"==typeof n&&t.push(n)}return t}function f(){for(var r=u.apply(this,arguments),t=0,e=0,n=0;n<arguments.length;n++){var o=arguments[n];if(Array.isArray(o))for(var i=o,a=i.length;a--;)for(var f=i[a].length;f--;)null!==i[a][f]&&void 0!==i[a][f]&&(t+=Math.pow(i[a][f]-r,2),e++);else t+=Math.pow(o-r,2),e++}return t/e}function u(){return c.apply(this,arguments)/l.apply(this,arguments)}function s(r,t,e){if(r<0||r>1)throw"The probality p must be bigger than 0 and smaller than 1";if(e<0)throw"The standard deviation sigma must be positive";return 0==r?-1/0:1==r?1/0:0==e?t:(n=r-.5,Math.abs(n)<=.425?i=n*(((((((2509.0809287301227*(o=.180625-n*n)+33430.57558358813)*o+67265.7709270087)*o+45921.95393154987)*o+13731.69376550946)*o+1971.5909503065513)*o+133.14166789178438)*o+3.3871328727963665)/(((((((5226.495278852854*o+28729.085735721943)*o+39307.89580009271)*o+21213.794301586597)*o+5394.196021424751)*o+687.1870074920579)*o+42.31333070160091)*o+1):(o=n>0?1-r:r,i=(o=Math.sqrt(-Math.log(o)))<=5?(((((((.0007745450142783414*(o+=-1.6)+.022723844989269184)*o+.2417807251774506)*o+1.2704582524523684)*o+3.6478483247632045)*o+5.769497221460691)*o+4.630337846156546)*o+1.4234371107496835)/(((((((1.0507500716444169e-9*o+.0005475938084995345)*o+.015198666563616457)*o+.14810397642748008)*o+.6897673349851)*o+1.6763848301838038)*o+2.053191626637759)*o+1):(((((((2.0103343992922881e-7*(o+=-5)+27115555687434876e-21)*o+.0012426609473880784)*o+.026532189526576124)*o+.29656057182850487)*o+1.7848265399172913)*o+5.463784911164114)*o+6.657904643501103)/(((((((20442631033899397e-31*o+1.421511758316446e-7)*o+18463183175100548e-21)*o+.0007868691311456133)*o+.014875361290850615)*o+.1369298809227358)*o+.599832206555888)*o+1),n<0&&(i=-i)),t+e*i);var n,o,i}function l(){for(var r=0,t=arguments.length;t--;){var e=arguments[t];if(Array.isArray(e))for(var n=e,o=n.length;o--;)for(var i=n[o].length;i--;)null!==n[o][i]&&void 0!==n[o][i]&&r++;else null!=e&&r++}return r}function c(){for(var r=0,t=arguments.length;t--;){var e=arguments[t];if(Array.isArray(e))for(var n=e,o=n.length;o--;)for(var i=n[o].length;i--;)isNaN(n[o][i])||(r+=+n[o][i]);else r+=+e}return r}r.exports=n},function(r,t,e){"use strict";const n=e(1),o=e(2),i=e(0),a=e(3),f=e(6);r.exports={OFFSET:function(r,t,e,u,s){if(u=(u||new i(1)).calc(),s=(s||new i(1)).calc(),1===r.args.length&&"RefValue"===r.args[0].name){var l=r.args[0],c=l.parseRef(),h=o(c.cell_name)+e.calc(),p=n(h),g=+c.cell_name.replace(/^[A-Z]+/g,"")+t.calc(),v=p+g;if(1===u&&1===s)return new f(v,l.formula).calc();var w=n(h+s-1)+(g+u-1),m=c.sheet_name+"!"+v+":"+w;return new a(m,l.formula).calc()}},IFERROR:function(r,t){try{var e=r.calc();return"number"!=typeof e||!isNaN(e)&&e!==1/0&&e!==-1/0?e:t.calc()}catch(r){return t.calc()}},IF:function(r,t,e){return r.calc()?t.calc():void 0!==e&&e.calc()},AND:function(){for(var r=0;r<arguments.length;r++)if(!arguments[r].calc())return!1;return!0},OR:function(){for(var r=0;r<arguments.length;r++)if(arguments[r].calc())return!0;return!1},TRANSPOSE:function(r){let t=r.args[0].calc(),e=r.formula.name.match(/([A-Z]+)([0-9]+)/),i=r.formula.sheet,a=o(e[1]),f=+e[2];for(let r=0;r<t.length;r++){let e=t[r];for(let t=0;t<e.length;t++){let o=a+r,u=f+t,s=e[t];i[n(o)+u].v=s}}return t[0][0]}}},function(r,t,e){"use strict";const n=e(0),o=e(5),i=e(7);r.exports=class{constructor(r,t){this.workbook=r,this.expressions=[],this.exec_formula=t,this.variables={},this.formulas=i(r,t);for(let r=this.formulas.length-1;r>=0;r--){let e=t.build_expression(this.formulas[r]);this.expressions.push(e)}this.calcNames()}setVar(r,t){let e=this.variables[r];e?e.setValue(t):this.expressions.forEach(e=>{this.setVarOfExpression(e,r,t)})}getVars(){let r={};for(let t in this.variables)r[t]=this.variables[t].calc();return r}calcNames(){this.workbook&&this.workbook.Workbook&&this.workbook.Workbook.Names&&this.workbook.Workbook.Names.forEach(r=>{let t=this.getRef(r.Ref);this.variables[r.Name]=t,this.expressions.forEach(t=>{this.setVarOfExpression(t,r.Name)})})}getRef(r){if(!this.formulas.length)throw new Error("No formula found.");let t={formula_ref:this.formulas[0].formula_ref,wb:this.workbook,exec_formula:this.exec_formula};return o(r,t)}setVarOfExpression(r,t,e){for(let o=0;o<r.args.length;o++){let i=r.args[o];i===t?r.args[o]=this.variables[t]||(this.variables[t]=new n(e)):"object"!=typeof i||"Expression"!==i.name&&"UserFn"!==i.name||this.setVarOfExpression(i,t,e)}}execute(){this.expressions.forEach(r=>{r.update_cell_value()})}}}])}));
//# sourceMappingURL=xlsx-calc.js.map