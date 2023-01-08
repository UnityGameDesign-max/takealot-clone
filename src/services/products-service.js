import { ALL_PRODUCTS_API, EACH_PRODUCT_API, PRODUCTS_API } from "../utilis/constants";

export const getProductsByCategory = async (category) => {
    const response = await fetch(PRODUCTS_API(category));
    return response;
}

// export const getProductsByCategory = async () => {
//     const response = await fetch();
// }

export const getProductsById = async (productId) => {
    const response = await fetch(EACH_PRODUCT_API(productId));
    return response;
}


export const getAllProducts = async () => {
    const response = await fetch(ALL_PRODUCTS_API);
    return response;
}