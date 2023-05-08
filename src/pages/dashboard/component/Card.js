import React, { useState, useEffect, useCallback } from "react";
import { Grid, Button, Box, useMediaQuery, useTheme } from "@mui/material";
import Images from "../../../assets/image/R.jpg";

const Card = () => {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const xSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
    const [data, setData] = useState({});
    const [value, setValue] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = "https://dummyjson.com/products/2";

    useEffect(() => {
        const fetchProduct = async () => {
            await fetch(url)
                .then((data) => data.json())
                .then((data) => {
                    setValue(data);
                    console.log(value);
                })
                .catch((err) => setError(err.message));
        };
        fetchProduct();
        setIsLoading(false);
    }, []);

    if (error) {
        return <p>Error: {error}</p>;
    }
    if (isLoading) {
        return <p>fetching...</p>;
    }
    return (
        <div>
            <p
                style={{
                    fontSize: smallScreen ? '20px' : xSmallScreen ? '10px' : '50px',
                    fontWeight: smallScreen ? '500' : xSmallScreen ? '400' : '700',
                }}
            >
                Brand Name: {value.brand}
            </p> 
            <Grid container>
                <Grid item x1={4} lg={4} md={6} sm={12} xs={12}>
                    <img src = {Images}  alt="" style={{
                        width: smallScreen ? '50%' : xSmallScreen ? '50%' : '70%',
                         height: smallScreen ? '50%' : xSmallScreen ? '50%' : '80%',
                    }} />
                </Grid>
                <Grid item x1={4} lg={4} md={6} sm={12} xs={12}>
                    <img src={Images} alt="" style={{
                        width: smallScreen ? '50%' : xSmallScreen ? '50%' : '70%', 
                        height: smallScreen ? '50%' : xSmallScreen ? '50%' : '80%',
                    }} />
                </Grid>
                <Grid item x1={4} lg={4} md={6} sm={12} xs={12}>
                    <img src={Images} alt="" style={{
                        width: smallScreen ? '50%' : xSmallScreen ? '50%' : '70%', height:
                            smallScreen ? '50%' : xSmallScreen ? '50%' : '80%'
                    }} />
                </Grid>
                <Grid item x1={4} lg={4} md={6} sm={12} xs={12}>
                    <img src={Images} alt="" style={{
                        width: smallScreen ? '50%' : xSmallScreen ? '50%' : '70%', height:
                            smallScreen ? '50%' : xSmallScreen ? '50%' : '80%'
                    }} />
                </Grid>
                <Grid item x1={4} lg={4} md={6} sm={12} xs={12}>
                    <img src={Images} alt="" style={{
                        width: smallScreen ? '50%' : xSmallScreen ? '50%' : '70%', height:
                            smallScreen ? '50%' : xSmallScreen ? '50%' : '80%'
                    }} />
                </Grid>
                <Grid item x1={4} lg={4} md={6} sm={12} xs={12}>
                    <img src={Images} alt="" style={{
                        width: smallScreen ? '50%' : xSmallScreen ? '50%' : '70%', height:
                            smallScreen ? '50%' : xSmallScreen ? '50%' : '80%'
                    }} />
                </Grid>
            </Grid>
        </div>
    );
};
export default Card;