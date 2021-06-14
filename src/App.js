import {Box, createMuiTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrimaryDashboard from "./pages/PrimaryDashboard";
import AppContextWrapper from "./AppContextWrapper";


const theme = createMuiTheme({
    spacing: 8,
    typography: {
        fontFamily: ['Calibri', 'Roboto', 'Arial', 'sans-serif'],
    },
    palette: {
        primary: {
            main: '#f2f2f2'
        },
        text: {
            primary: '#4F4F4F',
            secondary: '#000000'
        }
    },

    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    background:
                        "linear-gradient(180deg, #2F80ED 0%, rgba(47, 128, 237, 0.56) 64.9%, rgba(47, 128, 237, 0.51) 100%)"
                }
            }
        }
    }
})

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <AppContextWrapper>
                <Router>
                    <Box style={{height: '100vh'}}>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/rundown/:videoId' component={PrimaryDashboard}/>
                    </Box>
                </Router>
            </AppContextWrapper>
        </MuiThemeProvider>
    );
}

export default App;
