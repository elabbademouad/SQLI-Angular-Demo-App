import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { AuthenticationService} from './services/authentication.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule} from '@angular/forms';
import { MessageComponent } from './components/message/message.component';
import { AuthorizeDirective } from './directives/authorize.directive'
import {RouterModule,Routes} from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserslistComponent } from './components/userslist/userslist.component';
import { UsersfilterComponent } from './components/usersfilter/usersfilter.component';
import { StatusUserDirective } from './directives/status-user.directive';
import { ExamplePipe } from './Pipes/example.pipe';
import { AboutComponent } from './components/about/about.component';

const appRoute:Routes=[
  {path:"login",component:LoginComponent},
  {path:"userslist",component:UserslistComponent},
  {path:"register",component:RegisterComponent},
  {path:"about",component:AboutComponent},
  {path:"",component:LoginComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MessageComponent,
    AuthorizeDirective,
    RegisterComponent,
    FooterComponent,
    UserslistComponent,
    UsersfilterComponent,
    StatusUserDirective,
    ExamplePipe,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute,{enableTracing:false}),
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }