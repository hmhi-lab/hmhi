
# HMHI Lab Website

This repository contains the source code for the HMHI Lab website.  
🔗 Visit the site here: [https://hmhi-lab.github.io/hmhi/](https://hmhi-lab.github.io/hmhi/)

---

## 🛠️ How to Update the Website

🔗 Live site: [https://hmhi-lab.github.io/hmhi/](https://hmhi-lab.github.io/hmhi/)

---

### 1. Update Your Member Info (👤 [members.html](https://hmhi-lab.github.io/hmhi/members.html))

1. Open `members.html`
2. Search your name (Ctrl+F)
3. Edit the block that looks like this:

```html
<div class="col-9 col-12-small">
    <h3 class="member-name">
        Name
        <a href="website link" class="icon solid fa-globe" title="Website"></a> 
        <a href="scholar link" title="Google Scholar"></a> 
        <a href="linkedin link" class="icon brands fa-linkedin" title="LinkedIn"></a> 
        <a href="github link" class="icon brands fa-github" title="GitHub"></a> 
    </h3>
    <p><a href="mailto:your_email">your_email</a></p>
    <p>description</p>
</div>
```

4. Then run the following commands:

```bash
git add .
git commit -m "Update member info"
git push
```

---

### 2. Update Publications (📚 [publications.html](https://hmhi-lab.github.io/hmhi/publications.html))

- Open `publications.html`
- Add or edit your publication entries
- Keep entries in reverse chronological order (latest on top)

---

### 3. Update Research Projects (🔬 [research.html](https://hmhi-lab.github.io/hmhi/research.html))

- Open `research.html`
- Add or modify research `<article>` blocks. Example:

```html
<article>
    <a href="#" class="image"><img src="images/pic/your_image.jpg" alt="" /></a>
    <h3>Research Title</h3>
    <p>Short description here</p>
    <ul class="actions">
        <li><a href="research_detail.html" class="button">More</a></li>
    </ul>
</article>
```

- To link to a separate detail page, create a new file like `research_topic.html` and link it.

---

### 4. Update News & Events (📰 [news.html](https://hmhi-lab.github.io/hmhi/news.html))

- Open `news.html`
- Add or edit news `<article>` blocks.

#### 🔸 Without link:

```html
<article>
    <h3>Title</h3>
    <p>Description of the news or event.</p>
    <p class="date">Date</p>
</article>
```

#### 🔸 With link:

```html
<article>
    <h3>
        <a href="https://example.com" target="_blank" rel="noopener">
            Title
            <span class="fas fa-link" style="margin-left: 8px;"></span>
        </a>
    </h3>
    <p>Description of the news or event.</p>
    <p class="date">Date</p>
</article>
```

- Keep entries in reverse chronological order (latest on top)

---

Feel free to update other tabs and pages as needed!
