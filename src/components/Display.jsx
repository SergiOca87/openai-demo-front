import {
	Box,
	Card,
	CardBody,
	CardHeader,
	Stack,
	Text,
	Heading,
	StackDivider,
	Image,
} from '@chakra-ui/react';
import React from 'react';

function Display({ text, summarizedText, keywords, imageUrl }) {
	if (summarizedText || keywords || imageUrl) {
		return (
			<Card textAlign="left" mt={8}>
				<CardHeader>
					<Heading size="md">Output</Heading>
				</CardHeader>

				<CardBody>
					<Stack divider={<StackDivider />} spacing="4">
						{imageUrl && (
							<Box>
								<Heading
									size="xs"
									textTransform="uppercase"
									mb={2}
								>
									Image
								</Heading>
								<Image
									src={`${imageUrl}`}
									alt="Dall·e generated image"
									borderRadius="lg"
								/>
							</Box>
						)}

						{summarizedText && (
							<Box>
								<Heading size="xs" textTransform="uppercase">
									Summarized Text
								</Heading>
								<Text pt="2" fontSize="sm">
									{summarizedText}
								</Text>
							</Box>
						)}

						{keywords && (
							<Box>
								<Heading size="xs" textTransform="uppercase">
									Keywords
								</Heading>
								<Text pt="2" fontSize="sm">
									{keywords}
								</Text>
							</Box>
						)}
					</Stack>
				</CardBody>
			</Card>
		);
	}
}

export default Display;
