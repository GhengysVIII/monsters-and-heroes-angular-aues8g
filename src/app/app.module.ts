//Angular things
//--------------
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//components
//----------
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

//Services
//--------
import { DataService } from './services/data.service';
import { ClassWrappersService } from './services/class-wrappers.service';
import { MocksService } from './services/mocks.service';

//Other
//-----
const appRoutes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: '**', component: NotFoundPageComponent }
]

@NgModule({
  imports:      
  [ BrowserModule, FormsModule, NgbModule, 
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ) 
  ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, WelcomePageComponent, NotFoundPageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService, ClassWrappersService, MocksService]
})
export class AppModule { }
