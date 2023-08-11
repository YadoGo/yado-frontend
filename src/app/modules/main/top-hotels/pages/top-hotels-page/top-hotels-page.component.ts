import { Component } from '@angular/core';

@Component({
  selector: 'app-top-hotels-page',
  templateUrl: './top-hotels-page.component.html',
  styleUrls: ['./top-hotels-page.component.css'],
})
export class TopHotelsPageComponent {
  showDescription = false;
  hotels = [
    {
      name: 'Hotel A ⭐⭐',
      image: '/assets/images/top/hotel1.jpg',
      description:
        'Este es un hotel de lujo con todas las comodidades que puedes esperar',
      address: 'Calle Principal 123, Ciudad',
      rating: 7.7,
      price: 200,
      services: [
        { name: 'Piscina', icon: 'pool' },
        { name: 'Gimnasio', icon: 'fitness_center' },
        { name: 'Restaurante', icon: 'restaurant' },
        { name: 'Spa', icon: 'spa' },
      ],
      wifi: true,
      parking: false,
      petFriendly: true,
    },
    {
      name: 'Resort Paradise ⭐⭐⭐⭐',
      image: '/assets/images/top/hotel2.jpg',
      description:
        'Un paraíso tropical te espera en nuestro resort de ensueño.',
      address: 'Playa Exótica, Isla Paradisio',
      rating: 4.8,
      price: 350,
      services: [
        { name: 'Playa Privada', icon: 'beach_access' },
        { name: 'Piscina Infinity', icon: 'pool' },
        { name: 'Actividades Acuáticas', icon: 'pool' },
      ],
      wifi: true,
      parking: false,
      petFriendly: true,
    },
    {
      name: 'Hotel Sereno ⭐⭐⭐',
      image: '/assets/images/top/hotel3.jpg',
      description:
        'Disfruta de un ambiente sereno y tranquilo en nuestro hotel.',
      address: 'Bosque Tranquilo, Pueblo Sereno',
      rating: 8.9,
      price: 150,
      services: [
        { name: 'Senderismo', icon: 'hiking' },
        { name: 'Desayuno Orgánico', icon: 'breakfast_dining' },
        { name: 'Cabañas Rústicas', icon: 'cabin' },
      ],
      wifi: true,
      parking: true,
      petFriendly: false,
    },
    {
      name: 'Hotel Elegance ⭐⭐⭐⭐',
      image: '/assets/images/top/hotel4.jpg',
      description: 'Experimenta la elegancia y el confort en nuestro hotel.',
      address: 'Avenida Elegante 456, Ciudad Sofisticada',
      rating: 4.7,
      price: 280,
      services: [
        { name: 'Spa de Lujo', icon: 'spa' },
        { name: 'Cenas Gourmet', icon: 'restaurant' },
        { name: 'Vistas Panorámicas', icon: 'panorama' },
      ],
      wifi: true,
      parking: false,
      petFriendly: false,
    },
    {
      name: 'Hotel Oasis ⭐⭐',
      image: '/assets/images/top/hotel5.jpg',
      description:
        'Un oasis de relajación y bienestar te espera en nuestro hotel.',
      address: 'Desierto Tranquilo, Oasis Sereno',
      rating: 9,
      price: 180,
      services: [
        { name: 'Piscina de Agua Termal', icon: 'pool' },
        { name: 'Masajes Terapéuticos', icon: 'healing' },
        { name: 'Yoga', icon: 'fitness_center' },
      ],
      wifi: true,
      parking: false,
      petFriendly: true,
    },
    {
      name: 'Hotel Montaña ⭐⭐⭐',
      image: '/assets/images/top/hotel6.jpg',
      description:
        'Escapa a las montañas y disfruta de la naturaleza en nuestro hotel.',
      address: 'Cumbre Alta, Pueblo Montañero',
      rating: 4.6,
      price: 220,
      services: [
        { name: 'Senderismo', icon: 'hiking' },
        { name: 'Cabañas Rústicas', icon: 'cabin' },
        { name: 'Vistas Panorámicas', icon: 'panorama' },
      ],
      wifi: true,
      parking: false,
      petFriendly: true,
    },
    {
      name: 'Hotel Playa Paradise ⭐',
      image: '/assets/images/top/hotel7.jpg',
      description: 'Un paraíso en la playa te espera en nuestro hotel.',
      address: 'Playa Dorada, Costa Tropical',
      rating: 4.8,
      price: 320,
      services: [
        { name: 'Piscina de Playa', icon: 'pool' },
        { name: 'Deportes Acuáticos', icon: 'sports_handball' },
        { name: 'Restaurantes frente al mar', icon: 'restaurant' },
      ],
      wifi: true,
      parking: false,
      petFriendly: true,
    },
    {
      name: 'Hotel Histórico ⭐⭐⭐',
      image: '/assets/images/top/hotel8.jpg',
      description:
        'Revive la historia en nuestro hotel ubicado en el corazón de la ciudad.',
      address: 'Plaza Histórica, Ciudad Antigua',
      rating: 6.7,
      price: 180,
      services: [
        { name: 'Tours Culturales', icon: 'museum' },
        { name: 'Arquitectura Histórica', icon: 'architecture' },
        { name: 'Eventos Temáticos', icon: 'event' },
      ],
      wifi: true,
      parking: false,
      petFriendly: false,
    },
    {
      name: 'Hotel Elegante ⭐⭐⭐⭐',
      image: '/assets/images/top/hotel9.jpg',
      description:
        'Experimenta la elegancia y el confort en nuestro hotel de diseño.',
      address: 'Avenida de la Elegancia, Ciudad Moderna',
      rating: 5.9,
      price: 280,
      services: [
        { name: 'Spa de Lujo', icon: 'spa' },
        { name: 'Restaurante de Alta Cocina', icon: 'restaurant' },
        { name: 'Centro de Negocios', icon: 'business_center' },
      ],
      wifi: false,
      parking: true,
      petFriendly: false,
    },
    {
      name: 'Hotel Rural ⭐⭐',
      image: '/assets/images/top/hotel10.jpg',
      description:
        'Vive la experiencia rural en nuestro acogedor hotel en el campo.',
      address: 'Camino Rural, Aldea Tranquila',
      rating: 10,
      price: 150,
      services: [
        { name: 'Granja y Huerto Orgánico', icon: 'eco' },
        { name: 'Actividades al Aire Libre', icon: 'sports' },
        { name: 'Cenas a la Luz de las Estrellas', icon: 'restaurant' },
      ],
      wifi: false,
      parking: false,
      petFriendly: true,
    },
    {
      name: 'Hotel Resort Paradise ⭐⭐⭐',
      image: '/assets/images/top/hotel11.jpg',
      description:
        'Disfruta de unas vacaciones de lujo en nuestro resort paradisíaco junto a la playa.',
      address: 'Playa del Paraíso, Isla del Sol',
      rating: 9.5,
      price: 300,
      services: [
        { name: 'Piscina Infinity', icon: 'pool' },
        { name: 'Spa y Tratamientos Relajantes', icon: 'spa' },
        { name: 'Restaurantes de Clase Mundial', icon: 'restaurant' },
      ],
      wifi: true,
      parking: true,
      petFriendly: true,
    },
    {
      name: 'Hotel Histórico Castillo ⭐',
      image: '/assets/images/top/hotel12.jpg',
      description:
        'Descubre la historia en nuestro castillo reconvertido en un hotel de ensueño.',
      address: 'Calle de los Caballeros, Ciudad Antigua',
      rating: 7,
      price: 220,
      services: [
        { name: 'Recorridos Históricos', icon: 'history' },
        { name: 'Vistas Panorámicas desde las Torres', icon: 'panorama' },
        { name: 'Exquisita Gastronomía Medieval', icon: 'restaurant' },
      ],
      wifi: false,
      parking: false,
      petFriendly: false,
    },
    {
      name: 'Hotel Spa Montaña Serena ⭐',
      image: '/assets/images/top/hotel13.jpg',
      description:
        'Relájate y rejuvenece en nuestro tranquilo hotel de montaña con spa.',
      address: 'Montaña Serena, Valle Tranquilo',
      rating: 8.2,
      price: 180,
      services: [
        { name: 'Spa y Terapias Holísticas', icon: 'spa' },
        { name: 'Senderismo y Naturaleza', icon: 'nature' },
        { name: 'Cenas Gourmet en la Cima', icon: 'restaurant' },
      ],
      wifi: true,
      parking: true,
      petFriendly: false,
    },
    {
      name: 'Hotel Boutique Bohemio ⭐⭐',
      image: '/assets/images/top/hotel14.jpg',
      description:
        'Sumérgete en el ambiente bohemio de nuestro hotel boutique en el corazón de la ciudad.',
      address: 'Calle Bohemia, Barrio Artístico',
      rating: 3.2,
      price: 160,
      services: [
        { name: 'Decoración y Arte Únicos', icon: 'art_track' },
        { name: 'Talleres y Exposiciones de Arte', icon: 'palette' },
        { name: 'Cafeterías y Bistrós Acogedores', icon: 'restaurant' },
      ],
      wifi: true,
      parking: false,
      petFriendly: true,
    },
    {
      name: 'Hotel Ecológico Playa Azul ⭐⭐',
      image: '/assets/images/top/hotel15.jpg',
      description:
        'Conéctate con la naturaleza en nuestro eco-hotel a orillas de una playa prístina.',
      address: 'Playa Azul, Reserva Natural',
      rating: 5,
      price: 250,
      services: [
        { name: 'Playa Privada y Snorkeling', icon: 'beach_access' },
        { name: 'Talleres de Sostenibilidad', icon: 'eco' },
        { name: 'Gastronomía Local Sostenible', icon: 'restaurant' },
      ],
      wifi: true,
      parking: false,
      petFriendly: true,
    },
  ];

  isPopupOpen = false; // Agregar esta propiedad para controlar la apertura del popup
  activeHotel: any; // Agregar esta propiedad para mantener el hotel activo para el popup

  openPopup(hotel: any) {
    this.isPopupOpen = true;
    this.activeHotel = hotel;
  }

  closePopup() {
    this.isPopupOpen = false;
    this.activeHotel = null;
  }
}
