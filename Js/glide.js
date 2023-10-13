new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 3,
  gap: 30,
  breakPoint: {
    991: {
      perView: 2,
    },
    768: {
      perView: 1,
    },
  },
}).mount();
