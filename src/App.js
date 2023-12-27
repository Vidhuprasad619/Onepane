import './App.css';
import CopilotExtendBoxOne from './components/CopilotExtendBoxOne';
import CopilotExtendBoxTwo from './components/CopilotExtendBoxTwo';
import CopilotMsgBox from './components/CopilotMsgBox';
import Header from './components/Header';
import TypingBox from './components/TypingBox';
import YourMsgBox from './components/YourMsgBox';

function App() {
  return (
    <div className="App">
      <Header/>
      <YourMsgBox msg={"Show me the critical incident with open status for nexus Saas application"}/>
      <CopilotMsgBox rply={"Here are the currently open incidents from Nexus SaaS:"}/>
      <CopilotExtendBoxOne/>
      <YourMsgBox msg={"What are the latest updates to associated resources?"}/>
      <CopilotMsgBox rply={"See the data below for recent changes to related resources"}/>
      <CopilotExtendBoxTwo/>
      <TypingBox/>
    </div>
  );
}

export default App;
