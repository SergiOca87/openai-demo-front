import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Controls from './components/Controls';
import Form from './components/Form';
import Display from './components/Display';
import Intro from './components/Intro';
import { Box } from '@chakra-ui/react';

function App() {
	const [text, setText] = useState(null);
	const [summarizedText, setSummarizedText] = useState(null);
	const [keywords, setKeywords] = useState(null);
	const [imageUrl, setImageUrl] = useState(null);

	return (
		<>
			<Intro />
			<Box maxWidth="750px" mx="auto">
				<Controls
					setText={setText}
					text={text}
					summarizedText={summarizedText}
					setImageUrl={setImageUrl}
					setKeywords={setKeywords}
					setSummarizedText={setSummarizedText}
				/>
				<Form setText={setText} text={text} />
				<Display
					text={text}
					imageUrl={imageUrl}
					summarizedText={summarizedText}
					keywords={keywords}
				/>
			</Box>
		</>
	);
}

export default App;
