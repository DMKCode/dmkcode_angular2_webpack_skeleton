import { NgModule, provide } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent, COMPONENT_DECLARATIONS } from "./";
import { ROUTING } from "./app.routing";

import { APP_PROVIDERS } from "./app-providers";
import { appState } from "./app-state/app-state";
import { APP_STATE_ACTIONS } from "./app-state/app-state-actions";

@NgModule({
    declarations: [
        ...COMPONENT_DECLARATIONS
    ],
    imports: [ BrowserModule, ROUTING, FormsModule, ReactiveFormsModule, HttpModule ],
    bootstrap: [ AppComponent ],
    providers: [ APP_PROVIDERS,
                provide(LocationStrategy, { useClass: HashLocationStrategy }),
                provide('AppState', { useValue: appState }),
                APP_STATE_ACTIONS 
    ]
})
export class AppModule {

}