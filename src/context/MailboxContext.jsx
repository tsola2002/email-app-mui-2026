import React, { createContext, useState, useContext, useEffect } from 'react';

const MailboxContext = createContext();

export const useMailbox = () => useContext(MailboxContext);

export const MailboxProvider = ({ children }) => {
    // Initialize state - start with emails visible
    const [mailbox1Deleted, setMailbox1Deleted] = useState(false);
    const [mailbox2Deleted, setMailbox2Deleted] = useState(false);

    // Check for page refresh and load saved state ONLY on navigation, not on refresh
    useEffect(() => {
        const navigationEntries = performance.getEntriesByType('navigation');
        const isRefresh = navigationEntries.length > 0 && navigationEntries[0].type === 'reload';

        if (!isRefresh) {
            // This is normal navigation (not page refresh), load saved state
            const saved1 = sessionStorage.getItem('mailbox1_deleted');
            const saved2 = sessionStorage.getItem('mailbox2_deleted');

            if (saved1 === 'true') setMailbox1Deleted(true);
            if (saved2 === 'true') setMailbox2Deleted(true);
        } else {
            // This is a page refresh - clear everything
            sessionStorage.clear();
            setMailbox1Deleted(false);
            setMailbox2Deleted(false);
        }
    }, []);

    // Save to sessionStorage whenever state changes
    useEffect(() => {
        if (mailbox1Deleted) {
            sessionStorage.setItem('mailbox1_deleted', 'true');
        } else {
            sessionStorage.removeItem('mailbox1_deleted');
        }
    }, [mailbox1Deleted]);

    useEffect(() => {
        if (mailbox2Deleted) {
            sessionStorage.setItem('mailbox2_deleted', 'true');
        } else {
            sessionStorage.removeItem('mailbox2_deleted');
        }
    }, [mailbox2Deleted]);

    const deleteMailbox1 = () => setMailbox1Deleted(true);
    const restoreMailbox1 = () => setMailbox1Deleted(false);

    const deleteMailbox2 = () => setMailbox2Deleted(true);
    const restoreMailbox2 = () => setMailbox2Deleted(false);

    return (
        <MailboxContext.Provider value={{
            mailbox1Deleted,
            mailbox2Deleted,
            deleteMailbox1,
            deleteMailbox2,
            restoreMailbox1,
            restoreMailbox2
        }}>
            {children}
        </MailboxContext.Provider>
    );
};