import { Box, Divider, Grid, Typography, styled } from "@mui/material";
import listData from "../../store/listDataInSupport.json";
import { ArrowBackIos } from "@mui/icons-material";
type SetterProps = {
  setIsShowSubtitle: (value: boolean) => void;
};
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "rgb(49,54,57)",
  width: "100%",
  height: "max-content",
  minHeight: `calc(100vh - 118px)`,
  position: "sticky",
  top: 70,
  marginLeft: -8,
  paddingTop: 20,

  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const SmallSupportSubtitle = ({ setIsShowSubtitle }: SetterProps) => {
  return (
    <StyledBox>
      <Grid container sx={{ flexDirection: "row", alignItems: "center" }}>
        <Box
          onClick={() => setIsShowSubtitle(false)}
          sx={{
            marginLeft: 2,
          }}
        >
          <ArrowBackIos />
        </Box>

        <Typography
          sx={{ fontWeight: "bold", fontSize: 20, marginLeft: "35%" }}
        >
          Parts
        </Typography>
      </Grid>
      <Divider sx={{ border: "1px solid rgb(200,200,200)",marginBottom:3 }} />
      <Grid>
        {listData.map((item) => (
          <Typography
            key={item}
            sx={{
              width: "100%",
              marginLeft: 4,
              lineHeight: 3,
              fontWeight:'bold'
            }}
          >
            {item}
          </Typography>
        ))}
      </Grid>
    </StyledBox>
  );
};

export default SmallSupportSubtitle;
