import React from 'react';
import { Heading, Box, Center, Divider, Text } from '@chakra-ui/react';

function Intro() {
	return (
		<>
			<Box mt="20">
				<Heading as="h1" size="2xl" noOfLines={1} mb={3}>
					OpenAI API Demo App
				</Heading>
				<Text fontSize="xl" mb={2}>
					A demo app with a set of premade prompts to interact with
					the OpenAI API.
				</Text>
				<Text fontSize="md">
					<strong>Tip</strong>: To generate an image please first summarize the text (or generate a random one),
					overly long texts sometimes fail to generate images.
				</Text>
				<Text fontSize="md">
					<strong>Disclaimer</strong>: The functionality of this app is subject to the OpenAI policies of API usage.<br />The OpenAI API is not free, so if the App is not responsive my credits may be already used.
				</Text>
			</Box>
			<Center height="80px">
				<Divider />
			</Center>
		</>
	);
}

export default Intro;
