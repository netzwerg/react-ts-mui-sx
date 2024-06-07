import { Box, SxProps, Theme, Typography } from '@mui/material'

const sxRoot: SxProps<Theme> = {
  width: '100vw',
  height: '100vh',
  display: 'grid',
  placeItems: 'center',
}

function App() {
  return (
    <Box sx={sxRoot}>
      <Typography>{'Hello World'}</Typography>
    </Box>
  )
}

export default App
