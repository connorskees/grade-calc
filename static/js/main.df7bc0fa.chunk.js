(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,t,a){e.exports=a(313)},158:function(e,t,a){},313:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(9),i=a.n(r);a(158),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(150),o=a(24),u=a(25),s=a(27),d=a(26),h=a(28),m=(a(60),a(135)),p=a(319),g=a(317),v=a(318),f=a(138),y=a(316),E=a(315),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(){a.setState({isFocused:!0})},a.handleBlur=function(){a.setState({isFocused:!1})},a.state={isFocused:!1,value:a.props.value},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){void 0===e&&(e=0),this.setState({value:e})}},{key:"render",value:function(){var e=this,t=this.props.value;return this.state.isFocused?l.a.createElement("div",null,l.a.createElement(v.a,Object.assign({value:t,onChange:function(t){return e.props.handleChange(t)},onBlur:this.handleBlur,autoFocus:!0,formatter:function(e){return"".concat(e)},parser:function(e){return e.replace(/\D+/g,"")}},this.props))):l.a.createElement("div",null,l.a.createElement("span",{onClick:this.handleClick},t))}}]),t}(n.Component),k=a(136),w=a(321),C={A:"green",B:"lime",C:"gold",D:"volcano",F:"red","invalid percentage":"geekblue"},F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.percentage,n=t.placement,r="".concat(Math.round(a),"%");return e=a>92?"A":a>84?"B":a>75?"C":a>65?"D":a>=0?"F":"invalid percentage",l.a.createElement("div",{style:{display:"inline-block",paddingLeft:"5%"}},l.a.createElement(k.a,{title:e,placement:n||"top"},l.a.createElement(w.a,{color:C[e]},r)))}}]),t}(n.Component),O=a(137),j=a(314),P=O.a.Button,A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={aPercentages:[{key:99,letter:"A+"},{key:95,letter:"A"},{key:93,letter:"A-"}],bPercentages:[{key:91,letter:"B+"},{key:87,letter:"B"},{key:85,letter:"B-"}],cPercentages:[{key:83,letter:"C+"},{key:77,letter:"C"},{key:75,letter:"C-"}],dPercentages:[{key:73,letter:"D+"},{key:67,letter:"D"},{key:65,letter:"D-"}],fPercentages:[{key:64,letter:"F"}]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"renderRadio",value:function(e){var t=this;return l.a.createElement(P,{value:e.key,onClick:function(){return t.props.handleClick(e.key)},key:e.key},e.key,"%")}},{key:"render",value:function(){var e=this,t=this.state.aPercentages.map(function(t){return e.renderRadio(t)}),a=this.state.bPercentages.map(function(t){return e.renderRadio(t)}),n=this.state.cPercentages.map(function(t){return e.renderRadio(t)}),r=this.state.dPercentages.map(function(t){return e.renderRadio(t)}),i=this.state.fPercentages.map(function(t){return e.renderRadio(t)});return l.a.createElement("div",{style:this.props.style},l.a.createElement(j.a,{placement:"bottom",content:t},l.a.createElement(w.a,{color:"green"},"A")),l.a.createElement(j.a,{placement:"bottom",content:a},l.a.createElement(w.a,{color:"lime"},"B")),l.a.createElement(j.a,{placement:"bottom",content:n},l.a.createElement(w.a,{color:"gold"},"C")),l.a.createElement(j.a,{placement:"bottom",content:r},l.a.createElement(w.a,{color:"volcano"},"D")),l.a.createElement(j.a,{placement:"bottom",content:i},l.a.createElement(w.a,{color:"red"},"F")))}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(){a.setState({isFocused:!0})},a.handleBlur=function(){var e=a.state.value?a.state.value:a.props.defaultValue;""===e&&(e=a.props.defaultValue),a.setState({isFocused:!1,value:e})},a.state={isFocused:!1,value:a.props.defaultValue},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({value:t})}},{key:"reset",value:function(){this.setState({value:this.props.defaultValue})}},{key:"render",value:function(){var e=this,t=this.state.value;return this.state.isFocused?l.a.createElement("div",null,l.a.createElement(g.a,Object.assign({value:t,onChange:function(t){return e.handleChange(t)},onBlur:function(){return e.handleBlur(t)},autoFocus:!0},this.props))):l.a.createElement("div",null,l.a.createElement("span",{style:{width:"100%"},onClick:this.handleClick},t))}}]),t}(n.Component),S=m.a.Option,B=(n.Component,a(320)),M=m.a.Option,x={width:"".concat(100/3,"%"),display:"inline-block",marginTop:"3%",alignSelf:"center"},Y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={gpa:0,isFullYear:!0,isAuto:!0,alert:l.a.createElement(B.a,{message:"x",style:{visibility:"hidden"}}),gradeWanted:95,view:"mp",inputs:[{title:"MP 1",value:0,weight:.225,semesterWeight:.45},{title:"MP 2",value:0,weight:.225,semesterWeight:.45},{title:"MP 3",value:0,weight:.225},{title:"MP 4",value:0,weight:.225},{title:"Final",value:0,weight:.1,semesterWeight:.1}],weightDict:{AP:.5,dualenrollment:.25,honors:.25,regular:0},percentToGPA:{100:4,98:4,94:3.67,92:3.33,90:3,86:2.67,84:2.33,82:2,76:1.67,74:1.33,72:1,66:.67,64:0}},a.reset=function(){a.setState({isAuto:!0,isFullYear:!0,inputs:[{title:"MP 1",value:0,weight:.225,semesterWeight:.45},{title:"MP 2",value:0,weight:.225,semesterWeight:.45},{title:"MP 3",value:0,weight:.225},{title:"MP 4",value:0,weight:.225},{title:"Final",value:0,weight:.1,semesterWeight:.1}]})},a.toggleAuto=function(){var e=a.state,t=e.isAuto,n=e.gradeWanted;a.setState({isAuto:!t}),t||a.calculateFinal(n)},a.toggleFullYear=function(){var e=a.state,t=e.isFullYear,n=e.gradeWanted;a.setState({isFullYear:!t}),a.calculateFinal(n)},a.handleViewChange=function(e){a.setState({view:e})},a.updateGradeWanted=function(e){console.log(e),a.setState({gradeWanted:e}),a.calculateFinal(e)},a.updateMP=function(e,t){e=e||0;var n=a.state.inputs.map(function(a){return a.title===t&&(a.value=e),a});a.setState({inputs:n}),a.state.isAuto&&a.calculateFinal(a.state.gradeWanted)},a.calculateFinal=function(e){var t=a.state,n=t.inputs,r=t.isFullYear;if(t.isAuto){var i,c=r?"weight":"semesterWeight",o=n.filter(function(e){return!e.title.startsWith("Final")&&e[c]}).map(function(e){return e.value*e[c]}).reduce(function(e,t){return e+t});console.log("Total: ",o),console.log("Grade Wanted: ",e-.5);for(var u=0;.1*u+o<=e-.5;u++)i=u;console.log("Final grade: ",i),i>100?(a.setState({alert:l.a.createElement(B.a,{message:"Desired grade is unachievable.",type:"error",showIcon:!0})}),i=100):i<=0||!i?(i=0,a.setState({alert:l.a.createElement(B.a,{message:"You don't even need to take a final!",type:"info"})})):a.setState({alert:l.a.createElement(B.a,{message:"x",type:"info",style:{visibility:"hidden"}})});var s=n.map(function(e){return e.title.startsWith("Final")&&(e.value=i),e});a.setState({inputs:s})}},a.calculateFinalGrade=function(){var e=a.state,t=e.inputs,n=e.isFullYear,l=n?"weight":"semesterWeight";return n?(console.log(t.map(function(e){return e.value*e[l]})),t.map(function(e){return e.value*e[l]}).reduce(function(e,t){return e+t})):t.filter(function(e){return e[l]}).map(function(e){return e.value*e[l]}).reduce(function(e,t){return e+t})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"average",value:function(e){return e.reduce(function(e,t){return e+t},0)/e.length}},{key:"render",value:function(){var e=this,t=this.calculateFinalGrade();console.log(t);var a=Math.round(t),n=this.state,r=n.alert,i=n.isFullYear,c=n.inputs,o=n.isAuto,u=n.gradeWanted;o||(r=l.a.createElement(B.a,{message:"x",type:"info",style:{visibility:"hidden"}}));var s=l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Calculate your final grade"),r,l.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},c.map(function(t){var a="visible";return i||t.semesterWeight>0||(a="hidden"),l.a.createElement("div",{style:{alignSelf:"center",visibility:a}},l.a.createElement("div",{style:{width:"".concat(100/3,"%"),display:"inline-block"}},t.title),l.a.createElement(v.a,{formatter:function(e){return"0"===e?"":e},style:x,key:t.title,title:t.title,max:100,min:0,disabled:t.title.startsWith("Final")&&o,value:c.filter(function(e){return e.title===t.title})[0].value,parser:function(e){return e.replace(/[^\d\.]+/g,"")},onChange:function(a){return e.updateMP(a,t.title)}}))})),l.a.createElement("div",{style:{paddingTop:"3%",height:"40px",visibility:o?"visible":"hidden"}},l.a.createElement("span",{style:{paddingRight:"0%"}},"I want"),l.a.createElement(F,{percentage:u,placement:"right"}),l.a.createElement(A,{style:{display:"inline-block",float:"right"},handleClick:this.updateGradeWanted})),l.a.createElement("div",{style:{width:"100%",borderTop:"1px solid gray",textAlign:"center"}},l.a.createElement("h1",null,a,"%")),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},l.a.createElement(f.a,{onClick:this.toggleAuto},o?"Manual":"Auto"),l.a.createElement(f.a,{onClick:this.reset},"Reset"),l.a.createElement(f.a,{onClick:this.toggleFullYear},i?"Semester":"Full Year")));return l.a.createElement("div",null,l.a.createElement(y.a,{title:l.a.createElement(m.a,{defaultValue:"mp",style:{width:140},onChange:this.handleViewChange},l.a.createElement(M,{value:"mp"},"MP Calc"),l.a.createElement(M,{value:"gpa"},"GPA Calc"),l.a.createElement(M,{value:"final"},"Final Calc")),style:{width:"350px",marginLeft:"auto",marginRight:"auto",marginTop:"1%",marginBottom:"1%"}},s))}}]),t}(n.Component),D=document.getElementById("root");i.a.render(l.a.createElement(Y,null),D),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[153,2,1]]]);
//# sourceMappingURL=main.df7bc0fa.chunk.js.map