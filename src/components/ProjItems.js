import Plebecite from "./images/1stproject.png";
import Calculator from "./images/calucu.png";
import Todo from "./images/todo.png";
import Transcribe from "./images/transcribe.png";
import HRIS from "./images/HRIS.png";
import Unslpash from "./images/unslpash.png";
import SecretMessage from "./images/sm.png";
import MultipleApp from "./images/multipleapp.jpg";
export const projItems = [
  {
    title: " Philippine Plebecite",
    link: "https://leindonlemoh.github.io/",
    image: Plebecite,
    more: false,
    content:
      "An online poll for government proposals. Users can express their opinion through votes.",
    tools: "HTML, CSS",
  },
  {
    title: "Calculator",
    link: "https://leindonlemoh.github.io/leindonlemohcalculator.github.io/",
    image: Calculator,
    more: false,
    content: "A web-based calculator using eval().",
    tools: "HTML, CSS, JavaScript",
  },
  {
    title: "Todo List",
    link: "https://task-todo-eight.vercel.app/",
    image: Todo,
    more: false,
    content: "A task creator. all entries will be saved in Local Storage",
    tools: "React.js, CSS, MUI, Bootstrap",
  },
  {
    title: "HRIS",
    link: "https://hris-psi.vercel.app/",
    image: HRIS,
    more: true,
    content:
      "This project is currently unfinished and is no longer being actively developed from my previous job.",
    tools: "Next.Js TypeScript Tailwind MongoDb",
    details: `
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
  },
  {
    title: 'Transcribe "Polishing"',
    link: "https://transcribe-ivory.vercel.app/",
    image: Transcribe,
    more: true,
    content:
      "A transcriber app, Creating record of conversations,meeting or speech.",
    tools: "Next.Js TypeScript Tailwind MongoDb",
    details: `
        Play an recorded Audio to transcribe <br/>
        You can set some shortcut keys to play/pause or assign speaker <br/>
        Note: still working on some bugs<br/>
        `,
  },
  {
    title: 'Photo Gallery - Unsplash API"',
    link: "https://unsplash-api-three.vercel.app/",
    image: Unslpash,
    more: false,
    content:
      "Photo Explorer is a web app that allows users to search and browse high-quality images using the Unsplash API",
    tools: "Next.Js TypeScript Sass Axios Unsplash-API",
  },
  {
    title: "Secret Message",
    link: "https://secret-message-inky-three.vercel.app/",
    image: SecretMessage,
    more: false,
    content:
      "An app where you can post a secret message, add friend who'm you can share each other secret message.",
    tools: "Next.Js Tailwind PostgreSql Supabase useSwr",
  },
  {
    title: "Multiple Activities App",
    link: "https://multiple-activities.vercel.app/",
    image: MultipleApp,
    more: true,
    content:
      "An App where you can create your own todo list app, save photos, a Food Review app, a Pokemon review app and a markdown list app",
    tools:
      "Next.Js TypeScript Tailwind PostgreSql Supabase react-markdown useSwr",
    details: `
        To-do List App <br/>
        Google Drive App (lite) photos only <br/>
        Food Review App<br/>
        Pokemon Review App <br/>
        MarkDown Note List App <br/>
        `,
  },
];
