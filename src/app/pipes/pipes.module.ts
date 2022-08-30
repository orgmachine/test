import { NgModule } from '@angular/core';
import { SearchPipe } from './search.pipe';
import { PincodePipe } from './pincode.pipe';
import { OrderByPipe } from './order-by.pipe';
import { SortPipe } from './sort-by.pipe';

@NgModule({
declarations: [SearchPipe,PincodePipe,OrderByPipe,SortPipe],
imports: [],
exports: [SearchPipe,PincodePipe,OrderByPipe,SortPipe],
})

export class PipesModule {}