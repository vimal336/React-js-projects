import { useEffect, useState } from "react";
import "./App.css";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [students, setStudents] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const student = { name, age: parseInt(age) };
    await addDoc(collection(db, "students"), student);
    setAge("");
    setName("");
    getStudents();
  };

  const getStudents = async () => {
    const q = query(collection(db, "students"));
    const querySnapshot = await getDocs(q);
    let students = [];
    querySnapshot.forEach((doc) => {
      students.push({ ...doc.data(), id: doc.id });
    });
    setStudents(students);
  };

  const editStudent = async (id, name, age) => {
    await updateDoc(doc(db, "students", id), {
      name,
      age: parseInt(age),
    });
    getStudents();
  };

  useEffect(() => {
    getStudents();
  }, []);

  const deleteStudent = async (id) => {
    await deleteDoc(doc(db, "students", id));
    getStudents();
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">CRUD operations with Firebase and React</h1>
        <form onSubmit={onSubmit} className="add-student">
          <div className="form-control">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <input type="submit" value={'Add student'}/>
        </form>
        <div className="students">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td> {student.id}</td>
                  <td> {student.name}</td>
                  <td>{student.age}</td>
                  <td>
                    <button
                      className="btn-3"
                      onClick={() =>
                        editStudent(
                          student.id,
                          prompt(" Enter new name", student.name),
                          prompt("Enter new age", student.age)
                        )}>
                      Edit
                    </button>
                    <button className="btn-2" onClick={()=> deleteStudent(student.id)}> Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
