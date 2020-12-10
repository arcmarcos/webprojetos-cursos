const Database = require('./db')
const createProffy = require('./createProffys')

Database.then(async (db) => {

    proffyValue = {
        name: "Carl Sagan",
        avatar:"https://imagens.canaltech.com.br/celebridades/363.400.jpg",
        whatsapp: "99999999999",
        bio: "Sou cientista, físico, biólogo, astrônomo, astrofísico, cosmólogo, escritor e divulgador científico. Autor de mais de 600 publicações científicas e também de mais de vinte livros de ciência e ficção científica.",
    }

    classValue = {
        subject: 1,
        cost:"5000",
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },

        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <="1300"
        AND class_schedule.time_to > "1300"
    `)
    // console.log(selectClassesSchedules)
})