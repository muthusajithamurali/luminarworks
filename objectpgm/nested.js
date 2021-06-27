var accounts={
    1000:{acno:1000,ac_type:"savings",balance:5000},
    1001:{acno:1001,ac_type:"savings",balance:6000},
    1002:{acno:1002,ac_type:"credit",balance:3000}

}
// 1000,balance?
console.log(accounts[1000].balance);
//1003:{accno:1003,ac_type:"savings",balance:3000}
accounts[1003]={accno:1003,ac_type:"saving",balance:3000}
console.log(accounts);