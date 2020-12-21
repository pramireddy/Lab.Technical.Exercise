import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { ScenariosSearchByUseridComponent } from './scenarios/scenarios-search/scenarios-search-by-userid/scenarios-search-by-userid.component';
import { ScenariosSearchByDateRangeComponent } from './scenarios/scenarios-search/scenarios-search-by-date-range/scenarios-search-by-date-range.component';
import { ScenariosSearchComponent } from './scenarios/scenarios-search/scenarios-search.component';
import { ScenariosSummaryComponent } from './scenarios/scenarios-summary/scenarios-summary.component';
import { ScenarioDetailsComponent } from './scenarios/scenario-details/scenario-details.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { AlbumCreateComponent } from './album-create/album-create.component';
import { AlbumUpdateComponent } from './album-update/album-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ScenariosSummaryComponent,
    ScenarioDetailsComponent,
    ScenariosSearchComponent,
    ScenariosSearchByUseridComponent,
    ScenariosSearchByDateRangeComponent,
    AlbumDetailComponent,
    LayoutComponent,
    AlbumCreateComponent,
    AlbumUpdateComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      // { path: 'search-scenarios', component: ScenariosSearchComponent },
      { path: 'search-scenarios', component: ScenariosSummaryComponent },
      { path: 'update', component: AlbumUpdateComponent },
      { path: 'create', component: AlbumCreateComponent },
      { path: 'scenarios-summary', component: AlbumDetailComponent },
    ]),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
