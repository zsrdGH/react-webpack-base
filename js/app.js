var React=require("react")
var ReactDOM=require("react-dom")
var Header=require("./Header.js")
var Footer=require("./footer.js")
var Main=require("./main.js")
var boxcss={
	boxs:{width: '100%',
		height: '100%',
		display:"flex",
		flexFlow: 'column'
	},
	
	main:{
		width: '100%',
		flex:1,
		background:"#ccc",
		overflow:"auto"
	}
}
var Box=React.createClass({
	render:function(){
		return (
			<div id="boxs" style={boxcss.boxs}>
				<div id="header" style={boxcss.header}></div>
				<div id="main" style={boxcss.main}></div>
				<div id="footer"></div>
			</div>
		)
	}
})
ReactDOM.render(<Box/>,document.getElementById("box"))
ReactDOM.render(<Header/>,document.getElementById("header"))
ReactDOM.render(<Main/>,document.getElementById("main"))
ReactDOM.render(<Footer/>,document.getElementById("footer"))