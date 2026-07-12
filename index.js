(() => {
    const orbit = document.querySelector('[data-orbit]');
    const center = document.getElementById('orbitCenter');
    const mobileMenu = document.getElementById('mobileMenu');
    if (!orbit || !center) return;

    const getLanguage = () => window.ThuanStoreLanguage?.get?.() || document.documentElement.dataset.lang || 'vi';

    const syncLabels = () => {
        const language = getLanguage();
        const showingTools = orbit.dataset.mode === 'tools';
        const centerLabel = showingTools
            ? (language === 'en' ? 'Show online services' : 'Hiển thị dịch vụ trực tuyến')
            : (language === 'en' ? 'Show demo tools' : 'Hiển thị công cụ dùng thử');
        const orbitLabel = showingTools
            ? (language === 'en' ? 'Thuan Store demo tools' : 'Các công cụ dùng thử Thuận Store')
            : (language === 'en' ? 'Online sales support services' : 'Dịch vụ hỗ trợ bán hàng trực tuyến');

        center.setAttribute('aria-label', centerLabel);
        center.setAttribute('title', centerLabel);
        center.setAttribute('aria-pressed', String(showingTools));
        orbit.setAttribute('aria-label', orbitLabel);
    };

    const setMode = mode => {
        const nextMode = mode === 'tools' ? 'tools' : 'services';
        orbit.dataset.mode = nextMode;
        orbit.classList.toggle('is-tools', nextMode === 'tools');
        orbit.classList.toggle('is-services', nextMode === 'services');
        syncLabels();
    };

    const showOrbit = mode => {
        setMode(mode);
        document.getElementById('orbitArea')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        mobileMenu?.removeAttribute('open');
    };

    center.addEventListener('click', () => {
        setMode(orbit.dataset.mode === 'tools' ? 'services' : 'tools');
    });

    document.querySelectorAll('[data-show-mode]').forEach(control => {
        control.addEventListener('click', event => {
            if (control.tagName === 'A') event.preventDefault();
            showOrbit(control.dataset.showMode);
        });
    });

    document.querySelectorAll('.mobile-menu-panel a').forEach(link => {
        link.addEventListener('click', () => mobileMenu?.removeAttribute('open'));
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') mobileMenu?.removeAttribute('open');
    });

    window.addEventListener('thuanstore:languagechange', syncLabels);
    setMode('services');
})();
