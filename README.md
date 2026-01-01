# 📚 Audiobook Page Calculator

A simple web application that converts audiobook listening time into equivalent page counts. Perfect for readers who want to track their reading progress across both physical books and audiobooks.

## ✨ Features

- **Two Calculation Methods**:
  - **Method A**: Enter listening time + speed → get equivalent pages
  - **Method B**: Enter total audiobook length + percentage completed + speed → get equivalent pages
- **Local Storage**: Save your reading history locally in your browser
- **History Management**: View, delete individual entries, or clear all history
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Speed Support**: Supports listening speeds from 0.5x to 3x
- **Date Tracking**: Add dates to your reading entries
- **Modern UI**: Beautiful gradient design with smooth animations

## 🧮 How It Works

**Conversion Rate**: 1 hour of listening time = 50 pages at 1x speed

### Method A - Time & Speed
```
Pages = (Hours + Minutes/60) × Speed × 50
```

Example: 2 hours at 1x speed = 100 pages

### Method B - Total Length & Progress
```
Pages = (Total Length × Percentage/100) × Speed × 50
```

Example: 4 hour book, 50% completed at 1x speed = 100 pages

## 🚀 How to Use

1. **Choose your calculation method** (A or B)
2. **Enter your audiobook details**:
   - Book title (optional)
   - Time information
   - Listening speed
   - Date
3. **Click "Calculate Pages"** to see your equivalent page count
4. **Save your entry** to track your reading history
5. **View your history** at the bottom of the page

## 📱 Mobile Support

The calculator is fully responsive and works great on mobile devices. The layout automatically adjusts for smaller screens, and local storage works in mobile browsers too.

## 💾 Data Storage

- **Location**: Data is stored locally in your browser's localStorage
- **Persistence**: Data persists between browser sessions
- **Limit**: Maximum 100 entries to prevent storage bloat
- **Warning**: Clearing browser history/cookies will delete all entries
- **Mobile**: Works on mobile browsers (but may not persist in incognito/private browsing)

## 🌐 Deployment

### GitHub Pages

1. **Upload files to GitHub repository**:
   ```
   audiobook-page-calculator/
   ├── index.html
   ├── style.css
   ├── script.js
   └── README.md
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll down to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: "main" (or your default branch)
   - Folder: "/ (root)"
   - Click "Save"

3. **Access your site**:
   - URL: `https://username.github.io/audiobook-page-calculator/`

### Alternative Hosting

The calculator works with any static hosting service:
- Netlify
- Vercel
- Firebase Hosting
- Any web server that can serve static files

## 🛠️ Technical Details

- **Technology**: Pure HTML5, CSS3, and vanilla JavaScript
- **No dependencies**: No build tools, frameworks, or external libraries required
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Responsive**: Mobile-first responsive design
- **Performance**: Lightweight and fast-loading

## 🎯 Use Cases

- **Reading Challenges**: Track pages for reading marathons or challenges
- **Progress Monitoring**: Monitor reading progress across different formats
- **Goal Setting**: Set and track reading goals that include audiobooks
- **Statistics**: Keep personal reading statistics and trends

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve the calculator!

---

**Happy reading! 📖**
