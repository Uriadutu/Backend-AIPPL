import argon2, { hash } from "argon2";
import Admin from "../models/AdminModels.js";

export const getAdmin = async (req, res)=> {
    try {
        const response = await Admin.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({msg : "Data Tidak ditemukan"})        
    }
}

export const getAdminbyId = async (req, res)=> {
    try {
        const response = await Admin.findAll({
            where : {
                id_admin : req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({msg : "Data Tidak ditemukan"})        
    }
}

export const createAdmin = async (req, res) => {
  const { Nama, Username, Password, confPassword } = req.body;
  if (Password !== confPassword)
    return res
      .status(400)
      .json({ msg: "Password dan confirm password tidak sama" });
  try {
    const hashPassword = await argon2.hash(Password); // Hash password
    await Admin.create({
      id_Admin: Nama,
      Nama: Nama,
      Username: Username,
      Password: hashPassword, // Simpan password yang di-hash
    });
    res.status(201).json({ msg: "Register Berhasil" });
  } catch (error) {
    console.log(Nama, Username, Password);
    res.status(400).json({ msg: "Harap Masukan Semua Field" });
  }
};


export const deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findOne({
      where: {
        id_admin: req.params.id,
      },
    });
    if (!admin) {
      return res.status(404).json({ msg: "Data tidak ditemukan" });
    }

    await admin.destroy(); // Hapus data admin dengan model Sequelize
    res.status(200).json({ msg: "Data telah dihapus" });
  } catch (error) {
    res.status(500).json({ msg: "Terjadi kesalahan dalam menghapus data" });
  }
};