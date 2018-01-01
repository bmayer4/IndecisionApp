
const isAdult = (num) => {
    return (num >= 18) 
};


const canDrink = (num) => {  //you could also use export const canDrink etx, but don't export below then
    return (num >= 21) 
};

//default export, can only have 1
const isSenior = (num) => num >= 65;   //es6 syntx, return is implied and no curly braces

//or you could do
// export default isSenior; (can't put export default before const, but you can before class like when we're exporting components)

export { isAdult, canDrink, isSenior as default };