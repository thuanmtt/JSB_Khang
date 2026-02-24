/* ====================================
   EduNews - Admin CMS
==================================== */

let articleForm, articlesList, deleteModal, toast;
let editingId = null;

document.addEventListener('DOMContentLoaded', function () {
    articleForm = document.getElementById('articleForm');
    articlesList = document.getElementById('articlesList');
    deleteModal = document.getElementById('deleteModal');
    toast = document.getElementById('toast');

    initAdmin();
    loadArticlesList();
    updateStats();
    initFormHandlers();
    initFilterTabs();
    initImagePreview();
});

function initAdmin() {
    const stored = localStorage.getItem('edunews_articles');
    if (!stored) location.reload();
}

function getArticles() {
    return JSON.parse(localStorage.getItem('edunews_articles') || '[]');
}

function saveArticles(articles) {
    localStorage.setItem('edunews_articles', JSON.stringify(articles));
}

function updateStats() {
    const articles = getArticles();
    const counts = { 'thong-bao': 0, 'su-kien': 0, 'hoc-bong': 0 };
    let totalViews = 0;

    articles.forEach(a => {
        if (counts[a.type] !== undefined) counts[a.type]++;
        totalViews += (a.views || 0);
    });

    document.getElementById('thongbaoCount').textContent = counts['thong-bao'];
    document.getElementById('sukienCount').textContent = counts['su-kien'];
    document.getElementById('hocbongCount').textContent = counts['hoc-bong'];
    document.getElementById('totalViews').textContent = totalViews.toLocaleString();
}

function loadArticlesList(filter = 'all') {
    let articles = getArticles();
    if (filter !== 'all') articles = articles.filter(a => a.type === filter);

    if (articles.length === 0) {
        articlesList.innerHTML = '<div style="text-align:center;padding:60px 20px;color:var(--gray)"><i class="fas fa-newspaper" style="font-size:4rem;opacity:0.3;margin-bottom:20px;display:block"></i><p>Chưa có bài viết nào</p></div>';
        return;
    }

    const typeNames = { 'thong-bao': 'Thông Báo', 'su-kien': 'Sự Kiện', 'hoc-bong': 'Học Bổng', 'tuyen-sinh': 'Tuyển Sinh', 'dao-tao': 'Đào Tạo', 'nghien-cuu': 'Nghiên Cứu' };

    articlesList.innerHTML = articles.map(article => `
        <div class="list-item" data-id="${article.id}">
            <img src="${article.image}" alt="${article.title}" onerror="this.src='https://via.placeholder.com/100x70'">
            <div class="list-item-content">
                <h4>${article.title}</h4>
                <div class="item-meta">
                    <span><i class="fas fa-folder"></i> ${typeNames[article.type] || article.type}</span>
                    <span><i class="fas fa-eye"></i> ${(article.views || 0).toLocaleString()}</span>
                    <span><i class="fas fa-calendar"></i> ${formatDate(article.date)}</span>
                </div>
            </div>
            <div class="list-item-actions">
                <button class="edit-btn" onclick="editArticle(${article.id})" title="Sửa"><i class="fas fa-edit"></i></button>
                <button class="delete-btn" onclick="confirmDelete(${article.id})" title="Xóa"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');
}

function initFormHandlers() {
    articleForm.addEventListener('submit', handleFormSubmit);
    document.getElementById('resetFormBtn')?.addEventListener('click', resetForm);
}

function handleFormSubmit(e) {
    e.preventDefault();

    const articles = getArticles();
    const formData = {
        title: document.getElementById('title').value.trim(),
        type: document.getElementById('type').value,
        priority: document.getElementById('priority').value,
        image: document.getElementById('image').value.trim(),
        excerpt: document.getElementById('excerpt').value.trim(),
        content: `<p>${document.getElementById('content').value.trim().replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>')}</p>`,
        tags: document.getElementById('tags').value.split(',').map(t => t.trim()).filter(t => t),
        date: new Date().toISOString().split('T')[0],
        views: 0
    };

    if (editingId) {
        const index = articles.findIndex(a => a.id === editingId);
        if (index !== -1) {
            formData.id = editingId;
            formData.views = articles[index].views;
            articles[index] = formData;
            showToast('Cập nhật bài viết thành công!');
        }
    } else {
        formData.id = Date.now();
        articles.unshift(formData);
        showToast('Thêm bài viết mới thành công!');
    }

    saveArticles(articles);
    loadArticlesList();
    updateStats();
    resetForm();
}

function editArticle(id) {
    const articles = getArticles();
    const article = articles.find(a => a.id === id);
    if (!article) return;

    editingId = id;

    document.getElementById('articleId').value = id;
    document.getElementById('title').value = article.title;
    document.getElementById('type').value = article.type;
    document.getElementById('priority').value = article.priority || 'normal';
    document.getElementById('image').value = article.image;
    document.getElementById('excerpt').value = article.excerpt;

    const contentText = article.content.replace(/<\/p><p>/g, '\n\n').replace(/<br>/g, '\n').replace(/<\/?p>/g, '').replace(/<\/?[^>]+(>|$)/g, '');
    document.getElementById('content').value = contentText;
    document.getElementById('tags').value = (article.tags || []).join(', ');

    document.getElementById('formTitle').innerHTML = '<i class="fas fa-edit"></i> Sửa Bài Viết';
    document.getElementById('submitText').textContent = 'Cập Nhật';
    document.getElementById('resetFormBtn').style.display = 'block';

    updateImagePreview();
    document.querySelector('.admin-form-section').scrollIntoView({ behavior: 'smooth' });
}

function resetForm() {
    editingId = null;
    articleForm.reset();
    document.getElementById('formTitle').innerHTML = '<i class="fas fa-plus-circle"></i> Thêm Bài Viết Mới';
    document.getElementById('submitText').textContent = 'Thêm Bài Viết';
    document.getElementById('resetFormBtn').style.display = 'none';
    document.getElementById('imagePreview').innerHTML = '';
}

let deleteId = null;

function confirmDelete(id) {
    deleteId = id;
    deleteModal.classList.add('active');
}

document.getElementById('cancelDelete')?.addEventListener('click', () => {
    deleteModal.classList.remove('active');
    deleteId = null;
});

document.getElementById('confirmDelete')?.addEventListener('click', () => {
    if (deleteId) {
        const articles = getArticles().filter(a => a.id !== deleteId);
        saveArticles(articles);
        loadArticlesList();
        updateStats();
        showToast('Đã xóa bài viết!');
    }
    deleteModal.classList.remove('active');
    deleteId = null;
});

function initFilterTabs() {
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            loadArticlesList(tab.dataset.filter);
        });
    });
}

function initImagePreview() {
    document.getElementById('image')?.addEventListener('input', updateImagePreview);
}

function updateImagePreview() {
    const url = document.getElementById('image').value;
    const preview = document.getElementById('imagePreview');
    if (url) preview.innerHTML = `<img src="${url}" alt="Preview" onerror="this.parentElement.innerHTML='<p style=color:red>Không thể tải hình</p>'">`;
    else preview.innerHTML = '';
}

function showToast(message) {
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 3000);
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('vi-VN');
}
