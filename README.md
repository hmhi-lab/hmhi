
# HMHI Lab Website

This repository contains the source code for the HMHI Lab website.  
🔗 Visit the site here: [https://hmhi-lab.github.io/hmhi/](https://hmhi-lab.github.io/hmhi/)

---

## 🛠️ How to Update the Website

🔗 Live site: [https://hmhi-lab.github.io/hmhi/](https://hmhi-lab.github.io/hmhi/)

> Note: If you're familiar with Git, it's recommended (but optional) to create a new branch and open a Pull Request (PR) instead of committing directly to `main`.  
> For small edits like text or member info updates, direct commits are also fine.

---

### Update Your Member Info (👤 [members.html](https://hmhi-lab.github.io/hmhi/members.html))

- Open `members.html`
- Search your name (Ctrl+F)
- Edit your info in the block below:

```html
<div class="col-3 col-12-small">
    <span class="image fit"><img src="images/members/<YOUR_IMAGE>.jpg" alt="<YOUR_NAME>" /></span>
</div>
<div class="col-9 col-12-small">
    <h3 class="member-name">
        <YOUR_NAME>
        <a href="https://<YOUR_WEBSITE>" class="icon solid fa-globe" title="Website"></a> 
        <a href="https://<GOOGLE_SCHOLAR_LINK>" title="Google Scholar"></a> 
        <a href="https://<LINKEDIN_LINK>" class="icon brands fa-linkedin" title="LinkedIn"></a> 
        <a href="https://<GITHUB_LINK>" class="icon brands fa-github" title="GitHub"></a> 
    </h3>
    <p><a href="mailto:<YOUR_EMAIL>"><YOUR_EMAIL></a></p>
    <p><REPLACE_DESCRIPTION></p>
</div>
```

---

### Update Publications (📚 [publications.html](https://hmhi-lab.github.io/hmhi/publications.html))

- Open `publications.html`
- Add or edit your publication entries
- Keep entries in reverse chronological order (latest on top)

---

### Update Research Projects (🔬 [research.html](https://hmhi-lab.github.io/hmhi/research.html))

- Open `research.html`
- Add or modify research `<article>` blocks. Example:

```html
<article>
    <a href="research_<TOPIC>.html" class="image"><img src="images/pic/<RESEARCH_IMAGE>.jpg" alt="" /></a>
    <h3><RESEARCH_TITLE></h3>
    <p><SHORT_DESCRIPTION></p>
    <ul class="actions">
        <li><a href="research_<TOPIC>.html" class="button">More</a></li>
    </ul>
</article>
```

- To link to a separate detail page, create a new file like `research_<TOPIC>.html` and link it. Or, if not needed, just use `#` in the code instead of `research_<TOPIC>.html`.

---

### Update News & Events (📰 [news.html](https://hmhi-lab.github.io/hmhi/news.html))

- Open `news.html`
- Add or edit news `<article>` blocks.

#### Without link:

```html
<article>
    <h3><NEWS_TITLE></h3>
    <p><NEWS_DESCRIPTION></p>
    <p class="date"><DATE></p>
</article>
```

#### With link:

```html
<article>
    <h3>
        <a href="https://<NEWS_LINK>" target="_blank" rel="noopener">
            <NEWS_TITLE>
            <span class="fas fa-link" style="margin-left: 8px;"></span>
        </a>
    </h3>
    <p><NEWS_DESCRIPTION></p>
    <p class="date"><DATE></p>
</article>
```

- Keep entries in reverse chronological order (latest on top)

---

## How to Commit & Push

After you edit and save files, **always commit with a clear and specific message**.  
Use the following commands:

```bash
git add .

git commit -m "Update member info"       # for member info updates
git commit -m "Update publications"       # for publications
git commit -m "Update research projects"  # for research section
git commit -m "Update news"               # for news section

git push
```

Please **describe what you changed** in your commit message.

---

Feel free to update other tabs and pages as needed!

You can edit the website files directly in this repository: https://github.com/hmhi-lab/hmhi

If you don’t have permission to edit the files, please contact Seongeun (seongeup@andrew.cmu.edu).