console.clear();

gsap.registerPlugin(ScrollTrigger, CustomEase);

// ScrollSmoother.create({
// 	smooth: 0.5,
// 	effects: true,
// 	smoothTouch: 0.2,
// 	noramalizeScroll: true,
// });
const text = new SplitType(".title__sctroke-conatiner-label", {
	types: "chars",
});

gsap.set("#title__sctroke-conatiner-gsap", {
	yPercent: 100,
	opacity: 0,
});
gsap.set("body", {
	overflow: "clip",
});
gsap
	.timeline({
		delay: 1.5,
	})
	.to("#title__sctroke-conatiner-gsap", {
		yPercent: 0,

		opacity: 1,
		stagger: 0.15,
		duration: 0.75,
		ease: "power3.out",
	})
	.to(
		"#fragment__wrapper-gsap",
		{
			opacity: 1,
			stagger: 0.05,
			duration: 0.75,
			ease: "power2.out",
			transform: "translateX(0)",
		},
		"-=0.75"
	)
	.to(
		"#title__sctroke-conatiner-label-gsap>.char",
		{
			transform: "translateY(0%)",
			opacity: 1,
			stagger: 0.05,
			duration: 0.2,
			ease: "back",
		},
		"-=0.4"
	)
	.to(
		"#section-1__transform-background-gsap, #section-1__title-gsap",
		{
			transform: "translateY(0%)",
			duration: 2.2,
			ease: "power3.inOut",
		},
		"-=0.75"
	)
	.to("body", {
		overflow: "visible",
	});

/* ---------------------- */
/* ---------------------- */
/* ---------------------- */
/* ---------------------- */

ScrollTrigger.defaults({
	trigger: ".section-1",
	end: "200% top",
	start: "-0.1% top",
	scrub: 0.75,
});
gsap.defaults({
	ease: CustomEase.create("custom", "M0,0,C0.18,0.358,0.612,0.654,1,1"),
});

ScrollTrigger.create({
	pin: true,
	start: "top",
	end: "300%",
});
/* ---------------------- */

gsap.to("#fragment__wrapper-big-gsap", {
	scrollTrigger: {
		end: "40%",
	},
	opacity: 0,
});
/* ---------------------- */

gsap.to("#fragment__wrapper-big-gsap", {
	scrollTrigger: {
		end: "80%",
	},
	aspectRatio: 0,
	margin: "0px -1%",
});
/* ---------------------- */

gsap.to("#title__word-gsap", {
	scrollTrigger: {
		end: "100%",
	},
	stagger: 0.3,
	color: "#ffc6a9",
});

/* ---------------------- */
gsap.to("#section-transform__img-gsap", {
	scrollTrigger: {
		scrub: 1.2,
		end: "200%",
	},
	stagger: 0.14,
	rotate: -20,
	top: "0%",
	yPercent: -120,
});

/* ---------------------- */
gsap.to(".section-transform__img-gsap-2", {
	scrollTrigger: {
		scrub: 1.2,
	},
	rotate: 20,
});
gsap.to(".title__sctroke-conatiner-label-2>.char", {
	scrollTrigger: {
		start: "+=1500vh",
		trigger: "body",
		scrub: false,
	},
	onComplete: () => {
		gsap.to(".title__sctroke-conatiner-label-3>.char", {
			transform: "translateY(0%)",
			duration: 0.5,
			opacity: 1,
			ease: "back",
			stagger: 0.05,
		});
	},
	transform: "translateY(-200%)",
	duration: 0.4,
	stagger: 0.05,
	opacity: 0,
	ease: "back.in",
});
/* ---------------------- */
