import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower : string = 'jeremias';
  nombreUpper : string = 'JEREMIAS';
  nombreCompleto : string = 'jeReMias aGustinOy';

  fecha : Date = new Date();
}
