var React=require("react")
var ReactDOM=require("react-dom")
var $=require("jquery")
var Xiangqing=require("./xiangqing.js")
var Main=React.createClass({
	getInitialState:function(){
		return {
			da:null
		}
	},
	componentWillMount:function(){
		var _this=this
		$.ajax({
			url:" http://datainfo.duapp.com/shopdata/getGoods.php",
			dataType:"jsonp",
			success:function(data){
				_this.setState({
					da:data
				})
				console.log(data)
			}
		});
	},
	xq:function(event){
		ReactDOM.unmountComponentAtNode(document.getElementById("main"))
		ReactDOM.render(<Xiangqing xq={event.target.getAttribute("id")}/>,document.getElementById("main"))
	},
	render:function(){
		var _data=this.state.da
		var arr=[]
		for(var i in this.state.da){
			arr.push(
				<div>
					<img onClick={this.xq} id={this.state.da[i].goodsID} src={this.state.da[i].goodsListImg} />
					<p>{this.state.da[i].goodsName}</p>
				</div>
			)
		}
		return(
			<div >
				{arr}
			</div>
		)
	}
})
module.exports=Main
