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

export const getAllReviews = (sort_by) => {
  return boardmastersApi.get("/reviews", {
    params: {sort_by}
  })
  .then(({ data }) => {
    return data.reviews
  })
}

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

export const getReviewsbyId = (review_id) => {
  return boardmastersApi.get(`/reviews/${review_id}`)
  .then(({ data }) => {
    return data.review
  })
}

export const postComment = (review_id, body) => {
  return boardmastersApi.post(`reviews/${review_id}/comments`, body)
  .then((res) => {
    return res;
  })
}

export const deleteComment = (comment_id) => {
  return boardmastersApi.delete(`/comments/${comment_id}`)
  .then(({ data }) => {
    return data
  })
}

export const patchVotes = (review_id, votes) => {
  return boardmastersApi.patch(`reviews/${review_id}`, { inc_votes: votes})
  .then((res) => {
      return res
  });
};