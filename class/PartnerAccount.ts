import { DioAccount } from "./DioAccount";

export class PartnerAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  specialDeposit = (total: number) => {
    this.deposit(total + 10);
  };
}
