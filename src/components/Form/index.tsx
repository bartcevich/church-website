'use client';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
//import validator from "email-validator";
//import axios from 'axios';
//import axios, { AxiosResponse } from 'axios';

const LANGUAGE_OPTIONS = [
  { value: '', label: 'language of communication' },
  { value: 'Srpski jezik', label: 'Srpski jezik' },
  { value: 'English language', label: 'English language' },
  { value: 'Русский язык', label: 'Русский язык' },
];
const THEM = [
  { value: '', label: 'Choose a topic of conversation' },
  { value: 'I need prayer support', label: 'Treba mi molitvena podrška' },
  { value: 'Help me find the answer to the question', label: 'Pomozite mi da pronađem odgovor na pitanje' },
];
const ViberForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [language, setLanguage] = useState('');
  const [them, setThem] = useState(''); // заменить на theme
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    language: "",
    them: "",
    //subject: "",
    message: "",
    access_key: "",
  });

  // теперь у тебя есть стейт formData, который ты можешь использовать вместо переменной. 
  useEffect(() => {
    setFormData({
      ...formData,
      name: name,
      email: email,
      language: language,
      them: them,
      message: message,
      access_key: "60829245-4068-4083-bc62-2704f53261e7",
    });
  }, [name, email, language, them, message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create an object with the form data
    // У тебя есть стейт с таким названием это ошибка создавать такой компонент

    // const formData = {
    //   name: name,
    //   language: language,
    //   choice: choice,
    //   message: message,
    //   access_key: "60829245-4068-4083-bc62-2704f53261e7"
    // };

    const data = JSON.stringify(formData);

    console.log('data=', JSON.stringify(formData), data);
    //fetch("https://api.web3forms.com/submit", {
    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        //setSending(false);
        //setSuccess(true);
        //setFailed(false);
        console.log("promise=", data);
      })
      .catch((err) => {
        console.log(err);
        //setSending(false);
        //setFailed(true);
      });
    setName('');
    setEmail('');
    setLanguage('');
    setThem('');
    setMessage('');
  };

  //axios.post('https://invite.viber.com/?g=0-Jx_HvB21BfKedr2ImRUxLItGMCACZ7', formData)
  // .then(response => {
  // console.log(response.data);
  //   })
  // .catch(error => {
  // console.error(error);
  //      });
  // setName('');
  //    setChoice('');
  //  setMessage('');
  //};

  return (
    <>
      <div className={styles.containerFormMap}>
        <div className={styles.containerForm}>
          <h3>Ako imate pitanja pišite</h3>
          <form onSubmit={handleSubmit} >
            <ul className={styles.wrapperForm}>
              <li>
                <h3>Kako se obratiti vama?</h3>
                <label>
                  <input type="text" 
                  placeholder='Enter you Name'
                  value={name} 
                   onChange={(e) => setName(e.target.value)} />
                </label>
              </li>
              <li>
                <h3>Unesite važeću adresu e-pošte</h3>
                <label>
                  <input type="text" 
                  placeholder='Enter a valid email address'
                  value={email} 
                   onChange={(e) => setName(e.target.value)} />
                </label>
              </li>
              <li>
                <label>
                  <h3>Izaberite jezik za komunikaciju</h3>
                  <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                  {/* В реакте не нужно писать много HTML, замени все опции на map функцию и создание компонента */}
                  {LANGUAGE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                   ))}
                  </select>
                </label>
              </li>
              <li>
                <label>
                  <h3>Izaberite temu razgovora</h3>
                  <select value={them} onChange={(e) => setThem(e.target.value)}>
                  {THEM.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                   ))}
                  </select>
                </label>
              </li>
              <li>
                <h3>Vaša poruka</h3>
                <label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                </label>
              </li>
            </ul>
        <button type="submit">Submit</button>
          </form>
        </div>
        <div className={styles.containerText}>
          <h4>Drago nam je &scaron;to ste ovdje</h4>
          <h4>Službe: nedjeljom u 10:00 sati.</h4>
          <h4>Na&scaron;a misija:</h4>
          <h4>Učeći Riječ Božiju živimo.</h4>
          <h4>Riječ Božija je vrijedna da je izučavamo i poučavamo.</h4>
          <h4>Samo silom Riječi Božije možemo da živimo život</h4>
          <h4>koji je na slavu Božiju.</h4>
          <h4>DOĐITE I PRIDRUŽITE NAM SE</h4>
          <h4>9 Špira Mugoše, Podgorica, MNE 81000</h4>
        </div>
        <div className={styles.containerMap}>
          <iframe
            width="330"
            height="450"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1472.2946482998245!2d19
            .25659104417604!3d42.43647620194799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4
            v1577381747681!5m2!1sen!2s">
          </iframe>
        </div>
      </div>
      
    </>
  );
};

export default ViberForm;