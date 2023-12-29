import React, { useRef, useState } from 'react';
import Button from './Button';
import ButtonComponent from './Button';
import { Stack } from '@chakra-ui/react';

function Controls({
	setText,
	text,
	summarizedText,
	setImageUrl,
	setKeywords,
	setSummarizedText,
}) {
	const [generateTextLoading, setGenerateTextLoading] = useState(false);
	const [summarizeTextLoading, setSummarizeTextLoading] = useState(false);
	const [generateKeywordsLoading, setGenerateKeywordsLoading] =
		useState(false);
	const [generateImageLoading, setGenerateImageLoading] = useState(false);

	const generateTextHandler = async () => {
		setGenerateTextLoading(true);

		try {
			const response = await fetch('https://openai-demo-app.onrender.com/openai/text', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const data = await response.json();

			setText(data.text.content);
		} catch (err) {
			console.log(err);
		} finally {
			setGenerateTextLoading(false);
		}
	};

	const summarizeTextHandler = async () => {
		setSummarizeTextLoading(true);

		try {
			const response = await fetch(
				'https://openai-demo-app.onrender.com/openai/summarize',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ text: text }),
				}
			);

			const data = await response.json();
			console.log(data);

			setSummarizedText(data.summarizedText.content);
		} catch (err) {
			console.log(err);
		} finally {
			setSummarizeTextLoading(false);
		}
	};

	const generateKeywordsHandler = async () => {
		setGenerateKeywordsLoading(true);

		try {
			const response = await fetch(
				'https://openai-demo-app.onrender.com/openai/keywords',
				{
					method: 'POST',
					headers: {
						'content-Type': 'application/json',
					},
					body: JSON.stringify({ text: text }),
				}
			);

			const data = await response.json();

			setKeywords(data.keywords.content);
		} catch (err) {
			console.log(err);
		} finally {
			setGenerateKeywordsLoading(false);
		}
	};

	const generateImageHandler = async () => {
		setGenerateImageLoading(true);

		try {
			const response = await fetch('https://openai-demo-app.onrender.com/openai/image', {
				method: 'POST',
				headers: {
					'content-Type': 'application/json',
				},
				body: JSON.stringify({ summarizedText: summarizedText }),
			});

			const data = await response.json();

			setImageUrl(data.url);
		} catch (err) {
			console.log(err);
		} finally {
			setGenerateImageLoading(false);
		}
	};

	return (
		<Stack spacing={4} direction="row" align="center" justify="center">
			<ButtonComponent
				onClick={generateTextHandler}
				loading={generateTextLoading}
			>
				Generate Text
			</ButtonComponent>
			<ButtonComponent
				onClick={summarizeTextHandler}
				disabled={text ? false : true}
				loading={summarizeTextLoading}
			>
				Summarize Text
			</ButtonComponent>
			<ButtonComponent
				onClick={generateKeywordsHandler}
				disabled={text ? false : true}
				loading={generateKeywordsLoading}
			>
				Generate Keywords
			</ButtonComponent>
			<ButtonComponent
				onClick={generateImageHandler}
				disabled={text && summarizedText ? false : true}
				loading={generateImageLoading}
			>
				Generate Image
			</ButtonComponent>
		</Stack>
	);
}

export default Controls;
