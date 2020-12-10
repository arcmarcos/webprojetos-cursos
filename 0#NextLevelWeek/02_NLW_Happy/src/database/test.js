// const dataBase = require('./db');
// const saveOrphanage = require('./saveOrphanage');

// dataBase.then(async db => {
//     // inserir dados na tabela
//     await saveOrphanage(db, {
//         latitude: "-22.9026927",
//         longitude: "-43.3143838",
//         name: "Lar das meninas",
//         about: "Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social",
//         whatsapp: "988889999",
//         images: [
//             "https://images.unsplash.com/photo-1586022773518-47a6bf08fa90?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
//             "https://images.unsplash.com/photo-1600818272779-cfa6145222f0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
//         ].toString(),
//         instructions: "Venha como se sentir a vontade, e traga muito amor e paciência para dar",
//         opening_hours: "Horário de visitas das 08h até as 18h",
//         open_on_weekends: "0"
//     })



//     // Consultar dados da tabela
//     // const selectedOrphanages = await db.all("SELECT * FROM orphanages")
//     // console.log(selectedOrphanages)

//     // // Consultar um orfanato pelo ID
//     // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
//     // console.log(orphanage)
// })