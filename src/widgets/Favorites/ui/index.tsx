import { FC } from "react";
import { FavoritesBtn } from "../../../features/FavoritesBtn";
import { FavoritesList } from "../../../features/FavoritesList";

export const Favorites: FC = () => {

    return (
        <div>
            <FavoritesBtn/>
            <FavoritesList/>        
        </div>
    );
};
