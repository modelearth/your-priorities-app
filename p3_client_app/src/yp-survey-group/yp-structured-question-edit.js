import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import 'lite-signal/lite-signal.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-radio-group/paper-radio-group.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import '../yp-app-globals/paper-textarea-aria.js';
import '../yp-behaviors/yp-language-behavior.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
import { IronFormElementBehavior } from '@polymer/iron-form-element-behavior/iron-form-element-behavior.js';
import { IronValidatableBehavior } from '@polymer/iron-validatable-behavior/iron-validatable-behavior.js';

class YpStructuredQuestionEdit extends mixinBehaviors([IronFormElementBehavior, IronValidatableBehavior], PolymerElement) {
  static get template() {
    return html`
    <style include="iron-flex iron-flex-alignment">
      :host {
        display: block;
        font-size: 16px;
      }

      a {
        color: #000;
      }

      .question {
        margin-top: 32px;
        margin-bottom: 8px;
        color: #000;
        font-size: 18px;
        line-height: 1.5;
      }

      .question[use-small-font] {
        font-size: 16px;
      }

      hr {
        border-top: 2px dashed var(--accent-color);
        margin-top: 48px;
        margin-bottom: 32px;
      }

      .general {
        color: #000;
      }

      .noBottomMargin {
        margin-bottom: 0;
      }

      .header[is-not-first] {
        margin-top: 54px;
      }

      paper-dropdown-menu {
        margin-top: 16px;
      }

      .numberInput {
      }

      paper-checkbox {
        margin-bottom: 16px;
      }

      paper-input, paper-textarea-aria {
        --paper-input-container-label: {
          color: #000;
          font-size: 18px;
        }
      }

      paper-input[use-small-font], paper-textarea-aria[use-small-font] {
        --paper-input-container-label: {
          font-size: 16px;
        }
      }

      paper-input {
        margin-bottom: 32px;
      }

      paper-radio-group {
        margin-top: 16px;
        margin-bottom: 16px;
        font-size: 16px;
      }

      paper-radio-button {
        --paper-radio-button-label-color: #333;
        font-size: 16px;
      }

      .checkBoxesLabel {
        margin-bottom: 36px;
      }

      .radiosLabel {
        margin-bottom: 16px;
        margin-top: 48px;
      }

      .radiosLabel[is-first-rating] {
        margin-top: 24px;
      }

      paper-textarea-aria.textAreaLong {
        --paper-input-container: {
          margin: 0;
          padding: 0;
        }
      }

      paper-input.textAreaLong {
        --paper-input-container: {
          margin: 0;
          padding: 0;
        }
      }

      .longQuestion {
        font-size: 18px;
        font-weight: 400;
        color: #000;
        padding-bottom: 0;
        margin-bottom: 0;
      }

      .longQuestion[use-small-font] {
        font-size: 16px;
        color: #333;
      }

      .longQuestion[has-content] {
        font-size: 12px;
      }

      .longQuestion[has-focus] {
        color: var(--accent-color);
      }

      paper-checkbox {
        --paper-checkbox-label-color: #333;
        margin-left: 42px;
        margin-bottom: 24px;
      }

      .general[less-bottom-margin] {
        margin-bottom: -32px;
      }

      .general[extra-top-margin] {
        margin-top: 32px;
      }

      .lessBottomMargin {
        margin-bottom: -32px;
      }

      [hidden] {
        display: none !important;
      }

      .header {
        font-size: 26px;
        font-weight: bold;
        line-height: 1.5;
      }

      .header[is-first] {
        background-color: var(--accent-color);
        color: #FFF;
        font-size: 32px;
        padding: 24px;
      }

      @media (min-width: 800px) {
        paper-input[half-width-desktop] {
          width: 50%;
        }

        :host {
          padding: 0;
          margin: 0;
        }
      }

      paper-radio-button {
        margin-left: 24px;
      }

      .specifyInput {
        max-width: 220px;
        margin-left: 24px;
        margin-top: -16px;
        margin-bottom: 0;
      }

      .specifyCheckBox {
        margin-left: 42px;
        margin-bottom: 12px;
      }

      @media (max-width: 600px) {
        .header {
          font-size: 22px;
        }

        .header[is-first] {
          font-size: 24px;
        }
      }

    </style>

    <template is="dom-if" if="[[_isTextField(question)]]">

      <template is="dom-if" if="[[_isNumberSubType(question)]]">
        <paper-input id="structuredQuestion_[[index]]" value="{{question.value}}" always-float-label="[[_floatIfValueOrIE(question.value)]]" label="[[_getTextWithIndex(question)]]" char-counter="" use-small-font\$="[[useSmallFont]]" title\$="[[question.text]]" on-keypress="_keyPressed" type="text" allowed-pattern="[0-9]" half-width-desktop\$="[[question.halfWidthDesktop]]" on-value-changed="_debounceChangeEvent" required\$="[[question.required]]" maxlength="[[question.maxLength]]">
        </paper-input>
      </template>

      <template is="dom-if" if="[[!_isNumberSubType(question)]]">
        <paper-input id="structuredQuestion_[[index]]" value="{{question.value}}" always-float-label="[[_floatIfValueOrIE(question.value)]]" label="[[_getTextWithIndex(question)]]" char-counter="" use-small-font\$="[[useSmallFont]]" title\$="[[question.text]]" on-keypress="_keyPressed" type="[[question.subType]]" half-width-desktop\$="[[question.halfWidthDesktop]]" on-value-changed="_debounceChangeEvent" required\$="[[question.required]]" maxlength="[[question.maxLength]]">
        </paper-input>
      </template>

    </template>

    <template is="dom-if" if="[[_isTextFieldLong(question)]]">
      <div class="question general longQuestion" has-focus\$="[[longFocus]]" use-small-font\$="[[useSmallFont]]" id="structuredQuestionIntro_[[index]]" inner-h-t-m-l="[[_getTextWithIndex(question)]]"></div>

      <template is="dom-if" if="[[_isNumberSubType(question)]]">
        <paper-input id="structuredQuestion_[[index]]" value="{{question.value}}" char-counter="" use-small-font\$="[[useSmallFont]]" on-keypress="_keyPressed" on-focus="setLongFocus" on-blur="setLongUnFocus" allowed-pattern="[0-9]" type="text" title\$="[[question.text]]" no-label-float="" half-width-desktop\$="[[question.halfWidthDesktop]]" on-value-changed="_debounceChangeEvent" required\$="[[question.required]]" maxlength="[[question.maxLength]]">
        </paper-input>
      </template>

      <template is="dom-if" if="[[!_isNumberSubType(question)]]">
        <paper-input id="structuredQuestion_[[index]]" value="{{question.value}}" char-counter="" use-small-font\$="[[useSmallFont]]" on-keypress="_keyPressed" on-focus="setLongFocus" on-blur="setLongUnFocus" type="[[question.subType]]" title\$="[[question.text]]" no-label-float="" half-width-desktop\$="[[question.halfWidthDesktop]]" on-value-changed="_debounceChangeEvent" required\$="[[question.required]]" maxlength="[[question.maxLength]]">
        </paper-input>
      </template>

    </template>

    <template is="dom-if" if="[[_isTextarea(question)]]">
      <paper-textarea-aria id="structuredQuestion_[[index]]" data-type="text" value="{{question.value}}" on-keypress="_keyPressed" minlength="2" always-float-label="[[_floatIfValueOrIE(question.value)]]" label="[[_getTextWithIndex(question)]]" char-counter="" use-small-font\$="[[useSmallFont]]" on-value-changed="_debounceChangeEvent" rows="3" max-rows="5" maxrows="5" required\$="[[question.required]]" maxlength="[[question.maxLength]]">
      </paper-textarea-aria>
    </template>

    <template is="dom-if" if="[[_isTextareaLong(question)]]">
      <div class="question general longQuestion" has-focus\$="[[longFocus]]" has-content\$="[[question.value]]" use-small-font\$="[[useSmallFont]]" id="structuredQuestionIntro_[[index]]" inner-h-t-m-l="[[_getTextWithIndex(question)]]"></div>

      <paper-textarea-aria id="structuredQuestion_[[index]]" data-type="text" value="{{question.value}}" on-keypress="_keyPressed" minlength="2" char-counter="" on-focus="setLongFocus" on-blur="setLongUnFocus" no-label-float="" use-small-font\$="[[useSmallFont]]" on-value-changed="_debounceChangeEvent" rows="3" max-rows="5" maxrows="5" required\$="[[question.required]]" maxlength="[[question.maxLength]]">
      </paper-textarea-aria>
    </template>

    <template is="dom-if" if="[[_isTextHeader(question)]]">
      <div class="header" is-not-first\$="[[index]]" is-first\$="[[!index]]">[[question.text]]</div>
    </template>

    <template is="dom-if" if="[[_isTextDescription(question)]]">
      <div class="question general" id="structuredQuestionQuestion_[[index]]" use-small-font\$="[[useSmallFont]]" inner-h-t-m-l="[[_textWithLinks(question)]]" extra-top-margin\$="[[question.extraTopMargin]]" less-bottom-margin\$="[[question.lessBottomMargin]]"></div>
    </template>

    <template is="dom-if" if="[[_isSeparator(question)]]">
      <hr>
    </template>

    <template is="dom-if" if="[[_isRadios(question)]]">
      <div class="question general radiosLabel" use-small-font\$="[[useSmallFont]]" is-first-rating\$="[[isFirstRating]]" id="structuredQuestionIntro_[[index]]" inner-h-t-m-l="[[_getTextWithIndex(question)]]"></div>

      <paper-radio-group required\$="[[question.required]]" data-type="radios" on-selected-changed="_radioChanged" id="structuredQuestion_[[index]]" name="structuredQuestionRatioGroup_[[index]]" class\$="[[_getRadioClass(question)]]">
        <template is="dom-repeat" items="[[question.radioButtons]]" as="radioButton" index-as="buttonIndex">
          <template is="dom-if" if="[[!radioButton.isSpecify]]">
            <paper-radio-button use-small-font\$="[[useSmallFont]]" on-keypress="setRadioEventType" id="structuredQuestionRatioGroup_[[index]]_[[buttonIndex]]" name="[[radioButton.text]]">
              [[radioButton.text]]
            </paper-radio-button>
          </template>
          <template is="dom-if" if="[[radioButton.isSpecify]]" class="layout horizontal">
            <paper-radio-button use-small-font\$="[[useSmallFont]]" on-keypress="setRadioEventType" id="structuredQuestionRatioGroup_[[index]]_[[buttonIndex]]" name="[[radioButton.text]]">
              [[radioButton.text]]
            </paper-radio-button>
            <template is="dom-if" if="[[_isNumberSubType(radioButton)]]">
              <paper-input class="specifyInput" hidden="" no-label-float="" on-value-changed="_debounceChangeEvent" maxlength="[[question.maxLength]]" allowed-pattern="[0-9]" type="text" id="structuredQuestion_[[index]]_[[buttonIndex]]__radioOther"></paper-input>
            </template>
            <template is="dom-if" if="[[!_isNumberSubType(radioButton)]]">
              <paper-input class="specifyInput" hidden="" no-label-float="" on-value-changed="_debounceChangeEvent" maxlength="[[question.maxLength]]" type="[[radioButton.subType]]" id="structuredQuestion_[[index]]_[[buttonIndex]]__radioOther"></paper-input>
            </template>
          </template>
        </template>
      </paper-radio-group>
    </template>

    <template is="dom-if" if="[[_isCheckboxes(question)]]">
      <div id="structuredQuestionIntro_[[index]]" class="question general checkBoxesLabel" use-small-font\$="[[useSmallFont]]" inner-h-t-m-l="[[_getTextWithIndex(question)]]"></div>
      <div id="structuredQuestion_[[index]]" data-type="checkboxes" class="layout vertical">
        <template is="dom-repeat" items="[[question.checkboxes]]" as="checkbox" index-as="buttonIndex">
          <template is="dom-if" if="[[!checkbox.isSpecify]]">
            <paper-checkbox id="structuredQuestionCheckbox_[[index]]_[[buttonIndex]]" on-change="_checkboxChanged">
              [[checkbox.text]]
            </paper-checkbox>
          </template>
          <template is="dom-if" if="[[checkbox.isSpecify]]">
            <paper-checkbox id="structuredQuestionCheckbox_[[index]]_[[buttonIndex]]" on-change="_checkboxChanged">
              [[checkbox.text]]
            </paper-checkbox>
            <paper-input class="specifyInput specifyCheckBox" hidden="" no-label-float="" on-value-changed="_debounceChangeEvent" type="[[checkbox.subType]]" id="structuredQuestion_[[index]]_[[buttonIndex]]_checkboxOther"></paper-input>
          </template>
        </template>
      </div>
    </template>

    <template is="dom-if" if="[[_isDropDown(question)]]">
      <paper-dropdown-menu id="structuredQuestion_[[index]]" data-type="dropdown" label="[[_getTextWithIndex(question)]]" required\$="[[question.required]]">
        <paper-listbox slot="dropdown-content" attr-for-selected="name">
          <template is="dom-repeat" items="[[question.dropdownOptions]]" as="dropDownOptions">
            <paper-item name="[[dropDownOptions.text]]">[[dropDownOptions.text]]</paper-item>
          </template>
        </paper-listbox>
      </paper-dropdown-menu>
    </template>
`;
  }

  static get is() {
    return 'yp-structured-question-edit';
  }

  static get properties() {
    return {

      question: {
        type: Object
      },

      index: {
        type: Number
      },

      language: {
        type: String,
      },

      hideQuestionIndex: {
        type: Boolean,
        value: false
      },

      dontFocusFirstQuestion: {
        type: Boolean,
        value: false
      },

      useSmallFont: {
        type: Boolean,
        value: false
      },

      structuredAnswers: {
        type: Array,
        observer: '_structuredAnsweredChanged'
      },

      longFocus: {
        type: Boolean,
        value: false
      },

      isLastRating: {
        type: Boolean,
        value: false
      },

      isFirstRating: {
        type: Boolean,
        value: false
      }
    }
  }

  setLongUnFocus() {
    this.set('longFocus', false);
  }

  setLongFocus() {
    this.set('longFocus', true);
  }

  _isNumberSubType (item) {
    return item && item.subType==="number"
  }

  _keyPressed(event) {
    if (event.which == 13 || event.keyCode == 13) {
      this.fire('yp-goto-next-index', {currentIndex: this.index});
    }
  }

  setRadioEventType (event) {
    this.radioKeypress = true;
  }

  _sendDebouncedChange(detail) {
    if (!this.debunceChangeEventTimer) {
      this.debunceChangeEventTimer = this.async(function () {
        this.fire('yp-answer-content-changed', detail);
        this.debunceChangeEventTimer = null;
        this._resizeScrollerIfNeeded();
      }, 2000);
    }
  }

  _debounceChangeEvent(event, detail) {
    event.stopPropagation();
    this._sendDebouncedChange(detail);
  }

  _getTextWithIndex(question) {
    if (question.questionIndex && !this.hideQuestionIndex) {
      return question.questionIndex + ". " + question.text;
    } else {
      return question.text;
    }
  }

  _getRadioClass(question) {
    if (question.subType && question.subType === "rating" && !this.isLastRating) {
      return "layout horizontal wrap lessBottomMargin";
    } else if (question.subType && question.subType === "rating") {
      return "layout horizontal wrap";
    } else {
      return "layout vertical";
    }
  }

  _textWithLinks(question) {
    var text = linkifyHtml(question.text);
    text = text.replace(/\n/g, "<br>");
    return text;
  }

  _resizeScrollerIfNeeded() {
    this.fire('resize-scroller');
  }

  _floatIfValueOrIE(value) {
    var ie11 = /Trident.*rv[ :]*11\./.test(navigator.userAgent);
    return ie11 || value;
  }

  validate() {
    return true;
    var liveQuestion = this.$$("#structuredQuestion_" + this.index);
    if (liveQuestion) {
      if (liveQuestion.dataset.type === "dropdown") {
        return true; // DO something if required
      } else if (liveQuestion.dataset.type === "radios") {
        return true; // DO something if required
      } else if (liveQuestion.dataset.type === "checkboxes") {
        return true; // DO something if required
      } else {
        if (liveQuestion) {
          return liveQuestion.validate();
        } else {
          return true;
        }
      }
    }
  }

  focus() {
    if (this.question.type.toLowerCase() === "textfield" ||
      this.question.type.toLowerCase() === "textfieldlong" ||
      this.question.type.toLowerCase() === "textarea" ||
      this.question.type.toLowerCase() === "textarealong" ||
      this.question.type.toLowerCase() === "numberfield"
    ) {
      var item = this.$$("#structuredQuestion_" + this.index);
      if (item) {
        this.async(function () {
          item.focus();
        }, 250);
      }
    }
  }

  cleanValue (value) {
    if (value) {
      return value.replace(/,/g,';').replace(/:/g,';');
    } else {
      console.warn("No value for cleanValue");
      return "";
    }
  }

  getAnswer () {
    var item = this.$$("#structuredQuestion_" + this.index);

    if (item) {
      var value = null;

      if (this.question.type.toLowerCase() === "textfield" ||
        this.question.type.toLowerCase() === "textfieldlong" ||
        this.question.type.toLowerCase() === "textarea" ||
        this.question.type.toLowerCase() === "textarealong" ||
        this.question.type.toLowerCase() === "numberfield"
      ) {
        value = item.value;
      } else if (this.question.type.toLowerCase() === "radios") {
        if (item.selected) {
          var selectedRadio = null;
          this.question.radioButtons.forEach(function (button, buttonIndex) {
            if (button.text === item.selected) {
              selectedRadio = button;
              if (selectedRadio.isSpecify) {
                var radioInput = this.$$("#structuredQuestion_" + this.index + "_"+buttonIndex+"__radioOther");
                if (radioInput) {
                  value = selectedRadio.text + ":" + this.cleanValue(radioInput.value);
                } else {
                  value = selectedRadio.text;
                }
              } else {
                value = selectedRadio.text;
              }
            }
          }.bind(this));
        }
      } else if (this.question.type.toLowerCase() === "checkboxes") {
        var selectedCheckboxes = "";
        for (var i = 0; i < item.children.length; i++) {
          if (item.children[i].checked) {
            var checkboxSubId = item.children[i].id.split("_")[2];
            var selectedCheckbox = this.question.checkboxes[checkboxSubId];
            if (selectedCheckbox.isSpecify) {
              var checkboxInput = this.$$("#structuredQuestion_" + this.index + "_" + checkboxSubId + "_checkboxOther");
              if (checkboxInput && checkboxInput.value !== "") {
                selectedCheckboxes += selectedCheckbox.text + ":" + this.cleanValue(checkboxInput.value) + ",";
              } else {
                selectedCheckboxes += selectedCheckbox.text + ",";
              }
            } else {
              selectedCheckboxes += selectedCheckbox.text + ",";
            }
          }
        }

        if (selectedCheckboxes !== "") {
          value = selectedCheckboxes.substring(0, selectedCheckboxes.length - 1);
        }
      }

      return {uniqueId: this.question.uniqueId, value: value}
    } else {
      console.error("Can't find question item for "+this.question.text);
    }
  }

  setAnswer(value) {
    if (value) {
      var item = this.$$("#structuredQuestion_" + this.index);

      if (item) {
        if (this.question.type.toLowerCase() === "textfield" ||
          this.question.type.toLowerCase() === "textfieldlong" ||
          this.question.type.toLowerCase() === "textarea" ||
          this.question.type.toLowerCase() === "textarealong" ||
          this.question.type.toLowerCase() === "numberfield"
        ) {
          item.value = value;
        } else if (this.question.type.toLowerCase() === "radios") {
          var specifyInput = null;
          if (value.indexOf(":") > -1) {
            var splitText = value.split(":");
            value = splitText[0];
            specifyInput = splitText[1];
          }

          this.question.radioButtons.forEach(function (button, buttonIndex) {
            if (button.text === value) {
              item.select(value);
              if (specifyInput) {
                var input = this.$$("#structuredQuestion_" + this.index + "_"+buttonIndex+"__radioOther");
                if (input) {
                  input.hidden = false;
                  input.value = specifyInput;
                } else {
                  debugger;
                  console.error("Can't find checkbox specify value");
                }
              }
            }
          }.bind(this));
      } else if (this.question.type.toLowerCase() === "checkboxes") {
        var checkboxValues = value.split(',');
        var specifyInputs = {};
        var hasSpecifyInputs = false;
        for (var i = 0; i < checkboxValues.length; i++) {
          if (checkboxValues[i].indexOf(":") > -1) {
            var splitText = checkboxValues[i].split(":");
            checkboxValues[i] = splitText[0];
            specifyInputs[splitText[0]] = splitText[1];
            hasSpecifyInputs = true;
          }
        }
        for (var i = 0; i < item.children.length; i++) {
          if (item.children[i]) {
            var checkboxSubId = item.children[i].id.split("_")[2];
            var selectedCheckbox = this.question.checkboxes[checkboxSubId];
            if (selectedCheckbox) {
              if (checkboxValues.indexOf(selectedCheckbox.text) > -1) {
                item.children[i].checked = true;
                if (hasSpecifyInputs) {
                  var input = this.$$("#structuredQuestion_" + this.index + "_" + checkboxSubId + "_checkboxOther");
                  if (input && specifyInputs[selectedCheckbox.text]) {
                    input.hidden = false;
                    input.value = specifyInputs[selectedCheckbox.text];
                  } else {
                    console.error("Can't find checkbox specify value");
                  }
                }
              }
            } else {
              console.debug("No selectedCheckbox");
            }
          }
        }
      }
    } else {
      console.error("cant find answer for item index "+this.index);
    }
  }
}

  hide() {
    var item = this.$$("#structuredQuestion_" + this.index);
    if (item) {
      item.hidden = true;

      var introItem = this.$$("#structuredQuestionIntro_" + this.index);
      if (introItem) {
        introItem.hidden = true;
      }
    } else {
      console.error("Can't find question index: "+this.index);
    }
  }

  show() {
    var item = this.$$("#structuredQuestion_" + this.index);
    if (item) {
      item.hidden = false;
      var introItem = this.$$("#structuredQuestionIntro_" + this.index);
      if (introItem) {
        introItem.hidden = false;
      }
    } else {
      console.error("Can't find question index: "+this.index);
    }
  }

  _openSubQuestion() {
    this.dispatchEvent(new CustomEvent('yp-open-sub-question', {
      bubbles: true,
      composed: true,
      detail: this.question.id
    }));
  }

  _closeSubQuestion() {
    this.dispatchEvent(new CustomEvent('yp-close-sub-question', {
      bubbles: true,
      composed: true,
      detail: this.question.id
    }));
  }

  _checkboxChanged(event, detail) {
    if (event.target.checked) {
      var checkboxSubId = event.target.id.split("_")[2];

      var selectedCheckbox = this.question.checkboxes[checkboxSubId];
      if (selectedCheckbox.isSpecify) {
        var checkboxInput = this.$$("#structuredQuestion_" + this.index + "_" + checkboxSubId + "_checkboxOther");
        if (checkboxInput) {
          checkboxInput.hidden = false;
          if (!checkboxInput.value) {
            checkboxInput.value ="";
          }
          checkboxInput.focus();
        } else {
          console.error("Can't find checkbox input");
        }
      }
    }

    if (this.question.maxLength) {
      var checkedCount = 0;
      var item = this.$$("#structuredQuestion_"+this.index);
      for (var i = 0; i < item.children.length; i++) {
        if (item.children[i].tagName.toLowerCase()==="paper-checkbox" && item.children[i].checked) {
          checkedCount+=1;
        }
      }

      if (checkedCount>=parseInt(this.question.maxLength)) {
        for (var x = 0; x < item.children.length; x++) {
          if (item.children[x].tagName.toLowerCase()==="paper-checkbox" && !item.children[x].checked) {
            item.children[x].disabled = true;
          }
        }
      } else {
        for (var n = 0; n < item.children.length; n++) {
          if (item.children[n].tagName.toLowerCase()==="paper-checkbox" && item.children[n].disabled) {
            item.children[n].disabled = false;
          }
        }
      }
    }

    event.stopPropagation();
    this._sendDebouncedChange({value: 1});
  }

  _radioChanged(event, detail) {
    event.stopPropagation();
    this._sendDebouncedChange({value: 1});

    var selectedRadio = null;

    this.question.radioButtons.forEach(function (button, buttonIndex) {
      if (button.text === detail.value) {
        selectedRadio = button;
        if (selectedRadio.skipTo) {
          this.fire('yp-skip-to-unique-id', {fromId: this.question.uniqueId, toId: selectedRadio.skipTo});
        } else if (selectedRadio.isSpecify) {
          var input = this.$$("#structuredQuestion_" + this.index + "_"+buttonIndex+"__radioOther");
          if (input) {
            input.hidden = false;
            input.focus();
          } else {
            debugger;
            console.error("Can't find radio specify value");
          }
        } else {
          this.async(function () {
            if(!this.radioKeypress) {
              this.fire('yp-goto-next-index', { currentIndex: this.index });
            }
          });

          var hasSkipToId;

          this.question.radioButtons.forEach(function (button) {
            if (button.skipTo) {
              hasSkipToId = button.skipTo;
            }
          }.bind(this));

          if (hasSkipToId) {
            this.fire('yp-open-to-unique-id', {fromId: this.question.uniqueId, toId: hasSkipToId});
          }
        }
      }
    }.bind(this));
  }

  _isTextarea(question) {
    return (question.type && question.type.toLowerCase() === 'textarea') || (question.type === undefined && question.maxLength > 1);
  }

  _isTextareaLong(question) {
    return (question.type && question.type.toLowerCase() === 'textarealong');
  }

  _isTextField(question) {
    return (question.type && question.type.toLowerCase() === 'textfield');
  }

  _isTextFieldLong(question) {
    return (question.type && question.type.toLowerCase() === 'textfieldlong');
  }

  _isNumberField(question) {
    return (question.type && question.type.toLowerCase() === 'numberfield');
  }

  _isTextHeader(question)
  {
    return (question.type && question.type.toLowerCase() === 'textheader');
  }

  _isTextDescription(question) {
    return (question.type && question.type.toLowerCase() === 'textdescription');
  }

  _isCheckboxes(question) {
    return (question.type && question.type.toLowerCase() === 'checkboxes');
  }

  _isSeparator(question) {
    return (question.type && question.type.toLowerCase() === 'separator');
  }

  _isRadios(question) {
    return (question.type && question.type.toLowerCase() === 'radios');
  }

  _isDropDown(question) {
    return (question.type && question.type.toLowerCase() === 'dropdown');
  }

  _structuredAnsweredChanged(structuredAnswers) {
    if (structuredAnswers && this.question.uniqueId) {
      var BreakException = {};
      try {
        structuredAnswers.forEach(function (answer) {
          if (this.question.uniqueId === answer.uniqueId) {
            this.async(function () {
              this.setAnswer(answer.value);
            }, 100);
            throw BreakException;
          }
        }.bind(this));
      } catch (e) {
        if (e !== BreakException) throw e;
      }
    }
  }

  ready() {
    if (window.i18nTranslation) {
      this.set('language', window.locale);
    }

    if (this.question) {
      if (this.question.type==="numberField") {
        this.question.type="textField";
        this.question.subType="number"
      }
    }

    this.async(function () {
      if (this.question.questionIndex === 1 && !this.dontFocusFirstQuestion) {
        this.focus();
      }
    }, 500);

    super.ready();
  }
}

customElements.define(YpStructuredQuestionEdit.is, YpStructuredQuestionEdit);
