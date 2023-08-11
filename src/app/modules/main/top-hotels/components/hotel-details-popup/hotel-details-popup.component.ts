// Importar los módulos necesarios desde Angular Core
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Definir el componente y sus metadatos
@Component({
  selector: 'app-hotel-details-popup', // Selector para usar este componente en el HTML
  templateUrl: './hotel-details-popup.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./hotel-details-popup.component.css'], // Estilos CSS asociados al componente
})
export class HotelDetailsPopupComponent {
  // Propiedad de entrada para recibir datos del hotel desde el componente padre
  @Input() hotel: any;

  // Evento de salida para notificar al componente padre que se debe cerrar el popup
  @Output() closePopup = new EventEmitter<void>();

  // Método para cerrar el popup
  onClosePopup(): void {
    this.closePopup.emit(); // Emitir el evento de cierre hacia el componente padre
  }

  // Función para generar el ícono de estrellas basado en la calificación del hotel
  generateStars(rating: number): string {
    const maxStars = 5; // Número máximo de estrellas
    const ratingPercentage = (rating / 10) * 100; // Convertir la calificación a porcentaje
    const fullStars = Math.round((ratingPercentage / 100) * maxStars); // Calcular el número de estrellas llenas

    // Crear un string que representa las estrellas llenas (⭐️) y las estrellas vacías (✩)
    return '⭐️'.repeat(fullStars) + '✩'.repeat(maxStars - fullStars);
  }
}
