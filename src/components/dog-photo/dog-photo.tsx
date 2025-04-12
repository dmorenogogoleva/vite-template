import { useAppSelector } from "../../redux/hooks.ts";

import './dog-photo.css'

export const DogPhoto = () => {
  const images = useAppSelector(state => state.images.data) || [];
  return images.map(item => <img className="img" alt="" src={item}/>)
}

