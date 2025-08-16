import {
    createContext,
    useState,
    type ReactNode
} from "react";

interface GlobalProviderProps {
    children: ReactNode;
}

export interface GlobalContextType {
    isModalOpen: boolean;
    setModalOpen: (isActiveLoading: boolean) => void;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export default function GlobalProvider({ children }: GlobalProviderProps) {
    const [isModalOpen, setModalOpen] = useState(false);

    const values: GlobalContextType = {
        isModalOpen, setModalOpen
    };

    return (
        <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
    );
}
