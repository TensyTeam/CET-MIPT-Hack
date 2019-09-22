import React from 'react';
import Plot from 'react-plotly.js';


class Chart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					x: JSON.parse(localStorage.getItem('CSV_x')),
					y: JSON.parse(localStorage.getItem('CSV_y')),
					z: JSON.parse(localStorage.getItem('CSV_z')),
					mode: 'markers',
					type: 'scatter3d',
					marker: {
						color: '#000',
						size: 5,
					},
				},
				{
					alphahull: 10,
					opacity: 0.8,
					color: '#dadada',
					type: 'mesh3d',
					x: JSON.parse(localStorage.getItem('CSV_x')),
					y: JSON.parse(localStorage.getItem('CSV_y')),
					z: JSON.parse(localStorage.getItem('CSV_z')),
				},
			],
			layout: {
				autosize: true,
				title: 'Схема',
				width: 788,
				height: 788,
				scene: {
					aspectratio: {
						x: 1,
						y: 1,
						z: 1,
					},
					camera: {
						center: {
							x: 0,
							y: 0,
							z: 0,
						},
						eye: {
							x: 1.25,
							y: 1.25,
							z: 1.25,
						},
						up: {
							x: 0,
							y: 0,
							z: 1,
						},
					},
					xaxis: {
						type: 'linear',
						zeroline: false,
					},
					yaxis: {
						type: 'linear',
						zeroline: false,
					},
					zaxis: {
						type: 'linear',
						zeroline: false,
					},
				},
			},
		};
	}

	// componentWillMount() {
		// JSON.parse(localStorage.getItem('CSV_x'));
		// JSON.parse(localStorage.getItem('CSV_y'));
		// JSON.parse(localStorage.getItem('CSV_z'));
	// }

	render() {
		const { data, layout } = this.state;
		return (
			<div>
				<Plot
					data={data}
					layout={layout}
				/>
			</div>
		);
	}
}

export default Chart;
