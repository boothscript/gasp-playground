gsap.registerPlugin(CSSRulePlugin);

const tl = gsap.timeline({ defaults: { ease: 'power2.easeOut' } });
const button = document.querySelector('button');
const buttonShadow = CSSRulePlugin.getRule('button::before');

tl.to('#btn-text', { opacity: 0, duration: 0.2 })
  .to('button', {
    padding: 0,
    width: '2.25rem',
    height: '2.25rem',
    borderRadius: '50%',
    ease: 'elastic.out(1, .3)',
    duration: 1.2,
  })
  .to(
    buttonShadow,
    {
      borderRadius: '50%',
    },
    '-=.5'
  )
  .to('svg', { strokeDasharray: '90 90' }, '-=.7')
  .to('.icon-line', {
    attr: { d: 'M1.00006,22.6118 L21.0001,12.6118 L1.00006,1.61176' },
    x: '.4rem',
  })
  .to('#next', { clipPath: 'circle(100% at 50% 50%)', duration: 0.5 }, '-=.3');

tl.pause();

button.addEventListener('click', () => {
  tl.play();
});
