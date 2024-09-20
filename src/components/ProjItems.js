import Plebecite from "./images/1stproject.png";
import Calculator from "./images/calucu.png";
import Todo from "./images/todo.png";
import Transcribe from "./images/transcribe.png"
import HRIS from "./images/HRIS.png"
export const projItems = [
    {title:" Philippine Plebecite",
        link:"https://leindonlemoh.github.io/",
        image: Plebecite,
        more:false,
        content:"An online poll for government proposals. Users can express their opinion through votes.",
        tools:"HTML, CSS"
    },{
        title:"Calculator",
        link:"https://leindonlemoh.github.io/leindonlemohcalculator.github.io/",
        image:Calculator,
        more:false,
        content:"A web-based calculator using eval().",
        tools:"HTML, CSS, JavaScript",
    },{
        title:"Todo List",
        link:"https://task-todo-eight.vercel.app/",
        image:Todo,
        more:false,
        content:"A task creator. all entries will be saved in Local Storage",
        tools:"React.js, CSS, MUI, Bootstrap"
    },
    {
        title:"HRIS",
        link:"https://hris-psi.vercel.app/",
        image:HRIS,
        more:true,
        content:"This project is currently unfinished and is no longer being actively developed from my previous job.",
        tools:"Next.Js TypeScript Tailwind MongoDb",
        details:  `
      Credentials:<br/>
      <strong>
      Employee:
      </strong><br/>
      - Username: sample<br/>
      - Password: 12345<br/>
      <strong>
      Admin:
      </strong>
      <br/>
      - Username: admin<br/>
      - Password: 12345<br/><br/>

                     <strong>
                       Pages/Tabs I Contributed
                     </strong><br/>
      Employee Tabs:<br/>
      - Designed the Navbar with tab switching and developed the employee page UI.<br/>
      - Profile<br/><br/>

      Admin Tabs:<br/>
      - Dashboard<br/>
      - Profile<br/>
      - Job Post<br/>
      - Employee<br/>
      - Users<br/>
      - Media Library<br/>
      - Teams<br/>
    `,
    }
    ,{
        title:'Transcribe "Ongoing"',
        link:"https://transcribe-ivory.vercel.app/",
        image:Transcribe,
        more:false,
        content:"A transcriber app, Creating record of conversations,meeting or speech",
        tools:"Next.Js TypeScript Tailwind MongoDb",
        
    }
]