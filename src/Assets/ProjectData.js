import Audit from './ProjectPic/Audit.jpg';
import IGA from './ProjectPic/IGA.png';
import Helperman from './ProjectPic/Helperman.jpg';
import SPFX from './ProjectPic/SPFX.png';
export const ProjectData =[
    {
        Name : "Audit Application",
        Description : "It is SharePoint based audit application.Audit can be created, approved ,monitored .Data charts, Reports are also available",
        LongDescription:"Audit Owner create the Audit and assign Auditor, Auditee, Co-Auditor.After audit become approve, auditor create the report and raise NC(Nonconformity) ,Observations and OFI(opportunity of improvement) and assign them to Action Owners. After that action owners takes action and after a long flow they are closed by Auditor. ",
        Frontend : "Javascript, jQuery , Chart.js for Reports , HTML ,CSS , BootStarp, JsPdf",
        Backend : " SharePoint Lists and Document Libraries",
        Photo : Audit
    },
    {
        Name : "IGA Toolkit",
        Description : "Integrated tool with Oracle BI.Used to bulk upload/fetch , governance and security controls",
        LongDescription:"Iga Toolkit is used to auomate all the process of Oeacle Bi.User Creation, Role Assignment , Reports all can be done from IGA, It also have SOD(segrigation of duties) analysis.In future it will be integreted withn SAP and Azure.",
        Frontend : "React , Redux , TypeScript , CSS , Docker",
        Backend : "Node , Sql, Sequelize, Express , Docker ",
        Photo : IGA
    },
    {
        Name : "Intranet Portal",
        Description : "Built an intranet portal on SharePoint Modern View using SPFX with combination of 16-17 web parts and extensions.",
        LongDescription:"Basically it is intranet portal of our client created on sharepoint modern view.Have many webparts like , news ,lunch menu, Documents, Birthday & Anniversary etc.",
        Frontend : "React , TypeScript , Css",
        Backend : "SharePoint Lists and Document Libraries",
        Photo : SPFX
    },
    {
        Name : "Helperman",
        Description : "Bot, used to apply leave, approve leave, show leave balance and any profile related details and answer the company or policy related queries",
        LongDescription:"Helperman is integrated with HRMS application by rest api . And the bot is hosted in teams . SO user can do HR releated works through the bot like Leave apply , Check leave balance , Approve leave request, Resignation , approval , check apprisal status. And user can also ask any HR related query from bot.",
        Frontend : "It is hosted on teams",
        Backend : ".Net , Microsoft Bot Framework , LUIS(Language Understanding Intelligent Service), Rest Api , QNA cognitive Service",
        Photo : Helperman
    },
];