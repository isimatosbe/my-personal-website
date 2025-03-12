export default function PrintCV({ lang }) {
    const onClick = () => ( 
        window.document.getElementById("iframe").contentWindow.print()
    )

    return (
        <div className="cv">
            <button onClick={onClick}>{lang === 'en' ? 'Print CV' : 'Imprimir CV'}</button>

            <iframe src="/cv" style={{width: "210mm", height: "297mm", margin: "0 auto", display: "block"}} id="iframe" ></iframe>
        </div>
    )

}