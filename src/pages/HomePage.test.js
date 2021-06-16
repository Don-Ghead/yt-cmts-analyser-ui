// import dependencies
import React from 'react'

// import react-testing methods
import {render, fireEvent, waitFor, screen} from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
// the component to test
import HomePage from './HomePage'
import textConstants from "../textConstants";

const mockPushHistory = jest.fn();
jest.mock('react-router', () => ({
    useHistory: () => ({
        push: (path) => mockPushHistory(path)
    })
}))

const mockUseUrlValidation = jest.fn();
const mockOnChange = jest.fn();
jest.mock('../hooks/useYoutubeUrlValidation', () => (initialString) =>
    mockUseUrlValidation(initialString),
);

test('it should change to the rundown page when a valid youtube URL is searched', () => {
    mockUseUrlValidation.mockImplementation(() => ({
        urlValue: 'https://www.youtube.com/watch?v=xMupwfMOFnM',
        onChange: mockOnChange,
        validationText: ''
    }));
    render(<HomePage/>);
    fireEvent.click(screen.getByText(textConstants.search));
    expect(mockPushHistory).toHaveBeenCalledTimes(1);
})

test("it should only show an error for an invalid youtube video link when the user confirms a search", () => {
    mockUseUrlValidation.mockImplementation(() => ({
        urlValue: 'https://www.youtube.com',
        onChange: mockOnChange,
        validationText: "It's a figure of speech Morty, they're beaurocrats I don't respect them"
    }));
    render(<HomePage/>);
    expect(screen.queryByTestId('validation-text')).toBeNull();
    fireEvent.click(screen.getByText(textConstants.search));
    expect(mockPushHistory).not.toHaveBeenCalled();
    expect(screen.getByTestId('validation-text')).toBeTruthy();
})