import { useState } from "react";
import AddStudent from "./features/students/AddStudent";
import ListStudent from "./features/students/ListStudent";

function App() {
  const [editingStudent, setEditingStudent] = useState(null);

  return (
    <div>
      <h1>Data Siswa</h1>

      <AddStudent
        editingStudent={editingStudent}
        setEditingStudent={setEditingStudent}
      />

      <ListStudent setEditingStudent={setEditingStudent} />
    </div>
  );
}

export default App;