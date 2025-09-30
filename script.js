// firstvisitor
const modal = document.getElementById("discountModal")
const closeBtn = document.querySelector(".close")

// Show modal only for first-time visitors
window.onload = function () {
    if (!localStorage.getItem("visited")) {
        modal.style.display = "flex";
        localStorage.setItem("visited", "true");
        // prevent popup on next visit
    }
};

// close modal
closeBtn.onclick = function () {
    modal.style.display = "none"
}

// Claim Discount
function claimDiscount() {
    const email = document.getElementById("emailinput").value;
    if (email) {
        alert("Thanks for signing up! Your 10% discount code is: Bean Boutique.");
        modal.style.display = "none"
    } else {
        alert("Please enter a valid email.")
    }
}

// Close if clicked outside modal
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none"
    }
}
// firstvisitor




