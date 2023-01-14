
export const projectService = {
    getTop3,
    getById,
    query,

  }

const projects = [
    {
        id:"p101",
        title: "Portobello",
        description:"A pixel perfect Trello clone app",
        technologies:"Vue.js, Socket IO, MongoDB",
        link:"https://portobello-backend-production.up.railway.app/#/",
        expanding:"Portobello is a project management tool that allows users to create boards to organize tasks and projects. Each board has multiple lists and cards to represent tasks, ideas, etc. Users can add labels, comments, attachments, due dates, assign members, and create checklists within cards to track progress. Additionally, users can set up notifications for card activities such as comments or due date reminders. It also includes a new feature 'Smart Checklist' supported by OpenAI bot."
    },
    {
        id:"p102",
        title: "Appsus",
        description:"Exclusive 3 in 1 app that contains Emailing system, Notes & Book store",
        technologies:"Vue.js",
        link:"https://matanamzaleg.github.io/appSus/#/",
        expanding:"A 3-in-1 app that combines email, notes, and a bookstore. The app allows users to manage their email, create notes, and browse books within the same platform. The email feature includes standard functionality such as composing, replying, and turning email into notes. while the notes feature includes the ability to add images, videos, and files to notes. The bookstore feature allows users to browse and search for books, view book details and write reviews."
    },
    {
        id:"p103",
        title: "Mister-burger",
        description:"A restaurant alike app, that simulates menu and order selecting",
        technologies:"Angular",
        expanding:"A restaurant-like app that simulates menu and order selection allows users to view and order food from a digital menu. Users are able to add items to their cart, customize their orders and pay for their order directly through the app. Such apps are widely used by restaurants and food delivery services to provide customers with a convenient way to order food."
    },
    {
        id:"p104",
        title: "Mister-bitcoin",
        description:"A Bitcoin transaction app where you can log in and transfer BTC to your contacts",
        technologies:"React",
        link:"https://matanamzaleg.github.io/mister-bitcoin/#/signup",
        expanding:"A Bitcoin transaction app allows users to transfer bitcoin. The app allow users to log in and transfer BTC to their contacts and also view the BTC states. Users are able to view their bitcoin balance, transaction history, and exchange rate. The app also have features such as add and search for contacts, and view the current state of the Bitcoin network and the exchange rate. It is a convenient way for people to manage their Bitcoin transactions and stay up to date with the latest developments in the Bitcoin market."

    },
    {
        id:"p105",
        title: "My-Blackjack",
        description:"A BlackJack game app",
        technologies:"Vanilla web, JavaScript, Bootstrap",
        link:"https://matanamzaleg.github.io/My-Black-Jack/",
        expanding:"Blackjack game app is a digital version of the popular card game. It is designed to emulate the experience of playing the game in a casino setting. The rules and gameplay are similar to traditional blackjack, where the goal is to have a hand value of 21 or as close to 21 as possible without going over, or 'busting'. The app allows players to place bets and make decisions based on their cards, such as hitting, standing, or splitting."
    },
    {
        id:"p106",
        title: "Meme-generator",
        description:"A canvas supported app, where you can make your own memes",
        technologies:"Html, Css, JavaScript, Canvas",
        link:"https://matanamzaleg.github.io/Meme-Gen/",
        expanding:"A mobile application that allows users to create their own memes by combining images, text, and captions. The app has a library of popular images and templates that users can choose from. It allows users to add text captions to the image, and users can also adjust the font, size, and positioning of the text. Once the meme is generated, users can share them on social media platforms, or save it on their device."
    },
    {
        id:"p107",
        title: "MineSweeper",
        description:"The nostalgic MineSweeper game",
        technologies:"Html, Css, JavaScript",
        link:"https://matanamzaleg.github.io/MineSweeper/",
        expanding:"Minesweeper is a classic puzzle game that can be played on a computer or mobile device. The game typically consists of a grid of squares, with some squares hiding 'mines' and others not. The player's goal is to clear the board by revealing the squares without mines, while avoiding the ones that contain mines. The app includes a variety of difficulty levels, such as beginner, intermediate, and expert, each with a different size and number of mines. The app also includes all kind of helps that may assist you at the time needed."
    },
]

function getTop3(){
    return projects.slice(0,3)
}

function getById(projId){
    return projects.find(proj => proj.id === projId)
}

function query(){
    return projects
}