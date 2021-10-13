import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter',
    /**
     * Causes pipe to be triggerred whenever a change happens to value. 
     * Can cause performance issues.
     * So, be careful while doing so.
     */
    pure:false 
})
export class FilterPipe implements PipeTransform {
    transform(value: any, filterString: string, propName: string) {
        if (value.length === 0 || filterString === '') return value
        const resultArray = []
        value.forEach(val => {
            if (val[propName] && val[propName] === filterString) {
                resultArray.push(val)
            }
        })
        return resultArray
    }
}