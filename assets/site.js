(() => {
  const buttons = [...document.querySelectorAll('[data-screen]')];
  const panels = [...document.querySelectorAll('.screen-panel')];
  function selectScreen(name) {
    for (const button of buttons) button.setAttribute('aria-pressed', String(button.dataset.screen === name));
    for (const panel of panels) panel.hidden = panel.id !== `screen-${name}`;
  }
  if (buttons.length && panels.length) {
    selectScreen('review');
    for (const button of buttons) button.addEventListener('click', () => {
      selectScreen(button.dataset.screen);
      if (window.matchMedia('(max-width: 600px)').matches) {
        document.getElementById(`screen-${button.dataset.screen}`).scrollIntoView({block: 'start'});
      }
    });
  }
})();
