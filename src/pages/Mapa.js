const { default: Topbar } = require("../components/Topbar");

function Mapa() {
    return (
        <div className="Mapa">
        <Topbar />
            <div className="MapaContainer" style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <iframe
                src="https://storage.googleapis.com/maps-solutions-au7yfvuaea/commutes/drrf/commutes.html"
                width="100%" height="100%"
                style={{ border: 0 }}
                loading="lazy"
            >
            </iframe>
            </div>
        </div>
    );
}

export default Mapa;
