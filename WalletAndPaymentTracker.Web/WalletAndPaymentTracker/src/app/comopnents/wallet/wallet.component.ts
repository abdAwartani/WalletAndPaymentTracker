import { Component, OnInit } from '@angular/core';
import { Wallet } from '../../Classes/Wallet';
import { WalletService } from '../../services/wallet.service';

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

  constructor(private walletService: WalletService) { }

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

  save() {
    var wallet: Wallet = new Wallet();

    wallet.walletJson = JSON.stringify(this.lstInput);

    this.walletService.add(wallet).subscribe(res => { });
  }
}



export class Input {
  name: string = '';
  value: string = '';
  type: string = '';

}
