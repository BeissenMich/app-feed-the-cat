(this["webpackJsonpmy-app-feed-the-cat"]=this["webpackJsonpmy-app-feed-the-cat"]||[]).push([[0],[,function(e,t,a){e.exports={item:"CatElement_item__2d5Bv",text:"CatElement_text__3R9us",contentItem:"CatElement_contentItem__31MEo",triangle:"CatElement_triangle__3IhKu",ball:"CatElement_ball__1B3ya",undergroundText:"CatElement_undergroundText__3r7Sp",textBall:"CatElement_textBall__3U3fQ",inBasket:"CatElement_inBasket__1OFJB",withoutFog:"CatElement_withoutFog__pSTEN",disabledElement:"CatElement_disabledElement__2BQr1",withFog:"CatElement_withFog__TZ75-",unHoverDefualt:"CatElement_unHoverDefualt__3MUNM",unHoverBasket:"CatElement_unHoverBasket__14_p0"}},,,,function(e,t,a){e.exports={item:"Page_item__3wlst"}},function(e,t,a){e.exports=a.p+"static/media/fon.98ed8004.jpg"},,,function(e,t,a){e.exports=a.p+"static/media/cat.8c1310d7.png"},,function(e,t,a){e.exports={item:"Content_item__1AH6L"}},,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(4),l=a.n(o),s=(a(19),a(20),a(21),a(5)),r=a.n(s),c=a(6),p=a.n(c),m=a(2),d=a(7),u=a(8),h=a(13),E=a(12),_=a(9),f=a.n(_),g=a(1),w=a.n(g),v=a(10),b=a.n(v),k=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={basket:!1,showUpdateRow:!1},e.pickElement=function(){e.state.basket?e.setState({basket:!1}):e.setState({basket:!0})},e.undergroundText=function(){return e.state.basket?i.a.createElement("p",null,e.props.description):e.props.presence?i.a.createElement("p",null,"\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c? \u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d,"," ",i.a.createElement("span",{onClick:e.pickElement},"\u043a\u0443\u043f\u0438")):i.a.createElement("p",null,e.props.disabledFood)},e.showHideUpdateRow=function(){e.state.showUpdateRow?e.setState({showUpdateRow:!1}):e.setState({showUpdateRow:!0})},e}return Object(u.a)(a,[{key:"render",value:function(){var e;return i.a.createElement("div",{onMouseLeave:this.props.presence?this.showHideUpdateRow:function(){},className:b()((e={},Object(m.a)(e,w.a.inBasket,this.state.basket),Object(m.a)(e,w.a.contentItem,!this.state.basket),Object(m.a)(e,w.a.disabledElement,!this.props.presence),Object(m.a)(e,w.a.unHoverDefualt,!0===this.state.showUpdateRow&&!1===this.state.basket),Object(m.a)(e,w.a.unHoverBasket,!0===this.state.showUpdateRow&&!0===this.state.basket),e))},i.a.createElement("div",{className:this.props.presence?w.a.withoutFog:w.a.withFog},i.a.createElement("div",{onClick:this.props.presence?this.pickElement:function(){},className:w.a.item},i.a.createElement("div",{className:w.a.triangle}),i.a.createElement("div",{className:w.a.text},i.a.createElement("p",null,"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e"),i.a.createElement("h3",null,"\u041d\u044f\u043c\u0443\u0448\u043a\u0430"),i.a.createElement("h4",null,this.props.filling),i.a.createElement("p",null,this.props.portion," \u043f\u043e\u0440\u0446\u0438\u0439"),i.a.createElement("p",null,this.props.gift)),i.a.createElement("img",{src:f.a,alt:""}),i.a.createElement("div",{className:w.a.containerForBall},i.a.createElement("div",{className:w.a.ball},i.a.createElement("div",{className:w.a.textBall},i.a.createElement("p",null,this.props.weight),i.a.createElement("p",null,"\u043a\u0433")))))),i.a.createElement("div",{className:w.a.undergroundText},this.undergroundText()))}}]),a}(i.a.Component),x=a(11),C=a.n(x),B=function(e){var t=e.catFoodData.map((function(e){return i.a.createElement(k,{filling:e.filling,id:e.id,portion:e.portion,gift:e.gift,weight:e.weight,description:e.description,disabledFood:e.disabledFood,presence:e.presence,key:e.id})}));return i.a.createElement("div",{className:C.a.item},t)},F=[{id:1,filling:"\u0441 \u0444\u0443\u0430-\u0433\u0440\u0430",portion:10,gift:"\u043c\u044b\u0448\u044c \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",weight:"0,5",description:"\u041f\u0435\u0447\u0435\u043d\u044c \u0443\u0442\u043a\u0438 \u0440\u0430\u0437\u0432\u0430\u0440\u043d\u0430\u044f \u0441 \u0430\u0440\u0442\u0438\u0448\u043e\u043a\u0430\u043c\u0438.",disabledFood:"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, \u0441 \u0444\u0443\u0430-\u0433\u0440\u0430 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f.",presence:!0},{id:2,filling:"\u0441 \u0440\u044b\u0431\u043e\u0439",portion:40,gift:"2 \u043c\u044b\u0448\u0438 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",weight:"2",description:"\u0413\u043e\u043b\u043e\u0432\u044b \u0449\u0443\u0447\u044c\u0438 \u0441 \u0447\u0435\u0441\u043d\u043e\u043a\u043e\u043c \u0434\u0430 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0430\u044f \u0441\u0451\u043c\u0433\u0443\u0448\u043a\u0430.",disabledFood:"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, \u0441 \u0440\u044b\u0431\u043e\u0439 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f.",presence:!0},{id:3,filling:"\u0441 \u043a\u0443\u0440\u043e\u0439",portion:100,gift:"10 \u043c\u044b\u0448\u0435\u0439 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",weight:"5",description:"\u0424\u0438\u043b\u0435 \u0438\u0437 \u0446\u044b\u043f\u043b\u044f\u0442 \u0441 \u0442\u0440\u044e\u0444\u0435\u043b\u044f\u043c\u0438 \u0432 \u0431\u0443\u043b\u044c\u043e\u043d\u0435.",disabledFood:"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, \u0441 \u043a\u0443\u0440\u043e\u0439 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f.",presence:!1}],N=function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043a\u043e\u0440\u043c\u0438\u043b \u043a\u043e\u0442\u0430?"),i.a.createElement("div",{className:r.a.item},i.a.createElement("img",{src:p.a,alt:""})),i.a.createElement(B,{catFoodData:F}))};var j=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.5e695c2f.chunk.js.map