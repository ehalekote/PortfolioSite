(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},21:function(e,t,a){e.exports=a(34)},26:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(17),i=a.n(n),l=(a(26),a(2)),c=a(3),s=a(5),u=a(4),h=a(6),d=(a(10),a(38)),m=a(37),p=a(18),C=a.n(p),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleClick=function(){a.props.colorGetter()},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"canvasDiv",onClick:function(){return e.handleClick()}},o.a.createElement(C.a,{params:{particles:{number:{value:30,density:{enable:!0,value_area:800}},color:{value:this.props.backgroundColor},shape:{type:"circle",stroke:{width:0,color:["#176614"]},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}},size:{value:6,random:!0,anim:{enable:!0,speed:1,size_min:1.9,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:2,direction:"right",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},style:{width:"100%",height:"100%"}}))}}]),t}(o.a.Component),g=a(11),f=a(13),O=a(15);g.b.add(O.a,O.c,O.b);var E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleOverGH=function(){a.setState({setColorGH:a.props.submitColor})},a.handleOutGH=function(){a.setState({setColorGH:a.state.exitColor})},a.handleOverT=function(){a.setState({setColorT:a.props.submitColor})},a.handleOutT=function(){a.setState({setColorT:a.state.exitColor})},a.handleOverL=function(){a.setState({setColorL:a.props.submitColor})},a.handleOutL=function(){a.setState({setColorL:a.state.exitColor})},a.handleClick=function(){a.setState({setColorGH:a.state.exitColor,setColorT:a.state.exitColor,setColorL:a.state.exitColor})},a.state={setColorGH:"gray",setColorT:"gray",setColorL:"gray",enterColor:"#176614",exitColor:"gray"},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"text-overlay",id:"MainLeft"},o.a.createElement("h1",{id:"MainHeadHeader"},"ESHAN",o.a.createElement("br",null),"HALEKOTE"),o.a.createElement("p",{id:"MainHeadSecondary"},o.a.createElement("a",{href:"https://github.com/ehalekote"},o.a.createElement(f.a,{icon:["fab","github"],size:"lg",color:this.state.setColorGH,onMouseOver:function(){return e.handleOverGH()},onMouseOut:function(){return e.handleOutGH()},onClick:function(){return e.handleClick()}})),"\xa0|\xa0",o.a.createElement("a",{href:"https://twitter.com/Eshan___"},o.a.createElement(f.a,{icon:["fab","twitter"],size:"lg",color:this.state.setColorT,onMouseOver:function(){return e.handleOverT()},onMouseOut:function(){return e.handleOutT()},onClick:function(){return e.handleClick()}})),"\xa0|\xa0",o.a.createElement("a",{href:"https://www.linkedin.com/in/eshanhalekote/"},o.a.createElement(f.a,{icon:["fab","linkedin"],size:"lg",color:this.state.setColorL,onMouseOver:function(){return e.handleOverL()},onMouseOut:function(){return e.handleOutL()},onClick:function(){return e.handleClick()}})),o.a.createElement("br",null),"I'm a fullstack, blockchain, and embedded software ",o.a.createElement("span",{id:"bigmoji"},"\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbb"),".",o.a.createElement("br",null),"If I'm not working, I'm ",o.a.createElement("span",{id:"bigmoji"},"\ud83e\uddd7\ud83c\udffd\u200d\u2642\ufe0f")," or ",o.a.createElement("span",{id:"bigmoji"},"\ud83c\udf7d\ufe0f"),".",o.a.createElement("br",null),"The University of Texas at Austin ECE ",o.a.createElement("span",{id:"bigmoji"},"\ud83e\udd18\ud83c\udffd"),".",o.a.createElement("br",null)))}}]),t}(o.a.Component),v=a(36),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleOverA=function(){a.setState({setColorA:a.props.submitColor})},a.handleOutA=function(){a.setState({setColorA:a.state.exitColor})},a.handleOverP=function(){a.setState({setColorP:a.props.submitColor})},a.handleOutP=function(){a.setState({setColorP:a.state.exitColor})},a.handleOverC=function(){a.setState({setColorC:a.props.submitColor})},a.handleOutC=function(){a.setState({setColorC:a.state.exitColor})},a.state={setColorA:"#91969e",setColorP:"#91969e",setColorC:"#91969e",enterColor:"#176614",exitColor:"#91969e"},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"text-overlay",id:"Navbar"},o.a.createElement(v.a,{to:"/"},o.a.createElement("a",{className:"Navlink",href:"#"},o.a.createElement("h1",{className:"innerNav",style:{color:this.state.setColorA},onMouseOver:function(){return e.handleOverA()},onMouseOut:function(){return e.handleOutA()}},"ABOUT"))),o.a.createElement(v.a,{to:"/portfolio"},o.a.createElement("a",{className:"Navlink",href:"#"},o.a.createElement("h1",{className:"innerNav",style:{color:this.state.setColorP},onMouseOver:function(){return e.handleOverP()},onMouseOut:function(){return e.handleOutP()}},"PORTFOLIO"))),o.a.createElement(v.a,{to:"/contact"},o.a.createElement("a",{className:"Navlink",href:"#"},o.a.createElement("h1",{className:"innerNav",style:{color:this.state.setColorC},onMouseOver:function(){return e.handleOverC()},onMouseOut:function(){return e.handleOutC()}},"CONTACT"))))}}]),t}(o.a.Component),x=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"text-overlay",id:"MainLeft"},o.a.createElement("h1",{id:"MainHeadHeader"},"MY",o.a.createElement("br",null),"WORK"),o.a.createElement("p",{id:"MainHeadSecondary"},"Building the next ",o.a.createElement("span",{id:"bigmoji"},"\ud83d\ude80"),"."))}}]),t}(o.a.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"text-overlay",id:"MainLeft"},o.a.createElement("h1",{id:"MainHeadHeader"},"CONTACT",o.a.createElement("br",null),"ME"),o.a.createElement("p",{id:"MainHeadSecondary"},"Always happy to ",o.a.createElement("span",{id:"bigmoji"},"\ud83d\udce7")," , ",o.a.createElement("span",{id:"bigmoji"},"\ud83d\udcde")," , or ",o.a.createElement("span",{id:"bigmoji"},"\ud83d\udcac"),".",o.a.createElement("br",null)))}}]),t}(o.a.Component),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleOver=function(){a.setState({setColor:a.props.submitColor})},a.handleOut=function(){a.setState({setColor:a.state.exitColor})},a.handleClick=function(){alert("Message sent.")},a.state={setColor:"gray",enterColor:"#176614",exitColor:"gray"},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"text-overlay",id:"ContactFormRight"},o.a.createElement("form",{id:"cform"},o.a.createElement("p",{id:"ContactFormText"},"Name:"),o.a.createElement("input",{type:"text",name:"Name",className:"shortBox"}),o.a.createElement("br",null),o.a.createElement("p",{id:"ContactFormText"},"Subject:"),o.a.createElement("input",{type:"text",name:"Subject",className:"shortBox"}),o.a.createElement("br",null),o.a.createElement("p",{id:"ContactFormText"},"Message:"),o.a.createElement("textarea",{rows:"4",cols:"50",name:"Message",className:"messageBox"}),o.a.createElement("input",{type:"submit",value:"Submit",className:"submitBox",style:{color:this.state.setColor,borderColor:this.state.setColor},onMouseOver:function(){return e.handleOver()},onMouseOut:function(){return e.handleOut()},onClick:function(){return e.handleClick()}})))}}]),t}(o.a.Component),S=a(1),w=a.n(S),P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleClick=function(){a.props.toggleDescription(a.props.title,a.props.description,a.props.carouselPictures)},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.coverPicture,r=t.title,n=t.description,i=t.carouselPictures;t.textColor;return o.a.createElement("div",{id:"galleryImgContainer"},o.a.createElement("img",{src:a}),o.a.createElement("div",{class:"cardDescription",style:{border:"4px solid black"},onClick:function(){return e.handleClick({title:r},{description:n},{carouselPictures:i})}},o.a.createElement("p",{class:"cardText",style:{color:"black"}},r)))}}]),t}(o.a.Component);P.PropTypes={coverPicture:w.a.string.isRequired,title:w.a.string.isRequired,description:w.a.string.isRequired,carouselPictures:w.a.arrayOf(w.a.string).isRequired,textColor:w.a.string.isRequired};var T=P,A=a(19);g.b.add(A.a);var N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e,t,r){a.setState({title:e,description:t,images:r,inDescription:!a.state.inDescription})},a.handleOverExit=function(){a.setState({exitIcon:a.props.textColor})},a.handleOutExit=function(){a.setState({exitIcon:"black"})},a.handleExitClick=function(){a.setState({exitIcon:"black",inDescription:!a.state.inDescription})},a.state={exitIcon:"black",inDescription:!1,title:"N/A",description:"N/A",images:[]},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this;return e=this.state.inDescription?o.a.createElement("div",{className:"text-overlay descriptionBox",id:"gallery"},o.a.createElement(f.a,{icon:"times",size:"3x",color:this.state.exitIcon,style:{float:"right",marginTop:"9px",marginRight:"15px"},onMouseOver:function(){return t.handleOverExit()},onMouseOut:function(){return t.handleOutExit()},onClick:function(){return t.handleExitClick()}}),o.a.createElement("h1",null,this.state.title),o.a.createElement("p",null,this.state.description)):o.a.createElement("div",{className:"text-overlay",id:"gallery"},o.a.createElement("div",{id:"galleryRow"},o.a.createElement("div",{id:"galleryCol"},o.a.createElement(T,{coverPicture:"https://github.com/ehalekote/PortfolioSite/blob/master/src/images/Aeroponics.jpg?raw=true",title:"AUTOMATED AEROPONICS GROW SYSTEM",description:"An automated aeroponics plant growing system.",textColor:this.props.textColor,carouselPictures:"",toggleDescription:this.handleClick.bind(this)}),o.a.createElement(T,{coverPicture:"https://github.com/ehalekote/PortfolioSite/blob/master/src/images/SmartRock.jpg?raw=true",title:"SMART ROCK GEOLOGICAL RESEARCH PCB",description:"This device was designed to log valuable sediment flow data in rivers and streams. The setup consists of an injection molded high density plastic outer shell which resembles a rock. Inside the shell is a cavity for a custom 2 part PCB designed based off of the arduino micro computing platform. Notable features include a full inertial measurement unit, real time clock, and SD card writer to store data. Once a battery, PCB, and RFID chip are placed inside the airtight plastic shell, the device can be thrown into a river and collected at a later date (found via scanning the river for the RFID chip). The device utilizes a low power mode to sleep until it is woken up by motion, at which point it will begin logging motion/orientation data to the sd card.",textColor:this.props.textColor,carouselPictures:"",toggleDescription:this.handleClick.bind(this)}),o.a.createElement(T,{coverPicture:"https://github.com/ehalekote/PortfolioSite/blob/master/src/images/ComingSoon.jpg?raw=true",title:"COMING SOON!",description:"",textColor:this.props.textColor,carouselPictures:"",toggleDescription:this.handleClick.bind(this)})),o.a.createElement("div",{id:"galleryCol"},o.a.createElement(T,{coverPicture:"https://github.com/ehalekote/PortfolioSite/blob/master/src/images/SeaCow.jpg?raw=true",title:"SEA COW UNDERWATER ROBOT",description:"",textColor:this.props.textColor,carouselPictures:"",toggleDescription:this.handleClick.bind(this)}),o.a.createElement(T,{coverPicture:"https://github.com/ehalekote/PortfolioSite/blob/master/src/images/balur.jpg?raw=true",title:"BALUR COFFEE ESTATE WEBSITE",description:"",textColor:this.props.textColor,toggleDescription:this.handleClick.bind(this)})),o.a.createElement("div",{id:"galleryCol"},o.a.createElement(T,{coverPicture:"https://github.com/ehalekote/PortfolioSite/blob/master/src/images/Armada.jpg?raw=true",title:"ARMADA PROTOCOL WEBSITE",description:"",textColor:this.props.textColor,carouselPictures:"",toggleDescription:this.handleClick.bind(this)}),o.a.createElement(T,{coverPicture:"https://github.com/ehalekote/PortfolioSite/blob/master/src/images/Nara.jpg?raw=true",title:"NATIONAL AUTONOMOUS RELIEF & AID MOBILE APP",description:"",textColor:this.props.textColor,toggleDescription:this.handleClick.bind(this)})),o.a.createElement("div",{id:"galleryCol"},o.a.createElement(T,{coverPicture:"https://github.com/ehalekote/PortfolioSite/blob/master/src/images/TabbyTax.jpg?raw=true",title:"TABBY TAX FACEBOOK CHAT BOT",description:"",textColor:this.props.textColor,carouselPictures:"",toggleDescription:this.handleClick.bind(this)}),o.a.createElement(T,{coverPicture:"https://github.com/ehalekote/PortfolioSite/blob/master/src/images/ComingSoon.jpg?raw=true",title:"COMING SOON!",description:"",textColor:this.props.textColor,carouselPictures:"",toggleDescription:this.handleClick.bind(this)}),"r"))),o.a.createElement("div",null,e)}}]),t}(o.a.Component),M=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).highlightColorSetter=function(){for(var t="#",a=0;a<6;a++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];e.setState({highlightColor:t})},e.state={highlightColor:"#176614"},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(d.a,null,o.a.createElement("div",null,o.a.createElement(k,{submitColor:this.state.highlightColor}),o.a.createElement(m.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(E,{submitColor:e.state.highlightColor})}}),o.a.createElement(m.a,{path:"/portfolio",component:x}),o.a.createElement(m.a,{path:"/portfolio",render:function(t){return o.a.createElement(N,{textColor:e.state.highlightColor})}}),o.a.createElement(m.a,{path:"/contact",component:y}),o.a.createElement(m.a,{path:"/contact",render:function(t){return o.a.createElement(j,{submitColor:e.state.highlightColor})}}))),o.a.createElement(b,{colorGetter:this.highlightColorSetter.bind(this),backgroundColor:this.state.highlightColor}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.c9b4ad22.chunk.js.map