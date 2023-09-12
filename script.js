document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        window.open(link.href, "_blank");
      });
    });
  });