
export const useFetch = () => {

  const getProducts = async (query) => {
    try {
        const data = await fetch(
            "https://graphql.contentful.com/content/v1/spaces/qtnynox3n87r/environments/master",{
                method: "POST",
                headers: {
                "content-type": "application/json",
                authorization: `Bearer bNDi2hwgwk4WzTjFj4KqYTFDxfC6GLRXuaGSBMkgmPo`,
                },
                body: JSON.stringify({query}),
            });

        return data.json();
    } catch (error) {   
        console.log(`Error fetching ${error}`);
    }
   
  };

  return { getProducts }
};
