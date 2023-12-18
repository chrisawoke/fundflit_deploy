// const authorization = "pk_L0TSszPRItlJytGG";

// export const createShortURL = async (url: string) => {
//   try {
//     const options = {
//       method: "POST",
//       headers: {
//         accept: "application/json",
//         "content-type": "application/json",
//         Authorization: authorization,
//       },
//       body: JSON.stringify({
//         domain: "cmtq.short.gy",
//         allowDuplicates: true,
//         originalURL: url,
//       }),
//     };

//     const response = await fetch("https://api.short.io/links/public", options);
//     const jsonResponse = await response.json();

//     if (jsonResponse && jsonResponse.secureShortURL) {
//       return jsonResponse.secureShortURL;
//     } else {
//       throw new Error("Unable to retrieve secureShortURL");
//     }
//   } catch (err) {
//     throw err;
//   }
// };

// export const checkUrlExist = (url: string) => {
//   const options = {
//     method: "GET",
//     headers: { accept: "application/json", Authorization: authorization },
//   };

//   fetch("https://api.short.io/api/links/public", options)
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err));
// };

// const fetchShortURL = async (did: string, recordID: string) => {
//     try {
//       const shortURL = await createShortURL(
//         `https://fundflit-crowdfunding.vercel.app/campaigns/detail/${did}/${recordID}`
//       );

//       console.log("shortened to: ", shortURL);
//       return shortURL;
//     } catch (error) {
//       console.error(error);
//     }
//   };
