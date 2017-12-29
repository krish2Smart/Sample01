import { 
	Component, 
	OnInit, 
	Input, 
	Output, 
	OnChanges, 
	EventEmitter, 
	trigger, 
	state, 
	style, 
	animate, 
	transition 
} from '@angular/core';

@Component({
  selector: 'app-squareroot',
  templateUrl: './squareroot.component.html',
  styleUrls: ['./squareroot.component.css'],
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
export class SquarerootComponent implements OnInit {

  	@Input() closable = true;
	@Input() visible: boolean;
	@Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	operanta: number;
	squarerootobject =  {
	  text: "",
	  value: 0
	};
  
	operantfa(num) {
	  this.operanta = num;
	}
  
	@Output()
		squareroot: EventEmitter<any> = new EventEmitter();

	squarerootdata() {
		this.squarerootobject['text'] = "squareroot(" + this.operanta + ")" ;
		this.squarerootobject['value'] = Math.sqrt(this.operanta);
		this.squareroot.emit(this.squarerootobject);
	}
	constructor() { }

	ngOnInit() {
	}

	close() {
		this.visible = false;
		this.visibleChange.emit(this.visible);
	}

}
