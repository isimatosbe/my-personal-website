export default function PrintCV({ lang, printConfig, updatePrintConfig }) {
    const onClick = () => ( 
        window.document.getElementById("iframe").contentWindow.print()
    )

    const useProjects = printConfig['useProjects']

    const onChange = () => (
        updatePrintConfig('useProjects', !useProjects)
    )

    return (
        <div className="cv">
            <label>
                <input type="checkbox" name="checkProjects" defaultChecked={useProjects} onChange={onChange} /> Show projects
            </label>
            <br></br>
            <label>
                Font size: <input type="number" name="checkFont" min="10" max="20" step="1" defaultValue={printConfig['fontSize']} onChange={e => updatePrintConfig('fontSize', e.target.value)} />
            </label>
            <br></br>
            <button onClick={onClick}>{lang === 'en' ? 'Print CV' : 'Imprimir CV'}</button>

            <iframe src="/cv" style={{width: "210mm", height: "297mm", margin: "0 auto", display: "block"}} id="iframe" ></iframe>
        </div>
    )

}