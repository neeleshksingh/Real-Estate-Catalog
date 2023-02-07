import { useState } from 'react'
import './style/addnew.css'


const AddnewProp = () =>{
    const [activeSection, setActiveSection] = useState('Basic Info');
    const sections = ['Basic Info', 'Property Details', 'General Info', 'Location Info'];
  
    const handleSectionChange = (section) => {
      setActiveSection(section);
    };
  
    return (
      <div className='new-nav'>
        <h1 className='font'>ADD NEW PROPERTY</h1>
        <div className='addnew-nav font'>
          <nav>
            <ul>
              {sections.map((section) => (
                <li key={section}>
                  <button
                    className='nav-btn'
                    style={{
                      color: activeSection === section ? 'white' : '#AAAAAA',
                      backgroundColor: activeSection === section ? '#6AB4F8' : '',
                    }}
                    onClick={() => handleSectionChange(section)}
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    );
  };
export default AddnewProp