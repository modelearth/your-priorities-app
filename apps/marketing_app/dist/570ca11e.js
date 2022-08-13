import{_ as t,e as i,n as e,a as o,r as s,C as n,p as a,h as r,t as d,j as c,s as l,R as p,o as h,T as m,k as u,S as g,q as y,l as v,d as b,u as x,v as f,m as w,w as _,x as $,y as C,z as T,A as I,B as k,D as P,E as A,F as z,G as L}from"./39c6fc0c.js";import{Y as S,a as N,G,F as E}from"./00b59482.js";import"./4cf369c5.js";let R=class extends o{static get styles(){return[super.styles,s`
        :host {
          margin-top: 16px;
        }

        canvas {
        }

        .wrapper {
          position: relative;
          display: inline-block;
          margin-left: 16px;
          margin-right: 16px;
        }

        .wrapper[small] {
          padding: 0;
          margin-left: 14px;
          margin-right: 14px;
        }

        .wrapper[small-screen] {
          padding: 0;
          margin-left: 14px;
          margin-right: 14px;
        }

        .text {
          position: absolute;
          text-align: center;
          width: 100%;
          line-height: 190px;
          font-size: 28px;
          color: #000;
        }

        .text[small] {
          line-height: 135px;
          font-size: 20px;
        }

        .text[small-screen] {
          line-height: 135px;
          font-size: 20px;
        }

        canvas {
          position: relative;
          z-index: 1;
        }

        .header {
          font-size: 28px;
          margin-bottom: 8px;
          margin-top: 16px;
        }

        .groupName {
          font-size: 28px;
          margin: 8px;
          padding: 8px;
          color: #222;
          margin-top: 0;
          padding-top: 0;
        }

        .groupName[small-screen] {
          font-size: 20px;
          margin-bottom: 16px;
        }

        .topHeader {
          font-size: 22px;
          margin: 8px;
          margin-top: 0;
          color: #111;
        }

        .firstTopHeader {
          color: #333;
        }

        .targetText {
          margin-top: 8px;
          margin-bottom: 8px;
          font-size: 22px;
          text-align: center;
          color: #111;
        }

        .targetText[small] {
          font-size: 18px;
        }

        .targetText[small-screen] {
          font-size: 18px;
        }

        .stage[not-small] {
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }

        .stage {
          background-color: #fefefe;
          padding: 16px;
          padding-top: 24px;
          width: 520px;
          margin: 16px;
          margin-bottom: 8px;
        }

        .stage[small] {
          width: 400px;
          margin: 0;
          padding: 8px;
          padding-top: 32px;
          padding-bottom: 16px;
        }

        .stage[small-screen] {
          width: 300px;
          padding: 8px;
          padding-top: 32px;
          padding-bottom: 16px;
        }

        .stageTop {
          background-color: #fefefe;
          padding: 16px;
          width: 520px;
          margin: 16px;
          margin-bottom: 8px;
          padding-top: 8px;
        }

        [hidden] {
          display: none !important;
        }
      `]}get canvasSize(){return this.wide?135:190}firstUpdated(t){super.firstUpdated(t),this._drawCharts()}formatAmount(t){return`$${t}m`}_drawCharts(){const t=this.group.configuration.dataForVisualizationJson;this._drawChart("#overallTarget",t.overallTargetPercent,this.t("overall"),t.overallColor?t.overallColor:"#5bac51"),this._drawChart("#overallActual",t.overallActualPercent,this.t("actual"),t.overallColor?t.overallColor:"#5bac51"),this._drawChart("#yearTarget",t.yearTargetPercent,this.t("overall"),t.yearColor?t.yearColor:"#004f77"),this._drawChart("#yearActual",t.yearActualPercent,this.t("actual"),t.yearColor?t.yearColor:"#004f77")}_drawChart(t,i,e,o,s=!1){new n(this.$$(t).getContext("2d"),{type:"doughnut",data:{labels:[e,e],datasets:[{data:[i,i-100],borderColor:[s?"transparent":"#FFF",s?"transparent":"#FFF"],backgroundColor:[o,s?"transparent":"rgb(220,220,220)"]}]},options:{tooltips:!1,legend:{display:!1},toolstips:{callbacks:{label:t=>t.yLabel}}}})}render(){const t=this.group.configuration.dataForVisualizationJson;return a`
      <div class="layout vertical center-center">
        <div
          class="layout vertical stage shadow-elevation-2dp center-center"
          ?small-screen="${!this.wide}"
          ?small="${!this.wide}"
          ?not-small="${this.wide}"
        >
          <div class="layout vertical" ?hidden="${!this.wide}">
            <yp-magic-text
              id="groupName"
              class="groupName"
              ?small-screen="${!this.wide}"
              text-type="groupName"
              .contentLanguage="${this.group.language}"
              .disableTanslation="${this.group.configuration.disableNameAutoTranslation}"
              textOnly
              .content="${this.group.name}"
              .contentId="${this.group.id}"
            >
            </yp-magic-text>
          </div>
          <div class="topHeader firstTopHeader" ?hidden="${!this.wide}">
            ${this.t("overall")}
          </div>
          <div class="layout horizontal center-center">
            <div>
              <div
                id="breakdownWrap"
                class="wrapper"
                ?small-screen="${!this.wide}"
                ?small="${!this.wide}"
              >
                <div
                  class="text"
                  ?small-screen="${!this.wide}"
                  ?small="${!this.wide}"
                >
                  ${t.overallTargetPercent}%
                </div>
                <canvas
                  id="overallTarget"
                  width="${this.canvasSize}"
                  height="${this.canvasSize}"
                ></canvas>
              </div>
              <div
                class="layout vertical targetText"
                ?small-screen="${!this.wide}"
                ?small="${!this.wide}"
              >
                ${this.t("target")}:
                ${this.formatAmount(t.overallTargetAmount)}
              </div>
            </div>
            <div>
              <div
                id="breakdownWrapTwo"
                class="wrapper"
                ?small-screen="${!this.wide}"
                ?small="${!this.wide}"
              >
                <div
                  class="text"
                  ?small-screen="${!this.wide}"
                  ?small="${!this.wide}"
                >
                  ${t.overallActualPercent}%
                </div>
                <canvas
                  id="overallActual"
                  width="${this.canvasSize}"
                  height="${this.canvasSize}"
                ></canvas>
              </div>
              <div
                class="layout vertical targetText"
                ?small-screen="${!this.wide}"
                ?small="${!this.wide}"
              >
                ${this.t("actual")}:
                ${this.formatAmount(t.overallActualAmount)}
              </div>
            </div>
          </div>
        </div>

        <div
          class="layout vertical stage shadow-elevation-2dp center-center"
          ?small-screen="${!this.wide}"
          ?small="${!this.wide}"
          ?not-small="${this.wide}"
        >
          <div class="layout vertical topHeader">${t.currentYear}</div>
          <div class="layout horizontal center-center">
            <div>
              <div
                id="breakdownWrapA"
                class="wrapper"
                ?small-screen="${!this.wide}"
                ?small="${!this.wide}"
              >
                <div
                  class="text"
                  ?small-screen="${!this.wide}"
                  ?small="${!this.wide}"
                >
                  ${t.yearTargetPercent}%
                </div>
                <canvas
                  id="yearTarget"
                  width="${this.canvasSize}"
                  height="${this.canvasSize}"
                ></canvas>
              </div>
              <div
                class="layout vertical targetText"
                ?small-screen="${!this.wide}"
                ?small="${!this.wide}"
              >
                ${this.t("target")}: ${this.formatAmount(t.yearTargetAmount)}
              </div>
            </div>
            <div>
              <div
                id="breakdownWrapTwoA"
                class="wrapper"
                ?small-screen="${!this.wide}"
                ?small="${!this.wide}"
              >
                <div
                  class="text"
                  ?small-screen="${!this.wide}"
                  ?small="${!this.wide}"
                >
                  ${t.yearActualPercent}%
                </div>
                <canvas
                  id="yearActual"
                  width="${this.canvasSize}"
                  height="${this.canvasSize}"
                ></canvas>
              </div>
              <div
                class="layout vertical targetText"
                ?small-screen="${!this.wide}"
                ?small="${!this.wide}"
              >
                ${this.t("actual")}: ${this.formatAmount(t.yearActualAmount)}
              </div>
            </div>
          </div>
        </div>
      </div>
    `}};t([i({type:Object})],R.prototype,"group",void 0),R=t([e("yp-data-visualization")],R);class O extends l{constructor(){super(...arguments),this.mini=!1,this.exited=!1,this.disabled=!1,this.extended=!1,this.showIconAtEnd=!1,this.reducedTouchTarget=!1,this.icon="",this.label="",this.shouldRenderRipple=!1,this.useStateLayerCustomProperties=!1,this.rippleHandlers=new p((()=>(this.shouldRenderRipple=!0,this.ripple)))}render(){const t=this.mini&&!this.reducedTouchTarget,i={"mdc-fab--mini":this.mini,"mdc-fab--touch":t,"mdc-fab--exited":this.exited,"mdc-fab--extended":this.extended,"icon-end":this.showIconAtEnd},e=this.label?this.label:this.icon;return a`<button
          class="mdc-fab ${h(i)}"
          ?disabled="${this.disabled}"
          aria-label="${e}"
          @mouseenter=${this.handleRippleMouseEnter}
          @mouseleave=${this.handleRippleMouseLeave}
          @focus=${this.handleRippleFocus}
          @blur=${this.handleRippleBlur}
          @mousedown=${this.handleRippleActivate}
          @touchstart=${this.handleRippleStartPress}
          @touchend=${this.handleRippleDeactivate}
          @touchcancel=${this.handleRippleDeactivate}><!--
        -->${this.renderBeforeRipple()}<!--
        -->${this.renderRipple()}<!--
        -->${this.showIconAtEnd?this.renderLabel():""}<!--
        --><span class="material-icons mdc-fab__icon"><!--
          --><slot name="icon">${this.icon}</slot><!--
       --></span><!--
        -->${this.showIconAtEnd?"":this.renderLabel()}<!--
        -->${this.renderTouchTarget()}<!--
      --></button>`}renderIcon(){return a``}renderTouchTarget(){const t=this.mini&&!this.reducedTouchTarget;return a`${t?a`<div class="mdc-fab__touch"></div>`:""}`}renderLabel(){const t=""!==this.label&&this.extended;return a`${t?a`<span class="mdc-fab__label">${this.label}</span>`:""}`}renderBeforeRipple(){return a``}renderRipple(){return this.shouldRenderRipple?a`<mwc-ripple class="ripple"
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
         ></mwc-ripple>`:""}handleRippleActivate(t){const i=()=>{window.removeEventListener("mouseup",i),this.handleRippleDeactivate()};window.addEventListener("mouseup",i),this.handleRippleStartPress(t)}handleRippleStartPress(t){this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}O.shadowRootOptions={mode:"open",delegatesFocus:!0},t([r("mwc-ripple")],O.prototype,"ripple",void 0),t([i({type:Boolean})],O.prototype,"mini",void 0),t([i({type:Boolean})],O.prototype,"exited",void 0),t([i({type:Boolean})],O.prototype,"disabled",void 0),t([i({type:Boolean})],O.prototype,"extended",void 0),t([i({type:Boolean})],O.prototype,"showIconAtEnd",void 0),t([i({type:Boolean})],O.prototype,"reducedTouchTarget",void 0),t([i()],O.prototype,"icon",void 0),t([i()],O.prototype,"label",void 0),t([d()],O.prototype,"shouldRenderRipple",void 0),t([d()],O.prototype,"useStateLayerCustomProperties",void 0),t([c({passive:!0})],O.prototype,"handleRippleStartPress",null);const D=s`:host .mdc-fab .material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{outline:none;--mdc-ripple-color: currentcolor;user-select:none;-webkit-tap-highlight-color:transparent;display:inline-flex;-webkit-tap-highlight-color:transparent;display:inline-flex;outline:none;user-select:none}:host .mdc-touch-target-wrapper{display:inline}:host .mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}:host .mdc-fab{position:relative;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host .mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}:host .mdc-fab::-moz-focus-inner{padding:0;border:0}:host .mdc-fab:hover{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab.mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(.mdc-ripple-upgraded):focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab:active,:host .mdc-fab:focus:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0,0,0,.12)}:host .mdc-fab:active,:host .mdc-fab:focus{outline:none}:host .mdc-fab:hover{cursor:pointer}:host .mdc-fab>svg{width:100%}:host .mdc-fab--mini{width:40px;height:40px}:host .mdc-fab--extended{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}:host .mdc-fab--extended .mdc-fab__ripple{border-radius:24px}:host .mdc-fab--extended .mdc-fab__icon{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] :host .mdc-fab--extended .mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] :host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}:host .mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}:host .mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}:host .mdc-fab::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}:host .mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}:host .mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}:host .mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}:host .mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}:host .mdc-fab .mdc-fab__icon{width:24px;height:24px;font-size:24px}:host .mdc-fab,:host .mdc-fab:not(:disabled) .mdc-fab__icon,:host .mdc-fab:not(:disabled) .mdc-fab__label,:host .mdc-fab:disabled .mdc-fab__icon,:host .mdc-fab:disabled .mdc-fab__label{color:#fff;color:var(--mdc-theme-on-secondary, #fff)}:host .mdc-fab:not(.mdc-fab--extended){border-radius:50%}:host .mdc-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:50%}:host .mdc-fab{position:relative;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host .mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}:host .mdc-fab::-moz-focus-inner{padding:0;border:0}:host .mdc-fab:hover{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab.mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(.mdc-ripple-upgraded):focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab:active,:host .mdc-fab:focus:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0,0,0,.12)}:host .mdc-fab:active,:host .mdc-fab:focus{outline:none}:host .mdc-fab:hover{cursor:pointer}:host .mdc-fab>svg{width:100%}:host .mdc-fab--mini{width:40px;height:40px}:host .mdc-fab--extended{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}:host .mdc-fab--extended .mdc-fab__ripple{border-radius:24px}:host .mdc-fab--extended .mdc-fab__icon{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] :host .mdc-fab--extended .mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] :host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}:host .mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}:host .mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}:host .mdc-fab::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}:host .mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}:host .mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}:host .mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}:host .mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab .ripple{overflow:hidden}:host .mdc-fab:not(.mdc-fab--extended) .ripple{border-radius:50%}:host .mdc-fab.mdc-fab--extended .ripple{border-radius:24px}:host .mdc-fab .mdc-fab__label{z-index:0}:host .mdc-fab .mdc-fab__icon ::slotted(*){width:inherit;height:inherit;font-size:inherit}:host .mdc-fab--extended.mdc-fab--exited .mdc-fab__icon ::slotted(*){transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab{padding-top:0px;padding-top:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-right:0px;padding-right:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-bottom:0px;padding-bottom:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-left:0px;padding-left:max(0px, var(--mdc-fab-focus-outline-width, 0px));box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-fab-box-shadow, 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12))}:host .mdc-fab:not(:disabled).mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(:disabled):not(.mdc-ripple-upgraded):focus{border-color:initial;border-color:var(--mdc-fab-focus-outline-color, initial)}:host .mdc-fab:not(:disabled).mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(:disabled):not(.mdc-ripple-upgraded):focus{border-style:solid;border-width:var(--mdc-fab-focus-outline-width, 0px);padding-top:0px;padding-top:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-right:0px;padding-right:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-bottom:0px;padding-bottom:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-left:0px;padding-left:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1))}:host .mdc-fab:hover,:host .mdc-fab:focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-fab-box-shadow, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}:host .mdc-fab:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-fab-box-shadow, 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12))}:host .mdc-fab .ripple{overflow:hidden}:host .mdc-fab .mdc-fab__label{z-index:0}:host .mdc-fab:not(.mdc-fab--extended) .ripple{border-radius:50%}:host .mdc-fab.mdc-fab--extended .ripple{border-radius:24px}:host .mdc-fab .mdc-fab__icon{width:24px;width:var(--mdc-icon-size, 24px);height:24px;height:var(--mdc-icon-size, 24px);font-size:24px;font-size:var(--mdc-icon-size, 24px);transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform;display:inline-flex;align-items:center;justify-content:center}:host .mdc-fab.mdc-fab--extended{padding-top:0px;padding-top:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-right:20px;padding-right:max(var(--mdc-fab-extended-label-padding, 20px), var(--mdc-fab-focus-outline-width, 0px));padding-bottom:0px;padding-bottom:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-left:20px;padding-left:max(var(--mdc-fab-extended-label-padding, 20px), var(--mdc-fab-focus-outline-width, 0px))}:host .mdc-fab.mdc-fab--extended:not(:disabled).mdc-ripple-upgraded--background-focused,:host .mdc-fab.mdc-fab--extended:not(:disabled):not(.mdc-ripple-upgraded):focus{border-style:solid;border-width:var(--mdc-fab-focus-outline-width, 0px);padding-top:0px;padding-top:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-right:20px;padding-right:max(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-bottom:0px;padding-bottom:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-left:20px;padding-left:max(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)) * -1))}:host .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon{margin-left:12px;margin-left:var(--mdc-fab-extended-icon-padding, 12px);margin-right:calc(12px - 20px);margin-right:calc(var(--mdc-fab-extended-icon-padding, 12px) - var(--mdc-fab-extended-label-padding, 20px))}[dir=rtl] :host .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon,:host .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-left:calc(var(--mdc-fab-extended-icon-padding, 12px) - var(--mdc-fab-extended-label-padding, 20px));margin-right:12px;margin-right:var(--mdc-fab-extended-icon-padding, 12px)}`;let F=class extends O{};F.styles=[D],F=t([e("mwc-fab")],F);class B{static splitByStatus(t,i){if(i&&i.sortBySortOrder)try{t=t.sort((t=>{var i;return(null===(i=null==t?void 0:t.configuration)||void 0===i?void 0:i.optionalSortOrder)||1e5}))}catch(t){console.error(t)}return{active:t.filter((t=>"active"==t.status||"hidden"==t.status)),archived:t.filter((t=>"archived"==t.status)),featured:t.filter((t=>"featured"==t.status))}}static logoImagePath(t,i){return S.getImageFormatUrl(this.logoImages(t,i),0)}static logoImages(t,i){switch(t){case"domain":return i.DomainLogoImages;case"community":return i.CommunityLogoImages;case"groupCommunityLink":return i.CommunityLink.CommunityLogoImages;case"group":case"groupDataViz":return i.GroupLogoImages}}static nameTextType(t){switch(t){case"domain":return"domainName";case"community":case"groupCommunityLink":return"communityName";case"group":case"groupDataViz":return"groupName"}}static descriptionTextType(t){switch(t){case"domain":return"domainContent";case"community":case"groupCommunityLink":return"communityContent";case"group":return"groupContent"}}}let U=class extends o{static get styles(){return[super.styles,s`
        :host {
          display: block;
          width: 100%;
        }

        .stats {
          padding-top: 8px;
          padding-bottom: 0;
          color: var(--mdc-theme-on-surface-lighter);
        }

        .stats-text {
          font-size: 18px;
          text-align: right;
          vertical-align: bottom;
          margin-right: 8px;
          color: var(--mdc-theme-on-surface-lighter);
        }

        .stats-icon {
          margin-left: 8px;
          margin-bottom: 8px;
          margin-right: 8px;
        }
      `]}render(){return this.collection?a`
          <div class="stats layout horizontal end-justified">
            <div class="layout horizontal">
              <mwc-icon title="${this.t("stats.posts")}" class="stats-icon bulb"
                >lightbulb_outline</mwc-icon
              >
              <div title="${this.t("stats.posts")}" class="stats-text">
                ${N.number(this.collection.counter_posts)}
              </div>

              ${"community"===this.collectionType?a`
                    <mwc-icon
                      title="${this.t("stats.groups")}"
                      class="stats-icon"
                      >groups</mwc-icon
                    >
                    <div title="${this.t("stats.groups")}" class="stats-text">
                      ${N.number(this.collection.counter_groups)}
                    </div>
                  `:m}
              ${"domain"===this.collectionType?a`
                    <mwc-icon
                      title="${this.t("stats.communities")}"
                      class="stats-icon"
                      >groups</mwc-icon
                    >
                    <div
                      title="${this.t("stats.communities")}"
                      class="stats-text">
                      ${N.number(this.collection.counter_communities)}
                    </div>
                  `:m}

              <mwc-icon
                title="${this.t("statsPoints")}"
                icon="people"
                class="stats-icon"
                >comment</mwc-icon
              >
              <div title="${this.t("statsPoints")}" class="stats-text">
                ${N.number(this.collection.counter_points)}
              </div>

              <mwc-icon
                title="${this.t("stats.users")}"
                icon="face"
                class="stats-icon"
                >person</mwc-icon
              >
              <div title="${this.t("stats.users")}" class="stats-text">
                ${N.number(this.collection.counter_users)}
              </div>
            </div>
          </div>
        `:m}};t([i({type:Object})],U.prototype,"collection",void 0),t([i({type:String})],U.prototype,"collectionType",void 0),U=t([e("yp-collection-stats")],U);let M=class extends o{constructor(){super(...arguments),this.hideImage=!1}get hasCollectionAccess(){switch(this.collectionType){case"domain":return u.checkDomainAccess(this.collection);case"community":return u.checkCommunityAccess(this.collection);case"group":return u.checkGroupAccess(this.collection);default:return!1}}get collectionVideos(){switch(this.collectionType){case"domain":return this.collection.DomainLogoVideos;case"community":return this.collection.CommunityLogoVideos;case"group":return this.collection.GroupLogoVideos}}get openMenuLabel(){switch(this.collectionType){case"domain":return this.t("openDomainMenu");case"community":return this.t("openCommunityMenu");case"group":return this.t("openGroupMenu");default:return"Open menu"}}get collectionHeaderImages(){switch(this.collectionType){case"domain":return this.collection.DomainHeaderImages;case"community":return this.collection.CommunityHeaderImages;case"group":return this.collection.GroupHeaderImages}}get collectionVideoURL(){if(this.collection&&this.collection.configuration&&this.collection.configuration.useVideoCover){const t=this.collectionVideos;if(t){const i=S.getVideoURL(t);return i?(this.collectionVideoId=t[0].id,i):void 0}}}get collectionVideoPosterURL(){if(this.collection&&this.collection.configuration&&this.collection.configuration.useVideoCover){const t=S.getVideoPosterURL(this.collectionVideos,B.logoImages(this.collectionType,this.collection));return t||void 0}}get collectionHeaderImagePath(){return S.getImageFormatUrl(this.collectionHeaderImages,0)}static get styles(){return[super.styles,g,s`
        .stats {
          position: absolute;
          bottom: 0;
          right: 8px;
        }

        .collection-name {
          font-size: var(--mdc-typography-headline1-font-size);
          font-weight: var(--mdc-typography-headline1-font-weight);
          background-color: var(--mdc-theme-primary);
          color: var(--mdc-theme-on-primary);
          padding: 16px;
        }

        .collection-name[widetext] {
          font-size: var(--mdc-typography-headline1-widetext-font-size, 20px);
        }

        .collection-name[largeFont] {
          font-size: var(--mdc-typography-headline1-widetext-font-size, 20px);
        }

        .large-card {
          color: var(--mdc-theme-on-surface);
          background-color: var(--mdc-theme-surface);
          height: 243px;
          width: 432px;
          padding: 0 !important;
          margin-top: 0 !important;
        }

        .image,
        video {
          width: 432px;
          height: 243px;
        }

        #menuButton {
          color: var(--mdc-theme-on-primary);
          background-color: var(--mdc-theme-primary);
          position: absolute;
          top: 0;
          right: 0;
        }

        .textBox {
          margin-left: 32px;
          position: relative;
        }

        .description {
          padding: 16px;
          vertical-align: middle;
          font-size: 15px;
        }

        .description[widetext] {
          font-size: 14px;
        }

        #welcomeHTML {
          width: 432px;
          max-width: 432px;
          overflow: hidden;
        }

        :host {
          margin-top: 32px;
          margin-bottom: 32px;
        }

        @media (max-width: 960px) {
          :host {
            max-width: 423px;
            padding: 0 !important;
            padding-top: 8px !important;
            width: 100%;
          }

          #welcomeHTML {
            width: 306px;
            max-width: 306px;
          }

          .large-card {
            width: 100%;
            height: 100%;
            margin-left: 8px;
            margin-right: 8px;
            margin-top: 8px !important;
          }

          .top-card {
            margin-bottom: 16px;
          }

          yp-image,
          video,
          .image {
            width: 100%;
            height: 230px;
          }

          .imageCard {
            height: 230px;
          }

          .imageCard[is-video] {
            background-color: transparent;
          }

          .collection-name {
            font-size: 22px;
            padding-bottom: 9px;
            min-height: 28px;
          }

          .description {
            padding-bottom: 42px;
          }

          .textBox {
            margin-left: 8px;
          }
        }

        @media (max-width: 375px) {
          yp-image,
          video,
          .image {
            height: 225px;
          }

          .imageCard {
            height: 225px;
          }
        }

        @media (max-width: 375px) {
          yp-image,
          video,
          .image {
            height: 207px;
          }

          .imageCard {
            height: 205px;
          }
        }

        @media (max-width: 360px) {
          yp-image,
          video,
          .image {
            height: 200px;
          }

          .imageCard {
            height: 200px;
          }
        }

        @media (max-width: 320px) {
          yp-image,
          video,
          .image {
            height: 180px;
          }

          .imageCard {
            height: 180px;
          }
        }

        [hidden] {
          display: none !important;
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      `]}renderStats(){switch(this.collectionType){case"domain":case"community":case"group":return a``;default:return m}}renderFirstBoxContent(){var t,i;return(null===(i=null===(t=this.collection)||void 0===t?void 0:t.configuration)||void 0===i?void 0:i.welcomeHTML)?a`<div id="welcomeHTML">
        ${y(this.collection.configuration.welcomeHTML)}
      </div>`:this.collectionVideoURL?a`
        <video
          id="videoPlayer"
          data-id="${v(this.collectionVideoId)}"
          controls
          preload="metadata"
          class="image"
          src="${this.collectionVideoURL}"
          playsinline
          poster="${v(this.collectionVideoPosterURL)}"
        ></video>
      `:this.collection?a`
        <yp-image
          class="image"
          ?hidden="${this.hideImage}"
          .alt="${this.collection.name}"
          sizing="cover"
          .src="${B.logoImagePath(this.collectionType,this.collection)}"
        ></yp-image>
      `:m}_openMenu(){this.$$("#menu").open=!0,this.requestUpdate()}renderMenu(){return a`
      <div>
        <mwc-icon-button
          id="menuButton"
          icon="more_vert"
          @click="${this._openMenu}"
          title="${this.openMenuLabel}"
        >
        </mwc-icon-button>
        <mwc-menu id="adminMenu" @changed="${this._menuSelection}">
          <mwc-list-item id="openAdminApp"
            >${this.t("openAdministration")}</mwc-list-item
          >
          <mwc-list-item id="openAnalyticsApp"
            >${this.t("openAnalyticsApp")}</mwc-list-item
          >
        </mwc-menu>
      </div>
    `}renderFooter(){return a`
      <div class="stats layout horizontal">
        <yp-collection-stats
          .collectionType="${this.collectionType}"
          .collection="${this.collection}"
        ></yp-collection-stats>
      </div>
    `}render(){var t;return a`
      ${this.collection?a`
            <div class="layout horizontal wrap">
              <div
                is-video="${v(this.collectionVideoURL)}"
                id="cardImage"
                class="large-card imageCard top-card shadow-elevation-8dp shadow-transition"
              >
                ${this.renderFirstBoxContent()}
              </div>
              <div
                id="card"
                class="large-card textBox shadow-elevation-8dp shadow-transition layout horizontal"
              >
                <div class="layout vertical">
                  <div class="descriptionContainer">
                    <div>
                      <yp-magic-text
                        class="collection-name"
                        role="heading"
                        aria-level="1"
                        ?largeFont="${this.largeFont}"
                        aria-label="${this.collection.name}"
                        .textType="${B.nameTextType(this.collectionType)}"
                        .contentLanguage="${this.collection.language}"
                        ?disableTranslation="${null===(t=this.collection.configuration)||void 0===t?void 0:t.disableNameAutoTranslation}"
                        textOnly
                        .content="${this.collection.name}"
                        .contentId="${this.collection.id}"
                      >
                      </yp-magic-text>
                      <yp-magic-text
                        id="description"
                        class="description collectionDescription"
                        .textType="${B.descriptionTextType(this.collectionType)}"
                        ?largeFont="${this.largeFont}"
                        .contentLanguage="${this.collection.language}"
                        truncate="150"
                        .content="${this.collection.description||this.collection.objectives}"
                        .contentId="${this.collection.id}"
                      >
                      </yp-magic-text>
                    </div>
                  </div>

                  ${this.hasCollectionAccess?this.renderMenu():m}
                  ${this.renderFooter()}
                </div>
              </div>
            </div>
          `:a``}
    `}connectedCallback(){super.connectedCallback(),this.addGlobalListener("yp-got-admin-rights",this.requestUpdate.bind(this)),this.addGlobalListener("yp-pause-media-playback",this._pauseMediaPlayback.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.removeGlobalListener("yp-got-admin-rights",this.requestUpdate),this.removeGlobalListener("yp-pause-media-playback",this._pauseMediaPlayback),S.detachMediaListeners(this)}firstUpdated(t){super.firstUpdated(t),S.attachMediaListeners(this)}updated(t){super.updated(t),t.has("collection")&&S.detachMediaListeners(this),this.collection&&S.attachMediaListeners(this)}_pauseMediaPlayback(){S.pauseMediaPlayback(this)}_menuSelection(t){this.collection&&("editMenuItem"===t.detail.item.id?window.location.href=`/admin/${this.collectionType}/${this.collection.id}`:"openAnalyticsApp"===t.detail.item.id&&(window.location.href=`/analytics/${this.collectionType}/${this.collection.id}`),this.$$("#adminMenu").select(-1))}};t([i({type:Object})],M.prototype,"collection",void 0),t([i({type:String})],M.prototype,"collectionType",void 0),t([i({type:Boolean})],M.prototype,"hideImage",void 0),t([i({type:Number})],M.prototype,"flaggedContentCount",void 0),t([i({type:Number})],M.prototype,"collectionVideoId",void 0),t([i({type:String})],M.prototype,"welcomeHTML",void 0),M=t([e("yp-collection-header")],M);class V{static attachListeners(t){t.resetListSize=()=>{const i=t.$$("#ironList");if(i){let e=window.innerWidth;i&&(t.wide||(e-=16),t.skipIronListWidth?console.log("Skipping setting iron-list width"):i.style.width=e+"px",i.updateViewportBoundaries(),setTimeout((()=>{i.notifyResize()})))}else console.warn("Can't find list to setup for size resize")},window.addEventListener("resize",t.resetListSize),t.resetListSize(new CustomEvent("resize"))}static detachListeners(t){t.resetListSize&&window.removeEventListener("resize",t.resetListSize)}}let H=class extends o{static get styles(){return[super.styles,g,s`
        .description {
          line-height: var(--description-line-height, 1.3);
          font-size: 15px;
          padding: 8px;
          padding: 16px;
          font-family: var(--app-header-font-family, Roboto);
        }

        .description[widetext] {
          font-size: 14px;
        }

        .description[largefont] {
          font-size: 16px;
        }

        .stats {
          position: absolute;
          bottom: 0;
          right: 38px;
        }

        .post-image {
          width: 100%;
        }

        .collectionCard {
          width: 860px;
          background-color: var(--mdc-theme-surface);
          color: var(--mdc-theme-on-surface);
          margin: 0;
          position: relative;
        }

        .collectionCard[featured] {
        }

        yp-image {
          width: 320px !important;
          height: 180px !important;
        }

        yp-image[featured] {
        }

        .card-content {
          padding: 0;
          padding-bottom: 48px;
        }

        yp-image {
          padding: 0;
          margin: 0;
        }

        yp-image {
          padding: 0;
          margin: 0;
        }

        .collectionCard {
          vertical-align: text-top;
        }

        .informationText {
          vertical-align: text-top;
        }

        .collection-name {
          font-size: var(--mdc-typography-headline2-font-size);
          font-weight: var(--mdc-typography-headline2-font-weight);
          cursor: pointer;
          padding: 16px;
          padding-bottom: 0;
          vertical-align: middle;
          width: auto;
          font-family: var(--app-header-font-family, Roboto);
        }

        .collection-name[widetext] {
          font-size: 18px;
        }

        .collection-name[largefont] {
          font-size: 20px;
        }

        yp-image[archived] {
        }

        yp-membership-button {
          position: absolute;
          top: 159px;
          right: 24px;
          width: 30px;
          height: 30px;
          color: var(--icon-general-color, #fff);
        }

        .edit {
          color: #888;
          position: absolute;
          bottom: 0;
          right: 0;
          padding-right: 0;
          margin-right: 0;
          text-align: right;
        }

        .collection-name[featured] {
          background-color: var(--accent-color);
        }

        .collection-name[archived] {
          background-color: #aaa;
        }

        .collection-name[has-data-viz] {
          padding-top: 26px;
        }

        yp-membership-button[archived] {
          display: none;
        }

        .collectionNameFontSize4Wide {
          font-size: 30px;
        }

        .collectionNameFontSize3Wide {
          font-size: 26px;
        }

        .collectionNameFontSize2Wide {
          font-size: 24px;
        }

        .collectionNameFontSize1Wide {
          font-size: 22px;
        }

        .collectionNameFontSize4Mobile {
          font-size: 28px;
        }

        .collectionNameFontSize3Mobile {
          font-size: 24px;
        }

        .collectionNameFontSize2Mobile {
          font-size: 22px;
        }

        .collectionNameFontSize1Mobile {
          font-size: 19px;
        }

        .collectionNameFontSize4Wide[widetext] {
          font-size: 26px;
        }

        .collectionNameFontSize3Wide[widetext] {
          font-size: 22px;
        }

        .collectionNameFontSize2Wide[widetext] {
          font-size: 20px;
        }

        .collectionNameFontSize1Wide[widetext] {
          font-size: 18px;
        }

        .collectionNameFontSize4Mobile[widetext] {
          font-size: 26px;
        }

        .collectionNameFontSize3Mobile[widetext] {
          font-size: 22px;
        }

        .collectionNameFontSize2Mobile[widetext] {
          font-size: 20px;
        }

        .collectionNameFontSize1Mobile[widetext] {
          font-size: 18px;
        }

        @media (max-width: 960px) {
          :host {
            max-width: 423px;
            width: 100%;
            padding-top: 0 !important;
          }

          yp-membership-button {
            top: 205px;
          }

          .collectionCard {
            margin-left: 0;
            margin-right: 0;
            padding-left: 0;
            padding-right: 0;
            width: 100%;
            height: 100%;
            padding-bottom: 8px;
          }

          yp-image {
            width: 100%;
            height: 230px;
          }

          yp-image[featured] {
          }

          .description {
            margin-bottom: 32px;
          }
        }

        @media (max-width: 420px) {
          yp-image {
            height: 225px;
          }

          yp-membership-button {
            top: 205px;
          }
        }

        @media (max-width: 375px) {
          yp-image {
            height: 207px;
          }

          yp-membership-button {
            top: 185px;
          }
        }

        @media (max-width: 360px) {
          yp-image {
            height: 200px;
          }
        }

        @media (max-width: 320px) {
          yp-image {
            height: 180px;
          }

          yp-membership-button {
            top: 155px;
          }
        }

        .withPointer {
          cursor: pointer;
        }

        [hidden] {
          display: none !important;
        }

        a {
          text-decoration: none;
        }
      `]}get archived(){var t;return"archived"===(null===(t=this.item)||void 0===t?void 0:t.status)}get featured(){var t;return"featured"===(null===(t=this.item)||void 0===t?void 0:t.status)}connectedCallback(){if(super.connectedCallback(),this.item&&this.item.Community){this.collection=this.item.Community;const t=this.collection;t.CommunityLink?this.itemType="groupCommunityLink":t.configuration.dataForVisualizationJson?this.itemType="groupDataViz":this.itemType="group"}else this.item&&this.item.Domain&&(this.collection=this.item.Domain,this.itemType="community")}goToItem(t){if(t.preventDefault(),t.currentTarget&&t.currentTarget){const i=t.currentTarget.getAttribute("href");i&&b.redirectTo(i)}}_setupFontNameFontSize(){const t=this.$$("#collectionName");if(t&&this.collection){let i="collection-name ";this.wide?this.collection.name.length<=18?i+="collectionNameFontSize4Wide":this.collection.name.length>40?i+="collectionNameFontSize1Wide":this.collection.name.length>30?i+="collectionNameFontSize2Wide":this.collection.name.length>18&&(i+="collectionNameFontSize3Wide"):this.collection.name.length<=18?i+="collectionNameFontSize4Mobile":this.collection.name.length>40?i+="collectionNameFontSize1Mobile":this.collection.name.length>30?i+="collectionNameFontSize2Mobile":this.collection.name.length>18&&(i+="collectionNameFontSize3Mobile"),t.className=i}}updated(t){super.updated(t),t.has("collection")&&this.collection&&this._setupFontNameFontSize()}renderLogoImage(){return a`
      ${B.logoImagePath(this.itemType,this.item)?a`
            <yp-image
              sizing="cover"
              ?archived="${this.archived}"
              alt="${this.collection.name}"
              ?featured="${this.featured}"
              preload
              .src="${B.logoImagePath(this.itemType,this.item)}"
              class="post-image withPointer"
            ></yp-image>
          `:a`
            <yp-image
              ?archived="${this.archived}"
              sizing="cover"
              class="main-image withPointer"
              src="https://i.imgur.com/sdsFAoT.png"
            ></yp-image>
          `}
    `}renderDataViz(){return a`
      <yp-data-visualization
        small
        .data="${this.item.configuration.dataForVisualizationJson}"
      ></yp-data-visualization>
    `}renderCardInfo(){var t;return a`
      <div class="layout horizontal">
        ${"groupDataViz"===this.itemType?a` ${this.renderDataViz()} `:a` ${this.renderLogoImage()} `}
      </div>
      <div class="informationText">
        <yp-magic-text
          id="collectionName"
          class="collection-name"
          ?archived="${this.archived}"
          ?featured="${this.featured}"
          ?largefont="${this.largeFont}"
          @click="${this.goToItem}"
          .textType="${B.nameTextType(this.itemType)}"
          .contentLanguage="${this.contentLanguage}"
          ?disableTranslation="${null===(t=this.collection.configuration)||void 0===t?void 0:t.disableNameAutoTranslation}"
          text-only
          .content="${this.contentName}"
          .contentId="${this.contentId}"
        ></yp-magic-text>
        <yp-magic-text
          id="description"
          class="description layout vertical withPointer"
          ?featured="${this.featured}"
          ?largefont="${this.largeFont}"
          textType="collectionContent"
          .textType="${B.descriptionTextType(this.itemType)}"
          .contentLanguage="${this.contentLanguage}"
          textOnly
          removeUrls
          .content="${this.contentDescription}"
          .contentId="${this.contentId}"
          truncate="300"
        >
        </yp-magic-text>
      </div>

      <div class="stats layout horizontal">
        <yp-collection-stats
          .collectionType="${this.statsCollectionType}"
          .collection="${this.statsCollection}"
        ></yp-collection-stats>
      </div>

      ${this.collection?a``:a`
            <yp-membership-button
              .archived="${this.archived}"
              .featured="${this.featured}"
              .collection="${this.collection}"
            ></yp-membership-button>
          `}
    `}get statsCollection(){return"groupCommunityLink"===this.itemType?this.item.CommunityLink:this.item}get statsCollectionType(){return"groupCommunityLink"===this.itemType?"communtiy":"groupDataViz"===this.itemType?"group":this.itemType}get contentDescription(){return"groupCommunityLink"===this.itemType?this.item.CommunityLink.description:this.item.description||this.item.objectives}get contentName(){return"groupCommunityLink"===this.itemType?this.item.CommunityLink.name:this.item.name}get contentId(){return"groupCommunityLink"===this.itemType?this.item.CommunityLink.id:this.item.id}get contentLanguage(){return"groupCommunityLink"===this.itemType?this.item.CommunityLink.language:this.item.language}get contentUrlBase(){return"groupCommunityLink"===this.itemType?"community":"groupDataViz"===this.itemType?"group_data_viz":this.itemType}render(){return this.item&&this.collection?a`
          <a
            href="/${this.contentUrlBase}/${this.contentId}"
            @click="${this.goToItem}"
            class="layout vertical center-center"
          >
            <div
              ?featured="${this.featured}"
              class="collectionCard shadow-elevation-4dp shadow-transaction layout horizontal"
            >
              ${this.renderCardInfo()}
            </div>
          </a>
        `:m}};t([i({type:Object})],H.prototype,"item",void 0),t([i({type:String})],H.prototype,"itemType",void 0),t([i({type:Object})],H.prototype,"collection",void 0),H=t([e("yp-collection-item-card")],H);let j=class extends o{constructor(){super(...arguments),this.grid=!1,this.skipIronListWidth=!1}static get styles(){return[super.styles,g,s`
        .card {
          padding: 0;
          padding-top: 24px;
          width: 100%;
        }

        .card[wide-padding] {
          padding: 16px !important;
        }

        a {
          text-decoration: none;
          width: 100%;
        }
      `]}render(){return this.sortedCollectionItems?a`
          <lit-virtualizer
            id="list"
            role="main"
            .layout="${this.grid?G:E}"
            aria-label="${this.t(this.pluralItemType)}"
            .items="${this.sortedCollectionItems}"
            .scrollTarget="${window}"
            .keyFunction="${t=>t.id}"
            .renderItem="${this.renderItem.bind(this)}"></lit-virtualizer>
        `:m}renderItem(t,i){return a` <yp-collection-item-card
      class="card"
      aria-label="${t.name}"
      ariarole="listitem"
      .item="${t}"
      @keypress="${this._keypress.bind(this)}"
      @click="${this._selectedItemChanged.bind(this)}"></yp-collection-item-card>`}get pluralItemType(){return"community"==this.collectionItemType?"communities":"group"==this.collectionItemType?"groups":"post"==this.collectionItemType?"posts":"unknownItemType"}_keypress(t){13==t.keyCode&&this._selectedItemChanged(t)}async refresh(){}firstUpdated(t){super.firstUpdated(t),V.attachListeners(this)}async connectedCallback(){if(super.connectedCallback(),this.collection&&this.collectionItems){const t=B.splitByStatus(this.collectionItems,this.collection.configuration);this.sortedCollectionItems=t.featured.concat(t.active.concat(t.archived))}}disconnectedCallback(){super.disconnectedCallback(),V.detachListeners(this)}_selectedItemChanged(t){const i=t.target.item;if(this.collectionItemType&&i)if(window.appGlobals.activity("open",this.collectionItemType,`/${this.collectionItemType}/${i.id}`,{id:i.id}),"community"===this.collectionItemType){const t=i;null!=t&&(window.appGlobals.cache.backToDomainCommunityItems[t.domain_id]=t)}else if("group"===this.collectionItemType&&i){const t=i;window.appGlobals.cache.backToCommunityGroupItems[t.community_id]=t,window.appGlobals.cache.groupItemsCache[t.id]=t}}scrollToItem(t){if(t&&this.sortedCollectionItems){for(let i=0;i<this.sortedCollectionItems.length;i++)if(this.sortedCollectionItems[i]==t){this.$$("#list").scrollToIndex(i);break}this.fireGlobal("yp-refresh-activities-scroll-threshold")}else console.error("No item to scroll too")}};t([i({type:Object})],j.prototype,"collection",void 0),t([i({type:Array})],j.prototype,"collectionItems",void 0),t([i({type:String})],j.prototype,"collectionItemType",void 0),t([i({type:Array})],j.prototype,"sortedCollectionItems",void 0),t([i({type:Boolean,reflect:!0})],j.prototype,"grid",void 0),j=t([e("yp-collection-items-grid")],j);let q=class extends o{static get styles(){return[super.styles,s`
        yp-image {
          width: 550px;
          height: 309px;
        }

        @media (max-width: 600px) {
          yp-image {
            width: 90vw !important;
            height: 51vw !important;
          }
        }

        #embedHtml {
          width: 100%;
          height: 100%;
          border: 1px solid;
          border-color: #999;
          padding: 16px;
        }

        a {
          color: #333;
          text-decoration: none;
        }

        .title {
        }

        .description {
          padding-bottom: 20px;
        }

        .container {
          border-bottom: solid #ddd;
          border-bottom-width: 1px;
          margin-top: 8px;
        }

        [hidden] {
          display: none !important;
        }
      `]}render(){return this.embedData?a`
          <div>
            <div class="layout vertical embedContainer">
              <a href="${this.embedData.url}" class="container" target="_blank">
                <div class="layout vertical center-center">
                  <yp-image
                    sizing="contain"
                    src="${this.embedData.thumbnail_url}"
                    ?hidden="${null!=this.embedData.html}"></yp-image>
                  <div id="embedHtml" ?hidden="${!this.embedData.html}">
                    <div .inner-h-t-m-l="${this.embedData}"></div>
                  </div>
                </div>
                <div class="layout vertical">
                  <div class="title">
                    <h2>${this.embedData.title}</h2>
                  </div>
                  <div class="description">
                    ${this.embedData.description}
                  </div>
                </div>
              </a>
            </div>
          </div>
        `:m}};t([i({type:Object})],q.prototype,"embedData",void 0),q=t([e("yp-point-news-story-embed")],q);let Q=class extends x{constructor(){super(...arguments),this.loadingUrlPreview=!0,this.loadingPostStory=!0}static get styles(){return[super.styles,s`
        :host {
          padding-top: 16px;
        }

        mwc-textarea {
          width: 460px;
          margin-top: -8px;
        }

        mwc-button {
          margin-top: 16px;
          background-color: var(--accent-color);
          color: #fff;
        }

        .embedData {
          padding-top: 24px;
        }

        .userImage {
          padding-bottom: 16px;
          padding-right: 16px;
        }

        .userImage[rtl] {
          padding-left: 16px;
          padding-right: 4px;
        }

        mwc-icon-button {
          margin-top: 16px;
          padding-bottom: 0;
        }

        mwc-icon-button::shadow #icon {
          width: 36px;
          height: 36px;
          color: #777;
        }

        .container {
          margin-bottom: 32px;
        }

        @media (max-width: 420px) {
          mwc-textarea {
            width: 270px;
          }

          .embedData {
            max-width: 270px;
            margin-left: 24px;
          }

          :host {
            margin-top: 16px;
          }
        }

        @media (max-width: 320px) {
          mwc-textarea {
            width: 220px;
          }

          .embedData {
            max-width: 220px;
          }
        }
      `]}render(){return this.point?a`
          <div class="layout vertical container">
            <div class="layout horizontal">
              <yp-user-image
                class="userImage"
                .user="${this.loggedInUser}"
                ?rtl="${this.rtl}"></yp-user-image>
              <div class="layout vertical">
                <mwc-textarea
                  id="pointNewsStory"
                  minlength="15"
                  name="pointNewsStory"
                  .value="${this.point.content}"
                  .label="${this.t("point.addNewsStory")}"
                  charCounter
                  rows="2"
                  maxrows="5"
                  @keydown="${this._keyDown}"
                  maxlength="500">
                </mwc-textarea>
                <div class="layout horizontal end-justified">
                  <mwc-button
                    id="storySubmitButton"
                    raised
                    @click="${this._sendStory}"
                    .label="${this.t("point.postNewsStory")}"></mwc-button>
                </div>
              </div>
            </div>

            <div class="layout horizontal center-center">
              ${this.point.embed_data?a`
                    <div class="embedData layout vertical center-center">
                      <yp-point-news-story-embed
                        .embedData="${this.point.embed_data}"></yp-point-news-story-embed>
                      <mwc-icon-button
                        .label="${this.t("clearEmbededMedia")}"
                        icon="clear"
                        @click="${this._clearEmbed}"></mwc-icon-button>
                    </div>
                  `:a``}
            </div>
          </div>
        `:m}_clearButtonStat(){this.$$("#storySubmitButton").disabled=!1}connectedCallback(){super.connectedCallback(),this._reset()}firstUpdated(t){super.firstUpdated(t),this.$$("#pointNewsStory").addEventListener("paste",this._checkForUrl.bind(this))}get newPointContent(){return this.$$("#pointNewsStory").value}disconnectedCallback(){super.disconnectedCallback(),this.$$("#pointNewsStory").removeEventListener("paste",this._checkForUrl.bind(this))}_reset(){this.point={content:""},this.point.embed_data=void 0,this.$$("#pointNewsStory")&&(this.$$("#pointNewsStory").value=""),this._clearButtonState()}async _sendStory(){this.$$("#storySubmitButton").disabled=!0,this.point.content=this.newPointContent;let t,i={point:this.point};this.point&&this.point.content&&this.point.content.length>2?(this.postId&&this.postGroupId?(i={...i,post_id:this.postId},t="/api/groups/"+this.postGroupId+"/post/news_story"):this.groupId?(i={...i,group_id:this.groupId},t="/api/groups/"+this.groupId+"/news_story"):this.communityId?(i={...i,community_id:this.communityId},t="/api/communities/"+this.communityId+"/news_story"):this.domainId?(t="/api/domains/"+this.domainId+"/news_story",i={...i,domain_id:this.domainId}):console.error("Can't find send ids"),t&&(await window.serverApi.postNewsStory(t,i),this.fire("refresh"),this._reset())):(this._clearButtonState(),this.fire("yp-error",this.t("point.commentToShort")))}_clearButtonState(){this.$$("#storySubmitButton")&&(this.$$("#storySubmitButton").disabled=!1)}_keyDown(t){"Space"!=t.code&&"enter"!=t.code||this._checkForUrl()}_clearEmbed(){this.point.embed_data=void 0,this.requestUpdate()}async _checkForUrl(){if(this.point&&!this.point.embed_data){const t=/((?:(http|https|Http|Https|rtsp|Rtsp):\/\/(?:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,64}(?:\:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,25})?\@)?)?((?:(?:[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}\.)+(?:(?:aero|arpa|asia|a[cdefgilmnoqrstuwxz])|(?:biz|b[abdefghijmnorstvwyz])|(?:cat|com|coop|c[acdfghiklmnoruvxyz])|d[ejkmoz]|(?:edu|e[cegrstu])|f[ijkmor]|(?:gov|g[abdefghilmnpqrstuwy])|h[kmnrtu]|(?:info|int|i[delmnoqrst])|(?:jobs|j[emop])|k[eghimnrwyz]|l[abcikrstuvy]|(?:mil|mobi|museum|m[acdghklmnopqrstuvwxyz])|(?:name|net|n[acefgilopruz])|(?:org|om)|(?:pro|p[aefghklmnrstwy])|qa|r[eouw]|s[abcdeghijklmnortuvyz]|(?:tel|travel|t[cdfghjklmnoprtvwz])|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw]))|(?:(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9])\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[0-9])))(?:\:\d{1,5})?)(\/(?:(?:[a-zA-Z0-9\;\/\?\:\@\&\=\#\~\-\.\+\!\*\'\(\)\,\_])|(?:\%[a-fA-F0-9]{2}))*)?(?:\b|$)/gi.exec(this.newPointContent);if(t&&t.length>0){const i=await window.serverApi.pointUrlPreview(`url=${t[0]}`);i&&i.length>0&&(this.point.embed_data=i[0],this.requestUpdate())}}}};t([i({type:Boolean})],Q.prototype,"loadingUrlPreview",void 0),t([i({type:Boolean})],Q.prototype,"loadingPostStory",void 0),t([i({type:Object})],Q.prototype,"point",void 0),t([i({type:Number})],Q.prototype,"postId",void 0),t([i({type:Number})],Q.prototype,"postGroupId",void 0),t([i({type:Number})],Q.prototype,"groupId",void 0),t([i({type:Number})],Q.prototype,"communityId",void 0),t([i({type:Number})],Q.prototype,"domainId",void 0),Q=t([e("yp-point-news-story-edit")],Q);const W=(t,i)=>{let e="";const o=t.className.split(" ");for(let t=0;t<o.length;t++)o[t]!==i&&(e+=o[t]+" ");t.className=e};let J=class extends o{constructor(){super(...arguments),this.hideNotHelpful=!1,this.isUpVoted=!1,this.allDisabled=!1,this.hideSharing=!1}static get styles(){return[super.styles,s`
        :host {
          min-width: 125px;
        }

        .action-text {
          font-size: 12px;
          padding-top: 12px;
        }

        .action-up {
        }

        .action-down {
        }

        .up-selected {
          color: #444;
        }

        .down-selected {
          color: #444;
        }

        .middle {
        }

        .all-actions {
          color: #aaa;
          padding-right: 8px;
        }

        yp-ajax {
          min-width: 32px;
        }

        .myButton {
          --mwc-icon-button {
            width: 10px;
            height: 10px;
          }
        }

        .shareIcon {
          text-align: right;
        }

        .shareIcon[up-voted] {
        }

        [hidden] {
          display: none !important;
        }
      `]}render(){return this.point?a`
          <div
            class="all-actions layout horizontal flex start-justified"
            ?hidden="${this.hideNotHelpful}">
            <div id="actionUp" class="actionUp layout horizontal">
              <mwc-icon-button
                .label="${this.t("point.helpful")}"
                ?disabled="${this.allDisabled}"
                icon="arrow_upward"
                class="point-up-vote-icon myButton"
                @click="${this.pointHelpful}"></mwc-icon-button>
              <div class="action-text action-up layouthorizontal ">
                ${this.point.counter_quality_up}
              </div>
            </div>
            <div id="actionDown" class="actionDown layout horizontal">
              <mwc-icon-button
                .label="${this.t("point.not_helpful")}"
                ?disabled="${this.allDisabled}"
                icon="arrow_downward"
                class="point-down-vote-icon myButton"
                @click="${this.pointNotHelpful}"></mwc-icon-button>
              <div class="action-text">${this.point.counter_quality_down}</div>
            </div>
            <mwc-icon-button
              icon="share"
              ?hidden="${this.masterHideSharing}"
              class="shareIcon"
              .label="${this.t("sharePoint")}"
              up-voted="${this.isUpVoted}"
              @click="${this._shareTap}"></mwc-icon-button>
          </div>
        `:m}connectedCallback(){super.connectedCallback(),this.addGlobalListener("yp-got-endorsements-and-qualities",this._updateQualitiesFromSignal.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.removeGlobalListener("yp-got-endorsements-and-qualities",this._updateQualitiesFromSignal.bind(this))}get masterHideSharing(){return this.hideSharing||this.configuration&&this.configuration.hideSharing}_sharedContent(t){const i=t.detail;window.appGlobals.activity("pointShared",i.social,this.point?this.point.id:-1)}_shareTap(t){const i=t.detail;window.appGlobals.activity("pointShareHeaderOpen",i.brand,this.point?this.point.id:-1),window.appDialogs.getDialogAsync("shareDialog",(t=>{t.open(this.pointUrl||"",this.t("sharePoint"),this._sharedContent)}))}_onPointChanged(){this.point?this._updateQualities():this.isUpVoted=!1}_updateQualitiesFromSignal(){this._updateQualities()}_updateQualities(){if(this.point&&window.appUser&&window.appUser.loggedIn()&&window.appUser.user&&window.appUser.user.PointQualities){const t=window.appUser.pointQualitiesIndex[this.point.id];t?(this._setPointQuality(t.value),t.value>0&&(this.isUpVoted=!0)):(this.isUpVoted=!1,this._setPointQuality(void 0))}else this.isUpVoted=!1,this._setPointQuality(void 0)}_qualityChanged(){}_resetClasses(){this.pointQualityValue&&this.pointQualityValue>0?(this.$$("#actionUp").className+=" up-selected",W(this.$$("#actionDown"),"down-selected")):this.pointQualityValue&&this.pointQualityValue<0?(this.$$("#actionDown").className+=" down-selected",W(this.$$("#actionUp"),"up-selected")):(W(this.$$("#actionUp"),"up-selected"),W(this.$$("#actionDown"),"down-selected"))}_setPointQuality(t){this.pointQualityValue=t,this._resetClasses()}async generatePointQuality(t){if(this.point&&!0===window.appUser.loggedIn()){let i;i=this.pointQualityValue===t?"DELETE":"POST";const e=await window.serverApi.setPointQuality(this.point.id,i,{point_id:this.point.id,value:t});this._pointQualityResponse(e)}else this.allDisabled=!1,window.appUser.loginForPointQuality(this,{value:t})}_pointQualityResponse(t){this.allDisabled=!1;const i=t.pointQuality,e=t.oldPointQualityValue;this._setPointQuality(i.value),window.appUser.updatePointQualityForPost(this.point.id,i),e&&(e>0?this.point.counter_quality_up=this.point.counter_quality_up-1:e<0&&(this.point.counter_quality_down=this.point.counter_quality_down-1)),i.value>0?this.point.counter_quality_up=this.point.counter_quality_up+1:i.value<0&&(this.point.counter_quality_down=this.point.counter_quality_down+1),this.requestUpdate()}generatePointQualityFromLogin(t){this.point&&!window.appUser.pointQualitiesIndex[this.point.id]&&this.generatePointQuality(t)}pointHelpful(){this.allDisabled=!0,this.generatePointQuality(1),this.isUpVoted=!0,this.requestUpdate,window.appGlobals.activity("clicked","pointHelpful",this.point.id)}pointNotHelpful(){this.allDisabled=!0,window.appGlobals.activity("clicked","pointNotHelpful",this.point.id),this.generatePointQuality(-1),this.requestUpdate}};t([i({type:Object})],J.prototype,"point",void 0),t([i({type:Boolean})],J.prototype,"hideNotHelpful",void 0),t([i({type:Boolean})],J.prototype,"isUpVoted",void 0),t([i({type:Boolean})],J.prototype,"allDisabled",void 0),t([i({type:Boolean})],J.prototype,"hideSharing",void 0),t([i({type:Object})],J.prototype,"configuration",void 0),t([i({type:Number})],J.prototype,"pointQualityValue",void 0),t([i({type:String})],J.prototype,"pointUrl",void 0),J=t([e("yp-point-actions")],J);let Z=class extends o{constructor(){super(...arguments),this.linkPoint=!1,this.openTranscript=!0,this.hideUser=!1,this.hideActions=!1,this.isEditing=!1,this.isAdminCommentEditing=!1,this.hasAdminComments=!1,this.maxNumberOfPointsBeforeEditFrozen=5,this.videoActive=!1,this.audioActive=!1,this.checkingTranscript=!1,this.portraitVideo=!1,this.checkTranscriptError=!1}connectedCallback(){super.connectedCallback(),this.addGlobalListener("yp-got-admin-rights",this.requestUpdate.bind(this)),this.addGlobalListener("yp-logged-in",this.requestUpdate.bind(this)),this.addGlobalListener("yp-pause-media-playback",this._pauseMediaPlayback.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.removeGlobalListener("yp-got-admin-rights",this.requestUpdate.bind(this)),this.removeGlobalListener("yp-logged-in",this.requestUpdate.bind(this)),this.removeGlobalListener("yp-pause-media-playback",this._pauseMediaPlayback),S.detachMediaListeners(this)}updated(t){super.updated(t),t.has("point")&&this._pointChanged(),t.has("isAdminCommentEditing")&&this._isAdminCommentEditingChanged(),t.has("isEditing")&&this._isEditingChanged()}static get styles(){return[super.styles,s`
        :host {
          display: block;
        }

        .point-content {
          padding-right: 16px;
          padding-left: 16px;
          margin-top: 16px;
        }

        #pointContentTranscript,
        #pointContent {
          cursor: default;
        }

        #pointContentTranscript,
        #pointContent[link-point] {
          cursor: pointer;
        }

        @media (max-width: 320px) {
          .user-image {
            display: none;
          }
        }

        .userInfoContainer {
          border-bottom: solid 4px;
          width: 100%;
          padding-bottom: 16px;
        }

        .userInfoContainer[up-vote] {
          border-bottom-color: var(--master-point-up-color);
        }

        .userInfoContainer[down-vote] {
          border-bottom-color: var(--master-point-down-color);
        }

        mwc-icon-button {
          color: #ccc;
        }

        #reportPointIconButton {
          color: #ddd;
          width: 36px;
          height: 36px;
        }

        .thumbsIcon {
          padding-left: 16px;
          padding-right: 16px;
        }

        @media (min-width: 985px) {
          .thumbsIcon {
            display: none;
          }
        }

        mwc-icon.thumbsIconUp {
          color: var(--master-point-up-color);
        }

        mwc-icon.thumbsIconDown {
          color: var(--master-point-down-color);
        }

        yp-user-with-organization {
          padding-left: 16px;
        }

        .actionContainer {
          margin-top: 8px;
        }

        [hidden] {
          display: none !important;
        }

        .pointer {
          cursor: pointer;
        }

        yp-image,
        video {
          width: 398px;
          height: 224px;
          margin: 0;
          padding: 0;
        }

        @media (max-width: 600px) {
          yp-image,
          video {
            width: 100%;
            margin: 0 !important;
            padding: 0;
            height: initial;
            vertical-align: top;
          }

          .actionContainer {
            margin-left: 12px;
          }

          #videoPlayer[portrait] {
            width: 50% !important;
          }
        }

        .topContainer[portrait] {
          background-color: #777;
        }

        #pointContentEditor,
        #pointAdminCommentEditor {
          padding-left: 8px;
          padding-right: 8px;
        }

        #pointAdminCommentContent {
          padding-left: 16px;
          padding-right: 16px;
        }

        .commentFromAdmin {
          padding-left: 16px;
          padding-right: 16px;
          padding-top: 16px;
          font-size: 16px;
          padding-bottom: 2px;
          font-weight: bold;
          color: var(--accent-color, #111);
        }

        .commentFromAdminInput {
          padding: 0;
        }

        .transcriptError {
          margin-top: 8px;
          color: #f00;
        }

        mwc-circular-progress-four-color {
          margin-top: 4px;
        }

        .checkTranscript {
          margin-top: 8px;
          padding: 8px;
        }

        .transcriptText {
          margin-top: 0;
          padding: 8px;
          color: #222;
          padding-bottom: 0;
          font-style: italic;
        }

        .transcriptHeader {
          color: #222;
          margin-bottom: 2px;
          font-style: normal;
        }

        audio {
          margin-top: 16px;
          margin-bottom: 16px;
        }

        video {
          background-color: #777;
        }

        #pointContent {
          color: #111;
        }

        mwc-icon-button.openCloseButton {
          width: 54px;
          height: 54px;
          margin-top: -16px;
          padding-left: 0;
          margin-left: 0;
          color: #777;
        }
      `]}renderAdminComments(){var t,i,e,o;a`
      <div class="commentFromAdmin" ?hidden="${this.isEditingSomething}">
        ${this.post.Group.configuration.customAdminCommentsTitle?a`
              <yp-magic-text
                textType="customAdminCommentsTitle"
                .contentLanguage="${this.post.Group.language}"
                .content="${this.post.Group.configuration.customAdminCommentsTitle}"
                .contentId="${this.post.Group.id}"
              >
              </yp-magic-text>
            `:""}
        ${this.post.Group.configuration.customAdminCommentsTitle?"":a` ${this.t("commentFromAdmin")} `}
      </div>
      <div
        id="pointAdminCommentContent"
        ?link-point="${this.linkPoint}"
        ?hidden="${this.isEditingSomething}"
        @click="${this._linkIfNeeded}"
      >
        <yp-magic-text
          simple-format
          textType="pointAdminCommentContent"
          truncate="1500"
          .contentLanguage="${null===(i=null===(t=this.point.public_data)||void 0===t?void 0:t.admin_comment)||void 0===i?void 0:i.language}"
          .content="${null===(o=null===(e=this.point.public_data)||void 0===e?void 0:e.admin_comment)||void 0===o?void 0:o.text}"
          .contentId="${this.point.id}"
        >
        </yp-magic-text>
      </div>
    `}renderUserHeader(){return this.user?a` <div
          class="userInfoContainer layout horizontal"
          ?up-vote="${this.isUpVote}"
          ?down-vote="${this.isDownVote}"
          ?hidden="${this.hideUser}"
        >
          <mwc-icon
            class="thumbsIcon thumbsIconUp"
            ?hidden="${!this.isDownVote}"
            >thumb_up</mwc-icon
          >
          <mwc-icon class="thumbsIcon thumbsIconDown" ?hidden="${this.isUpVote}"
            >thumb_down</mwc-icon
          >
          <div
            class="layout horizontal"
            ?hidden="${this.post.Group.configuration.hidePointAuthor}"
          >
            <yp-user-with-organization
              .titleDate="${this.point.created_at}"
              inverted
              .user="${this.user}"
            ></yp-user-with-organization>
          </div>
        </div>`:m}renderTextPoint(){return a`
      <div class="point-content layout vertical ">
        <span ?hidden="${!this.point.name}">
          <span>${this.point.name}</span>.
        </span>
        <div
          id="pointContent"
          .linkPoint="${this.linkPoint}"
          ?hidden="${this.isEditingSomething}"
          @click="${this._linkIfNeeded}"
        >
          <yp-magic-text
            simpleFormat
            textType="pointContent"
            .contentLanguage="${this.point.language}"
            .content="${this.point.latestContent}"
            .contentId="${this.point.id}"
          >
          </yp-magic-text>
        </div>
      </div>
    `}renderVideoOrAudio(){return a`
      ${this.videoActive&&this.pointVideoPath?a`
            <div class="topContainer" ?portrait="${this.portraitVideo}">
              <div class="layout horizontal center-center">
                <video
                  id="videoPlayer"
                  portrait="${this.portraitVideo}"
                  .data-id="${this.pointVideoId}"
                  controls
                  preload="none"
                  class="video"
                  .src="${this.pointVideoPath}"
                  playsinline
                  .poster="${this.pointImageVideoPath?this.pointImageVideoPath:""}"
                ></video>
              </div>
            </div>
          `:m}
      ${this.audioActive&&this.pointAudioPath?a`
            <div class="layout vertical center-center">
              <audio
                id="audioPlayer"
                .data-id="${this.pointAudioId}"
                controls
                preload="metadata"
                class="audio"
                .src="${this.pointAudioPath}"
                playsinline
              ></audio>
            </div>
          `:m}
      ${this.checkingTranscript?a`
            <div class="layout vertical center-center checkTranscript">
              <div>${this.t("checkingForTranscript")}</div>
              <mwc-circular-progress-four-color
                indeterminate
              ></mwc-circular-progress-four-color>
            </div>
          `:m}

      <div
        class="transcriptError layout horizontal center-center"
        ?hidden="${!this.checkTranscriptError}"
      >
        ${this.t("checkTranscriptError")}
      </div>

      ${this.point.latestContent?a`
            <div class="transcriptText layout vertical center-center">
              <div class="layout horizontal">
                <div class="transcriptHeader">
                  ${this.t("automaticTranscript")}
                </div>
                <div
                  ?hidden="${!this.post.Group.configuration.collapsableTranscripts}"
                >
                  <mwc-icon-button
                    .label="${this.t("openComments")}"
                    class="openCloseButton"
                    icon="keyboard_arrow_right"
                    @click="${this._setOpen}"
                    hidden$="${this.openTranscript}"
                  ></mwc-icon-button>
                  <mwc-icon-button
                    .label="${this.t("closeComments")}"
                    class="openCloseButton"
                    icon="keyboard_arrow_down"
                    @click="${this._setClosed}"
                    hidden$="${!this.openTranscript}"
                  ></mwc-icon-button>
                </div>
              </div>
              <div
                id="pointContentTranscript"
                .linkPoint="${this.linkPoint}"
                ?hidden="${this.isEditing}"
                @click="${this._linkIfNeeded}"
              >
                <yp-magic-text
                  ?hidden="${!this.openTranscript}"
                  simpleFormat
                  textType="pointContent"
                  .contentLanguage="${this.point.language}"
                  .content="${this.point.latestContent}"
                  .contentId="${this.point.id}"
                >
                </yp-magic-text>
              </div>
            </div>
          `:m}
    `}renderEditPoint(){return a`
      <div class="layout vertical">
        <mwc-textarea
          id="pointContentEditor"
          charCounter
          maxlength="1500"
          .value="${this.editText?this.editText:""}"
        ></mwc-textarea>
        <div class="horizontal end-justified layout">
          <yp-emoji-selector id="pointEmojiSelector"></yp-emoji-selector>
        </div>
        <div class="layout horizontal self-end">
          <mwc-button
            @click="${this._cancelEdit}"
            .label="${this.t("cancel")}"
          ></mwc-button>
          <mwc-button
            @click="${this._saveEdit}"
            .label="${this.t("update")}"
          ></mwc-button>
        </div>
      </div>
    `}renderEditMenu(){return a`
      <div class="layout horizontal self-end" hidden>
        <mwc-icon-button
          .label="${this.t("editAdminComment")}"
          ?hidden="${!this.hasAdminCommentAccess}"
          icon="comment"
          @click="${this._editAdminComment}"
        ></mwc-icon-button>
        <mwc-icon-button
          .label="${this.t("edit")}"
          ?hidden="${!this.canEditPoint}"
          icon="create"
          @click="${this._editPoint}"
        ></mwc-icon-button>
        <mwc-icon-button
          .label="${this.t("delete")}"
          icon="clear"
          @click="${this._deletePoint}"
        ></mwc-icon-button>
      </div>
    `}render(){var t,i;return a`
      <div class="layout vertical">
        ${this.renderUserHeader()}

        <div class="layout vertical">
          ${this.videoOrAudioActive?this.renderVideoOrAudio():this.renderTextPoint()}
          ${this.showAdminComments?this.renderAdminComments():m}
          ${this.isEditing?this.renderEditPoint():m}

          <div
            class="layout horizontal actionContainer"
            ?hidden="${this.hideActions}"
          >
            <yp-point-actions
              .point="${this.point}"
              .pointUrl="${this.pointUrl}"
              .configuration="${null===(i=null===(t=this.post)||void 0===t?void 0:t.Group)||void 0===i?void 0:i.configuration}"
            ></yp-point-actions>
            <mwc-icon-button
              .label="${this.t("point.report")}"
              id="reportPointIconButton"
              icon="warning"
              @click="${this._reportPoint}"
            ></mwc-icon-button>
            <div class="flex"></div>

            ${this.hasPointAccess?this.renderEditMenu():m}
          </div>
        </div>
      </div>
    `}_setOpen(){this.openTranscript=!0,setTimeout((()=>{this.fire("yp-list-resize"),this.requestUpdate()}),20)}_setClosed(){this.openTranscript=!1,setTimeout((()=>{this.fire("yp-list-resize"),this.requestUpdate()}),20)}get isEditingSomething(){return this.isEditing||this.isAdminCommentEditing}get showAdminComments(){return!!(this.post&&this.post.Group&&this.point.public_data&&this.point.public_data.admin_comment&&this.point.public_data.admin_comment.text&&this.post.Group.configuration&&this.post.Group.configuration.allowAdminAnswersToPoints)}get hasAdminCommentAccess(){return!!(this.post&&this.post.Group&&u.checkPostAdminOnlyAccess(this.post)&&this.post.Group.configuration&&this.post.Group.configuration.allowAdminAnswersToPoints)}get videoOrAudioActive(){return this.videoActive||this.audioActive}_isEditingChanged(){this._updateEmojiBindings()}_isAdminCommentEditingChanged(){this._updateEmojiBindings()}_shareTap(t){window.appGlobals.activity("pointShareOpen",t.detail.brand,this.point.id)}get pointUrl(){if(this.point&&this.post)return window.location.protocol+"//"+window.location.hostname+"/post/"+this.post.id+"/"+this.point.id}_linkIfNeeded(){this.linkPoint&&this.post&&b.goToPost(this.post.id,this.point.id)}_updateEmojiBindings(){this.isEditing?setTimeout((()=>{const t=this.$$("#pointContentEditor"),i=this.$$("#pointEmojiSelector");t&&i?i.inputTarget=t:console.error("Wide: Can't bind point edit emojis :(")}),500):this.isAdminCommentEditing&&setTimeout((()=>{const t=this.$$("#pointAdminCommentEditor"),i=this.$$("#pointAdminCommentEmojiSelector");t&&i?i.inputTarget=t:console.error("Wide: Can't bind point edit emojis :(")}),500)}_cancelEdit(){this.isEditing=!1}async _saveEdit(){const t=await window.serverApi.updatePoint(this.point.id,{content:this.editText});t&&(t.latestContent=t.PointRevisions[t.PointRevisions.length-1].content,this.point=t),this.isEditing=!1}_cancelAdminCommentEdit(){this.isAdminCommentEditing=!1}async _saveAdminCommentEdit(){const t=await window.serverApi.updatePointAdminComment(this.post.Group.id,this.point.id,{content:this.editAdminCommentText});t&&(this.point.public_data||(this.point.public_data={}),this.point.public_data.admin_comment={text:t.content},this.point=JSON.parse(JSON.stringify(this.point)),this.isAdminCommentEditing=!1,this.hasAdminComments=!0),this.isAdminCommentEditing=!1}_deletePoint(){window.appDialogs.getDialogAsync("confirmationDialog",(t=>{t.open(this.t("point.confirmDelete"),this._reallyDeletePoint.bind(this))}))}async _reallyDeletePoint(){await window.serverApi.deletePoint(this.point.id),this.fire("yp-point-deleted",{pointId:this.point.id})}_reportPoint(){window.appGlobals.activity("open","point.report"),window.appDialogs.getDialogAsync("apiActionDialog",(t=>{t.setup("/api/points/"+this.point.id+"/report",this.t("reportConfirmation"),this._onReport.bind(this),this.t("point.report"),"PUT"),t.open()}))}_onReport(){window.appGlobals.notifyUserViaToast(this.t("point.report")+": "+this.point.content)}_editPoint(){this.hasPointAccess&&this.point.PointRevisions&&(this.editText=this.point.PointRevisions[this.point.PointRevisions.length-1].content,this.isEditing=!0)}_editAdminComment(){this.post&&u.checkPostAdminOnlyAccess(this.post)&&(this.editAdminCommentText=this.point.public_data&&this.point.public_data.admin_comment?this.point.public_data.admin_comment.text:"",this.isAdminCommentEditing=!0)}get hasPointAccess(){return u.checkPointAccess(this.point)}get canEditPoint(){if(this.point&&(this.point.PointVideos&&this.point.PointVideos.length>0||this.point.PointAudios&&this.point.PointAudios.length>0))return u.checkPointAccess(this.point);return this.point&&this.point.counter_quality_up+this.point.counter_quality_down<=this.maxNumberOfPointsBeforeEditFrozen&&window.appUser&&window.appUser.user&&this.point&&window.appUser.user.id==this.point.user_id}firstUpdated(t){super.firstUpdated(t),S.attachMediaListeners(this)}_pauseMediaPlayback(){S.pauseMediaPlayback(this)}_pointChanged(){if(this._resetMedia(),this.point){this.post&&this.post.Group&&this.post.Group.configuration&&this.post.Group.configuration.collapsableTranscripts&&(this.openTranscript=!1);let t=!1;this.post&&this.post.Group&&this.post.Group.configuration&&this.post.Group.configuration.disableMachineTranscripts&&(t=!0),this.user=this.point.User;const i=S.getVideoURL(this.point.PointVideos),e=S.getVideoPosterURL(this.point.PointVideos,void 0);if(this.portraitVideo=S.isPortraitVideo(this.point.PointVideos),i&&e)this.videoActive=!0,this.pointVideoPath=i,this.pointImageVideoPath=e,this.pointVideoId=this.point.PointVideos[0].id,this.checkTranscriptError=!1,t||"video"!==this.point.checkTranscriptFor||!0!==window.appGlobals.hasTranscriptSupport||(this._checkTranscriptStatus(),this.checkingTranscript=!0,this.point.checkTranscriptFor=void 0);else{const i=S.getAudioURL(this.point.PointAudios);i&&(this.audioActive=!0,this.pointAudioPath=i,this.pointAudioId=this.point.PointAudios[0].id,this.checkTranscriptError=!1,t||"audio"!==this.point.checkTranscriptFor||!0!==window.appGlobals.hasTranscriptSupport||(this._checkTranscriptStatus(),this.checkingTranscript=!0,this.point.checkTranscriptFor=void 0))}}else this.user=void 0,this.checkTranscriptError=!1}async _checkTranscriptStatus(){let t;t=this.videoActive?"videoTranscriptStatus":"audioTranscriptStatus";const i=await window.serverApi.checkPointTranscriptStatus(t,this.point.id);if(i.point){const t=i.point;this.checkingTranscript=!1,t.latestContent=t.PointRevisions[t.PointRevisions.length-1].content,this.point=t,this.fire("yp-update-point-in-list",t),this.hasPointAccess&&(this.editText=t.latestContent,this.isEditing=!0),this.requestUpdate()}else i&&i.inProgress?setTimeout((()=>{this._checkTranscriptStatus()}),2e3):i&&i.error?(this.checkingTranscript=!1,this.checkTranscriptError=!0):this.checkingTranscript=!1}_resetMedia(){this.videoActive=!1,this.pointVideoPath=void 0,this.pointImageVideoPath=void 0,this.pointVideoId=void 0,this.audioActive=!1,this.pointAudioPath=void 0,this.pointAudioId=void 0}loginName(){if(this.point.User)return this.point.User.name}get isUpVote(){return this.point?0==this.point.value||this.point.value>0:(console.warn("Can't find point for isUpVote"),!1)}get isDownVote(){return this.point?0==this.point.value||this.point.value<0:(console.warn("Can't find point for isDownVote"),!1)}};t([i({type:Object})],Z.prototype,"point",void 0),t([i({type:Object})],Z.prototype,"post",void 0),t([i({type:Object})],Z.prototype,"user",void 0),t([i({type:Boolean})],Z.prototype,"linkPoint",void 0),t([i({type:Boolean})],Z.prototype,"openTranscript",void 0),t([i({type:Boolean})],Z.prototype,"hideUser",void 0),t([i({type:Boolean})],Z.prototype,"hideActions",void 0),t([i({type:Boolean})],Z.prototype,"isEditing",void 0),t([i({type:Boolean})],Z.prototype,"isAdminCommentEditing",void 0),t([i({type:Boolean})],Z.prototype,"hasAdminComments",void 0),t([i({type:Number})],Z.prototype,"maxNumberOfPointsBeforeEditFrozen",void 0),t([i({type:String})],Z.prototype,"editText",void 0),t([i({type:String})],Z.prototype,"editAdminCommentText",void 0),t([i({type:Boolean})],Z.prototype,"videoActive",void 0),t([i({type:String})],Z.prototype,"pointVideoPath",void 0),t([i({type:String})],Z.prototype,"pointImageVideoPath",void 0),t([i({type:Number})],Z.prototype,"pointVideoId",void 0),t([i({type:Boolean})],Z.prototype,"audioActive",void 0),t([i({type:String})],Z.prototype,"pointAudioPath",void 0),t([i({type:Number})],Z.prototype,"pointAudioId",void 0),t([i({type:Boolean})],Z.prototype,"checkingTranscript",void 0),t([i({type:Boolean})],Z.prototype,"portraitVideo",void 0),t([i({type:Boolean})],Z.prototype,"checkTranscriptError",void 0),Z=t([e("yp-point")],Z);let K=class extends x{static get styles(){return[super.styles,s`
        .pointContainer {
        }
        .point {
          padding: 8px;
          margin: 8px;
        }

        .pointText {
          margin-bottom: 16px;
          padding: 16px;
          width: 360px;
        }

        yp-point {
          margin-bottom: 36px;
        }

        @media (max-width: 480px) {
          yp-point {
            width: 100%;
          }
        }

        .pointLayout {
          width: 46%;
        }

        .postName {
          padding-left: 32px;
          font-weight: bold;
          font-size: 24px;
          padding-bottom: 12px;
        }

        .actionInfo {
          font-size: 22px;
          margin-top: 16px;
          padding-left: 16px;
        }

        .post-name {
          font-size: 26px;
          padding-bottom: 8px;
          margin: 0;
          padding-top: 0;
          margin-top: 8px;
          margin-left: 24px;
        }

        .withCursor {
          cursor: pointer;
        }

        [hidden] {
          display: none !important;
        }
      `]}render(){return a`
      <div class="layout vertical pointContainer">
        <div
          class="actionInfo withCursor"
          ?hidden="${!this.isUpVote}"
          @click="${this._goToPoint}">
          ${this.t("point.forAdded")}...
        </div>
        <div
          class="actionInfo withCursor"
          ?hidden="${!this.isDownVote}"
          @click="${this._goToPoint}">
          ${this.t("point.againstAdded")}...
        </div>
        <div class="layout vertical">
          <yp-magic-text
            class="post-name withCursor"
            @click="${this._goToPoint}"
            textOnly
            textType="postName"
            .contentLanguage="${this.activity.Post.language}"
            .content="${this.activity.Post.name}"
            .contentId="${this.activity.Post.id}">
          </yp-magic-text>
          <yp-point
            hideUser
            .linkPoint="${!this.postId}"
            class="card"
            .point="${this.activity.Point}"></yp-point>
        </div>
      </div>
    `}_goToPoint(){!this.postId&&this.activity&&b.goToPost(this.activity.Post.id,this.activity.Point.id,this.activity)}get isUpVote(){return this.activity.Point&&this.activity.Point.value>0}get isDownVote(){return this.activity.Point&&this.activity.Point.value<0}};t([i({type:Object})],K.prototype,"activity",void 0),t([i({type:Number})],K.prototype,"postId",void 0),K=t([e("ac-activity-point")],K);class Y extends o{get hasGroupHeader(){return this.activity&&this.activity.Group&&"hidden_public_group_for_domain_level_points"!=this.activity.Group.name&&!this.postId&&!this.groupId}get groupTitle(){if(this.activity.Group&&this.postId&&!this.groupId){let t="";return!this.communityId&&this.activity.Community&&this.activity.Community.name!=this.activity.Group.name&&(t+=this.activity.Community.name+" - "),t+=this.activity.Group.name,t}return""}}t([i({type:Number})],Y.prototype,"postId",void 0),t([i({type:Number})],Y.prototype,"groupId",void 0),t([i({type:Number})],Y.prototype,"communityId",void 0),t([i({type:Object})],Y.prototype,"activity",void 0);const X=e=>{class o extends e{constructor(){super(...arguments),this.autoTranslate=!1}connectedCallback(){super.connectedCallback(),window.autoTranslate&&(this.autoTranslate=!0),this.addGlobalListener("yp-auto-translate",this._autoTranslateEvent.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.removeGlobalListener("yp-auto-translate",this._autoTranslateEvent.bind(this))}_autoTranslateEvent(t){this.autoTranslate=t.detail,this._getSurveyTranslationsIfNeeded()}_languageEvent(t){super._languageEvent(t),this._getSurveyTranslationsIfNeeded()}async _getSurveyTranslationsIfNeeded(){if(this.translatedQuestions=void 0,this.translatedAnswers=void 0,this.post&&this.post.public_data&&this.post.public_data.structuredAnswersJson&&this.autoTranslate&&this.language!==this.post.language){const t=this.getIndexTranslationKey("GroupQuestions"),i=this.getIndexTranslationKey("PostAnswers");if(window.appGlobals.cache.autoTranslateCache[t]&&window.appGlobals.cache.autoTranslateCache[i])this.translatedQuestions=window.appGlobals.cache.autoTranslateCache[t],this.translatedAnswers=window.appGlobals.cache.autoTranslateCache[i];else{const t=await window.serverApi.getSurveyTranslations(this.post,this.language);if(this.post&&this.autoTranslate&&(this.language!==this.post.language||"??"==this.post.language)){const i=t[0],e=t[1],o=JSON.parse(JSON.stringify(this.post.Group.configuration.structuredQuestionsJson)),s=JSON.parse(JSON.stringify(this.post.public_data.structuredAnswersJson));if(i.length===f.getQuestionLengthWithSubOptions(o)){let t=0;for(let e=0;e<o.length;e++){const s=o[e];s.text=i[t++],"radios"===s.type&&s.radioButtons&&s.radioButtons.length>0?t+=s.radioButtons.length:"checkboxes"===s.type&&s.checkboxes&&s.checkboxes.length>0?t+=s.checkboxes.length:"dropdown"===s.type&&s.dropdownOptions&&s.dropdownOptions.length>0&&(t+=s.dropdownOptions.length)}for(let t=0;t<s.length;t++)s[t].value&&(s[t].value=e[t]);this.translatedQuestions=o,this.translatedAnswers=s;const n=this.getIndexTranslationKey("GroupQuestions"),a=this.getIndexTranslationKey("PostAnswers");window.appGlobals.cache.autoTranslateCache[n]=o,window.appGlobals.cache.autoTranslateCache[a]=s}else console.error("Questions and Translated texts length does not match")}else this.translatedQuestions=void 0,this.translatedAnswers=void 0}}}getIndexTranslationKey(t){return`${t}-${this.post.id}-${this.language}`}get structuredAnswersFormatted(){if(this.post&&this.post.public_data&&this.post.public_data.structuredAnswersJson&&this.post.Group.configuration&&this.post.Group.configuration.structuredQuestionsJson){const t={},i={},e={};let o="";return this.post.Group.configuration.structuredQuestionsJson.forEach((o=>{o.uniqueId?t[o.uniqueId]=o:(o.showBeforeAnswerId&&(i[o.showBeforeAnswerId]=o),o.showAfterAnswerId&&(e[o.showAfterAnswerId]=o))})),this.post.public_data.structuredAnswersJson.forEach((s=>{if(s&&s.value){const n=t[s.uniqueId];n&&(i[s.uniqueId]&&(o+=i[s.uniqueId].text+"\n\n"),o+="<b>"+n.text+"</b>\n",s.value?o+=s.value+"\n\n":o+="\n\n",e[s.uniqueId]&&(o+=e[s.uniqueId].text+"\n\n"))}})),o}return""}}return t([i({type:Array})],o.prototype,"translatedQuestions",void 0),t([i({type:Array})],o.prototype,"translatedAnswers",void 0),t([i({type:Boolean})],o.prototype,"autoTranslate",void 0),t([i({type:Object})],o.prototype,"post",void 0),o};let tt=class extends(X(Y)){static get styles(){return[super.styles,s`
        .descriptionOuter {
          color: var(--primary-color-more-darker, #424242);
          line-height: var(--description-line-height, 1.3);
          margin: 0;
          padding-bottom: 8px;
          padding-top: 8px;
          margin-bottom: 48px;
          width: 100% !important;
        }

        .mainContainerItem[is-ie11] {
          max-width: 480px !important;
        }

        @media (max-width: 600px) {
          .mainContainerItem[is-ie11] {
            max-width: 290px !important;
          }
        }

        .description,
        .post-name {
          padding-left: 16px;
          padding-right: 16px;
        }

        .post-name {
          font-size: 24px;
          padding-bottom: 4px;
          margin: 0;
          padding-top: 0;
          margin-top: 16px;
        }

        .voting {
          position: absolute;
          bottom: 0;
          right: 16px;
        }

        .card-actions {
          position: absolute;
          bottom: 36px;
          right: 0;
        }

        .category-icon {
          width: 64px;
          height: 64px;
        }

        .category-image-container {
          text-align: right;
          margin-top: -52px;
        }

        .postCardCursor {
          cursor: pointer;
        }

        yp-post-cover-media {
          width: 432px;
          height: 258px;
          padding-bottom: 4px;
          margin-top: 8px;
        }

        .postCard {
          width: 960px;
          background-color: #fff;
        }

        @media (max-width: 960px) {
          :host {
            width: 420px;
          }

          .postCard {
            height: 100%;
            width: 420px;
          }

          yp-post-cover-media {
            width: 300px;
            height: 166px;
          }

          .voting {
            padding-left: 0;
            padding-right: 0;
          }

          .card-actions {
            width: 320px;
          }

          .card-content {
            width: 420px !important;
            padding-bottom: 74px;
          }

          .description {
            width: 300px;
          }
        }

        :host {
          width: 304px;
        }

        .postCard {
          height: 100% !important;
          width: 304px !important;
        }

        .actionInfo {
          font-size: 22px;
          margin-top: 16px;
          padding-left: 16px;
          padding-right: 16px;
          margin-bottom: 16px;
        }

        @media (max-width: 420px) {
          .description {
            width: 290px;
          }

          yp-post-cover-media {
            width: 304px !important;
            height: 168px !important;
          }
        }

        .groupTitle {
          font-size: 15px;
          padding-top: 8px;
          color: #777;
        }

        .hasPointer {
          cursor: pointer;
        }
      `]}render(){return a`
      ${this.activity&&this.activity.Post?a`
            <div class="layout vertical hasPointer" @click="${this._goToPost}">
              <div class="actionInfo">${this.t("addedAnIdea")}</div>
              <div class="layout horizontal center-center">
                <yp-post-cover-media
                  .post="${this.activity.Post}"
                ></yp-post-cover-media>
              </div>
              <div class="layout vertical center-center">
                <yp-magic-text
                  class="post-name mainContainerItem"
                  is-ie11="${this.isIE11}"
                  textOnly
                  textType="postName"
                  .contentLanguage="${this.activity.Post.language}"
                  .content="${this.activity.Post.name}"
                  .contentId="${this.activity.Post.id}"
                >
                </yp-magic-text>
              </div>
              <div class="layout vertical center-center descriptionOuter">
                <div
                  id="description"
                  class="description mainContainerItem"
                  is-ie11="${this.isIE11}"
                >
                  <yp-magic-text
                    id="description"
                    text-type="postContent"
                    .contentLanguage="${this.activity.Post.language}"
                    .content="${this.structuredAnswersFormatted}"
                    ?noUserInfo="${!this.activity.Post.Group.configuration.showWhoPostedPosts}"
                    simpleFormat
                    skipSanitize
                    .contentId="${this.activity.Post.id}"
                    class="description"
                    .truncate="${this.activity.Post.Group.configuration.descriptionTruncateAmount}"
                    .moreText="${this.t("readMore")}"
                    .closeDialogText="${this.t("close")}"
                  >
                  </yp-magic-text>
                </div>

                ${this.hasGroupHeader?a`
                      <div class="groupTitle layout horizontal center-center">
                        ${this.groupTitle}
                      </div>
                    `:a``}
              </div>
            </div>
          `:a``}
    `}connectedCallback(){super.connectedCallback(),this.post=this.activity.Post}_goToPost(){this.activity.Post&&!this.postId&&b.goToPost(this.activity.Post.id,void 0,this.activity)}get isIE11(){return/Trident.*rv[ :]*11\./.test(navigator.userAgent)}};tt=t([e("ac-activity-post")],tt);let it=class extends x{constructor(){super(...arguments),this.hideUser=!1}updated(t){super.updated(t),t.has("point")&&this._pointChanged()}static get styles(){return[s`
        .userName {
          color: #777;
        }

        yp-user-image {
          padding-top: 16px;
          padding-right: 8px;
        }

        .userName {
          padding-bottom: 4px;
        }

        .comment {
          margin-left: 8px;
          margin-right: 8px;
          padding-bottom: 4px;
          margin-bottom: 8px;
          padding-top: 16px;
        }

        .commentDash {
          border-bottom: dashed #ddd;
          border-bottom-width: 1px;
        }

        yp-point-actions {
          padding-top: 8px;
        }

        #reportPointIconButton {
          color: #ddd;
          width: 36px;
          height: 36px;
        }

        [hidden] {
          display: none !important;
        }

        #deleteButton {
          color: #bbb;
        }
      `]}render(){return this.point?a`
      <div class="layout horizontal">
        <div class="layout horizontal">
          <yp-user-image .user="${this.user}"></yp-user-image>
        </div>
        <div class="layout vertical">
          <div class="comment">
            ${this.point.content}
            <div class="layout horizontal">
              <yp-point-actions
                .point="${this.point}"
                hideSharing></yp-point-actions>
              <mwc-icon-button
                ?hidden=""
                ?hidden="${!this.loggedInUser}"
                .label="${this.t("point.report")}"
                id="reportPointIconButton"
                icon="warning"
                @click="${this._reportPoint}"></mwc-icon-button>

              ${this.hasPointAccess?a`
                    <div class="layout horizontal self-end">
                      <mwc-icon-button
                        id="deleteButton"
                        .label="${this.t("delete")}"
                        icon="clear"
                        @click="${this._deletePoint}"></mwc-icon-button>
                    </div>
                  `:a``}
            </div>
          </div>
        </div>
      </div>
    `:m}connectedCallback(){super.connectedCallback(),this.addGlobalListener("yp-logged-in",this.requestUpdate.bind(this)),this.addGlobalListener("yp-got-admin-rights",this.requestUpdate.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.removeGlobalListener("yp-logged-in",this.requestUpdate.bind(this)),this.removeGlobalListener("yp-got-admin-rights",this.requestUpdate.bind(this))}_deletePoint(){window.appDialogs.getDialogAsync("confirmationDialog",(t=>{t.open(this.t("point.confirmDelete"),this._reallyDeletePoint.bind(this))}))}async _reallyDeletePoint(){this.point&&(await window.serverApi.deletePoint(this.point.id),this.fire("yp-point-deleted",{pointId:this.point.id}),this.fire("iron-resize"),this.point=void 0)}_reportPoint(){window.appGlobals.activity("open","point.report"),window.appDialogs.getDialogAsync("apiActionDialog",(t=>{t.setup("/api/points/"+this.point.id+"/report",this.t("reportConfirmation"),this._onReport.bind(this),this.t("point.report"),"PUT"),t.open()}))}_onReport(){window.appGlobals.notifyUserViaToast(this.t("point.report")+": "+this.point.content)}_pointChanged(){this.point?this.user=this.point.PointRevisions[0].User:this.user=void 0}get hasPointAccess(){return this.point&&u.checkPointAccess(this.point)}loginName(){return this.point&&this.point.PointRevisions[0].User.name}};t([i({type:Object})],it.prototype,"point",void 0),t([i({type:Object})],it.prototype,"user",void 0),t([i({type:Boolean})],it.prototype,"hideUser",void 0),it=t([e("yp-point-comment")],it);let et=class extends o{static get styles(){return[super.styles,s`
        :host {
          display: block;
        }

        .avatar-container {
          position: relative;
          border: 2px solid #ff9800;
          border-radius: 50%;
          height: 90px;
          padding: 2px;
          width: 90px;
          margin: 20px auto;
        }

        .contact-info {
          margin: 0 20px;
          padding-bottom: 4px;
          text-align: center;
        }

        .contact-info .name {
          font-weight: bold;
        }

        .contact-info .email {
          color: #999;
        }

        .buttons {
          margin-top: 8px;
        }

        .hasPointer {
          cursor: pointer;
        }
        mwc-button {
          margin-top: 12px;
          margin-bottom: 8px;
        }
      `]}render(){return a`
      ${this.user?a`
            <div class="mainContainer">
              <div class="avatar-container">
                <yp-user-image
                  class="hasPointer"
                  large
                  .user="${this.user}"
                  @click="${this._openEdit}"></yp-user-image>
              </div>
              <div class="contact-info">
                <div class="name">${this.user.name}</div>
                <div class="email">${this.user.email}</div>
                <div class="layout vertical center-justified buttons">
                  <mwc-button
                    raised
                    .label="${this.t("user.edit")}"
                    @click="${this._openEdit}"></mwc-button>
                  <mwc-button
                    raised
                    .label="${this.t("myContent")}"
                    @click="${this._openAllContentModeration}"></mwc-button>
                  <mwc-button
                    raised
                    .label="${this.t("user.logout")}"
                    @click="${this._logout}"></mwc-button>
                </div>
              </div>
            </div>
          `:a``}
    `}_openAllContentModeration(){window.appGlobals.activity("open","userAllContentModeration")}_openEdit(){this.fire("open-user-edit")}_logout(){window.appUser.logout()}};t([i({type:Object})],et.prototype,"user",void 0),et=t([e("yp-user-info")],et);let ot=class extends x{static get styles(){return[super.styles,s`
        :host {
          display: block;
          width: 100%;
          margin-top: 6px;
          margin-bottom: 64px;
        }

        mwc-textfield {
          width: 370px;
          max-height: 300px;
        }

        mwc-button {
          margin-top: 16px;
          margin-bottom: 16px;
          background-color: var(--accent-color);
          color: #fff;
        }

        .userImage {
          padding-left: 16px;
          padding-right: 16px;
        }

        @media (max-width: 840px) {
          :host {
            width: 100%;
          }

          mwc-textfield {
            width: 250px;
          }

          .userImage {
            padding-top: 8px;
            padding-right: 16px;
            padding-left: 0;
          }
        }

        [hidden] {
          display: none !important;
        }
      `]}render(){return this.comment?a`
          <div
            class="layout vertical center-center"
            ?hidden="${!this.loggedInUser}">
            <div class="layout horizontal">
              <yp-user-image
                class="userImage"
                .user="${this.loggedInUser}"></yp-user-image>
              <div class="layout vertical">
                <mwc-textfield
                  id="pointComment"
                  minlength="15"
                  name="pointComment"
                  .value="${this.comment.content}"
                  always-float-label="${this.comment.content}"
                  .label="${this.t("point.addComment")}"
                  charCounter
                  rows="2"
                  maxrows="2"
                  @keydown="${this._keyDown}"
                  maxlength="200"
                  aria-label="${this.t("point.addComment")}">
                </mwc-textfield>
                <div class="layout horizontal">
                  <mwc-button
                    id="submitButton"
                    raised
                    @click="${this._sendComment}"
                    .label="${this.t("point.postComment")}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        `:m}updated(t){super.updated(t),t.has("comment")&&this.comment&&this.comment.value&&this.comment.value%7==2&&this.fire("iron-resize")}get newPointComment(){return this.$$("#pointComment").value}connectedCallback(){super.connectedCallback(),this._reset()}_responseError(){this.$$("#submitButton").disabled=!1}_reset(){this.comment={content:""},this.$$("#submitButton")&&(this.$$("#submitButton").disabled=!1),this.$$("#pointComment")&&(this.$$("#pointComment").value="")}async _sendComment(){this.comment.content=this.newPointComment,this.comment&&this.comment.content&&this.comment.content.length>0?this.point?(await window.serverApi.postComment("points",this.point.id,{point_id:this.point.id,comment:this.comment}),this.$$("#submitButton").disabled=!1):this.image?(await window.serverApi.postComment("images",this.image.id,{image_id:this.image.id,comment:this.comment}),this.$$("#submitButton").disabled=!1):console.error("Can't find send ids"):this.fire("yp-error",this.t("point.commentToShort")),this.fire("refresh"),this._reset()}_keyDown(t){"enter"==t.code&&this._sendComment()}};t([i({type:Object})],ot.prototype,"comment",void 0),t([i({type:Object})],ot.prototype,"point",void 0),t([i({type:Object})],ot.prototype,"image",void 0),ot=t([e("yp-point-comment-edit")],ot);let st=class extends o{constructor(){super(...arguments),this.open=!1,this.loadingList=!1,this.disableOpenClose=!1}updated(t){super.updated(t),t.has("point")&&this._pointChanged(),t.has("image")&&this._imageChanged(),t.has("open")&&this._openChanged()}static get styles(){return[super.styles,s`
        :host {
          width: 100%;
        }

        yp-point-comment-edit {
        }

        .lit-virtualizer {
          max-height: 500px;
          width: 550px;
          --lit-virtualizer-items-container: {
          }
        }

        .listContainer {
          padding-top: 24px;
          height: 100%;
          width: 100%;
        }

        .container {
        }

        #commentCount {
          font-size: 14px;
        }

        mwc-icon-button.openCloseButton {
          width: 56px;
          height: 56px;
          padding-left: 0;
          margin-left: 0;
        }

        .commentText {
          font-size: 14px;
          text-transform: lowercase;
          padding-right: 6px;
        }

        @media (max-width: 520px) {
          lit-virtualizer {
            width: 420px;
          }
        }

        @media (max-width: 450px) {
          lit-virtualizer {
            width: 318px;
          }
        }

        @media (max-width: 359px) {
          lit-virtualizer {
            width: 307px;
          }
        }

        [hidden] {
          display: none !important;
        }
      `]}renderComment(t,i){return a` <yp-point-comment
      .point="${t}"
      .tabindex="${i}"></yp-point-comment>`}render(){return a`
      <div class="container layout vertical">
        <div
          class="layout horizontal start-justified"
          ?hidden="${this.disableOpenClose}">
          <div
            class="layout horizontal center-center"
            ?hidden="${!this.commentsCount}">
            <div class="commentText">${this.t("point.comments")}</div>
            <div id="commentCount">${this.commentsCount}</div>
          </div>
          <div
            class="layout horizontal center-center"
            ?hidden="${this.noComments}">
            <div class="commentText">${this.t("noComments")}</div>
          </div>
          <div class="layout horizontal">
            <mwc-icon-button
              .label="${this.t("openComments")}"
              class="openCloseButton"
              icon="keyboard_arrow_right"
              @click="${this.setOpen}"
              ?hidden="${this.open}"></mwc-icon-button>
            <mwc-icon-button
              .label="${this.t("closeComments")}"
              class="openCloseButton"
              icon="keyboard_arrow_down"
              @click="${this.setClosed}"
              ?hidden="${!this.open}"></mwc-icon-button>
          </div>
        </div>

        ${this.open&&this.comments?a`
              <div class="layout vertical listContainer">
                <lit-virtualizer
                  .items=${this.comments}
                  .scrollTarget="${window}"
                  .renderItem=${this.renderComment}
                  @rangeChanged=${this.scrollEvent}></lit-virtualizer>

                <yp-point-comment-edit
                  @refresh="${this.refresh}"
                  .point="${this.point}"
                  .image="${this.image}"></yp-point-comment-edit>
              </div>
            `:a``}
        </div>
      </div>
    `}scrollEvent(t){this.comments&&-1!=t.last&&t.last<this.comments.length&&(t.last,this.comments.length)}connectedCallback(){super.connectedCallback(),this.addListener("yp-point-deleted",this.refresh)}disconnectedCallback(){super.disconnectedCallback(),this.removeListener("yp-point-deleted",this.refresh)}_openChanged(){this.open&&(this.point||this.image)&&this.refresh()}get noComments(){return!(0==this.commentsCount)}setOpen(){this.open=!0,setTimeout((()=>{this.fire("iron-resize")}),20)}setClosed(){this.open=!1,setTimeout((()=>{this.fire("iron-resize")}),20)}_pointChanged(){this.comments=[],this.commentsCount=void 0,this.point&&(this.commentType="points",this.refresh())}refresh(){this._getComments(),this._getCommentsCount()}_imageChanged(){this.image&&(this.commentType="images",this.refresh())}get hasContent(){return this.point||this.image}async _getComments(){if(this.hasContent&&this.commentType){const t=await window.serverApi.getComments(this.commentType,this.point?this.point.id:this.image.id);this.comments=t,t&&t.length,setTimeout((()=>{}))}}async _getCommentsCount(){if(this.hasContent&&this.commentType){const t=await window.serverApi.getCommentsCount(this.commentType,this.point?this.point.id:this.image.id);this.commentsCount=t.count,this.fire("yp-set-comments-count",{count:this.commentsCount})}else console.error("No point for comment count")}};t([i({type:Array})],st.prototype,"comments",void 0),t([i({type:Object})],st.prototype,"point",void 0),t([i({type:Object})],st.prototype,"image",void 0),t([i({type:Boolean})],st.prototype,"open",void 0),t([i({type:Boolean})],st.prototype,"loadingList",void 0),t([i({type:Boolean})],st.prototype,"disableOpenClose",void 0),t([i({type:Number})],st.prototype,"commentsCount",void 0),t([i({type:String})],st.prototype,"commentType",void 0),st=t([e("yp-point-comment-list")],st);let nt=class extends o{constructor(){super(...arguments),this.withComments=!1,this.open=!1,this.hideUser=!1,this.commentsCount=0}updated(t){super.updated(t),t.has("point")&&this._pointChanged(),t.has("open")&&this._openChanged()}static get styles(){return[super.styles,s`
        :host {
          width: 100%;
          margin-top: 8px;
        }

        .userName {
          color: #777;
        }

        .userName {
          padding-bottom: 4px;
        }

        .story {
          padding-bottom: 12px;
          margin-bottom: 8px;
          padding-top: 8px;
          border-bottom: solid #ddd;
          border-bottom-width: 1px;
          font-size: 19px;
        }

        yp-point-actions {
          padding-top: 8px;
        }

        .container {
        }

        #commentCount {
          font-size: 14px;
        }

        mwc-icon-button.openCloseButton {
          width: 56px;
          height: 56px;
          padding-left: 0;
          margin-left: 0;
        }

        .commentText {
          font-size: 14px;
          text-transform: lowercase;
          padding-right: 6px;
        }

        .withPointer {
          cursor: pointer;
        }

        .newsContainer {
          width: auto;
        }

        [hidden] {
          display: none !important;
        }
      `]}render(){return a`
      <div class="layout vertical newsContainer">
        <yp-magic-text
          id="content"
          class="story"
          textType="pointContent"
          simpleFormat
          truncate="10000"
          .contentLanguage="${this.point.language}"
          .content="${this.point.latestContent}"
          .contentId="${this.point.id}">
        </yp-magic-text>

        <yp-point-news-story-embed
          .embedData="${this.point.embed_data}"></yp-point-news-story-embed>
        <div class="layout horizontal">
          <yp-point-actions
            .point="${this.point}"
            hideSharing></yp-point-actions>
          <div class="layout horizontal start-justified">
            <div
              class="layout horizontal center-center withPointer"
              ?hidden="${!this.commentsCount}"
              @click="${this._setOpenToValue}">
              <div class="commentText">${this.t("point.comments")}</div>
              <div id="commentCount">${this.commentsCount}</div>
            </div>
            <div
              class="layout horizontal center-center withPointer"
              @click="${this._setOpenToValue}"
              ?hidden="${this.noComments}">
              <div class="commentText">${this.t("noComments")}</div>
            </div>
            <div class="layout horizontal">
              <mwc-icon-button
                .label="${this.t("toggleOpenClose")}"
                class="openCloseButton"
                icon="keyboard_arrow_right"
                @click="${this._setOpen}"
                ?hidden="${this.open}">
              </mwc-icon-button>
              <mwc-icon-button
                .label="${this.t("toggleOpenClose")}"
                class="openCloseButton"
                icon="keyboard_arrow_down"
                @click="${this._setClosed}"
                ?hidden="${!this.open}">
              </mwc-icon-button>
            </div>
          </div>
        </div>
        <yp-point-comment-list
          id="commentsList"
          @yp-set-comments-count="${this._setCommentsCount}"
          disableOpenClose
          .point="${this.point}"
          ?hidden="${!this.withComments}"></yp-point-comment-list>
      </div>
    `}_setOpenToValue(){this.open?this._setClosed():this._setOpen()}_openChanged(){this.open&&this.$$("#commentsList").refresh()}get noComments(){return!(0==this.commentsCount)}_setOpen(){this.open=!0,this.$$("#commentsList").setOpen()}_setClosed(){this.open=!1,this.$$("#commentsList").setClosed()}_setCommentsCount(t){this.commentsCount=t.detail.count}_pointChanged(){this.point&&this.point.PointRevisions?this.user=this.point.PointRevisions[0].User:this.user=void 0,this.open=!1}loginName(){return this.point.PointRevisions[0].User.name}};t([i({type:Object})],nt.prototype,"point",void 0),t([i({type:Object})],nt.prototype,"user",void 0),t([i({type:Boolean})],nt.prototype,"withComments",void 0),t([i({type:Boolean})],nt.prototype,"open",void 0),t([i({type:Boolean})],nt.prototype,"hideUser",void 0),t([i({type:Number})],nt.prototype,"commentsCount",void 0),nt=t([e("yp-point-news-story")],nt);let at=class extends Y{static get styles(){return[super.styles,s`
        .newsStoryContainer {
          padding-left: 8px;
          padding-right: 8px;
        }

        .postName {
          cursor: pointer;
          margin-top: 16px;
          padding-left: 8px;
          padding-right: 8px;
          color: #555;
        }

        .groupTitle {
          font-size: 15px;
          color: #777;
          padding-bottom: 16px;
          margin: 0;
          padding-top: 0;
        }

        .hasPointer {
          cursor: pointer;
        }

        .mainContainer {
          width: auto;
        }
      `]}render(){return a`
      <div class="layout vertical mainContainer">
        ${this.activity.Post?a`
              <yp-magic-text
                @click="${this._goToPost}"
                class="postName"
                ?hidden="${!this.activity.Post.name}"
                textOnly
                textType="postName"
                .contentLanguage="${this.activity.Post.language}"
                .content="${this.activity.Post.name}"
                .contentId="${this.activity.Post.id}">
              </yp-magic-text>
            `:m}
        <div class="layout vertical center-center newsStoryContainer">
          <yp-point-news-story
            withComments
            hideUser
            class="card"
            .point="${this.activity.Point}"></yp-point-news-story>
        </div>

        ${this.hasGroupHeader?a`
              <div class="groupTitle layout horizontal center-center">
                ${this.groupTitle}
              </div>
            `:m}
      </div>
    `}_goToPost(){b.goToPost(this.activity.Post.id,void 0,this.activity)}get hidePostName(){return null!=this.postId}};at=t([e("ac-activity-point-news-story")],at);let rt=class extends o{static get styles(){return[super.styles,s`
        .statusChange {
          padding-left: 32px;
          padding-right: 32px;
          margin-bottom: 64px;
          font-size: 16px;
          overflow-y: auto;
          max-height: 360px;
        }

        .postName {
          padding-left: 32px;
          padding-right: 32px;
          font-weight: bold;
          font-size: 19px;
          margin-bottom: 8px;
          color: #444;
          cursor: pointer;
        }

        .groupName {
          padding-left: 32px;
          padding: 16px;
          font-size: 14px;
          padding-bottom: 8px;
        }
      `]}render(){return a`
      <div class="layout vertical">
        <div class="groupName">
          ${this.activity.Group.name}
        </div>
        <yp-magic-text
          @click="${this._goToPost}"
          class="postName"
          textOnly
          textType="postName"
          .contentLanguage="${this.activity.Post.language}"
          .content="${this.activity.Post.name}"
          .contentId="${this.activity.Post.id}">
        </yp-magic-text>
        <yp-magic-text
          id="statusChange"
          class="statusChange"
          .extraId="${this.activity.Post.id}"
          textType="statusChangeContent"
          .contentLanguage="${this.activity.PostStatusChange.language}"
          simpleFormat
          .content="${this.statusContent}"
          .contentId="${this.activity.PostStatusChange.id}">
        </yp-magic-text>
      </div>
    `}_goToPost(){this.activity.Post&&b.goToPost(this.activity.Post.id,void 0,this.activity)}get statusContent(){if(this.activity&&this.activity.PostStatusChange&&this.activity.PostStatusChange.content)return this.activity.PostStatusChange.content}};t([i({type:Object})],rt.prototype,"activity",void 0),rt=t([e("ac-activity-post-status-update")],rt);let dt=class extends x{static get styles(){return[super.styles,g,s`
        .activity {
          margin: 16px;
          background-color: #fff;
          height: 100%;
          padding-left: 16px;
          padding-right: 16px;
          margin-bottom: 0;
        }

        @media (max-width: 600px) {
          .activity {
            width: 100%;
            height: 100%;

            margin: 0;
            padding-left: 16px;
            padding-right: 16px;
            margin-bottom: 8px;
            margin-top: 8px;
            width: -webkit-calc(100% - 8px);
            width: -moz-calc(100% - 8px);
            width: calc(100% - 8px);
          }

          .activity[logged-in-user] {
            margin-left: 0;
            width: -webkit-calc(100% - 16px);
            width: -moz-calc(100% - 16px);
            width: calc(100% - 16px);
          }
        }

        .aaaactivity[is-old-safari-or-ie] {
          height: 550px;
          overflow: auto;
        }

        .mainActivityContent {
          height: 100% !important;
        }

        ac-activity-header {
        }

        ac-activity-post {
          width: 100%;
        }

        .headerUserImage {
          padding-top: 16px;
        }

        h1 {
          font-size: 24px;
        }

        mwc-button {
          color: var(--accent-color);
        }

        mwc-icon {
          width: 48px;
          height: 48px;
          padding-top: 14px;
        }

        .createdAt {
          color: #777;
          margin-top: 16px;
          font-size: 14px;
        }

        yp-ajax {
          background-color: var(--primary-background-color);
        }

        .deleteIcon {
          position: absolute;
          right: 8px;
          bottom: 8px;
          color: #ddd;
        }

        [hidden] {
          display: none !important;
        }
      `]}renderActivity(){switch(this.activity.type){case"activity.post.new":return a`
          <ac-activity-post
            .activity="${this.activity}"
            .postId="${this.postId}"
            .communityId="${this.communityId}"
            .groupId="${this.groupId}"></ac-activity-post>
        `;case"activity.point.new":return a`
          <ac-activity-point
            .postId="${this.postId}"
            .activity="${this.activity}"></ac-activity-point>
        `;case"activity.point.newsStory.new":return a`
          <ac-activity-point-news-story
            .activity="${this.activity}"
            .postId="${this.postId}"
            .communityId="${this.communityId}"
            .groupId="${this.groupId}"></ac-activity-point-news-story>
        `;case"activity.post.status.change":return a`
          <ac-activity-post-status-update
            .postId="${this.postId}"
            .activity="${this.activity}"></ac-activity-post-status-update>
        `;default:return m}}render(){return this.activity?a`
          <div
            .loggedInUser="${this.isLoggedIn}"
            class="layout vertical activity"
            tabindex="${this.tabIndex}">
            <mwc-icon-button
              .label="${this.t("deleteActivity")}"
              ?hidden="${!this.hasActivityAccess}"
              icon="delete"
              data-args="${this.activity.id}"
              class="deleteIcon"
              @click="${this._deleteActivity}"></mwc-icon-button>
            <div class="mainActivityContent">
              <div class="layout horizontal">
                <yp-user-with-organization
                  .user="${this.activity.User}"
                  inverted></yp-user-with-organization>
                <div class="flex"></div>
                <div
                  ?hidden="${!this.wide}"
                  class="createdAt"
                  .title="${this.fromLongTime(this.activity.created_at)}">
                  ${this.fromTime(this.activity.created_at)}
                </div>
              </div>

              ${this.renderActivity()}
            </div>
          </div>
        `:m}fromTime(t){return w(t).fromNow()}fromLongTime(t){return w(t).format()}get hasActivityAccess(){return!!this.activity&&(this.domainId&&this.activity.Domain?u.checkDomainAccess(this.activity.Domain):this.communityId&&this.activity.Community?u.checkCommunityAccess(this.activity.Community):this.groupId&&this.activity.Group?u.checkGroupAccess(this.activity.Group):!(!this.postId||!this.activity.Post)&&u.checkPostAccess(this.activity.Post))}_deleteActivity(){this.fire("ak-delete-activity",{id:this.activity.id})}_isNotActivityType(t,i){return t.type!=i}_isActivityType(t,i){return t.type==i}};t([i({type:Object})],dt.prototype,"activity",void 0),t([i({type:Number})],dt.prototype,"domainId",void 0),t([i({type:Number})],dt.prototype,"communityId",void 0),t([i({type:Number})],dt.prototype,"groupId",void 0),t([i({type:Number})],dt.prototype,"postId",void 0),t([i({type:Number})],dt.prototype,"postGroupId",void 0),t([i({type:Number})],dt.prototype,"userId",void 0),dt=t([e("ac-activity")],dt);let ct=class extends o{static get styles(){return[super.styles,g,s`
        .container {
          width: 220px;
          height: 100% !important;
        }

        .descriptionOuter {
          color: var(--primary-color-more-darker, #424242);
          margin: 0;
          padding-left: 16px;
          padding-right: 16px;
        }

        .description,
        .post-name {
          padding-left: 16px;
          padding-right: 16px;
        }

        .post-name {
          font-size: 15px;
          padding: 16px;
          margin: 0;
          background-color: #fff;
          color: #333;
          text-align: center;
        }

        .voting {
          position: absolute;
          bottom: 0;
          right: 16px;
        }

        .card-actions {
          position: absolute;
          bottom: 36px;
          right: 0;
        }

        .category-icon {
          width: 64px;
          height: 64px;
        }

        .category-image-container {
          text-align: right;
          margin-top: -52px;
        }

        .postCardCursor {
          cursor: pointer;
        }

        yp-post-cover-media {
          width: 220px;
          height: 124px;
        }

        .postCard {
          width: 200px;
          background-color: #fff;
        }

        @media (max-width: 960px) {
          :host {
            width: 420px;
          }

          .postCard {
            height: 100%;
            width: 420px;
          }

          yp-post-cover-media {
            width: 300px;
            height: 166px;
          }

          .voting {
            padding-left: 0;
            padding-right: 0;
          }

          .card-actions {
            width: 320px;
          }

          .card-content {
            width: 420px !important;
            padding-bottom: 74px;
          }

          .description {
            width: 300px;
          }
        }

        :host {
          width: 304px;
        }

        .postCard {
          height: 100% !important;
          width: 304px !important;
        }

        @media (max-width: 420px) {
          .description {
            width: 290px;
          }

          yp-post-cover-media {
            width: 304px !important;
            height: 168px !important;
          }
        }

        .postContainer {
          margin-bottom: 16px;
          margin-left: 16px;
          margin-right: 16px;
          max-width: 220px;
          width: 220px;
        }

        .postItem {
          background-color: #fff !important;
        }

        .headerText {
          font-size: 20px;
          margin: 16px;
          max-width: 220px;
          padding-top: 8px;
          padding-bottom: 8px;
          width: 220px;
          color: #fff;
          background-color: var(--primary-color-700);
        }
      `]}render(){return this.recommendedPosts?a`
          <div class="headerText layout horizontal center-center">
            ${this.t("recommendedPosts")}
          </div>

          ${this.recommendedPosts.map((t=>a`
              <div class="postContainer">
                <div class="shadow-elevation-2dp shadow-transition postItem">
                  <div
                    class="layout vertical postItem"
                    @click="${()=>{b.goToPost(t.id)}}"
                  >
                    <div class="layout horizontal">
                      <yp-post-cover-media
                        tiny
                        .post="${t}"
                      ></yp-post-cover-media>
                    </div>
                    <div class="post-name layout horizontal center-center">
                      ${t.name}
                    </div>
                  </div>
                </div>
              </div>
            `))}
        `:m}};function lt(t,i,e,o){var s,n=arguments.length,a=n<3?i:null===o?o=Object.getOwnPropertyDescriptor(i,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,i,e,o);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(a=(n<3?s(a):n>3?s(i,e,a):s(i,e))||a);return n>3&&a&&Object.defineProperty(i,e,a),a}t([i({type:Array})],ct.prototype,"recommendedPosts",void 0),ct=t([e("ac-activity-recommended-posts")],ct);const pt=(t,i,e)=>{const o=new Map;for(let s=i;s<=e;s++)o.set(t[s],s);return o},ht=_(class extends ${constructor(t){if(super(t),t.type!==C.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,i,e){let o;void 0===e?e=i:void 0!==i&&(o=i);const s=[],n=[];let a=0;for(const i of t)s[a]=o?o(i,a):a,n[a]=e(i,a),a++;return{values:n,keys:s}}render(t,i,e){return this.dt(t,i,e).values}update(t,[i,e,o]){var s;const n=T(t),{values:a,keys:r}=this.dt(i,e,o);if(!Array.isArray(n))return this.ct=r,a;const d=null!==(s=this.ct)&&void 0!==s?s:this.ct=[],c=[];let l,p,h=0,m=n.length-1,u=0,g=a.length-1;for(;h<=m&&u<=g;)if(null===n[h])h++;else if(null===n[m])m--;else if(d[h]===r[u])c[u]=I(n[h],a[u]),h++,u++;else if(d[m]===r[g])c[g]=I(n[m],a[g]),m--,g--;else if(d[h]===r[g])c[g]=I(n[h],a[g]),k(t,c[g+1],n[h]),h++,g--;else if(d[m]===r[u])c[u]=I(n[m],a[u]),k(t,n[h],n[m]),m--,u++;else if(void 0===l&&(l=pt(r,u,g),p=pt(d,h,m)),l.has(d[h]))if(l.has(d[m])){const i=p.get(r[u]),e=void 0!==i?n[i]:null;if(null===e){const i=k(t,n[h]);I(i,a[u]),c[u]=i}else c[u]=I(e,a[u]),k(t,n[h],e),n[i]=null;u++}else P(n[m]),m--;else P(n[h]),h++;for(;u<=g;){const i=k(t,c[g+1]);I(i,a[u]),c[u++]=i}for(;h<=m;){const t=n[h++];null!==t&&P(t)}return this.ct=r,A(t,c),z}});let mt,ut;async function gt(){return ut||async function(){if(mt)return(await mt).default;mt=window.ResizeObserver;try{new mt((function(){}))}catch(t){mt=import("./6255b0b7.js"),mt=(await mt).default}return ut=mt}()}const yt=Symbol("virtualizerRef");class vt extends Event{constructor(t){super(vt.eventName,{bubbles:!0}),this.first=t.first,this.last=t.last}}vt.eventName="rangeChanged";class bt extends Event{constructor(t){super(bt.eventName,{bubbles:!0}),this.first=t.first,this.last=t.last}}bt.eventName="visibilityChanged";class xt{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._mutationPromise=null,this._mutationPromiseResolver=null,this._mutationsObserved=!1,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollToIndex=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,!t)throw new Error("Virtualizer constructor requires a configuration object");if(!t.hostElement)throw new Error('Virtualizer configuration requires the "hostElement" property');this._init(t)}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t),this._initLayout(t)}async _initObservers(){this._mutationObserver=new MutationObserver(this._observeMutations.bind(this));const t=await gt();this._hostElementRO=new t((()=>this._hostElementSizeChanged())),this._childrenRO=new t(this._childrenSizeChanged.bind(this))}async _initLayout(t){t.layout?this.layout=t.layout:this.layout=(await import("./00b59482.js").then((function(t){return t.f}))).FlowLayout}_initHostElement(t){const i=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),i[yt]=this}async connected(){await this._initObservers();const t=this._isScroller;this._clippingAncestors=function(t,i=!1){return function(t,i=!1){const e=[];let o=i?t:wt(t);for(;null!==o;)e.push(o),o=wt(o);return e}(t,i).filter((t=>"visible"!==getComputedStyle(t).overflow))}(this._hostElement,t),this._schedule(this._updateLayout),this._observeAndListen()}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._mutationPromise=new Promise((t=>this._mutationPromiseResolver=t)),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach((t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)})),this._children.forEach((t=>this._childrenRO.observe(t))),this._scrollEventListeners.forEach((t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions)))}disconnected(){this._scrollEventListeners.forEach((t=>t.removeEventListener("scroll",this,this._scrollEventListenerOptions))),this._scrollEventListeners=[],this._clippingAncestors=[],this._mutationObserver.disconnect(),this._hostElementRO.disconnect(),this._childrenRO.disconnect()}_applyVirtualizerStyles(){const t=this._hostElement.style;t.display=t.display||"block",t.position=t.position||"relative",t.contain=t.contain||"strict",this._isScroller&&(t.overflow=t.overflow||"auto",t.minHeight=t.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let i=t.querySelector("[virtualizer-sizer]");i||(i=document.createElement("div"),i.setAttribute("virtualizer-sizer",""),t.appendChild(i)),Object.assign(i.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),i.innerHTML="&nbsp;",i.setAttribute("virtualizer-sizer",""),this._sizer=i}return this._sizer}get layout(){return this._layout}set layout(t){if(this._layout===t)return;let i=null,e={};if("object"==typeof t?(void 0!==t.type&&(i=t.type),e=t):i=t,"function"==typeof i){if(this._layout instanceof i)return void(e&&(this._layout.config=e));i=new i(e)}this._layout&&(this._measureCallback=null,this._measureChildOverride=null,this._layout.removeEventListener("scrollsizechange",this),this._layout.removeEventListener("scrollerrorchange",this),this._layout.removeEventListener("itempositionchange",this),this._layout.removeEventListener("rangechange",this),this._sizeHostElement(void 0),this._hostElement.removeEventListener("load",this._loadListener,!0)),this._layout=i,this._layout&&(this._layout.measureChildren&&"function"==typeof this._layout.updateItemSizes&&("function"==typeof this._layout.measureChildren&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.addEventListener("scrollsizechange",this),this._layout.addEventListener("scrollerrorchange",this),this._layout.addEventListener("itempositionchange",this),this._layout.addEventListener("rangechange",this),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout))}startBenchmarking(){null===this._benchmarkStart&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(null!==this._benchmarkStart){const t=window.performance.now(),i=t-this._benchmarkStart,e=performance.getEntriesByName("uv-virtualizing","measure").filter((i=>i.startTime>=this._benchmarkStart&&i.startTime<t)).reduce(((t,i)=>t+i.duration),0);return this._benchmarkStart=null,{timeElapsed:i,virtualizationTime:e}}return null}_measureChildren(){const t={},i=this._children,e=this._measureChildOverride||this._measureChild;for(let o=0;o<i.length;o++){const s=i[o],n=this._first+o;(this._itemsChanged||this._toBeMeasured.has(s))&&(t[n]=e.call(this,s,this._items[n]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:i,height:e}=t.getBoundingClientRect();return Object.assign({width:i,height:e},function(t){const i=window.getComputedStyle(t);return{marginTop:ft(i.marginTop),marginRight:ft(i.marginRight),marginBottom:ft(i.marginBottom),marginLeft:ft(i.marginLeft)}}(t))}set scrollToIndex(t){this._scrollToIndex=t,this._schedule(this._updateLayout)}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(){const{_rangeChanged:t,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||i)&&(this._notifyRange(),await this._mutationPromise),this._children.forEach((t=>this._childrenRO.observe(t))),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._scrollError&&(this._correctScrollError(this._scrollError),this._scrollError=null),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end")}_updateLayout(){this._layout&&(this._layout.totalItems=this._items.length,null!==this._scrollToIndex&&(this._layout.scrollToIndex(this._scrollToIndex.index,this._scrollToIndex.position),this._scrollToIndex=null),this._updateView(),null!==this._childMeasurements&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(this._itemsChanged),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._schedule(this._updateLayout)}handleEvent(t){switch(t.type){case"scroll":(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent();break;case"scrollsizechange":this._scrollSize=t.detail,this._schedule(this._updateDOM);break;case"scrollerrorchange":this._scrollError=t.detail,this._schedule(this._updateDOM);break;case"itempositionchange":this._childrenPos=t.detail,this._schedule(this._updateDOM);break;case"rangechange":this._adjustRange(t.detail),this._schedule(this._updateDOM);break;default:console.warn("event not handled",t)}}get _children(){const t=[];let i=this._hostElement.firstElementChild;for(;i;)i.hasAttribute("virtualizer-sizer")||t.push(i),i=i.nextElementSibling;return t}_updateView(){const t=this._hostElement,i=this._layout;let e,o,s,n,a,r;const d=t.getBoundingClientRect();e=0,o=0,s=window.innerHeight,n=window.innerWidth;for(let t of this._clippingAncestors){const i=t.getBoundingClientRect();e=Math.max(e,i.top),o=Math.max(o,i.left),s=Math.min(s,i.bottom),n=Math.min(n,i.right)}a=e-d.top+t.scrollTop,r=o-d.left+t.scrollLeft;const c=Math.max(1,s-e),l=Math.max(1,n-o);i.viewportSize={width:l,height:c},i.viewportScroll={top:a,left:r}}_sizeHostElement(t){const i=82e5,e=t&&t.width?Math.min(i,t.width):0,o=t&&t.height?Math.min(i,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${e}px, ${o}px)`;else{const t=this._hostElement.style;t.minWidth=e?`${e}px`:"100%",t.minHeight=o?`${o}px`:"100%"}}_positionChildren(t){if(t){const i=this._children;Object.keys(t).forEach((e=>{const o=e-this._first,s=i[o];if(s){const{top:i,left:o,width:n,height:a,xOffset:r,yOffset:d}=t[e];s.style.position="absolute",s.style.boxSizing="border-box",s.style.transform=`translate(${o}px, ${i}px)`,void 0!==n&&(s.style.width=n+"px"),void 0!==a&&(s.style.height=a+"px"),s.style.left=void 0===r?null:r+"px",s.style.top=void 0===d?null:d+"px"}}))}}async _adjustRange(t){const{_first:i,_last:e,_firstVisible:o,_lastVisible:s}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==i||this._last!==e,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==o||this._lastVisible!==s}_correctScrollError(t){const i=this._clippingAncestors[0];i?(i.scrollTop-=t.top,i.scrollLeft-=t.left):window.scroll(window.pageXOffset-t.left,window.pageYOffset-t.top)}_notifyRange(){this._hostElement.dispatchEvent(new vt({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new bt({first:this._firstVisible,last:this._lastVisible}))}_hostElementSizeChanged(){this._schedule(this._updateLayout)}async _observeMutations(){this._mutationsObserved||(this._mutationsObserved=!0,this._mutationPromiseResolver(),this._mutationPromise=new Promise((t=>this._mutationPromiseResolver=t)),this._mutationsObserved=!1)}_childLoaded(){}_childrenSizeChanged(t){if(this._layout.measureChildren){for(const i of t)this._toBeMeasured.set(i.target,i.contentRect);this._measureChildren()}this._itemsChanged=!1,this._rangeChanged=!1}}function ft(t){const i=t?parseFloat(t):NaN;return Number.isNaN(i)?0:i}function wt(t){if(null!==t.parentElement)return t.parentElement;const i=t.parentNode;return i&&i.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&i.host||null}const _t=t=>t,$t=(t,i)=>a`${i}: ${JSON.stringify(t,null,2)}`;let Ct=class extends l{constructor(){super(...arguments),this._renderItem=(t,i)=>$t(t,i+this._first),this._providedRenderItem=$t,this.items=[],this.scroller=!1,this.keyFunction=_t,this._first=0,this._last=-1}set renderItem(t){this._providedRenderItem=t,this._renderItem=(i,e)=>t(i,e+this._first),this.requestUpdate()}get renderItem(){return this._providedRenderItem}set layout(t){this._layout=t,t&&this._virtualizer&&(this._virtualizer.layout=t)}get layout(){return this[yt].layout}scrollToIndex(t,i="start"){this._virtualizer.scrollToIndex={index:t,position:i}}updated(){this._virtualizer&&(void 0!==this._layout&&(this._virtualizer.layout=this._layout),this._virtualizer.items=this.items)}firstUpdated(){const t=this._layout;this._virtualizer=new xt({hostElement:this,layout:t,scroller:this.scroller}),this.addEventListener("rangeChanged",(t=>{t.stopPropagation(),this._first=t.first,this._last=t.last})),this._virtualizer.connected()}connectedCallback(){super.connectedCallback(),this._virtualizer&&this._virtualizer.connected()}disconnectedCallback(){this._virtualizer&&this._virtualizer.disconnected(),super.disconnectedCallback()}createRenderRoot(){return this}render(){const{items:t,_renderItem:i,keyFunction:e}=this,o=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<this._last+1;i++)o.push(t[i]);return ht(o,e||_t,i)}};lt([i()],Ct.prototype,"renderItem",null),lt([i({attribute:!1})],Ct.prototype,"items",void 0),lt([i({reflect:!0,type:Boolean})],Ct.prototype,"scroller",void 0),lt([i()],Ct.prototype,"keyFunction",void 0),lt([d()],Ct.prototype,"_first",void 0),lt([d()],Ct.prototype,"_last",void 0),lt([i({attribute:!1})],Ct.prototype,"layout",null),Ct=lt([e("lit-virtualizer")],Ct);let Tt=class extends x{constructor(){super(...arguments),this.disableNewPosts=!1,this.noRecommendedPosts=!0,this.gotInitialData=!1,this.mode="activities",this.closeNewsfeedSubmissions=!1,this._moreToLoad=!1}updated(t){super.updated(t),t.has("domainId")&&this._domainIdChanged(),t.has("communityId")&&this._communityIdChanged(),t.has("groupId")&&this._groupIdChanged(),t.has("postId")&&this._postIdChanged(),t.has("userId")&&this._userIdChanged()}static get styles(){return[super.styles,g,s`
        :host {
          height: 100%;
        }

        lit-virtualizer {
          height: 100vh;
          width: 100vw;
        }

        .addNewsBox {
          background-color: #fff;
          width: 550px;
          height: 100%;
          padding-left: 16px;
          padding-right: 16px;
          margin-top: 16px;
          margin-left: 16px;
          margin-right: 16px;
        }

        @media (max-width: 600px) {
          .addNewsBox {
            width: 100%;
            height: 100%;
            margin-bottom: 8px;
            margin-top: 8px;
            margin-left: 0;
            margin-right: 0;
            width: -webkit-calc(100% - 16px);
            width: -moz-calc(100% - 16px);
            width: calc(100% - 16px);
          }
        }

        @media (max-width: 340px) {
          .addNewsBox {
            width: 100%;
            height: 100%;
            margin-bottom: 8px;
            margin-top: 8px;
            margin-left: 0;
            margin-right: 0;
            width: -webkit-calc(100% - 36px);
            width: -moz-calc(100% - 36px);
            width: calc(100% - 36px);
          }
        }

        .activityContainer {
          width: 550px;
          margin: 0;
          padding: 0;
        }

        @media (max-width: 600px) {
          .activityContainer {
            width: 100%;
          }
        }

        .recommendedPosts[not-active] {
          display: none;
        }

        .recommendedPosts[small] {
          display: none;
        }

        .mainActivityContent {
          height: 100% !important;
        }

        .headerUserImage {
          padding-top: 16px;
        }

        h1 {
          font-size: 24px;
        }

        mwc-button {
          color: var(--accent-color);
        }

        mwc-icon {
          width: 48px;
          height: 48px;
          padding-top: 14px;
        }

        .createdAt {
          color: #777;
          margin-top: 16px;
          font-size: 14px;
        }

        yp-ajax {
          background-color: var(--primary-background-color);
        }

        .deleteIcon {
          position: absolute;
          right: 8px;
          bottom: 8px;
          color: #ddd;
        }

        .withCursor {
          cursor: pointer;
        }

        @media (max-width: 960px) {
          .recommendedPosts {
            display: none !important;
          }
        }

        .topLevelActivitiesContainer[wide] {
        }

        [hidden] {
          display: none !important;
        }

        .spinnerContainer {
          margin-top: 32px;
        }

        .topSpinnerContainer {
          margin-top: 16px;
        }

        :focus {
          outline: none;
        }

        .notLoggedInButton {
          margin-top: 8px;
          width: 250px;
          background-color: #fff;
          margin-bottom: 8px;
          text-align: center;
        }

        .topLevelActivitiesContainer[rtl] {
          direction: rtl;
        }
      `]}renderItem(t,i){return a`
    <div class="layout vertical center-center" style="width: 100%;">
    <ac-activity
        tabindex="${i}"
        .hasLoggedInUser="${this.isLoggedIn}"
        class="activityContainer"
        .activity="${t}"
        .postId="${this.postId}"
        .groupId="${this.groupId}"
        .communityId="${this.communityId}"
        .domainId="${this.domainId}"
        @ak-delete-activity="${this._deleteActivity}"></ac-activity>
    </div>
    `}render(){return a`
      <div
        class="layout horizontal topLevelActivitiesContainer center-center"
        wide="${this.wide}"
        ?rtl="${this.rtl}">
        <div class="layout vertical self-start center-center">
          ${this.loggedInUser?a`
                <div
                  .loggedInUser="${this.isLoggedIn}"
                  elevation="1"
                  ?hidden="${this.closeNewsfeedSubmissions||!this.activities}"
                  class="layout horizontal addNewsBox shadow-elevation-2dp shadow-transition">
                  <yp-point-news-story-edit
                    .domainId="${this.domainId}"
                    .communityId="${this.communityId}"
                    .groupId="${this.groupId}"
                    .postGroupId="${this.postGroupId}"
                    .postId="${this.postId}"
                    @refresh="${this.loadNewData}">
                  </yp-point-news-story-edit>
                </div>
              `:a`
                <div class="layout vertical center-center">
                  <mwc-button
                    raised
                    class="layout horizontal notLoggedInButton"
                    .label="${this.t("loginToShareALink")}"
                    @click="${this._openLogin}">
                  </mwc-button>
                </div>
              `}
          ${this.activities?a`
                <lit-virtualizer
                  id="list"
                  .items=${this.activities}
                  .scrollTarget="${window}"
                  .layout="${E}"
                  id="activitiesList"
                  .renderItem=${this.renderItem.bind(this)}
                  @rangeChanged=${this.scrollEvent}></lit-virtualizer>
              `:m}
        </div>

        <div
          class="layout vertical self-start recommendedPosts"
          ?notActive="${this.noRecommendedPosts}"
          small="${!this.wide}"
          ?hidden="${!this.recommendedPosts}">
          <ac-activity-recommended-posts
            id="recommendedPosts"
            .recommendedPosts="${this.recommendedPosts}"
            class="layout vertical"></ac-activity-recommended-posts>
        </div>
      </div>
    `}scrollEvent(t){this.activities&&this._moreToLoad&&-1!=t.last&&t.last<this.activities.length&&t.last+5>=this.activities.length&&(this._moreToLoad=!0,this._loadMoreData())}connectedCallback(){switch(super.connectedCallback(),this.addListener("yp-point-deleted",this._pointDeleted),this.addListener("yp-refresh-activities-scroll-threshold",this._clearScrollThreshold),this.collectionType){case"domain":this.domainId=this.collectionId;break;case"community":this.communityId=this.collectionId;break;case"group":this.groupId=this.collectionId;break;case"post":this.postId=this.collectionId;break;case"user":this.userId=this.collectionId}}disconnectedCallback(){super.disconnectedCallback(),this.removeListener("yp-point-deleted",this._pointDeleted),this.removeListener("yp-refresh-activities-scroll-threshold",this._clearScrollThreshold)}_openLogin(){this.fire("yp-open-login")}_pointDeleted(t){if(this.activities)for(let i=0;i<this.activities.length;i++)this.activities[i].Point&&this.activities[i].Point.id==t.detail.pointId&&this._removeActivityId(this.activities[i].id)}get wideListOffset(){return this.groupId?"800":"415"}get ironListResizeScrollThreshold(){return this.wide?800:300}get ironListPaddingTop(){let t=this.$$("#activitiesList").offsetTop;return t-=75,this.isLoggedIn||this.groupId||(t-=75),t>0?(console.info("News scroll offset: "+t),t):(t=this.groupId?this.wide?this.isLoggedIn?700:580:this.isLoggedIn?950:690:this.wide?this.isLoggedIn?600:400:this.isLoggedIn?700:610,console.info("News (manual) scroll offset: "+t),t)}_activityDeletedResponse(t){this._removeActivityId(t.detail.response.activityId)}_removeActivityId(t){if(this.activities)for(let i=0;i<this.activities.length;i++)this.activities[i].id==t&&this.activities.splice(i,1)}_deleteActivity(t){this.activityIdToDelete=t.detail.id,window.appDialogs.getDialogAsync("confirmationDialog",(t=>{t.open(this.t("activity.confirmDelete"),this._reallyDelete.bind(this))}))}async _reallyDelete(){let t,i;this.domainId?(t="domains",i=this.domainId):this.communityId?(t="communities",i=this.communityId):this.groupId?(t="groups",i=this.groupId):this.postId?(t="posts",i=this.postId):this.userId&&(t="users",i=this.postId),t&&i&&this.activityIdToDelete?(await window.serverApi.deleteActivity(t,i,this.activityIdToDelete),this.activityIdToDelete=void 0):console.error("No activity found to delete")}_generateRequest(t,i){t&&(this.oldestProcessedActivityAt=void 0,this.noRecommendedPosts=!0,this._moreToLoad=!0,window.appUser&&window.appUser.user&&this.postId,this.mode="activities",this.url="/api/"+this.mode+"/"+i+"/"+t,this._loadMoreData(),"posts"!=i&&this._getRecommendations(i,t))}async _loadMoreData(){if(this.url&&this._moreToLoad){this._moreToLoad=!1;let t=this.url;this.oldestProcessedActivityAt&&(t+="?beforeDate="+this.oldestProcessedActivityAt);const i=await window.serverApi.getAcActivities(t);this._processResponse(i)}else console.warn("Trying to load more activities without conditions")}async loadNewData(){if(this.url&&this.latestProcessedActivityAt){let t=this.url;this.oldestProcessedActivityAt&&(t=t+"?afterDate="+this.latestProcessedActivityAt),this._processResponse(await window.serverApi.getAcActivities(t))}else this.url&&!this.latestProcessedActivityAt&&this._processResponse(await window.serverApi.getAcActivities(this.url))}_domainIdChanged(){this.domainId&&(this.activities=void 0,this.recommendedPosts=void 0,this._generateRequest(this.domainId,"domains"))}_communityIdChanged(){this.communityId&&(this.activities=void 0,this.recommendedPosts=void 0,this._generateRequest(this.communityId,"communities"))}_groupIdChanged(){this.groupId&&(this.activities=void 0,this.recommendedPosts=void 0,this._generateRequest(this.groupId,"groups"))}_postIdChanged(){this.postId&&(this.activities=void 0,this.recommendedPosts=void 0,this._generateRequest(this.postId,"posts"))}_userIdChanged(){this.userId&&(this.activities=void 0,this.recommendedPosts=void 0,this._generateRequest(this.userId,"users"))}_clearScrollThreshold(){}async _getRecommendations(t,i){let e=!0;this.activities&&this.activities.length>0&&(this.activities[0].Group&&this.activities[0].Group.configuration&&this.activities[0].Group.configuration.hideRecommendationOnNewsFeed&&(e=!1),this.activities[0].Community&&this.activities[0].Community.configuration&&this.activities[0].Community.configuration.hideRecommendationOnNewsFeed&&(e=!1)),e?(this.recommendedPosts=await window.serverApi.getRecommendations(t,i),this.noRecommendedPosts=!1):this.noRecommendedPosts=!0}_preProcessActivities(t){for(let i=0;i<t.length;i++)t[i].Point&&(t[i].Point.latestContent=t[i].Point.PointRevisions[t[i].Point.PointRevisions.length-1].content);return t}_processResponse(t){const i=this._preProcessActivities(t.activities);if(this.gotInitialData=!0,t.oldestProcessedActivityAt?this.oldestProcessedActivityAt=t.oldestProcessedActivityAt:console.warn("Have not set oldestProcessedActivityAt"),this.activities)for(let t=0;t<i.length;t++)this.url.indexOf("afterDate")>-1?this.activities.unshift(i[t]):this.activities.push(i[t]);else this.activities=i;i&&i.length>0&&((!this.latestProcessedActivityAt||this.latestProcessedActivityAt<i[0].created_at)&&(this.latestProcessedActivityAt=i[0].created_at),this.latestProcessedActivityAt||console.error("Have not set latest processed activity at"),this._moreToLoad=!0,(this.activities.length<15||i.length<3&&this.activities.length<100)&&this._loadMoreData()),this.fireGlobal("yp-refresh-activities-scroll-threshold",{}),setTimeout((()=>{})),this.closeNewsfeedSubmissions=!1,this.activities&&this.activities.length>0&&(this.activities[0].Group&&this.activities[0].Group.configuration&&this.activities[0].Group.configuration.closeNewsfeedSubmissions||this.activities[0].Community&&this.activities[0].Community.configuration&&this.activities[0].Community.configuration.closeNewsfeedSubmissions)&&(this.closeNewsfeedSubmissions=!0)}scrollToItem(t){if(console.log("Activity scrolling to item"),t&&this.activities)for(let i=0;i<this.activities.length;i++)if(this.activities[i]==t){this.$$("#list").scrollToIndex(i);break}}fireResize(){console.log("fireResize")}};t([i({type:Boolean})],Tt.prototype,"disableNewPosts",void 0),t([i({type:Boolean})],Tt.prototype,"noRecommendedPosts",void 0),t([i({type:Boolean})],Tt.prototype,"gotInitialData",void 0),t([i({type:Array})],Tt.prototype,"activities",void 0),t([i({type:Number})],Tt.prototype,"domainId",void 0),t([i({type:Number})],Tt.prototype,"collectionId",void 0),t([i({type:String})],Tt.prototype,"collectionType",void 0),t([i({type:Number})],Tt.prototype,"communityId",void 0),t([i({type:Number})],Tt.prototype,"groupId",void 0),t([i({type:Number})],Tt.prototype,"postId",void 0),t([i({type:Number})],Tt.prototype,"postGroupId",void 0),t([i({type:Number})],Tt.prototype,"userId",void 0),t([i({type:String})],Tt.prototype,"mode",void 0),t([i({type:String})],Tt.prototype,"url",void 0),t([i({type:Object})],Tt.prototype,"latestProcessedActivityAt",void 0),t([i({type:Object})],Tt.prototype,"oldestProcessedActivityAt",void 0),t([i({type:Number})],Tt.prototype,"activityIdToDelete",void 0),t([i({type:Array})],Tt.prototype,"recommendedPosts",void 0),t([d()],Tt.prototype,"closeNewsfeedSubmissions",void 0),Tt=t([e("ac-activities")],Tt);let It=class extends o{constructor(){super(...arguments),this.noPosts=!1,this.skipFitToMarkersNext=!1}updated(t){super.updated(t),t.has("groupId")&&this._groupChanged(),t.has("communityId")&&this._communityChanged()}static get styles(){return[super.styles,g,s`
        :host {
          display: block;
          width: 100%;
          height: 100%;
        }

        .mapContainer {
          margin: 0;
          padding: 0;
          width: 960px;
          height: 500px;
          margin-top: 16px;
          margin-bottom: 48px;
        }

        .noMapContainer {
          padding: 32px;
          margin: 16px;
          background-color: #fff;
          font-size: 22px;
          color: #222;
        }

        #map {
        }

        a {
          color: var(--primary-color-700);
        }

        h1 {
          padding: 24px;
        }

        @media (max-width: 934px) {
          .mapContainer {
            margin: 16px;
            width: 800px;
            height: 400px;
          }
        }

        @media (max-width: 832px) {
          .mapContainer {
            margin: 8px;
            width: 600px;
            height: 340px;
          }
        }

        @media (max-width: 632px) {
          .mapContainer {
            margin: 8px;
            width: 400px;
            height: 300px;
          }
        }

        @media (max-width: 420px) {
          .mapContainer {
            margin: 8px;
            width: 330px;
            height: 250px;
          }
        }

        @media (max-width: 360px) {
          .mapContainer {
            margin: 8px;
            width: 280px;
            height: 200px;
          }
        }

        #myInfoCard {
          background-color: #000;
          padding: 0;
          margin: 0 !important;
          --yp-post-map-info-mixin: {
            padding: 0;
            margin: 0 !important;
            max-width: 100%;
            max-height: 100%;
          }
          --yp-post-map-info-beak-mixin: {
            color: #f57c00;
          }
        }
      `]}renderInfoCard(t){return t?a` <yp-post-card mini .post="${t}"></yp-post-card> `:m}render(){return a`
      <div class="layout vertical center-center">
        ${this.posts?a`
              <div
                id="mapContainer"
                class="mapContainer shadow-elevation-2dp shadow-transition">
                <lit-google-map
                  additionalMapOptions="{'keyboardShortcuts':false,'fullscreenControl': false}"
                  id="map"
                  version="weekly"
                  api-key="AIzaSyDkF_kak8BVZA5zfp5R4xRnrX8HP3hjiL0"
                  fit-to-markers>
                  ${this.posts.map((t=>a`
                      <lit-google-map-marker
                        slot="markers"
                        .latitude="${t.location.latitude}"
                        .longitude="${t.location.longitude}"
                        click-events
                        class="marker"
                        @selector-item-activate="${()=>{this.markerClick(t)}}">

                      </lit-google-map-marker>
                    `))}
                </lit-google-map>
              </div>
            `:m}
        ${this.noPosts?a`
              <div lass="noMapContainer shadow-elevation-2dp shadow-transition">
                <div>${this.t("posts.noMapPosts")}</div>
              </div>
            `:m}

        <div class="layout horizontal center-center">
          <yp-ajax id="ajax" @response="${this._response}"></yp-ajax>
        </div>
      </div>
    `}resetMapHeight(){const t=this.$$("#mapContainer");if(t){const i=window.innerHeight;let e;e=(this.wide,i/1.5),t.style.width=Math.min(window.innerWidth-(this.wide?96:32),1920)+"px",t.style.height=e+"px",t.style.marginBottom="64px",!0===this.skipFitToMarkersNext?this.skipFitToMarkersNext=!1:setTimeout((()=>{const t=this.$$("#map");t&&(t.fitToMarkers=!0,setTimeout((()=>{t.fitToMarkers=!1}),1e3))}))}}connectedCallback(){switch(super.connectedCallback(),this.collectionType){case"community":this.communityId=this.collectionId;break;case"group":this.groupId=this.collectionId}this.addGlobalListener("yp-refresh-group-posts",this._refreshAjax)}disconnectedCallback(){super.disconnectedCallback(),this.removeGlobalListener("yp-refresh-group-posts",this._refreshAjax)}async _groupChanged(){this.groupId?(this.posts=void 0,this._response(await window.serverApi.getPostLocations("groups",this.groupId))):this.posts=void 0}async _communityChanged(){this.communityId?(this.posts=void 0,this._response(await window.serverApi.getPostLocations("communities",this.communityId))):this.posts=void 0}_refreshAjax(){this.groupId?this._groupChanged():this.communityId&&this._communityChanged(),this.skipFitToMarkersNext=!0}_response(t){t&&t.length>0?(this.noPosts=!1,this.posts=t):this.noPosts=!0,setTimeout((()=>{this.resetMapHeight()}))}markerClick(t){window.appGlobals.activity("clicked","marker"),this.selectedPost=t}};t([i({type:Array})],It.prototype,"posts",void 0),t([i({type:Number})],It.prototype,"groupId",void 0),t([i({type:Number})],It.prototype,"communityId",void 0),t([i({type:Boolean})],It.prototype,"noPosts",void 0),t([i({type:Object})],It.prototype,"selectedPost",void 0),t([i({type:Number})],It.prototype,"collectionId",void 0),t([i({type:String})],It.prototype,"collectionType",void 0),t([d()],It.prototype,"skipFitToMarkersNext",void 0),It=t([e("yp-post-map")],It);const kt=0,Pt=1,At=2;class zt extends o{constructor(t,i,e,o){super(),this.noHeader=!1,this.tabsHidden=!1,this.selectedTab=kt,this.hideNewsfeed=!1,this.locationHidden=!1,this.hideCollection=!1,this.collectionType=t,this.collectionItemType=i,this.collectionCreateFabIcon=e,this.collectionCreateFabLabel=o,this.addGlobalListener("yp-logged-in",this._getCollection.bind(this)),this.addGlobalListener("yp-got-admin-rights",this.refresh.bind(this))}connectedCallback(){super.connectedCallback(),this.collection&&this.refresh()}refresh(){var t,i;console.info("REFRESH"),this.collection&&(null!=this.collection.default_locale&&window.appGlobals.changeLocaleIfNeeded(this.collection.default_locale),void 0!==this.collection.theme_id&&window.appGlobals.theme.setTheme(this.collection.theme_id),this.fire("yp-set-home-link",{type:this.collectionType,id:this.collection.id,name:this.collection.name}),this.fire("yp-change-header",{headerTitle:null,documentTitle:this.collection.name,headerDescription:this.collection.description||this.collection.objectives}),(null===(t=this.collection.configuration)||void 0===t?void 0:t.hideAllTabs)||(null===(i=this.collection.configuration)||void 0===i?void 0:i.hideGroupLevelTabs)?this.tabsHidden=!0:this.tabsHidden=!1,this.$$("#collectionItems")&&this.$$("#collectionItems").refresh())}async _getCollection(){this.collectionId?(this.collection=void 0,this.collectionItems=void 0,this.collection=await window.serverApi.getCollection(this.collectionType,this.collectionId),this.refresh()):console.error("No collection id for _getCollection")}async _getHelpPages(t,i){if(this.collectionId){const e=await window.serverApi.getHelpPages(t||this.collectionType,i||this.collectionId);e&&this.fire("yp-set-pages",e)}else console.error("Collection id setup for get help pages")}get collectionTabLabel(){return`${this.t(L.transformCollectionTypeToApi(this.collectionItemType))} (${this.collectionItems?this.collectionItems.length:0})`}static get styles(){return[super.styles,s`
        mwc-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
        }

        mwc-tab {
          font-family: var(--app-header-font-family, Roboto);
        }

        mwc-tab-bar {
          width: 960px;
        }

        .header {
          background-color: var(--primary-background-color);
          background-image: var(--top-area-background-image, none);
          height: 300px;
        }

        .createFab[is-map] {
          right: inherit;
          left: 28px;
        }
      `]}renderHeader(){return this.collection&&!this.noHeader?a`
          <div class="layout vertical center-center header">
            <yp-collection-header
              .collection="${this.collection}"
              .collectionType="${this.collectionType}"
              aria-label="${this.collectionType}"
              role="banner"
            ></yp-collection-header>
          </div>
        `:m}renderNewsAndMapTabs(){return a`
      <mwc-tab
        ?hidden="${this.hideNewsfeed}"
        .label="${this.t("post.tabs.news")}"
        icon="rss_feed"
      ></mwc-tab>
      <mwc-tab
        ?hidden="${this.locationHidden||"domain"==this.collectionType}"
        .label="${this.t("post.tabs.location")}"
        icon="location_on"
      ></mwc-tab>
    `}renderTabs(){return this.collection&&!this.tabsHidden?a`
        <div class="layout vertical center-center">
          <mwc-tab-bar @MDCTabBar:activated="${this._selectTab}">
            <mwc-tab
              ?hidden="${this.hideCollection}"
              .label="${this.collectionTabLabel}"
              icon="groups"
            ></mwc-tab>
            ${this.renderNewsAndMapTabs()}
          </mwc-tab-bar>
        </div>
      `:m}renderCurrentTabPage(){let t;switch(this.selectedTab){case kt:t=this.collectionItems&&this.collectionItemType?a` <yp-collection-items-grid
                id="collectionItems"
                .collectionItems="${this.collectionItems}"
                .collection="${this.collection}"
                .collectionType="${this.collectionType}"
                .collectionItemType="${this.collectionItemType}"
                .collectionId="${this.collectionId}"
              ></yp-collection-items-grid>`:a``;break;case Pt:t=a`<ac-activities
          id="collectionActivities"
          .selectedTab="${this.selectedTab}"
          .collectionType="${this.collectionType}"
          .collectionId="${this.collectionId}"
        ></ac-activities>`;break;case At:t=a`<yp-post-map
          id="postsMap"
          .collectionType="${this.collectionType}"
          .collectionId="${this.collectionId}"
        ></yp-post-map>`}return t}render(){return a`
      ${this.renderHeader()} ${this.renderTabs()} ${this.renderCurrentTabPage()}
      ${this.createFabIcon&&this.createFabLabel?a`<mwc-fab
            ?extended="${this.wide}"
            class="createFab"
            ?is-map="${this.selectedTab===At}"
            .label="${this.t(this.createFabLabel)}"
            .icon="${this.createFabIcon}"
          ></mwc-fab>`:m}
    `}collectionIdChanged(){this._getCollection(),this._getHelpPages()}updated(t){if(super.updated(t),t.has("subRoute")&&this.subRoute){const t=this.subRoute.split("/");this.collectionId=parseInt(t[1]),t.length>2?this._setSelectedTabFromRoute(t[1]):this._setSelectedTabFromRoute("default")}t.has("collectionId")&&this.collectionId&&this.collectionIdChanged()}_selectTab(t){var i;this.selectedTab=null===(i=t.detail)||void 0===i?void 0:i.index}_setSelectedTabFromRoute(t){let i;switch(t){case"collection":i=kt;break;case"news":i=Pt;break;case"map":i=At;break;default:i=kt}i&&(this.selectedTab=i,window.appGlobals.activity("open",this.collectionType+"_tab_"+t))}scrollToCachedItem(){if(this.selectedTab===Pt&&window.appGlobals.cache.cachedActivityItem){const t=this.$$("#collectionActivities");t?(t.scrollToItem(window.appGlobals.cache.cachedActivityItem),window.appGlobals.cache.cachedActivityItem=void 0):console.error("No activities for scroll to item")}else this.selectedTab===kt&&this.scrollToCollectionItemSubClass()}scrollToCollectionItemSubClassDomain(){this.collection&&window.appGlobals.cache.backToDomainCommunityItems&&window.appGlobals.cache.backToDomainCommunityItems[this.collection.id]&&(this.$$("#collectionItems").scrollToItem(window.appGlobals.cache.backToDomainCommunityItems[this.collection.id]),window.appGlobals.cache.backToDomainCommunityItems[this.collection.id]=void 0)}setFabIconIfAccess(t,i){t||i?(this.createFabIcon=this.collectionCreateFabIcon,this.createFabLabel=this.collectionCreateFabLabel):(this.createFabIcon=void 0,this.createFabLabel=void 0)}_useHardBack(t){if(t&&t.customBackURL){const i=t.customBackURL;return!(i.startsWith("/community/")||i.startsWith("/group/")||i.startsWith("/domain/")||i.startsWith("/post/"))}return!1}}t([i({type:Boolean})],zt.prototype,"noHeader",void 0),t([i({type:Boolean})],zt.prototype,"tabsHidden",void 0),t([i({type:Number})],zt.prototype,"collectionId",void 0),t([i({type:String})],zt.prototype,"collectionName",void 0),t([i({type:Object})],zt.prototype,"collection",void 0),t([i({type:String})],zt.prototype,"subRoute",void 0),t([i({type:Number})],zt.prototype,"selectedTab",void 0),t([i({type:Array})],zt.prototype,"collectionItems",void 0),t([i({type:Boolean})],zt.prototype,"hideNewsfeed",void 0),t([i({type:Boolean})],zt.prototype,"locationHidden",void 0),t([i({type:Boolean})],zt.prototype,"hideCollection",void 0),t([i({type:String})],zt.prototype,"createFabIcon",void 0),t([i({type:String})],zt.prototype,"createFabLabel",void 0);let Lt=class extends M{static get styles(){return[super.styles,s`
        .urlToReviewButton {
          color: #fff;
          background-color: var(--accent-color, #000);
          padding: 8px;
          margin-top: 16px;
        }

        @media (max-width: 960px) {
          .urlToReviewButton {
              color: #FFF;
              background-color: var(--accent-color, #000);
              padding: 8px;
              margin-top: 0;
              margin-bottom: 16px;
          }
        }

      `]}renderFooter(){return this.collection.configuration.urlToReview?a`
        <div class="layout horizontal center-center" style="width: 100%">
          <div
            class="urlToReviewButton shadow-elevation-3dp layout vertical center-center"
            role="button"
            hidden$="[[!group.configuration.urlToReview]]"
          >
            <a
              href="${this.collection.configuration.urlToReview}"
              target="_blank"
            >
              <yp-magic-text
                class="urlToReviewActionText"
                largefont$="${this.largeFont}"
                textType="urlToReviewActionText"
                .contentLanguage="${this.collection.language}"
                .content="${this.collection.configuration.urlToReviewActionText}"
                .contentId="${this.collection.id}"
              >
              </yp-magic-text>
            </a>
          </div>
        </div>
      `:super.renderFooter()}};t([i({type:Object})],Lt.prototype,"collection",void 0),Lt=t([e("yp-group-header")],Lt);const St=0,Nt=1,Gt=2,Et=3,Rt=4,Ot=5;let Dt=class extends zt{constructor(){super("group","post","lightbulb_outline","post.create"),this.hasNonOpenPosts=!1,this.disableNewPosts=!1,this.selectedGroupTab=St,this.newGroupRefresh=!1,this.tabCounters={},this.configCheckTTL=45e3}connectedCallback(){super.connectedCallback(),this.addListener("yp-post-count",this._updateTabPostCount),this.addListener("yp-refresh-activities-scroll-threshold",this._clearScrollThreshold)}disconnectedCallback(){super.disconnectedCallback(),this.removeListener("yp-post-count",this._updateTabPostCount),this.removeListener("yp-refresh-activities-scroll-threshold",this._clearScrollThreshold)}_cancelConfigCheckTimer(){this.configCheckTimer&&(clearTimeout(this.configCheckTimer),this.configCheckTimer=void 0)}_startConfigCheckTimer(){this._cancelConfigCheckTimer(),this.collection&&(this.configCheckTimer=setTimeout(this._getGroupConfig.bind(this),this.configCheckTTL))}async _getGroupConfig(){if(this.collection){const t=await window.serverApi.getGroupConfiguration(this.collection.id);t?(this._doesGroupRequireRefresh(this.collection.configuration,t)&&(window.appDialogs.getDialogAsync("masterToast",(t=>{t.textContent=this.t("groupConfigurationHasBeenUpdated"),t.timeoutMs=7500})),this._refreshAjax()),this._startConfigCheckTimer()):this._cancelConfigCheckTimer()}else this._cancelConfigCheckTimer()}_doesGroupRequireRefresh(t,i){return!(!t||!i)&&(t.canVote!==i.canVote||t.canAddNewPosts!==i.canAddNewPosts||t.disableDebate!==i.disableDebate||t.hideNewPost!==i.hideNewPost)}_updateTabPostCount(t){const i=t.detail;this.tabCounters[i.type]=i.count,this._setupOpenTab(),setTimeout((()=>{this.requestUpdate()}))}_setupOpenTab(){this.hasNonOpenPosts&&(this.collection.configuration&&this.collection.configuration.makeMapViewDefault?console.log("Not opening tabs with ideas in map mode"):4===Object.keys(this.tabCounters).length&&this.selectedGroupTab===St&&(this.tabCounters.open&&this.tabCounters.open>0?this.selectedGroupTab=St:this.tabCounters.inProgress&&this.tabCounters.inProgress>0?this.selectedGroupTab=Nt:this.tabCounters.successful&&this.tabCounters.successful>0?this.selectedGroupTab=Gt:this.tabCounters.failed&&this.tabCounters.failed>0&&(this.selectedGroupTab=Et)))}tabLabelWithCount(t){const i=this.t("posts."+t);return"inProgress"===t&&(t="in_progress"),`${i} (${null!=this.tabCounters[t]?this.tabCounters[t]:"..."})`}getCurrentTabElement(){let t;switch(this.selectedGroupTab){case St:t=this.$$("#openPostList");break;case Nt:t=this.$$("#in_progressPostList");break;case Gt:t=this.$$("#successfulPostList");break;case Et:t=this.$$("#failedPostList");break;case Rt:t=this.$$("#newsfeed");break;case Ot:t=this.$$("#postMap")}return null===t&&(t=void 0),t}async _getCollection(){if(window.appGlobals.retryMethodAfter401Login=this._getCollection.bind(this),this.hasNonOpenPosts=!1,this.tabCounters={},this.collectionId&&window.appGlobals.cache.groupItemsCache[this.collectionId])this.collection=window.appGlobals.cache.groupItemsCache[this.collectionId],this.refresh();else if(this.collectionId){this.collection=void 0,this.collectionItems=void 0;const t=await window.serverApi.getCollection(this.collectionType,this.collectionId);t&&(this.collection=t.group,this.hasNonOpenPosts=t.hasNonOpenPosts,this.refresh())}window.appGlobals.retryMethodAfter401Login=void 0}renderGroupTabs(){return this.collection&&!this.tabsHidden?a`
        <div class="layout vertical center-center">
          <mwc-tab-bar @MDCTabBar:activated="${this._selectGroupTab}">
            <mwc-tab
              .label="${this.tabLabelWithCount("open")}"
              icon="lightbulb_outline"
            ></mwc-tab>
            ${this.hasNonOpenPosts?a`
                  <mwc-tab
                    .label="${this.tabLabelWithCount("inProgress")}"
                    icon="lightbulb_outline"
                  ></mwc-tab>
                  <mwc-tab
                    .label="${this.tabLabelWithCount("successful")}"
                    icon="lightbulb_outline"
                  ></mwc-tab>
                  <mwc-tab
                    .label="${this.tabLabelWithCount("failed")}"
                    icon="lightbulb_outline"
                  >
                  </mwc-tab>
                `:m}
            ${this.renderNewsAndMapTabs()}
          </mwc-tab-bar>
        </div>
      `:m}renderPostList(t){return this.collection?a`<div class="layout vertical center-center">
          <yp-posts-list
            id="${t}PostList"
            role="main"
            aria-label="${this.t("posts.posts")}"
            .selectedGroupTab="${this.selectedGroupTab}"
            .listRoute="${this.subRoute}"
            .statusFilter="${t}"
            .searchingFor="${this.searchingFor}"
            .group="${this.collection}"
          ></yp-posts-list>
        </div> `:a``}renderCurrentGroupTabPage(){let t;switch(this.selectedGroupTab){case St:t=this.renderPostList("open");break;case Nt:t=this.renderPostList("in_progress");break;case Gt:t=this.renderPostList("successful");break;case Et:t=this.renderPostList("failed");break;case Rt:t=a` <ac-activities
          id="newsfeed"
          .selectedGroupTab="${this.selectedGroupTab}"
          .collectionType="${this.collectionType}"
          .collectionId="${this.collectionId}"
        ></ac-activities>`;break;case Ot:t=a``}return t}renderHeader(){return this.collection&&!this.noHeader?a`
          <div class="layout vertical center-center header">
            <yp-group-header
              .collection="${this.collection}"
              .collectionType="${this.collectionType}"
              aria-label="${this.collectionType}"
              role="banner"
            ></yp-group-header>
          </div>
        `:m}render(){return a`
      ${this.renderHeader()}
      ${this.collection&&!this.collection.configuration.hideNewPost?a` <div
            class="layout vertical center-center"
            ?hidden="${this.collection.configuration.hideNewPost}"
          >
            <div>
              <yp-post-card-add
                role="button"
                aria-label="${this.t("post.new")}"
                .group="${this.collection}"
                ?disableNewPosts="${this.disableNewPosts}"
                @new-post="${this._newPost}"
              ></yp-post-card-add>
            </div>
          </div>`:m}
      ${this.renderGroupTabs()} ${this.renderCurrentGroupTabPage()}
      ${this.disableNewPosts||!this.collection||this.collection.configuration.hideNewPost?m:a` <mwc-fab
            .label="${this.t("post.new")}"
            icon="lightbulb"
            @click="${this._newPost}"
          ></mwc-fab>`}
    `}_selectGroupTab(t){this.selectedGroupTab=t.detail.index}_openHelpPageIfNeededOnce(){this.collection&&!sessionStorage.getItem("yp-welcome-for-group-"+this.collection.id)&&setTimeout((()=>{this.collection&&this.collection.configuration&&this.collection.configuration.welcomePageId&&(this.fire("yp-open-page",{pageId:this.collection.configuration.welcomePageId}),sessionStorage.setItem("yp-welcome-for-group-"+this.collection.id,"true"))}),1200)}_refreshAjax(){setTimeout((()=>{this._getCollection();const t=this.$$("#newsfeed");t&&t.loadNewData();const i=this.$$("#postsMap");i&&i.requestUpdate}),100)}_newPost(){window.appGlobals.activity("open","newPost"),window.appDialogs.getDialogAsync("postEdit",(t=>{t.setup(void 0,!0,void 0,this.collection),t.open(!0,{groupId:this.collectionId,group:this.collection})}))}_clearScrollThreshold(){this.$$("#scrollTheshold").clearTriggers()}_setSelectedTabFromRoute(t){let i;switch(t){case"open":i=St;break;case"inProgress":i=Nt;break;case"successfull":i=Gt;break;case"failed":i=Et;break;case"news":i=Rt;break;case"map":i=Ot;break;default:i=St}i&&(this.selectedGroupTab=i,window.appGlobals.activity("open",this.collectionType+"_tab_"+t))}get _isCurrentPostsTab(){return this.selectedGroupTab==St||this.selectedGroupTab==Nt||this.selectedGroupTab==Gt||this.selectedGroupTab==Et}_loadMoreData(){if(this._isCurrentPostsTab){const t=this.getCurrentTabElement();t?t._loadMoreData():console.error("Cant find tab to load data on"+this.selectedGroupTab)}else console.error("Trying to load more data on non posts tab")}goToPostOrNewsItem(){if(this._isCurrentPostsTab);else if(this.selectedGroupTab===Rt&&void 0!==window.appGlobals.cache.cachedActivityItem){const t=this.$$("#newsfeed");t?(t.scrollToItem(window.appGlobals.cache.cachedActivityItem),window.appGlobals.cache.cachedActivityItem=void 0):console.warn("No group activities for scroll to item")}}refresh(t=!1){var i,e,o;super.refresh();const s=this.collection;if(s){let t,n;this._openHelpPageIfNeededOnce(),s.configuration=window.appGlobals.overrideGroupConfigIfNeeded(s.id,s.configuration),null!=s.configuration.canAddNewPosts?!0===s.configuration.canAddNewPosts?this.disableNewPosts=!1:this.disableNewPosts=!0:this.disableNewPosts=!1,setTimeout((async()=>{const t=await window.serverApi.getHasNonOpenPosts(s.id);t&&(this.hasNonOpenPosts=t.hasNonOpenPosts)})),window.appGlobals.analytics.setCommunityAnalyticsTracker(null===(i=s.Community)||void 0===i?void 0:i.google_analytics_code),(null===(e=s.Community)||void 0===e?void 0:e.configuration)&&window.appGlobals.analytics.setCommunityPixelTracker(s.Community.configuration.facebookPixelId),null!=s.theme_id||s.configuration&&null!=s.configuration.themeOverrideColorPrimary?window.appGlobals.theme.setTheme(s.theme_id,s.configuration):s.Community&&(null!=s.Community.theme_id||s.Community.configuration&&s.Community.configuration.themeOverrideColorPrimary)?window.appGlobals.theme.setTheme(s.Community.theme_id,s.Community.configuration):s.Community&&s.Community.Domain&&null!=s.Community.Domain.theme_id?window.appGlobals.theme.setTheme(s.Community.Domain.theme_id):window.appGlobals.theme.setTheme(1),s.configuration.locationHidden&&1==s.configuration.locationHidden?this.locationHidden=!0:this.locationHidden=!1,s.configuration.useCommunityTopBanner&&s.Community&&s.Community.CommunityHeaderImages&&s.Community.CommunityHeaderImages.length>0?S.setupTopHeaderImage(this,s.Community.CommunityHeaderImages):s.GroupHeaderImages&&s.GroupHeaderImages.length>0?S.setupTopHeaderImage(this,s.GroupHeaderImages):S.setupTopHeaderImage(this,null);const a=u.checkGroupAccess(this.collection);s.configuration.customBackURL?(t=s.configuration.customBackURL,n=s.configuration.customBackName):s.Community&&s.Community.configuration&&s.Community.configuration.redirectToGroupId&&!a?(t="/domain/"+s.Community.Domain.id,n=s.Community.Domain.name):(t="/community/"+s.community_id,n=s.Community.name),this.fire("yp-change-header",{headerTitle:n,headerDescription:null===(o=s.Community)||void 0===o?void 0:o.description,headerIcon:"social:group",documentTitle:s.name,enableSearch:!0,hideHelpIcon:!!s.configuration.hideHelpIcon||null,useHardBack:this._useHardBack(s.configuration),backPath:t}),window.appGlobals.setAnonymousGroupStatus(s),window.appGlobals.setRegistrationQuestionGroup(s),s.configuration&&!0===s.configuration.disableFacebookLoginForGroup?window.appGlobals.disableFacebookLoginForGroup=!0:window.appGlobals.disableFacebookLoginForGroup=!1,s.configuration&&s.configuration.externalGoalTriggerUrl?window.appGlobals.externalGoalTriggerGroupId=s.id:window.appGlobals.externalGoalTriggerGroupId=void 0,s.Community&&s.Community.configuration&&s.Community.configuration.signupTermsPageId&&-1!=s.Community.configuration.signupTermsPageId?window.appGlobals.signupTermsPageId=s.Community.configuration.signupTermsPageId:window.appGlobals.signupTermsPageId=void 0,this._setupGroupSaml(s),window.appGlobals.currentGroup=s,s.configuration&&s.configuration.forceSecureSamlLogin&&!u.checkGroupAccess(s)||s.Community&&s.Community.configuration&&s.Community.configuration.forceSecureSamlLogin&&!u.checkCommunityAccess(s.Community)?window.appGlobals.currentForceSaml=!0:window.appGlobals.currentForceSaml=!1,s.configuration&&s.configuration.makeMapViewDefault&&(this.selectedGroupTab=Ot),s.Community&&s.Community.configuration&&s.Community.configuration.highlightedLanguages?window.appGlobals.setHighlightedLanguages(s.Community.configuration.highlightedLanguages):window.appGlobals.setHighlightedLanguages(void 0),this.hasNonOpenPosts&&this.tabCounters&&this._setupOpenTab(),s.configuration&&s.configuration.maxNumberOfGroupVotes&&window.appUser.calculateVotesLeftForGroup(s),s&&s.configuration&&s.configuration.isDataVisualizationGroup&&s.configuration.dataForVisualizationJson&&window.appDialogs.loadDataViz()}this.hasNonOpenPosts&&this.tabCounters&&(this.newGroupRefresh||!0===t)&&this._setupOpenTab(),this.newGroupRefresh=!1,window.appGlobals.postLoadGroupProcessing(s),this._startConfigCheckTimer()}_setupGroupSaml(t){t.Community&&t.Community.configuration&&t.Community.configuration.customSamlDeniedMessage?window.appGlobals.currentSamlDeniedMessage=t.Community.configuration.customSamlDeniedMessage:window.appGlobals.currentSamlDeniedMessage=void 0,t.Community&&t.Community.configuration&&t.Community.configuration.customSamlLoginMessage?window.appGlobals.currentSamlLoginMessage=t.Community.configuration.customSamlLoginMessage:window.appGlobals.currentSamlLoginMessage=void 0}scrollToCollectionItemSubClass(){this.collection&&window.appGlobals.cache.backToCommunityGroupItems&&window.appGlobals.cache.backToCommunityGroupItems[this.collection.id]&&(this.$$("#collectionItems").scrollToItem(window.appGlobals.cache.backToCommunityGroupItems[this.collection.id]),window.appGlobals.cache.backToCommunityGroupItems[this.collection.id]=void 0)}};t([i({type:Object})],Dt.prototype,"collection",void 0),t([i({type:String})],Dt.prototype,"searchingFor",void 0),t([i({type:Boolean})],Dt.prototype,"hasNonOpenPosts",void 0),t([i({type:Boolean})],Dt.prototype,"disableNewPosts",void 0),t([i({type:Number})],Dt.prototype,"selectedGroupTab",void 0),t([i({type:Object})],Dt.prototype,"configCheckTimer",void 0),t([d()],Dt.prototype,"newGroupRefresh",void 0),Dt=t([e("yp-group")],Dt);let Ft=class extends Dt{render(){return a`
      ${this.renderHeader()}
      ${this.collection?a`
            <yp-data-visualization
              .group="${this.collection}"
            ></yp-data-visualization>
          `:m}
    `}};Ft=t([e("yp-group-data-viz")],Ft);
