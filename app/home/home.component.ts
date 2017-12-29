import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }
  returned = false;
  t1: string;
  public exampleData: Array<Select2OptionData>;
  data = {
    addDialog : false,
    subDialog : false,
    multiplyDialog : false,
    divisionDialog : false,
    value: false,
  };

  displayobj = {
    text: "",
    value: 0
  };

  @Output()
    outputemit: EventEmitter<number> = new EventEmitter();

  public changedtopic(e: Object): void {
    console.log("e " + e);
    this.t1 = Object.values(e).toString();
    console.log( this.t1);
    this.data[this.t1]=true;
    console.log(this.data[this.t1]);
    console.log(this.data);
  }

  ngOnInit() {
    this.exampleData = [
      {
        id: 'select a function or enter a value',
        text: 'select a function or enter a value'
      },
      {
        id: 'value',
        text: 'enter a value'
      },
      {
        id: 'addDialog',
        text: 'add'
      },
      {
        id: 'subDialog',
        text: 'sub'
      },
      {
        id: 'multiplyDialog',
        text: 'multiply' 
      },
      {
        id: 'divisionDialog',
        text: 'division' 
      },
      {
        id: 'display',
        text: 'print'
      },
    ];
  }

  onCreateContent(data): void { 
    this.returned = true;
    this.displayobj = data;
    this.outputemit.emit(this.displayobj['value']);
    console.log(this.displayobj['value']);
    console.log("data " + data);
  }

}
