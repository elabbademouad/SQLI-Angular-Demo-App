import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent  {

  @Input()
  source:Array<any>;
  set(items:Array<any>){
    this.source=items;
  }
  @Output()
  search:EventEmitter<Array<any>>;
  @Input() propertignore:string;
 
  constructor() {
      this.source=[{
        username:false,
        date:10,
        gool:"sddsds",
        nta :false,
        age:10,
        some:"sddsds"
      }]
      this.filterModel=new filterModel();
      this.getProperties();
   }
   filterModel:filterModel;
   properties:Array<property>=[];
   getProperties(){debugger
     if(this.source && this.source.length!=0){
          let properties=Object.keys(this.source[0]).filter((p)=>{return !this.propertignore.includes(p)});
          properties.forEach(p=>{
              this.properties.push({
                name:p,
                type: typeof this.source[0][p],
                value:null
              });
          });
     }
   }
}
export class property{
  name:string;
  type:string;
  value:string;
}
export class filterModel{
  name:string;
  value:string;
}