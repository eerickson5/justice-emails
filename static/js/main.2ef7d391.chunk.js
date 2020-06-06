(this["webpackJsonpjustice-emails"]=this["webpackJsonpjustice-emails"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(3),o=n.n(r),l=(n(13),n(4)),s=n(5),c=n(1),m=n(7),u=n(6),d=(n(14),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).generateEmail=function(){return"mailto:"+a.state.email+"?subject=End Police Killing&body="+a.generateEmailBody()},a.generateEmailBody=function(){var e="Dear "+a.state.politician+"\n\nMy name is "+a.state.name;return e+=" and I live in "+a.state.city+", "+a.state.state+".",e+="\nAs you well know, the deaths of George Floyd and Breonna Taylor have sparked outrage and rioting across the country.  Unequal treatment at the hands of local police has been an issue in the black community since this country was founded.",e+="\n\nThis must end now.  To end this cycle, I would like to demand the following eight policies be put in place for every police station within your jurisdiction.",e+="\n\n1 \u2013 Ban chokeholds and strangleholds.",e+="\n2 \u2013 Require officers to de-escalate situations through communications to prevent the need to use force.",e+="\n3 \u2013 Require officers to give a verbal warning in all situations before using deadly force and shooting.",e+="\n4 \u2013 Require officers to exhaust all other alternatives that use no or less lethal force before resorting to deadly force.",e+="\n5 \u2013 Expect and require officers to intervene in the use of excessive force by a fellow officer and report these incidents to a supervisor immediately.",e+="\n6 \u2013 Ban shooting at moving vehicles entirely.  This practice has been shown to be particularly ineffective and dangerous.",e+="\n7 \u2013 Establish a Force Continuum that only allows severe use of force to extreme situations, develop clear policy restrictions on the use of all policing tactics, and educate every officer on those policies.",e+="\n8 \u2013 Require officers to report every time they threaten, point a firearm at, or use force against citizens.",e+="\n\nThese policies are taken from Campaign Zero\u2019s #8CantWait project to decrease police killings.  More information can be found at https://8cantwait.org/.",e+="\n\nThank you for your time.\nSincerely,\n"+a.state.name,e=encodeURIComponent(e)},a.state={key:"AIzaSyA9utUmfmdUWML-N4RuMHBRt4nbi7Hohv4",name:"________",politician:"________",city:"________",state:"________",email:""},a.handleName=a.handleName.bind(Object(c.a)(a)),a.handleRep=a.handleRep.bind(Object(c.a)(a)),a.handleCity=a.handleCity.bind(Object(c.a)(a)),a.handleState=a.handleState.bind(Object(c.a)(a)),a.handleEmail=a.handleEmail.bind(Object(c.a)(a)),a}return Object(s.a)(n,[{key:"handleRep",value:function(e){this.setState({politician:e.target.value})}},{key:"handleName",value:function(e){this.setState({name:e.target.value})}},{key:"handleCity",value:function(e){this.setState({city:e.target.value})}},{key:"handleState",value:function(e){this.setState({state:e.target.value})}},{key:"handleEmail",value:function(e){this.setState({email:e.target.value})}},{key:"render",value:function(){return a.createElement("div",{className:"App"},a.createElement("header",{className:"App-header"},a.createElement("p",{style:{marginLeft:10,marginRight:10,fontWeight:"600",fontSize:25}},"SEND EMAILS TO YOUR LOCAL LAWMAKERS TO ",a.createElement("br",null)," DEMAND CHANGE TO THE POLICING SYSTEM:"),a.createElement("p",{style:{marginLeft:10,marginRight:10}},"Step 1: Find and copy the email of your local representative(s) from MyReps."),a.createElement("p",{style:{backgroundColor:"white",color:"blue",fontWeight:"700",fontSize:20,marginRight:20,marginLeft:20,borderRadius:20,padding:15}},a.createElement("a",{href:"//myreps.datamade.us/"},"Find Your Representatives")),a.createElement("p",{style:{marginLeft:10,marginRight:10}},"Step 2: Fill in the blanks to automatically generate an email."),a.createElement("form",null,a.createElement("label",{style:{margin:10}},"Your Name:",a.createElement("input",{style:{borderRadius:5,margin:5,fontSize:20},type:"text",name:"name",onChange:this.handleName})),a.createElement("label",{style:{margin:10}},"City:",a.createElement("input",{style:{borderRadius:5,margin:5,fontSize:20},type:"text",name:"city",onChange:this.handleCity})),a.createElement("label",{style:{margin:10}},"State:",a.createElement("input",{style:{borderRadius:5,margin:5,fontSize:20},type:"text",name:"state",onChange:this.handleState}))),a.createElement("form",null,a.createElement("label",{style:{margin:10}},"Representative:",a.createElement("input",{style:{borderRadius:5,margin:5,fontSize:20},type:"text",name:"rep",onChange:this.handleRep})),a.createElement("label",{style:{margin:10}},"Representative Email:",a.createElement("input",{style:{borderRadius:5,margin:5,fontSize:20},type:"text",name:"email",onChange:this.handleEmail}))),a.createElement("p",{style:{marginLeft:10,marginRight:10}},"Step 3: Send the preloaded email.  If it doesn't load after a few moments, just copy and paste the below message."),a.createElement("p",{style:{backgroundColor:"white",color:"black",fontWeight:"800",fontSize:20,marginRight:20,marginLeft:20,borderRadius:20,padding:15}},a.createElement("a",{href:this.generateEmail()},"Send Preloaded Email")),a.createElement("p",{style:{backgroundColor:"#d9d9d9",color:"black",marginRight:25,marginTop:20,fontSize:15,marginLeft:25,borderRadius:10,padding:15,textAlign:"start"}},"Dear ",this.state.politician,",",a.createElement("br",null),a.createElement("br",null),"My name is ",this.state.name," and I live in ",this.state.city,", ",this.state.state,".  As you well know, the deaths of George Floyd and Breonna Taylor have sparked outrage and rioting across the country.  Unequal treatment at the hands of local police has been an issue in the black community since this country was founded.",a.createElement("br",null),a.createElement("br",null),"This must end now.  To end this cycle, I would like to demand the following eight policies be put in place for every police station within your jurisdiction.",a.createElement("br",null),a.createElement("br",null),"1 \u2013 Ban chokeholds and strangleholds.",a.createElement("br",null),"2 \u2013 Require officers to de-escalate situations through communications to prevent the need to use force.",a.createElement("br",null),"3 \u2013 Require officers to give a verbal warning in all situations before using deadly force and shooting.",a.createElement("br",null),"4 \u2013 Require officers to exhaust all other alternatives that use no or less lethal force before resorting to deadly force.",a.createElement("br",null),"5 \u2013 Expect and require officers to intervene in the use of excessive force by a fellow officer and report these incidents to a supervisor immediately.",a.createElement("br",null),"6 \u2013 Ban shooting at moving vehicles entirely.  This practice has been shown to be particularly ineffective and dangerous.",a.createElement("br",null),"7 \u2013 Establish a Force Continuum that only allows severe use of force to extreme situations, develop clear policy restrictions on the use of all policing tactics, and educate every officer on those policies.",a.createElement("br",null),"8 \u2013 Require officers to report every time they threaten, point a firearm at, or use force against citizens.",a.createElement("br",null),a.createElement("br",null),"These policies are taken from Campaign Zero\u2019s #8CantWait project to decrease police killings.  More information can be found at ",a.createElement("a",{href:"https://8cantwait.org/"},"8cantwait.org"),".",a.createElement("br",null),a.createElement("br",null),"Thank you for your time.",a.createElement("br",null),"Sincerely,",a.createElement("br",null),this.state.name)))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.2ef7d391.chunk.js.map