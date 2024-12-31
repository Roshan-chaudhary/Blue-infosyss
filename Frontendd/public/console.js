// Enquiry Model
var dialCode = "";
var intLinput = $("#enqPhone");
var entPhoneNo = "";
intLinput
  .intlTelInput({
    initialCountry: "auto",
    separateDialCode: true,
    geoIpLookup: function (success, failure) {
      fetch("https://ipapi.co/json")
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          success(data.country_code);
          dialCode = data.country_calling_code;
        })
        .catch(function () {
          failure();
        });
    },
    hiddenInput: "phone",
  })
  .on("countrychange", function (e, countryData) {
    dialCode = intLinput.intlTelInput("getSelectedCountryData").dialCode;
    var phNo = intLinput.val();
    if (phNo.startsWith("+")) {
      entPhoneNo = phNo.replace(dialCode, `${dialCode}-`);
    } else {
      entPhoneNo = `+${dialCode}-${phNo}`;
    }
  });
intLinput.on("keyup", (e) => {
  var phNo = intLinput.val();
  if (phNo.startsWith("+")) {
    entPhoneNo = phNo.replace(dialCode, `${dialCode}-`);
  } else {
    entPhoneNo = `+${dialCode}-${phNo}`;
  }
});
// Enquiry Model
var sintLinput = $("#seoPhone");
sintLinput
  .intlTelInput({
    initialCountry: "auto",
    separateDialCode: true,
    geoIpLookup: function (success, failure) {
      fetch("https://ipapi.co/json")
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          success(data.country_code);
          dialCode = data.country_calling_code;
        })
        .catch(function () {
          failure();
        });
    },
    hiddenInput: "phone",
  })
  .on("countrychange", function (e, countryData) {
    dialCode = sintLinput.intlTelInput("getSelectedCountryData").dialCode;
    var phNo = sintLinput.val();
    if (phNo.startsWith("+")) {
      phNo = phNo.replace(dialCode, `${dialCode}-`);
      $("input[name=phone]").val(`${phNo}`);
    } else {
      $("input[name=phone]").val(`+${dialCode}-${phNo}`);
    }
  });
sintLinput.on("keyup", (e) => {
  var phNo = sintLinput.val();
  if (phNo.startsWith("+")) {
    phNo = phNo.replace(dialCode, `${dialCode}-`);
    $("input[name=phone]").val(`${phNo}`);
  } else {
    $("input[name=phone]").val(`+${dialCode}-${phNo}`);
  }
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};
// Get the header
var header = document.getElementById("myHeader");
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
function emailHandle(form) {
  let formData = new FormData(form);
  fetch("/api/email-subscribe/", {
    method: "POST",
    body: formData,
  })
    .then((r) => r.json())
    .then((r) => {
      form.reset();
      Swal.fire(r);
    });
}
var a = Math.floor(Math.random() * 10 + 1),
  b = Math.floor(Math.random() * 10 + 1);
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("button[data-bs-toggle='modal']").forEach((e) => {
    $(e).on("click", () => {
      let sid = $(e).attr("data-id");
      if (sid) {
        $("select[name=service]").val(sid);
        $("select[name=service]").attr("disabled", "");
      } else {
        $("select[name=service]").removeAttr("disabled");
      }
      let sname = $(e).attr("data-name");
      if (sname) {
        let pv = $("input[name=package]").val();
        pv = pv.split("-")[0];
        $("input[name=package]").val(pv + " - " + sname);
      }
    });
  });
  $("#enquiryModal").on("shown.bs.modal", () => {
    a = Math.floor(Math.random() * 10 + 1);
    b = Math.floor(Math.random() * 10 + 1);
    $("#chll").attr("placeholder", `${a} + ${b} = `);
    console.log($(this));
    $("#chlld").removeClass("d-none");
  });
  $("#enqForm").on("submit", () => {
    $("select").removeAttr("disabled");
    event.preventDefault();
    let form = document.getElementById("enqForm");
    if (form.checkValidity()) {
      let fd = new FormData(form);
      fd.append("service_title", "");
      fd.set("phone", entPhoneNo);
      fetch("/api/enquiry/", { method: "POST", body: fd })
        .then((r) => r.json())
        .then((r) => {
          form.reset();
          Swal.fire(r);
          $("#enquiryModal").modal("hide");
          //    $('input[name=phone]').removeAttr("type");
          //  $('input[name=phone]').addAttribute("type", "hidden");
        });
    }
    /*
     */
  });
});
function validateChallenge(event) {
  var value = $("#chll").val();
  var el = document.getElementById("chll");
  if (+value == a + b) {
    el.setCustomValidity("");
    document.getElementById("enqForm").checkValidity();
    return true;
  } else {
    el.setCustomValidity("Value Is Incorrect!");
    return false;
  }
}

function phoneNlHandle(form) {
  let formData = new FormData(form);
  fetch("/api/phone-subscribe/", { method: "POST", body: formData })
    .then((r) => r.json())
    .then((r) => {
      form.reset();
      Swal.fire(r);
    });
}
var counted = 0;
$(window).scroll(function () {
  var oTop = $(".numbersCounter").offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $(".count").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 3000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
    counted = 1;
  }
});

function handlePricingContact(target) {
  let formData = new FormData(target);
  fetch("/api/pricing-contact/", {
    method: "POST",
    body: formData,
  })
    .then((r) => r.json())
    .then((r) => {
      target.reset();
      Swal.fire(r);
      $("#seoSubscription").modal("hide");
    });
}
document.addEventListener("DOMContentLoaded", function () {
  let lazyloadImages = document.querySelectorAll("img.lazy-load");
  let lazyloadThrottleTimeout;
  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }
    lazyloadThrottleTimeout = setTimeout(function () {
      let scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function (img) {
        if (img.offsetTop < window.innerHeight + scrollTop) {
          if (!img.src) {
            console.log("Not Found");
            img.src = img.dataset.src;
            img.classList.remove("lazy");
          }
        }
      });
      if (lazyloadImages.length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  }
  lazyload();
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});
window.onerror = function (msg, url, line, col, error) {
  // Catch the error and do whatever is necessary
  return true; // Prevent the original error message from appearing in the console
};
document.addEventListener("DOMContentLoaded", function () {
  // Select all input and textarea elements
  const elements = document.querySelectorAll("input, textarea");
  elements.forEach(function (element) {
    // Add input event listener to each element
    element.addEventListener("input", function (e) {
      // Replace any non-Latin characters with an empty string
      this.value = this.value.replace(/[^\x00-\x7F]/g, "");
    });
    // Add keydown event listener to each element
    element.addEventListener("keydown", function (e) {
      // Allow only Latin characters
      if (!/^[\x00-\x7F]*$/.test(e.key)) {
        e.preventDefault();
      }
    });
  });
});
