const addNumbers = async (num1, num2) => {
    try {
        const response = await fetch (`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/AddingTwoNumbers/AddNumbers/${num1}/${num2}`);
        if(!response.ok) {
            throw new Error("One or more input fields is blank or contains invalid input")
        }
        const data = await response.text();
        console.log('addNumbers:', data)
        return data;
    } catch (error) {
        console.error("Invalid Input", error)
        return "One or more input fields is blank or contains invalid input";
    }
}

const askQuestions = async (userName, time) => {
    try {
        const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/AskingQuestions/AskQuestions/${userName}/${time}`);
        if(!response.ok) {
            throw new Error("One or more input fields is blank or contains invalid input")
        }
        const data = response.text();
        console.log('askquestions:', data);
        return data;
    } catch (error) {
        console.error("Invalid Input", error)
        return "One or more input fields is blank or contains invalid input";
    }
}

const compareNumbers = async (num1, num2) => {
    try {
        const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/GreaterOrLess/GreaterOrLess/${num1}/${num2}`);
        if(!response.ok) {
            throw new Error("One or more input fields is blank or contains invalid input")
        }
        const data = response.text();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Invalid Input", error)
        return "One or more input fields is blank or contains invalid input";
    }
}

const greet = async (userName) => {
    try {
        const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/HelloWorld/Hello/${userName}`);
        if(!response.ok) {
            throw new Error("One or more input fields is blank or contains invalid input")
        }
        const data = response.text();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Invalid Input", error)
        return "One or more input fields is blank or contains invalid input";
    }
}

const generateStory = async ( victimName,  animal,  taskName,  item,  rivalName,  specialMoveName,  animalCount,  number,  adjective,  unitofDistance) => {
    try {
        const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/MadLib/GenerateStory/${victimName}/${animal}/${taskName}/${item}/${rivalName}/${specialMoveName}/${animalCount}/${number}/${adjective}/${unitofDistance}`);
        if(!response.ok) {
            throw new Error("One or more input fields is blank or contains invalid input")
        }
        const data = await response.text();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Invalid Input", error)
        return "One or more input fields is blank or contains invalid input";
    }
}

const ask8Ball = async (userName) => {
    try {
        const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/Magic8Ball/Ask8Ball/${userName}`);
        if(!response.ok) {
            throw new Error("One or more input fields is blank or contains invalid input")
        }
        const data = await response.text();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Invalid Input", error)
        return "One or more input fields is blank or contains invalid input";
    }
}

const checkNumber = async (numberInput) => {
    try {
        const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/OddOrEven/OddOrEven/${numberInput}`);
        if(!response.ok) {
            throw new Error("One or more input fields is blank or contains invalid input")
        }
        const data = await response.text();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Invalid Input", error)
        return "One or more input fields is blank or contains invalid input";
    }
}

const getRestaurant = async (inputString) => {
    try {
        const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/RestaurantPicker/PickRestaurant/${inputString}`);
        if(!response.ok) {
            throw new Error("One or more input fields is blank or contains invalid input")
        }
        const data = await response.text();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Invalid Input", error)
        return "One or more input fields is blank or contains invalid input";
    }
}

const getReverseAlphanumeric = async (inputString) => {
    try {
        const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/ReverseItAlphaNumeric/ReverseItAlphaNumeric/${inputString}`);
        if(!response.ok) {
            throw new Error("One or more input fields is blank or contains invalid input")
        }
        const data = await response.text();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Invalid Input", error)
        return "One or more input fields is blank or contains invalid input";
    }
}

const getReverseNumber = async (inputString) => {
    try {
        const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/ReverseItNumbers/ReverseItNumbers/${inputString}`);
        if(!response.ok) {
            throw new Error("One or more input fields is blank or contains invalid input")
        }
        const data = await response.text();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Invalid Input", error)
        return "One or more input fields is blank or contains invalid input";
    }
}

export { addNumbers, askQuestions, compareNumbers, greet, generateStory, ask8Ball, checkNumber, getRestaurant, getReverseAlphanumeric, getReverseNumber }