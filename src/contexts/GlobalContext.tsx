import {
    createContext,
    useState,
    type ReactNode
} from "react";
import type { Product } from "../@types/types";

interface GlobalProviderProps {
    children: ReactNode;
}

export interface GlobalContextType {
    isModalOpen: boolean;
    setModalOpen: (isActiveLoading: boolean) => void;

    product: Product | null;
    setProduct: (product: Product) => void;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export default function GlobalProvider({ children }: GlobalProviderProps) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [product, setProduct] = useState<Product | null>(null)

    const values: GlobalContextType = {
        isModalOpen, setModalOpen, product, setProduct
    };

    return (
        <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
    );
}
