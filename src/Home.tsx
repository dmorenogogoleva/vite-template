import { useTextStyles } from '@rescui/typography';

import { NavLink } from "react-router";


function Home() {

  const textCn = useTextStyles();

  return (<>
    <h1 className={textCn('rs-h1')}>Hello world</h1>
    <br/>
      <NavLink to="/">
        go to dogs
      </NavLink>
  </>)
}

export default Home
