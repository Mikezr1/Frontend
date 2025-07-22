import { useState } from 'react';
import header from '../../assets/images/car.png';
import brakesImg from '../../assets/images/brakes.avif';
import interiorImg from '../../assets/images/interior.avif';
import wingImg from '../../assets/images/wing.webp';

function Accordion() {
    const [selected, setSelected] = useState(-1)

    const content = [
        {
            id: 'Interior',
            content: interiorImg,
            description: 'Een comfortabele en moderne binnenkant met leren bekleding.'
        },
        {
            id: 'brakes',
            content: brakesImg,
            description: 'Krachtige sportremmen voor optimale controle.'
        },
        {
            id: 'spoiler',
            content: wingImg,
            description: 'Een aerodynamische spoiler voor betere downforce.'
        },
        {
            id: 'exterior',
            content: header,
            description: 'Een strak en sportief exterieur in metallic lak.'
        }
    ]

    function AccordionHeader() {
        return <img src={header} alt="Header" class="hover-shadow" style={{ width: '100%', marginBottom: '1rem' }} />
    }

    function click(index) {
        if (selected === index) setSelected(-1)
        else setSelected(index)
    }

    function getContent(item, index) {
        return (
            <div key={item.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '150px' }}>
                <button onClick={() => click(index)} className="rounded" style={{ marginBottom: '0.5rem' }}>
                    {item.id}
                </button>
                {getImage(index, item)}
            </div>
        )
    }

    function getImage(index, item) {
        return selected === index ? (
            <div style={{ textAlign: 'center' }}>
                <img height="150" src={item.content} class="rounded" alt={`Image for ${item.id}`} />
                <p style={{ marginTop: '0.5rem' }}>{item.description}</p>
            </div>
        ) : null
    }

    return (
        <>
            <h2>Accordion</h2>
            {AccordionHeader()}
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {content.map(getContent)}
            </div>
        </>
    )
}

export default Accordion