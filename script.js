emailjs.init("ARCbpBWinf_2Mli-U");
    
    window.onload = function () {
      const form = document.getElementById("contact-form");

      form.addEventListener("submit", function (e) {
        e.preventDefault(); // stop the form from reloading the page

        emailjs.sendForm("service_du13sqa", "template_mqs568s", form)
          .then(function () {
            alert("Message sent successfully!");
            form.reset(); // clear the form
          }, function (error) {
            alert("Failed to send message. Error: " + JSON.stringify(error));
          });
      });
    };