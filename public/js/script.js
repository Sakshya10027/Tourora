(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (form.id === "bookingForm") {
          event.preventDefault();
          handleBookingSubmit(form);
          return;
        }

        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false,
    );
  });

  // Booking Modal Logic
  const bookingModal = document.getElementById("bookingModal");
  if (bookingModal) {
    bookingModal.addEventListener("show.bs.modal", (event) => {
      const button = event.relatedTarget;
      const title = button.getAttribute("data-title");
      const id = button.getAttribute("data-id");

      const modalTitle = bookingModal.querySelector("#modalListingTitle");
      const modalIdInput = bookingModal.querySelector("#bookingListingId");

      modalTitle.textContent = title;
      modalIdInput.value = id;

      // Reset form
      const form = document.getElementById("bookingForm");
      form.reset();
      form.classList.remove("was-validated");
    });
  }

  function handleBookingSubmit(form) {
    const checkIn = document.getElementById("checkInDate");
    const checkOut = document.getElementById("checkOutDate");
    const checkOutFeedback = document.getElementById("checkOutFeedback");
    const listingTitle = document.getElementById("modalListingTitle").textContent;

    let isValid = form.checkValidity();

    if (checkIn.value && checkOut.value) {
      const d1 = new Date(checkIn.value);
      const d2 = new Date(checkOut.value);

      if (d2 <= d1) {
        isValid = false;
        checkOut.setCustomValidity("Check-out must be after check-in");
        checkOutFeedback.textContent = "Check-out date must be after check-in date.";
      } else {
        checkOut.setCustomValidity("");
      }
    }

    if (!isValid) {
      form.classList.add("was-validated");
      return;
    }

    // Success
    const modal = bootstrap.Modal.getInstance(bookingModal);
    modal.hide();

    alert(`🎉 Booking Confirmed! Your booking for ${listingTitle} has been successfully placed.`);
    window.location.href = "/listings";
  }

  window.handleBookingClick = function(button) {
    const isLoggedIn = button.getAttribute("data-logged-in") === "true";
    const listingId = button.getAttribute("data-id");

    if (!isLoggedIn) {
      // Pass the current listing URL as a query parameter
      const currentUrl = encodeURIComponent(window.location.pathname);
      window.location.href = `/login?redirect=${currentUrl}`;
    }
  };
})();
