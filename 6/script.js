// TODO: Set item in localStorage

localStorage.setItem("Pet:", "Dragon");

// TODO: Get item from localStorage

localStorage.getItem("Pet:")

// TODO: Remove item from localStorage

localStorage.removeItem("Pet:")

// TODO: Clear all items from localStorage

localStorage.clear() 


// TODO: Add an object to localStorage

const object = {
    color: "red"
}
localStorage.setItem("bg-color", JSON.stringify(object))

// TODO: Get an object from localStorage

JSON.parse(localStorage.getItem("bg-color"))

// TODO: Set item in sessionStorage

sessionStorage.setItem("Toast:", "Burnt")

// TODO: Get item from sessionStorage'

sessionStorage.getItem("Toast:")

// TODO: Remove item from sessionStorage

sessionStorage.removeItem("Toast:")

// TODO: Clear all items from sessionStorage

sessionStorage.clear()

// TODO: Add an object to sessionStorage

const object2 = {
    Milkshake: "Oreo",
    
}

sessionStorage.setItem("Beverage:", JSON.stringify(object2))

// TODO: Get an object from sessionStorage

JSON.parse(sessionStorage.getItem("Beverage:"))


