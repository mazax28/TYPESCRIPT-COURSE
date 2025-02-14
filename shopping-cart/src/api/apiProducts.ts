const URL_PRODUCTS = 'https://fakestoreapi.com/products';
import {Products} from './types';

export async function getProducts(): Promise<Products> {
    try{
        const response = await fetch(URL_PRODUCTS);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data : Products = await response.json();
        return data;
    }
    catch(error){
        console.error(error);
        return [];
    }
}