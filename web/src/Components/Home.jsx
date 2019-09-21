import React from 'react';
import { Link } from 'react-router-dom';


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sample: 'Hi',
		};
	}

	render() {
		const { sample } = this.state;
		return (
			<div>
				{sample}
			</div>
		);
	}
}

export default Home;
