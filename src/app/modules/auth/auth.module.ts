import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/aut.service';
import { AuthComponent } from './components/auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule],
  exports: [],
  providers: [AuthService]
})
export class AuthModule {}
