import { auth } from 'firebase'
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'


// export const AuthDetails = () => {
//     const [authUser, setAuthUser] = useState(null);
//     useEffect(() => {
//         const listen = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setAuthUser(user);
//             } else {
//                 setAuthUser(null);
//             }
//         })
//     }, [])

//     return (
//         <div>{authUser ? <p>Signed In</p> : <p>Signed out</p>}</div>
//     )
// }
