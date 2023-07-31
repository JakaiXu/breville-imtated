import { Box, Divider, Grid, Typography, styled } from "@mui/material";

import newFeatureData1 from "../../store/newFeature1.json";
import newFeatureData2 from "../../store/newFeature2.json";
import { ArrowBackIos } from "@mui/icons-material";
type setShowNewFeaturePros = {
  setIsShowNewFeatureCard: (value: boolean) => void;
};
const SmallFeatureCard = ({
  setIsShowNewFeatureCard,
}: setShowNewFeaturePros) => {
  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: "rgb(49,54,57)",
    width: "100%",
    height: "100%",
    paddingLeft: `calc((100vw - 1350px) / 2)`,
    paddingRight: `calc((100vw - 1350px) / 2)`,
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  }));
  interface ImageBoxProps {
    src: string;
  }
  const ImageBox = styled(Box)(({ src }: ImageBoxProps) => ({
    width: '95%',
    // maxWidth: "22vw",
    height: 250,
    borderRadius: 10,
    margin: 10,
    objectFit:'cover'
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
         <Grid container sx={{ flexDirection: "row", alignItems: "center",}}>
        <Box onClick={() => setIsShowNewFeatureCard(false)} sx={{
            marginLeft:2
        }}>
          <ArrowBackIos />
        </Box>

        <Typography
          sx={{ fontWeight: "bold", fontSize: 20, marginX: "auto" }}
        >
          New & Featured
        </Typography>
      </Grid>
      <Divider sx={{ border: "1px solid rgb(200,200,200)" }} />
      <Box
        sx={{
          width: {
            lg: 1350,
            sm: "100%",
            xs: "100%",
          },
          marginTop: 4,
        }}
      >
        <Box>
          <Box
            sx={{
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
            paddingLeft:4
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

export default SmallFeatureCard;
