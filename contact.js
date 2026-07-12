(() => {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const status = document.getElementById('contactFormStatus');
    const submit = document.getElementById('contactSubmit');
    const languageInput = document.getElementById('contactLanguage');
    const choices = [...form.querySelectorAll('input[name="need"]')];
    const serviceMap = {
        custom: 'custom',
        'custom-tool': 'custom',
        website: 'online',
        marketplace: 'online',
        seo: 'marketing',
        tiktok: 'marketing',
        livestream: 'marketing',
        ads: 'marketing',
        analytics: 'marketing',
        ai: 'ai',
        quote: 'quote'
    };

    const getLanguage = () => document.documentElement.lang === 'en' ? 'en' : 'vi';
    const messages = {
        missing: {
            vi: 'Vui lòng chọn nhu cầu và điền đủ thông tin liên hệ.',
            en: 'Please select a need and complete the contact details.'
        },
        sending: { vi: 'Đang gửi yêu cầu...', en: 'Sending your request...' },
        success: {
            vi: 'Đã gửi yêu cầu. Thuận Store sẽ xem thông tin và phản hồi bước tiếp theo.',
            en: 'Your request has been sent. Thuan Store will review it and respond with the next step.'
        },
        error: {
            vi: 'Chưa thể gửi tự động. Vui lòng gọi 0939 125 128 hoặc gửi email đến thuanstore.com@gmail.com.',
            en: 'Automatic submission is unavailable. Please call 0939 125 128 or email thuanstore.com@gmail.com.'
        }
    };

    const applyLanguage = () => {
        const language = getLanguage();
        languageInput.value = language;
        form.querySelectorAll('[data-placeholder-vi][data-placeholder-en]').forEach(field => {
            field.placeholder = language === 'en' ? field.dataset.placeholderEn : field.dataset.placeholderVi;
        });
    };

    const syncChoices = () => {
        choices.forEach(choice => {
            choice.closest('label')?.classList.toggle('is-selected', choice.checked);
        });
    };

    const requestedService = new URLSearchParams(window.location.search).get('service');
    const requestedNeed = serviceMap[requestedService] || '';
    if (requestedNeed) {
        const requestedOption = form.querySelector(`input[name="need"][value="${requestedNeed}"]`);
        if (requestedOption) requestedOption.checked = true;
    }
    choices.forEach(choice => choice.addEventListener('change', syncChoices));
    syncChoices();

    form.addEventListener('submit', async event => {
        event.preventDefault();
        const language = getLanguage();
        applyLanguage();

        if (!form.checkValidity()) {
            status.textContent = messages.missing[language];
            status.dataset.state = 'error';
            form.reportValidity();
            return;
        }

        status.textContent = messages.sending[language];
        status.dataset.state = 'sending';
        submit.disabled = true;
        submit.setAttribute('aria-busy', 'true');

        const formData = new FormData(form);
        formData.append('_subject', language === 'en' ? 'New Thuan Store inquiry' : 'Yêu cầu mới từ Thuận Store');

        try {
            const response = await fetch('https://formsubmit.co/ajax/thuanstore.com@gmail.com', {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: formData
            });
            if (!response.ok) throw new Error('Submission failed');
            form.reset();
            syncChoices();
            status.textContent = messages.success[language];
            status.dataset.state = 'success';
        } catch (error) {
            status.textContent = messages.error[language];
            status.dataset.state = 'error';
        } finally {
            submit.disabled = false;
            submit.removeAttribute('aria-busy');
            applyLanguage();
        }
    });

    window.addEventListener('thuanstore:languagechange', applyLanguage);
    applyLanguage();
})();
