import { Directive, Input, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appHideHeader]',
  host: {
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class HideHeaderDirective {
  @Input('header') header: any;
  private lastY: number = 0;

  constructor(private renderer: Renderer2,
    private domCtrl: DomController
  ) { }

  ngOnInit() { //ver se está chegando tudo certo
    this.header = this.header.el;

    this.domCtrl.write(() => {
      this.renderer.setStyle(this.header, 'transition', 'margin-top 4000ms');
    });
  }

  onContentScroll(event: any) {
    if (event.detail.scrollTop > 3000) {
      this.renderer.setStyle(this.header, 'margin-top', `-${this.header.clientHeight}px`);
    } else {
      this.renderer.setStyle(this.header, 'margin-top', '0');
    }
    this.lastY = event.detail.scrollTop;
  }


}
