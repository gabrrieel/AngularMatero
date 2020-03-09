import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {

configuracao() {
 alert('teste configuração');
}

perfil() {
 alert('teste perfil');
}


  ngOnInit() {}
}

