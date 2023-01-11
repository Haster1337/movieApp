import publicClient from '../client/public.client.js'

const genresEndpoints = {
  list: ({mediaType}) => `${mediaType}/genres`
}

const genresApi = {
  getList: async ({mediaType}) => {
    try {
      const response = await publicClient.get(genresEndpoints.list({mediaType}));

      return {response};
    } catch (err) {
      return {err};
    }
  }
}

export default genresApi;