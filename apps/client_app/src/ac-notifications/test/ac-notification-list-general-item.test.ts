/* eslint-disable @typescript-eslint/camelcase */
import { html, fixture, expect, aTimeout } from '@open-wc/testing';

import { AcNotificationListGenaralItem } from '../ac-notification-list-general-item.js';
import '../ac-notification-list-general-item.js';
import { YpTestHelpers } from '../../common/test/setup-app.js';

describe('AcNotificationListGenaralItem', () => {
  let element: AcNotificationListGenaralItem;
  
    beforeEach(async () => {
      const notification =  {
        id: 1,
        type: 'ALex',
        domain_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        AcActivities: [{
          type: 'LEXI',
          created_at: new Date(),
          domain_id: 2,
          User: {
            id: 1,
            name: 'Lex'
          }
        }]
    } as AcNotificationData;

      const post = {
        id: 1,
        location:{
          latitude: 2,
          longitude: 3,
        },
        name: 'Robert',
        group_id: 1,
        description: 'Post-Test',
        counter_endorsements_up: 2,
        counter_endorsements_down: 4,
        counter_points: 5,
        Group: {
          id: 1,
          name: 'Alexi',
          community_id: 1,
          counter_points: 1,
          counter_users: 2,
          counter_posts: 1,
          configuration: {
            makeMapViewDefault: false
          }
        }
      } as YpPostData;

      const user = {
        id: 1,
        name: 'YURR'
      } as YpUserData
  
      element = await fixture(html`
        ${YpTestHelpers.renderCommonHeader()}
        <ac-notification-list-general-item
          .notification="${notification}"
          .post="${post}"
          .user="${user}"
        ></ac-notification-list-general-item>
      `);
      await aTimeout(100);
    });
  
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });