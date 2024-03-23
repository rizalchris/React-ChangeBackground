const Button = (props) => {
	return (
		<div>
			<button onClick={props.clicked} style={props.style}>
				{props.name}
			</button>
		</div>
	)
}

export default Button
