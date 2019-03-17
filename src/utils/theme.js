import { purple, blueGrey } from '@material-ui/core/colors';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const defaultTheme = createMuiTheme({
  palette: {
    primary: { main: purple[500] },
    secondary: { main: '#11cb5f' },
    background: blueGrey,
  },
  typography: { useNextVariants: true },
});
