import { PRODUCTS_API } from "../utilis/constants";

export const getProductsByCategory = async (category) => {
    const response = await fetch(PRODUCTS_API(category));
    return response;
}

// export const getProductsByCategory = async () => {
//     const response = await fetch();
// }