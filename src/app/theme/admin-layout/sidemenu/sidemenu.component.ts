import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '@core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
})


export class SidemenuComponent implements OnInit{
  // NOTE: Ripple effect make page flashing on mobile
  @Input() ripple = false;
  
 
  menus = this.menuService.getAll();


  fav = 'favorite_border';
constructor(private menuService: MenuService) { }

  // Delete empty value in array
  filterStates(states: string[]) {
    return states.filter(item => item && item.trim());
  }
ngOnInit(){
 

}

  teste() {
  
    let a='favorite_border';
    let b='favorite';
    let fav = a;

    if(this.fav === 'favorite_border'){
      console.log(a);
      this.fav = b;
     return b;
    }if(this.fav === 'favorite'){
      console.log(b);
      this.fav = a;
      return a;
    }
 
  }

  

}
