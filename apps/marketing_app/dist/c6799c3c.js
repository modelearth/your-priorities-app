import{_ as t,e,n as i,a as o,r as s,p as r}from"./39c6fc0c.js";window.JSCompiler_renameProperty=function(t,e){return t};const n=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;const a=!window.ShadyDOM||!window.ShadyDOM.inUse;var l;function d(t,e,i){return{index:t,removed:e,addedCount:i}}Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),a&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]}catch(t){return!1}})(),window.Polymer&&window.Polymer.rootPath||(l=document.baseURI||window.location.href).substring(0,l.lastIndexOf("/")+1),window.Polymer&&window.Polymer.sanitizeDOMValue,window.Polymer&&window.Polymer.setPassiveTouchGestures,window.Polymer&&window.Polymer.strictTemplatePolicy,window.Polymer&&window.Polymer.allowTemplateFromDomModule,window.Polymer&&window.Polymer.legacyOptimizations,window.Polymer&&window.Polymer.legacyWarnings,window.Polymer&&window.Polymer.syncInitialRender,window.Polymer&&window.Polymer.legacyUndefined,window.Polymer&&window.Polymer.orderedComputed,window.Polymer&&window.Polymer.removeNestedTemplates,window.Polymer&&window.Polymer.fastDomIf,window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes,window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS;function h(t,e,i,o,s,r){let n,a=0,l=0,h=Math.min(i-e,r-s);if(0==e&&0==s&&(a=function(t,e,i){for(let o=0;o<i;o++)if(!c(t[o],e[o]))return o;return i}(t,o,h)),i==t.length&&r==o.length&&(l=function(t,e,i){let o=t.length,s=e.length,r=0;for(;r<i&&c(t[--o],e[--s]);)r++;return r}(t,o,h-a)),s+=a,r-=l,(i-=l)-(e+=a)==0&&r-s==0)return[];if(e==i){for(n=d(e,[],0);s<r;)n.removed.push(o[s++]);return[n]}if(s==r)return[d(e,[],i-e)];let p=function(t){let e=t.length-1,i=t[0].length-1,o=t[e][i],s=[];for(;e>0||i>0;){if(0==e){s.push(2),i--;continue}if(0==i){s.push(3),e--;continue}let r,n=t[e-1][i-1],a=t[e-1][i],l=t[e][i-1];r=a<l?a<n?a:n:l<n?l:n,r==n?(n==o?s.push(0):(s.push(1),o=n),e--,i--):r==a?(s.push(3),e--,o=a):(s.push(2),i--,o=l)}return s.reverse(),s}(function(t,e,i,o,s,r){let n=r-s+1,a=i-e+1,l=new Array(n);for(let t=0;t<n;t++)l[t]=new Array(a),l[t][0]=t;for(let t=0;t<a;t++)l[0][t]=t;for(let i=1;i<n;i++)for(let r=1;r<a;r++)if(c(t[e+r-1],o[s+i-1]))l[i][r]=l[i-1][r-1];else{let t=l[i-1][r]+1,e=l[i][r-1]+1;l[i][r]=t<e?t:e}return l}(t,e,i,o,s,r));n=void 0;let m=[],u=e,g=s;for(let t=0;t<p.length;t++)switch(p[t]){case 0:n&&(m.push(n),n=void 0),u++,g++;break;case 1:n||(n=d(u,[],0)),n.addedCount++,u++,n.removed.push(o[g]),g++;break;case 2:n||(n=d(u,[],0)),n.addedCount++,u++;break;case 3:n||(n=d(u,[],0)),n.removed.push(o[g]),g++}return n&&m.push(n),m}function c(t,e){return t===e}let p=0,m=0,u=[],g=0,f=!1,b=document.createTextNode("");new window.MutationObserver((function(){f=!1;const t=u.length;for(let e=0;e<t;e++){let t=u[e];if(t)try{t()}catch(t){setTimeout((()=>{throw t}))}}u.splice(0,t),m+=t})).observe(b,{characterData:!0});const w={run:t=>(f||(f=!0,b.textContent=g++),u.push(t),p++),cancel(t){const e=t-m;if(e>=0){if(!u[e])throw new Error("invalid async handle: "+t);u[e]=null}}};function y(t){return"slot"===t.localName}let v=class{static getFlattenedNodes(t){const e=n(t);return y(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map((t=>y(t)?n(t=t).assignedNodes({flatten:!0}):[t])).reduce(((t,e)=>t.concat(e)),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){y(this._target)?this._listenSlots([this._target]):n(this._target).children&&(this._listenSlots(n(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,(t=>{this._processMutations(t)})):(this._nativeChildrenObserver=new MutationObserver((t=>{this._processMutations(t)})),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){y(this._target)?this._unlistenSlots([this._target]):n(this._target).children&&(this._unlistenSlots(n(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,w.run((()=>this.flush())))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let i=t[e];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),i=(o=e,s=this._effectiveNodes,h(o,0,o.length,s,0,s.length));var o,s;for(let e,o=0;o<i.length&&(e=i[o]);o++)for(let i,o=0;o<e.removed.length&&(i=e.removed[o]);o++)t.removedNodes.push(i);for(let o,s=0;s<i.length&&(o=i[s]);s++)for(let i=o.index;i<o.index+o.addedCount;i++)t.addedNodes.push(e[i]);this._effectiveNodes=e;let r=!1;return(t.addedNodes.length||t.removedNodes.length)&&(r=!0,this.callback.call(this._target,t)),r}_listenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];y(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];y(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};const _=Element.prototype,S=_.matches||_.matchesSelector||_.mozMatchesSelector||_.msMatchesSelector||_.oMatchesSelector||_.webkitMatchesSelector,x=function(t,e){return S.call(t,e)};class ${constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new v(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(n(this.node).contains(t))return!0;let e=t,i=t.ownerDocument;for(;e&&e!==i&&e!==this.node;)e=n(e).parentNode||n(e).host;return e===this.node}getOwnerRoot(){return n(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?n(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=n(this.node).assignedSlot;for(;e;)t.push(e),e=n(e).assignedSlot;return t}importNode(t,e){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return n(i).importNode(t,e)}getEffectiveChildNodes(){return v.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),i=[];for(let o,s=0,r=e.length;s<r&&(o=e[s]);s++)o.nodeType===Node.ELEMENT_NODE&&x(o,t)&&i.push(o);return i}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function T(t,e){for(let i=0;i<e.length;i++){let o=e[i];Object.defineProperty(t,o,{get:function(){return this.node[o]},configurable:!0})}}class C{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}$.prototype.cloneNode,$.prototype.appendChild,$.prototype.insertBefore,$.prototype.removeChild,$.prototype.replaceChild,$.prototype.setAttribute,$.prototype.removeAttribute,$.prototype.querySelector,$.prototype.querySelectorAll,$.prototype.parentNode,$.prototype.firstChild,$.prototype.lastChild,$.prototype.nextSibling,$.prototype.previousSibling,$.prototype.firstElementChild,$.prototype.lastElementChild,$.prototype.nextElementSibling,$.prototype.previousElementSibling,$.prototype.childNodes,$.prototype.children,$.prototype.classList,$.prototype.textContent,$.prototype.innerHTML;let O=$;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames($.prototype).forEach((e=>{"activeElement"!=e&&(t.prototype[e]=$.prototype[e])})),T(t.prototype,["classList"]),O=t,Object.defineProperties(C.prototype,{localTarget:{get(){const t=this.event.currentTarget,e=t&&E(t).getOwnerRoot(),i=this.path;for(let t=0;t<i.length;t++){const o=i[t];if(E(o).getOwnerRoot()===e)return o}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(let i=0;i<e.length;i++){let o=e[i];t[o]=function(){return this.node[o].apply(this.node,arguments)}}}($.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),T($.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(let i=0;i<e.length;i++){let o=e[i];Object.defineProperty(t,o,{get:function(){return this.node[o]},set:function(t){this.node[o]=t},configurable:!0})}}($.prototype,["textContent","innerHTML","className"]);const E=function(t){if((t=t||document)instanceof O)return t;if(t instanceof C)return t;let e=t.__domApi;return e||(e=t instanceof Event?new C(t):new O(t),t.__domApi=e),e};let D=class extends o{constructor(){super(...arguments),this.headers={}}static get style(){return[s`
        :host {
          display: block;
        }
      `]}render(){return r`
      <!-- This form is used to collect the elements that should be submitted -->
      <slot></slot>

      <!-- This form is used for submission -->
      <form id="helper"></form>
    `}connectedCallback(){super.connectedCallback(),this.addGlobalListener("yp-network-error",this._formError.bind(this)),this._form||(this._form=this.$$("form"),this._form?(this._init(),window.setTimeout(this._saveInitialValues.bind(this),1)):this._nodeObserver=E(this).observeNodes((t=>{for(let e=0;e<t.addedNodes.length;e++)"FORM"===t.addedNodes[e].tagName&&(this._form=t.addedNodes[e],this._init(),E(this).unobserveNodes(this._nodeObserver),this._nodeObserver=void 0)})))}_formError(t){t.detail.errorId&&"formError"==t.detail.errorId&&this.fire("yp-form-error",{})}disconnectedCallback(){super.disconnectedCallback(),this.removeGlobalListener("yp-network-error",this._formError.bind(this)),this._nodeObserver&&(E(this).unobserveNodes(this._nodeObserver),this._nodeObserver=void 0)}_init(){this._form.addEventListener("submit",this.submit.bind(this),!1),this._form.addEventListener("reset",this.reset.bind(this),!1),this._defaults=this._defaults||new WeakMap,this._saveInitialValues()}saveResetValues(){this._saveInitialValues(!0)}_saveInitialValues(t=!1){const e=this._getValidatableElements();for(let i=0;i<e.length;i++){const o=e[i];if(!this._defaults.has(o)||t){const t={value:o.value,checked:!1,invalid:!1};"checked"in o&&(t.checked=o.checked),this._defaults.set(o,t)}}}validate(){if(!this._form)return!1;if(""===this._form.getAttribute("novalidate"))return!0;let t=this._form.checkValidity();const e=this._getValidatableElements();for(let i,o=0;i=e[o],o<e.length;o++){const e=i;e.reportValidity&&(t=!!e.reportValidity()&&t)}return t}submit(t){if(t&&t.preventDefault(),!this._form)return;if(!this.validate())return void this.fire("yp-form-invalid");this.$$("#helper").textContent="";const e=this.serializeForm();this._makeAjaxRequest(e)}reset(t){if(t&&t.preventDefault(),!this._form)return;if(!t||"reset"!==t.type||t.target!==this._form)return void this._form.reset();const e=this._getValidatableElements();for(let t=0;t<e.length;t++){const i=e[t];if(this._defaults.has(i)){const t=this._defaults.get(i);for(const e in t)i[e]=t[e]}}this.dispatchEvent(new CustomEvent("yp-form-reset",{bubbles:!0,composed:!0}))}serializeForm(){const t=this._getSubmittableElements(),e={};for(let i=0;i<t.length;i++){const o=this._serializeElementValues(t[i]);for(let s=0;s<o.length;s++)this._addSerializedElement(e,t[i].name,o[s])}return e}async _makeAjaxRequest(t){const e=this._form.getAttribute("action"),i=this._form.getAttribute("method")||"GET",o=this.headers;this.fire("yp-form-submit");const s=Object.keys(t).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(t[e]))).join("&");this.headers["content-type"]="application/x-www-form-urlencoded";const r=await window.serverApi.submitForm(e,i,o,s);null!=r?this.fire("yp-form-response",r):this.fire("yp-form-error",{})}_getValidatableElements(){return this._findElements(this._form,!0,!1)}_getSubmittableElements(){return this._findElements(this._form,!1,!1)}_findElements(t,e,i,o){o=o||[];const s=E(t).querySelectorAll("*");for(let t=0;t<s.length;t++)i||"slot"!==s[t].localName&&"content"!==s[t].localName?this._searchSubmittable(o,s[t],e):this._searchSubmittableInSlot(o,s[t],e);return o}_searchSubmittableInSlot(t,e,i){const o=E(e).getDistributedNodes();for(let e=0;e<o.length;e++){if(o[e].nodeType===Node.TEXT_NODE)continue;this._searchSubmittable(t,o[e],i);const s=E(o[e]).querySelectorAll("*");for(let e=0;e<s.length;e++)this._searchSubmittable(t,s[e],i)}}_searchSubmittable(t,e,i){this._isSubmittable(e,i)?t.push(e):e.root&&this._findElements(e.root,i,!0,t)}_isSubmittable(t,e){return!t.disabled&&(e?t.name||"function"==typeof t.validate:t.name)}_serializeElementValues(t){const e=t.tagName.toLowerCase();return"button"===e||"input"===e&&("submit"===t.type||"reset"===t.type)?[]:"select"===e||"mwc-select"===e?this._serializeSelectValues(t):"input"===e||"mwc-textarea"===e||"mwc-textfield"===e||"yp-structured-question-edit"===e||"yp-language-selector"===e||"yp-theme-selector"===e?this._serializeInputValues(t):t.checked?[t.value]:[]}_serializeSelectValues(t){const e=[];for(let i=0;i<t.options.length;i++)t.options[i].selected&&e.push(t.options[i].value);return e}_serializeInputValues(t){const e=t.tagName.toLowerCase();return("mwc-checkbox"!==e&&"mwc-radio"!==e||t.checked)&&"file"!==e?!1===t.value?[]:[t.value]:[]}_createHiddenElement(t,e){const i=document.createElement("input");return i.setAttribute("type","hidden"),i.setAttribute("name",t),i.setAttribute("value",e),i}_addSerializedElement(t,e,i){if(void 0===t[e])t[e]=i;else{if(!Array.isArray(t[e])){const i=[];i.push(t[e]),t[e]=i}t[e].push(i)}}};t([e({type:Object})],D.prototype,"headers",void 0),D=t([i("yp-form")],D);let N=class extends o{constructor(){super(...arguments),this.tablet=!1,this.method="POST",this.doubleWidth=!1,this.opened=!1,this.useNextTabAction=!1,this.uploadingState=!1,this.customSubmit=!1}static get styles(){return[super.styles,s`
        :host {
          background-color: #fff;
          font-family: var(--app-header-font-family, Roboto);
        }

        .fullScreenDialog {
          position: absolute;
          display: block;
          top: 0;
          bottom: 0;
          margin: 0;
          min-width: 360px;
          max-width: 1024px;
          width: 100%;
        }

        [main] {
          background-color: #fff;
        }

        #toolbar {
          background-color: #f00;
          color: var(--text-primary_color);
          max-height: 70px !important;
        }

        #dismissBtn {
          margin-left: 0;
        }

        mwc-button {
          font-family: var(--app-header-font-family, Roboto);
        }

        mwc-button[long-button-text] {

        }

        mwc-dialog[long-title-text] {

        }

        mwc-button[dialog-confirm] {
          background: none;
          min-width: 44px;
          margin: 6px 0 0 16px;
        }

        mwc-button[disabled] {
          background-color: #fff;
        }

        .title ::slotted(h2) {
          padding-top: 2px;
        }

        mwc-snackbar {
          z-index: 9999;
        }

        #form > * {
          padding: 8px 8px;
        }

        @media (max-width: 1024px) {
          mwc-dialog > * {
            padding: 0 0;
          }

          .fullScreenDialog {
            min-width: 320px;
          }
        }

        @media (max-width: 359px) {
          .fullScreenDialog {
            min-width: 320px;
          }
        }

        mwc-dialog {
          background-color: #fff;
        }

        mwc-header-panel {
          margin-top: 0;
          padding-top: 0 !important;
        }

        app-toolbar {
          margin-top: 0;
          padding-top: 0;
        }

        .popUpDialog {
          --mdc-dialog-min-width: 550px;
        }

        .popUpDialogDouble {
          --mdc-dialog-min-width: 840px;
        }

        #scroller {
          padding: 8px;
        }

        .scrollerContainer {
          height: 100%;
        }

        @media (max-width: 1024px) {
          mwc-dialog > * {
            padding: 0;
            margin: 0;
            background-color: #fff;
          }

          :host {
            max-height: 100% !important;
            height: 100% !important;
          }
        }

        mwc-dialog[tablet] > * {
          padding: 0;
          margin: 0;
          background-color: #fff;
        }

        mwc-dialog[tablet] {
          max-width: 3200px !important;
        }

        .toolbar {
          padding-top: 8px;
        }

        .bigHeader {
          background-color: var(--accent-color);
          color: #fff;
          margin: 0;
          padding: 16px;
          vertical-align: center;
        }

        .largeIcon {
          width: 48px;
          height: 48px;
          margin-left: 8px;
        }

        .smallIcon {
          width: 32px;
          height: 32px;
          padding-right: 8px;
          margin-top: 7px;
          margin-left: 8px;
        }

        .titleHeader {
          font-size: 32px;
          padding-left: 12px;
          padding-top: 14px;
          font-weight: bold;
        }

        .titleHeaderMobile {
          font-size: 20px;
          padding-left: 2px;
          margin-top: 12px;
          font-weight: bold;
        }

        .titleHeaderMobile[long-title-text] {
          margin-top: 4px;
        }

        .titleHeaderMobile[long-button-text] {
          font-size: 16px;
          margin-top: 12px;
        }

        #formErrorDialog {
          padding: 12px;
        }

        .closeIconNarrow {
          width: 48px;
          height: 48px;
          padding-right: 8px;
          margin-left: 0;
          padding-left: 0;
        }

        .smallButtonText {
          font-weight: bold;
          font-size: 17px;
        }

        .smallButtonText[long-button-text] {
          font-size: 14px;
        }

        .outerMobile {
          background-color: #fff;
          padding: 0;
          margin: 0;
        }

        .smallHeader {
          background-color: var(--accent-color);
          color: #fff;
          margin: 0;
          padding: 8px;
          vertical-align: center;
          max-height: 70px !important;
        }

        .actionButtons {
          margin: 8px;
          font-weight: bold;
        }

        @media all and (-ms-high-contrast: none) {
          #scrollable {
            min-height: 350px;
          }
        }

        mwc-dialog[rtl] {
          direction: rtl;
        }

        mwc-dialog,
        mwc-checkbox {
          --mwc-checkbox-label: {
            padding-right: 6px;
          }
        }

        mwc-dialog,
        mwc-radio-button {
          --mwc-radio-button-label: {
            padding-right: 6px;
          }
        }
      `]}renderMobileView(){return r`
      <div class="outerMobile">
        <div class="layout horizontal smallHeader">
          <mwc-icon-button
            id="dismissBtn"
            .label="${this.t("close")}"
            icon="close"
            slot="secondaryAction"
            class="closeIconNarrow"
            dialog-dismiss
          ></mwc-icon-button>
          <mwc-icon class="smallIcon">${this.icon}</mwc-icon>
          <div class="flex"></div>

          ${this.useNextTabAction?r``:r`
                ${this.uploadingState?r`
                      <mwc-button
                        disabled
                        ?long-button-text="${this.hasLongSaveText}"
                        slot="primaryAction"
                        .label="${this.t("uploading.inProgress")}"
                      ></mwc-button>
                    `:r`
                      <mwc-button
                        id="submit1"
                        ?hidden="${!this.saveText}"
                        @click="${this._submit}"
                        ?long-button-text="${this.hasLongSaveText}"
                        slot="primaryAction"
                        .label="${this.saveText?this.saveText:""}"
                        class="smallButtonText"
                      ></mwc-button>
                    `}
              `}
          ${this.useNextTabAction?r``:r`
                <mwc-button
                  @click="${this._nextTab}"
                  slot="primaryAction"
                  ?long-button-text="${this.hasLongSaveText}"
                  class="smallButtonText"
                  .label="${this.nextActionText}"
                ></mwc-button>
              `}
        </div>
        <div id="scroller">
          <yp-form id="form" method="POST" .params="${this.params}">
            <form
              name="ypForm"
              .method="${this.method}"
              .action="${this.action?this.action:""}"
            >
              <slot></slot>
            </form>
          </yp-form>
        </div>
        <mwc-circular-progress-four-color
          id="spinner"
        ></mwc-circular-progress-four-color>
      </div>
    `}renderDesktopView(){return r`
      <div
        id="scrollable"
        .smallHeight="${!this.wide}"
        .mediumHeight="${!this.wide}"
        .largeHeight="${this.wide}"
      >
        <yp-form id="form" .params="${this.params}">
          <form
            name="ypForm"
            .method="${this.method}"
            .action="${this.action}"
          >
            <slot></slot>
          </form>
        </yp-form>
        <mwc-circular-progress-four-color
          id="spinner"
        ></mwc-circular-progress-four-color>
      </div>
      ${this.cancelText?r`
            <mwc-button
              id="dismissBtn"
              dialogAction="cancel"
              slot="secondaryAction"
              .label="${this.cancelText}"
            ></mwc-button>
          `:r`
            <mwc-button
              id="dismissBtn"
              dialogAction="cancel"
              slot="secondaryAction"
              .label="${this.t("cancel")}"
            ></mwc-button>
          `}
      ${this.uploadingState?r`
            <mwc-button
              disabled
              @click="${this._nextTab}"
              slot="primaryAction"
              .label="${this.t("uploading.inProgress")}"></mwc-button>
          </div>
          `:r`
            ${this.useNextTabAction?r`
                  <mwc-button
                    raised
                    slot="primaryAction"
                    class="actionButtons"
                    @click="${this._nextTab}"
                    .label="${this.nextActionText}"
                  ></mwc-button>
                `:r`
                  <mwc-button
                    raised
                    class="actionButtons"
                    slot="primaryAction"
                    ?hidden="${!this.saveText}"
                    id="submit2"
                    @click="${this._submit}"
                    .label="${this.saveText?this.saveText:""}"
                  ></mwc-button>
                `}
          `}
    `}render(){return r`
      <mwc-dialog
        ?open="${this.opened}"
        ?rtl="${this.rtl}"
        @closed="${this.close}"
        .name="${this.name}"
        .heading="${this.heading}"
        ?long-title-text="${this.hasLongTitle}"
        id="editDialog"
        class="${this.computeClass}"
        with-backdrop="${!this.wide}"
        modal
      >
        ${this.narrow?this.renderMobileView():this.renderDesktopView()}
      </mwc-dialog>

      <mwc-dialog id="formErrorDialog" modal>
        <div id="errorText">${this.errorText}</div>
        <div class="buttons">
          <mwc-button
            slot="primaryAction"
            autofocus
            @click="${this._clearErrorText}"
            .label="${this.t("ok")}"
          ></mwc-button>
        </div>
      </mwc-dialog>
      <mwc-snackbar
        id="snackbar"
        .labelText="${this.snackbarTextCombined}"
      ></mwc-snackbar>
    `}get narrow(){return!this.wide||this.tablet}scrollResize(){}updated(t){super.updated(t),t.has("opened")}_fileUploadStarting(){this.uploadingState=!0}_fileUploadComplete(){this.uploadingState=!1}_nextTab(){this.fire("next-tab-action")}get computeClass(){return this.narrow?"fullScreenDialog":this.doubleWidth?"popUpDialogDouble":"popUpDialog"}connectedCallback(){super.connectedCallback(),this.addListener("yp-form-submit",this._formSubmitted),this.addListener("yp-form-response",this._formResponse),this.addListener("yp-form-error",this._formError),this.addListener("yp-form-invalid",this._formInvalid),this.addListener("file-upload-starting",this._fileUploadStarting),this.addListener("file-upload-complete",this._fileUploadComplete),this.baseAction=this.action,/iPad/.test(navigator.userAgent)||/Android/.test(navigator.userAgent)&&!/Mobile/.test(navigator.userAgent)?this.tablet=!0:this.tablet=!1}disconnectedCallback(){super.disconnectedCallback(),this.removeListener("yp-form-submit",this._formSubmitted),this.removeListener("yp-form-response",this._formResponse),this.removeListener("yp-form-error",this._formError),this.removeListener("yp-form-invalid",this._formInvalid),this.removeListener("file-upload-starting",this._fileUploadStarting),this.removeListener("file-upload-complete",this._fileUploadComplete)}open(){this.opened=!0}close(){this.opened=!1}_formSubmitted(){}_formResponse(t){this._setSubmitDisabledStatus(!1),this.$$("#spinner").hidden=!0;const e=t.detail;e&&e.isError?console.log("There is an error in form handled by user"):(this.response=e,this.close(),e&&e.name?this.snackbarTextCombined=this.snackbarText+" "+e.name:this.snackbarTextCombined=this.snackbarText,this.$$("#snackbar").open=!0)}_formError(t){if(navigator.onLine||"POST"!==this.method||void 0===window.fetch)navigator.onLine?(this._setSubmitDisabledStatus(!1),console.log("Form error: ",t.detail.error),this._showErrorDialog(t.detail.error),this.$$("#spinner").hidden=!1):this._showErrorDialog(this.t("youAreOfflineCantSend"));else{const t=this.$$("#form").serializeForm();window.appGlobals.offline.sendWhenOnlineNext({body:t,method:this.method,params:this.params,url:this.action}),this.response={offlineSendLater:!0},this.close()}}_formInvalid(){this._setSubmitDisabledStatus(!1),this.$$("#spinner").hidden=!1}_submit(){this.customSubmit?this.fire("yp-custom-form-submit"):this.confirmationText?window.appDialogs.getDialogAsync("confirmationDialog",(t=>{t.open(this.confirmationText,this._reallySubmit.bind(this))})):this._reallySubmit()}_setSubmitDisabledStatus(t){const e=this.$$("#submit1"),i=this.$$("#submit2");e&&(e.disabled=t),i&&(i.disabled=t)}get hasLongSaveText(){return this.saveText&&this.saveText.length>12}get hasLongTitle(){return this.title&&this.title.length>14}async _reallySubmit(){this._setSubmitDisabledStatus(!0),this.params&&this.params.communityId?this.action=this.baseAction+"/"+this.params.communityId:this.params&&this.params.groupId?this.action=this.baseAction+"/"+this.params.groupId:this.params&&this.params.organizationId?this.action=this.baseAction+"/"+this.params.organizationId:this.params&&this.params.userImages&&this.params.postId?this.action=this.baseAction+"/"+this.params.postId+"/user_images":this.params&&this.params.statusChange&&this.params.postId?this.action=this.baseAction+"/"+this.params.postId+"/status_change":this.params&&this.params.postId&&this.params.imageId?this.action=this.baseAction+"/"+this.params.postId+"/"+this.params.imageId+"/user_images":this.params&&this.params.statusChange&&!0===this.params.disableStatusEmails&&this.params.postId?this.action=this.baseAction+"/"+this.params.postId+"/status_change_no_emails":this.params&&this.params.postId?this.action=this.baseAction+"/"+this.params.postId:this.params&&this.params.userId?this.action=this.baseAction+"/"+this.params.userId:this.params&&this.params.domainId?this.action=this.baseAction+"/"+this.params.domainId:this.params&&this.params.categoryId&&(this.action=this.baseAction+"/"+this.params.categoryId),await this.requestUpdate();const t=this.$$("#form");if(t.validate())t.submit(),this.$$("#spinner").hidden=!1;else{this.fire("yp-form-invalid");const t=this.t("form.invalid");this._showErrorDialog(t)}}submitForce(){this.$$("#form").submit(),this.$$("#spinner").hidden=!1}getForm(){return this.$$("#form")}stopSpinner(){this.$$("#spinner").hidden=!0}validate(){this.$$("#form").validate()}_showErrorDialog(t){this.errorText=t,this.$$("#formErrorDialog").open=!0}_clearErrorText(){this.$$("#formErrorDialog").open=!1,this.errorText=void 0}};t([e({type:String})],N.prototype,"action",void 0),t([e({type:Boolean})],N.prototype,"tablet",void 0),t([e({type:String})],N.prototype,"baseAction",void 0),t([e({type:String})],N.prototype,"cancelText",void 0),t([e({type:String})],N.prototype,"buttonText",void 0),t([e({type:String})],N.prototype,"method",void 0),t([e({type:String})],N.prototype,"errorText",void 0),t([e({type:String})],N.prototype,"snackbarText",void 0),t([e({type:String})],N.prototype,"snackbarTextCombined",void 0),t([e({type:String})],N.prototype,"saveText",void 0),t([e({type:Object})],N.prototype,"response",void 0),t([e({type:Object})],N.prototype,"params",void 0),t([e({type:Boolean})],N.prototype,"doubleWidth",void 0),t([e({type:String})],N.prototype,"icon",void 0),t([e({type:Boolean})],N.prototype,"opened",void 0),t([e({type:Boolean})],N.prototype,"useNextTabAction",void 0),t([e({type:String})],N.prototype,"nextActionText",void 0),t([e({type:Boolean})],N.prototype,"uploadingState",void 0),t([e({type:String})],N.prototype,"confirmationText",void 0),t([e({type:String})],N.prototype,"heading",void 0),t([e({type:String})],N.prototype,"name",void 0),t([e({type:Boolean})],N.prototype,"customSubmit",void 0),N=t([i("yp-edit-dialog")],N);
