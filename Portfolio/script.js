gsap.registerPlugin(ScrollTrigger)
gsap.from(".logo",{
  duration: 2,
  scrollTrigger: {
    trigger: ".logo", 
    toggleActions: "play none none none" 
  }
})
gsap.from(".fiz",{
    opacity: 0,
    duration: 1,
    x: 300,
    scrollTrigger: {
        trigger: ".fiz", 
        toggleActions: "play none none none" 
      }
})
gsap.from(".jmeno",{
    opacity: 0,
    duration: 1,
    x: -300,
    scrollTrigger: {
        trigger: ".jmeno", 
        toggleActions: "play none none none" 
      }
})
gsap.from(".menu",{
    opacity: 0,
    duration: 2,
})
gsap.from(".ifo",{
    opacity: 0,
    duration: 3.5,
    scrollTrigger: {
        trigger: ".info", 
        start: "top 80%",
        toggleActions: "play none none none" 
      }
})
gsap.from(".tex1",{
    opacity: 0,
    duration: 1.5,
    x:100,
    scrollTrigger: {
        trigger: ".text1", 
        start: "top 80%",
        toggleActions: "play none none none" 
      }
})
gsap.from(".txt2",{
    opacity: 0,
    duration: 1.5,
    x:0,
    scrollTrigger: {
        trigger: ".text2", 
        toggleActions: "play none none none" 
      }
})