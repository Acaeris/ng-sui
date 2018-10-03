import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { SemanticButtonModule } from './modules/elements/button/button.module';
import { SemanticContainerModule } from './modules/elements/container/container.module';
import { SemanticDividerModule } from './modules/elements/divider/divider.module';
import { SemanticFlagModule } from './modules/elements/flag/flag.module';
import { SemanticHeaderModule } from './modules/elements/header/header.module';
import { SemanticIconModule } from './modules/elements/icon/icon.module';
import { SemanticImageModule } from './modules/elements/image/image.module';
import { SemanticInputModule } from './modules/elements/input/input.module';
import { SemanticLabelModule } from './modules/elements/label/label.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SemanticButtonModule,
    SemanticContainerModule,
    SemanticDividerModule,
    SemanticFlagModule,
    SemanticHeaderModule,
    SemanticIconModule,
    SemanticImageModule,
    SemanticInputModule,
    SemanticLabelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
