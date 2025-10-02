# Copilot Instructions for vinberg88.github.io

## Project Overview
This is a simple static website project. The root contains:
- `index.html`: The main HTML file for the site.
- `avbrott.png`: An image asset used by the site.
- `README.md`: Minimal project description.

## Key Patterns & Conventions
- All site content is managed directly in `index.html`.
- Static assets (images, etc.) are placed in the project root.
- No build system, frameworks, or package managers are used.
- No JavaScript or CSS files are present; any styling or scripting should be inlined in `index.html`.
- The project is intended for direct deployment to GitHub Pages.

## Developer Workflows
- To update the site, edit `index.html` and commit changes to the `main` branch.
- To add images or other assets, place them in the root and reference them in `index.html`.
- No build or test commands are required; changes are live once pushed to GitHub.

## Examples
- To add a new image, copy it to the root and use `<img src="new-image.png">` in `index.html`.
- To update content, directly edit the HTML in `index.html`.

## Additional Notes
- Keep the project root clean and minimal.
- Do not introduce unnecessary dependencies or subfolders.
- Follow the existing style and structure in `index.html` for consistency.

---
If you are unsure about a workflow or convention, review `index.html` for examples or ask for clarification.
