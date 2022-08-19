import './button.css';

export function Button(props) {

  let classes = "button ";
  classes += props.operation ? "operation" : "";
  classes += props.orange ? "orange" : "";
  return (
    <button className={classes}
      onClick={(e) => props.click && props.click(props.label) }>
      {props.label}
    </button>
  )
}