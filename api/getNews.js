import api from './client';
const getNews = () => {
    return api.get('/top-headlines?country=in&apiKey=9fb25bc61d0c47c1a3370d3a589e0ab1');
};

const searchedNews = (str) => {
    return api.get(`everything?q=${str}&apiKey=9fb25bc61d0c47c1a3370d3a589e0ab1`);
};

export default {getNews,searchedNews};
