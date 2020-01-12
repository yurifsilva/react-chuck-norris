import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.chucknorris.io/',
});

api.getAllCategories = async function () {
	try {
		const result = await api.get(`/jokes/categories`);
		return result.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

api.getJokeByCategory = async function ({Category}) {
	try {
		const result = await api.get(`/jokes/random?category=${Category}`);
		return result.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}


export default api;
