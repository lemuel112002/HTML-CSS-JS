// click event = An interaction when a user clicks on a specific element.
//               We can respond to clicks by passing
//               a callback to the onClick event handler.

function NewButton() {

    const handleClick = (e) => e.target.textContent = "OUCH!";

    return (
        <>
            <button onDoubleClick={(e) => handleClick(e)}>Click me</button>
        </>
    );
}

export default NewButton