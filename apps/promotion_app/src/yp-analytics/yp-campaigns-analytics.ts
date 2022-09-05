import { LitElement, css, html } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { YpBaseElementWithLogin } from '../@yrpri/common/yp-base-element-with-login';

import '@material/web/fab/fab-extended.js';
import { YpCampaignApi } from '../yp-promotion/YpCampaignApi.js';
import { Dialog } from '@material/mwc-dialog';
import { PlausibleBaseElementWithState } from '../pl-components/pl-base-element-with-state';
import * as api from '../pl-components/api.js';
import { UpdateModeEnum } from 'chart.js';

import './yp-campaign-analysis.js';
import { YpCampaignAnalysis } from './yp-campaign-analysis.js';

@customElement('yp-campaigns-analytics')
export class YpCampaignsAnalytics extends PlausibleBaseElementWithState {
  @property({ type: String })
  collectionType!: string;

  @property({ type: Number })
  collectionId!: number;

  @property({ type: Object })
  collection: YpCollectionData | undefined;

  @property({ type: Array })
  campaigns: YpCampaignAnalyticsData[] | undefined;

  @property({ type: Array })
  foundCampaigns: YpCampaignAnalyticsData[] | undefined;

  @property({ type: Boolean })
  noData = false;

  campaignApi: YpCampaignApi = new YpCampaignApi();

  connectedCallback() {
    super.connectedCallback();
    if (this.timer) this.timer.onTick(this.getCampaigns.bind(this));
  }

  firstUpdated() {
    this.getCampaigns();
  }

  async getCampaigns() {
    this.campaigns = await this.campaignApi.getCampaigns(
      this.collectionType,
      this.collectionId
    );

    const utmContents = await api.get(
      this.proxyUrl,
      `/api/stats/${encodeURIComponent(this.site!.domain!)}/utm_contents`,
      this.query
    );

    if (utmContents && utmContents.length > 0) {
      const utmMediums = await api.get(
        this.proxyUrl,
        `/api/stats/${encodeURIComponent(this.site!.domain!)}/utm_mediums`,
        this.query
      );

      if (utmMediums && utmMediums.length > 0) {
        const campaignIds = utmContents.map((c: any) => {
          if (!isNaN(c.name)) return parseInt(c.name);
        });

        const foundCampaigns = this.campaigns?.filter(c => {
          return campaignIds.includes(c.id);
        });

        if (foundCampaigns && foundCampaigns.length > 0) {
          for (let c = 0; c < foundCampaigns.length; c++) {
            foundCampaigns[c] = await this.getSourceData(
              foundCampaigns[c],
              utmMediums
            );
          }
        }

        this.foundCampaigns = foundCampaigns;
      }
    }
  }

  async getSourceData(campaign: YpCampaignAnalyticsData, utmMediums: any) {
    const query = { ...this.query };

    const avilableMediums = utmMediums.map((m: any) => {
      return m.name.toLowerCase();
    });

    const mediumsToSearch = campaign.configuration.mediums.filter(m => {
      return avilableMediums.includes(m.utm_medium);
    });

    query.filters['utm_content'] = `${campaign.id}`;

    for (let m = 0; m < mediumsToSearch.length; m++) {
      const medium = mediumsToSearch[m] as YpCampaignAnalyticsMediumData;
      query.filters['utm_medium'] = medium.utm_medium;

      const topStatsData = (await api.get(
        this.proxyUrl,
        `/api/stats/${encodeURIComponent(this.site!.domain!)}/top-stats`,
        query
      )) as PlausibleTopStatsData;

      medium.topStats = topStatsData.top_stats;
    }

    campaign.configuration.mediums = mediumsToSearch;

    return campaign;
  }

  renderCampaign(campaign: YpCampaignAnalyticsData) {
    return html`<yp-campaign-analysis
      .campaignApi="${this.campaignApi}"
      .collectionType="${this.collectionType}"
      .collection="${this.collection}"
      .collectionId="${this.collectionId}"
      .campaign="${campaign}"
    ></yp-campaign-analysis>`;
  }

  render() {
    if (this.foundCampaigns) {
      return html`
        <div class="layout vertical start mainContainer">
          <div class="layout vertical">
            ${this.foundCampaigns?.map(campaign =>
              this.renderCampaign(campaign)
            )}
          </div>
        </div>
      `;
    } else if (this.noData) {
      return html`
        <div class="layout vertical start mainContainer">
          <p>No campaigns found</p>
        </div>
      `;
    } else {
      return html` <div class="layout vertical start mainContainer">
        <p>Loading...</p>
      </div>`;
    }
  }
}
