document.addEventListener("DOMContentLoaded", function () {
  const shareButton = document.querySelector(".card__content-share");
  const modal = document.querySelector(".modal");

  // Function to close the modal
  function closeModal() {
    modal.classList.remove("active");
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  }

  // Toggle modal visibility when clicking the share button
  shareButton.addEventListener("click", function () {
    const isOpen = modal.classList.toggle("active");
    if (isOpen) {
      modal.style.display = "flex";
      modal.setAttribute("aria-hidden", "false");
    } else {
      closeModal();
    }
  });

  // Close modal when clicking outside of it
  document.addEventListener("click", function (event) {
    if (modal.classList.contains("active") && !modal.contains(event.target) && !shareButton.contains(event.target)) {
      closeModal();
    }
  });

  // Close modal when pressing the Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
});
