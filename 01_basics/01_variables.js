const AccountId = 12145
let AccountEmail = "aayu@google.com"
var AccountPwd = "12456"
AccountCity = "Bhilai"
let AccountUsername;

/* 
prefer not to use var due to scope issues
const => cant change
let => used for changable variables
some vars can assign without let const var
*/

console.table([AccountEmail, AccountId, AccountPwd, AccountUsername, AccountCity])