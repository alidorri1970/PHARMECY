import React, { useContext } from 'react'
import Header from './header'
import { shopContext } from './context/shopcontext';
import { InorderCard } from './shared/inorderCard';



export const Inorder = () => {

        const {cardItem} = useContext(shopContext);
  return (
    <div>
        <Header />
        <InorderCard />
    </div>
  )
}
