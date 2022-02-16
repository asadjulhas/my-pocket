// function for get by ID
function getById(id) {
  const getId = document.getElementById(id);
  return getId;
}

// Check empty value
function checkEmptyValue(id) {
  let checkNotEmpty = getById(id).value;
  if (checkNotEmpty == "") {
    checkNotEmpty = 0;
  } else {
    checkNotEmpty = checkNotEmpty;
  }
  return checkNotEmpty;
}

// Check input filed is not empty
function checkIncomeBalane() {
  const balanceValue = getById("income").value;
  if(balanceValue == '') {
    getById("expance_cal").disabled = true;
  } else {
    getById("expance_cal").disabled = false;
  }
}
checkIncomeBalane()

getById("expance_cal").addEventListener(
  "click",
  function () {
    // Get my incoam
    const myIncome = getById("income").value;
    // Get all Expenses
    const foorExpense = parseFloat(checkEmptyValue("food"));
    const rentExpense = parseFloat(checkEmptyValue("rent"));
    const clothesExpense = parseFloat(checkEmptyValue("clothes"));
    const totalExpenses = foorExpense + rentExpense + clothesExpense;
    // Balance after expense
    const nowBalance = myIncome - totalExpenses;
    // Show expense on view
    getById("total_expence").innerText = totalExpenses;
    // Check is expense is more than savings
    if (nowBalance < 0) {
      getById("balance").innerHTML = `<span class="waring_alert">You expense more than your income</span>`;
      getById("savings").style.display = "none";
      getById("total_ammount").style.display = "none";
    } else {
      getById("balance").innerText = nowBalance;
      getById("savings").style.display = "block";
      getById("total_ammount").style.display = "block";
    }
    //console.log(totalExpenses)
  }
);