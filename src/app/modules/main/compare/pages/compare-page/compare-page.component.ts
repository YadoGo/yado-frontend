import { Component } from '@angular/core';

@Component({
  selector: 'app-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.css'],
})
export class ComparePageComponent {
  hotel1Attributes = [
    { text: 'Lavado de ropa gratis', isBetter: this.randomBetter() },
    {
      text: 'Fruta a disposición en la habitación',
      isBetter: this.randomBetter(),
    },
    { text: 'Sitio bien comunicado', isBetter: this.randomBetter() },
    { text: 'Admiten mascotas', isBetter: this.randomBetter() },
    { text: 'Piscina', isBetter: this.randomBetter() },
    { text: 'Sala de juegos', isBetter: this.randomBetter() },
    { text: 'Restaurante interno', isBetter: this.randomBetter() },
    { text: '2 baños', isBetter: this.randomBetter() },
    { text: 'Admiten perros', isBetter: this.randomBetter() },
    { text: 'Prohibido fumar', isBetter: this.randomBetter() },
    { text: 'Desayuno incluido', isBetter: this.randomBetter() },
    { text: 'Ducha con hidromasaje', isBetter: this.randomBetter() },
    { text: 'Wi-Fi gratuito', isBetter: this.randomBetter() },
    { text: 'Gimnasio', isBetter: this.randomBetter() },
  ];

  hotel2Attributes = [
    { text: 'Lavado de ropa gratis', isBetter: this.randomBetter() },
    {
      text: 'Fruta a disposición en la habitación',
      isBetter: this.randomBetter(),
    },
    { text: 'Sitio bien comunicado', isBetter: this.randomBetter() },
    { text: 'Admiten mascotas', isBetter: this.randomBetter() },
    { text: 'Piscina', isBetter: this.randomBetter() },
    { text: 'Sala de juegos', isBetter: this.randomBetter() },
    { text: 'Restaurante interno', isBetter: this.randomBetter() },
    { text: '2 baños', isBetter: this.randomBetter() },
    { text: 'Admiten perros', isBetter: this.randomBetter() },
    { text: 'Prohibido fumar', isBetter: this.randomBetter() },
    { text: 'Desayuno incluido', isBetter: this.randomBetter() },
    { text: 'Ducha con hidromasaje', isBetter: this.randomBetter() },
    { text: 'Wi-Fi gratuito', isBetter: this.randomBetter() },
    { text: 'Gimnasio', isBetter: this.randomBetter() },
  ];

  randomBetter(): boolean {
    return Math.random() > 0.5;
  }
}
