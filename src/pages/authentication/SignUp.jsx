import React, { useState } from 'react';
import "./authentication.css";
import key from "./../../images/key.jpg"
import { Link,useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiFillEyeInvisible } from "react-icons/ai"
import { getAuth, createUserWithEmailAndPassword,updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { db } from '../../firebase';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';


const SignUp = () => {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();

 async function handleSignup(e) {
    e.preventDefault()
    try {
      const auth = getAuth()
      const userCredentials = await createUserWithEmailAndPassword(auth, Email, Password);
      updateProfile(auth.currentUser, {
        displayName: FullName
      })

      const user = userCredentials.user
      await setDoc(doc(db, "users", user.uid), {
        email: Email,
        name: FullName,
        timestamp: serverTimestamp(),
      });

      navigate("/")

      console.log(user)
    } catch (error) {
      toast.error("something went wrong with your signup")
    }
  }

  {/** 
  async function handleGoogleSignup() {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()

      const result = await signInWithPopup(auth, provider)
      const user = result.user;

      // checking if the user aleady existed

      const docRef = doc(db,"users",user.id)

      const onSnapShot = await getDoc(docRef)

      if (!onSnapShot.exists()) {
        setDoc(docRef, {
          name : user.displayName,
          email: user.email,
          timestamp : serverTimestamp(),
        })
      }
      console.log(user)


    } catch (error) {
      toast.error("Signup with Google wasnt succesfull")
    }
  }***/}

  return (
    <section>
      <div className="authentication">
        <h2>SignUp</h2>

        <div className="authentication__container container">
          <div className="authentication__img">
            <img className='authentication__key' src={key} alt="login key" />
          </div>
          <div className="authentication__form">
            <form onSubmit={handleSignup}>
              <input onChange={(e) => { setFullName(e.target.value) }} className='form__input' type='text' placeholder='Full Name'/>
              <input onChange={(e) => { setEmail(e.target.value) }} className='form__input' type="email" placeholder='Email Adress' />

              <div className='password__wrapper'>
                <input onChange={(e) => { setPassword(e.target.value) }} className='form__input' type={showPassword ? "password" : "text"} placeholder='Password' />
                <p className="showpassword"
                  onClick={() => { setShowPassword(!showPassword) }}>
                  {showPassword ? <AiFillEyeInvisible className='eyes' size={30} /> : <AiOutlineEye className='eyes' size={30} />}</p>
              </div>

              <div className="redirection">
                <p>Already have an Account? <Link className='reg__color' to="/signin">SignIn</Link></p>
                <Link className='forgot__pass' to="/forgotpass">Forgot Password</Link>
              </div>

              <button className='btn form__input' type='submit'>Submit</button>
              <p>OR</p>

              <button className='btn btn-primary form__input google'
                type="button"><span><img className="googleimg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB6CAMAAACyeTxmAAABJlBMVEX////pQjU0qFNChfT6uwWAqvk5gfQzf/Tm7v690Pv6tgD6uQAwp1DpQDPpPC7/vADoOCklpEnn8+r63Nv98fD1sKz7wADoNjff8OPy+fT86ejrUkfoLBnoMSD4+v8QoT/sYlnudGzxj4nrST3nHQD4zszoJhD3phX/+vD7viX/9OD+8NL81IX95rj93Zb+35/94qpglvbd5/1DrV7R6NbC4cn3v7vynZjsWlD0pqHue3Txh4DtZmX1jwD80HHrVTDubSvyiCPweif1lh37xUjsTQn7xTrQ3vz8zFwhd/RJozXQtiaExZOauvmmsjh5rUWaz6beuB9Uqk3BtTCPsD+txvpmvYax2rpjuXMml5A1o3BAiec/kM4/mrA3n4kxpWI7k7yEsOVV1wY9AAAFRElEQVRoge2YaXvaRhDHhSyDDZLQIkwNSBaHIT5ip7E4fLTunYRGaUlaY9I2Pb7/l+iKW2J2pV1J+Hla/i/8xqCf5j8zO7MIwlZbbbXVZlSs6FNVipsi6r1+vVZtKupEqep1/e5AryQL1W/qVcPQVFVZkaqZbaXW6CUVud64NkxVSUHCcEO5TQBdvKkeazBzyTbMhh4rtXJnmHToDK0d11pxUgNCXZFqXMdDLjY0LSx0SjbrMbjda4Zy2CNNvYlIrdyyU7EUsxapo1sKm8VLqWaPH9s/5gl2FrLR4MXWDG6qK7PGdYxUqrwez6VVOepab6oRsdjqA2ZsKxUda7JjdeVJsJXo0aY4TBZiwLY5sLWolZxKHXNgG2bAQ90p324bhvvHhEYVTyULPfpxoWjt6m2/hze6It7uWgeNmmn4thAubKVJORwVzaz1dd85VOnV1dXxwVPJglCnJFdTb+GhXukvxyUftkdOLnWg4/Vg1gQ8JgvFFNFlrUlfYPTa5JV5GkgQ7kguK+27wC/32wpXA+E8kVwON8dbKl+0wheEg0pthhtpOh/2/EsCtprsBei+9Oyrz6Bok8WeZaVS7us1sKIlfN27zEmSVPrGD27Hd/WAJblcqfTMCzb7CWMvstJEJWk1yep1wljhPifNVPp2AVa0eK+W6zo5XXCl0ncbc1k4z0pLzRtKaSb+w8nznLQKnjaUGfVmF6zvPdxpQympxMM9k/zCDaUFD6Go8qR37vUPSRezILzIrXEl6RXtG6932fQafMobgJt7TuPuD9IsyuyCT/GXlavsBZWb2WHSS+ghJ68g7kmc3J0j4CHr5YxtPqVh2bl7wEPOofS+iZWbvgrLpZYVOxcq6Iv19pWyl7FyM/thuS82wIXK+fP/MPepfH6iutpAH4XnxntugFzwnJRi5YLnxgbmAnhOCiA31jkIc8G5fx8nF5yD4J6TO6UZvT/IEAVhwbkP7XV56ccOhXu0RxZkM8xdL+j8Wxk5FC7tlQbr3Mw7+LO+BSuX/0kURbnAxYVSD7av4L+n5KWfMVZEQy7ubhrgguXsS3D+/QcXK8o2T8BHYFmB5ey9h+Z/EWfiyvADYHMaXp+FlXt3Lv+ruBA6ZMYevQTCzTyQPj4fhXnpwxKLnWbm7gPVTEwv1tTo/HvRI2anwewS04t1mZ23j0dWl437Djqt0oTudXWSnbePL2KmFO8DPUS1GVfWvH28YmqmK9BlwuE809lbgMoGPtqBwyVW80QjmQCWaQNiRXswdidDripXhxbMFWX0GAZ7RcDSqmoiBxHAojUKxj5AjetqQA9XEMo2wWlc1WJAPx2OP6YJ4RLPyIW6xICx12NKlgsOktFvv4ObRjooXKwRGeySu2XwWx1HRBNP/oAmb1B2J+9NdtolW7bT8aHLneEYofn/PwHgEOFip0k1PY/ZEkfDx27BVaf76IxlC628qvWnv6Yz8A9XaxrSwRM2smZCyG8P+subZMLvVoDGlBSHkGz9vdpPlEHkFzXFIWR9zCy8hm8JsChdHE7LhhoQtkhYh5HBs4Ya0OdB/GAZfcKHV/iaig3sNhQ71j0/olW121D/sGOxRoF9HBAw5+UKHyARvJYR4zq4og6/18hm3/eXKjtrx2C4YC0Hnluh1eUJGdn8Hi9CHsqMZISGEYOdkR2LgYwsJ0pmPSoMUbjSxsPZ4fuFgKTu2AoqMQy143HYo4K7zZDYMoaOhyGXe3b0o2Mjd8WQ5QVPdpcPNB4NY8sqqHKhg1cq254iRdsej5zHTiF+e2F6uXDoqrAp4FZbbfW/179wN6bIyeplrwAAAABJRU5ErkJggg==" alt="" /></span>Continue With Google</button>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}

export default SignUp