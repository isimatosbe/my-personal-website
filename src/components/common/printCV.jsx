import { HiPrinter } from "react-icons/hi2";

export default function PrintCV() {
    const printPDF = () => {
        window.document.getElementById("prueba").contentWindow.print()
    }

    return (
        <>
            <HiPrinter onClick={printPDF} className="fixed-button print-cv" />
            <iframe src='/cv' title='cv' id="prueba" style={{display: "none"}} ></iframe>
        </>
    )
}