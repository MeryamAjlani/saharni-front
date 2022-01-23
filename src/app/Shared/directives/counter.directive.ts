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
        const initialStep = endValue * 0.1;
        let step = initialStep;

        while (count < endValue) {
            const progress = count / (endValue * 1.01);
            await new Promise(resolve => setTimeout(resolve, 10 + (progress ** 2) * 50));
            step = initialStep * (1 - progress);
            if (step < 1) {
                step = 1;
            }
            count = count + step;
            if (count > endValue) {
                count = endValue;
            }
            this.el.nativeElement.innerHTML = Math.floor(count);
        }

    }


}
