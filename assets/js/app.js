// function for get by ID
function getById(id) {
  const getId = document.getElementById(id);
  return getId;
}

// Set placeholder waring
function validateWarind(id) {
   getById(id).value = '';
   getById(id).setAttribute('placeholder', 'Please input a valid number');
   getById("total_expence").innerHTML = `<span class="waring_alert_total">Please input a valid number on "${id}" filed</span>`;
}

// Check empty value for expense fileds
function checkEmptyValue(id) {
  let checkNotEmpty = getById(id).value;
  if (checkNotEmpty == "") {
    checkNotEmpty = 0;
  } else {
    checkNotEmpty = checkNotEmpty;
  }
  return checkNotEmpty;
}

// Check input filed is not empty or string
function checkIncomeBalane(id) {
  const balanceValue = getById(id).value;
  if (balanceValue == '' || balanceValue < 0) {
    getById("expance_cal").disabled = true;
    getById("saving_btn").disabled = true;
    validateWarind(id);
;  } else {
    getById("expance_cal").disabled = false;
    getById("saving_btn").disabled = false;
    getById("total_expence").innerHTML = '';
  }
}
//checkIncomeBalane("income")

// Calculate button action for total expense and balance
getById("expance_cal").addEventListener(
  "click", function () {
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
      getById("income").style.border = "1px solid #ff0000";
    } else {
      getById("balance").innerText = nowBalance;
      getById("savings").style.display = "block";
      getById("total_ammount").style.display = "block";
      getById("income").style.border = "1px solid #ced4da";
    }
    getById("remaining_balance").innerText = '';
    getById("total_saving").innerText = '';

  }
);

// Savings and total balance
getById("saving_btn").addEventListener(
  "click", function () {
    // Get my incoam
    const myIncome = getById("income").value;
    const savingPercent = getById("saving_percent").value;
    const savingAmmount = myIncome / 100 * savingPercent;
    const remainingBalance = getById("balance").innerText - savingAmmount;
    if (remainingBalance < 0) {
      getById("total_saving").innerHTML = `<span class="waring_alert_total">Don't able to save ${savingPercent}% money.</span>`;
      getById("remaining_balance").innerText = '';
      getById("saving_percent").style.border = "1px solid #ff0000";
    } else {
      getById("total_saving").innerText = savingAmmount;
      getById("remaining_balance").innerText = remainingBalance;
      getById("saving_percent").style.border = "1px solid #ced4da";
    }
  })