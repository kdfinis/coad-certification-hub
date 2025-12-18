# View Preview in Cursor Editor

## Quick Preview

1. **Open `preview.html`** in Cursor
   - Right-click `preview.html` → "Open Preview" (or `Cmd+Shift+V` / `Ctrl+Shift+V`)
   - This will show your localhost:8080 site embedded in Cursor's preview pane

2. **Or use Cursor's built-in browser:**
   - Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
   - Type "Simple Browser: Show"
   - Enter: `http://localhost:8080`

## Preview File

The `preview.html` file:
- ✅ Embeds your localhost:8080 site in an iframe
- ✅ Shows live status indicator
- ✅ Has refresh button
- ✅ Auto-detects if server is running

## Direct Access

Your site is running at:
- **URL:** http://localhost:8080
- **Status:** ✅ Running (if `npm run dev` is active)

## Tips

- **Split View:** Open `preview.html` and your code side-by-side
- **Auto-refresh:** The preview updates automatically when you save changes
- **Full Screen:** Click the preview pane's maximize button

---

**Note:** Make sure `npm run dev` is running in terminal for the preview to work!

