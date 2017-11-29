import { Component } from '@angular/core';

console.log('`Test 2` component loaded asynchronously');

@Component({
  selector: 'test2',
  template: `
    <div>Test 2</div>
  `,
})

export class Test2Component {
  constructor() {}
}
