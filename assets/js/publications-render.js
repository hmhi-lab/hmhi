(function () {
    function escapeHtml(value) {
        return String(value || "").replace(/[&<>"']/g, function (char) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }[char];
        });
    }

    function renderPublication(item) {
        const title = escapeHtml(item.title);
        const authors = escapeHtml(item.authors);
        const journal = escapeHtml(item.journal);
        const link = item.link ? escapeHtml(item.link) : "";
        const titleHtml = link
            ? `<a href="${link}" target="_blank" rel="noopener">${title}</a>`
            : title;

        return `
            <div class="pub-entry">
                <strong>${titleHtml}</strong><br />
                <em>${authors}</em>
                <span>${journal}</span>
            </div>
        `;
    }

    function groupByYear(publications) {
        return publications.reduce(function (groups, item) {
            const year = item.year || "Other";
            if (!groups[year]) groups[year] = [];
            groups[year].push(item);
            return groups;
        }, {});
    }

    function renderPublications(publications) {
        const container = document.getElementById("publications-list");
        if (!container) return;

        const groups = groupByYear(publications);
        const years = Object.keys(groups).sort(function (a, b) {
            return Number(b) - Number(a);
        });

        container.innerHTML = years.map(function (year) {
            return `<h3>${escapeHtml(year)}</h3>` + groups[year].map(renderPublication).join("");
        }).join("");
    }

    function showError() {
        const container = document.getElementById("publications-list");
        if (!container) return;
        container.innerHTML = '<p>Publications could not be loaded. Please try again later.</p>';
    }

    document.addEventListener("DOMContentLoaded", function () {
        fetch("data/publications.json")
            .then(function (response) {
                if (!response.ok) throw new Error("Failed to load publications");
                return response.json();
            })
            .then(renderPublications)
            .catch(showError);
    });
})();
