import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import theme from "styles/theme";

export function LoadingList() {
  const list = new Array(10).fill(0);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mainWidth: "200px",
        maxWidth: "400px",
        width: "100%",
        marginTop: theme.spacing(3),
        borderRadius: theme.spacing(1),
      }}
    >
      {list.map((_, indx) => {
        return (
          <Skeleton
            key={indx}
            variant="rectangular"
            animation="pulse"
            height={120}
            sx={{
              inset: 0,
              bgcolor: "grey",
              marginBottom: theme.spacing(1.5),
              maxWidth: theme.spacing(50),
            }}
          />
        );
      })}
    </Box>
  );
}
