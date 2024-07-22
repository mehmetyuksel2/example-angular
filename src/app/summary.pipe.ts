import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: "summary"//summary pipe kullanılması durumunda aşağodaki method çalışacaktır
})

export class SummaryPipe implements PipeTransform{
    transform(value: any, limit?: number) {//ilgili veri value değişkeninde gelir
        if(!value){
            return null;
        }
        let ilimit = (limit) ? limit:20;//belirtilen ikinci parametredeki limit atanır
        return value.substr(0,ilimit)+'...';//ve programın ne yapması gerektiğini belirler
    }
}