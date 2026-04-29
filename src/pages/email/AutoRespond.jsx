import React from 'react';
import EmailHeader from '../../components/EmailHeader';
import { Container } from '@mui/material';

const AutoRespond = () => {
    const emailData = {
        id: 1,
        from: "Tarik Abaza",
        fromEmail: "tarik.abazaa@hotmail.com",
        to: "Me",
        body: `Dear Sales Team,

I've noticed a discrepancy in the latest invoice you sent us. It appears that we were charged twice for the same service. Can you please look into this as soon as possible?

Thank you,
John Doe
Customer Support Lead
Customer Inc.`
    };

    const responseText = `Dear Sales Team,

I've noticed a discrepancy in the latest invoice you sent us. It appears that we were charged twice for the same service. Can you please look into this as soon as possible?

Thank you,
John Doe
Customer Support Lead
Customer Inc.`;

    return (
        <Container maxWidth="md" sx={{ py: 3 }}>
            <EmailHeader
                emailData={emailData}
                responseText={responseText}
                onClose={() => console.log('AutoRespond email closed')}
            />
        </Container>
    );
};

export default AutoRespond;