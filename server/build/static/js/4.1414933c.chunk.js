(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[4],{84:function(e,a,t){"use strict";t.r(a);var n=t(82),l=t(55),m=t(12),c=t(13),o=t(16),r=t(15),i=t(0),d=t.n(i),s=t(56),u=t.n(s),p=t(85),h=t(86),E=t(87),y=t(88),v=t(89),f=t(90),b=t(91),g=t(92),C=t(93),_=t(94),k=t(95),N=t(96),S=Object(i.lazy)((function(){return t.e(6).then(t.bind(null,81))})),A=Object(i.lazy)((function(){return t.e(5).then(t.bind(null,83))})),O=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=a.call.apply(a,[this].concat(c))).state={fname:"",idno:"",kra:"",position:"",dpt:"",payroll:"",cname:"",caddr:"",month:"",year:"",bank:"",acc:"",file:[],filename:null,tempfile:null,values:[],paycode_e:[],amount_e:[],values_e:[],paycode_d:[],amount_d:[],values_d:[],paycode_t:[],amount_t:[],values_t:[]},e.FileOnChange=function(a){if("undefined"!=typeof a.target.files[0]){var t=e.state.filename;e.state.isNew;null==t&&e.setState({isNew:!1}),e.setState({file:a.target.files[0]}),e.setState({filename:a.target.files[0].name}),e.setState({tempfile:URL.createObjectURL(a.target.files[0])})}console.log(e.state)},e.onChange=function(a){e.setState(Object(l.a)({},a.target.name,a.target.value))},e.handleSubmit=function(a){a.preventDefault();var t=e.state,n=t.cname,l=t.caddr,m=t.fname,c=t.idno,o=t.kra,r=t.position,i=t.dpt,d=t.payroll,s=t.bank,p=t.acc,h=t.month,E=t.year,y=t.file,v=t.filename,f=t.paycode_e,b=t.amount_e,g=t.paycode_d,C=t.amount_d,_=t.paycode_t,k=t.amount_t,N=new FormData;N.append("cname",n),N.append("caddr",l),N.append("fname",m),N.append("idno",c),N.append("kra",o),N.append("position",r),N.append("dpt",i),N.append("payroll",d),N.append("bank",s),N.append("acc",p),N.append("month",h),N.append("year",E),N.append("position",r),N.append("file",y),N.append("filename",v),N.append("paycode_e",f),N.append("amount_e",b),N.append("paycode_d",g),N.append("amount_d",C),N.append("paycode_t",_),N.append("amount_t",k),console.log(N);N&&u.a.post("http://localhost:8080/api/v1/personalslip",N,{headers:{"Content-Type":"multipart/form-data; boundary=--------------------------811161660471543283806813"}}).then((function(e){console.log(e)}))},e}return Object(c.a)(t,[{key:"handleEarningsPaycodeChange",value:function(e,a){var t=Object(n.a)(this.state.paycode_e);t[e]=a.target.value,this.setState({paycode_e:t})}},{key:"handleEarningsAmountChange",value:function(e,a){var t=Object(n.a)(this.state.amount_e);t[e]=a.target.value,this.setState({amount_e:t})}},{key:"handleDeductionsPaycodeChange",value:function(e,a){var t=Object(n.a)(this.state.paycode_d);t[e]=a.target.value,this.setState({paycode_d:t})}},{key:"handleDeductionsAmountChange",value:function(e,a){var t=Object(n.a)(this.state.amount_d);t[e]=a.target.value,this.setState({amount_d:t})}},{key:"handleTaxPaycodeChange",value:function(e,a){var t=Object(n.a)(this.state.paycode_t);t[e]=a.target.value,this.setState({paycode_t:t})}},{key:"handleTaxAmountChange",value:function(e,a){var t=Object(n.a)(this.state.amount_t);t[e]=a.target.value,this.setState({amount_t:t})}},{key:"addClick",value:function(){this.setState((function(e){return{values:[].concat(Object(n.a)(e.values),[""])}}))}},{key:"addClick_e",value:function(){this.setState((function(e){return{values_e:[].concat(Object(n.a)(e.values_e),[""])}}))}},{key:"addClick_d",value:function(){this.setState((function(e){return{values_d:[].concat(Object(n.a)(e.values_d),[""])}}))}},{key:"addClick_t",value:function(){this.setState((function(e){return{values_t:[].concat(Object(n.a)(e.values_t),[""])}}))}},{key:"removeClick",value:function(e){var a=Object(n.a)(this.state.values);a.splice(e,1),this.setState({values:a})}},{key:"removeClick_e",value:function(e){var a=Object(n.a)(this.state.values_e);a.splice(e,1),this.setState({values_e:a})}},{key:"removeClick_d",value:function(e){var a=Object(n.a)(this.state.values_d);a.splice(e,1),this.setState({values_d:a})}},{key:"removeClick_t",value:function(e){var a=Object(n.a)(this.state.values_t);a.splice(e,1),this.setState({values_t:a})}},{key:"createEarningsUI",value:function(){var e=this;return this.state.values_e.map((function(a,t){return d.a.createElement("div",{key:t},d.a.createElement(p.a,null,d.a.createElement(h.a,{in:!0,out:!0,tag:"h5",className:"mt-3"},d.a.createElement(E.a,null,d.a.createElement(y.a,{md:"5"},d.a.createElement(v.a,{type:"text",name:"paycode",id:"paycode",placeholder:"Item",onChange:e.handleEarningsPaycodeChange.bind(e,t)})," "),d.a.createElement(y.a,{md:"5"},d.a.createElement(v.a,{type:"number",name:"amount",id:"amount",placeholder:"Amount",onChange:e.handleEarningsAmountChange.bind(e,t)})," "),d.a.createElement(y.a,{md:"2"},d.a.createElement(f.a,{type:"button",outline:!0,color:"danger",value:"remove",onClick:e.removeClick_e.bind(e,t)},"Remove")," ")))))}))}},{key:"createDeductionsUI",value:function(){var e=this;return this.state.values_d.map((function(a,t){return d.a.createElement("div",{key:t},d.a.createElement(p.a,null,d.a.createElement(h.a,{in:!0,out:!0,tag:"h5",className:"mt-3"},d.a.createElement(E.a,null,d.a.createElement(y.a,{md:"5"},d.a.createElement(v.a,{type:"text",name:"paycode",id:"paycode",placeholder:"Item",onChange:e.handleDeductionsPaycodeChange.bind(e,t)})," "),d.a.createElement(y.a,{md:"5"},d.a.createElement(v.a,{type:"number",name:"amount",id:"amount",placeholder:"Amount",onChange:e.handleDeductionsAmountChange.bind(e,t)})," "),d.a.createElement(y.a,{md:"2"},d.a.createElement(f.a,{type:"button",outline:!0,color:"danger",value:"remove",onClick:e.removeClick_d.bind(e,t)},"Remove")," ")))))}))}},{key:"createTaxUI",value:function(){var e=this;return this.state.values_t.map((function(a,t){return d.a.createElement("div",{key:t},d.a.createElement(p.a,null,d.a.createElement(h.a,{in:!0,out:!0,tag:"h5",className:"mt-3"},d.a.createElement(E.a,null,d.a.createElement(y.a,{md:"5"},d.a.createElement(v.a,{type:"text",name:"paycode",id:"paycode",placeholder:"Item",onChange:e.handleTaxPaycodeChange.bind(e,t)})," "),d.a.createElement(y.a,{md:"5"},d.a.createElement(v.a,{type:"number",name:"amount",id:"amount",placeholder:"Amount",onChange:e.handleTaxAmountChange.bind(e,t)})," "),d.a.createElement(y.a,{md:"2"},d.a.createElement(f.a,{type:"button",outline:!0,color:"danger",value:"remove",onClick:e.removeClick_t.bind(e,t)},"Remove")," ")))))}))}},{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement(S,null),d.a.createElement(A,null),d.a.createElement(b.a,{className:"my-4"},d.a.createElement(E.a,null,d.a.createElement(y.a,{md:{size:8,offset:2}},d.a.createElement(g.a,{id:"Company"},"Company Details"),d.a.createElement(C.a,{body:!0},d.a.createElement(_.a,{onSubmit:this.handleSubmit},d.a.createElement(p.a,null,d.a.createElement(E.a,null,d.a.createElement(y.a,{md:"12",className:"my-2"},d.a.createElement(k.a,{for:"companyName"},"Company Name"),d.a.createElement(v.a,{type:"text",name:"cname",id:"cname",placeholder:"Company Name",onChange:this.onChange})," "),d.a.createElement(y.a,{md:"12",className:"my-2"},d.a.createElement(k.a,{for:"CompanyAddress"},"Company Address"),d.a.createElement(v.a,{type:"text",name:"caddr",id:"caddr",placeholder:"Company Address",onChange:this.onChange})," "),d.a.createElement(y.a,{md:"6",className:"my-2"},d.a.createElement(k.a,{for:"Logo"},"Company Logo"),d.a.createElement(N.a,{type:"file",name:"customFile",id:"customFile",label:"choose an image file",onChange:this.FileOnChange})),d.a.createElement(y.a,{md:"6",className:"my-2"},d.a.createElement("div",null,d.a.createElement("img",{style:{maxHeight:"8rem"},className:"imagepreview hidden mx-auto mb-3 rounded-md shadow-md focus:outline-none focus:shadow-outline w-1/2",src:this.state.tempfile})))))))))),d.a.createElement(b.a,{className:"my-4"},d.a.createElement(E.a,null,d.a.createElement(y.a,{md:{size:8,offset:2}},d.a.createElement(g.a,null,"Personal Details"),d.a.createElement(C.a,{body:!0},d.a.createElement(_.a,{onSubmit:this.handleSubmit},d.a.createElement(p.a,null,d.a.createElement(E.a,null,d.a.createElement(y.a,{md:"12",className:"my-2"},d.a.createElement(k.a,{for:"Full Name"},"Full Name"),d.a.createElement(v.a,{type:"text",name:"fname",id:"fname",placeholder:"Full Name",onChange:this.onChange})," "),d.a.createElement(y.a,{md:"12",className:"my-2"},d.a.createElement(k.a,{for:"ID Number"},"ID Number"),d.a.createElement(v.a,{type:"number",name:"idno",id:"ino",placeholder:"ID Number",onChange:this.onChange})," "),d.a.createElement(y.a,{md:"12",className:"my-2"},d.a.createElement(k.a,{for:"KRA PIN"},"KRA PIN"),d.a.createElement(v.a,{type:"text",name:"kra",id:"kra",placeholder:"KRA PIN",onChange:this.onChange})," "),d.a.createElement(y.a,{md:"12",className:"my-2"},d.a.createElement(k.a,{for:"Position"},"Position"),d.a.createElement(v.a,{type:"text",name:"position",id:"position",placeholder:"Position",onChange:this.onChange})," "),d.a.createElement(y.a,{md:"12",className:"my-2"},d.a.createElement(k.a,{for:"Department"},"Department"),d.a.createElement(v.a,{type:"text",name:"dpt",id:"dpt",placeholder:"Department",onChange:this.onChange})," "),d.a.createElement(y.a,{md:"12",className:"my-2"},d.a.createElement(k.a,{for:"Payroll Number"},"Payroll Number"),d.a.createElement(v.a,{type:"text",name:"payroll",id:"payroll",placeholder:"Payroll Number",onChange:this.onChange})," "),d.a.createElement(y.a,{md:"6",className:"my-2"},d.a.createElement(k.a,{for:"Bank"},"Bank"),d.a.createElement(v.a,{type:"text",name:"bank",id:"bank",placeholder:"Bank",onChange:this.onChange})," "),d.a.createElement(y.a,{md:"6",className:"my-2"},d.a.createElement(k.a,{for:"Account Number"},"Account Number"),d.a.createElement(v.a,{type:"text",name:"acc",id:"acc",placeholder:"Account Number",onChange:this.onChange})," "),d.a.createElement(y.a,{md:"6",className:"my-2"},d.a.createElement(k.a,{for:"Month"},"Month"),d.a.createElement(v.a,{type:"select",name:"month",id:"month",placeholder:"Month",onChange:this.onChange},d.a.createElement("option",{value:"JANUARY"},"January"),d.a.createElement("option",{value:"FEBRUARY"},"February"),d.a.createElement("option",{value:"MARCH"},"March"),d.a.createElement("option",{value:"APRIL"},"April"),d.a.createElement("option",{value:"MAY"},"May"),d.a.createElement("option",{value:"JUNE"},"June"),d.a.createElement("option",{value:"JULY"},"July"),d.a.createElement("option",{value:"AUGUST"},"August"),d.a.createElement("option",{value:"SEPTEMBER"},"September"),d.a.createElement("option",{value:"OCTOBER"},"October"),d.a.createElement("option",{value:"NOVEMBER"},"November"),d.a.createElement("option",{value:"DECEMBER"},"December"))),d.a.createElement(y.a,{md:"6",className:"my-2"},d.a.createElement(k.a,{for:"Year"},"Year"),d.a.createElement(v.a,{type:"number",name:"year",id:"year",placeholder:"Year",onChange:this.onChange})," ")))))))),d.a.createElement(b.a,{className:"my-4"},d.a.createElement(E.a,null,d.a.createElement(y.a,{md:{size:8,offset:2}},d.a.createElement(g.a,null,"Earnings"),d.a.createElement(C.a,{body:!0},d.a.createElement(_.a,{onSubmit:this.handleSubmit},this.createEarningsUI(),d.a.createElement(f.a,{value:"add more",onClick:this.addClick_e.bind(this)},"Add")))))),d.a.createElement(b.a,{className:"my-4"},d.a.createElement(E.a,null,d.a.createElement(y.a,{md:{size:8,offset:2}},d.a.createElement(g.a,null,"Deductions"),d.a.createElement(C.a,{body:!0},d.a.createElement(_.a,{onSubmit:this.handleSubmit},this.createDeductionsUI(),d.a.createElement(f.a,{value:"add more",onClick:this.addClick_d.bind(this)},"Add")))))),d.a.createElement(b.a,{className:"my-4"},d.a.createElement(E.a,null,d.a.createElement(y.a,{md:{size:8,offset:2}},d.a.createElement(g.a,null,"Tax Details"),d.a.createElement(C.a,{body:!0},d.a.createElement(_.a,{onSubmit:this.handleSubmit},this.createTaxUI(),d.a.createElement(f.a,{value:"add more",onClick:this.addClick_t.bind(this)},"Add")))))),d.a.createElement(b.a,{className:"my-4"},d.a.createElement(E.a,null,d.a.createElement(y.a,{md:{size:8,offset:2}},d.a.createElement(C.a,{body:!0},d.a.createElement(_.a,{onSubmit:this.handleSubmit},d.a.createElement("center",null,d.a.createElement(f.a,{color:"primary",className:"mx-4",type:"submit"},"Submit"))))))))}}]),t}(i.Component);a.default=O}}]);
//# sourceMappingURL=4.1414933c.chunk.js.map