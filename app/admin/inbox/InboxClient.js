'use client';

import { useState } from 'react';
import ShowInbox from "./ShowInbox";
import { RefreshButton } from "@/components/RefreshButton";
import { PageTransition, SlideIn } from "@/components/PageTransition";
import { getNotifications } from "./action";

export default function InboxClient({ initialResult, initialFilter }) {
    const [result, setResult] = useState(initialResult);
    const [filter, setFilter] = useState(initialFilter);

    const handleRefresh = async () => {
        try {
            const freshData = await getNotifications("*");
            setResult(freshData[0]);
            setFilter(freshData[1]);
        } catch (error) {
            console.error('Error refreshing inbox:', error);
        }
    };

    return (
        <PageTransition>
            <div className="p-2 space-y-6">
                <SlideIn direction="down">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Inbox</h1>
                        <RefreshButton onRefresh={handleRefresh} />
                    </div>
                </SlideIn>
                <SlideIn delay={0.1}>
                    <ShowInbox result={result} filter={filter} />
                </SlideIn>
            </div>
        </PageTransition>
    );
}
