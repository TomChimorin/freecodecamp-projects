let price = 19.5; 
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

const cashInput = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

const currencyUnits = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
};

purchaseBtn.addEventListener("click", () => {
  const cash = parseFloat(cashInput.value);
  if (isNaN(cash)) {
    alert("Please enter a valid cash amount.");
    return;
  }

  const change = parseFloat((cash - price).toFixed(2));

  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (change === 0) {
    changeDue.textContent = "No change due - customer paid with exact cash";
    return;
  }

  const drawerTotal = parseFloat(cid.reduce((sum, [_, amount]) => sum + amount, 0).toFixed(2));

  if (drawerTotal < change) {
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  const changeArray = [];
  let remainingChange = change;

  const reversedCid = [...cid].reverse();

  for (let [unit, amount] of reversedCid) {
    let unitValue = currencyUnits[unit];
    let unitAmount = 0;

    while (remainingChange >= unitValue && amount > 0) {
      remainingChange = parseFloat((remainingChange - unitValue).toFixed(2));
      amount = parseFloat((amount - unitValue).toFixed(2));
      unitAmount = parseFloat((unitAmount + unitValue).toFixed(2));
    }

    if (unitAmount > 0) {
      changeArray.push([unit, unitAmount]);
    }
  }

  if (remainingChange > 0) {
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  const finalChange = changeArray.map(([unit, amount]) => `${unit}: $${amount}`).join(" ");

  if (drawerTotal === change) {
    changeDue.textContent = `Status: CLOSED ${finalChange}`;
  } else {
    changeDue.textContent = `Status: OPEN ${finalChange}`;
  }
});
