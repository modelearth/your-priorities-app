import '@polymer/polymer/polymer-legacy.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import { ypLanguageBehavior } from '../yp-behaviors/yp-language-behavior.js';
import '../yp-post/yp-post-cover-media.js';
import { YpPostBehavior } from '../yp-post/yp-post-behaviors.js';
import { ypTruncateBehavior } from '../yp-behaviors/yp-truncate-behavior.js';
import { ypMediaFormatsBehavior } from '../yp-behaviors/yp-media-formats-behavior.js';
import { ypGotoBehavior } from '../yp-behaviors/yp-goto-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { YpBaseElement } from '../yp-base-element.js';

class AcActivityRecommendedPostsLit extends YpBaseElement {
  static get properties() {
    return {
      recommendedPosts: {
        type: Array,
        value: null,
        observer: '_recommendedPostsChanged'
      }
    }
  }

  static get styles() {
    return [
      css`

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

      .description, .post-name {
        padding-left: 16px;
        padding-right: 16px;
      }

      .post-name {
        font-size: 15px;
        padding: 16px;
        margin: 0;
        background-color: #FFF;
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
        background-color: #FFF !important;
      }

      .headerText {
        font-size: 20px;
        margin: 16px;
        max-width: 220px;
        padding-top: 8px;
        padding-bottom: 8px;
        width: 220px;
        color: #FFF;
        background-color: var(--primary-color-700);
      }
    `, YpFlexLayout]
  }

  render() {
    return html`
    ${this.activity ? html`
    <div class="headerText layout horizontal center-center">
      ${this.t('recommendedPosts')}
    </div>

    ${this.recommendedPosts.map(post => html`
      <div class="postContainer">
        <paper-material .elevation="1" class="postItem">
          <div class="layout vertical postItem" @tap="${this.goToPost}">
            <div class="layout horizontal">
              <yp-post-cover-media tiny="" .post="${this.post}"></yp-post-cover-media>
            </div>
            <div class="post-name layout horizontal center-center">
              ${this.post.name}
            </div>
          </div>
        </paper-material>
      </div>
    `)}

` : html``}
`
  }

/*
  behaviors: [
    ypLanguageBehavior,
    YpPostBehavior,
    ypTruncateBehavior,
    ypMediaFormatsBehavior,
    ypGotoBehavior
  ],
*/

  _recommendedPostsChanged(newValue) {
  }
}

window.customElements.define('ac-activity-recommended-posts-lit', AcActivityRecommendedPostsLit)
