import axios from "axios";

const boardmastersApi = axios.create({
  baseURL: "https://boardmasters.herokuapp.com/api",
});

export const getCategories = () => {
  return boardmastersApi.get("/categories")
  .then(({ data }) => {
    return data.categories;
  });
};

export const getGames = (category) => {
  return boardmastersApi
    .get(`/reviews?category=${category}`)
    .then(({ data }) => {
      return data.reviews;
    });
};

export const getComments = (review_id) => {
  return boardmastersApi
    .get(`/reviews/${review_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};

export const getUsers = () => {
  return boardmastersApi.get("/users")
  .then(({ data }) => {
    return data;
  });
};

export const patchVotes = (body, review_id) => {
  return boardmastersApi.patch(`reviews/${review_id}`, body)
  .then((res) => {
      return res
  });
};
