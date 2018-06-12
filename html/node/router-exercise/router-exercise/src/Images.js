import React, {Component} from 'react'
//fix this!!
function Images(props){
	// Map through images
	console.log(props);
	const image = this.props.map((aImage, index)=>{
		return(
			<Images imag={aImage} />
		)
	})
}

export default Images