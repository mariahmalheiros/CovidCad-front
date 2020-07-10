import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { PacienteService } from '../paciente.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {
  private formCadastro: NgForm;

  paciente: Paciente;
  constructor(private pacienteService: PacienteService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.paciente = new Paciente("","",0,0,"","");

  }

  public limparCampos(form: NgForm) {
    this.paciente = new Paciente("","",0,0,"","");
    form.resetForm();
  }

  cadastrarPaciente(args){

      const headers = new HttpHeaders()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');

      this.http.post('http://localhost:3000/api/pacientes', JSON.stringify(args), {
        headers: headers
      })
      .subscribe(data => {
        if(data)
          alert("Paciente cadastrado com sucesso!");

        this.paciente = new Paciente("","",0,0,"","");
      });
  }
}

export class Paciente {
  constructor(
  public Nome: string,
  public Telefone: string,
  public Altura: number,
  public Peso: number,
  public Doencas: string,
  public Endereco: string){}
}
