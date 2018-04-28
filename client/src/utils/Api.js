import axios from "axios";

export default {
    getArticles: req => {
        let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
        return axios.get(url, {
            params: {
                "api-key": "9a09c24a3c1c4a49a46b8a2199b93c13",
                "q": req.searchTerm,
                "startYear": req.startYear + "0101",
                "startYear": req.endYear,
                "sort": "newest"
            }
        });
    },

    getSaved: () => {
        return axios.get("/api/saved");
    },

    deleteArticle: articleInfo => {
        return axios.delete("/api/saved/" + articleInfo._id)
    },
    saveArticle: function(articleInfo) {
        console.log(articleInfo);
        return axios.post("/api/saved", articleInfo);
        }
}