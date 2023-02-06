import React from 'react';

const Scroll = (props) => {
	return(
		<div style={{margin : '5px', padding : '5px', overflowY : 'scroll', border : '2px solid black', height : '500px', borderRadius : '20px', boxShadow : '2px 2px 5px black'}}>
			{props.children}
		</div>
	);
}

export default Scroll;