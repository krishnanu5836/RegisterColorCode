import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

export default function AboutProject() {
	return (
		<Grid item xs={12}>
			<Card>
				<CardContent>
				
					<Typography variant="body1" component="h2" gutterBottom>
						Just select the color in the proper sequence &amp; get the correct
						value of the resistor that&apos;s it.
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	)
}
