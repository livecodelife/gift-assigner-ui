import axios from "axios";
import { useState } from "react";
import { AppWrapper, AssignGiftsButton, FamilyIdInput, GiftAssignForm } from "../styles/AppStyles";
import { GiftAssignments } from "./GiftAssignments";

function App() {
  const [assignments, setAssignments] = useState([])
  const [familyId, setFamilyId] = useState(null)

  const getAssignments = async (e) => {
    const assignmentData = await axios.get(`https://gift-assign-api/assignments/${familyId}`)
    setAssignments(assignmentData.assignments)
  }

  return (
    <AppWrapper>
      <GiftAssignForm>
        <FamilyIdInput 
          type='number' 
          placeholder='ID' 
          onChange={(e) => setFamilyId(e.target.value)} 
        />
        <AssignGiftsButton onClick={getAssignments}>Get My Assignments!</AssignGiftsButton>
      </GiftAssignForm>
      {assignments.length && <GiftAssignments assignments={assignments} />}
    </AppWrapper>
  );
}

export default App;
