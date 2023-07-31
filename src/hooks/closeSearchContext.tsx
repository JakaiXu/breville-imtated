import { createContext,  useState } from "react";

type ChildrenProps = {
  children: React.ReactNode;
};
type CloseSearchContext = {
  isOpenSearchCard: boolean;
  setIsOpenSearchCard: (value: boolean) => void;
};
export const CloseSearchContext = createContext({} as CloseSearchContext);

export function CloseSearchProvider({ children }: ChildrenProps) {
  const [isOpenSearchCard, setIsOpenSearchCard] = useState(false);
  return (
    <CloseSearchContext.Provider
      value={{ isOpenSearchCard, setIsOpenSearchCard }}
    >
      {children}
    </CloseSearchContext.Provider>
  );
}
