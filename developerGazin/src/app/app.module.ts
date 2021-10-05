import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DesenvolvedoresComponent } from './desenvolvedores/desenvolvedores.component';
import { DesenvolvedorService } from './desenvolvedor.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DesenvolvedoresComponent
  ],
  imports: [
  BrowserModule,
  HttpClientModule,
  FormsModule
  ],
  providers: [HttpClientModule, DesenvolvedorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
