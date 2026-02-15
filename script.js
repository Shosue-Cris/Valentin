window.onload = () => {
    document.body.classList.remove("container");
};

document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector(".wrapper");
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (openBtn && closeBtn && wrapper) {
        openBtn.addEventListener("click", () => {
            wrapper.classList.add("open");
            openBtn.style.display = "none";
            closeBtn.style.display = "inline-block";
            if (nextBtn) setTimeout(() => { nextBtn.style.display = 'inline-block'; }, 700);
        });

        closeBtn.addEventListener("click", () => {
            wrapper.classList.remove("open");
            closeBtn.style.display = "none";
            openBtn.style.display = "inline-block";
            if (nextBtn) nextBtn.style.display = 'none';
        });
    }

    // Editor: actualizar/restablecer texto de la carta
    const letterEl = document.querySelector('.letter');
    const editor = document.getElementById('editor');
    const updateBtn = document.getElementById('updateBtn');
    const resetBtn = document.getElementById('resetBtn');

    if (letterEl && editor && updateBtn && resetBtn) {
        const originalLetterHTML = letterEl.innerHTML;

        (function initEditor(){
            const paras = Array.from(letterEl.querySelectorAll('p')).map(p => p.innerText.trim());
            editor.value = paras.join('\n\n');
        })();

        function escapeHtml(str){
            return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }

        updateBtn.addEventListener('click', () => {
            const text = editor.value.trim();
            if(!text){
                letterEl.innerHTML = '<p class="letter__placeholder">(Carta vacía)</p>';
                return;
            }
            const parts = text.split(/\n+/).filter(Boolean);
            const html = parts.map(p => `<p>${escapeHtml(p)}</p>`).join('');
            letterEl.innerHTML = html;
        });

        resetBtn.addEventListener('click', () => {
            letterEl.innerHTML = originalLetterHTML;
            const paras = Array.from(letterEl.querySelectorAll('p')).map(p => p.innerText.trim());
            editor.value = paras.join('\n\n');
        });
    }

    // Navegar a la galería cuando se presione 'Siguiente'
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            window.location.href = 'gallery.html';
        });
    }

});
