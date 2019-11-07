//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Component({
    selector: 'doras-compare',
    templateUrl: './compare.component.html',
    styleUrls: ['./compare.component.css'],
})
export class App {
  name:string;
  
  private _values1 = [
    { id: 1, val: "huhu" },
    { id: 2, val: "val2" },
    { id: 3, val: "yep" },
    { id: 4, val: "cool" }
  ];
  private _values2 = [];
  
  constructor() {
    this.name = 'Angular2'
  }
  
  firstDropDownChanged(val: any) {
    const obj = this._values1[val];
    console.log(val, obj);
    
    if (!obj) return;
    
    if (obj.id == 1) {
      this._values2 = ["1.1", "1.2", "1.3"];
    }
    else if (obj.id == 2) {
      this._values2 = ["2.1", "2.2", "2.3"];
    }
    else if (obj.id == 3) {
      this._values2 = ["3.1", "3.2", "3.3"];
    }
    else {
      this._values2 = [];
    }
  }
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}