import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appExpandable]'
})
export class ExpandableDirective {
    constructor(private el: ElementRef){
        this.el.nativeElement.classList.add('collapsed');
    }

    @HostListener('click') onClick(){
        this.el.nativeElement.classList.toggle('collapsed');
    }
}
