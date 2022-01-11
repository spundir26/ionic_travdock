import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { StartComponent } from './start/start.component';
import { SlidesComponent } from './slides/slides.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [LogoComponent, StartComponent, SlidesComponent, MenuComponent],
  exports:[LogoComponent, StartComponent, SlidesComponent],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
