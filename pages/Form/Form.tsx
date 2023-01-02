import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { T_Radio_Location, radioOption as options } from "./_radioOption";
import { getPlace } from "./_api";
import theme from "styles/theme";

type T_UploadForm = {
  keyword: string;
  location: string;
};

export function Form(props: any) {
  const { setList, setLoading } = props;
  const { control, handleSubmit, reset } = useForm<T_UploadForm>({
    defaultValues: {
      keyword: "",
      location: "",
    },
  });

  const handleReset = () => {
    setList(undefined);
    reset();
  };

  const onSubmit = async ({ keyword, location }: T_UploadForm) => {
    setLoading(true);
    const data = await getPlace(keyword.trim().toLocaleLowerCase(), location);
    if (data.error) {
      setList([]);
      console.error("something went wrong");
    } else {
      setList(data);
    }
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ padding: theme.spacing(2) }}
    >
      <Controller
        name="keyword"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            autoFocus
            margin="dense"
            id="keyword"
            label="Search"
            type="text"
            fullWidth
            variant="standard"
          />
        )}
      />
      <FormControl>
        <FormLabel
          htmlFor="location"
          sx={{ marginTop: theme.spacing(3), marginBottom: theme.spacing(1.5) }}
        >
          Select a Location
        </FormLabel>
        <Controller
          name="location"
          render={({ field }) => (
            <RadioGroup aria-label="location-radio-group" {...field}>
              {options.map((ele: T_Radio_Location, indx) => {
                return (
                  <FormControlLabel
                    key={ele.name + indx}
                    value={ele.latitude + "," + ele.longitude}
                    control={<Radio />}
                    label={ele.name + ", " + ele.state}
                  />
                );
              })}
            </RadioGroup>
          )}
          control={control}
        />
      </FormControl>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ marginTop: theme.spacing(8) }}
      >
        <Button variant="text" onClick={handleReset}>
          Clear all
        </Button>
        <Button variant="contained" type="submit">
          Search
        </Button>
      </Box>
    </form>
  );
}
