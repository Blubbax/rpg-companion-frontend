import { Feature } from './../../../model/feature';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  @Input() feature: Feature|undefined;

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    // TODO
  }

}
