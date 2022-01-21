import { Injectable } from '@angular/core';
import { Wallet } from '../Classes/Wallet';
import { ApiHelperService } from './api-helper.service';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private apiHelper: ApiHelperService) { }

  getAll() {
    let url = "wallet/getAll";
    return this.apiHelper.get<Wallet[]>(url);
  }

  add(wallet: Wallet) {
    let url = "wallet";
    return this.apiHelper.post<Wallet, any>(url, wallet);
  }

  get(name: string) {
    let url = "wallet/" + name;
    return this.apiHelper.get<Wallet>(url);
  }

  update(wallet: Wallet) {
    let url = "wallet/" + wallet.name;
    return this.apiHelper.put<Wallet, any>(url, wallet);
  }

  delete(name: string) {
    let url = "wallet/" + name;
    return this.apiHelper.delete<any>(url);
  }
}
