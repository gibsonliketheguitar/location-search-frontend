import theme from "styles/theme";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card } from "../index";
import { T_LocationCard } from "../Card/card";

export type T_LocationList = {
  data: T_LocationCard[] | [] | undefined;
  handleReset: () => void;
};

function renderText(arr: undefined | []): string {
  let res = "";
  if (!Array.isArray(arr) && arr === undefined)
    res = "Search for your next experience";
  else if (arr.length < 1) res = "No location found ";
  return res;
}

export function List({ data, handleReset }: T_LocationList) {
  if (!data) {
    return (
      <Box
        sx={{
          marginTop: theme.spacing(3),
        }}
      >
        <Typography>{renderText(data)}</Typography>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: "600px",
        marginTop: theme.spacing(3),
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingX: theme.spacing(1),
          paddingY: theme.spacing(3),
          width: "100%",
        }}
      >
        <Typography sx={{ marginRight: theme.spacing(2) }}>
          {data.length} Locations
        </Typography>
        <Button
          aria-label="reset search result"
          variant="outlined"
          onClick={handleReset}
        >
          Reset
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {data.map((ele: T_LocationCard, indx: number) => {
          return <Card key={ele.name + indx} {...ele} />;
        })}
      </Box>
    </Box>
  );
}
