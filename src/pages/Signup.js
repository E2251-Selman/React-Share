import React from "react";
import { Button, TextField, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {useFormik} from "formik";


const styles = makeStyles({
    wrapper: {
        marginTop: "10rem",
   
       
    }
});

function Signup() {

  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
    const singupStyles = styles();
    console.log("Fooormmmm",formik)
  return (
   
        <Container maxWidth="sm" className={singupStyles.wrapper}>
          <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            // id="outlined-basic"
            name= "displayName"
            label="Display Name"
            variant="outlined"
            fullWidth
            value ={formik.values.displayName}
            onChange={formik.handleChange}
        
          />
        </Grid>

        <Grid item xs={12}>
          <TextField 
            // id="outlined-basic" 
            name="email"
            label="Email"
            variant="outlined" 
            fullWidth
            value ={formik.values.email}
            onChange={formik.handleChange}
            />
        </Grid>

        <Grid item xs={12}>
          <TextField
          //  id="outlined-basic"
           name="password"
           label="Password"
           variant="outlined" 
           fullWidth
           value ={formik.values.password}
           onChange={formik.handleChange}
           type="password"
            />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" 
            fullWidth
            >
            Submit
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary"
            fullWidth
            >
            Signup with Google
          </Button>
        </Grid>
      </Grid>
       {/* 

            displayName input
            email input
            password input
            submit button
            google signup
            
            */}
            </form>
      </Container>
     
  
  );
}

export default Signup;
