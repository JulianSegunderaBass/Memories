import React, { useEffect } from 'react';
// Material UI components
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
// Redux import to dispatch an action
import { useDispatch } from 'react-redux';
// Redux Actions
import { getPosts } from './actions/postActions';
// Memories hero image
import memories from './images/memories.png';
// Components
import Posts from './components/posts/Posts';
import Form from './components/form/Form';
// Styles
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    
    // To dispatch an action
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
