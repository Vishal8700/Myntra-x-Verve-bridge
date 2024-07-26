import React, { useState } from 'react';
import { Button, Card, CardMedia, TextField, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

function LogIn() {
    const [mobileNumber, setMobileNumber] = useState('');
    const history = useHistory();

    const handleLogin = () => {
        // Add login logic here

        history.push('/', { message: 'Login successfully!' });
        window.alert('login successfully ')
    };

    return (
        <div style={{ backgroundColor: '#ffe6e6', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card style={{ width: '100%', maxWidth: '400px', padding: '20px' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/1/14/d63fc446-4087-4e07-b2dd-1d060368d2661642184399341-Banner_Login-page-400.png"
                    alt="Login Banner"
                />
                <div style={{ padding: '20px' }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        <b style={{ color: '#505050' }}>Login</b> or <b style={{ color: '#505050' }}>Signup</b>
                    </Typography>

                    <TextField
                        variant="outlined"
                        label="Mobile Number"
                        type="tel"
                        fullWidth
                        margin="normal"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                    />

                    <Typography variant="body2" align="center" style={{ color: '#707070', marginTop: '10px' }}>
                        By continuing, I agree to the <b style={{ color: '#ff0066' }}>Terms of Use</b> & <b style={{ color: '#ff0066' }}>Privacy Policy</b>
                    </Typography>

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        style={{ marginTop: '20px', backgroundColor: '#ff0066' }}
                        onClick={handleLogin}
                    >
                        <b style={{ fontSize: '20px' }}>CONTINUE</b>
                    </Button>

                    <Typography variant="body2" align="center" style={{ color: '#707070', marginTop: '10px' }}>
                        Have trouble logging in? <b style={{ color: '#ff0066' }}>Get help</b>
                    </Typography>
                </div>
            </Card>
        </div>
    );
}

export default LogIn;
