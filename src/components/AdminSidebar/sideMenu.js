import {
    Calendar,
    CheckSquare, Circle, FileText, Grid, Home,
    Mail,
    MessageSquare
} from "react-feather";

export const menuItem = [
    {id: 1,
     url: '/admin/dashboard',
     title: 'Dashboard',
     icon: <Home/>,
     children:[
         
     ]
    },
    {id: 2,
     url: '/admin/email',
     title: 'Email',
     icon: <Mail/>,
     children: []
    },
    {id: 3,
     url: '/admin/chat',
     title: 'Chat',
     icon: <MessageSquare/>,
     children: []
    },
    {id: 4,
     url: '/admin/todo',
     title: 'Todo',
     icon: <CheckSquare/>,
     children: []
    },
    {id: 5,
     url: '/admin/calendar',
     title: 'Calendar',
     icon: <Calendar/>,
     children: []
    },
    {id: 6,
     url: '/admin/kanban',
     title: 'Dashboard',
     icon: <Grid/>,
     children: []
    },
    {id: 7,
     url: '#',
     title: 'Invoice',
     icon: <FileText/>,
     children: [
         {id: 1,
          url: '/admin/invoice/list',
          title: 'List',
          icon: <Circle/>
        },
         {id: 2,
          url: '/admin/invoice/preview',
          title: 'Preview',
          icon: <Circle/>
        },
         {id: 3,
          url: '/admin/invoice/edit',
          title: 'Edit',
          icon: <Circle/>
        },
         {id: 4,
          url: '/admin/invoice/add',
          title: 'Add',
          icon: <Circle/>
        },
     ]
    },
    {id: 8,
     url: '/admin/kanban',
     title: 'Kanban',
     icon: <Home/>,
    },
]