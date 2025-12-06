'use client';

import { useState, useEffect, useCallback } from 'react';
import { getCache, setCache, clearCache } from '@/lib/cache';

/**
 * Custom hook for caching data with automatic refresh
 * @param {string} cacheKey - Unique key for this cache
 * @param {Function} fetchFn - Async function to fetch fresh data
 * @param {number} expiryMinutes - Cache expiry in minutes
 * @returns {Object} { data, loading, error, refresh, clearCache }
 */
export function useCache(cacheKey, fetchFn, expiryMinutes = 30) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadData = useCallback(async (forceRefresh = false) => {
        try {
            setLoading(true);
            setError(null);

            // Try to get from cache first
            if (!forceRefresh) {
                const cachedData = getCache(cacheKey);
                if (cachedData) {
                    setData(cachedData);
                    setLoading(false);
                    return cachedData;
                }
            }

            // Fetch fresh data
            const freshData = await fetchFn();
            setData(freshData);
            setCache(cacheKey, freshData, expiryMinutes);
            setLoading(false);
            return freshData;
        } catch (err) {
            console.error('Error loading data:', err);
            setError(err.message || 'Failed to load data');
            setLoading(false);
            return null;
        }
    }, [cacheKey, fetchFn, expiryMinutes]);

    const refresh = useCallback(() => {
        return loadData(true);
    }, [loadData]);

    const clearCacheData = useCallback(() => {
        clearCache(cacheKey);
        setData(null);
    }, [cacheKey]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    return {
        data,
        loading,
        error,
        refresh,
        clearCache: clearCacheData,
    };
}
