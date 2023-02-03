export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = false;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (): void => {
    if (this.validateStatus()) {
      console.log("Voce depositou");
    }
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

  setBalance = (total: number) => {
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

    throw new Error("Conta inválida");
  };
}
