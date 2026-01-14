const page1 = document.querySelector(".page1");
const cursor = document.querySelector(".cursor");
const parentdiv = document.querySelector(".parent");

if (page1) {
  page1.addEventListener("mouseenter", () => {
    document.body.classList.add("show-cursor");
  });

  page1.addEventListener("mouseleave", () => {
    document.body.classList.remove("show-cursor");
  });

  page1.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.6,
      ease: "back.out",
    });
  });

  if (parentdiv) {
    parentdiv.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        scale: 2,
        backgroundColor: "#5e5353a6",
      });
    });

    parentdiv.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 1,
      });
    });
  }
}
