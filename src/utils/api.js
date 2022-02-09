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

export const getAllReviews = () => {
  return boardmastersApi.get("/reviews")
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

// export const patchVotes = (votes, review_id) => {
//   return boardmastersApi.patch(`reviews/${review_id}`, votes)
//   .then((res) => {
//       return res
//   });
// };

export const getReviewsbyId = (review_id) => {
  return boardmastersApi.get(`/reviews/${review_id}`)
  .then(({ data }) => {
    console.log(data)
    return data.review
  })
}

export const postComment = (review_id, body) => {
 console.log(body, "BODDDYYYY")
  return boardmastersApi.post(`reviews/${review_id}/comments`, body)
  .then((res) => {
    return res;
  })
}