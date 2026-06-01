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

//Page function

function showPage(pageNumber) {

    document.querySelectorAll('.product-page').forEach(page => {
        page.style.display = 'none';
    });

    document.getElementById('page' + pageNumber).style.display = 'block';

    document.querySelectorAll('.pagination .page-item').forEach(item => {
        item.classList.remove('active');
    });

    document.querySelectorAll('.pagination .page-item')[pageNumber - 1]
        .classList.add('active');
}
