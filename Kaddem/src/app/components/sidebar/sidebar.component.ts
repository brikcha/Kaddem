import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './../../login/services/token-storage.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    role: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/home/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '', role: 'ROLE_ADMIN' },
    // { path: '/user-profile', title: 'User',  icon:'person', class: '' },
    // { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/home/etudiant', title: 'etudiant',  icon:'person', class: '', role: 'ROLE_ADMIN' },
    { path: '/home/formation', title: 'formation',  icon:'content_paste', class: '', role: 'ROLE_USER' },
    { path: '/home/university/', title: 'University',  icon:'content_paste', class: '', role: 'ROLE_USER' },
    { path: '/home/events/', title: 'Events',  icon:'content_paste', class: '', role: 'ROLE_USER' },
    { path: '/home/departement/', title: 'departement',  icon:'content_paste', class: '', role: 'RROLE_ADMIN' },
    { path: '/home/chefdepartement/', title: 'chefdepartement',  icon:'content_paste', class: '', role: 'RROLE_ADMIN' },
    { path: '/home/equipe/', title: 'equipe',  icon:'content_paste', class: '', role: 'ROLE_USER' },
    { path: '/home/contract/', title: 'Contrats',  icon:'content_paste', class: '', role: 'ROLE_USER' }


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  userRole = null;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.userRole = this.tokenStorage.getUser().roles[0];
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
