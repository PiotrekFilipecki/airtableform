import React, {useState, useContext} from 'react'


export default function Quotes() {
    
    // const items = ['apple', 'banana', 'orange', 'grape', 'mango'];
    const items = [
        {
            type: 'Rush',
            text: 'Tak, widzę to, Twój następny wysiłek będzie równie WOW, jak zdolności RUSHa do przywrócenia elektrolitów – zaskakująco efektywny!'
        },
        {
            type: 'Rush',
            text: 'Hmmm… Przyszłość rysuje się dla Ciebie naturalnie, jak napój, który właśnie masz w ręku – czeka cię trochę ruchu, trochę potu, a potem mnóstwo smaku!'
        },
        {
            type: 'Rush',
            text: 'O ja cię! Twoje mięśnie krzyczą po więcej, ale RUSH przysięga, że w końcu będą krzyczały z radości po każdym treningu!'
        },        
        {
            type: 'Rush',
            text: 'Jak RUSH podnosi poziom nawodnienia, tak i ty podnosisz swoje umiejętności sportowe – razem tworzycie niewyczerpane źródło potencjału! – takie powercopule jak FRIZ i WERSOW ;)'
        },        
        {
            type: 'Rush',
            text: 'Widzę wiele potu i jeszcze więcej potu na twojej drodze – Niech RUSH będzie przy Tobie!'
        },        
        {
            type: 'Rush',
            text: 'O! O! Widzę! Widzę, że twój trening będzie tak intensywny, że nawet RUSH będzie musiał wziąć głęboki oddech, by nadążyć za tobą!'
        },        
        {
            type: 'Rush',
            text: 'Wiedz, że coś się dzieje, zbliża się moment, gdy twoje mięśnie zaczną protestować. Ale nie martw się, RUSH jest w pobliżu!'
        },        
        {
            type: 'Rush',
            text: 'Przygotuj się na sportowy rollercoaster! To jasne, że twój trening będzie tak ekscytujący, że RUSH zamierza podpisać kontrakt na prawa do ekranizacji!'
        },        
        {
            type: 'Rush',
            text: 'Twoje ciało będzie dziękować ci za codzienną dawkę ruchu, a RUSH będzie stał z boku, przytakując z dumą'
        },        
        {
            type: 'Rush',
            text: 'Czyżby? Tak! Widzę, że gotują się w Tobie ambicje. Ale spokojnie, RUSH jest gotowy na tę podróż, ma nawet swoją małą walizkę i przewodnik po najciekawszych fontannach z elektrolitami!'
        },       
        {
            type: 'Rush',
            text: 'Ha! czeka cię intensywny trening, ale RUSH jest gotów wspierać cię, nawet jeśli zrobisz jeden przysiad za dużo. Bez obaw, RUSH nie ocenia!'
        },        
        {
            type: 'Rush',
            text: 'W przyszłości widzę, że twoje mięśnie będą tak mocne, że nawet RUSH zacznie się zastanawiać, czy nie powinien zacząć chodzić na siłownię!'
        },       
        {
            type: 'Rush',
            text: 'Twoje ciało jest gotowe do aktywności, niczym superbohater przed walką ze złoczyńcą. A RUSH? On jest twoim pomocnikiem, gotowym na każdego sportowego potwora!'
        },        
        {
            type: 'Rush',
            text: 'Na mój gust to przez resztę dnia będziesz myślał Ile RUSHy potrzeba do wkręcenia żarówki. Tyle, ile baniek mydlanych w rękawicach bokserskich, bo walka z lenistwem może być równie zabawna co ekscytująca'
        },        
        {
            type: 'Rush',
            text: 'Już nie długo, po wypiciu RUSH, odkryjesz, że twoja kocia towarzyszka zacznie organizować własny tor przeszkód po mieszkaniu. To znak, że lenistwo to dla niej zbrodnia – dołącz do akcji!'
        },
        {
            type: 'Rush',
            text: 'Cóż za wizja! Twoje rękawiczki zimowe po wypiciu RUSH zaczną rzucać się w powietrze, a to nie zimno, lecz ich entuzjazm do ruszania się. Czas na zimowe szaleństwo!'
        },
        {
            type: 'Norush',
            text: 'Masz „farta”! Twoje dni będą równie kolorowe jak smak noRUSH – pełne radości, energii i przyjemności!'
        },
        {
            type: 'Norush',
            text: 'Zazdro! Twoje chwile relaksu będą odświeżające, jak łyk noRUSH – pełne witamin dla ciała i uśmiechu dla duszy!'
        },
        {
            type: 'Norush',
            text: 'Jak noRUSH ożywia zmysły, tak i ty odkryjesz w sobie nowe pasje i zainteresowania, tworząc bogaty katalog relaksacyjnych doświadczeń!'
        },
        {
            type: 'Norush',
            text: 'woje chwile wolnego czasu będą tak urozmaicone, jak smak noRUSH – pełne przygód, inspiracji i nowych odkryć!'
        },
        {
            type: 'Norush',
            text: 'Widzę twoją przyszłość! Patrz, zbliża się czas na reset. Twoje dni będą tak odświeżające, że nawet noRUSH zacznie się czuć zazdrosny!'
        },
        {
            type: 'Norush',
            text: 'Ach… chwile relaksu będą tak wyjątkowe, że nawet kaktus w pustyni zacznie zazdrościć o ilość spokoju, jaką osiągniesz!'
        },
        {
            type: 'Norush',
            text: 'Tam, tam!,  na horyzoncie czekają cię dni pełne odkryć i nauki. Ale bez obaw, nawet Einstein musiał zacząć od nauki picia wody!'
        },
        {
            type: 'Norush',
            text: 'Twoje chwile z przyjaciółmi będą tak dobre, że nawet Facebook będzie chciał polubić twoje relacje bardziej niż zdjęcia kotków!'
        },
        {
            type: 'Norush',
            text: 'O WOW! Przyszłość układa się tak, że twój czas ze znajomymi będzie bardziej wartościowy niż zestaw witamin w noRUSH. Nazywamy to wodowaniem w dobrym towarzystwie!'
        },
        {
            type: 'Norush',
            text: 'Widzę, że zaczynasz być guru relaksu. Nawet książki o medytacji zaczynają się zastanawiać, czy ty nie jesteś ich autorem!'
        },
        {
            type: 'Norush',
            text: 'Twoje dni wolne będą tak kolorowe, że nawet tęcza zacznie się czerwienić z zazdrości. A noRUSH będzie jak pigment w tym artystycznym spektaklu!'
        },
        {
            type: 'Norush',
            text: 'Czekają cię chwile spokoju tak relaksujące, że nawet fale na plaży zaczną się zastanawiać, czy nie powinny pracować nad swoim szumem!'
        },
        {
            type: 'Norush',
            text: 'Przyszłość jest jasna, jak noRUSH. Widzę, że czekają cię dni pełne śmiechu, spokoju i smaku życia, a woda witaminowa będzie towarzyszyć ci w tej pysznej podróży!'
        },
        {
            type: 'Norush',
            text: 'Masz plany na wieczorne czytanie? noRUSH jest jak Twój osobisty skarbnik mądrości, tylko bez skarbu – ale z witaminami!'
        },
        {
            type: 'Norush',
            text: 'Oto nastanie czas pełen spokoju i relaksu. Nawet twoja kawa zacznie się zastanawiać, czy nie jest czasem zbyt nerwowa na to wszystko!'
        },
        {
            type: 'Norush',
            text: 'Twoje umiejętności wypoczywania będą równie imponujące, jakbyś miał doktorat w lenistwie. noRUSH jest twoim mentorem na tej drodze do odprężenia!'
        },
        {
            type: 'Norush',
            text: 'Widzę, że dziś czeka cię naukowy maraton, ale bez efektów ubocznych jak po zbyt dużej ilości energetyków. noRUSH to jak turbo dla twojego umysłu – szybko, ale bez przegrzewania.'
        },
        
    ];

    const masks = [
        {
            type: 'Rush',
            mask: '/maskr1.png'
        },
        {
            type: 'Rush',
            mask: '/maskr2.png'
        },
        {
            type: 'Rush',
            mask: '/maskr3.png'
        },
        {
            type: 'Rush',
            mask: '/maskr4.png'
        },
    ];
    const masks2 = [
        {
            type: 'Norush',
            mask: '/masknr1.png'
        },
        {
            type: 'Norush',
            mask: '/masknr2.png'
        },
    ];
    const [randomItem, setRandomItem] = useState(null);
    const [randomMask, setRandomMask] = useState(null);
    const [trigger, setTrigger] = useState(false)
    

    const getRandomItem = () => {
        const randomIndex = Math.floor(Math.random() * items.length);
        const randomIndex2 = Math.floor(Math.random() * masks.length);
        const randomIndex3 = Math.floor(Math.random() * masks2.length);
        const selectedRandomItem = items[randomIndex];
        const selectedRandomMask = masks[randomIndex2];
        const selectedRandomMask2 = masks2[randomIndex3];
        
        setTrigger(true)


        setTimeout(() => {
            setRandomItem(selectedRandomItem);
            if (selectedRandomItem.type === 'Rush') {
                setRandomMask(selectedRandomMask)
            } else {
                setRandomMask(selectedRandomMask2)
            }
        }, 1200)
    };



    return (
        <div className='maskcontainer'>
            
            <button className={trigger ? 'play playhidden' : 'play'} onClick={getRandomItem}>
                Wylosuj swoją wróżbę
            </button>
            {randomItem && <h3>{randomItem.type}</h3>}
            {randomItem && <p>{randomItem.text}</p>}
            
            {randomItem && <img src={randomMask.mask} />}
        </div>
    );
}
