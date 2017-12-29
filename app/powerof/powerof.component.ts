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
  selector: 'app-powerof',
  templateUrl: './powerof.component.html',
  styleUrls: ['./powerof.component.css'],
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
export class PowerofComponent implements OnInit {

  @Input() closable = true;
	@Input() visible: boolean;
	@Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	operanta: number;
	operantb: number;
	powerofobject =  {
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
		powerof: EventEmitter<any> = new EventEmitter();

	powerofdata() {
		this.powerofobject['text'] = "powerof(" + this.operanta  + "," + this.operantb + ")" ;
		this.powerofobject['value'] = Math.pow(this.operanta, this.operantb);
		this.powerof.emit(this.powerofobject);
	}
	constructor() { }

	ngOnInit() {
	}

	close() {
		this.visible = false;
		this.visibleChange.emit(this.visible);
	}

}
