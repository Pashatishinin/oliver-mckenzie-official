import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export function useSmoothScroll() {
	if (window.matchMedia("(pointer: coarse)").matches) return;

	let targetY = window.scrollY;

	window.addEventListener(
		"wheel",
		(e) => {
			e.preventDefault();

			targetY += e.deltaY;
			targetY = Math.max(
				0,
				Math.min(
					targetY,
					document.documentElement.scrollHeight - window.innerHeight,
				),
			);

			gsap.to(window, {
				scrollTo: { y: targetY },
				duration: 1,
				ease: "power3.out",
				overwrite: "auto",
			});
		},
		{ passive: false },
	);

	window.addEventListener("scroll", () => {
		if (!gsap.isTweening(window)) {
			targetY = window.scrollY;
		}
	});
}
