import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  searchInput!: string;
  searchText!: string

  clearInput() : void{
    this.searchInput='';

  }
  onSearch() {
    confirm(this.searchInput);
  }
}
