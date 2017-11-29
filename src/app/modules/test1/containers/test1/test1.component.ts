import { Component } from '@angular/core';

console.log('`Test 1` component lazy loaded');

@Component({
  selector: 'test1',
  template: `
    <div>Test 1</div>
  `,
})

export class Test1Component {
  constructor() {}
}
