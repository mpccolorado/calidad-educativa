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
import { PuntuacionDeClaseModal } from '../pages/clases/puntuacionDeClaseModal/puntuacionDeClaseModal';
import { TemarioPage } from '../pages/temario/temario';
import { MetodologiasPage } from '../pages/metodologias/metodologias';
import { UnidadModal } from '../pages/temario/unidadModal/unidadModal';
import { TemaModal } from '../pages/temario/temaModal/temaModal';
import { ItemPuntuacion } from '../pages/clases/puntuacionDeClaseModal/itemPuntuacion';
import { ClasePage } from '../pages/clase/clasePage';
import { ActividadDeClaseModal } from '../pages/clase/actividadModal/actividadDeClaseModal';
import { SeleccionDeTemasModal } from '../pages/clase/actividadModal/temasModal/seleccionDeTemasModal';
import { Actividades } from '../pages/clase/actividad/actividades';
import { FinalizarClaseModal } from '../pages/clases/finalizarClaseModal/finalizarClaseModal';
import { SeleccionDeActividades } from '../pages/clase/seleccionDeActividades/seleccionDeActividades';
import { ProfesoresService } from '../services/ProfesoresService';
import { ProfesorToggle } from '../pages/clase/profesorToggle/profesorToggle';

@NgModule({
  declarations: [
    MyApp,
    ClasesPage,
    MetodologiasPage,
    TemarioPage,
    TabsPage,
    UnidadModal,
    TemaModal,
    ClasePage,
    Actividades,
    ProfesorToggle,
    SeleccionDeActividades,
    FinalizarClaseModal,
    SeleccionDeTemasModal,
    ActividadDeClaseModal,
    PuntuacionDeClaseModal,
    ItemPuntuacion
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
    TabsPage,
    UnidadModal,
    TemaModal,
    Actividades,
    ProfesorToggle,
    SeleccionDeActividades,
    FinalizarClaseModal,
    SeleccionDeTemasModal,
    ActividadDeClaseModal,
    PuntuacionDeClaseModal,
    ClasePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProfesoresService,
    MateriasService,
    MetodologiasDeEnsenanzaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
