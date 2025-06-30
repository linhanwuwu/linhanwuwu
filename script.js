document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const body = document.body;

    langToggle.addEventListener('click', () => {
        if (body.lang === 'zh-CN') {
            body.lang = 'en';
            langToggle.textContent = 'Switch to Chinese';
            document.querySelectorAll('[data-translate]').forEach(element => {
                element.textContent = element.dataset.translate;
            });
        } else {
            body.lang = 'zh-CN';
            langToggle.textContent = '切换语言';
            document.querySelectorAll('[data-translate]').forEach(element => {
                element.textContent = element.dataset.translateZh;
            });
        }
    });
});
