// !function(e){"use strict";function t(){e("#contactForm").removeClass().addClass("shake animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e(this).removeClass()})}function a(t,a){if(t)var n="h4 text-left tada animated text-success";else n="h4 text-left text-danger";e("#msgSubmit").removeClass().addClass(n).text(a)}e("#contactForm").validator().on("submit",function(n){var s,i,o,m,r;n.isDefaultPrevented()?(t(),a(!1,"Did you fill in the form properly?")):(n.preventDefault(),s=e("#name").val(),i=e("#email").val(),o=e("#msg_subject").val(),m=e("#phone_number").val(),r=e("#message").val(),e.ajax({type:"POST",url:"assets/php/form-process.php",data:"name="+s+"&email="+i+"&phone_number="+m+"&msg_subject="+o+"&message="+r,success:function(n){"success"==n?(e("#contactForm")[0].reset(),a(!0,"Message Submitted!")):(t(),a(!1,n))}}))})}(jQuery);




document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("my-form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Get form data
      const formData = new FormData(form);
      const name = formData.get("name");
      const phone = formData.get("phone");
      const email = formData.get("email");
      const message = formData.get("message");
  
      // Construct WhatsApp link with form data
      const whatsappLink = `https://wa.me/6388741540?text=Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${message}`;
  
      // Open WhatsApp link in a new tab/window
      window.open(whatsappLink, "_blank");
    });
  });
  

  
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("my-from");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const date = formData.get("date");

    // Construct WhatsApp link with form data
    const whatsappLink = `https://wa.me/6388741540?text=Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0ADate: ${date}`;

    // Open WhatsApp link in a new tab/window
    window.open(whatsappLink, "_blank");
  });
});
