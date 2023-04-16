import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ListadoNoticiasComponent } from './components/listado-noticias/listado-noticias.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoticesService } from './service/notices.service';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {SpinnerComponent} from './shared/spinner/spinner.component'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListadoNoticiasComponent,
    NavbarComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NoticesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
