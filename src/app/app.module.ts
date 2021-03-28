import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { SpecificationsComponent } from './components/specifications/specifications.component';
import { CartComponent } from './components/cart/cart.component';
import { ChangeColorToHeaderDirective } from './directives/change-color-to-header.directive';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { SwiperModule } from 'swiper/angular';
import { MobileSliderComponent } from './components/mobile-slider/mobile-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    HeaderComponent,
    FooterComponent,
    CharacteristicsComponent,
    SpecificationsComponent,
    CartComponent,
    ChangeColorToHeaderDirective,
    SidePanelComponent,
    MobileSliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
