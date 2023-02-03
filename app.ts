import { CompanyAccount } from "./class/CompanyAccount";
import { PartnerAccount } from "./class/PartnerAccount";
import { PeopleAccount } from "./class/PeopleAccount";

// const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);

// peopleAccount.setBalance(100);
// console.log(peopleAccount);
// peopleAccount.setStatus(true);
// peopleAccount.withdraw(100);
// console.log(peopleAccount);

// const companyAccount: CompanyAccount = new CompanyAccount("Dio", 101);
// console.log(companyAccount);
// companyAccount.setStatus(true);
// companyAccount.getLoan(1000);
// console.log(companyAccount);

const partnerAccount: PartnerAccount = new PartnerAccount("Kleber", 230);

console.log(partnerAccount);
partnerAccount.deposit(1000);
console.log(partnerAccount);
