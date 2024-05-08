import Button from 'components/Button/Button'
import { IsLoggedIn } from 'helpers/isLoggedIn'
import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from 'firebase.js';
import sprite from "svg/symbol-defs.svg";


export const UserMenu = () => {
    const user = IsLoggedIn()


    const handleLogout = async () => {



        await signOut(auth)
            .then(() => {

                console.log('Log Out is successful');
            })
            .catch((error) => {

                console.error('Error', error);
            });
        IsLoggedIn();
    }
    return (
        <div className='lg:flex  items-center text-center'>
            <div className='hidden lg:flex'>
                <div className='w-10 h-10 bg-white rounded-xl flex items-center justify-center  '>
                    <svg className='' width={16} height={16}>
                        <use href={`${sprite}#icon-avatar`} />
                    </svg>
                </div>
                <p className="ml-4 mr-6 flex items-center ">{user.displayName}</p>
            </div>
            <Button type={'button'} onClick={handleLogout}><span className='flex text-base' style={{ padding: "14px 38px", height: "48px" }}>Log Out</span></Button>
        </div>
    )
}
export default UserMenu;