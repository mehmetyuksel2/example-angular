import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ImageValidator{//CUSTOM VALİDATOR
    static IsValidExtension(control: AbstractControl): ValidationErrors | null{
        const v = control.value as string;//gelen value stringe çevirilir

        if(v.endsWith('.jpg') ||v.endsWith('.jpeg') || v.endsWith('.png') ){//dosya adının sonu ne ile bitiyor ?
            return null;//doğru girildiyse null döndür

        }else{
            return{
                wrongExtension: true//yanlış girildiyse wrongExtension true döndür
            }
        }

    }
}