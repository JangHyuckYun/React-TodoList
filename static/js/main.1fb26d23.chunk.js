(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{31:function(n,t,e){},32:function(n,t,e){"use strict";e.r(t);var i,o,a,r,c,d,s,l,p=e(1),u=e(14),b=e.n(u),x=e(6),f=e(3),h=e(4),g=h.b.div(i||(i=Object(f.a)(["\n    ","\n"])),(function(n){n.avg;var t=n.textPercent;return Object(h.a)(o||(o=Object(f.a)(['\n      width:90%;\n      height:10%;\n      position: relative;\n      left:50%;\n      transform: translate(-50%, 0px);\n      display:flex;\n      align-items: center;\n\n      &:before {\n        content: "";\n        width: ',"%;\n        height: 3px;\n        position: absolute;\n        left: 0;\n        top:calc(50% + 18.6px);\n        transform: translateY(-50%);\n        background: #B0E6CF;\n        z-index: 99999;\n        transition: .2s;\n      }\n      \n      input {\n        width:100%;\n        height: 40px;\n        position: relative;\n        border:none;\n        border-bottom: 3px solid rgba(19,19,19, .5);\n        padding:0 37px 0px 0px;\n        font-weight: bold;\n        outline: none;\n\n        //box-shadow: 0 0 10px 10px rgba(94,194,151,.2);\n        //rgba(208,218,253,.5)\n      }\n\n      svg {\n        position: absolute;\n        font-size: 22px;\n        right: 0px;\n        top: 50%;\n        transform: translateY(-50%);\n        z-index: 5;\n        cursor: pointer;\n        \n        path {\n          transition: .3s;\n        }\n        \n        &:hover path {\n          color:#73BF9E;\n        }\n      }\n    "])),t)})),j=e(7),m=e(20),v=e(2),y={todoList:[],textMaxLength:0,viewType:"",addTodo:function(){},modifyTodo:function(){},deleteTodo:function(){},validation:function(){},changeStateTodo:function(){},modifyViewType:function(){},getTodoIdx:function(){}},O=Object(p.createContext)(y),w=function(n){var t=Object(p.useState)(JSON.parse(localStorage.getItem("todoList"))||[]),e=Object(x.a)(t,2),i=e[0],o=e[1],a=Object(p.useState)(JSON.parse(localStorage.getItem("viewType"))||"all"),r=Object(x.a)(a,2),c=r[0],d=r[1],s=function(n){return i.findIndex((function(t){return t.id===n}))},l=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"modify";if(Array.isArray(n))n.forEach((function(n){i[s(n)].isModifying=!i[s(n)].isModifying}));else{var e=i[s(n)];"modify"===t?e.isModifying=!e.isModifying:"select"===t&&(e.isSelected=!e.isSelected)}o(Object(j.a)(i))};return Object(m.a)((function(n){localStorage.setItem("todoList",JSON.stringify(i)),localStorage.setItem("viewType",JSON.stringify(c))})),Object(p.useEffect)((function(){document.querySelector("#root").addEventListener("click",(function(n){var t=n.target,e=i.filter((function(n){return n.isModifying}));"modifying"!==t.className&&0!==e.length&&(console.log("asfasf"),l(e.map((function(n){return n.id}))))}))}),[]),Object(v.jsx)(O.Provider,{value:{textMaxLength:30,todoList:i,viewType:c,addTodo:function(n){o([].concat(Object(j.a)(i),[n]))},modifyTodo:function(n){i[s(n.id)]=n,o(Object(j.a)(i))},deleteTodo:function(n){i.splice(s(n),1),o(Object(j.a)(i))},validation:function(n){return/^[a-zA-Z0-9\u3131-\u314e\uac00-\ud7a3!?"'\s]+$/g.test(n.content.trim())},changeStateTodo:l,modifyViewType:function(n){d(n)},getTodoIdx:s},children:n.children})},k=e(10),T=function(n){var t=n.className,e=Object(p.useContext)(O),i=e.todoList,o=e.textMaxLength,a=e.addTodo,r=e.validation,c=Object(p.useState)(0),d=Object(x.a)(c,2),s=d[0],l=d[1],u=Object(p.useRef)(null),b=Object(p.useMemo)((function(){return function(n){var t=n.length,e=n.filter((function(n){return n.isSelected})).length;return Math.ceil(e/t*100)||0}(i)}),[i]),f=function(){var n={id:(i[i.length-1]||{id:0,content:""}).id+1,content:u.current.value,isSelected:!1,isModifying:!1};r(n)?(a(n),u.current.value="",l(0)):console.log("error!!")};return Object(v.jsxs)(g,{className:t,avg:b,textPercent:s,children:[Object(v.jsx)("input",{ref:u,type:"text",onKeyPress:function(n){var t=n.key;n.target.value;"Enter"===t&&f()},onInput:function(n){var t=n.target.value,e=Math.ceil(t.length/o*100)||0;l(e=e>100?100:e),t.length>=o&&(u.current.value=t.slice(0,o))}}),Object(v.jsx)(k.b,{onClick:f})]})},S=h.b.div(a||(a=Object(f.a)(["\n  width: 100%;\n  height: 100%;\n  max-height: 700px;\n  overflow-y: auto;\n  position: relative;\n  padding: 0 39px;\n\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  .todo {\n    margin: 15px 0;\n    padding: 5px 0;\n    min-height: 41px;\n    height: auto;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    .text_box {\n      flex: 1;\n      min-height: 100%;\n      text-align: left;\n      padding: 0 10px;\n\n      input {\n        width: 100%;\n        height: 100%;\n        border-radius: 25px;\n        border: 1px solid black;\n        padding: 5px 0 5px 10px;\n\n        outline: none;\n      }\n\n      p.selected {\n        text-decoration: line-through;\n        font-weight: normal;\n        color: #cbcbcb;\n      }\n\n      p {\n        font-weight: bold;\n        white-space: break-spaces;\n        word-break: break-all;\n      }\n    }\n\n    .input_box {\n      input {\n        display: none;\n\n        & + label {\n          transition: .3s;\n        }\n\n        &:checked + label {\n          background: #B0E6CF;\n\n          path {\n            color: #FEFBFA;\n            transition: .3s;\n          }\n        }\n      }\n\n      label {\n        width: 31px;\n        height: 31px;\n        border-radius: 25px;\n        background: #E2E2E2;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: 2px 0 0 0;\n\n        path {\n          color: #afafaf;\n        }\n      }\n    }\n\n    .button_box {\n      button {\n        width: auto;\n        height: auto;\n\n        path {\n          transition: .3s;\n        }\n\n        &:hover path {\n          color: #ff5959;\n        }\n      }\n    }\n  }\n"]))),N=e(18),M=function(){var n=Object(p.useContext)(O),t=n.todoList,e=n.viewType,i=n.changeStateTodo,o=n.modifyTodo,a=n.deleteTodo,r=n.getTodoIdx;return Object(v.jsx)(S,{children:t.filter((function(n){return"all"===e||("activate"===e?!n.isSelected:n.isSelected)})).map((function(n,e){return Object(v.jsxs)("div",{className:"todo",children:[Object(v.jsxs)("div",{className:"input_box",children:[Object(v.jsx)("input",{id:"item_"+n.id,type:"checkbox",onChange:function(){return function(n){var e=t[r(n)];e.isSelected=!e.isSelected,o(e)}(n.id)},checked:n.isSelected}),Object(v.jsx)("label",{htmlFor:"item_"+n.id,children:Object(v.jsx)(k.a,{})})]}),Object(v.jsx)("div",{className:"text_box",onDoubleClick:function(t){return i(n.id)},children:n.isModifying?Object(v.jsx)("input",{type:"text",className:"modifying",defaultValue:n.content,"data-idx":e,onKeyPress:function(n){return function(n){var e=n.key,i=n.target,a=i.dataset,r=i.value;if("Enter"===e){var c=t[a.idx];c.content=r,c.isModifying=!c.isModifying,o(c)}}(n)}}):Object(v.jsx)("p",{className:n.isSelected?"selected":"",children:n.content})}),Object(v.jsx)("div",{className:"button_box",children:Object(v.jsx)("button",{onClick:function(t){return a(n.id)},children:Object(v.jsx)(N.a,{})})})]},n.id)}))})},C=(e.p,e.p+"static/media/road4.b47040e6.png"),_=h.b.div(r||(r=Object(f.a)(['\n    max-width: 800px;\n    width:100%;\n    height:100%;\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n\n    .top {\n      width:100%;\n      height:300px;\n\n      .title {\n        width: 100%;\n        height:100%;\n        position: relative;\n        display:flex;\n        border-radius: 9px;\n        overflow: hidden;\n        align-items:flex-start;\n        justify-content: space-between;\n        margin-bottom: 10px;\n        z-index: 5;\n        padding:0 60px;\n        \n        .left_box {\n          height: 37%;\n          display: flex;\n          align-items: flex-end;\n          padding-bottom: 10px;\n        }\n        \n        p.leftText {\n          color:#fff;\n          font-size:32px;\n          font-weight: bold;\n          letter-spacing: .5px;\n          display:block;\n          flex:6;\n        }\n\n        &:before {\n          content: "";\n          width:100%;\n          height:100%;\n          position:absolute;\n          left:0;\n          top:0;\n          background-image: url(',');\n          background-size: cover;\n          background-repeat: no-repeat;\n          background-position: 0 60%;\n\n          z-index: -5;\n        }\n\n        &:after {\n          content: "";\n          width:100%;\n          height:100%;\n          position: absolute;\n          left:0;\n          top:0;\n          background: rgb(59, 66, 60, .25);\n\n          z-index: -3;\n        }\n\n        * {\n          z-index: 2;\n        }\n      }\n    }\n  \n  .bottom{\n    width: 97%;\n    height: 100%;\n    position: relative;\n    left: 50%;\n    transform: translate(-50%, -170px);\n    //background: #fff7ed;\n    background: #fff;\n    border-radius: 60px 60px / 61px 61px;\n    box-shadow: 0px 0px 24px 2px rgb(0 0 0 / 30%);\n    padding: 25px 10px 5px 10px;\n    z-index: 5;\n    \n    &:before {\n      content:"";\n      width:100%;\n      height:150px;\n      position: absolute;\n      top: -10px;\n      left:0;\n      background: rgba(255,255,255, .4);\n      border-radius: 60px 60px / 61px 61px;\n      z-index: -90;\n    }\n\n    &:after {\n      content:"";\n      width:100%;\n      height:150px;\n      position: absolute;\n      top: -20px;\n      left:0;\n      background: rgba(255,255,255, .4);\n      border-radius: 60px 60px / 61px 61px;\n      z-index: -90;\n    }\n  }\n\n'])),C),z=h.b.div(c||(c=Object(f.a)(["\n  ","\n"])),(function(n){n.avg;return Object(h.a)(d||(d=Object(f.a)(['\n    flex:4;\n    height:37%;\n    display: flex;\n    align-items: flex-end;\n    justify-content: flex-end;\n    padding-bottom: 10px;\n\n    &:before {\n      //content: "";\n      //position:absolute;\n      //width: 40%;\n      //height: 100%;\n      //background: rgba(0,0,0, .25);\n      //right:0;\n      //top:0;\n    }\n\n    .chart_container {\n      display:flex;\n      justify-content:center;\n      align-content: center;\n      \n      p {\n        display: flex;\n        align-items: center;\n        \n        &, b {\n          color:white;\n        }\n        \n        b {\n          padding-right: 4px;\n        }\n      }\n      \n      svg {\n        width: 36px;\n        margin-right: 5px;\n      }\n    }\n    \n    .text_container {\n      position: relative;\n      height:50%;\n      display: flex;  \n      align-items: center;\n      justify-content: center;\n      \n      p {\n        padding: 0;\n        color:white;\n      }\n      \n      .line {\n        width: 1px;\n        height: 100%;\n        background: rgba(255, 255, 255, .6);\n        margin:0 10px;\n      }\n    }\n  '])))})),E=e(19),L=function(){var n=Object(p.useContext)(O).todoList,t=Object(p.useMemo)((function(){return function(n){var t=n.length,e=n.filter((function(n){return n.isSelected})).length;return Math.ceil(e/t*100)||0}(n)}),[n]);return Object(v.jsx)(z,{avg:t,children:Object(v.jsxs)("div",{className:"chart_container",children:[Object(v.jsx)(E.PieChart,{data:[{value:t,color:"#5ec297",name:"name1"}],reveal:t,lineWidth:20,background:"rgba(255,255,255,.85)",startAngle:-90,lengthAngle:360,rounded:!0,animate:!0}),Object(v.jsxs)("p",{children:[Object(v.jsxs)("b",{children:[t,"%"]})," done"]})]})})},I=h.b.div(s||(s=Object(f.a)(["\n    ","\n"])),(function(n){var t=n.viewType;return Object(h.a)(l||(l=Object(f.a)(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      \n      button {\n        transition: .3s;\n        margin:0 10px;\n      }\n      \n      button."," {\n        transform: scale(1.2);\n        font-weight: bold;\n      }\n    "])),t)})),A=function(){var n=Object(p.useContext)(O),t=(n.todoList,n.viewType),e=n.modifyViewType,i=function(n){var t=n.target.dataset;e(t.type)};return Object(v.jsx)(I,{viewType:t,children:[{name:"All",type:"all"},{name:"Activate",type:"activate"},{name:"Complete",type:"complete"}].map((function(n){return Object(v.jsx)("button",{className:n.type,onClick:i,"data-type":n.type,children:n.name},n.type)}))})},F=function(){return Object(v.jsx)(w,{children:Object(v.jsxs)(_,{children:[Object(v.jsx)("div",{className:"top",children:Object(v.jsxs)("div",{className:"title",children:[Object(v.jsx)("div",{className:"left_box",children:Object(v.jsx)("p",{className:"leftText",children:"TODO LIST"})}),Object(v.jsx)(L,{})]})}),Object(v.jsxs)("div",{className:"bottom",children:[Object(v.jsx)(T,{className:"input_container"}),Object(v.jsx)(A,{}),Object(v.jsx)(M,{})]})]})})};e(31);b.a.render(Object(v.jsx)(F,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.1fb26d23.chunk.js.map