import { Clear } from "@mui/icons-material";
import { IconButton, Link as Mlink, Stack, styled } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { FiGift } from "react-icons/fi";
import { Theme, createTheme } from "@mui/material/styles";
import { useCloseSearch } from "../../hooks/useCloseSearch";
type VisibleProps = {
  theme: Theme;
  isShippingVisible: boolean;
  isOpenSearchCard:boolean
};
const theme = createTheme()
const StyledStack = styled(Stack)(
  ({ theme, isShippingVisible,isOpenSearchCard }: VisibleProps) => ({
    position: "relative",
    margin: -10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(248,248,248)",
    [theme.breakpoints.up("md")]: {
      height: 38,
      transitionDuration: "800ms",
      flexDirection: "row",
      transitionTimingFunction: "ease-in-out",
      transitionProperty: "backgroundColor,transform,color",
      transform: isShippingVisible ? "0" : "translate(0,-80px)",
    },
    [theme.breakpoints.down("md")]: {
      height: 70,
      flexDirection: "column",
      display: isOpenSearchCard ? 'none':'sticky'
      // transform: isShippingVisible ? "0" : "translate(0,-120px)",
    },
  })
);

const ShippingHeader = () => {
  const [shipping, setShipping] = useState(true);
  const [isShippingVisible, setIsShippingVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const handleScroll = useCallback(() => {
    setIsShippingVisible(window.scrollY <= 0 || window.scrollY < prevScrollPos);
    setPrevScrollPos(window.scrollY);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  const {isOpenSearchCard} = useCloseSearch()
  return (
    <>
      {shipping && (
        <StyledStack theme={theme} isShippingVisible={isShippingVisible} isOpenSearchCard={isOpenSearchCard}>
          <Stack sx={{ marginRight: "20px" }}>
            Free Shipping on order above $49
          </Stack>
          <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
            <FiGift />
            <Mlink sx={{ color: "black", marginLeft: "10px" }}>
              Send an eGift Card
            </Mlink>
          </Stack>
          <IconButton
            onClick={() => setShipping(false)}
            sx={{ position: "absolute", right: 10 }}
          >
            <Clear />
          </IconButton>
        </StyledStack>
      )}
    </>
  );
};

export default ShippingHeader;
