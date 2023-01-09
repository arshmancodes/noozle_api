const db = require('../utils/database')

exports.test = (req, res, next) => {
    res.send("This API is working.");
}

exports.addScene = (req, res, next) => {
    
    db.execute("INSERT INTO scene(scene_name, repeated, isActive, days, scene_sleep_time, time, color, intensity, playSound, sound_id, ollie_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.body.scene_name, req.body.repeated, req.body.isActive, req.body.days, req.body.scene_sleep_time, req.body.time, req.body.color, req.body.intensity, req.body.playSound, req.body.sound_id, req.body.ollie_id]).then(([rows, fieldData]) => {
        res.status(200).json({
            success: true,
            message: "The alarm has been posted Successfully"
        })
    }).catch(err => {
        res.status(203).json({
            success: false,
        })
    })
    
}


exports.getScenes = (req, res, next) => {

    db.execute("SELECT * from scene where ollie_id=?", [req.params.id]).then(([rows, fieldData]) => {
        if(rows.length > 0)
        {
            res.status(200).json({
                success: true,
                data: rows
            })
        }
        else
        {
            res.status(200).json({
                success: false,
                message: "No Data found for this Ollie Device"
            })
        }
        
    }).catch(err => {
        res.status(201).json({
            success: false,
            message: err
        })
    })
}


