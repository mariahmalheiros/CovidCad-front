import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CovidCad';

  faCoffee = faCoffee;

  public constructor(private router: Router){}


// tslint:disable-next-line: typedef
  public navegarPraCadastro(){
      this.router.navigate(['/cadastro']);
    }
}
