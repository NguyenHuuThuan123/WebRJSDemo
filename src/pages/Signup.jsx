import React, {useState} from 'react'

import {Container,Row, Col,Form, FormGroup} from "reactstrap"
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import "../styles/checkout.css";
import { useSelector } from "react-redux";
import {Link } from "react-router-dom";
import "../styles/login.css";
import {createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from '../firebase.config';
import {storage} from '../firebase.config';

import { setDoc, doc } from 'firebase/firestore';
 import { db } from '../firebase.config';
import {toast} from 'react-toastify';

import { getDownloadURL, ref, uploadBytesResumable} from "firebase/storage"

const Signup = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [username,setUsername] = useState('')
  const [file,setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const  signup = async(e) => {
      e.preventDefault()
      setLoading(true)

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email ,password);
        const user = userCredential.user;
        const storageRef = ref(storage, `images/${Date.now() + username}`)
        const  uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on((error)=> {
          toast.error(error.message);
        }, 
        ()=> {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{


            // cap nhat user profile
           await updateProfile(user,{          
              displayName: username,
              photoURL: downloadURL,
            });

            //store user data firestore database
            await setDoc(doc(db, "users" , user.uid),{
                uid: user.uid,
                displayName: username,
                email,
                photoURL: downloadURL,
            } );
          });
        }
        );

        console.log(user);   
        
      }catch (error){

        toast.error("wrong wrong !!!!!")
      }
  }




  return (
    <Helmet title ="Signup">
      <section>
        <Container>
          <Row>
            <Col lg='6' className="m-auto text-center">
              <h3 className="fw-bold fs-4">
                  Signup
              </h3>
                <Form className="auth__form " onSubmit={signup}>
                  <FormGroup className="form__group">
                  <input type="text" placeholder="UserName" 
                  value={username} onChange={e => setUsername(e.target.value)}/>
                  </FormGroup>

                  <FormGroup className="form__group">
                  <input type="email" placeholder="your email" 
                  value={email} onChange={e => setEmail(e.target.value)}/>
                  </FormGroup>

                  <FormGroup className="form__group">
                  <input type="password" placeholder="your password"
                   value={password} onChange={e => setPassword(e.target.value)} />
                  </FormGroup>

                  <FormGroup className="form__group">
                  <input type="file" 
                   onChange={e => setPassword(e.target.files[0])} />
                  </FormGroup>

                  <button type="submit" className="but__btn auth__btn">Create account</button>
                    <p>Create account <Link to='/login'>hear</Link></p>
                </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Signup;