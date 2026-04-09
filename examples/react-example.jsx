// React Todo List Example
function TodoApp() {
    const [todos, setTodos] = React.useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a project', completed: false }
    ]);
    const [inputValue, setInputValue] = React.useState('');

    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos([
                ...todos,
                { id: Date.now(), text: inputValue, completed: false }
            ]);
            setInputValue('');
        }
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div style={{
            maxWidth: '600px',
            margin: '40px auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h1 style={{ color: '#333', marginBottom: '20px' }}>
                Todo List
            </h1>
            
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                    placeholder="Add a new todo..."
                    style={{
                        flex: 1,
                        padding: '10px',
                        fontSize: '14px',
                        border: '2px solid #ddd',
                        borderRadius: '4px'
                    }}
                />
                <button
                    onClick={addTodo}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#0e639c',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                >
                    Add
                </button>
            </div>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '12px',
                            marginBottom: '8px',
                            backgroundColor: '#f5f5f5',
                            borderRadius: '4px',
                            gap: '10px'
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            style={{ cursor: 'pointer' }}
                        />
                        <span style={{
                            flex: 1,
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? '#999' : '#333'
                        }}>
                            {todo.text}
                        </span>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            style={{
                                padding: '5px 10px',
                                backgroundColor: '#dc3545',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '12px'
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            <p style={{ marginTop: '20px', color: '#666', fontSize: '14px' }}>
                Total: {todos.length} | Completed: {todos.filter(t => t.completed).length}
            </p>
        </div>
    );
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
