import React from 'react';
import FeedBack from './feedback';
import './popup.css';


function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* <p> */}
					{/* Edit <code>src/App.js</code> and save to reload.
        </p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
        </a> */}
			</header>
			<FeedBack
				// style={{ zIndex: '5', position: 'fixed', right: '50%!' }}
				position="right"
				// numberOfStars={5}
				headerText="Action Required"
				bodyText="Warning! Your computer is infected!"
				buttonText="Action Required"
				handleClose={() => console.log("handleclose")}
				handleSubmit={(data) =>
					fetch('https://formspree.io/moqjznjg', {
						headers: {
							Accept: 'application/json',
							'Content-Type': 'application/json'
						},
						method: 'POST', // or 'PUT'
						body: JSON.stringify(data),
					}).then((response) => {
						if (!response.ok) {
							return Promise.reject('Our servers are having issues! We couldn\'t send your feedback!');
						}
						response.json()
					}).then(() => {
						alert('Success!');
					}).catch((error) => {
						alert('Our servers are having issues! We couldn\'t send your feedback!', error);
					})
				}
				handleButtonClick={() => console.log("handleButtonClick")}
			/>
		</div>
	);
}

export default App;