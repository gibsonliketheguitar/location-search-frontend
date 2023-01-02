import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export type T_LocationCard = {
  name: string;
  address: string;
  rating: number;
};

export function Card(props: T_LocationCard) {
  const { address, name, rating } = props;
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography>{name}</Typography>
      <Typography>{address}</Typography>
      <Typography visibility={rating === -1 ? "hidden" : "initial"}>
        {rating}
      </Typography>
    </Box>
  );
}
