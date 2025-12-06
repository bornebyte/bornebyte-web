import React from 'react'

export function PageLoader() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="relative">
                <div className="h-16 w-16 rounded-full border-4 border-muted"></div>
                <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
            </div>
        </div>
    )
}

export function InlineLoader() {
    return (
        <div className="flex items-center justify-center py-4">
            <div className="relative">
                <div className="h-8 w-8 rounded-full border-2 border-muted"></div>
                <div className="absolute top-0 left-0 h-8 w-8 rounded-full border-2 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
            </div>
        </div>
    )
}

export function SkeletonCard() {
    return (
        <div className="rounded-xl border bg-card p-6 shadow animate-pulse">
            <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
            <div className="h-3 bg-muted rounded w-1/2 mb-2"></div>
            <div className="h-3 bg-muted rounded w-5/6"></div>
        </div>
    )
}
