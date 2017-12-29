import { Component, OnInit, Input, Output, OnChanges, EventEmitter, trigger, state, style, animate, transition } from '@angular/core';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})

export class MultiplyComponent implements OnInit {
	@Input() closable = true;
	@Input() visible: boolean;
	@Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	operanta: number;
	operantb: number;
	multiplyobject =  {
	  text: "",
	  value: 0
	};
  
	operantfa(num) {
	  this.operanta = num;
	}
  
	operantfb(num) {
	  this.operantb = num;
	}
  
	@Output()
		multiply: EventEmitter<any> = new EventEmitter();

	multiplydata() {
		this.multiplyobject['text'] = "multiply(" + this.operanta  + "," + this.operantb + ")" ;
		this.multiplyobject['value'] = (this.operanta * this.operantb);
		this.multiply.emit(this.multiplyobject);
		console.log(this.multiplyobject.text + (this.operanta * this.operantb));
	}
	constructor() { }

	ngOnInit() {
	}

	close() {
		this.visible = false;
		this.visibleChange.emit(this.visible);
	}
}
