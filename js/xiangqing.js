var React=require("react")
var $=require("jquery")
var Xiangqing=React.createClass({
	getInitialState:function(){
		return {
			daa:null
		}
	},
	componentWillMount:function(){
		var _this=this
		$.ajax({
			url:"http://datainfo.duapp.com/shopdata/getGoods.php",
			dataType:"jsonp",
			data:{
				goodsID:this.props.xq
			},
			success:function(data){
				_this.setState({
					daa:data[0]
				})
				console.log(data[0]);
			}
		});
	},
	render:function(){
		//console.log(this.props.xq)
		console.log(this.state.daa);
		if(this.state.daa==null){
			return false;
		}else{
			var xxx=this.state.daa
		}
		
		return (
			<div>
				<div><img src={xxx[3]} /></div>
				<p>{xxx.detail}</p>
			</div>
			
		)
	}
})
module.exports=Xiangqing