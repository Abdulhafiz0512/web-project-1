import { useSelector, useDispatch } from 'react-redux';
import { resetBrands, resetColors, toggleColor, toggleBrand} from "../../store/headphonesSlice"
import style from "./sidebar.module.css";

const Sidebar = () => {
  const brands = useSelector(state => state.headphones.brands);
  const selectedBrands = useSelector(state => state.headphones.selectedBrands);
  const colors = useSelector(state => state.headphones.colors);
  const connects = useSelector(state=> state.headphones.connects);
  const selectedColors = useSelector(state => state.headphones.selectedColors);
  
  const dispatch = useDispatch();

  const handleColorClick = (colorName) => {
    dispatch(toggleColor(colorName));
   
  };

  const handleBrandChange = (brand) => {
    dispatch(toggleBrand(brand));
  };

  

  return (
    <aside className={style.sidebar}>
      <div className={style.underline}></div>
      <div className={style.filterSection}>
        <h2>BRAND</h2>
        <ul>
          {brands.map((brand) => (
            <li key={brand}>
              <label>
                <input
                 className={style.check}
                  type="checkbox"
                  value={brand}
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />{" "}
                {brand}
              </label>
            </li>
          ))}
        </ul>
       
      </div>
       <div className={style.filterSection}>
        <h2>CONNECTIVITY</h2>
        <ul>
          {connects.map((brand) => (
            <li key={brand}>
              <label>
                <input
                 className={style.check}
                  type="checkbox"
                  value={brand}
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />{" "}
                {brand}
              </label>
            </li>
          ))}
        </ul>
        

       </div>
      <div className={style.filterSection}>
        <h2>COLORS</h2>
        <ul className={style.colorFilter}>
          {colors.map((color) => (
            <li key={color} id={color}>
              <span
                className={style.colorCircle} 
                style={{ backgroundColor: color } }
                onClick={() => handleColorClick(color)}
              ></span>
            </li>
          ))}
        </ul>
        
      </div>
    </aside>
  );
};

export default Sidebar;
