document.addEventListener("DOMContentLoaded", function () {
  const qrModal = document.querySelectorAll(".qr-modal");
  const qrWidgetModal = document.querySelector(".qr-widget__modal");
  const qrWidgetClose = document.querySelector(".qr-widget__modal--close");

  qrModal.forEach((item) => {
    item.addEventListener("click", function () {
      qrWidgetModal.classList.add("open");
    });
  });
  qrWidgetClose.addEventListener("click", function () {
    qrWidgetModal.classList.remove("open");
  });

  document.addEventListener("click", function (event) {
    if (
      !qrWidgetModal.contains(event.target) &&
      !event.target.closest(".qr-modal")
    ) {
      qrWidgetModal.classList.remove("open");
    }
  });
});

const lenis = new Lenis({
  lerp: 0.05,
});

lenis.on("scroll", (e) => {
  // console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// GSAP
gsap.registerPlugin(ScrollTrigger);
// const smoother = ScrollSmoother.create({
//   wrapper: "#smooth-wrapper",
//   content: "#smooth-content",
//   smooth: 2,
//   effects: true,
//   smoothTouch: 1,
//   normalizeScroll: true,
//   preventDefault: true,
// });

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "bottom center",
    end: "bottom center",
    scrub: 2,
    invalidateOnRefresh: !0,
  },
});
tl.to(".hero", { opacity: 0, y: "-20vh" });

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".why",
    start: "top bottom",
    end: "center bottom",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl2.set(".why", { opacity: 0, y: 0 });
tl2.to(".why", {
  opacity: 1,
  zIndex: 15,
  position: "relative",
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".why",
    start: "center top",
    end: "bottom top",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl3.to(".why", { opacity: 0, y: "-10vh" });

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".expert",
    start: "top bottom",
    end: "center top",
    scrub: 1,
    invalidateOnRefresh: !0,
  },
});
tl4.set([".expert", ".expert__more__item"], { opacity: 0, y: "5vh" });
tl4.to(".expert", { opacity: 1, y: 0 }),
  tl4.to(
    ".expert__more__item",
    { opacity: 1, y: 0, stagger: 0.4, delay: 1 },
    "<"
  );

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".expert",
    start: "bottom center",
    end: "bottom top",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl5.to(".expert", { opacity: 0, y: "-15vh" });

let tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".coowner",
    start: "top bottom",
    end: "center top",
    scrub: 2,
    invalidateOnRefresh: !0,
  },
});
tl6.set(
  [
    ".coowner__title",
    ".coowner__subtitle--1",
    ".coowner__subtitle--2",
    ".coowner--disclaimer",
    ".coowner__second-container",
  ],
  { opacity: 0, y: 30 },
  "<"
),
  tl6.set(".coowner__item", { y: "20vh", opacity: 0 });

tl6.to(".coowner__title", { opacity: 1, y: 0, duration: 1 }),
  tl6.to(".coowner__subtitle--1", { opacity: 1, y: 0, duration: 1 }),
  tl6.to(".coowner__item", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.8,
    duration: 3,
  }),
  tl6.to(".coowner--disclaimer", { opacity: 0.4, y: 0, duration: 1 }),
  tl6.to(".coowner__subtitle--2", { opacity: 1, y: 0, duration: 1 }),
  tl6.to(".coowner__second-container", { opacity: 1, y: 0, duration: 1 }, "<");

let tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".coowner",
    start: "bottom-=15% top",
    end: "top bottom+=10%",
    scrub: 2,
    invalidateOnRefresh: !0,
  },
});
tl7.to(".coowner", { opacity: 0 });

let tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".comfort",
    start: "top bottom",
    end: "center bottom",
    scrub: 1,
    invalidateOnRefresh: !0,
  },
});
tl8.set(
  [
    ".comfort__video",
    ".comfort__info__text--title",
    ".comfort__info__text--descr",
  ],
  { opacity: 0, y: "5vh" }
),
  tl8.set(".comfort__info--btn", { opacity: 0, y: "5vh" });

tl8.to(".comfort__info__text--title", { opacity: 1, y: 0, duration: 0.2 }),
  tl8.to(".comfort__video", { opacity: 1, y: 0, duration: 0.2 }),
  tl8.to(".comfort__info__text--descr", {
    opacity: 1,
    y: 0,
    duration: 0.2,
    delay: 0.2,
  }),
  tl8.to(".comfort__info--btn", {
    opacity: 1,
    y: 0,
    duration: 0.2,
    delay: 0.2,
  });

let tl9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".comfort",
    start: "bottom center",
    end: "bottom top",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl9.to(".comfort", { opacity: 1, y: 0 });

// RUNNING STRING PROFITABLE
const runningItemsContainer = document.querySelector(".profitable__running");

const runningItems = runningItemsContainer.innerHTML;
runningItemsContainer.innerHTML += runningItems;

let totalWidth = runningItemsContainer.scrollWidth;

let runningTl = gsap.to(runningItemsContainer, {
  x: -totalWidth,
  duration: 100,
  ease: "none",
  repeat: -1,
});

let tl10 = gsap.timeline({
  scrollTrigger: {
    trigger: ".profitable",
    start: "top bottom",
    end: "center bottom",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl10.set(".profitable", { opacity: 0, y: "5vh" });
tl10.to(".profitable", { opacity: 1, y: 0 });

let tl11 = gsap.timeline({
  scrollTrigger: {
    trigger: ".profitable",
    start: "bottom center",
    end: "bottom top",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl11.to(".profitable", { opacity: 0, y: 0 });

let tl12 = gsap.timeline({
  scrollTrigger: {
    trigger: ".controls",
    start: "top+=20% bottom",
    end: "center+=20% center",
    scrub: !0,
  },
});
tl12.set(".controls__background", { opacity: 0 }),
  tl12.set(".controls__title", { opacity: 0, y: 20 }),
  tl12.set(".controls__item", { opacity: 0, y: 150 });

tl12.to(".controls__title", { opacity: 1, y: 0, duration: 0.4 }),
  tl12.to(".controls__background", { opacity: 0.7 }, "<"),
  tl12.to(".controls__subtitle", { opacity: 1, y: 0, duration: 0.4 }, "<"),
  tl12.to(".controls__item", { opacity: 1, y: 0, stagger: 0.2 }, "<");

let tl13 = gsap.timeline({
  scrollTrigger: {
    trigger: ".controls",
    start: "center+=33% center",
    end: "bottom top",
    scrub: !0,
  },
});

tl13.to(".controls", { opacity: 0 }),
  tl13.to(".controls__item", { top: "-20vh", stagger: 0.05 }, "<");

let tl14 = gsap.timeline({
  scrollTrigger: {
    trigger: ".doing",
    start: "top bottom",
    end: "center center",
    scrub: !0,
  },
});
tl14.set(".doing__title", { y: 20, opacity: 0 }),
  tl14.set(".doing__item", { y: 100, opacity: 0 });

tl14.to(".doing__title", { opacity: 1, y: 0, duration: 0.4 }),
  tl14.to(".doing__item", { opacity: 1, y: 0, duration: 0.4 }, "<");

let tl15 = gsap.timeline({
  scrollTrigger: {
    trigger: ".doing",
    start: "center+=20% center",
    end: "+=700px",
    scrub: !0,
  },
});
tl15.to(".doing", { opacity: 0 }),
  tl15.to(".doing__item", { top: "-10vh", stagger: 0.07 }, "<");

let tl16 = gsap.timeline({
  scrollTrigger: {
    trigger: ".reasons",
    start: "top bottom",
    end: "bottom bottom",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl16.set([".reasons__title", ".reasons__item", ".reasons__video"], {
  y: 50,
  opacity: 0,
});
tl16.to(".reasons__title", { y: 0, opacity: 1, duration: 1 }),
  tl16.to(".reasons__item", { y: 0, opacity: 1, stagger: 0.3 }),
  tl16.to(".reasons__video", { y: 0, opacity: 1 }, "<");

let tl17 = gsap.timeline({
  scrollTrigger: {
    trigger: ".reasons",
    start: "center top",
    end: "bottom top",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl17.to(".reasons__item", { opacity: 0, y: -50, stagger: 0.2 }),
  tl17.to(".reasons__video", { opacity: 0, y: -50 }, "<");

let tl18 = gsap.timeline({
  scrollTrigger: {
    trigger: ".profit__title",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 2,
    invalidateOnRefresh: !0,
  },
});
tl18.set(
  [
    ".profit__container",
    ".profit__title",
    ".profit__subtitle",
    ".profit__designations",
    ".profit__graph--span",
    ".profit__graph--text",
    ".profit__caption",
    ".profit__caption--hint",
    ".profit__video",
  ],
  { y: 50, opacity: 0 }
),
  tl18.set([".profit__graph--estimate", ".profit__graph--potential"], {
    height: 0,
    opacity: 0,
  });

tl18.to(".profit--container", {
  y: 0,
  opacity: 1,
  duration: 0.1,
}),
  tl18.to(".profit__title", { y: 0, opacity: 1, duration: 0.1 }, "<"),
  tl18.to(".profit__subtitle", { y: 0, opacity: 1, duration: 0.1 }, "<50%"),
  tl18.to(".profit__designations", { y: 0, opacity: 1, duration: 0.1 }, "<50%");

let tl19 = gsap.timeline({
  scrollTrigger: {
    trigger: ".profit",
    start: "top-=20% center",
    end: "center bottom-=10%",
    scrub: 5,
    invalidateOnRefresh: !0,
  },
});
tl19.to(".profit__graph--potential--id1", {
  height: "100%",
  opacity: 1,
  duration: 3,
}),
  tl19.to(
    ".profit__graph--estimate--id1",
    {
      height: "100%",
      opacity: 1,
      duration: 3,
    },
    "<"
  ),
  tl19.to(
    ".profit__graph--potential--id2",
    {
      height: "100%",
      opacity: 1,
      duration: 3,
    },
    "<75%"
  ),
  tl19.to(
    ".profit__graph--estimate--id2",
    {
      height: "100%",
      opacity: 1,
      duration: 3,
    },
    "<"
  ),
  tl19.to(
    ".profit__graph--potential--id3",
    {
      height: "100%",
      opacity: 1,
      duration: 3,
    },
    "<75%"
  ),
  tl19.to(
    ".profit__graph--estimate--id3",
    {
      height: "100%",
      opacity: 1,
      duration: 3,
    },
    "<"
  ),
  tl19.to(".profit__graph--span", { y: 0, opacity: 1, stagger: 0.5 }),
  tl19.to(".profit__graph--text", { y: 0, opacity: 1, stagger: 0.5 }, "<0.3"),
  tl19.to(".profit__caption", { y: 0, opacity: 1, stagger: 0.5 }, "<"),
  tl19.to(".profit__caption--hint", { y: 0, opacity: 0.3 }),
  tl19.to(".profit__video", { y: 0, opacity: 1 }, "<");

let tl20 = gsap.timeline({
  scrollTrigger: {
    trigger: ".profit--container",
    start: "bottom-=25% top",
    end: "bottom top-=20%",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl20.to(".profit--container", {
  opacity: 0,
  y: -50,
  stagger: 0.3,
  duration: 1,
  delay: 0.5,
});

let tl21 = gsap.timeline({
  scrollTrigger: {
    trigger: ".conditions",
    start: "top bottom-=10%",
    end: "bottom bottom",
    scrub: 2,
    invalidateOnRefresh: !0,
  },
});
tl21.set([".conditions__title", ".conditions--wraper", ".conditions__item"], {
  y: 100,
  opacity: 0,
});

tl21.to(".conditions__title", { y: 0, opacity: 1 }),
  tl21.to(".conditions--wraper", { y: 0, opacity: 1 }),
  tl21.to(".conditions__item", {
    y: 0,
    opacity: 1,
    stagger: 0.4,
    ease: "expo",
  });

let tl22 = gsap.timeline({
  scrollTrigger: {
    trigger: ".conditions",
    start: "top center",
    end: "bottom top",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl22.to(".conditions", { y: "-10vh", stagger: 0.3, opacity: 0, delay: 0.5 });

let tl23 = gsap.timeline({
  scrollTrigger: {
    trigger: ".guide",
    start: "top bottom-=10%",
    end: "bottom bottom",
    scrub: 2,
    invalidateOnRefresh: !0,
  },
});
tl23.set(
  [".guide__title", ".guide swiper__wrapper", ".guide__button--wrapper"],
  { y: 50, opacity: 0 }
),
  tl23.set(".guide__navigation--prev", { x: "-100%", opacity: 0 }),
  tl23.set(".guide__navigation--next", { x: "100%", opacity: 0 });

tl23.to(".guide__title", { y: 0, opacity: 1 }),
  tl23.to(".guide swiper__wrapper", { y: 0, opacity: 1, ease: "expo" }),
  tl23.to([".guide__navigation--prev", ".guide__navigation--next"], {
    x: 0,
    opacity: 1,
  }),
  tl23.to(".guide__button--wrapper", { y: 0, opacity: 1 });

let tl24 = gsap.timeline({
  scrollTrigger: {
    trigger: ".guide",
    start: "top top+=40%",
    end: "bottom top",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl24.to(".guide", { y: "-10vh", opacity: 0, delay: 0.5 });

let tl25 = gsap.timeline({
  scrollTrigger: {
    trigger: ".articles",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 2,
    invalidateOnRefresh: !0,
  },
});
tl25.set([".articles__title", ".articles__card--wrapper"], {
  y: 50,
  opacity: 0,
});

tl25.to(".articles__title", { y: 0, opacity: 1, duration: 1, delay: 1.5 }),
  tl25.to(
    ".articles__card--wrapper",
    { y: 0, opacity: 1, duration: 1, delay: 0.7, stagger: 0.5 },
    "<"
  );

let tl26 = gsap.timeline({
  scrollTrigger: {
    trigger: ".articles",
    start: "center-=40% top",
    end: "bottom top",
    scrub: !0,
    invalidateOnRefresh: !0,
  },
});
tl26.to(".articles__card--wrapper", {
  opacity: 0,
  y: -50,
  stagger: 0.3,
  duration: 0.3,
  delay: 0.5,
});

let tl27 = gsap.timeline({
  scrollTrigger: {
    trigger: ".faq",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 2,
    invalidateOnRefresh: !0,
  },
});
tl27.set([".faq__title", ".accordion__item"], { y: 50, opacity: 0 });

tl27.to(".faq__title", { y: 0, opacity: 1, duration: 1, delay: 1.5 }),
  tl27.to(
    ".accordion__item",
    { y: 0, opacity: 1, duration: 1, delay: 0.7, stagger: 0.5 },
    "<"
  );

let tl28 = gsap.timeline({
  scrollTrigger: {
    trigger: ".disclaimer",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 2,
    invalidateOnRefresh: !0,
  },
});
tl28.set(".disclaimer", { y: 50, opacity: 0 });

tl28.to(".disclaimer", { y: 0, opacity: 1, duration: 1, delay: 1.5 });

// Smooth Scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const header = document.querySelector("header");
  const navbar = document.querySelector(".nav");
  let isHeaderHidden = false;

  function handleScroll(scrollTop) {
    if (scrollTop > lastScrollTop) {
      // Scroll down
      if (!isHeaderHidden) {
        isHeaderHidden = true;
        header.classList.add("header--hide");
        header.classList.remove("header--show");
        navbar.classList.remove("header--scroll-up");
      }
    } else {
      // Scroll up
      if (isHeaderHidden || scrollTop < 60) {
        isHeaderHidden = false;
        header.classList.remove("header--hide");
        header.classList.add("header--show");
        if (scrollTop < 60) {
          navbar.classList.remove("header--scroll-up");
        } else {
          navbar.classList.add("header--scroll-up");
        }
      }
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  function scrollToAnchor(anchor) {
    const targetElement = document.querySelector(anchor);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  }

  function handleAnchorClick(event) {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const clickedAnchor = event.target.getAttribute("href");
      scrollToAnchor(clickedAnchor);
      setTimeout(function () {
        handleScroll(window.pageYOffset || document.documentElement.scrollTop);
      }, 100); // Добавлен вызов handleScroll после перехода по якорной ссылке
    }
  }

  window.addEventListener("scroll", function () {
    handleScroll(window.pageYOffset || document.documentElement.scrollTop);
  });

  document.addEventListener("click", handleAnchorClick);
});

document.addEventListener("DOMContentLoaded", function () {
  var video1 = document.querySelector(".hero__background video:nth-of-type(1)");
  var video2 = document.querySelector(".hero__background video:nth-of-type(2)");

  video2.style.display = "none";

  function playVideo(video) {
    video.style.display = "block";
    video
      .play()
      .then(function () {})
      .catch(function (error) {
        console.log(error);
      });
  }

  function onVideoEnded(e) {
    var currentVideo = e.target;

    if (currentVideo === video1) {
      playVideo(video2);
    } else {
      playVideo(video1);
    }
  }

  video1.addEventListener("ended", onVideoEnded);
  video2.addEventListener("ended", onVideoEnded);

  playVideo(video1);
});

const container = document.querySelector(".coowner--wrapper");

gsap.to(container, {
  x: -container.offsetWidth,
  duration: 10,
  repeat: -1,
  ease: "linear",
});

//BURGER
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  const linkItem = document.querySelectorAll(".menu__item-link");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active-burger");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1400) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
  linkItem.forEach((item) => {
    item.addEventListener("click", () => {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    });
  });
}
burgerMenu();

//popup video
const videoAttributes = {
  button1: {
    src: "https://player.cdn.sber.cloud/aloha/players/basic_player_sbercloud1.html?account=kunuqupo80&source=//sber-hls.cdnvideo.ru/sber-vod/_definst_/mp4:common/video/9de0e6ff2.mp4/playlist.m3u8&poster=https://sber.cdnvideo.ru/common/video/5_glavnykh_voprosov.png",
    loading: "eager",
    sandbox:
      "allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation",
    importance: "high",
    allow:
      "payment 'none'; fullscreen 'none'; geolocation 'none'; camera 'none'; microphone 'none'",
    referrerpolicy: "no-referrer-when-downgrade",
    frameborder: "no",
    scrolling: "no",
  },
  button2: {
    src: "https://player.cdn.sber.cloud/aloha/players/basic_player_sbercloud1.html?account=kunuqupo80&source=//sber-hls.cdnvideo.ru/sber-vod/_definst_/mp4:common/video/66f8b7651.mp4/playlist.m3u8&poster=https://sber.cdnvideo.ru/common/video/zpif_korotko_i_ponyatno_o_glavnom.png",
    loading: "eager",
    sandbox:
      "allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation",
    allow:
      "payment 'none'; fullscreen 'none'; geolocation 'none'; camera 'none'; microphone 'none'",
    importance: "high",
    referrerpolicy: "no-referrer-when-downgrade",
    frameborder: "no",
    scrolling: "no",
  },
  button3: {
    src: "https://player.cdn.sber.cloud/aloha/players/basic_player_sbercloud1.html?account=kunuqupo80&source=//sber-hls.cdnvideo.ru/sber-vod/_definst_/mp4:common/video/3cecb74c1.mp4/playlist.m3u8&poster=https://sber.cdnvideo.ru/common/video/vybirayem_mezhdu_kvartiroy_i_skladom.png",
    loading: "eager",
    sandbox:
      "allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation",
    allow:
      "payment 'none'; fullscreen 'none'; geolocation 'none'; camera 'none'; microphone 'none'",
    importance: "high",
    referrerpolicy: "no-referrer-when-downgrade",
    frameborder: "no",
    scrolling: "no",
  },
  button4: {
    src: "https://player.cdn.sber.cloud/aloha/players/basic_player_sbercloud1.html?account=kunuqupo80&source=//sber-hls.cdnvideo.ru/sber-vod/_definst_/mp4:common/video/3b33b7b41.mp4/playlist.m3u8&poster=https://sber.cdnvideo.ru/common/video/dokhod_prinosit_ne_lyubaya_nedvizhimost.png",
    loading: "eager",
    sandbox:
      "allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation",
    allow:
      "payment 'none'; fullscreen 'none'; geolocation 'none'; camera 'none'; microphone 'none'",
    importance: "high",
    referrerpolicy: "no-referrer-when-downgrade",
    frameborder: "no",
    scrolling: "no",
  },
  button5: {
    src: "https://player.cdn.sber.cloud/aloha/players/basic_player_sbercloud1.html?account=kunuqupo80&source=//sber-hls.cdnvideo.ru/sber-vod/_definst_/mp4:common/video/66f8b7651.mp4/playlist.m3u8&poster=https://sber.cdnvideo.ru/common/video/zpif_korotko_i_ponyatno_o_glavnom.png",
    loading: "eager",
    sandbox:
      "allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation",
    allow:
      "payment 'none'; fullscreen 'none'; geolocation 'none'; camera 'none'; microphone 'none'",
    importance: "high",
    referrerpolicy: "no-referrer-when-downgrade",
    frameborder: "no",
    scrolling: "no",
  },
  button6: {
    src: "https://player.cdn.sber.cloud/aloha/players/basic_player_sbercloud1.html?account=kunuqupo80&source=//sber-hls.cdnvideo.ru/sber-vod/_definst_/mp4:common/video/videosfn38ae234a.mp4/playlist.m3u8&poster=https://sber.cdnvideo.ru/common/video/sovremennyye_skladskiye_kompleksy.png",
    loading: "eager",
    sandbox:
      "allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation",
    allow:
      "payment 'none'; fullscreen 'none'; geolocation 'none'; camera 'none'; microphone 'none'",
    importance: "high",
    referrerpolicy: "no-referrer-when-downgrade",
    frameborder: "no",
    scrolling: "no",
  },
  button7: {
    src: "https://player.cdn.sber.cloud/aloha/players/basic_player_sbercloud1.html?account=kunuqupo80&source=//sber-hls.cdnvideo.ru/sber-vod/_definst_/mp4:common/video/3cecb74c1.mp4/playlist.m3u8&poster=https://sber.cdnvideo.ru/common/video/vybirayem_mezhdu_kvartiroy_i_skladom.png",
    loading: "eager",
    sandbox:
      "allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation",
    allow:
      "payment 'none'; fullscreen 'none'; geolocation 'none'; camera 'none'; microphone 'none'",
    importance: "high",
    referrerpolicy: "no-referrer-when-downgrade",
    frameborder: "no",
    scrolling: "no",
  },
  button8: {
    src: "https://player.cdn.sber.cloud/aloha/players/basic_player_sbercloud1.html?account=kunuqupo80&source=//sber-hls.cdnvideo.ru/sber-vod/_definst_/mp4:common/video/3b33b7b41.mp4/playlist.m3u8&poster=https://sber.cdnvideo.ru/common/video/dokhod_prinosit_ne_lyubaya_nedvizhimost.png",
    loading: "eager",
    sandbox:
      "allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation",
    allow:
      "payment 'none'; fullscreen 'none'; geolocation 'none'; camera 'none'; microphone 'none'",
    importance: "high",
    referrerpolicy: "no-referrer-when-downgrade",
    frameborder: "no",
    scrolling: "no",
  },
};

// Находим все кнопки с классом "video-button"
const videoButtons = document.querySelectorAll(".video-button");
const popupVideoContainer = document.querySelector(".popup__video__video");
const popup = document.querySelector(".popup__video");

// Перебираем кнопки и назначаем обработчик события на каждую
videoButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonClass = this.classList[1]; // предполагаем, что второй класс кнопки связан с iframe

    // Проверяем, есть ли атрибуты для данного класса
    if (videoAttributes.hasOwnProperty(buttonClass)) {
      const iframeAttributes = videoAttributes[buttonClass];

      const iframe = document.createElement("iframe");
      // Устанавливаем атрибуты iframe из объекта videoAttributes для соответствующей кнопки
      Object.keys(iframeAttributes).forEach((key) => {
        iframe.setAttribute(key, iframeAttributes[key]);
      });
      // Устанавливаем src атрибут
      iframe.src = iframeAttributes.src;
      iframe.classList.add("pop-up-video__video");

      // Очищаем содержимое "popup__video__video" перед вставкой нового iframe
      popupVideoContainer.innerHTML = "";

      // Вставляем iframe в "popup__video__video"
      popupVideoContainer.appendChild(iframe);

      // Отображаем блок с видео
      popup.style.display = "flex";
    } else {
      console.error("Attributes not found for class", buttonClass);
    }
  });
});
const closePopupButton = document.querySelector(".popup__video--close");

closePopupButton.addEventListener("click", function () {
  // Удаляем iframe из контейнера
  popupVideoContainer.innerHTML = "";
  // Скрываем блок с видео
  popup.style.display = "none";
});
// slider
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: "auto",
  freeMode: true,
  spaceBetween: 16,
});
const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  direction: "horizontal",
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,
  // loop: true,
  loopedSlides: 4,
  effect: "creative",
  creativeEffect: {
    limitProgress: 2,
    perspective: true,
    prev: {
      translate: [-420, 35, 8],
      rotate: [0, 0, -8],
      scale: 0.8,
      opacity: 0.5,
    },
    next: {
      translate: [420, 35, -8],
      rotate: [0, 0, 8],
      opacity: 0.5,
      scale: 0.8,
    },
  },
  navigation: {
    nextEl: ".guide__navigation--next",
    prevEl: ".guide__navigation--prev",
  },
  breakpoints: {
    360: {
      spaceBetween: 20,
      creativeEffect: {
        prev: {
          scale: 1,
          opacity: 1,
          translate: [-270, 0, 0],
          rotate: [0, 0, 0],
        },
        next: {
          scale: 1,
          opacity: 1,
          translate: [270, 0, 0],
          rotate: [0, 0, 0],
        },
      },
    },
    768: {
      spaceBetween: 20,
      creativeEffect: {
        prev: {
          scale: 1,
          opacity: 1,
          translate: [-520, 0, 0],
          rotate: [0, 0, 0],
        },
        next: {
          scale: 1,
          opacity: 1,
          translate: [520, 0, 0],
          rotate: [0, 0, 0],
        },
      },
    },
    1400: {
      creativeEffect: {
        limitProgress: 2,
        perspective: true,
        prev: {
          translate: [-420, 35, 8],
          rotate: [0, 0, -8],
          scale: 0.8,
          opacity: 0.5,
        },
        next: {
          translate: [420, 35, -8],
          rotate: [0, 0, 8],
          opacity: 0.5,
          scale: 0.8,
        },
      },
    },
  },
});
const swiper3 = new Swiper(".swiper3", {
  // Optional parameters
  direction: "horizontal",
  grabCursor: true,
  slidesPerView: "auto",
  freeMode: true,
  centeredSlides: true,
});

function accordion() {
  const items = document.querySelectorAll(".accordion__item");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("accordion__item-active")) {
        item.classList.remove("accordion__item-active");
      } else {
        item.classList.add("accordion__item-active");
      }
    });

    const content = item.querySelector(".accordion__item-content");
    content.addEventListener("click", (event) => {
      event.stopPropagation(); // Остановить всплытие события, чтобы не закрывался аккордеон при клике на контент
      item.classList.remove("accordion__item-active");
    });
  });
}

accordion();
