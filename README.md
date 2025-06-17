# Calc app 

## ⚡️ To run 
```
npm i
npm run dev
```

## Overview
Very basic functionality with in the time restraints. If I had more time I’d have added: 
- the ability to carry on calculations after completing one
- clearing the numbers
- matched the design closer
- added more tests

## Approach 
1. I psudo coded the app first ([first commit](https://github.com/Jezfx/calc1/commit/f970d53589860606abeb7c9a66a676aab5632b2b))
2. Built the util [calculation](https://github.com/Jezfx/calc1/commit/3640b419edd13e963e0fad30747b84a4bd6988b4) which was the hardest bit to get right. 
3. Then a basic [MVP](https://github.com/Jezfx/calc1/commit/7cefdc4b8343bbb95fc7ea302e58307bfdba2e6d) 
4. Then pulled in tailwind styles

## AI usage 
I used AI for the tailwind styles after I’d built the MVP and also a tiny bit of auto complete for the calculation function, just as it ended up being a bit different to what I had in mind. 




## Psudo Code
Incase this is useful to chat over

```
// state

const calculation [1, +, 2]
updateCalulationValue = (value) => calculation + value // updateState
updateCalulationOperator = (operator) => calculation + operator

calculateCalculation = {

    let val1
    let operator
    let currentValue

    calcluate.reduce()
        if value isNumber
             val1 = value

        if value isOperator
            operator = value

            currentValue = currentValue operator val1


}


// render

<h1>calculation</h1>

<button onClick(updateCalulationValue(1))> 1 </button>
<button onClick(updateCalulationValue(2))> 2 </button>
<button updateCalulationOperator()> + </button>
<button calculateCalculation()> = </button>

```
