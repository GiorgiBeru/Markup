//* The below code is strictly to change the background color of the checkout page, this is done according to design spec*/
if (document.URL.includes("checkout.html")) {
    document.body.style.backgroundColor = "#F1F1F1";
    document.querySelector(".flex-container").classList.add("body-flex")
}

//* The below code is for the payment methods */
const eMoney = document.querySelector(".e-money"),
    eMoneySelected = document.querySelector(".e-money .inner-circle"),
    eMoneyDetails = document.querySelector(".e-money-details"),
    cash = document.querySelector(".cash"),
    cashSelected = document.querySelector(".cash .inner-circle"),
    cashDetails = document.querySelector(".cash-details");

document.addEventListener("DOMContentLoaded", () => {
    eMoneySelected.style.backgroundColor = "#D87D4A";
    eMoney.style.border = "1px solid #D87D4A"
    eMoneyDetails.style.display = "flex";
});

cash.addEventListener("click", () => {
    cash.classList.add("selected")
    eMoney.classList.remove("selected")
    eMoneySelected.style.backgroundColor = "transparent";
    eMoneyDetails.style.display = "none";
    cashSelected.style.backgroundColor = "#D87D4A"
    cashDetails.style.display = "flex"
    cash.style.border = "1px solid #D87D4A"
    eMoney.style.border = "1px solid #cfcfcf"
});

eMoney.addEventListener("click", () => {
    cash.classList.remove("selected")
    eMoney.classList.add("selected")
    eMoneySelected.style.backgroundColor = "#D87D4A";
    eMoneyDetails.style.display = "flex";
    cashSelected.style.backgroundColor = "transparent"
    cashDetails.style.display = "none"
    cash.style.border = "1px solid #cfcfcf"
    eMoney.style.border = "1px solid #D87D4A"
});
