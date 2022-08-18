import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { yellow } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: yellow[500],
    },
  },
});

export default theme;