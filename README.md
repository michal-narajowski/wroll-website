# WROLL – Rolety i Żaluzje Wrocław

Strona internetowa dla WROLL. Wszystko na temat rolet, żaluzji, moskitier i okien we Wrocławiu.

Zbudowana żeby być szybka, dobrze pozycjonowana w Google i łatwa do edycji.

## Co tam jest

- Strona główna z informacjami o firmie
- Osobne strony dla każdego typu produktu (rolety materiałowe, żaluzje, moskitiery itd.)
- Formularz kontaktowy 
- Galeria zdjęć
- Sitemap i schema markup dla SEO
- Wygląd dostosowane do urządzeń mobilnych

## Technologia

- **Astro** – generator statycznych stron (szybki)
- **Tailwind CSS** – do stylizacji
- **GitHub Pages** – hosting (za darmo)

## Jak to uruchomić

### Pierwszy raz

```bash
git clone https://github.com/YOUR_USERNAME/wroll-astro.git
cd wroll-astro
npm install
```

### Pracować nad stronką

```bash
npm run dev
```

Otwórz przeglądarkę i wejdź na `http://localhost:4322`

Edytuj pliki w `src/` – zmiany zobaczysz od razu.

### Zbudować do wdrożenia

```bash
npm run build
```

Utworzy się folder `dist/` z gotową do wdrożenia stroną.

## Wdrażanie na GitHub Pages

### 1. Utwórz repo

Przejdź na https://github.com/new i utwórz repo `wroll-astro`.

### 2. Pushuj kod

```bash
git init
git add .
git commit -m "First commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/wroll-astro.git
git push -u origin main
```

### 3. Włącz Pages

W ustawieniach repo (`Settings` → `Pages`):
- Source: **Deploy from a branch**
- Branch: **main**

Po kilku minutach strona będzie live na: `https://YOUR_USERNAME.github.io/wroll-astro/`

Automatyczne deployowanie jest już skonfigurowane – każdy push na `main` wdrażana stronę.

## Jak to zmieniać

### Tekst na stronach

Znajdziesz je w `src/pages/`. Każdy `.astro` to jedna strona.

### Kolory

Edytuj `src/styles/globals.css` – tam są klasy Tailwind CSS.

### Logo i zdjęcia

Zamień pliki w `public/images/`.

### Formularz kontaktowy

Formularz na `/kontakt` wysyła dane do Netlify Forms. Żeby działał, musisz:
- Deployować na Netlify albo
- Zmienić na inny serwis (np. Formspree)

## Struktura plików

```
wroll-astro/
├── src/
│   ├── pages/           # Strony (routing automatycki)
│   ├── components/      # Komponenty (Header, Footer itd.)
│   ├── layouts/         # Szablon strony
│   └── styles/          # CSS
├── public/
│   └── images/          # Zdjęcia
├── .github/workflows/   # GitHub Actions (auto-deploy)
└── README.md (tutaj jesteś)
```

## Notatki

- Strona generuje się jako HTML statycznie – super szybka
- Formularz na "/kontakt" trzeba później podpiąć pod jakiś serwis
- SEO jest już skonfigurowany (sitemap, schema, meta tags)
- Responsive design – działa na wszystko (telefon, tablet, komputer)

## Licencja

MIT – możesz robić z tym co chcesz.

---

**Jakieś pytania czy problemy?** Sprawdź dokumentację Astro: https://docs.astro.build

