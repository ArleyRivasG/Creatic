import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  
  menu: MenuItem[] = [
    { ruta: '/home', texto: 'Inicio' },
    { ruta: '/description', texto: 'Quienes Somos' },
    { ruta: '/contact', texto: 'Contactanos' },
    { ruta: '/register', texto: 'Registrarse' },
  ];

}
