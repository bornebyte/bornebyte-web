'use client';

import { useEffect, useState } from 'react';

export function PageTransition({ children, className = '' }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div
            className={`transition-opacity duration-400 ${mounted ? 'opacity-100' : 'opacity-0'} ${className}`}
        >
            {children}
        </div>
    );
}

export function FadeIn({ children, delay = 0, className = '' }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), delay * 1000);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div
            className={`transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'} ${className}`}
        >
            {children}
        </div>
    );
}

export function SlideIn({ children, direction = 'up', delay = 0, className = '' }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), delay * 1000);
        return () => clearTimeout(timer);
    }, [delay]);

    const directionClasses = {
        up: visible ? 'translate-y-0' : 'translate-y-4',
        down: visible ? 'translate-y-0' : '-translate-y-4',
        left: visible ? 'translate-x-0' : 'translate-x-4',
        right: visible ? 'translate-x-0' : '-translate-x-4',
    };

    return (
        <div
            className={`transition-all duration-400 ${visible ? 'opacity-100' : 'opacity-0'} ${directionClasses[direction]} ${className}`}
        >
            {children}
        </div>
    );
}

export function ScaleIn({ children, delay = 0, className = '' }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), delay * 1000);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div
            className={`transition-all duration-300 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${className}`}
        >
            {children}
        </div>
    );
}