/* ====================================
   EduNews - AI Chatbot
==================================== */

const chatbotKnowledge = {
    greetings: [
        'Xin chào! 👋 Tôi là EduBot, trợ lý AI của Khoa CNTT.',
        'Chào bạn! Tôi có thể giúp gì cho bạn hôm nay?',
        'Hello! Bạn cần hỗ trợ thông tin gì?'
    ],

    lichThi: '📅 **Lịch Thi Học Kỳ 2 (2025-2026)**\n\n• Thời gian: 20/05 - 10/06/2026\n• Kiểm tra lịch: Portal sinh viên\n• Lưu ý: Mang thẻ SV và bút\n\nCần thêm thông tin khác?',

    hocBong: '🎓 **Thông Tin Học Bổng**\n\n**Học bổng toàn phần:**\n• Điều kiện: GPA ≥ 3.6\n• Quyền lợi: 100% học phí + 3tr/tháng\n\n**Học bổng khuyến khích:**\n• GPA 3.2-3.6: 50% học phí\n• GPA 3.0-3.2: 25% học phí\n\nHạn nộp: 30/04/2026',

    tuyenSinh: '📋 **Tuyển Sinh 2026**\n\n**Đại học:**\n• Xét tuyển: Điểm thi THPT/học bạ\n• Điểm chuẩn 2025: 24-27 điểm\n\n**Sau đại học:**\n• Thạc sĩ: Tốt nghiệp ĐH, IELTS 5.5+\n• Tiến sĩ: Tốt nghiệp ThS\n\nHạn đăng ký: 01/03 - 30/04/2026',

    daoTao: '📚 **Chương Trình Đào Tạo**\n\n• Khoa học Máy tính (4 năm)\n• Công nghệ Phần mềm (4 năm)\n• An toàn Thông tin (4 năm)\n• Trí tuệ Nhân tạo (4 năm)\n• Khoa học Dữ liệu (4 năm)\n\nTín chỉ: 130-140 TC',

    lienHe: '📞 **Thông Tin Liên Hệ**\n\n**Văn phòng Khoa:**\n• Địa chỉ: P.305, Nhà E3\n• Điện thoại: (024) 3754 7461\n• Email: khoacntt@vnu.edu.vn\n\n**Giờ làm việc:**\n• T2-T6: 8:00 - 17:00\n• Nghỉ trưa: 12:00 - 13:30',

    sukien: '🎉 **Sự Kiện Sắp Tới**\n\n• **15-17/03**: Hackathon 2026\n• **20/03**: Hội thảo Khoa học SV\n• **01/04**: Ngày hội Việc làm\n• **15/04**: Tech Talk: AI in 2026',

    thucTap: '💼 **Chương Trình Thực Tập**\n\n**Đối tác:**\n• Microsoft, Google, FPT, Viettel\n\n**Điều kiện:**\n• Sinh viên năm 3, 4\n• GPA ≥ 2.5\n\n**Quyền lợi:**\n• Lương thực tập 5-15tr/tháng\n• Cơ hội việc làm sau TN',

    fallback: [
        'Xin lỗi, tôi chưa hiểu câu hỏi. Bạn có thể hỏi về:\n• 📅 Lịch thi\n• 🎓 Học bổng\n• 📋 Tuyển sinh\n• 📚 Đào tạo',
        'Tôi có thể giúp bạn về lịch thi, học bổng, tuyển sinh, hoặc các thông tin khác về Khoa CNTT!',
        'Hmm, để tôi gợi ý: thử hỏi về lịch thi, học bổng, hoặc thông tin tuyển sinh nhé!'
    ]
};

// DOM Elements
let chatbotToggle, chatbotWindow, chatbotClose, chatbotForm, chatbotInput, chatbotMessages, chatbotSuggestions;

document.addEventListener('DOMContentLoaded', function () {
    chatbotToggle = document.getElementById('chatbotToggle');
    chatbotWindow = document.getElementById('chatbotWindow');
    chatbotClose = document.getElementById('chatbotClose');
    chatbotForm = document.getElementById('chatbotForm');
    chatbotInput = document.getElementById('chatbotInput');
    chatbotMessages = document.getElementById('chatbotMessages');
    chatbotSuggestions = document.getElementById('chatbotSuggestions');

    if (!chatbotToggle) return;

    chatbotToggle.addEventListener('click', toggleChatbot);
    chatbotClose?.addEventListener('click', toggleChatbot);
    chatbotForm?.addEventListener('submit', handleChatSubmit);

    if (chatbotSuggestions) {
        chatbotSuggestions.addEventListener('click', (e) => {
            if (e.target.classList.contains('suggestion-btn')) sendMessage(e.target.dataset.message);
        });
    }
});

function toggleChatbot() {
    chatbotWindow.classList.toggle('active');
    if (chatbotWindow.classList.contains('active')) chatbotInput?.focus();
}

function handleChatSubmit(e) {
    e.preventDefault();
    const message = chatbotInput.value.trim();
    if (message) { sendMessage(message); chatbotInput.value = ''; }
}

function sendMessage(message) {
    addMessage(message, 'user');
    showTypingIndicator();
    setTimeout(() => {
        hideTypingIndicator();
        const response = getBotResponse(message);
        addMessage(response, 'bot');
        updateSuggestions(message);
    }, 600 + Math.random() * 600);
}

function addMessage(content, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${type}`;
    messageDiv.innerHTML = `<div class="message-content">${formatMessage(content)}</div>`;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function formatMessage(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
}

function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'chat-message bot typing-message';
    indicator.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';
    chatbotMessages.appendChild(indicator);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function hideTypingIndicator() {
    const typingMessage = chatbotMessages.querySelector('.typing-message');
    if (typingMessage) typingMessage.remove();
}

function getBotResponse(input) {
    const message = input.toLowerCase();

    if (containsAny(message, ['xin chào', 'hello', 'hi', 'chào'])) return getRandomItem(chatbotKnowledge.greetings);
    if (containsAny(message, ['lịch thi', 'lich thi', 'thi', 'kỳ thi'])) return chatbotKnowledge.lichThi;
    if (containsAny(message, ['học bổng', 'hoc bong', 'scholarship'])) return chatbotKnowledge.hocBong;
    if (containsAny(message, ['tuyển sinh', 'tuyen sinh', 'đăng ký', 'nhập học'])) return chatbotKnowledge.tuyenSinh;
    if (containsAny(message, ['đào tạo', 'dao tao', 'chương trình', 'ngành'])) return chatbotKnowledge.daoTao;
    if (containsAny(message, ['liên hệ', 'lien he', 'địa chỉ', 'điện thoại', 'email'])) return chatbotKnowledge.lienHe;
    if (containsAny(message, ['sự kiện', 'su kien', 'event', 'hackathon'])) return chatbotKnowledge.sukien;
    if (containsAny(message, ['thực tập', 'thuc tap', 'internship', 'việc làm'])) return chatbotKnowledge.thucTap;
    if (containsAny(message, ['cảm ơn', 'thank'])) return 'Không có gì! 😊 Chúc bạn học tập tốt!';

    return getRandomItem(chatbotKnowledge.fallback);
}

function updateSuggestions(lastMessage) {
    if (!chatbotSuggestions) return;

    const message = lastMessage.toLowerCase();
    let suggestions = [];

    if (containsAny(message, ['thi', 'lịch'])) {
        suggestions = [
            { text: '🎓 Học bổng', msg: 'Thông tin học bổng' },
            { text: '📚 Đào tạo', msg: 'Chương trình đào tạo' }
        ];
    } else if (containsAny(message, ['học bổng'])) {
        suggestions = [
            { text: '📋 Tuyển sinh', msg: 'Thông tin tuyển sinh' },
            { text: '💼 Thực tập', msg: 'Chương trình thực tập' }
        ];
    } else {
        suggestions = [
            { text: '📅 Lịch thi', msg: 'Lịch thi học kỳ' },
            { text: '🎓 Học bổng', msg: 'Thông tin học bổng' },
            { text: '📞 Liên hệ', msg: 'Liên hệ khoa' }
        ];
    }

    chatbotSuggestions.innerHTML = suggestions.map(s =>
        `<button class="suggestion-btn" data-message="${s.msg}">${s.text}</button>`
    ).join('');
}

function containsAny(text, keywords) {
    return keywords.some(keyword => text.includes(keyword));
}

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}
