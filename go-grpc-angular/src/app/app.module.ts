import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, ru_RU, NzConfig, NZ_CONFIG } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PageNotFoundComponent } from './page/not-found/page-not-found.component';
import { ContractsComponent } from './page/contracts/contracts.component';
import { FinanceComponent } from './page/finance/finance.component';
import { ReportsComponent } from './page/reports/reports.component';
import { GraphsComponent } from './page/graphs/graphs.component';
import { ObjectsComponent } from './page/objects/objects.component';
import { TableViewComponent } from './components/table-view/table-view.component';
import { AgmCoreModule } from '@agm/core';
import { ObjectViewComponent } from './page/objects/object-view/object-view.component';
import { ObjectEditComponent } from './page/objects/object-edit/object-edit.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { CardEditComponent } from './components/card-edit/card-edit.component';
import { EntitiesComponent } from './page/entities/entities.component';
import { EquipmentsComponent } from './page/equipments/equipments.component';
import { AfaComponent } from './page/afa/afa.component';
import { UsersComponent } from './page/users/users.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { LoginComponent } from './page/login/login.component';
import { GrpcService } from './services/grpc.service';
import { CookieService } from './services/cookie.service';
import { AuthService } from './services/auth.service';
import { TaskStatusChangeService } from './services/task-status-change.service';
import { HomeComponent } from './page/home/home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PanelComponent } from './components/panel/panel.component';
import { StatusListService } from './services/status-list.service';
import { MonObjectListService } from './services/mon-object-list.service';
// import * as Sentry from '@sentry/browser';
import { ItemInfoComponent } from './components/item-info/item-info.component';
import {BarChartModule, TooltipModule} from '@swimlane/ngx-charts';
import {LineChartModule} from '@swimlane/ngx-charts';
import { PanelListService } from './services/panel-list.service';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ChangeStatusComponent } from './components/change-status/change-status.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { ChangeManualFieldComponent } from './components/change-manual-field/change-manual-field.component';
import { TaskStatusTemplatePossibleComponent } from './page/task-status-template-possible/task-status-template-possible.component';
import { SearchComponent } from './page/search/search.component';

registerLocaleData(ru, 'ru');

const ngZorroConfig: NzConfig = {};

// Sentry.init({
//   dsn: 'https://d76321cb3d2f47cbbfa33480897b0ca7@sentry.io/2098197'
// });

// @Injectable()
// export class SentryErrorHandler implements ErrorHandler {
//   constructor() {}
//   handleError(error) {
//     const eventId = Sentry.captureException(error.originalError || error);
//     Sentry.showReportDialog({ eventId });
//   }
// }

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ContractsComponent,
    FinanceComponent,
    ReportsComponent,
    GraphsComponent,
    ObjectsComponent,
    TableViewComponent,
    ObjectViewComponent,
    ObjectEditComponent,
    CardViewComponent,
    CardEditComponent,
    EntitiesComponent,
    EquipmentsComponent,
    AfaComponent,
    UsersComponent,
    LoginComponent,
    HomeComponent,
    LoginFormComponent,
    PanelComponent,
    ItemInfoComponent,
    AddCommentComponent,
    DashboardComponent,
    ChangeStatusComponent,
    SanitizeHtmlPipe,
    ChangeManualFieldComponent,
    TaskStatusTemplatePossibleComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollingModule,
    DragDropModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB1aC2_zxRX9ja8uNBmSLqMBFx7VsjJxQU',
    }),
    ReactiveFormsModule,
    EditorModule,
    BarChartModule,
    LineChartModule,
    TooltipModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: ru_RU },
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
    // { provide: ErrorHandler, useClass: SentryErrorHandler },
    GrpcService,
    CookieService,
    AuthService,
    StatusListService,
    PanelListService,
    MonObjectListService,
    TaskStatusChangeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
