import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({ selector: '[appCounter]' })
export class CounterDirective implements OnChanges {
    constructor(private el: ElementRef) { }

    @Input() digit: number;

    ngOnChanges(changes: SimpleChanges): void {
        if (this.digit) {
            this.counter(this.digit);
        }
    }

    async counter(endValue): Promise<void> {
        let count = 0;
        const step = endValue * 0.025;

        while (count < endValue) {
            await new Promise(resolve => setTimeout(resolve, 10));
            count = count + step;
            this.el.nativeElement.innerHTML = Math.floor(count);
        }

    }


}
