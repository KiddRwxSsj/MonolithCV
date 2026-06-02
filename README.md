# MonolithCV

**MonolithCV** is a simple, offline-first desktop app built with Electron that helps you create a professional CV that always fits on one A4 page. No sign-up, no cloud — just you and your data.

## Features

- **Live A4 preview** — see exactly how your CV will look when printed.
- **Auto-fit** — font sizes, spacing, and margins adjust automatically to fit everything onto one page.
- **Drag & drop sections** — reorder content directly from the preview.
- **6 templates** — Minimalist, Compact, Modern, Classic, Tech, and Creative.
- **Profile photo** — upload, pan, zoom, and choose shape (square, rounded, or circle).
- **Two-column layout** — enable or disable the sidebar.
- **Dark mode**
- **Bilingual UI** — English and Spanish.
- **Export to PDF** — through the print dialog.
- **100% local** — everything stays in local storage.

## Current limitations

> **The recent projects panel on the right side of the main menu is not functional yet.**

For now, saving and loading projects works like this:

- **Save a project** → open the **Data** tab inside the editor and click **Export Backup** to generate a `.json` file.
- **Load a project** → click **Import** in the main menu and select a previously exported `.json` backup, or go to **Data → Import Backup** inside the editor.

This will be improved in a future update.

## Download

If you just want to use the app, download the latest Windows build from the **[Releases](https://github.com/KiddRwxSsj/MonolithCV/releases)** section.

## Run from source

If you want to run the project from source:

```bash
git clone https://github.com/KiddRwxSsj/MonolithCV.git
cd MonolithCV
npm install
npm start
```

## AI assistance

Some parts of the code, such as drag-and-drop behavior, auto-fit logic, and local storage handling, were written or improved with the help of an AI assistant. The design decisions and core product direction were human-led.
