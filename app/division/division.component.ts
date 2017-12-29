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
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css'],
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
export class DivisionComponent implements OnInit {

  @Input() closable = true;
	@Input() visible: boolean;
	@Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	operanta: number;
	operantb: number;
	divisionobject =  {
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
		division: EventEmitter<any> = new EventEmitter();

	divisiondata() {
		this.divisionobject['text'] = "division(" + this.operanta  + "," + this.operantb + ")" ;
		this.divisionobject['value'] = (this.operanta / this.operantb);
		this.division.emit(this.divisionobject);
		console.log(this.divisionobject.text + (this.operanta / this.operantb));
	}
	constructor() { }

	ngOnInit() {
	}

	close() {
		this.visible = false;
		this.visibleChange.emit(this.visible);
	}

}
