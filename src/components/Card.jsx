import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Card(props) {
    var [state,setState] = React.useState(false);
    function changeState()
    {
        setState(true);
    }
  return (
    <div className="note" onClick={changeState}>
      <h1>1234 5678 9087</h1>
      {state && <div><p> CVV : </p><input type = "number"  size={3}></input></div>}
      {state && <button> Purchase </button>}
    </div>
  );
}

export default Card;
