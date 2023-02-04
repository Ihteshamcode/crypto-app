import React from 'react'
import CoinsItems from './CoinsItems'

const Coin = (props) => {
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin'>coin</p>
                <p>price</p>
                <p>24h</p>
                <p className="hide">volume</p>
                <p className="hide">Market</p>
            </div>
         {
            props.coins.map(coins=>{
                return(
                    <CoinsItems coins={coins} key={coins.id}/>
                )
            })
         }

        </div>
    </div>
  )
}

export default Coin