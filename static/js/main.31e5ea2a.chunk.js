(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,a){e.exports=a(314)},159:function(e,t,a){},314:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),l=a(9),r=a.n(l);a(159),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(151),o=a(24),u=a(25),s=a(27),d=a(26),h=a(28),p=(a(60),a(79)),m=a(320),g=a(318),v=a(319),f=a(82),y=a(317),E=a(316),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(){a.setState({isFocused:!0})},a.handleBlur=function(){a.setState({isFocused:!1})},a.state={isFocused:!1,value:a.props.value},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){void 0===e&&(e=0),this.setState({value:e})}},{key:"render",value:function(){var e=this,t=this.props.value;return this.state.isFocused?i.a.createElement("div",null,i.a.createElement(v.a,Object.assign({value:t,onChange:function(t){return e.props.handleChange(t)},onBlur:this.handleBlur,autoFocus:!0,formatter:function(e){return"".concat(e)},parser:function(e){return e.replace(/\D+/g,"")}},this.props))):i.a.createElement("div",null,i.a.createElement("span",{onClick:this.handleClick},t))}}]),t}(n.Component),C=a(80),k=a(323),w={A:"green",B:"lime",C:"gold",D:"volcano",F:"red","invalid percentage":"geekblue"},F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.percentage,n=t.placement,l="".concat(Math.round(a),"%");return e=a>92?"A":a>84?"B":a>75?"C":a>65?"D":a>=0?"F":"invalid percentage",i.a.createElement("div",{style:{display:"inline-block",paddingLeft:"5%"}},i.a.createElement(C.a,{title:e,placement:n||"top"},i.a.createElement(k.a,{color:w[e]},l)))}}]),t}(n.Component),O=a(81),j=a(315),W=O.a.Button,P=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={aPercentages:[{key:99,letter:"A+"},{key:95,letter:"A"},{key:93,letter:"A-"}],bPercentages:[{key:91,letter:"B+"},{key:87,letter:"B"},{key:85,letter:"B-"}],cPercentages:[{key:83,letter:"C+"},{key:77,letter:"C"},{key:75,letter:"C-"}],dPercentages:[{key:73,letter:"D+"},{key:67,letter:"D"},{key:65,letter:"D-"}],fPercentages:[{key:64,letter:"F"}]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"renderRadio",value:function(e){var t=this;return i.a.createElement(W,{value:e.key,onClick:function(){return t.props.handleClick(e.key)},key:e.key},e.key,"%")}},{key:"render",value:function(){var e=this,t=this.state.aPercentages.map(function(t){return e.renderRadio(t)}),a=this.state.bPercentages.map(function(t){return e.renderRadio(t)}),n=this.state.cPercentages.map(function(t){return e.renderRadio(t)}),l=this.state.dPercentages.map(function(t){return e.renderRadio(t)}),r=this.state.fPercentages.map(function(t){return e.renderRadio(t)});return i.a.createElement("div",{style:this.props.style},i.a.createElement(j.a,{placement:"bottom",content:t},i.a.createElement(k.a,{color:"green"},"A")),i.a.createElement(j.a,{placement:"bottom",content:a},i.a.createElement(k.a,{color:"lime"},"B")),i.a.createElement(j.a,{placement:"bottom",content:n},i.a.createElement(k.a,{color:"gold"},"C")),i.a.createElement(j.a,{placement:"bottom",content:l},i.a.createElement(k.a,{color:"volcano"},"D")),i.a.createElement(j.a,{placement:"bottom",content:r},i.a.createElement(k.a,{color:"red"},"F")))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(){a.setState({isFocused:!0})},a.handleBlur=function(){var e=a.state.value?a.state.value:a.props.defaultValue;""===e&&(e=a.props.defaultValue),a.setState({isFocused:!1,value:e})},a.state={isFocused:!1,value:a.props.defaultValue},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({value:t})}},{key:"reset",value:function(){this.setState({value:this.props.defaultValue})}},{key:"render",value:function(){var e=this,t=this.state.value;return this.state.isFocused?i.a.createElement("div",null,i.a.createElement(g.a,Object.assign({value:t,onChange:function(t){return e.handleChange(t)},onBlur:function(){return e.handleBlur(t)},autoFocus:!0},this.props))):i.a.createElement("div",null,i.a.createElement("span",{style:{width:"100%"},onClick:this.handleClick},t))}}]),t}(n.Component),S=p.a.Option,x=(n.Component,a(322)),B=a(321),M=p.a.Option,D={width:"".concat(100/3,"%"),display:"inline-block",marginTop:"3%",alignSelf:"center"},V={width:"350px",margin:"auto",marginTop:"10vh",marginBottom:"10vh"},R=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).toggleDrawer=function(){a.setState({drawerVisible:!a.state.drawerVisible})},a.reset=function(){a.setState({isAuto:!0,alert:i.a.createElement(x.a,{message:"x",style:{visibility:"hidden"}}),gradeWanted:95}),a.updateFinalWeight(10),a.updateMPCount(4);for(var e=a.state,t=e.finalWeight,n=e.mpCount,l=[],r=0;r<n;r++)l.push({title:"MP ".concat(r+1),value:0,weight:(1-t)/n});l.push({title:"Final",value:0,weight:t}),a.setState({inputs:l})},a.toggleAuto=function(){var e=a.state,t=e.isAuto,n=e.gradeWanted;a.setState({isAuto:!t}),t||a.calculateFinal(n)},a.toggleFullYear=function(){a.state.inputs.length>3?a.updateMPCount(2):a.updateMPCount(4)},a.handleViewChange=function(e){a.setState({view:e})},a.updateFinalWeight=function(e){var t=a.state,n=t.inputs,i=t.mpCount;e/=100,n.map(function(t){return"Final"===t.title?t.weight=e:t.weight=(1-e)/i,t}),a.setState({finalWeight:e,inputs:n})},a.updateMPCount=function(e){for(var t,n=a.state,i=n.finalWeight,l=n.inputs,r=[],c=0;c<e;c++){var o=l[c];try{t="Final"===o.title?0:o.value||0}catch(u){t=0}r.push({title:"MP ".concat(c+1),value:t,weight:(1-i)/e})}r.push({title:"Final",value:0,weight:i}),a.setState({inputs:r,mpCount:e})},a.updateGradeWanted=function(e){a.setState({gradeWanted:e}),a.calculateFinal(e)},a.updateMP=function(e,t){e=e||0;var n=a.state.inputs.map(function(a){return a.title===t&&(a.value=e),a});a.setState({inputs:n}),a.state.isAuto&&a.calculateFinal(a.state.gradeWanted)},a.calculateFinal=function(e){var t=a.state,n=t.inputs,l=t.isAuto,r=t.finalWeight;if(l){for(var c,o=n.filter(function(e){return!e.title.startsWith("Final")&&e.weight}).map(function(e){return e.value*e.weight}).reduce(function(e,t){return e+t}),u=0;u*r+o<=e-.5&&!(u>101);u++)c=u;c>100?(a.setState({alert:i.a.createElement(x.a,{message:"Desired grade is unachievable.",type:"error",showIcon:!0})}),c=100):c<=0||!c?(c=0,a.setState({alert:i.a.createElement(x.a,{message:"You don't even need to take a final!",type:"info"})})):a.setState({alert:i.a.createElement(x.a,{message:"x",type:"info",style:{visibility:"hidden"}})});var s=n.map(function(e){return"Final"===e.title&&(e.value=c),e});a.setState({inputs:s})}};return a.state={gpa:0,isAuto:!0,drawerVisible:!1,alert:i.a.createElement(x.a,{message:"x",style:{visibility:"hidden"}}),gradeWanted:95,view:"mp",finalWeight:.1,mpCount:4,inputs:[],weightDict:{AP:.5,dualenrollment:.25,honors:.25,regular:0},percentToGPA:{100:4,98:4,94:3.67,92:3.33,90:3,86:2.67,84:2.33,82:2,76:1.67,74:1.33,72:1,66:.67,64:0}},a.initInputs(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"initInputs",value:function(){for(var e=this.state,t=e.finalWeight,a=e.mpCount,n=[],i=0;i<a;i++)n.push({title:"MP ".concat(i+1),value:0,weight:(1-t)/a});n.push({title:"Final",value:0,weight:t}),this.state.inputs=n}},{key:"render",value:function(){var e=this,t=this.state,a=t.alert,n=t.inputs,l=t.isAuto,r=t.gradeWanted,c=t.finalWeight;console.log(n);var o=Math.round(n.map(function(e){return e.value*e.weight}).reduce(function(e,t){return e+t}));l||(a=i.a.createElement(x.a,{message:"x",type:"info",style:{visibility:"hidden"}}));var u=i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"Calculate your final grade"),a,i.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},n.map(function(t){var a="visible";return"Final"!==t.title||e.state.finalWeight||(a="hidden"),i.a.createElement("div",{style:{alignSelf:"center",visibility:a}},i.a.createElement("div",{style:{width:"".concat(100/3,"%"),display:"inline-block"}},t.title),i.a.createElement(v.a,{formatter:function(e){return"0"===e?"":e},style:D,key:t.title,title:t.title,max:100,min:0,disabled:t.title.startsWith("Final")&&l,value:n.filter(function(e){return e.title===t.title})[0].value,parser:function(e){return e.replace(/[^\d\.]+/g,"")},onChange:function(a){return e.updateMP(a,t.title)}}))})),i.a.createElement("div",{style:{paddingTop:"3%",height:"40px",visibility:l?"visible":"hidden"}},i.a.createElement("span",{style:{paddingRight:"0%"}},"I want"),i.a.createElement(F,{percentage:r,placement:"right"}),i.a.createElement(P,{style:{display:"inline-block",float:"right"},handleClick:this.updateGradeWanted})),i.a.createElement("div",{style:{width:"100%",borderTop:"1px solid gray",textAlign:"center"}},i.a.createElement("h1",null,o,"%")),i.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},i.a.createElement(f.a,{onClick:this.toggleAuto},l?"Manual":"Auto"),i.a.createElement(f.a,{type:"primary",onClick:this.reset},"Reset"),i.a.createElement(f.a,{onClick:this.toggleFullYear},n.length>3?"Semester":"Full Year")));return i.a.createElement("div",null,i.a.createElement(y.a,{title:i.a.createElement(p.a,{defaultValue:"mp",style:{width:140},onChange:this.handleViewChange},i.a.createElement(M,{value:"mp"},"MP Calc"),i.a.createElement(M,{value:"gpa"},"GPA Calc"),i.a.createElement(M,{value:"final"},"Final Calc")),extra:i.a.createElement(f.a,{onClick:this.toggleDrawer},"Advanced"),style:V},u),i.a.createElement(B.a,{title:"Final Grade Calculator",placement:"right",closable:!1,onClose:this.toggleDrawer,visible:this.state.drawerVisible},i.a.createElement("p",null,"A calculator to see what you need to get on your final to finish with the grade you want."),i.a.createElement(f.a,{onClick:function(){return e.updateFinalWeight(c?0:10)}},c?"No Final":"Final"),i.a.createElement("div",null,i.a.createElement("span",null,"Final Weight:"),i.a.createElement(v.a,{style:{width:"".concat(100/3,"%"),display:"inline-block",marginTop:"3%",marginLeft:"3%"},max:100,min:0,value:Math.trunc(100*this.state.finalWeight),parser:function(e){return e.replace(/[^\d\.]+/g,"")},onChange:function(t){return e.updateFinalWeight(t)}})),i.a.createElement("div",null,i.a.createElement("span",null,"MP Count:"),i.a.createElement(v.a,{style:{width:"".concat(100/3,"%"),display:"inline-block",marginTop:"3%",marginLeft:"3%"},max:10,min:1,value:this.state.mpCount,parser:function(e){return e.replace(/[^\d\.]+/g,"")},onChange:function(t){return e.updateMPCount(t)}}))))}}]),t}(n.Component),T=document.getElementById("root");r.a.render(i.a.createElement(R,null),T),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[154,2,1]]]);
//# sourceMappingURL=main.31e5ea2a.chunk.js.map