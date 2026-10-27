'use strict';

document.querySelectorAll('[data-current-year]').forEach(element => {
    element.textContent = new Date().getFullYear();
});

document.getElementById('hireMeBtn')?.addEventListener('click', () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
});

// FormSubmit handles validation, CAPTCHA and confirmation on its own page.
// Do not report success before the service has accepted the submission.
