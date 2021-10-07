import React from 'react'
import { Route } from 'react-router'
import MainView from './views/MainView'
import ProductDesignView from './views/ProductDesignView'
import ProductGalleryView from './views/ProductGalleryView'
import ProductBusinessView from './views/ProductBusinessView'
import ProductQuoteView from './views/ProductQuoteView'
import AboutUsView from './views/AboutUsView'

function Routes() {
  return (
    <div>
      <Route path="/" exact component={MainView}/>
      <Route path="/productGalleryView" exact component={ProductGalleryView}/>
      <Route path="/productDesignView" exact component={ProductDesignView}/>
      <Route path="/productBusinessView" exact component={ProductBusinessView}/>
      <Route path="/productQuoteView" exact component={ProductQuoteView}/>
      <Route path="/aboutUsView" exact component={AboutUsView}/>
    </div>
  )
}

export default Routes
