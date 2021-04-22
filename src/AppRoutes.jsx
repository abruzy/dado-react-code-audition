import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router'

import Loader from './components/loader/loader'
import { HOME_ROUTE, SEARCH_RESULT_ROUTE } from './utils/routes'

const HomePage = React.lazy(() => import('./pages/home/index'))
const SearchResult = React.lazy(() =>
  import('./pages/search-result/search-result')
)

const AppRoutes = () => {
  return (
    <Switch>
      <Suspense fallback={<Loader />}>
        <Route exact path={HOME_ROUTE} component={HomePage} />
        <Route path={SEARCH_RESULT_ROUTE} component={SearchResult} />
      </Suspense>
    </Switch>
  )
}

export default AppRoutes
