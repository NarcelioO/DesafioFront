import style from './footer.module.css'
import imgMan from '../../imgs/man.png'
import Image from 'next/image'
export function Foter(){
    return(
        <div className={style.footer}>
            <div className={style.FoterText}>
                <div className={style.divtext}>
                <h1>Nossa Iniciativa</h1>
                <p>
                Somos desenvolvedores que se dedicam a fazer projetos perfeitos e entregar valor para todos os seus clientes. 
                Gostamos de ver clientes satisfeitos com projetos feitos com carinho, atenção e qualidade altíssima.
                </p>
                </div>
                <div className={style.img}>
                <Image 
                src={imgMan}
                alt="Picture of the author"
                width={408}
                height={466}
                />
                </div>
                <div className={style.form}></div>
                
            </div>
            
            
              
            <div className={style.contato}>
                <h1>
                    Mande um oi, ligamos para você!
                </h1>
                <p>Preencha seus dados  para que a gente possa entrar em contato.</p>
                <form action="">
                    <span>Nome completo</span>
                    <input type="text" placeholder='Ex: Mateus Ávila Isidoro'/>
                    <span>Whatsapp</span>
                    <input type='text' placeholder='(99)99999-9999'/>   
                    <button>Peça uma reunião</button>
                </form>
            </div>
        </div>
    )
}