function Input({ name, addToPlaceholder, placeholderValue }) {
    const handleChange = (event) => {
        addToPlaceholder(name, event.target.value);
    }

    return (
        <div className="inputfield">
            <h2>{`${name.slice(0, 1).toUpperCase()}${name.slice(1)}`}</h2>
            <input onChange={handleChange} value={placeholderValue} />
        </div>
    );
}

export default Input;
