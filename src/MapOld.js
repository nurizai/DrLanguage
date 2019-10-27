import React, { useState }  from 'react'
import MapGl from 'react-map-gl'
import Page from './Page'

// eslint-disable-next-line
const token = process.env.REACT_APP_MAPBOX_TOKEN
export default function Map({ title, data }) {

  const [latitude, setLatitude] = useState(53.551086)
  const [longitude, setLongitude] = useState(9.993682)

  const [viewport, setViewport] = useState({
    latitude: latitude,
    longitude: longitude,
    width: "100vw",
    height: "100vh",
    zoom: 10
  })

  return (
    <Page title={title}>
      <MapGl {...viewport}
      mapboxApiAccessToken={"pk.eyJ1IjoibnVyaTkyIiwiYSI6ImNrMjRsNHIzMzBnbnkzZ3J3MXd3OXB1Z3EifQ.k46K4QsDr5_y2mAlSq8HcA"}
      mapStyle="mapbox://styles/nuri92/ck25zvu6l05ew1co4hec0mj1i"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
      >
      </MapGl>
    </Page>
  )
}
