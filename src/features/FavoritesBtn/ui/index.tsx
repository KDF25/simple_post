import { Button } from "antd";
import { FC } from "react";
import { useActions } from "../../../shared/hooks/useActions";

export const FavoritesBtn: FC = () => {

    const {deleteFavorites} = useActions();

    return (
            <Button type="primary" 
                    style={{ backgroundColor: 'red', marginTop: '30px'}} 
                    onClick={() => (deleteFavorites())}
                    >DELETE ALL
            </Button>

    );
};
