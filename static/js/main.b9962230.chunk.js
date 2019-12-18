(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{161:function(e,t,n){e.exports=n(306)},182:function(e,t,n){},294:function(e,t,n){},295:function(e,t,n){},305:function(e,t,n){},306:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(20),l=n.n(r),i=n(33),c=n(311),s=function(e,t){var n="all"===t.label?e:e.filter((function(e){return e.label===t.label}));switch(t.status){case u.SHOW_ALL:return n;case u.SHOW_COMPLETED:return n.filter((function(e){return!0===e.isComplete}));case u.SHOW_ACTIVE:return n.filter((function(e){return!1===e.isComplete}));default:return n}},u={SHOW_ALL:"SHOW_ALL",SHOW_COMPLETED:"SHOW_COMPLETED",SHOW_ACTIVE:"SHOW_ACTIVE"},d=[{value:"general",color:"orange"},{value:"home",color:"blue"},{value:"bussines",color:"red"},{value:"personal",color:"purple"}],m=n(29),p=n(30),f=n(31),E=n(32),b=n(34),h=n(135),O=n.n(h),g=n(316),T=n(147),S=n(46),v=n(19),C=n.n(v),D=n(44),L=n.n(D),_=n(53),y=n.n(_),N=function(e,t,n){return{type:"ADD_TODO",content:e,label:t,date:n}},k=(n(182),function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(o)))).state={editContent:n.props.content,editLabel:n.props.label},n.onContentEditHandler=function(e){return n.setState({editContent:e.target.value})},n.onLabelEditHandler=function(e){return n.setState({editLabel:e.target.value})},n.OnSubmitHandler=function(e){e.preventDefault();var t=n.props.id,a=n.state.editContent,o=n.state.editLabel,r=(new Date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"});n.props.editTodoSubmit(t,a,o,r)},n.onDuplicateHandler=function(e){e.preventDefault();var t=n.props.content,a=n.props.label,o=(new Date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"});n.props.duplicateTodo(t,a,o)},n.getLabelColor=function(e){var t=d.findIndex((function(t){return t.value===e})),n=d[t].color;return console.log(n),n},n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.isComplete?"check circle green big":"check circle outline big ",n=""!==this.props.lastModifiedDate?"Last modified date: "+this.props.lastModifiedDate:"";return o.a.createElement(L.a,{bootom:!0},o.a.createElement(g.a,{tertiary:!0,className:"col-sm-7 yellow ",inverted:!0,padded:!0},o.a.createElement(T.a,{ribbon:!0,color:this.getLabelColor(this.props.label)},y.a.capitalize(this.props.label)),this.props.isEditing?o.a.createElement(O.a,null,o.a.createElement("form",{className:"form-inline mt-4",onSubmit:this.OnSubmitHandler},o.a.createElement("input",{className:"form-control",required:!0,autoFocus:!0,type:"text",value:this.state.editContent,onChange:this.onContentEditHandler}),o.a.createElement("select",{className:"form-control",value:this.state.editLabel,onChange:this.onLabelEditHandler},d.map((function(e){return o.a.createElement("option",{key:e.value,value:e.value},e.displayedValue)}))),o.a.createElement(S.a,{className:"check big green mx-2",onClick:this.OnSubmitHandler}))):o.a.createElement("div",{className:"mt-4"},o.a.createElement(S.a,{className:t,onClick:function(){return e.props.completeTodo(e.props.id)}}),o.a.createElement("div",{className:"d-inline",onClick:function(){return e.props.editTodo(e.props.id)},"data-tip":"Click to edit"},this.props.content),o.a.createElement(C.a,{place:"bottom",type:"light",effect:"solid",afterShow:function(){setTimeout(C.a.hide,8e3)}})),o.a.createElement("div",{className:"text-muted"},o.a.createElement("p",{className:"mt-3 mb-0"},"Create date: ",this.props.date),o.a.createElement("p",{className:"m-0"},n)),o.a.createElement("div",{className:" text-right"},o.a.createElement(S.a,{className:"x big red","data-tip":"Delete todo",onClick:function(){return e.props.deleteTodo(e.props.id)}}),o.a.createElement(C.a,{place:"bottom",type:"light",effect:"solid",afterShow:function(){setTimeout(C.a.hide,8e3)}}),o.a.createElement(S.a,{className:"copy big teal","data-tip":"Duplicate todo",onClick:this.onDuplicateHandler}),o.a.createElement(C.a,{place:"bottom",type:"light",effect:"solid",afterShow:function(){setTimeout(C.a.hide,8e3)}}))))}}]),t}(a.Component)),w=Object(i.b)((function(e){return{todos:e.todos}}),(function(e){return{deleteTodo:function(t){return e(function(e){return{type:"DELETE_TODO",id:e}}(t))},editTodo:function(t){return e(function(e){return{type:"EDIT_TODO",id:e}}(t))},completeTodo:function(t){return e(function(e){return{type:"COMPLETE_TODO",id:e}}(t))},editTodoSubmit:function(t,n,a,o){return e(function(e,t,n,a){return{type:"EDIT_TODO_SUBMIT",id:e,content:t,label:n,date:a}}(t,n,a,o))},duplicateTodo:function(t,n,a){return e(N(t,n,a))}}}))(k),A=(n(294),n(314)),H=Object(i.b)((function(e){return{todos:s(e.todos,e.filters)}}),(function(e){return{}}))((function(e){return o.a.createElement(c.a,null,0!==e.todos.length?e.todos.map((function(e,t){return o.a.createElement(w,{key:e.id,id:e.id,label:e.label,index:t,content:e.content,date:e.date,isEditing:e.isEditing,isComplete:e.isComplete,lastModifiedDate:e.lastModifiedDate})})):o.a.createElement(A.a,{className:"text-center col-sm-2",variant:"warning"},"No todos to display"))})),j=n(315),I=n(312),W=n(313),M=(n(295),function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(o)))).state={content:"",label:"general"},n.onChangeHandler=function(e){return n.setState({content:e.target.value})},n.onLabelChange=function(e){return n.setState({label:e.target.value})},n.onTodoSubmit=function(e){e.preventDefault();var t=n.state.content,a=n.state.label,o=(new Date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"});n.props.addTodo(t,a,o),n.setState({content:"",status:"all",label:"general"})},n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(a.Fragment,null,o.a.createElement(c.a,null,o.a.createElement(L.a,{top:!0},o.a.createElement(W.a,{onSubmit:this.onTodoSubmit},o.a.createElement(W.a.Control,{required:!0,autoFocus:!0,type:"text",value:this.state.content,onChange:this.onChangeHandler,placeholder:"What needs to be done?"}),o.a.createElement(W.a.Control,{as:"select",className:"form-control",value:this.state.label,onChange:this.onLabelChange},d.map((function(e){return o.a.createElement("option",{key:e.value,value:e.value},y.a.capitalize(e.value))}))),o.a.createElement(S.a,{className:"plus big blue mt-2",disabled:!this.state.content.trim(),onClick:this.onTodoSubmit,"data-tip":"Add new todo"}),o.a.createElement(C.a,{place:"bottom",type:"light",effect:"solid",afterShow:function(){setTimeout(C.a.hide,9e3)}})),o.a.createElement("button",{onClick:function(){return console.log(e.state)}},"state"),o.a.createElement("button",{onClick:function(){return console.log(e.props.todos)}},"todos"),o.a.createElement("button",{onClick:function(){return console.log(e.props.filters)}},"filters")),o.a.createElement(L.a,{top:!0},o.a.createElement(I.a,{className:"my-3"},o.a.createElement(j.a,{basic:this.props.filters.status!==u.SHOW_ALL,className:"tiny black",onClick:function(){return e.props.setStatusFilter(u.SHOW_ALL)}},"All"),o.a.createElement(j.a,{basic:this.props.filters.status!==u.SHOW_ACTIVE,className:"tiny red",onClick:function(){return e.props.setStatusFilter(u.SHOW_ACTIVE)}},"Active"),o.a.createElement(j.a,{basic:this.props.filters.status!==u.SHOW_COMPLETED,className:"tiny green",onClick:function(){return e.props.setStatusFilter(u.SHOW_COMPLETED)}},"Completed"),o.a.createElement(S.a,{className:"trash big grey",disabled:0===this.props.todos.length,onClick:function(){return e.props.deleteAllTodos()},"data-tip":"Delete all todos"}),o.a.createElement(C.a,{place:"bottom",type:"light",effect:"solid",afterShow:function(){setTimeout(C.a.hide,9e3)}})),o.a.createElement(I.a,{className:"mb-2"},o.a.createElement(j.a,{basic:"all"!==this.props.filters.label,onClick:function(){return e.props.setLabelFilter("all")},className:"mini black"},"All"),d.map((function(t){return o.a.createElement(j.a,{key:t.value,toggle:!0,basic:e.props.filters.label!==t.value,onClick:function(){return e.props.setLabelFilter(t.value)},className:t.color+" mini"},y.a.capitalize(t.value))}))))))}}]),t}(a.Component)),F=Object(i.b)((function(e){return{todos:e.todos,filters:e.filters}}),(function(e){return{addTodo:function(t,n,a){return e(N(t,n,a))},deleteAllTodos:function(){return e({type:"DELETE_ALL_TODOS"})},setStatusFilter:function(t){return e(function(e){return{type:"SET_STATUS_FILTERS",status:e}}(t))},setLabelFilter:function(t){return e(function(e){return{type:"SET_LABEL_FILTERS",label:e}}(t))}}}))(M),x=(n(303),n(304),n(305),function(){return o.a.createElement("div",{className:"App"},o.a.createElement(F,null),o.a.createElement(H,null))}),U=n(42),V=n(37),P=n(150),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{id:1,content:"22",label:"general",date:1,lastModifiedDate:1}],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(P.a)(e),[{id:t.date+t.content+t.label+e.length,content:t.content,label:t.label,date:t.date,lastModifiedDate:"",isComplete:!1,isEditing:!1}]);case"DELETE_TODO":return e.filter((function(e){return e.id!==t.id}));case"DELETE_ALL_TODOS":return[];case"EDIT_TODO":return e.map((function(e){return e.id===t.id?Object(V.a)({},e,{isEditing:!e.isEditing}):e}));case"COMPLETE_TODO":return e.map((function(e){return e.id===t.id?Object(V.a)({},e,{isComplete:!e.isComplete}):e}));case"EDIT_TODO_SUBMIT":return e.map((function(e){return e.id===t.id?Object(V.a)({},e,{content:t.content,label:t.label,lastModifiedDate:t.date,isEditing:!1}):e}));default:return e}},R={status:u.SHOW_ALL,label:"all"},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STATUS_FILTERS":return Object(V.a)({},e,{status:t.status});case"SET_LABEL_FILTERS":return Object(V.a)({},e,{label:t.label});default:return e}},X=Object(U.b)({todos:B,filters:J}),z=function(){var e=localStorage.getItem("state");return JSON.parse(e)}(),q=Object(U.c)(X,z,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());q.subscribe((function(){!function(e){var t=JSON.stringify(e);localStorage.setItem("state",t)}({todos:q.getState().todos})}));var $=q;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(i.a,{store:$},o.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[161,1,2]]]);
//# sourceMappingURL=main.b9962230.chunk.js.map