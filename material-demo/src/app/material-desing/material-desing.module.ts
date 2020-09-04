import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';


const materialcomponent =[
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatSidenavModule,
  MatMenuModule,
  MatCardModule
];

@NgModule({
  imports: [
    materialcomponent
  ],
  exports:[
    materialcomponent
  ],
})
export class MaterialDesingModule { }
