import { Card, useThemeProps } from "@mui/material";
import Typography from "@mui/material/Typography";
import theme from "styles/theme";

export type T_LocationCard = {
  name: string;
  address: string;
  rating: number;
};

export function LocationCard(props: T_LocationCard) {
  const { address, name, rating } = props;
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: theme.spacing(15),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(1.5),
        borderRadius: theme.spacing(1),
      }}
    >
      <Typography flex={1} fontSize={theme.spacing(3)} fontWeight={700}>
        {name}
      </Typography>
      <Typography fontSize={theme.spacing(2)} fontWeight={500}>
        {address}
      </Typography>
      <Typography visibility={rating === -1 ? "hidden" : "initial"}>
        {rating}
      </Typography>
    </Card>
  );
}
