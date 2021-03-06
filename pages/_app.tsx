import React from 'react';
import App from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { theme } from '../src/theme';

class MaterialApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            Demo App
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Component {...pageProps} />
            </ThemeProvider>
        )
    }
}

export default MaterialApp;