import { Button } from "antd";
import { FC } from "react";
import { PostItem } from "../../../enteties/PostItem";
import { useFavorites } from "../../../shared/hooks/useFavorites";


export const FavoritesList: FC = () => {
    const {favorites} = useFavorites();
    return (
        <div>
            <h1>{favorites.length ?  `Favorites = ${favorites.length}` : "Favorites EMPTY" }</h1>
            {favorites.map((post, index) => 
                        <PostItem index={index + 1} post={post} key={post.id}/>
                    )}
        </div>
    );
};
