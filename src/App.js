import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { theme } from "./theme";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import Login from './pages/Login'
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path="/blog/:id">
            <BlogDetails />
          </Route>
        </Switch>
        <Footer />
        <CssBaseline />
      </Router>
    </ThemeProvider>
  );
}

export default App;
