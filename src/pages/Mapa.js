const { default: Topbar } = require("../components/Topbar");

function Mapa() {
    return (
        <div className="Mapa">
            <Topbar />
            <iframe src="https://storage.googleapis.com/maps-solutions-au7yfvuaea/commutes/drrf/commutes.html"
                width="100%" height="100%"
                style={{border:0}}
                loading="lazy">
            </iframe>
        </div>
    )
}

export default Mapa;