import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: `
    <div class="field">
    <p class="control has-icons-left has-icons-right">
      <input class="input" type="email" placeholder="Email">
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
    </p>
  </div>
  <div class="field">
    <p class="control has-icons-left">
      <input class="input" type="password" placeholder="Password">
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
    </p>
  </div>
  <div class="field">
    <p class="control">
      <button class="button is-success">
        Login
      </button>
    </p>
  </div>
    `,
  styles: []
})
export class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
