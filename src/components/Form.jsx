import {
	Box,
	FormControl,
	FormHelperText,
	FormLabel,
	Textarea,
} from '@chakra-ui/react';
import React from 'react';

function Form({ setText, text }) {
	return (
		<Box maxWidth="750px" mx="auto" textAlign="left" mt={8} mb={5}>
			<FormControl>
				<Textarea
					placeholder="Enter your text or generate one using the generate text button above"
					name="inputText"
					id=""
					cols="20"
					size="md"
					rows="7"
					mt={2}
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</FormControl>
		</Box>
	);
}

export default Form;
