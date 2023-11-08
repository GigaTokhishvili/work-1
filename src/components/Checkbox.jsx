import CheckboxCss from './component-styles/Checkbox.module.css';

function Checkbox({ labelName, filterVal, checked }) {
  return (
    <div className={CheckboxCss.checkboxDiv}>
        <input 
          type="checkbox" 
          id={labelName} 
          checked={checked} 
          onChange={(e) => filterVal(e.target.id, e.target.checked)} 
        />
        <label htmlFor={labelName} name={'filter'} >{labelName.toUpperCase()}</label>
    </div>
  )
}


export default Checkbox