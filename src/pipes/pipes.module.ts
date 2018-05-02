import { NgModule } from '@angular/core';

import { CapitalizePipe } from './capitalize.pipe';
import { OrderByPipe } from './orderby.pipe';

export const pipes = [
  CapitalizePipe,
  OrderByPipe,
];

@NgModule({
  declarations:[pipes],
  exports: [pipes]
})

export class PipesModule { }
