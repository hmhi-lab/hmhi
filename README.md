# HMHI Lab Website

This repository contains the source code for the HMHI Lab website.

Visit the site here: [http://hmhi-lab.net/](http://hmhi-lab.net/)

---

## How to Update the Website

Live site: [http://hmhi-lab.net/](http://hmhi-lab.net/)

> **Note:** If you're familiar with Git, it's recommended, but optional, to create a new branch and open a Pull Request (PR) instead of committing directly to `main`.
> For small edits like text or member info updates, direct commits are also fine.

---

### Update Your Member Info ([members.html](http://hmhi-lab.net/members.html))

1. Open `members.html`
2. Search your name with Ctrl+F
3. Edit your info in the block below:

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

### Update Publications ([publications.html](http://hmhi-lab.net/publications.html))

- Open `data/publications.json`
- Add or edit publication entries
- Keep entries in reverse chronological order, latest on top

The publications page is rendered from `data/publications.json`, so you do not need to edit publication entries directly in `publications.html`.

---

### Update Research Projects ([research.html](http://hmhi-lab.net/research.html))

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

- To link to a separate detail page, create a new file like `research_<TOPIC>.html` and link it.
  If not needed, use `#` instead of `research_<TOPIC>.html`.

---

### Update Sidebar Menu

- Open `assets/js/sidebar-render.js`
- Edit the shared menu or contact information there

The sidebar is rendered across the main pages from this shared JavaScript file, so you do not need to edit each HTML page separately.

---

### Update News & Events ([news.html](http://hmhi-lab.net/news.html))

News items are managed through JavaScript data files.
Do **not** edit the news articles directly in `news.html`.

To add or edit news:

1. Open `assets/js/news-data.js`
2. Add a new news item at the top of the `NEWS_ITEMS` list
3. Keep entries in reverse chronological order, latest on top

#### Without link

```javascript
{
    titleHtml: "NEWS_TITLE",
    bodyHtml: "NEWS_DESCRIPTION",
    date: "DATE"
},
```

#### With link in the title

```javascript
{
    titleHtml: `
        <a href="https://NEWS_LINK" target="_blank" rel="noopener">
            NEWS_TITLE
            <span class="fas fa-link" style="margin-left: 8px;"></span>
        </a>
    `,
    bodyHtml: "NEWS_DESCRIPTION",
    date: "DATE"
},
```

#### With links inside the description

```javascript
{
    titleHtml: "NEWS_TITLE",
    bodyHtml: `
        NEWS_DESCRIPTION with
        <a href="https://LINK_URL" target="_blank" rel="noopener">linked text</a>.
    `,
    date: "DATE"
},
```

The news page is automatically paginated by `assets/js/news-render.js`, so you only need to update `assets/js/news-data.js`.

To change how many news items appear per page, edit this line in `assets/js/news-render.js`:

```javascript
const ITEMS_PER_PAGE = 6;
```

---

## How to Commit and Push

After editing and saving files, **always commit with a clear and specific message**:

```bash
git add .

git commit -m "Update member info"       # for member info updates
git commit -m "Update publications"      # for publications
git commit -m "Update research projects" # for research section
git commit -m "Update news"              # for news section

git push
```

Please **describe what you changed** in your commit message.

---

Feel free to update other tabs and pages as needed.

You can edit the website files directly in this repository:
[https://github.com/hmhi-lab/hmhi](https://github.com/hmhi-lab/hmhi)

If you don’t have permission to edit the files, please contact **Seongeun** (seongeup@andrew.cmu.edu).
