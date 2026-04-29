import React from 'react';
import EmailDetail from './components/EmailDetail';

const IgnoredDeleted = () => {
  // This would come from API/context in real app
  const emailData = {
    id: 1,
    type: 'IGNORED/DELETED',
    from: 'Tarik Abaza',
    email: 'tarik_abaza@hotmail.com',
    to: 'Me',
    date: '2024, September 16, 08:00 AM',
    subject: 'Your Contract Is Started',
    body: `Dear Sales Team,

I've noticed a discrepancy in the latest invoice you sent us. It appears that we were charged twice for the same service. Can you please look into this as soon as possible?

Thank you,
John Doe
Customer Support Lead
Customer Inc.`,
    deletedBy: 'John Doe'
  };

  return <EmailDetail email={emailData} />;
};

export default IgnoredDeleted;