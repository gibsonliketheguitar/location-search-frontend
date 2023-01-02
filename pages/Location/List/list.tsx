import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card, T_LocationCard } from "../Card/card";

export type T_LocationList = {
  data: T_LocationCard[] | [] | undefined;
};

export function List({ data }: T_LocationList) {
  if (typeof data !== "number" && data === undefined)
    return <Typography>Search for your next experience</Typography>;
  else if (data.length < 1) {
    return <Typography>No location found</Typography>;
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "600px",
      }}
    >
      <Typography>{data.length} Locations</Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {data.map((ele: T_LocationCard, indx: number) => {
          return <Card key={ele.name + indx} {...ele} />;
        })}
      </Box>
    </Box>
  );
}
