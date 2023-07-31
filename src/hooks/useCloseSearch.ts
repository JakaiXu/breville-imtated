import { CloseSearchContext } from "./closeSearchContext";
import { useContext } from "react";

export function useCloseSearch() {
    return useContext(CloseSearchContext);
  }