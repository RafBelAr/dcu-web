import { useState } from "react";
import Title from "../components/Title/Title";
import News from "../components/News/News";
import { useEffect } from "react";

// Problema de cors
async function getNews () {
    let url = '/iap/rest/gva/noticias'
    const response = await fetch (url);
    const news = await response.json();
    return news
}

function Notificaciones () {
    const [news, setNews] = useState([])
    useEffect(() => {
        getNews().then((news) => {
            setNews(news)
        })
    }, []) 

    return (
        <div className="flex flex-col p-3">
            <Title  titleName="Notificaciones" />
            {news.map((n) => (
                <News   
                    date={n.fecha}
                    link="#" 
                    titleName={n.titulo} 
                    summary={n.resumen}
                />
            ))}
        </div>
    );
}

export default Notificaciones;