export const GiftAssignments = ({assignments}) => {
  const renderAssignments = () => {
    return  (
      <ul>
        {assignments.map((assignment, i) => (
          <li>{assignment}</li>
        ))}
      </ul>
    )
  }
    
  return (
      <div>
        {renderAssignments()}
      </div>
  )
}
