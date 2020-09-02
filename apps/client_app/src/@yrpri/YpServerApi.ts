import { YpCodeBase } from './YpCodeBaseclass.js';

export class YpServerApi extends YpCodeBase {
  protected baseUrlPath = '/api';

  static transformCollectionTypeToApi(type: string): string {
    let transformedApiType;

    switch (type) {
      case 'domain':
        transformedApiType = 'domains';
        break;
      case 'community':
        transformedApiType = 'communities';
        break;
      case 'group':
        transformedApiType = 'groups';
        break;
      case 'post':
        transformedApiType = 'posts';
        break;
      case 'user':
        transformedApiType = 'users';
        break;
      default:
        transformedApiType = '';
        console.error(`Cant find collection type transsform for ${type}`);
    }

    return transformedApiType;
  }

  private async fetchWrapper(
    url: string,
    options: RequestInit = {},
    showUserError = true
  ) {
    if (!options.headers) {
      options.headers = {
        'Content-Type': 'application/json',
      };
    }
    const response = await fetch(url, options);
    return this.handleResponse(response, showUserError);
  }

  private async handleResponse(response: Response, showUserError: boolean) {
    if (response.ok) {
      let responseJson = null;
      try {
        responseJson = await response.json();
      } catch (error) {
        if (response.status === 200 && response.statusText === 'OK') {
          // Do nothing
        } else {
          this.fireGlobal('yp-network-error', {
            response: response,
            jsonError: error,
            showUserError,
          });
        }
      }
      return responseJson;
    } else {
      this.fireGlobal('yp-network-error', {
        response: response,
        showUserError,
      });
      return null;
    }
  }

  public boot() {
    return this.fetchWrapper(this.baseUrlPath + '/domains');
  }

  public isloggedin() {
    return this.fetchWrapper(
      this.baseUrlPath + '/users/loggedInUser/isloggedin'
    );
  }

  public getAdminRights() {
    return this.fetchWrapper(
      this.baseUrlPath + '/users/loggedInUser/adminRights'
    );
  }

  public getMemberships() {
    return this.fetchWrapper(
      this.baseUrlPath + '/users/loggedInUser/memberships'
    );
  }

  public logout() {
    return this.fetchWrapper(this.baseUrlPath + '/users/logout', {
      method: 'POST',
    });
  }

  public setLocale(body: object) {
    return this.fetchWrapper(
      this.baseUrlPath + '/users/loggedInUser/setLocale',
      {
        method: 'PUT',
        body: JSON.stringify(body),
      },
      false
    );
  }

  public getRecommendationsForGroup(groupId: number) {
    return this.fetchWrapper(
      this.baseUrlPath +
        `/recommendations/groups/${groupId}/getPostRecommendations`,
      {
        method: 'PUT',
        body: JSON.stringify({}),
      }
    );
  }

  public hasVideoUploadSupport() {
    return this.fetchWrapper(
      this.baseUrlPath + '/videos/hasVideoUploadSupport'
    );
  }

  public hasAudioUploadSupport() {
    return this.fetchWrapper(
      this.baseUrlPath + '/audios/hasAudioUploadSupport'
    );
  }

  public sendVideoView(body: object) {
    return this.fetchWrapper(
      this.baseUrlPath + '/videos/videoView',
      {
        method: 'PUT',
        body: JSON.stringify(body),
      },
      false
    );
  }

  public sendAudioView(body: object) {
    return this.fetchWrapper(
      this.baseUrlPath + '/audios/videoView',
      {
        method: 'PUT',
        body: JSON.stringify(body),
      },
      false
    );
  }

  public createActivityFromApp(body: object) {
    return this.fetchWrapper(
      this.baseUrlPath + '/users/createActivityFromApp',
      {
        method: 'POST',
        body: JSON.stringify(body),
      },
      false
    );
  }

  public marketingTrackingOpen(groupId: number, body: object) {
    return this.fetchWrapper(
      this.baseUrlPath + `/groups/${groupId}/marketingTrackingOpen`,
      {
        method: 'POST',
        body: JSON.stringify(body),
      },
      false
    );
  }

  public triggerTrackingGoal(groupId: number, body: object) {
    return this.fetchWrapper(
      this.baseUrlPath + `/groups/${groupId}/triggerTrackingGoal`,
      {
        method: 'POST',
        body: JSON.stringify(body),
      },
      false
    );
  }

  public getCollection(collectionType: string, collectionId: number) {
    return this.fetchWrapper(
      this.baseUrlPath +
        `/${YpServerApi.transformCollectionTypeToApi(
          collectionType
        )}/${collectionId}`
    );
  }

  public getCategoriesCount(id: number, tabName: string | undefined) {
    return this.fetchWrapper(
      this.baseUrlPath + `/groups/${id}/categories_count/${tabName}`
    );
  }

  public getGroupPosts(searchUrl: string) {
    return this.fetchWrapper(searchUrl);
  }

  public getPost(postId: number) {
    return this.fetchWrapper(this.baseUrlPath + `/post/${postId}`);
  }

  public endorsePost(postId: number, method: string, body: object) {
    return this.fetchWrapper(
      this.baseUrlPath + `/posts/${postId}/endorse`,
      {
        method: method,
        body: JSON.stringify(body),
      },
      false
    );
  }

  public getHasNonOpenPosts(groupId: number) {
    return this.fetchWrapper(
      this.baseUrlPath + `/groups/${groupId}/checkNonOpenPosts`
    );
  }

  public getHelpPages(collectionType: string, collectionId: number) {
    return this.fetchWrapper(
      this.baseUrlPath +
        `/${YpServerApi.transformCollectionTypeToApi(
          collectionType
        )}/${collectionId}/pages`
    );
  }

  public getTranslation(translateUrl: string) {
    return this.fetchWrapper(translateUrl);
  }

  public savePostTranscript(postId: number, body: object) {
    return this.fetchWrapper(
      this.baseUrlPath + `/posts/${postId}/editTranscript`,
      {
        method: 'PUT',
        body: JSON.stringify(body),
      },
      false
    );
  }

  public getPostTranscriptStatus(groupId: number, tabName: string | undefined) {
    return this.fetchWrapper(
      this.baseUrlPath + `/groups/${groupId}/categories_count/${tabName}`
    );
  }

  public addPoint(groupId: number, body: object) {
    return this.fetchWrapper(
      this.baseUrlPath + `/points/${groupId}`,
      {
        method: 'POST',
        body: JSON.stringify(body),
      },
      false
    );
  }

  public completeMediaPoint(mediaType: string, pointId: number, body: object) {
    return this.fetchWrapper(
      this.baseUrlPath + `/${mediaType}/${pointId}/completeAndAddToPoint`,
      {
        method: 'POST',
        body: JSON.stringify(body),
      },
      false
    );
  }

  public completeMediaPost(mediaType: string, method: string, postId: number, body: object) {
    return this.fetchWrapper(
      this.baseUrlPath + `/${mediaType}/${postId}/completeAndAddToPost`,
      {
        method: method,
        body: JSON.stringify(body),
      },
      false
    );
  }

  public getPoints(postId: number) {
    return this.fetchWrapper(this.baseUrlPath + `/posts/${postId}/points`);
  }

  public getMorePoints(postId: number, offsetUp: number, offsetDown: number) {
    return this.fetchWrapper(
      this.baseUrlPath +
        `/posts/${postId}/points?offsetUp=${offsetUp}&offsetDown=${offsetDown}`
    );
  }

  public getNewPoints(postId: number, latestPointCreatedAt: Date) {
    return this.fetchWrapper(
      this.baseUrlPath +
        `/posts/${postId}/newPoints?latestPointCreatedAt=${latestPointCreatedAt}`
    );
  }

  public getVideoFormatsAndImages(videoId: number) {
    return this.fetchWrapper(
      this.baseUrlPath + `/videos/${videoId}/formatsAndImages`
    );
  }

  public setVideoCover(videoId: number, body: object) {
    return this.fetchWrapper(
      this.baseUrlPath + `/videos/${videoId}/setVideoCover`,
      {
        method: 'PUT',
        body: JSON.stringify(body),
      },
      false
    );
  }

  public getTranscodingJobStatus(mediaType: string, mediaId: number) {
    return this.fetchWrapper(
      this.baseUrlPath + `/${mediaType}/${mediaId}/getTranscodingJobStatus`
    );
  }

  public startTranscoding(
    mediaType: string,
    mediaId: number,
    startType: string,
    body: object
  ) {
    return this.fetchWrapper(
      this.baseUrlPath + `/${mediaType}/${mediaId}/${startType}`,
      {
        method: 'POST',
        body: JSON.stringify(body),
      },
      false
    );
  }

  public createPresignUrl(mediaUrl: string) {
    return this.fetchWrapper(
      mediaUrl,
      {
        method: 'POST',
        body: JSON.stringify({}),
      },
      false
    );
  }

  public updatePoint(pointId: number, body: object) {
    return this.fetchWrapper(
      `/points/${pointId}`,
      {
        method: 'PUT',
        body: JSON.stringify(body),
      },
      false
    );
  }

  public updatePointAdminComment(pointId: number, body: object) {
    return this.fetchWrapper(
      `/points/${pointId}/adminComment`,
      {
        method: 'PUT',
        body: JSON.stringify(body),
      },
      false
    );
  }

  public deletePoint(pointId: number) {
    return this.fetchWrapper(
      `/points/${pointId}`,
      {
        method: 'DELETE',
        body: JSON.stringify({}),
      },
      false
    );
  }

  public checkPointTranscriptStatus(type: string, pointId: number) {
    return this.fetchWrapper(this.baseUrlPath + `/$points/${pointId}/${type}`);
  }

  public registerUser(body: object) {
    return this.fetchWrapper(
      `/users/register`,
      {
        method: 'POST',
        body: JSON.stringify(body),
      },
      false
    );
  }

  public registerAnonymously(body: object) {
    return this.fetchWrapper(
      `/users/register_anonymously`,
      {
        method: 'POST',
        body: JSON.stringify(body),
      },
      false
    );
  }

  public loginUser(body: object) {
    return this.fetchWrapper(
      `/users/login`,
      {
        method: 'POST',
        body: JSON.stringify(body),
      },
      false
    );
  }

  public submitForm(url: string, method: string, headers: Record<string, string>, body: object) {
    return this.fetchWrapper(
      url,
      {
        method: method,
        headers: headers,
        body: JSON.stringify(body),
      },
      false
    );
  }

  public getSurveyGroup(surveyGroupId: number) {
    return this.fetchWrapper(
      this.baseUrlPath + `/groups/${surveyGroupId}/survey`
    );
  }

  public postSurvey(surveyGroupId: number, body: object) {
    return this.fetchWrapper(
      `/groups/${surveyGroupId}/survey`,
      {
        method: 'POST',
        body: JSON.stringify(body),
      },
      false
    );
  }

  public deleteActivity(type: string, collectionId: number, activityId: number)  {
    return this.fetchWrapper(
      `/${type}/${collectionId}/${activityId}/delete_activity`,
      {
        method: 'DELETE',
        body: JSON.stringify({}),
      },
      false
    );
  }

  public getAcActivities(url: string) {
    return this.fetchWrapper(
      url
    );
  }

  public getRecommendations(typeName: string, typeId: number) {
    return this.fetchWrapper(
      this.baseUrlPath + `/recommendations/${typeName}/${typeId}`
    );
  }

  public setNotificationsAsViewed(body: object) {
    return this.fetchWrapper(
      `/notifications/setIdsViewed`,
      {
        method: 'PUT',
        body: JSON.stringify(body),
      },
      false
    );
  }

  public setNotificationsAllAsViewed() {
    return this.fetchWrapper(
      `/api/notifications/markAllViewed`,
      {
        method: 'PUT',
        body: JSON.stringify({}),
      },
      false
    );
  }

  public getAcNotifications(url: string) {
    return this.fetchWrapper(
      url
    );
  }
}
