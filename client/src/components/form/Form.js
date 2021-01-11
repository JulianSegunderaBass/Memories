import React, { useState } from 'react';
import useStyles from './FormStyle';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
// Import for file submissions
import FileBase from 'react-file-base64';
// Redux Imports
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/postActions';

const Form = () => {
    // State is an object for the post information
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });
    const dispatch = useDispatch();
    const classes = useStyles();
    const handleSubmit = (event) => {
        // Dispatch upon submit for post request
        event.preventDefault();
        // Passing in post data state
        dispatch(createPost(postData));
    }
    const clear = () => {

    }
    return (
        <Paper className={classes.paper}>
            <form
                autoComplete="off"
                className={classes.form}
                onSubmit={handleSubmit}
                noValidate
            >
                <Typography variant="h6">Creating a Memory</Typography>
                {/* Text Field for post creator */}
                <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    value={postData.creator}
                    // Using the onchange event target value and spread operator
                    // to set only one property of the post object
                    onChange={(e) => setPostData({...postData, creator: e.target.value})}
                    fullWidth
                />
                {/* Text Field for post title */}
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    value={postData.title}
                    // Using the onchange event target value and spread operator
                    // to set only one property of the post object
                    onChange={(e) => setPostData({...postData, title: e.target.value})}
                    fullWidth
                />
                {/* Text Field for post message */}
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    value={postData.message}
                    onChange={(e) => setPostData({...postData, message: e.target.value})}
                    fullWidth
                />
                {/* Text Field for tags */}
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    value={postData.tags}
                    onChange={(e) => setPostData({...postData, tags: e.target.value})}
                    fullWidth
                />
                <div className={classes.fileInput}>
                    <FileBase 
                        type="file" 
                        multiple={false} 
                        // Using base64 package
                        onDone={({base64}) => setPostData({...postData, selectedFile: base64})} 
                    />
                </div>
                {/* Submit Button */}
                <Button 
                    className={classes.buttonSubmit} 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    type="submit" 
                    fullWidth
                >
                Submit</Button>
                {/* Clear Form Button */}
                <Button 
                    variant="contained" 
                    color="secondary" 
                    size="small" 
                    onClick={clear} 
                    fullWidth
                >
                Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;