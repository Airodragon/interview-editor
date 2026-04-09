# Interview Code Editor

A secure, web-based code editor designed specifically for technical interviews. This editor supports both vanilla HTML/CSS/JS and React (with JSX) while preventing common cheating methods like copy/paste, autocomplete, and DevTools access.

## Features

### Security Features (Interview Integrity)
- ✅ **Copy/Paste Disabled**: All clipboard operations (copy, cut, paste) are blocked
- ✅ **Right-Click Disabled**: Context menu access is prevented
- ✅ **DevTools Blocked**: F12, Ctrl+Shift+I/J/C, and other DevTools shortcuts are disabled
- ✅ **No Autocomplete**: All IntelliSense, code suggestions, and parameter hints are turned off
- ✅ **No Code Assistance**: Auto-closing brackets/quotes and code formatting disabled

### Code Execution
- **HTML/CSS/JS Mode**: Write and run vanilla web code with full HTML document support
- **React (JSX) Mode**: Write React components with JSX syntax, automatically transpiled with Babel
- **Sandboxed Preview**: Code runs in an isolated iframe for security
- **Error Display**: Compilation and runtime errors shown in a dedicated error panel

### User Interface
- **Split View**: Code editor on the left, live preview on the right
- **Mode Switcher**: Easy toggle between HTML/CSS/JS and React modes
- **Run Button**: Execute code with a click (or Ctrl+Enter)
- **Clear Button**: Reset to template with confirmation
- **Dark Theme**: Professional VS Code-like dark theme

## Getting Started

### Option 1: Open Directly in Browser
1. Simply open `index.html` in any modern web browser
2. No server or build process required!

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js
npx http-server

# Then open http://localhost:8000
```

## Usage

### HTML/CSS/JS Mode
1. Select "HTML/CSS/JS" mode (default)
2. Write your HTML, CSS, and JavaScript
3. Click "Run Code" or press Ctrl+Enter
4. View the result in the preview panel

Example:
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial; padding: 20px; }
        h1 { color: #333; }
    </style>
</head>
<body>
    <h1>Hello, World!</h1>
    <button onclick="alert('Clicked!')">Click Me</button>
</body>
</html>
```

### React (JSX) Mode
1. Select "React (JSX)" mode
2. Write your React component with JSX syntax
3. Click "Run Code" or press Ctrl+Enter
4. View the rendered component in the preview panel

Example:
```jsx
function App() {
    const [count, setCount] = React.useState(0);
    
    return (
        <div style={{ padding: '20px' }}>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## Example Files

Check the `examples/` folder for sample code:
- `html-example.html` - Interactive counter with styled UI
- `react-example.jsx` - Todo list application with React hooks

## Keyboard Shortcuts

- **Ctrl+Enter** (Cmd+Enter on Mac): Run code
- **Copy/Paste/Cut**: Disabled for interview integrity
- **F12, DevTools shortcuts**: Disabled for interview integrity

## Technical Details

### Dependencies (Loaded via CDN)
- **CodeMirror** v5.65.2 - Lightweight code editor
- **Babel Standalone** v7.23.5 - JSX transformation
- **React** v18.2.0 - React library
- **ReactDOM** v18.2.0 - React DOM rendering

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Security Implementation

#### Clipboard Blocking
```javascript
document.addEventListener('copy', (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
}, true);
```

#### DevTools Detection
- Keyboard shortcut blocking (F12, Ctrl+Shift+I, etc.)
- Window size monitoring to detect DevTools opening
- Warning messages displayed when violations detected

#### Editor Configuration
CodeMirror is configured for interview mode:
```javascript
{
    mode: 'htmlmixed', // or 'jsx' for React
    theme: 'monokai',
    lineNumbers: true,
    tabSize: 2,
    lineWrapping: true,
    autofocus: true
}
```

## Limitations

- **No NPM Packages**: Only libraries available via CDN can be used
- **No TypeScript**: Only JavaScript and JSX are supported
- **No Code Formatting**: Prettier/ESLint disabled to prevent assistance
- **Basic Error Messages**: Limited debugging information to maintain interview integrity

## Interview Best Practices

### For Interviewers
1. Share your screen to monitor the candidate
2. Explain the security restrictions before starting
3. Provide clear problem statements
4. Allow candidates to ask clarifying questions
5. Focus on problem-solving approach, not syntax perfection

### For Candidates
1. Read the problem statement carefully
2. Ask questions if requirements are unclear
3. Start with a simple solution, then optimize
4. Test your code with different inputs
5. Explain your thought process while coding

## Troubleshooting

### Code doesn't run
- Check the error panel at the bottom of the preview
- Ensure you're in the correct mode (HTML/CSS/JS vs React)
- For React: Make sure you're calling `ReactDOM.render()`

### "Clipboard operations are disabled" message
- This is expected behavior for interview integrity
- Type your code manually instead of pasting

### DevTools warning appears
- Close any open DevTools/Inspector windows
- The editor works best in a clean browser window

## Customization

To modify the editor for your needs, edit `index.html`:

- **Change themes**: Modify the `theme` property in Monaco editor config
- **Adjust security**: Comment out specific security event listeners
- **Add libraries**: Include additional CDN scripts in the `<head>` section
- **Modify templates**: Update the `templates` object with your default code

## License

This project is provided as-is for educational and interview purposes. Feel free to modify and use it according to your needs.

## Support

For issues or questions:
1. Check the browser console for detailed error messages
2. Ensure you're using a supported browser version
3. Try refreshing the page to reset the editor state

---

**Note**: This editor is designed for interview scenarios where code assistance should be minimal. For production development, use a full-featured IDE with all the helpful tools enabled!
