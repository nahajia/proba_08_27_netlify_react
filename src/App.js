import { useEffect, useState } from "react";
import Select from 'react-select'
import "./App.css";

function App() {
 
  const options = [
  { value: 1, label: '1-rosszul' },
  { value: 2, label: '2-gyengén' },
  { value: 3, label: '3-átlagos szinten' },
  { value: 4, label: '4-jól' },
  { value: 5, label: '5-kiválóan' },
]
  const tomb=[
  { "sorszam": 1, "kijelentes": "Kéziszerszámok használata.", "tipus": "kezugyesseg" },
  { "sorszam": 2, "kijelentes": "A visszajáró pénz gyors kiszámolása.", "tipus": "matematikai" },
  { "sorszam": 3, "kijelentes": "A munkavégzés során felmerülő problémák önálló megoldása.", "tipus": "problemamegoldo" },
  { "sorszam": 4, "kijelentes": "A konfliktusok ellenére együtt dolgozni valakivel.", "tipus": "egyuttmukodo" },
  { "sorszam": 5, "kijelentes": "Ügyfeleket tájékoztatni.", "tipus": "kommunikacios" },
  { "sorszam": 6, "kijelentes": "Egész nap kétkezi munkát végezni.", "tipus": "kezugyesseg" },
  { "sorszam": 7, "kijelentes": "Adatsorok összeadása fejben.", "tipus": "matematikai" },
  { "sorszam": 8, "kijelentes": "Rájönni egy összetett feladat legegyszerűbb megoldására.", "tipus": "problemamegoldo" },
  { "sorszam": 9, "kijelentes": "Közösségi tevékenységben való aktív részvétel.", "tipus": "egyuttmukodo" },
  { "sorszam": 10, "kijelentes": "Bonyolult gondolatok elmagyarázása szóban.", "tipus": "kommunikacios" },
  { "sorszam": 11, "kijelentes": "Cérna befűzése tűbe.", "tipus": "kezugyesseg" },
  { "sorszam": 12, "kijelentes": "Családi költségvetés - bevételek, kiadások - tervezése.", "tipus": "matematikai" },
  { "sorszam": 13, "kijelentes": "Logikai fejtörők megoldása.", "tipus": "problemamegoldo" },
  { "sorszam": 14, "kijelentes": "Csoportban való munkavégzés/együttműködés a feladatok megoldásában.", "tipus": "egyuttmukodo" },
  { "sorszam": 15, "kijelentes": "Hallott szöveg gyors felfogása.", "tipus": "kommunikacios" },
  { "sorszam": 16, "kijelentes": "Célba dobni.", "tipus": "kezugyesseg" },
  { "sorszam": 17, "kijelentes": "Adatokkal, számokkal való munkavégzés.", "tipus": "matematikai" },
  { "sorszam": 18, "kijelentes": "Különböző megoldások kigondolása egy feladathoz.", "tipus": "problemamegoldo" },
  { "sorszam": 19, "kijelentes": "A közös hang megtalálása munkatársaimmal.", "tipus": "egyuttmukodo" },
  { "sorszam": 20, "kijelentes": "Népes hallgatóság előtt beszélni.", "tipus": "kommunikacios" },
  { "sorszam": 21, "kijelentes": "Csipesszel apró tárgyak megfogása.", "tipus": "kezugyesseg" },
  { "sorszam": 22, "kijelentes": "Utazás várható időtartamának kiszámítása.", "tipus": "matematikai" },
  { "sorszam": 23, "kijelentes": "Problémák lényegének gyors felismerése.", "tipus": "problemamegoldo" },
  { "sorszam": 24, "kijelentes": "Konszenzus/egyetértés kialakítása kollégáimmal.", "tipus": "egyuttmukodo" },
  { "sorszam": 25, "kijelentes": "Gondolataimat írásban kifejteni.", "tipus": "kommunikacios" },
  { "sorszam": 26, "kijelentes": "Tárgyak elemeinek összecsavarozása.", "tipus": "kezugyesseg" },
  { "sorszam": 27, "kijelentes": "Matematikai feladványok kiszámítása.", "tipus": "matematikai" },
  { "sorszam": 28, "kijelentes": "Ugyanannak a problémának több szempont szerinti megközelítése.", "tipus": "problemamegoldo" },
  { "sorszam": 29, "kijelentes": "Jó munkahelyi légkör kialakítása.", "tipus": "egyuttmukodo" },
  { "sorszam": 30, "kijelentes": "Mondatok tiszta, érthető kiejtése.", "tipus": "kommunikacios" }
  ]

  const [tombKevert, setTombKevert] = useState([]);
  const [mindenKitoltve, setMindenKitoltve] = useState(false);
  const [message, setMessage] = useState("");
  const [valasztasok, setValasztasok] = useState([]); // itt tároljuk a select-ek értékeit
  const [ertek1,setErtek1]=useState(0);
  const [ertek2,setErtek2]=useState(0);
  const [ertek3,setErtek3]=useState(0);
  const [ertek4,setErtek4]=useState(0);
  const [ertek5,setErtek5]=useState(0);  

  useEffect(() => {
    let tombSeged=[...tomb];
    for (let i = 0; i < 100; i++) {
      let rnd1=Math.floor(Math.random() * tombSeged.length)
      let rnd2=Math.floor(Math.random() * tombSeged.length)
      let csere=tombSeged[rnd1]
      tombSeged[rnd1]=tombSeged[rnd2]
      tombSeged[rnd2]=csere
      
    }
    setTombKevert(tombSeged)
     // <<< Ez a sor tiltja le az ESLint figyelmeztetést a következő sorra
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleClick = () => {
    if (valasztasok.length!=30){
        setMessage("Minden mezőt ki kell tölteni!");
        return;
    }
    setMindenKitoltve(true)
    setMessage("Sikeres kitöltés!");
  };

  const handleSelectChange = (sorszam, selectedOption) => {
    //alert(selectedOption.value)
     setValasztasok((prev) => {
    // Ellenőrizzük, van-e már elem a tömbben ezzel a sorszámmal
    const existingIndex = prev.findIndex(item => item.sorszam === sorszam);
    if (existingIndex >= 0) {
      // Ha van, frissítjük az értéket
      const updated = [...prev];
      updated[existingIndex] = { sorszam, valasztas: selectedOption ? selectedOption.value : null };
      return updated;
    } else {
      // Ha nincs, hozzáadjuk az új objektumot
      return [...prev, { sorszam, valasztas: selectedOption ? selectedOption.value : null }];
    }})

      if (sorszam%5==1)
        setErtek1(ertek1+selectedOption.value);
      else if (sorszam%5==2)
        setErtek2(ertek2+selectedOption.value);
      else if (sorszam%5==3)
        setErtek3(ertek3+selectedOption.value);
      else if (sorszam%5==4)
        setErtek4(ertek4+selectedOption.value);
      else if (sorszam%5==0)
        setErtek5(ertek5+selectedOption.value);

    };
  return (
    <div className="App">
      <h1>Pályaorientációs kérdőív</h1>
      <h4>Ha pályaválasztás előtt állsz, érdemes
tisztázni, hogy milyen képességekkel rendelkezel. A képességek erősen befolyásolják, hogy
pályádon, egy foglalkozás gyakorlásánál mennyire leszel sikeres. Az alábbi kérdőív ebben jelenthet
segítséget: kitöltésével tájékozódhatsz a képességeidről, melyek jelentik az erősségeidet és melyek
azok, amelyekben gyengébb vagy.</h4>
      <h5>Mennyire megy Neked? 1-től 5-ig válassz!!!</h5>

     
    
      <ol style={{ listStyleType: 'decimal', padding: 0 }}>
        {tombKevert.map((elem, index) => (
          <li 
            key={elem.sorszam} 
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap', // mobilon a Select külön sorba kerül
              alignItems: 'flex-start',
              marginBottom: '1rem'
            }}
          >
            <div style={{ display: 'flex', flex: '1 1 200px', alignItems: 'flex-start', marginRight: '1rem' }}>
              <span style={{ flex: '0 0 30px', fontWeight: 'bold', marginRight: '0.5rem' }}>
                {index + 1}.
              </span>
              <span style={{ flex: '1 1 300px' }}>
                {elem.kijelentes}
              </span>
            </div>
            <div style={{ flex: '1 1 150px' }}>
              <Select
                options={options}
                isSearchable={false}
                placeholder="Válassz..."
                onChange={(selectedOption) => handleSelectChange(elem.sorszam, selectedOption)}
              />
            </div>
          </li>
        ))}
      </ol>

     <div style={{ padding: "2rem" }}>
        <button onClick={handleClick}>Kiértékelés</button>
        {message &&  <p style={{ marginTop: "1rem", color: "green" }}>{message}</p>}
        {mindenKitoltve && <div>

           <div>Kézügyesség: {ertek1}</div>
      <div>Matematikai képesség: {ertek2}</div>
      <div>Problémamegoldó képesség: {ertek3}</div>
      <div>Együttműködő képesség: {ertek4}</div>
      <div>Kommunikációs képesség: {ertek5}</div>
         </div>}
        </div>

    
    </div>
  );
}

export default App;

