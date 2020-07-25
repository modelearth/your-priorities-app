import { property, html, css, LitElement } from 'lit-element';
import { nothing, TemplateResult } from 'lit-html';
//import { ifDefined } from 'lit-html/directives/if-defined';
import { YpBaseElement } from '../@yrpri/yp-base-element.js';
import { YpAccessHelpers } from '../@yrpri/YpAccessHelpers.js';
import { YpMediaHelpers } from '../@yrpri/YpMediaHelpers.js';

import '@material/mwc-tab-bar';
import '@material/mwc-fab';
import './yp-collection-header.js';
import './yp-collection-items-grid.js';
import { YpCollectionItemsGrid } from './yp-collection-items-grid.js';

//TODO: Remove
interface AcActivity extends LitElement {
  scrollToItem(item: YpDatabaseItem): () => void;
}

export abstract class YpCollection extends YpBaseElement {
  @property({ type: Boolean })
  noHeader = false;

  @property({ type: Boolean })
  tabsHidden = false;

  @property({ type: Number })
  collectionId: number | undefined;

  @property({ type: String })
  collectionName: string | undefined;

  @property({ type: Object })
  collection: YpCollectionData | undefined;

  @property({ type: String })
  subRoute: string | undefined;

  @property({ type: Number })
  selectedTab: CollectionTabTypes = CollectionTabTypes.Collection;

  @property({ type: Array })
  collectionItems: Array<YpCommunityData | YpGroupData> | undefined;

  @property({ type: Boolean })
  hideNewsfeed = false;

  @property({ type: Boolean })
  locationHidden = false;

  @property({ type: Boolean })
  hideCollection = false;

  @property({ type: String })
  createFabIcon: string | undefined;

  @property({ type: String })
  createFabLabel: string | undefined;

  collectionType: string;
  collectionItemType: string;
  collectionCreateFabIcon: string;
  collectionCreateFabLabel: string;

  constructor(
    collectionType: string,
    collectionItemType: string,
    collectionCreateFabIcon: string,
    collectionCreateFabLabel: string
  ) {
    super();
    this.collectionType = collectionType;
    this.collectionItemType = collectionItemType;
    this.collectionCreateFabIcon = collectionCreateFabIcon;
    this.collectionCreateFabLabel = collectionCreateFabLabel;

    this.addGlobalListener('yp-logged-in', this._getCollection);
    this.addGlobalListener('yp-got-admin-rights', this.refresh);
  }

  abstract scrollToCollectionItemSubClass(): void;

  // DATA PROCESSING

  refresh(): void {
    if (this.collection) {
      if (this.collection.default_locale != null) {
        window.appGlobals.changeLocaleIfNeeded(this.collection.default_locale);
      }

      if (this.collection.theme_id) {
        window.appGlobals.theme.setTheme(this.collection.theme_id, this);
      }

      this.fire('yp-set-home-link', {
        type: this.collectionType,
        id: this.collection.id,
        name: this.collection.name,
      });

      this.fire('change-header', {
        headerTitle: null,
        documentTitle: this.collection.name,
        headerDescription:
          this.collection.description || this.collection.objectives,
      });

      if (this.collection.configuration?.hideAllTabs) {
        this.tabsHidden = true;
      } else {
        this.tabsHidden = false;
      }
    }
  }

  async _getCollection() {
    if (this.collectionId) {
      this.collection = undefined;
      this.collectionItems = undefined;
      this.collection = (await window.serverApi.getCollection(
        this.collectionType,
        this.collectionId
      )) as YpCollectionData | undefined;
      this.refresh();
    } else {
      console.error('Collection id setup for refresh');
    }
  }

  async _getHelpPages() {
    if (this.collectionId) {
      const helpPages = (await window.serverApi.getHelpPages(
        this.collectionType,
        this.collectionId
      )) as Array<YpHelpPage> | undefined;
      this.fire('yp-set-pages', helpPages);
    } else {
      console.error('Collection id setup for get help pages');
    }
  }

  get collectionTabLabel(): string {
    return `${this.t(this.collectionType)} (${
      this.collectionItems ? this.collectionItems.length : 0
    })`;
  }

  // UI

  static get styles() {
    return [
      super.styles,
      css`
        mwc-fab {
          position: absolute;
          bottom: 16px;
          right: 16px;
        }
      `,
    ];
  }

  renderHeader() {
    return this.collection && !this.noHeader
      ? html`
          <yp-collection-header
            .collection="${this.collection}"
            .collectionType="${this.collectionType}"
            aria-label="${this.collectionType}"
            role="banner"></yp-collection-header
          >;
        `
      : nothing;
  }

  renderNewsAndMapTabs() {
    return html`
      <mwc-tab
        ?hidden="${this.hideNewsfeed}"
        .label="${this.t('newsfeed')}"
        icon="rss_feed"
        stacked></mwc-tab>
      <mwc-tab
        ?hidden="${this.locationHidden}"
        .label="${this.t('map')}"
        icon="map"
        stacked></mwc-tab>
    `;
  }

  renderTabs() {
    if (this.collection && !this.tabsHidden) {
      return html`
        <mwc-tab-bar @MDCTabBar:activated="${this._selectTab}">
          <mwc-tab
            ?hidden="${this.hideCollection}"
            .label="${this.collectionTabLabel}"
            icon="people"
            stacked></mwc-tab>
          ${this.renderNewsAndMapTabs()}
        </mwc-tab-bar>
      `;
    } else {
      return nothing;
    }
  }

  renderCurrentTabPage(): TemplateResult | undefined {
    let page: TemplateResult | undefined;

    switch (this.selectedTab) {
      case CollectionTabTypes.Collection:
        page = this.collectionItems
          ? html` <yp-collection-items-grid
              id="collectionItems"
              .colletionItems="${this.collectionItems}"
              .collection="${this.collection}"
              .collectionType="${this.collectionType}"
              .collectionItemType="${this.collectionItemType}"
              .collectionId="${this.collectionId}"></yp-collection-items-grid>`
          : html``;
        break;
      case CollectionTabTypes.Newsfeed:
        page = html` <ac-activities
          id="collectionActivities"
          .selectedTab="${this.selectedTab}"
          .collectionType="${this.collectionType}"
          .collectionId="${this.collectionId}"></ac-activities>`;
        break;
      case CollectionTabTypes.Map:
        page = html``;
        break;
    }

    return page;
  }

  render() {
    return html`
      ${this.renderHeader()}
      ${this.renderTabs()}
      ${this.renderCurrentTabPage()}
      ${this.createFabIcon && this.createFabLabel
        ? html` <mwc-fab
            ?extended="${this.wide}"
            .label="${this.createFabLabel}"
            .icon="${this.createFabIcon}"></mwc-fab>`
        : nothing}
    `;
  }

  // EVENTS

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);

    if (changedProperties.has('subRoute') && this.subRoute != null) {
      const splitSubRoute = this.subRoute.split('/');
      this.collectionId = (splitSubRoute[0] as unknown) as number;
      if (splitSubRoute.length > 1) {
        this._setSelectedTabFromRoute(splitSubRoute[1]);
      } else {
        this._setSelectedTabFromRoute('default');
      }
    }

    if (changedProperties.has('collectionId') && this.collectionId) {
      this._getCollection();
      this._getHelpPages();
    }
  }

  _selectTab(event: CustomEvent) {
    this.selectedTab = event.detail as CollectionTabTypes;
  }

  _setSelectedTabFromRoute(routeTabName: string): void {
    let tabNumber;

    switch (routeTabName) {
      case 'collection':
        tabNumber = CollectionTabTypes.Collection;
        break;
      case 'news':
        tabNumber = CollectionTabTypes.Newsfeed;
        break;
      case 'map':
        tabNumber = CollectionTabTypes.Map;
        break;
      default:
        tabNumber = CollectionTabTypes.Collection;
        break;
    }

    if (tabNumber) {
      this.selectedTab = tabNumber;
      window.appGlobals.activity(
        'open',
        this.collectionType + '_tab_' + routeTabName
      );
    }
  }

  scrollToCachedItem() {
    if (
      this.selectedTab === CollectionTabTypes.Newsfeed &&
      window.appGlobals.cache.cachedActivityItem
    ) {
      const activities = this.$$('#collectionActivities') as AcActivity;
      if (activities) {
        activities.scrollToItem(window.appGlobals.cache.cachedActivityItem);
        window.appGlobals.cache.cachedActivityItem = undefined;
      } else {
        console.error('No activities for scroll to item');
      }
    } else if (this.selectedTab === CollectionTabTypes.Collection) {
      this.scrollToCollectionItemSubClass();
    }
  }

  scrollToCollectionItemSubClassDomain() {
    if (
      this.collection &&
      window.appGlobals.cache.backToDomainCommunityItems &&
      window.appGlobals.cache.backToDomainCommunityItems[this.collection.id]
    ) {
      (this.$$('#collectionItems') as YpCollectionItemsGrid).scrollToItem(
        window.appGlobals.cache.backToDomainCommunityItems[this.collection.id]
      );
      window.appGlobals.cache.backToDomainCommunityItems[
        this.collection.id
      ] = undefined;
    }
  }

  setFabIconIfAccess(
    onlyAdminCanCreate: boolean,
    hasCollectionAccess: boolean
  ) {
    if (onlyAdminCanCreate || hasCollectionAccess) {
      this.createFabIcon = this.collectionCreateFabIcon;
      this.createFabLabel = this.collectionCreateFabLabel;
    } else {
      this.createFabIcon = undefined;
      this.createFabLabel = undefined;
    }
  }

  //TODO: Review this when we remove the group community links
  _useHardBack(configuration: YpCollectionConfiguration) {
    if (configuration && configuration.customBackURL) {
      const backUrl = configuration.customBackURL;
      if (
        backUrl.startsWith('/community/') ||
        backUrl.startsWith('/group/') ||
        backUrl.startsWith('/domain/') ||
        backUrl.startsWith('/post/')
      ) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
}
