import { AppWrapper, AssignGiftsButton, FamilyIdInput, GiftAssignForm } from "../styles/AppStyles";

function App() {
  return (
    <AppWrapper>
      <GiftAssignForm>
        <FamilyIdInput type='number' placeholder='ID' />
        <AssignGiftsButton>Get My Assignments!</AssignGiftsButton>
      </GiftAssignForm>
    </AppWrapper>
  );
}

export default App;
