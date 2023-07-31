import { ArrowBackIos } from "@mui/icons-material";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
interface ImageBoxProps {
  src: string;
}
type SetIsShowInspiraionPros = {
    setIsShowInspiraionCard: (value: boolean) => void;
  };
const SmallInspirationCard = ({setIsShowInspiraionCard}:SetIsShowInspiraionPros) => {
  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: "rgb(49,54,57)",
    width: "95%",
    height: 600,
    position: "sticky",
    top: 70,
    paddingTop: 20,
   
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  }));
  const ImageBox = styled(Box)(({ src }: ImageBoxProps) => ({
    width: '100%',
    height: 250,
    borderRadius: 10,
    margin: 20,
    objectFit: "cover",
    objectPosition: "cener",
  }));
  const ImageContainerBox = styled(Box)(() => ({
    position: "relative",
  }));
  const ImageTitle = styled(Typography)(() => ({
    position: "absolute",
    width: "100%",
    bottom: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  }));
  return (
    <StyledBox>
         <Grid container sx={{ flexDirection: "row", alignItems: "center",  }}>
        <Box onClick={() => setIsShowInspiraionCard(false)} sx={{
            marginLeft:2
        }}>
          <ArrowBackIos />
        </Box>

        <Typography
          sx={{ fontWeight: "bold", fontSize: 20, marginX: "auto" }}
        >
          Inspiraion
        </Typography>
      </Grid>
      <Divider sx={{ border: "1px solid rgb(200,200,200)" }} />
      <Box
        sx={{
          width: {
            lg: 1350,
          },
          marginTop: 4,
        }}
      >
        <Typography sx={{ fontWeight: "bold", marginLeft: 2 }}>
          Discover tutorials to make the most of your Breville appliance.
        </Typography>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <ImageContainerBox>
            <ImageBox
              component="img"
              src="https://assets.breville.com/cdn-cgi/image/format=auto/Global_Nav/US/Breakfast_flatlay.png"
            ></ImageBox>
            <ImageTitle>All Inspiration</ImageTitle>
          </ImageContainerBox>
          <ImageContainerBox>
            <ImageBox
              component="img"
              src="https://assets.breville.com/cdn-cgi/image/format=auto/Global_Nav/US/thirdwave_speciality_coffee.png"
            ></ImageBox>
            <ImageTitle>Tuorials</ImageTitle>
          </ImageContainerBox>
        </Box>
      </Box>
    </StyledBox>
  );
};

export default SmallInspirationCard;
