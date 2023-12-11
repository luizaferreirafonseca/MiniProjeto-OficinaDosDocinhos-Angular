import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';


interface Cards {
  name: string; 
  imageUrl: string;

}
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  

 sweetsCards:Cards[] = [
  {name: 'Docinhos', imageUrl: 'assets/docinhos.jpeg'},
  {name: 'Brownie trufado', imageUrl: 'assets/brownie.jpeg'},
  {name: 'Banoffe', imageUrl: 'assets/banoffe.jpeg'},
  {name: 'Pavê', imageUrl: 'assets/pave.jpeg'}
]


mostrarFormularioLogin:boolean = true;
mostrarFormularioCadastro:boolean = false; 


exibirFormularioCadastro(){
  this.mostrarFormularioCadastro = true;
  this.mostrarFormularioLogin = false;
}


formulario = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  senha: new FormControl('', [Validators.required, Validators.minLength(5)])
})

aviso:boolean = false;

constructor(private router: Router) {}

autenticar():void{
  if(this.formulario.value.email === 'luiza@gmail.com'
  &&
 this.formulario.value.senha ===  '123456'){
  localStorage.setItem('email', this.formulario.value.email);
  this.router.navigate(['/admin'])
 }else{
  this.aviso = true; 
 }
}


}

