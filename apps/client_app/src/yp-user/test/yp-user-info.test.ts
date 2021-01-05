/* eslint-disable @typescript-eslint/camelcase */
import { html, fixture, expect, aTimeout } from '@open-wc/testing';

import { YpUserInfo } from '../yp-user-info.js';
import '../yp-user-info.js';
import { YpTestHelpers } from '../../common/test/setup-app.js';
import sinon from 'sinon';

describe('YpUserInfo', () => {
  let element: YpUserInfo;
  let server: any; 

  before(async () => {
    server = sinon.fakeServer.create();

    await YpTestHelpers.setupApp();
  });

  beforeEach(async () => {
    const user = {
        id: 1,
        name: 'YURR'
      } as YpUserData

    element = await fixture(html`
      ${YpTestHelpers.renderCommonHeader()}
      <yp-user-info .user="${user}"></yp-user-info>
      `);
      await aTimeout(100);
  });
  
  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });

  after(async () => {
    server.restore();
  });
});
