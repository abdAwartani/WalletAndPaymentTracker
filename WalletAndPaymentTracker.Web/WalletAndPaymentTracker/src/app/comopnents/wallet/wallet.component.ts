import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  inputName: string = '';
  inputValue: string = '';
  inputType: string = '';
  inputIndex: number = -1;
  lstInput: Input[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addInput() {
    if (this.inputName !== "" && this.inputValue !== "") {
      if (this.inputIndex === -1 || this.lstInput[this.inputIndex] == null) {
        let inputObj: Input = new Input();
        inputObj.name = this.inputName;
        inputObj.value = this.inputValue;
        inputObj.type = this.inputType;
        this.lstInput.push(inputObj);
      } else {
        this.lstInput[this.inputIndex].name = this.inputName;
        this.lstInput[this.inputIndex].value = this.inputValue;
        this.lstInput[this.inputIndex].type = this.inputType;
      }
      this.inputName = "";
      this.inputValue = "";
      this.inputType = "";
      this.inputIndex = -1;
    }
  }

  removeInput(index: number) {
    if (index > -1) {
      this.lstInput.splice(index, 1);
    }
  }
}

export class Input {
  name: string = '';
  value: string = '';
  type: string = '';

}
