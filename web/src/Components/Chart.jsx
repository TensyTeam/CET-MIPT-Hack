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
					opacity: 0.5,
					color: '#2ecc71',
					type: 'mesh3d',
					x: JSON.parse(localStorage.getItem('CSV_x')),
					y: JSON.parse(localStorage.getItem('CSV_y')),
					z: JSON.parse(localStorage.getItem('CSV_z')),
				},
				{
					alphahull: 12,
					opacity: 0.5,
					color: '#f1c40f',
					type: 'mesh3d',
					x: JSON.parse(localStorage.getItem('CSV_x_plus')),
					y: JSON.parse(localStorage.getItem('CSV_y_plus')),
					z: JSON.parse(localStorage.getItem('CSV_z_plus')),
				},
			],
			layout: {
				autosize: true,
				title: '',
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

	render() {
		const { data, layout } = this.state;
		return (
			<div className="module">
				<Plot
					data={data}
					layout={layout}
				/>
				<div className="value_block">
					<div className="gradient gradient_hot">
						Скважины №
						{JSON.parse(localStorage.getItem('similar')).map((item) => (
							<span key={item}>{`${item}, `}</span>
						))}
						 наиболее выгодны для добычи
					</div>
					<div className="gradient gradient_cold">
						Скважины № 
						{JSON.parse(localStorage.getItem('huevye')).map((item) => (
							<span key={item}>{`${item}, `}</span>
						))}
						 требуют дополнительных замеров
					</div>
				</div>
			</div>
		);
	}
}

export default Chart;
