const addNumbers = async (num1, num2) => {
    const reponse = await fetch (`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/AddingTwoNumbers/AddNumbers/${num1}/${num2}`);
    const data = await reponse.text();
    console.log('addNumbers:', data)
    return data;
}

const askQuestions = async (userName, time) => {
    const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/AskingQuestions/AskQuestions/${userName}/${time}`);
    const data = response.text();
    console.log('askquestions:', data);
    return data;
}

const compareNumbers = async (num1, num2) => {
    const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/GreaterOrLess/GreaterOrLess/${num1}/${num2}`);
    const data = response.text();
    console.log(data);
    return data;
}

const greet = async (userName) => {
    const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/HelloWorld/Hello/${userName}`);
    const data = response.text();
    console.log(data);
    return data;
}

const generateStory = async ( victimName,  animal,  taskName,  item,  rivalName,  specialMoveName,  animalCount,  number,  adjective,  unitofDistance) => {
    const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/MadLib/GenerateStory/${victimName}/${animal}/${taskName}/${item}/${rivalName}/${specialMoveName}/${animalCount}/${number}/${adjective}/${unitofDistance}`);
    const data = await response.text();
    console.log(data);
    return data;
}

const ask8Ball = async (userName) => {
    const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/Magic8Ball/Ask8Ball/${userName}`);
    const data = await response.text();
    console.log(data);
    return data;
}

const checkNumber = async (userName) => {
    const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/OddOrEven/OddOrEven/${userName}`);
    const data = await response.text();
    console.log(data);
    return data;
}

const getRestaurant = async (inputString) => {
    const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/RestaurantPicker/PickRestaurant/${inputString}`);
    const data = await response.text();
    console.log(data);
    return data;
}

const getReverseAlphanumeric = async (inputString) => {
    const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/ReverseItAlphaNumeric/ReverseItAlphaNumeric/${inputString}`);
    const data = await response.text();
    console.log(data);
    return data;
}

const getReverseNumber = async (inputString) => {
    const response = await fetch(`https://monterrosadpallforone-dufhdwezgjekeafj.westus-01.azurewebsites.net/ReverseItNumbers/ReverseItNumbers/${inputString}`);
    const data = await response.text();
    console.log(data);
    return data;
}

export { addNumbers, askQuestions, compareNumbers, greet, generateStory, ask8Ball, checkNumber, getRestaurant, getReverseAlphanumeric, getReverseNumber }