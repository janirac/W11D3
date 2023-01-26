import { useContext} from "react";
import { CoffeeContext } from "../context/CoffeeContext";

const SelectedCoffeeBean = (props) => {
  const {coffeeBean} = useContext(CoffeeContext)
  console.log(coffeeBean)

  return (
    <div className="selected-coffee">
    
    </div>
  )
}

export default SelectedCoffeeBean;