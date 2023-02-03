import { DioAccount } from "./DioAccount";

export class PartnerAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  //   deposit = (total: number): void => {
  //     this.setBalance(total + 10);
  //   };
}
