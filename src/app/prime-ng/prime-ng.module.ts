import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {DividerModule} from 'primeng/divider';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {BadgeModule} from 'primeng/badge';
import {ChartModule} from 'primeng/chart';
import {TableModule} from 'primeng/table';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import {PanelMenuModule} from 'primeng/panelmenu';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MenuModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
    DividerModule,
    InputTextModule,
    CardModule,
    BadgeModule,
    ChartModule,
    TableModule,
    ChipModule,
    TagModule,
    PanelMenuModule
  ]
})
export class PrimeNgModule { }
