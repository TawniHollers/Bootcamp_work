// React compnenets are automatically passed 1 param. Props

const Counter = React.createClass({
	getInitialState: function(){
		return{
			score: 0
		}
	},

	losePoint: function(){
		// this.state.score--;
		// EVIL
		// BAD
		// DANGER
		if(this.state.score > 0){
			this.setState({
			score: this.state.score - 1
			})
		}
	},
	addPoint: function(){
		// this.state.score++; NO NO NO NO NO NO
		// DONT DO  THIS!!
		this.setState({
			score: this.state.score + 1
		})
	},
	render: function(){
		return(
			<div className="counter">
				{/* Red Button */}
				<button className="btn btn-danger" onClick={this.losePoint}>-</button>
				<div className="team-score">{this.state.score}</div>
				{/* Green Button */}
				<button className="btn btn-success" onClick={this.addPoint}>+</button>
			</div>
		)
	}
});

function Team(props){
	console.log(props)
	return(
		<div className={`team ${props.teamName}`}>
			<div className="team-name">
				<h3>{props.teamName}</h3>
			</div>
			<Counter />
		</div>
	)
}
// React is a bunch of legos. The legos are called components.
// A component is a fance name for a class-like UI thing.
// A component is REGULAR JAVASCRIPT UNTIL  you get inside
// the return... once inside, you are writing JSX
function Scoreboard(){
	console.log("SANITY CHECK. IS ROB LYING?")
	// Main is going to return a piece of JSX. EVERY
	// React component MUST return a single DOM element.
	return(
		<div className="scoreboard">
			<div className="header">
				<h1>Celtics vs Cavs - Game 3</h1>
			</div>
			<div className="teams">
				<Team teamName="Boston" />
				<Team teamName="Cleveland" />
			</div>
		</div>
	)
}

// the render method (inside ReactDOM) takes 2 arguments:
// 1. What.
// 2. Where
// React.createElement('h1', 'Sanity Check');
ReactDOM.render(
	// <h1>Sanity Check!</h1>,
	<Scoreboard />,
	document.getElementById('root')
);
