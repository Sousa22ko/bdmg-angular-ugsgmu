import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from '../hello.component';
import { FormComponent } from './components/form/form.component';

//dependencias materials
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
//dependencias materials

//dependencias internas
import { AppService } from './app.service';
import { FormServiceService } from './service/formService/formService.service';
//dependencias internas

//dependencias externas
import { HttpClientModule } from '@angular/common/http';
//dependencias externas

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, HelloComponent, FormComponent],
  bootstrap: [AppComponent],
  providers: [AppService, FormServiceService],
})
export class AppModule {}
