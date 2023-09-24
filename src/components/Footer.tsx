import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function Footer() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Box mt={4}>
					<Typography align="center" variant="body1" component="h6">
						Developed &amp; maintained by
						<Link
							href="https://github.com/krishnanu5836"
							target="_blank"
							rel="noopener noreferrer">
							&nbsp; Krishnanu Singh
							
						</Link>
					</Typography>
				</Box>
			</Grid>
		</Grid>
	)
}
