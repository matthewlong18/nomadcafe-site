// Booking link: paste the Calendly URL for the free strategy session here.
// Until it's set, the "Book your free chat" button opens an email instead.
const BOOK_URL = '';

if (BOOK_URL) {
  document.querySelectorAll('[data-book]').forEach((a) => {
    const url = new URL(BOOK_URL);
    const params = new URLSearchParams(location.search);
    url.searchParams.set('utm_source', params.get('utm_source') || 'nomadcafe.co');
    url.searchParams.set('utm_medium', params.get('utm_medium') || 'website');
    url.searchParams.set('utm_campaign', params.get('utm_campaign') || 'homepage');
    a.href = url.toString();
    a.target = '_blank';
    a.rel = 'noopener';
  });
}

// Count every CTA click in PostHog (which button, from where).
document.addEventListener('click', (e) => {
  const a = e.target.closest('[data-cta]');
  if (a && window.posthog) window.posthog.capture('cta_click', { cta: a.dataset.cta, href: a.getAttribute('href') });
});
