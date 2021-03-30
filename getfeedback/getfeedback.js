!(function(h,j){"use strict";var k={"en":{mt:"Thanks for your feedback!",mt2:"OPTIONAL",ft:"What areas could be improved?",fts:"Send",fto:"(Optional)",q:["Was this webpage helpful?","Did you find what you were looking for?","Would you recommend us to others?"]},"fr":{mt:"Merci pour vos commentaires!",mt2:"OPTIONNEL",ft:"Quels domaines pourraient être améliorés?",fts:"Envoyer",fto:"(Optionnel)",q:["Cette page Web vous a-t-elle été utile?","As-tu trouvé ce que tu cherchais?","Nous recommanderiez-vous à d'autres?"]},"es":{mt:"¡Gracias por tus comentarios!",mt2:"OPCIONAL",ft:"¿Qué áreas podrían mejorarse?",fts:"Enviar",fto:"(Opcional)",q:["¿Le resultó útil esta página web?","¿Encontraste lo que buscabas?","Nos recomendaría a otros?"]},"de":{mt:"Vielen Dank für Ihr Feedback!",mt2:"OPTIONAL",ft:"Welche Bereiche könnten verbessert werden?",fts:"Senden",fto:"(Optional)",q:["War diese Webseite hilfreich?","Hast du gefunden, wonach du gesucht hast?","Würden Sie uns weiterempfehlen?"]},"ja":{mt:"ご意見ありがとうございます！",mt2:"オプション",ft:"どの領域を改善できますか？",fts:"送信",fto:"（オプション）",q:["このウェブページは役に立ちましたか？","探してるものを見つけましたか？","他の人に私たちをお勧めしますか？"]},"nl":{mt:"Bedankt voor je feedback!",mt2:"OPTIONEEL",ft:"Welke gebieden kunnen worden verbeterd?",fts:"Sturen",fto:"(Optioneel)",q:["Was deze webpagina nuttig?","Heeft u gevonden waar u naar op zoek was?","Zou je ons aanbevelen aan anderen?"]},"da":{mt:"Tak for din tilbagemelding!",mt2:"VALGFRI",ft:"Hvilke områder kunne forbedres?",fts:"Sende",fto:"(Valgfri)",q:["Var denne webside nyttig?","fandt du hvad du ledte efter?","Vil du anbefale os til andre?"]},"pt":{mt:"Obrigado pelo seu feedback!",mt2:"OPCIONAL",ft:"Que áreas podem ser melhoradas?",fts:"Mandar",fto:"(Opcional)",q:["Esta página da web foi útil?","Encontrou o que procurava?","Você nos recomendaria para outras pessoas?"]},"zh":{mt:"感謝您的反饋意見！",mt2:"可選",ft:"有哪些地方可以改進？",fts:"發送",fto:"（可選）",q:["這個網頁有幫助嗎？","你是否找到你要找的東西？","您會向其他人推薦我們嗎？"]},"zh-CN":{mt:"感谢您的反馈！",mt2:"可选",ft:"有哪些地方可以改进？",fts:"发送",fto:"（可选）",q:["这个网页有帮助吗？","你是否找到你要找的东西？","您会向其他人推荐我们吗？"]}};var l=function(s,a){return(a||j).querySelector(s)};var m=function(n,a,b,d){n=j.createElement(n||"div");if(a){for(var i in a){if(i=="c")n.className=a.c;else n.style[i]=a[i]}}if(b&&b.forEach){b.forEach(function(c){n.appendChild(c)})}else if(b){n.textContent=b}if(d)for(var i in d)n[i]=d[i];return n};var o=function(n,a){return n.appendChild(a)};var p=function(n){return n.style.display};var q=function(n,s){n.style.display=s};var r=function(a,b){var c=location.pathname.match(/\/?([^\/\?#]+)/);var d=[];for(var i=0;i<6;i++){if(a[i]!=9){d.push((i+1)+""+a[i])}}d="https://us-central1-shpfy-f3e56.cloudfunctions.net/submitScore1?shop="+location.hostname+"&p="+encodeURIComponent(c?c[1]:"")+"&s="+d.join("")+"&f="+encodeURIComponent(a[6]||"");var e;if(window.XDomainRequest){e=new XDomainRequest();e.open("get",d);e.onprogress=function(){};e.onerror=b;e.onload=b;setTimeout(function(){e.send()},0)}else if(window.XMLHttpRequest){e=new XMLHttpRequest();e.open("get",d,true);e.onerror=b;e.onreadystatechange=function(){if(e.readyState==4)b()};e.send("")}e.ontimeout=b};var t=j.currentScript.src;t=t.substr(t.indexOf("?")+1||t.length);var u=(/\b(\d+)s\b/.exec(t)||[])[1]*1000;var v=/\bhp\b/.test(t);var w=/\baf\b/.test(t);var x=[9,9,9,9,9,9];var y=function(){var a=m(null,{c:"getfeedbackapp font"});var b=[m(null,{c:"thanks"},[m("span",{c:"tick"},"\u2713"),m("span",null,k.mt)])];if(k.q.length>1){b.push(m(null,{c:"div"},k.mt2));var c=[];for(var i=1;i<k.q.length;i++){if(i>=6)break;c.push(m("tr",null,[m("td",null,k.q[i]),m("td",null,[m("button",{c:"like up"},"\uD83D\uDC4D",{type:"button",onclick:B(i,1,a)}),m("button",{c:"like dn"},"\uD83D\uDC4E",{type:"button",onclick:B(i,0,a)})])]))}b.push(m("table",{c:"quest"},c))}b.push(m(null,{c:"free1"},k.ft));b.push(m("table",null,[m("tr",null,[m("td",{c:"free2"},[m("input",null,null,{type:"text",maxLength:200,placeholder:k.fto,onkeyup:D})]),m("td",{c:"free2"},[m("button",{c:"send",display:"none"},k.fts,{type:"button",onclick:C(a)})],{width:"1"})])]));o(a,m(null,{c:"ask"},[m(null,null,k.q[0]),m(null,{c:"ask1"},[m("button",{c:"like up"},"\uD83D\uDC4D",{type:"button",tabIndex:-1,onclick:B(0,1,a)}),m("button",{c:"like dn"},"\uD83D\uDC4E",{type:"button",tabIndex:-1,onclick:B(0,0,a)})])]));o(a,m(null,{c:"more"},b));o(a,m(null,{c:"end"},[m(null,{c:"thanks"},[m("span",{c:"tick"},"\u2713"),m("span",null,k.mt)])]));z(0,a);return a};var z=function(i,n){var a=l(".ask",n),more=l(".more",n),end=l(".end",n);if(i==0){q(more,"none");q(end,"none")}else if(i==1){setTimeout(function(){q(a,"none");q(more,"")},1000)}else if(i==2){setTimeout(function(){q(a,"none");q(more,"none");q(end,"");if(E)setTimeout(function(){q(E,"none")},2000)},1000)}};var A=function(){if(p(E)!="none"){q(E,"none");q(mini,"block");localStorage["getfeedbackappmini"]="on"}else{q(E,"block");q(mini,"none");delete localStorage["getfeedbackappmini"]}};var B=function(a,b,c){return function(){let n=this;n.disabled=true;if(x[a]==9){n.className+=" loading";if(a==0){x[a]=b;z(1,c);r(x,function(){n.className=n.className.replace(" loading"," done")})}else{x[a]=b;r(x,function(){n.className=n.className.replace(" loading"," done")})}}}};var C=function(a){return function(){var n=this;n.disabled=true;n.className+=" loading";x[6]=l("input",n.parentNode.parentNode).value;r(x,function(e){n.disabled=false;n.className=n.className.replace(" loading"," done")});z(2,a)}};var D=function(e){var n=l("button",this.parentNode.parentNode);if(e&&e.keyCode==13){n.click()}else{q(n,"")}};var E,mini;var F=function(){o(j.head,m("style")).textContent=["#=mini{position:fixed;bottom:0;left:0;display:none}","#=mini .like{box-shadow:1px 1px 5px rgba(0,0,0,0.2)}","#=mini .like,div.= .like{border:1px solid #bbb;color:#444;background:transparent;border-radius:10px;padding:5px 8px;margin:4px;font:normal 13pt arial;cursor:pointer}","#=mini .like:hover,div.= .like:hover{background:#ddd}","#=mini .like:active,div.= .like:active{background:#bbb}","#={position:fixed;bottom:3%;left:0;width:100%;text-align:center;z-index:2147483647}","#=>.={padding:0 15px;box-shadow:2px 2px 15px rgba(0,0,0,0.3);border:1px solid #ddd;border-radius:15px;font-family:Helvetica,Arial}","#=>.x{display:inline-block;vertical-align:top;margin-left:-15px;margin-top:-5px;background:#faa;border:1px solid #f99;border-radius:10px;padding:2px 5px;font:bold 11pt Arial;cursor:pointer}","#=>.x:hover{background:#f66}","#=>.x:active{background:#666}",".= .font{color:#000;font-size:11pt}",".= .space{margin:3px}",".=>*,.= .more,.= .end,#=mini{animation:=grow 0.3s ease-out}","div.={display:inline-block;text-align:left;background:rgba(255,255,255,0.9);color:#000}",".= .ask{margin-top:8px;text-align:center}",".= .ask .like{margin:8px 10px}",".= .thanks{margin:2em 0;text-align:center}",".= .div{margin:3px 0;text-align:center;font-size:8pt;border-top:1px dashed #ccc;color:#999;padding-top:8px}",".= .tick{display:inline-block;background:#afa;border:1px solid #0a0;color:#0a0;border-radius:1em;padding:1px 5px;margin:0 0.5em;font:bold 11pt Arial}",".= table,.= tr,.= td{border:0;margin:0;padding:0;table-layout:auto;border-collapse:collapse;background:transparent;font:inherit;text-align:left;vertical-align:middle}",".= td::before,.= td::after{display:none!important}",".= .quest td:last-child{text-align:right;padding-left:1em}",".= .quest td{padding:3px 0}",".= .free1{margin-top:9px}",".= .free2{padding: 3px 0 12px 0}",".= .free2 input{width:100%;padding:2px 2px 2px 10px;font:inherit;border-radius:8px}",".= .send{border:1px solid #bbb;color:#000;background:#eee;border-radius:10px;padding:2px 6px;margin:4px;font-size:13pt;word-break:keep-all;cursor:pointer}",".= .send:hover{background:#ccc} .= .send:active{background:#aaa}",".= .thanks+.free1{margin-top:0;text-align:center;color:#888}",".= .loading{animation:=loading 1.2s 0s ease-in-out infinite}","div.= .done,div.= .done:hover{background:#aea}","@keyframes =grow{0%{transform:scale(0.8)}}","@keyframes =loading{0%{opacity:0.7}50%{opacity:0.2}100%{opacity:0.7}}"].join("").replace(/=/g,"getfeedbackapp");var a=l("script.getfeedbackapp");var b={};try{if(a)b=JSON.parse(a.textContent)}catch(e){console.log(e)}var c=h.navigator.language;k=k[c]||k[c.split("-")[0]]||k.en;if(b.text)k.q=b.text;var d=localStorage["getfeedbackappmini"];if(w||v||u||!a){E=l("#getfeedbackapp");if(!E){E=m(null,null,[y(),m("button",{c:"x"},"\xD7",{tabIndex:-1,onclick:A})],{id:"getfeedbackapp"});o(j.body,E)}mini=l("getfeedbackappmini");if(!mini){mini=m(null,{c:"mini"},[m("button",{c:"like"},"\uD83D\uDC4D",{tabIndex:-1,onclick:A})],{id:"getfeedbackappmini"});o(j.body,mini)}if(d)A()}if(u&&E&&!d){q(E,"none");setTimeout(function(){q(E,"")},u)}if(v&&E&&!d){var f;var g=function(){clearTimeout(f);f=setTimeout(function(){var n=document.body&&document.body.clientHeight;n=n>0?document.body:document.documentElement;if(n.scrollTop+n.clientHeight>n.scrollHeight*2/3){q(E,"");window.removeEventListener("scroll",g,false)}},500)};window.addEventListener("scroll",g,false);q(E,"none");g()}if(b.inline)a.parentNode.insertBefore(y(),a)};if(j.readyState==="loading"){j.addEventListener("DOMContentLoaded",F,false)}else{F()}})(this,document);
