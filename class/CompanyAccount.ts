import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (value: number): void => {
    if (this.getStatus()) {
      this.deposit(value);
    } else {
      throw new Error("A empresa não está apta ao empréstimo, status = false!");
    }
  };
}
