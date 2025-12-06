'use client';

import { useState } from 'react';
import SetNewLeftDays from './setNew';
import ShowTargetDates from './ShowTargetDates';
import { RefreshButton } from "@/components/RefreshButton";
import { PageTransition, SlideIn } from "@/components/PageTransition";
import { getTargetDays } from './action';

export default function TargetClient({ initialTargets }) {
    const [targets, setTargets] = useState(initialTargets);

    const handleRefresh = async () => {
        try {
            const freshTargets = await getTargetDays();
            setTargets(freshTargets);
        } catch (error) {
            console.error('Error refreshing targets:', error);
        }
    };

    return (
        <PageTransition>
            <div className='space-y-6 p-4'>
                <SlideIn direction="down">
                    <div className='w-full flex items-center justify-between'>
                        <h1 className="text-2xl font-bold">Target Dates</h1>
                        <div className="flex items-center gap-3">
                            <RefreshButton onRefresh={handleRefresh} />
                            <SetNewLeftDays />
                        </div>
                    </div>
                </SlideIn>
                <SlideIn delay={0.1}>
                    <div className='mx-auto py-6 w-full md:w-2/3'>
                        <ShowTargetDates targetdates={targets} />
                    </div>
                </SlideIn>
            </div>
        </PageTransition>
    );
}
