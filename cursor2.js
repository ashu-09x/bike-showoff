const page3 = document.querySelector(".page3");
const cursor2 = document.querySelector(".cursor2");

let timeout;

if (page3 && cursor2) {
  page3.addEventListener("mousemove", (e) => {
    cursor2.style.display = "block";

    cursor2.style.transform = `
      translate(${e.clientX}px, ${e.clientY}px)
      translate(-50%, -50%)
    `;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cursor2.style.display = "none";
    }, 800);
  });

  page3.addEventListener("mouseleave", () => {
    cursor2.style.display = "none";
  });
}
