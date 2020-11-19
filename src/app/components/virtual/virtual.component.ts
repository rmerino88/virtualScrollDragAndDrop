import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
// Para instalar virtual scroll y el drag and drop ejecutamos npm install @angular/cdk

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
})
export class VirtualComponent implements OnInit {

  // El vieww child nos permite hacernos cargo de cualquier elemento perteneciente al componente
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);

  // @Input() position: number = 25;
  @Input() position = 25;

  constructor() {
    // console.log(`Items: ${this.items}`);
  }

  ngOnInit() {
  }

  public irFinal() {
    this.viewport.scrollToIndex(this.items.length);
  }

  public irInicio() {
    this.viewport.scrollToIndex(0);
  }

  public irPosicion() {
    console.log(`Posición : ${this.position}`);
    this.viewport.scrollToIndex(this.position);
  }

  public irMitad() {
    this.viewport.scrollToIndex(this.items.length / 2 );
  }
}
