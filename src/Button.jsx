// HOW TO STYLE REACT COMPONENTS WITH CSS
// --------------------------------------
// (not including external frameworks or preprocessors)

// 1. EXTERNAL
// 2. MODULES
// 3. INLINE

function Button() {

    const styles = {
        backgroundColor: "#03BCF6",
        color: "#FFFFFF",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return (
        <button style={styles}>
            Click me
        </button>
    );
}

export default Button;