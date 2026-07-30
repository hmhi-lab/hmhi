(function () {
    const ITEMS_PER_PAGE = 6;

    function getCurrentPage() {
        const params = new URLSearchParams(window.location.search);
        const page = parseInt(params.get("page") || "1", 10);
        return Number.isFinite(page) && page > 0 ? page : 1;
    }

    function pageUrl(page) {
        return page === 1 ? "news.html" : `news.html?page=${page}`;
    }

    function renderNews(newsItems) {
        const posts = document.getElementById("news-posts");
        const pagination = document.getElementById("news-pagination");

        if (!posts || !pagination) return;

        const totalPages = Math.max(1, Math.ceil(newsItems.length / ITEMS_PER_PAGE));
        const currentPage = Math.min(getCurrentPage(), totalPages);
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const currentItems = newsItems.slice(start, start + ITEMS_PER_PAGE);

        
        let newsHtml = currentItems.map(item => `
            <article>
                <h3>${item.titleHtml}</h3>
                <p>${item.bodyHtml}</p>
                <p class="date">${item.date}</p>
            </article>
        `).join("");
        
        posts.innerHTML = newsHtml;

        const prev = currentPage === 1
            ? `<li><span class="button disabled">Prev</span></li>`
            : `<li><a href="${pageUrl(currentPage - 1)}" class="button">Prev</a></li>`;

        const pages = Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;
            const active = page === currentPage ? " active" : "";
            return `<li><a href="${pageUrl(page)}" class="page${active}">${page}</a></li>`;
        }).join("");

        const next = currentPage === totalPages
            ? `<li><span class="button disabled">Next</span></li>`
            : `<li><a href="${pageUrl(currentPage + 1)}" class="button">Next</a></li>`;

        pagination.innerHTML = prev + pages + next;
    }

    function showError() {
        const posts = document.getElementById("news-posts");
        const pagination = document.getElementById("news-pagination");
        if (!posts || !pagination) return;

        posts.innerHTML = "<p>News could not be loaded. Please try again later.</p>";
        pagination.innerHTML = "";
    }

    document.addEventListener("DOMContentLoaded", function () {
        fetch("data/news.json")
            .then(function (response) {
                if (!response.ok) throw new Error("Failed to load news");
                return response.json();
            })
            .then(renderNews)
            .catch(showError);
    });
})();
