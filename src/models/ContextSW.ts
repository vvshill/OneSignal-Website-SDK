import { WorkerMessenger } from '../libraries/WorkerMessenger';
import { ServiceWorkerManager } from '../managers/ServiceWorkerManager';
import { SubscriptionManager } from '../managers/SubscriptionManager';
import { AppConfig } from './AppConfig';
import { PageViewManager } from '../managers/PageViewManager';
import PermissionManager from '../managers/PermissionManager';
import ContextHelper from "../helpers/ContextHelper";
import { UpdateManager } from "../managers/UpdateManager";
import { ISessionManager } from "../managers/sessionManager/types";
import { ChannelManager } from '../managers/ChannelManager';
import Database from '../services/Database';


// TODO: Ideally this file should only import classes used by ServiceWorker.ts.
//       Example, ServiceWorkerManager should be remove as it is used by the page / browser,
//         not the ServiceWorker itself internally.

export interface ContextSWInterface {
  appConfig: AppConfig;
  subscriptionManager: SubscriptionManager;
  serviceWorkerManager: ServiceWorkerManager;
  pageViewManager: PageViewManager;
  permissionManager: PermissionManager;
  workerMessenger: WorkerMessenger;
  updateManager: UpdateManager;
  channelManager: ChannelManager;
}

export default class ContextSW implements ContextSWInterface {
  public appConfig: AppConfig;
  public subscriptionManager: SubscriptionManager;
  public serviceWorkerManager: ServiceWorkerManager;
  public pageViewManager: PageViewManager;
  public permissionManager: PermissionManager;
  public workerMessenger: WorkerMessenger;
  public updateManager: UpdateManager;
  public channelManager: ChannelManager;

  constructor(appConfig: AppConfig) {
    this.appConfig = appConfig;
    this.subscriptionManager = ContextHelper.getSubscriptionManager(this);
    this.serviceWorkerManager = ContextHelper.getServiceWorkerManager(this);
    this.pageViewManager = new PageViewManager();
    this.permissionManager = new PermissionManager();
    this.workerMessenger = new WorkerMessenger(this);
    this.updateManager = new UpdateManager(this);
    this.channelManager = new ChannelManager(
      Database.singletonInstance,
      appConfig.appId,
      this.subscriptionManager
    );
  }
}
