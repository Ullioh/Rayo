import { Component, ElementRef, OnInit } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-rayo',
  templateUrl: './rayo.component.html',
  styleUrls: ['./rayo.component.css'],
  animations: [
    trigger('rayoAnimacion', [
      transition(':enter', [
        style({ transform: 'translateX(0)' }),
        animate('2s', keyframes([
          style({ offset: 0, transform: 'translateX(0)' }),
          style({ offset: 0.5, transform: 'translateX(100px)' }),
          style({ offset: 1, transform: 'translateX(0)' }),
        ]))
      ])
    ])
  ]
})
export class RayoComponent implements OnInit {
  rayoAnimacion = 'rayoAnimacion';

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.iniciarAnimacion();
  }

  iniciarAnimacion(): void {
    const rayoElement = this.elementRef.nativeElement.querySelector('.rayo-container') as HTMLElement;
    
    setInterval(() => {

      const x = Math.floor(Math.random() * 2500);
      rayoElement.style.transform = `translateX(${x}px)`;

      rayoElement.classList.add('hidden');

      setTimeout(() => {
        rayoElement.classList.remove('hidden');
      }, 1800); 
    }, 2000);
  }
}

