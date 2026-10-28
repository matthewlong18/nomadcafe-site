// Every Coffee Chat CTA links straight to Calendly with UTM tags set in index.html.
// TODO: replace calendly.com/REPLACE_ME and tally.so/r/REPLACE_ME in index.html.

// Count every CTA click in PostHog (which button, from where).
document.addEventListener('click', (e) => {
  const a = e.target.closest('[data-cta]');
  if (a && window.posthog) window.posthog.capture('cta_click', { cta: a.dataset.cta, href: a.getAttribute('href') });
});
