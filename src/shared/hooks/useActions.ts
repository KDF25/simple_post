import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { favoritesActions } from "../store/reducers/favorites.slice"


const rootActions = {
    ...favoritesActions,
}

export const useActions = () => {
    const dispatch = useDispatch ()
    return useMemo(() => 
        bindActionCreators(rootActions, dispatch), [dispatch])
}