import { Box, Stack, Typography } from "@mui/material";
import ShippingHeader from "./ShippingHeader";
import NaviHeader from "./NaviHeader";
import { useState } from "react";
import { useCloseSearch } from "../../hooks/useCloseSearch";

type Children = {
  children: React.ReactNode;
};

const Layout = ({ children }: Children) => {
  const [isOpenLabel, setIsOpenLabel] = useState<number | null>(null);
  const [isSmallMenuOpen, setIsSmallMenuOpen] = useState<boolean | null>(null);
  const getOpenCard = (data: number | null) => {
    setIsOpenLabel(data);
  };
  const getSmallMenuOpen = (data: boolean | null) => {
    setIsSmallMenuOpen(data);
  };
  const { isOpenSearchCard } = useCloseSearch();
  console.log(isOpenLabel);
  console.log(isOpenSearchCard);
  
  return (
  
      <Box sx={{ height: "200vh", width: "100vw" }}>
        <ShippingHeader />
        <NaviHeader
          getOpenCard={getOpenCard}
          getSmallMenuOpen={getSmallMenuOpen}
        />
        <Box sx={{ position: "fixed", left: 0, top: 0, zIndex: -50 }}>
          <video
            autoPlay={true}
            loop
            muted
            poster=""
            className="background-video"
          >
            <source
              type="video/mp4"
              src="https://breville.scene7.com/is/content/brevilleprod/BTIHero_LandingPage_APAC"
            />
          </video>
        </Box>
        <Stack
          sx={{
            position: "absolute",
            top: "40vh",
            left: "50vw",
            transform: "translate(-50%, -50%)",
            width: "80%",
            textAlign: "center",
            color: "white",
            flexDirection: "column",
            alignItems: "center",
            display:
              isOpenLabel !== null || isSmallMenuOpen 
              || isOpenSearchCard
                ? "none"
                : "flex",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                md: 50,
                sm: 30,
                xs: 30,
              },
              lineHeight: 2,
            }}
          >
            the Barista Touch™ Impress
          </Typography>
          <Typography
            sx={{
              fontSize: {
                md: 20,
                sm: 14,
                xs: 14,
              },
              lineHeight: 3,
            }}
          >
            Introducing our latest innovation for the Barista Impress Series.
          </Typography>
          <Box
            sx={{
              border: "2px solid white",
              borderRadius: 2,
              height: 50,
              width: 150,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: 20,
              marginY: 3,
              "&:hover": {
                backgroundColor: "white",
                color: "black",
                cursor: "pointer",
              },
            }}
          >
            Learn more
          </Box>
        </Stack>
        <main>{children}</main>
      </Box>
  
  );
};

export default Layout;
