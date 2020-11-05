import { Component } from '@angular/core';
import '@clr/core/button/register.js';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
})
export class ButtonPage {
  angularExamples = ['4.0.0/buttons/buttons.ng.html', '4.0.0/buttons/buttons.ng.ts'];
  coreExamples = ['4.0.0/buttons/buttons.core.html', '4.0.0/buttons/buttons.core.ts'];

  eslintSetup = `
"plugins": ["@clr/clarity-migration"],
"rules": {
  "@clr/clarity-migration/no-clr-button": "warn",
},
"overrides": [
  {
    "files": ["*.html"],
    "parser": "@clr/eslint-plugin-clarity-migration/dist/src/html-parser"
  }
]
  `;
}
