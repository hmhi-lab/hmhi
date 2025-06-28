import json
import re

CATEGORY_COLOR_MAP = {
    "Bridge Inspection": "#845EF7",
    "Flooding": "#228BE6",
    "Heavy Duty": "#E8590C",
    "Manufacturing": "#D6336C",
    "Nuclear Operation": "#FF922B"
}

GOOGLE_SCHOLAR_HTML = """
            <p style="margin-top: 1.5em;">
              See the full list on <a href="https://scholar.google.com/citations?user=U43hPn8AAAAJ&hl=en" target="_blank" rel="noopener">Dr. Tang’s Google Scholar profile</a>.
            </p>
"""

def render_categories(categories, enable_categories=True):
    if not enable_categories or not categories:
        return ""
    return " " + " ".join(
        f'<span style="font-size: 0.75em; color: #fff; background: {CATEGORY_COLOR_MAP.get(cat, "#868e96")}; border-radius: 0.3em; padding: 0.2em 0.4em; margin-left: 0.3em;">{cat}</span>'
        for cat in categories
    )

def generate_publication_entries(publications, enable_categories=True):
    grouped = {}
    for pub in publications:
        grouped.setdefault(pub["year"], []).append(pub)

    sorted_years = sorted(grouped.keys(), reverse=True)
    sections = ""
    for year in sorted_years:
        section = f"            <h3>{year}</h3>\n"
        for pub in grouped[year]:
            categories_html = render_categories(pub.get("categories", []), enable_categories)
            section += f"""            <div class="pub-entry">
              <strong><a href="{pub['link']}" target="_blank">{pub['title']}</a></strong>{categories_html}<br />
              <em>{pub['authors']}</em>
              <span>{pub['journal']}</span>
            </div>\n"""
        sections += section
    return sections

def main(enable_categories=True):
    with open("../data/publications.json", "r", encoding="utf-8") as f:
        publications = json.load(f)

    with open("../template/template_publications.html", "r", encoding="utf-8") as f:
        template = f.read()

    pub_section = generate_publication_entries(publications, enable_categories) + GOOGLE_SCHOLAR_HTML

    updated_html = re.sub(
        r'(<section>\s*<header class="major">.*?</header>\s*)</section>',
        r'\1' + pub_section + r'</section>',
        template,
        flags=re.DOTALL
    )

    with open("../publications.html", "w", encoding="utf-8") as f:
        f.write(updated_html)

if __name__ == "__main__":
    main(enable_categories=False)
