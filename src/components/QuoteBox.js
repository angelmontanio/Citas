import React, {useState} from 'react';
import cites from '../citas.json'


const QuoteBox = () => {
    const getRandom = () => Math.floor(Math.random() * cites.length);
    const colors = [
        "#845EC2",
        "#D65DB1",
        "#FF6F91",
        "#FF9671",
        "#FFC75F",
        "#F9F871"
      ];
      const [cite, setCite] = useState(cites[getRandom()]);

      const changeCite = () =>{
          setCite(cites[getRandom()])
      }
      const intervaleColor = colors[Math.floor(Math.random()*6)];
      document.body.style = `background: ${intervaleColor}`

    return (
        <div className='card' style={{color:intervaleColor}}>
            <div className='phrase'>
            <i class="fa-solid fa-quote-left icon"></i><p>{cite.quote}</p>
            </div>
            <div className='author'>
                <p>{cite.author}</p>
                <button onClick={changeCite} ><i style={{color:intervaleColor}} class="fa-solid fa-circle-chevron-right icon"></i></button>
            </div>
        </div>
    );
};

export default QuoteBox;
