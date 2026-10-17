const languageButton = document.getElementById('language-toggle');

function setLanguage(language) {
  const isEnglish = language === 'en';

  document.documentElement.lang = isEnglish ? 'en' : 'fa';
  document.documentElement.dir = isEnglish ? 'ltr' : 'rtl';
  document.body.dir = isEnglish ? 'ltr' : 'rtl';

  document.querySelectorAll('[data-fa][data-en]').forEach((element) => {
    element.textContent = isEnglish
      ? element.dataset.en
      : element.dataset.fa;
  });

  languageButton.textContent = isEnglish ? 'FA' : 'EN';

  languageButton.setAttribute(
    'aria-label',
    isEnglish ? 'تغییر زبان به فارسی' : 'Switch language to English'
  );

  document.title = isEnglish
    ? 'Cosmos Explorer | Explore the Universe'
    : 'کاوشگر جهان | کاوش در جهان';

  try {
    localStorage.setItem('cosmos-language', language);
  } catch (error) {
    // سایت بدون ذخیره‌سازی زبان هم کار می‌کند.
  }
}

languageButton.addEventListener('click', () => {
  const nextLanguage =
    document.documentElement.lang === 'fa' ? 'en' : 'fa';

  setLanguage(nextLanguage);
});

let savedLanguage = 'fa';

try {
  savedLanguage = localStorage.getItem('cosmos-language') || 'fa';
} catch (error) {
  // در صورت غیرفعال بودن ذخیره‌سازی، فارسی زبان پیش‌فرض است.
}

setLanguage(savedLanguage);
