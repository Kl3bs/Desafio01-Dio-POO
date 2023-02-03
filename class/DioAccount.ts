export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = false;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  deposit = (value: number): void => {
    this.setBalance(value);
  };

  withdraw = (total: number): void => {
    if (this.validateStatus() && this.hasBalance(total)) {
      this.balance -= total;
    } else {
      throw new Error("Saldo insuficiente!");
    }
  };

  getBalance = (): number => {
    return this.balance;
  };

  private setBalance = (total: number) => {
    this.balance += total;
  };

  getStatus = (): boolean => {
    return this.status;
  };

  setStatus = (status: boolean) => {
    this.status = status;
  };

  private hasBalance = (value: number): boolean => {
    return this.getBalance() >= value ? true : false;
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta não ativada!");
  };
}
