import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { DemoI } from '../interfaces/demo';
import { Subject, Subscription, Observable } from 'rxjs';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'app-demo',
  template: `
    <div class="columns is-multiline">
        <div class="column is-one-third is-half-tablet" *ngFor="let item of demoItems$ | async">
            <div class="box">
                <p class="title">{{item.title}}</p>
                <p class="subtitle">{{item.subtitle}}</p>
            </div>
        </div>
    </div>
    <div class="subtitle" style="line-height: 33px;">
        How it works?
        <a href="" class="button is-info is-inverted is-outlined">
            <span class="icon"><i class="fab fa-youtube"></i></span>
            <span>See video</span>
        </a>
    </div>
    `,
  styles: [':host .columns .title, :host .columns .subtitle { color: #000; }']
})
export class DemoComponent implements OnInit {
  private demoItems$: Subject<DemoI[]> = new Subject<DemoI[]>();
  private demoItemsSub: Subscription;
  constructor(private demoService: DemoService) {
    this.demoItemsSub = this.demoService.getList().subscribe(this.demoItems$);
  }

  ngOnInit(): void {}
}
