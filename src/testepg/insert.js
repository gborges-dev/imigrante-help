const db = require('./_database');

async function insertData() {
    await db.connect()

    const queryEvent = "INSERT INTO administrador (nm_administrador,pw_administrador) VALUES ($1,$2)"
    await db.query(queryEvent, ['Gustavo','123'])

    await db.end()

    console.log("Deu certo krl");
}

insertData();