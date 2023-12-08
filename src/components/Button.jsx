import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';

function ButtonComponent({ onClick, children, disabled, loading }) {
	return (
		<Button
			variant="outline"
			onClick={onClick}
			loadingText="Loading"
			isDisabled={disabled}
			isLoading={loading}
		>
			{children}
		</Button>
	);
}

export default ButtonComponent;
