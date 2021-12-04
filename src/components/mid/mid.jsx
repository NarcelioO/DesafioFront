import style from './mid.module.css'
export default function Mid(){
    return(
        <div className={style.mid}>
       
            <div className={style.text}>
                <p>Desenvolvedores prontos pra ação</p>
                <h1>Seu projeto pronto <br/>na velocidade da luz</h1>
                <button className={style.button}>Peça uma reunião</button>
            </div>
       

            
        </div>
    )
}