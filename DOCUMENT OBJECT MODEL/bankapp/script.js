function createuser() {
    let account_number = ac_no.value;
    let password = pwd.value;
    let balance = bal.value;
    let user = {
        account_number: account_number,
        password: password,
        balance: balance
    }
    localStorage.setItem(user.account_number, JSON.stringify(user))
    alert("user created")
}
function populate(users) {
    let htmlData = ""
    for (let user of users) {
        htmlData += `<P> account_number : ${user.account_number} password:${user.password} balance:${user.balance}</p>`

    }
    resultarea.innerHTML = htmlData
}

function listallusers() {
    let users = []
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let user = JSON.parse(localStorage.getItem(key))
        users.push(user)
    }
    console.log(users);
    populate(users)
}

function signin() {
    let uname = username.value
    let pass = password.value
    if (uname in localStorage) {

        let user = JSON.parse(localStorage.getItem(uname))
        if (user.password == pass) {
            sessionStorage.setItem("user", uname)
            //sessionStorage.setItem("user",username)
            alert("login success")
            window.location.href = "userhome.html"
        } else {
            alert("incorrect  password")
        }
    } else {
        alert("user not found")
    }
}

function displayBalance() {
    let user = sessionStorage.getItem("user");
    let data = JSON.parse(localStorage.getItem(user));
    alert(data.balance)
    console.log(data);
}
user=sessionStorage.getItem("user")
if(user){
    profile.innerHTML=`${user}`
}
function logout(){
    sessionStorage.removeItem("user")
    location.href="login.html"
}
function getUser(acno) {
    let user = JSON.parse(localStorage.getItem(acno))
    return user;
}

function fundTransfer() {
    alert("inside fund transfer")
    let to_ac = to_ac_no.value
    let con_ac_no = con_to_ac.value
    let amount = amt.value
    if (to_ac in localStorage) {
        let user = sessionStorage.getItem("user")
        //let account = JSON.parse(localStorage.getItem(user))
        let account = getUser(user);
        if (account.balance < amount) {
            alert("insufficient balance")
        }
        else {
            
            account.balance -= amtount
            localStorage.setItem(user,JSON.stringify(account))
            let credit_ac = getUser(to_ac)
            credit_ac.balance = amount+Number(credit_ac.balance)
            localStorage.setItem(to_ac,JSON.stringify(credit_ac))
        }
    }
    else {
        alert("invalid account number")
    }
}