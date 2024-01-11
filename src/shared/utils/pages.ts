import { IPost } from "../store/reducers/posts/types"

export const getPagesCount = (totalCount: number, limit: number) => {
    // console.log(Math.ceil(totalCount/limit), totalCount, limit)
    return Math.ceil(totalCount/limit)

}

export const getPagesArray = (totalPages: number) => {
    let result = []
    for (let i = 0; i < totalPages; i++){
      result.push(i+1)
    }
    // console.log(result, totalPages)
    return result;
}

export const getNewSlicedData = (currentPage: number, perPage: number, data: IPost[]) => {
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  return data.slice(startIndex, endIndex);
};