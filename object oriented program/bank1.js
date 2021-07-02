class Bank {
    status = 0;
    getAccountDetails() {
        let accounts = {
            1000: { account_number: 1000, name: "ram", balance: 4000, username: 1000, password: "userone" },
            1001: { account_number: 1001, name: "ravi", balance: 2000, username: 1001, password: "usertwo" },
            1002: { account_number: 1002, name: "raju", balance: 7000, username: 1002, password: "userthree" },
            1003: { account_number: 1003, name: "nikil", balance: 6000, username: 1003, password: "userfour" },

        }
        return accounts
    }
    authenticate(uname, pwd) {

        let data = this.getAccountDetails()
        if (uname in data) {
            if (uname == data[uname]["username"] & pwd == data[uname]["password"]) {
                this.status = 1;
                return uname;//sucess authentication

            }
            else {
                return -1;//incorrect password
            }
        }
        else {
            return 0;//invalid user
        }
    }


    balanceEnquiry(accno) {
        if (this.status == 1) {
            let data = this.getAccountDetails()
            console.log(data[accno]["balance"]);
        }
        else {
            console.log("you must login first");
        }
    }
    fundTransfer(user, to_accno, amount) {
        if (this.status == 1) {
            let data = this.getAccountDetails();
            if (!(to_accno in data)) {
                console.log("invalid to_accno");
            }
            let balance = data[user]["balance"]
            if (balance < amount) {
                console.log("transaction failed insufficient balance");
            }
            else {
                data[to_accno].balance += amount;
                data[user].balance  -= amount;
                console.log(data);
            }
        }
    }
}

var obj = new Bank();
let user = obj.authenticate(1000, "userone")
obj.fundTransfer(user, 1001, 2000)
