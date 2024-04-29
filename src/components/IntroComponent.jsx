// export default function introComponent;
import ChildComponent from './components/ChildComponent'

function IntroComponent() {
    const imagem_gato = 'https://thumbs.dreamstime.com/b/cat-s-grin-red-bared-its-teeth-narrowed-eyes-angry-isolated-white-background-182721152.jpg'
    const imagem_gato2 = 'https://cataas.com/cat/gif'
    const a = 5, b = 2, nome = 'Rodrigo'
    return (
        <>
            <h1>Olá, {nome}</h1>
            <p>{a} + {b} = {a+b}</p>
            <p>gato</p>
            <p>pequeno</p>
            <img src={imagem_gato}/>
            <img src={imagem_gato2}/>
        
            <button><img src={imagem_gato2} alt="kndfsjngljadskflh"/></button>
       
        </>
    )   
}
 export default IntroComponent
