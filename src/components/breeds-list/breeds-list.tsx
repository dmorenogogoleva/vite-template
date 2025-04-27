import { useAppSelector } from "../../redux/hooks.ts";
import { Button } from "@rescui/button";

import './breeds-list.css'

interface IBreedsList {
  type?: 'list' | 'table',
  onClick: (breed: string) => void
}

export const BreedsList = ({ type, onClick }: IBreedsList) => {
  const breeds = useAppSelector(state => state.breeds.data) || {};

  return type === 'list' ? <ul className="list">
    {Object.keys(breeds)?.map(breed => <li className="jb-offset-top-4">
      <Button mode="clear" onClick={() => onClick(breed)}>
        {breed}
      </Button>
    </li>)}
  </ul> : <div>breeds table</div>
}