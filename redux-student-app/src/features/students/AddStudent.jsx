import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addStudent, updateStudent } from "./studentSlice";

const AddStudent = ({ editingStudent, setEditingStudent }) => {
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [alamat, setAlamat] = useState("");

  const dispatch = useDispatch();

  // 🔥 isi form kalau edit
  useEffect(() => {
    if (editingStudent) {
      setNama(editingStudent.nama);
      setKelas(editingStudent.kelas);
      setAlamat(editingStudent.alamat);
    }
  }, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nama || !kelas || !alamat) return;

    if (editingStudent) {
      dispatch(
        updateStudent({
          id: editingStudent.id,
          nama,
          kelas,
          alamat,
        })
      );
      setEditingStudent(null);
    } else {
      dispatch(addStudent({ nama, kelas, alamat }));
    }

    setNama("");
    setKelas("");
    setAlamat("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama" />
      <input value={kelas} onChange={(e) => setKelas(e.target.value)} placeholder="Kelas" />
      <input value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Alamat" />

      <button type="submit">
        {editingStudent ? "Update" : "Simpan"}
      </button>
    </form>
  );
};

export default AddStudent;