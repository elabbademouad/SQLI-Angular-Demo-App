import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appAuthorize]'
})
export class AuthorizeDirective implements OnInit {

  @Input()
  role:string;
  constructor(public el:ElementRef) { 
    
  }
  ngOnInit(){
    if(this.role==="user"){
      this.el.nativeElement.style.display="none";
    }else{
      this.el.nativeElement.style.display="block";
    }
  }



}
