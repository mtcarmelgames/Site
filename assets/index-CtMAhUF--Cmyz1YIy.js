const M=(n,e)=>{for(;n&&n.nodeType===1;){if(n.hasAttribute(e))return n;n=n.parentNode}return null},y=n=>{const e=M(n,"data-blok-c");if(!e)return null;const t=e.getAttribute("data-blok-c");return JSON.parse(t)},A=(n,e)=>n.contains(e),l=n=>document.querySelector(`[data-blok-uid="${n}"]`),g=n=>{const e=n.getBoundingClientRect();return e.top<0&&e.top+e.height>=0||e.top>=0&&e.top<=(window.innerHeight||document.documentElement.clientHeight)},I=n=>{let e={};try{const t=n.replace(/\\/g,"");e=JSON.parse(t)}catch{console.error("Error parsing json",n)}return e},N=n=>{const e=[],t=()=>NodeFilter.FILTER_ACCEPT,o=document.createNodeIterator(n,NodeFilter.SHOW_COMMENT,t,!1);let i={};for(;i=o.nextNode();)if(i.nodeValue.indexOf("#storyblok#")>-1){const r=i.nodeValue.replace("#storyblok#",""),u=i.nextElementSibling||i.nextSibling,d=I(r);d&&e.push({options:d,el:u})}return e},E=n=>{let e="";return location.search.substr(1).split("&").forEach(t=>{const o=t.split("=");o[0]===n&&(e=decodeURIComponent(o[1]))}),e},x=(n,e,t)=>typeof n!="string"?"":n.toString().replace(/([A-Z])/g," $1").trim().toLowerCase().replace(/[_-]/g," ").replace(/(?:^|\s)\S/g,function(o,i){return o.toUpperCase()}),f=n=>n&&n.display_name?n.display_name:x(n.name),k=n=>{const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("viewBox",n.viewBox),e.setAttribute("class",n.svgClass);const t=document.createElementNS(e.namespaceURI,"path");return t.setAttribute("d",n.path),t.setAttribute("fill",n.pathFill),t.setAttribute("transform",n.pathTransform?n.pathTransform:"translate(0 0)"),e.appendChild(t),e},O=n=>n,C=O,v=C`
  @keyframes smoke {
    from {
      background-color: rgba(89, 197, 198, 0);
    }
    to {
      background-color: rgba(89, 197, 198, 0.5);
    }
  }

  .storyblok--outlined .storyblok__outline,
  .storyblok--outlined [data-blok-c] {
    outline: 1px dashed rgba(182, 186, 191, 0.5);
  }

  .storyblok--outlined .storyblok__outline[data-blok-focused='true'],
  .storyblok--outlined [data-blok-c][data-blok-focused='true'] {
    outline: 0;
  }

  .storyblok__hint {
    box-sizing: border-box;
    outline: 1px solid #05807f;
    pointer-events: none;
    position: absolute;
    transition: opacity 0.2s ease;
    z-index: 16777272;
  }

  .storyblok__highlight {
    background: rgba(89, 197, 198, 0.2);
    outline: 1px solid #05807f;
    pointer-events: none;
    position: absolute;
    transition: opacity 0.2s ease;
    z-index: 16777270;
  }

  .storyblok__overlay {
    box-shadow: 0 0 8px 2px rgba(34, 42, 69, 0.07);
    box-sizing: border-box;
    outline: 1px solid #05807f;
    pointer-events: none;
    position: absolute;
    z-index: 16777273;
  }

  .storyblok__overlay-menu {
    background-color: #05807f;
    border-radius: 5px;
    display: inline-flex;
    font-family:
      -apple-system, blinkmacsystemfont, 'Segoe UI', roboto, helvetica, arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    height: 30px;
    left: -1px;
    pointer-events: auto;
    position: absolute;
    top: -40px;
  }

  .storyblok__overlay-menu--simple .storyblok__overlay-menu-btn {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }

  .storyblok__overlay-menu-label {
    color: #fff;
    font-size: 14px;
    line-height: 30px;
    margin-right: 20px;
    max-width: 200px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .storyblok__overlay-menu-label:first-child {
    margin-left: 20px;
  }

  .storyblok__overlay-menu-btn {
    align-items: center;
    background-color: transparent;
    border: 0;
    display: flex;
    justify-content: center;
    outline: none;
    padding: 0;
  }

  .storyblok__overlay-menu-btn:hover {
    background-color: #0d5454;
  }

  .storyblok__overlay-menu-btn-action {
    border-bottom-right-radius: 5px;
    border-left: 1px solid #fff;
    border-top-right-radius: 5px;
    height: inherit;
    margin: auto;
    margin-right: 0;
  }

  .storyblok__overlay-menu-btn-parent {
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    cursor: pointer;
    margin: 0;
    width: auto;
  }

  .storyblok__overlay-menu-svg {
    box-sizing: border-box;
    cursor: pointer;
    height: 24px;
    margin: 0 3px;
    width: 24px;
  }

  .storyblok__overlay--bottom .storyblok__overlay-menu {
    bottom: -40px;
    top: auto;
  }

  .storyblok__overlay--clicked {
    animation-duration: 0.2s;
    animation-iteration-count: 1;
    animation-name: smoke;
  }

  .storyblok__actions-menu,
  .storyblok__breadcrumbs-menu {
    background-color: #fff;
    border: 1px solid #dfe3e8;
    border-radius: 5px;
    box-shadow: 0 2px 17px 3px rgba(34, 42, 69, 0.07);
    box-sizing: content-box;
    display: none;
    height: fit-content;
    min-width: 156px;
    overflow: hidden;
    padding: 11px 0;
    position: absolute;
    top: 25px;
    z-index: 2;
  }

  .storyblok__actions-menu hr,
  .storyblok__breadcrumbs-menu hr {
    background-color: #dfe3e8;
    border: 0;
    height: 1px;
    margin: 11px 0 11px 20px;
  }

  .storyblok__actions-menu__menu-item,
  .storyblok__breadcrumbs-menu__menu-item {
    align-items: center;
    appearance: none;
    background: #fff;
    border: 0;
    color: #1b243f;
    cursor: pointer;
    display: flex;
    font-family:
      -apple-system, blinkmacsystemfont, 'Segoe UI', roboto, helvetica, arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 14px;
    padding: 8px 20px;
    text-align: left;
    width: 100%;
  }

  .storyblok__actions-menu__menu-item--delete,
  .storyblok__breadcrumbs-menu__menu-item--delete {
    color: #c11c14;
    margin-bottom: 0;
  }

  .storyblok__actions-menu__menu-item--selected,
  .storyblok__breadcrumbs-menu__menu-item--selected {
    color: #05807f;
    cursor: default;
    margin-bottom: 0;
  }

  .storyblok__actions-menu__menu-item--selected:hover,
  .storyblok__breadcrumbs-menu__menu-item--selected:hover {
    background: transparent;
  }

  .storyblok__actions-menu__menu-item:hover,
  .storyblok__breadcrumbs-menu__menu-item:hover {
    background: #eff1f3;
  }

  .storyblok__actions-menu__menu-item:focus,
  .storyblok__breadcrumbs-menu__menu-item:focus {
    outline: none;
  }

  .storyblok__actions-menu {
    left: calc(100% - 20px);
  }

  .storyblok__breadcrumbs-menu {
    left: -10px;
  }
`,s={OUTLINE:"storyblok--outlined",STYLESHEET:"storyblok-bridge-stylesheet",HINT:"storyblok__hint",HIGHLIGHTER:"storyblok__highlight",OVERLAY:"storyblok__overlay",COMPONENT_BASE:"storyblok__overlay-menu",ACTIONS_MENU:"storyblok__actions-menu",BREADCRUMBS_MENU:"storyblok__breadcrumbs-menu"};class w{constructor(e){this.appVersion="v1",this.inEditor=!0,this.initialized=!1,this.currentUid=null,this.storyId="",this.componentNames={},this.outlineOnMoveInterval=null,this.calcInterval=null,this.canAddBlocks=!1,this.canMoveForward=!1,this.canMoveBackward=!1,this.canDeleteBlocks=!1,this.navigationBreadcrumbs=[],this.focusState=!1,this.actionsEnabled=!1,this.hinter=null,this.highlighter=null,this.overlay=null,this.componentBase=null,this.componentLabel=null,this.breadcrumbsButtonMenu=null,this.breadcrumbsMenu=null,this.actionsMenu=null,this.actionsMenuButton=null,this.actionsMenuItems=null,this.events={input:[],change:[],published:[],unpublished:[],viewLiveVersion:[],enterEditmode:[],enterComponent:[],hoverComponent:[],highlightComponent:[],customEvent:[],pingBack:[],sessionReceived:[],editedBlok:[],deselectBlok:[],addedBlock:[],deletedBlock:[],movedBlock:[],duplicatedBlock:[]};const t={customParent:null,resolveRelations:null,resolveLinks:null,preventClicks:!1,initOnlyOnce:!0,fallbackLang:null};this.config={...t,...e},this.init()}get isInIframe(){return window.top!==window.self}get csProtocol(){let e=location.protocol.replace(":","");return e!=="http"&&e!=="https"&&(e="https"),e}get targetOrigin(){return this.config.customParent?this.config.customParent:E("_storyblok_env")==="stage"?`${this.csProtocol}://app-beta.storyblok.com`:`${this.csProtocol}://app.storyblok.com`}get lastBreadcrumbItem(){return this.navigationBreadcrumbs[this.navigationBreadcrumbs.length-1]||{}}isInEditor(){return this.inEditor}init(){if(document.body===null){console.error("Body tag not found. Please install the Storyblok bridge script inside the body tag");return}this.config.initOnlyOnce&&document.querySelectorAll(`.${s.HINT}`).length>0||this.isInIframe&&(this.resetAllEvents(),this.addMessageListener(),this.outlineOnMove(),this.buildBridgeStyles(),this.on("enterEditmode",this.enterEditmode),this.isInIframe&&this.sendDataToEditor({action:"initialized",config:this.config}),this.initialized=!0)}keyPress(e,t){(t.key==="z"&&t.metaKey||t.key==="z"&&t.ctrlKey)&&(t.preventDefault(),t.stopImmediatePropagation(),e.sendDataToEditor({action:"undo"})),(t.key==="y"&&t.metaKey||t.key==="y"&&t.ctrlKey)&&(t.preventDefault(),t.stopImmediatePropagation(),e.sendDataToEditor({action:"redo"}))}sendDataToEditor(e){window.parent.postMessage(e,this.targetOrigin)}buildBridgeStyles(){document.getElementById(s.STYLESHEET)?(this.hinter=document.querySelector(`.${s.HINT}`),this.highlighter=document.querySelector(`.${s.HIGHLIGHTER}`),this.overlay=document.querySelector(`.${s.OVERLAY}`),this.componentBase=document.querySelector(`.${s.COMPONENT_BASE}`),this.breadcrumbsButtonMenu=document.querySelector(`.${s.COMPONENT_BASE}-btn-parent`),this.breadcrumbsMenu=document.querySelector(`.${s.BREADCRUMBS_MENU}`),this.actionsMenuButton=document.querySelector(`.${s.COMPONENT_BASE}-btn-action`),this.actionsMenu=document.querySelector(`.${s.ACTIONS_MENU}`),this.componentLabel=document.querySelector(`.${s.COMPONENT_BASE} > .${s.COMPONENT_BASE}-label`),this.createActionsMenuItems()):(this.createBridgeStylesheet(),this.createHinter(),this.createHighlighter(),this.createOverlay(),this.createComponentContext())}createBridgeStylesheet(){const e=document.createElement("style");e.setAttribute("type","text/css"),e.id=s.STYLESHEET,"textContent"in e?e.textContent=v:e.styleSheet.cssText=v,document.getElementsByTagName("head")[0].appendChild(e)}createHinter(){this.hinter=document.createElement("div"),this.hinter.className=s.HINT,this.hideElement(this.hinter),document.body.appendChild(this.hinter)}createHighlighter(){this.highlighter=document.createElement("div"),this.highlighter.style.opacity=0,this.hideElement(this.highlighter),document.body.appendChild(this.highlighter)}createOverlay(){this.overlay=document.createElement("div"),this.overlay.setAttribute("class",s.OVERLAY),this.overlay.setAttribute("id",s.OVERLAY),this.hideElement(this.overlay),document.body.appendChild(this.overlay)}calculateElementPosition(e,t){if(!t){this.hideElement(e);return}const o=l(t);if(o){const{left:i,top:r}=this.getElementOffset(o);r<=30?this.overlay.classList.add(`${s.OVERLAY}--bottom`):this.overlay.classList.remove(`${s.OVERLAY}--bottom`),e.style.top=`${r}px`,e.style.left=`${i}px`,e.style.width=`${o.offsetWidth}px`,e.style.height=`${o.offsetHeight}px`,e.style.minHeight="5px"}else this.hideElement(e)}getElementOffset(e){const t=e.getBoundingClientRect(),o=window.pageXOffset||document.documentElement.scrollLeft,i=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+i,left:t.left+o}}resetAllEvents(){for(const e in this.events)this.events[e]=[]}addMessageListener(){window.addEventListener&&addEventListener("message",this.receiveMessageFromApp.bind(this),!1)}receiveMessageFromApp(e){e&&e.data&&e.data.action&&this.emit(e.data.action,e.data)}emit(e,...t){const o=this.events[e];if(!(!e||!o||!o.length))for(let i=0;i<o.length;i++)o[i].apply(this,t)}outlineOnMoveHandler(){document.body.classList.add(s.OUTLINE);const e=()=>{document.body.classList.remove(s.OUTLINE),this.hinter&&(this.hinter.style.opacity=0)};this.outlineOnMoveInterval&&clearTimeout(this.outlineOnMoveInterval),this.outlineOnMoveInterval=setTimeout(e,800)}outlineOnMove(){document.addEventListener("mousemove",this.outlineOnMoveHandler.bind(this),!1)}on(e,t){if(e.constructor===Array){for(const o of e)this.subscribeEvent(o,t);return}this.subscribeEvent(e,t)}subscribeEvent(e,t){e==="input"&&(this.actionsEnabled=!0),this.events[e].indexOf(t)===-1&&this.events[e].push(t)}pingEditor(e){this.isInIframe?this.sendDataToEditor({action:"ping"}):(this.inEditor=!1,e(this)),this.on("pingBack",this.handlePingBack(e))}handlePingBack(e){return()=>{this.inEditor=!0,e(this)}}handleEditedBlok(e){this.navigationBreadcrumbs=e.breadcrumbs,this.canAddBlocks=e.canAddBlocks||!1,this.canMoveForward=e.canMoveForward||!1,this.canMoveBackward=e.canMoveBackward||!1,this.canDeleteBlocks=e.canDeleteBlocks||!1,this.updateComponentBase(e.blok)}handleAddMoveBlok(e){const t=l(`${this.storyId}-${e.blockId}`);t&&this.handleOpenBlok(t)}handleDeselectBlock(){document.querySelectorAll("[data-blok-focused]").forEach(e=>e.removeAttribute("data-blok-focused")),this.hideElement(this.overlay)}handleDuplicatedBlok(e){this.handleDeselectBlock(),setTimeout(()=>{const t=l(`${this.storyId}-${e.blockId}`);this.handleOpenBlok(t)},500)}handleWindowClick(e){this.config.preventClicks&&(e.preventDefault(),e.stopPropagation()),this.handleOpenBlok(e.target,e)}handleOpenBlok(e,t){const o=y(e);if(o){t&&o.uid!==this.currentUid&&(t.preventDefault(),t.stopPropagation()),this.currentUid=o.uid,this.storyId=o.id,this.openBlok(o);return}t&&this.toggleFocusElement(e,!0)}enterEditmode(e){const t=N(document.body);e&&e.appVersion&&(this.appVersion=e.appVersion),e&&e.componentNames&&(this.componentNames=e.componentNames);for(let o=0;o<t.length;o++){const i=t[o].el,r=t[o].options;!i||i.nodeType!==Node.ELEMENT_NODE||(r.name=this.componentNames[r.name]||r.name,i.setAttribute("data-blok-c",JSON.stringify(r)),i.setAttribute("data-blok-uid",`${r.id}-${r.uid}`),i.offsetHeight<5&&(i.style["min-height"]="5px"),i.classList.add("storyblok__outline"))}if(this.on("addedBlock",this.handleAddMoveBlok),this.on("duplicatedBlock",this.handleDuplicatedBlok),this.on("movedBlock",this.handleAddMoveBlok),this.on("enterComponent",this.enterComponent),this.on("highlightComponent",this.highlightComponent),this.on("hoverComponent",this.hoverComponent),this.on("editedBlok",this.handleEditedBlok),this.on("deselectBlok",this.handleDeselectBlock),e&&e.blockId&&this.config.setActiveBlock){const o=l(`${e.storyId}-${e.blockId}`);this.handleOpenBlok(o)}window.addEventListener("click",this.handleWindowClick.bind(this)),this.calcInterval!==null&&window.clearInterval(this.calcInterval),this.calcInterval=window.setInterval(()=>{this.calculateElementPosition(this.overlay,`${this.storyId}-${this.currentUid}`)},300)}highlightComponent(e){this.highlighter.innerHTML="",e.componentIds.length>0?(this.highlighter.style.display="block",this.highlighter.style.opacity=1):(this.highlighter.style.display="none",this.highlighter.style.opacity=0);for(let t=0;t<e.componentIds.length;t++){const o=`${e.storyId}-${e.componentIds[t]}`,i=l(o);if(i){const r=document.createElement("div");r.setAttribute("class",s.HIGHLIGHTER),this.highlighter.appendChild(r),this.calculateElementPosition(r,o),e.componentId===e.componentIds[t]&&!g(i)&&typeof i.scrollIntoView<"u"&&i.scrollIntoView()}}}hoverComponent(e){this.calculateElementPosition(this.hinter,`${e.storyId}-${e.componentId}`),this.hinter.style.opacity=1,this.hinter.style.display="block"}toggleFocusElement(e,t=!1){if(!A(this.overlay,e)){if(this.handleDeselectBlock(),!t&&this.storyId===E("_storyblok")){e.setAttribute("data-blok-focused",!0),this.showFocusedElement(this.overlay),this.focusState=!1;return}this.focusState||this.sendDataToEditor({action:"noFocus"})}}showFocusedElement(e){if(!this.currentUid){this.hideElement(e);return}this.showElement(e),this.calculateElementPosition(e,`${this.storyId}-${this.currentUid}`)}handleBlokActions(e){this.sendDataToEditor({action:e,blok:this.lastBreadcrumbItem}),e==="addBlockBefore"||e==="addBlockAfter"||e==="copy"?this.hideElement(this.actionsMenu):this.hideElement(this.overlay),(e==="moveForward"||e==="moveBackward")&&(this.focusState=!0)}hideElement(e){e.style.display="none"}showElement(e){e.style.display="block"}toggleElement(e){if(e.style.display==="block"){this.hideElement(e);return}this.showElement(e)}enterComponent(e){const t=l(`${e.storyId}-${e.componentId}`),o=y(t);o&&(this.hinter.style.opacity=0,this.hinter.style.display="none",this.currentUid=o.uid,this.storyId=o.id,this.scrollIntoView(t),this.handleEditedBlok(e))}scrollIntoView(e){e&&!g(e)&&typeof e.scrollIntoView<"u"&&setTimeout(()=>{e.scrollIntoView({behavior:"smooth",block:"start"})},100)}openBlok(e){this.sendDataToEditor({action:"edit",dataC:e,config:this.config})}createComponentContext(){this.createComponentBase(),this.createActionsMenu(),this.createActionsMenuItems(),this.createBreadcrumbsMenu(),this.createActionsMenuButton(),this.createBreadcrumbsMenuButton(),this.createComponentLabel(),this.createComponentButtonLabel()}createComponentBase(){this.componentBase=document.createElement("div"),this.componentBase.setAttribute("class",s.COMPONENT_BASE),this.componentBase.setAttribute("id",s.COMPONENT_BASE),this.overlay.append(this.componentBase)}createComponentLabel(){this.componentLabel=document.createElement("span"),this.componentLabel.setAttribute("class",`${s.COMPONENT_BASE}-label`),this.componentBase.prepend(this.componentLabel)}createComponentButtonLabel(){const e=document.createElement("span");e.setAttribute("class",`${s.COMPONENT_BASE}-label`),this.breadcrumbsButtonMenu.appendChild(e)}updateComponentLabel(e){document.querySelectorAll(`.${s.COMPONENT_BASE}-label`).forEach(t=>t.innerText=this.componentNames[e.name]||f(e))}updateComponentBase(e){this.hideElement(this.actionsMenu),this.hideElement(this.breadcrumbsMenu),this.overlay.classList.add(`${s.OVERLAY}--clicked`),setTimeout(()=>{this.overlay.classList.remove(`${s.OVERLAY}--clicked`)},400),this.navigationBreadcrumbs.length>1?(this.updateBreadcrumbsMenu(this.navigationBreadcrumbs),this.actionsEnabled?this.updateActionsMenu():(this.componentBase.setAttribute("class",`${s.COMPONENT_BASE} ${s.COMPONENT_BASE}--simple`),this.hideElement(this.actionsMenuButton)),this.hideElement(this.componentLabel)):(this.hideElement(this.breadcrumbsButtonMenu),this.hideElement(this.actionsMenuButton),this.showElement(this.componentLabel)),this.updateComponentLabel(e);const t=l(`${this.storyId}-${e.uid}`);t&&this.toggleFocusElement(t)}createBreadcrumbsMenuButton(){this.breadcrumbsButtonMenu=document.createElement("button"),this.breadcrumbsButtonMenu.setAttribute("class",`${s.COMPONENT_BASE}-btn ${s.COMPONENT_BASE}-btn-parent`),this.breadcrumbsButtonMenu.prepend(k({viewBox:"0 0 24 24",svgClass:`${s.COMPONENT_BASE}-svg`,path:"M13.73 14.284l-2.197-2.216 2.197-2.217a1.051 1.051 0 000-1.477 1.03 1.03 0 00-1.465 0l-2.93 2.955a1.043 1.043 0 00-.287.554l-.014.123v.123c.014.247.115.489.301.677l2.93 2.956a1.03 1.03 0 001.465 0 1.051 1.051 0 000-1.478z",pathFill:"#ffffff"})),this.breadcrumbsButtonMenu.addEventListener("click",()=>{this.toggleElement(this.breadcrumbsMenu),this.hideElement(this.actionsMenu)}),this.componentBase.prepend(this.breadcrumbsButtonMenu)}createBreadcrumbsMenu(){this.breadcrumbsMenu=document.createElement("div"),this.breadcrumbsMenu.setAttribute("class",s.BREADCRUMBS_MENU),this.breadcrumbsMenu.setAttribute("id",s.BREADCRUMBS_MENU),this.componentBase.append(this.breadcrumbsMenu)}updateBreadcrumbsMenu(e){this.breadcrumbsMenu.innerHTML="";const t=[];for(let o=0;o<e.length;o++){t[o]=document.createElement("button"),t[o].innerHTML=f({display_name:this.componentNames[e[o].component],name:e[o].component});const i=e[o];t[o].addEventListener("click",r=>{r.stopPropagation(),this.currentUid=i._uid,this.openBlok({id:this.storyId,uid:i._uid,name:i.component})}),t[o].classList.add(`${s.BREADCRUMBS_MENU}__menu-item`),e[o]._uid===this.currentUid&&(t[o].classList.add(`${s.BREADCRUMBS_MENU}__menu-item--selected`),t[o].setAttribute("disabled",!0)),this.breadcrumbsMenu.appendChild(t[o]),this.breadcrumbsButtonMenu.style.display="flex"}}createActionsMenuButton(){this.actionsMenuButton=document.createElement("button"),this.actionsMenuButton.setAttribute("class",`${s.COMPONENT_BASE}-btn ${s.COMPONENT_BASE}-btn-action`),this.actionsMenuButton.prepend(k({viewBox:"0 0 24 24",svgClass:`${s.COMPONENT_BASE}-svg`,path:"M7.5 11a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm10 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z",pathFill:"#ffffff"})),this.actionsMenuButton.addEventListener("click",()=>{this.toggleElement(this.actionsMenu),this.breadcrumbsMenu&&this.hideElement(this.breadcrumbsMenu)}),this.componentBase.append(this.actionsMenuButton)}createActionsMenuItems(){this.actionsMenuItems=[{eventFunction:()=>this.handleBlokActions.bind(this,"addBlockBefore"),innerHTML:"Add Block Before",order:0,show:()=>this.canAddBlocks},{eventFunction:()=>this.handleBlokActions.bind(this,"addBlockAfter"),innerHTML:"Add Block After",order:1,show:()=>this.canAddBlocks},{eventFunction:()=>this.handleBlokActions.bind(this,"duplicateBlock"),innerHTML:"Duplicate",order:2,show:()=>this.canAddBlocks},{eventFunction:()=>this.handleBlokActions.bind(this,"copy"),innerHTML:"Copy",order:3,show:()=>this.appVersion==="v2"},{separator:!0,order:4,show:()=>this.canAddBlocks&&this.canMoveForward||!!(this.canMoveBackward&&this.lastBreadcrumbItem._parentindex)},{eventFunction:()=>this.handleBlokActions.bind(this,"moveForward"),innerHTML:"Move Forward",order:5,show:()=>this.canMoveForward},{eventFunction:()=>this.handleBlokActions.bind(this,"moveBackward"),innerHTML:"Move Backward",order:6,show:()=>this.canMoveBackward&&this.lastBreadcrumbItem._parentindex},{separator:!0,order:7,show:()=>this.canAddBlocks&&this.canDeleteBlocks},{eventFunction:()=>this.handleBlokActions.bind(this,"deleteBlock"),className:`${s.ACTIONS_MENU}__menu-item--delete`,innerHTML:"Delete",order:8,show:()=>this.canDeleteBlocks}]}createActionsMenu(){this.actionsMenu=document.createElement("div"),this.actionsMenu.setAttribute("class",s.ACTIONS_MENU),this.actionsMenu.setAttribute("id",s.ACTIONS_MENU),this.componentBase.append(this.actionsMenu)}updateActionsMenu(){this.actionsMenu.innerHTML="";const e=`${s.ACTIONS_MENU}__menu-item`,t="button",o="click";this.actionsMenuItems.sort((i,r)=>i.order>r.order?1:r.order>i.order?-1:0).forEach(i=>{if(i.separator&&i.show()){this.actionsMenu.appendChild(document.createElement("hr"));return}const r=document.createElement(i.element?i.element:t);r.classList.add(e),i.className&&r.classList.add(i.className),r.innerHTML=i.innerHTML,i.eventFunction&&r.addEventListener(i.event?i.event:o,i.eventFunction()),i.show()&&this.actionsMenu.appendChild(r)}),this.actionsMenuButton.style.display="flex"}}var S=Object.defineProperty,T=(n,e,t)=>e in n?S(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,m=(n,e,t)=>T(n,typeof e!="symbol"?e+"":e,t);let j=class{constructor(n){m(this,"isInEditor"),m(this,"enterEditmode"),m(this,"pingEditor"),m(this,"on");const e=new w(n);this.isInEditor=()=>e.isInEditor(),this.enterEditmode=t=>{e.enterEditmode(t)},this.pingEditor=t=>{e.pingEditor(t)},this.on=(t,o)=>{e.on(t,o)}}};const h=n=>({tag:"success",value:n}),c=n=>({tag:"failure",error:n,path:[]}),B=(n,e)=>({tag:"failure",error:n.error,path:[e,...n.path]}),L=n=>typeof n>"u",$=n=>typeof n=="string",P=n=>typeof n=="object"&&n!==null,b=Symbol("propertyAbsent"),_=Symbol("omitProperty"),H="Not an object",U=n=>B(c("Property is missing"),{tag:"object",key:n}),D=n=>{const e=Object.entries(n);return t=>{if(!P(t))return c(H);const o={};for(let i=0;i<e.length;i++){const[r,u]=e[i],d=t[r];if(d===void 0&&!t.hasOwnProperty(r)){const a=u(b);if(a.tag==="failure"||a.value===b)return U(r);a.value!==_&&(o[r]=a.value)}else{const a=u(d);if(a.tag==="failure")return B(a,{tag:"object",key:r});o[r]=a.value}}return h(o)}},F=n=>L(n)?h(n):c("Not undefined"),p=n=>$(n)?h(n):c("Not a string"),R=(...n)=>e=>{for(const t of n){const o=t(e);if(o.tag==="success")return h(o.value)}return c("No parser in the union matched")},V=n=>R(z,F,n),z=n=>n===b?h(_):c("not optional");D({name:p,space:V(p),uid:p,id:p});export{j as default};
