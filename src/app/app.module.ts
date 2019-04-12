import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopPanelComponent } from './common/top-panel/top-panel.component';
import { BottomPanelComponent } from './common/bottom-panel/bottom-panel.component';
import { HttpClientModule } from  '@angular/common/http';
import { ReadJsonService } from './services/read-json.service';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { SortingPipe } from './pipe/sorting.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    LandingpageComponent,
    TopPanelComponent,
    BottomPanelComponent,
    SearchFilterPipe,
    SortingPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    NgxPaginationModule
  ],
  providers: [ReadJsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
