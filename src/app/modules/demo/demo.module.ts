import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './components/demo.component';
import { DemoService } from './services/demo.service';

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule],
  exports: [],
  providers: [DemoService]
})
export class DemoModule {}
