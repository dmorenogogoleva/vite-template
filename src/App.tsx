import { useCallback, useEffect, useState } from 'react'

import { BreedsList } from "./components/breeds-list/breeds-list.tsx";
import { useTextStyles } from '@rescui/typography';

import { breedsActions } from "./redux/slices/breeds-slice.ts";
import { imagesActions } from "./redux/slices/images-slice.ts";
import { useAppDispatch } from "./redux/hooks.ts";

import { DogPhoto } from "./components/dog-photo/dog-photo.tsx";

import { NavLink } from "react-router";

import './App.css'


function App() {
  const [title, setTitle] = useState('choose the dog');
  const dispatch = useAppDispatch();
  const textCn = useTextStyles();

  const getAllBreeds = useCallback(() => {
    dispatch(breedsActions.getAll())
  }, [dispatch])

  // fetch on load
  useEffect(() => {
    getAllBreeds()
  }, [getAllBreeds])

  const onBreedClick = useCallback((breed: string) => {
    setTitle(breed);
    dispatch(imagesActions.getImageByBreed(breed))
  }, [dispatch])

  return (<>
    <h1 className={textCn('rs-h1')}>{title}</h1>
    <br/>

    <NavLink to="/home">
      go home
    </NavLink>

    <BreedsList type="list" onClick={onBreedClick}/>
    <DogPhoto/>
  </>)
}

export default App
