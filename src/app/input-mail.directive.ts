import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputMail]'
})
export class InputMailDirective {

  @HostListener('focus') onFocus(){
    this.element.nativeElement.classList.add('bg-warning')
    //mouse click olduğunda class değiştir
  }
  @HostListener('blur') onBlur(){
    this.element.nativeElement.classList.remove('bg-warning')
    //mouse farklı bölgeye click olduğunda eklenen classı sil
    let value: string = this.element.nativeElement.value;
    
    if(!value.includes('@')){//@ işareti varmı yokmu kontrol
      this.element.nativeElement.value = value.toLowerCase()+'@gmail.com'
      //yok ise yazılan texti küçült ve sounua @gmail.com ekle
    }
  }
  constructor(private element: ElementRef) { }

}
