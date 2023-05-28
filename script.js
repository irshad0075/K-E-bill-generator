function generateBill() {
  const customerName = document.getElementById("customerName").value;
  const currentMonth = document.getElementById("currentMonth").value;
  const numberOfUnits = parseFloat(
    document.getElementById("numberOfUnits").value
  );
  const chargesPerUnit = 16;
  const netAmountPayable = numberOfUnits * chargesPerUnit;
  const latePaymentSurcharge = netAmountPayable * 0.1;
  const grossAmountPayable = netAmountPayable + latePaymentSurcharge;
  const formattedNetAmountPayable = netAmountPayable.toFixed(2);
  const formattedLatePaymentSurcharge = latePaymentSurcharge.toFixed(2);
  const formattedGrossAmountPayable = grossAmountPayable.toFixed(2);

  document.getElementById("customerNameDisplay").innerHTML =
    "Customer Name: " + customerName;
  document.getElementById("currentMonthDisplay").innerHTML =
    "Current Month: " + currentMonth;
  document.getElementById("numberOfUnitsDisplay").innerHTML =
    "Number of units: " + numberOfUnits;
  document.getElementById("chargesPerUnitDisplay").innerHTML =
    "Charges per unit: " + chargesPerUnit;
  document.getElementById("netAmountPayableDisplay").innerHTML =
    "Net Amount Payable (within Due Date): " + formattedNetAmountPayable;
  document.getElementById("latePaymentSurchargeDisplay").innerHTML =
    "Late Payment Surcharge: " + formattedLatePaymentSurcharge;
  document.getElementById("grossAmountPayableDisplay").innerHTML =
    "Gross Amount Payable (after Due Date): " + formattedGrossAmountPayable;
}
