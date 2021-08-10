import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNamehighlight]'
})
export class NamehighlightDirective {

  constructor(private r:ElementRef) {}

  @HostBinding('style.color') color:any;
  
  @HostListener('mouseenter') onmouseenter()
  {
    this.color="red";
  }
  @HostListener('mouseleave') onmouseleave()
  {
    this.color="black"
  }

/*  @HostListener('mouseenter') onmouseenter()
  {
    this.r.nativeElement.style.color="red";
  }
  @HostListener('mouseleave') onmouseleave()
  {
    this.r.nativeElement.style.color="black"
  }*/
}
