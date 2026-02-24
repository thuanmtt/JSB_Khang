/* ====================================
   EduNews - Main JavaScript
==================================== */

// Sample Data - School News Articles
const sampleArticles = [
    {
        id: 1,
        title: 'Chào Mừng Năm Học Mới 2026 - Khoa CNTT',
        excerpt: 'Khoa Công nghệ Thông tin khai giảng năm học mới với nhiều chương trình đào tạo tiên tiến và cơ sở vật chất hiện đại.',
        content: `<p>Ngày 05/09/2026, Khoa Công nghệ Thông tin đã long trọng tổ chức lễ khai giảng năm học mới 2026-2027.</p>
        <h2>Điểm mới năm học</h2>
        <p>Năm học này, Khoa đón nhận hơn 500 tân sinh viên với nhiều chương trình đào tạo mới:</p>
        <ul><li>Chương trình Kỹ sư AI</li><li>Chương trình An toàn thông tin</li><li>Chương trình Khoa học dữ liệu</li></ul>
        <h2>Thông điệp từ Ban Chủ nhiệm</h2>
        <p>PGS.TS Nguyễn Văn A - Trưởng khoa đã gửi lời chúc mừng và khích lệ đến toàn thể sinh viên.</p>`,
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
        type: 'thong-bao',
        priority: 'important',
        date: '2026-02-01',
        views: 2543,
        tags: ['khaigiang', 'namhocmoi', 'CNTT']
    },
    {
        id: 2,
        title: 'Học Bổng Toàn Phần Cho Sinh Viên Xuất Sắc 2026',
        excerpt: 'Cơ hội nhận học bổng 100% học phí dành cho sinh viên có thành tích học tập và nghiên cứu xuất sắc.',
        content: `<p>Khoa CNTT thông báo chương trình học bổng toàn phần cho năm học 2026-2027.</p>
        <h2>Điều kiện xét tuyển</h2>
        <p>GPA từ 3.6 trở lên, có công bố khoa học hoặc giải thưởng nghiên cứu sinh viên.</p>
        <h2>Quyền lợi</h2>
        <p>100% học phí, phụ cấp sinh hoạt 3 triệu/tháng, cơ hội thực tập tại doanh nghiệp.</p>`,
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
        type: 'hoc-bong',
        priority: 'urgent',
        date: '2026-01-28',
        views: 3876,
        tags: ['hocbong', 'toanphan', 'sinhvienuatsac']
    },
    {
        id: 3,
        title: 'Hackathon 2026 - Sáng Tạo Vì Cộng Đồng',
        excerpt: 'Cuộc thi lập trình 48 giờ với chủ đề Công nghệ vì cộng đồng, giải thưởng lên đến 50 triệu đồng.',
        content: `<p>Hackathon 2026 là sân chơi sáng tạo dành cho sinh viên yêu công nghệ.</p>
        <h2>Thời gian</h2>
        <p>Từ 9h ngày 15/03 đến 9h ngày 17/03/2026</p>
        <h2>Giải thưởng</h2>
        <p>Giải Nhất: 30 triệu, Giải Nhì: 15 triệu, Giải Ba: 5 triệu</p>`,
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800',
        type: 'su-kien',
        priority: 'important',
        date: '2026-01-25',
        views: 1987,
        tags: ['hackathon', 'laptrinh', 'sukien']
    },
    {
        id: 4,
        title: 'Thông Báo Lịch Thi Học Kỳ 2 Năm Học 2025-2026',
        excerpt: 'Phòng Đào tạo thông báo lịch thi kết thúc học phần học kỳ 2 năm học 2025-2026.',
        content: `<p>Lịch thi chính thức học kỳ 2 năm học 2025-2026:</p>
        <h2>Thời gian thi</h2>
        <p>Từ ngày 20/05/2026 đến ngày 10/06/2026</p>
        <h2>Lưu ý</h2>
        <p>Sinh viên kiểm tra phòng thi, ca thi trên hệ thống đào tạo trước ngày thi 3 ngày.</p>`,
        image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800',
        type: 'thong-bao',
        priority: 'urgent',
        date: '2026-01-22',
        views: 4532,
        tags: ['lichthi', 'thongbao', 'hockytwo']
    },
    {
        id: 5,
        title: 'Tuyển Sinh Sau Đại Học Đợt 1 Năm 2026',
        excerpt: 'Khoa CNTT thông báo tuyển sinh Thạc sĩ và Tiến sĩ đợt 1 năm 2026 với nhiều chuyên ngành hấp dẫn.',
        content: `<p>Đợt tuyển sinh sau đại học với các chuyên ngành:</p>
        <h2>Chuyên ngành Thạc sĩ</h2>
        <p>Khoa học máy tính, Công nghệ phần mềm, An toàn thông tin</p>
        <h2>Hồ sơ</h2>
        <p>Nộp hồ sơ trực tuyến tại website Khoa từ 01/03 đến 30/04/2026</p>`,
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
        type: 'tuyen-sinh',
        priority: 'normal',
        date: '2026-01-20',
        views: 2156,
        tags: ['tuyensinh', 'saudaihoc', 'thacsi']
    },
    {
        id: 6,
        title: 'Công Bố Nghiên Cứu Mới Về AI Trong Y Tế',
        excerpt: 'Nhóm nghiên cứu Khoa CNTT công bố bài báo về ứng dụng Deep Learning trong chẩn đoán hình ảnh y tế.',
        content: `<p>Công bố khoa học trên tạp chí quốc tế Q1</p>
        <h2>Nội dung nghiên cứu</h2>
        <p>Ứng dụng mô hình CNN để phát hiện sớm ung thư phổi từ hình ảnh CT.</p>`,
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800',
        type: 'nghien-cuu',
        priority: 'normal',
        date: '2026-01-18',
        views: 1234,
        tags: ['nghiencuu', 'AI', 'yte']
    },
    {
        id: 7,
        title: 'Hội Thảo Khoa Học Sinh Viên 2026',
        excerpt: 'Hội thảo thường niên về nghiên cứu khoa học sinh viên với nhiều đề tài xuất sắc.',
        content: `<p>Hội thảo khoa học sinh viên Khoa CNTT năm 2026</p>`,
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
        type: 'su-kien',
        priority: 'normal',
        date: '2026-01-15',
        views: 876,
        tags: ['hoithao', 'khoahoc', 'sinhvien']
    },
    {
        id: 8,
        title: 'Chương Trình Thực Tập Tại Microsoft',
        excerpt: 'Cơ hội thực tập tại Microsoft dành cho sinh viên năm 3, năm 4 Khoa CNTT.',
        content: `<p>Microsoft Việt Nam tuyển thực tập sinh 2026</p>`,
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
        type: 'tuyen-sinh',
        priority: 'important',
        date: '2026-01-12',
        views: 3456,
        tags: ['thuctap', 'microsoft', 'cohoiviec']
    }
];

// Initialize
function initializeData() {
    const stored = localStorage.getItem('edunews_articles');
    if (!stored) localStorage.setItem('edunews_articles', JSON.stringify(sampleArticles));
}

function getArticles() {
    const stored = localStorage.getItem('edunews_articles');
    return stored ? JSON.parse(stored) : sampleArticles;
}

function saveArticles(articles) {
    localStorage.setItem('edunews_articles', JSON.stringify(articles));
}

// DOM Ready
document.addEventListener('DOMContentLoaded', function () {
    initializeData();
    initHeader();
    initHeroSlider();
    initSearch();
    initThemeToggle();
    initLightbox();
    initScrollReveal();
    initCounters();
    loadHomePageContent();
});

// Header Functions
function initHeader() {
    const header = document.getElementById('header');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 991) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
}

// Hero Slider
function initHeroSlider() {
    const slider = document.getElementById('heroSlider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.hero-slide');
    const dotsContainer = document.getElementById('heroDots');
    const prevBtn = document.getElementById('heroPrev');
    const nextBtn = document.getElementById('heroNext');

    if (slides.length === 0) return;

    let currentSlide = 0;
    let autoSlideInterval;

    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `hero-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.hero-dot');

    function updateSlider() {
        slides.forEach((slide, index) => slide.classList.toggle('active', index === currentSlide));
        dots.forEach((dot, index) => dot.classList.toggle('active', index === currentSlide));
    }

    function goToSlide(index) { currentSlide = index; updateSlider(); resetAutoSlide(); }
    function nextSlide() { currentSlide = (currentSlide + 1) % slides.length; updateSlider(); }
    function prevSlide() { currentSlide = (currentSlide - 1 + slides.length) % slides.length; updateSlider(); }
    function resetAutoSlide() { clearInterval(autoSlideInterval); autoSlideInterval = setInterval(nextSlide, 5000); }

    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });

    autoSlideInterval = setInterval(nextSlide, 5000);
}

// Search
function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchModal = document.getElementById('searchModal');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');

    if (!searchBtn || !searchModal) return;

    searchBtn.addEventListener('click', () => { searchModal.classList.add('active'); searchInput.focus(); });
    searchClose.addEventListener('click', () => searchModal.classList.remove('active'));
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) window.location.href = `tintuc.html?search=${encodeURIComponent(query)}`;
        }
    });
}

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    const savedTheme = localStorage.getItem('edunews_theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.body.removeAttribute('data-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('edunews_theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('edunews_theme', 'dark');
        }
    });
}

// Lightbox
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');

    if (!lightbox) return;

    document.addEventListener('click', (e) => {
        if (e.target.closest('.image-overlay')) {
            const img = e.target.closest('.article-featured-image')?.querySelector('img');
            if (img) { lightboxImg.src = img.src; lightbox.classList.add('active'); }
        }
    });

    lightboxClose?.addEventListener('click', () => lightbox.classList.remove('active'));
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('active'); });
}

// Scroll Reveal
function initScrollReveal() {
    const elements = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('revealed'); });
    }, { threshold: 0.1 });
    elements.forEach(el => observer.observe(el));
}

// Counter Animation
function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.count);
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) { counter.textContent = target.toLocaleString(); clearInterval(timer); }
                    else counter.textContent = Math.floor(current).toLocaleString();
                }, 30);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
}

// Create News Card
function createNewsCard(article) {
    const typeNames = { 'thong-bao': 'Thông Báo', 'su-kien': 'Sự Kiện', 'hoc-bong': 'Học Bổng', 'tuyen-sinh': 'Tuyển Sinh', 'dao-tao': 'Đào Tạo', 'nghien-cuu': 'Nghiên Cứu' };
    const priorityIcon = article.priority === 'urgent' ? '<div class="card-priority"><i class="fas fa-exclamation"></i></div>' : '';

    return `
        <a href="article.html?id=${article.id}" class="news-card">
            <div class="card-image img-zoom">
                <img src="${article.image}" alt="${article.title}">
                <span class="card-category">${typeNames[article.type] || article.type}</span>
                ${priorityIcon}
            </div>
            <div class="card-body">
                <h3 class="card-title">${article.title}</h3>
                <p class="card-excerpt">${article.excerpt}</p>
                <div class="card-meta">
                    <span><i class="fas fa-calendar"></i> ${formatDate(article.date)}</span>
                    <span><i class="fas fa-eye"></i> ${article.views.toLocaleString()}</span>
                </div>
            </div>
        </a>
    `;
}

// Load Home Page Content
function loadHomePageContent() {
    const articles = getArticles();

    // Latest News
    const latestNews = document.getElementById('latestNews');
    if (latestNews) {
        latestNews.innerHTML = articles.slice(0, 3).map(createNewsCard).join('');
        latestNews.classList.add('stagger-container', 'animate');
    }

    // Announcements
    const announcements = document.getElementById('announcements');
    if (announcements) {
        const annArticles = articles.filter(a => a.type === 'thong-bao').slice(0, 4);
        announcements.innerHTML = annArticles.map(a => {
            const date = new Date(a.date);
            return `
                <a href="article.html?id=${a.id}" class="announcement-item">
                    <div class="date"><span class="day">${date.getDate()}</span><span class="month">Th${date.getMonth() + 1}</span></div>
                    <div class="content"><h4>${a.title}</h4><p>${a.excerpt.substring(0, 60)}...</p></div>
                </a>
            `;
        }).join('');
    }

    // Events
    const events = document.getElementById('events');
    if (events) {
        const eventArticles = articles.filter(a => a.type === 'su-kien').slice(0, 4);
        events.innerHTML = eventArticles.map(a => `
            <a href="article.html?id=${a.id}" class="event-item">
                <div class="event-icon"><i class="fas fa-calendar-alt"></i></div>
                <div class="event-info"><h4>${a.title}</h4><p><i class="fas fa-clock"></i> ${formatDate(a.date)}</p></div>
            </a>
        `).join('');
    }

    // Research News
    const researchNews = document.getElementById('researchNews');
    if (researchNews) {
        const researchArticles = articles.filter(a => a.type === 'nghien-cuu').slice(0, 3);
        researchNews.innerHTML = researchArticles.map(createNewsCard).join('');
    }
}

// News Page
function loadNewsPage() {
    const articles = getArticles();
    const grid = document.getElementById('newsGrid');
    const resultsCount = document.getElementById('resultsCount');
    const hotArticles = document.getElementById('hotArticles');

    if (grid) grid.innerHTML = articles.map(createNewsCard).join('');
    if (resultsCount) resultsCount.textContent = articles.length;

    if (hotArticles) {
        const sorted = [...articles].sort((a, b) => b.views - a.views).slice(0, 5);
        hotArticles.innerHTML = sorted.map((a, i) => `
            <a href="article.html?id=${a.id}" class="hot-item">
                <span class="hot-number">${i + 1}</span>
                <h4>${a.title}</h4>
            </a>
        `).join('');
    }
}

// Training Page
function loadTrainingPage() {
    const articles = getArticles().filter(a => a.type === 'dao-tao' || a.type === 'tuyen-sinh');
    const grid = document.getElementById('trainingNews');
    if (grid) grid.innerHTML = articles.slice(0, 3).map(createNewsCard).join('');
}

// Research Page
function loadResearchPage() {
    const articles = getArticles().filter(a => a.type === 'nghien-cuu');
    const grid = document.getElementById('researchNewsGrid');
    if (grid) grid.innerHTML = articles.map(createNewsCard).join('');
}

// Article Page
function loadArticlePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('id'));
    const articles = getArticles();
    const article = articles.find(a => a.id === articleId);

    if (!article) { window.location.href = 'index.html'; return; }

    article.views++;
    saveArticles(articles);

    document.title = `${article.title} - EduNews`;
    document.getElementById('articleTitle').textContent = article.title;
    document.getElementById('articleExcerpt').textContent = article.excerpt;
    document.getElementById('articleContent').innerHTML = article.content;
    document.getElementById('articleDate').innerHTML = `<i class="fas fa-calendar"></i> ${formatDate(article.date)}`;
    document.getElementById('articleViews').innerHTML = `<i class="fas fa-eye"></i> ${article.views.toLocaleString()} lượt xem`;

    const articleImage = document.getElementById('articleImage');
    if (articleImage) articleImage.querySelector('img').src = article.image;

    const typeNames = { 'thong-bao': 'Thông Báo', 'su-kien': 'Sự Kiện', 'hoc-bong': 'Học Bổng', 'tuyen-sinh': 'Tuyển Sinh', 'dao-tao': 'Đào Tạo', 'nghien-cuu': 'Nghiên Cứu' };
    document.getElementById('articleCat').innerHTML = `<i class="fas fa-folder"></i> ${typeNames[article.type] || article.type}`;
    document.getElementById('articleCatName').textContent = typeNames[article.type] || article.type;

    const tagsContainer = document.getElementById('articleTags');
    if (tagsContainer && article.tags) tagsContainer.innerHTML = article.tags.map(t => `<a href="#" class="tag">#${t}</a>`).join('');

    // Related
    const relatedContainer = document.getElementById('relatedArticles');
    if (relatedContainer) {
        const related = articles.filter(a => a.type === article.type && a.id !== article.id).slice(0, 4);
        relatedContainer.innerHTML = related.map(a => `
            <a href="article.html?id=${a.id}" class="related-item">
                <img src="${a.image}" alt="${a.title}">
                <h4>${a.title}</h4>
            </a>
        `).join('');
    }

    // Popular
    const popularContainer = document.getElementById('popularArticles');
    if (popularContainer) {
        const popular = [...articles].sort((a, b) => b.views - a.views).slice(0, 4);
        popularContainer.innerHTML = popular.map(a => `
            <a href="article.html?id=${a.id}" class="popular-item">
                <img src="${a.image}" alt="${a.title}">
                <h4>${a.title}</h4>
            </a>
        `).join('');
    }

    loadComments(articleId);
}

// Comments
function loadComments(articleId) {
    const comments = JSON.parse(localStorage.getItem(`edunews_comments_${articleId}`) || '[]');
    const list = document.getElementById('commentsList');
    const countEl = document.getElementById('commentsCount');
    const form = document.getElementById('commentForm');

    if (countEl) countEl.textContent = comments.length;

    if (list) {
        list.innerHTML = comments.map(c => `
            <div class="comment-item">
                <div class="comment-avatar">${c.name.charAt(0).toUpperCase()}</div>
                <div class="comment-content">
                    <h4>${c.name}</h4>
                    <span class="comment-date">${formatDate(c.date)}</span>
                    <p>${c.content}</p>
                </div>
            </div>
        `).join('') || '<p style="text-align:center;color:var(--gray)">Chưa có bình luận. Hãy là người đầu tiên!</p>';
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const content = form.querySelector('textarea').value;
            comments.push({ name, email, content, date: new Date().toISOString().split('T')[0] });
            localStorage.setItem(`edunews_comments_${articleId}`, JSON.stringify(comments));
            form.reset();
            loadComments(articleId);
        });
    }
}

// Utility
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('vi-VN');
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    alert('Đã sao chép link!');
}
