#!/usr/bin/env python3
# File: scripts/generate_json.py

import os
import json
from bs4 import BeautifulSoup

# 경로 설정
INPUT_FILE = os.path.join(os.path.dirname(__file__), "..", "publications.html")
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "data")
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "publications.json")

os.makedirs(OUTPUT_DIR, exist_ok=True)

# 분류 함수
def classify(title, authors):
    tl = title.lower()
    al = authors.lower()
    cats = []
    if "p. liu" in al or "bridge" in tl:
        cats.append("bridge_inspection")
    if "j. lou" in al or "flooding" in tl:
        cats.append("flooding")
    if "heavy duty" in tl or any(x in authors for x in ["A. Biglari", "A. Jahan Biglari", "A. J. Biglari"]):
        cats.append("heavy_duty")
    if "manufacturing" in tl or "m. dong" in al:
        cats.append("manufacturing")
    if "nuclear" in tl or any(x in authors for x in ["J. Ding", "S. Park"]):
        cats.append("npp")
    return cats

# HTML 파싱
with open(INPUT_FILE, "r", encoding="utf-8") as f:
    soup = BeautifulSoup(f, "html.parser")

publications = []
year = None
section = soup.find("section")

for elem in section.children:
    if elem.name == "h3":
        year = elem.get_text(strip=True)
    elif elem.name == "div" and "pub-entry" in elem.get("class", []):
        a = elem.find("a", href=True)
        title = a.text.strip() if a else ""
        link = a["href"] if a else ""
        em = elem.find("em")
        authors = em.text.strip() if em else ""
        span = elem.find("span")
        journal = span.text.strip() if span else ""

        cats = classify(title, authors)

        publications.append({
            "title": title,
            "authors": authors,
            "journal": journal,
            "year": int(year) if year and year.isdigit() else None,
            "link": link,
            "tags": [],           # 추가 태그 로직 필요 시 여기에
            "categories": cats
        })

# JSON 저장
with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    json.dump(publications, f, ensure_ascii=False, indent=2)

print(f"Saved {len(publications)} entries with categories to {OUTPUT_FILE}")
