# MonolithCV
A no‑fuss desktop app that turns your CV into a single, perfectly fitted A4 page. Edit live, drag sections, pick templates – all offline, all local.

# MonolithCV

**MonolithCV** is a simple, offline‑first desktop app (built with Electron) that helps you create a professional CV that **always fits on one A4 page**. No sign‑up, no cloud – just you and your data.

## What it does

- **Live A4 preview** – see exactly how your CV will look when printed.
- **Auto‑fit** – font sizes, spacing and margins adjust automatically to squeeze everything onto one sheet.
- **Drag & drop sections** – reorder content by dragging directly on the preview.
- **6 templates** – Minimalist, Compact, Modern, Classic, Tech, Creative.
- **Profile photo** – upload, pan, zoom, choose shape (square / rounded / circle).
- **Two‑column layout** – switch sidebar on/off.
- **Dark mode** – easy on the eyes.
- **Bilingual UI** – English / Spanish.
- **Export to PDF** – via your browser's print dialog.
- **100% local** – everything stays in your browser's local storage.

## Current limitations

> **The recent projects panel on the right side of the main menu is not functional yet.**  
> For now, saving and loading projects works like this:
> - **Save a project** → go to the **Data** tab inside the editor and click **Export Backup** (you'll get a `.json` file).
> - **Load a project** → in the main menu, click **Import** and select a previously exported `.json` file.  
>   Or, inside the editor, go to **Data** → **Import Backup**.

We plan to fix the recent projects panel in a future update.

## AI assistance

Parts of this code (drag‑and‑drop logic, auto‑fit algorithm, local storage handling) were written or improved with the help of an AI assistant. The design and core features were directed by a human.

## Quick start

```bash
git clone https://github.com/yourusername/monolithcv.git
cd monolithcv
npm install
npm start
