import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-project-list',
    template: `
    <div class="columns is-multiline">
      <div class="column is-one-third is-half-tablet">
        <div class="box">
          <p class="title">Title</p>
          <p class="subtitle">Subtitle</p>
        </div>
      </div>
      <div class="column is-one-third is-half-tablet">
        <div class="box">
          <p class="title">Title</p>
          <p class="subtitle">Subtitle</p>
        </div>
      </div>
      <div class="column is-one-third is-half-tablet">
        <div class="box">
          <p class="title">Title</p>
          <p class="subtitle">Subtitle</p>
        </div>
      </div>
      <div class="column is-one-third is-half-tablet">
        <div class="box">
          <p class="title">Title</p>
          <p class="subtitle">Subtitle</p>
        </div>
      </div>
      <div class="column is-one-third is-half-tablet">
        <div class="box">
          <p class="title">Title</p>
          <p class="subtitle">Subtitle</p>
        </div>
      </div>
      <div class="column is-one-third is-half-tablet">
        <div class="box">
          <p class="title">Title</p>
          <p class="subtitle">Subtitle</p>
        </div>
      </div>
    </div>
    `,
    styles: [
      ':host .title, :host .subtitle { color: #000; }'
    ]
})
export class ProjectListComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
