var React=require("react")
var headercss={
	header:{
		width: '100%',
		height:"55px",
		background:"pink",
		textAlign:"center",
		lineHeight:"55px"
	}
	
}
var Header=React.createClass({
	render:function(){
		return(
			<div id="header" style={headercss.header}>
				header
			</div>
		)
	}
})
module.exports=Header