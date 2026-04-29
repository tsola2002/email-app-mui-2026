// import React from 'react';
// import EmailDetail from './components/EmailDetail';
// import { Box } from '@mui/material';

// const Trash = () => {
//   // Array of 3 trashed emails
//   const trashEmails = [
//     {
//       id: 1,
//       type: 'TRASHED',
//       from: 'Tarik Abaza',
//       email: 'tarik_abaza@hotmail.com',
//       to: 'Me',
//       date: '2024, September 16, 08:00 AM',
//       subject: 'Your Contract Is Started',
//       body: `Dear Sales Team,

// I've noticed a discrepancy in the latest invoice you sent us. It appears that we were charged twice for the same service. Can you please look into this as soon as possible?

// Thank you,
// John Doe
// Customer Support Lead
// Customer Inc.`,
//       deletedBy: 'John Doe'
//     },
//     {
//       id: 2,
//       type: 'TRASHED',
//       from: 'Sarah Smith',
//       email: 'sarah.smith@gmail.com',
//       to: 'Me',
//       date: '2024, September 15, 02:30 PM',
//       subject: 'Meeting Cancellation',
//       body: `Hi,

// I need to cancel our meeting scheduled for tomorrow. Something urgent came up and I won't be able to make it.

// Can we reschedule for next week?

// Thanks,
// Sarah`,
//       deletedBy: 'Me'
//     },
//     {
//       id: 3,
//       type: 'TRASHED',
//       from: 'Mike Johnson',
//       email: 'mike.j@company.com',
//       to: 'Me',
//       date: '2024, September 14, 11:15 AM',
//       subject: 'Project Update',
//       body: `Hello,

// Just wanted to give you a quick update on the project. We're about 70% complete and should be done by the end of the week.

// Let me know if you have any questions.

// Best,
// Mike`,
//       deletedBy: 'Admin'
//     }
//   ];

//   return (
//     <Box>
//       {trashEmails.map((email) => (
//         <Box key={email.id} sx={{ mb: 3 }}>
//           <EmailDetail email={email} />
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default Trash;

import React from 'react';
import EmailDetail from './components/EmailDetail'; // ✅ FIXED PATH
import { Box, Container, Typography } from '@mui/material';

const Trash = () => {
  const trashEmails = [
    {
      id: 1,
      type: 'TRASHED',
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
    },
    {
      id: 2,
      type: 'TRASHED',
      from: 'Sarah Smith',
      email: 'sarah.smith@gmail.com',
      to: 'Me',
      date: '2024, September 15, 02:30 PM',
      subject: 'Meeting Cancellation',
      body: `Hi,

I need to cancel our meeting scheduled for tomorrow. Something urgent came up and I won't be able to make it.

Can we reschedule for next week?

Thanks,
Sarah`,
      deletedBy: 'Me'
    },
    {
      id: 3,
      type: 'TRASHED',
      from: 'Mike Johnson',
      email: 'mike.j@company.com',
      to: 'Me',
      date: '2024, September 14, 11:15 AM',
      subject: 'Project Update',
      body: `Hello,

Just wanted to give you a quick update on the project. We're about 70% complete and should be done by the end of the week.

Let me know if you have any questions.

Best,
Mike`,
      deletedBy: 'Admin'
    }
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Trash
      </Typography>

      <Box>
        {trashEmails.map((email) => (
          <Box key={email.id} sx={{ mb: 3 }}>
            <EmailDetail email={email} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Trash;