
const timeline = gsap.timeline({ defaults: { duration: 1 }})
timeline
  .from(".header", { y: '-100%', ease: 'bounce' })
  .from(".link", { opacity: 0, stagger: .5 })
  .to(".footer", {  y: 0, ease: 'elastic' })
  .fromTo(".button", { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 })
  .To(".circle", { opacity: 100, path: [{ x: 0, y: 0 }, { x: 200, y: -100 }, { x: 400, y: 0 }, { x: 200, y: 100 }, { x: 0, y: 0 }], curviness: 1.25, autoRotate: true} )
  