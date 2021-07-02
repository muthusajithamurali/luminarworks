class Bank{
    createAccount(account_number,name,balance){
        this.acc_no=account_number;
        this.name=name;
        this.balance=balance;
        
    }
    balanceEnquiry(){
        console.log("your aval balance="+this.balance);
    }
    deposit(amt){
        this.balance+=amt;
        console.log(`your account${this.acc_no} has been credited with amount ${amt} your aval balance:${this.balance}`);
    }
    withrawal(amt){
        if(this.balance<amt){
            console.log("transaction failed insufficient balance");
        }
        else{
            this.balance-=amt;
            console.log(`your account${this.acc_no} has been debited with amount ${amt} your aval balance:${this.balance}`);
        }
    }

}

var obj=new Bank;
obj.createAccount(1000,"ram",2000);
obj.withrawal(5000)