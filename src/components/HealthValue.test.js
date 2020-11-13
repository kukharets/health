import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";

import HealthValue from './HealthValue';
import React from "react";

test('render HealthValue with correct layout values', () => {
    const testText = 'TestText';
    const testValue = 'TestValue'
    act(() => {
        render(<HealthValue text={testText} value={testValue}/>);
    });
    const testElementText = screen.getByText(/TestText/i);
    expect(testElementText).toBeInTheDocument();
    const testElementValue = screen.getByText(/TestValue/i);
    expect(testElementValue).toBeInTheDocument();
});
