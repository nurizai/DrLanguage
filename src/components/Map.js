import React, { useState } from 'react'
import Page from '../common/Page'
import MapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export default function Map({ title, data = { latitude: 53.551086, longitude: 9.993682 } }) {

  const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN || 'pk.eyJ1IjoibnVyaTkyIiwiYSI6ImNrMjRsNHIzMzBnbnkzZ3J3MXd3OXB1Z3EifQ.k46K4QsDr5_y2mAlSq8HcA'

  const [viewport, setViewport] = useState({
    latitude: data.latitude,
    longitude: data.longitude,
    width: "100vw",
    height: "100vh",
    zoom: 15
  })

  return (
    <Page title={title}>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/nuri92/ck25zvu6l05ew1co4hec0mj1i"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >



      </MapGL>
    </Page>
  )

}