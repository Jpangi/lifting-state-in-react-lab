

const BurgerStack = ({stack, removeFromBurger}) => {
    

    
  return (
<>
 <ul>
    {stack.map((ingredient, i) =>{
        return(
     
            <li key={i}>
                {ingredient.name}
                <button onClick={() => removeFromBurger(ingredient.name)} >X</button>
            </li>

        )
    })}
 </ul>
</>
   
  )
  
  

};

export default BurgerStack;
