import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation } from '@ionic-native/geolocation';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { CremesPageModule } from '../pages/cremes/cremes.module';
import { PromocoesPageModule } from '../pages/promocoes/promocoes.module';
import { LanchesPageModule } from '../pages/lanches/lanches.module';
import { BebidasPageModule } from '../pages/bebidas/bebidas.module';
import { SanduichesPageModule } from '../pages/sanduiches/sanduiches.module';
import { CrepiocasPageModule } from '../pages/crepiocas/crepiocas.module';
import { SalgadosPageModule} from '../pages/salgados/salgados.module';
import { IntroPageModule} from '../pages/intro/intro.module';
import { VitaminasPageModule} from '../pages/vitaminas/vitaminas.module';
import { SucosPageModule } from '../pages/sucos/sucos.module';
import { FidelidadePageModule } from '../pages/fidelidade/fidelidade.module';
import { MapsPageModule } from '../pages/maps/maps.module';
import { RoutePageModule } from '../pages/route/route.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CremesPageModule,
    PromocoesPageModule,
    LanchesPageModule,
    BebidasPageModule,
    SanduichesPageModule,
    CrepiocasPageModule,
    SalgadosPageModule,
    IntroPageModule,
    VitaminasPageModule,
    SucosPageModule,
    FidelidadePageModule,
    MapsPageModule,
    RoutePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CallNumber,
    Geolocation
  ]
})
export class AppModule {}
