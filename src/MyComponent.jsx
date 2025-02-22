/* eslint-disable no-unused-vars */

// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//            When you want a component to "remember" some information,
//            but you don't want that information to trigger new renders.

//            1. Accessing/Interacting with DOM elements
//            2. Handling Focus, Animations, and Transitions
//            3. Managing Timers and Intervals

// React hook = Special function that allows functional components
//              to use React features without writing class components (React v16.8)
//              (useState, useEffect, useContext, useReducer, useCallback, and more...)

// useState() = A React hook that allows the creation of a stateful variale
//              AND a setter function to update its value in the  Virtual DOM.
//              [name, setName]

// onChange = event handler used primarily with form elements
//            ex. <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of the input changes

// updater function = A function passed as an argument to setState() usually
//                    ex. setYear(arrow function)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater functions

// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//               This component re-renders
//               This component mounts
//               The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})        // Runs after every re-render
// 2. useEffect(() => {}, [])   // Runs only on mount
// 3. useEffect(() => {}, [value]) // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM Manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, { useEffect, useState, useRef } from "react";

/* function MyComponent() {
    const [car, setCar] = useState({ year: 2024,
                                    make: "Toyota",
                                    model: "Camry",});

    function handleYearChange(event) {
        setCar(c => ({...c, year: event.target.value, }));
    }

    function handleMakeChange(event) {
        setCar(c => ({...c, make: event.target.value, }));
    }

    function handleModelChange(event) {
        setCar(c => ({...c, model: event.target.value, }));
    }

    return (
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" name="" id="" value={car.year} onChange={handleYearChange} /> <br />
            <input type="text" name="" id="" value={car.make} onChange={handleMakeChange} /> <br />
            <input type="text" name="" id="" value={car.model} onChange={handleModelChange} /> <br />
        </div>
    );
} */

/* function MyComponent() {
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood() {
        // setFoods(foods => [...foods, "Mango"]);
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value;
        setFoods(foods => [...foods, newFood]);
    }

    function handleRemoveFood(index) {
        // setFoods(foods => foods.filter(food => food !== "Orange"));
        const oldFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value;
        setFoods(foods => foods.filter(food => food !== oldFood));
    }

    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => <li key={index}>{food}</li>)}
            </ul>

            <input type="text" name="" id="foodInput" placeholder="Enter food name" />
            <p>Favorite foods: {foods.join(", ")}</p>
            <button onClick={handleAddFood}>Add Food</button>
            <button onClick={handleRemoveFood}>Remove Food</button>
        </div>
    );
} */

/* function MyComponent() {
    const [car, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(index) {
        setCars([...car, { year: carYear, make: carMake, model: carModel}]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index) {
        setCars(car => car.filter((car, i) => i !== index));
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    return (
        <div>
            <h2>Car List</h2>
            <ul>
                {car.map((car, index) => (
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        <span>{car.year}</span> - <span>{car.make}</span> - <span>{car.model}</span>
                    </li>
                ))}
            </ul>

            <input type="number" name="" id="" value={carYear} onChange={handleYearChange} />
            <input type="text" name="" id="" value={carMake} onChange={handleMakeChange}
                    placeholder="Enter car make"/>

            <input type="text" name="" id="" value={carModel} onChange={handleModelChange}
                    placeholder="Enter car model"/>
            
            <button onClick={handleAddCar}>Add Car</button>
            <button onClick={() => handleRemoveCar(car.length - 1)}>Remove Car</button>
        
        </div>
    );
} */

/* function MyComponent() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [color, count]);

    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    return (
        <>
            <p style={{ color: color }}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={changeColor}>Change Color</button>

        </>
    );
} */

/* function MyComponent() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </>
    );
} */

function MyComponent() {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "Yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2() {
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "Yellow";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3() {
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "Yellow";
    }

    return (
        <div>
            <button onClick={handleClick1}>Click me 1!</button>
            <input type="text" ref={inputRef1} />

            <button onClick={handleClick2}>Click me 2!</button>
            <input type="text" ref={inputRef2} />

            <button onClick={handleClick3}>Click me 3!</button>
            <input type="text" ref={inputRef3} />
        </div>
    );
}

export default MyComponent;
