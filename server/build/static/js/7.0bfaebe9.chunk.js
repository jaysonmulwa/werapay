(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{108:function(e,t,a){"use strict";a.r(t);var n=a(58),r=a(15),l=a(16),c=a(18),o=a(17),s=a(0),i=a.n(s),u=a(3),m=a(110),b=a(46),f=a.n(b),d=Object(s.lazy)((function(){return a.e(1).then(a.bind(null,42))})),p=Object(s.lazy)((function(){return a.e(0).then(a.bind(null,43))})),x=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var l=arguments.length,c=new Array(l),o=0;o<l;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={basic:0,nhif:"",calculated:!1},e.onChange=function(t){e.setState(Object(n.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.setState({calculated:!1});var a=e.state.basic,n=f.a.KE.NHIF({amount:parseFloat(a)});n=(new Intl.NumberFormat).format(n),e.setState({nhif:n}),e.setState({calculated:!0})},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"bg-gray-200"},i.a.createElement(d,null),i.a.createElement("section",{class:"pattern-dots-xl text-gray-300 body-font"},i.a.createElement("div",{class:"container px-5 py-12 mx-auto flex flex-wrap"},i.a.createElement("h2",{class:"sm:text-4xl text-3xl text-gray-900 font-bold title-font mb-2 md:w-1/5"},"NHIF"),i.a.createElement("div",{class:"md:w-4/5 md:pl-6 text-gray-700"}))),i.a.createElement("section",{class:"text-gray-900 body-font"},i.a.createElement("div",{class:"container py-6 mx-auto flex"},i.a.createElement("div",{class:"lg:w-8/12 md:w-8/12 bg-white rounded-lg p-8 flex flex-col w-full md:ml-auto md:mr-auto mt-10 md:mt-0 relative z-10  shadow-md"},i.a.createElement("h2",{class:"text-gray-900 text-lg mb-1 font-medium title-font mb-5"},"NHIF Calculator"),i.a.createElement("label",{class:"block text-gray-700 text-sm font-medium mb-2",for:"basic"},"Gross Pay"),i.a.createElement("input",{class:"bg-white rounded border border-gray-400 text-base px-4 py-2 mb-4 focus:outline-none focus:shadow-outline",type:"number",name:"basic",id:"basic",placeholder:"",onChange:this.onChange}),i.a.createElement("div",{class:"flex flex-col w-full relative py-2"},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("center",null,i.a.createElement("div",{class:"mb-2 mr-2"},i.a.createElement("button",{class:"rounded-lg py-2 px-4 text-white bg-luminous-blue hover:bg-blue-600 focus:outline-none",value:"add more",type:"submit"},"Calculate")))))))),this.state.calculated&&i.a.createElement(m.a,{in:!0,out:!0},i.a.createElement("section",{class:"text-gray-700 body-font"},i.a.createElement("div",{class:"container py-3 mx-auto flex"},i.a.createElement("div",{class:"lg:w-8/12 md:w-8/12 bg-white rounded-lg p-8 flex flex-col w-full md:ml-auto md:mr-auto mt-10 md:mt-0 relative z-10  shadow-md"},i.a.createElement("center",null,"NHIF ="," ",i.a.createElement("span",{className:"font-medium"},this.state.nhif)))))),i.a.createElement(p,null))}}]),a}(s.Component);t.default=Object(u.f)(x)},46:function(e,t,a){t.KE=a(47)},47:function(e,t,a){t.PAYE=a(48),t.NHIF=a(55),t.NSSF=a(56)},48:function(e,t,a){var n=a(49);PAYE=function(e){for(var t=0,a=1,r=e.basic_pay,l=e.benefits,c=e.insurance_relief,o=r+l;o>0;){var s,i,u=tiers(a),m=n(u,2);s=m[0],i=m[1],o<s?(t+=o*i/100,o-=s):0==s?(t+=o*i/100,o-=o):(t+=s*i/100,o-=s),a++}return(t-=2400+c)<0?0:parseFloat(t).toFixed(2)},tiers=function(e){var t=0,a=0;switch(e){case 1:t=24e3,a=10;break;case 2:t=16667,a=15;break;case 3:t=16666,a=20;break;default:t=0,a=25}return[t,a]},old_tiers=function(e){var t=0,a=0;switch(e){case 1:t=12298,a=10;break;case 2:t=11587,a=15;break;case 3:t=11587,a=20;break;case 4:t=11587,a=25;break;default:t=0,a=30}return[t,a]},e.exports=PAYE},49:function(e,t,a){var n=a(50),r=a(51),l=a(52),c=a(54);e.exports=function(e,t){return n(e)||r(e,t)||l(e,t)||c()}},50:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},51:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(s){r=!0,l=s}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return a}}},52:function(e,t,a){var n=a(53);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}},53:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}},54:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},55:function(e,t){e.exports=function(e){var t=0,a=e.amount;switch(!0){case a<=5999:t=150;break;case a<=7999:t=300;break;case a<=11999:t=400;break;case a<=14999:t=500;break;case a<=19999:t=600;break;case a<=24999:t=750;break;case a<=29999:t=850;break;case a<=34999:t=900;break;case a<=39999:t=950;break;case a<=44999:t=1e3;break;case a<=49999:t=1100;break;case a<=59999:t=1200;break;case a<=69999:t=1300;break;case a<=79999:t=1400;break;case a<=89999:t=1500;break;case a<=99999:t=1600;break;default:t=1700}return parseFloat(t).toFixed(2)}},56:function(e,t){NSSF=function(e){var t=e.amount,a=e.new_rates,n=e.tier,r=1,l=0,c=0;if(1==a){if(1==n)l=1;else{if(2!=n)return"Invalid Arguments";l=2}for(;t>0&&r<=l;){var o=rates(r);t<o?(c+=.06*t,t-=t):(c+=.06*o,t-=o),r++}return parseFloat(c).toFixed(2)}return c=(c=.05*t)>200?200:c,parseFloat(c).toFixed(2)},rates=function(e){switch(pensionable=0,e){case 1:pensionable=6e3;break;case 2:pensionable=12e3;break;default:pensionable=0}return pensionable},e.exports=NSSF}}]);
//# sourceMappingURL=7.0bfaebe9.chunk.js.map