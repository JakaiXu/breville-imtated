import { Box, Divider, Typography, styled } from "@mui/material";
import newFeatureData1 from "../../store/newFeature1.json";
import newFeatureData2 from "../../store/newFeature2.json";
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  width: "100%",
  height: 600,
  position:'sticky',
  top:70,
  marginLeft: -8,
  paddingTop: 20,
  paddingLeft: `calc((100vw - 1350px) / 2)`,
  paddingRight: `calc((100vw - 1350px) / 2)`,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
interface ImageBoxProps {
  src: string;
}
const ImageBox = styled(Box)(({ src }: ImageBoxProps) => ({
  width: 300,
  maxWidth: "22vw",
  height: 200,
  borderRadius: 10,
  margin: 10,
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
const NewFeaturedCard = () => {
  return (
    <StyledBox>
      <Divider sx={{ border: "1px solidrgb(200,200,200)" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: {
            lg: 1350,
          },
          marginTop: 4,
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: {
                md: "75%",
                sm: "100%",
                xs: "100%",
              },
            }}
          >
            {newFeatureData1.map((item) => (
              <ImageContainerBox key={item.id}>
                <Box>
                  <ImageBox component="img" src={item.src} />
                  <ImageTitle sx={{}}>{item.title}</ImageTitle>
                </Box>
              </ImageContainerBox>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: {
                md: "75%",
                sm: "100%",
                xs: "100%",
              },
            }}
          >
            {newFeatureData2.map((item) => (
              <ImageContainerBox key={item.id}>
                <Box>
                  <ImageBox component="img" src={item.src} />
                  <ImageTitle>{item.title}</ImageTitle>
                </Box>
              </ImageContainerBox>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            width: {
              md: "25%",
              sm: "100%",
              xs: "100%",
            },
            marginLeft: {
              md: "normal",
              sm: 5,
            },
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: 24, lineHeight: 3 }}>
            Discover More
          </Typography>
          {[
            "ChefSteps",
            "Augmented Reality",
            "White Glove Service",
            "Pizzaiolo",
            "Blend, Juice or Both",
            "Long Lunch",
            "The Wave Range",
            "eGift Cards",
            "Precision Brewer",
          ].map((item) => (
            <Typography key={item} sx={{ lineHeight: 2.5 }}>
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
    </StyledBox>
  );
};

export default NewFeaturedCard;
