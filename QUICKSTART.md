# Quick Start Guide

## Get Started in 30 Seconds

### Step 1: Open the Editor
```bash
# Option A: Direct file open (easiest)
open index.html

# Option B: Local server (recommended)
python3 -m http.server 8080
# Then visit: http://localhost:8080
```

### Step 2: Choose Your Mode
- Click **HTML/CSS/JS** for vanilla web development
- Click **React (JSX)** for React components

### Step 3: Write Code
Type your code in the left panel (Monaco Editor)

### Step 4: Run
- Click **Run Code** button, or
- Press **Ctrl+Enter** (Cmd+Enter on Mac)

### Step 5: View Results
See your code execute in the right panel (Preview)

## Example: HTML/CSS/JS

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { 
            font-family: Arial; 
            padding: 20px; 
            background: #f0f0f0;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Hello, World!</h1>
    <button onclick="alert('Clicked!')">Click Me</button>
</body>
</html>
```

## Example: React (JSX)

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

## Security Features (Automatic)

The following are automatically disabled:
- ✅ Copy/Paste/Cut
- ✅ Right-click menu
- ✅ DevTools (F12, etc.)
- ✅ Code autocomplete
- ✅ Code suggestions

## Tips

1. **Save your work**: Copy code to a text file before closing
2. **Test frequently**: Click Run Code after each change
3. **Read errors**: Check the error panel at the bottom
4. **Use templates**: Start with the default templates provided
5. **Keep it simple**: Focus on logic over styling

## Troubleshooting

**Q: Code doesn't run?**
- Check the error panel
- Ensure you're in the correct mode
- For React: Make sure you call `ReactDOM.render()`

**Q: Can't paste code?**
- This is intentional for interview integrity
- Type your code manually

**Q: DevTools warning appears?**
- Close any open DevTools windows
- This is expected behavior

## Need Help?

Check the full [README.md](README.md) for detailed documentation.
