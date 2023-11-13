import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  FormControl,
  FormLabel,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Submission from "./Submission";

export const Form = () => {
  const canadianProvinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Nova Scotia",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Northwest Territories",
    "Nunavut",
    "Yukon",
  ];
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState("");

  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isChecked) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    setFormData({
      email: event.target.email.value,
      fullName: event.target["full name"].value,
      address: event.target.Address.value,
      address2: event.target.Address2.value,
      city: event.target.City.value,
      province: event.target.Province.value,
      postalCode: event.target["Postal Code"].value,
    });

    setIsSubmitted(true);
  };

  const handleAgreeChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormLabel>Email</FormLabel>
              <TextField label="email" name="email" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormLabel>Full Name</FormLabel>
              <TextField label="full name" name="full name" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <FormLabel>Address</FormLabel>
              <TextField label="Address" name="Address" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <FormLabel>Address2</FormLabel>
              <TextField label="Address2" name="Address2" fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormLabel>City</FormLabel>
              <TextField label="City" name="City" fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormLabel>Province</FormLabel>
              <Select
                label="Province"
                name="Province"
                value={selectedProvince}
                onChange={handleProvinceChange}
                fullWidth
              >
                {canadianProvinces.map((province) => (
                  <MenuItem key={province} value={province}>
                    {province}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormLabel>Postal Code</FormLabel>
              <TextField label="Postal Code" name="Postal Code" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked}
                    onChange={handleAgreeChange}
                    name="agreed"
                    color="primary"
                  />
                }
                label="Agree to terms and conditions"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </form>

      {/* Display submission result below the form */}
      {isSubmitted && <Submission data={formData} />}
    </div>
  );
};
