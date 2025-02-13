import type { Root } from "./types";
const API_URL = import.meta.env.VITE_TRIVIA_API_URL
// Esta función realiza una solicitud asíncrona a la API para obtener preguntas de trivia.
// Devuelve una promesa que se resuelve con un objeto de tipo 'Root' que contiene
// un código de respuesta y un arreglo de resultados (preguntas).
// Si ocurre algún error durante la solicitud, la promesa será rechazada.
export async function getTriviaQuestions(): Promise<Root> {
    try {
        const response = await fetch(API_URL);  // Realiza la solicitud a la API
        if (!response.ok) {
            throw new Error('No se pudo obtener las preguntas');
        }
        const data: Root = await response.json();  // Convierte la respuesta en formato JSON a un objeto de tipo 'Root'
        console.log(data);
        return data;  // Retorna el objeto de tipo 'Root'
    } catch (error) {
        console.error(error);  // Maneja cualquier error que ocurra durante la solicitud
        throw error;  // Lanza el error para que pueda ser manejado por quien llame a esta función
    }
}
