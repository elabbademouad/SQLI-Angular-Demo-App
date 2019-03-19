import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appStatusUser]'
})
export class StatusUserDirective implements OnInit{

  @Input()
  status:boolean=false;
  constructor(public element:ElementRef) { }
  ngOnInit(){
    if(this.status){
      this.element.nativeElement.style.backgroundColor="green";
    }else{
      this.element.nativeElement.style.backgroundColor="red";
    }
  }

}
