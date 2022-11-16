import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SampulComponent } from './pages/sampul/sampul.component';
import { RizkySandyComponent } from './pages/rizky-sandy/rizky-sandy.component';
import { MessageGeneratorComponent } from './pages/message-generator/message-generator.component';

@NgModule({
    declarations: [
        AppComponent,
        SampulComponent,
        RizkySandyComponent,
        MessageGeneratorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
