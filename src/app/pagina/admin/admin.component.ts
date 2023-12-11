import { Component } from '@angular/core';
import { HeaderComponent } from '../home/header/header.component';
import { FooterComponent } from '../home/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';



interface Menu { 
  imageUrl: string;
  name: string;
  descricao: string;
  valor: string; 

}
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule, CommonModule, RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private router: Router) {}


  itemsCards:Menu[] = [
   {imageUrl: 'assets/docinhos2.jpeg', name:'Docinhos Premium',descricao:'Docinhos de diversos sabores',valor:'R$6.00/unidade'},
   {imageUrl: 'assets/cacho.jpeg', name:'Cacho de Uvas',descricao:'Brigadeiros deliciosos recheados com uvas', valor:'R$20.00'},
   {imageUrl: 'assets/panetone.jpeg', name:'Panetone',descricao:'Panetone recheado com chocolate belga',valor:'R$20.00/unidade'},
   {imageUrl: 'assets/kit.jpeg', name:'Kit Brownie + Docinhos',descricao:'Brownie e docinhos de diversos sabores',valor:'R$60.00'},
   {imageUrl: 'assets/docinhos.jpeg', name:'Docinhos',descricao:'Docinhos de diversos sabores',valor:'R$4.00/unidade'},
   {imageUrl: 'assets/pave.jpeg', name:'Pavê',descricao:'Pavê delicioso com chocolate belga',valor:'R$40.00'},
   {imageUrl: 'assets/brownie.jpeg', name:'Cheesecake',descricao:'Cheesecake bem recheado',valor:'R$80.00'},
   {imageUrl: 'assets/banoffe.jpeg', name:'Banoffe',descricao:'Banoffe recheado',valor:'R$70.00'},
   {imageUrl: 'assets/letter.jpg', name:'Letter Brownie',descricao:'Brownie presenteavel de ninho e nutella',valor:'R$70.00'}
  ]





}
