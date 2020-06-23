import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'odix-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class OdixButtonComponent implements OnInit {
  
  @Input() text: string;
  @Input() type: string;

  constructor() { }
  
  ngOnInit() {
   console.log(this.type)
  }
}
