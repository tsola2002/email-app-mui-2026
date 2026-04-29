import ErrorOutline from '@mui/icons-material/ErrorOutline';
import Drafts from '@mui/icons-material/Drafts';
import Label from '@mui/icons-material/Label';
import ThumbUp from '@mui/icons-material/ThumbUp';
import AutoAwesome from '@mui/icons-material/AutoAwesome';
import Cancel from '@mui/icons-material/Cancel';

export const statusConfig = {
  'COULD NOT RESPOND': { 
    color: '#F59E0B', 
    bgColor: '#FEF3C7',
    icon: ErrorOutline
  },
  'DRAFT': { 
    color: '#3B82F6', 
    bgColor: '#DBEAFE',
    icon: Drafts
  },
  'ANNOTATED': { 
    color: '#EC4899', 
    bgColor: '#FCE7F3',
    icon: Label
  },
  'MANUALLY RESPONDED': { 
    color: '#F97316', 
    bgColor: '#FFEDD5',
    icon: ThumbUp
  },
  'AUTO RESPOND': { 
    color: '#10B981', 
    bgColor: '#D1FAE5',
    icon: AutoAwesome
  },
  'IGNORED/DELETED': { 
    color: '#EF4444', 
    bgColor: '#FEE2E2',
    icon: Cancel
  }
};

export const filterTabs = [
  { label: 'All E-Mails', color: '#00C9B7' },
  { label: 'Could Not Respond', color: '#F59E0B' },
  { label: 'Draft', color: '#3B82F6' },
  { label: 'Annotated', color: '#EC4899' },
  { label: 'Manually Responded', color: '#F97316' },
  { label: 'Auto Respond', color: '#10B981' },
  { label: 'Ignored/Deleted', color: '#EF4444' }
];

export const emailData = [
  { 
    id: 1, 
    type: 'COULD NOT RESPOND', 
    customer: 'Tarik Abaza', 
    email: 'Tarik.abaza@hotmail.com',
    subject: 'Your Contract Has Started', 
    snippet: 'Contract Action Taken By Tarik Abaza...',
    received: '14/09/2024',
    hasBadge: true,
    badgeText: 'Reason Number One'
  },
  { 
    id: 2, 
    type: 'DRAFT', 
    customer: 'Tarik Abaza', 
    email: 'Tarik.abaza@hotmail.com',
    subject: 'Your Contract Has Started', 
    snippet: 'Contract Action Taken By Tarik Abaza...',
    received: '14/09/2024',
    hasBadge: true,
    badgeText: 'Needs Review'
  },
  { 
    id: 3, 
    type: 'ANNOTATED', 
    customer: 'Tarik Abaza', 
    email: 'Tarik.abaza@hotmail.com',
    subject: 'Your Contract Has Started', 
    snippet: 'Contract Action Taken By Tarik Abaza...',
    received: '14/09/2024',
    hasBadge: false
  },
  { 
    id: 4, 
    type: 'MANUALLY RESPONDED', 
    customer: 'Tarik Abaza', 
    email: 'Tarik.abaza@hotmail.com',
    subject: 'Your Contract Has Started', 
    snippet: 'Contract Action Taken By Tarik Abaza...',
    received: '14/09/2024',
    hasBadge: false
  },
  { 
    id: 5, 
    type: 'AUTO RESPOND', 
    customer: 'Tarik Abaza', 
    email: 'Tarik.abaza@hotmail.com',
    subject: 'Your Contract Has Started', 
    snippet: 'Contract Action Taken By Tarik Abaza...',
    received: '14/09/2024',
    hasBadge: false
  },
  { 
    id: 6, 
    type: 'IGNORED/DELETED', 
    customer: 'Tarik Abaza', 
    email: 'Tarik.abaza@hotmail.com',
    subject: 'Your Contract Has Started', 
    snippet: 'Contract Action Taken By Tarik Abaza...',
    received: '14/09/2024',
    hasBadge: false
  }
];