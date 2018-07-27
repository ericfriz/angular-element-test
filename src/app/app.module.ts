import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule
  ],
  entryComponents : [
    CounterComponent
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(CounterComponent, {injector : this.injector});
    customElements.define('counter-test', el);
  }

  ngDoBootstrap() {
   // const el = createCustomElement(CounterComponent, {injector : this.injector});
   // customElements.define('counter', el);
   }
}
