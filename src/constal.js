import Cancel from "@mui/icons-material/Cancel";
import ErrorOutline from "@mui/icons-material/ErrorOutline";
import Drafts from "@mui/icons-material/Drafts";
import Label from "@mui/icons-material/Label";
import ThumbUp from "@mui/icons-material/ThumbUp";
import AutoAwesome from "@mui/icons-material/AutoAwesome";
import DeleteOutline from "@mui/icons-material/DeleteOutline";

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
  'TRASHED': { 
    color: '#EF4444', 
    bgColor: '#FEE2E2',
    icon: DeleteOutline 
  },
};