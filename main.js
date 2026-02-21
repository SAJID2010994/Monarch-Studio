let i=0
document.querySelectorAll('.opts a').forEach(e=>{
  gsap.from(`#${e.id}`,{
    y:-500,
    duration:1.5,
    delay:i*0.2
  })
  i++
})
gsap.from("#header",{
  x:-1000,
  duration:2
})
gsap.from("section p",{
  y:200,
  opacity:0,
  duration:2
})
gsap.from("#btn2",{
  opacity:0,
  duration:0.5,
  delay:1.5
})
gsap.from("#btn1",{
  y:100,
  opacity:0,
  duration:1.6,
  delay:0.4
})
gsap.from("#monarch",{
  opacity:0,
  duration:2
})
gsap.from('#studio',{
  y:100,
  opacity:0,
  duaration:2,
  delay:0.5
})

