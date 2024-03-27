import Kuisioner from "../models/LinkModels.js";

export const getKui = async (req, res) => {
    try {
        const response = await Kuisioner.findAll()
        res.status(200).json(response)

    } catch (error) {
        res.status(404).json({msg : "Data Tidak ditemukan"})        
    }
}

export const getKuinbyId = async (req, res)=> {
    try {
        const response = await Kuisioner.findAll({
            where : {
                id_kui : req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({msg : "Data Tidak ditemukan"})        
    }
}

export const createKui = async(req, res) => {
    const {LinkKui} = req.body;
    try {
        await Kuisioner.create({
            Linkkui : LinkKui
        })
    res.status(201).json({ msg: "Berhasil" });
    } catch (error) {
    res.status(500).json({ msg: "GAGAL" });        
    }
}

export const updateKui = async(req, res) => {
    const Kui = await Kuisioner.findOne({
        where : {
            id_kui : req.params.id
        }
    })
    if (!Kui){
    res.status(404).json({ msg: "Data tidak ditemukan" });
    }


    const {LinkKui} = req.body;

    try {
        await Kui.update({
            LinkKui : LinkKui,
        })
    res.status(200).json({ msg: "Data telah diUpdate" });
    } catch (error) {
    res.status(500).json({ msg: "Data gagal dihapus" });
    }
}


export const deleteKui = async(req, res) => {
    try {
        const Kui = await Kuisioner.findOne({
            where : {
                id_kui  : req.params.id
            }
        });
        if (!Kui){
            res.status(404).json({ msg: "Data Tidak" });
        }
        await Kui.destroy();
        res.status(200).json({ msg: "Data telah dihapus" });

    } catch (error) {
    res.status(200).json({ msg: "Data gagal dihapus" });

        
    }
}