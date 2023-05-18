var dbConn = require("./../database/database");

const getPacientes = function(req,res){
    dbConn.query("SELECT * FROM herramientafono.Pacientes;", function(err,result) {
        if(err) {
          console.log(err)
            res.status(409).json({
                status: 'error',
                message: err,
              });
            } else if (!result.length) {
              res.status(400).json({
                status: 'No Content',
                message: "Results are empty"
              });
            }else { 
            res.json(result);
        }
    });
};

const getPaciente = function(req,res){
    const { dni } = req.params;
    dbConn.query("SELECT * FROM herramientafono.Pacientes p where p.dni = ?;", dni ,function(err,result) {
    if(err) {
      console.log(err)
        res.status(409).json({
            status: 'error',
            message: err,
          });
        } else if (!result.length) {
          res.status(400).json({
            status: 'No Content',
            message: "Results are empty"
          });
        }else { 
        res.json(result);
    }
    });
};

const addPaciente = function(req,res){
    const { nombre, dni } = req.body;
    if (nombre === undefined || dni === undefined) {
        res.status(400).json({ message: "Bad Request. Please fill all field." });
    }
    const paciente = { nombre, dni };
    dbConn.query("INSERT INTO Pacientes SET ?", paciente,function(err,result) {
        if(err) {
          console.log(err)
            res.status(409).json({
                status: 'error',
                message: err,
              });
            } else {  
    res.json({ message: "Paciente added" });
        }
    });
};

const deletePaciente = function(req,res){
    const { dni } = req.params;
    dbConn.query("DELETE FROM Pacientes WHERE dni = ?", dni,function(err,result) {
    if(err) {
      console.log(err)
        res.status(409).json({
            status: 'error',
            message: err,
          });
        } else { 
        res.json(result);
    }
});
};

export const methods = {
    getPacientes,
    getPaciente,
    addPaciente,
    deletePaciente
};