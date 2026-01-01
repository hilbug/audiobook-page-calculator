# 📚 Audiobook Page Calculator

A simple web application that converts audiobook listening time into equivalent page counts. Perfect for readers who want to track their reading progress across both physical books and audiobooks.

## ✨ Features

- **Three Calculation Methods**:
  - **Method A** (Recommended): Enter total book pages + percentage completed → get equivalent pages
  - **Method B**: Enter listening time + speed → get equivalent pages
  - **Method C**: Enter total audiobook length + percentage completed + speed → get equivalent pages
- **Local Storage**: Save your reading history locally in your browser
- **History Management**: View, delete individual entries, or clear all history
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Speed Support**: Supports listening speeds from 0.5x to 3x
- **Date Tracking**: Add dates to your reading entries
- **Modern UI**: Beautiful gradient design with smooth animations

## 🧮 How It Works

The calculator offers three different methods to convert your audiobook listening into equivalent page counts:

### Method A - Book Pages & Progress (Recommended)
```
Pages = Total Book Pages × (Percentage Completed / 100)
```

Example: 300-page book, 50% completed = 150 pages

*This method uses the actual page count from your physical book edition and calculates based on your listening progress.*

### Method B - Time & Speed
```
Pages = (Hours + Minutes/60) × Speed × 50
```

Example: 2 hours at 1x speed = 100 pages

*This method uses a standard conversion rate of 1 hour = 50 pages at 1x speed.*

### Method C - Total Length & Progress
```
Pages = (Total Length × Percentage/100) × Speed × 50
```

Example: 4 hour book, 50% completed at 1x speed = 100 pages

*This method calculates based on the total audiobook length and your progress percentage.*

## 🚀 How to Use

1. **Choose your calculation method**:
   - **Method A** (Recommended): Use when you know the physical book's page count
   - **Method B**: Use when you know your exact listening time
   - **Method C**: Use when you know the total audiobook length

2. **Enter your audiobook details**:
   - Book title (optional)
   - Required information based on chosen method
   - Listening speed (for Methods B & C)
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
- **Development Tool**: Created using [Windsurf IDE](https://windsurf.com/) for efficient development workflow

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
