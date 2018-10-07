import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from "@angular/core";



@Directive ({
    selector:'[appDropdown]'
})

export class DropDownDirective {
    
    
    isOpen = false

    constructor(private el: ElementRef, private renderer: Renderer2) {
    }
    @HostListener('click') toggleOpen() {
        let part = this.el.nativeElement.query
        this.renderer.addClass(part, 'show')
        this.isOpen = !this.isOpen
    }
    
}