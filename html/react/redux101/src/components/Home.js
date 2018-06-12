import React, {Component} from 'react';
// We need some glue! This componenet needs to know about the store. Just because its inside the Provider, isnt enough. React-redux only exposes the store when it has to for performance.
// To accomplish this, we use the connect method from react-redux (the glue between React and Redux)
import { connect } from 'react-redux';

class Home extends Component{

	render(){
		return(
			<h1>{this.props.homeText}</h1>
		)
	}
}

// We have connect. Great. But we need a way to get the stuff in the store to map to the props of this Component.
// it takes one param, state
// mapStateToProps = Map Redux state to this component props
function mapStateToProps(state){
	// THE STATE PARAMETER IS THE ROOT REDUCER
	// this function will return an object, each property will be mapped to this componenets props, each value will be a peice of state, or a property of the rootreducer
	return {
		homeText: state.home
	}
}

// export default Home;
// inside of containers (a fancy term for a component that knows about Redux), we dont export the component. We export connect.
// Connect is a function and we pass that function mapStateToProps
// Connect RETURNS A FUNCTION, which expects the component
export default connect(mapStateToProps)(Home);