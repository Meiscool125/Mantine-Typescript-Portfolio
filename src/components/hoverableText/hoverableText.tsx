import { useState } from 'react';
import { Text } from '@mantine/core';

interface HoverableTextProps{
    children: React.ReactNode;
    defaultColor: string;
    hoverColor: string;
}

export const HoverableText: React.FC <HoverableTextProps>=({ children, defaultColor, hoverColor }) => {
    const [color, setColor] = useState(defaultColor);

    return(
        <Text
            style={{ color: color }}
            onMouseEnter={() => setColor(hoverColor)}
            onMouseLeave={() => setColor(defaultColor)}
        >
            {children}
        </Text>
    );
}