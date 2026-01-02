class AudiobookCalculator {
    constructor() {
        this.PAGES_PER_HOUR = 30;
        this.STORAGE_KEY = 'audiobook_history';
        this.currentResultA = null;
        this.currentResultB = null;
        this.currentResultC = null;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setDefaultDates();
        this.loadHistory();
    }

    setupEventListeners() {
        // Method A form
        document.getElementById('method-a-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.calculateMethodA();
        });

        // Method B form
        document.getElementById('method-b-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.calculateMethodB();
        });

        // Method C form
        document.getElementById('method-c-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.calculateMethodC();
        });

        // Save buttons
        document.getElementById('save-a').addEventListener('click', () => {
            this.saveEntry('A');
        });

        document.getElementById('save-b').addEventListener('click', () => {
            this.saveEntry('B');
        });

        document.getElementById('save-c').addEventListener('click', () => {
            this.saveEntry('C');
        });

        // Clear history button
        document.getElementById('clear-history').addEventListener('click', () => {
            this.clearHistory();
        });
    }

    setDefaultDates() {
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('date-a').value = today;
        document.getElementById('date-b').value = today;
        document.getElementById('date-c').value = today;
    }

    calculateMethodA() {
        const totalPages = parseFloat(document.getElementById('total-pages').value) || 0;
        const percentage = parseFloat(document.getElementById('percentage-a').value) || 0;
        const bookTitle = document.getElementById('book-title-a').value.trim();
        const date = document.getElementById('date-a').value;

        // Calculate pages: totalPages * (percentage / 100)
        const pages = Math.round(totalPages * (percentage / 100));

        // Store result for saving
        this.currentResultA = {
            method: 'A',
            bookTitle: bookTitle || 'Untitled Book',
            totalPages: totalPages,
            percentage: percentage,
            pages: pages,
            date: date
        };

        // Display result
        this.displayResult('A', pages);
    }

    calculateMethodB() {
        const hours = parseFloat(document.getElementById('hours').value) || 0;
        const minutes = parseFloat(document.getElementById('minutes').value) || 0;
        const speed = parseFloat(document.getElementById('speed-b').value);
        const bookTitle = document.getElementById('book-title-b').value.trim();
        const date = document.getElementById('date-b').value;

        // Convert to total hours
        const totalHours = hours + (minutes / 60);
        
        // Calculate pages: totalHours * speed * PAGES_PER_HOUR
        const pages = Math.round(totalHours * speed * this.PAGES_PER_HOUR);

        // Store result for saving
        this.currentResultB = {
            method: 'B',
            bookTitle: bookTitle || 'Untitled Book',
            listeningTime: totalHours,
            speed: speed,
            pages: pages,
            date: date,
            displayTime: this.formatTime(totalHours)
        };

        // Display result
        this.displayResult('B', pages);
    }

    calculateMethodC() {
        const totalHours = parseFloat(document.getElementById('total-hours').value) || 0;
        const totalMinutes = parseFloat(document.getElementById('total-minutes').value) || 0;
        const percentage = parseFloat(document.getElementById('percentage-c').value) || 0;
        const speed = parseFloat(document.getElementById('speed-c').value);
        const bookTitle = document.getElementById('book-title-c').value.trim();
        const date = document.getElementById('date-c').value;

        // Convert to total hours
        const totalBookHours = totalHours + (totalMinutes / 60);
        
        // Calculate listened hours: totalBookHours * (percentage / 100)
        const listenedHours = totalBookHours * (percentage / 100);
        
        // Calculate pages: listenedHours * speed * PAGES_PER_HOUR
        const pages = Math.round(listenedHours * speed * this.PAGES_PER_HOUR);

        // Store result for saving
        this.currentResultC = {
            method: 'C',
            bookTitle: bookTitle || 'Untitled Book',
            totalLength: totalBookHours,
            percentage: percentage,
            listenedTime: listenedHours,
            speed: speed,
            pages: pages,
            date: date,
            displayTime: this.formatTime(listenedHours),
            displayTotalTime: this.formatTime(totalBookHours)
        };

        // Display result
        this.displayResult('C', pages);
    }

    displayResult(method, pages) {
        const resultDiv = document.getElementById(`result-${method.toLowerCase()}`);
        const pagesSpan = document.getElementById(`pages-${method.toLowerCase()}`);
        
        pagesSpan.textContent = pages.toLocaleString();
        resultDiv.style.display = 'block';
        
        // Smooth scroll to result
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    saveEntry(method) {
        let result;
        if (method === 'A') {
            result = this.currentResultA;
        } else if (method === 'B') {
            result = this.currentResultB;
        } else if (method === 'C') {
            result = this.currentResultC;
        }
        
        if (!result) {
            alert('Please calculate pages first before saving.');
            return;
        }

        // Add unique ID and timestamp
        const entry = {
            ...result,
            id: Date.now(),
            timestamp: new Date().toISOString()
        };

        // Get existing history
        let history = this.getHistory();
        
        // Add new entry
        history.unshift(entry);
        
        // Keep only last 100 entries to prevent storage bloat
        if (history.length > 100) {
            history = history.slice(0, 100);
        }
        
        // Save to localStorage
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(history));
        
        // Refresh display
        this.loadHistory();
        
        // Show success message
        this.showSuccessMessage('Entry saved successfully!');
    }

    getHistory() {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    }

    loadHistory() {
        const history = this.getHistory();
        const historyList = document.getElementById('history-list');
        
        if (history.length === 0) {
            historyList.innerHTML = '<p class="no-entries">No saved entries yet</p>';
            return;
        }

        const historyHTML = history.map(entry => this.createHistoryItemHTML(entry)).join('');
        historyList.innerHTML = historyHTML;

        // Add delete event listeners
        history.forEach(entry => {
            const deleteBtn = document.getElementById(`delete-${entry.id}`);
            if (deleteBtn) {
                deleteBtn.addEventListener('click', () => {
                    this.deleteEntry(entry.id);
                });
            }
        });
    }

    createHistoryItemHTML(entry) {
        let details;
        if (entry.method === 'A') {
            details = `${entry.percentage}% of ${entry.totalPages} pages`;
        } else if (entry.method === 'B') {
            details = `Time: ${entry.displayTime} | Speed: ${entry.speed}x`;
        } else if (entry.method === 'C') {
            details = `Progress: ${entry.percentage}% of ${entry.displayTotalTime} | Speed: ${entry.speed}x`;
        }

        return `
            <div class="history-item">
                <button class="delete-btn" id="delete-${entry.id}">Delete</button>
                <h4>${entry.bookTitle}</h4>
                <div class="pages">📖 ${entry.pages.toLocaleString()} pages</div>
                <div class="details">
                    <div class="detail">${details}</div>
                    <div class="detail">Date: ${entry.date}</div>
                    <div class="detail">Method ${entry.method}</div>
                </div>
            </div>
        `;
    }

    deleteEntry(id) {
        if (!confirm('Are you sure you want to delete this entry?')) {
            return;
        }

        let history = this.getHistory();
        history = history.filter(entry => entry.id !== id);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(history));
        this.loadHistory();
        this.showSuccessMessage('Entry deleted successfully!');
    }

    clearHistory() {
        if (!confirm('Are you sure you want to clear all history? This action cannot be undone.')) {
            return;
        }

        localStorage.removeItem(this.STORAGE_KEY);
        this.loadHistory();
        this.showSuccessMessage('All history cleared successfully!');
    }

    formatTime(hours) {
        const wholeHours = Math.floor(hours);
        const minutes = Math.round((hours - wholeHours) * 60);
        
        if (wholeHours === 0) {
            return `${minutes}min`;
        } else if (minutes === 0) {
            return `${wholeHours}h`;
        } else {
            return `${wholeHours}h ${minutes}min`;
        }
    }

    showSuccessMessage(message) {
        // Create a temporary success message
        const messageDiv = document.createElement('div');
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        messageDiv.textContent = message;
        
        document.body.appendChild(messageDiv);
        
        // Remove after 3 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }
}

// Initialize the calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AudiobookCalculator();
});

// Add slide-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);