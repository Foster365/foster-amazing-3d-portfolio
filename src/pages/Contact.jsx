import React, { Suspense, useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';

import Fox from '../models/Fox';
import Loader from '../components/Loader';
import Alert from '../components/Alert';

import useAlert from '../hooks/useAlert';

const Contact = () => {

  const formRef = useRef(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setisLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFocus = () => setCurrentAnimation('walk')
  const handleBlur = () => setCurrentAnimation('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setisLoading(true)
    setCurrentAnimation('hit')

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      // "service_i2z9skm",
      // "template_00b8idz",
      {
        from_name: form.name,
        to_name: "Bárbara",
        from_email: form.email,
        to_email: "barbara.lombardo.98@gmail.com",
        message: form.message
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      // "QmiUnCvK9KY8RlLj3"
    ).then(() => {
      setisLoading(false);
      showAlert({
        show: true,
        text: 'Message sent successfully!',
        type: 'success'
      })

      setTimeout(function() {
        function resetForm(){

          hideAlert(false);
          setCurrentAnimation("idle");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }
        resetForm()
      }, 3000)
      //TODO: Hide an alert
    }),
    (err) => {

      setisLoading(false)
      setCurrentAnimation('idle')
      console.log(err)
      showAlert({
        show: true,
        text: 'I didnt receive your message!',
        type: 'danger'
      })
      //TODO: Show error message
    }
  }

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-full">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[%50] flex flex-col">
        <h1 className="head-text">Get in touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              className="input"
              type="text"
              name="name"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              className="input"
              type="email"
              name="email"
              placeholder="john@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Write your thoughts here...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div
        className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]"
      >
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: .1,
            far: 1000
          }}
        >
          <directionalLight
            intensity={2.5}
            position={[0, 0, 1]}
          />
          <ambientLight
            intensity={.5}
          />
          <Suspense
            fallback={<Loader />}
          >
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact