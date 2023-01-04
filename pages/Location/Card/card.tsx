import { Card, useThemeProps } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
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
        flexDirection: "row",
        height: theme.spacing(15),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(1.5),
        borderRadius: theme.spacing(1),
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          aria-label="business name"
          fontSize={theme.spacing(3)}
          fontWeight={700}
        >
          {name}
        </Typography>
        <Typography
          aria-label="address"
          fontSize={theme.spacing(1.5)}
          fontWeight={500}
        >
          {address}
        </Typography>
      </Box>
      <Box
        flex={1}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Typography
          aria-label="rating"
          visibility={rating === -1 ? "hidden" : "initial"}
          fontSize={theme.spacing(4)}
          sx={{ padding: theme.spacing(2) }}
        >
          {rating}
        </Typography>
      </Box>
    </Card>
  );
}
