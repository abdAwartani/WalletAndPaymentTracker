import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalletComponent } from './comopnents/wallet/wallet.component';
import { ApiHelperService } from './services/api-helper.service';
import { WalletService } from './services/wallet.service';

@NgModule({
  declarations: [
    AppComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule 
  ],
  providers: [
    WalletService,
    ApiHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
