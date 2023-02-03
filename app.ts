import { CompanyAccount } from "./class/CompanyAccount";
import { PartnerAccount } from "./class/PartnerAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);

//Depositando 100 dinheiros e printando
peopleAccount.deposit(100);
console.log(peopleAccount);

//Alterando o status para possibilitar o saque
peopleAccount.setStatus(true);

//Realizando o saque e printando
peopleAccount.withdraw(80);
console.log(peopleAccount);

/**************************************************************************/

// const companyAccount: CompanyAccount = new CompanyAccount("Dio", 101);
// console.log(companyAccount);
// companyAccount.setStatus(true);
// companyAccount.getLoan(1000);
// console.log(companyAccount);

/**************************************************************************/

// const partnerAccount: PartnerAccount = new PartnerAccount("Kleber", 230);
// console.log(partnerAccount);
// partnerAccount.specialDeposit(1000);
// partnerAccount.setStatus(true);
// partnerAccount.withdraw(120);
// console.log(partnerAccount);
