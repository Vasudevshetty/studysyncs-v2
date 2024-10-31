import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

function PDFPreview() {
  const pdfUrl = "/dummy.pdf";

  return (
    <div className="pdf-viewer-container w-full">
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
      >
        <Viewer fileUrl={pdfUrl} />
      </Worker>
    </div>
  );
}

export default PDFPreview;
