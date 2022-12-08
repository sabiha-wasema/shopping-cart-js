document.getElementById("phone-plus").addEventListener("click", function() {
  //   console.log("clicked");
  const phoneQuantity = document.getElementById("phone-number");
  //   console.log(phoneQuantity);
  const phoneTotal = phoneQuantity.value;
  //   console.log(phoneTotal);
  const newPhoneTotal = parseInt(phoneTotal) + 1;
  //   console.log(newPhoneTotal);
  phoneQuantity.value = newPhoneTotal;

  const previousPrice = document.getElementById("iphone-total");
  const phonePrice = previousPrice.innerText;
  //   console.log(phonePrice);
  const total = newPhoneTotal * 1219;
  //   console.log(total);
  previousPrice.innerText = total;

  subTotalPrice();
});

document.getElementById("phone-minus").addEventListener("click", function() {
  const phoneQuantity = document.getElementById("phone-number");
  const phoneTotal = phoneQuantity.value;
  if (phoneTotal > 0) {
    const newPhoneTotal = parseInt(phoneTotal) - 1;
    phoneQuantity.value = newPhoneTotal;

    const previousPrice = document.getElementById("iphone-total");
    const phonePrice = previousPrice.innerText;
    const total = newPhoneTotal * 1219;
    previousPrice.innerText = total;
    subTotalPrice();
  }
});

document.getElementById("case-plus").addEventListener("click", function() {
  const caseQuantity = document.getElementById("case-total");
  const caseTotal = caseQuantity.value;
  const newCaseTotal = parseInt(caseTotal) + 1;
  caseQuantity.value = newCaseTotal;

  const previousPrice = document.getElementById("case-price");
  const casePrice = previousPrice.innerText;
  const total = newCaseTotal * 59;
  previousPrice.innerText = total;
  subTotalPrice();
});

document.getElementById("case-minus").addEventListener("click", function() {
  const caseQuantity = document.getElementById("case-total");
  const caseTotal = caseQuantity.value;
  if (caseTotal > 0) {
    const newCaseTotal = parseInt(caseTotal) - 1;
    caseQuantity.value = newCaseTotal;

    const previousPrice = document.getElementById("case-price");
    const casePrice = previousPrice.innerText;
    const total = newCaseTotal * 59;
    previousPrice.innerText = total;
    subTotalPrice();
  }
});

function subTotalPrice() {
  const subTotalText = document.getElementById("sub-total");
  const subTotalValue = subTotalText.innerText;
  const subTotal = parseInt(subTotalValue);
  //   console.log(subTotal);

  const total =
    document.getElementById("phone-number").value * 1219 +
    document.getElementById("case-total").value * 59;
  //   console.log(total);
  subTotalText.innerText = total;

  const totalTax = document.getElementById("tax");
  const taxValue = totalTax.innerText;
  const tax = parseInt(taxValue);
  const taxAmount = total / 10;
  //   console.log(taxAmount);
  totalTax.innerText = taxAmount;

  const totalAmountField = document.getElementById("total");
  const totalAmountValue = parseInt(totalAmountField.innerText);
  //   console.log(totalAmountValue);
  const totalAmount = total + taxAmount;
  //   console.log(totalAmount);
  totalAmountField.innerText = totalAmount;
}

document.getElementById("remove-item").addEventListener("click", function() {
  const item = document.getElementById("cart-item");
  item.innerHTML = "";
});
document
  .getElementById("remove-case-item")
  .addEventListener("click", function() {
    const item = document.getElementById("cart-case-item");
    item.innerHTML = "";
  });
