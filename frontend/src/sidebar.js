import './components/style/sidebar.css'
export const Sidebar=()=>{
    return(<div className='main-sidebar'>
        <h1 className='Logo'><b>Logo</b></h1>
        <div className='line'>
            <div>
            <img src={require('./components/img/home-icon.png')} alt='home'/>
            </div>
            <div>
                Property
            </div>
        </div >
        <div className='line'>
            <div>
            <img src="https://img.icons8.com/small/16/null/download--v1.png"/>
            </div>
            <div>
                Assistent
            </div>
        </div >
        <div className='line'>
            <div>
            <img src="https://img.icons8.com/small/16/null/appointment-reminders--v1.png"/>
            </div>
            <div>
                Received  Interest
            </div>
        </div>
        <div className='line'>
            <div>
            <img src="https://img.icons8.com/small/16/null/external.png"/>
            </div>
            <div>
                Sent Interest
            </div>
        </div>
        <div className='line'>
            <div>
            <img src="https://img.icons8.com/small/16/null/visible.png"/>
            </div>
            <div>
                Property Views
            </div>
        </div>
        <div className='line'>
            <div>
            <img src="https://img.icons8.com/small/16/null/price-tag.png"/>
            </div>
            <div>
                Tariff Plan
            </div>
        </div>
        
        
        
    </div>)
}