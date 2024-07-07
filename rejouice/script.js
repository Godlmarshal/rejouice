function scroll(){
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
scroll()

function cursorEffect() {
  var page1Content = document.querySelector(".page1-content");
  var cursor = document.querySelector(".cursor");

  page1Content.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });

  page1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorEffect()

function page2Animation() {
  gsap.from(".elem h1", {
    y: 120,
    opacity:0,
    stagger:  0.4,
    duration: 1,
    scrollTrigger: {
      trigger: ".page2",
      scroller: "main",
      start: "top 47%",
      end: "top 46%",
      scrub: 2,
    },
  });
}
page2Animation()

function page4Animationh1(){
  gsap.from(".page4 h1", {
    y: 120,
    stagger: 0.1,
    opacity: 0,
    duration: 10,
    scrollTrigger: {
      trigger: ".page4",
      scroller: "main",
      start: "top 47%",
      end: "top 46%",
      scrub: 5,
    },
  });
}
page4Animationh1()

function page4Animationh2() {
  gsap.from(".top-content h2", {
    x: 120,
    opacity: 0,
    stagger: 0.1,
    duration: 10,
    scrollTrigger: {
      trigger: ".page4",
      scroller: "main",
      start: "top 47%",
      end: "top 46%",
      scrub: 5,
    },
  });
}
page4Animationh2();

function cursor2 (){
  var page4video = document.querySelector(".video");
  var cursor2 = document.querySelector(".cursor2");

  page4video.addEventListener("mousemove", function (dets) {
    gsap.to(cursor2, {
      x: dets.x,
      y: dets.y,
    });
  });
  page4video.addEventListener("mouseenter", function () {
    gsap.to(cursor2, {
      scale: 1,
      opacity: 1,
    });
  });
  page4video.addEventListener("mouseleave", function () {
    gsap.to(cursor2, {
      scale: 0,
      opacity: 0,
    });
  });
}
cursor2()

function page5Animationh1() {
  gsap.from(".page5 h1", {
    y: 180,
    opacity: 0,
    stagger: 0.2,
    duration: 10,
    scrollTrigger: {
      trigger: ".page5",
      scroller: "main",
      start: "top 47%",
      end: "top 46%",
      scrub: 2,
    },
  });
}
page5Animationh1();

function page5Animationh2() {
  gsap.from(".top-content2 h2", {
    x: 180,
    stagger: 0.2,
    duration: 10,
    scrollTrigger: {
      trigger: ".page5",
      scroller: "main",
      start: "top 47%",
      end: "top 46%",
      scrub: 2,
    },
  });
}
page5Animationh2();


function loader (){
  var tl = gsap.timeline();

  tl.from(".loader h3", {
    x: 100,
    opacity: 0,
    duration: 1.5,
    stagger: 0.1,
  });
  tl.to(".loader h3", {
    opacity: 0,
    x: -40,
    stagger: 0.1,
    duration: 1,
  });
  tl.to(".loader", {
    opacity: 0,
  });
  tl.from(".page1-content h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5,
    delay: -0.5
  });
  tl.to(".loader", {
    display: "none",
  });
  
}
loader()

