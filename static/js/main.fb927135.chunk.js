(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{14:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(4),s=c(2),l=c(0);function r(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),i=o[0],u=o[1],b=Object(a.useState)(null),d=Object(s.a)(b,2),h=d[0],j=d[1],x=Object(a.useState)(""),m=Object(s.a)(x,2),p=m[0],O=m[1];return Object(l.jsx)("div",{className:"w-full max-w-xs m-10",children:Object(l.jsxs)("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",children:[Object(l.jsx)("h1",{className:"text-center mb-4 text-xl",children:" BMI Calculator"}),Object(l.jsxs)("div",{className:"mb-4",children:[Object(l.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",for:"username",children:"Height"}),Object(l.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"Height ",type:"text",placeholder:"Height in cm",value:c,onChange:function(e){return n(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-6",children:[Object(l.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",for:"password",children:"Weight"}),Object(l.jsx)("input",{className:"shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"Weight",type:"Weight in kg",placeholder:"Weight in cm",value:i,onChange:function(e){return u(e.target.value)}})]}),Object(l.jsx)("div",{className:"flex items-center justify-center",children:Object(l.jsx)("button",{className:"bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",onClick:function(){var e=Number(i/Math.pow(c/100,2)).toFixed(2);j(e);var t=function(e){return e<18.5?"Underweight":e>=18.5&&e<24.9?"Normal":e>=25&&e<29.9?"Overweight":"Obese"}(e);O(t),n(""),u("")},children:"Calculate BMI"})}),h&&Object(l.jsxs)("div",{className:"mt-4",children:[Object(l.jsxs)("p",{children:["Your BMI is: ",h," "]}),Object(l.jsxs)("p",{children:["You are currently: ",p]})]})]})})}var o=document.getElementById("root");Object(n.createRoot)(o).render(Object(l.jsx)(a.StrictMode,{children:Object(l.jsx)(r,{})}))}},[[14,1,2]]]);
//# sourceMappingURL=main.fb927135.chunk.js.map