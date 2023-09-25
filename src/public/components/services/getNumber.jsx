import axios from "axios"
const url = 'https://jsonplaceholder.typicode.com/todos/91';


export const getNumberService = {

    getNumbers: async () => {
        try {
            const response = await axios.get(`${url}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

}