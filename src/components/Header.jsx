import React from "react";
import Highlighticon from "@material-ui/icons/Highlight"
function Header(){
    var [date,setDate] = React.useState("");
    React.useEffect(() => {
		// Runs only once
		var today = new Date();
        var options = {year: 'numeric', month: 'long', day: 'numeric' };
        setDate(today.toLocaleDateString("en-US", options));
	  }, []);
    return (
        <header><h1>
            Purchase Screen <Highlighticon/>
        </h1>
        <h1 className="date"> {date} </h1>
        </header>
    )
}

export default Header;