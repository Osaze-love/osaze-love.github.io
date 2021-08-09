let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.gallery',
        start: 'center bottom'
        }
});

tl.from(".gallery-image", { x: 200, opacity: 0, duration: 1.7 })

let yl = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        start: 'center bottom'
        }
});

yl.from(".about_img", { x: 200, opacity: 0, duration: 1.4 })
yl.from(".about_text", {y:300, opacity:0, duration: 1.4}, "-=1.2")


let wl = gsap.timeline({
    scrollTrigger: {
        trigger: '.works',
        
        }
});

wl.from(".work_images", {x:100, opacity: 0, duration: 3})
wl.from(".work3", { opacity:0, duration: 3}, "-=3")

let rl = gsap.timeline({
    scrollTrigger: {
        trigger: '.rates',
        start: 'center bottom'
        }
});

rl.from(".rates_cards", { x: 200, opacity: 0, duration: 1.4 })
rl.from(".rates_text", {y:300, opacity:0, duration: 1.4}, "-=2")

let ml = gsap.timeline({
    scrollTrigger: {
        trigger: '.message',
        start: 'center bottom'
        }
});

ml.from(".message_form", { x: 200, opacity: 0, duration: 1.4 })
ml.from(".message_text", {y:70, opacity:0, duration: 1.4}, "-=2")



let pl = gsap.timeline({
    scrollTrigger: {
        trigger: '.partners',
        start: 'center bottom'
        }
});

pl.from(".partners_icons", { opacity: 0, duration: 1.7 })
pl.from(".partners_text", {opacity:0, duration: 1.7}, "-=2")


