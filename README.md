# Marc Zgheib — Design Engineer Portfolio

A dependency-free, one-page portfolio built from plain HTML, CSS and JavaScript.

## Files

- `index.html` — page structure and content
- `style.css` — visual design and responsive layout
- `script.js` — project cards, project modals and navigation
- `images/` — project imagery extracted from Marc's e-portfolio
- `Marc-Zgheib-CV.pdf` — current CV

## Publish for free with GitHub Pages

1. Create a GitHub repository.
2. Upload everything in this folder, including the `images/` folder and `Marc-Zgheib-CV.pdf`.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.
6. GitHub will give you a public URL for the portfolio.

If the repository is named `YOURUSERNAME.github.io`, the site can be served from the root GitHub Pages address.

## Updating projects

The six detailed projects are stored at the top of `script.js` in the `PROJECTS` array. Each project contains:

- title
- short tag
- project number
- image
- role
- tools
- description
- project/video links

To replace an image, put the new image in `images/` and change its `image` path in `script.js`.

## Content source

The portfolio content was adapted from Marc Zgheib's 2026 CV and electronic portfolio. The five detailed project descriptions are based on the electronic portfolio; the additional project list and education/experience information are based on the CV.


### Profile photo
Place your headshot at `images/marc-photo.jpg`. The About section displays it as a circular portrait. If the file is not present, the site falls back to the MZ monogram.
