// export const API_URL = "https://grandeur.rototransindia.com/";
// export const IMG_BASE_URL = "https://grandeur.rototransindia.com/";
// export const FETCH_CATEGORY = "https://grandeur.rototransindia.com/Api/allMasterCategory/";
// export const FETCH_SUB_CATEGORY = "https://grandeur.rototransindia.com/Api/allSubCategoryByMasterUid/?mcat_uid=";



export const API_URL = "https://grandeur.vedikaopticals.com/";

export const IMG_BASE_URL = API_URL;

export const FETCH_CATEGORY = `${API_URL}Api/allMasterCategory/`;

export const FETCH_PRODUCT_BY_ID = `${API_URL}api/getProductByUid/?product_uid=`;

export const FETCH_SUB_CATEGORY = `${API_URL}Api/allSubCategoryByMasterUid/?mcat_uid=`;

export const FETCH_PRODUCT_BY_CATEGORY = `${API_URL}Api/allProductByMasterAndSubUid/?`;

export const getCustomerId = () => {
    const data = localStorage.getItem('userInfo');
    console.log(data);
    const userDetails = JSON.parse(data);
    console.log(userDetails);
    return userDetails.customer_id;
}