import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-403',
  template: `
  <page-header></page-header> 
    <error-code
      code="403"
      [title]="'Permission denied!'"
      [message]="'You do not have permission to access the requested data.'"
    ></error-code> 
  `,
})
export class Error403Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
