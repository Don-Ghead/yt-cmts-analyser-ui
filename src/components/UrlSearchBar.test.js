// import dependencies
import React from 'react'

// import react-testing methods
import {render, fireEvent, waitFor, screen} from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
// the component to test
import UrlSearchBar from './UrlSearchBar'

const mockOnchange = jest.fn();
const mockOnSearch = jest.fn();

test('It should show error text when the URL is invalid', () => {
    render(<UrlSearchBar onSearch={mockOnSearch}
                         value="doesn't matter"
                         onChange={mockOnchange}
                         validationError="You can run but you can't hide"/>)
    expect(screen.queryByTestId('validation-text')).toBeTruthy()
})

test('It should not show error text when the URL is valid', () => {
    render(<UrlSearchBar onSearch={mockOnSearch}
                         value="doesn't matter"
                         onChange={mockOnchange}
                         validationError=''/>)
    expect(screen.queryByTestId('validation-text')).toBeFalsy()
})