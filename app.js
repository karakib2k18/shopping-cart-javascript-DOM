function updateProductNumber(productName, price , isplus) {
  const productPics = document.getElementById(productName + "-pics");
  let productValue = parseInt(productPics.value); //parseInt na dile apnader kaj korse but amar kortese na keno?
  if (isplus == true) {
    productValue = parseInt(productValue + 1);
  } else if (productValue > 0) {
    productValue = parseInt(productValue - 1);
  }
  productPics.value = productValue;
  //update total
  const thePriceID = document.getElementById(productName + "-price");
  thePriceID.innerText = productValue * price;

  //calculate total
  totalCalculation();
}

function calculationValue(productName) {
  const productPics = document.getElementById(productName + "-pics");
  const productInt = parseInt(productPics.value);
  return productInt;
}
function totalCalculation() {
  const subtotalOfPhone = calculationValue("phone") * 1219;
  const subtotalOfCase = calculationValue("case") * 59;

  const subTotalOfProduct = subtotalOfPhone + subtotalOfCase;
  const totalTax = subTotalOfProduct / 10;
  const totalCheckOutPrice = subTotalOfProduct + totalTax;

  //  // update on the html price value
  document.getElementById("subtotal").innerText = subTotalOfProduct;
  document.getElementById("tax").innerText = totalTax;
  document.getElementById("totalPrice").innerText = totalCheckOutPrice;

}

document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, true);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, false);
});

document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 59, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 59, false);
});
