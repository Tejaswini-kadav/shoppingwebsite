import React from "react"
import { Grid, Paper, Avatar } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FontControlLabel';
import Checkbox from '@material-ui/core/Checkbox'

const Login = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: 'green' }
    const btstyle = { margin: '8px 0' }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form>
                    <input type='Username' placeholder='Enter Username' fullWidth required />
                    <input type='Password' placeholder='Enter Password' type='password' fullWidth required />
                </form>
                <FormControlLabel
                    control={
                        <Checkbox

                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"

                />
                <button type='submit' color='primary' variant="contained" style={btstyle} fullWidth>Sign in</button>


            </Paper>
        </Grid>
    )
}
export default Login;