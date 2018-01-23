import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  enjson = JSON.parse(JSON.stringify(this.heroes));
  // UserName: string, PassWord: string
  SummitJSON(UserName: string, PassWord: string) {
    var unarray: string [] = [];
    unarray.push('username: '+UserName);
    unarray.push('password: '+PassWord);
    this.enjson=JSON.parse(JSON.stringify(unarray));
    console.log(this.enjson);
    console.log(UserName);
    //console.log("Hola de nuevo");
    //this.title="Hola otra vez";
  }
}
