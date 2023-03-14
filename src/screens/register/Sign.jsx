import { Box, Button, Container } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';
const Sign = () => {
	const navigate = useNavigate();
	return (
		<Container
			width="100%"
			height="100%"
			display="flex"
			justifyContent="center"
			alignItem="center"
			sx={{ mt: 3 }}
		>
			<Header
				sx={{ mt: 5 }}
				title="Registering As:"
				subtitle="Select the appropriate option as per your Role:- "
			/>
			{/* <form onSubmit={handleFormSubmit}> */}
			<Box
				display="flex"
				justifyContent="center"
				alignItem="center"
				sx={{ mb: 3 }}
			>
				<Button
					variant="contained"
					color="secondary"
					type="submit"
					sx={{ mr: 2, fontWeight: 'bold' }}
					onClick={() => navigate('/restaurant/signUpAsRestaurant')}
				>
					Restaurant
				</Button>
				<Button
					variant="contained"
					color="secondary"
					type="submit"
					sx={{ fontWeight: 'bold' }}
					onClick={() => navigate('/volunteer/signUpAsVolunteer')}
				>
					Volunteer
				</Button>
			</Box>
			{/* </form> */}
			{/* )} */}
		</Container>
	);
};
export default Sign;
