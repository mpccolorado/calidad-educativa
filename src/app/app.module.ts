import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MateriasService } from '../services/MateriasService';
import { MetodologiasDeEnsenanzaService } from '../services/MetodologiasDeEnsenanzaService';
import { ClasesPage } from '../pages/clases/clases';
import { TemarioPage } from '../pages/temario/temario';
import { MetodologiasPage } from '../pages/metodologias/metodologias';

@NgModule({
  declarations: [
    MyApp,
    ClasesPage,
    MetodologiasPage,
    TemarioPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ClasesPage,
    MetodologiasPage,
    TemarioPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MateriasService,
    MetodologiasDeEnsenanzaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
