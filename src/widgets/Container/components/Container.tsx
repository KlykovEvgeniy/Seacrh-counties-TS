import React from "react";
import '../styles/container.styled.scss';

interface ContainerProps {
    children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = function ({ children }) {
    return (
        <div className="container">
            {children}
        </div>
    )
}