import { Injectable } from '@angular/core';
import { Paciente } from './usuario-cadastro/usuario-cadastro.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  public listaPacientes: Array<Paciente>;

  constructor(private httpClient: HttpClient) {
    this.listaPacientes = new Array<Paciente>();
   }

  public postPaciente(paciente){
    return this.httpClient.post("http://localhost:3000/api/pacientes", paciente);
  }

  public getPacientes(){
    return this.httpClient.get("http://localhost:3000/api/pacientes");
  }
}
