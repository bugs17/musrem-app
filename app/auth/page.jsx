import { LoginForm } from '@/components/login-form'
import React from 'react'

const Auth = () => {
  return (
    <div className="absolute  items-center inset-0 -z-10 h-full w-full  px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          <div className='w-full h-full justify-center items-center flex'>

            <div className='flex w-full max-w-sm flex-col gap-6'>
              <LoginForm />
            </div>
          </div>
    </div>
  )
}

export default Auth