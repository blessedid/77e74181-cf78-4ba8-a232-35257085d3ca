import {Component, Inject} from '@angular/core';
import { AuthService } from './services/auth.service';
import { PanelListService } from './services/panel-list.service';
import { NotificationTaskListService } from "./services/notification-task-list.service";
import { ConnectionStatusService } from "./services/connection-status.service";
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isAuth = this.authService.check();
  isCollapsed = false;
  menuType = 'vertical'; // horizontal
  menuItems: any = [];
  notificationData: any = [];
  isVisibleNotification = false;
  userInfo: any = {};
  isLoadingNotification = false;
  connectionStatus: any = true;

  change(value: boolean): void {
    console.log(value);
  }
  constructor(private panelListService: PanelListService, private authService: AuthService, @Inject(LOCAL_STORAGE) private storage: StorageService,
              private notificationTaskListService: NotificationTaskListService, private connectionStatusService: ConnectionStatusService) {
    panelListService.get().subscribe(panelList => {
      this.menuItems = panelList;
    });
    this.userInfo = JSON.parse(this.storage.get('user') || '[]');

    setInterval(() => {
      this.getConnectionStatus();
    }, 5000);
  }

  public logout() {
    this.authService.logout();
  }

  public getNotification(value: boolean): void {
    this.isLoadingNotification = value;

    if (!value) {
      return;
    }

    // this.notificationTaskListService.get().subscribe(data => {
    //   // console.log('NotificationTaskListService', data);
    //   this.notificationData = data;
    //   this.isLoadingNotification = false;
    // })
  }

  public getConnectionStatus() {
    this.connectionStatusService.get().subscribe(data => {
      // console.log(data);
      this.connectionStatus = data;
    });
  }
}
