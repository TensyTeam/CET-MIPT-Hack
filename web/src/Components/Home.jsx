import React from 'react';
import CsvParse from '@vtex/react-csv-parse';


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.handleData = this.handleData.bind(this);
	}

	handleData(data) {
		const { onRedirect } = this.props;
		const X = [];
		const Y = [];
		const Z = [];
		for (let m = 0; m < data.length; m += 1) {
			X.push(data[m].X);
			Y.push(data[m].Y);
			Z.push(data[m].Z);
		}
		localStorage.setItem('CSV_x', JSON.stringify(X));
		localStorage.setItem('CSV_y', JSON.stringify(Y));
		localStorage.setItem('CSV_z', JSON.stringify(Z));
		onRedirect('/chart');
	}

	render() {
		return (
			<div className="inputBtn">
				<CsvParse
					keys={['X', 'Y', 'Z']}
					onDataUploaded={this.handleData}
					onError={this.handleError}
					render={(onChange) => (
						<label className="btn btn-file" htmlFor="cover">
							<input type="file" id="cover" accept="file/csv" className="input-file" onChange={onChange} />
							<span>Upload CSV</span>
						</label>
					)}
				/>
			</div>
		);
	}
}

export default Home;
