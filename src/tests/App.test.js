import { shallow } from 'enzyme'
import App from '../components/App'
import { GiftAssignments } from '../components/GiftAssignments';
import axios from 'axios';
import { waitFor } from '@testing-library/dom';

jest.mock('axios')

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
    it('should not render gift assignments', () => {
      expect(wrapper.find('GiftAssignments').exists()).toBe(false)
    })
  })
  describe('When the id is entered', () => {
    let wrapper = shallow(<App />)
    const data = { assignments: [{"Gifter": "giftee"}] };
    wrapper.find('FamilyIdInput').simulate('change', {target: {value: 1}})
    it('should show the gift assignments after clicking the button', async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve(data));
      wrapper.find('AssignGiftsButton').simulate('click')
      await waitFor(() => {
        expect(wrapper.find(GiftAssignments).exists()).toBe(true)
      })
    })
    it('should pass gift assignments to child component after clicking the button', async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve(data));
      wrapper.find('AssignGiftsButton').simulate('click')
      await waitFor(() => {
        expect(wrapper.find(GiftAssignments).props().assignments).toEqual(data.assignments)
      })
    })
  })
})
