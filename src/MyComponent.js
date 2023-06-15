import { useMap } from 'react-leaflet'


export default function MyComponent() {
    const map = useMap()
    console.log('map center:', map.getCenter())
    return null
  }