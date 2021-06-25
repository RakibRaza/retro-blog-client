import { createMuiTheme } from '@material-ui/core'

export const theme = createMuiTheme({
  palette: {
    background: {
      default: '#fff'
    },
    primary: {
      main: '#4A42EC'
    }
  },
  typography: {
    fontFamily: "'Nunito', sans- serif"
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'capitalize',
        padding: '10px 40px',
        fontSize: '16px',
        borderRadius: '25px'
      }
    }
  }
})