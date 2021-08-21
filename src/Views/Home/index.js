import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import Place from '@Components/place'

const TestElement = () => <div>Hey World!</div>

export default function Home() {
    const [defaults, setDefaults] = useState({
        center: {
            lat: 59.95,
            lng: 30.33,
        },
        zoom: 11,
    })

    const apikey = 'AIzaSyDgGvJ30aLoNGelTxpMXkMUypM5F123Ra8'

    return (
        <div className="view">
            <div className="view-row">
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        defaultCenter={defaults.center}
                        defaultZoom={defaults.zoom}
                        bootstrapURLKeys={{ key: apikey }}
                    >
                        <Place
                            lat={59.955413}
                            lng={30.337844}
                            style={{ fontSize: '30px', color: '#08c' }}
                        />
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    )
}
