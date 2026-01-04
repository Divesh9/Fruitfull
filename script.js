const promoBtn = document.getElementById("promo-btn");
const offerIcon = document.getElementById("offer-icon");
const offerModal = document.getElementById("offer-modal");
const closeModal = document.querySelector(".close-modal");

if (promoBtn) {
  promoBtn.addEventListener("click", () => {
    if (offerModal) offerModal.style.display = "block";
  });
}

if (offerIcon) {
  offerIcon.addEventListener("click", () => {
    if (offerModal) offerModal.style.display = "block";
  });
}

if (closeModal) {
  closeModal.addEventListener("click", () => {
    if (offerModal) offerModal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (offerModal && e.target === offerModal) {
    offerModal.style.display = "none";
  }
});
