const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

tl.to('#intro-text', { y: '0%', duration: 1, stagger: 0.5 });
tl.to('#slider', { y: '-100%', duration: 1, delay: 1 });
tl.to('#intro-background', { y: '-100%', duration: 1 }, '-=1');
