// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({availableIngredients, setStack, addToBurger}) => {
    return (
<>
 <ul>
    {availableIngredients.map((ingredient, i) =>{
        return (
          <li key={i}
          style={{ backgroundColor: ingredient.color }}>
 
              {ingredient.name}
              <button onClick={() => addToBurger(ingredient)}> + </button>
          </li>
        );
    })}
 </ul>
</>
   
  )
};

export default IngredientList;
