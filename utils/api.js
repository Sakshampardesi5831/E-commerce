import axios from "axios";

// const params={
//     // headers:{
//     //     Authorization:"Bearer "+ process.env.REACT_APP_STRAPI_APP_KEY
//     // }
// }

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get("http://localhost:1337" + url, {
      headers: {
        Authorization:
          "Bearer 81cc4a3ab713a8c64fdccd59136b471fcc154710451cd39f64d1cfe0993eae065f3c5d9a9da55636ccd655ac03e455bca4ddb27cce86c81920711d64d647afbf6c06bb1c3258fa608bf03c51f58e08a2fa7b3ff6662efe1f55d4391352f916c38d0c186c6d5b94b069278e5ab900b52867f0cb200af7900b115f6eba0e2802b7",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
 export const makePaymentRequest= axios.create({
     baseURL:"http://localhost:1337",
     headers: {
      Authorization:
        "Bearer 81cc4a3ab713a8c64fdccd59136b471fcc154710451cd39f64d1cfe0993eae065f3c5d9a9da55636ccd655ac03e455bca4ddb27cce86c81920711d64d647afbf6c06bb1c3258fa608bf03c51f58e08a2fa7b3ff6662efe1f55d4391352f916c38d0c186c6d5b94b069278e5ab900b52867f0cb200af7900b115f6eba0e2802b7",
    },
})