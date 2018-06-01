import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule  } from '@angular/http';
// import { HttpClient } from '@angular/common/http'
import { AppComponent } from './app.component';
import { GmapComponent } from './gmap/gmap.component';
import { LoginComponent } from './login/login.component';
import { GmapService } from './gmap.service';
@NgModule({
  declarations: [
    AppComponent,
    GmapComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
   
    RouterModule.forRoot([
      {
        path:'',
        component: LoginComponent
      },
      {
        path:'gmap',
        component: GmapComponent
      }
    ])
  ],
  providers: [

    GmapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
