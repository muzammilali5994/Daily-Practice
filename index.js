gsap.registerPlugin(MotionPathPlugin);

gsap.to(".ball", {
  duration: 3,
  motionPath: {
    path: "#arcPath",
    align: "#arcPath",
    autoRotate: true   // rotation bhi natural hogi
  },
  ease: "power1.inOut"
});