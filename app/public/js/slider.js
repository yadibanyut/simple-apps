document.addEventListener('DOMContentLoaded', function(){
  const slider = document.getElementById('techSlider');
  const slides = slider.querySelectorAll('.slide');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const dotsContainer = slider.querySelector('.slider-dots');
  let index = 0;
  let interval = null;

  function goTo(i){
    slides.forEach((s, idx) => s.classList.toggle('active', idx === i));
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
    index = i;
  }

  function nextSlide(){
    goTo((index + 1) % slides.length);
  }
  function prevSlide(){
    goTo((index - 1 + slides.length) % slides.length);
  }

  // create dots
  slides.forEach((s, idx) => {
    const d = document.createElement('button');
    d.className = 'dot' + (idx===0 ? ' active' : '');
    d.setAttribute('aria-label', 'Slide ' + (idx+1));
    d.addEventListener('click', () => { goTo(idx); resetAuto(); });
    dotsContainer.appendChild(d);
  });

  next.addEventListener('click', () => { nextSlide(); resetAuto(); });
  prev.addEventListener('click', () => { prevSlide(); resetAuto(); });

  function startAuto(){
    interval = setInterval(nextSlide, 4500);
  }
  function resetAuto(){
    clearInterval(interval);
    startAuto();
  }

  // start
  startAuto();
});
