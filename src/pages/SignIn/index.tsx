import {GoogleLogo} from 'phosphor-react';

import {GoogleAuthProvider, signInWithPopup, User} from 'firebase/auth';

import './styles.scss';
import { auth } from '../../services/firebase';
import { useState } from 'react';

export function SignIn() {
    const [user, setUser] = useState<User>({} as User);

    function handleGoogleSignIn(){
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result)=>{
            setUser(result.user);
        })
        .catch((error)=>{
            console.log(error);
        })

    }

    return(
        <div className="container">
            <div className='user'>
                {user.photoURL && <img src={user.photoURL} alt="foto do usuario"/>}
                <strong>{user.displayName}</strong>
                <small>{user.email}</small>
            </div>
            <h1>Acesse sua conta</h1>

            <span>
                Utilizando a autenticação social, como a google <br/>
                facilita a sua vida
            </span>

            <button type="button" className="button" onClick={handleGoogleSignIn}>
                <GoogleLogo/>
                Entrar com google
            </button>
        </div>
    );
    
}