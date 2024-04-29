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
        <div className='flex'>
            <div>
                <svg className='' width={16} height={16}>
                    <use href={`${sprite}#icon-avatar`} />
                </svg>
            </div>
            <p className=""> {user.displayName}</p>
            <Button type={'button'} onClick={handleLogout}>Log Out</Button>
        </div>
    )
}
export default UserMenu;