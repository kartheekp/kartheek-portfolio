// Simple scroll reveal for .fade-in elements
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// Fake contact form handler (for now)
function handleContactSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("form-status");
  status.textContent = "Thanks! This demo form doesn't send yet, but your message would go here.";
}
