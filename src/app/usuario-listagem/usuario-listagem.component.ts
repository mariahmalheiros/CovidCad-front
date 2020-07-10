import { Component, OnInit } from '@angular/core';
import { Paciente } from '../usuario-cadastro/usuario-cadastro.component';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-usuario-listagem',
  templateUrl: './usuario-listagem.component.html',
  styleUrls: ['./usuario-listagem.component.css']
})
export class UsuarioListagemComponent implements OnInit {

  public listaPacientes: any;
  constructor(private pacientesService: PacienteService) { }

  ngOnInit(): void {
    this.listarPacientes();
  }

  listarPacientes(){
    return this.pacientesService.getPacientes().subscribe(x => {
      this.listaPacientes = x;
    });
  }

}
