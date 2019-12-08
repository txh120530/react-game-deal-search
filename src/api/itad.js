import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.isthereanydeal.com',
	headers: {
				'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
	}
});

