/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const express = require("express");
const app = express();

//cors
const cors = require('cors');
const corsOptions = {
    origin: "http://localhost:8081"
}

app.use(express.json());
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({ message: "alive" });
});

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});



/*====================================
CRUD EXPLORERS
====================================*/
app.get("/explorers", async (req, res) => {
    const allExplorers = await prisma.explorer.findMany({});
    res.json(allExplorers);
});

app.get("/explorers/:id", async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({
        where: { id: parseInt(id) },
    });
    res.json(explorer);
});

app.post('/explorers', async (req, res) => {
    const explorer = {
      name: req.body.name,
      username: req.body.username,
      mission: req.body.mission
     };
    const message = 'Explorer creado.';
    await prisma.explorer.create({data: explorer});
    return res.json({message});
  });

  app.put('/explorers/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.explorer.update({
        where: {
            id: id
        },
        data: {
            mission: req.body.mission
        }
    });

    return res.json({message: "Actualizado correctamente"});
  });

  app.delete('/explorers/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.explorer.delete({where: {id: id}});
    return  res.json({message: "Eliminado correctamente"});
  });


/*====================================
CRUD STUDENTS
====================================*/

app.get("/estudiantes", async (req, res) => {
    const allEstudiantes = await prisma.student.findMany({});
    res.json(allEstudiantes);
});

app.get("/estudiantes/:id", async (req, res) => {
    const id = req.params.id;
    const estudiante = await prisma.student.findUnique({
        where: { id: parseInt(id) },
    });
    res.json(estudiante);
});

app.post('/estudiantes', async (req, res) => {
    const estudiante = {
        name: req.body.name,
        lang: req.body.lang,
        missionCommander: req.body.missionCommander,
        enrollments: req.body.enrollments
        
    };
    const message = 'Estudiante creado.';
    await prisma.student.create({data: estudiante});
    return res.json({message});
});

app.put('/estudiantes/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.student.update({
        where: {
            id: id
        },
        data: {
            missionCommander: req.body.missionCommander
        }
    });
    

    return res.json({message: "Actualizado correctamente"});
  });

  app.delete('/estudiante/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.student.delete({where: {id: id}});
    return  res.json({message: "Eliminado correctamente"});
  });
