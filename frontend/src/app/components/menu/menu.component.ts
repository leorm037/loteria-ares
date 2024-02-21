import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {

  public show: boolean = false;

  public usuario$ = this.usuarioService.get();

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  public toggle() {
    this.show = !this.show;
  }

  public sair(): void {
    this.usuarioService.sair();
    this.router.navigateByUrl('/');
  }

}
