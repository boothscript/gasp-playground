const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

tl.to('#intro-text', { y: '0%', duration: 0.8, stagger: 0.2 });
tl.to('#slider', { y: '-100%', duration: 1, delay: 1 });
tl.to('#intro-background', { y: '-100%', duration: 1 }, '-=1');
tl.to('#hero-text', { opacity: '1', duration: 1, delay: 0.5 });
