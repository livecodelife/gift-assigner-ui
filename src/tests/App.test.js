import { shallow } from 'enzyme'
import App from '../components/App'

describe('Given an App component', () => {
  describe('When the component is rendered', () => {
    let wrapper = shallow(<App />)
    it('should have a gift assignment form', () => {
      expect(wrapper.find('GiftAssignForm').exists()).toBe(true)
    })
    it('should have a field for the familyId', () => {
      expect(wrapper.find('FamilyIdInput').exists()).toBe(true)
    })
    it('should have a button for assigning gifts', () => {
      expect(wrapper.find('AssignGiftsButton').exists()).toBe(true)
    })
  })
})
