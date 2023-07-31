import { Box, Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";
interface ImageBoxProps {
  src: string;
}
const InspirationCard = () => {
  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    width: "100%",
    height: 600,
    position: "sticky",
    top: 70,
    marginLeft: -8,
    paddingTop: 20,
    paddingLeft: `calc((100vw - 1350px) / 2)`,
    paddingRight: `calc((100vw - 1350px) / 2)`,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  const ImageBox = styled(Box)(({ src }: ImageBoxProps) => ({
    width: 300,
    maxWidth: "22vw",
    height: 400,
    borderRadius: 10,
    margin: 10,
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
      <Divider sx={{ border: "1px solidrgb(200,200,200)" }} />
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
            width: "50%",
            display: "flex",
            flexDirection: "row",
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

export default InspirationCard;
