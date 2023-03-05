import React from 'react'
import { IoIosConstruct } from "react-icons/io";

import Container from "../components/Container";


function Construction() {
  return (
    <div className='bg-nord6 text-nord0'>
        <Container>
            <div className='w-full flex flex-col items-center justify-center gap-10 py-60'>
                <IoIosConstruct size={100} />
                <h1 className='font-bold'>Em construção</h1>
                <p className='font-semibold text-2xl'>Esta página está em construção. Por favor, volte mais tarde.</p>
            </div>
        </Container>
    </div>
  )
}

export default Construction