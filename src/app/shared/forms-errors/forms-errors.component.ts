import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-errors',
  templateUrl: './forms-errors.component.html',
  styleUrls: ['./forms-errors.component.scss']
})
export class FormsErrorsComponent implements OnInit {
@Input() errors: any;
  constructor() { }

  ngOnInit(): void {
  }

}
