import { useRef, useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import getSubmissions from '../services/getSubmissions'
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Quotes from '../components/Quotes';

export const getStaticProps = async () => {
  const submissions = await getSubmissions(4);
  

  return {
    props: {
      submissions
    }
  }
}

export default function Home({submissions}) {
  const offerForm = useRef();
  const [error, setError] = useState();
  const formRef = useRef()
  const [message, setMessage] = useState(false)

  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const [formProcessing, setFormProcessing] = useState(false);
  const router = useRouter();
  const [imagePreviewUrl, setImagePreviewUrl] = useState();
  const [showForm, setShowForm] = useState(false)
  let start;
  const loader = useRef(null);
  const path = useRef(null);
  const initialCurve = 200;
  const duration = 600;
  


  useEffect(() => {
    setPath(initialCurve)
    setTimeout( () => {
      document.body.classList.add("setbg")
    }, 300)
    setTimeout( () => {
      requestAnimationFrame(animate)
    }, 500)
    AOS.init();


  }, [])

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
};

// Validate checkbox on state change
useEffect(() => {
    if (isChecked) {
        setIsSubmitDisabled(false);
    } else {
        setIsSubmitDisabled(true);
    }
}, [isChecked]);

  const animate = (timestamp) => {
    if(start === undefined){
      start = timestamp
    }
    const elapsed = timestamp - start;

    const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration)
    setPath(newCurve);

    loader.current.style.top = easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";

    if(elapsed < duration){
      requestAnimationFrame(animate)
    }
  }

  const easeOutQuad = (time, start, end, duration) => {
    return -end * (time /= duration) * (time - 2) + start;
  }

  const loaderHeight = () => {
    const loaderBounds = loader.current.getBoundingClientRect();
    return loaderBounds.height;
  }

  const setPath = (curve) => {
    const width = window.innerWidth
    const height = loaderHeight();
    path.current.setAttributeNS(null, "d",
    `M0 0
    L${width} 0
    L${width} ${height}
    Q${width/2} ${height - curve} 0 ${height}
    L0 0`
    )
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formProcessing) return;
    setError(null);
    setFormProcessing(true);
    const form = new FormData(offerForm.current);
    const payload = {
      firstName: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
      phone: form.get('phone'),
      code: form.get('code'),

    };




    
    const response = await fetch('/api/submissions', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      // router.push('/thankyou');
      document.querySelector('.formheader').classList.add("formheaderhide")
      setMessage(true)
      document.body.classList.add("hideoverflow")
      setFormProcessing(false);
      
      
    } else {
      const payload = await response.json();
      setFormProcessing(false);
      setError(payload.error?.details[0]?.message);
    }
  };


  return (
    <div className={styles.container}>
      <Head>
        <title>Karnawał z noRUSH/RUSH</title>
        <meta name="description" content="Karnawał z noRUSH/RUSH" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
          <Image
          alt='Żabka'
          src="/zab.svg"
          width={121}
          height={47}
          />
          <a className='mobileterms' href="/regulamin.pdf" target="_blank">Regulamin</a>
          <nav>
            <a href="#nagrody">Nagrody</a>
            <a href="#zasady">Zasady</a>
            <a href="#wez-udzial">Weź udział</a>
            <a href="#kontakt">Kontakt</a>
            <a className="termslink" href="/regulamin.pdf" target="_blank">Regulamin</a>
          </nav>
        </header>
      <main className={styles.main}>

<div className={styles.body}>
  <h1>Karnawał z</h1>
  <h1 className='norheader'><span>no</span><span>RUSH</span></h1>
  <h1 className='rheader'><span>RUSH</span></h1>
  <Image
  className={styles.norush1}
  alt='No Rush'
  src='/norush1.png'
  width={335}
  height={1044}
  />
  <Image
  className={styles.norush2}
  alt='No Rush'
  src='/norush2.png'
  width={335}
  height={1044}
  />
          <Image
          className={styles.norush3}
  alt='No Rush'
  src='/rush1.png'
  width={379}
  height={1283}
  />
                  <Image
                  className={styles.norush4}
  alt='No Rush'
  src='/rush2.png'
  width={379}
  height={1283}
  />
</div>
<div ref={loader} className={styles.loader}>
  <svg>
    <path ref={path}></path>
  </svg>
</div>
<div id="nagrody" className={styles.prizes}>
  <h2 data-aos="fade-left">Nagrody</h2>

  <div className={styles.prizelist}>
    <div 
    className={styles.prize}
    data-aos="fade-zoom-in"
data-aos-easing="ease-in-back"
data-aos-delay="200"
data-aos-offset="0"
    >
      <div className='prizeimages'>
<Image 
alt='rush'
src='/ts.png'
width={386}
height={348}
className='tsimg'
/>
<Image 
alt='rush'
src='/kub.png'
width={290}
height={302}
className='kubimg'
/>
<Image 
alt='rush'
src='/brel.png'
width={295}
height={117}
className='brelimg'
/>
</div>
  <div className="bm-pl">
{/* <div className="bm-pl__blob bm-pl__blob--r"></div> */}
<div className="bm-pl__blob bm-pl__blob--g">


</div>
{/* <div className="bm-pl__blob bm-pl__blob--b"></div> */}
</div>


      <div className={styles.prizeinfo}>
        <h3>150x</h3>
        <p>Box: T-shirt, kubek, brelok</p>
      </div>
    </div>

    <div 
    className={styles.prize}
    data-aos="fade-zoom-in"
data-aos-easing="ease-in-back"
data-aos-delay="200"
data-aos-offset="0"
    >
      <div className='prizeimages'>
<Image 
alt='rush'
src='/ts.png'
width={386}
height={348}
className='tsimg'
/>
<Image 
alt='rush'
src='/kub.png'
width={290}
height={302}
className='kubimg'
/>
<Image 
alt='rush'
src='/brel.png'
width={295}
height={117}
className='brelimg'
/>
</div>
  <div className="bm-pl">
{/* <div className="bm-pl__blob bm-pl__blob--r"></div> */}
<div className="bm-pl__blob bm-pl__blob--g">


</div>
{/* <div className="bm-pl__blob bm-pl__blob--b"></div> */}
</div>


      <div className={styles.prizeinfo}>
        <h3>50x</h3>
        <p>T-shirt z autografem WERSOW lub MORTALCIA, brelok, kubek</p>
      </div>
    </div>
    <div 
    className={styles.prize}
    data-aos="fade-zoom-in"
data-aos-easing="ease-in-back"
data-aos-delay="200"
data-aos-offset="0"
    >
      <div className='prizeimages'>
<Image 
alt='rush'
src='/coverr.webp'
width={386}
height={386}
className='tsimg'
/>
{/* <Image 
alt='rush'
src='/kub.png'
width={290}
height={302}
className='kubimg'
/>
<Image 
alt='rush'
src='/brel.png'
width={295}
height={117}
className='brelimg'
/> */}
</div>
  <div className="bm-pl">
{/* <div className="bm-pl__blob bm-pl__blob--r"></div> */}
<div className="bm-pl__blob bm-pl__blob--g">


</div>
{/* <div className="bm-pl__blob bm-pl__blob--b"></div> */}
</div>


      <div className={styles.prizeinfo}>
        <h3>6x</h3>
        <p>bilet na koncert WERSOW + płyta WERSOW</p>
      </div>
    </div>
    <div 
    className={styles.prize}
    data-aos="fade-zoom-in"
data-aos-easing="ease-in-back"
data-aos-delay="200"
data-aos-offset="0"
    >
      <div className='prizeimages'>
      <Image 
alt='rush'
src='/coverr.webp'
width={386}
height={386}
className='tsimg'
/>
{/* <Image 
alt='rush'
src='/kub.png'
width={290}
height={302}
className='kubimg'
/>
<Image 
alt='rush'
src='/brel.png'
width={295}
height={117}
className='brelimg'
/> */}
</div>
  <div className="bm-pl">
{/* <div className="bm-pl__blob bm-pl__blob--r"></div> */}
<div className="bm-pl__blob bm-pl__blob--g">


</div>
{/* <div className="bm-pl__blob bm-pl__blob--b"></div> */}
</div>


      <div className={styles.prizeinfo}>
        <h3>4x</h3>
        <p>bilet na M&G z WERSOW + płyta WERSOW </p>
      </div>
    </div>

  </div>
  <p className='prizesdisc'>* Wizualizacja nagród jest przykładowa. Finalny produkt może się w rzeczywistości różnić.</p>
</div>
<div id="zasady" className={styles.rules}>
  <h2
  data-aos="fade-zoom-in"
  data-aos-easing="ease-in-back"
  data-aos-delay="100"
  data-aos-offset="0"
  >Zasady</h2>
 <div className={styles.ruleslist}>
  <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
  className={styles.rule}>
    <span>1</span>
    <Image
  
  alt='No Rush'
  src='/bott.png'
  width={190}
  height={200}
  />
  <h4>Kup 2 dowolne produkty</h4>
  <p>RUSH/noRUSH w Żabce</p>
  </div>
  <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="200"
          data-aos-offset="0"
  className={styles.rule}>
    <span>2</span>
    <Image
  
  alt='No Rush'
  src='/zappka.svg'
  width={121}
  height={208}
  />
  <h4>ZESKANUJ APLIKACJĘ Żappka</h4>
  <p>podczas zakupu i odbierz kod, który pojawi się w aplikacji</p>
  </div>
  <div 
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
  className={styles.rule}>
    <span>3</span>
    <Image
  
  alt='No Rush'
  src='/pytajnik.svg'
  width={126}
  height={196}
  />
  <h4>ODPOWIEDZ NA PYTANIE</h4>
  <p>Jaki jest Twój wymarzony karnawał z RUSH lub noRUSH?</p>
  </div>
 </div>
</div>
<div id="wez-udzial" className={styles.form}>
  <h2
  data-aos="fade-zoom-in"
  data-aos-easing="ease-in-back"
  data-aos-delay="100"
  data-aos-offset="0"
  className='formheader'
  >Mój wymarzony karnawał</h2>
  <div className={styles.formwrap}>
  <div className={message ? "modal visible" : "modal"}>
        
        {/* <button onClick={(e) => {
e.preventDefault()
setMessage(false)
        }}>ddd</button> */}
        <h3>Twoje zgłoszenie zostało przyjęte</h3>
        {/* <h3>Oto Twoja wróżba</h3> */}
        <Quotes />
        </div>

  </div>
</div>
<div id="kontakt" className={styles.contact}>
  <h2>Kontakt</h2>
  <img src="/image001.png" />
  <p>ul. Pod Sikornikiem 27A</p>
  <p>30-216 Kraków</p>
  <a href="mailto:hello@theessa.pl">hello@theessa.pl</a>
</div>



</main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
