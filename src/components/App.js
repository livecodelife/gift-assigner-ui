import axios from "axios";
import { useState } from "react";
import { AppWrapper, AssignGiftsButton, FamilyIdInput, GiftAssignForm } from "../styles/AppStyles";
import { GiftAssignments } from "./GiftAssignments";

function App() {
  const [assignments, setAssignments] = useState([])
  const [id, setId] = useState(null)
  const [error, setError] = useState(null)

  const getAssignments = async (e) => {
    setError(null)
    try {
      const assignmentData = await axios.get(`http://localhost:8080/assignments/${id}`)
      setAssignments(assignmentData.data)
    } catch (e) {
      setError('Something went wrong. Check your id and try again')
    }
  }

  return (
    <AppWrapper>
      <GiftAssignForm>
        <FamilyIdInput 
          type='number' 
          placeholder='ID' 
          max='3'
          onChange={(e) => setId(e.target.value)} 
        />
        <AssignGiftsButton onClick={getAssignments}>Get My Assignments!</AssignGiftsButton>
      </GiftAssignForm>
      {assignments.length > 0 && <GiftAssignments assignments={assignments} />}
      {error}
    </AppWrapper>
  );
}

export default App;
