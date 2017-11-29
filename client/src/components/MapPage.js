import React from 'react'
import { connect } from 'react-redux'
import { mapsApiKey } from '../config'
import SubTaskCreateForm from './SubTaskCreateForm'
import { addCompany } from '../actions/company'

import GoogleMapReact from 'google-map-react'

const MarkerPoints = ({ text }) => 
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 20, width: 50, top: 0, left: 0,    
  }}>
    {text}
  </div> 


const MapPage = (props) => (
        <div>
        This is the maps page
        <SubTaskCreateForm 
          onSubmit={(company) => {
            props.dispatch(addCompany(company))
          }}
        />
        <div style={{ height: "16em", width: "16em" }}>
          <GoogleMapReact
            center={{ lat: 40.0150, lng: -105.2705 }}
            defaultZoom={ 11 }
            bootstrapURLKeys={{ key: mapsApiKey }}>
            {props.company.map((company) => {
              return <MarkerPoints 
                key={company.id}
                lat={company.lat}
                lng={company.lng}
                text={company.name}
              />
            })}
            
          </GoogleMapReact>
          
        </div>
      </div>
)

const mapStateToProps = (state, props) => {
  return {
    company: state.company
  }
}

export default connect(mapStateToProps)(MapPage)