(() => {
    const icons = {
        website: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M3 9h18M7 14h4M15 13v4m-2-2h4" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        seo: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="5.5"></circle><path d="m15 15 5 5M7.8 9h5.4M7.8 12h3.4" stroke-linecap="round"></path></svg>',
        tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"></rect><path d="m10 9 5 3-5 3V9Z" stroke-linejoin="round"></path></svg>',
        livestream: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="3" width="8" height="18" rx="2"></rect><circle cx="12" cy="10" r="2"></circle><path d="M4.8 7.5a6 6 0 0 0 0 5M19.2 7.5a6 6 0 0 1 0 5M11 18h2" stroke-linecap="round"></path></svg>',
        marketplace: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10h16l-1.2-5H5.2L4 10Zm2 0v9h12v-9M9 19v-5h6v5" stroke-linejoin="round"></path></svg>',
        ads: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 13-5v12L3 13v-2Zm13-1 4-2v8l-4-2M5 14l1 5h4l-2-4" stroke-linejoin="round"></path></svg>',
        analytics: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V9m4 10-1-6 4 2 3-8 3 5 3-2M3 19h18" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        ai: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="3"></rect><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4M10 14l2-4 2 4m-3.2-1h2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
    };

    const catalog = {
        website: {
            color: '#22d3ee',
            vi: {
                title: 'Website bán hàng',
                summary: 'Thiết kế website gọn, dễ dùng trên điện thoại và dẫn khách đến hành động mua hàng hoặc liên hệ.',
                deliverables: ['Cấu trúc danh mục, trang sản phẩm và lời kêu gọi hành động.', 'Giao diện đa thiết bị, tốc độ tải và nền tảng tối ưu tìm kiếm.', 'Kết nối biểu mẫu, trò chuyện và công cụ đo lường cần thiết.'],
                outcome: 'Một điểm bán hàng trực tuyến thuộc quyền kiểm soát của doanh nghiệp.'
            },
            en: {
                title: 'Sales website',
                summary: 'Design a focused mobile-friendly website that moves visitors toward a purchase or inquiry.',
                deliverables: ['Product architecture, product pages, and clear calls to action.', 'Responsive interface, loading performance, and essential technical SEO.', 'Forms, chat, and the required measurement connections.'],
                outcome: 'An online sales destination the business controls.'
            }
        },
        seo: {
            color: '#60a5fa',
            vi: {
                title: 'SEO và nội dung',
                summary: 'Xây nội dung theo nhu cầu tìm kiếm thật, giúp khách hiểu sản phẩm và tìm thấy doanh nghiệp dễ hơn.',
                deliverables: ['Nghiên cứu từ khóa, đối thủ và ý định tìm kiếm.', 'Bản đồ nội dung cho website, sản phẩm và mạng xã hội.', 'Tối ưu nội dung trên trang, tìm kiếm tại địa phương và quy trình cập nhật.'],
                outcome: 'Nội dung có hệ thống, dùng lại được và tạo lưu lượng bền vững.'
            },
            en: {
                title: 'SEO and content',
                summary: 'Build content around real search demand so customers can understand products and find the business more easily.',
                deliverables: ['Keyword, competitor, and search-intent research.', 'A content map for the website, products, and social channels.', 'On-page SEO, local SEO, and a repeatable publishing workflow.'],
                outcome: 'Structured reusable content that supports sustainable traffic.'
            }
        },
        tiktok: {
            color: '#f472b6',
            vi: {
                title: 'TikTok và video ngắn',
                summary: 'Xây hệ thống video ngắn phù hợp sản phẩm, giọng thương hiệu và nguồn lực sản xuất thực tế.',
                deliverables: ['Trụ cột nội dung và lịch đăng theo mục tiêu bán hàng.', 'Câu mở đầu, cách trình bày sản phẩm và lời kêu gọi hành động.', 'Mẫu quay dựng để đội ngũ có thể sản xuất đều đặn.'],
                outcome: 'Một quy trình video rõ ràng thay vì các nội dung rời rạc.'
            },
            en: {
                title: 'TikTok and short video',
                summary: 'Build a short-video system that fits the product, brand voice, and realistic production capacity.',
                deliverables: ['Content pillars and a sales-focused publishing calendar.', 'Hooks, product demonstrations, and calls to action.', 'Repeatable shooting and editing templates for the team.'],
                outcome: 'A consistent video workflow instead of disconnected posts.'
            }
        },
        livestream: {
            color: '#fb7185',
            vi: {
                title: 'Phát trực tiếp bán hàng',
                summary: 'Chuẩn bị kịch bản, sản phẩm, ưu đãi và cách phối hợp để buổi phát trực tiếp rõ ràng, dễ theo dõi.',
                deliverables: ['Kịch bản thời lượng, thứ tự sản phẩm và nhịp tương tác.', 'Nội dung chốt đơn, ưu đãi và xử lý câu hỏi thường gặp.', 'Thiết lập vận hành, phân vai và biểu mẫu đánh giá sau buổi phát.'],
                outcome: 'Buổi phát trực tiếp có cấu trúc và có dữ liệu để cải thiện.'
            },
            en: {
                title: 'Live selling',
                summary: 'Prepare the script, products, offers, and team coordination for a clear and watchable live session.',
                deliverables: ['Run of show, product order, and engagement rhythm.', 'Closing scripts, offers, and common-question handling.', 'Operating setup, team roles, and post-live review templates.'],
                outcome: 'Structured live sessions with data for continuous improvement.'
            }
        },
        marketplace: {
            color: '#f59e0b',
            vi: {
                title: 'Sàn thương mại điện tử và Amazon',
                summary: 'Chuẩn hóa gian hàng và nội dung sản phẩm cho sàn trong nước hoặc lộ trình bán hàng quốc tế.',
                deliverables: ['Thiết lập danh mục, thuộc tính và quy chuẩn đăng sản phẩm.', 'Tối ưu tiêu đề, mô tả, từ khóa và hình ảnh trang sản phẩm.', 'Quy trình vận hành giá, khuyến mãi, đơn hàng và báo cáo.'],
                outcome: 'Gian hàng nhất quán, dễ quản lý và sẵn sàng mở rộng.'
            },
            en: {
                title: 'Marketplaces and Amazon',
                summary: 'Standardize storefronts and product content for local marketplaces or an international selling roadmap.',
                deliverables: ['Category, attribute, and product-listing standards.', 'Optimized titles, descriptions, keywords, and listing visuals.', 'Workflows for pricing, promotions, orders, and reporting.'],
                outcome: 'A consistent manageable storefront ready to scale.'
            }
        },
        ads: {
            color: '#a78bfa',
            vi: {
                title: 'Quảng cáo số',
                summary: 'Thiết lập quảng cáo theo mục tiêu, theo dõi chuyển đổi và tối ưu dựa trên dữ liệu thay vì cảm tính.',
                deliverables: ['Kiểm tra mã theo dõi, sự kiện, liên kết và dữ liệu chuyển đổi.', 'Cấu trúc chiến dịch, nhóm đối tượng và kế hoạch nội dung quảng cáo.', 'Theo dõi chi phí, kết quả và đề xuất tối ưu định kỳ.'],
                outcome: 'Biết ngân sách đang tạo ra tín hiệu bán hàng nào.'
            },
            en: {
                title: 'Digital advertising',
                summary: 'Set up goal-based advertising, conversion tracking, and data-led optimization.',
                deliverables: ['Pixel, event, UTM, and conversion-data review.', 'Campaign structure, audiences, and ad-content plan.', 'Cost and result tracking with recurring optimization actions.'],
                outcome: 'Understand which sales signals the advertising budget produces.'
            }
        },
        analytics: {
            color: '#2dd4bf',
            vi: {
                title: 'Chiến lược và đo lường',
                summary: 'Xác định mục tiêu, hành trình khách hàng và chỉ số cần theo dõi trước khi mở rộng đội tiếp thị.',
                deliverables: ['Mục tiêu, chân dung khách hàng và phễu bán hàng.', 'Bộ chỉ số theo từng kênh cùng bảng theo dõi dễ cập nhật.', 'Đánh giá kênh hiện tại và kế hoạch ưu tiên theo nguồn lực.'],
                outcome: 'Đội ngũ biết việc nào cần làm trước và đo bằng chỉ số nào.'
            },
            en: {
                title: 'Strategy and analytics',
                summary: 'Define goals, the customer journey, and the metrics to track before scaling a marketing team.',
                deliverables: ['Goals, customer profiles, and the sales funnel.', 'Channel KPIs with a maintainable reporting dashboard.', 'Current-channel review and a resource-based priority plan.'],
                outcome: 'The team knows what to do first and how success will be measured.'
            }
        },
        ai: {
            color: '#34d399',
            vi: {
                title: 'AI hỗ trợ bán hàng',
                summary: 'Bắt đầu từ một công việc lặp lại có dữ liệu rõ, sau đó dùng AI để xử lý bản nháp nhanh hơn và vẫn có người kiểm tra trước khi sử dụng.',
                deliverables: ['Chuẩn hóa danh sách sản phẩm, thuộc tính và nội dung nguồn để AI sử dụng đúng dữ liệu.', 'Tạo mẫu soạn mô tả sản phẩm, nội dung bán hàng và câu trả lời thường gặp để người dùng kiểm tra trước khi gửi.', 'Kết nối biểu mẫu và bảng dữ liệu để tổng hợp yêu cầu, nhắc chăm sóc khách hoặc chuẩn bị báo cáo.'],
                outcome: 'Giảm thời gian nhập lại và soạn nháp, trong khi quyết định cuối cùng vẫn do người dùng kiểm tra.',
                examples: ['Sale sản phẩm: tra dữ liệu, tóm tắt thông số và chuẩn bị nội dung gửi khách từ nguồn đã duyệt.', 'Cửa hàng: soạn câu trả lời cho các câu hỏi lặp lại và phân loại yêu cầu của khách.', 'Nhóm tiếp thị: chuyển nội dung sản phẩm thành phiên bản cho website, mạng xã hội hoặc video.'],
                principle: 'Không bắt đầu bằng một hệ thống AI lớn. Chọn một việc lặp lại, đo thời gian trước và sau, rồi mới mở rộng.',
                cta: 'Trao đổi một việc đang lặp lại'
            },
            en: {
                title: 'AI for sales support',
                summary: 'Start with one repetitive task backed by clear data, then use AI to prepare drafts faster while keeping human review before use.',
                deliverables: ['Standardize product lists, attributes, and source content so AI works from approved data.', 'Create reviewed templates for product descriptions, sales content, and recurring customer questions.', 'Connect forms and structured data to summarize requests, prepare follow-up reminders, or draft reports.'],
                outcome: 'Reduce repeated entry and drafting time while keeping the final decision with the user.',
                examples: ['Product sales: retrieve approved data, summarize specifications, and prepare customer-ready information.', 'Retail stores: draft answers to recurring questions and categorize customer requests.', 'Marketing teams: adapt product information for websites, social channels, or video scripts.'],
                principle: 'Do not begin with a large AI system. Start with one repeatable task, measure time before and after, then expand.',
                cta: 'Discuss one repetitive task'
            }
        }
    };

    const serviceKey = document.body.dataset.service;
    const service = catalog[serviceKey];
    const mount = document.getElementById('serviceContent');
    if (!service || !mount) return;

    const list = language => service[language].deliverables
        .map(item => `<li>${item}</li>`)
        .join('');
    const examples = language => (service[language].examples || [])
        .map(item => `<li>${item}</li>`)
        .join('');
    const hasExamples = Boolean(service.vi.examples && service.en.examples);

    mount.style.setProperty('--service-color', service.color);
    mount.innerHTML = `
        <div class="service-heading">
            <span class="service-heading-icon">${icons[serviceKey]}</span>
            <div>
                <p class="service-kicker"><span data-lang="vi">DỊCH VỤ TRỰC TUYẾN</span><span data-lang="en">ONLINE SERVICE</span></p>
                <h1 class="service-title"><span data-lang="vi">${service.vi.title}</span><span data-lang="en">${service.en.title}</span></h1>
            </div>
        </div>
        <p class="service-summary"><span data-lang="vi">${service.vi.summary}</span><span data-lang="en">${service.en.summary}</span></p>
        <div class="service-content">
            <section>
                <p class="section-label"><span data-lang="vi">NỘI DUNG TRIỂN KHAI</span><span data-lang="en">DELIVERABLES</span></p>
                <ul class="service-list" data-lang="vi">${list('vi')}</ul>
                <ul class="service-list" data-lang="en">${list('en')}</ul>
            </section>
            <aside class="service-result">
                <strong><span data-lang="vi">KẾT QUẢ HƯỚNG TỚI</span><span data-lang="en">TARGET OUTCOME</span></strong>
                <p><span data-lang="vi">${service.vi.outcome}</span><span data-lang="en">${service.en.outcome}</span></p>
            </aside>
        </div>
        ${hasExamples ? `<div class="service-extra">
            <section>
                <p class="section-label"><span data-lang="vi">TÌNH HUỐNG PHÙ HỢP</span><span data-lang="en">SUITABLE USE CASES</span></p>
                <ul class="service-example-list" data-lang="vi">${examples('vi')}</ul>
                <ul class="service-example-list" data-lang="en">${examples('en')}</ul>
            </section>
            <aside class="service-principle">
                <strong><span data-lang="vi">CÁCH BẮT ĐẦU</span><span data-lang="en">HOW TO START</span></strong>
                <p><span data-lang="vi">${service.vi.principle}</span><span data-lang="en">${service.en.principle}</span></p>
            </aside>
        </div>` : ''}
        <div class="service-actions">
            <a class="primary-action" href="lienhe.html?service=${encodeURIComponent(serviceKey)}"><span data-lang="vi">${service.vi.cta || 'Trao đổi dịch vụ'}</span><span data-lang="en">${service.en.cta || 'Discuss this service'}</span></a>
            <a class="secondary-action" href="baogia.html?tool=quote"><span data-lang="vi">Dùng thử công cụ báo giá</span><span data-lang="en">Try the quote builder</span></a>
        </div>`;

    const language = window.ThuanStoreLanguage?.get?.() || document.documentElement.dataset.lang || 'vi';
    document.title = `${service[language].title} - Thuận Store`;
    window.addEventListener('thuanstore:languagechange', event => {
        document.title = `${service[event.detail.language].title} - Thuận Store`;
    });
})();
