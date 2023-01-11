import HomePage from '../pages/HomePage.js'
import MediaDetails from '../pages/MediaDetails.js'
import MediaSearch from '../pages/MediaSearch.js'
import MediaList from '../pages/MediaList.js'
import PasswordUpdate from '../pages/PasswordUpdate.js'
import PersonDetail from '../pages/PersonDetail.js'
import ReviewList from '../pages/ReviewList.js'
import FavoriteList from '../pages/FavoriteList.js'
import ProtectedPage from '../components/common/ProtectedPage.jsx'

export const routesGen = {
  home: "/",
  mediaList: (type) => `/${type}`,
  mediaDetail: (type, id) => `/${type}/${id}`,
  mediaSearch: "/search",
  person: (id) => `/person/${id}`,
  favoriteList: "/favorites",
  reviewList: "/reviews",
  passwordUpdate: "password-update"
}

const routes = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/person:personId",
    element: <PersonDetail />,
    state: "person.detail"
  },
  {
    path: "/search",
    element: <MediaSearch />,
    state: "search"
  },
  {
    path: "/password-update",
    element: (
      <ProtectedPage>
        <PasswordUpdate />
      </ProtectedPage>
    ),
    state: "password.update"
  },
  {
    path: "/favorites",
    element: (
      <ProtectedPage>
        <FavoriteList />
      </ProtectedPage>
    ),
    state: "favorites"
  },
  {
    path: "/reviews",
    element: (
      <ProtectedPage>
        <ReviewList />
      </ProtectedPage>
    ),
    state: "reviews"
  },
  {
    path: "/:mediaType",
    element: <MediaList />
  },
  {
    path: "/:mediaType/:mediaId",
    element: <MediaDetails />
  }
];

export default routes;