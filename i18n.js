(() => {
    const STORAGE_KEY = 'thuanstore_app_lang_v1';
    const normalize = value => value === 'en' ? 'en' : 'vi';

    const readStored = () => {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (error) {
            return null;
        }
    };

    const readInitial = () => {
        const query = new URLSearchParams(window.location.search).get('lang');
        if (query === 'vi' || query === 'en') return query;
        const stored = readStored();
        if (stored === 'vi' || stored === 'en') return stored;
        return navigator.language && navigator.language.toLowerCase().startsWith('en') ? 'en' : 'vi';
    };

    let currentLanguage = normalize(readInitial());
    document.documentElement.lang = currentLanguage;
    document.documentElement.dataset.lang = currentLanguage;

    const persist = language => {
        try {
            localStorage.setItem(STORAGE_KEY, language);
        } catch (error) {
            /* Storage can be unavailable when a browser restricts local files. */
        }
    };

    const applyLabels = language => {
        document.querySelectorAll('[data-label-vi][data-label-en]').forEach(element => {
            const value = language === 'en' ? element.dataset.labelEn : element.dataset.labelVi;
            if (!value) return;
            element.setAttribute('aria-label', value);
            if (element.hasAttribute('title')) element.setAttribute('title', value);
        });
    };

    const apply = (language, shouldPersist = true) => {
        currentLanguage = normalize(language);
        document.documentElement.lang = currentLanguage;
        document.documentElement.dataset.lang = currentLanguage;
        document.body?.classList.toggle('lang-en', currentLanguage === 'en');
        document.body?.classList.toggle('lang-vi', currentLanguage === 'vi');
        const pageTitle = currentLanguage === 'en'
            ? document.documentElement.dataset.titleEn
            : document.documentElement.dataset.titleVi;
        if (pageTitle) document.title = pageTitle;

        document.querySelectorAll('[data-app-lang]').forEach(button => {
            const isActive = button.dataset.appLang === currentLanguage;
            button.classList.toggle('is-active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });

        applyLabels(currentLanguage);
        if (shouldPersist) persist(currentLanguage);
        window.dispatchEvent(new CustomEvent('thuanstore:languagechange', { detail: { language: currentLanguage } }));
    };

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('[data-app-lang]').forEach(button => {
            button.addEventListener('click', () => apply(button.dataset.appLang));
        });
        apply(currentLanguage, false);
    });

    window.ThuanStoreLanguage = {
        get: () => currentLanguage,
        set: apply
    };
})();
