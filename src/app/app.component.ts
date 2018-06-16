import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <section class="hero is-info is-fullheight is-bold">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="./assets/images/logo.png" alt="Logo">
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroC">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroC" class="navbar-menu">
            <div class="navbar-end">
              <span class="navbar-item">
                <a class="button is-info is-inverted" [routerLink]="['/auth']">
                  <span class="icon">
                    <i class="fas fa-sign-in-alt"></i>
                  </span>
                  <span>Login / Register</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <router-outlet></router-outlet>
      </div>
    </div>
  </section>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
