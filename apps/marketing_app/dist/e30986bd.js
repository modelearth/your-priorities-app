import{_ as t,e as i,n as e,a as n,r as o,p as s,Y as a,T as r,f as c,o as d,g as l}from"./39c6fc0c.js";import"./00b59482.js";import"./4cf369c5.js";let h=class extends n{static get prssoperties(){return{setting:{type:Object,notify:!0,observer:"_settingChanged"},frequency:{type:Number,notify:!0,observer:"_frequencyChanged"},method:{type:Number,notify:!0,observer:"_methodChanged"}}}updated(t){super.updated(t),t.has("setting")&&this._settingChanged()}static get styles(){return[super.styles,o`
        .half {
          width: 50%;
        }

        .notificationName {
          padding-top: 16px;
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 8px;
          padding-bottom: 4px;
          color: #333;
          border-bottom: solid 1px #ddd;
        }

        .notificationSub {
          color: #888;
        }

        mwc-radio {
          padding-top: 8px;
          padding-bottom: 8px;
        }
      `]}render(){return s`
      <div class="layout vertical">
        <div class="notificationName">${this.name}</div>
        <div class="layout horizontal wrap">
          <div class="layout vertical half">
            <div class="notificationSub">${this.t("notification.method")}</div>
            <div class="layout horizontal">
              <div id="notificationMethodGroup" name="method" class="method">
                ${this.availableMethods.map((t=>s`
                    <mwc-formfield .label="${t.name}">
                      <mwc-radio
                        name="method"
                        @change="${this._methodChanged}"
                        .value="${t.enumValue.toString()}"
                        ?checked="${t.enumValue==this.method}">
                      </mwc-radio>
                    </mwc-formfield>
                  `))}
              </div>
            </div>
          </div>
          <div class="layout vertical half">
            <div class="notificationSub">
              ${this.t("notification.frequency")}
            </div>
            <div class="layout horizontal">
              <div id="notificationFrequencyGroup" class="frequency">
                ${this.availableFrequencies.map((t=>s`
                    <mwc-formfield .label="${t.name}">
                      <mwc-radio
                        name="frequency"
                        ?disabled="${this._isDelayed(t)}"
                        @change="${this._frequencyChanged}"
                        .value="${t.enumValue.toString()}"
                        ?checked="${t.enumValue==this.frequency}">
                      </mwc-radio>
                    </mwc-formfield>
                  `))}
              </div>
            </div>
          </div>
        </div>
      </div>
    `}get availableMethods(){return this.language?[{name:this.t("notification.muted"),enumValue:0},{name:this.t("notification.browser"),enumValue:1},{name:this.t("notification.email"),enumValue:2}]:[]}_methodChanged(t){let i=t.target.value;i=parseInt(i),i&&this.method!=i&&(this.method=i,this.fire("yp-notification-changed")),this.method&&(this.setting.method=this.method)}_frequencyChanged(t){let i=t.target.value;i=parseInt(i),i&&this.frequency!=i&&(this.frequency=i,this.fire("yp-notification-changed")),this.frequency&&(this.setting.frequency=this.frequency)}_settingChanged(){this.setting&&(this.method=this.setting.method,this.frequency=this.setting.frequency)}_isDelayed(t){return t.enumValue>0}get availableFrequencies(){let t=[];return this.language&&this.method&&0!=this.method&&(1==this.method?(this.frequency=0,t=[{name:this.t("notification.asItHappens"),enumValue:0}]):2==this.method&&(t=[{name:this.t("notification.asItHappens"),enumValue:0},{name:this.t("notification.hourly"),enumValue:1},{name:this.t("notification.daily"),enumValue:2},{name:this.t("notification.weekly"),enumValue:3},{name:this.t("notification.monthly"),enumValue:5}])),t}};t([i({type:String})],h.prototype,"name",void 0),t([i({type:Object})],h.prototype,"setting",void 0),t([i({type:Number})],h.prototype,"frequency",void 0),t([i({type:Number})],h.prototype,"method",void 0),h=t([e("ac-notification-selection")],h);let p=class extends n{render(){return s`
      <ac-notification-selection
        .name="${this.t("notification.myPosts")}"
        .setting="${this.notificationsSettings.my_posts}">
      </ac-notification-selection>

      <ac-notification-selection
        .name="${this.t("notification.myPostsEndorsements")}"
        .setting="${this.notificationsSettings.my_posts_endorsements}">
      </ac-notification-selection>

      <ac-notification-selection
        .name="${this.t("notification.myPoints")}"
        .setting="${this.notificationsSettings.my_points}">
      </ac-notification-selection>

      <ac-notification-selection
        .name="${this.t("notification.myPointEndorsements")}"
        .setting="${this.notificationsSettings.my_points_endorsements}">
      </ac-notification-selection>

      <ac-notification-selection
        .name="${this.t("notification.allCommunity")}"
        .setting="${this.notificationsSettings.all_community}">
      </ac-notification-selection>

      <ac-notification-selection
        .name="${this.t("notification.allGroup")}"
        .setting="${this.notificationsSettings.all_group}">
      </ac-notification-selection>
    `}connectedCallback(){super.connectedCallback(),this.addListener("yp-notification-changed",this._settingsChanged.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.removeListener("yp-notification-changed",this._settingsChanged.bind(this))}_settingsChanged(){this.fire("yp-notifications-changed",this.notificationsSettings)}};t([i({type:Object})],p.prototype,"notificationsSettings",void 0),p=t([e("ac-notification-settings")],p);let m=class extends a{constructor(){super(...arguments),this.action="/users",this.selected=0}updated(t){super.updated(t),t.has("user")&&this._userChanged(),t.has("notificationSettings")&&this._notificationSettingsChanged()}static get styles(){return[super.styles,o`
        .container {
          height: 100%;
          min-height: 350px;
        }

        .additionalSettings {
          margin-top: 16px;
        }

        .icon {
          padding-right: 8px;
        }

        h2 {
          padding-top: 16px;
        }

        #deleteUser {
          max-width: 250px;
          margin-top: 16px;
          color: #f00;
        }

        .disconnectButtons {
          margin-top: 8px;
          max-width: 250px;
        }

        yp-language-selector {
          margin-bottom: 8px;
        }

        mwc-button {
          text-align: center;
        }

        .ssn {
          margin-top: 0;
          margin-bottom: 4px;
          font-weight: 400;
        }

        [hidden] {
          display: none !important;
        }

        .tempApiKeyContainer {
          margin-top: 16px;
          margin-bottom: 16px;
          padding-bottom: 8px;
          padding-top: 8px;
        }

        .temporaryApiKeyInformation {
          color: #F00;
          font-size: 16px;
          margin-bottom: 8px;

        }

        .apiKey {
          font-size: 16px;
          padding-right: 8px;
          padding-top: 12px;
          font-weight: bold;
        }
      `]}render(){var t,i;return this.user?s`
          <yp-edit-dialog
            name="userEdit"
            id="editDialog"
            .title="${this.editHeaderText}"
            doubleWidth
            icon="face"
            .action="${this.action}"
            @iron-form-response="${this._editResponse}"
            method="${this.method}"
            .params="${this.params}"
            .saveText="${this.saveText}"
            .snackbarText="${this.snackbarText||""}">
            <div class="container">
              <div class="layout vertical wrap container">
                <mwc-textfield
                  id="name"
                  name="name"
                  type="text"
                  .label="${this.t("Name")}"
                  .value="${this.user.name}"
                  maxlength="50"
                  char-counter>
                </mwc-textfield>

                <div class="ssn" ?hidden="${!this.user.ssn}">
                  ${this.t("ssn")}: ${this.user.ssn}
                </div>

                <mwc-textfield
                  id="email"
                  name="email"
                  type="text"
                  .label="${this.t("Email")}"
                  .value="${this.user.email||""}">
                </mwc-textfield>

                <div class="layout horizontal wrap">
                  <div class="layout vertical additionalSettings">
                    <yp-file-upload
                      id="profileImageUpload"
                      raised
                      target="/api/images?itemType=user-profile"
                      method="POST"
                      buttonIcon="photo_camera"
                      .buttonText="${this.t("image.profile.upload")}"
                      @success="${this._profileImageUploaded}">
                    </yp-file-upload>
                  </div>

                  <div class="layout vertical additionalSettings" hidden="">
                    <yp-file-upload
                      id="headerImageUpload"
                      raised
                      target="/api/images?itemType=user-header"
                      method="POST"
                      buttonIcon="photo_camera"
                      .buttonText="${this.t("image.header.upload")}"
                      @success="${this._headerImageUploaded}">
                    </yp-file-upload>
                  </div>
                </div>

                <yp-language-selector
                  name="defaultLocale"
                  auto-translate-option-disabled=""
                  .selectedLocale="${this.user.default_locale}"></yp-language-selector>

                <mwc-button ?hidden="${null===(t=this.user.profile_data)||void 0===t?void 0:t.hasApiKey}" raised .label="${this.t("createApiKey")}" class="disconnectButtons" @click="${this._createApiKey}"></mwc-button>

                <mwc-button ?hidden="${!(null===(i=this.user.profile_data)||void 0===i?void 0:i.hasApiKey)}" .label="${this.t("reCreateApiKey")}" raised class="disconnectButtons" @click="${this._reCreateApiKey}"></mwc-button>

                <div class="layout vertical tempApiKeyContainer" ?hidden$="${!this.currentApiKey}">
                  <div class="temporaryApiKeyInformation">${this.t("showingApiKeyOnce")}</div>
                  <div class="layout horizontal">
                    <div class="apiKey">${this.currentApiKey}</div>
                    <mwc-button raised .label="${this.t("copyApiKey")}" @click="${this._copyApiKey}"></mwc-button>
                  </div>
                </div>

                <mwc-button
                  ?hidden="${!this.user.facebook_id}"
                  class="disconnectButtons"
                  raised
                  .label="${this.t("disconnectFromFacebookLogin")}"
                  @click="${this._disconnectFromFacebookLogin}"></mwc-button>

                <mwc-button
                  ?hidden="${!this.user.ssn}"
                  raised
                  .label="${this.t("disconnectFromSamlLogin")}"
                  class="disconnectButtons"
                  @click="${this._disconnectFromSamlLogin}"></mwc-button>

                <mwc-button
                  id="deleteUser"
                  raised
                  .label="${this.t("deleteOrAnonymizeUser")}"
                  @click="${this._deleteOrAnonymizeUser}"></mwc-button>

                <input
                  type="hidden"
                  name="uploadedProfileImageId"
                  .value="${this.uploadedProfileImageId}" />

                <input
                  type="hidden"
                  name="uploadedHeaderImageId"
                  .value="${this.uploadedHeaderImageId}" />

                <h2>${this.t("user.notifications")}</h2>

                <ac-notification-settings
                  .notificationsSettings="${this.notificationSettings}"></ac-notification-settings>

                <input
                  type="hidden"
                  name="notifications_settings"
                  .value="${this.encodedUserNotificationSettings||""}" />
              </div>
            </div>
          </yp-edit-dialog>
        `:r}connectedCallback(){super.connectedCallback(),this.addListener("yp-notifications-changed",this._setNotificationSettings.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.removeListener("yp-notifications-changed",this._setNotificationSettings.bind(this))}_editResponse(t){t.detail.response.duplicateEmail&&this.fire("yp-error",this.t("emailAlreadyRegisterred"))}_checkIfValidEmail(){return this.user&&this.user.email&&!(this.user.email.indexOf("@citizens.is")>-1&&this.user.email.indexOf("anonymous")>-1)}_disconnectFromFacebookLogin(){this._checkIfValidEmail()?window.appDialogs.getDialogAsync("confirmationDialog",(t=>{t.open(this.t("areYouSureYouWantToDisconnectFacebookLogin"),this._reallyDisconnectFromFacebookLogin.bind(this),!0)})):this.fire("yp-error",this.t("cantDisconnectFromFacebookWithoutValidEmail"))}async _reallyDisconnectFromFacebookLogin(){await window.serverApi.disconnectFacebookLogin(),this.user.facebook_id=void 0,window.appGlobals.notifyUserViaToast(this.t("disconnectedFacebookLoginFor")+" "+this.user.email)}_disconnectFromSamlLogin(){this._checkIfValidEmail()?window.appDialogs.getDialogAsync("confirmationDialog",(t=>{t.open(this.t("areYouSureYouWantToDisconnectSamlLogin"),this._reallyDisconnectFromSamlLogin.bind(this),!0)})):this.fire("yp-error",this.t("cantDisconnectFromSamlWithoutValidEmail"))}async _reallyDisconnectFromSamlLogin(){await window.serverApi.disconnectSamlLogin(),this.user&&(this.user.ssn=void 0),window.appGlobals.notifyUserViaToast(this.t("disconnectedSamlLoginFor")+" "+this.user.email)}_setNotificationSettings(t){this.notificationSettings=t.detail,this.encodedUserNotificationSettings=this._encodeNotificationsSettings(this.notificationSettings)}_notificationSettingsChanged(){this.notificationSettings&&(this.encodedUserNotificationSettings=this._encodeNotificationsSettings(this.notificationSettings))}_encodeNotificationsSettings(t){return t?JSON.stringify(t):void 0}_userChanged(){this.user&&(this.notificationSettings=this.user.notifications_settings)}_profileImageUploaded(t){const i=JSON.parse(t.detail.xhr.response);this.uploadedProfileImageId=i.id}_headerImageUploaded(t){const i=JSON.parse(t.detail.xhr.response);this.uploadedHeaderImageId=i.id}customRedirect(){window.appUser.checkLogin()}clear(){this.user={name:"",email:""},this.uploadedProfileImageId=void 0,this.uploadedHeaderImageId=void 0,this.$$("#headerImageUpload").clear(),this.$$("#profileImageUpload").clear()}_copyApiKey(){navigator.clipboard.writeText(this.currentApiKey)}async _createApiKey(){window.appGlobals.activity("open","user.createApiKey");const t=await window.serverApi.createApiKey();this.currentApiKey=t.apiKey,this.user.profile_data.hasApiKey=!0}_reCreateApiKey(){window.appGlobals.activity("open","user.reCreateApiKey"),window.appDialogs.getDialogAsync("apiActionDialog",(t=>{t.setup("/api/users/createApiKey",this.t("areYouSureYouWantToRecreateApiKey"),this._createApiKey.bind(this),this.t("recreate"),"POST"),t.open()}))}setup(t,i,e,n=!1){this.user=t,this.new=i,this.refreshFunction=e,n&&(this.selected=1),this.setupTranslation()}setupTranslation(){this.new?(this.editHeaderText=this.t("user.new"),this.snackbarText=this.t("userToastCreated"),this.saveText=this.t("create")):(this.saveText=this.t("save"),this.editHeaderText=this.t("user.edit"),this.snackbarText=this.t("userToastUpdated"))}_deleteOrAnonymizeUser(){window.appDialogs.getDialogAsync("userDeleteOrAnonymize",(t=>{t.open()}))}};t([i({type:String})],m.prototype,"action",void 0),t([i({type:Object})],m.prototype,"user",void 0),t([i({type:Number})],m.prototype,"selected",void 0),t([i({type:String})],m.prototype,"encodedUserNotificationSettings",void 0),t([i({type:String})],m.prototype,"currentApiKey",void 0),t([i({type:Number})],m.prototype,"uploadedProfileImageId",void 0),t([i({type:Number})],m.prototype,"uploadedHeaderImageId",void 0),t([i({type:Object})],m.prototype,"notificationSettings",void 0),m=t([e("yp-user-edit")],m);let u=class extends n{constructor(){super(...arguments),this.spinnerActive=!1}static get styles(){return[super.styles,o`
        mwc-dialog {
          padding-left: 8px;
          padding-right: 8px;
          background-color: #fff;
          max-width: 450px;
        }

        .buttons {
          margin-top: 16px;
          margin-bottom: 4px;
          text-align: center;
        }

        .boldButton {
          font-weight: bold;
        }

        .header {
          font-size: 22px;
          color: #f00;
          font-weight: bold;
        }

        @media (max-width: 480px) {
        }

        @media (max-width: 320px) {
        }
      `]}render(){return s`
      <mwc-dialog id="dialog" modal>
        <div class="header layout horizontal center-center">
          <div>${this.t("deleteOrAnonymizeUser")}</div>
        </div>

        <div class="helpInfo">${this.t("anonymizeUserInfo")}</div>

        <div class="helpInfo">${this.t("deleteUserInfo")}</div>

        <div class="buttons layout vertical center-center">
          <div class="layout horizontal ajaxElements">
            <mwc-circular-progress-four-color hidden?="${!this.spinnerActive}"></mwc-circular-progress-four-color>
          </div>
          <div class="layout horizontal center-center">
            <mwc-button
              .label="${this.t("cancel")}"
              slot="secondaryAction"
              dialog-dismiss=""></mwc-button>
            <mwc-button
              .label="${this.t("deleteAccount")}"
              raised
              slot="primaryAction"

              class="boldButton"
              @click="${this._deleteUser}"></mwc-button>
            <mwc-button
              .label="${this.t("anonymizeAccount")}"
              slot="primaryAction"
              raised
              class="boldButton"
              @click="${this._anonymizeUser}"></mwc-button>
          </div>
        </div>
      </mwc-dialog>
    `}_deleteUser(){window.appDialogs.getDialogAsync("confirmationDialog",(t=>{t.open(this.t("areYouSureYouWantToDeleteUser"),this._deleteUserFinalWarning.bind(this),!0)}))}_deleteUserFinalWarning(){setTimeout((()=>{window.appDialogs.getDialogAsync("confirmationDialog",(t=>{t.open(this.t("areYouReallySureYouWantToDeleteUser"),this._deleteUserForReal.bind(this),!0)}))}))}_anonymizeUser(){window.appDialogs.getDialogAsync("confirmationDialog",(t=>{t.open(this.t("areYouSureYouWantToAnonymizeUser"),this._anonymizeUserFinalWarning.bind(this),!0)}))}_anonymizeUserFinalWarning(){setTimeout((()=>{window.appDialogs.getDialogAsync("confirmationDialog",(t=>{t.open(this.t("areYouReallySureYouWantToAnonymizeUser"),this._anonymizeUserForReal.bind(this),!0)}))}))}async _deleteUserForReal(){this.spinnerActive=!0,await window.serverApi.deleteUser(),this.spinnerActive=!1,this._completed()}async _anonymizeUserForReal(){this.spinnerActive=!0,await window.serverApi.anonymizeUser(),this.spinnerActive=!1,this._completed()}open(){this.$$("#dialog").open=!0}_completed(){this.$$("#dialog").open=!1,window.location.href="/"}};t([i({type:Boolean})],u.prototype,"spinnerActive",void 0),u=t([e("yp-user-delete-or-anonymize")],u);let g=class extends n{constructor(){super(...arguments),this.useFinalWarning=!1,this.haveIssuedFinalWarning=!1,this.hideCancel=!1}static get styles(){return[o`
        mwc-dialog {
          background-color: #fff;
        }
      `]}render(){return s`
      <mwc-dialog id="confirmationDialog">
        <div>${this.confirmationText}</div>
        <mwc-button
          ?hidden="${this.hideCancel}"
          @click="${this._reset}"
          slot="secondaryAction"
          .label="${this.t("cancel")}"></mwc-button>
        <mwc-button
          @click="${this._confirm}"
          slot="primaryAction"
          .label="${this.t("confirm")}"></mwc-button>
      </mwc-dialog>
    `}_reset(){this.confirmationText=void 0,this.onConfirmedFunction=void 0,this.haveIssuedFinalWarning=!1,this.useFinalWarning=!1,this.hideCancel=!1}open(t,i,e=!1,n=!1,o=!1){this.confirmationText=t,this.onConfirmedFunction=i,this.$$("#confirmationDialog").open=!0,this.useFinalWarning=!!n,this.haveIssuedFinalWarning=!1,this.hideCancel=!!o}_confirm(){this.useFinalWarning&&!this.haveIssuedFinalWarning?(this.haveIssuedFinalWarning=!0,this.$$("#confirmationDialog").open=!1,this.confirmationText=this.t("finalDeleteWarning"),setTimeout((()=>{this.$$("#confirmationDialog").open=!0}))):this.onConfirmedFunction&&(this.onConfirmedFunction(),this._reset())}};t([i({type:String})],g.prototype,"confirmationText",void 0),t([i({type:Object})],g.prototype,"onConfirmedFunction",void 0),t([i({type:Boolean})],g.prototype,"useFinalWarning",void 0),t([i({type:Boolean})],g.prototype,"haveIssuedFinalWarning",void 0),t([i({type:Boolean})],g.prototype,"hideCancel",void 0),g=t([e("yp-confirmation-dialog")],g);let y=class extends c{constructor(){super(...arguments),this.notificationText="",this.largerFont=!1}static get styles(){return[super.styles,o`
        .icon {
          height: 32px;
          width: 32px;
          min-width: 32px;
          min-height: 32px;
        }

        .text[large-font] {
          margin: 8px;
          font-size: 16px;
          margin-left: 12px;
        }
      `]}render(){const t={"mdc-snackbar--stacked":this.stacked,"mdc-snackbar--leading":this.leading};return s` <div
      class="mdc-snackbar ${d(t)}"
      @keydown="${this._handleKeydown}"
    >
      <div class="mdc-snackbar__surface">
        ${this.user?s`
              <yp-user-with-organization
                class="layout horizontal self-end"
                .user="${this.user}"
              ></yp-user-with-organization>
            `:r}
        <div class="layout horizontal">
          <mwc-icon
            class="icon"
            ?hidden="${!this.icon}"
            .icon="${this.icon}"
          ></mwc-icon>
          <!-- add larger-font -->
          ${l(this.notificationText,this.open)}
        </div>
        <div class="mdc-snackbar__actions">
          <slot name="action" @click="${this._handleActionClick}"></slot>
          <slot name="dismiss" @click="${this._handleDismissClick}"></slot>
        </div>
      </div>
    </div>`}openDialog(t,i,e,n,o,s){this.notificationText=i,e||(this.user=t),this.icon=n||void 0,this.largerFont=!!s,o&&(this.timeoutMs=o),this.open=!0}};t([i({type:String})],y.prototype,"notificationText",void 0),t([i({type:Object})],y.prototype,"user",void 0),t([i({type:String})],y.prototype,"icon",void 0),t([i({type:Boolean})],y.prototype,"largerFont",void 0),y=t([e("ac-notification-toast")],y);
